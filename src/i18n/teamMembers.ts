// Multilingual team member content keyed by full name.
// Falls back to the DB values when a member or language is not listed here.

export type TeamLang = "fr" | "en" | "es" | "de" | "it" | "ja" | "sw";

export type TeamEntry = {
  role: string;
  bio: string;
  skills: string[];
  journey: string;
};

export const teamContent: Record<string, Partial<Record<TeamLang, TeamEntry>>> = {
  "Ir Advaxe NDAYISENGA": {
    fr: {
      role: "Directeur Général",
      bio: "Advaxe Ndayisenga est ingénieur logiciel, builder Bitcoin, IT Manager et entrepreneur technologique, spécialisé en systèmes d'information d'entreprise, fintech, transformation digitale et architecture logicielle. Il possède une solide expérience dans la conception, le développement et le déploiement de solutions évolutives pour les institutions financières, les entreprises, les organisations éducatives et les initiatives communautaires.\n\nFondateur et Directeur Général de SIGHT Africa, il pilote une entreprise technologique dédiée à l'ingénierie logicielle, à l'infrastructure cloud, à la cybersécurité, à l'intelligence artificielle et au renforcement des capacités numériques. Il a conduit plusieurs projets à fort impact : ACAT (gestion du crédit agricole pour la microfinance), MySatoshis (Bitcoin et Mobile Money), BTC Shule, SIGHT Network, Free Tech Institute et BitDevs Gitega.\n\nAu-delà de l'entrepreneuriat, il s'engage dans le plaidoyer technologique et le leadership communautaire : depuis 2023, il est MARCOM Lead pour Students for Liberty, et il a organisé le Global Encryption Day à Bujumbura pour Free Tech Institute.\n\nSa philosophie : construire des systèmes numériques sûrs, maintenables et durables qui résolvent de vrais défis organisationnels, tout en favorisant l'innovation, la souveraineté numérique et l'excellence technique en Afrique. Leitmotiv : « Live and let live ».",
      skills: [
        "Ingénierie logicielle",
        "Architecture système",
        "Bitcoin & Lightning Network",
        "Fintech & inclusion financière",
        "Cloud & infrastructure",
        "Cybersécurité",
        "Intelligence artificielle",
        "Transformation digitale",
        "Gestion de projet IT",
      ],
      journey:
        "• Fondateur & Directeur Général — SIGHT Africa\n• Project Lead & System Architect — ACAT (crédit agricole, microfinance)\n• Créateur — MySatoshis (Bitcoin & Mobile Money)\n• Initiateur — BTC Shule (éducation Bitcoin)\n• Initiateur — Free Tech Institute\n• Fondateur — BitDevs Gitega\n• MARCOM Lead — Students for Liberty (depuis 2023)\n• Organisateur — Global Encryption Day, Bujumbura",
    },
    en: {
      role: "General Manager",
      bio: "Advaxe Ndayisenga is a software engineer, Bitcoin builder, IT manager and technology entrepreneur specialising in enterprise information systems, fintech, digital transformation and software architecture. He has strong experience designing, developing and deploying scalable solutions for financial institutions, companies, educational organisations and community initiatives.\n\nAs founder and General Manager of SIGHT Africa, he leads a technology company focused on software engineering, cloud infrastructure, cybersecurity, artificial intelligence and digital capacity building. He has driven several high-impact projects: ACAT (agricultural credit management for microfinance), MySatoshis (Bitcoin and Mobile Money), BTC Shule, SIGHT Network, Free Tech Institute and BitDevs Gitega.\n\nBeyond entrepreneurship, he is active in technology advocacy and community leadership: since 2023 he has served as MARCOM Lead for Students for Liberty, and he organised Global Encryption Day in Bujumbura for Free Tech Institute.\n\nHis philosophy: build secure, maintainable and sustainable digital systems that solve real organisational challenges while fostering innovation, digital sovereignty and technical excellence across Africa. Motto: \u201cLive and let live\u201d.",
      skills: [
        "Software engineering",
        "System architecture",
        "Bitcoin & Lightning Network",
        "Fintech & financial inclusion",
        "Cloud & infrastructure",
        "Cybersecurity",
        "Artificial intelligence",
        "Digital transformation",
        "IT project management",
      ],
      journey:
        "• Founder & General Manager — SIGHT Africa\n• Project Lead & System Architect — ACAT (agricultural credit, microfinance)\n• Creator — MySatoshis (Bitcoin & Mobile Money)\n• Initiator — BTC Shule (Bitcoin education)\n• Initiator — Free Tech Institute\n• Founder — BitDevs Gitega\n• MARCOM Lead — Students for Liberty (since 2023)\n• Organiser — Global Encryption Day, Bujumbura",
    },
    es: {
      role: "Director General",
      bio: "Advaxe Ndayisenga es ingeniero de software, builder de Bitcoin, IT Manager y emprendedor tecnológico, especializado en sistemas de información empresarial, fintech, transformación digital y arquitectura de software. Cuenta con una sólida experiencia en el diseño, desarrollo y despliegue de soluciones escalables para instituciones financieras, empresas, organizaciones educativas e iniciativas comunitarias.\n\nFundador y Director General de SIGHT Africa, dirige una empresa tecnológica dedicada a la ingeniería de software, la infraestructura en la nube, la ciberseguridad, la inteligencia artificial y el fortalecimiento de capacidades digitales. Ha liderado proyectos de alto impacto: ACAT (gestión del crédito agrícola para microfinanzas), MySatoshis (Bitcoin y Mobile Money), BTC Shule, SIGHT Network, Free Tech Institute y BitDevs Gitega.\n\nMás allá del emprendimiento, participa en la promoción tecnológica y el liderazgo comunitario: desde 2023 es MARCOM Lead de Students for Liberty y organizó el Global Encryption Day en Buyumbura para Free Tech Institute.\n\nSu filosofía: construir sistemas digitales seguros, mantenibles y sostenibles que resuelvan desafíos reales, impulsando la innovación, la soberanía digital y la excelencia técnica en África. Lema: «Live and let live».",
      skills: [
        "Ingeniería de software",
        "Arquitectura de sistemas",
        "Bitcoin y Lightning Network",
        "Fintech e inclusión financiera",
        "Nube e infraestructura",
        "Ciberseguridad",
        "Inteligencia artificial",
        "Transformación digital",
        "Gestión de proyectos TI",
      ],
      journey:
        "• Fundador y Director General — SIGHT Africa\n• Project Lead y arquitecto de sistemas — ACAT (crédito agrícola, microfinanzas)\n• Creador — MySatoshis (Bitcoin y Mobile Money)\n• Iniciador — BTC Shule (educación Bitcoin)\n• Iniciador — Free Tech Institute\n• Fundador — BitDevs Gitega\n• MARCOM Lead — Students for Liberty (desde 2023)\n• Organizador — Global Encryption Day, Buyumbura",
    },
    de: {
      role: "Geschäftsführer",
      bio: "Advaxe Ndayisenga ist Softwareingenieur, Bitcoin-Builder, IT-Manager und Technologieunternehmer mit Schwerpunkt auf Unternehmensinformationssystemen, Fintech, digitaler Transformation und Softwarearchitektur. Er verfügt über umfangreiche Erfahrung in Konzeption, Entwicklung und Einführung skalierbarer Lösungen für Finanzinstitute, Unternehmen, Bildungsorganisationen und Gemeinschaftsinitiativen.\n\nAls Gründer und Geschäftsführer von SIGHT Africa leitet er ein Technologieunternehmen für Softwareentwicklung, Cloud-Infrastruktur, Cybersicherheit, künstliche Intelligenz und digitalen Kompetenzaufbau. Er verantwortete mehrere wirkungsvolle Projekte: ACAT (Agrarkreditverwaltung für Mikrofinanz), MySatoshis (Bitcoin und Mobile Money), BTC Shule, SIGHT Network, Free Tech Institute und BitDevs Gitega.\n\nDarüber hinaus engagiert er sich in Technologie-Advocacy und Community-Leadership: seit 2023 als MARCOM Lead bei Students for Liberty; er organisierte den Global Encryption Day in Bujumbura für das Free Tech Institute.\n\nSeine Philosophie: sichere, wartbare und nachhaltige digitale Systeme bauen, die reale Herausforderungen lösen und Innovation, digitale Souveränität und technische Exzellenz in Afrika fördern. Leitmotiv: „Live and let live“.",
      skills: [
        "Softwareentwicklung",
        "Systemarchitektur",
        "Bitcoin & Lightning Network",
        "Fintech & finanzielle Inklusion",
        "Cloud & Infrastruktur",
        "Cybersicherheit",
        "Künstliche Intelligenz",
        "Digitale Transformation",
        "IT-Projektmanagement",
      ],
      journey:
        "• Gründer & Geschäftsführer — SIGHT Africa\n• Projektleiter & Systemarchitekt — ACAT (Agrarkredit, Mikrofinanz)\n• Entwickler — MySatoshis (Bitcoin & Mobile Money)\n• Initiator — BTC Shule (Bitcoin-Bildung)\n• Initiator — Free Tech Institute\n• Gründer — BitDevs Gitega\n• MARCOM Lead — Students for Liberty (seit 2023)\n• Organisator — Global Encryption Day, Bujumbura",
    },
    it: {
      role: "Direttore Generale",
      bio: "Advaxe Ndayisenga è ingegnere del software, builder Bitcoin, IT Manager e imprenditore tecnologico, specializzato in sistemi informativi aziendali, fintech, trasformazione digitale e architettura software. Vanta una solida esperienza nella progettazione, sviluppo e distribuzione di soluzioni scalabili per istituzioni finanziarie, imprese, organizzazioni educative e iniziative comunitarie.\n\nFondatore e Direttore Generale di SIGHT Africa, guida un'azienda tecnologica dedicata a ingegneria del software, infrastruttura cloud, cybersicurezza, intelligenza artificiale e rafforzamento delle competenze digitali. Ha guidato progetti ad alto impatto: ACAT (gestione del credito agricolo per la microfinanza), MySatoshis (Bitcoin e Mobile Money), BTC Shule, SIGHT Network, Free Tech Institute e BitDevs Gitega.\n\nOltre all'imprenditoria, è attivo nell'advocacy tecnologica e nella leadership comunitaria: dal 2023 è MARCOM Lead di Students for Liberty e ha organizzato il Global Encryption Day a Bujumbura per Free Tech Institute.\n\nLa sua filosofia: costruire sistemi digitali sicuri, manutenibili e sostenibili che risolvano sfide reali, promuovendo innovazione, sovranità digitale ed eccellenza tecnica in Africa. Motto: «Live and let live».",
      skills: [
        "Ingegneria del software",
        "Architettura di sistema",
        "Bitcoin e Lightning Network",
        "Fintech e inclusione finanziaria",
        "Cloud e infrastruttura",
        "Cybersicurezza",
        "Intelligenza artificiale",
        "Trasformazione digitale",
        "Gestione progetti IT",
      ],
      journey:
        "• Fondatore e Direttore Generale — SIGHT Africa\n• Project Lead e System Architect — ACAT (credito agricolo, microfinanza)\n• Creatore — MySatoshis (Bitcoin e Mobile Money)\n• Ideatore — BTC Shule (educazione Bitcoin)\n• Ideatore — Free Tech Institute\n• Fondatore — BitDevs Gitega\n• MARCOM Lead — Students for Liberty (dal 2023)\n• Organizzatore — Global Encryption Day, Bujumbura",
    },
    ja: {
      role: "代表取締役",
      bio: "アドヴァクス・ンダイセンガは、ソフトウェアエンジニア、Bitcoinビルダー、ITマネージャー、そしてテクノロジー起業家であり、企業情報システム、フィンテック、デジタルトランスフォーメーション、ソフトウェアアーキテクチャを専門としています。金融機関、企業、教育機関、地域イニシアティブ向けに拡張性の高いソリューションを設計・開発・導入してきた豊富な経験を持ちます。\n\nSIGHT Africa の創業者兼代表として、ソフトウェア開発、クラウドインフラ、サイバーセキュリティ、人工知能、デジタル人材育成に取り組む企業を率いています。ACAT（マイクロファイナンス向け農業融資管理）、MySatoshis（BitcoinとMobile Money）、BTC Shule、SIGHT Network、Free Tech Institute、BitDevs Gitega など、影響力の大きいプロジェクトを主導してきました。\n\n起業活動に加え、技術アドボカシーとコミュニティリーダーシップにも従事。2023年より Students for Liberty の MARCOM Lead を務め、Free Tech Institute のためにブジュンブラで Global Encryption Day を開催しました。\n\n理念は、実際の組織課題を解決する安全で保守しやすく持続可能なデジタルシステムを構築し、アフリカにおけるイノベーション、デジタル主権、技術的卓越性を促進すること。座右の銘は「Live and let live」。",
      skills: [
        "ソフトウェア工学",
        "システムアーキテクチャ",
        "Bitcoin・Lightning Network",
        "フィンテックと金融包摂",
        "クラウド・インフラ",
        "サイバーセキュリティ",
        "人工知能",
        "デジタル変革",
        "ITプロジェクト管理",
      ],
      journey:
        "• 創業者・代表取締役 — SIGHT Africa\n• プロジェクトリード兼システムアーキテクト — ACAT（農業融資・マイクロファイナンス）\n• 開発者 — MySatoshis（Bitcoin・Mobile Money）\n• 発起人 — BTC Shule（Bitcoin教育）\n• 発起人 — Free Tech Institute\n• 創設者 — BitDevs Gitega\n• MARCOM Lead — Students for Liberty（2023年〜）\n• 主催 — Global Encryption Day、ブジュンブラ",
    },
    sw: {
      role: "Mkurugenzi Mkuu",
      bio: "Advaxe Ndayisenga ni mhandisi wa programu, mjenzi wa Bitcoin, meneja wa TEHAMA na mjasiriamali wa teknolojia, mtaalamu wa mifumo ya taarifa za mashirika, fintech, mabadiliko ya kidijitali na usanifu wa programu. Ana uzoefu mkubwa wa kubuni, kuendeleza na kusimika suluhisho zinazokua kwa taasisi za fedha, makampuni, taasisi za elimu na jamii.\n\nKama mwanzilishi na Mkurugenzi Mkuu wa SIGHT Africa, anaongoza kampuni ya teknolojia inayojikita katika uhandisi wa programu, miundombinu ya wingu, usalama wa mtandao, akili bandia na kujenga uwezo wa kidijitali. Ameongoza miradi yenye athari kubwa: ACAT (usimamizi wa mikopo ya kilimo kwa taasisi ndogo za fedha), MySatoshis (Bitcoin na Mobile Money), BTC Shule, SIGHT Network, Free Tech Institute na BitDevs Gitega.\n\nZaidi ya ujasiriamali, anajishughulisha na utetezi wa teknolojia na uongozi wa jamii: tangu 2023 ni MARCOM Lead wa Students for Liberty, na aliandaa Global Encryption Day mjini Bujumbura kwa niaba ya Free Tech Institute.\n\nFalsafa yake: kujenga mifumo salama, endelevu na rahisi kudumisha inayotatua changamoto halisi, huku akikuza ubunifu, mamlaka ya kidijitali na ubora wa kiufundi barani Afrika. Kauli mbiu: \u201cLive and let live\u201d.",
      skills: [
        "Uhandisi wa programu",
        "Usanifu wa mifumo",
        "Bitcoin na Lightning Network",
        "Fintech na ujumuishwaji wa kifedha",
        "Wingu na miundombinu",
        "Usalama wa mtandao",
        "Akili bandia",
        "Mabadiliko ya kidijitali",
        "Usimamizi wa miradi ya TEHAMA",
      ],
      journey:
        "• Mwanzilishi na Mkurugenzi Mkuu — SIGHT Africa\n• Kiongozi wa mradi na mbunifu wa mifumo — ACAT (mikopo ya kilimo)\n• Muumbaji — MySatoshis (Bitcoin na Mobile Money)\n• Mwanzilishi — BTC Shule (elimu ya Bitcoin)\n• Mwanzilishi — Free Tech Institute\n• Mwanzilishi — BitDevs Gitega\n• MARCOM Lead — Students for Liberty (tangu 2023)\n• Mwandaaji — Global Encryption Day, Bujumbura",
    },
  },

  "Belin Carme IHORAHO": {
    fr: {
      role: "Directeur Administratif et Financier",
      bio: "Auditeur comptable et conseiller fiscal, Belin Carme IHORAHO possède une solide expérience dans la vérification des impôts acquise au sein de l'Office Burundais des Recettes (OBR). Il maîtrise les outils informatiques, la gestion de l'information et la planification de projets. Son engagement bénévole au sein de la Croix-Rouge témoigne de son sens des responsabilités et de sa volonté d'aller au service des autres. Il met aujourd'hui ses compétences et son expérience au service de SIGHT Africa pour garantir la rigueur administrative et financière de l'entreprise.",
      skills: [
        "Audit comptable",
        "Conseil fiscal",
        "Vérification des impôts",
        "Gestion financière",
        "Planification de projets",
        "Outils informatiques",
        "Engagement associatif",
      ],
      journey:
        "• Auditeur comptable et conseiller fiscal expérimenté\n• Vérification des impôts au sein de l'Office Burundais des Recettes (OBR)\n• Maîtrise des outils informatiques et de la gestion de l'information\n• Engagement bénévole à la Croix-Rouge",
    },
    en: {
      role: "Administrative and Financial Director",
      bio: "An accounting auditor and tax adviser, Belin Carme IHORAHO brings solid experience in tax auditing gained at the Burundi Revenue Authority (OBR). He is proficient with IT tools, information management and project planning. His volunteer work with the Red Cross reflects his sense of responsibility and his commitment to serving others. Today he puts his skills and experience at the service of SIGHT Africa to ensure the company's administrative and financial rigour.",
      skills: [
        "Accounting audit",
        "Tax advisory",
        "Tax auditing",
        "Financial management",
        "Project planning",
        "IT tools",
        "Community involvement",
      ],
      journey:
        "• Experienced accounting auditor and tax adviser\n• Tax auditing at the Burundi Revenue Authority (OBR)\n• Proficiency in IT tools and information management\n• Volunteer with the Red Cross",
    },
    es: {
      role: "Director Administrativo y Financiero",
      bio: "Auditor contable y asesor fiscal, Belin Carme IHORAHO cuenta con una sólida experiencia en la verificación de impuestos adquirida en la Oficina Burundesa de Ingresos (OBR). Domina las herramientas informáticas, la gestión de la información y la planificación de proyectos. Su labor voluntaria en la Cruz Roja refleja su sentido de la responsabilidad y su vocación de servicio. Hoy pone sus competencias al servicio de SIGHT Africa para garantizar el rigor administrativo y financiero de la empresa.",
      skills: [
        "Auditoría contable",
        "Asesoría fiscal",
        "Verificación de impuestos",
        "Gestión financiera",
        "Planificación de proyectos",
        "Herramientas informáticas",
        "Compromiso asociativo",
      ],
      journey:
        "• Auditor contable y asesor fiscal experimentado\n• Verificación de impuestos en la Oficina Burundesa de Ingresos (OBR)\n• Dominio de herramientas informáticas y gestión de la información\n• Voluntariado en la Cruz Roja",
    },
    de: {
      role: "Verwaltungs- und Finanzdirektor",
      bio: "Als Wirtschaftsprüfer und Steuerberater verfügt Belin Carme IHORAHO über fundierte Erfahrung in der Steuerprüfung, die er bei der burundischen Steuerbehörde (OBR) erworben hat. Er beherrscht IT-Werkzeuge, Informationsmanagement und Projektplanung. Sein ehrenamtliches Engagement beim Roten Kreuz zeugt von Verantwortungsbewusstsein und Dienstbereitschaft. Heute stellt er seine Kompetenzen in den Dienst von SIGHT Africa und sichert die administrative und finanzielle Sorgfalt des Unternehmens.",
      skills: [
        "Wirtschaftsprüfung",
        "Steuerberatung",
        "Steuerprüfung",
        "Finanzmanagement",
        "Projektplanung",
        "IT-Werkzeuge",
        "Ehrenamtliches Engagement",
      ],
      journey:
        "• Erfahrener Wirtschaftsprüfer und Steuerberater\n• Steuerprüfung bei der burundischen Steuerbehörde (OBR)\n• Beherrschung von IT-Werkzeugen und Informationsmanagement\n• Ehrenamt beim Roten Kreuz",
    },
    it: {
      role: "Direttore Amministrativo e Finanziario",
      bio: "Revisore contabile e consulente fiscale, Belin Carme IHORAHO possiede una solida esperienza nella verifica fiscale maturata presso l'Autorità delle Entrate del Burundi (OBR). Padroneggia gli strumenti informatici, la gestione delle informazioni e la pianificazione dei progetti. Il suo impegno volontario nella Croce Rossa testimonia il suo senso di responsabilità e la volontà di servire gli altri. Oggi mette le sue competenze al servizio di SIGHT Africa per garantire il rigore amministrativo e finanziario dell'azienda.",
      skills: [
        "Revisione contabile",
        "Consulenza fiscale",
        "Verifica fiscale",
        "Gestione finanziaria",
        "Pianificazione progetti",
        "Strumenti informatici",
        "Impegno associativo",
      ],
      journey:
        "• Revisore contabile e consulente fiscale esperto\n• Verifica fiscale presso l'Autorità delle Entrate del Burundi (OBR)\n• Padronanza degli strumenti informatici e della gestione delle informazioni\n• Volontariato presso la Croce Rossa",
    },
    ja: {
      role: "管理・財務ディレクター",
      bio: "会計監査人・税務コンサルタントであるベリン・カルメ・イホラホは、ブルンジ歳入庁（OBR）で培った税務調査の確かな経験を持っています。ITツール、情報管理、プロジェクト計画に精通しています。赤十字でのボランティア活動は、彼の責任感と他者に尽くす姿勢を示しています。現在は SIGHT Africa において、その専門性を活かし、管理・財務面の厳格な運営を担っています。",
      skills: [
        "会計監査",
        "税務コンサルティング",
        "税務調査",
        "財務管理",
        "プロジェクト計画",
        "ITツール",
        "地域貢献活動",
      ],
      journey:
        "• 経験豊富な会計監査人・税務コンサルタント\n• ブルンジ歳入庁（OBR）における税務調査\n• ITツールと情報管理の習熟\n• 赤十字でのボランティア活動",
    },
    sw: {
      role: "Mkurugenzi wa Utawala na Fedha",
      bio: "Akiwa mkaguzi wa hesabu na mshauri wa kodi, Belin Carme IHORAHO ana uzoefu mkubwa wa ukaguzi wa kodi aliopata katika Mamlaka ya Mapato ya Burundi (OBR). Ana ujuzi wa zana za TEHAMA, usimamizi wa taarifa na upangaji wa miradi. Kujitolea kwake katika Msalaba Mwekundu kunaonyesha uwajibikaji na nia ya kuwahudumia wengine. Leo anatumia ujuzi wake katika SIGHT Africa kuhakikisha nidhamu ya kiutawala na kifedha ya kampuni.",
      skills: [
        "Ukaguzi wa hesabu",
        "Ushauri wa kodi",
        "Ukaguzi wa kodi",
        "Usimamizi wa fedha",
        "Upangaji wa miradi",
        "Zana za TEHAMA",
        "Kujitolea kwa jamii",
      ],
      journey:
        "• Mkaguzi wa hesabu na mshauri wa kodi mwenye uzoefu\n• Ukaguzi wa kodi katika Mamlaka ya Mapato ya Burundi (OBR)\n• Ujuzi wa zana za TEHAMA na usimamizi wa taarifa\n• Kujitolea katika Msalaba Mwekundu",
    },
  },

  "NIYONGABO Zénon": {
    fr: {
      role: "Directeur Commercial",
      bio: "Né le 6 mars 1999 sur la colline Muzire (commune Gisagara, province de Buhumuza, Burundi), Zénon NIYONGABO est Directeur Commercial de SIGHT Africa. Bachelier en philosophie du Grand Séminaire Saint Curé d'Ars de Bujumbura (2022-2025), il met sa rigueur intellectuelle et son sens du service au cœur de la relation client : écoute des besoins, structuration des offres, développement commercial et communication.\n\nSon parcours, forgé par la persévérance et la résilience, l'a conduit à diriger et accompagner plusieurs initiatives entrepreneuriales et associatives au Burundi. Il croit que le développement passe autant par la technologie que par la transformation des mentalités.\n\nChez SIGHT Africa, il construit des partenariats durables et veille à ce que chaque solution numérique livrée réponde à une réalité concrète du terrain. Sa devise : chaque jour est une nouvelle occasion de devenir meilleur que la veille.",
      skills: [
        "Développement commercial",
        "Négociation & partenariats",
        "Communication institutionnelle",
        "Leadership & gestion d'équipe",
        "Entrepreneuriat des jeunes",
        "Relation client",
        "Philosophie & pensée critique",
      ],
      journey:
        "• Lycée Monseigneur Joachim Ruhuna de Muyaga — études secondaires\n• Grand Séminaire Saint Curé d'Ars de Bujumbura (2022-2025) — Bachelier en philosophie\n• Directeur Général — ZENONSHOPNET\n• Directeur Commercial — LA TECH BURUNDI COMPANY et SHIBUCO\n• Secrétaire Exécutif — Giving Hand Vocation\n• Service Communication — Société Pétrolière du Burundi (SOPEBU)\n• Directeur Commercial — SIGHT Africa",
    },
    en: {
      role: "Sales Director",
      bio: "Born on 6 March 1999 on the Muzire hill (Gisagara commune, Buhumuza province, Burundi), Zénon NIYONGABO is Sales Director of SIGHT Africa. A philosophy graduate of the Saint Curé d'Ars Major Seminary in Bujumbura (2022-2025), he places intellectual rigour and a spirit of service at the heart of client relationships: listening to needs, structuring offers, business development and communication.\n\nHis journey, shaped by perseverance and resilience, has led him to lead and support several entrepreneurial and community initiatives in Burundi. He believes development comes as much from technology as from changing mindsets.\n\nAt SIGHT Africa he builds lasting partnerships and ensures every digital solution delivered answers a concrete reality on the ground. His motto: every day is a new chance to be better than yesterday.",
      skills: [
        "Business development",
        "Negotiation & partnerships",
        "Institutional communication",
        "Leadership & team management",
        "Youth entrepreneurship",
        "Client relations",
        "Philosophy & critical thinking",
      ],
      journey:
        "• Monseigneur Joachim Ruhuna High School, Muyaga — secondary studies\n• Saint Curé d'Ars Major Seminary, Bujumbura (2022-2025) — Bachelor in philosophy\n• General Manager — ZENONSHOPNET\n• Sales Director — LA TECH BURUNDI COMPANY and SHIBUCO\n• Executive Secretary — Giving Hand Vocation\n• Communication department — Société Pétrolière du Burundi (SOPEBU)\n• Sales Director — SIGHT Africa",
    },
    es: {
      role: "Director Comercial",
      bio: "Nacido el 6 de marzo de 1999 en la colina Muzire (comuna de Gisagara, provincia de Buhumuza, Burundi), Zénon NIYONGABO es Director Comercial de SIGHT Africa. Licenciado en filosofía por el Gran Seminario Saint Curé d'Ars de Buyumbura (2022-2025), pone su rigor intelectual y su vocación de servicio en el centro de la relación con el cliente: escucha de necesidades, estructuración de ofertas, desarrollo comercial y comunicación.\n\nSu trayectoria, forjada en la perseverancia y la resiliencia, lo ha llevado a dirigir y acompañar varias iniciativas empresariales y asociativas en Burundi. Cree que el desarrollo pasa tanto por la tecnología como por la transformación de las mentalidades.\n\nEn SIGHT Africa construye alianzas duraderas y vela por que cada solución digital responda a una realidad concreta del terreno. Su lema: cada día es una nueva oportunidad de ser mejor que ayer.",
      skills: [
        "Desarrollo comercial",
        "Negociación y alianzas",
        "Comunicación institucional",
        "Liderazgo y gestión de equipos",
        "Emprendimiento juvenil",
        "Relación con clientes",
        "Filosofía y pensamiento crítico",
      ],
      journey:
        "• Liceo Monseigneur Joachim Ruhuna de Muyaga — estudios secundarios\n• Gran Seminario Saint Curé d'Ars de Buyumbura (2022-2025) — Licenciatura en filosofía\n• Director General — ZENONSHOPNET\n• Director Comercial — LA TECH BURUNDI COMPANY y SHIBUCO\n• Secretario Ejecutivo — Giving Hand Vocation\n• Comunicación — Société Pétrolière du Burundi (SOPEBU)\n• Director Comercial — SIGHT Africa",
    },
    de: {
      role: "Vertriebsdirektor",
      bio: "Geboren am 6. März 1999 auf dem Hügel Muzire (Gemeinde Gisagara, Provinz Buhumuza, Burundi), ist Zénon NIYONGABO Vertriebsdirektor von SIGHT Africa. Als Philosophie-Absolvent des Priesterseminars Saint Curé d'Ars in Bujumbura (2022-2025) stellt er intellektuelle Sorgfalt und Dienstbereitschaft in den Mittelpunkt der Kundenbeziehung: Bedarfsanalyse, Angebotsgestaltung, Geschäftsentwicklung und Kommunikation.\n\nSein von Ausdauer und Resilienz geprägter Werdegang führte ihn dazu, mehrere unternehmerische und gemeinnützige Initiativen in Burundi zu leiten und zu begleiten. Für ihn entsteht Entwicklung ebenso durch Technologie wie durch einen Wandel der Denkweisen.\n\nBei SIGHT Africa baut er langfristige Partnerschaften auf und stellt sicher, dass jede digitale Lösung einer konkreten Realität vor Ort entspricht. Sein Motto: Jeder Tag ist eine neue Gelegenheit, besser zu werden als gestern.",
      skills: [
        "Geschäftsentwicklung",
        "Verhandlung & Partnerschaften",
        "Institutionelle Kommunikation",
        "Führung & Teammanagement",
        "Jugendunternehmertum",
        "Kundenbeziehungen",
        "Philosophie & kritisches Denken",
      ],
      journey:
        "• Lycée Monseigneur Joachim Ruhuna, Muyaga — Sekundarschule\n• Priesterseminar Saint Curé d'Ars, Bujumbura (2022-2025) — Bachelor in Philosophie\n• Geschäftsführer — ZENONSHOPNET\n• Vertriebsdirektor — LA TECH BURUNDI COMPANY und SHIBUCO\n• Exekutivsekretär — Giving Hand Vocation\n• Kommunikation — Société Pétrolière du Burundi (SOPEBU)\n• Vertriebsdirektor — SIGHT Africa",
    },
    it: {
      role: "Direttore Commerciale",
      bio: "Nato il 6 marzo 1999 sulla collina Muzire (comune di Gisagara, provincia di Buhumuza, Burundi), Zénon NIYONGABO è Direttore Commerciale di SIGHT Africa. Laureato in filosofia presso il Grande Seminario Saint Curé d'Ars di Bujumbura (2022-2025), pone il rigore intellettuale e il senso del servizio al centro della relazione con il cliente: ascolto dei bisogni, strutturazione delle offerte, sviluppo commerciale e comunicazione.\n\nIl suo percorso, forgiato da perseveranza e resilienza, lo ha portato a guidare e sostenere diverse iniziative imprenditoriali e associative in Burundi. Crede che lo sviluppo passi tanto dalla tecnologia quanto dalla trasformazione delle mentalità.\n\nIn SIGHT Africa costruisce partnership durature e assicura che ogni soluzione digitale risponda a una realtà concreta sul campo. Il suo motto: ogni giorno è una nuova occasione per essere migliori di ieri.",
      skills: [
        "Sviluppo commerciale",
        "Negoziazione e partnership",
        "Comunicazione istituzionale",
        "Leadership e gestione del team",
        "Imprenditoria giovanile",
        "Relazione con i clienti",
        "Filosofia e pensiero critico",
      ],
      journey:
        "• Liceo Monseigneur Joachim Ruhuna di Muyaga — studi secondari\n• Grande Seminario Saint Curé d'Ars di Bujumbura (2022-2025) — Laurea in filosofia\n• Direttore Generale — ZENONSHOPNET\n• Direttore Commerciale — LA TECH BURUNDI COMPANY e SHIBUCO\n• Segretario Esecutivo — Giving Hand Vocation\n• Comunicazione — Société Pétrolière du Burundi (SOPEBU)\n• Direttore Commerciale — SIGHT Africa",
    },
    ja: {
      role: "営業ディレクター",
      bio: "1999年3月6日、ブルンジのブフムザ県ギサガラ郡ムジレ丘で生まれたゼノン・ニヨンガボは、SIGHT Africa の営業ディレクターです。ブジュンブラのサン・キュレ・ダルス大神学校で哲学の学士号を取得（2022-2025年）し、知的な厳密さと奉仕の精神を顧客対応の中心に据えています。ニーズの傾聴、提案の設計、事業開発、コミュニケーションを担当します。\n\n忍耐と回復力に培われた歩みの中で、ブルンジにおける複数の起業・地域活動を主導・支援してきました。発展は技術と同じく人々の意識の変革によってもたらされると考えています。\n\nSIGHT Africa では持続的なパートナーシップを構築し、提供するすべてのデジタルソリューションが現場の具体的な課題に応えるよう努めています。信条は「毎日が昨日より良くなるための新しい機会」。",
      skills: [
        "事業開発",
        "交渉・パートナーシップ",
        "対外コミュニケーション",
        "リーダーシップ・チーム運営",
        "若者の起業支援",
        "顧客対応",
        "哲学・批判的思考",
      ],
      journey:
        "• ムヤガのモンセニョール・ジョアキム・ルフナ高校 — 中等教育\n• ブジュンブラ サン・キュレ・ダルス大神学校（2022-2025年） — 哲学学士\n• 代表 — ZENONSHOPNET\n• 営業ディレクター — LA TECH BURUNDI COMPANY、SHIBUCO\n• 事務局長 — Giving Hand Vocation\n• 広報部門 — ブルンジ石油公社（SOPEBU）\n• 営業ディレクター — SIGHT Africa",
    },
    sw: {
      role: "Mkurugenzi wa Biashara",
      bio: "Alizaliwa tarehe 6 Machi 1999 katika kilima cha Muzire (komuni ya Gisagara, jimbo la Buhumuza, Burundi), Zénon NIYONGABO ni Mkurugenzi wa Biashara wa SIGHT Africa. Ni mhitimu wa shahada ya falsafa kutoka Seminari Kuu ya Saint Curé d'Ars mjini Bujumbura (2022-2025), na anaweka umakini wa kifikra na moyo wa kuhudumia katikati ya uhusiano na wateja: kusikiliza mahitaji, kuandaa ofa, kukuza biashara na mawasiliano.\n\nSafari yake, iliyojengwa kwa uvumilivu na ustahimilivu, imemwezesha kuongoza na kusaidia miradi kadhaa ya kijasiriamali na kijamii nchini Burundi. Anaamini maendeleo yanategemea teknolojia pamoja na mabadiliko ya fikra.\n\nKatika SIGHT Africa anajenga ushirikiano endelevu na kuhakikisha kila suluhisho la kidijitali linajibu hali halisi ya mazingira. Kauli yake: kila siku ni fursa mpya ya kuwa bora kuliko jana.",
      skills: [
        "Ukuzaji wa biashara",
        "Majadiliano na ushirikiano",
        "Mawasiliano ya kitaasisi",
        "Uongozi na usimamizi wa timu",
        "Ujasiriamali wa vijana",
        "Uhusiano na wateja",
        "Falsafa na fikra kina",
      ],
      journey:
        "• Lycée Monseigneur Joachim Ruhuna, Muyaga — masomo ya sekondari\n• Seminari Kuu ya Saint Curé d'Ars, Bujumbura (2022-2025) — Shahada ya falsafa\n• Mkurugenzi Mkuu — ZENONSHOPNET\n• Mkurugenzi wa Biashara — LA TECH BURUNDI COMPANY na SHIBUCO\n• Katibu Mtendaji — Giving Hand Vocation\n• Idara ya Mawasiliano — Société Pétrolière du Burundi (SOPEBU)\n• Mkurugenzi wa Biashara — SIGHT Africa",
    },
  },
};

export const getTeamEntry = (fullName: string, lang: string): TeamEntry | undefined => {
  const byName = teamContent[fullName];
  if (!byName) return undefined;
  const base = (lang || "fr").split("-")[0] as TeamLang;
  return byName[base] ?? byName.fr;
};
