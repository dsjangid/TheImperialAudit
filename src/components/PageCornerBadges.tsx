'use client';

import React, { useEffect, useState } from 'react';

interface PageCornerBadgesProps {
 fileNo?: string;
 chapterTitle?: string;
 pageNum?: string;
 totalPages?: string;
}

export const PageCornerBadges: React.FC<PageCornerBadgesProps>= ({
 fileNo = '001',
 chapterTitle = 'COVER',
 pageNum = '001',
 totalPages = '047',
}) =>{
 const [scrollProgress, setScrollProgress] = useState(0);

 useEffect(() =>{
 const handleScroll = () =>{
 const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
 if (totalHeight >0) {
 setScrollProgress(window.scrollY / totalHeight);
 }
 };

 window.addEventListener('scroll', handleScroll, { passive: true });
 return () =>window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
<>
 {/* Bottom Left File Badge */}
<div
 className="hidden md:flex fixed bottom-6 left-6 z-50 w-[124px] h-[40px] border border-white/50 rounded-[50%] flex-col items-center justify-center gap-[1px] font-mono text-white/80 text-[8px] tracking-[0.12em] uppercase leading-[1.2] pointer-events-none select-none px-2 mix-blend-difference"
 vt-update="auto"
 >
<span className="whitespace-nowrap">FILE No. {fileNo}</span>
<span className="whitespace-nowrap">{chapterTitle}</span>
</div>

 {/* Bottom Right Page Number */}
<div
 className="hidden md:block fixed bottom-5 right-5 z-40 font-mono text-[9px] text-white/35 uppercase tracking-[0.15em] pointer-events-none mix-blend-difference"
 vt-update="auto"
 >
 P. {pageNum} / {totalPages}
</div>

 {/* Right Edge Vertical Scroll Progress Bar */}
<div className="hidden lg:block fixed top-0 right-8 w-px h-screen z-40 pointer-events-none">
<div className="absolute inset-0 bg-[color:var(--text)]/10" />
<div
 className="absolute inset-x-0 top-0 bg-accent origin-top transition-transform duration-75 ease-out"
 style={{
 height: '100%',
 transform: 'scaleY(' + scrollProgress + ')',
 }}
 />
</div>
</>
 );
};
