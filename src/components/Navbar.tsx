'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LiveClock } from '@/components/LiveClock';
import { NightLightToggle } from '@/components/NightLightToggle';
import { LanguageSelector } from '@/components/LanguageSelector';

interface NavbarProps {
  lang?: 'en' | 'ru';
}

interface NavItem {
  num: string;
  title: string;
  href: string;
  id: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang = 'en' }) => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getActiveChapterId = () => {
    if (pathname.includes('/methodology')) return 'methodology';
    if (pathname.includes('/chapters/action')) return 'action';
    if (pathname.includes('/chapters/share')) return 'share';
    if (pathname.includes('/chapters/dossiers')) return 'dossiers';
    if (pathname.includes('/chapters/comparison')) return 'comparison';
    if (pathname.includes('/chapters/timer')) return 'timeline';
    return 'cover';
  };

  const activeId = getActiveChapterId();

  // Close drawer on Escape key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };

    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const navItems: NavItem[] = [
    {
      num: '0',
      title: lang === 'ru' ? 'ОБЛОЖКА' : 'COVER',
      href: lang === 'en' ? '/en' : '/',
      id: 'cover',
    },
    {
      num: '1',
      title: lang === 'ru' ? 'ЗАВОЕВАНИЕ (1757–1857)' : 'THE CORPORATE TAKEOVER (1757–1857)',
      href: lang === 'en' ? '/en/chapters/timer' : '/chapters/timer',
      id: 'timeline',
    },
    {
      num: '2',
      title: lang === 'ru' ? 'ВЕЛИКИЙ РАЗРЫВ (1857)' : 'THE GREAT RUPTURE (1857)',
      href: lang === 'en' ? '/en/chapters/comparison' : '/chapters/comparison',
      id: 'comparison',
    },
    {
      num: '3',
      title: lang === 'ru' ? 'ФИГУРАНТЫ ИМПЕРИИ' : 'ACTORS OF EMPIRE & RESISTANCE',
      href: lang === 'en' ? '/en/chapters/dossiers' : '/chapters/dossiers',
      id: 'dossiers',
    },
    {
      num: '4',
      title: lang === 'ru' ? 'ДЕСЯТЬ МИНУТ В АМРИТСАРЕ' : 'TEN MINUTES IN AMRITSAR (1919)',
      href: lang === 'en' ? '/en/chapters/share' : '/chapters/share',
      id: 'share',
    },
    {
      num: '5',
      title: lang === 'ru' ? 'РЕГИОНАЛЬНЫЙ АТЛАС' : 'THE SUBCONTINENTAL CORPUS',
      href: lang === 'en' ? '/en/chapters/action' : '/chapters/action',
      id: 'action',
    },
    {
      num: '6',
      title: lang === 'ru' ? 'МЕТОДОЛОГИЯ' : 'METHODOLOGY & CITATIONS',
      href: lang === 'en' ? '/en/methodology' : '/methodology',
      id: 'methodology',
    },
  ];

  return (
    <>
      {/* =========================================================================
          PRIMARY HEADER
      ========================================================================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[64px] sm:h-[80px] border-b border-[#2A2A2A] transition-[background-color,backdrop-filter] duration-200 bg-bg/95 backdrop-blur-md">
        <div className="h-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Menu / Index Drawer Trigger */}
          <div className="flex-1 flex items-center justify-start">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="group flex items-center py-2 text-[#D6D6D0] hover:text-[#E53935] transition-colors focus:outline-none"
              aria-label="Open Navigation Drawer"
              aria-expanded={drawerOpen}
            >
              <div className="flex flex-col justify-center gap-[4.5px] w-5 h-4">
                <span className="block h-[1.5px] w-5 bg-current transition-transform duration-200 group-hover:scale-x-110" />
                <span className="block h-[1.5px] w-3 bg-current transition-all duration-200 group-hover:w-5" />
                <span className="block h-[1.5px] w-5 bg-current transition-transform duration-200 group-hover:scale-x-110" />
              </div>
            </button>
          </div>

          {/* Center: Big Heading */}
          <div className="shrink-0 flex items-center justify-center text-center px-1">
            <Link
              href={lang === 'en' ? '/en' : '/'}
              className="group flex flex-col items-center justify-center transition-colors select-none py-1"
            >
              <span
                className="font-serif font-black uppercase tracking-[0.04em] sm:tracking-[0.14em] text-[15px] xs:text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-[#F5F5F0] group-hover:text-[#E53935] transition-colors leading-none whitespace-nowrap"
                style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
              >
                THE IMPERIAL AUDIT
              </span>
              <span className="font-mono text-[8px] sm:text-[9.5px] tracking-[0.3em] uppercase text-[#A3A39D] mt-1 hidden md:block">
                1757 — 1947 · ARCHIVAL RECORD
              </span>
            </Link>
          </div>

          {/* Right: Controls */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4 shrink-0 font-mono text-[11px]">
            <LanguageSelector />
            <NightLightToggle />
            <div className="hidden lg:inline-block border-l border-[#2A2A2A] pl-3 text-[#A3A39D]">
              <LiveClock />
            </div>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          MINIMAL NAVIGATION DRAWER
      ========================================================================= */}
      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-250 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        id="chapter-drawer"
        role="dialog"
        aria-label="Chapter Navigation Drawer"
        aria-modal="true"
        className={`fixed top-0 left-0 bottom-0 z-50 w-full sm:w-[380px] max-w-[88vw] bg-[#0A0A0A] border-r border-[#2A2A2A] text-[#F5F5F0] flex flex-col justify-between overflow-y-auto transition-transform duration-250 ease-out shadow-2xl ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Minimal Header */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-[#2A2A2A] flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#A3A39D] font-bold">
            INDEX
          </span>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="font-mono text-[11px] text-[#A3A39D] hover:text-[#E53935] uppercase tracking-[0.15em] transition-colors"
            aria-label="Close navigation"
          >
            [ CLOSE × ]
          </button>
        </div>

        {/* Minimal Navigation List: 0 1 2 3 continued by name */}
        <nav className="flex-1 px-5 sm:px-8 py-4 sm:py-6 overflow-y-auto space-y-1">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-baseline gap-3 sm:gap-4 py-2.5 sm:py-3 border-b border-[#2A2A2A]/40 transition-colors group ${
                  isActive ? 'text-[#E53935]' : 'text-[#D6D6D0] hover:text-[#F5F5F0]'
                }`}
              >
                <span
                  className={`font-mono text-[13px] sm:text-[14px] font-bold tracking-wider shrink-0 transition-colors ${
                    isActive ? 'text-[#E53935]' : 'text-[#A3A39D]/50 group-hover:text-[#E53935]'
                  }`}
                >
                  {item.num}
                </span>
                <span
                  className={`font-serif text-[15px] sm:text-[18px] tracking-tight transition-colors ${
                    isActive
                      ? 'font-bold underline underline-offset-4 decoration-[#E53935]'
                      : 'font-normal group-hover:underline group-hover:underline-offset-4'
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Minimal Footer */}
        <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-t border-[#2A2A2A] flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#A3A39D]/60">
          <span>1757 — 1947</span>
          <span>THE IMPERIAL AUDIT</span>
        </div>
      </aside>
    </>
  );
};
