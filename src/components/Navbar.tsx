'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { chaptersNav, translations } from '@/data/translations';
import { LiveClock } from '@/components/LiveClock';

interface NavbarProps {
 lang?: 'en' | 'ru';
}

export const Navbar: React.FC<NavbarProps>= ({ lang = 'en' }) =>{
 const pathname = usePathname();
 const [mobileOpen, setMobileOpen] = useState(false);
 const t = translations[lang];

 const getActiveChapterId = () =>{
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
<nav className="fixed top-0 left-0 right-0 z-50 h-[60px] border-b border-text/10 transition-[background-color,backdrop-filter] duration-200 bg-bg/85 backdrop-blur-md">
<div className="h-full px-6 lg:px-10 xl:px-12 py-2 flex items-center justify-between gap-6 font-mono text-[10px] uppercase">
<Link
 href={lang === 'en' ? '/en': '/'}
 className="min-w-0 truncate tracking-[0.25em] text-text/55 max-w-[60vw] lg:max-w-[200px] xl:max-w-none hover:text-text transition-colors"
 >
<span className="hidden xl:inline">{t.nav.siteTitle}</span>
<span className="hidden lg:inline xl:hidden">{t.nav.siteTitleMid}</span>
<span className="lg:hidden">{t.nav.siteTitle}</span>
</Link>

<div className="hidden lg:flex shrink-0 items-center gap-5 xl:gap-8 whitespace-nowrap">
 {chaptersNav.map((ch) =>{
 const isActive = activeId === ch.id;
 const href = lang === 'en' ? ch.path.en: ch.path.ru;
 return (
<Link
 key={ch.id}
 href={href}
 className={'relative tracking-[0.2em] transition-colors ' + (isActive ? 'text-text': 'text-text/60 hover:text-text')}
 >
<span
 className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-opacity duration-200"
 style={{
 backgroundColor: 'var(--accent)',
 opacity: isActive ? 1: 0,
 }}
 aria-hidden="true"
 />
 {ch.num}: {ch.title[lang]}
</Link>
 );
 })}
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:inline-block">
<LiveClock />
</div>

<button
 type="button"
 onClick={() =>setMobileOpen(!mobileOpen)}
 className="lg:hidden flex flex-col justify-center w-7 h-7 -mr-1 group"
 aria-label={mobileOpen ? t.nav.closeMenu: t.nav.openMenu}
 aria-expanded={mobileOpen}
 aria-controls="chapter-nav-menu"
 >
<span
 className="block h-px w-6 bg-text transition-transform duration-300 ease-out origin-center"
 style={{
 transform: mobileOpen ? 'rotate(45deg) translateY(0px)': 'translateY(-3px)',
 }}
 />
<span
 className="block h-px w-6 bg-text transition-transform duration-300 ease-out origin-center"
 style={{
 transform: mobileOpen ? 'rotate(-45deg) translateY(-1px)': 'translateY(3px)',
 }}
 />
</button>
</div>
</div>
</nav>

<div
 id="chapter-nav-menu"
 className={'lg:hidden fixed inset-0 z-40 bg-bg transition-all duration-300 ' + (mobileOpen ? 'pointer-events-auto opacity-100': 'pointer-events-none opacity-0')}
 style={{
 clipPath: mobileOpen ? 'inset(0 0 0% 0)': 'inset(0 0 100% 0)',
 WebkitClipPath: mobileOpen ? 'inset(0 0 0% 0)': 'inset(0 0 100% 0)',
 transition: 'clip-path 320ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-clip-path 320ms cubic-bezier(0.4, 0, 0.2, 1)',
 }}
 aria-hidden={!mobileOpen}
 >
<div className="h-full pt-[80px] pb-12 px-8 flex flex-col justify-between overflow-y-auto">
<ul className="flex-1 flex flex-col">
 {chaptersNav.map((ch) =>{
 const isActive = activeId === ch.id;
 const href = lang === 'en' ? ch.path.en: ch.path.ru;
 return (
<li key={ch.id} className="border-b border-text/10">
<Link
 href={href}
 onClick={() =>setMobileOpen(false)}
 className="flex items-baseline gap-6 py-7 group"
 >
<span className="font-mono text-[11px] tracking-[0.25em] text-text/45 w-9 shrink-0">
 {ch.num}
</span>
<span
 className={'font-serif text-[34px] leading-[0.95] tracking-[0.01em] ' + (isActive ? 'text-text font-bold': 'text-text/75 group-hover:text-text')}
 style={{ fontVariationSettings: '"opsz" 60', fontWeight: 700 }}
 >
 {ch.title[lang]}
</span>
<span
 className="ml-1 w-1.5 h-1.5 rounded-full self-center transition-opacity duration-200"
 style={{
 backgroundColor: 'var(--accent)',
 opacity: isActive ? 1: 0,
 }}
 aria-hidden="true"
 />
</Link>
</li>
 );
 })}
</ul>
<div className="pt-10 flex items-center justify-end font-mono text-[10px] uppercase tracking-[0.25em] text-text/45">
<span>MMXXVI</span>
</div>
</div>
</div>
</>
 );
};
