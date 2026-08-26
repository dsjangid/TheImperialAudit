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
    <div className={`border-y border-text/15 py-10 relative group ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-text/10 pb-3 mb-5 font-mono text-[11px]">
        <div className="flex items-center gap-3">
          <span className="uppercase tracking-[0.25em] text-accent font-semibold">
            DOCUMENT OF THE RECORD / {recordNo}
          </span>
          <span className="tracking-[0.15em] text-text/40 border-l border-text/20 pl-3">
            {doc.location} · {doc.year}
          </span>
        </div>

        <EvidenceBadge category={doc.category} size="sm" />
      </div>

      <div className="mb-4">
        <h4 className="font-serif text-[22px] sm:text-[26px] font-bold leading-tight text-text group-hover:text-accent transition-colors">
          {doc.title}
        </h4>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mt-1">
          SHELFMARK: {doc.archiveRef} · {doc.repository}
        </p>
      </div>

      <div className="border-l-2 border-accent pl-4 font-serif italic text-[16px] leading-relaxed text-text/85 mb-6">
        &ldquo;{doc.excerpt.length > 240 ? `${doc.excerpt.slice(0, 240)}...` : doc.excerpt}&rdquo;
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-text/10 font-mono text-[11px]">
        <span className="text-text/40 uppercase tracking-[0.1em]">
          REPOSITORY: {doc.repository}
        </span>

        <button
          type="button"
          onClick={() => onOpenSourceDoc(doc.id)}
          className="text-accent hover:underline font-bold uppercase tracking-[0.2em] flex items-center gap-1.5"
        >
          <span>[ OPEN ARCHIVAL RECORD → ]</span>
        </button>
      </div>
    </div>
  );
};
