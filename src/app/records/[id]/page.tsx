import { Metadata } from 'next';
import { primaryDocuments } from '@/data/primary-documents';
import { RecordDetailView } from '@/components/RecordDetailView';

interface RecordPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: RecordPageProps): Promise<Metadata> {
  const doc = primaryDocuments[params.id];
  if (!doc) return { title: 'Record Not Found · The Imperial Audit' };
  return {
    title: `${doc.title} · Archival Record · The Imperial Audit`,
    description: doc.excerpt.slice(0, 160),
    openGraph: {
      title: doc.title,
      description: doc.excerpt.slice(0, 160),
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return Object.keys(primaryDocuments).map((id) => ({
    id,
  }));
}

export default function RootRecordDetailPage({ params }: RecordPageProps) {
  return <RecordDetailView id={params.id} lang="en" />;
}
