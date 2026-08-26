'use client';

import React, { useState, useMemo } from 'react';
import { primaryDocuments } from '@/data/primary-documents';
import { EvidenceBadge } from './EvidenceBadge';

interface SearchableArchiveProps {
  onOpenSourceDoc: (docId: string) => void;
}

export const SearchableArchive: React.FC<SearchableArchiveProps> = ({ onOpenSourceDoc }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedEra, setSelectedEra] = useState<string>('ALL');
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');

  const allDocuments = useMemo(() => Object.values(primaryDocuments), []);

  const filteredDocs = useMemo(() => {
    return allDocuments.filter((doc) => {
      // Search term
      const term = searchTerm.toLowerCase().trim();
      const matchesTerm =
        !term ||
        doc.title.toLowerCase().includes(term) ||
        doc.archiveRef.toLowerCase().includes(term) ||
        doc.excerpt.toLowerCase().includes(term) ||
        doc.context.toLowerCase().includes(term) ||
        doc.location.toLowerCase().includes(term);

      // Category
      const matchesCategory =
        selectedCategory === 'ALL' || doc.category === selectedCategory;

      // Era
      const matchesEra =
        selectedEra === 'ALL' ||
        (selectedEra === '1757_1858' && doc.year >= 1757 && doc.year <= 1858) ||
        (selectedEra === '1858_1947' && doc.year > 1858 && doc.year <= 1947);

      // Region
      const matchesRegion =
        selectedRegion === 'ALL' ||
        doc.location.toLowerCase().includes(selectedRegion.toLowerCase()) ||
        doc.context.toLowerCase().includes(selectedRegion.toLowerCase()) ||
        doc.title.toLowerCase().includes(selectedRegion.toLowerCase());

      return matchesTerm && matchesCategory && matchesEra && matchesRegion;
    });
  }, [allDocuments, searchTerm, selectedCategory, selectedEra, selectedRegion]);

  return (
    <section className="my-20 border-t border-text/15 pt-16" id="searchable-archive">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8 pb-4 border-b border-text/15">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-[11px] uppercase tracking-[0.25em]">
            <span className="text-accent font-semibold">RESEARCH INTERFACE</span>
            <span className="text-text/40 border-l border-text/20 pl-3">AUDITED DOCUMENTARY CORPUS</span>
          </div>
          <h2 className="font-serif text-[32px] sm:text-[44px] md:text-[48px] font-bold text-text">
            Searchable Archival Records
          </h2>
          <p className="font-serif italic text-[16px] sm:text-[18px] text-text/70 mt-1">
            Filter primary manuscripts, parliamentary inquiries, and economic datasets by era, category, and region.
          </p>
        </div>

        <div className="font-mono text-[12px] text-text/40 uppercase tracking-[0.15em]">
          <span>{filteredDocs.length} OF {allDocuments.length} RECORDS INDEXED</span>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="mb-10 pb-6 border-b border-text/15 space-y-4 font-mono text-[11px] uppercase tracking-[0.15em]">
        {/* Search Input */}
        <div>
          <label htmlFor="archive-search" className="block text-text/50 mb-2 font-bold">
            SEARCH ARCHIVE BY KEYWORD, SHELFMARK, OR TOPIC:
          </label>
          <input
            id="archive-search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. Famine, Council Bills, Dyer, Permanent Settlement, Awadh, 1857..."
            className="w-full bg-transparent border-b border-text/25 py-2 text-text font-serif text-[16px] focus:outline-none focus:border-accent transition-colors placeholder:text-text/30"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          {/* Era Filter */}
          <div>
            <label className="block text-text/40 mb-1">CHRONOLOGICAL ERA:</label>
            <select
              value={selectedEra}
              onChange={(e) => setSelectedEra(e.target.value)}
              className="w-full bg-transparent border-b border-text/20 py-1 text-text text-[11px] focus:outline-none focus:border-accent cursor-pointer"
            >
              <option value="ALL" className="bg-black text-white">All Eras (1757–1947)</option>
              <option value="1757_1858" className="bg-black text-white">Company Rule (1757–1858)</option>
              <option value="1858_1947" className="bg-black text-white">Crown Raj (1858–1947)</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-text/40 mb-1">DOCUMENT CATEGORY:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-transparent border-b border-text/20 py-1 text-text text-[11px] focus:outline-none focus:border-accent cursor-pointer"
            >
              <option value="ALL" className="bg-black text-white">All Categories</option>
              <option value="PRIMARY_RECORD" className="bg-black text-white">Primary Records</option>
              <option value="OFFICIAL_ENQUIRY" className="bg-black text-white">Official Enquiries</option>
              <option value="PARLIAMENTARY_RECORD" className="bg-black text-white">Parliamentary Papers</option>
              <option value="ECONOMIC_DATA" className="bg-black text-white">Economic Data</option>
              <option value="SCHOLARLY_ESTIMATE" className="bg-black text-white">Scholarly Estimates</option>
            </select>
          </div>

          {/* Region Filter */}
          <div>
            <label className="block text-text/40 mb-1">GEOGRAPHIC REGION:</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-transparent border-b border-text/20 py-1 text-text text-[11px] focus:outline-none focus:border-accent cursor-pointer"
            >
              <option value="ALL" className="bg-black text-white">All Regions</option>
              <option value="Bengal" className="bg-black text-white">Bengal / Calcutta</option>
              <option value="Punjab" className="bg-black text-white">Punjab / Lahore</option>
              <option value="Awadh" className="bg-black text-white">Awadh / Allahabad</option>
              <option value="Madras" className="bg-black text-white">Madras Presidency</option>
              <option value="London" className="bg-black text-white">London (Whitehall / IOR)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Document Results List */}
      {filteredDocs.length === 0 ? (
        <div className="py-16 text-center font-mono text-[13px] text-text/40">
          NO ARCHIVAL RECORDS MATCH THE SELECTED FILTER CRITERIA.
        </div>
      ) : (
        <div className="divide-y divide-text/10">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-6 group hover:bg-white/[0.01] transition-colors"
            >
              <div className="md:w-3/4 space-y-2">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
                  <span className="text-accent font-bold">{doc.archiveRef}</span>
                  <span className="text-text/40">{doc.date}</span>
                  <span className="text-text/60">· {doc.location}</span>
                  <EvidenceBadge category={doc.category} size="sm" />
                </div>

                <h3 className="font-serif text-[19px] sm:text-[22px] font-bold text-text group-hover:text-accent transition-colors leading-snug">
                  {doc.title}
                </h3>

                <p className="font-serif text-[14px] text-text/70 line-clamp-2 leading-relaxed">
                  {doc.excerpt}
                </p>
              </div>

              <div className="md:w-1/4 flex flex-col md:items-end justify-between self-stretch font-mono text-[11px]">
                <span className="text-text/40 text-[10px] uppercase">{doc.repository}</span>
                <button
                  type="button"
                  onClick={() => onOpenSourceDoc(doc.id)}
                  className="mt-3 text-accent hover:underline font-bold uppercase tracking-[0.15em] flex items-center gap-1"
                >
                  <span>[ OPEN RECORD ]</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
