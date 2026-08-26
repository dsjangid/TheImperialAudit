'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LiveSpendCounter } from '@/components/LiveSpendCounter';
import { LiveClock } from '@/components/LiveClock';
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
      <main className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32" vt-update="auto">
        {/* Masthead & Primary Metadata */}
        <div className="border-b border-text/15 pb-8 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] uppercase tracking-[0.25em] text-text/50 mb-6">
            <span className="text-accent font-semibold">HISTORICAL DISPATCH · SPECIAL INVESTIGATIVE ARCHIVE</span>
            <span>VOL. I · DECLASSIFIED RECORD · 1757–1947</span>
            <span>PUBLISHED IN LONDON &amp; NEW DELHI</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <EvidenceBadge category="PRIMARY_RECORD" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent font-semibold">
                  AN UNREDACTED INVESTIGATION INTO 190 YEARS OF COLONIAL RULE
                </p>
              </div>

              <h1
                className="font-serif text-text text-[clamp(40px,7.5vw,110px)] leading-[0.93] tracking-[-0.01em] uppercase font-black"
                style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
              >
                THE IMPERIAL<br />AUDIT · 1757–1947
              </h1>
              <p className="font-serif italic text-[clamp(18px,2vw,24px)] text-text/75 mt-6 leading-snug max-w-[44ch]">
                A forensic long-form chronicle of corporate conquest, fiscal extraction, engineered famines, and popular resistance in British India.
              </p>
            </div>

            {/* Masthead Aside Metadata */}
            <div className="col-span-12 lg:col-span-4 font-mono text-[13px] text-text/60 space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-text/15 lg:pl-8">
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-text/35">CURATED BY</span>
                <span className="text-text/90 font-medium">The Declassified Colonial Archive Project</span>
              </div>

              <div className="pt-2">
                <span className="block text-[11px] uppercase tracking-[0.2em] text-text/35">ESTIMATED WEALTH EXTRACTION</span>
                <span className="text-accent font-bold text-[16px] block mt-0.5">~$45 Trillion (1765–1938)</span>
                <button
                  type="button"
                  onClick={() => setIsAuditModalOpen(true)}
                  className="mt-1 text-[11px] text-accent uppercase tracking-[0.15em] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>[ AUDIT THE FIGURE → ]</span>
                </button>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-text/35">PRIMARY ARCHIVES CITED</span>
                <span className="text-text/90">32 Verified Parliamentary &amp; State Records</span>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-text/35">CURRENT TIME ELAPSED</span>
                <div className="text-text/90 pt-0.5">
                  <LiveClock />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Editorial Overview */}
        <section className="my-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-text/40 mb-4">EDITORIAL PROLOGUE</p>
              <div className="space-y-6 font-serif text-[18px] md:text-[19px] leading-[1.75] text-text/85">
                <p>
                  <span className="float-left text-[68px] leading-[0.75] font-serif font-bold text-accent pr-4 pt-2">I</span>
                  n 1757, the East India Company, a private, profit-maximising joint-stock corporation chartered in London, won the Battle of Plassey through <span className="text-accent font-semibold">clandestine bribery and military treachery</span>, establishing corporate dominion over the vast revenues of Bengal. In August 1947, the British Crown evacuated the subcontinent in a hasty, three-month partition that displaced 15 million people and left <span className="text-accent font-semibold">between 500,000 and one million dead</span> in sectarian bloodshed.
                </p>
                <p>
                  Between these two terminal dates lies nearly two centuries of documented governance that transformed the wealthiest economy of the early modern world into a debt-burdened, deindustrialised territory governed by coercive force. This publication is not an ideological pamphlet; it is an evidence-first forensic chronicle constructed from the official dispatches of the India Office, the minutes of the British Cabinet, parliamentary inquiries in Hansard, and peer-reviewed macroeconomic datasets.
                </p>
                <p>
                  Each chapter below functions as a standalone long-form investigative article, exploring the mechanics of conquest, the violent rupture of 1857, the architecture of recurring famines, the minute-by-minute anatomy of the 1919 Jallianwala Bagh massacre, and the biographies of those who governed and resisted.
                </p>
              </div>
            </div>

            <aside className="col-span-12 md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-6 pt-6">
              <div className="border-l border-text/20 pl-4 space-y-2">
                <p className="text-accent">PRIMARY CORPUS</p>
                <p>India Office Records, British Library</p>
                <p>National Archives, Kew</p>
                <p>Hansard Parliamentary Debates</p>
                <p>Hunter Commission Report, 1920</p>
              </div>
              <div className="border-l border-text/20 pl-4 space-y-2 pt-2">
                <p className="text-text/70">SCOPE</p>
                <p>190 Years of Rule</p>
                <p>5 Standalone Dispatches</p>
                <p>47 Documented Incidents</p>
              </div>
            </aside>
          </div>
        </section>

        <hr className="border-t border-text/10 my-16" />

        {/* Live Economic Extraction Counter & Interactive Audit Trigger */}
        <section className="my-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <EvidenceBadge category="ECONOMIC_DATA" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-accent">
                  FISCAL MECHANISM · THE DRAIN OF WEALTH
                </p>
              </div>

              <h2 className="font-serif text-[28px] md:text-[38px] font-bold leading-tight mb-4">
                Compounded Imperial Transfer: ~$45 Trillion
              </h2>
              <p className="font-serif text-[16px] text-text/70 leading-relaxed max-w-[65ch] mb-6">
                In a landmark econometric study published by Columbia University Press (2018), economist Professor Utsa Patnaik calculated that between 1765 and 1938, Britain drained a total of <span className="text-accent font-bold">~$44.63 trillion (in 2016 USD)</span> from India. This extraction operated through the Council Bills mechanism and export surplus interception, where Indian tax revenues were used to buy Indian export goods for London without British capital outlay. The real-time counter below represents the compounded per-second rate of that historical transfer.
              </p>

              {/* Interactive Audit Button */}
              <div className="mb-8">
                <button
                  type="button"
                  onClick={() => setIsAuditModalOpen(true)}
                  className="px-5 py-3 bg-accent text-white font-mono text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-accent/90 transition-all flex items-center gap-2"
                >
                  <span>AUDIT THE $45 TRILLION FIGURE</span>
                  <span>→</span>
                </button>
              </div>

              <div className="mt-4">
                <LiveSpendCounter lang="en" ratePerSecondUsd={5868} ratePerSecondRub={534000} />
              </div>
            </div>

            <aside className="col-span-12 md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <p>SOURCE: COLUMBIA UNIV. PRESS</p>
              <p>MECHANISM: COUNCIL BILLS &amp; HOME CHARGES</p>
              <p>RESULT: STRUCTURAL DEINDUSTRIALISATION</p>
              <button
                type="button"
                onClick={() => handleOpenSourceDoc('doc-patnaik-drain-calc')}
                className="pt-3 text-accent hover:underline block font-bold text-left uppercase tracking-[0.15em] text-[12px]"
              >
                [ VIEW ECONOMETRIC RECORD → ]
              </button>
            </aside>
          </div>
        </section>

        {/* Eye Illustration Transition */}
        <div className="my-16">
          <EyeIllustration href="/en/chapters/timer" lang="en" />
        </div>

        {/* 1. THE IMPERIAL LEDGER (P0 SIGNATURE TIMELINE) */}
        <ImperialLedger onOpenSourceDoc={handleOpenSourceDoc} />

        {/* 2. DOCUMENT OF THE RECORD SPOTLIGHT #014 */}
        <div className="my-16">
          <DocumentOfTheRecord
            docId="doc-bengal-famine-1770"
            recordNo="014"
            onOpenSourceDoc={handleOpenSourceDoc}
          />
        </div>

        {/* 3. FOLLOW THE MONEY (P1 FLOW DIAGRAM & LEDGER) */}
        <FollowTheMoney onOpenSourceDoc={handleOpenSourceDoc} />

        {/* 4. THE GEOGRAPHY OF EMPIRE (P1 INTERACTIVE MAP) */}
        <GeographyMap onOpenSourceDoc={handleOpenSourceDoc} />

        {/* 5. AUDITING THE RECORD: MYTH VS HISTORICAL EVIDENCE (P2) */}
        <MythRecordInspector onOpenSourceDoc={handleOpenSourceDoc} />

        {/* Unframed Archival Photo Strip */}
        <section className="my-20 border-t border-b border-text/15 py-12">
          <div className="flex justify-between items-baseline mb-8">
            <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-text/50">
              ARCHIVAL PHOTOGRAPHS &amp; CONTEMPORARY ENGRAVINGS · 1757–1947
            </p>
            <span className="font-mono text-[13px] text-text/35 uppercase">MONOCHROME ARCHIVE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { src: '/TheImperialAudit/illustrations/dossiers/gandhi.jpg', name: 'M. K. GANDHI', role: 'Civil Disobedience', yr: '1869–1948' },
              { src: '/TheImperialAudit/illustrations/dossiers/bhagat.jpg', name: 'BHAGAT SINGH', role: 'HSRA Revolutionary', yr: '1907–1931' },
              { src: '/TheImperialAudit/illustrations/dossiers/bose.jpg', name: 'SUBHAS CHANDRA BOSE', role: 'Commander, INA', yr: '1897–1945' },
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
                <div className="w-full h-44 sm:h-52 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-full max-w-full w-auto h-auto object-contain block transition-opacity duration-300 group-hover:opacity-100 opacity-85"
                    style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
                  />
                </div>
                <div className="mt-2.5 space-y-0.5">
                  <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/80 font-bold leading-tight">
                    {item.name}
                  </p>
                  <p className="font-serif italic text-[13px] text-text/50 leading-tight">
                    {item.role}
                  </p>
                  <p className="font-mono text-[13px] text-text/30 tracking-[0.05em]">
                    {item.yr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Long-Form Chapters Directory */}
        <section className="my-20">
          <div className="flex justify-between items-baseline mb-10 pb-4 border-b border-text/15">
            <div>
              <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-text/40 mb-1">
                TABLE OF CONTENTS
              </p>
              <h2 className="font-serif text-[32px] md:text-[44px] font-bold">
                The Five Dispatches
              </h2>
            </div>
            <span className="font-mono text-[13px] text-text/40 uppercase tracking-[0.15em]">
              UNREDACTED EDITIONS
            </span>
          </div>

          <div className="space-y-12">
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
              },
              {
                num: '05',
                tag: 'REGIONAL ATLAS & ARCHIVE',
                title: 'Part V: The Subcontinental Corpus',
                subtitle: 'Regional Incident Explorer, Historiography & Primary Bibliography',
                desc: 'Organised chronicles across 12 distinct Indian regions, classification by resistance taxonomy (Tribal, Peasant, Revolutionary, Military, Famine), and full citations to the India Office Records and parliamentary papers.',
                readTime: '20 MIN READ · 32 PRIMARY SOURCES',
                href: '/en/chapters/action',
                img: '/TheImperialAudit/illustrations/dossiers/bhagat.jpg',
              },
            ].map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group block border-b border-text/10 pb-12 hover:border-text/30 transition-colors"
              >
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-12 md:col-span-3 lg:col-span-2">
                    <span className="font-mono text-[40px] md:text-[52px] leading-none text-text/20 group-hover:text-accent transition-colors font-bold block">
                      {item.num}
                    </span>
                    <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mt-2 block font-semibold">
                      {item.tag}
                    </span>
                    <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-text/40 mt-1 block">
                      {item.readTime}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-6 lg:col-span-7">
                    <h3 className="font-serif text-[26px] md:text-[34px] font-bold leading-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-[16px] text-text/75 mt-1">
                      {item.subtitle}
                    </p>
                    <p className="font-serif text-[15px] text-text/60 mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-accent font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Read Full Dispatch</span>
                      <span>→</span>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-3 lg:col-span-3 hidden md:flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto max-h-[220px] object-contain block opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.92)' }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. SEARCHABLE ARCHIVE (P1) */}
        <SearchableArchive onOpenSourceDoc={handleOpenSourceDoc} />
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
