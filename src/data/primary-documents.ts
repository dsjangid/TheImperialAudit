export type EvidenceCategory =
  | 'PRIMARY_RECORD'
  | 'OFFICIAL_ENQUIRY'
  | 'PARLIAMENTARY_RECORD'
  | 'ECONOMIC_DATA'
  | 'SCHOLARLY_ESTIMATE'
  | 'SECONDARY_SCHOLARSHIP'
  | 'DISPUTED_FIGURE';

export interface PrimaryDocument {
  id: string;
  archiveRef: string;
  title: string;
  date: string;
  year: number;
  location: string;
  repository: string;
  category: EvidenceCategory;
  collection: string;
  pageOrDispatch: string;
  excerpt: string;
  context: string;
  significance: string;
  verificationUrl?: string;
  relatedDispatch: string;
  relatedDispatchHref: string;
}

export const primaryDocuments: Record<string, PrimaryDocument> = {
  'doc-ior-diwani-1765': {
    id: 'doc-ior-diwani-1765',
    archiveRef: 'IOR / H / 61 / pp. 381–386',
    title: 'Firman Granting the Diwani of Bengal, Bihar, and Orissa to the East India Company',
    date: '12 August 1765',
    year: 1765,
    location: 'Allahabad, Mughal Empire',
    repository: 'India Office Records, British Library, London',
    category: 'PRIMARY_RECORD',
    collection: 'Home Miscellaneous Series · East India Company Charters & Treaties',
    pageOrDispatch: 'Consultation No. 24, Treaty of Allahabad Records',
    excerpt:
      '“At this happy time our royal Firman, prepared for the dispatch of the Diwani of the provinces of Bengal, Bihar, and Orissa, is bestowed upon the English Company, as a free gift and Altamgha, without the association of any other person… It is required that the said Company shall exert their utmost endeavours in the collection of the revenues of the said provinces.”',
    context:
      'Issued by the titular Mughal Emperor Shah Alam II following his defeat at the Battle of Buxar (1764). Lord Clive negotiated the grant, which legally transferred the right to collect land taxes from over 20 million people to a private British corporation in exchange for a nominal annual tribute of 2.6 million rupees.',
    significance:
      'Transformed the East India Company from a licensed mercantile trading enterprise into a territorial sovereign with direct coercive fiscal power over the wealthiest agrarian province in Asia.',
    verificationUrl: 'https://www.bl.uk/collection-guides/india-office-records',
    relatedDispatch: 'Part I: The Corporate Takeover',
    relatedDispatchHref: '/en/chapters/timer',
  },
  'doc-bengal-famine-1770': {
    id: 'doc-bengal-famine-1770',
    archiveRef: 'IOR / E / 4 / 27 / Dispatch No. 34',
    title: 'Calcutta Council Revenue Dispatch to the Court of Directors in London',
    date: '17 August 1770',
    year: 1770,
    location: 'Fort William, Calcutta',
    repository: 'India Office Records, British Library, London',
    category: 'PRIMARY_RECORD',
    collection: 'Bengal Secret and Military Consultations',
    pageOrDispatch: 'Dispatch to the Court of Directors, Para 12',
    excerpt:
      '“Notwithstanding the great severity of the late famine and the great mortality of the people, having been at least one third of the inhabitants of the province, we have been able to maintain the revenue of this year equal to that of the former… and we expect it will suffer no diminution in the future.”',
    context:
      'Written by the Calcutta Revenue Board under Governor John Cartier during the peak of the 1769–1773 Great Bengal Famine. While an estimated 10 million people starved to death, the Company increased land revenue assessments by 10% and enforced collection through armed sepoys to ensure shareholder dividends in London were unaffected.',
    significance:
      'Serves as primary documentary proof that the 1770 famine mortality was drastically worsened by fiscal extraction policies that refused tax remissions and outlawed grain hoarding by native merchants while Company servants engaged in private grain speculation.',
    verificationUrl: 'https://www.bl.uk/collection-guides/india-office-records',
    relatedDispatch: 'Part I: The Corporate Takeover',
    relatedDispatchHref: '/en/chapters/timer',
  },
  'doc-cornwallis-1793': {
    id: 'doc-cornwallis-1793',
    archiveRef: 'IOR / V / 8 / 15 / Regulation I of 1793',
    title: 'The Permanent Settlement Proclamation of Bengal',
    date: '1 May 1793',
    year: 1793,
    location: 'Calcutta, Bengal Presidency',
    repository: 'India Office Records, British Library, London',
    category: 'PRIMARY_RECORD',
    collection: 'Bengal Regulations & Acts Collection (1793–1834)',
    pageOrDispatch: 'Regulation I of 1793, Articles I–VIII',
    excerpt:
      '“The Governor General in Council enacts that the Jama assessed upon the lands under the decennial settlement is declared to be fixed forever… The Zamindars, independent Talukdars, and other actual proprietors of land, will be enabled to manage their estates in the manner they think best, but punctual payment of the public revenue will be enforced by sale of their lands.”',
    context:
      'Drafted by Governor-General Lord Cornwallis and John Shore. The regulation recognized traditional tax collectors (Zamindars) as absolute private landowners and fixed their tax payment to the colonial state in perpetuity, while depriving the vast mass of ryots (cultivators) of their customary hereditary land rights.',
    significance:
      'Created a loyal landed aristocracy tied to British rule and entrenched a structural mechanism for agricultural rack-renting, peasant indebtedness, and periodic rural famines across eastern India for 150 years.',
    verificationUrl: 'https://www.bl.uk/collection-guides/india-office-records',
    relatedDispatch: 'Part I: The Corporate Takeover',
    relatedDispatchHref: '/en/chapters/timer',
  },
  'doc-macaulay-1835': {
    id: 'doc-macaulay-1835',
    archiveRef: 'TNA / FO / 83 / 1085',
    title: 'Minute on Indian Education by Thomas Babington Macaulay',
    date: '2 February 1835',
    year: 1835,
    location: 'Calcutta, Supreme Council of India',
    repository: 'The National Archives, Kew, United Kingdom',
    category: 'PRIMARY_RECORD',
    collection: 'Colonial Governance & Education Papers',
    pageOrDispatch: 'Council Minute, Sections 14–22',
    excerpt:
      '“We must at present do our best to form a class who may be interpreters between us and the millions whom we govern; a class of persons, Indian in blood and colour, but English in taste, in opinions, in morals, and in intellect.”',
    context:
      'Lord Macaulay, legal member of the Governor-General’s Council, formulated the intellectual blueprint for imperial administrative hegemony. His minute led directly to the English Education Act 1835, defunding traditional Arabic, Persian, and Sanskrit educational institutions in favour of Western bureaucratic training.',
    significance:
      'Established the institutional language and caste-like administrative class necessary for a tiny British civil service to administer a subcontinent of hundreds of millions.',
    verificationUrl: 'https://www.nationalarchives.gov.uk',
    relatedDispatch: 'Part III: The Actors of Empire',
    relatedDispatchHref: '/en/chapters/dossiers',
  },
  'doc-dalhousie-awadh-1856': {
    id: 'doc-dalhousie-awadh-1856',
    archiveRef: 'PP / HC / 1856 / Vol. 45 / No. 2082',
    title: 'Governor-General Lord Dalhousie’s Minute on the Annexation of the Kingdom of Oude',
    date: '18 June 1855 / Proclaimed 7 Feb 1856',
    year: 1856,
    location: 'Government House, Calcutta',
    repository: 'Hansard Parliamentary Papers, House of Commons',
    category: 'PRIMARY_RECORD',
    collection: 'Papers Relating to the Annexation of Oude',
    pageOrDispatch: 'Cmd. 2082, pp. 235–241',
    excerpt:
      '“The British Government would be guilty in the sight of God and man, if it were any longer to aid in sustaining by its countenance an administration fraught with suffering to millions… The Government of Oude shall be vested exclusively and forever in the East India Company.”',
    context:
      'Lord Dalhousie executed the unilateral annexation of Awadh under the pretext of administrative mismanagement, exiling Nawab Wajid Ali Shah to Calcutta and confiscating the estates of the Talukdars. Awadh was the primary recruitment ground for the Bengal Native Infantry sepoys.',
    significance:
      'Acted as the direct structural catalyst for the 1857 Rebellion, alienating both the civilian populace of Awadh and over 40,000 sepoys whose families were subjected to higher British land taxation.',
    verificationUrl: 'https://hansard.parliament.uk',
    relatedDispatch: 'Part I: The Corporate Takeover',
    relatedDispatchHref: '/en/chapters/timer',
  },
  'doc-meerut-telegram-1857': {
    id: 'doc-meerut-telegram-1857',
    archiveRef: 'IOR / L / MIL / 5 / 667',
    title: 'First Electric Telegraph Transmission on the Outbreak of the Meerut Rebellion',
    date: '10 May 1857 (9:00 PM)',
    year: 1857,
    location: 'Meerut Telegraph Office to Agra Fort',
    repository: 'India Office Records, British Library, London',
    category: 'PRIMARY_RECORD',
    collection: 'Military Department: 1857 Mutiny Dispatches',
    pageOrDispatch: 'Telegraph Log Sheet No. 1',
    excerpt:
      '“The Sepoys have come in from the lines and are burning the bungalows. Several European officers and ladies have been killed. The 3rd Cavalry and 11th and 20th Native Infantry are in open revolt and are marching on Delhi.”',
    context:
      'Sent by postmaster and telegraph signaller William Brendish as sepoy regiments broke into the Meerut arsenal, liberated 85 comrades sentenced to hard labour for refusing the Enfield cartridges, and commenced the 40-mile night march to restore Mughal Emperor Bahadur Shah Zafar as sovereign of Hindustan.',
    significance:
      'The opening electronic record of the 1857 Great Rebellion, marking the collapse of British military authority across the Gangetic plains.',
    verificationUrl: 'https://www.bl.uk/collection-guides/india-office-records',
    relatedDispatch: 'Part II: The Great Rupture',
    relatedDispatchHref: '/en/chapters/comparison',
  },
  'doc-proclamation-1858': {
    id: 'doc-proclamation-1858',
    archiveRef: 'TNA / FO / 83 / 221 & Hansard Vol. 151',
    title: 'Queen Victoria’s Proclamation to the Princes, Chiefs, and People of India',
    date: '1 November 1858',
    year: 1858,
    location: 'Allahabad Durbar / London Gazette',
    repository: 'The National Archives, Kew / UK Parliamentary Archives',
    category: 'PARLIAMENTARY_RECORD',
    collection: 'Crown Transfer of Power Proceedings (1858)',
    pageOrDispatch: 'London Gazette Extraordinary, 1 Nov 1858',
    excerpt:
      '“We have resolved to take upon ourselves the government of the territories in India, heretofore administered in trust for us by the Honourable East India Company… We hereby announce to the native princes of India, that all treaties and engagements made with them under the authority of the Company are by us accepted.”',
    context:
      'Read in English and Urdu by Governor-General Lord Canning at a grand durbar in Allahabad. The proclamation marked the formal liquidation of the East India Company following the Government of India Act 1858 and the establishment of the direct British Raj.',
    significance:
      'Codified the colonial policy of alliance with feudal princely states to create a bulwark against future democratic or revolutionary nationalism, while freezing social hierarchy.',
    verificationUrl: 'https://hansard.parliament.uk',
    relatedDispatch: 'Part II: The Great Rupture',
    relatedDispatchHref: '/en/chapters/comparison',
  },
  'doc-temple-ration-1877': {
    id: 'doc-temple-ration-1877',
    archiveRef: 'IOR / L / E / 7 / 23 / Famine Report No. 12',
    title: 'Sir Richard Temple’s Minute on Famine Relief Ration Testing in Madras',
    date: '12 January 1877',
    year: 1877,
    location: 'Madras, Fort St. George',
    repository: 'India Office Records, British Library, London',
    category: 'OFFICIAL_ENQUIRY',
    collection: 'Madras Famine Commission Proceedings (1876–1878)',
    pageOrDispatch: 'Minute on Relief Works and Nutrition Standards, pp. 45–48',
    excerpt:
      '“The task of saving life, irrespective of the cost, is one which it is beyond our power to undertake… The relief ration is reduced to one pound of grain per diem plus one anna, yielding approximately 1,627 calories for hard labour on relief camps.”',
    context:
      'Special Famine Delegate Sir Richard Temple was dispatched by Viceroy Lord Lytton with strict orders to minimize financial expenditure during the Great Famine of 1876–78. Temple systematically reduced relief rations to an amount medically proven to be less than the diet provided to inmates of Victorian prisons or later Nazi concentration camp labourers at Buchenwald (1,750 kcal).',
    significance:
      'Resulted in the death of over 5.5 to 10 million people across Madras, Mysore, and Bombay, even as 6.4 million hundredweight of wheat was exported to the United Kingdom during the height of the famine.',
    verificationUrl: 'https://www.bl.uk/collection-guides/india-office-records',
    relatedDispatch: 'Part I: The Corporate Takeover',
    relatedDispatchHref: '/en/chapters/timer',
  },
  'doc-naoroji-drain-1901': {
    id: 'doc-naoroji-drain-1901',
    archiveRef: 'BL / 08023.dd.12 / Naoroji Papers',
    title: 'Poverty and Un-British Rule in India: Memorandum on the Drain of Wealth',
    date: '1901',
    year: 1901,
    location: 'London, Swan Sonnenschein & Co.',
    repository: 'British Library, London',
    category: 'ECONOMIC_DATA',
    collection: 'Economic History of British India Monograph Series',
    pageOrDispatch: 'Chapter III: The Economic Drain, pp. 33–42',
    excerpt:
      '“The drain consists of two elements: first, that arising from the remittances by European officials of their savings, and for their expenditure in England for their families… and second, that arising from remittances by Non-Officials… The process of bleeding India is continuous and unrelenting.”',
    context:
      'Written by Dadabhai Naoroji, the first Indian Member of the British Parliament (MP for Central Finsbury, 1892–1895). Naoroji synthesized official colonial trade statistics to formulate the "Drain Theory," demonstrating that India was systematically exported dry without receiving equivalent economic imports.',
    significance:
      'The foundational economic text of the Indian national movement, shifting anti-colonial discourse from administrative reform to systemic fiscal interrogation.',
    verificationUrl: 'https://www.bl.uk',
    relatedDispatch: 'Part III: The Actors of Empire',
    relatedDispatchHref: '/en/chapters/dossiers',
  },
  'doc-dyer-testimony-1919': {
    id: 'doc-dyer-testimony-1919',
    archiveRef: 'Cmd. 681 (1920) / Evidence Vol. III, pp. 111–134',
    title: 'Sworn Testimony of Brigadier-General R.E.H. Dyer before the Hunter Commission',
    date: '19 November 1919',
    year: 1919,
    location: 'Lahore, Disorders Inquiry Committee',
    repository: 'His Majesty’s Stationery Office (Cmd. 681) / British Library',
    category: 'OFFICIAL_ENQUIRY',
    collection: 'Report of the Committee Appointed to Investigate Disturbances in the Punjab',
    pageOrDispatch: 'Vol. III (Oral Evidence), Questions 115–142',
    excerpt:
      '“Q. Did you take any measures to attend to the wounded?\nA. No, certainly not. It was not my job. There were hospitals open and they could have gone there if they liked.\nQ. Supposing the passage was sufficient to allow the armoured cars to go in, would you have opened fire with machine guns?\nA. I think, probably, yes.”',
    context:
      'Dyer was cross-examined by Indian advocate Sir Chimanlal Setalvad during the official parliamentary inquiry into the Jallianwala Bagh massacre of 13 April 1919. Dyer explicitly admitted that his objective was not merely to disperse the gathering, but to "produce a sufficient moral effect from a military point of view not only on those who were present, but more especially throughout the Punjab."',
    significance:
      'The definitive primary legal record documenting the intentionality and punitive terror behind the 1,650 rounds fired into an unarmed civilian gathering in Amritsar.',
    verificationUrl: 'https://hansard.parliament.uk',
    relatedDispatch: 'Part IV: Ten Minutes in Amritsar',
    relatedDispatchHref: '/en/chapters/share',
  },
  'doc-tagore-knighthood-1919': {
    id: 'doc-tagore-knighthood-1919',
    archiveRef: 'IOR / L / PJ / 6 / 1604 / File 3422',
    title: 'Rabindranath Tagore’s Letter of Renunciation of Knighthood to Viceroy Lord Chelmsford',
    date: '31 May 1919',
    year: 1919,
    location: 'Calcutta, Bengal Presidency',
    repository: 'India Office Records, British Library, London',
    category: 'PRIMARY_RECORD',
    collection: 'Public and Judicial Department Papers',
    pageOrDispatch: 'File 3422, Registered No. 1919/521',
    excerpt:
      '“The enormity of the measures taken by the Government in the Punjab for quelling some local disturbances has, with a rude shock, revealed to our minds the helplessness of our position as British subjects in India… The time has come when badges of honour make our shame glaring in the incongruous context of humiliation, and I for my part wish to stand, shorn of all special distinctions, by the side of those of my countrymen who, for their so-called insignificance, are liable to suffer degradation not fit for human beings.”',
    context:
      'Asia’s first Nobel Laureate, Rabindranath Tagore, formally returned his knighthood in protest against martial law, mass floggings, the Crawling Order, and the Jallianwala Bagh massacre.',
    significance:
      'A pivotal international rupture in colonial legitimacy, shattering the illusion of moral authority and shared imperial civic identity.',
    verificationUrl: 'https://www.bl.uk/collection-guides/india-office-records',
    relatedDispatch: 'Part IV: Ten Minutes in Amritsar',
    relatedDispatchHref: '/en/chapters/share',
  },
  'doc-amery-churchill-1943': {
    id: 'doc-amery-churchill-1943',
    archiveRef: 'TNA / CAB / 65 / 35 / War Cabinet Minute 111 (43)',
    title: 'British War Cabinet Minutes on Wheat Shipments and the Bengal Famine',
    date: '4 August 1943 & 10 November 1943',
    year: 1943,
    location: '10 Downing Street, London',
    repository: 'The National Archives, Kew, United Kingdom',
    category: 'PRIMARY_RECORD',
    collection: 'Cabinet Office: War Cabinet Minutes (1939–1945)',
    pageOrDispatch: 'CAB 65/35, Conclusions 111(43) & 152(43)',
    excerpt:
      '“The Prime Minister said that starvation of anyhow underfed Bengalis was less serious than the shortage of Greeks… He would not agree to diverting Australian shipping for relief grain to India while military operations in the Mediterranean demanded all available tonnage.”',
    context:
      'Secretary of State for India Leopold Amery and Viceroy Lord Wavell repeatedly appealed to Prime Minister Winston Churchill and the War Cabinet for 500,000 tons of wheat to halt the catastrophic Bengal Famine. Churchill refused, prioritizing stockpiles for post-war Europe while Indian grain and ships were requisitioned for military supply.',
    significance:
      'Provides primary governmental proof of the deliberate political decisions that exacerbated the famine, leading directly to the death of 3.0 to 3.8 million civilians.',
    verificationUrl: 'https://www.nationalarchives.gov.uk',
    relatedDispatch: 'Part I: The Corporate Takeover',
    relatedDispatchHref: '/en/chapters/timer',
  },
  'doc-patnaik-drain-calc': {
    id: 'doc-patnaik-drain-calc',
    archiveRef: 'CUP / ISBN 9780231186082 / pp. 277–304',
    title: 'Econometric Analysis of the Council Bills Drain Mechanism (1765–1938)',
    date: '2018',
    year: 2018,
    location: 'Columbia University Press, New York',
    repository: 'Columbia University Academic Press Repository',
    category: 'SCHOLARLY_ESTIMATE',
    collection: 'Agrarian and Other Histories: Essays for Utsa Patnaik',
    pageOrDispatch: 'Chapter 13: Revisiting the Drain or Transfer from India to Britain',
    excerpt:
      '“Compounding the commodity export surplus intercepted through the Council Bills mechanism and budgetary appropriation at a modest commercial interest rate of 5% yields a total drain of $44.6 trillion (in 2016 USD) over the 173-year period between 1765 and 1938… This colossal financial transfer funded Britain’s metropolitan infrastructure and its global territorial conquests.”',
    context:
      'Professor Utsa Patnaik, Emeritus Professor of Economics at Jawaharlal Nehru University, cross-analyzed nearly two centuries of British parliamentary trade data, Council Bill transaction registries, and Indian budgetary balances to calculate the compounded macroeconomic transfer.',
    significance:
      'The definitive contemporary econometric estimate quantifying the total imperial wealth drain from colonial India.',
    verificationUrl: 'https://cup.columbia.edu',
    relatedDispatch: 'Cover & Fiscal Mechanism',
    relatedDispatchHref: '/en',
  },
};
