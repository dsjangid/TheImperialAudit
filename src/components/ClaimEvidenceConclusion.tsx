'use client';

import React from 'react';
import { EvidenceCategory } from '@/data/primary-documents';
import { EvidenceBadge } from './EvidenceBadge';

interface ClaimEvidenceConclusionProps {
  claim: string;
  evidence: string;
  conclusion: string;
  sourceDocId?: string;
  sourceRef?: string;
  evidenceCategory?: EvidenceCategory;
  onOpenSourceDoc?: (docId: string) => void;
  className?: string;
}

export const ClaimEvidenceConclusion: React.FC<ClaimEvidenceConclusionProps> = ({
  claim,
  evidence,
  conclusion,
  sourceDocId,
  sourceRef,
  evidenceCategory = 'PRIMARY_RECORD',
  onOpenSourceDoc,
  className = '',
}) => {
  return (
    <div className={`border-t border-b border-text/15 py-8 space-y-6 my-8 ${className}`}>
      {/* 1. CLAIM */}
      <div>
        <div className="flex items-center justify-between mb-2 font-mono text-[11px]">
          <span className="uppercase tracking-[0.2em] text-accent font-semibold">
            CLAIM AUDIT
          </span>
          <EvidenceBadge category={evidenceCategory} size="sm" />
        </div>
        <p className="font-serif text-[17px] sm:text-[18px] font-bold text-text leading-snug">
          &ldquo;{claim}&rdquo;
        </p>
      </div>

      {/* 2. EVIDENCE */}
      <div className="border-t border-text/10 pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text/40 block mb-1">
          ARCHIVAL EVIDENCE &amp; DATA
        </span>
        <p className="font-serif text-[15px] leading-relaxed text-text/80">
          {evidence}
        </p>
        {sourceDocId && onOpenSourceDoc && (
          <button
            type="button"
            onClick={() => onOpenSourceDoc(sourceDocId)}
            className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent hover:underline font-bold block"
          >
            [ VIEW ARCHIVAL RECORD {sourceRef ? `(${sourceRef})` : ''} → ]
          </button>
        )}
      </div>

      {/* 3. CONCLUSION */}
      <div className="border-t border-text/10 pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent block mb-1 font-semibold">
          EVALUATION CONCLUSION
        </span>
        <p className="font-serif italic text-[15px] leading-relaxed text-text/90">
          {conclusion}
        </p>
      </div>
    </div>
  );
};
