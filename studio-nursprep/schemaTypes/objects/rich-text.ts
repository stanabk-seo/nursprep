import {defineArrayMember, defineField, defineType} from 'sanity'

// Inline formatting shared by both rich-text types. Every link in the
// migrated content points at another exam page, so links are references
// (they survive URL changes) rather than free-typed URLs.
const marks = {
  decorators: [
    {title: 'Bold', value: 'strong'},
    {title: 'Italic', value: 'em'},
  ],
  annotations: [
    defineArrayMember({
      name: 'internalLink',
      title: 'Link to exam page',
      type: 'object',
      fields: [
        defineField({
          name: 'reference',
          title: 'Exam',
          type: 'reference',
          to: [{type: 'exam'}],
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
}

// Multi-paragraph rich text. On the site each paragraph renders as its own
// <p> (or <li> for bullet lists like "You are a strong candidate if…").
export const proseTextType = defineType({
  name: 'proseText',
  title: 'Rich text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks,
    }),
  ],
})

// Single-paragraph rich text (lede, fact boxes, closing lines, rationale).
// The template already wraps it in its own element, so only one block is allowed.
export const inlineTextType = defineType({
  name: 'inlineText',
  title: 'Rich text (one paragraph)',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [],
      marks,
    }),
  ],
  validation: (rule) => rule.max(1).error('Use a single paragraph here.'),
})
