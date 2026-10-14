// Sanity → 11ty adapter.
//
// One GROQ request per build fetches every exam, category and the site
// settings. The adapter reshapes that content into exactly the objects the
// Nunjucks templates already consume (site, certs, certsByCategory, examsList),
// converting Portable Text back into the HTML strings the templates print with
// `| safe`.
//
// Env:
//   SANITY_PERSPECTIVE  "published" (default) or "drafts" (staging preview)
//   SANITY_READ_TOKEN   required when SANITY_PERSPECTIVE=drafts

import {createClient} from '@sanity/client'
import {toHTML} from '@portabletext/to-html'

export const SANITY = {projectId: '4u3xakge', dataset: 'production', apiVersion: '2025-02-19'}
const MIN_EXAMS = 40 // a misconfigured dataset/perspective returns [] instead of failing

// ---------------------------------------------------------------- Portable Text

// Only & < > need escaping in text content. The library default also turns
// ' and " into entities, which changes the output byte-for-byte for no gain.
export const esc = (s) => (s == null ? s : String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'))

const ptComponents = (codeById) => ({
  escapeHTML: esc,
  block: ({children}) => children, // templates supply the wrapping <p>/<li>/<dd>
  marks: {
    internalLink: ({children, value}) => {
      const code = codeById.get(value?.reference?._ref)
      return code ? `<a href="/certifications/${code.toLowerCase()}/">${children}</a>` : children
    },
  },
})

const opts = (codeById) => ({
  components: ptComponents(codeById),
  onMissingComponent: (message) => {
    throw new Error(`Portable Text: ${message}`)
  },
})

const hasText = (block) => block.children?.some((c) => c.text)

/** Multi-paragraph field → array of HTML strings (one per paragraph; a run of bullets → one "<ul>…</ul>"). */
export function ptToStrings(blocks, codeById) {
  if (!Array.isArray(blocks)) return []
  const out = []
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    if (block.listItem) {
      const run = []
      while (i < blocks.length && blocks[i].listItem) run.push(blocks[i++])
      i--
      out.push(toHTML(run, opts(codeById)))
    } else if (hasText(block)) {
      out.push(toHTML(block, opts(codeById)))
    }
  }
  return out
}

/** One-paragraph field → HTML string, or undefined when empty (keeps `{% if %}` checks falsy). */
export function ptToInline(blocks, codeById) {
  const [first] = ptToStrings(blocks, codeById)
  return first || undefined
}

// ----------------------------------------------------------------- Shaping

// GROQ returns null for missing fields; the templates (and filters like
// arcSegments) were written against plain JS objects where missing = undefined.
function dropNulls(value) {
  if (Array.isArray(value)) return value.map(dropNulls)
  if (value && typeof value === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(value)) if (v !== null) out[k] = dropNulls(v)
    return out
  }
  return value
}

const factBox = (box, codeById) => box && {tone: box.tone, title: box.title, html: ptToInline(box.text, codeById)}

function boardcertsLinks(exam, utm) {
  const slug = exam.boardcertsSlug
  if (!slug) return {}
  const link = (path, content, hash = '') =>
    `https://www.boardcerts.com/exams/${slug}/${slug}-${path}?${new URLSearchParams({
      utm_source: utm.source,
      utm_medium: utm.medium,
      utm_campaign: utm.campaign,
      utm_content: content,
    })}${hash}`
  const hasTest = exam.hasPracticeTest !== false
  return {
    practiceTest: hasTest ? link('practice-test', 'hero_cta') : undefined,
    diagnostic: hasTest ? link('practice-test', 'cta_diagnostic') : undefined,
    questionBank: link('question-bank', 'cta_question_bank', '#buy-now'),
  }
}

function shapeExam(doc, codeById, utm) {
  const strings = (b) => ptToStrings(b, codeById)
  const inline = (b) => ptToInline(b, codeById)
  const e = dropNulls(doc)
  const section = (s, extra) => s && {...s, prose: strings(s.prose), ...extra}
  return {
    ...e,
    cat: e.category?.id,
    catLabel: e.category?.label,
    lede: inline(e.lede),
    ataGlance: e.ataGlance?.map((r) => ({...r, v: esc(r.v)})),
    overview: section(e.overview, {factBox: factBox(e.overview?.factBox, codeById)}),
    eligibility: section(e.eligibility, {candidateList: strings(e.eligibility?.candidateList)}),
    blueprint: section(e.blueprint),
    cost: section(e.cost, {factBox: factBox(e.cost?.factBox, codeById), renewalProse: strings(e.cost?.renewalProse)}),
    passrate: section(e.passrate, {factBox: factBox(e.passrate?.factBox, codeById)}),
    plan: section(e.plan),
    sample: section(e.sample, {
      q: e.sample?.q && {
        ...e.sample.q,
        scenario: esc(e.sample.q.scenario),
        stem: esc(e.sample.q.stem),
        rationale: inline(e.sample.q.rationale),
      },
    }),
    keyterms: section(e.keyterms),
    compare: section(e.compare, {closingProse: inline(e.compare?.closingProse)}),
    sources: section(e.sources),
    sidebarFactBox: factBox(e.sidebarFactBox, codeById),
    // Stored as Sanity `link` objects {label, url}; the template reads .href
    ctaPrimary: e.ctaPrimary && {label: e.ctaPrimary.label, href: e.ctaPrimary.url},
    ctaSecondary: e.ctaSecondary && {label: e.ctaSecondary.label, href: e.ctaSecondary.url},
    boardcerts: boardcertsLinks(e, utm),
  }
}

// Fields an exam must have for its page to render. Drafts may be half-written.
function missingFields(e) {
  const required = {
    code: e.code, name: e.name, body: e.body, category: e.category?.id, blurb: e.blurb,
    'seo.title': e.seo?.title, 'seo.description': e.seo?.description,
    'plan.weeks': e.plan?.weeks?.length, 'sample.q': e.sample?.q?.options?.length,
  }
  return Object.entries(required).filter(([, v]) => !v).map(([k]) => k)
}

// ------------------------------------------------------------------- Fetch

const QUERY = `{
  "exams": *[_type == "exam"]{..., "category": category->{id, label}, "cardImageUrl": cardImage.asset->url},
  "categories": *[_type == "category"] | order(order asc){id, label, accent},
  "settings": *[_type == "siteSettings"][0]{..., "featuredChips": featuredChips[]->code}
}`

export async function fetchContent({perspective = process.env.SANITY_PERSPECTIVE || 'published', token = process.env.SANITY_READ_TOKEN} = {}) {
  if (perspective === 'drafts' && !token) throw new Error('SANITY_PERSPECTIVE=drafts requires SANITY_READ_TOKEN')
  const client = createClient({...SANITY, useCdn: false, perspective, token})
  return client.fetch(QUERY)
}

/** Raw query result → the global data objects the templates use. */
export function buildSiteData({exams, categories, settings}, {perspective = 'published', siteUrl, now = new Date()}) {
  if (!settings) throw new Error('Sanity: siteSettings document is missing')
  const drafts = perspective === 'drafts'

  const valid = []
  for (const doc of exams) {
    const missing = missingFields(doc)
    if (!missing.length) valid.push(doc)
    else if (drafts) console.warn(`[sanity] skipping incomplete draft ${doc.code || doc._id}: missing ${missing.join(', ')}`)
    else throw new Error(`Sanity: exam ${doc.code || doc._id} is missing ${missing.join(', ')}`)
  }
  if (!drafts && valid.length < MIN_EXAMS) throw new Error(`Sanity: only ${valid.length} exams returned (expected ${MIN_EXAMS}+). Wrong dataset or perspective?`)

  const codeById = new Map(valid.map((d) => [d._id, d.code]))
  const utm = settings.boardcertsUtm
  const examsList = valid
    .map((d) => shapeExam(d, codeById, utm))
    .sort((a, b) => a.code.localeCompare(b.code))

  // Homepage catalog: same order as the old hand-maintained certs.js
  const certs = [...examsList]
    .sort((a, b) => a.catalogOrder - b.catalogOrder)
    .map((e) => ({code: e.code, name: e.name, body: e.body, cat: e.cat, questions: e.questions ?? null, blurb: e.blurb}))

  const certsByCategory = categories
    .map((cat) => ({...cat, certs: certs.filter((c) => c.cat === cat.id)}))
    .filter((cat) => cat.certs.length > 0)

  const site = {
    title: settings.title,
    description: settings.description.replaceAll('{count}', certs.length),
    url: siteUrl,
    author: 'NursPrep',
    year: now.getFullYear(),
    stats: settings.stats,
    featuredChips: (settings.featuredChips || []).filter(Boolean),
    nav: {signIn: settings.signIn, signUp: settings.signUp},
    footer: {ctaPrimary: settings.footerCtaPrimary, ctaSecondary: settings.footerCtaSecondary, links: settings.footerLinks || []},
  }

  return {site, certs, categories, certsByCategory, examsList}
}
