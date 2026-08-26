export interface DossierItem {
  id: string;
  fileNo: string;
  name: {
    en: string;
    ru: string;
  };
  fullName: {
    en: string;
    ru: string;
  };
  role: {
    en: string;
    ru: string;
  };
  born: {
    en: string;
    ru: string;
  };
  inOffice: {
    en: string;
    ru: string;
  };
  fileOpened: string;
  lastUpdated: string;
  image: string;
  summary: {
    en: string;
    ru: string;
  };
  paragraphs: {
    en: string[];
    ru: string[];
  };
  officialIncome?: {
    en: string;
    ru: string;
  };
  investigatedAssets?: {
    en: string[];
    ru: string[];
  };
}

export const dossiersList: DossierItem[] = [
  {
    id: "clive",
    fileNo: "01",
    name: {
      en: "CLIVE, R.",
      ru: "КЛАЙВ, Р."
    },
    fullName: {
      en: "Major-General Robert Clive (1st Baron Clive of Plassey)",
      ru: "Генерал-майор Роберт Клайв (1-й барон Клайв Плессийский)"
    },
    role: {
      en: "GOVERNOR OF THE PRESIDENCY OF FORT WILLIAM (BENGAL)",
      ru: "ГУБЕРНАТОР ПРЕЗИДЕНТСТВА ФОРТ-УИЛЬЯМ (БЕНГАЛИЯ)"
    },
    born: {
      en: "Shropshire, Kingdom of Great Britain — 1725",
      ru: "Шропшир, Королевство Великобритания — 1725"
    },
    inOffice: {
      en: "Commander-in-Chief & Governor of Bengal (1757–1760; 1765–1767)",
      ru: "Главнокомандующий и губернатор Бенгалии (1757–1760; 1765–1767)"
    },
    fileOpened: "1757 / 06",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/clive.jpg",
    summary: {
      en: "Architect of the military coup at Plassey (1757) and negotiator of the Treaty of Allahabad (1765), securing the Diwani tax rights for the East India Company while amassing an unprecedented personal fortune.",
      ru: "Организатор военного переворота при Плесси (1757) и договора в Аллахабаде (1765), обеспечивший Ост-Индской компании право дивани."
    },
    paragraphs: {
      en: [
        "In June 1757, Clive orchestrated the subversion of Nawab Siraj ud-Daulah by bribing army commander Mir Jafar and the banking family of Jagat Seth, establishing Company military supremacy over Bengal.",
        "Negotiated the 1765 Treaty of Allahabad with Mughal Emperor Shah Alam II, legally transferring the Diwani (land revenue collection rights) of Bengal, Bihar, and Orissa to a private commercial corporation.",
        "Secured personal plunder of £234,000 in cash and an annual jagir (revenue grant) of £27,000, returning to London as one of the wealthiest private citizens in Europe and sparking a parliamentary corruption inquiry."
      ],
      ru: [
        "В июне 1757 года Клайв организовал свержение наваба Сираджа уд-Даулы, подкупив военачальника Мир Джафара.",
        "Заключил Аллахабадский договор 1765 года, передавший право сбора налогов Ост-Индской компании.",
        "Лично присвоил 234 000 фунтов стерлингов и пожизненный джагир в 27 000 фунтов в год."
      ]
    },
    officialIncome: {
      en: "Company Salary: £3,000/yr · Private Jagir Revenue: £27,000/yr",
      ru: "Жалование: £3,000/год · Доход от джагира: £27,000/год"
    },
    investigatedAssets: {
      en: [
        "Clive Estate at Claremont, Surrey (£100,000 mansion)",
        "Walcot Hall Estate, Shropshire",
        "Personal bullion and diamond remittances exceeding £234,000 (1757)"
      ],
      ru: [
        "Поместье Клермонт в Суррее",
        "Уолкот-Холл в Шропшире",
        "Личные переводы в золоте и бриллиантах на сумму более £234,000"
      ]
    }
  },
  {
    id: "curzon",
    fileNo: "02",
    name: {
      en: "CURZON, G. N.",
      ru: "КЕРЗОН, ДЖ. Н."
    },
    fullName: {
      en: "George Nathaniel Curzon (1st Marquess Curzon of Kedleston)",
      ru: "Джордж Натаниэл Керзон (1-й маркиз Керзон Кедлстонский)"
    },
    role: {
      en: "VICEROY AND GOVERNOR-GENERAL OF INDIA (1899–1905)",
      ru: "ВИЦЕ-КОРОЛЬ И ГЕНЕРАЛ-ГУБЕРНАТОР ИНДИИ (1899–1905)"
    },
    born: {
      en: "Kedleston Hall, Derbyshire — 1859",
      ru: "Кедлстон-Холл, Дербишир — 1859"
    },
    inOffice: {
      en: "Viceroy of India (6 January 1899 – 18 November 1905)",
      ru: "Вице-король Индии (1899–1905)"
    },
    fileOpened: "1899 / 01",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/curzon.jpg",
    summary: {
      en: "Authoritarian viceroy who executed the 1905 Partition of Bengal to dismantle Indian nationalist solidarity, oversaw the famine of 1899–1900, and created the North-West Frontier Province.",
      ru: "Вице-король, осуществивший раздел Бенгалии в 1905 году для ослабления национального движения."
    },
    paragraphs: {
      en: [
        "Enacted the Partition of Bengal in October 1905 along religious communal lines, explicitly writing in confidential dispatches that 'Bengal united is a power; Bengal divided will pull in several different ways.'",
        "Presided over the 1899–1900 Indian Famine (1M–4M dead), maintaining rigid tax collection and criticizing relief works as encouraging 'demoralizing pauperism.'",
        "Organized the opulent 1903 Delhi Durbar at massive public expense while rural famine mortality continued across central India."
      ],
      ru: [
        "Осуществил раздел Бенгалии в 1905 году с целью раскола национального движения.",
        "Руководил страной во время голода 1899–1900 годов, настаивая на строгом сборе налогов.",
        "Организовал пышный Делийский дарбар в 1903 году за счет индийских налогоплательщиков."
      ]
    },
    officialIncome: {
      en: "Viceroy Salary: £20,000/yr (Rs. 250,000) from Indian Revenues",
      ru: "Жалование вице-короля: £20,000/год"
    },
    investigatedAssets: {
      en: [
        "Kedleston Hall Estate, Derbyshire",
        "Bodiam Castle restoration financing",
        "1903 Delhi Durbar state expenditure: £200,000+ charged to India"
      ],
      ru: [
        "Поместье Кедлстон-Холл",
        "Финансирование реставрации замка Бодиам"
      ]
    }
  },
  {
    id: "dyer",
    fileNo: "03",
    name: {
      en: "DYER, R. E. H.",
      ru: "ДАЙЕР, Р. Э. Х."
    },
    fullName: {
      en: "Brigadier-General Reginald Edward Harry Dyer",
      ru: "Бригадный генерал Реджинальд Эдвард Гарри Дайер"
    },
    role: {
      en: "COMMANDING OFFICER · 45TH INFANTRY BRIGADE (AMRITSAR)",
      ru: "КОМАНДУЮЩИЙ 45-Й ПЕХОТНОЙ БРИГАДОЙ (АМРИТСАР)"
    },
    born: {
      en: "Murree, British India — 1864",
      ru: "Марри, Британская Индия — 1864"
    },
    inOffice: {
      en: "Commanding Officer in Amritsar (April 1919); relieved of command July 1920",
      ru: "Командующий гарнизоном в Амритсаре (апрель 1919); отстранён в июле 1920"
    },
    fileOpened: "1919 / 04",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/dyer.jpg",
    summary: {
      en: "Officer responsible for the Jallianwala Bagh massacre on 13 April 1919, ordering 1,650 rounds fired without warning into an unarmed gathering, killing 379 to 1,000+ civilians.",
      ru: "Офицер, отдавший приказ открыть огонь по безоружной толпе в парке Джаллианвала Баг 13 апреля 1919 года."
    },
    paragraphs: {
      en: [
        "Marched 50 armed Gurkha and Sikh riflemen into the walled garden of Jallianwala Bagh on 13 April 1919 and ordered firing without warning on a crowd of 15,000–20,000 unarmed festival attendees.",
        "Expended 1,650 rounds of .303 ammunition continuously for ten minutes, deliberately directing fire where crowd density was highest and trapping victims at the single narrow exit.",
        "Enacted the 'Crawling Order' in Amritsar, forcing Indian citizens to crawl on all fours along Kucha Kurrichhan lane under armed guard."
      ],
      ru: [
        "13 апреля 1919 года приказал открыть огонь без предупреждения по мирным жителям в Амритсаре.",
        "Было израсходовано 1650 патронов за 10 минут непрерывной стрельбы.",
        "Ввёл унизительный приказ 'ползать на четвереньках' по улице Куча Курричхан."
      ]
    },
    officialIncome: {
      en: "Brigadier Pension + £26,000 Public Fund raised by London Morning Post",
      ru: "Военная пенсия + £26,000 общественного сбора в Лондоне"
    },
    investigatedAssets: {
      en: [
        "Morning Post public testimonial fund of £26,317 (£1.2M in 2026 value)",
        "Jeweled Sword of Honour presented by British imperial sympathizers"
      ],
      ru: [
        "Фонд газеты Morning Post на сумму £26,317",
        "Почетный меч от имперских сторонников"
      ]
    }
  },
  {
    id: "odwyer",
    fileNo: "04",
    name: {
      en: "O'DWYER, M. F.",
      ru: "О'ДВАЙЕР, М. Ф."
    },
    fullName: {
      en: "Sir Michael Francis O'Dwyer",
      ru: "Сэр Майкл Фрэнсис О'Двайер"
    },
    role: {
      en: "LIEUTENANT-GOVERNOR OF THE PUNJAB (1913–1919)",
      ru: "ЛЕЙТЕНАНТ-ГУБЕРНАТОР ПЕНДЖАБА (1913–1919)"
    },
    born: {
      en: "County Tipperary, Ireland — 1864",
      ru: "Типперэри, Ирландия — 1864"
    },
    inOffice: {
      en: "Lieutenant-Governor of the Punjab (May 1913 – May 1919)",
      ru: "Лейтенант-губернатор Пенджаба (1913–1919)"
    },
    fileOpened: "1919 / 04",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/odwyer.jpg",
    summary: {
      en: "Head of the Punjab provincial government who approved General Dyer's actions at Jallianwala Bagh, enforced coercive wartime recruitment, and was assassinated in 1940 by Shaheed Udham Singh at Caxton Hall.",
      ru: "Глава Пенджаба, одобривший действия Дайера в Амритсаре. Застрелен Удхамом Сингхом в Лондоне в 1940 году."
    },
    paragraphs: {
      en: [
        "Sent a formal telegram approving General Dyer’s firing immediately following the massacre: 'Your action correct. Lieutenant-Governor approves.'",
        "Enacted harsh martial law across Punjab, utilizing aerial strafing of Gujranwala civilians, public whippings, and summary military tribunals.",
        "Assassinated on 13 March 1940 at Caxton Hall, London, by revolutionary Shaheed Udham Singh in retribution for the Amritsar atrocities."
      ],
      ru: [
        "Одобрил действия генерала Дайера в Амритсаре официальной телеграммой.",
        "Ввёл военное положение и санкционировал бомбардировки гражданского населения в Гуджранвале.",
        "Застрелен 13 марта 1940 года в Лондоне революционером Удхамом Сингхом."
      ]
    }
  },
  {
    id: "churchill",
    fileNo: "05",
    name: {
      en: "CHURCHILL, W. L. S.",
      ru: "ЧЕРЧИЛЛЬ, У."
    },
    fullName: {
      en: "Sir Winston Leonard Spencer Churchill",
      ru: "Сэр Уинстон Леонард Спенсер Черчилль"
    },
    role: {
      en: "PRIME MINISTER OF THE UNITED KINGDOM (1940–1945)",
      ru: "ПРЕМЬЕР-МИНИСТР ВЕЛИКОБРИТАНИИ (1940–1945)"
    },
    born: {
      en: "Blenheim Palace, Oxfordshire — 1874",
      ru: "Бленхеймский дворец, Оксфордшир — 1874"
    },
    inOffice: {
      en: "Prime Minister & Minister of Defence (1940–1945; 1951–1955)",
      ru: "Премьер-министр Великобритании (1940–1945; 1951–1955)"
    },
    fileOpened: "1943 / 08",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/churchill.jpg",
    summary: {
      en: "Prime Minister whose War Cabinet systematically rejected emergency grain shipments to Bengal during the 1943 Famine, causing between 3.0 and 3.8 million civilian deaths.",
      ru: "Премьер-министр, чей военный кабинет отклонял поставки зерна в Бенгалию во время голода 1943 года."
    },
    paragraphs: {
      en: [
        "Repeatedly denied requests from Viceroy Lord Wavell and Secretary of State Leopold Amery for 500,000 tons of emergency wheat for Bengal in 1943, prioritizing stockpiles for post-war European liberation.",
        "Approved the 'Boat Denial' and 'Rice Denial' military policies in coastal Bengal (1942), confiscating over 66,000 boats and destroying rural distribution networks.",
        "Privately recorded by Secretary Amery as stating during Cabinet debates that 'starvation of anyhow underfed Bengalis was less serious than shortage of Greeks' and asking 'why Gandhi hadn’t died yet.'"
      ],
      ru: [
        "Неоднократно отклонял просьбы вице-короля Уэйвелла о направлении продовольствия в голодающую Бенгалию.",
        "Утвердил 'политику изъятия лодок' в прибрежной Бенгалии, разрушившую систему распределения продовольствия.",
        "Зафиксирован в дневниках Лео Эмери с высказываниями об индийцах как 'звероподобном народе с дикой религией'."
      ]
    }
  },
  {
    id: "mountbatten",
    fileNo: "06",
    name: {
      en: "MOUNTBATTEN, L.",
      ru: "МАУНТБЕТТЕН, Л."
    },
    fullName: {
      en: "Louis Francis Albert Victor Nicholas Mountbatten (1st Earl Mountbatten of Burma)",
      ru: "Луис Маунтбеттен (1-й граф Маунтбеттен Бирманский)"
    },
    role: {
      en: "LAST VICEROY AND FIRST GOVERNOR-GENERAL OF INDIA (1947–1948)",
      ru: "ПОСЛЕДНИЙ ВИЦЕ-КОРОЛЬ И ПЕРВЫЙ ГЕНЕРАЛ-ГУБЕРНАТОР ИНДИИ"
    },
    born: {
      en: "Frogmore House, Windsor — 1900",
      ru: "Виндзор, Великобритания — 1900"
    },
    inOffice: {
      en: "Viceroy of India (February 1947 – August 1947)",
      ru: "Вице-король Индии (февраль 1947 – август 1947)"
    },
    fileOpened: "1947 / 03",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/mountbatten.jpg",
    summary: {
      en: "Viceroy who accelerated the British withdrawal timeline by ten months, overseeing a hasty partition that displaced 15 million people and caused up to one million sectarian deaths.",
      ru: "Вице-король, ускоривший уход Британии из Индии на 10 месяцев, что привело к хаосу и миллиону жертв при разделе."
    },
    paragraphs: {
      en: [
        "Unilaterally advanced the British transfer of power deadline from June 1948 to August 1947, giving boundary commissioner Sir Cyril Radcliffe only five weeks to partition Punjab and Bengal.",
        "Suppressed the Radcliffe Boundary Award map until two days after Independence Day (17 August 1947) to ensure Britain avoided administrative blame for the unfolding sectarian massacres.",
        "Left provincial administrations with inadequate security forces, leading to the displacement of 15 million refugees and between 500,000 and 1,000,000 casualties."
      ],
      ru: [
        "Перенес дату передачи власти с июня 1948 года на август 1947 года, оставив на демаркацию границ всего 5 недель.",
        "Задержал публикацию карты раздела границ до 17 августа, сняв с британской армии ответственность за порядок.",
        "Следствием спешки стал хаос раздела, приведший к бегству 15 миллионов человек и гибели до 1 миллиона."
      ]
    }
  },
  {
    id: "lakshmibai",
    fileNo: "07",
    name: {
      en: "RANI LAKSHMIBAI",
      ru: "РАНИ ЛАКШМИБАЙ"
    },
    fullName: {
      en: "Manikarnika Tambe · Rani Lakshmibai of Jhansi",
      ru: "Маникарника Тамбе · Рани Лакшмибай из Джханси"
    },
    role: {
      en: "LEADER OF ARMED RESISTANCE · 1857 REBELLION (JHANSI)",
      ru: "ЛИДЕР ВООРУЖЕННОГО ВОССТАНИЯ 1857 ГОДА (ДЖХАНСИ)"
    },
    born: {
      en: "Varanasi, Northern India — c. 1828",
      ru: "Варанаси, Северная Индия — ок. 1828"
    },
    inOffice: {
      en: "Rani of Jhansi (1842–1858); Commander of Insurgent Forces",
      ru: "Правительница Джханси (1842–1858); главнокомандующая повстанцев"
    },
    fileOpened: "1857 / 06",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/lakshmibai.jpg",
    summary: {
      en: "Symbol of 1857 anti-colonial defiance who fought against Lord Dalhousie's Doctrine of Lapse, defending Jhansi Fort and dying in battle at Kotah-ki-Serai.",
      ru: "Символ сопротивления 1857 года, сражавшаяся против аннексии княжества Джханси и погибшая в бою."
    },
    paragraphs: {
      en: [
        "Defied Lord Dalhousie’s Doctrine of Lapse in 1854 when the Company annexed Jhansi upon the death of Maharaja Gangadhar Rao, famously declaring 'Mera Jhansi nahi doongi' (I will not surrender my Jhansi).",
        "Commanded the defense of Jhansi Fort against General Sir Hugh Rose in March–April 1858, escaped through enemy encirclement on horseback with her adopted son, and joined forces with Tatya Tope at Kalpi.",
        "Fell in battle near Gwalior (Kotah-ki-Serai) on 18 June 1858. General Hugh Rose described her as 'the bravest and best military leader of the rebels.'"
      ],
      ru: [
        "Отвергла доктрину выморочности лорда Дальхузи в 1854 году, отказавшись сдать княжество Джханси.",
        "Руководила обороной крепости Джханси против генерала Хью Роуза в 1858 году.",
        "Погибла в бою под Гвалиором 18 июня 1858 года. Британский командующий Роуз назвал её 'лучшим и храбрейшим вождем повстанцев'."
      ]
    }
  },
  {
    id: "hazratmahal",
    fileNo: "08",
    name: {
      en: "BEGUM HAZRAT MAHAL",
      ru: "БЕГУМ ХАЗРАТ МАХАЛ"
    },
    fullName: {
      en: "Muhammadi Khanum · Begum Hazrat Mahal of Awadh",
      ru: "Мухаммади Ханум · Бегум Хазрат Махал из Авада"
    },
    role: {
      en: "REGENT OF AWADH · LEADER OF 1857 LUCKNOW RESISTANCE",
      ru: "РЕГЕНТ АВАДА · ЛИДЕР ОБОРОНЫ ЛАКХНАУ (1857)"
    },
    born: {
      en: "Faizabad, Kingdom of Awadh — c. 1820",
      ru: "Файзабад, Королевство Авад — ок. 1820"
    },
    inOffice: {
      en: "Regent of Awadh (1857–1858); exiled in Nepal",
      ru: "Регент Авада (1857–1858); в изгнании в Непале"
    },
    fileOpened: "1857 / 05",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/hazratmahal.jpg",
    summary: {
      en: "Ruler of Awadh who rallied Hindu and Muslim soldiers and talukdars to besiege the British Residency in Lucknow, rejecting Queen Victoria's 1858 amnesty proclamation.",
      ru: "Правительница Авада, возглавившая объединенное сопротивление и осаду британской резиденции в Лакхнау."
    },
    paragraphs: {
      en: [
        "Following Dalhousie’s 1856 annexation of Awadh and Nawab Wajid Ali Shah's exile, she seized control of Lucknow in June 1857, crowning her 11-year-old son Birjis Qadr and establishing a functioning insurgent government.",
        "Mobilized an army of over 100,000 sepoys, talukdars, and peasants, leading the protracted siege of the Lucknow British Residency for eight months.",
        "Issued a counter-proclamation rejecting Queen Victoria’s 1858 pardon, warning Indians that British promises were deceptive. Refused British pensions and died in exile in Kathmandu (1879)."
      ],
      ru: [
        "После аннексии Авада в 1856 году возглавила восстание в Лакхнау и сформировала революционное правительство.",
        "Объединила индусов и мусульман, руководя 8-месячной осадой британской резиденции.",
        "Отвергла амнистию королевы Виктории, отказалась от британской пенсии и умерла в изгнании в Непале."
      ]
    }
  },
  {
    id: "gandhi",
    fileNo: "09",
    name: {
      en: "GANDHI, M. K.",
      ru: "ГАНДИ, М. К."
    },
    fullName: {
      en: "Mohandas Karamchand Gandhi (Mahatma Gandhi)",
      ru: "Мохандас Карамчанд Ганди (Махатма Ганди)"
    },
    role: {
      en: "LEADER OF THE INDIAN NATIONAL MOVEMENT · SATYAGRAHA",
      ru: "ЛИДЕР НАЦИОНАЛЬНО-ОСВОБОДИТЕЛЬНОГО ДВИЖЕНИЯ ИНДИИ"
    },
    born: {
      en: "Porbandar, Gujarat — 1869",
      ru: "Порбандар, Гуджарат — 1869"
    },
    inOffice: {
      en: "President of Indian National Congress (1924); Mass Movement Leader",
      ru: "Президент Индийского национального конгресса (1924)"
    },
    fileOpened: "1919 / 03",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/gandhi.jpg",
    summary: {
      en: "Pioneer of mass non-violent resistance (Satyagraha) who transformed the anti-colonial struggle through the Non-Cooperation Movement (1920), the Salt March (1930), and Quit India (1942).",
      ru: "Основоположник ненасильственного сопротивления (сатьяграха), лидер общенационального движения за независимость."
    },
    paragraphs: {
      en: [
        "Launched the Non-Cooperation Movement (1920–1922) following the Jallianwala Bagh massacre, organizing the nationwide boycott of British courts, educational institutions, cloth, and titles.",
        "Led the 240-mile Dandi Salt March in March–April 1930 to defy the British state salt monopoly, triggering the arrest of over 60,000 civil resisters nationwide.",
        "Delivered the historic 'Do or Die' address at Gowalia Tank in Bombay on 8 August 1942, launching the Quit India Movement demanding the immediate cessation of British rule."
      ],
      ru: [
        "Возглавил движение несотрудничества (1920–1922) после расстрела в Амритсаре, организовав бойкот британских товаров.",
        "Провёл 240-мильный Соляной поход в 1930 году, разрушивший государственную монополию на соль.",
        "Провозгласил лозунг 'Действуй или умри' в 1942 году, начав движение 'Вон из Индии'."
      ]
    }
  },
  {
    id: "tilak",
    fileNo: "10",
    name: {
      en: "TILAK, B. G.",
      ru: "ТИЛАК, Б. Г."
    },
    fullName: {
      en: "Lokmanya Bal Gangadhar Tilak",
      ru: "Локманья Бал Гангадхар Тилак"
    },
    role: {
      en: "NATIONALIST LEADER & EDITOR · KESARI & MAHRATTA",
      ru: "ЛИДЕР НАЦИОНАЛЬНОГО ДВИЖЕНИЯ, РЕДАКТОР ГАЗЕТЫ 'КЕСАРИ'"
    },
    born: {
      en: "Ratnagiri, Bombay Presidency — 1856",
      ru: "Ратнагири, Бомбейское президентство — 1856"
    },
    inOffice: {
      en: "Leader of All India Home Rule League; Founder of Swadeshi Boycott",
      ru: "Основатель Лиги гомруля; идеолог бойкота 'свадеши'"
    },
    fileOpened: "1897 / 07",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/tilak.jpg",
    summary: {
      en: "Early radical leader who popularized the slogan 'Swaraj is my birthright and I shall have it,' prosecuted repeatedly by the British under Section 124A (Sedition) and exiled to Mandalay Prison.",
      ru: "Лидер радикального крыла Конгресса, провозгласивший лозунг 'Сварадж — моё право по рождению', осуждён за мятеж."
    },
    paragraphs: {
      en: [
        "Authored scathing editorial critiques of British plague mismanagement in Pune (1897) in his Marathi newspaper <em>Kesari</em>, resulting in his landmark 18-month imprisonment for sedition.",
        "Spearheaded the Swadeshi (indigenous goods) and Boycott movement following the 1905 Partition of Bengal, mobilizing working-class millworkers in Bombay.",
        "Sentenced in 1908 to six years of hard labor in Mandalay Prison (Burma) for defending revolutionaries Khudiram Bose and Prafulla Chaki under Section 124A of the Indian Penal Code."
      ],
      ru: [
        "Публиковал статьи против британских санитарных репрессий в Пуне (1897), впервые осужден по 124A статье о мятеже.",
        "Возглавил движение 'Свадеши' и бойкот британского текстиля после раздела Бенгалии.",
        "Приговорен в 1908 году к 6 годам каторги в тюрьме Мандалай (Бирма) за защиту революционеров."
      ]
    }
  },
  {
    id: "bhagat",
    fileNo: "11",
    name: {
      en: "BHAGAT SINGH",
      ru: "БХАГАТ СИНГХ"
    },
    fullName: {
      en: "Shaheed Bhagat Singh",
      ru: "Шахид Бхагат Сингх"
    },
    role: {
      en: "REVOLUTIONARY SOCIALIST · HINDUSTAN SOCIALIST REPUBLICAN ASSOCIATION",
      ru: "РЕВОЛЮЦИОНЕР-СОЦИАЛИСТ · HSRA"
    },
    born: {
      en: "Banga, Lyallpur District, Punjab — 1907",
      ru: "Банга, Лайяллпур, Пенджаб — 1907"
    },
    inOffice: {
      en: "Leader of HSRA and Naujawan Bharat Sabha",
      ru: "Лидер HSRA и молодежной организации 'Науджаван Бхарат Сабха'"
    },
    fileOpened: "1928 / 12",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/bhagat.jpg",
    summary: {
      en: "Marxist revolutionary who avenged Lala Lajpat Rai's death, threw non-lethal leaflets/smoke bombs into the Central Legislative Assembly, and was hanged at age 23 in Lahore Central Jail.",
      ru: "Революционер-социалист, отомстивший за гибель Лала Ладжпата Рая, повешен британскими властями в возрасте 23 лет."
    },
    paragraphs: {
      en: [
        "Assassinated British Assistant Superintendent of Police John Saunders in Lahore (17 December 1928) in response to the fatal police lathi charge on nationalist leader Lala Lajpat Rai.",
        "Detonated two low-intensity smoke bombs in the Central Legislative Assembly in Delhi on 8 April 1929, distributing leaflets proclaiming 'To make the deaf hear' and peacefully courting arrest.",
        "Conducted a historic 116-day hunger strike in Lahore Central Jail demanding political prisoner rights; executed by hanging alongside Sukhdev and Rajguru on 23 March 1931."
      ],
      ru: [
        "Ликвидировал помощника суперинтенданта полиции Джона Сондерса в Лахоре (1928) в ответ на убийство Ладжпата Рая.",
        "Взорвал шумовую гранату в Центральной ассамблее в Дели (1929), разбросав листовки 'Чтобы глухие услышали'.",
        "Держал 116-дневную голодовку в тюрьме; казнен через повешение 23 марта 1931 года в возрасте 23 лет."
      ]
    }
  },
  {
    id: "udham",
    fileNo: "12",
    name: {
      en: "UDHAM SINGH",
      ru: "УДХАМ СИНГХ"
    },
    fullName: {
      en: "Shaheed Udham Singh (Ram Mohammad Singh Azad)",
      ru: "Шахид Удхам Сингх (Рам Мохаммад Сингх Азад)"
    },
    role: {
      en: "GHADAR PARTY REVOLUTIONARY · CAXTON HALL RETRIBUTION",
      ru: "РЕВОЛЮЦИОНЕР ПАРТИИ 'ГАДАР'"
    },
    born: {
      en: "Sunam, Punjab — 1899",
      ru: "Сунам, Пенджаб — 1899"
    },
    inOffice: {
      en: "Ghadar Party Organizer; Executed at Pentonville Prison (1940)",
      ru: "Активист партии 'Гадар'; казнен в тюрьме Пентонвилл (1940)"
    },
    fileOpened: "1940 / 03",
    lastUpdated: "2026 / 08",
    image: "/TheImperialAudit/illustrations/dossiers/udham.jpg",
    summary: {
      en: "Eyewitness to the 1919 Jallianwala Bagh massacre who pursued Sir Michael O'Dwyer for 21 years, assassinating him at Caxton Hall in London on 13 March 1940.",
      ru: "Очевидец бойни в Амритсаре, выслеживавший Майкла О'Двайера 21 год и застреливший его в Лондоне в 1940 году."
    },
    paragraphs: {
      en: [
        "Survived the 13 April 1919 massacre at Jallianwala Bagh as a 19-year-old serving water to the gathering, taking a personal vow to bring the architects of the massacre to justice.",
        "Traveled across Africa, the United States, and Europe working with the anti-colonial Ghadar Party before establishing residence in London under various aliases.",
        "Shot and killed Sir Michael O'Dwyer during a joint meeting of the East India Association and Central Asian Society at Caxton Hall on 13 March 1940; gave his name at trial as 'Ram Mohammad Singh Azad' to symbolize subcontinental religious unity before being hanged at Pentonville Prison on 31 July 1940."
      ],
      ru: [
        "Пережил бойню 1919 года в Амритсаре, где раздавал воду прихожанам, поклявшись отомстить за погибших.",
        "Работал с революционной партией 'Гадар', выслеживая бывших колониальных чиновников в Европе.",
        "Застрелил Майкла О'Двайера в Лондоне 13 марта 1940 года; на суде назвал себя 'Рам Мохаммад Сингх Азад' в знак единства конфессий Индии."
      ]
    }
  }
];
