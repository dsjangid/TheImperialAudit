import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { dossiersList } from '@/data/dossiers';

export function generateStaticParams() {
  return dossiersList.map((d) => ({
    slug: d.id,
  }));
}

export default function DossierDetailPageRu({
  params,
}: {
  params: { slug: string };
}) {
  const dossier = dossiersList.find((d) => d.id === params.slug);
  if (!dossier) return notFound();

  return (
    <>
      <Navbar lang="ru" />

      <article className="bg-bg text-text" vt-update="auto">
        {/* Header */}
        <header className="px-[6vw] pt-24 pb-16 max-w-[1400px] mx-auto">
          <Link
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-text/60 hover:text-text underline-offset-4 hover:underline transition-colors"
            href="/chapters/dossiers"
          >
            ← НАЗАД К РЕЕСТРУ · 03
          </Link>

          <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-text/60 mt-12">
            ДЕЛО № 03 / {dossier.fileNo}
          </p>

          <div className="grid grid-cols-12 gap-6 mt-6">
            <div className="col-span-12 lg:col-span-9">
              <h1
                className="font-serif text-[clamp(56px,8vw,120px)] leading-[0.95] tracking-[-0.015em] font-black"
              >
                {dossier.name.ru}
              </h1>
              <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-text/70 mt-6">
                {dossier.role.ru}
              </p>
            </div>

            <aside className="col-span-12 lg:col-span-3 lg:pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mb-6">
                — МЕТАДАННЫЕ ДЕЛА
              </p>
              <dl className="space-y-3 font-mono text-[12px] leading-[1.8] text-text/85">
                <div>
                  <dt className="font-serif italic text-[13px] text-text/55">Фигурант</dt>
                  <dd>{dossier.fullName.ru}</dd>
                </div>
                <div>
                  <dt className="font-serif italic text-[13px] text-text/55">Год рождения</dt>
                  <dd>{dossier.born.ru}</dd>
                </div>
                <div>
                  <dt className="font-serif italic text-[13px] text-text/55">В должности</dt>
                  <dd>{dossier.inOffice.ru}</dd>
                </div>
                <div>
                  <dt className="font-serif italic text-[13px] text-text/55">Дело открыто</dt>
                  <dd>{dossier.fileOpened}</dd>
                </div>
                <div>
                  <dt className="font-serif italic text-[13px] text-text/55">Обновлено</dt>
                  <dd>{dossier.lastUpdated}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </header>

        {/* Hero Portrait */}
        <section className="px-[6vw] py-16 max-w-[1400px] mx-auto">
          <div className="relative w-full max-w-[720px] mx-auto aspect-[4/3] bg-text/[0.03] border border-text/15">
            <img
              alt={dossier.name.ru}
              className="w-full h-full object-cover"
              src={dossier.image}
            />
          </div>
        </section>

        {/* Biography & Findings */}
        <section className="px-[6vw] py-24 max-w-[1400px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mb-6">
            — БИОГРАФИЯ · КОНТЕКСТ · АКТИВЫ
          </p>
          <h2
            className="font-serif text-[clamp(32px,6vw,80px)] leading-[1.0] font-black"
          >
            КТО ЭТО
          </h2>
          <p className="font-serif italic text-[clamp(18px,1.6vw,20px)] text-text/65 mt-8 max-w-[60ch]">
            {dossier.summary.ru}
          </p>

          <div className="mt-16 space-y-8 max-w-[68ch]">
            {dossier.paragraphs.ru.map((p, idx) => (
              <p key={idx} className="font-serif text-[clamp(17px,1.5vw,19px)] leading-[1.7] text-text/90">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Related Cases */}
        <section className="px-[6vw] py-24 max-w-[1400px] mx-auto border-t border-text/20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text/40 mb-16 text-center">
            — ВСЕ ФИГУРАНТЫ
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dossiersList
              .filter((d) => d.id !== dossier.id)
              .slice(0, 3)
              .map((d) => (
                <Link
                  key={d.id}
                  href={'/chapters/dossiers/' + d.id}
                  className="p-6 border border-text/10 hover:border-accent transition-colors block group"
                  data-cursor="accent"
                >
                  <span className="font-mono text-[10px] text-accent uppercase">ДЕЛО № 03 / {d.fileNo}</span>
                  <h4 className="font-serif text-[20px] font-bold mt-2 group-hover:text-accent transition-colors">
                    {d.name.ru}
                  </h4>
                  <p className="font-mono text-[11px] text-text/50 mt-1 uppercase truncate">{d.role.ru}</p>
                </Link>
              ))}
          </div>
        </section>
      </article>

      <PageCornerBadges fileNo={dossier.fileNo} chapterTitle="ДЕЛО" pageNum="024" totalPages="047" />
    </>
  );
}
