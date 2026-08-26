'use client';

import React, { useState } from 'react';

interface ShareCalculatorProps {
 lang?: 'en' | 'ru';
}

export const ShareCalculator: React.FC<ShareCalculatorProps>= ({ lang = 'en' }) =>{
 const [monthlyIncome, setMonthlyIncome] = useState<number>(100000);
 const [monthlyExpenses, setMonthlyExpenses] = useState<number>(70000);

 const annualIncome = monthlyIncome * 12;
 const annualExpenses = monthlyExpenses * 12;

 const ndfl = annualIncome * 0.13;
 const nds = (annualExpenses * 0.22) / 1.22;
 const totalAnnualTaxes = ndfl + nds;

 const militaryShare = totalAnnualTaxes * 0.383;
 const socialShare = totalAnnualTaxes * 0.082;

 const fmt = (num: number) =>
 new Intl.NumberFormat(lang === 'ru' ? 'ru-RU': 'en-US', {
 maximumFractionDigits: 0,
 }).format(num);

 return (
<div className="bg-text/[0.02] border border-text/15 p-8 md:p-12 mt-12 max-w-[800px]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block font-mono text-[11px] uppercase tracking-[0.2em] text-text/50 mb-3">
 {lang === 'ru' ? 'Ежемесячный доход (руб)': 'Monthly income (RUB)'}
</label>
<input
 type="range"
 min="30000"
 max="1000000"
 step="10000"
 value={monthlyIncome}
 onChange={(e) =>setMonthlyIncome(Number(e.target.value))}
 className="w-full accent-accent cursor-pointer"
 />
<div className="font-serif text-[28px] font-bold mt-2 tabular-nums">
 ₽{fmt(monthlyIncome)}
</div>
</div>

<div>
<label className="block font-mono text-[11px] uppercase tracking-[0.2em] text-text/50 mb-3">
 {lang === 'ru' ? 'Ежемесячные траты (руб)': 'Monthly expenses (RUB)'}
</label>
<input
 type="range"
 min="15000"
 max="800000"
 step="5000"
 value={monthlyExpenses}
 onChange={(e) =>setMonthlyExpenses(Number(e.target.value))}
 className="w-full accent-accent cursor-pointer"
 />
<div className="font-serif text-[28px] font-bold mt-2 tabular-nums">
 ₽{fmt(monthlyExpenses)}
</div>
</div>
</div>

<hr className="border-t border-text/10 my-8" />

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
<div className="p-6 bg-accent/[0.08] border border-accent/30">
<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
 {lang === 'ru' ? 'НА ОБОРОНУ И СИЛОВИКОВ (38%)': 'FOR DEFENCE & SECURITY (38%)'}
</p>
<div className="font-serif text-[36px] font-bold text-accent tabular-nums">
 ₽{fmt(militaryShare)}
</div>
<p className="font-mono text-[11px] text-text/50 mt-2">
 {lang === 'ru' ? 'в год из ваших прямых и косвенных налогов': 'per year from your direct and indirect taxes'}
</p>
</div>

<div className="p-6 bg-text/[0.04] border border-text/20">
<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/60 mb-2">
 {lang === 'ru' ? 'НА МЕДИЦИНУ И ОБРАЗОВАНИЕ (8%)': 'FOR HEALTHCARE & EDUCATION (8%)'}
</p>
<div className="font-serif text-[36px] font-bold text-text/90 tabular-nums">
 ₽{fmt(socialShare)}
</div>
<p className="font-mono text-[11px] text-text/50 mt-2">
 {lang === 'ru' ? 'в год на социальное развитие': 'per year for social development'}
</p>
</div>
</div>

<div className="mt-8 font-mono text-[11px] text-text/40 leading-relaxed">
 {lang === 'ru'
 ? ' - Расчёт учитывает НДФЛ 13% и НДС 22% (ФЗ № 425-ФЗ), заложенный в стоимости всех потребительских товаров, распределяемый по пропорциям бюджета (ФЗ № 426-ФЗ).'
: ' - Calculation accounts for 13% personal income tax and 22% VAT (FZ No. 425-FZ) embedded in consumer prices, allocated according to the 2026 Federal Budget proportions (FZ No. 426-FZ).'}
</div>
</div>
 );
};
