'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { SearchableArchive } from '@/components/SearchableArchive';
import { GeographyMap } from '@/components/GeographyMap';
import { SourceViewerModal } from '@/components/SourceViewerModal';
import { ResearchStatusFooter } from '@/components/ResearchStatusFooter';
import { sourcesList } from '@/data/sources';
import { EvidenceBadge } from '@/components/EvidenceBadge';

export default function ArchiveChapterPage() {
  const [activeDocId, setActiveDocId] = useState<string | null>(null);

  const handleOpenSourceDoc = (docId: string) => {
    setActiveDocId(docId);
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#D6D6D0] selection:bg-accent/30 flex flex-col justify-between">
      <Navbar lang="en" />
      <PageCornerBadges fileNo="005" chapterTitle="ARCHIVE" pageNum="156" totalPages="190" />

      <main className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32 pb-24 flex-1">
        {/* Chapter Header */}
        <header className="mb-16 border-b border-[#2A2A2A] pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] uppercase tracking-[0.25em] text-[#A3A39D] mb-6">
            <span className="text-[#C62828] font-semibold">CASE № IA-1757-1947-005 · DISPATCH V</span>
            <span>20 MIN READ · 32 PRIMARY CORPUS CITATIONS</span>
            <span>HISTORIOGRAPHY &amp; ATLAS</span>
          </div>

          <h1
            className="font-serif text-[#F5F5F0] text-[clamp(36px,8.2vw,100px)] leading-[0.95] tracking-[0] uppercase font-black mb-4"
            style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
          >
            The Subcontinental Corpus
          </h1>
          <p className="font-serif italic text-[clamp(18px,2.2vw,24px)] text-[#D6D6D0] leading-snug max-w-[50ch]">
            A Comprehensive Regional Incident Atlas, Archival Image Gallery, and Primary Source Bibliography.
          </p>

          <div className="mt-8 pt-6 border-t border-[#2A2A2A] flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] text-[#A3A39D]">
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">REGIONAL SCOPE</span>
              <span className="text-[#D6D6D0]">10 Subcontinental Territories &amp; Frontier Agencies</span>
            </div>
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">BIBLIOGRAPHY</span>
              <span className="text-[#C62828] font-bold">32 Parliamentary &amp; Academic Records</span>
            </div>
          </div>
        </header>

        {/* 1. ARCHIVAL PHOTO GALLERY */}
        <section className="py-12 border-b border-[#2A2A2A]">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#C62828] font-semibold mb-3">
            05.1 / ARCHIVAL PHOTOGRAPHIC CORPUS
          </p>
          <h2 className="font-serif text-[#F5F5F0] text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
            The Archive in Images
          </h2>
          <p className="font-serif italic text-[16px] text-[#D6D6D0] max-w-[65ch] mb-10 leading-relaxed">
            Monochrome historical reproductions from the British Library, National Archives (Kew), and National Archives of India.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/TheImperialAudit/illustrations/dossiers/gandhi.jpg', cap: 'Gandhi: Dandi Salt March', yr: '1930' },
              { src: '/TheImperialAudit/illustrations/dossiers/bhagat.jpg', cap: 'Shaheed Bhagat Singh: HSRA', yr: '1929' },
              { src: '/TheImperialAudit/illustrations/dossiers/bose.jpg', cap: 'Netaji Subhas Chandra Bose, INA', yr: '1942' },
              { src: '/TheImperialAudit/illustrations/dossiers/lakshmibai.jpg', cap: 'Rani Lakshmibai of Jhansi', yr: '1857' },
              { src: '/TheImperialAudit/illustrations/dossiers/tilak.jpg', cap: 'Bal Gangadhar Tilak: Kesari', yr: '1897' },
              { src: '/TheImperialAudit/illustrations/dossiers/birsa.jpg', cap: 'Bhagwan Birsa Munda: Ulgulan', yr: '1899' },
              { src: '/TheImperialAudit/illustrations/dossiers/jallianwala_bullet_marks.jpg', cap: 'Jallianwala Bagh Bullet Marks', yr: '1919' },
              { src: '/TheImperialAudit/illustrations/dossiers/dandi_march.jpg', cap: 'The Dandi Salt March Column', yr: '1930' },
              { src: '/TheImperialAudit/illustrations/dossiers/azad.jpg', cap: 'Chandrashekhar Azad: HSRA', yr: '1931' },
              { src: '/TheImperialAudit/illustrations/dossiers/suryasen.jpg', cap: 'Masterda Surya Sen: Chittagong', yr: '1930' },
              { src: '/TheImperialAudit/illustrations/dossiers/udham.jpg', cap: 'Udham Singh: Old Bailey Trial', yr: '1940' },
              { src: '/TheImperialAudit/illustrations/dossiers/ina_trials.jpg', cap: 'INA Trials, Red Fort, Delhi', yr: '1945' },
            ].map((img) => (
              <div key={img.src} className="border border-[#2A2A2A] bg-black/40 overflow-hidden group">
                <div className="overflow-hidden aspect-[4/5] flex items-center justify-center p-2">
                  <img
                    src={img.src}
                    alt={img.cap}
                    className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
                  />
                </div>
                <div className="p-3 border-t border-[#2A2A2A]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#E53935] font-bold">{img.yr}</p>
                  <p className="font-serif text-[13px] text-[#F5F5F0] mt-1 leading-snug">{img.cap}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. THE GEOGRAPHY OF EMPIRE (REGIONAL ATLAS) */}
        <GeographyMap onOpenSourceDoc={handleOpenSourceDoc} />

        {/* 3. SEARCHABLE ARCHIVAL RECORDS INTERFACE */}
        <SearchableArchive onOpenSourceDoc={handleOpenSourceDoc} />

        {/* 4. PRIMARY BIBLIOGRAPHY & REPOSITORY REGISTRY */}
        <section className="my-20 border-t border-[#2A2A2A] pt-16" id="bibliography-registry">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#C62828] font-semibold mb-2">
                05.4 / ARCHIVAL REPOSITORY REGISTRY
              </p>
              <h2 className="font-serif text-[32px] sm:text-[40px] font-bold text-[#F5F5F0]">
                Primary Archival Repositories
              </h2>
            </div>
            <span className="font-mono text-[12px] text-[#A3A39D] uppercase tracking-[0.15em]">
              32 ARCHIVAL CITATIONS
            </span>
          </div>

          <div className="divide-y divide-text/15 font-mono text-[12px]">
            {sourcesList.map((src) => (
              <div key={src.id} className="py-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-accent font-bold">{src.name}</span>
                  <span className="text-text/40 text-[10px] uppercase">{src.archivalCategory}</span>
                </div>
                <p className="font-serif text-[14px] text-text/75 leading-relaxed">
                  {src.shortDesc.en}
                </p>
                <div className="pt-1">
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline uppercase text-[10px] tracking-[0.15em] font-semibold"
                  >
                    Open Archive Guide ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter Transition Link */}
        <div className="pt-16 border-t border-text/15 flex justify-between items-center font-mono text-[13px]">
          <Link href="/en/chapters/share" className="text-text/50 hover:text-text uppercase tracking-[0.15em]">
            ← Chapter 04: Ten Minutes in Amritsar
          </Link>
          <Link
            href="/en/methodology"
            className="text-accent hover:underline font-bold uppercase tracking-[0.2em] flex items-center gap-2"
          >
            <span>Proceed to Academic Methodology Appendix</span>
            <span>→</span>
          </Link>
        </div>
      </main>

      <ResearchStatusFooter lang="en" />

      <SourceViewerModal
        docId={activeDocId}
        onClose={() => setActiveDocId(null)}
      />
    </div>
  );
}
