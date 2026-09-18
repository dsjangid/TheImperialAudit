'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useNightLight, NightLightPreset } from '@/context/NightLightContext';

interface NightLightToggleProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

export const NightLightToggle: React.FC<NightLightToggleProps> = ({
  variant = 'desktop',
  className = '',
}) => {
  const {
    enabled,
    toggleEnabled,
    preset,
    setPreset,
    warmth,
    setWarmth,
    autoSunset,
    setAutoSunset,
    softContrast,
    setSoftContrast,
  } = useNightLight();

  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close popover on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Mobile Drawer layout
  if (variant === 'mobile') {
    return (
      <div className={`border-t border-[#2A2A2A] pt-6 mt-6 ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                enabled ? 'bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]' : 'bg-[#A3A39D]/30'
              }`}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5F5F0] font-bold">
              EYE COMFORT MODE
            </span>
          </div>

          <button
            type="button"
            onClick={toggleEnabled}
            role="switch"
            aria-checked={enabled}
            aria-label="Toggle Night Light"
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              enabled ? 'bg-[#C62828]' : 'bg-[#2A2A2A]'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                enabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {enabled && (
          <div className="space-y-4 pt-2 font-mono text-[11px]">
            {/* Presets */}
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { id: 'mild', label: 'MILD', k: '3400K' },
                  { id: 'warm', label: 'WARM', k: '2700K' },
                  { id: 'candlelight', label: 'CANDLE', k: '1900K' },
                ] as const
              ).map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPreset(p.id)}
                  className={`py-2 px-1 text-center border transition-all ${
                    preset === p.id
                      ? 'border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B] font-bold'
                      : 'border-[#2A2A2A] text-[#D6D6D0] hover:text-[#F5F5F0]'
                  }`}
                >
                  <span className="block">{p.label}</span>
                  <span className="block text-[9px] opacity-60">{p.k}</span>
                </button>
              ))}
            </div>

            {/* Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] text-[#A3A39D]">
                <span>WARMTH INTENSITY</span>
                <span className="text-[#F59E0B] font-bold">{warmth}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                value={warmth}
                onChange={(e) => setWarmth(parseInt(e.target.value, 10))}
                className="w-full h-1 bg-[#2A2A2A] rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
                aria-label="Eye comfort warmth percentage"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop Header layout
  return (
    <div className={`relative inline-block text-left ${className}`}>
      <div className="flex items-center">
        {/* Main Quick Toggle Pill */}
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleEnabled}
          role="switch"
          aria-checked={enabled}
          aria-label="Toggle Night Light (Eye Comfort Mode, Alt+N)"
          title={`Eye Comfort: ${enabled ? `ON (${preset.toUpperCase()})` : 'OFF'} — Press Alt+N`}
          className={`flex items-center gap-2 px-2.5 py-1.5 border transition-all font-mono text-[11px] uppercase tracking-wider rounded-none select-none ${
            enabled
              ? 'border-[#F59E0B]/50 bg-[#F59E0B]/10 text-[#F59E0B]'
              : 'border-[#2A2A2A] hover:border-[#A3A39D]/50 text-[#A3A39D] hover:text-[#F5F5F0]'
          }`}
        >
          {/* Candle / Amber Lamp Icon */}
          <span className="relative flex items-center justify-center w-3 h-3 shrink-0">
            <span
              className={`absolute w-2 h-2 rounded-full transition-all ${
                enabled
                  ? 'bg-[#F59E0B] shadow-[0_0_8px_#F59E0B] scale-110'
                  : 'bg-[#A3A39D]/40 scale-75'
              }`}
            />
          </span>

          <span className="hidden xl:inline font-semibold">
            {enabled ? `${preset.toUpperCase()}` : 'NIGHT LIGHT'}
          </span>
          <span className="xl:hidden font-semibold">
            {enabled ? 'WARM' : 'LIGHT'}
          </span>
        </button>

        {/* Options Dropdown Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Eye Comfort Settings"
          title="Adjust warmth, auto-sunset, and presets"
          className={`px-1.5 py-1.5 border-y border-r transition-all font-mono text-[10px] ${
            enabled
              ? 'border-[#F59E0B]/50 bg-[#F59E0B]/10 text-[#F59E0B]'
              : 'border-[#2A2A2A] hover:border-[#A3A39D]/50 text-[#A3A39D] hover:text-[#F5F5F0]'
          }`}
        >
          <span className="inline-block transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            ▾
          </span>
        </button>
      </div>

      {/* Floating Settings Panel Popover */}
      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label="Night Light Settings"
          className="absolute right-0 top-full mt-2 w-80 p-5 bg-[#0D0D0D] border border-[#2A2A2A] shadow-2xl z-[100] animate-fade-in font-mono text-[11px]"
          style={{ backdropFilter: 'blur(12px)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A] mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_6px_#F59E0B]" />
              <span className="uppercase tracking-[0.2em] text-[#F5F5F0] font-bold">
                EYE COMFORT FILTER
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[#A3A39D] hover:text-[#F5F5F0] text-sm leading-none"
              aria-label="Close settings"
            >
              &times;
            </button>
          </div>

          <div className="space-y-4">
            {/* Quick Toggle Switch */}
            <div className="flex items-center justify-between py-1">
              <div>
                <span className="block text-[#F5F5F0] font-semibold">ACTIVE FILTER</span>
                <span className="text-[10px] text-[#A3A39D]">Blue light reduction (Alt+N)</span>
              </div>
              <button
                type="button"
                onClick={toggleEnabled}
                role="switch"
                aria-checked={enabled}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${
                  enabled ? 'bg-[#C62828]' : 'bg-[#2A2A2A]'
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    enabled ? 'translate-x-4' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Presets Section */}
            <div>
              <span className="block text-[10px] uppercase tracking-[0.15em] text-[#A3A39D] mb-2">
                COLOR TEMPERATURE PRESETS
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: 'mild', label: 'MILD', k: '3400K' },
                    { id: 'warm', label: 'WARM', k: '2700K' },
                    { id: 'candlelight', label: 'CANDLE', k: '1900K' },
                  ] as const
                ).map((p) => {
                  const isSelected = enabled && preset === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        if (!enabled) toggleEnabled();
                        setPreset(p.id);
                      }}
                      className={`p-2 text-center border transition-all ${
                        isSelected
                          ? 'border-[#F59E0B] bg-[#F59E0B]/15 text-[#F59E0B] font-bold'
                          : 'border-[#2A2A2A] text-[#D6D6D0] hover:border-[#A3A39D]/50 hover:text-[#F5F5F0]'
                      }`}
                    >
                      <span className="block font-bold">{p.label}</span>
                      <span className="block text-[9px] opacity-60">{p.k}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Continuous Warmth Slider */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-[#A3A39D] uppercase tracking-wider">WARMTH INTENSITY</span>
                <span className="text-[#F59E0B] font-bold tabular-nums">{warmth}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                value={warmth}
                disabled={!enabled}
                onChange={(e) => setWarmth(parseInt(e.target.value, 10))}
                className={`w-full h-1 bg-[#2A2A2A] rounded-lg appearance-none cursor-pointer accent-[#F59E0B] ${
                  !enabled ? 'opacity-40 cursor-not-allowed' : ''
                }`}
                aria-label="Warmth intensity slider"
              />
              <div className="flex justify-between text-[9px] text-[#A3A39D]/60 pt-0.5">
                <span>Subtle (10%)</span>
                <span>Deep Amber (100%)</span>
              </div>
            </div>

            {/* Soft Contrast Mode */}
            <div className="flex items-center justify-between pt-2 border-t border-[#2A2A2A]">
              <div>
                <span className="block text-[#F5F5F0] font-semibold text-[11px]">SOFT CONTRAST</span>
                <span className="text-[10px] text-[#A3A39D]">Warms background to vintage paper</span>
              </div>
              <button
                type="button"
                onClick={() => setSoftContrast(!softContrast)}
                role="switch"
                aria-checked={softContrast}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${
                  softContrast && enabled ? 'bg-[#C62828]' : 'bg-[#2A2A2A]'
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    softContrast && enabled ? 'translate-x-4' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Auto Sunset Option */}
            <div className="flex items-center justify-between pt-2 border-t border-[#2A2A2A]">
              <div>
                <span className="block text-[#F5F5F0] font-semibold text-[11px]">AUTO-ENGAGE AT DUSK</span>
                <span className="text-[10px] text-[#A3A39D]">Activates between 8:00 PM & 6:00 AM</span>
              </div>
              <button
                type="button"
                onClick={() => setAutoSunset(!autoSunset)}
                role="switch"
                aria-checked={autoSunset}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${
                  autoSunset ? 'bg-[#C62828]' : 'bg-[#2A2A2A]'
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    autoSunset ? 'translate-x-4' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Footer note with shortcut */}
          <div className="mt-4 pt-3 border-t border-[#2A2A2A] flex items-center justify-between text-[10px] text-[#A3A39D]/60">
            <span>KEYBOARD SHORTCUT:</span>
            <kbd className="px-1.5 py-0.5 bg-[#1A1A1A] border border-[#2A2A2A] text-[#D6D6D0] rounded">
              Alt + N
            </kbd>
          </div>
        </div>
      )}
    </div>
  );
};
