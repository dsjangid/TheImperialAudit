'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LiveSpendCounter } from '@/components/LiveSpendCounter';
import { EyeIllustration } from '@/components/EyeIllustration';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { ImperialLedger } from '@/components/ImperialLedger';
import { FollowTheMoney } from '@/components/FollowTheMoney';
import { GeographyMap } from '@/components/GeographyMap';
import { MythRecordInspector } from '@/components/MythRecordInspector';
import { SearchableArchive } from '@/components/SearchableArchive';
import { DocumentOfTheRecord } from '@/components/DocumentOfTheRecord';
import { SourceViewerModal } from '@/components/SourceViewerModal';
import { AuditFigureModal } from '@/components/AuditFigureModal';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { EvidentiaryStandardKey } from '@/components/EvidentiaryStandardKey';
import { MonographWayfinder } from '@/components/MonographWayfinder';
import { ResearchStatusFooter } from '@/components/ResearchStatusFooter';

interface CoverInteractiveProps {
  lang?: 'en' | 'ru';
}

export const CoverInteractive: React.FC<CoverInteractiveProps> = ({ lang = 'en' }) => {
  const [activeDocId, setActiveDocId] = useState<string | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);

  const handleOpenSourceDoc = (docId: string) => {
    setActiveDocId(docId);
  };

  const handleCloseSourceDoc = () => {
    setActiveDocId(null);
  };

  return (
    <>
      {/* Subtle Monograph Wayfinder & Progress Tracker */}
      <MonographWayfinder />

      <main className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-16 md:pt-24 pb-32" vt-update="auto">
        {/* =========================================================================
            ACT 01: MASTHEAD & EDITORIAL THESIS
        ========================================================================= */}
        <section id="act-prologue" className="pb-20 md:pb-28">
          {/* Header Metadata Ribbon (De-duplicated & Refined) */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.25em] text-[#A3A39D] pb-6 mb-12 border-b border-[#2A2A2A]">
            <div className="flex items-center gap-3">
              <span className="text-[#C62828] font-bold text-[14px]">▪</span>
              <span className="text-[#F5F5F0] font-semibold">HISTORICAL MONOGRAPH · VOL. I</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden sm:inline">DECLASSIFIED COLONIAL ARCHIVE</span>
              <span className="text-[#E53935] font-bold">1757 — 1947</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <EvidenceBadge category="PRIMARY_RECORD" size="sm" showTier />
                <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#C62828] font-semibold">
                  FORENSIC INVESTIGATION INTO 190 YEARS OF COLONIAL GOVERNANCE
                </span>
              </div>

              <h1
                className="font-serif text-[#F5F5F0] text-[clamp(42px,7.8vw,112px)] leading-[0.92] tracking-[-0.01em] uppercase font-black"
                style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
              >
                THE IMPERIAL<br />AUDIT · 1757–1947
              </h1>

              <p className="font-serif italic text-[clamp(18px,2.2vw,24px)] text-[#D6D6D0] mt-8 leading-snug max-w-[44ch]">
                A forensic long-form chronicle of corporate conquest, fiscal extraction, engineered famines, and popular resistance in British India.
              </p>
            </div>

            {/* Masthead Essential Provenance Card */}
            <div className="col-span-12 lg:col-span-4 font-mono text-[12px] text-[#A3A39D] space-y-5 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#2A2A2A] lg:pl-8">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A39D]/70 mb-1">CURATED REPOSITORY</span>
                <span className="text-[#F5F5F0] font-medium block">The Declassified Colonial Archive Project</span>
                <span className="text-[11px] text-[#A3A39D]">London · New Delhi · Edinburgh</span>
              </div>

              <div className="pt-2 border-t border-[#2A2A2A]/60">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A39D]/70 mb-1">BENCHMARK FISCAL TRANSFER</span>
                <span className="text-[#E53935] font-bold text-[18px] block">~$45 Trillion (1765–1938)</span>
                <button
                  type="button"
                  onClick={() => setIsAuditModalOpen(true)}
                  className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#C62828] hover:text-[#E53935] uppercase tracking-[0.15em] font-bold transition-colors"
                >
                  <span>[ AUDIT THE FIGURE &amp; PROOF → ]</span>
                </button>
              </div>

              <div className="pt-2 border-t border-[#2A2A2A]/60 flex justify-between text-[11px]">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A39D]/70">STATE PAPERS</span>
                  <span className="text-[#D6D6D0]">32 Parliamentary Records</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A39D]/70">EDITION</span>
                  <span className="text-[#D6D6D0]">First Edition · 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Editorial Narrative */}
          <div className="mt-20 pt-12 border-t border-[#2A2A2A]">
            <div className="grid grid-cols-12 gap-8 lg:gap-12">
              <div className="col-span-12 lg:col-span-8">
                <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-[#C62828] font-bold">
                  <span>SECTION 01 / 06</span>
                  <span className="text-[#2A2A2A]">/</span>
                  <span>EDITORIAL PROLOGUE</span>
                </div>

                <div className="space-y-6 font-serif text-[18px] md:text-[20px] leading-[1.8] text-[#D6D6D0] max-w-[65ch]">
                  <p>
                    <span className="float-left text-[72px] leading-[0.75] font-serif font-bold text-[#C62828] pr-4 pt-2 select-none">I</span>
                    n 1757, the East India Company, a private, profit-maximising joint-stock corporation chartered in London, won the Battle of Plassey through clandestine bribery and military treachery, establishing corporate dominion over the vast revenues of Bengal. In August 1947, the British Crown evacuated the subcontinent in a hasty, three-month partition that displaced 15 million people and left between 500,000 and one million dead in sectarian bloodshed.
                  </p>
                  <p>
                    Between these two terminal dates lies nearly two centuries of documented governance that transformed the wealthiest economy of the early modern world into a debt-burdened, deindustrialised territory governed by coercive force. This publication is not an ideological pamphlet; it is an evidence-first forensic chronicle constructed from the official dispatches of the India Office, the minutes of the British Cabinet, parliamentary inquiries in Hansard, and peer-reviewed macroeconomic datasets.
                  </p>
                  <p>
                    Each chapter below functions as a standalone long-form investigative article, exploring the mechanics of conquest, the violent rupture of 1857, the architecture of recurring famines, the minute-by-minute anatomy of the 1919 Jallianwala Bagh massacre, and the biographies of those who governed and resisted.
                  </p>
                </div>
              </div>

              {/* Monograph Core Principles Callout */}
              <aside className="col-span-12 lg:col-span-4 space-y-6 lg:pt-8 font-mono text-[12px]">
                <div className="border border-[#2A2A2A] bg-[#0E0E0E] p-6 space-y-4">
                  <div className="flex items-center gap-2 text-[#C62828] font-bold text-[11px] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />
                    <span>FORENSIC OBJECTIVE</span>
                  </div>
                  <p className="font-serif text-[14px] leading-relaxed text-[#D6D6D0]">
                    To replace retrospective generalizations with the empire&apos;s own paper trail—examining original tax ledgers, famine inquiry admissions, and military telegrams.
                  </p>
                  <div className="pt-3 border-t border-[#2A2A2A] space-y-1.5 text-[11px] text-[#A3A39D]">
                    <div className="flex justify-between">
                      <span>PRIMARY CORPUS:</span>
                      <span className="text-[#F5F5F0]">India Office Records</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PARLIAMENTARY DATA:</span>
                      <span className="text-[#F5F5F0]">Hansard Command Papers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TOTAL DISPATCHES:</span>
                      <span className="text-[#E53935] font-bold">5 Core Chapters</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Evidentiary Standard Legend (Establishing Transparent Academic Rigor) */}
            <div className="mt-12">
              <EvidentiaryStandardKey />
            </div>
          </div>
        </section>

        {/* =========================================================================
            ACT 02: THE METRIC OF EXTRACTION ($45 TRILLION AUDIT)
        ========================================================================= */}
        <section id="act-drain" className="py-24 md:py-32 border-t border-[#2A2A2A]">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3 mb-4 font-mono text-[11px] uppercase tracking-[0.25em]">
                <span className="text-[#C62828] font-bold">SECTION 02 / 06</span>
                <span className="text-[#2A2A2A]">/</span>
                <span className="text-[#A3A39D]">FISCAL EXTRACTION · THE DRAIN OF WEALTH</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-3">
                <EvidenceBadge category="ECONOMIC_DATA" size="sm" showTier />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#A3A39D]">
                  Columbia University Press · Prof. Utsa Patnaik (2018)
                </span>
              </div>

              <h2 className="font-serif text-[#F5F5F0] text-[32px] sm:text-[42px] md:text-[48px] font-black leading-[1.02] tracking-tight mb-6">
                Compounded Imperial Transfer: ~$45 Trillion
              </h2>

              <p className="font-serif text-[17px] md:text-[18px] text-[#D6D6D0] leading-[1.8] max-w-[65ch] mb-8">
                In a landmark econometric study published by Columbia University Press, economist Professor Utsa Patnaik calculated that between 1765 and 1938, Britain drained a total of <span className="text-[#E53935] font-bold">~$44.63 trillion (in 2016 USD)</span> from India. This extraction operated through the Council Bills mechanism and export surplus interception, where Indian tax revenues were used to buy Indian export goods for London without British capital outlay. The real-time counter below represents the compounded per-second rate of that historical transfer.
              </p>

              {/* Primary High-Contrast Action Button */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  type="button"
                  onClick={() => setIsAuditModalOpen(true)}
                  className="px-6 py-3.5 bg-[#C62828] text-white font-mono text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-[#E53935] transition-all flex items-center gap-2.5 shadow-lg"
                >
                  <span>AUDIT THE $45 TRILLION FIGURE &amp; METHODOLOGY</span>
                  <span className="text-sm">→</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenSourceDoc('doc-patnaik-drain-calc')}
                  className="px-5 py-3.5 border border-[#2A2A2A] text-[#D6D6D0] hover:text-[#F5F5F0] hover:border-[#A3A39D] font-mono text-[12px] uppercase tracking-[0.15em] transition-all"
                >
                  [ VIEW ECONOMETRIC RECORD ]
                </button>
              </div>

              {/* Live Compounded Counter */}
              <div className="p-6 md:p-8 border border-[#2A2A2A] bg-[#0A0A0A]">
                <LiveSpendCounter lang="en" />
              </div>
            </div>

            {/* Contextual Methodology Card */}
            <aside className="col-span-12 lg:col-span-4 font-mono text-[12px] text-[#A3A39D] space-y-6 lg:pt-16">
              <div className="border border-[#2A2A2A] p-6 space-y-4">
                <span className="text-[#C62828] font-bold uppercase tracking-wider block text-[11px]">
                  TRANSACTION MECHANISM
                </span>
                <p className="font-serif text-[13px] leading-relaxed text-[#D6D6D0]">
                  British buyers purchased Council Bills in London using gold/sterling. The Secretary of State retained the sterling in London, while Indian producers were reimbursed in India with their own local tax revenues.
                </p>
                <div className="pt-3 border-t border-[#2A2A2A] text-[11px] space-y-1">
                  <p><span className="text-[#A3A39D]/60">PRIMARY FORMULA:</span> <span className="text-[#D6D6D0] font-mono">Export Surplus × (1 + r)^t</span></p>
                  <p><span className="text-[#A3A39D]/60">RATE BENCHMARK:</span> <span className="text-[#E53935] font-bold">5% Historical Commercial</span></p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Eye Illustration Transition */}
        <div className="py-12 border-t border-[#2A2A2A]">
          <EyeIllustration href="/en/chapters/timer" lang="en" />
        </div>

        {/* =========================================================================
            ACT 03: THE FIVE CORE DISPATCHES (TABLE OF CONTENTS / ROADMAP)
            *Brought forward to establish clear editorial navigation early*
        ========================================================================= */}
        <section id="act-dispatches" className="py-24 md:py-32 border-t border-[#2A2A2A]">
          <div className="flex flex-wrap justify-between items-baseline gap-4 mb-16 pb-6 border-b border-[#2A2A2A]">
            <div>
              <div className="flex items-center gap-3 mb-2 font-mono text-[11px] uppercase tracking-[0.25em]">
                <span className="text-[#C62828] font-bold">SECTION 03 / 06</span>
                <span className="text-[#2A2A2A]">/</span>
                <span className="text-[#A3A39D]">THE NARRATIVE SPINE</span>
              </div>
              <h2 className="font-serif text-[#F5F5F0] text-[36px] sm:text-[48px] md:text-[56px] font-black leading-[0.95] tracking-tight">
                The Five Dispatches
              </h2>
              <p className="font-serif italic text-[17px] md:text-[19px] text-[#B5B5AF] mt-3 max-w-[50ch]">
                Five standalone investigative articles examining conquest, violent rupture, administrative actors, and the anatomy of massacre.
              </p>
            </div>

            <div className="font-mono text-[12px] text-[#A3A39D] uppercase tracking-[0.15em] text-right">
              <span>UNREDACTED EDITIONS</span>
              <span className="block text-[11px] text-[#C62828] font-bold">5 STANDALONE ESSAYS</span>
            </div>
          </div>

          <div className="space-y-16">
            {[
              {
                num: '01',
                tag: 'CONQUEST · 1757–1857',
                title: 'Part I: The Corporate Takeover',
                subtitle: 'How a Joint-Stock Trading Monopoly Conquered a Subcontinent',
                desc: 'From Clive’s bribery at Plassey and the catastrophic 1770 Bengal Famine to the Polygar Wars, Kittur resistance, Anglo-Sikh Wars, the annexation of Awadh, and the Santhal Hul.',
                readTime: '26 MIN READ · 12 INCIDENTS',
                href: '/en/chapters/timer',
                img: '/TheImperialAudit/illustrations/dossiers/clive.jpg',
                ctaLabel: 'BEGIN READING DISPATCH 01: THE CORPORATE TAKEOVER',
              },
              {
                num: '02',
                tag: 'REBELLION · 1857',
                title: 'Part II: The Great Rupture',
                subtitle: 'The Uprising, the Sieges, and the Abolition of Company Rule',
                desc: 'Mangal Pandey at Barrackpore, the breakout at Meerut, the siege of Delhi, the massacres and counter-massacres at Kanpur, the defense of Lucknow, Rani Lakshmibai of Jhansi, and the brutal reprisals that reshaped imperial race theory.',
                readTime: '30 MIN READ · 10 NARRATIVE INCIDENTS',
                href: '/en/chapters/comparison',
                img: '/TheImperialAudit/illustrations/dossiers/lakshmibai.jpg',
                ctaLabel: 'BEGIN READING DISPATCH 02: THE GREAT RUPTURE',
              },
              {
                num: '03',
                tag: 'MONOGRAPHS · KEY FIGURES',
                title: 'Part III: The Actors of Empire & Resistance',
                subtitle: 'Twelve Forensic Biographies of Administrators and Insurgents',
                desc: 'Detailed primary-source dossiers on Robert Clive, Lord Dalhousie, Lord Curzon, General Dyer, Mangal Pandey, Rani Lakshmibai, Begum Hazrat Mahal, Dadabhai Naoroji, Bal Gangadhar Tilak, and Mahatma Gandhi.',
                readTime: '24 MIN READ · 12 PROFILES',
                href: '/en/chapters/dossiers',
                img: '/TheImperialAudit/illustrations/dossiers/gandhi.jpg',
                ctaLabel: 'INSPECT THE 12 ARCHIVAL DOSSIERS',
              },
              {
                num: '04',
                tag: 'SPECIAL INVESTIGATION · 13 APRIL 1919',
                title: 'Part IV: Ten Minutes in Amritsar',
                subtitle: 'The Minute-by-Minute Anatomy of the Jallianwala Bagh Massacre',
                desc: 'The wartime mobilization of Punjab, the Rowlatt Act, the arrest of Kitchlew and Satyapal, the Crawling Order, 1,650 rounds in ten minutes, the Hunter Commission testimony, Churchill’s parliamentary speech, and Udham Singh’s 21-year revenge.',
                readTime: '35 MIN READ · MINUTE-BY-MINUTE FORENSIC RECORD',
                href: '/en/chapters/share',
                img: '/TheImperialAudit/illustrations/dossiers/jallianwala_bullet_marks.jpg',
                ctaLabel: 'ENTER MINUTE-BY-MINUTE INVESTIGATION',
              },
              {
                num: '05',
                tag: 'REGIONAL ATLAS & ARCHIVE',
                title: 'Part V: The Subcontinental Corpus',
                subtitle: 'Regional Incident Explorer, Historiography & Primary Bibliography',
                desc: 'Organised chronicles across 10 distinct Indian regions, classification by resistance taxonomy (Tribal, Peasant, Revolutionary, Military, Famine), and full citations to the India Office Records and parliamentary papers.',
                readTime: '20 MIN READ · 32 PRIMARY SOURCES',
                href: '/en/chapters/action',
                img: '/TheImperialAudit/illustrations/dossiers/bhagat.jpg',
                ctaLabel: 'ACCESS SUBCONTINENTAL REGIONAL ATLAS',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group border border-[#2A2A2A] bg-[#0A0A0A] p-6 sm:p-8 md:p-10 hover:border-[#C62828] transition-colors"
              >
                <div className="grid grid-cols-12 gap-8 items-center">
                  <div className="col-span-12 md:col-span-3 lg:col-span-2">
                    <span className="font-mono text-[48px] sm:text-[60px] leading-none text-text/20 group-hover:text-[#E53935] transition-colors font-black block">
                      {item.num}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C62828] mt-3 block font-bold">
                      {item.tag}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#A3A39D] mt-1 block">
                      {item.readTime}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-6 lg:col-span-7 space-y-3">
                    <h3 className="font-serif text-[#F5F5F0] text-[26px] sm:text-[32px] md:text-[36px] font-bold leading-tight group-hover:text-[#F5F5F0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-[16px] sm:text-[18px] text-[#B5B5AF]">
                      {item.subtitle}
                    </p>
                    <p className="font-serif text-[15px] sm:text-[16px] text-[#D6D6D0] leading-relaxed pt-1">
                      {item.desc}
                    </p>

                    {/* Unambiguous Primary Action Link */}
                    <div className="pt-4">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] hover:bg-[#C62828] text-[#F5F5F0] hover:text-white font-mono text-[11px] uppercase tracking-[0.18em] font-bold transition-all border border-[#2A2A2A] hover:border-[#C62828]"
                      >
                        <span>{item.ctaLabel}</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-3 lg:col-span-3 hidden md:flex items-center justify-center p-2">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto max-h-[200px] object-contain block opacity-75 group-hover:opacity-100 transition-opacity"
                      style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.92)' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            ACT 04: PRIMARY EVIDENCE SPOTLIGHT (DOCUMENT OF THE RECORD)
        ========================================================================= */}
        <section id="act-evidence" className="py-24 md:py-32 border-t border-[#2A2A2A]">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2 font-mono text-[11px] uppercase tracking-[0.25em]">
              <span className="text-[#C62828] font-bold">SECTION 04 / 06</span>
              <span className="text-[#2A2A2A]">/</span>
              <span className="text-[#A3A39D]">PRIMARY EVIDENCE SPOTLIGHT</span>
            </div>
            <h2 className="font-serif text-[#F5F5F0] text-[32px] sm:text-[44px] font-black leading-tight">
              Document of the Record
            </h2>
            <p className="font-serif italic text-[16px] sm:text-[18px] text-[#B5B5AF] mt-2 max-w-[55ch]">
              An unredacted archival exhibit demonstrating the fiscal behavior of the imperial state during catastrophic crises.
            </p>
          </div>

          <DocumentOfTheRecord
            docId="doc-bengal-famine-1770"
            recordNo="014"
            onOpenSourceDoc={handleOpenSourceDoc}
          />
        </section>

        {/* =========================================================================
            ACT 05: FORENSIC INVESTIGATION SUITE (INTERACTIVE TOOLS)
            *Framed with clear editorial context and breathing room*
        ========================================================================= */}
        <section id="act-suite" className="py-24 md:py-32 border-t border-[#2A2A2A]">
          <div className="mb-16 pb-6 border-b border-[#2A2A2A]">
            <div className="flex items-center gap-3 mb-2 font-mono text-[11px] uppercase tracking-[0.25em]">
              <span className="text-[#C62828] font-bold">SECTION 05 / 06</span>
              <span className="text-[#2A2A2A]">/</span>
              <span className="text-[#A3A39D]">INVESTIGATION SUITE</span>
            </div>
            <h2 className="font-serif text-[#F5F5F0] text-[36px] sm:text-[48px] font-black leading-tight">
              The Analytical Suite
            </h2>
            <p className="font-serif italic text-[17px] md:text-[19px] text-[#B5B5AF] mt-2 max-w-[55ch]">
              Four interactive tools examining the chronological, territorial, and financial apparatus of imperial rule.
            </p>
          </div>

          <div className="space-y-28">
            {/* Tool 1: The Imperial Ledger */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C62828] font-bold">
                  TOOL 01 · CHRONOLOGICAL LEDGER (1757–1947)
                </span>
                <Link
                  href="/en/chapters/timer"
                  className="font-mono text-[11px] text-[#A3A39D] hover:text-[#F5F5F0] uppercase tracking-wider transition-colors"
                >
                  [ VIEW IN DISPATCH 01 → ]
                </Link>
              </div>
              <ImperialLedger onOpenSourceDoc={handleOpenSourceDoc} />
            </div>

            {/* Tool 2: Follow the Money */}
            <div className="pt-16 border-t border-[#2A2A2A]">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C62828] font-bold">
                  TOOL 02 · FISCAL PIPELINE &amp; LEDGER
                </span>
                <span className="font-mono text-[11px] text-[#A3A39D] uppercase tracking-wider">
                  COUNCIL BILLS MECHANISM
                </span>
              </div>
              <FollowTheMoney onOpenSourceDoc={handleOpenSourceDoc} />
            </div>

            {/* Tool 3: Geography of Empire */}
            <div className="pt-16 border-t border-[#2A2A2A]">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C62828] font-bold">
                  TOOL 03 · SUBCONTINENTAL ATLAS
                </span>
                <Link
                  href="/en/chapters/action"
                  className="font-mono text-[11px] text-[#A3A39D] hover:text-[#F5F5F0] uppercase tracking-wider transition-colors"
                >
                  [ VIEW REGIONAL CHAPTER → ]
                </Link>
              </div>
              <GeographyMap onOpenSourceDoc={handleOpenSourceDoc} />
            </div>

            {/* Tool 4: Auditing the Myths */}
            <div className="pt-16 border-t border-[#2A2A2A]">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C62828] font-bold">
                  TOOL 04 · COLONIAL MYTH VS. HISTORICAL RECORD
                </span>
                <span className="font-mono text-[11px] text-[#A3A39D] uppercase tracking-wider">
                  DECLASSIFIED CROSS-EXAMINATION
                </span>
              </div>
              <MythRecordInspector onOpenSourceDoc={handleOpenSourceDoc} />
            </div>
          </div>
        </section>

        {/* =========================================================================
            ACT 06: HISTORICAL FIGURES GALLERY & COMPLETE ARCHIVAL CATALOG
        ========================================================================= */}
        <section id="act-archive" className="py-24 md:py-32 border-t border-[#2A2A2A]">
          {/* Archival Portraits Strip */}
          <div className="mb-20">
            <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-[#2A2A2A]">
              <div>
                <div className="flex items-center gap-3 mb-2 font-mono text-[11px] uppercase tracking-[0.25em]">
                  <span className="text-[#C62828] font-bold">SECTION 06 / 06</span>
                  <span className="text-[#2A2A2A]">/</span>
                  <span className="text-[#A3A39D]">ARCHIVAL REPOSITORIES &amp; DOSSIERS</span>
                </div>
                <h2 className="font-serif text-[#F5F5F0] text-[32px] sm:text-[44px] font-black leading-tight">
                  Archival Portraits · 1757–1947
                </h2>
              </div>
              <Link
                href="/en/chapters/dossiers"
                className="font-mono text-[11px] text-[#C62828] hover:text-[#E53935] uppercase tracking-wider font-bold transition-colors"
              >
                [ VIEW ALL 12 BIOGRAPHIES → ]
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { src: '/TheImperialAudit/illustrations/dossiers/gandhi.jpg', name: 'M. K. GANDHI', role: 'Civil Disobedience', yr: '1869–1948' },
                { src: '/TheImperialAudit/illustrations/dossiers/bhagat.jpg', name: 'BHAGAT SINGH', role: 'HSRA Revolutionary', yr: '1907–1931' },
                { src: '/TheImperialAudit/illustrations/dossiers/bose.jpg', name: 'SUBHAS BOSE', role: 'Commander, INA', yr: '1897–1945' },
                { src: '/TheImperialAudit/illustrations/dossiers/lakshmibai.jpg', name: 'RANI LAKSHMIBAI', role: 'Leader, 1857 Revolt', yr: 'c.1828–1858' },
                { src: '/TheImperialAudit/illustrations/dossiers/azad.jpg', name: 'CHANDRASHEKHAR AZAD', role: 'HSRA Commander', yr: '1906–1931' },
                { src: '/TheImperialAudit/illustrations/dossiers/birsa.jpg', name: 'BIRSA MUNDA', role: 'Adivasi Ulgulan', yr: '1875–1900' },
                { src: '/TheImperialAudit/illustrations/dossiers/tilak.jpg', name: 'LOKMANYA TILAK', role: 'Editor, Kesari', yr: '1856–1920' },
                { src: '/TheImperialAudit/illustrations/dossiers/patel.jpg', name: 'VALLABHBHAI PATEL', role: 'Bardoli & Union', yr: '1875–1950' },
                { src: '/TheImperialAudit/illustrations/dossiers/hazratmahal.jpg', name: 'BEGUM HAZRAT MAHAL', role: 'Regent of Awadh', yr: 'c.1820–1879' },
                { src: '/TheImperialAudit/illustrations/dossiers/dyer.jpg', name: 'GEN. REGINALD DYER', role: 'Amritsar Firing', yr: '1864–1927' },
                { src: '/TheImperialAudit/illustrations/dossiers/clive.jpg', name: 'ROBERT CLIVE', role: 'Bengal Conquest', yr: '1725–1774' },
                { src: '/TheImperialAudit/illustrations/dossiers/udham.jpg', name: 'UDHAM SINGH', role: 'Caxton Hall 1940', yr: '1899–1940' },
              ].map((item) => (
                <div key={item.src} className="group">
                  <div className="w-full h-44 sm:h-52 flex items-center justify-center overflow-hidden border border-[#2A2A2A] bg-[#0E0E0E] p-2">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain block transition-opacity duration-300 group-hover:opacity-100 opacity-80"
                      style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
                    />
                  </div>
                  <div className="mt-2.5 space-y-0.5">
                    <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#F5F5F0] font-bold leading-tight">
                      {item.name}
                    </p>
                    <p className="font-serif italic text-[12px] text-[#B5B5AF] leading-tight">
                      {item.role}
                    </p>
                    <p className="font-mono text-[12px] text-[#E53935] tracking-[0.05em]">
                      {item.yr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Searchable Records Catalog */}
          <div className="pt-12 border-t border-[#2A2A2A]">
            <SearchableArchive onOpenSourceDoc={handleOpenSourceDoc} />
          </div>
        </section>
      </main>

      {/* Research Status Footer */}
      <ResearchStatusFooter lang={lang} />

      {/* Fixed Page Corner Badges */}
      <PageCornerBadges fileNo="1757-1947" chapterTitle="ARCHIVE" pageNum="001" totalPages="190" />

      {/* Global Archival Source Document Viewer Modal */}
      <SourceViewerModal
        docId={activeDocId}
        onClose={handleCloseSourceDoc}
      />

      {/* Global Audit Figure ($45T) Modal */}
      <AuditFigureModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onOpenSourceDoc={handleOpenSourceDoc}
      />
    </>
  );
};
