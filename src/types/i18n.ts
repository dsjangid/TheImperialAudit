export type SupportedLocale = 'en' | 'bn' | 'hi';

export interface LocaleStrings {
  common: {
    siteTitle: string;
    tagline: string;
    openRecord: string;
    backToArchive: string;
    close: string;
    menu: string;
    search: string;
  };
  chapters: {
    [key: string]: {
      num: string;
      title: string;
      subtitle?: string;
    };
  };
  archive: {
    shelfmark: string;
    repository: string;
    collection: string;
    transcription: string;
    provenance: string;
    significance: string;
    verifyRecord: string;
  };
}
