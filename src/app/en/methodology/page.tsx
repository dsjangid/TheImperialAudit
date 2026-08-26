import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { ResearchStatusFooter } from '@/components/ResearchStatusFooter';
import { EvidenceBadge } from '@/components/EvidenceBadge';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col justify-between">
      <Navbar lang="en" />
      <PageCornerBadges fileNo="APP-001" chapterTitle="METHODOLOGY" pageNum="180" totalPages="190" />

      <main className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32 pb-24 flex-1">
        {/* Masthead */}
        <header className="mb-16 border-b border-text/15 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] uppercase tracking-[0.25em] text-text/50 mb-6">
            <span className="text-accent font-semibold">RESEARCH APPENDIX · METHODOLOGY &amp; HISTORIOGRAPHY</span>
            <span>ACADEMIC INTEGRITY STATEMENT</span>
            <span>DECLASSIFIED COLONIAL ARCHIVE</span>
          </div>

          <h1
            className="font-serif text-text text-[clamp(36px,7.5vw,90px)] leading-[0.93] tracking-[-0.01em] uppercase font-black mb-4"
            style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
          >
            Methodology &amp;<br />Archival Standards
          </h1>
          <p className="font-serif italic text-[clamp(18px,2.2vw,24px)] text-text/75 leading-snug max-w-[50ch]">
            A formal statement on archival documentation, fiscal quantification, primary source cross-referencing, and demographic analysis in colonial South Asia (1757–1947).
          </p>

          <div className="mt-8 pt-6 border-t border-text/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] text-text/40">
            <div>
              <span className="text-text/25 uppercase text-[11px] block tracking-[0.15em]">CORE METHOD</span>
              <span className="text-text/80">Cross-Referencing Colonial Administrative Dispatches with Economic Datasets</span>
            </div>
            <div>
              <span className="text-text/25 uppercase text-[11px] block tracking-[0.15em]">PRINCIPLE</span>
              <span className="text-accent font-bold">Unredacted Primary Documentation &amp; Peer-Reviewed Historiography</span>
            </div>
          </div>
        </header>

        {/* Section 1: Sources & Archival Corpus */}
        <section className="py-10 border-b border-text/10" id="sources">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent font-bold block mb-2">
                SECTION 01
              </span>
              <h2 className="font-serif text-[28px] md:text-[34px] font-bold leading-tight">
                The Archival Corpus
              </h2>
              <p className="font-serif italic text-[14px] text-text/60 mt-2">
                Repositories, provenance, and criteria for inclusion.
              </p>
            </div>

            <div className="md:col-span-8 space-y-6 font-serif text-[16px] leading-[1.8] text-text/85">
              <p>
                The Imperial Audit is constructed primarily from the administrative papers of the imperial state itself. Rather than relying on secondary retrospectives alone, the investigation utilizes the unredacted proceedings of the <strong>India Office Records (IOR)</strong> preserved at the British Library in London, the <strong>National Archives at Kew</strong>, and the official reports of the <strong>Hansard Parliamentary Debates</strong>.
              </p>
              <div className="space-y-4 font-mono text-[12px] divide-y divide-text/10">
                <div className="pt-3">
                  <strong className="text-text block mb-1">1. India Office Records (IOR), British Library:</strong>
                  <span className="font-serif text-text/75 text-[14px]">
                    Series L/PJ (Public &amp; Judicial), L/PS (Political &amp; Secret), L/MIL (Military Department), and E/4 (Correspondence with India). Provides the internal, uncensored communications between the Governor-General in Calcutta/Delhi and the Court of Directors/Secretary of State in London.
                  </span>
                </div>
                <div className="pt-3">
                  <strong className="text-text block mb-1">2. The National Archives (TNA), Kew:</strong>
                  <span className="font-serif text-text/75 text-[14px]">
                    Cabinet Papers (CAB 65 series) and Prime Minister’s Operational Papers (PREM 4 series), documenting War Cabinet decisions on the 1943 Bengal Famine shipping allocations and 1942 Quit India military responses.
                  </span>
                </div>
                <div className="pt-3">
                  <strong className="text-text block mb-1">3. Statutory Inquiries &amp; Command Papers:</strong>
                  <span className="font-serif text-text/75 text-[14px]">
                    Official parliamentary investigative commission reports including the Hunter Committee Report (Cmd. 681, 1920), the Welby Commission on Indian Expenditure (Cmd. 131, 1900), and the Woodhead Famine Inquiry Commission (Cmd. 6635, 1945).
                  </span>
                </div>
                <div className="pt-3">
                  <strong className="text-text block mb-1">4. Vernacular &amp; Nationalist Contemporary Records:</strong>
                  <span className="font-serif text-text/75 text-[14px]">
                    The Congress Punjab Sub-Committee Report (1920), the journals <em>Kesari</em> (Tilak) and <em>Amrita Bazar Patrika</em>, and regional judicial trial records from the National Archives of India (New Delhi).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Economic Datasets & Drain Quantification */}
        <section className="py-10 border-b border-text/10" id="economic-data">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent font-bold block mb-2">
                SECTION 02
              </span>
              <h2 className="font-serif text-[28px] md:text-[34px] font-bold leading-tight">
                Economic Models &amp; Fiscal Drain
              </h2>
              <p className="font-serif italic text-[14px] text-text/60 mt-2">
                Methodological breakdown of the ~$45 Trillion calculation and trade interception.
              </p>
            </div>

            <div className="md:col-span-8 space-y-6 font-serif text-[16px] leading-[1.8] text-text/85">
              <p>
                A central pillar of this investigation is the quantification of unrequited financial transfers from India to Great Britain between 1765 and 1938. The primary econometric model cited across this publication was developed by Professor Utsa Patnaik (Columbia University Press, 2018).
              </p>
              <div className="border-l-2 border-accent pl-4 space-y-2 font-mono text-[12px]">
                <span className="text-accent font-bold block uppercase tracking-[0.15em]">
                  FORMULA &amp; TRANSACTION MECHANISM:
                </span>
                <p className="font-serif text-[14px] text-text/80 leading-relaxed">
                  The model tracks the <strong>net merchandise export surplus</strong> of British India over 173 years. Because foreign importers purchased Indian goods by buying Council Bills from the Secretary of State in London using gold/sterling, the physical international currency was retained in the British exchequer. The Indian exporter was reimbursed in rupees drawn directly from the domestic taxes collected from Indian peasants.
                </p>
                <div className="pt-2 text-[11px] text-text/60">
                  Compounding Equation: <code>Total Drain = &Sigma; [ Annual Net Export Surplus(t) &times; (1 + r)^(2016 - t) ]</code> where <code>r = 0.05</code> (5% standard historical commercial rate).
                </div>
              </div>
              <p>
                This calculation demonstrates that India served as the financial engine of the British Empire, generating the international exchange necessary for Britain to settle trade deficits with North America and Europe while financing the overseas expansion of British capital.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Incident Classification Taxonomy */}
        <section className="py-10 border-b border-text/10" id="incidents">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent font-bold block mb-2">
                SECTION 03
              </span>
              <h2 className="font-serif text-[28px] md:text-[34px] font-bold leading-tight">
                Incident Classification Taxonomy
              </h2>
              <p className="font-serif italic text-[14px] text-text/60 mt-2">
                Standardized criteria for categorizing 190 years of events.
              </p>
            </div>

            <div className="md:col-span-8 space-y-4 font-mono text-[12px]">
              <div className="divide-y divide-text/10">
                <div className="py-3 space-y-1">
                  <span className="text-accent font-bold uppercase">1. FISCAL EXTRACTION</span>
                  <p className="font-serif text-[14px] text-text/75">
                    Land revenue settlements, currency manipulation (Council Bills), salt monopolies, and guaranteed railway returns extracting capital without reciprocal return.
                  </p>
                </div>
                <div className="py-3 space-y-1">
                  <span className="text-accent font-bold uppercase">2. ARMED RESISTANCE &amp; REVOLT</span>
                  <p className="font-serif text-[14px] text-text/75">
                    Adivasi uprisings (Santhal Hul, Birsa Munda), peasant rebellions, sepoy mutinies (Vellore 1806, 1857), and revolutionary actions (HSRA, Chittagong).
                  </p>
                </div>
                <div className="py-3 space-y-1">
                  <span className="text-accent font-bold uppercase">3. POLICY &amp; AGRARIAN FAMINES</span>
                  <p className="font-serif text-[14px] text-text/75">
                    Mortality events where climatic shortfalls were converted into mass starvation by inflexible tax collection, grain exports, or wartime denial policies.
                  </p>
                </div>
                <div className="py-3 space-y-1">
                  <span className="text-accent font-bold uppercase">4. LEGISLATIVE &amp; JURIDICAL ACTS</span>
                  <p className="font-serif text-[14px] text-text/75">
                    Statutory acts transforming sovereignty (1793 Permanent Settlement, 1858 Government of India Act, 1919 Rowlatt Act, 1947 Independence Act).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Casualties & Demographic Uncertainty */}
        <section className="py-10 border-b border-text/10" id="casualties">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent font-bold block mb-2">
                SECTION 04
              </span>
              <h2 className="font-serif text-[28px] md:text-[34px] font-bold leading-tight">
                Casualties &amp; Demographic Uncertainty
              </h2>
              <p className="font-serif italic text-[14px] text-text/60 mt-2">
                Addressing gaps in colonial demographic registries.
              </p>
            </div>

            <div className="md:col-span-8 space-y-6 font-serif text-[16px] leading-[1.8] text-text/85">
              <p>
                Demographic statistics from the colonial era are inherently subject to administrative bias, incomplete census coverage, and under-registration of rural mortality. This archive adheres to the following principles:
              </p>
              <ul className="list-disc pl-6 space-y-3 font-serif text-[15px] text-text/80">
                <li>
                  <strong>Famine Mortality Ranges:</strong> For the Great Bengal Famine of 1770, colonial records indicate approximately 10 million deaths (one-third of the population). For the 1876–78 famine, estimates range from 5.5 million (official Famine Commission) to 10.3 million (demographer A. Maharatna and Mike Davis). Both the conservative official figures and modern demographic reconstructions are recorded.
                </li>
                <li>
                  <strong>The 1857 Uprising:</strong> British civilian casualties (estimated at ~2,000–3,000) are thoroughly documented in military logs, whereas Indian deaths—resulting from indiscriminate village burnings, mass hangings, and martial law executions across the Gangetic plains—are estimated by historians (e.g. Amar Farooqui, Thomas Metcalf) to exceed 100,000 to 150,000.
                </li>
                <li>
                  <strong>Jallianwala Bagh (1919):</strong> The official Hunter Commission report recorded 379 dead and 1,200 wounded based on hospital registers. The Indian National Congress Inquiry, led by Pandit Madan Mohan Malaviya through door-to-door eyewitness documentation, established over 1,000 fatalities. Both figures are presented side-by-side.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Historiographical Perspectives */}
        <section className="py-10 border-b border-text/10" id="historiography">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent font-bold block mb-2">
                SECTION 05
              </span>
              <h2 className="font-serif text-[28px] md:text-[34px] font-bold leading-tight">
                Historiographical Analysis
              </h2>
              <p className="font-serif italic text-[14px] text-text/60 mt-2">
                Comparative examination of primary evidence and scholarly interpretations.
              </p>
            </div>

            <div className="md:col-span-8 space-y-6 font-serif text-[16px] leading-[1.8] text-text/85">
              <p>
                Rigorous digital history contextualizes distinct analytical traditions alongside the underlying primary records:
              </p>
              <div className="space-y-6 divide-y divide-text/10">
                <div className="pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="font-mono text-[12px] uppercase text-text">
                      HISTORIOGRAPHY A: THE MECHANICS OF THE FISCAL DRAIN
                    </strong>
                    <EvidenceBadge category="PRIMARY_RECORD" size="sm" />
                  </div>
                  <p className="font-serif text-[14px] text-text/80 leading-relaxed">
                    While nationalist and economic historians (Naoroji, Dutt, Habib, Patnaik) document the drain as structural, unrequited extraction through council bills and home charges, comparative economic historians (e.g. Roy) examine the debt servicing and currency mechanisms that sustained the imperial treasury.
                  </p>
                </div>

                <div className="pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="font-mono text-[12px] uppercase text-text">
                      HISTORIOGRAPHY B: CAUSATION OF THE 1943 BENGAL FAMINE
                    </strong>
                    <EvidenceBadge category="PRIMARY_RECORD" size="sm" />
                  </div>
                  <p className="font-serif text-[14px] text-text/80 leading-relaxed">
                    Nobel laureate Amartya Sen demonstrated in <em>Poverty and Famines</em> (1981) that 1943 was a food entitlement failure caused by wartime inflation and hoarding rather than an absolute crop shortfall. Archival research by Madhusree Mukerjee documents War Cabinet shipping records withholding merchant fleet allocations for India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Peer-Reviewed Bibliography */}
        <section className="py-10" id="bibliography">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent font-bold block mb-2">
                SECTION 06
              </span>
              <h2 className="font-serif text-[28px] md:text-[34px] font-bold leading-tight">
                Academic Bibliography
              </h2>
              <p className="font-serif italic text-[14px] text-text/60 mt-2">
                Peer-reviewed historical and economic literature cited across this publication.
              </p>
            </div>

            <div className="md:col-span-8 font-mono text-[12px] space-y-4">
              <div className="divide-y divide-text/10">
                {[
                  {
                    author: "Patnaik, Utsa",
                    year: "2018",
                    title: "Essays on Agrarian Issues and Exploitation",
                    pub: "Columbia University Press, New York.",
                  },
                  {
                    author: "Sen, Amartya",
                    year: "1981",
                    title: "Poverty and Famines: An Essay on Entitlement and Deprivation",
                    pub: "Oxford University Press, Oxford.",
                  },
                  {
                    author: "Habib, Irfan",
                    year: "2006",
                    title: "Indian Economy 1858–1914: People's History of India",
                    pub: "Tulika Books, New Delhi.",
                  },
                  {
                    author: "Tharoor, Shashi",
                    year: "2016",
                    title: "Inglorious Empire: What the British Did to India",
                    pub: "Penguin Random House / Scribe.",
                  },
                  {
                    author: "Mukerjee, Madhusree",
                    year: "2010",
                    title: "Churchill's Secret War: The British Empire and the Ravaging of Bengal during World War II",
                    pub: "Basic Books, New York.",
                  },
                  {
                    author: "Dalrymple, William",
                    year: "2019",
                    title: "The Anarchy: The Relentless Rise of the East India Company",
                    pub: "Bloomsbury Publishing, London.",
                  },
                  {
                    author: "Chaudhuri, K. N.",
                    year: "1978",
                    title: "The Trading World of Asia and the English East India Company: 1660–1760",
                    pub: "Cambridge University Press.",
                  },
                  {
                    author: "Naoroji, Dadabhai",
                    year: "1901",
                    title: "Poverty and Un-British Rule in India",
                    pub: "Swan Sonnenschein & Co., London.",
                  },
                  {
                    author: "Dutt, Romesh Chunder",
                    year: "1902",
                    title: "The Economic History of India Under Early British Rule",
                    pub: "Kegan Paul, London.",
                  },
                  {
                    author: "Maddison, Angus",
                    year: "2001",
                    title: "The World Economy: A Millennial Perspective",
                    pub: "OECD Development Centre Studies, Paris.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="py-2.5">
                    <span className="text-accent font-bold mr-2">{item.author} ({item.year}).</span>
                    <span className="font-serif italic text-[14px] text-text/90">
                      {item.title}.
                    </span>{' '}
                    <span className="text-text/50">{item.pub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-16 border-t border-text/15 flex justify-between items-center font-mono text-[13px]">
          <Link href="/en/chapters/action" className="text-text/50 hover:text-text uppercase tracking-[0.15em]">
            ← Chapter 05: The Archive
          </Link>
          <Link href="/en" className="text-accent hover:underline font-bold uppercase tracking-[0.2em]">
            Return to Cover Page ↑
          </Link>
        </div>
      </main>

      <ResearchStatusFooter lang="en" />
    </div>
  );
}
