'use client';

import React from 'react';
import { primaryDocuments } from '@/data/primary-documents';
import { EvidenceBadge } from './EvidenceBadge';

interface DocumentOfTheRecordProps {
  docId: string;
  recordNo?: string;
  onOpenSourceDoc: (docId: string) => void;
  className?: string;
}

export const DocumentOfTheRecord: React.FC<DocumentOfTheRecordProps> = ({
  docId,
  recordNo = '014',
  onOpenSourceDoc,
  className = '',
}) => {
  const doc = primaryDocuments[docId];
  if (!doc) return null;

  return (
    <div className={`border-y border-[#2A2A2A] py-10 relative group ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2A2A2A] pb-3 mb-5 font-mono text-[11px]">
        <div className="flex items-center gap-3">
          <span className="uppercase tracking-[0.25em] text-[#C62828] font-semibold">
            DOCUMENT OF THE RECORD / {recordNo}
          </span>
          <span className="tracking-[0.15em] text-[#B5B5AF] border-l border-[#2A2A2A] pl-3">
            {doc.location} · <span className="text-[#E53935]">{doc.year}</span>
          </span>
        </div>

        <EvidenceBadge category={doc.category} size="sm" />
      </div>

      <div className="mb-4">
        <h4 className="font-serif text-[22px] sm:text-[26px] font-bold leading-tight text-[#F5F5F0] group-hover:text-[#E53935] transition-colors">
          {doc.title}
        </h4>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#A3A39D] mt-1">
          SHELFMARK: {doc.archiveRef} · {doc.repository}
        </p>
      </div>

      <div className="border-l-2 border-[#C62828] pl-4 font-serif italic text-[16px] leading-relaxed text-[#D6D6D0] mb-6">
        &ldquo;{doc.excerpt.length > 240 ? `${doc.excerpt.slice(0, 240)}...` : doc.excerpt}&rdquo;
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#2A2A2A] font-mono text-[11px]">
        <span className="text-[#A3A39D] uppercase tracking-[0.1em]">
          REPOSITORY: {doc.repository}
        </span>

        <button
          type="button"
          onClick={() => onOpenSourceDoc(doc.id)}
          className="text-[#C62828] hover:text-[#E53935] hover:underline font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 transition-colors"
        >
          <span>[ OPEN ARCHIVAL RECORD → ]</span>
        </button>
      </div>
    </div>
  );
};
