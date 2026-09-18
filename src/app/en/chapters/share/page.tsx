'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { SourceViewerModal } from '@/components/SourceViewerModal';
import { ClaimEvidenceConclusion } from '@/components/ClaimEvidenceConclusion';
import { ResearchStatusFooter } from '@/components/ResearchStatusFooter';

export default function JallianwalaChapterPage() {
  const [activeDocId, setActiveDocId] = useState<string | null>(null);

  const handleOpenSourceDoc = (docId: string) => {
    setActiveDocId(docId);
  };

  return (
    <div className="bg-bg min-h-screen text-[#D6D6D0] selection:bg-accent/30 flex flex-col justify-between">
      <Navbar lang="en" />

      <main className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32 pb-24 flex-1">
        <header className="mb-24 relative">
          <PageCornerBadges fileNo="004" chapterTitle="JALLIANWALA" pageNum="092" totalPages="190" />

          {/* Article Masthead */}
          <div className="mb-16 border-b border-[#2A2A2A] pb-10">
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] uppercase tracking-[0.25em] text-[#A3A39D] mb-6">
              <span className="text-[#C62828] font-semibold">CASE № IA-1919-004 · DISPATCH IV</span>
              <span>35 MIN READ · MINUTE-BY-MINUTE FORENSIC RECORD</span>
              <span>DISORDERS INQUIRY COMMITTEE (CMD. 681)</span>
            </div>

            <h1
              className="font-serif text-[#F5F5F0] text-[clamp(36px,7.5vw,100px)] leading-[0.93] tracking-[-0.01em] uppercase font-black mb-4"
              style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
            >
              Ten Minutes in Amritsar
            </h1>
            <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] text-[#D6D6D0] leading-snug max-w-[45ch]">
              The Forensic Anatomy of the Jallianwala Bagh Massacre, the Hunter Commission Inquiries, and the 21-Year Retribution.
            </p>

            <div className="mt-8 pt-6 border-t border-[#2A2A2A] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[12px] text-[#A3A39D]">
              <div>
                <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">INCIDENT LOCATION</span>
                <span className="text-[#D6D6D0] font-medium">Jallianwala Bagh, Amritsar (5:15 PM)</span>
              </div>
              <div>
                <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">AMMUNITION EXPENDED</span>
                <span className="text-[#E53935] font-bold">1,650 Rounds of .303 Mark VII</span>
              </div>
              <div>
                <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">CASUALTIES (CONTESTED)</span>
                <span className="text-[#D6D6D0]">379 (Hunter) / 1,000+ (Congress)</span>
              </div>
              <div>
                <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">EVIDENCE STATUS</span>
                <span className="text-[#C62828] font-semibold">Official Inquiry Report (Cmd. 681)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-[#D6D6D0]">
                <p>
                  <span className="float-left text-[64px] leading-[0.8] font-serif font-bold text-[#C62828] pr-3 pt-1">J</span>
                  allianwala Bagh remains the single most documented act of colonial state violence in the history of the British Empire. Unlike many other atrocities of the imperial era, the events of 13 April 1919 were examined in the open daylight of official parliamentary inquiries. Brigadier-General Reginald Dyer testified freely and extensively before the Hunter Committee, offering no apologies and explicitly stating his intention to inflict massive casualties as a punitive moral measure.
                </p>
                <p>
                  Because the basic physical facts were never in dispute—the firing on an unarmed civilian gathering in an enclosed space without warning—the historical contention centers on imperial intentionality. For the Indian population, Amritsar shattered any remaining illusion of colonial benevolence, setting in motion the mass civil disobedience movements under Mahatma Gandhi.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenSourceDoc('doc-dyer-testimony-1919')}
                    className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#C62828] hover:text-[#E53935] hover:underline font-bold transition-colors"
                  >
                    [ VIEW SWORN HUNTER COMMISSION TRANSCRIPT (CMD. 681) → ]
                  </button>
                </div>
              </div>
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-[#A3A39D] uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-2">
              <div className="border-l border-[#2A2A2A] pl-4 space-y-2">
                <p className="text-[#C62828] font-bold">KEY DATA</p>
                <p><span className="text-[#E53935]">1,650 ROUNDS</span></p>
                <p><span className="text-[#E53935]">10 MINUTES</span> FIRING</p>
                <p><span className="text-[#E53935]">13 APRIL 1919</span> (BAISAKHI)</p>
              </div>
            </aside>
          </div>
        </header>

        {/* Structured Forensic Evaluation Block */}
        <section className="py-12 border-y border-[#2A2A2A]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <EvidenceBadge category="OFFICIAL_ENQUIRY" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#C62828] font-semibold">FORENSIC CROSS-EXAMINATION</p>
              </div>

              <h3 className="font-serif text-[#F5F5F0] text-[28px] md:text-[36px] font-bold leading-tight mb-6">
                The Hunter Commission &amp; Dyer’s Admissions
              </h3>

              <ClaimEvidenceConclusion
                claim="General Dyer fired purely for self-defense to prevent his small military force from being overwhelmed."
                evidence="In his sworn testimony before the Hunter Committee (Cmd. 681, Question 115), Dyer stated: 'I had made up my mind that if they did not disperse immediately, I would open fire... It was no longer a question of merely dispersing the crowd, but one of producing a sufficient moral effect throughout the Punjab.'"
                conclusion="The massacre was a pre-meditated act of punitive state terrorism designed to terrify the civilian population into submission, executed by blocking the only exit and expending virtually all available ammunition."
                sourceDocId="doc-dyer-testimony-1919"
                sourceRef="Cmd. 681 (1920)"
                evidenceCategory="OFFICIAL_ENQUIRY"
                onOpenSourceDoc={handleOpenSourceDoc}
              />
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-[#A3A39D] uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="border-l border-[#2A2A2A] pl-4 space-y-2">
                <p className="text-[#F5F5F0] font-bold">INTERNATIONAL IMPACT</p>
                <p>TAGORE RENOUNCED KNIGHTHOOD</p>
                <button
                  type="button"
                  onClick={() => handleOpenSourceDoc('doc-tagore-knighthood-1919')}
                  className="text-[#C62828] hover:text-[#E53935] hover:underline font-semibold block text-[11px] pt-1 transition-colors"
                >
                  [ VIEW TAGORE LETTER → ]
                </button>
              </div>
            </aside>
          </div>
        </section>

        {/* Chapter Transition Link */}
        <div className="pt-16 border-t border-[#2A2A2A] flex justify-between items-center font-mono text-[13px]">
          <Link href="/en/chapters/dossiers" className="text-[#A3A39D] hover:text-[#F5F5F0] uppercase tracking-[0.15em] transition-colors">
            ← Chapter 03: The Subjects
          </Link>
          <Link
            href="/en/chapters/action"
            className="text-[#C62828] hover:text-[#E53935] hover:underline font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors"
          >
            <span>Proceed to Part V: The Subcontinental Corpus &amp; Archive</span>
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
