
import { Metadata } from 'next';

export async function generateMetadata({ params }: RecordPageProps): Promise<Metadata> {
  const doc = primaryDocuments[params.id];
  if (!doc) return { title: 'Record Not Found · The Imperial Audit' };
  return {
    title: `${doc.title} · Archival Record · The Imperial Audit`,
    description: doc.quote.slice(0, 160),
    openGraph: {
      title: doc.title,
      description: doc.quote.slice(0, 160),
      type: 'article',
    },
  };
}
import { primaryDocuments } from '@/data/primary-documents';
import { RecordDetailView } from '@/components/RecordDetailView';

export function generateStaticParams() {
  return Object.keys(primaryDocuments).map((id) => ({
    id,
  }));
}

export default function EnglishRecordDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <RecordDetailView id={params.id} lang="en" />;
}
