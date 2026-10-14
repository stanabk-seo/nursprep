import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',            // stored as _type: "category" on every document
  title: 'Category',           // what editors see in Studio
  type: 'document',            // a standalone, publishable document
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Shown on homepage filter chips, the footer index and exam breadcrumbs.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'Short lowercase key, e.g. "critical". Used in filters and /#group-{id} links, so avoid changing it.',
      validation: (rule) =>
        rule.required().regex(/^[a-z0-9-]+$/, {name: 'lowercase letters, numbers and dashes'}),
    }),
    defineField({
      name: 'accent',
      title: 'Accent colour',
      type: 'string',
      description: 'CSS variable used for this category\'s colour, e.g. var(--accent-critical). Developer field.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first on the homepage and footer.',
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {title: 'Display order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'label', subtitle: 'id'},   // how each item looks in the document list
  },
})