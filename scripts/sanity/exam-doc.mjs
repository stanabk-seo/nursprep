// Maps an exam object in the original 11ty data shape (see
// scripts/sanity/legacy/exams/tcrn.js) to a Sanity `exam` document.
// Shared by the one-time migration and the page-builder pipeline's draft upload.

import {randomUUID} from 'node:crypto'
import {htmlToBlocks, stripTags} from './convert.mjs'

const key = () => randomUUID().replace(/-/g, '').slice(0, 12)
export const ref = (_ref) => ({_type: 'reference', _ref})
const keyed = (arr, map = (x) => x) => (arr?.length ? arr.map((x) => ({_key: key(), ...map(x)})) : undefined)

// Remove undefined/null so documents don't carry empty fields
export const clean = (v) => JSON.parse(JSON.stringify(v, (_k, x) => (x === null ? undefined : x)))

/**
 * @param {object} e  exam in the legacy data-file shape
 * @param {object} ctx
 * @param {(href: string) => string|object} ctx.resolveLink  "/certifications/x/" → exam _id (or a reference object)
 * @param {string} ctx.categoryId  _id of the category document
 * @param {string} [ctx.imageAssetId]  uploaded card image asset _id
 * @param {{questions?: number|null, blurb: string, catalogOrder: number}} ctx.catalog
 * @param {{slug?: string, hasPracticeTest?: boolean}} [ctx.boardcerts]
 */
export function examToDoc(e, {resolveLink, categoryId, imageAssetId, catalog, boardcerts = {}}) {
  const blocks = (strings) => (strings?.length ? strings.flatMap((s) => htmlToBlocks(s, {resolveLink})) : undefined)
  const inline = (s) => (s ? htmlToBlocks(s, {resolveLink}) : undefined)
  const factBox = (b) => b && {_type: 'factBox', tone: b.tone, title: b.title, text: inline(b.html)}
  const kv = (r) => ({_type: 'keyValue', k: r.k, v: r.v, highlight: r.highlight})

  return clean({
    _type: 'exam',
    code: e.code,
    name: e.name,
    body: e.body,
    category: ref(categoryId),
    updated: e.updated,
    updatedLabel: e.updatedLabel,
    seo: e.seo,
    lede: inline(e.lede),
    heroPills: keyed(e.heroPills, kv),
    ataGlance: keyed(e.ataGlance, kv),
    heroCardFoot: e.heroCardFoot,
    cardImage: imageAssetId ? {_type: 'image', asset: ref(imageAssetId)} : undefined,
    sections: keyed(e.sections, (s) => ({_type: 'tocItem', id: s.id, label: s.label})),
    overview: e.overview && {
      heading: e.overview.heading,
      prose: blocks(e.overview.prose),
      stats: keyed(e.overview.stats, (s) => ({_type: 'stat', ...s})),
      factBox: factBox(e.overview.factBox),
      coverImageLabel: e.overview.coverImageLabel,
    },
    eligibility: e.eligibility && {
      heading: e.eligibility.heading,
      prose: blocks(e.eligibility.prose),
      candidateHeading: e.eligibility.candidateHeading,
      candidateList: blocks(e.eligibility.candidateList),
    },
    blueprint: e.blueprint && {
      heading: e.blueprint.heading,
      prose: blocks(e.blueprint.prose),
      domains: keyed(e.blueprint.domains, (d) => ({_type: 'domain', label: d.label, weight: d.weight})),
    },
    cost: e.cost && {
      heading: e.cost.heading,
      prose: blocks(e.cost.prose),
      rows: keyed(e.cost.rows, kv),
      factBox: factBox(e.cost.factBox),
      renewalHeading: e.cost.renewalHeading,
      renewalProse: blocks(e.cost.renewalProse),
    },
    passrate: e.passrate && {
      heading: e.passrate.heading,
      prose: blocks(e.passrate.prose),
      rows: keyed(e.passrate.rows, (r) => ({_type: 'passRow', year: r.year, pct: r.pct})),
      target: e.passrate.target,
      footnote: e.passrate.footnote,
      factBox: factBox(e.passrate.factBox),
    },
    plan: e.plan && {
      heading: e.plan.heading,
      prose: blocks(e.plan.prose),
      planSubtitle: e.plan.planSubtitle,
      weeks: keyed(e.plan.weeks, (w) => ({_type: 'week', n: w.n, focus: w.focus, qs: w.qs})),
      tipsHeading: e.plan.tipsHeading,
      tips: keyed(e.plan.tips, (t) => ({_type: 'tip', kicker: t.kicker, text: stripTags(t.text)})),
    },
    sample: e.sample && {
      heading: e.sample.heading,
      prose: blocks(e.sample.prose),
      q: {
        scenario: e.sample.q.scenario,
        stem: e.sample.q.stem,
        options: e.sample.q.options,
        correct: e.sample.q.correct,
        rationale: inline(e.sample.q.rationale),
      },
    },
    keyterms: e.keyterms && {
      heading: e.keyterms.heading,
      prose: blocks(e.keyterms.prose),
      rows: keyed(e.keyterms.rows, (r) => ({_type: 'keyterm', term: r.term, defn: r.defn, domain: r.domain})),
    },
    compare: e.compare && {
      heading: e.compare.heading,
      prose: blocks(e.compare.prose),
      rows: keyed(e.compare.rows, (r) => ({_type: 'compareRow', ...r})),
      closingProse: inline(e.compare.closingProse),
    },
    faq: e.faq && {heading: e.faq.heading, items: keyed(e.faq.items, (i) => ({_type: 'faqItem', q: i.q, a: i.a}))},
    sources: e.sources && {
      heading: e.sources.heading,
      prose: blocks(e.sources.prose),
      list: e.sources.list?.map(stripTags),
    },
    sidebarFactBox: factBox(e.sidebarFactBox),
    ctaHeading: e.ctaHeading,
    ctaProse: e.ctaProse,
    ctaPrimary: e.ctaPrimary && {_type: 'link', label: e.ctaPrimary.label, url: e.ctaPrimary.href},
    ctaSecondary: e.ctaSecondary && {_type: 'link', label: e.ctaSecondary.label, url: e.ctaSecondary.href},
    related: keyed(e.related, (r) => ({_type: 'relatedCard', ...r})),
    questions: catalog.questions,
    blurb: catalog.blurb,
    catalogOrder: catalog.catalogOrder,
    boardcertsSlug: boardcerts.slug,
    hasPracticeTest: boardcerts.hasPracticeTest ?? Boolean(boardcerts.slug),
  })
}
