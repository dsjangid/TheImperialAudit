'use client';

import React from 'react';

export const LiveSpendCounter: React.FC<{ lang?: 'en' | 'ru' }> = ({ lang = 'en' }) => {
  return (
    <div>
      <div
        className="font-serif text-[#E53935] text-[clamp(36px,8vw,100px)] tracking-[-0.02em] leading-none tabular-nums"
        style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
      >
        ~$44.63 TRILLION
      </div>
      <p className="font-mono text-[13px] text-[#A3A39D] mt-3 tracking-[0.08em] uppercase">
        Estimated cumulative extraction · 1765–1938 · 2016 USD equivalent
      </p>

      {/* Minimal Editorial Scale Comparison */}
      <div className="mt-8 border border-[#2A2A2A] p-6 space-y-4">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="text-[#C62828] font-semibold">[ SCALE COMPARISON ]</span>
          <span className="text-[#A3A39D] border-l border-[#2A2A2A] pl-3">COMPOUNDED VALUE</span>
        </div>

        <div className="space-y-3 font-mono text-[13px]">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-[#E53935] font-bold sm:min-w-[130px] text-[15px]">≈ 5,095 YEARS</span>
            <span className="text-[#D6D6D0]">at $1 million per hour to equal ~$44.63T</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-[#E53935] font-bold sm:min-w-[130px] text-[15px]">173 YEARS</span>
            <span className="text-[#D6D6D0]">of compounded annual surplus extraction (1765–1938)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
