import type { Metadata } from 'next';
import './globals.css';
import { NightLightProvider } from '@/context/NightLightContext';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: "The Imperial Audit · British Colonial Rule in India (1757–1947)",
  description:
    "A forensic investigative monograph on the financial drain, institutional racial hierarchy, and recurring famines under British colonial rule in India.",
  icons: {
    icon: '/TheImperialAudit/favicon.ico',
  },
  manifest: '/TheImperialAudit/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-accent selection:text-white">
        <LanguageProvider>
          <NightLightProvider>
            {children}
          </NightLightProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
