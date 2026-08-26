'use client';

import React from 'react';

export const LiveSpendCounter: React.FC<{ lang?: 'en' | 'ru' }> = ({ lang = 'en' }) => {
  // Static scale visualization of the ~$44.63 Trillion drain
  // $44.63T ÷ $1M/hour = 44,630,000 hours ≈ 5,095 years
  // Timeline: 1757 START → 1947 INDEPENDENCE → 2026 TODAY → ~6852 HYPOTHETICAL END

  return (
    <div>
      <div
        className="font-serif text-text text-[clamp(36px,8vw,100px)] tracking-[-0.02em] leading-none tabular-nums"
        style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
      >
        ~$44.63 TRILLION
      </div>
      <p className="font-mono text-[13px] text-text/50 mt-3 tracking-[0.08em] uppercase">
        Estimated cumulative extraction · 1765–1938 · 2016 USD equivalent
      </p>

      {/* Scale Comparison */}
      <div className="mt-8 border border-text/15 p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-4">
          HYPOTHETICAL SCALE COMPARISON
        </p>
        <div className="space-y-3 font-mono text-[13px] text-text/70">
          <div className="flex items-baseline gap-3">
            <span className="text-accent font-bold min-w-[120px]">≈ 5,095 YEARS</span>
            <span className="text-text/50">at $1 million per hour to equal ~$44.63T</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-text/90 font-bold min-w-[120px]">173 YEARS</span>
            <span className="text-text/50">of compounded annual surplus extraction (1765–1938)</span>
          </div>
        </div>

        {/* Historical Timeline Bar */}
        <div className="mt-6 pt-4 border-t border-text/10">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-text/40 mb-2">
            <span>1757</span>
            <span>1947</span>
            <span>2026</span>
          </div>
          <div className="w-full h-1.5 bg-text/10 relative">
            <div className="absolute left-0 h-full bg-accent" style={{ width: '70%' }} />
            <div className="absolute h-full bg-accent/30" style={{ left: '70%', width: '29%' }} />
          </div>
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.1em] mt-2">
            <span className="text-accent">COMPANY RULE</span>
            <span className="text-text/50">CROWN RAJ</span>
            <span className="text-text/30">POST-INDEPENDENCE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
