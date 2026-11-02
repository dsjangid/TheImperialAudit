import { PrimaryDocument } from '@/data/primary-documents';

export function generateArchivalDocumentJsonLd(doc: PrimaryDocument) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ArchiveComponent',
    'name': doc.title,
    'identifier': doc.shelfmark,
    'dateCreated': doc.date,
    'description': doc.quote,
    'holdingArchive': {
      '@type': 'ArchiveOrganization',
      'name': doc.repository,
    },
    'materialExtent': 'Archival folio manuscript',
    'inLanguage': 'en',
  };
}
