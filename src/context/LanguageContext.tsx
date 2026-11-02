'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  LanguageCode,
  TRANSLATIONS,
  TranslationDictionary,
} from '@/locales/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  dict: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  dict: TRANSLATIONS.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('imperial_audit_lang') as LanguageCode;
      if (saved && (saved === 'en' || saved === 'bn' || saved === 'hi')) {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('imperial_audit_lang', lang);
      document.documentElement.lang = lang;
    } catch {}
  };

  const dict = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
