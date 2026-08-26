import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';

export default function PutinRecordPage() {
 return (
<>
<Navbar lang="en" />

<main className="px-[6vw] pt-[120px] pb-24 max-w-[1400px] mx-auto" vt-update="auto">
<header className="pb-16">
<Link
 className="font-mono text-[11px] uppercase tracking-[0.2em] text-text/60 hover:text-text underline-offset-4 hover:underline transition-colors"
 href="/en/chapters/dossiers"
 >
 ← BACK TO REGISTRY · 03
</Link>
<p className="font-mono text-[12px] uppercase tracking-[0.25em] text-text/60 mt-12">
 APPENDIX 01 · CASE 03 / 01
</p>
<h1 className="font-serif text-[clamp(44px,7vw,100px)] font-black leading-[0.95] mt-4">
 RECORD OF CONDUCT
</h1>
<p className="font-serif italic text-text/70 text-[20px] mt-4">
 26 Years in Power · 1999: 2026 · Chronological Overview of State Actions
</p>
</header>

<hr className="border-text/15" />

<div className="space-y-24 py-16 max-w-[800px]">
<section className="space-y-6">
<h2 className="font-serif text-[32px] font-bold text-accent">1. WARS & ARMED CAMPAIGNS</h2>
<ul className="space-y-6 font-serif text-[17px] text-text/85 leading-relaxed">
<li className="border-l border-text/20 pl-6">
<strong className="block font-mono text-[11px] text-accent uppercase tracking-[0.2em]">1999: 2009</strong>
<strong>Second Chechen War:</strong>Official counter-terrorist operation resulting in extensive destruction of Grozny and tens of thousands of civilian casualties.
</li>
<li className="border-l border-text/20 pl-6">
<strong className="block font-mono text-[11px] text-accent uppercase tracking-[0.2em]">August 2008</strong>
<strong>Five-Day War in Georgia:</strong>Direct military intervention and unilateral recognition of breakaway territories of South Ossetia and Abkhazia.
</li>
<li className="border-l border-text/20 pl-6">
<strong className="block font-mono text-[11px] text-accent uppercase tracking-[0.2em]">2014: Present</strong>
<strong>Annexation of Crimea & Donbas War:</strong>Military takeover of Crimean peninsula without insignia and proxy warfare in eastern Ukraine.
</li>
<li className="border-l border-accent pl-6">
<strong className="block font-mono text-[11px] text-accent uppercase tracking-[0.2em] font-bold">2022: Present</strong>
<strong>Full-Scale Invasion of Ukraine:</strong>Largest interstate war in Europe since 1945, triggering comprehensive Western sanctions and ICC arrest warrants.
</li>
</ul>
</section>

<section className="space-y-6">
<h2 className="font-serif text-[32px] font-bold">2. DOMESTIC LEGISLATION & RESTRICTIONS</h2>
<ul className="space-y-4 font-serif text-[17px] text-text/85 leading-relaxed">
<li><strong>2012:</strong>«Foreign Agents» Law enacted, later expanded to individuals and media.</li>
<li><strong>2015:</strong>«Undesirable Organizations» Law criminalizing cooperation with international NGOs.</li>
<li><strong>2020:</strong>Constitutional Amendments resetting presidential term limits to zero until 2036.</li>
<li><strong>2022:</strong>Military Censorship Articles (207.3 and 280.3) penalizing anti-war expression with up to 15 years in prison.</li>
</ul>
</section>
</div>
</main>

<PageCornerBadges fileNo="001-A" chapterTitle="RECORD" pageNum="028" totalPages="047" />
</>
 );
}
