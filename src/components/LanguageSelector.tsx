'use client';

import React, { useState, useEffect } from 'react';

export type LanguageCode = 'en' | 'bn' | 'hi';

interface LanguageOption {
  code: LanguageCode;
  label: string;
  native: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'bn', label: 'BN', native: 'বাংলা (Bangla)' },
  { code: 'hi', label: 'HI', native: 'हिन्दी (Hindi)' },
];

export const LanguageSelector: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('en');

  useEffect(() => {
    const saved = localStorage.getItem('imperial_audit_lang') as LanguageCode;
    if (saved && (saved === 'en' || saved === 'bn' || saved === 'hi')) {
      setSelectedLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const handleSelectLanguage = (code: LanguageCode) => {
    setSelectedLang(code);
    localStorage.setItem('imperial_audit_lang', code);
    document.documentElement.lang = code;
  };

  return (
    <nav
      aria-label="Language options"
      className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase select-none"
    >
      {LANGUAGES.map((lang, index) => {
        const isCurrent = selectedLang === lang.code;
        return (
          <React.Fragment key={lang.code}>
            {index > 0 && (
              <span className="text-[#3A3A3A] font-normal pointer-events-none" aria-hidden="true">
                /
              </span>
            )}
            <button
              type="button"
              onClick={() => handleSelectLanguage(lang.code)}
              aria-current={isCurrent ? 'true' : undefined}
              title={`${lang.label} — ${lang.native}`}
              className={`transition-colors py-0.5 focus:outline-none ${
                isCurrent
                  ? 'text-[#E53935] font-bold border-b border-[#E53935]'
                  : 'text-[#A3A39D] hover:text-[#F5F5F0] border-b border-transparent'
              }`}
            >
              {lang.label}
            </button>
          </React.Fragment>
        );
      })}
    </nav>
  );
};
