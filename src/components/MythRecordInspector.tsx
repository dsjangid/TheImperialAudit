'use client';

import React, { useState } from 'react';
import { mythRecordAudits, MythRecordItem } from '@/data/myths-records';
import { EvidenceBadge } from './EvidenceBadge';

interface MythRecordInspectorProps {
  onOpenSourceDoc?: (docId: string) => void;
}

export const MythRecordInspector: React.FC<MythRecordInspectorProps> = ({
  onOpenSourceDoc,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(mythRecordAudits[0].id);

  const currentCase: MythRecordItem =
    mythRecordAudits.find((c) => c.id === selectedCaseId) || mythRecordAudits[0];

  return (
    <section className="my-24 border-t border-text/15 pt-16" id="myth-record">
      {/* Section Masthead */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-[11px] uppercase tracking-[0.25em]">
            <span className="text-accent font-semibold">CRITICAL HISTORIOGRAPHY</span>
            <span className="text-text/40 border-l border-text/20 pl-3">CLAIM · EVIDENCE · ASSESSMENT</span>
          </div>
          <h2 className="font-serif text-[32px] sm:text-[44px] md:text-[54px] font-black uppercase tracking-tight text-text leading-[0.95]">
            AUDITING THE RECORD
          </h2>
          <p className="font-serif italic text-[16px] sm:text-[18px] text-text/70 mt-2">
            Examining Pervasive Historical Claims Against Archival Dispatches and Economic Datasets
          </p>
        </div>

        <div className="font-mono text-[12px] text-text/40 uppercase tracking-[0.15em]">
          <span>4 FORENSIC CASE AUDITS</span>
        </div>
      </div>

      {/* Case Selector Tabs */}
      <div className="flex flex-wrap items-center gap-4 mb-10 pb-4 border-b border-text/10 font-mono text-[11px] uppercase tracking-[0.15em]">
        <span className="text-text/35">CASE:</span>
        {mythRecordAudits.map((item) => {
          const isSelected = currentCase.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedCaseId(item.id)}
              className={`pb-1 transition-colors ${
                isSelected
                  ? 'border-b-2 border-accent text-accent font-bold'
                  : 'text-text/50 hover:text-text'
              }`}
            >
              {item.caseNumber} · {item.topic}
            </button>
          );
        })}
      </div>

      {/* Selected 3-Stage Investigation Layout */}
      <div className="space-y-10">
        {/* STAGE 1: THE CLAIM */}
        <div className="border-b border-text/15 pb-8">
          <div className="flex items-center justify-between mb-3 font-mono text-[11px]">
            <span className="uppercase tracking-[0.25em] text-accent font-semibold">
              STAGE 01 · THE IMPERIAL CLAIM
            </span>
            <span className="uppercase tracking-[0.15em] text-text/40">
              ORIGIN: {currentCase.claimOrigin}
            </span>
          </div>

          <div className="border-l-2 border-accent pl-4 py-1">
            <blockquote className="font-serif italic text-[20px] sm:text-[24px] font-semibold text-text leading-snug">
              &ldquo;{currentCase.claim}&rdquo;
            </blockquote>
          </div>
        </div>

        {/* STAGE 2: THE RECORD & EVIDENCE */}
        <div className="border-b border-text/15 pb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text/50 font-bold">
              STAGE 02 · ARCHIVAL EVIDENCE &amp; ECONOMIC DATA
            </span>
            <EvidenceBadge category={currentCase.evidenceCategory} size="sm" />
          </div>

          <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-text mb-3">
            {currentCase.auditTitle}
          </h3>

          <div className="font-serif text-[16px] sm:text-[17px] leading-[1.8] text-text/85 max-w-[85ch] mb-6">
            {currentCase.scholarlyAnalysis}
          </div>

          {/* Primary Evidence Items */}
          <div className="space-y-4 font-mono text-[12px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-text/40 block">
              PRIMARY ARCHIVAL FINDINGS
            </span>
            <div className="divide-y divide-text/10">
              {currentCase.primaryEvidence.map((ev, i) => (
                <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <div>
                    <span className="text-text/90 font-bold mr-2">{ev.recordTitle}</span>
                    <span className="text-text/40 text-[11px]">({ev.archiveRef})</span>
                    <p className="font-serif text-[14px] text-text/75 mt-1">{ev.finding}</p>
                  </div>

                  {ev.docId && onOpenSourceDoc && (
                    <button
                      type="button"
                      onClick={() => onOpenSourceDoc(ev.docId!)}
                      className="text-accent hover:underline font-bold text-[11px] uppercase tracking-[0.15em] shrink-0"
                    >
                      [ VIEW ARCHIVE → ]
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Economic Data Metric */}
            <div className="pt-3 border-t border-text/10 flex items-baseline gap-3">
              <span className="text-accent font-bold">{currentCase.economicDataset.name}:</span>
              <span className="font-serif text-[14px] text-text/80">{currentCase.economicDataset.dataPoint}</span>
            </div>
          </div>
        </div>

        {/* STAGE 3: ASSESSMENT */}
        <div className="pt-2">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
              STAGE 03 · HISTORIOGRAPHICAL ASSESSMENT
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent font-bold">
              {currentCase.assessmentLabel}
            </span>
          </div>

          <p className="font-serif italic text-[16px] sm:text-[18px] text-text/90 leading-relaxed max-w-[85ch]">
            {currentCase.assessmentVerdict}
          </p>
        </div>
      </div>
    </section>
  );
};
