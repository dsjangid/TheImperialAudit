export interface SourceItem {
  id: string;
  category: 'official' | 'investigative' | 'human_rights' | 'tribunal' | 'academic' | 'primary';
  name: string;
  shortDesc: { en: string; ru: string };
  url: string;
  verifiedStatus: string;
}

export const sourcesList: SourceItem[] = [
  {
    id: 'india-office-records',
    category: 'primary',
    name: 'India Office Records & Private Papers',
    shortDesc: {
      en: 'The core archive of the East India Company and its successor the India Office, held at the British Library, London. Contains administrative correspondence, revenue records, military dispatches, and judicial proceedings from 1600 to 1947.',
      ru: 'Основной архив Ост-Индской компании и её преемника — Индийского ведомства, хранящийся в Британской библиотеке, Лондон.',
    },
    url: 'https://www.bl.uk/collection-guides/india-office-records',
    verifiedStatus: 'Primary Archive',
  },
  {
    id: 'national-archives-kew',
    category: 'primary',
    name: 'The National Archives, Kew',
    shortDesc: {
      en: 'Holds Colonial Office, Foreign Office, War Office, and Cabinet papers relating to British India, including confidential dispatches on Jallianwala Bagh, the Bengal Famine, and the 1947 Partition.',
      ru: 'Содержит материалы Колониального ведомства, Военного министерства и Кабинета министров, касающиеся Британской Индии.',
    },
    url: 'https://www.nationalarchives.gov.uk',
    verifiedStatus: 'State Archive',
  },
  {
    id: 'hunter-commission',
    category: 'official',
    name: 'Report of the Hunter Commission, 1920',
    shortDesc: {
      en: 'The Disorders Inquiry Committee report examining the Punjab disturbances of 1919, including General Dyer\'s testimony on the Jallianwala Bagh massacre. Published as Cmd. 681 (1920), HMSO.',
      ru: 'Доклад Комитета по расследованию беспорядков, изучавшего события в Пенджабе 1919 года.',
    },
    url: 'https://www.bl.uk',
    verifiedStatus: 'Parliamentary Report',
  },
  {
    id: 'hansard',
    category: 'primary',
    name: 'Hansard — UK Parliamentary Debates',
    shortDesc: {
      en: 'Official record of UK parliamentary debates, including debates on the Amritsar massacre (July 1920), Bengal Famine (1943), and Indian Independence Act (1947). Fully digitised.',
      ru: 'Официальная запись дебатов Парламента Великобритании, включая дебаты об амритсарской резне и голоде в Бенгалии.',
    },
    url: 'https://hansard.parliament.uk',
    verifiedStatus: 'Official Parliamentary Record',
  },
  {
    id: 'patnaik-drain',
    category: 'academic',
    name: 'Patnaik, Utsa — "How the British impoverished India" (2018)',
    shortDesc: {
      en: 'Columbia University Press study calculating the net drain from India at approximately $45 trillion (2016 dollars) over 1765–1938, based on Council Bills data and export surplus methodology.',
      ru: 'Исследование Колумбийского университета, оценивающее чистый вывоз из Индии примерно в 45 триллионов долларов за 1765–1938 годы.',
    },
    url: 'https://cup.columbia.edu',
    verifiedStatus: 'Peer-Reviewed Academic',
  },
  {
    id: 'amery-diaries',
    category: 'primary',
    name: 'The Empire at Bay: The Leo Amery Diaries 1929–1945',
    shortDesc: {
      en: 'Private diaries of Secretary of State for India Leopold Amery, recording Cabinet discussions on Bengal Famine relief and Churchill\'s comments on Indian famine mortality. Edited by John Barnes & David Nicholson, Hutchinson, 1988.',
      ru: 'Частные дневники государственного секретаря по делам Индии Леопольда Эмери, фиксирующие дискуссии Кабинета по голоду в Бенгалии.',
    },
    url: 'https://www.worldcat.org/title/empire-at-bay',
    verifiedStatus: 'Primary Diary — Published',
  },
  {
    id: 'davis-late-victorian',
    category: 'academic',
    name: 'Davis, Mike — "Late Victorian Holocausts" (2001)',
    shortDesc: {
      en: 'Verso Books study examining colonial famines during El Niño events, arguing that British export and revenue policies structurally contributed to the deaths of 12–29 million Indians in the famines of 1876–79 and 1896–1902.',
      ru: 'Исследование колониальных голодоморов в период Эль-Ниньо, аргументирующее структурную причастность британской политики к гибели 12–29 миллионов индийцев.',
    },
    url: 'https://www.versobooks.com',
    verifiedStatus: 'Peer-Reviewed Academic',
  },
  {
    id: 'sen-poverty-famines',
    category: 'academic',
    name: 'Sen, Amartya — "Poverty and Famines" (1981)',
    shortDesc: {
      en: 'Oxford University Press analysis demonstrating that the 1943 Bengal Famine was not caused by absolute food shortage but by a collapse of food entitlements, aggravated by wartime inflation and British denial policies.',
      ru: 'Анализ Оксфордского университета, доказывающий, что голод 1943 года в Бенгалии был вызван не абсолютной нехваткой продовольствия, а коллапсом прав на продовольствие.',
    },
    url: 'https://global.oup.com',
    verifiedStatus: 'Nobel Laureate Research',
  },
  {
    id: 'famine-inquiry-1945',
    category: 'official',
    name: 'Report of the Famine Inquiry Commission (1945)',
    shortDesc: {
      en: 'The John Woodhead Commission report on the 1943 Bengal Famine, estimating 1.5 million excess deaths while acknowledging the policy context. The commission was criticised by Amartya Sen for underestimation.',
      ru: 'Доклад комиссии по расследованию голода, оценивающий 1,5 миллиона избыточных смертей при признании политического контекста.',
    },
    url: 'https://www.bl.uk',
    verifiedStatus: 'Official Inquiry Report',
  },
  {
    id: 'guha-india-before-gandhi',
    category: 'academic',
    name: 'Guha, Ramachandra — "India Before Gandhi" (2017)',
    shortDesc: {
      en: 'Penguin Allen Lane comprehensive history of the Indian independence movement from 1857 to 1948, drawing on previously restricted government archives and vernacular sources.',
      ru: 'Всесторонняя история индийского движения за независимость с 1857 по 1948 год.',
    },
    url: 'https://www.penguin.co.uk',
    verifiedStatus: 'Peer-Reviewed Academic',
  },
  {
    id: 'metcalf-aftermath',
    category: 'academic',
    name: 'Metcalf, Thomas — "The Aftermath of Revolt: India 1857–1870" (1964)',
    shortDesc: {
      en: 'Princeton University Press examination of British policy transformation after 1857, demonstrating how the Rebellion reshaped racial ideology, land settlement, and princely-state policy.',
      ru: 'Исследование трансформации британской политики после 1857 года.',
    },
    url: 'https://press.princeton.edu',
    verifiedStatus: 'Peer-Reviewed Academic',
  },
  {
    id: 'wolpert-india',
    category: 'academic',
    name: 'Wolpert, Stanley — "A New History of India" (8th ed., 2008)',
    shortDesc: {
      en: 'Oxford University Press survey of Indian history from Indus Valley civilization to the twenty-first century, widely used as an authoritative reference for colonial-era events.',
      ru: 'Обзор истории Индии от цивилизации долины Инда до XXI века.',
    },
    url: 'https://global.oup.com',
    verifiedStatus: 'Authoritative Survey',
  },
];
