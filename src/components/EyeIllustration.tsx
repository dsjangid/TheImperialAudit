'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface EyeIllustrationProps {
  href?: string;
  lang?: 'en' | 'ru';
}

export const EyeIllustration: React.FC<EyeIllustrationProps> = ({
  href = '/en/chapters/timer',
  lang = 'en',
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      setOffset({
        x: Math.max(-10, Math.min(10, deltaX * 12)),
        y: Math.max(-8, Math.min(8, deltaY * 10)),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center my-12 md:my-24"
    >
      <p className="font-mono text-[10px] tracking-[0.25em] text-[#F4F2EE]/40 uppercase mb-6">
        {lang === 'ru' ? '— открыть дело —' : '— open the case —'}
      </p>
      <Link
        href={href}
        data-cursor="accent"
        aria-label="Open the case: subject №01"
        className="relative inline-block cursor-pointer select-none bg-transparent border-0 p-0 transition-transform duration-300 hover:scale-105"
        style={{ width: '120px', height: '78px' }}
      >
        <img
          src="/illustrations/eye/eye.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain eye-pulse pointer-events-none"
          style={{
            transform: 'translate3d(' + offset.x.toFixed(2) + 'px, ' + offset.y.toFixed(2) + 'px, 0)',
            willChange: 'transform',
            transition: 'transform 100ms ease-out, filter 300ms ease-out',
            mixBlendMode: 'screen',
            filter: 'none',
          }}
        />
      </Link>
    </div>
  );
};
