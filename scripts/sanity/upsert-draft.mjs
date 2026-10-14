#!/usr/bin/env node
// Page-builder pipeline, Stage 4b: upload one exam as an UNPUBLISHED Sanity draft.
//
//   SANITY_WRITE_TOKEN=… node scripts/sanity/upsert-draft.mjs --json /tmp/nursprep-draft-ocn.json \
//     [--image /tmp/ocn-card.png] [--dry-run] [--force]
//
// The JSON uses the legacy data-file shape (scripts/sanity/legacy/exams/tcrn.js)
// plus `cat` (category id, e.g. "critical") and `catalog: {questions, blurb}`;
// optional `boardcertsSlug` / `hasPracticeTest`.
//
// Draft rules:
//   - exam already published as P   → writes drafts.P (refuses if drafts.P exists: a human may be editing; --force overrides)
//   - only an unpublished draft     → replaces that draft (pipeline retry)
//   - brand new                     → creates drafts.<random id>
// Nothing is ever published by this script; a human publishes in Studio.

import {createReadStream, readFileSync} from 'node:fs'
import {randomUUID} from 'node:crypto'
import {parseArgs} from 'node:util'
import {createClient} from '@sanity/client'
import {examToDoc} from './exam-doc.mjs'
import {SANITY} from '../../src/_lib/sanity.mjs'

const {values: args} = parseArgs({
  options: {json: {type: 'string'}, image: {type: 'string'}, 'dry-run': {type: 'boolean'}, force: {type: 'boolean'}},
})
if (!args.json) throw new Error('--json <path> is required')
const exam = JSON.parse(readFileSync(args.json, 'utf8'))

// ---- Validate before writing (API writes bypass Studio validation)
function validate(e) {
  const errors = []
  const need = (cond, msg) => cond || errors.push(msg)
  need(/^[A-Z0-9-]+$/.test(e.code || ''), 'code must be uppercase letters/digits/dashes')
  for (const f of ['name', 'body', 'cat', 'lede', 'heroCardFoot', 'ctaHeading']) need(e[f], `${f} is required`)
  need(e.catalog?.blurb, 'catalog.blurb is required')
  need(e.seo?.title, 'seo.title is required')
  need(e.seo?.description, 'seo.description is required')
  // Length limits warn (same as Studio) rather than discard a whole researched page
  if (e.seo?.title?.length > 65) console.warn(`⚠ seo.title is ${e.seo.title.length} chars (aim for ≤ 65)`)
  if (e.seo?.description?.length > 155) console.warn(`⚠ seo.description is ${e.seo.description.length} chars (aim for ≤ 155)`)
  need(e.sections?.length === 11, 'sections must list the 11 TOC entries')
  for (const s of ['overview', 'eligibility', 'blueprint', 'cost', 'passrate', 'plan', 'sample', 'keyterms', 'compare', 'faq', 'sources'])
    need(e[s]?.heading, `${s}.heading is required`)
  need(e.plan?.weeks?.length, 'plan.weeks must not be empty')
  const q = e.sample?.q
  need(q?.options?.length >= 2 && Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.options.length, 'sample.q.correct must index into sample.q.options')
  need(e.faq?.items?.length, 'faq.items must not be empty')
  need(Array.isArray(e.keyterms?.rows), 'keyterms.rows must be an array of {term, defn, domain}')
  need(Array.isArray(e.sources?.list), 'sources.list must be an array of strings')
  return errors
}
const errors = validate(exam)
if (errors.length) {
  console.error(`✗ ${exam.code || args.json} failed validation:\n  - ${errors.join('\n  - ')}`)
  process.exit(1)
}

const token = process.env.SANITY_WRITE_TOKEN
if (!token && !args['dry-run']) throw new Error('SANITY_WRITE_TOKEN is not set')
const client = createClient({...SANITY, useCdn: false, token, perspective: 'raw'})

// ---- Resolve ids: this exam, its category, and exams it links to
const all = await client.fetch('*[_type == "exam"]{_id, code, catalogOrder}')
const publishedIdOf = (code) => all.find((d) => d.code === code && !d._id.startsWith('drafts.'))?._id
const draftOnlyIdOf = (code) => all.find((d) => d.code === code && d._id.startsWith('drafts.'))?._id.replace(/^drafts\./, '')

const categoryId = await client.fetch('*[_type == "category" && id == $id && !(_id in path("drafts.**"))][0]._id', {id: exam.cat})
if (!categoryId) throw new Error(`Unknown category "${exam.cat}"`)

const resolveLink = (href) => {
  const code = /^\/certifications\/([a-z0-9-]+)\/$/.exec(href)?.[1]?.toUpperCase()
  const published = publishedIdOf(code)
  if (published) return published
  const draft = draftOnlyIdOf(code)
  // A link to a not-yet-published exam must be weak until that exam is published
  if (draft) return {_type: 'reference', _ref: draft, _weak: true, _strengthenOnPublish: {type: 'exam'}}
  throw new Error(`Link to unknown exam: ${href}`)
}

const publishedId = publishedIdOf(exam.code)
let draftId
if (publishedId) {
  draftId = `drafts.${publishedId}`
  if (all.some((d) => d._id === draftId) && !args.force)
    throw new Error(`${draftId} already exists — someone may be editing ${exam.code} in Studio. Re-run with --force to replace it.`)
} else {
  draftId = all.find((d) => d.code === exam.code)?._id ?? `drafts.${randomUUID()}`
}

const existingOrder = all.find((d) => d._id === publishedId)?.catalogOrder
const catalogOrder = existingOrder ?? Math.max(-1, ...all.map((d) => d.catalogOrder ?? -1)) + 1

if (args['dry-run']) {
  const doc = examToDoc(exam, {resolveLink, categoryId, catalog: {...exam.catalog, catalogOrder}})
  console.log(`✓ ${exam.code} valid. Would write ${draftId} (${Object.keys(doc).length} fields, catalogOrder ${catalogOrder}). Dry run — nothing written.`)
  process.exit(0)
}

// New image if given; otherwise keep the one already on the draft/published doc (e.g. on a retry)
let imageAssetId
if (args.image) {
  const asset = await client.assets.upload('image', createReadStream(args.image), {filename: `${exam.code.toLowerCase()}-card.png`})
  imageAssetId = asset._id
} else {
  imageAssetId = await client.fetch('*[_id in [$draft, $published]][0].cardImage.asset._ref', {draft: draftId, published: publishedId ?? ''})
}

const doc = examToDoc(exam, {
  resolveLink,
  categoryId,
  imageAssetId,
  catalog: {...exam.catalog, catalogOrder},
  boardcerts: {slug: exam.boardcertsSlug, hasPracticeTest: exam.hasPracticeTest},
})
await client.createOrReplace({...doc, _id: draftId})

const studioId = draftId.replace(/^drafts\./, '')
console.log(`✓ ${exam.code} saved as draft ${draftId}`)
console.log(`  Review: https://nursprep.sanity.studio/structure/exam;${studioId}`)
console.log(`  Preview after the staging build: https://staging.nursprep.pages.dev/certifications/${exam.code.toLowerCase()}/`)
console.log(`DRAFT_ID=${draftId}`)
