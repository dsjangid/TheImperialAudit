'use client';

import React, { useEffect, useState } from 'react';
export const InitialLoader: React.FC = () => {
  const [shouldShow, setShouldShow] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    try {
      const hasLoaded = sessionStorage.getItem('imperial_audit_loaded');
      if (hasLoaded) {
        setShouldShow(false);
        setIsMounted(false);
        return;
      }
      sessionStorage.setItem('imperial_audit_loaded', 'true');
      setShouldShow(true);
    } catch {
      setShouldShow(true);
    }

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

  if (shouldShow === false || !isMounted || shouldShow === null) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100000] bg-[#0A0A0A] text-[#F5F5F0] flex items-center justify-center select-none transition-opacity duration-400 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-3 px-6">
        <p className="font-mono text-[13px] sm:text-[13px] uppercase tracking-[0.25em] text-[#D6D6D0] font-medium">
          THE IMPERIAL AUDIT
        </p>

        {/* Minimalist 1px Progress Line */}
        <div className="w-40 sm:w-48 h-[1px] bg-[#2A2A2A] mx-auto relative overflow-hidden">
          <div
            className="h-full bg-[#C62828] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#A3A39D] tabular-nums">
          <span className="text-[#E53935]">1757–1947</span> · <span className="text-[#E53935] font-semibold">{progress.toString().padStart(2, '0')}%</span>
        </p>
      </div>
    </div>
  );
};
