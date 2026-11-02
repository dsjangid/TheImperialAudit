import { SupportedLocale } from '@/types/i18n';

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export function getPersistedLocale(): SupportedLocale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const val = localStorage.getItem('imperial_audit_lang') as SupportedLocale;
  return (val === 'en' || val === 'bn' || val === 'hi') ? val : DEFAULT_LOCALE;
}

export function setPersistedLocale(locale: SupportedLocale): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('imperial_audit_lang', locale);
  document.documentElement.lang = locale;
  window.dispatchEvent(new CustomEvent('imperial-audit:locale-change', { detail: { locale } }));
}
