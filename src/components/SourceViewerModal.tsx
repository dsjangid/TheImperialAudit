'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { PrimaryDocument, primaryDocuments } from '@/data/primary-documents';
import { EvidenceBadge } from './EvidenceBadge';

interface SourceViewerModalProps {
  docId: string | null;
  customDoc?: PrimaryDocument | null;
  onClose: () => void;
}

export const SourceViewerModal: React.FC<SourceViewerModalProps> = ({
  docId,
  customDoc,
  onClose,
}) => {
  const doc = customDoc || (docId ? primaryDocuments[docId] : null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (doc) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [doc, onClose]);

  if (!doc) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-doc-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] text-[#F5F5F0] border border-[#2A2A2A] shadow-2xl p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Archival Reading Room Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2A2A2A] pb-4 mb-6">
          <div className="flex items-center gap-3 font-mono text-[12px]">
            <span className="text-[#C62828] font-semibold uppercase tracking-[0.25em]">
              ARCHIVAL READING ROOM
            </span>
            <span className="text-[#A3A39D] tracking-[0.15em] border-l border-[#2A2A2A] pl-3">
              REF: {doc.archiveRef}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#A3A39D] hover:text-[#E53935] transition-colors flex items-center gap-1"
            aria-label="Close document viewer"
          >
            <span>[ CLOSE ESC ]</span>
            <span className="text-lg leading-none">&times;</span>
          </button>
        </div>

        {/* Document Classification & Title */}
        <div className="space-y-3 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <EvidenceBadge category={doc.category} />
            <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#B5B5AF]">
              {doc.location} · <span className="text-[#E53935]">{doc.date}</span>
            </span>
          </div>

          <h2
            id="modal-doc-title"
            className="font-serif text-[24px] sm:text-[30px] md:text-[34px] font-bold leading-tight text-[#F5F5F0]"
          >
            {doc.title}
          </h2>
        </div>

        {/* Archival Metadata Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 border-y border-[#2A2A2A] font-mono text-[12px] mb-8">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] mb-1">
              REPOSITORY ARCHIVE
            </span>
            <span className="text-[#D6D6D0] font-medium">{doc.repository}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] mb-1">
              SHELFMARK / ACCESSION REF
            </span>
            <span className="text-[#C62828] font-bold">{doc.archiveRef}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] mb-1">
              TEMPORAL ERA
            </span>
            <span><span className="text-[#E53935]">{doc.year}</span> <span className="text-[#D6D6D0]">({doc.date})</span></span>
          </div>
        </div>

        {/* Verbatim Archival Excerpt (Typewritten / Monospace Style) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3A39D]">
            <span>VERBATIM ARCHIVAL TRANSCRIPTION:</span>
            <span>TYPEWRITTEN RECORD</span>
          </div>

          <div className="border-l-2 border-[#C62828] pl-4 font-mono text-[13px] sm:text-[14px] leading-[1.8] text-[#D6D6D0] whitespace-pre-line select-text">
            &ldquo;{doc.excerpt}&rdquo;
          </div>
        </div>

        {/* Historiographical Context & Analysis */}
        <div className="space-y-3 mb-8 border-t border-[#2A2A2A] pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3A39D] block">
            HISTORIOGRAPHICAL CONTEXT &amp; AUDIT
          </span>
          <p className="font-serif text-[15px] sm:text-[16px] leading-[1.8] text-[#D6D6D0]">
            {doc.context}
          </p>
        </div>

        {/* Related Chapters & Archive Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2A2A2A] pt-6 font-mono text-[12px]">
          {doc.relatedDispatchHref ? (
            <Link
              href={doc.relatedDispatchHref}
              onClick={onClose}
              className="text-[#C62828] hover:text-[#E53935] hover:underline font-bold uppercase tracking-[0.15em] flex items-center gap-1 transition-colors"
            >
              <span>{doc.relatedDispatch}</span>
              <span>→</span>
            </Link>
          ) : (
            <span className="text-[#A3A39D] text-[11px]">CORPUS FILE: {doc.id}</span>
          )}

          {doc.verificationUrl && (
            <a
              href={doc.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A39D] hover:text-[#F5F5F0] hover:underline uppercase tracking-[0.15em] text-[11px] transition-colors"
            >
              Catalogue Registry Reference ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
