'use client';

import React, { useState, useEffect } from 'react';

const CHAIR_FRAMES = [
  '/TheImperialAudit/illustrations/chair-rotoscope/01-front.png',
  '/TheImperialAudit/illustrations/chair-rotoscope/02-34-left.png',
  '/TheImperialAudit/illustrations/chair-rotoscope/03-side.png',
  '/TheImperialAudit/illustrations/chair-rotoscope/04-back-34.png',
  '/TheImperialAudit/illustrations/chair-rotoscope/05-34-right.png',
];

interface ChairRotoscopeProps {
  className?: string;
}

export const ChairRotoscope: React.FC<ChairRotoscopeProps> = ({ className = '' }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const index = Math.floor((scrollPos / 180) % CHAIR_FRAMES.length);
      setFrameIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={'relative aspect-[3/4] max-w-[400px] mx-auto select-none ' + className}>
      {CHAIR_FRAMES.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Chair Rotoscope Frame"
          className={'absolute inset-0 w-full h-full object-contain transition-opacity duration-150 ' + (idx === frameIndex ? 'opacity-100' : 'opacity-0')}
          style={{ mixBlendMode: 'screen' }}
        />
      ))}
    </div>
  );
};
