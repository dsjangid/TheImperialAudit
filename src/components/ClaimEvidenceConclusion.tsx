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
    <div className={`border-t border-b border-[#2A2A2A] py-8 space-y-6 my-8 ${className}`}>
      {/* 1. CLAIM */}
      <div>
        <div className="flex items-center justify-between mb-2 font-mono text-[11px]">
          <span className="uppercase tracking-[0.2em] text-[#C62828] font-semibold">
            CLAIM AUDIT
          </span>
          <EvidenceBadge category={evidenceCategory} size="sm" />
        </div>
        <p className="font-serif text-[17px] sm:text-[18px] font-bold text-[#F5F5F0] leading-snug">
          &ldquo;{claim}&rdquo;
        </p>
      </div>

      {/* 2. EVIDENCE */}
      <div className="border-t border-[#2A2A2A] pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3A39D] block mb-1">
          ARCHIVAL EVIDENCE &amp; DATA
        </span>
        <p className="font-serif text-[15px] leading-relaxed text-[#D6D6D0]">
          {evidence}
        </p>
        {sourceDocId && onOpenSourceDoc && (
          <button
            type="button"
            onClick={() => onOpenSourceDoc(sourceDocId)}
            className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#C62828] hover:text-[#E53935] hover:underline font-bold block transition-colors"
          >
            [ VIEW ARCHIVAL RECORD {sourceRef ? `(${sourceRef})` : ''} → ]
          </button>
        )}
      </div>

      {/* 3. CONCLUSION */}
      <div className="border-t border-[#2A2A2A] pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C62828] block mb-1 font-semibold">
          EVALUATION CONCLUSION
        </span>
        <p className="font-serif italic text-[15px] leading-relaxed text-[#D6D6D0]">
          {conclusion}
        </p>
      </div>
    </div>
  );
};
