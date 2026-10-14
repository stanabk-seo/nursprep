// HTML string -> Portable Text blocks, for the small HTML subset used in the
// exam content: <strong>, <em>, <a href="/certifications/x/">, <ul><li>.
//
// Hand-rolled instead of @portabletext/html because that library drops
// whitespace-only text between inline tags ("<em>a</em> <strong>b</strong>"
// becomes "ab"), which would silently corrupt prose. Any tag outside the
// subset throws, so unexpected markup is caught instead of lost.

import {randomUUID} from 'node:crypto'
import {JSDOM} from 'jsdom'

const key = () => randomUUID().replace(/-/g, '').slice(0, 12)
const DECORATORS = {strong: 'strong', b: 'strong', em: 'em', i: 'em'}

/**
 * @param {string} html
 * @param {{resolveLink: (href: string) => string}} opts  href -> referenced exam _id
 * @returns {object[]} Portable Text blocks
 */
export function htmlToBlocks(html, {resolveLink}) {
  const fragment = JSDOM.fragment(html)
  const blocks = []
  let current = null // block collecting top-level inline content

  const newBlock = (extra = {}) => ({_type: 'block', _key: key(), style: 'normal', markDefs: [], children: [], ...extra})
  const flush = () => {
    if (current && current.children.some((c) => c.text !== '')) blocks.push(finish(current))
    current = null
  }

  // Append inline content of `node` to `block`, carrying active marks.
  const inline = (node, block, marks) => {
    if (node.nodeType === 3) {
      block.children.push({_type: 'span', _key: key(), text: node.textContent, marks: [...marks]})
      return
    }
    if (node.nodeType !== 1) return
    const tag = node.tagName.toLowerCase()
    if (DECORATORS[tag]) {
      node.childNodes.forEach((c) => inline(c, block, [...marks, DECORATORS[tag]]))
    } else if (tag === 'a') {
      const href = node.getAttribute('href')
      const markDef = {_type: 'internalLink', _key: key(), reference: {_type: 'reference', _ref: resolveLink(href)}}
      block.markDefs.push(markDef)
      node.childNodes.forEach((c) => inline(c, block, [...marks, markDef._key]))
    } else {
      throw new Error(`Unsupported inline tag <${tag}> in: ${html.slice(0, 80)}`)
    }
  }

  fragment.childNodes.forEach((node) => {
    const tag = node.nodeType === 1 ? node.tagName.toLowerCase() : null
    if (tag === 'ul') {
      flush()
      node.childNodes.forEach((li) => {
        if (li.nodeType === 3 && !li.textContent.trim()) return
        if (li.nodeType !== 1 || li.tagName.toLowerCase() !== 'li') throw new Error(`Unexpected <ul> child in: ${html.slice(0, 80)}`)
        const block = newBlock({listItem: 'bullet', level: 1})
        li.childNodes.forEach((c) => inline(c, block, []))
        blocks.push(finish(block))
      })
    } else {
      current ??= newBlock()
      inline(node, current, [])
    }
  })
  flush()
  return blocks
}

// Merge adjacent spans with identical marks; drop empty spans.
function finish(block) {
  const merged = []
  for (const span of block.children) {
    if (span.text === '') continue
    const prev = merged[merged.length - 1]
    if (prev && prev.marks.join() === span.marks.join()) prev.text += span.text
    else merged.push(span)
  }
  if (!merged.length) merged.push({_type: 'span', _key: key(), text: '', marks: []})
  return {...block, children: merged}
}

/** Plain-text fields that wrongly contain tags today (rendered escaped): keep the text only. */
export function stripTags(s) {
  return /<\/?(strong|em|b|i)>/.test(s) ? JSDOM.fragment(s).textContent : s
}
