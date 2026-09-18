'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  imperialLedgerEvents,
  LedgerEvent,
  LedgerCategory,
  Era,
} from '@/data/timeline-ledger';
import { EvidenceBadge } from './EvidenceBadge';

interface ImperialLedgerProps {
  onOpenSourceDoc?: (docId: string) => void;
}

const categories: { key: LedgerCategory | 'ALL'; label: string }[] = [
  { key: 'ALL', label: 'ALL' },
  { key: 'EXTRACTION', label: 'FISCAL EXTRACTION' },
  { key: 'RESISTANCE', label: 'RESISTANCE & REVOLT' },
  { key: 'FAMINE', label: 'FAMINE' },
  { key: 'MILITARY', label: 'MILITARY & MASSACRES' },
  { key: 'LEGISLATION', label: 'LEGAL ACTS' },
  { key: 'CROWN_RULE', label: 'CROWN GOVERNANCE' },
];

export const ImperialLedger: React.FC<ImperialLedgerProps> = ({ onOpenSourceDoc }) => {
  const [selectedCategory, setSelectedCategory] = useState<LedgerCategory | 'ALL'>('ALL');
  const [selectedEra, setSelectedEra] = useState<Era | 'ALL'>('ALL');
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);

  const filteredEvents = useMemo(() => {
    return imperialLedgerEvents.filter((ev) => {
      const matchCat = selectedCategory === 'ALL' || ev.category === selectedCategory;
      const matchEra = selectedEra === 'ALL' || ev.era === selectedEra;
      return matchCat && matchEra;
    });
  }, [selectedCategory, selectedEra]);

  const currentEvent: LedgerEvent | undefined =
    filteredEvents[activeEventIndex] || filteredEvents[0] || imperialLedgerEvents[0];

  const handlePrev = () => {
    setActiveEventIndex((prev) => (prev > 0 ? prev - 1 : filteredEvents.length - 1));
  };

  const handleNext = () => {
    setActiveEventIndex((prev) => (prev < filteredEvents.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="my-24 border-t border-[#2A2A2A] pt-16" id="imperial-ledger">
      {/* Section Masthead */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-[11px] uppercase tracking-[0.25em]">
            <span className="text-[#C62828] font-semibold">SIGNATURE TIMELINE</span>
            <span className="text-[#A3A39D] border-l border-[#2A2A2A] pl-3">CHRONOLOGY · 1757–1947</span>
          </div>
          <h2 className="font-serif text-[32px] sm:text-[44px] md:text-[54px] font-black uppercase tracking-tight text-[#F5F5F0] leading-[0.95]">
            THE IMPERIAL LEDGER
          </h2>
          <p className="font-serif italic text-[16px] sm:text-[18px] text-[#D6D6D0] mt-2">
            1757 — 1947 / A Chronological Record of Extraction, Resistance, and Direct Rule
          </p>
        </div>

        <div className="font-mono text-[12px] text-[#A3A39D] uppercase tracking-[0.15em] text-right">
          <span>{filteredEvents.length} DOCUMENTED MILESTONES</span>
          <span className="block text-[10px] text-[#A3A39D]/60">AUDITED HISTORICAL CORPUS</span>
        </div>
      </div>

      {/* Era & Category Filter Tabs */}
      <div className="space-y-4 mb-10 pb-6 border-b border-[#2A2A2A] font-mono text-[11px] uppercase tracking-[0.15em]">
        {/* Era Selector */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[#A3A39D]">ERA:</span>
          {[
            { key: 'ALL', label: 'ALL 190 YEARS' },
            { key: 'COMPANY_RULE', label: 'COMPANY RULE (1757–1858)' },
            { key: 'CROWN_RULE', label: 'CROWN RAJ (1858–1947)' },
          ].map((era) => (
            <button
              key={era.key}
              onClick={() => {
                setSelectedEra(era.key as any);
                setActiveEventIndex(0);
              }}
              className={`pb-1 transition-colors ${
                selectedEra === era.key
                  ? 'border-b-2 border-[#C62828] text-[#C62828] font-bold'
                  : 'text-[#D6D6D0] hover:text-[#F5F5F0]'
              }`}
            >
              {era.label}
            </button>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <span className="text-[#A3A39D]">CATEGORY:</span>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setActiveEventIndex(0);
              }}
              className={`pb-0.5 transition-colors text-[10px] ${
                selectedCategory === cat.key
                  ? 'border-b border-[#C62828] text-[#C62828] font-bold'
                  : 'text-[#D6D6D0] hover:text-[#F5F5F0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Timeline Track (Desktop) */}
      <div className="hidden lg:block mb-12">
        <div className="relative py-6 px-1">
          {/* Central Timeline Axis */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[#2A2A2A]" />

          {/* Timeline Nodes */}
          <div className="relative flex justify-between items-center z-10">
            {filteredEvents.map((ev, idx) => {
              const isActive = currentEvent?.id === ev.id;
              return (
                <button
                  key={ev.id}
                  onClick={() => setActiveEventIndex(idx)}
                  className="group flex flex-col items-center focus:outline-none cursor-pointer"
                  title={`${ev.year}: ${ev.title}`}
                >
                  <span
                    className={`font-mono text-[10px] tracking-wider mb-2 transition-colors ${
                      isActive ? 'text-[#E53935] font-bold' : 'text-[#A3A39D] group-hover:text-[#F5F5F0]'
                    }`}
                  >
                    {ev.year}
                  </span>
                  <div
                    className={`w-3 h-3 rounded-full border transition-all ${
                      isActive
                        ? 'border-accent bg-accent scale-125'
                        : 'border-text/40 bg-bg group-hover:border-text group-hover:scale-110'
                    }`}
                  />
                  <span
                    className={`mt-2 font-mono text-[9px] uppercase tracking-tighter max-w-[65px] truncate text-center transition-colors ${
                      isActive ? 'text-text font-semibold' : 'text-text/30 group-hover:text-text/60'
                    }`}
                  >
                    {ev.region.split(',')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scrubber Controls (Mobile) */}
      <div className="flex items-center justify-between gap-4 lg:hidden mb-8 py-2 border-y border-text/15 font-mono text-[12px]">
        <button
          type="button"
          onClick={handlePrev}
          className="text-text/60 hover:text-accent uppercase tracking-[0.1em]"
        >
          ← PREV YEAR
        </button>
        <span className="text-accent font-bold">
          {activeEventIndex + 1} / {filteredEvents.length} · {currentEvent?.year}
        </span>
        <button
          type="button"
          onClick={handleNext}
          className="text-text/60 hover:text-accent uppercase tracking-[0.1em]"
        >
          NEXT YEAR →
        </button>
      </div>

      {/* Ledger Information Editorial Layout */}
      {currentEvent && (
        <div className="pt-4 relative">
          {/* Top Ledger Stamp Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-text/15 pb-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[24px] sm:text-[30px] font-black text-accent tracking-tighter">
                {currentEvent.year}
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-text/40 border-l border-text/20 pl-3">
                {currentEvent.dateStr}
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-text/60 border-l border-text/20 pl-3">
                {currentEvent.region}
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px]">
              <EvidenceBadge category={currentEvent.evidenceStatus} size="sm" />
              <span className="text-text/50 uppercase tracking-[0.15em]">
                {currentEvent.category}
              </span>
            </div>
          </div>

          {/* Event Title & Subtitle */}
          <div className="mb-6">
            <h3 className="font-serif text-[26px] sm:text-[34px] md:text-[38px] font-bold leading-tight text-text">
              {currentEvent.title}
            </h3>
            <p className="font-serif italic text-[16px] sm:text-[18px] text-text/70 mt-1">
              {currentEvent.subtitle}
            </p>
          </div>

          {/* Event Narrative Summary */}
          <div className="font-serif text-[16px] sm:text-[17px] leading-[1.8] text-text/85 mb-8 max-w-[85ch]">
            {currentEvent.summary}
          </div>

          {/* Impact Breakdown (Two Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-t border-b border-text/15 font-mono text-[12px] mb-8">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold block">
                ECONOMIC &amp; FISCAL IMPACT
              </span>
              <p className="font-serif text-[14px] text-text/80 leading-relaxed">
                {currentEvent.economicImpact}
              </p>
            </div>

            <div className="space-y-2 border-t md:border-t-0 md:border-l border-text/15 pt-4 md:pt-0 md:pl-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-text/50 font-bold block">
                HUMAN &amp; DEMOGRAPHIC IMPACT
              </span>
              <p className="font-serif text-[14px] text-text/80 leading-relaxed">
                {currentEvent.humanImpact}
              </p>
            </div>
          </div>

          {/* Primary Source & Associated Chapter */}
          <div className="flex flex-wrap items-center justify-between gap-6 font-mono text-[12px]">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-text/40 block">
                PRIMARY ARCHIVAL SOURCE
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-text/90 font-semibold">{currentEvent.primarySource.name}</span>
                <span className="text-text/50 text-[11px]">({currentEvent.primarySource.archiveRef})</span>
                {currentEvent.primarySource.docId && onOpenSourceDoc && (
                  <button
                    type="button"
                    onClick={() => onOpenSourceDoc(currentEvent.primarySource.docId!)}
                    className="text-accent hover:underline font-bold text-[11px] uppercase tracking-[0.15em] ml-1"
                  >
                    [ VIEW ARCHIVAL RECORD → ]
                  </button>
                )}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-text/40 block mb-1">
                ASSOCIATED CHAPTER
              </span>
              <Link
                href={currentEvent.dispatchHref}
                className="text-accent hover:underline font-bold flex items-center gap-1 uppercase tracking-[0.15em]"
              >
                <span>{currentEvent.dispatchTitle}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
