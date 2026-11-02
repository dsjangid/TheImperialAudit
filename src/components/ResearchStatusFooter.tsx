'use client';

import React from 'react';
import Link from 'next/link';

interface ResearchStatusFooterProps {
  className?: string;
  lang?: 'en' | 'ru';
}

export const ResearchStatusFooter: React.FC<ResearchStatusFooterProps> = ({
  className = '',
}) => {
  return (
    <footer className={`border-t border-[#2A2A2A] py-10 sm:py-16 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8 sm:mb-12">
          {/* Col 1: Overview */}
          <div className="md:col-span-5 space-y-2.5 sm:space-y-3 font-mono text-[11px] sm:text-[12px]">
            <span className="text-[#C62828] uppercase tracking-[0.16em] sm:tracking-[0.2em] font-bold block">
              RESEARCH CORPUS · COMPLETE ARCHIVE
            </span>
            <p className="font-serif text-[13.5px] sm:text-[14px] text-[#D6D6D0] leading-relaxed max-w-[45ch]">
              Statistical records, administrative citations, casualty figures, and parliamentary excerpts across this publication are cataloged from the India Office Records, The National Archives (Kew), and Hansard Parliamentary Debates.
            </p>
          </div>

          {/* Col 2: Corpus Metadata */}
          <div className="md:col-span-4 font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#A3A39D] space-y-2 border-t md:border-t-0 md:border-l border-[#2A2A2A] pt-4 md:pt-0 md:pl-8">
            <div>
              <span className="text-[#A3A39D]/70 block text-[10px]">CORPUS SCOPE</span>
              <span className="text-[#D6D6D0] font-medium">32 Primary Repositories · 47 Documented Incidents</span>
            </div>
            <div>
              <span className="text-[#A3A39D]/70 block text-[10px]">METHODOLOGY</span>
              <Link href="/en/methodology" className="text-[#C62828] hover:text-[#E53935] hover:underline font-semibold block transition-colors">
                → Academic Methodology Appendix
              </Link>
            </div>
          </div>

          {/* Col 3: Academic Citation */}
          <div className="md:col-span-3 font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#A3A39D] space-y-1.5 sm:space-y-2 border-t md:border-t-0 md:border-l border-[#2A2A2A] pt-4 md:pt-0 md:pl-8">
            <span className="text-[#A3A39D]/70 block text-[10px]">OPEN ACCESS ARCHIVE</span>
            <p className="text-[10.5px] sm:text-[11px] text-[#A3A39D] leading-normal">
              Public domain historical records and macroeconomic datasets (1757–1947).
            </p>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#2A2A2A] flex flex-wrap items-center justify-between gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#A3A39D]">
          <span>THE DECLASSIFIED COLONIAL ARCHIVE PROJECT</span>
          <span>SET IN SOURCE SERIF 4 &amp; JETBRAINS MONO</span>
        </div>
      </div>
    </footer>
  );
};
