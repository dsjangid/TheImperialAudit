'use client';

import React, { useEffect, useState } from 'react';

export const InitialLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // 2 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);
        setIsFading(true);
        setTimeout(() => {
          setIsMounted(false);
        }, 400);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100000] bg-[#0A0A0A] text-[#F2F2F2] flex items-center justify-center select-none transition-opacity duration-400 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-3 px-6">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-text/70 font-medium">
          THE IMPERIAL AUDIT
        </p>

        {/* Minimalist 1px Progress Line */}
        <div className="w-40 sm:w-48 h-[1px] bg-text/15 mx-auto relative overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text/40 tabular-nums">
          1757–1947 · <span className="text-accent font-semibold">{progress.toString().padStart(2, '0')}%</span>
        </p>
      </div>
    </div>
  );
};
