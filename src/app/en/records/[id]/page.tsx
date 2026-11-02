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
