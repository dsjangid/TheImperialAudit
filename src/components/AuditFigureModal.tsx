'use client';

import React, { useEffect, useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';

interface AuditFigureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSourceDoc?: (docId: string) => void;
}

export const AuditFigureModal: React.FC<AuditFigureModalProps> = ({
  isOpen,
  onClose,
  onOpenSourceDoc,
}) => {
  const [activeTab, setActiveTab] = useState<'methodology' | 'dataset' | 'limitations' | 'alternatives'>(
    'methodology'
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] text-[#F2F2F2] border border-text/20 shadow-2xl p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-text/20 pb-4 mb-6">
          <div className="flex items-center gap-3 font-mono text-[12px]">
            <span className="text-accent font-semibold uppercase tracking-[0.25em]">
              FISCAL AUDIT DOSSIER
            </span>
            <span className="text-text/40 tracking-[0.15em] border-l border-text/20 pl-3">
              ESTIMATE № 045-T · CUP (2018)
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[12px] uppercase tracking-[0.2em] text-text/60 hover:text-accent transition-colors flex items-center gap-1"
            aria-label="Close audit dossier"
          >
            <span>[ CLOSE ESC ]</span>
            <span className="text-lg leading-none">&times;</span>
          </button>
        </div>

        {/* Hero Figure & Evidence Classification */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <EvidenceBadge category="SCHOLARLY_ESTIMATE" />
            <EvidenceBadge category="ECONOMIC_DATA" />
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/45">
              PEER-REVIEWED ECONOMETRIC MODEL
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-4">
            <h2
              id="audit-modal-title"
              className="font-serif text-[38px] sm:text-[48px] md:text-[56px] font-black leading-none text-accent"
            >
              ~$44.63 Trillion
            </h2>
            <span className="font-mono text-[13px] text-text/60 uppercase tracking-[0.15em]">
              (2016 USD EQUIVALENT · £9.184 TRILLION NOMINAL COMPOUNDED)
            </span>
          </div>

          <p className="font-serif italic text-[16px] sm:text-[18px] text-text/80 leading-relaxed max-w-[65ch]">
            An audit of the mathematical calculation, archival data sources, transaction mechanics, and scholarly limits behind the total estimated wealth transfer from India to Great Britain (1765–1938).
          </p>
        </div>

        {/* Fact vs Estimate Taxonomy */}
        <div className="border-y border-text/15 py-4 mb-8 font-mono text-[12px] space-y-2">
          <p className="text-accent font-bold uppercase tracking-[0.15em]">
            TAXONOMY DISTINCTION: FACT VS. CALCULATION
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-serif text-[14px] text-text/80">
            <div>
              <span className="font-mono text-[11px] uppercase text-text/50 block mb-1">
                [ EMPIRICAL HISTORICAL RECORD ]
              </span>
              The physical mechanism of Council Bills, unreturned export surpluses, Home Charges, and zero capital inflow from London are indisputable facts documented in official British trade returns and parliamentary registers.
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase text-accent block mb-1">
                [ COMPOUNDED STATISTICAL ESTIMATE ]
              </span>
              The ~$45 Trillion sum is a counterfactual compounding estimate (applying a standard 5% commercial interest rate over 173 years) calculating the opportunity cost if India had retained and reinvested its surplus.
            </div>
          </div>
        </div>

        {/* Nav Tabs */}
        <div className="flex flex-wrap gap-4 border-b border-text/15 mb-6 font-mono text-[11px] uppercase tracking-[0.2em]">
          {[
            { key: 'methodology', label: '1. Methodology' },
            { key: 'dataset', label: '2. Underlying Data' },
            { key: 'limitations', label: '3. Limitations' },
            { key: 'alternatives', label: '4. Alternative Estimates' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`pb-3 transition-colors ${
                activeTab === tab.key
                  ? 'border-b-2 border-accent text-accent font-bold'
                  : 'text-text/50 hover:text-text'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6 font-serif text-[15px] sm:text-[16px] leading-[1.8] text-text/85">
          {activeTab === 'methodology' && (
            <div className="space-y-4">
              <h3 className="font-serif text-[20px] font-bold text-text">
                How Prof. Utsa Patnaik Calculated the Extraction
              </h3>
              <p>
                In <em>Essays on Agrarian Issues and Exploitation</em> (Columbia University Press, 2018), Professor Utsa Patnaik divided the colonial extraction period into two distinct administrative eras:
              </p>
              <ul className="space-y-3 font-mono text-[12px] text-text/80 pl-2">
                <li className="border-l-2 border-accent pl-3">
                  <strong className="text-text">Phase 1: Company Rule (1765–1837)</strong>
                  <p className="font-serif text-[14px] mt-1">
                    The East India Company used up to one-third of collected Bengal land revenues directly to purchase Indian commodities (textiles, spices, saltpetre) for export to Europe, requiring zero capital outlay from Britain.
                  </p>
                </li>
                <li className="border-l-2 border-accent pl-3">
                  <strong className="text-text">Phase 2: Crown Raj &amp; Council Bills (1858–1938)</strong>
                  <p className="font-serif text-[14px] mt-1">
                    Foreign merchants wishing to purchase Indian exports were required to buy <strong>Council Bills</strong> from the Secretary of State in London in gold or sterling. The London treasury retained this hard currency; merchants cashed the bills in Calcutta in rupees generated from Indian taxes. Thus, India received no net foreign exchange for its vast export surplus.
                  </p>
                </li>
              </ul>
              <p className="text-[14px] text-text/70">
                To calculate current value, the annual uncompensated commodity export surpluses were compounded at a standard <strong>5% commercial rate</strong> from each year of extraction up to 2016, yielding a cumulative nominal total of <strong>£9.184 trillion</strong>, equivalent to <strong>~$44.63 trillion</strong> in 2016 US Dollars.
              </p>
            </div>
          )}

          {activeTab === 'dataset' && (
            <div className="space-y-4">
              <h3 className="font-serif text-[20px] font-bold text-text">
                Primary Archival Datasets Used
              </h3>
              <p>
                The underlying figures were not estimated abstractly; they were transcribed from four primary colonial economic publications:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[12px]">
                <div className="border-l border-text/20 pl-3">
                  <span className="text-accent font-bold block mb-1">STATISTICAL ABSTRACTS (1858–1947)</span>
                  <span className="font-serif text-[13px] text-text/75">
                    Official annual returns presented to British Parliament recording tax collections, currency flows, and trade balances.
                  </span>
                </div>
                <div className="border-l border-text/20 pl-3">
                  <span className="text-accent font-bold block mb-1">TRADE &amp; NAVIGATION ACCOUNTS</span>
                  <span className="font-serif text-[13px] text-text/75">
                    Detailed customs manifests tracking raw cotton, jute, wheat, and opium commodity shipments and bill clearing.
                  </span>
                </div>
                <div className="border-l border-text/20 pl-3">
                  <span className="text-accent font-bold block mb-1">HOUSE OF COMMONS HOME CHARGES</span>
                  <span className="font-serif text-[13px] text-text/75">
                    Parliamentary records itemizing sterling pensions, military expeditions overseas, and guaranteed railway dividends.
                  </span>
                </div>
                <div className="border-l border-text/20 pl-3">
                  <span className="text-accent font-bold block mb-1">K.N. CHAUDHURI &amp; S. AMBIRAJAN</span>
                  <span className="font-serif text-[13px] text-text/75">
                    Historical trade indices and balance-of-payments reconstructions published by Cambridge University Press.
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'limitations' && (
            <div className="space-y-4">
              <h3 className="font-serif text-[20px] font-bold text-text">
                Academic Limitations &amp; Sensitivities
              </h3>
              <p>
                Economists and economic historians note important caveats when evaluating compounded historical aggregates:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[14px]">
                <li>
                  <strong>Interest Rate Sensitivity:</strong> Because the figure spans over 170 years, compounding at 5% vs. 3% vs. 1% produces dramatically different sums. The value of Patnaik’s calculation lies in illustrating the compounding opportunity cost of capital retention, rather than claiming a static pile of cash was removed in a single day.
                </li>
                <li>
                  <strong>Domestic Capital Absorption:</strong> Critics argue that 18th- and 19th-century India lacked the banking infrastructure to productively reinvest 100% of the retained surplus at 5% annually without diminishing returns.
                </li>
                <li>
                  <strong>Price Index Inflation:</strong> Converting multi-century sterling series into modern USD involves varying price deflation indexes, meaning alternative deflators generate totals ranging between $20T and $50T.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'alternatives' && (
            <div className="space-y-4">
              <h3 className="font-serif text-[20px] font-bold text-text">
                Historiographical Spectrum of Estimates
              </h3>
              <div className="space-y-3 font-mono text-[12px]">
                <div className="border-l border-text/20 pl-3">
                  <span className="text-text font-bold">DADABHAI NAOROJI (1901) — <em>Poverty and Un-British Rule in India</em></span>
                  <p className="font-serif text-[13px] text-text/75 mt-0.5">
                    Calculated an annual unreturned drain of £20M–£30M per year in late 19th-century values (representing 25–30% of total Indian government revenue).
                  </p>
                </div>
                <div className="border-l border-text/20 pl-3">
                  <span className="text-text font-bold">ANGUS MADDISON (2001) — OECD Development Centre</span>
                  <p className="font-serif text-[13px] text-text/75 mt-0.5">
                    Calculated that India’s share of world GDP collapsed from 27% in 1700 to less than 3% in 1947, while Britain’s share grew sixfold.
                  </p>
                </div>
                <div className="border-l border-text/20 pl-3">
                  <span className="text-text font-bold">TIRTHANKAR ROY (2018 CRITIQUE) — London School of Economics</span>
                  <p className="font-serif text-[13px] text-text/75 mt-0.5">
                    Argues the drain was partially payment for imported services (governance, peace, global market integration) and cautions against long-term compounding models.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-text/15 pt-6 mt-8">
          {onOpenSourceDoc && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenSourceDoc('doc-patnaik-drain-calc');
              }}
              className="font-mono text-[12px] uppercase tracking-[0.15em] text-accent hover:underline font-bold"
            >
              [ VIEW SOURCE RECORD IN READING ROOM → ]
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[12px] uppercase tracking-[0.2em] text-text/50 hover:text-text px-4 py-2 border border-text/20"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
