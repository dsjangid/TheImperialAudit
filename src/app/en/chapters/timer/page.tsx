'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { SourceViewerModal } from '@/components/SourceViewerModal';
import { ClaimEvidenceConclusion } from '@/components/ClaimEvidenceConclusion';
import { ResearchStatusFooter } from '@/components/ResearchStatusFooter';

export default function ConquestChapterPage() {
  const [activeDocId, setActiveDocId] = useState<string | null>(null);

  const handleOpenSourceDoc = (docId: string) => {
    setActiveDocId(docId);
  };

  return (
    <div className="min-h-screen bg-bg text-[#D6D6D0] selection:bg-accent/30 flex flex-col justify-between">
      <Navbar lang="en" />
      <PageCornerBadges fileNo="001" chapterTitle="CONQUEST" pageNum="008" totalPages="190" />

      <main className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32 pb-24 flex-1">
        {/* Case File Masthead */}
        <header className="mb-16 border-b border-[#2A2A2A] pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] uppercase tracking-[0.25em] text-[#A3A39D] mb-6">
            <span className="text-[#C62828] font-semibold">CASE № IA-1757-1857-001 · DISPATCH I</span>
            <span>26 MIN READ · 12 PRIMARY DISPATCHES</span>
            <span>DECLASSIFIED IMPERIAL PAPERS</span>
          </div>

          <h1
            className="font-serif text-[#F5F5F0] text-[clamp(36px,7.5vw,100px)] leading-[0.93] tracking-[-0.01em] uppercase font-black mb-4"
            style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
          >
            The Corporate Takeover
          </h1>
          <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] text-[#D6D6D0] leading-snug max-w-[45ch]">
            How a Joint-Stock Trading Monopoly Subjugated an Empire: From Plassey to the Annexation of Awadh.
          </p>

          {/* Case Dossier Metadata Table */}
          <div className="mt-8 pt-6 border-t border-[#2A2A2A] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[12px] text-[#A3A39D]">
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">CASE TIMELINE</span>
              <span className="text-[#D6D6D0] font-medium"><span className="text-[#E53935]">1757 — 1857</span> (100 Years)</span>
            </div>
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">PRIMARY ARCHIVES</span>
              <span className="text-[#D6D6D0]">IOR (British Library) &amp; Hansard</span>
            </div>
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">KEY RESPONDENTS</span>
              <span className="text-[#D6D6D0]">Clive, Hastings, Cornwallis, Dalhousie</span>
            </div>
            <div>
              <span className="text-[#A3A39D]/60 uppercase text-[10px] block tracking-[0.15em]">EVIDENCE STATUS</span>
              <span className="text-[#C62828] font-semibold">Primary Records &amp; State Papers</span>
            </div>
          </div>
        </header>

        {/* Epigraph Block */}
        <div className="border-y border-[#2A2A2A] py-10 my-12 max-w-[80ch]">
          <p className="font-serif italic text-[19px] leading-[1.75] text-[#D6D6D0] mb-4">
            "The rise of our Indian Empire is not recorded in history; it is occluded in the archives of a Company, and in the debates of Parliament."
          </p>
          <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-[#A3A39D]">
            Attributed to John Stuart Mill, 1858
          </p>
        </div>

        {/* The Four Inquiries */}
        <section className="py-12 border-b border-[#2A2A2A]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-6 font-serif text-[17px] leading-[1.75] text-[#D6D6D0]">
              <p>
                <span className="float-left text-[64px] leading-[0.8] font-serif font-bold text-[#C62828] pr-3 pt-1">B</span>
                etween 1757 and 1857, the Indian subcontinent bore witness to an unprecedented historical transformation: a London-based mercantile corporation engineered the acquisition of a territorial empire governing over two hundred million subjects. The East India Company, originally chartered by Queen Elizabeth I to secure a share in the lucrative spice trade, metastasised from a coastal trading enterprise into a sprawling military-bureaucratic state.
              </p>
              <p>
                This chapter traces the anatomy of that expansion. It was not a singular, inevitable sweep of conquest, but a fragmented century of political opportunism, calculated diplomatic betrayal, military aggression, and the ruthless extraction of capital. Driven by an insatiable mandate to deliver dividends to shareholders in Leadenhall Street, the Company established a vast standing army funded by the taxation of the very populace it subdued.
              </p>
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[12px] text-[#A3A39D] uppercase tracking-[0.1em] leading-[1.9] space-y-4">
              <div className="border-l border-[#2A2A2A] pl-4 space-y-2">
                <p className="text-[#C62828] font-bold">THE INQUIRY</p>
                <p>· Corporate Sovereignty</p>
                <p>· Diwani &amp; Famine</p>
                <p>· Unbacked Extraction</p>
                <p>· India Office Records</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 1. BATTLE OF PLASSEY */}
        <section className="py-12 border-b border-[#2A2A2A]" id="plassey">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <EvidenceBadge category="PRIMARY_RECORD" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#C62828] font-semibold">CONQUEST · MILITARY COUP</p>
              </div>

              <h3 className="font-serif text-[#F5F5F0] text-[28px] md:text-[36px] font-bold leading-tight mb-2">
                Battle of Plassey &amp; the 1765 Diwani Grant
              </h3>
              <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-[#A3A39D] mb-8">
                <span className="text-[#E53935]">23 JUNE 1757</span> · PALASHI &amp; ALLAHABAD, BENGAL
              </p>

              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-[#D6D6D0]">
                <p>
                  The confrontation at Palashi on the banks of the Bhagirathi River is traditionally chronicled as the genesis of British dominion in India. However, historical scrutiny reveals an engagement decided less by martial superiority than by clandestine financial negotiations. Robert Clive, commanding a modest detachment of <span className="font-semibold">3,000 Company troops</span>, faced the seemingly overwhelming <span className="font-semibold">50,000-strong army of Siraj ud-Daulah</span>, the Nawab of Bengal. Yet the outcome was preordained in the counting houses of Calcutta, where the Company had successfully conspired with the wealthy Jagat Seth banking family and Mir Jafar, the Nawab’s primary military commander.
                </p>
                <p>
                  When the artillery commenced firing on the morning of 23 June, the vast majority of the Bengali army refused to engage. The betrayal caused the Nawab's forces to collapse from within. Over the subsequent years, this control was formalised by the <span className="font-semibold">Treaty of Allahabad in 1765</span> following the Battle of Buxar, granting the Company Diwani rights, the sovereign legal authority to collect land revenue directly from Bengal, Bihar, and Orissa.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenSourceDoc('doc-ior-diwani-1765')}
                    className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#C62828] hover:text-[#E53935] hover:underline font-bold transition-colors"
                  >
                    [ VIEW PRIMARY ARCHIVE RECORD: 1765 DIWANI FIRMAN → ]
                  </button>
                </div>
              </div>

              {/* Structured Claim -> Evidence -> Conclusion */}
              <ClaimEvidenceConclusion
                claim="Plassey was a conventional military conquest proving European martial superiority."
                evidence="India Office Records (IOR/H/61) reveal a pre-arranged £234,000 financial payout to Clive and secret treaties signed with Mir Jafar weeks before the battle, ensuring the Nawab's main cavalry would stand down."
                conclusion="Plassey was an engineered corporate coup d'état financed by alienated indigenous mercantile bankers, not a military triumph of European arms over Indian numbers."
                sourceDocId="doc-ior-diwani-1765"
                sourceRef="IOR/H/61"
                evidenceCategory="PRIMARY_RECORD"
                onOpenSourceDoc={handleOpenSourceDoc}
              />
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-[#A3A39D] uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="border-l border-[#2A2A2A] pl-4 space-y-2">
                <p className="text-[#C62828] font-bold">LEDGER METRICS</p>
                <p>3,000 COMPANY VS 50,000 NAWAB</p>
                <p>£234,000 EXTRACTED BY CLIVE</p>
                <p>1765 DIWANI SOVEREIGNTY</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 2. THE BENGAL FAMINE OF 1770 */}
        <section className="py-12 border-b border-[#2A2A2A]" id="famine-1770">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <EvidenceBadge category="PRIMARY_RECORD" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#C62828] font-semibold">FAMINE · POLICY EXTRACTION</p>
              </div>

              <h3 className="font-serif text-[#F5F5F0] text-[28px] md:text-[36px] font-bold leading-tight mb-2">
                The Bengal Famine of 1770
              </h3>
              <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-[#A3A39D] mb-8">
                <span className="text-[#E53935]">1769–1773</span> · BENGAL PRESIDENCY (<span className="text-[#E53935]">10 MILLION DEAD</span>)
              </p>

              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-[#D6D6D0]">
                <p>
                  Between 1769 and 1773, the newly acquired territory of Bengal suffered an existential catastrophe. The Great Bengal Famine eradicated <span className="text-[#E53935] font-bold">between seven and ten million people</span>—nearly one-third of the entire population. While a failure of the monsoon initially triggered crop shortages, the catastrophic loss of life was fundamentally a product of colonial economic policy and the aggressive restructuring of traditional agrarian safety nets.
                </p>
                <p>
                  The East India Company, having just acquired the Diwani revenue-collecting rights, drastically altered local grain markets and taxation structures. Pre-colonial mechanisms that stored surplus grain and provided tax relief during droughts were dismantled in favour of inflexible revenue maximization. Even as corpses choked the streets of Murshidabad and Calcutta, the Company's revenue councils enforced 100% tax collection, raising assessments by 10% under Warren Hastings.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenSourceDoc('doc-bengal-famine-1770')}
                    className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#C62828] hover:text-[#E53935] hover:underline font-bold transition-colors"
                  >
                    [ VIEW PRIMARY ARCHIVE RECORD: 1770 CALCUTTA REVENUE DISPATCH → ]
                  </button>
                </div>
              </div>

              <ClaimEvidenceConclusion
                claim="The 1770 Famine was an unavoidable natural drought beyond administrative remedy."
                evidence="Calcutta Council Dispatch No. 34 (IOR/E/4/27) to the Court of Directors in London explicitly boasted: 'Notwithstanding the great severity of the late famine... we have been able to maintain the revenue of this year equal to that of the former.'"
                conclusion="The mortality was drastically magnified by corporate fiscal policies that outlawed grain hoarding by Indian merchants while Company servants engaged in private speculation, refusing tax remissions while millions starved."
                sourceDocId="doc-bengal-famine-1770"
                sourceRef="IOR/E/4/27"
                evidenceCategory="PRIMARY_RECORD"
                onOpenSourceDoc={handleOpenSourceDoc}
              />
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-[#A3A39D] uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="border-l border-[#2A2A2A] pl-4 space-y-2">
                <p className="text-[#C62828] font-bold">CASUALTY AUDIT</p>
                <p>EST. 7–10 MILLION FATALITIES</p>
                <p>1/3 OF POPULATION PERISHED</p>
                <p>REVENUE KEPT AT 100% QUOTA</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 3. PERMANENT SETTLEMENT 1793 */}
        <section className="py-12 border-b border-[#2A2A2A]" id="permanent-settlement">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <EvidenceBadge category="PRIMARY_RECORD" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#C62828] font-semibold">AGRARIAN APPARATUS · LEGISLATION</p>
              </div>

              <h3 className="font-serif text-[#F5F5F0] text-[28px] md:text-[36px] font-bold leading-tight mb-2">
                The Permanent Settlement of 1793
              </h3>
              <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-[#A3A39D] mb-8">
                <span className="text-[#E53935]">1 MAY 1793</span> · CORNWALLIS CODE (REGULATION I)
              </p>

              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-[#D6D6D0]">
                <p>
                  Enacted by Governor-General Lord Cornwallis, Regulation I of 1793 fixed land revenue assessments on Bengal zamindars forever. Traditional revenue collectors were converted into absolute private landlords, while millions of actual peasant cultivators (ryots) were stripped of customary hereditary rights and reduced to tenants-at-will.
                </p>
                <p>
                  Under the rigid Sunset Law, if a zamindar failed to pay the fixed tax quota by sunset on the appointed day, their estate was auctioned by the Company. This created widespread agrarian dispossession, leading to the rise of absentee landlords, moneylender exploitation, and periodic peasant revolts.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenSourceDoc('doc-cornwallis-1793')}
                    className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#C62828] hover:text-[#E53935] hover:underline font-bold transition-colors"
                  >
                    [ VIEW PRIMARY ARCHIVE RECORD: REGULATION I OF 1793 → ]
                  </button>
                </div>
              </div>
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-[#A3A39D] uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="border-l border-[#2A2A2A] pl-4 space-y-2">
                <p className="text-[#F5F5F0] font-bold">SETTLEMENT RULES</p>
                <p>89% TAX SHARE TO COMPANY</p>
                <p>11% RETAINED BY ZAMINDAR</p>
                <p>SUNSET LAW FORFEITURES</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 4. ANNEXATION OF AWADH 1856 */}
        <section className="py-12" id="awadh">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <EvidenceBadge category="PRIMARY_RECORD" size="sm" />
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#C62828] font-semibold">ANNEXATION · PRELUDE TO 1857</p>
              </div>

              <h3 className="font-serif text-[#F5F5F0] text-[28px] md:text-[36px] font-bold leading-tight mb-2">
                The Unilateral Annexation of Awadh (1856)
              </h3>
              <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-[#A3A39D] mb-8">
                <span className="text-[#E53935]">7 FEBRUARY 1856</span> · LUCKNOW &amp; CALCUTTA
              </p>

              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-[#D6D6D0]">
                <p>
                  Governor-General Lord Dalhousie annexed the sovereign Kingdom of Awadh on the pretext of 'misgovernance', exiling Nawab Wajid Ali Shah to Calcutta and confiscating the estates of over 20,000 talukdars. Because Awadh was the primary recruitment basin for the Bengal Native Army, this annexation directly antagonized over 40,000 sepoys whose families were subjected to higher British land taxes.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenSourceDoc('doc-dalhousie-awadh-1856')}
                    className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#C62828] hover:text-[#E53935] hover:underline font-bold transition-colors"
                  >
                    [ VIEW PRIMARY ARCHIVE RECORD: DALHOUSIE AWADH MINUTE → ]
                  </button>
                </div>
              </div>
            </div>

            <aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-[#A3A39D] uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="border-l border-[#2A2A2A] pl-4 space-y-2">
                <p className="text-[#C62828] font-bold">1857 CATALYST</p>
                <p>40,000 SEPOYS ALIENATED</p>
                <p>20,000 TALUKDARS DISPOSSESSED</p>
                <p>TREASURY SEIZED</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Chapter Transition Link */}
        <div className="pt-16 border-t border-[#2A2A2A] flex justify-between items-center font-mono text-[13px]">
          <Link href="/en" className="text-[#A3A39D] hover:text-[#F5F5F0] uppercase tracking-[0.15em] transition-colors">
            ← Back to Cover
          </Link>
          <Link
            href="/en/chapters/comparison"
            className="text-[#C62828] hover:text-[#E53935] hover:underline font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors"
          >
            <span>Proceed to Part II: The Great Rupture (1857)</span>
            <span>→</span>
          </Link>
        </div>
      </main>

      <ResearchStatusFooter lang="en" />

      {/* Global Archival Source Document Viewer Modal */}
      <SourceViewerModal
        docId={activeDocId}
        onClose={() => setActiveDocId(null)}
      />
    </div>
  );
}
