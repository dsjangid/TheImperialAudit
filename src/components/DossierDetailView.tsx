import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { ResearchStatusFooter } from '@/components/ResearchStatusFooter';
import { dossiersList } from '@/data/dossiers';

export function DossierDetailView({
  slug,
  lang = 'en',
}: {
  slug: string;
  lang?: 'en' | 'ru';
}) {
  const dossier = dossiersList.find((d) => d.id === slug);
  if (!dossier) return notFound();

  const backLink = lang === 'en' ? '/en/chapters/dossiers' : '/chapters/dossiers';
  const relatedBase = lang === 'en' ? '/en/chapters/dossiers/' : '/chapters/dossiers/';

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col justify-between">
      <Navbar lang={lang} />

      <article className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32 pb-24 flex-1">
        {/* Header */}
        <header className="pb-16 border-b border-[#2A2A2A]">
          <Link
            className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#A3A39D] hover:text-[#C62828] underline-offset-4 hover:underline transition-colors"
            href={backLink}
          >
            ← BACK TO REGISTRY · CHAPTER 03
          </Link>

          <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#C62828] mt-8 font-semibold">
            PRIMARY DOSSIER № 03 / {dossier.fileNo}
          </p>

          <div className="grid grid-cols-12 gap-8 mt-4 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-serif text-[#F5F5F0] text-[clamp(40px,7.5vw,96px)] leading-[0.95] tracking-[-0.015em] font-black uppercase">
                {dossier.name[lang] || dossier.name.en}
              </h1>
              <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#B5B5AF] mt-4 font-semibold">
                {dossier.role[lang] || dossier.role.en}
              </p>
            </div>

            <aside className="col-span-12 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#2A2A2A] lg:pl-8 pt-4 lg:pt-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3A39D] mb-4 font-bold">
                ARCHIVAL METADATA
              </p>
              <dl className="space-y-3 font-mono text-[12px] leading-[1.8] text-[#D6D6D0]">
                <div>
                  <dt className="font-serif italic text-[12px] text-[#A3A39D]">Full Name / Title</dt>
                  <dd className="font-semibold text-[#F5F5F0]">{dossier.fullName[lang] || dossier.fullName.en}</dd>
                </div>
                <div>
                  <dt className="font-serif italic text-[12px] text-[#A3A39D]">Born / Origins</dt>
                  <dd>{dossier.born[lang] || dossier.born.en}</dd>
                </div>
                <div>
                  <dt className="font-serif italic text-[12px] text-[#A3A39D]">Tenure / Active Period</dt>
                  <dd>{dossier.inOffice[lang] || dossier.inOffice.en}</dd>
                </div>
                <div className="flex gap-6 pt-2 border-t border-[#2A2A2A]">
                  <div>
                    <dt className="font-serif italic text-[11px] text-[#A3A39D]">File Opened</dt>
                    <dd className="text-[#E53935]">{dossier.fileOpened}</dd>
                  </div>
                  <div>
                    <dt className="font-serif italic text-[11px] text-[#A3A39D]">Last Updated</dt>
                    <dd>{dossier.lastUpdated}</dd>
                  </div>
                </div>
              </dl>
            </aside>
          </div>
        </header>

        {/* Hero Portrait & Summary Grid */}
        <section className="py-16 border-b border-[#2A2A2A]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 flex items-center justify-center">
              <img
                alt={dossier.name[lang] || dossier.name.en}
                className="w-full h-auto max-h-[440px] object-contain block"
                src={dossier.image}
                style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
              />
            </div>

            <div className="md:col-span-7 space-y-6">
              <div className="border-l-2 border-[#C62828] pl-4 space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C62828] font-bold block mb-1">
                  FORENSIC SYNOPSIS
                </span>
                <p className="font-serif italic text-[18px] text-[#D6D6D0] leading-relaxed">
                  {dossier.summary[lang] || dossier.summary.en}
                </p>
              </div>

              {/* Official Income / Investigated Assets (if present) */}
              {dossier.officialIncome && (
                <div className="border-t border-[#2A2A2A] pt-4 font-mono text-[12px] space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block">
                    RECORDED INCOME &amp; PENSION
                  </span>
                  <p className="text-[#E53935] font-semibold">{dossier.officialIncome[lang] || dossier.officialIncome.en}</p>
                </div>
              )}

              {dossier.investigatedAssets && (
                <div className="border-t border-[#2A2A2A] pt-4 font-mono text-[12px] space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block">
                    INVESTIGATED ESTATES &amp; TRANSFERS
                  </span>
                  <ul className="list-disc pl-5 space-y-1 text-[#D6D6D0]">
                    {(dossier.investigatedAssets[lang] || dossier.investigatedAssets.en).map((asset, i) => (
                      <li key={i}>{asset}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Biography & Findings */}
        <section className="py-16 border-b border-[#2A2A2A]">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#C62828] font-semibold mb-6">
            PRIMARY INVESTIGATION &amp; FINDINGS
          </p>
          <div className="space-y-6 max-w-[80ch] font-serif text-[17px] sm:text-[18px] leading-[1.8] text-[#D6D6D0]">
            {(dossier.paragraphs[lang] || dossier.paragraphs.en).map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* Related Subjects Directory */}
        <section className="py-16">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-[#A3A39D] mb-8">
            RELATED DOSSIERS IN THIS ARCHIVE
          </p>
          <div className="divide-y divide-[#2A2A2A]">
            {dossiersList
              .filter((d) => d.id !== dossier.id)
              .slice(0, 3)
              .map((d) => (
                <Link
                  key={d.id}
                  href={relatedBase + d.id}
                  className="py-4 flex items-center justify-between group transition-colors"
                >
                  <div>
                    <span className="font-mono text-[11px] text-[#C62828] uppercase font-bold mr-3">
                      FILE № 03 / {d.fileNo}
                    </span>
                    <span className="font-serif text-[18px] font-bold text-[#F5F5F0] group-hover:text-[#E53935] transition-colors">
                      {d.name[lang] || d.name.en}
                    </span>
                    <span className="font-mono text-[11px] text-[#B5B5AF] uppercase ml-3 hidden sm:inline">
                      {d.role[lang] || d.role.en}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#A3A39D] group-hover:text-[#E53935] transition-colors">
                    Open File →
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </article>

      <ResearchStatusFooter lang={lang} />
      <PageCornerBadges fileNo={dossier.fileNo} chapterTitle="DOSSIER" pageNum="024" totalPages="047" />
    </div>
  );
}
