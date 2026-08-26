'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { chaptersNav, translations } from '@/data/translations';
import { LiveClock } from '@/components/LiveClock';

interface NavbarProps {
  lang?: 'en' | 'ru';
}

export const Navbar: React.FC<NavbarProps> = ({ lang = 'en' }) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang];

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

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] border-b border-text/10 transition-[background-color,backdrop-filter] duration-200 bg-bg/90 backdrop-blur-md">
        <div className="h-full px-5 sm:px-8 md:px-10 lg:px-12 flex items-center justify-between font-mono text-[12px] uppercase">
          {/* Main Brand Title - Guaranteed shrink-0 prominence, never hidden */}
          <Link
            href={lang === 'en' ? '/en' : '/'}
            className="shrink-0 flex items-center gap-2.5 font-bold tracking-[0.22em] text-text hover:text-accent transition-colors z-10"
          >
            <span className="text-accent font-black text-[14px]">▪</span>
            <span className="text-text font-black text-[13px] tracking-[0.24em] whitespace-nowrap">
              THE IMPERIAL AUDIT
            </span>
            <span className="hidden sm:inline text-text/35 text-[11px] font-medium tracking-[0.18em] pl-2 border-l border-text/20 whitespace-nowrap">
              1757–1947
            </span>
          </Link>

          {/* Chapter / Page Navigation - Smooth Horizontal Scroll (No Visible Scrollbar) */}
          <div className="hidden md:flex flex-1 min-w-0 overflow-x-auto no-scrollbar mx-4 lg:mx-8 py-1 items-center justify-start xl:justify-center">
            <div className="flex items-center gap-5 lg:gap-6 xl:gap-7 whitespace-nowrap px-2">
              {chaptersNav.map((ch) => {
                const isActive = activeId === ch.id;
                const href = lang === 'en' ? ch.path.en : ch.path.ru;
                return (
                  <Link
                    key={ch.id}
                    href={href}
                    className={`relative tracking-[0.18em] transition-colors py-1 ${
                      isActive
                        ? 'text-accent font-bold'
                        : 'text-text/60 hover:text-text'
                    }`}
                  >
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-accent transition-all duration-200"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      }}
                      aria-hidden="true"
                    />
                    <span className="text-text/40 mr-1 text-[11px]">{ch.num}:</span>
                    <span>{ch.title[lang]}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Controls: Live Clock + Mobile Toggle */}
          <div className="shrink-0 flex items-center gap-4 z-10">
            <div className="hidden lg:inline-block">
              <LiveClock />
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center w-7 h-7 -mr-1 group focus:outline-none"
              aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="chapter-nav-menu"
            >
              <span
                className="block h-px w-6 bg-text transition-transform duration-300 ease-out origin-center"
                style={{
                  transform: mobileOpen
                    ? 'rotate(45deg) translateY(0px)'
                    : 'translateY(-3px)',
                }}
              />
              <span
                className="block h-px w-6 bg-text transition-transform duration-300 ease-out origin-center"
                style={{
                  transform: mobileOpen
                    ? 'rotate(-45deg) translateY(-1px)'
                    : 'translateY(3px)',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        id="chapter-nav-menu"
        className={`md:hidden fixed inset-0 z-40 bg-bg transition-all duration-300 ${
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        style={{
          clipPath: mobileOpen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
          WebkitClipPath: mobileOpen
            ? 'inset(0 0 0% 0)'
            : 'inset(0 0 100% 0)',
          transition:
            'clip-path 320ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-clip-path 320ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="h-full pt-[80px] pb-12 px-8 flex flex-col justify-between overflow-y-auto">
          <ul className="flex-1 flex flex-col">
            {chaptersNav.map((ch) => {
              const isActive = activeId === ch.id;
              const href = lang === 'en' ? ch.path.en : ch.path.ru;
              return (
                <li key={ch.id} className="border-b border-text/10">
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-6 py-6 group"
                  >
                    <span className="font-mono text-[13px] tracking-[0.25em] text-text/45 w-9 shrink-0">
                      {ch.num}
                    </span>
                    <span
                      className={`font-serif text-[30px] sm:text-[34px] leading-[0.95] tracking-[0.01em] ${
                        isActive
                          ? 'text-accent font-bold'
                          : 'text-text/75 group-hover:text-text'
                      }`}
                      style={{
                        fontVariationSettings: '"opsz" 60',
                        fontWeight: 700,
                      }}
                    >
                      {ch.title[lang]}
                    </span>
                    <span
                      className="ml-auto w-2 h-2 rounded-full self-center transition-opacity duration-200"
                      style={{
                        backgroundColor: 'var(--accent)',
                        opacity: isActive ? 1 : 0,
                      }}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-8 flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.25em] text-text/45">
            <LiveClock />
            <span>1757–1947</span>
          </div>
        </div>
      </div>
    </>
  );
};
