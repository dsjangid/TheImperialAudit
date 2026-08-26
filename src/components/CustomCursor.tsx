'use client';

import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only activate for devices with a precision pointer (mouse/trackpad)
    if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
      setIsPointerFine(true);
    } else {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isVisible = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Detect interactive elements without catching broad page article/section containers
      const isInteractive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('summary') ||
        target.closest('[data-cursor="accent"]') ||
        target.closest('.interactive')
      );

      if (isInteractive !== isHovering) {
        isHovering = isInteractive;
        if (ringRef.current) {
          if (isHovering) {
            ringRef.current.classList.add('cursor-ring-active');
          } else {
            ringRef.current.classList.remove('cursor-ring-active');
          }
        }
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const renderLoop = () => {
      // Smooth linear interpolation for the trailing ring
      const ease = 0.22;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isPointerFine) {
    return null;
  }

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-[#FF0000] rounded-full pointer-events-none z-[99999] opacity-0 transition-opacity duration-150 ease-out"
        style={{ willChange: 'transform' }}
      />
      {/* Trailing Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-[#FF0000]/60 rounded-full pointer-events-none z-[99998] opacity-0 transition-[width,height,margin,border-color,background-color] duration-200 ease-out"
        style={{ willChange: 'transform' }}
      />
      <style jsx global>{`
        .cursor-ring-active {
          width: 46px !important;
          height: 46px !important;
          margin-left: -23px !important;
          margin-top: -23px !important;
          border-color: #FF0000 !important;
          background-color: rgba(255, 0, 0, 0.08) !important;
        }
      `}</style>
    </>
  );
};
