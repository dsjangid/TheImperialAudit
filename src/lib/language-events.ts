export function subscribeToLocaleChange(callback: (locale: string) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = (e: Event) => {
    const custom = e as CustomEvent<{ locale: string }>;
    if (custom.detail?.locale) callback(custom.detail.locale);
  };
  window.addEventListener('imperial-audit:locale-change', handler);
  return () => window.removeEventListener('imperial-audit:locale-change', handler);
}
