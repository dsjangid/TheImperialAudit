'use client';

import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        dotRef.current.style.opacity = '1';
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('article') ||
          target.closest('.interactive') ||
          target.closest('[data-cursor="accent"]'))
      ) {
        isHovered.current = true;
        if (ringRef.current) {
          ringRef.current.classList.add('cursor-ring-hover');
        }
        if (dotRef.current) {
          dotRef.current.classList.add('cursor-dot-hover');
        }
      } else {
        isHovered.current = false;
        if (ringRef.current) {
          ringRef.current.classList.remove('cursor-ring-hover');
        }
        if (dotRef.current) {
          dotRef.current.classList.remove('cursor-dot-hover');
        }
      }
    };

    let animationFrameId: number;

    const renderLoop = () => {
      // Lerp for smooth trailing ring
      const ease = 0.22;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
        ringRef.current.style.opacity = mousePos.current.x < 0 ? '0' : '1';
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 -ml-[4px] -mt-[4px] bg-[#FF0000] rounded-full pointer-events-none z-[99999] opacity-0 transition-transform duration-75 ease-out"
      />
      {/* Flat Trailing Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-8 h-8 -ml-[16px] -mt-[16px] border border-[#FF0000] rounded-full pointer-events-none z-[99998] opacity-0 transition-[width,height,border-color] duration-150 ease-out"
      />
      <style jsx global>{`
        .cursor-ring-hover {
          width: 48px !important;
          height: 48px !important;
          margin-left: -24px !important;
          margin-top: -24px !important;
          border-color: #FF0000 !important;
        }
        .cursor-dot-hover {
          transform: scale(1.5) !important;
          background-color: #FFFFFF !important;
        }
      `}</style>
    </>
  );
};
