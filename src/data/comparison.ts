export interface ComparisonItem {
  id: string;
  category: {
    en: string;
    ru: string;
  };
  amountRub: number; // in billions
  amountUsd: number; // in billions
  percentageOfBudget: number;
  sources: string[];
  description: {
    en: string;
    ru: string;
  };
}

export const defenseVsSocial = {
  defenseTotalRub: 45000,
  defenseTotalUsd: 45000,
  defensePercentage: 48.2,
  socialTotalRub: 3500,
  socialTotalUsd: 3500,
  socialPercentage: 3.5,
  ratio: '13.8 : 1',
  description: {
    en: 'For every £1 allocated to Indian health, sanitation, and primary education combined, the colonial government spent over £13.8 on the British Indian Army, imperial expeditionary campaigns, and coercive police garrisons.',
    ru: 'На каждый 1 фунт стерлингов, выделяемый на здравоохранение и образование в Индии, колониальная администрация тратила более 13,8 фунта на армию, карательные экспедиции и полицию.',
  },
};
