'use client';

import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only activate for devices with a precision mouse/trackpad pointer
    if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
      setIsPointerFine(true);
    } else {
      return;
    }

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !dotRef.current) return;

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

      if (isInteractive) {
        dotRef.current.classList.add('cursor-dot-active');
      } else {
        dotRef.current.classList.remove('cursor-dot-active');
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!isPointerFine) {
    return null;
  }

  return (
    <>
      {/* Pure Red Precision Dot Cursor */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] bg-[#FF0000] rounded-full pointer-events-none z-[100000] opacity-0 transition-[width,height,margin,background-color] duration-150 ease-out"
        style={{ willChange: 'transform' }}
      />
      <style jsx global>{`
        .cursor-dot-active {
          width: 14px !important;
          height: 14px !important;
          margin-left: -7px !important;
          margin-top: -7px !important;
          background-color: #FF0000 !important;
        }
      `}</style>
    </>
  );
};
