import {defineField, defineType} from 'sanity'

// Coloured callout box ("factbox-info" / "-success" / "-warn" on the site).
export const factBoxType = defineType({
  name: 'factBox',
  title: 'Fact box',
  type: 'object',
  fields: [
    defineField({
      name: 'tone',
      type: 'string',
      options: {
        list: [
          {title: 'Info (blue)', value: 'info'},
          {title: 'Success (green)', value: 'success'},
          {title: 'Warning (amber)', value: 'warn'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'info',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'text', type: 'inlineText', validation: (rule) => rule.required()}),
  ],
  preview: {select: {title: 'title', subtitle: 'tone'}},
})

// Label/value row: hero pills, "At a glance" card, cost table.
export const keyValueType = defineType({
  name: 'keyValue',
  title: 'Label / value',
  type: 'object',
  fields: [
    defineField({name: 'k', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'v', title: 'Value', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'highlight',
      type: 'boolean',
      description: 'Highlights this row (used in the cost table).',
    }),
  ],
  preview: {select: {title: 'k', subtitle: 'v'}},
})

// Button/link with a label. URL may be absolute, relative (/path) or "#".
export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (rule) =>
        rule.required().custom((value) =>
          !value || /^(https?:\/\/|\/|#)/.test(value)
            ? true
            : 'Start with https://, / or #',
        ),
    }),
  ],
  preview: {select: {title: 'label', subtitle: 'url'}},
})
