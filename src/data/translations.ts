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
  {
    id: 'methodology',
    num: '06',
    title: { en: 'METHODOLOGY', ru: 'МЕТОДОЛОГИЯ' },
    path: { en: '/en/methodology', ru: '/methodology' },
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
      update: "ARCHIVE: UPDATE:",
      epigraph: "EPIGRAPH",
      officialRegistry: " - Forensic Research Archive",
      registeredDate: " - Opened: 23 June 1757",
      jurisdiction: " - Jurisdiction: Bengal Presidency / British India",
      subjectOfAuditAside: " - Subject of audit",
      registryFZ: " - East India Company Charters",
      defendantUndetermined: " - Respondent: British Imperial Crown",
      ratio465: " - Drain Ratio: ~$45 Trillion",
      militaryPercent: " - Military coercion: constant",
      socialPercent: " - Famine relief: withheld",
      sourcesCount: " - 32 verified primary sources",
      methodologyBelow: " - Methodology below",
      fz426: "India Office Records, British Library",
      fz425: " - Parliamentary Debates (Hansard)",
      minFin: " - National Archives, Kew",
      accountsChamber: " - Hunter Commission Report, 1920",
    },
    footer: {
      publishedBy: "THE DECLASSIFIED COLONIAL ARCHIVE PROJECT",
      firstEdition: "FIRST EDITION · MCMXLVII",
      setIn: "SET IN SOURCE SERIF 4 AND JETBRAINS MONO",
      proofCopy: "FORENSIC RESEARCH DOSSIER · DECLASSIFIED ARCHIVE",
    },
    common: {
      openCase: "Open the archive",
      shareAudit: "share this archive",
      backToRegistry: "← BACK TO REGISTRY · 03",
      seeChapter1: "→ See Chapter 01: Conquest",
      seeChapter2: "→ See Chapter 02: 1857",
      fullRegistrySources: "Full registry of sources → Chapter 05",
      openAppendix: "Open the appendix",
      nextChapter: "↓ NEXT CHAPTER",
    },
  },
  ru: {
    nav: {
      siteTitle: "ИМПЕРСКИЙ АУДИТ · БРИТАНСКАЯ ИНДИЯ · 1757–1947",
      siteTitleMid: "ИМПЕРСКИЙ АУДИТ · 1757–1947",
      langSwitch: "RU / EN",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    meta: {
      caseNo: "ДЕЛО №",
      scope: "ПЕРИОД",
      subject: "ПРЕДМЕТ",
      sources: "ИСТОЧНИКИ",
      opened: "ЗАКРЫТО",
      reading: "ВЫ ЧИТАЕТЕ",
      defendant: "ОТВЕТЧИК:",
      subjectOfAudit: "ПРЕДМЕТ АУДИТА:",
      action: "ДЕЙСТВИЕ:",
      methodology: "МЕТОДОЛОГИЯ:",
      update: "АРХИВ: ОБНОВЛЕНИЕ:",
      epigraph: "ЭПИГРАФ",
      officialRegistry: " - Исследовательский архив",
      registeredDate: " - Открыто: 23 июня 1757",
      jurisdiction: " - Юрисдикция: Бенгальское президентство",
      subjectOfAuditAside: " - Предмет аудита",
      registryFZ: " - Хартии Ост-Индской компании",
      defendantUndetermined: " - Ответчик: Британская корона",
      ratio465: " - Масштаб вывоза: ~$45 трлн",
      militaryPercent: " - Военное принуждение: непрерывно",
      socialPercent: " - Помощь при голоде: блокировалась",
      sourcesCount: " - 32 проверенных первоисточника",
      methodologyBelow: " - Методология ниже",
      fz426: "Архив Индийского ведомства (IOR)",
      fz425: " - Парламентские дебаты (Hansard)",
      minFin: " - Национальный архив (Кью)",
      accountsChamber: " - Доклад комиссии Хантера (1920)",
    },
    footer: {
      publishedBy: "THE DECLASSIFIED COLONIAL ARCHIVE PROJECT",
      firstEdition: "ПЕРВОЕ ИЗДАНИЕ · MCMXLVII",
      setIn: "НАБРАНО В SOURCE SERIF 4 И JETBRAINS MONO",
      proofCopy: "ИССЛЕДОВАТЕЛЬСКОЕ ДОСЬЕ · РАССЕКРЕЧЕННЫЙ АРХИВ",
    },
    common: {
      openCase: "Открыть архив",
      shareAudit: "поделиться архивом",
      backToRegistry: "← НАЗАД К РЕЕСТРУ · 03",
      seeChapter1: "→ См. Главу 01: Завоевание",
      seeChapter2: "→ См. Главу 02: 1857",
      fullRegistrySources: "Полный реестр источников → Глава 05",
      openAppendix: "Открыть приложение",
      nextChapter: "↓ СЛЕДУЮЩАЯ ГЛАВА",
    },
  },
};
