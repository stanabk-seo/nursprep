// Offline check: every HTML string that the templates print with `| safe`
// must survive HTML -> Portable Text (convert.mjs) -> HTML (src/_lib/sanity.mjs).
// Compares exact bytes and, where those differ, the jsdom-normalized DOM.
// Run: node scripts/sanity/roundtrip-test.mjs

import {createRequire} from 'node:module'
import {readdirSync} from 'node:fs'
import {fileURLToPath} from 'node:url'
import {JSDOM} from 'jsdom'
import {htmlToBlocks} from './convert.mjs'
import {ptToInline, ptToStrings} from '../../src/_lib/sanity.mjs'

const require = createRequire(import.meta.url)
const dir = fileURLToPath(new URL('./legacy/exams/', import.meta.url))
const exams = readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => require(dir + f))

// Fake ids: href "/certifications/pccn/" <-> id "exam-PCCN"
const resolveLink = (href) => {
  const m = /^\/certifications\/([a-z0-9-]+)\/$/.exec(href)
  if (!m) throw new Error(`Unexpected link href ${href}`)
  return `exam-${m[1].toUpperCase()}`
}
const codeById = new Map(exams.map((e) => [`exam-${e.code}`, e.code]))
const norm = (html) => JSDOM.fragment(html).firstChild ? new JSDOM(`<body>${html}</body>`).window.document.body.innerHTML : ''

// [label, value, kind] for every `| safe` field. kind: "list" = string array field, "inline" = single string.
function* richFields(e) {
  const lists = {
    'overview.prose': e.overview?.prose, 'eligibility.prose': e.eligibility?.prose,
    'eligibility.candidateList': e.eligibility?.candidateList, 'blueprint.prose': e.blueprint?.prose,
    'cost.prose': e.cost?.prose, 'cost.renewalProse': e.cost?.renewalProse, 'passrate.prose': e.passrate?.prose,
    'plan.prose': e.plan?.prose, 'sample.prose': e.sample?.prose, 'keyterms.prose': e.keyterms?.prose,
    'compare.prose': e.compare?.prose, 'sources.prose': e.sources?.prose,
  }
  for (const [label, arr] of Object.entries(lists)) for (const [i, s] of (arr || []).entries()) yield [`${label}[${i}]`, s, 'list']
  const inlines = {
    lede: e.lede, 'compare.closingProse': e.compare?.closingProse, 'sample.q.rationale': e.sample?.q?.rationale,
    'overview.factBox': e.overview?.factBox?.html, 'cost.factBox': e.cost?.factBox?.html,
    'passrate.factBox': e.passrate?.factBox?.html, sidebarFactBox: e.sidebarFactBox?.html,
  }
  for (const [label, s] of Object.entries(inlines)) if (s != null) yield [label, s, 'inline']
}

let total = 0, exact = 0, domEqual = 0
const failures = []
for (const e of exams) {
  for (const [label, html, kind] of richFields(e)) {
    total++
    const blocks = htmlToBlocks(html, {resolveLink})
    // A list-field string must come back as exactly one string (one paragraph, or one <ul>)
    const out = kind === 'list' ? ptToStrings(blocks, codeById) : [ptToInline(blocks, codeById)]
    if (out.length !== 1) { failures.push(`${e.code} ${label}: produced ${out.length} strings`); continue }
    if (out[0] === html) exact++
    else if (norm(out[0]) === norm(html)) domEqual++
    else failures.push(`${e.code} ${label}\n   in : ${html}\n   out: ${out[0]}`)
  }
}

console.log(`strings: ${total} | byte-identical: ${exact} | DOM-equal: ${domEqual} | FAILED: ${failures.length}`)
failures.slice(0, 15).forEach((f) => console.log(' ✗', f))
process.exit(failures.length ? 1 : 0)
