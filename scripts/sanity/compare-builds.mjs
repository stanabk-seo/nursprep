// Compares two built sites page by page after DOM normalization.
// Usage: node scripts/sanity/compare-builds.mjs <dirA> <dirB> <outDir>
// Writes normalized copies to <outDir>/a and <outDir>/b (one tag per line) so
// `diff -r` shows only real content/markup differences, not entity spelling.

import {mkdirSync, readFileSync, readdirSync, statSync, writeFileSync} from 'node:fs'
import {join, relative, dirname} from 'node:path'
import {JSDOM} from 'jsdom'

const [dirA, dirB, outDir] = process.argv.slice(2)
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]))
const pages = (d) => walk(d).filter((f) => /\.(html|xml|txt)$/.test(f)).map((f) => relative(d, f)).sort()

function normalize(file) {
  const src = readFileSync(file, 'utf8')
  if (!file.endsWith('.html')) return src.replace(/\s+\n/g, '\n')
  const doc = new JSDOM(src).window.document
  doc.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
    s.textContent = JSON.stringify(JSON.parse(s.textContent), null, 1)
  })
  return doc.documentElement.outerHTML
    .replace(/>\s+</g, '><')
    .replace(/></g, '>\n<')
}

const a = pages(dirA), b = pages(dirB)
const onlyA = a.filter((p) => !b.includes(p)), onlyB = b.filter((p) => !a.includes(p))
let same = 0
const changed = []
for (const p of a.filter((p) => b.includes(p))) {
  const na = normalize(join(dirA, p)), nb = normalize(join(dirB, p))
  if (na === nb) { same++; continue }
  changed.push(p)
  for (const [side, text] of [['a', na], ['b', nb]]) {
    const out = join(outDir, side, p)
    mkdirSync(dirname(out), {recursive: true})
    writeFileSync(out, text)
  }
}
console.log(`pages A=${a.length} B=${b.length} | identical=${same} | changed=${changed.length}`)
if (onlyA.length) console.log('only in A:', onlyA)
if (onlyB.length) console.log('only in B:', onlyB)
console.log(changed.join('\n'))
