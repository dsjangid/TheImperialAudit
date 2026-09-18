'use client';

import React, { useEffect, useState } from 'react';

interface Act {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
}

const ACTS: Act[] = [
  { id: 'act-prologue', num: '01', title: 'Editorial Prologue', shortTitle: 'Prologue' },
  { id: 'act-drain', num: '02', title: '$45T Fiscal Extraction', shortTitle: '$45T Drain' },
  { id: 'act-dispatches', num: '03', title: 'The Five Dispatches', shortTitle: 'Dispatches' },
  { id: 'act-evidence', num: '04', title: 'Primary Document Spotlight', shortTitle: 'Evidence' },
  { id: 'act-suite', num: '05', title: 'Forensic Investigation Suite', shortTitle: 'Suite' },
  { id: 'act-archive', num: '06', title: 'Archival Catalog & Dossiers', shortTitle: 'Catalog' },
];

export const MonographWayfinder: React.FC = () => {
  const [activeActId, setActiveActId] = useState<string>('act-prologue');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)) : 0;
      setScrollProgress(progress);

      // Determine which section is currently active
      const scrollPosition = window.scrollY + 200;
      for (let i = ACTS.length - 1; i >= 0; i--) {
        const section = document.getElementById(ACTS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveActId(ACTS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAct = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const currentAct = ACTS.find((a) => a.id === activeActId) || ACTS[0];

  return (
    <>
      {/* Top Global Reading Progress Line (1px Accent Line) */}
      <div
        className="fixed top-[60px] left-0 right-0 h-[2px] bg-transparent z-40 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#C62828] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Desktop Sticky Wayfinder Navigation Bar */}
      <nav
        aria-label="Monograph Wayfinder"
        className="hidden xl:block sticky top-[72px] z-30 mb-8 mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20 pointer-events-none"
      >
        <div className="inline-flex items-center gap-1 py-1.5 px-3 bg-[#0A0A0A]/95 border border-[#2A2A2A] backdrop-blur-md shadow-lg pointer-events-auto font-mono text-[11px] uppercase tracking-wider">
          <span className="text-[#C62828] font-bold mr-2 text-[10px] tracking-[0.2em] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] inline-block" />
            ACT {currentAct.num}/06
          </span>

          <div className="flex items-center divide-x divide-[#2A2A2A]">
            {ACTS.map((act) => {
              const isActive = activeActId === act.id;
              return (
                <button
                  key={act.id}
                  type="button"
                  onClick={() => scrollToAct(act.id)}
                  className={`px-2.5 py-0.5 transition-colors ${
                    isActive
                      ? 'text-[#F5F5F0] font-bold bg-[#1C1C1C]'
                      : 'text-[#A3A39D] hover:text-[#F5F5F0]'
                  }`}
                >
                  <span className="opacity-50 mr-1">{act.num}</span>
                  <span>{act.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Sticky Wayfinder Ribbon */}
      <div
        className="xl:hidden sticky top-[60px] z-30 bg-[#0A0A0A]/95 border-b border-[#2A2A2A] backdrop-blur-md px-5 py-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider select-none"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />
          <span className="text-[#C62828] font-bold">ACT {currentAct.num}/06:</span>
          <span className="text-[#F5F5F0] truncate max-w-[200px] sm:max-w-none">
            {currentAct.title}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[#A3A39D] text-[10px]">
          <span>{Math.round(scrollProgress)}%</span>
        </div>
      </div>
    </>
  );
};
