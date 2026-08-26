'use client';

import React from 'react';
import Link from 'next/link';

interface ResearchStatusFooterProps {
  className?: string;
  lang?: 'en' | 'ru';
}

export const ResearchStatusFooter: React.FC<ResearchStatusFooterProps> = ({
  className = '',
  lang = 'en',
}) => {
  return (
    <footer className={`border-t border-text/15 py-16 bg-black/40 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Research Status Audit */}
          <div className="md:col-span-5 space-y-3 font-mono text-[12px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent uppercase tracking-[0.2em] font-bold">
                RESEARCH STATUS: VERIFIED AUDIT
              </span>
            </div>
            <p className="font-serif text-[14px] text-text/70 leading-relaxed max-w-[45ch]">
              All statistical estimates, administrative citations, casualty figures, and parliamentary excerpts across this publication are cross-referenced against the India Office Records, The National Archives (Kew), Hansard Parliamentary Debates, and peer-reviewed macroeconomic monographs.
            </p>
          </div>

          {/* Col 2: Corpus Metadata */}
          <div className="md:col-span-4 font-mono text-[11px] uppercase tracking-[0.15em] text-text/50 space-y-2 border-l border-text/15 pl-6">
            <div>
              <span className="text-text/30 block">ARCHIVAL CORPUS</span>
              <span className="text-text/85 font-medium">32 Primary Repositories · 47 Verified Incidents</span>
            </div>
            <div>
              <span className="text-text/30 block">AUDIT METHODOLOGY</span>
              <Link href="/en/methodology" className="text-accent hover:underline font-semibold block">
                → Open Academic Methodology Appendix
              </Link>
            </div>
            <div>
              <span className="text-text/30 block">LAST CORPUS AUDIT</span>
              <span className="text-text/80">August 2026 · Release 2.0</span>
            </div>
          </div>

          {/* Col 3: Academic Citation */}
          <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.15em] text-text/45 space-y-2 border-l border-text/15 pl-6">
            <span className="text-text/30 block">PUBLICATION LICENSE</span>
            <p className="text-[10px] text-text/60 leading-normal lowercase">
              Open-access digital humanities project. Public domain historical photography and parliamentary papers.
            </p>
            <div className="pt-2">
              <span className="text-text/80 font-bold block">THE IMPERIAL AUDIT</span>
              <span className="text-text/40 block">1757–1947</span>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-text/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-text/35">
          <span>THE DECLASSIFIED COLONIAL ARCHIVE PROJECT · LONDON &amp; NEW DELHI</span>
          <span>SET IN SOURCE SERIF 4 &amp; JETBRAINS MONO</span>
        </div>
      </div>
    </footer>
  );
};
