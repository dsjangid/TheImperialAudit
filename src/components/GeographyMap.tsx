'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { regionalAudits, RegionalAudit } from '@/data/geography-regions';

interface GeographyMapProps {
  onOpenSourceDoc?: (docId: string) => void;
}

type MapFilterMode = 'all' | '1857' | 'famine' | 'ports';

export const GeographyMap: React.FC<GeographyMapProps> = () => {
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
    <section className="my-10 sm:my-20 border-t border-[#2A2A2A] pt-6 sm:pt-14" id="geography-of-empire">
      {/* Minimal Masthead */}
      <div className="flex flex-wrap items-baseline justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#2A2A2A]">
        <div>
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#C62828] font-bold block mb-1.5 sm:mb-2">
            CARTOGRAPHIC ARCHIVE · 10 JURISDICTIONS
          </span>
          <h2 className="font-serif text-[24px] xs:text-[28px] sm:text-[40px] font-black uppercase tracking-tight text-[#F5F5F0]">
            The Geography of Empire
          </h2>
        </div>

        {/* Minimal Lens Filter */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 font-mono text-[10px] sm:text-[11px]">
          {[
            ['all', 'All States'],
            ['1857', '1857 Corridor'],
            ['famine', 'Famine Zones'],
            ['ports', 'Export Ports'],
          ].map(([mode, label]) => (
            <button
              key={mode}
              onClick={() => setFilterMode(mode as MapFilterMode)}
              className={`uppercase tracking-[0.12em] sm:tracking-[0.15em] pb-0.5 transition-colors ${
                filterMode === mode
                  ? 'text-[#E53935] font-bold border-b border-[#E53935]'
                  : 'text-[#A3A39D] hover:text-[#F5F5F0]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* State Quick Selector */}
      <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 mb-6 sm:mb-10 pb-3 sm:pb-4 border-b border-[#2A2A2A] font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.14em]">
        {Object.values(regionalAudits).map((region) => {
          const isSelected = selectedRegion.id === region.id;
          const isDimmed = !isHighlighted(region.id);

          return (
            <button
              key={region.id}
              onClick={() => setSelectedRegionId(region.id)}
              className={`pb-1 transition-colors ${
                isSelected
                  ? 'text-[#F5F5F0] font-bold border-b-2 border-[#C62828]'
                  : isDimmed
                  ? 'text-[#A3A39D]/30 hover:text-[#A3A39D]'
                  : 'text-[#A3A39D] hover:text-[#F5F5F0]'
              }`}
            >
              {region.name}
            </button>
          );
        })}
      </div>

      {/* Two-Column Minimal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN: Clean Cartographic View */}
        <div className="lg:col-span-6 relative border-y border-[#2A2A2A] py-3 select-none">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#2A2A2A] font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3A39D]">
            <span>SURVEY OF INDIA · c. 1890</span>
            <button
              type="button"
              onClick={() => setIsMapZoomed(!isMapZoomed)}
              className="hover:text-[#E53935] transition-colors border-b border-transparent hover:border-[#E53935]"
            >
              {isMapZoomed ? '[ FIT VIEW ]' : '[ ZOOM IN ]'}
            </button>
          </div>

          {/* Map Surface */}
          <div
            className={`relative w-full overflow-hidden bg-black transition-all duration-300 ${
              isMapZoomed ? 'scale-110 cursor-zoom-out' : 'cursor-default'
            }`}
            style={{ aspectRatio: '1200 / 896' }}
            onClick={() => isMapZoomed && setIsMapZoomed(false)}
          >
            <img
              src="/TheImperialAudit/illustrations/maps/british_india_map_prepartition.jpg"
              alt="Historical map of British India before 1947 partition"
              className="w-full h-full object-fill block opacity-95"
              style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.95)' }}
            />

            {/* Minimal Hotspots */}
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
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-150 focus:outline-none ${
                      isFiltered ? 'opacity-100' : 'opacity-20'
                    }`}
                    aria-label={`Audit ${region.name}`}
                  >
                    {/* Minimal Pin Dot */}
                    <span
                      className={`block rounded-full transition-all duration-150 ${
                        isSelected
                          ? 'w-3.5 h-3.5 bg-[#E53935] ring-4 ring-[#E53935]/30'
                          : isHovered
                          ? 'w-3 h-3 bg-[#E53935]'
                          : 'w-2 h-2 bg-[#E53935]/90'
                      }`}
                    />

                    {/* Minimal Territory Label */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider whitespace-nowrap pointer-events-none transition-opacity duration-150 ${
                        region.mapPosition.topPercent < 20 ? 'top-4' : '-top-5'
                      } ${
                        isSelected
                          ? 'text-[#F5F5F0] bg-black border-b border-[#C62828] font-bold opacity-100 z-30'
                          : isHovered
                          ? 'text-[#D6D6D0] bg-black opacity-100 z-20'
                          : 'opacity-0'
                      }`}
                    >
                      {region.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#2A2A2A] flex items-center justify-between font-mono text-[10px] text-[#A3A39D] uppercase tracking-wider">
            <span>PRE-PARTITION BOUNDARIES</span>
            <span>INDIA OFFICE ARCHIVE</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Minimal State Dossier */}
        <div className="lg:col-span-6 space-y-6">
          {/* Header */}
          <div className="pb-4 border-b border-[#2A2A2A]">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#A3A39D] uppercase tracking-[0.15em] mb-2">
              <span className="text-[#C62828] font-bold">STATE DOSSIER · {selectedRegion.code}</span>
              <span>ANNEXED {selectedRegion.annexationYear}</span>
            </div>
            <h3 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#F5F5F0] leading-tight">
              {selectedRegion.name}
            </h3>
            <p className="font-mono text-[11px] text-[#A3A39D] mt-1 uppercase tracking-wider">
              Seat: {selectedRegion.capital} · Scope: {selectedRegion.territory}
            </p>
          </div>

          {/* Context Narrative */}
          <div className="space-y-3 font-serif text-[15px] sm:text-[16px] leading-[1.8] text-[#D6D6D0]">
            <p className="italic text-[#B5B5AF] text-[16px]">
              {selectedRegion.subtitle}
            </p>
            <p>
              {selectedRegion.economicExtraction}
            </p>
          </div>

          {/* Revenue & Annexation Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 border-y border-[#2A2A2A] font-mono text-[11px]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block mb-1">
                REVENUE SYSTEM
              </span>
              <p className="font-serif text-[14px] text-[#D6D6D0] leading-snug">{selectedRegion.revenueSystem}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block mb-1">
                ANNEXATION MECHANISM
              </span>
              <p className="font-serif text-[14px] text-[#D6D6D0] leading-snug">{selectedRegion.annexationMechanism}</p>
            </div>
          </div>

          {/* Documented Historical Events */}
          <div>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px]">
              <span className="uppercase tracking-[0.2em] text-[#A3A39D]">
                DOCUMENTED CHRONOLOGY
              </span>
              <span className="text-[#C62828] font-bold">
                {selectedRegion.keyIncidents.length} RECORDED EVENTS
              </span>
            </div>
            <div className="divide-y divide-[#2A2A2A]/40 font-mono text-[12px]">
              {selectedRegion.keyIncidents.map((incident, i) => (
                <div key={i} className="py-2 flex items-baseline justify-between gap-4">
                  <span className="text-[#D6D6D0]">{incident}</span>
                  <span className="text-[10px] text-[#A3A39D]/60 shrink-0">№ 0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Figures: Resistance vs Administration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1 font-mono text-[11px]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block mb-1">
                RESISTANCE LEADERS
              </span>
              <div className="space-y-0.5 font-serif text-[13px] text-[#D6D6D0]">
                {selectedRegion.keyFigures.resistance.map((f) => (
                  <p key={f}>{f}</p>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A39D] block mb-1">
                COLONIAL ADMINISTRATORS
              </span>
              <div className="space-y-0.5 font-serif text-[13px] text-[#B5B5AF]">
                {selectedRegion.keyFigures.administrators.map((f) => (
                  <p key={f}>{f}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Dispatch Link */}
          <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between font-mono text-[11px]">
            <Link
              href={selectedRegion.dispatchHref}
              className="text-[#C62828] hover:text-[#E53935] hover:underline font-bold uppercase tracking-[0.15em] flex items-center gap-1.5"
            >
              <span>{selectedRegion.dispatchTitle}</span>
              <span>→</span>
            </Link>
            <span className="text-[#A3A39D] text-[10px] uppercase">
              {selectedRegion.primarySourceCitations[0] || 'India Office Records'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
