import type {StructureResolver} from 'sanity/structure'

// Studio sidebar: Site settings opens the single settings document directly;
// exams and categories are ordinary lists.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('exam')
        .title('Exam pages')
        .child(
          S.documentTypeList('exam')
            .title('Exam pages')
            .defaultOrdering([{field: 'code', direction: 'asc'}]),
        ),
      S.documentTypeListItem('category')
        .title('Categories')
        .child(
          S.documentTypeList('category')
            .title('Categories')
            .defaultOrdering([{field: 'order', direction: 'asc'}]),
        ),
    ])

export const SINGLETON_TYPES = new Set(['siteSettings'])
