'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface NightLightContextType {
  enabled: boolean;
  toggleEnabled: () => void;
  setEnabled: (enabled: boolean) => void;
}

const NightLightContext = createContext<NightLightContextType | undefined>(undefined);

export const NightLightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enabled, setEnabledState] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const savedEnabled = localStorage.getItem('imperial_night_light_enabled');
      if (savedEnabled !== null) {
        setEnabledState(savedEnabled === 'true');
      }
    } catch {
      // localStorage unavailable (e.g. private mode)
    }
    setIsInitialized(true);
  }, []);

  // Update DOM attributes whenever enabled changes
  useEffect(() => {
    if (!isInitialized && typeof window === 'undefined') return;

    const root = document.documentElement;

    if (enabled) {
      root.setAttribute('data-night-light', 'true');
    } else {
      root.removeAttribute('data-night-light');
    }
  }, [enabled, isInitialized]);

  // Keyboard shortcut: Alt+N or Option+N to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'n' || e.key === 'N')) {
        e.preventDefault();
        setEnabledState((prev) => {
          const next = !prev;
          try {
            localStorage.setItem('imperial_night_light_enabled', next ? 'true' : 'false');
          } catch {}
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const setEnabled = useCallback((value: boolean) => {
    setEnabledState(value);
    try {
      localStorage.setItem('imperial_night_light_enabled', value ? 'true' : 'false');
    } catch {}
  }, []);

  const toggleEnabled = useCallback(() => {
    setEnabledState((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('imperial_night_light_enabled', next ? 'true' : 'false');
      } catch {}
      return next;
    });
  }, []);

  return (
    <NightLightContext.Provider
      value={{
        enabled,
        toggleEnabled,
        setEnabled,
      }}
    >
      {children}
      {/* Ambient Eye-Comfort Overlay Layer: Hardware-accelerated, non-blocking calibrated warm tone */}
      <div
        id="imperial-night-light-overlay"
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none z-[99990] transition-opacity duration-500 ease-out ${
          enabled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundColor: 'rgba(255, 160, 45, 0.085)',
          mixBlendMode: 'multiply',
        }}
      />
    </NightLightContext.Provider>
  );
};

export const useNightLight = (): NightLightContextType => {
  const context = useContext(NightLightContext);
  if (!context) {
    throw new Error('useNightLight must be used within a NightLightProvider');
  }
  return context;
};
