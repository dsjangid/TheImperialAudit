'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type NightLightPreset = 'mild' | 'warm' | 'candlelight';

interface NightLightContextType {
  enabled: boolean;
  toggleEnabled: () => void;
  setEnabled: (enabled: boolean) => void;
  preset: NightLightPreset;
  setPreset: (preset: NightLightPreset) => void;
  warmth: number; // 10 to 100
  setWarmth: (warmth: number) => void;
  autoSunset: boolean;
  setAutoSunset: (auto: boolean) => void;
  softContrast: boolean;
  setSoftContrast: (soft: boolean) => void;
}

const NightLightContext = createContext<NightLightContextType | undefined>(undefined);

const PRESET_WARMTH_MAP: Record<NightLightPreset, number> = {
  mild: 25,
  warm: 55,
  candlelight: 85,
};

export const NightLightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enabled, setEnabledState] = useState<boolean>(false);
  const [preset, setPresetState] = useState<NightLightPreset>('warm');
  const [warmth, setWarmthState] = useState<number>(55);
  const [autoSunset, setAutoSunsetState] = useState<boolean>(false);
  const [softContrast, setSoftContrastState] = useState<boolean>(true);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Initialize from localStorage or local time on mount
  useEffect(() => {
    try {
      const savedEnabled = localStorage.getItem('imperial_night_light_enabled');
      const savedPreset = localStorage.getItem('imperial_night_light_preset') as NightLightPreset | null;
      const savedWarmth = localStorage.getItem('imperial_night_light_warmth');
      const savedAuto = localStorage.getItem('imperial_night_light_auto_sunset');
      const savedSoft = localStorage.getItem('imperial_night_light_soft_contrast');

      const isAuto = savedAuto === 'true';
      setAutoSunsetState(isAuto);

      if (savedPreset && ['mild', 'warm', 'candlelight'].includes(savedPreset)) {
        setPresetState(savedPreset);
      }

      if (savedWarmth) {
        const parsed = parseInt(savedWarmth, 10);
        if (!isNaN(parsed) && parsed >= 10 && parsed <= 100) {
          setWarmthState(parsed);
        }
      }

      if (savedSoft !== null) {
        setSoftContrastState(savedSoft === 'true');
      }

      if (savedEnabled !== null) {
        setEnabledState(savedEnabled === 'true');
      } else if (isAuto) {
        // Check if current local hour is between 20:00 (8 PM) and 06:00 (6 AM)
        const currentHour = new Date().getHours();
        if (currentHour >= 20 || currentHour < 6) {
          setEnabledState(true);
        }
      }
    } catch {
      // localStorage unavailable (e.g. private mode)
    }
    setIsInitialized(true);
  }, []);

  // Update DOM attributes and CSS variables whenever settings change
  useEffect(() => {
    if (!isInitialized && typeof window === 'undefined') return;

    const root = document.documentElement;

    if (enabled) {
      root.setAttribute('data-night-light', 'true');
      root.setAttribute('data-night-light-preset', preset);
      root.setAttribute('data-soft-contrast', softContrast ? 'true' : 'false');

      // Calculate opacity and tint values based on warmth percentage (10% - 100%)
      const normalizedWarmth = Math.max(10, Math.min(100, warmth)) / 100;
      const tintOpacity = (0.04 + normalizedWarmth * 0.14).toFixed(3);
      const sepiaAmount = (0.08 + normalizedWarmth * 0.22).toFixed(3);
      const brightnessAdjust = (1 - normalizedWarmth * 0.05).toFixed(3);

      root.style.setProperty('--nl-warmth-ratio', normalizedWarmth.toString());
      root.style.setProperty('--nl-tint-opacity', tintOpacity);
      root.style.setProperty('--nl-sepia-amount', sepiaAmount);
      root.style.setProperty('--nl-brightness-adjust', brightnessAdjust);
    } else {
      root.removeAttribute('data-night-light');
      root.removeAttribute('data-night-light-preset');
      root.removeAttribute('data-soft-contrast');
      root.style.removeProperty('--nl-warmth-ratio');
      root.style.removeProperty('--nl-tint-opacity');
      root.style.removeProperty('--nl-sepia-amount');
      root.style.removeProperty('--nl-brightness-adjust');
    }
  }, [enabled, preset, warmth, softContrast, isInitialized]);

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

  const setPreset = useCallback((p: NightLightPreset) => {
    setPresetState(p);
    const targetWarmth = PRESET_WARMTH_MAP[p];
    setWarmthState(targetWarmth);
    try {
      localStorage.setItem('imperial_night_light_preset', p);
      localStorage.setItem('imperial_night_light_warmth', targetWarmth.toString());
    } catch {}
  }, []);

  const setWarmth = useCallback((w: number) => {
    const clamped = Math.max(10, Math.min(100, w));
    setWarmthState(clamped);
    try {
      localStorage.setItem('imperial_night_light_warmth', clamped.toString());
    } catch {}
  }, []);

  const setAutoSunset = useCallback((auto: boolean) => {
    setAutoSunsetState(auto);
    try {
      localStorage.setItem('imperial_night_light_auto_sunset', auto ? 'true' : 'false');
      if (auto) {
        const currentHour = new Date().getHours();
        if (currentHour >= 20 || currentHour < 6) {
          setEnabled(true);
        }
      }
    } catch {}
  }, [setEnabled]);

  const setSoftContrast = useCallback((soft: boolean) => {
    setSoftContrastState(soft);
    try {
      localStorage.setItem('imperial_night_light_soft_contrast', soft ? 'true' : 'false');
    } catch {}
  }, []);

  return (
    <NightLightContext.Provider
      value={{
        enabled,
        toggleEnabled,
        setEnabled,
        preset,
        setPreset,
        warmth,
        setWarmth,
        autoSunset,
        setAutoSunset,
        softContrast,
        setSoftContrast,
      }}
    >
      {children}
      {/* Ambient Eye-Comfort Overlay Layer: Hardware-accelerated, non-blocking, calibrated amber tone */}
      <div
        id="imperial-night-light-overlay"
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none z-[99990] transition-opacity duration-500 ease-out ${
          enabled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundColor: 'rgba(255, 160, 45, var(--nl-tint-opacity, 0.08))',
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
