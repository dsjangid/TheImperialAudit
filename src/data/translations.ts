export interface ChapterNav {
  id: string;
  num: string;
  title: {
    en: string;
    ru: string;
  };
  path: {
    en: string;
    ru: string;
  };
}

export const chaptersNav: ChapterNav[] = [
  {
    id: 'cover',
    num: '00',
    title: { en: 'COVER', ru: 'ОБЛОЖКА' },
    path: { en: '/en', ru: '/' },
  },
  {
    id: 'timeline',
    num: '01',
    title: { en: 'CONQUEST', ru: 'ЗАВОЕВАНИЕ' },
    path: { en: '/en/chapters/timer', ru: '/chapters/timer' },
  },
  {
    id: 'comparison',
    num: '02',
    title: { en: '1857', ru: 'ВОССТАНИЕ' },
    path: { en: '/en/chapters/comparison', ru: '/chapters/comparison' },
  },
  {
    id: 'dossiers',
    num: '03',
    title: { en: 'SUBJECTS', ru: 'ФИГУРАНТЫ' },
    path: { en: '/en/chapters/dossiers', ru: '/chapters/dossiers' },
  },
  {
    id: 'share',
    num: '04',
    title: { en: 'JALLIANWALA', ru: 'ДЖАЛЛИАНВАЛА' },
    path: { en: '/en/chapters/share', ru: '/chapters/share' },
  },
  {
    id: 'action',
    num: '05',
    title: { en: 'ARCHIVE', ru: 'АРХИВ' },
    path: { en: '/en/chapters/action', ru: '/chapters/action' },
  },
];

export const translations = {
  en: {
    nav: {
      siteTitle: "THE IMPERIAL AUDIT · BRITISH INDIA · 1757–1947",
      siteTitleMid: "IMPERIAL AUDIT · 1757–1947",
      langSwitch: "RU / EN",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    meta: {
      caseNo: "DOSSIER №",
      scope: "PERIOD",
      subject: "SUBJECT",
      sources: "SOURCES",
      opened: "CLOSED",
      reading: "YOU ARE READING",
      defendant: "RESPONDENT:",
      subjectOfAudit: "SUBJECT OF AUDIT:",
      action: "ACTION:",
      methodology: "METHODOLOGY:",
      update: "ARCHIVE — UPDATE:",
      epigraph: "EPIGRAPH",
      officialRegistry: "— Forensic Research Archive",
      registeredDate: "— Opened: 23 June 1757",
      jurisdiction: "— Jurisdiction: Bengal Presidency",
      subjectOfAuditAside: "— Subject of audit",
      registryFZ: "— East India Company Charter",
      defendantUndetermined: "— Defendant: British Crown",
      ratio465: "— Drain Ratio: ∞ : 0",
      militaryPercent: "— Military coercion: constant",
      socialPercent: "— Famine relief: withheld",
      sourcesCount: "— 32 verified primary sources",
      methodologyBelow: "— Methodology below",
      fz426: "— India Office Records, British Library",
      fz425: "— Parliamentary Debates (Hansard)",
      minFin: "— National Archives, Kew",
      accountsChamber: "— Hunter Commission Report, 1920",
    },
    footer: {
      publishedBy: "PUBLISHED BY DEVOCO STUDIO",
      firstEdition: "FIRST EDITION · MCMXLVII",
      setIn: "SET IN SOURCE SERIF 4 AND JETBRAINS MONO",
      proofCopy: "FORENSIC RESEARCH DOSSIER · DECLASSIFIED ARCHIVE",
    },
    common: {
      openCase: "Open the archive",
      shareAudit: "share this archive",
      backToRegistry: "← BACK TO REGISTRY · 03",
      seeChapter1: "→ See Chapter 01 — Conquest",
      seeChapter2: "→ See Chapter 02 — 1857",
      fullRegistrySources: "Full registry of sources → Chapter 05",
      openAppendix: "Open the appendix",
      nextChapter: "↓ NEXT CHAPTER",
    },
  },
  ru: {
    nav: {
      siteTitle: "НАРОДНЫЙ АУДИТ · ИЗДАНИЕ I · MMXXVI",
      siteTitleMid: "АУДИТ · MMXXVI",
      langSwitch: "RU / EN",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    meta: {
      caseNo: "ДЕЛО №",
      scope: "ОБЪЁМ",
      subject: "ПРЕДМЕТ",
      sources: "ИСТОЧНИКИ",
      opened: "ОТКРЫТО",
      reading: "ВЫ ЧИТАЕТЕ",
      defendant: "ОТВЕТЧИК:",
      subjectOfAudit: "ПРЕДМЕТ АУДИТА:",
      action: "ДЕЙСТВИЕ:",
      methodology: "МЕТОДОЛОГИЯ:",
      update: "ПО ДЕЛУ — ОБНОВЛЕНИЕ:",
      epigraph: "ЭПИГРАФ",
      officialRegistry: "— Официальный реестр",
      registeredDate: "— Зарегистрировано: 28 ноя 2025",
      jurisdiction: "— Юрисдикция: Российская Федерация",
      subjectOfAuditAside: "— Предмет аудита",
      registryFZ: "— Реестр: ФЗ № 426-ФЗ",
      defendantUndetermined: "— Ответчик: не определён",
      ratio465: "— Соотношение 4,65 : 1",
      militaryPercent: "— Оборона и безопасность: 38%",
      socialPercent: "— Здравоохранение и образование: 8%",
      sourcesCount: "— 4 проверенных источника",
      methodologyBelow: "— Методология ниже",
      fz426: "— Федеральный закон № 426-ФЗ (расходы)",
      fz425: "— Федеральный закон № 425-ФЗ (НДС 20→22%)",
      minFin: "— Министерство финансов РФ",
      accountsChamber: "— Счётная палата РФ",
    },
    footer: {
      publishedBy: "ИЗДАНО DEVOCO STUDIO",
      firstEdition: "ПЕРВОЕ ИЗДАНИЕ · MMXXVI",
      setIn: "НАБРАНО В SOURCE SERIF 4 И JETBRAINS MONO",
      proofCopy: "ПРОБНЫЙ ОТТИСК · НЕ ДЛЯ РАСПРОСТРАНЕНИЯ",
    },
    common: {
      openCase: "Открыть дело",
      shareAudit: "поделиться аудитом",
      backToRegistry: "← НАЗАД К РЕЕСТРУ · 03",
      seeChapter1: "→ См. Главу 01 — Хронометраж",
      seeChapter2: "→ См. Главу 02 — Сравнение",
      fullRegistrySources: "Полный реестр источников → Глава 05.3",
      openAppendix: "Открыть приложение",
      nextChapter: "↓ СЛЕДУЮЩАЯ ГЛАВА",
    },
  },
};
