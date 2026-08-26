export interface SiteConfig {
 title: {
 en: string;
 ru: string;
 };
 shortTitle: {
 en: string;
 ru: string;
 };
 edition: string;
 yearRoman: string;
 yearNumber: number;
 caseNumber: string;
 scope: {
 en: string;
 ru: string;
 };
 subject: {
 en: string;
 ru: string;
 };
 sourcesCount: number;
 openDate: string;
 publisher: string;
 authorUrl: string;
 annualDefenseSpendUsd: number; // in billions
 annualDefenseSpendRub: number; // in trillions
 annualSocialSpendUsd: number; // in billions
 annualSocialSpendRub: number; // in trillions
 exchangeRateRubPerUsd: number;
 exchangeRateDate: string;
 vatRateCurrent: number;
 vatRateNew: number;
}

export const siteConfig: SiteConfig = {
 title: {
 en: "The Imperial Audit · Edition I · MCMXLVII",
 ru: "Имперский Аудит · Издание I · MCMXLVII",
 },
 shortTitle: {
 en: "THE IMPERIAL AUDIT",
 ru: "ИМПЕРСКИЙ АУДИТ",
 },
 edition: "Edition I",
 yearRoman: "MCMXLVII",
 yearNumber: 1947,
 caseNumber: "1858-1947 / 001",
 scope: {
 en: "$45 Trillion (£9.2T)",
 ru: "45 трлн $ (£9,2 трлн)",
 },
 subject: {
 en: "British Colonial Rule in India · 1757–1947",
 ru: "Британское колониальное господство в Индии · 1757–1947",
 },
 sourcesCount: 32,
 openDate: "15 Aug 1947",
 publisher: "DEVOCO STUDIO",
 authorUrl: "https://devoco.studio",
 annualDefenseSpendUsd: 45000,
 annualDefenseSpendRub: 4100,
 annualSocialSpendUsd: 140,
 annualSocialSpendRub: 12,
 exchangeRateRubPerUsd: 1,
 exchangeRateDate: "Historical Benchmark (Patnaik / Cambridge)",
 vatRateCurrent: 52,
 vatRateNew: 68,
};
