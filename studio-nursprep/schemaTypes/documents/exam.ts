import {defineArrayMember, defineField, defineType} from 'sanity'

// One document per certification page (/certifications/{code}/).
// Field names mirror the site's templates (src/certifications/certification.njk),
// so the 11ty adapter can pass most data straight through.

const heading = defineField({
  name: 'heading',
  type: 'string',
  validation: (rule) => rule.required(),
})
const prose = defineField({name: 'prose', title: 'Text', type: 'proseText'})

export const examType = defineType({
  name: 'exam',
  title: 'Exam page',
  type: 'document',
  groups: [
    {name: 'basics', title: 'Basics', default: true},
    {name: 'hero', title: 'Hero'},
    {name: 'content', title: 'Page sections'},
    {name: 'cta', title: 'CTA & related'},
    {name: 'catalog', title: 'Catalog & links'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    // ---------------------------------------------------------------- Basics
    defineField({
      name: 'code',
      type: 'string',
      group: 'basics',
      description: 'Certification acronym, e.g. TCRN. Sets the page URL (/certifications/tcrn/) — avoid changing it.',
      validation: (rule) =>
        rule.required().regex(/^[A-Z0-9-]+$/, {name: 'uppercase letters, numbers and dashes'}),
    }),
    defineField({name: 'name', type: 'string', group: 'basics', validation: (rule) => rule.required()}),
    defineField({
      name: 'body',
      title: 'Issuing body',
      type: 'string',
      group: 'basics',
      description: 'Short form, e.g. BCEN.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      group: 'basics',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'updated',
      type: 'string',
      group: 'basics',
      description: 'Content review month, YYYY-MM (internal).',
      validation: (rule) => rule.regex(/^\d{4}-\d{2}$/, {name: 'YYYY-MM'}),
    }),
    defineField({
      name: 'updatedLabel',
      type: 'string',
      group: 'basics',
      description: 'Shown as "Updated …" in the hero. Leave empty to show "April 2026".',
    }),

    // ------------------------------------------------------------------ Hero
    defineField({name: 'lede', type: 'inlineText', group: 'hero', validation: (rule) => rule.required()}),
    defineField({
      name: 'heroPills',
      title: 'Hero pills',
      type: 'array',
      of: [defineArrayMember({type: 'keyValue'})],
      group: 'hero',
    }),
    defineField({
      name: 'ataGlance',
      title: 'At a glance card',
      type: 'array',
      of: [defineArrayMember({type: 'keyValue'})],
      group: 'hero',
    }),
    defineField({name: 'heroCardFoot', title: 'At a glance footer', type: 'string', group: 'hero'}),
    defineField({
      name: 'cardImage',
      title: 'Cover card image',
      type: 'image',
      group: 'hero',
      description: '1200×630 cert card shown in the Overview section.',
    }),
    defineField({
      name: 'sections',
      title: 'Table of contents',
      type: 'array',
      group: 'hero',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tocItem',
          fields: [
            defineField({name: 'id', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
          ],
          preview: {select: {title: 'label', subtitle: 'id'}},
        }),
      ],
    }),

    // --------------------------------------------------------- Page sections
    defineField({
      name: 'overview',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        prose,
        defineField({
          name: 'stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'stat',
              fields: [
                defineField({name: 'n', title: 'Number', type: 'string'}),
                defineField({name: 'l', title: 'Label', type: 'string'}),
                defineField({name: 'sub', title: 'Sub-label', type: 'string'}),
              ],
              preview: {select: {title: 'n', subtitle: 'l'}},
            }),
          ],
        }),
        defineField({name: 'factBox', type: 'factBox'}),
        defineField({
          name: 'coverImageLabel',
          title: 'Cover image caption',
          type: 'string',
          description: 'Caption and alt text for the cover card image.',
        }),
      ],
    }),
    defineField({
      name: 'eligibility',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        prose,
        defineField({name: 'candidateHeading', type: 'string'}),
        defineField({
          name: 'candidateList',
          type: 'proseText',
          description: 'Each paragraph becomes one bullet on the page.',
        }),
      ],
    }),
    defineField({
      name: 'blueprint',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        defineField({
          name: 'prose',
          title: 'Text',
          type: 'proseText',
          description: 'First paragraph shows above the chart, the rest below it.',
        }),
        defineField({
          name: 'domains',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'domain',
              fields: [
                defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'weight', type: 'number'}),
              ],
              preview: {select: {title: 'label', subtitle: 'weight'}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'cost',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        prose,
        defineField({name: 'rows', title: 'Fee table', type: 'array', of: [defineArrayMember({type: 'keyValue'})]}),
        defineField({name: 'factBox', type: 'factBox'}),
        defineField({name: 'renewalHeading', type: 'string'}),
        defineField({name: 'renewalProse', title: 'Renewal text', type: 'proseText'}),
      ],
    }),
    defineField({
      name: 'passrate',
      title: 'Pass rate',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        prose,
        defineField({
          name: 'rows',
          title: 'Chart rows',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'passRow',
              fields: [
                defineField({name: 'year', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'pct', title: 'Pass %', type: 'number', validation: (rule) => rule.required().min(0).max(100)}),
              ],
              preview: {select: {title: 'year', subtitle: 'pct'}},
            }),
          ],
        }),
        defineField({name: 'target', title: 'Target %', type: 'number', description: 'Defaults to 80.'}),
        defineField({name: 'footnote', type: 'string'}),
        defineField({name: 'factBox', type: 'factBox'}),
      ],
    }),
    defineField({
      name: 'plan',
      title: 'Study plan',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        prose,
        defineField({name: 'planSubtitle', type: 'string', description: 'Defaults to "Practice question load ramps through the final weeks."'}),
        defineField({
          name: 'weeks',
          type: 'array',
          validation: (rule) => rule.min(1),
          of: [
            defineArrayMember({
              type: 'object',
              name: 'week',
              fields: [
                defineField({name: 'n', title: 'Week', type: 'number', validation: (rule) => rule.required()}),
                defineField({name: 'focus', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'qs', title: 'Questions', type: 'number', validation: (rule) => rule.required().min(0)}),
              ],
              preview: {select: {title: 'focus', n: 'n'}, prepare: ({title, n}) => ({title: `Week ${n}`, subtitle: title})},
            }),
          ],
        }),
        defineField({name: 'tipsHeading', type: 'string'}),
        defineField({
          name: 'tips',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'tip',
              fields: [
                defineField({name: 'kicker', type: 'string'}),
                defineField({name: 'text', type: 'text', rows: 3}),
              ],
              preview: {select: {title: 'kicker', subtitle: 'text'}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sample',
      title: 'Sample question',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        prose,
        defineField({
          name: 'q',
          title: 'Question',
          type: 'object',
          fields: [
            defineField({name: 'scenario', type: 'text', rows: 4}),
            defineField({name: 'stem', type: 'text', rows: 2}),
            defineField({name: 'options', type: 'array', of: [defineArrayMember({type: 'string'})], validation: (rule) => rule.min(2).max(6)}),
            defineField({
              name: 'correct',
              title: 'Correct option',
              type: 'number',
              description: '0 = first option (A), 1 = B, and so on.',
              validation: (rule) =>
                rule.required().integer().min(0).custom((value, context) => {
                  const options = (context.parent as {options?: string[]} | undefined)?.options ?? []
                  return value === undefined || value < options.length
                    ? true
                    : `Must point at one of the ${options.length} options.`
                }),
            }),
            defineField({name: 'rationale', type: 'inlineText'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'keyterms',
      title: 'Key terms',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        prose,
        defineField({
          name: 'rows',
          title: 'Terms',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'keyterm',
              fields: [
                defineField({name: 'term', type: 'string'}),
                defineField({name: 'defn', title: 'Definition', type: 'text', rows: 2}),
                defineField({name: 'domain', type: 'string'}),
              ],
              preview: {select: {title: 'term', subtitle: 'domain'}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'compare',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        prose,
        defineField({
          name: 'rows',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'compareRow',
              fields: [
                defineField({name: 'row', title: 'Credential', type: 'string'}),
                defineField({name: 'highlight', type: 'boolean', description: 'Highlight this exam\'s own row.'}),
                defineField({name: 'body', type: 'string'}),
                defineField({name: 'scope', type: 'string'}),
                defineField({name: 'who', title: 'Best fit', type: 'string'}),
              ],
              preview: {select: {title: 'row', subtitle: 'body'}},
            }),
          ],
        }),
        defineField({name: 'closingProse', title: 'Closing paragraph', type: 'inlineText'}),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        defineField({
          name: 'items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'faqItem',
              fields: [
                defineField({name: 'q', title: 'Question', type: 'string', validation: (rule) => rule.required()}),
                defineField({
                  name: 'a',
                  title: 'Answer',
                  type: 'text',
                  rows: 3,
                  description: 'Plain text — also used in Google FAQ structured data.',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {select: {title: 'q', subtitle: 'a'}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sources',
      type: 'object',
      group: 'content',
      options: {collapsible: true, collapsed: true},
      fields: [
        heading,
        prose,
        defineField({name: 'list', title: 'Sources', type: 'array', of: [defineArrayMember({type: 'string'})]}),
      ],
    }),
    defineField({
      name: 'sidebarFactBox',
      title: 'Sidebar fact box',
      type: 'factBox',
      group: 'content',
      description: 'Optional. Leave empty to show the default "You can test anywhere" box.',
    }),

    // ------------------------------------------------------- CTA & related
    defineField({name: 'ctaHeading', title: 'CTA heading', type: 'string', group: 'cta'}),
    defineField({name: 'ctaProse', title: 'CTA text', type: 'text', rows: 2, group: 'cta'}),
    defineField({
      name: 'ctaPrimary',
      title: 'Primary button',
      type: 'link',
      group: 'cta',
      description: 'Links to the BoardCerts practice test automatically when one exists; this URL is the fallback.',
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary button',
      type: 'link',
      group: 'cta',
      description: 'Links to the BoardCerts question bank automatically when one exists; this URL is the fallback.',
    }),
    defineField({
      name: 'related',
      title: 'Related reading',
      type: 'array',
      group: 'cta',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'relatedCard',
          fields: [
            defineField({name: 'kicker', type: 'string'}),
            defineField({name: 'tag', type: 'string'}),
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'blurb', type: 'text', rows: 2}),
            defineField({name: 'href', title: 'URL', type: 'string'}),
            defineField({name: 'bg', title: 'Card colour', type: 'string', description: 'Hex colour, e.g. #163bf3.'}),
          ],
          preview: {select: {title: 'title', subtitle: 'kicker'}},
        }),
      ],
    }),

    // ---------------------------------------------------- Catalog & links
    defineField({
      name: 'questions',
      title: 'Exam questions (catalog)',
      type: 'number',
      group: 'catalog',
      description: 'Item count shown in the catalog. Leave empty if not applicable.',
    }),
    defineField({
      name: 'blurb',
      title: 'Catalog blurb',
      type: 'text',
      rows: 2,
      group: 'catalog',
      description: 'One-line description on the homepage card.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'catalogOrder',
      title: 'Catalog order',
      type: 'number',
      group: 'catalog',
      description: 'Position within its category on the homepage (lower first).',
      validation: (rule) => rule.required().integer(),
    }),
    defineField({
      name: 'boardcertsSlug',
      title: 'BoardCerts exam slug',
      type: 'string',
      group: 'catalog',
      description:
        'Slug used in boardcerts.com/exams/{slug}/… links, e.g. tcrn. Leave empty if BoardCerts has no page for this exam.',
      validation: (rule) => rule.regex(/^[a-z0-9-]+$/, {name: 'lowercase slug'}),
    }),
    defineField({
      name: 'hasPracticeTest',
      title: 'BoardCerts has a practice test',
      type: 'boolean',
      group: 'catalog',
      initialValue: true,
      description: 'Off = only the question bank is linked.',
    }),

    // ------------------------------------------------------------------ SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          validation: (rule) => [rule.required(), rule.max(65).warning('Over 65 characters may be truncated in Google.')],
        }),
        defineField({
          name: 'description',
          type: 'text',
          rows: 3,
          validation: (rule) => [rule.required(), rule.max(155).warning('Over 155 characters may be truncated in Google.')],
        }),
        defineField({name: 'ogTitle', title: 'Social title', type: 'string'}),
        defineField({name: 'ogDescription', title: 'Social description', type: 'text', rows: 2}),
      ],
    }),
  ],
  orderings: [{title: 'Code', name: 'codeAsc', by: [{field: 'code', direction: 'asc'}]}],
  preview: {
    select: {code: 'code', name: 'name', media: 'cardImage'},
    prepare: ({code, name, media}) => ({title: code, subtitle: name, media}),
  },
})
