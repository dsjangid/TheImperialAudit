export function recordArchivalView(documentId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = sessionStorage.getItem('imperial_audit_views') || '{}';
    const parsed = JSON.parse(raw);
    parsed[documentId] = (parsed[documentId] || 0) + 1;
    sessionStorage.setItem('imperial_audit_views', JSON.stringify(parsed));
  } catch {}
}
