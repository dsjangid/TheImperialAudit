import { EvidenceCategory } from './primary-documents';

export interface RegionalAudit {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  territory: string;
  annexationYear: string;
  annexationMechanism: string;
  revenueSystem: string;
  economicExtraction: string;
  documentedIncidentsCount: number;
  keyIncidents: string[];
  keyFigures: {
    administrators: string[];
    resistance: string[];
  };
  primarySourceCitations: string[];
  dispatchTitle: string;
  dispatchHref: string;
  evidenceStatus: EvidenceCategory;
  capital: string;
  mapPosition: {
    leftPercent: number;
    topPercent: number;
  };
}

export const regionalAudits: Record<string, RegionalAudit> = {
  bengal: {
    id: 'bengal',
    code: 'BEN',
    name: 'Bengal Presidency',
    subtitle: 'Lower Gangetic Delta, Sundarbans & East Bengal',
    territory: 'Calcutta, Murshidabad, Dhaka, Chittagong, Midnapore, Hooghly',
    annexationYear: '1757 (Plassey) / 1765 (Diwani Grant)',
    annexationMechanism: 'Military Bribery (1757) and Treaty of Allahabad (1765)',
    revenueSystem: 'Permanent Settlement (1793) — Fixed Zamindari Assessment',
    economicExtraction:
      '£3.4M fixed annual land tax, absolute monopoly over salt production and opium cultivation; systematic deindustrialisation of Dacca muslin textile manufacture.',
    documentedIncidentsCount: 7,
    keyIncidents: [
      'Battle of Plassey (1757)',
      'Great Bengal Famine: 10M dead (1770)',
      'Sannyasi and Fakir Guerrilla Uprisings (1763–1800)',
      'Partition of Bengal & Swadeshi Movement (1905)',
      'Chittagong Armoury Raid led by Surya Sen (1930)',
      'Great Bengal Famine: 3M–3.8M dead (1943)',
      'Direct Action Day & Partition Boundary Severance (1946–1947)',
    ],
    keyFigures: {
      administrators: ['Robert Clive', 'Warren Hastings', 'Lord Cornwallis', 'Lord Curzon'],
      resistance: ['Siraj ud-Daulah', 'Rabindranath Tagore', 'Surya Sen', 'Pritilata Waddedar', 'Matangini Hazra'],
    },
    primarySourceCitations: [
      'IOR / H / 61 · Treaty of Allahabad and Diwani Firman (1765)',
      'IOR / E / 4 / 27 · Bengal Famine Revenue Dispatch (1770)',
      'TNA / CAB / 65 / 35 · War Cabinet Shipping Minutes on Bengal Famine (1943)',
    ],
    dispatchTitle: 'Part I: The Corporate Takeover & Part V: Corpus',
    dispatchHref: '/en/chapters/timer',
    evidenceStatus: 'PRIMARY_RECORD',
    capital: 'Calcutta (Imperial Capital 1772–1911)',
    mapPosition: {
      leftPercent: 73.2,
      topPercent: 39.8,
    },
  },
  punjab: {
    id: 'punjab',
    code: 'PUN',
    name: 'Punjab Province',
    subtitle: 'Land of Five Rivers & Frontier Bulwark',
    territory: 'Lahore, Amritsar, Rawalpindi, Multan, Gujrat, Jalandhar',
    annexationYear: '1849 (Treaty of Lahore)',
    annexationMechanism: 'First and Second Anglo-Sikh Wars (1845–1849); deposition of Maharaja Duleep Singh',
    revenueSystem: 'Mahalwari / Village Assessment System with canal colony water rates',
    economicExtraction:
      'Heavy agrarian water taxes on Indus canal colonies, massive wartime military recruitment levies (over 500,000 soldiers for WWI), and export of Punjab wheat.',
    documentedIncidentsCount: 7,
    keyIncidents: [
      'Second Anglo-Sikh War and Annexation of Lahore (1849)',
      'Kuka / Namdhari Movement executions by cannon (1872)',
      'Rowlatt Act demonstrations & Martial Law (1919)',
      'Jallianwala Bagh Massacre: 1,650 rounds (13 April 1919)',
      'Babbar Akali Movement & Gurdwara Reform (1920–1925)',
      'HSRA Saunders Execution & Lahore Conspiracy Trial (1928–1931)',
      'Radcliffe Line Demarcation & Mass Partition Migration (1947)',
    ],
    keyFigures: {
      administrators: ['Sir John Lawrence', 'Sir Michael O’Dwyer', 'Brig.-Gen. Reginald Dyer'],
      resistance: ['Maharaja Duleep Singh', 'Lala Lajpat Rai', 'Shaheed Bhagat Singh', 'Shaheed Udham Singh', 'Saifuddin Kitchlew'],
    },
    primarySourceCitations: [
      'Cmd. 681 (1920) · Disorders Inquiry Committee Report',
      'IOR / L / MIL / 17 · Punjab Martial Law Command Diaries',
      'Hansard Vol. 131 · Amritsar Debate, House of Commons (1920)',
    ],
    dispatchTitle: 'Part IV: Ten Minutes in Amritsar',
    dispatchHref: '/en/chapters/share',
    evidenceStatus: 'OFFICIAL_ENQUIRY',
    capital: 'Lahore (Capital) & Amritsar (Sacred City)',
    mapPosition: {
      leftPercent: 33.5,
      topPercent: 18.5,
    },
  },
  united_provinces: {
    id: 'united_provinces',
    code: 'UP',
    name: 'United Provinces & Awadh',
    subtitle: 'Gangetic Heartland & Center of 1857 Rupture',
    territory: 'Lucknow, Kanpur, Meerut, Agra, Allahabad, Varanasi, Bareilly, Delhi',
    annexationYear: '1801 (Ceded Districts) / 1856 (Annexation of Awadh)',
    annexationMechanism: 'Subsidiary Alliance and unilateral annexation under Doctrine of Misrule (1856)',
    revenueSystem: 'Mahalwari & Talukdari Settlements; summary confiscation of estates',
    economicExtraction:
      'Aggressive land revenue assessments on Talukdars and ryots; taxation of religious pilgrimages; heavy opium poppy quotas for China trade.',
    documentedIncidentsCount: 7,
    keyIncidents: [
      'Annexation of Awadh and exile of Nawab Wajid Ali Shah (1856)',
      'Meerut Sepoy Breakout (10 May 1857)',
      'Siege and Defense of Lucknow Residency (1857–1858)',
      'Siege and Massacres at Kanpur (June–July 1857)',
      'Chauri Chaura Police Station burning (1922)',
      'Kakori Train Action by HRA revolutionaries (1925)',
      'Allahabad Alfred Park standoff of Chandrashekhar Azad (1931)',
    ],
    keyFigures: {
      administrators: ['Lord Dalhousie', 'Lord Canning', 'Sir Colin Campbell', 'General James Neill'],
      resistance: ['Begum Hazrat Mahal', 'Maulvi Ahmadullah Shah', 'Nana Saheb', 'Chandrashekhar Azad', 'Ram Prasad Bismil'],
    },
    primarySourceCitations: [
      'PP / HC / 1856 / Cmd. 2082 · Papers on the Annexation of Oude',
      'IOR / L / MIL / 5 / 667 · 1857 Military Telegrams and Reprisal Logs',
      'Hansard Vol. 151 · Crown Government of India Act (1858)',
    ],
    dispatchTitle: 'Part II: The Great Rupture',
    dispatchHref: '/en/chapters/comparison',
    evidenceStatus: 'PRIMARY_RECORD',
    capital: 'Allahabad & Lucknow',
    mapPosition: {
      leftPercent: 51.5,
      topPercent: 30.5,
    },
  },
  bombay: {
    id: 'bombay',
    code: 'BOM',
    name: 'Bombay Presidency & Western Coast',
    subtitle: 'Western Mercantile Hub, Cotton Port & Deccan',
    territory: 'Bombay City, Pune, Surat, Ahmedabad, Bardoli, Kheda, Sind, Konkan',
    annexationYear: '1818 (Fall of the Peshwa) / 1843 (Conquest of Sind)',
    annexationMechanism: 'Third Anglo-Maratha War (1817–1818) and Napier’s conquest of Sind (1843)',
    revenueSystem: 'Ryotwari System (Wingate & Goldsmid Survey) — Individual Cultivator Assessment',
    economicExtraction:
      'Cotton export extraction for Manchester textile mills; exorbitant 5% guaranteed railway payouts; heavy salt tax excise collections.',
    documentedIncidentsCount: 6,
    keyIncidents: [
      'Deccan Riots against Marwari moneylenders and revenue decrees (1875)',
      'Bombay Plague and Assassination of Collector Rand by Chapekar Brothers (1897)',
      'Tilak’s Sedition Trials in Bombay High Court (1897, 1908)',
      'Kheda Satyagraha (1918) & Bardoli No-Tax Satyagraha (1928)',
      'Dandi Salt March along Gujarat coastline (1930)',
      'Royal Indian Navy Mutiny across Bombay harbour (18–23 Feb 1946)',
    ],
    keyFigures: {
      administrators: ['Mountstuart Elphinstone', 'Sir Bartle Frere', 'W.C. Rand'],
      resistance: ['Bal Gangadhar Tilak', 'Mahatma Gandhi', 'Sardar Vallabhbhai Patel', 'Chapekar Brothers', 'Usha Mehta'],
    },
    primarySourceCitations: [
      'IOR / V / 24 / 2132 · Deccan Riots Commission Report (1876)',
      'BL / Tilak Sedition Proceedings (1908)',
      'IOR / L / MIL / 17 / 1357 · Report of the Royal Indian Navy Commission (1946)',
    ],
    dispatchTitle: 'Part III: The Actors of Empire & Part V: Corpus',
    dispatchHref: '/en/chapters/dossiers',
    evidenceStatus: 'PRIMARY_RECORD',
    capital: 'Bombay City & Poona',
    mapPosition: {
      leftPercent: 21.0,
      topPercent: 62.0,
    },
  },
  madras: {
    id: 'madras',
    code: 'MAD',
    name: 'Madras Presidency & Southern Littoral',
    subtitle: 'Carnatic, Coromandel Coast & Malabar',
    territory: 'Madras, Tanjore, Tirunelveli, Malabar, Coimbatore, Rayalaseema, Calicut',
    annexationYear: '1799 (Fall of Tipu Sultan) / 1801 (Annexation of Carnatic)',
    annexationMechanism: 'Fourth Anglo-Mysore War and Treaty with Nawab of Arcot (1801)',
    revenueSystem: 'Ryotwari Settlement introduced by Sir Thomas Munro',
    economicExtraction:
      'Direct revenue extraction from ryots without intermediary zamindars; crushing salt monopoly; grain export drainage during the 1876–78 Famine.',
    documentedIncidentsCount: 6,
    keyIncidents: [
      'Polygar Wars and Proclamation of Independence (1799–1801)',
      'Vellore Sepoy Mutiny (1806)',
      'Great Madras Famine: 5.5M–10M dead & Temple Ration (1876–1878)',
      'Swadeshi Steam Navigation Company founded by V.O. Chidambaram Pillai (1906)',
      'Malabar Rebellion / Moplah Uprising and Wagon Tragedy (1921)',
      'Vedaranyam Salt Satyagraha led by C. Rajagopalachari (1930)',
    ],
    keyFigures: {
      administrators: ['Thomas Munro', 'Lord Clive Jr.', 'Lord Lytton', 'Sir Richard Temple'],
      resistance: ['Veerapandiya Kattabomman', 'Maruthu Pandiyar', 'V.O.C. Pillai', 'Subramania Bharati', 'K. Kelappan'],
    },
    primarySourceCitations: [
      'TNSA / Military Consultations / Vol. 288 (1801)',
      'IOR / L / E / 7 / 23 · Madras Famine Commission Proceedings (1877)',
      'NAI / Home Judicial / Wagon Tragedy Enquiry (1921)',
    ],
    dispatchTitle: 'Part V: The Subcontinental Corpus',
    dispatchHref: '/en/chapters/action',
    evidenceStatus: 'PRIMARY_RECORD',
    capital: 'Fort St. George (Madras)',
    mapPosition: {
      leftPercent: 52.5,
      topPercent: 77.0,
    },
  },
  bihar: {
    id: 'bihar',
    code: 'BIH',
    name: 'Bihar & Chota Nagpur Plateau',
    subtitle: 'Adivasi Forest Tracts & Agrarian Plains',
    territory: 'Patna, Jagdishpur, Gaya, Santhal Parganas, Ranchi, Singhbhum',
    annexationYear: '1765 (Diwani Grant)',
    annexationMechanism: 'Treaty of Allahabad following Battle of Buxar (1764)',
    revenueSystem: 'Permanent Settlement & Damin-i-koh Tribal Tract Regulations',
    economicExtraction:
      'Forced indigo and opium farming; encroachment of usurious mahajans into adivasi forest territories; severe salt taxes.',
    documentedIncidentsCount: 5,
    keyIncidents: [
      'Kol Uprising in Chota Nagpur (1831–1832)',
      'Santhal Hul led by Sidhu and Kanhu Murmu (1855–1856)',
      'Veer Kunwar Singh’s 1857 Guerrilla Campaign across Shahabad (1857–1858)',
      'Birsa Munda’s Ulgulan (The Great Tumult) for Adivasi Sovereignty (1899–1900)',
      'Champaran Indigo Satyagraha: Gandhi’s first civil disobedience in India (1917)',
    ],
    keyFigures: {
      administrators: ['Lord Cornwallis', 'Commissioner G.U. Yule', 'William Tayler'],
      resistance: ['Veer Kunwar Singh', 'Sidhu and Kanhu Murmu', 'Bhagwan Birsa Munda', 'Dr. Rajendra Prasad'],
    },
    primarySourceCitations: [
      'WBSA / Bengal Judicial Consultations · Santhal Hul Logs (1855)',
      'NAI / Home Public / Birsa Munda Judicial Trial Records (1900)',
      'Champaran Agrarian Enquiry Committee Report (1917)',
    ],
    dispatchTitle: 'Part I: The Corporate Takeover & Part V: Corpus',
    dispatchHref: '/en/chapters/timer',
    evidenceStatus: 'PRIMARY_RECORD',
    capital: 'Patna & Ranchi',
    mapPosition: {
      leftPercent: 64.5,
      topPercent: 34.5,
    },
  },
  central_india: {
    id: 'central_india',
    code: 'CI',
    name: 'Central India & Bundelkhand',
    subtitle: 'Fortress Capitals & Strategic Plateaus',
    territory: 'Jhansi, Gwalior, Sagar, Nagpur, Indore, Jabalpur',
    annexationYear: '1853 (Doctrine of Lapse in Nagpur) / 1854 (Jhansi)',
    annexationMechanism: 'Lord Dalhousie’s Doctrine of Lapse refusing adopted heirs',
    revenueSystem: 'Malguzari System & Direct Princely Subsidiary Assessments',
    economicExtraction:
      'Confiscation of state treasuries and royal jewels; termination of state pensions; extraction of mineral and forest wealth.',
    documentedIncidentsCount: 4,
    keyIncidents: [
      'Annexation of Jhansi under the Doctrine of Lapse (1854)',
      'Siege of Jhansi Fort and Escape of Rani Lakshmibai (March–April 1858)',
      'Battle of Kotah-ki-Serai and martyrdom of Rani Lakshmibai (17–18 June 1858)',
      'Tatya Tope’s mobile guerrilla campaign in Central India (1858–1859)',
    ],
    keyFigures: {
      administrators: ['Lord Dalhousie', 'Sir Hugh Rose', 'Sir Robert Hamilton'],
      resistance: ['Rani Lakshmibai of Jhansi', 'Tatya Tope', 'Rani Avantibai of Ramgarh'],
    },
    primarySourceCitations: [
      'PP / HC / 1855 / Jhansi Annexation Papers',
      'IOR / L / MIL / 5 / 672 · Sir Hugh Rose Campaign Dispatches in Central India (1858)',
    ],
    dispatchTitle: 'Part II: The Great Rupture & Part III: Dossiers',
    dispatchHref: '/en/chapters/comparison',
    evidenceStatus: 'PRIMARY_RECORD',
    capital: 'Jhansi & Gwalior',
    mapPosition: {
      leftPercent: 47.0,
      topPercent: 43.5,
    },
  },
  assam: {
    id: 'assam',
    code: 'ASM',
    name: 'Assam & Northeast Frontier',
    subtitle: 'Tea Plantations, Oilfields & Hill Kingdoms',
    territory: 'Assam Valley, Khasi Hills, Cachar, Chittagong Hill Tracts, Naga Hills',
    annexationYear: '1826 (Treaty of Yandabo)',
    annexationMechanism: 'First Anglo-Burmese War and Treaty of Yandabo (1826)',
    revenueSystem: 'Wasteland Grant Rules for European Tea Estates; Poll and Land Taxes',
    economicExtraction:
      'Vast European tea plantation monopolies worked by indentured coolie labour from central India under penal contract; coal and crude oil extraction at Digboi.',
    documentedIncidentsCount: 5,
    keyIncidents: [
      'Anglo-Khasi War led by U Tirot Sing (1829–1833)',
      'Phulaguri Dhawa: First peasant uprising against opium tax (1861)',
      'Patharughat Peasant Uprising and Massacre of 140 cultivators (1894)',
      'Rani Gaidinliu’s Heraka Religious and Political Insurgency (1930–1932)',
      'Kanaklata Barua’s martyrdom in Quit India Movement at Gohpur (1942)',
    ],
    keyFigures: {
      administrators: ['David Scott', 'Sir Archdale Earle', 'Lord Amherst'],
      resistance: ['U Tirot Sing', 'Maniram Dewan', 'Rani Gaidinliu', 'Kanaklata Barua'],
    },
    primarySourceCitations: [
      'IOR / L / PS / 5 · Assam Secretariat Records',
      'Assam District Gazetteers: Darrang and Nowgong (1905)',
    ],
    dispatchTitle: 'Part V: The Subcontinental Corpus',
    dispatchHref: '/en/chapters/action',
    evidenceStatus: 'PRIMARY_RECORD',
    capital: 'Guwahati & Shillong',
    mapPosition: {
      leftPercent: 82.0,
      topPercent: 32.5,
    },
  },
  odisha: {
    id: 'odisha',
    code: 'ODI',
    name: 'Odisha & Coastal Kalinga',
    subtitle: 'Salt Tracts, Feudatory Gadjats & Temple Towns',
    territory: 'Khurda, Puri, Cuttack, Balasore, Sambalpur, Mayurbhanj',
    annexationYear: '1803 (Treaty of Deogaon)',
    annexationMechanism: 'Second Anglo-Maratha War (1803)',
    revenueSystem: 'Short-term settlements followed by Bengal Regulations extension',
    economicExtraction:
      'Rigid colonial monopoly over coastal salt manufacture; heavy export of rice out of coastal ports causing the devastating 1866 Famine.',
    documentedIncidentsCount: 3,
    keyIncidents: [
      'Paika Rebellion led by Bakshi Jagabandhu (1817)',
      'Sambalpur Resistance led by Veer Surendra Sai (1827–1864)',
      'Orissa Famine of 1866 (Na’Anka Durbhikshya): 1M dead (one-third of population)',
    ],
    keyFigures: {
      administrators: ['Edward Gardner', 'Sir George Campbell'],
      resistance: ['Bakshi Jagabandhu', 'Veer Surendra Sai', 'Gopabandhu Das'],
    },
    primarySourceCitations: [
      'NAI / Home Dept / Ewer Committee Report (1818)',
      'Report of the Commissioners Appointed to Enquire into the Famine in Bengal and Orissa (1867)',
    ],
    dispatchTitle: 'Part V: The Subcontinental Corpus',
    dispatchHref: '/en/chapters/action',
    evidenceStatus: 'PRIMARY_RECORD',
    capital: 'Cuttack & Puri',
    mapPosition: {
      leftPercent: 62.5,
      topPercent: 49.5,
    },
  },
  north_west: {
    id: 'north_west',
    code: 'NWFP',
    name: 'North-West Frontier Province',
    subtitle: 'The Great Game Frontier & Pashtun Agencies',
    territory: 'Peshawar, Khyber Pass, Kohat, Bannu, Malakand, Waziristan',
    annexationYear: '1849 (with Punjab) / Separate Province created 1901',
    annexationMechanism: 'Conquest of Sikh Empire (1849) & Curzon Administrative Separation (1901)',
    revenueSystem: 'Frontier Crimes Regulation (FCR) — Arbitrary Collective Punishment Decrees',
    economicExtraction:
      'Vast military cantonment expenditures funded by general Indian taxpayer revenues; blockade and collective fines on frontier tribes.',
    documentedIncidentsCount: 4,
    keyIncidents: [
      'First, Second, and Third Anglo-Afghan Wars (1838–1919)',
      'Enactment of the Frontier Crimes Regulation (1887, 1901)',
      'Qissa Khwani Bazaar Massacre of unarmed Khudai Khidmatgars in Peshawar (23 April 1930)',
      'Royal Air Force aerial bombing and strafing campaigns in Waziristan (1936–1939)',
    ],
    keyFigures: {
      administrators: ['Lord Curzon', 'Sir Olaf Caroe', 'Major-General Charles Townshend'],
      resistance: ['Khan Abdul Ghaffar Khan (Frontier Gandhi)', 'Faqir of Ipi', 'Haji Sahib of Turangzai'],
    },
    primarySourceCitations: [
      'Cmd. 3526 · Report of the Peshawar Inquiry Committee (1930)',
      'IOR / L / PS / 12 · Frontier Crimes Regulation Proceedings',
    ],
    dispatchTitle: 'Part V: The Subcontinental Corpus',
    dispatchHref: '/en/chapters/action',
    evidenceStatus: 'PRIMARY_RECORD',
    capital: 'Peshawar & Khyber Agency',
    mapPosition: {
      leftPercent: 25.5,
      topPercent: 7.5,
    },
  },
};
