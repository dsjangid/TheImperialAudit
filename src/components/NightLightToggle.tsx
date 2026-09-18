'use client';

import React from 'react';
import { useNightLight } from '@/context/NightLightContext';

interface NightLightToggleProps {
  className?: string;
}

export const NightLightToggle: React.FC<NightLightToggleProps> = ({
  className = '',
}) => {
  const { enabled, toggleEnabled } = useNightLight();

  return (
    <button
      type="button"
      onClick={toggleEnabled}
      role="switch"
      aria-checked={enabled}
      aria-label="Toggle Night Light (Alt+N)"
      title={enabled ? 'Turn off night light (Alt+N)' : 'Turn on night light (Alt+N)'}
      className={`inline-flex items-center justify-center p-1.5 rounded-none border-0 bg-transparent transition-colors duration-200 focus:outline-none cursor-pointer ${
        enabled
          ? 'text-[#F59E0B] hover:text-[#FBBF24]'
          : 'text-[#D6D6D0] hover:text-[#F5F5F0]'
      } ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={enabled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
};
