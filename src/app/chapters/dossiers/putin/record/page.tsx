import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';

export default function PutinRecordPageRu() {
  return (
    <>
      <Navbar lang="ru" />

      <main className="px-[6vw] pt-[120px] pb-24 max-w-[1400px] mx-auto" vt-update="auto">
        <header className="pb-16">
          <Link
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-text/60 hover:text-text underline-offset-4 hover:underline transition-colors"
            href="/chapters/dossiers"
          >
            ← НАЗАД К РЕЕСТРУ · 03
          </Link>
          <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-text/60 mt-12">
            ПРИЛОЖЕНИЕ 01 · ДЕЛО 03 / 01
          </p>
          <h1 className="font-serif text-[clamp(44px,7vw,100px)] font-black leading-[0.95] mt-4">
            ХРОНИКА
          </h1>
          <p className="font-serif italic text-text/70 text-[20px] mt-4">
            26 лет у власти · 1999 — 2026 · Обзор ключевых событий
          </p>
        </header>

        <hr className="border-text/15" />

        <div className="space-y-24 py-16 max-w-[800px]">
          <section className="space-y-6">
            <h2 className="font-serif text-[32px] font-bold text-accent">1. ВОЙНЫ И ВОЕННЫЕ ОПЕРАЦИИ</h2>
            <ul className="space-y-6 font-serif text-[17px] text-text/85 leading-relaxed">
              <li className="border-l border-text/20 pl-6">
                <strong className="block font-mono text-[11px] text-accent uppercase tracking-[0.2em]">1999 — 2009</strong>
                <strong>Вторая чеченская война:</strong> Контртеррористическая операция, сопровождавшаяся разрушением Грозного.
              </li>
              <li className="border-l border-text/20 pl-6">
                <strong className="block font-mono text-[11px] text-accent uppercase tracking-[0.2em]">Август 2008</strong>
                <strong>Война в Грузии:</strong> Ввод войск и признание независимости Южной Осетии и Абхазии.
              </li>
              <li className="border-l border-text/20 pl-6">
                <strong className="block font-mono text-[11px] text-accent uppercase tracking-[0.2em]">2014 — н.в.</strong>
                <strong>Крым и Донбасс:</strong> Аннексия Крыма и военный конфликт на востоке Украины.
              </li>
              <li className="border-l border-accent pl-6">
                <strong className="block font-mono text-[11px] text-accent uppercase tracking-[0.2em] font-bold">2022 — н.в.</strong>
                <strong>Вторжение в Украину:</strong> Крупнейший вооруженный конфликт в Европе со времен Второй мировой войны.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <PageCornerBadges fileNo="001-A" chapterTitle="ХРОНИКА" pageNum="028" totalPages="047" />
    </>
  );
}
