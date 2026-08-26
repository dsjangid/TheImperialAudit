'use client';

import React, { useEffect, useState } from 'react';

export const InitialLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('MOUNTING INDIA OFFICE RECORD REGISTRIES...');
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // 2 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 28) {
        setStatusText('MOUNTING INDIA OFFICE RECORD REGISTRIES...');
      } else if (pct < 58) {
        setStatusText('PARSING HANSARD PARLIAMENTARY DISPATCHES...');
      } else if (pct < 88) {
        setStatusText('CALCULATING FISCAL DRAIN MATRICES (1757–1947)...');
      } else {
        setStatusText('INITIALIZING THE IMPERIAL AUDIT...');
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);
        setIsFading(true);
        setTimeout(() => {
          setIsMounted(false);
        }, 500);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100000] bg-[#0A0A0A] text-[#F2F2F2] flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none transition-opacity duration-500 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Header Stamp */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-text/40 border-b border-text/10 pb-4">
        <span>DECLASSIFIED IMPERIAL ARCHIVE · FILE NO. 001/190</span>
        <span className="text-accent font-semibold">CLEARANCE: RESTRICTED ACCESS</span>
      </div>

      {/* Center Archival Loading Module */}
      <div className="max-w-xl mx-auto text-center w-full my-auto py-12">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold mb-3">
          — DECLASSIFIED STATE PAPERS · 1757–1947
        </p>

        <h2
          className="font-serif text-[clamp(28px,5vw,52px)] font-bold tracking-tight uppercase leading-none text-text"
          style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
        >
          THE IMPERIAL AUDIT
        </h2>

        <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-text/50 mt-3">
          ONE HUNDRED AND NINETY YEARS OF COLONIAL GOVERNANCE
        </p>

        {/* Dynamic Progress Bar */}
        <div className="w-full max-w-[320px] mx-auto mt-10">
          <div className="w-full h-[2px] bg-text/15 relative overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between font-mono text-[11px] text-accent font-bold mt-3 tabular-nums">
            <span className="text-text/40 text-[9px] tracking-[0.2em] font-normal uppercase">
              DECRYPTING ARCHIVE
            </span>
            <span>{progress.toString().padStart(2, '0')}%</span>
          </div>

          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-text/40 mt-3 truncate text-center">
            {statusText}
          </p>
        </div>
      </div>

      {/* Bottom Footer Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-text/30 border-t border-text/10 pt-4">
        <span>RECORD CORPUS: MCMXLVII–MMXXVI</span>
        <span>ALL DISPATCHES UNREDACTED</span>
      </div>
    </div>
  );
};
