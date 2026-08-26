import type { Metadata } from 'next';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
import { InitialLoader } from '@/components/InitialLoader';

export const metadata: Metadata = {
 title: "The Imperial Audit · British Colonial Rule in India (1757–1947)",
 description:
 "A forensic investigative monograph on the financial drain, institutional racial hierarchy, and recurring famines under British colonial rule in India.",
 icons: {
 icon: '/favicon.ico',
 },
 manifest: '/manifest.webmanifest',
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
<html lang="en" className="h-full scroll-smooth">
<body className="min-h-full flex flex-col bg-bg text-text selection:bg-accent selection:text-white">
<InitialLoader />
<CustomCursor />
 {children}
</body>
</html>
 );
}
