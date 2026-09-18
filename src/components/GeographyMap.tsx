'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { regionalAudits, RegionalAudit } from '@/data/geography-regions';
import { EvidenceBadge } from './EvidenceBadge';

interface GeographyMapProps {
  onOpenSourceDoc?: (docId: string) => void;
}

type MapFilterMode = 'all' | '1857' | 'famine' | 'ports';

export const GeographyMap: React.FC<GeographyMapProps> = ({ onOpenSourceDoc }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('bengal');
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);
  const [filterMode, setFilterMode] = useState<MapFilterMode>('all');
  const [isMapZoomed, setIsMapZoomed] = useState<boolean>(false);

  const selectedRegion: RegionalAudit =
    regionalAudits[selectedRegionId] || regionalAudits['bengal'];

  const isHighlighted = (id: string) => {
    if (filterMode === '1857')
      return ['united_provinces', 'bihar', 'central_india', 'punjab'].includes(id);
    if (filterMode === 'famine')
      return ['bengal', 'madras', 'odisha', 'bombay'].includes(id);
    if (filterMode === 'ports')
      return ['bengal', 'bombay', 'madras', 'assam'].includes(id);
    return true;
  };

  return (
    <section className="my-24 border-t border-[#2A2A2A] pt-16" id="geography-of-empire">
      {/* Section Masthead */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-[11px] uppercase tracking-[0.25em]">
            <span className="text-[#C62828] font-semibold">CARTOGRAPHIC INVESTIGATION</span>
            <span className="text-[#A3A39D] border-l border-[#2A2A2A] pl-3">
              ARCHIVAL MAP OF BRITISH INDIA · 1890 SURVEY
            </span>
          </div>
          <h2 className="font-serif text-[32px] sm:text-[44px] md:text-[54px] font-black uppercase tracking-tight text-[#F5F5F0] leading-[0.95]">
            THE GEOGRAPHY OF EMPIRE
          </h2>
          <p className="font-serif italic text-[16px] sm:text-[18px] text-[#D6D6D0] mt-2 max-w-[70ch]">
            An unredacted cartographic audit of territorial conquest, agrarian extraction regimes, and popular resistance across the Indian Subcontinent before Partition.
          </p>
        </div>

        <div className="font-mono text-[12px] text-[#A3A39D] uppercase tracking-[0.15em] flex flex-col items-end gap-1">
          <span>10 HISTORICAL JURISDICTIONS</span>
          <span className="text-[#C62828] font-bold">PRE-PARTITION ARCHIVE</span>
        </div>
      </div>

      {/* State & Province Navigation Ribbon */}
      <div className="mb-6 pb-4 border-b border-[#2A2A2A] font-mono text-[11px] uppercase">
        <div className="flex items-center justify-between mb-3 text-[#A3A39D] tracking-[0.2em]">
          <span>SELECT ANY STATE / PROVINCE TO AUDIT ITS COMPLETE HISTORY:</span>
          <span className="hidden sm:inline text-[#C62828] font-bold">10 AUDITED JURISDICTIONS</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {Object.values(regionalAudits).map((region) => {
            const isSelected = selectedRegion.id === region.id;
            const isHovered = hoveredRegionId === region.id;
            const isDimmed = !isHighlighted(region.id);

            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                onMouseEnter={() => setHoveredRegionId(region.id)}
                onMouseLeave={() => setHoveredRegionId(null)}
                className={`px-3 py-1.5 transition-all text-[11px] tracking-[0.12em] font-semibold border ${
                  isSelected
                    ? 'border-[#C62828] text-[#C62828] bg-[#C62828]/10'
                    : isHovered
                    ? 'border-[#D6D6D0] text-[#F5F5F0]'
                    : isDimmed
                    ? 'border-[#2A2A2A] text-[#D6D6D0]/40 hover:border-[#2A2A2A] hover:text-[#D6D6D0]'
                    : 'border-[#2A2A2A] text-[#D6D6D0] hover:border-[#D6D6D0]/50 hover:text-[#F5F5F0]'
                }`}
              >
                {region.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Thematic Lens Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-3 border-b border-[#2A2A2A] font-mono text-[11px]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[#A3A39D] uppercase tracking-[0.15em] mr-2">AUDIT LENS:</span>
          {[
            ['all', '[ ALL 10 STATES ]'],
            ['1857', '[ 1857 REVOLT CORRIDOR ]'],
            ['famine', '[ FAMINE MORTALITY ZONES ]'],
            ['ports', '[ FISCAL EXTRACTION PORTS ]'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setFilterMode(id as MapFilterMode)}
              className={`px-2 py-0.5 uppercase tracking-[0.15em] transition-colors ${
                filterMode === id
                  ? 'text-[#C62828] font-bold border-b border-[#C62828]'
                  : 'text-[#D6D6D0] hover:text-[#F5F5F0]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="text-[#A3A39D] text-[11px] uppercase tracking-wider hidden md:block">
          Click map pins or state tabs above to explore
        </div>
      </div>

      {/* Two-Column Side-by-Side Grid: Map on Left (Col 6), Forensic State History on Right (Col 6) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: Real Historical Pre-Partition Map Image (6 Cols) */}
        <div className="lg:col-span-6 relative border border-[#2A2A2A] bg-[#060606] p-4 sm:p-5 select-none">
          {/* Map Header / Archival Registry */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2A2A2A] pb-3 mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3A39D]">
            <span className="text-[#C62828] font-bold">PLATE IV / SURVEY OF INDIA</span>
            <span className="text-[#B5B5AF] font-semibold">PRE-PARTITION IMPERIAL MAP · c. 1890</span>
            <button
              type="button"
              onClick={() => setIsMapZoomed(!isMapZoomed)}
              className="text-[#A3A39D] hover:text-[#E53935] font-bold transition-colors underline"
            >
              {isMapZoomed ? '[ FIT VIEW ]' : '[ ZOOM IN ]'}
            </button>
          </div>

          {/* Real Archival Map Container with Calibrated Hotspots */}
          <div
            className={`relative w-full overflow-hidden bg-black transition-all duration-300 ${
              isMapZoomed ? 'scale-110 cursor-zoom-out' : 'cursor-default'
            }`}
            style={{ aspectRatio: '1200 / 896' }}
            onClick={() => isMapZoomed && setIsMapZoomed(false)}
          >
            {/* The Real Historical Steel-Engraved Map Image */}
            <img
              src="/TheImperialAudit/illustrations/maps/british_india_map_prepartition.jpg"
              alt="Authentic historical map of British India before 1947 partition, showing historical provinces, rivers, and boundaries"
              className="w-full h-full object-fill block opacity-95 transition-opacity duration-300"
              style={{
                filter: 'grayscale(100%) contrast(1.15) brightness(0.95)',
              }}
            />

            {/* Interactive State Hotspot Layer Overlaid on Exact Locations */}
            <div className="absolute inset-0 pointer-events-auto">
              {Object.values(regionalAudits).map((region) => {
                const isSelected = selectedRegion.id === region.id;
                const isHovered = hoveredRegionId === region.id;
                const isFiltered = isHighlighted(region.id);

                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedRegionId(region.id)}
                    onMouseEnter={() => setHoveredRegionId(region.id)}
                    onMouseLeave={() => setHoveredRegionId(null)}
                    style={{
                      left: `${region.mapPosition.leftPercent}%`,
                      top: `${region.mapPosition.topPercent}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-200 focus:outline-none ${
                      isFiltered ? 'opacity-100' : 'opacity-25'
                    }`}
                    aria-label={`Audit ${region.name}`}
                  >
                    {/* Active Pulsing Ring */}
                    {isSelected && (
                      <span className="absolute -inset-3 rounded-full border-2 border-accent animate-ping opacity-80" />
                    )}

                    {/* Outer Target Ring & Core Pin */}
                    <span
                      className={`relative flex items-center justify-center rounded-full transition-all duration-200 ${
                        isSelected
                          ? 'w-5 h-5 bg-accent border-2 border-white shadow-xl ring-2 ring-black'
                          : isHovered
                          ? 'w-4 h-4 bg-accent border border-white shadow-md'
                          : 'w-3 h-3 bg-accent/90 border border-white/90 ring-1 ring-black/70 hover:scale-125'
                      }`}
                    >
                      <span
                        className={`rounded-full ${
                          isSelected
                            ? 'w-1.5 h-1.5 bg-white'
                            : 'w-1 h-1 bg-black/60'
                        }`}
                      />
                    </span>

                    {/* Monospace Territory Label Tag */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider whitespace-nowrap pointer-events-none transition-all duration-150 ${
                        region.mapPosition.topPercent < 20 ? 'top-6' : '-top-6'
                      } ${
                        isSelected
                          ? 'bg-accent text-white font-bold opacity-100 z-30 shadow-md'
                          : isHovered
                          ? 'bg-black text-[#F5F5F0] border border-[#2A2A2A] font-semibold opacity-100 z-20'
                          : 'bg-black/80 text-[#D6D6D0] border border-[#2A2A2A] opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {region.code} · {region.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Archival Map Legend Footer */}
          <div className="mt-4 pt-3 border-t border-[#2A2A2A] flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-[#A3A39D] uppercase">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-accent inline-block" />
                <span>Selected State Pin</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent/90 border border-white inline-block" />
                <span>Audited Province</span>
              </span>
            </div>
            <span>REPOSITORY: INDIA OFFICE ARCHIVE · LONDON</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Selected State Complete History Dossier (6 Cols, Sticky) */}
        <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-6">
          {/* Territory Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2A2A2A] pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1 font-mono text-[11px]">
                <span className="uppercase tracking-[0.2em] text-[#C62828] font-bold">
                  STATE DOSSIER · {selectedRegion.code}
                </span>
                <EvidenceBadge category={selectedRegion.evidenceStatus} size="sm" />
              </div>

              <h3 className="font-serif text-[28px] sm:text-[38px] font-bold text-[#F5F5F0] leading-tight">
                {selectedRegion.name}
              </h3>
              <p className="font-mono text-[11px] text-[#B5B5AF] uppercase mt-1">
                HISTORICAL SEAT: {selectedRegion.capital}
              </p>
            </div>

            <div className="font-mono text-[11px] text-left sm:text-right space-y-0.5 border-t sm:border-t-0 pt-2 sm:pt-0">
              <span className="text-[#A3A39D] uppercase block">CONQUEST / ANNEXATION</span>
              <span className="text-[#E53935] font-bold text-[13px]">{selectedRegion.annexationYear}</span>
            </div>
          </div>

          {/* Territory & Geographic Scope */}
          <div className="font-mono text-[12px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block mb-0.5">
              PRIMARY DISTRICTS &amp; JURISDICTIONS
            </span>
            <p className="text-[#D6D6D0]">{selectedRegion.territory}</p>
          </div>

          {/* Subtitle & Historical Context */}
          <div className="space-y-3">
            <p className="font-serif italic text-[16px] text-[#B5B5AF]">
              {selectedRegion.subtitle}
            </p>
            <div className="font-serif text-[15px] sm:text-[16px] leading-[1.8] text-[#D6D6D0]">
              {selectedRegion.economicExtraction}
            </div>
          </div>

          {/* Key Administrative & Extractive Attributes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#2A2A2A] font-mono text-[12px]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block">
                REVENUE EXTRACTION MODEL
              </span>
              <p className="font-serif text-[14px] text-[#D6D6D0] mt-1">{selectedRegion.revenueSystem}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block">
                ANNEXATION MECHANISM
              </span>
              <p className="font-serif text-[14px] text-[#D6D6D0] mt-1">{selectedRegion.annexationMechanism}</p>
            </div>
          </div>

          {/* Documented Historical Incidents Checklist */}
          <div>
            <div className="flex items-center justify-between mb-2 font-mono text-[11px]">
              <span className="uppercase tracking-[0.2em] text-text/40">
                CHRONOLOGY OF DOCUMENTED INCIDENTS
              </span>
              <span className="text-accent font-bold">
                {selectedRegion.keyIncidents.length} RECORDED EVENTS
              </span>
            </div>

            <div className="divide-y divide-text/10">
              {selectedRegion.keyIncidents.map((incident, i) => (
                <div key={i} className="py-2.5 font-mono text-[12px] flex items-baseline justify-between gap-4">
                  <span className="text-text/90 font-medium">{incident}</span>
                  <span className="text-[10px] text-text/40 font-mono tracking-wider shrink-0">№ {String(i + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Historical Actors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[12px] pt-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-text/40 block mb-1">
                KEY RESISTANCE ACTORS
              </span>
              <div className="space-y-0.5 text-text/85 font-serif text-[14px]">
                {selectedRegion.keyFigures.resistance.map((figure) => (
                  <p key={figure}>{figure}</p>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-text/40 block mb-1">
                COLONIAL ADMINISTRATORS
              </span>
              <div className="space-y-0.5 text-text/60 font-serif text-[14px]">
                {selectedRegion.keyFigures.administrators.map((figure) => (
                  <p key={figure}>{figure}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Primary Sources & Chapter Dispatch Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-text/15 font-mono text-[12px]">
            <Link
              href={selectedRegion.dispatchHref}
              className="text-accent hover:underline font-bold uppercase tracking-[0.15em] flex items-center gap-1"
            >
              <span>{selectedRegion.dispatchTitle}</span>
              <span>→</span>
            </Link>

            <span className="text-text/40 text-[11px]">
              {selectedRegion.primarySourceCitations[0] || 'India Office Records'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
