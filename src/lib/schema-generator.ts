import { PrimaryDocument } from '@/data/primary-documents';

export function generateArchivalDocumentJsonLd(doc: PrimaryDocument) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ArchiveComponent',
    'name': doc.title,
    'identifier': doc.archiveRef,
    'dateCreated': doc.date,
    'description': doc.excerpt,
    'holdingArchive': {
      '@type': 'ArchiveOrganization',
      'name': doc.repository,
    },
    'materialExtent': 'Archival folio manuscript',
    'inLanguage': 'en',
  };
}
