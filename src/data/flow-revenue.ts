import { EvidenceCategory } from './primary-documents';

export interface RevenueNode {
  id: string;
  stepNumber: string;
  title: string;
  category: string;
  dateRange: string;
  figure: string;
  percentageOrScope: string;
  summary: string;
  mechanism: string;
  historicalContext: string;
  primarySource: {
    archiveRef: string;
    citation: string;
    docId?: string;
  };
  evidenceStatus: EvidenceCategory;
  outgoingNodes: string[];
}

export const revenueFlowNodes: RevenueNode[] = [
  {
    id: 'node-1-peasant-taxation',
    stepNumber: '01',
    title: 'Agrarian Extraction & Commodity Monopolies',
    category: 'INDIAN REVENUE BASE',
    dateRange: '1765–1947',
    figure: 'Up to 50%–60% of Gross Agricultural Yield',
    percentageOrScope: '~250 Million Cultivators Taxed in Silver Rupees',
    summary:
      'Land revenue, salt duties, opium state monopolies, and forest taxes extracted directly from the Indian rural populace under threat of property confiscation or imprisonment.',
    mechanism:
      'The British state enforced rigid, unremitting revenue settlements (Permanent Settlement, Ryotwari, Mahalwari) payable in cash rather than grain. Peasants were forced to sell grain to moneylenders or shift cultivation to export cash crops (indigo, opium, cotton, jute).',
    historicalContext:
      'Unlike indigenous rulers who reduced taxes during droughts or collected a share of actual harvest, the British administration demanded fixed cash quotas regardless of monsoon failures, forcing peasant bankruptcy and triggering periodic catastrophic famines.',
    primarySource: {
      archiveRef: 'IOR / V / 14 / Statistical Abstract Relating to British India',
      citation: 'Annual Financial Statements of the Government of India (1860–1946)',
      docId: 'doc-cornwallis-1793',
    },
    evidenceStatus: 'PRIMARY_RECORD',
    outgoingNodes: ['node-2-colonial-treasury'],
  },
  {
    id: 'node-2-colonial-treasury',
    stepNumber: '02',
    title: 'Colonial Administration & Provincial Budgets',
    category: 'BUDGETARY APPARATUS',
    dateRange: '1765–1947',
    figure: '45% to 55% Allocated to Military & Police',
    percentageOrScope: '< 3.5% Allocated to Health, Sanitation & Education Combined',
    summary:
      'Tax revenue was centralized into the Finance Department of the Government of India in Calcutta/Delhi, where the overwhelming majority was earmarked for military garrisons and internal coercion.',
    mechanism:
      'Colonial fiscal priorities maintained an enormous standing army (the British Indian Army) and armed police force to secure territorial control, suppress internal rebellions, and defend imperial frontiers from Burma to the North-West Frontier.',
    historicalContext:
      'For every £1 allocated to public health, hospitals, sanitation, and primary schooling combined, the colonial government spent over £13.8 on military operations, overseas expeditions, and coercive administration.',
    primarySource: {
      archiveRef: 'Hansard / East India Revenue Accounts (Annual Debates)',
      citation: 'Bhattacharya, S. (2005), The Financial Foundations of the British Raj',
    },
    evidenceStatus: 'ECONOMIC_DATA',
    outgoingNodes: ['node-3-council-bills', 'node-5-military-expeditions'],
  },
  {
    id: 'node-3-council-bills',
    stepNumber: '03',
    title: 'The Council Bills Mechanism (London)',
    category: 'CURRENCY & FISCAL INTERCEPTION',
    dateRange: '1861–1938',
    figure: '£15M to £35M Transferred Annually Without Gold Outlay',
    percentageOrScope: 'Total Compounded Drain: ~$44.6 Trillion (Patnaik Model)',
    summary:
      'The ingenious financial pipeline that allowed Britain to purchase India’s valuable exports using India’s own tax revenues, eliminating the need to spend British capital.',
    mechanism:
      'Foreign merchants wanting to buy Indian silk, tea, cotton, and grain bought "Council Bills" from the Secretary of State for India in London using gold or sterling. The Secretary of State deposited this gold in London for British state use, while the merchant redeemed the paper bill in Calcutta for rupees paid directly out of Indian tax collections.',
    historicalContext:
      'India maintained a massive positive trade surplus with the rest of the world, but this surplus was entirely intercepted in London. Indian producers were paid in rupees raised from their own taxes, while the physical gold and hard foreign exchange never entered India.',
    primarySource: {
      archiveRef: 'BL / IOR / L / F / 5 / Financial Papers',
      citation: 'Patnaik, Utsa (2018), Revisiting the Drain (Columbia University Press)',
      docId: 'doc-patnaik-drain-calc',
    },
    evidenceStatus: 'SCHOLARLY_ESTIMATE',
    outgoingNodes: ['node-4-commodity-exports', 'node-6-home-charges'],
  },
  {
    id: 'node-4-commodity-exports',
    stepNumber: '04',
    title: 'Export Commodity Squeeze & Triangulated Trade',
    category: 'GLOBAL TRADE EXTRACTION',
    dateRange: '1770–1940',
    figure: 'Opium to China: Funded 100% of British Tea Imports',
    percentageOrScope: 'Raw Cotton to Lancashire; Jute, Indigo, Wheat & Rice to Europe',
    summary:
      'The conversion of Indian agriculture into an export funnel that financed Britain’s global imperial trade balances and supplied raw materials to British industrial factories.',
    mechanism:
      'The Company forced peasants to grow opium in Bihar and Bengal, which was auctioned in Calcutta and smuggled into Qing China. The silver revenues from the Chinese opium trade were used by Britain to purchase Chinese tea, silk, and porcelain without spending a single pound of British bullion.',
    historicalContext:
      'This triangular trade (India → China → Britain) simultaneously addicted millions in China, destroyed India’s food security by replacing grain with narcotics, and enriched London merchant banks and the British exchequer.',
    primarySource: {
      archiveRef: 'IOR / L / E / 4 / Opium Department Records',
      citation: 'Farooqui, Amar (2018), Opium Inc.: How a Global Drug Trade Funded the British Empire',
    },
    evidenceStatus: 'PRIMARY_RECORD',
    outgoingNodes: ['node-7-british-metropolis'],
  },
  {
    id: 'node-5-military-expeditions',
    stepNumber: '05',
    title: 'Imperial Military Expenditure & External Wars',
    category: 'COERCIVE EXPENDITURE',
    dateRange: '1838–1945',
    figure: '100% of Cost of 19 Wars Charged to Indian Taxpayers',
    percentageOrScope: 'Afghan Wars, Burma Conquests, Boxer Rebellion, Abyssinia, WWI & WWII',
    summary:
      'Indian tax revenues were used to fund Britain’s external geopolitical wars in China, Afghanistan, Egypt, Persia, Burma, East Africa, and Mesopotamia.',
    mechanism:
      'The Government of India was charged not only for the upkeep of British soldiers stationed in India (including their transit, pensions, and depot costs in England) but also for expeditionary forces deployed outside India to expand British imperial territories.',
    historicalContext:
      'During World War I, India contributed £100 million as a direct cash "gift" to the British war effort, plus billions in uncompensated supplies recorded as IOUs under the Sterling Balance system.',
    primarySource: {
      archiveRef: 'PP / HC / 1900 / Welby Commission Report (Cmd. 131)',
      citation: 'Royal Commission on the Administration of the Expenditure of India',
    },
    evidenceStatus: 'OFFICIAL_ENQUIRY',
    outgoingNodes: ['node-7-british-metropolis'],
  },
  {
    id: 'node-6-home-charges',
    stepNumber: '06',
    title: '“Home Charges” & Guaranteed Railway Returns',
    category: 'INSTITUTIONAL REMITTANCES',
    dateRange: '1858–1947',
    figure: '£20M to £35M Deducted Annually in London',
    percentageOrScope: 'Guaranteed 5% Minimum Return to British Private Investors',
    summary:
      'The administrative, pensionary, and debt service charges remitted annually to London under the official budget category of "Home Charges".',
    mechanism:
      'Included: (1) Cost of the India Office in Whitehall; (2) Pensions of retired British civil and military officers paid in sterling; (3) Interest on the Indian Public Debt (which consisted primarily of the costs of conquering India and suppressing the 1857 revolt); (4) Guaranteed 5% returns to British railway companies regardless of commercial viability.',
    historicalContext:
      'British rail contractors had no incentive for efficiency: Indian taxpayers bore all losses while private British investors received guaranteed annual payouts at nearly double the prevailing British gilt interest rate.',
    primarySource: {
      archiveRef: 'BL / 08023.dd.12 / Naoroji Memoranda',
      citation: 'Naoroji, Dadabhai (1901), Poverty and Un-British Rule in India',
      docId: 'doc-naoroji-drain-1901',
    },
    evidenceStatus: 'ECONOMIC_DATA',
    outgoingNodes: ['node-7-british-metropolis'],
  },
  {
    id: 'node-7-british-metropolis',
    stepNumber: '07',
    title: 'Metropolitan Capital Accumulation & Global Power',
    category: 'FINAL DESTINATION: BRITAIN',
    dateRange: '1765–1947',
    figure: 'Funded British Industrial Revolution & Global Export of Capital',
    percentageOrScope: 'Bank of England Balances, London Gilt Market & Infrastructure',
    summary:
      'The unreturned extraction of Indian capital was absorbed into London’s financial institutions, underwriting Britain’s balance of payments deficits and financing British investment in the US, Canada, Australia, and Latin America.',
    mechanism:
      'Britain ran persistent trade deficits with continental Europe and North America. The unrequited export surplus drained from India was used by Britain to settle these multilateral deficits, sustaining the international gold standard with London at its center.',
    historicalContext:
      'As economic historian Utsa Patnaik demonstrated, without the ~$45 trillion siphon from India, Britain would have experienced chronic balance of payments crises and could not have emerged as the premier global financier of the nineteenth and early twentieth centuries.',
    primarySource: {
      archiveRef: 'CUP / Patnaik (2018) & Maddison Dataset (2007)',
      citation: 'Patnaik (2018), Columbia University Press; Maddison, Angus (2007), Contours of the World Economy',
      docId: 'doc-patnaik-drain-calc',
    },
    evidenceStatus: 'SCHOLARLY_ESTIMATE',
    outgoingNodes: [],
  },
];
