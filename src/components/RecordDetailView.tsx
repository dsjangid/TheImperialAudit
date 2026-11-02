'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { ResearchStatusFooter } from '@/components/ResearchStatusFooter';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { primaryDocuments } from '@/data/primary-documents';

interface RecordDetailViewProps {
  id: string;
  lang?: 'en' | 'ru';
}

export function RecordDetailView({ id, lang = 'en' }: RecordDetailViewProps) {
  const router = useRouter();
  const doc = primaryDocuments[id];
  if (!doc) return notFound();

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push(lang === 'en' ? '/en' : '/');
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col justify-between">
      <Navbar lang={lang} />

      <main className="max-w-[1200px] mx-auto w-full px-5 sm:px-8 md:px-12 pt-28 md:pt-36 pb-24 flex-1">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 mb-10 border-b border-[#2A2A2A] font-mono text-[11px] uppercase tracking-[0.2em]">
          <button
            type="button"
            onClick={handleBack}
            className="text-[#A3A39D] hover:text-[#E53935] transition-colors flex items-center gap-1.5"
          >
            <span>←</span>
            <span className="border-b border-transparent hover:border-[#E53935] pb-0.5">
              BACK TO ARCHIVE
            </span>
          </button>

          <span className="text-[#A3A39D] hidden sm:inline">
            ARCHIVAL TRANSCRIPTION · {doc.archiveRef}
          </span>
        </div>

        {/* Record Header */}
        <header className="pb-12 border-b border-[#2A2A2A]">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] mb-4">
            <EvidenceBadge category={doc.category} />
            <span className="text-[#A3A39D] tracking-[0.15em] border-l border-[#2A2A2A] pl-3">
              {doc.location} · <span className="text-[#E53935] font-bold">{doc.date}</span>
            </span>
          </div>

          <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[52px] font-black leading-[1.05] tracking-tight text-[#F5F5F0]">
            {doc.title}
          </h1>

          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#C62828] mt-4 font-bold">
            SHELFMARK: {doc.archiveRef}
          </p>
        </header>

        {/* Minimal Provenance & Metadata Grid */}
        <section className="py-8 border-b border-[#2A2A2A]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-mono text-[11px]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block mb-1">
                REPOSITORY ARCHIVE
              </span>
              <p className="font-serif text-[14px] text-[#F5F5F0] leading-snug">
                {doc.repository}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block mb-1">
                COLLECTION SERIES
              </span>
              <p className="font-serif text-[14px] text-[#D6D6D0] leading-snug">
                {doc.collection}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block mb-1">
                ACCESSION REFERENCE
              </span>
              <p className="font-serif text-[14px] text-[#D6D6D0] leading-snug">
                {doc.pageOrDispatch}
              </p>
            </div>
          </div>
        </section>

        {/* Primary Archival Transcription / Excerpt */}
        <section className="py-12 border-b border-[#2A2A2A]">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C62828] font-bold block mb-4">
            UNREDACTED PRIMARY RECORD TRANSCRIPTION
          </span>

          <blockquote className="border-l-2 border-[#C62828] pl-6 py-2 font-serif italic text-[20px] sm:text-[24px] md:text-[26px] leading-[1.6] text-[#F5F5F0]">
            {doc.excerpt}
          </blockquote>
        </section>

        {/* Historical Context & Systemic Significance */}
        <section className="py-12 border-b border-[#2A2A2A]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3A39D] font-bold block">
                HISTORICAL CONTEXT &amp; PROVENANCE
              </span>
              <p className="font-serif text-[15px] sm:text-[16px] leading-[1.8] text-[#D6D6D0]">
                {doc.context}
              </p>
            </div>

            <div className="space-y-3 border-t md:border-t-0 md:border-l border-[#2A2A2A] pt-8 md:pt-0 md:pl-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C62828] font-bold block">
                SYSTEMIC HISTORICAL SIGNIFICANCE
              </span>
              <p className="font-serif text-[15px] sm:text-[16px] leading-[1.8] text-[#D6D6D0]">
                {doc.significance}
              </p>
            </div>
          </div>
        </section>

        {/* Verification & Associated Chapter Navigation */}
        <section className="pt-10 flex flex-wrap items-center justify-between gap-6 font-mono text-[11px]">
          <div>
            {doc.verificationUrl && (
              <a
                href={doc.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D6D6D0] hover:text-[#F5F5F0] border-b border-[#2A2A2A] hover:border-[#D6D6D0] pb-0.5 uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-1.5"
              >
                <span>[ VERIFY SHELFMARK AT ARCHIVE ↗ ]</span>
              </a>
            )}
          </div>

          <div>
            <Link
              href={doc.relatedDispatchHref}
              className="text-[#C62828] hover:text-[#E53935] border-b border-[#C62828] hover:border-[#E53935] pb-0.5 uppercase tracking-[0.15em] font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <span>EXPLORE IN {doc.relatedDispatch}</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <ResearchStatusFooter lang={lang} />
    </div>
  );
}
