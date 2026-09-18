import { dossiersList } from '@/data/dossiers';
import { DossierDetailView } from '@/components/DossierDetailView';

export function generateStaticParams() {
  return dossiersList.map((d) => ({
    slug: d.id,
  }));
}

export default function ChaptersDossierDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <DossierDetailView slug={params.slug} lang="en" />;
}
