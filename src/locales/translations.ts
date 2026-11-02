import enCommon from './en/common.json';
import enChapters from './en/chapters.json';
import enArchive from './en/archive.json';

import bnCommon from './bn/common.json';
import bnChapters from './bn/chapters.json';
import bnArchive from './bn/archive.json';

import hiCommon from './hi/common.json';
import hiChapters from './hi/chapters.json';
import hiArchive from './hi/archive.json';

export type LanguageCode = 'en' | 'bn' | 'hi';

export interface TranslationDictionary {
  common: typeof enCommon;
  chapters: typeof enChapters;
  archive: typeof enArchive;
  cover: {
    thesisSubtitle: string;
    prologueTag: string;
    prologueTitle: string;
    curatedRepo: string;
    fiscalBenchmark: string;
    auditFigureBtn: string;
    viewRecordBtn: string;
    statePapers: string;
    edition: string;
    drainTag: string;
    drainTitle: string;
    drainDesc: string;
    scaleComparison: string;
    dispatchesTag: string;
    dispatchesTitle: string;
    dispatchesSubtitle: string;
    unredactedEditions: string;
    evidenceSpotlightTag: string;
    evidenceSpotlightTitle: string;
    evidenceSpotlightDesc: string;
    suiteTag: string;
    suiteTitle: string;
    suiteDesc: string;
    portraitsTag: string;
    portraitsTitle: string;
    viewAllBiographies: string;
    searchPlaceholder: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    common: enCommon,
    chapters: enChapters,
    archive: enArchive,
    cover: {
      thesisSubtitle: 'A forensic long-form chronicle of corporate conquest, fiscal extraction, engineered famines, and popular resistance in British India.',
      prologueTag: 'EDITORIAL PROLOGUE',
      prologueTitle: 'The Editorial Thesis',
      curatedRepo: 'CURATED REPOSITORY',
      fiscalBenchmark: 'BENCHMARK FISCAL TRANSFER',
      auditFigureBtn: 'AUDIT THE $45 TRILLION FIGURE & METHODOLOGY',
      viewRecordBtn: '[ VIEW ECONOMETRIC RECORD → ]',
      statePapers: 'STATE PAPERS',
      edition: 'EDITION',
      drainTag: 'FISCAL EXTRACTION · THE DRAIN OF WEALTH',
      drainTitle: 'Compounded Imperial Transfer: ~$45 Trillion',
      drainDesc: 'In a landmark econometric study published by Columbia University Press, economist Professor Utsa Patnaik calculated that between 1765 and 1938, Britain drained a total of ~$44.63 trillion (in 2016 USD) from India.',
      scaleComparison: 'SCALE COMPARISON',
      dispatchesTag: 'THE FIVE DISPATCHES',
      dispatchesTitle: 'The Five Dispatches',
      dispatchesSubtitle: 'Five standalone investigative articles examining conquest, violent rupture, administrative actors, and the anatomy of massacre.',
      unredactedEditions: 'UNREDACTED EDITIONS',
      evidenceSpotlightTag: 'PRIMARY EVIDENCE SPOTLIGHT',
      evidenceSpotlightTitle: 'Document of the Record',
      evidenceSpotlightDesc: 'An unredacted archival exhibit demonstrating the fiscal behavior of the imperial state during catastrophic crises.',
      suiteTag: 'ANALYTICAL SUITE',
      suiteTitle: 'The Analytical Suite',
      suiteDesc: 'Four interactive tools examining the chronological, territorial, and financial apparatus of imperial rule.',
      portraitsTag: 'ARCHIVAL REPOSITORIES & DOSSIERS',
      portraitsTitle: 'Archival Portraits · 1757–1947',
      viewAllBiographies: '[ VIEW ALL 12 BIOGRAPHIES → ]',
      searchPlaceholder: 'e.g. Famine, Council Bills, Dyer, Permanent Settlement, Awadh, 1857...',
    },
  },
  bn: {
    common: bnCommon,
    chapters: bnChapters,
    archive: bnArchive,
    cover: {
      thesisSubtitle: 'ব্রিটিশ ভারতের করপোরেট দখলদারি, অর্থনৈতিক নিষ্কাশন, পরিকল্পিত দুর্ভিক্ষ এবং গণপ্রতিরোধের একটি প্রামাণ্য মহাফেজখানা দলিল।',
      prologueTag: 'সম্পাদকীয় মুখবন্ধ',
      prologueTitle: 'ঐতিহাসিক অভিসন্দর্ভ',
      curatedRepo: 'সংরক্ষিত মহাফেজখানা',
      fiscalBenchmark: 'সাম্রাজ্যিক অর্থ নির্গমন',
      auditFigureBtn: '$৪৫ ট্রিলিয়ন হিসেব ও পদ্ধতি নিরীক্ষা করুন',
      viewRecordBtn: '[ অর্থমিতিক নথি দেখুন → ]',
      statePapers: 'সরকারি নথিপত্র',
      edition: 'সংস্করণ',
      drainTag: 'আর্থিক নির্গমন · সম্পদের নিষ্কাশন',
      drainTitle: 'সংযোজিত সাম্রাজ্যিক নির্গমন: ~$৪৫ ট্রিলিয়ন',
      drainDesc: 'কলম্বিয়া ইউনিভার্সিটি প্রেস প্রকাশিত এক যুগান্তকারী গবেষণায় অর্থনীতিবিদ প্রফেসর উৎসব পাটনায়েক গণনা করেছেন যে ১৭৬৫ থেকে ১৯৩৮ সালের মধ্যে ব্রিটেন ভারত থেকে প্রায় $৪৪.৬৩ ট্রিলিয়ন (২০১৬ ইউএসডি) নিষ্কাশন করেছিল।',
      scaleComparison: 'তুলনামূলক অনুপাত',
      dispatchesTag: 'পাঁচটি প্রধান অধ্যায়',
      dispatchesTitle: 'পাঁচটি প্রধান অধ্যায়',
      dispatchesSubtitle: 'উপনিবেশিক বিজয়, মহাবিদ্রোহ, সাম্রাজ্যের চালিকাশক্তি ও হত্যাকাণ্ডের নেপথ্যের পাঁচটি প্রামাণ্য অধ্যায়।',
      unredactedEditions: 'মূল অপ্রকাশিত সংস্করণ',
      evidenceSpotlightTag: 'মহাফেজখানা প্রধান নথি',
      evidenceSpotlightTitle: 'ঐতিহাসিক প্রধান দলিল',
      evidenceSpotlightDesc: 'মহাবিপর্যয় ও মন্বন্তরের সময়ে ব্রিটিশ ঔপনিবেশিক শাসনের অর্থনৈতিক আচরণের একটি মূল সংরক্ষিত নথি।',
      suiteTag: 'বিশ্লেষণাত্মক গবেষণাগার',
      suiteTitle: 'বিশ্লেষণাত্মক গবেষণাগার',
      suiteDesc: 'ঔপনিবেশিক শাসনের কালানুক্রমিক, ভৌগোলিক ও আর্থিক পরিকাঠামো মূল্যায়নের চারটি মিথস্ক্রিয় গবেষণাগার।',
      portraitsTag: 'মহাফেজখানা নথি ও জীবনলেখ্য',
      portraitsTitle: 'ঐতিহাসিক প্রতিকৃতিমালা · ১৭৫৭–১৯৪৭',
      viewAllBiographies: '[ ১২টি চরিত্রলেখ্য দেখুন → ]',
      searchPlaceholder: 'যেমন: ছিয়াত্তরের মন্বন্তর, কাউন্সিল বিল, ডায়ার, চিরস্থায়ী বন্দোবস্ত...',
    },
  },
  hi: {
    common: hiCommon,
    chapters: hiChapters,
    archive: hiArchive,
    cover: {
      thesisSubtitle: 'ब्रिटिश भारत में कॉरपोरेट विजय, वित्तीय दोहन, अकालों और जनप्रतिरोध का एक प्रामाणिक ऐतिहासिक एवं आर्थिक आलेख।',
      prologueTag: 'संपादकीय प्रस्तावना',
      prologueTitle: 'ऐतिहासिक शोध सार',
      curatedRepo: 'संरक्षित अभिलेखागार',
      fiscalBenchmark: 'कुल वित्तीय हस्तांतरण',
      auditFigureBtn: '$45 ट्रिलियन आंकड़े एवं कार्यप्रणाली की समीक्षा करें',
      viewRecordBtn: '[ अर्थमितीय दस्तावेज़ देखें → ]',
      statePapers: 'संसदीय दस्तावेज़',
      edition: 'संस्करण',
      drainTag: 'वित्तीय दोहन · धन का निष्कासन',
      drainTitle: 'चक्रवृद्धि साम्राज्यीय दोहन: ~$45 ट्रिलियन',
      drainDesc: 'कोलंबिया यूनिवर्सिटी प्रेस द्वारा प्रकाशित एक युगांतरकारी अध्ययन में, अर्थशास्त्री प्रो. उत्सा पटनायक ने गणना की है कि 1765 से 1938 के बीच ब्रिटेन ने भारत से लगभग $44.63 ट्रिलियन (2016 अमेरिकी डॉलर में) का दोहन किया था।',
      scaleComparison: 'तुलनात्मक पैमाना',
      dispatchesTag: 'पाँच मुख्य आलेख',
      dispatchesTitle: 'पाँच मुख्य आलेख',
      dispatchesSubtitle: 'कंपनी आधिपत्य, महान विद्रोह, प्रशासनिक कर्ताधर्ताओं और नरसंहारों की पड़ताल करते पाँच विस्तृत आलेख।',
      unredactedEditions: 'मूल पूर्ण संस्करण',
      evidenceSpotlightTag: 'मुख्य साक्ष्य संकलन',
      evidenceSpotlightTitle: 'ऐतिहासिक प्रधान दस्तावेज़',
      evidenceSpotlightDesc: 'भीषण आपदाओं के समय औपनिवेशिक सत्ता के वित्तीय आचरण को उजागर करने वाला मूल अभिलेखीय प्रमाण।',
      suiteTag: 'विश्लेषणात्मक शोध संकलन',
      suiteTitle: 'विश्लेषणात्मक शोध संकलन',
      suiteDesc: 'औपनिवेशिक शासन के कालानुक्रमिक, भौगोलिक और वित्तीय ढांचे की पड़ताल के चार परस्पर संवादात्मक उपकरण।',
      portraitsTag: 'अभिलेखागार एवं जीवन वृत्त',
      portraitsTitle: 'ऐतिहासिक चित्र दीर्घा · 1757–1947',
      viewAllBiographies: '[ सभी 12 जीवनियाँ देखें → ]',
      searchPlaceholder: 'उदा. अकाल, काउंसिल बिल, डायर, स्थायी बंदोबस्त, अवध, 1857...',
    },
  },
};
