import { EvidenceCategory } from './primary-documents';

export type AssessmentStatus =
  | 'REFUTED_BY_DATA'
  | 'MAJOR_OVERSIMPLIFICATION'
  | 'STRUCTURAL_COMPONENT_PROVEN'
  | 'SELECTIVE_INTERPRETATION'
  | 'HISTORICALLY_CONTESTED';

export interface MythRecordItem {
  id: string;
  caseNumber: string;
  topic: string;
  claim: string;
  claimOrigin: string;
  auditTitle: string;
  primaryEvidence: {
    recordTitle: string;
    archiveRef: string;
    finding: string;
    docId?: string;
  }[];
  economicDataset: {
    name: string;
    dataPoint: string;
  };
  scholarlyAnalysis: string;
  assessmentStatus: AssessmentStatus;
  assessmentLabel: string;
  assessmentVerdict: string;
  evidenceCategory: EvidenceCategory;
}

export const mythRecordAudits: MythRecordItem[] = [
  {
    id: 'myth-railways',
    caseNumber: 'AUDIT / 01',
    topic: 'INFRASTRUCTURE & DEVELOPMENT',
    claim: '“Britain gifted India a modern railway network out of benevolent developmental intent.”',
    claimOrigin: 'Colonial administrative apologetics and post-imperial historiography.',
    auditTitle: 'The Guaranteed 5% Return Scheme & Extractive Rail Routing',
    primaryEvidence: [
      {
        recordTitle: 'Parliamentary Return on Indian Guaranteed Railways (1858)',
        archiveRef: 'PP / HC / 1858 / Vol. 43 / Railway Contracts',
        finding:
          'Private British railway companies were legally guaranteed a minimum 5% risk-free annual return on capital in sterling, paid directly out of Indian peasant tax revenues regardless of operational losses.',
      },
      {
        recordTitle: 'Hansard Parliamentary Debates on India Revenue Accounts (1872)',
        archiveRef: 'Hansard / HC Deb / Vol. 212 / col. 1420',
        finding:
          'Because costs were guaranteed, British rail contractors built lines at nine times the cost per mile of contemporary railways in the United States or Australia (£18,000/mile vs £2,000/mile).',
      },
    ],
    economicDataset: {
      name: 'Bhattacharya & Naoroji Railway Drain Series (1850–1900)',
      dataPoint: 'Total net drain to Indian taxpayers from guaranteed railway deficits exceeded £50 million by 1900.',
    },
    scholarlyAnalysis:
      'Railways were routed primarily to connect agricultural hinterlands to coastal ports for raw material extraction (cotton, grain, jute) and to move imperial garrisons rapidly to quell rebellions, rather than connecting internal Indian manufacturing centers or serving passenger transit.',
    assessmentStatus: 'MAJOR_OVERSIMPLIFICATION',
    assessmentLabel: 'MAJOR OVERSIMPLIFICATION / EXTRACTION-FIRST MODEL',
    assessmentVerdict:
      'While physical rail trackage was undeniably constructed, its financing model functioned as a massive fiscal subsidy from impoverished Indian taxpayers to private British investors, with structural routing prioritized for raw commodity export and military deployment.',
    evidenceCategory: 'ECONOMIC_DATA',
  },
  {
    id: 'myth-precolonial-poverty',
    caseNumber: 'AUDIT / 02',
    topic: 'PRE-COLONIAL MACROECONOMICS',
    claim: '“India was an inherently impoverished, primitive society before British rule introduced economic modernity.”',
    claimOrigin: '19th-century imperial civilizing mission narratives (e.g. James Mill, Macaulay).',
    auditTitle: 'Global GDP Share & Deindustrialisation Datasets (1700–1947)',
    primaryEvidence: [
      {
        recordTitle: 'Angus Maddison World Economy Historical Statistics (OECD / Groningen)',
        archiveRef: 'Maddison Project Database (2010 / 2020)',
        finding:
          'In 1700, India produced approximately 24.4% to 27% of global gross domestic product (greater than all of Western Europe combined). By 1952, India’s share had plummeted to 3.8%.',
      },
      {
        recordTitle: 'Paul Bairoch Historical Industrialization Indices',
        archiveRef: 'Journal of European Economic History (1982)',
        finding:
          'In 1750, India accounted for 24.5% of total world manufacturing output. By 1938, under colonial tariff discrimination, this figure fell to 2.4%.',
      },
    ],
    economicDataset: {
      name: 'Cambridge Economic History of India / Broadberry & Gupta (2015)',
      dataPoint: 'Calcutta and Dhaka textile artisan wages in 1750 were on par with or exceeded contemporary southern English real wages.',
    },
    scholarlyAnalysis:
      'British tariff barriers (such as the 1813 Calico Acts) placed 70%–80% import duties on Indian finished textiles in Britain, while British machine-made cotton goods were dumped tariff-free into India, destroying the world’s leading artisanal textile economy.',
    assessmentStatus: 'REFUTED_BY_DATA',
    assessmentLabel: 'REFUTED BY ECONOMIC DATA / SYSTEMIC DEINDUSTRIALISATION',
    assessmentVerdict:
      'Macroeconomic quantitative historical data overwhelmingly disproves the claim. Pre-colonial India was the world’s manufacturing powerhouse in textiles and shipbuilding. Colonial tariff policy and unrequited revenue extraction precipitated severe, quantifiable deindustrialisation.',
    evidenceCategory: 'ECONOMIC_DATA',
  },
  {
    id: 'myth-famines-nature',
    caseNumber: 'AUDIT / 03',
    topic: 'FAMINES & FOOD SECURITY',
    claim: '“Colonial famines were purely natural climatic disasters caused by drought and beyond the state’s control.”',
    claimOrigin: 'Official British Famine Commission reports (1880, 1898) and Malthusian population arguments.',
    auditTitle: 'Grain Export Registers & Entitlement Collapse Under Laissez-Faire',
    primaryEvidence: [
      {
        recordTitle: 'Madras Famine Relief Minute by Sir Richard Temple (1877)',
        archiveRef: 'IOR / L / E / 7 / 23 / Famine Report 12',
        finding:
          'The colonial administration strictly outlawed price controls and government grain purchases. Temple reduced relief camp rations to 1,627 calories/day (1 lb grain) while over 320,000 tons of wheat were exported from India to London.',
        docId: 'doc-temple-ration-1877',
      },
      {
        recordTitle: 'British War Cabinet Minutes on Bengal Wheat Requests (1943)',
        archiveRef: 'TNA / CAB / 65 / 35 / Minute 111(43)',
        finding:
          'The War Cabinet rejected Viceroy Wavell’s urgent request for 500,000 tons of wheat during the 1943 Bengal Famine, refusing to divert Australian merchant shipping while millions starved.',
        docId: 'doc-amery-churchill-1943',
      },
    ],
    economicDataset: {
      name: 'Amartya Sen Entitlement Model / Mike Davis Late Victorian Holocausts',
      dataPoint: 'Between 1876 and 1902 alone, policy-aggravated famines caused an estimated 12.2 to 29.3 million excess Indian deaths.',
    },
    scholarlyAnalysis:
      'Nobel laureate Amartya Sen established that the 1943 Bengal Famine occurred without a catastrophic failure of aggregate food supply. Rather, wartime inflation, hoarding by British-licensed syndicates, and the military "Boat Denial Policy" destroyed the purchasing power and food entitlements of the rural landless.',
    assessmentStatus: 'STRUCTURAL_COMPONENT_PROVEN',
    assessmentLabel: 'STRUCTURAL COMPONENT PROVEN / POLICY-AGGRAVATED MORTALITY',
    assessmentVerdict:
      'While droughts or wartime disruptions provided the initial environmental shock, colonial policy—including inflexible tax collection, continuous food grain exports, dogmatic laissez-faire non-intervention, and starvation-level relief rations—turned manageable shortfalls into mass demographic catastrophes.',
    evidenceCategory: 'OFFICIAL_ENQUIRY',
  },
  {
    id: 'myth-rule-of-law',
    caseNumber: 'AUDIT / 04',
    topic: 'LEGAL INSTITUTIONS & GOVERNANCE',
    claim: '“British rule established impartial justice, equality before the law, and good governance across the subcontinent.”',
    claimOrigin: 'Imperial administrative treatises (e.g. Sir James Fitzjames Stephen, 1883).',
    auditTitle: 'Racial Exemption Decrees, Sedition Laws & Summary Martial Decrees',
    primaryEvidence: [
      {
        recordTitle: 'The Ilbert Bill Controversy Parliamentary Papers (1883)',
        archiveRef: 'IOR / L / PJ / 6 / 94 / Ilbert Papers',
        finding:
          'A furious revolt by British European settlers forced the government to gut the Ilbert Bill, ensuring that Indian magistrates were barred from trying European British subjects without a majority-white jury.',
      },
      {
        recordTitle: 'The Anarchical and Revolutionary Crimes Act (Rowlatt Act 1919)',
        archiveRef: 'Act No. XI of 1919 / Imperial Legislative Council',
        finding:
          'Authorized indefinite preventative detention without charge, trial by special courts without jury, and denial of the right to legal counsel or appeal.',
      },
    ],
    economicDataset: {
      name: 'Legal Codes of British India (Section 124A IPC & Vernacular Press Act 1878)',
      dataPoint: 'Over 120,000 political activists imprisoned without conventional trial between 1920 and 1942.',
    },
    scholarlyAnalysis:
      'Colonial law was explicitly dual-structured: an administrative civil code for property and contract enforcement alongside an extensive repressive apparatus (Section 124A sedition, Section 144 unlawful assembly, Frontier Crimes Regulation, and Martial Law decrees) to criminalize democratic dissent.',
    assessmentStatus: 'SELECTIVE_INTERPRETATION',
    assessmentLabel: 'SELECTIVE INTERPRETATION / DUAL RACIAL JURISPRUDENCE',
    assessmentVerdict:
      'While codification of civil and criminal statutes occurred, the colonial legal system was fundamentally rooted in racial inequality (exemption of Europeans from Indian judges) and executive decrees that suspended habeas corpus whenever imperial sovereignty was challenged.',
    evidenceCategory: 'PRIMARY_RECORD',
  },
];
