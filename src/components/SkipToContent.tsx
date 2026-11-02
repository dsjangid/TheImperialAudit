'use client';

import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E53935] focus:text-white focus:font-mono focus:text-[12px]"
    >
      Skip to main archival content
    </a>
  );
};
