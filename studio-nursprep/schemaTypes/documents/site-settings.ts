import {defineArrayMember, defineField, defineType} from 'sanity'

// Singleton (fixed _id "siteSettings"). Site-wide values that are not
// editorial per page. The production URL and analytics IDs stay in code.
export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  groups: [
    {name: 'general', title: 'General', default: true},
    {name: 'navigation', title: 'Nav & footer'},
    {name: 'boardcerts', title: 'BoardCerts tracking'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Homepage title',
      type: 'string',
      group: 'general',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Homepage meta description',
      type: 'text',
      rows: 3,
      group: 'general',
      description: 'Use {count} for the number of certifications, e.g. "…for {count} nursing certifications".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stats',
      title: 'Hero trust bar',
      type: 'object',
      group: 'general',
      fields: [
        defineField({name: 'questions', title: 'Practice questions', type: 'string'}),
        defineField({name: 'passRate', title: 'First-attempt pass rate', type: 'string'}),
        defineField({name: 'nursesCertified', title: 'Nurses certified', type: 'string'}),
      ],
    }),
    defineField({
      name: 'featuredChips',
      title: 'Popular exams (hero chips)',
      type: 'array',
      group: 'general',
      of: [defineArrayMember({type: 'reference', to: [{type: 'exam'}]})],
    }),
    defineField({name: 'signIn', title: 'Nav: Sign in button', type: 'link', group: 'navigation'}),
    defineField({name: 'signUp', title: 'Nav: primary button', type: 'link', group: 'navigation'}),
    defineField({name: 'footerCtaPrimary', title: 'Footer CTA: primary button', type: 'link', group: 'navigation'}),
    defineField({name: 'footerCtaSecondary', title: 'Footer CTA: secondary button', type: 'link', group: 'navigation'}),
    defineField({
      name: 'footerLinks',
      title: 'Footer bottom links',
      type: 'array',
      group: 'navigation',
      of: [defineArrayMember({type: 'link'})],
    }),
    defineField({
      name: 'boardcertsUtm',
      title: 'UTM tags on exam-page links to BoardCerts',
      type: 'object',
      group: 'boardcerts',
      description:
        'Applied to the practice test / diagnostic / question bank buttons. utm_content (which button) is set automatically.',
      fields: [
        defineField({name: 'source', title: 'utm_source', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'medium', title: 'utm_medium', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'campaign', title: 'utm_campaign', type: 'string', validation: (rule) => rule.required()}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Site settings'})},
})
