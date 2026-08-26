import DossierDetailPage, { generateStaticParams as getParams } from '@/app/en/chapters/dossiers/[slug]/page';

export function generateStaticParams() {
  return getParams();
}

export default function ChaptersDossierDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <DossierDetailPage params={params} />;
}
