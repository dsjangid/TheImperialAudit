'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { SourceViewerModal } from '@/components/SourceViewerModal';
import { ClaimEvidenceConclusion } from '@/components/ClaimEvidenceConclusion';
import { ResearchStatusFooter } from '@/components/ResearchStatusFooter';

export default function Rebellion1857ChapterPage() {
  const [activeDocId, setActiveDocId] = useState<string | null>(null);

  const handleOpenSourceDoc = (docId: string) => {
    setActiveDocId(docId);
  };

  return (
    <div className="bg-bg min-h-screen text-[#D6D6D0] selection:bg-accent/30 flex flex-col justify-between">
      <Navbar lang="en" />
      <PageCornerBadges fileNo="002" chapterTitle="1857" pageNum="032" totalPages="190" />

      <main className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32 pb-24 flex-1">
        {/* Case File Masthead */}
        <header className="mb-16 border-b border-[#2A2A2A] pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] uppercase tracking-[0.25em] text-[#A3A39D] mb-6">
            <span className="text-[#C62828] font-semibold">CASE № IA-1857-1858-002 · DISPATCH II</span>
            <span>30 MIN READ · 10 NARRATIVE INCIDENTS</span>
            <span>DECLASSIFIED WAR DISPATCHES</span>
          </div>

          <h1
            className="font-serif text-[#F5F5F0] text-[clamp(36px,7.5vw,100px)] leading-[0.93] tracking-[-0.01em] uppercase font-black mb-4"
            style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
          >
            The Great Rupture
          </h1>
          <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] text-[#D6D6D0] leading-snug max-w-[45ch]">
            The 1857 Uprising, the Sieges of Delhi &amp; Lucknow, and the Abolition of Company Rule.
          </p>

          <div className="mt-8 pt-6 border-t border-[#2A2A2A] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[12px] text-[#A3A39D]">
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">ACTIVE CONFLICT</span>
              <span className="text-[#D6D6D0] font-medium"><span className="text-[#E53935]">10 May 1857 – 8 July 1858</span></span>
            </div>
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">PRIMARY CORPUS</span>
              <span className="text-[#D6D6D0]">War Office Records &amp; Telegraph Logs</span>
            </div>
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">MAJOR SITES</span>
              <span className="text-[#D6D6D0]">Meerut, Delhi, Kanpur, Lucknow, Jhansi</span>
            </div>
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">CROWN TAKEOVER</span>
              <span className="text-[#E53935] font-semibold">1 November 1858</span> <span className="text-[#D6D6D0]">(Proclamation)</span>
            </div>
          </div>
        </header>

        {/* Epigraph */}
        <div className="border-y border-[#2A2A2A] py-10 my-12 max-w-[80ch] font-serif italic text-[#D6D6D0] text-[17px] leading-[1.75]">
          <p>"The Bengal sepoys are the most martial body of men in India. They feel that it would be degrading to become the servants of a Christian Company."</p>
          <p className="mt-4 font-mono text-[13px] not-italic text-[#A3A39D] uppercase tracking-[0.1em]">Charles Napier, 1849</p>
        </div>

        {/* 1. Introduction: The Crisis */}
        <section className="py-12 border-b border-[#2A2A2A]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <EvidenceBadge category="PRIMARY_RECORD" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#C62828] font-semibold">INTRODUCTION · THE RUPTURE</p>
              </div>

              <h3 className="font-serif text-[#F5F5F0] text-[28px] md:text-[36px] font-bold leading-tight mb-2">
                The Crisis of 1857
              </h3>
              <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-[#A3A39D] mb-8">
                <span className="text-[#E53935]">1857</span> · NORTHERN AND CENTRAL INDIA
              </p>

              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-[#D6D6D0]">
                <p>
                  <span className="float-left text-[64px] leading-[0.8] font-serif font-bold text-[#C62828] pr-3 pt-1">T</span>
                  he events of 1857 constitute the most significant rupture in the history of British colonial rule in India. What began as a mutiny among the sepoy regiments of the Bengal Army rapidly evolved into a widespread popular uprising that engulfed large swathes of northern and central India. This was not a single, unified battle fought on a conventional field, but rather a complex sequence of localized mutinies, protracted sieges, bitter guerrilla campaigns, and devastating reprisals. It laid bare the fragile foundations of East India Company rule and exposed the deep-seated resentments that had been accumulating over decades of territorial expansion, economic exploitation, and cultural insensitivity.
                </p>
              </div>
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-[#A3A39D] uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="border-l border-[#2A2A2A] pl-4 space-y-2">
                <p className="text-[#C62828] font-bold">1857 INQUIRY</p>
                <p>OVER 100,000 COMBATANTS</p>
                <p>COMPANY ABOLISHED 1858</p>
                <p>CROWN RAJ ESTABLISHED</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 2. The Meerut Breakout */}
        <section className="py-12 border-b border-[#2A2A2A]" id="meerut">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <EvidenceBadge category="PRIMARY_RECORD" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#C62828] font-semibold">MILITARY · REBELLION</p>
              </div>

              <h3 className="font-serif text-[#F5F5F0] text-[28px] md:text-[36px] font-bold leading-tight mb-2">
                The Meerut Outbreak &amp; March on Delhi
              </h3>
              <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">
                10 MAY 1857 · MEERUT TO RED FORT, DELHI
              </p>

              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  The true ignition point occurred in the massive military cantonment at Meerut. On 9 May, eighty-five cavalrymen of the 3rd Bengal Light Cavalry were publicly shackled and sentenced to ten years' hard labor for refusing the greased Enfield cartridges. On the evening of Sunday, 10 May, Indian soldiers broke open the jail, liberated their comrades, and commenced the historic 40-mile night march to Delhi, proclaiming Mughal Emperor Bahadur Shah Zafar as the sovereign head of the uprising.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenSourceDoc('doc-meerut-telegram-1857')}
                    className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent hover:underline font-bold"
                  >
                    [ VIEW PRIMARY TELEGRAPH LOG: MEERUT OUTBREAK (10 MAY 1857) → ]
                  </button>
                </div>
              </div>

              <ClaimEvidenceConclusion
                claim="The 1857 rebellion was purely a military mutiny over rifle cartridges without wider political legitimacy."
                evidence="The Meerut cavalry immediately marched to the Red Fort to seek the endorsement of the titular Mughal Emperor, establishing an all-India political leadership uniting Hindu and Muslim soldiers under the banner of restoring indigenous sovereignty."
                conclusion="While the Enfield cartridges provided the tactical catalyst, the rebellion represented a coordinated political rejection of Company rule, backed by civilian peasants and dispossessed princes."
                sourceDocId="doc-meerut-telegram-1857"
                sourceRef="IOR/L/MIL/5/667"
                evidenceCategory="PRIMARY_RECORD"
                onOpenSourceDoc={handleOpenSourceDoc}
              />
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="border-l border-text/20 pl-4 space-y-2">
                <p className="text-text font-bold">KEY RECORDS</p>
                <p>85 CAVALRYMEN SHACKLED</p>
                <p>40-MILE NIGHT MARCH</p>
                <p>DELHI RESTORATION PROCLAIMED</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 3. Crown Rule: 1858 Proclamation */}
        <section className="py-12" id="proclamation">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <EvidenceBadge category="PARLIAMENTARY_RECORD" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent">GOVERNANCE · CROWN RAJ</p>
              </div>

              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">
                The Government of India Act 1858 &amp; The Queen’s Proclamation
              </h3>
              <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">
                1 NOVEMBER 1858 · ALLAHABAD &amp; WHITEHALL
              </p>

              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  The suppression of the rebellion marked the final demise of the English East India Company. By the Government of India Act 1858, Parliament transferred direct sovereignty to Queen Victoria. The proclamation promised non-interference in religious customs and guaranteed princely state boundaries, freezing feudal social relations to create a permanent loyalist buffer against democratic reform.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenSourceDoc('doc-proclamation-1858')}
                    className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent hover:underline font-bold"
                  >
                    [ VIEW PARLIAMENTARY RECORD: QUEEN VICTORIA’S PROCLAMATION → ]
                  </button>
                </div>
              </div>
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="border-l border-text/20 pl-4 space-y-2">
                <p className="text-accent font-bold">AFTERMATH STATS</p>
                <p>EIC LIQUIDATED</p>
                <p>£40M WAR DEBT CHARGED TO INDIA</p>
                <p>RACIAL SEPARATION CODIFIED</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Chapter Transition Link */}
        <div className="pt-16 border-t border-text/15 flex justify-between items-center font-mono text-[13px]">
          <Link href="/en/chapters/timer" className="text-text/50 hover:text-text uppercase tracking-[0.15em]">
            ← Chapter 01: The Conquest
          </Link>
          <Link
            href="/en/chapters/dossiers"
            className="text-accent hover:underline font-bold uppercase tracking-[0.2em] flex items-center gap-2"
          >
            <span>Proceed to Part III: The Actors of Empire &amp; Resistance</span>
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
