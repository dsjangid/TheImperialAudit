import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';

export default function PutinTribunalPageRu() {
 return (
<>
<Navbar lang="ru" />

<main className="px-[6vw] pt-[120px] pb-24 max-w-[1400px] mx-auto" vt-update="auto">
<header className="pb-16">
<Link
 className="font-mono text-[13px] uppercase tracking-[0.2em] text-text/60 hover:text-text underline-offset-4 hover:underline transition-colors"
 href="/chapters/dossiers"
 >
 ← НАЗАД К РЕЕСТРУ · 03
</Link>
<p className="font-mono text-[13px] uppercase tracking-[0.25em] text-text/60 mt-12">
 ПРИЛОЖЕНИЕ 02 · ДЕЛО 03 / 01
</p>
<h1 className="font-serif text-[clamp(44px,7vw,100px)] font-black leading-[0.95] mt-4">
 ТРИБУНАЛ
</h1>
<p className="font-serif italic text-text/70 text-[20px] mt-4">
 Специальный трибунал по преступлению агрессии против Украины
</p>
</header>

<hr className="border-text/15" />

<div className="space-y-12 py-16 max-w-[800px]">
<p className="font-serif text-[19px] leading-relaxed text-text/90">
 15 мая 2026 года 36 государств и Европейский союз подписали соглашение в Кишинёве о создании Специального трибунала по преступлению агрессии против Украины.
</p>
</div>
</main>

<PageCornerBadges fileNo="001-B" chapterTitle="ТРИБУНАЛ" pageNum="030" totalPages="047" />
</>
 );
}
