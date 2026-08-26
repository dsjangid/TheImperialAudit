import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';

export default function PutinTribunalPage() {
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
            APPENDIX 02 · CASE 03 / 01
          </p>
          <h1 className="font-serif text-[clamp(44px,7vw,100px)] font-black leading-[0.95] mt-4">
            THE TRIBUNAL
          </h1>
          <p className="font-serif italic text-text/70 text-[20px] mt-4">
            Special Tribunal for the Crime of Aggression against Ukraine
          </p>
        </header>

        <hr className="border-text/15" />

        <div className="space-y-12 py-16 max-w-[800px]">
          <p className="font-serif text-[19px] leading-relaxed text-text/90">
            On 15 May 2026, thirty-six states and the European Union concluded the agreement in Chișinău establishing the Special Tribunal for the Crime of Aggression against Ukraine, providing a legal framework for prosecuting high-level political and military leadership.
          </p>

          <div className="p-8 bg-text/[0.03] border border-text/15 space-y-4">
            <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em]">
              INTERNATIONAL ARREST WARRANTS
            </span>
            <p className="font-serif text-[17px] text-text/80 leading-relaxed">
              <strong>Vladimir Putin</strong> (President) & <strong>Maria Lvova-Belova</strong> (Children’s Commissioner) — ICC Warrant issued 17 March 2023 for unlawful deportation of children.<br /><br />
              <strong>Sergei Shoigu</strong> (Former Defence Minister) & <strong>Nikolai Patrushev</strong> (Aide to President) — ICC Warrant issued 25 June 2024 for strikes on civil infrastructure.
            </p>
          </div>
        </div>
      </main>

      <PageCornerBadges fileNo="001-B" chapterTitle="TRIBUNAL" pageNum="030" totalPages="047" />
    </>
  );
}
