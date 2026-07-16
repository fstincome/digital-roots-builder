// Multilingual portfolio content keyed by canonical URL.
// Falls back to the DB `title` / `description` when a link is not listed here.

export type PortfolioLang = "fr" | "en" | "es" | "de" | "it" | "ja" | "sw";

type Entry = { title: string; description: string };

export const portfolioContent: Record<string, Partial<Record<PortfolioLang, Entry>>> = {
  "https://www.freeti.org": {
    fr: {
      title: "Free Tech Institute (FREETI)",
      description:
        "Organisation à but non lucratif dédiée à la promotion de l'inclusion digitale et de la liberté technologique au Burundi. FREETI connecte et forme la jeunesse burundaise à travers des ateliers, des bootcamps, des hackathons et des conférences. En développant des compétences pratiques en informatique, sécurité numérique et technologies décentralisées, l'institut réduit la fracture numérique. Il encourage également l'innovation et l'entrepreneuriat autonome, faisant de la technologie un véritable levier de progrès socio-économique durable pour la communauté.",
    },
    en: {
      title: "Free Tech Institute (FREETI)",
      description:
        "A non-profit organization dedicated to promoting digital inclusion and technological freedom in Burundi. FREETI connects and trains Burundian youth through workshops, bootcamps, hackathons and conferences. By building practical skills in IT, digital security and decentralized technologies, the institute helps bridge the digital divide. It also fosters innovation and independent entrepreneurship, turning technology into a real driver of sustainable socio-economic progress for the community.",
    },
    es: {
      title: "Free Tech Institute (FREETI)",
      description:
        "Organización sin fines de lucro dedicada a promover la inclusión digital y la libertad tecnológica en Burundi. FREETI conecta y forma a la juventud burundesa mediante talleres, bootcamps, hackatones y conferencias. Al desarrollar habilidades prácticas en informática, seguridad digital y tecnologías descentralizadas, reduce la brecha digital. También impulsa la innovación y el emprendimiento autónomo, convirtiendo la tecnología en un motor real de progreso socioeconómico sostenible.",
    },
    de: {
      title: "Free Tech Institute (FREETI)",
      description:
        "Gemeinnützige Organisation zur Förderung digitaler Inklusion und technologischer Freiheit in Burundi. FREETI verbindet und schult die burundische Jugend durch Workshops, Bootcamps, Hackathons und Konferenzen. Durch praxisnahe Kompetenzen in IT, digitaler Sicherheit und dezentralen Technologien schließt das Institut die digitale Kluft. Es fördert Innovation und eigenständiges Unternehmertum und macht Technologie zu einem echten Motor nachhaltigen sozioökonomischen Fortschritts.",
    },
    it: {
      title: "Free Tech Institute (FREETI)",
      description:
        "Organizzazione non profit dedicata alla promozione dell'inclusione digitale e della libertà tecnologica in Burundi. FREETI collega e forma i giovani burundesi tramite workshop, bootcamp, hackathon e conferenze. Sviluppando competenze pratiche in informatica, sicurezza digitale e tecnologie decentralizzate, riduce il divario digitale. Promuove inoltre l'innovazione e l'imprenditoria autonoma, rendendo la tecnologia una vera leva di progresso socio-economico sostenibile.",
    },
    ja: {
      title: "Free Tech Institute (FREETI)",
      description:
        "ブルンジにおけるデジタル・インクルージョンと技術的自由の推進に取り組む非営利団体。FREETIはワークショップ、ブートキャンプ、ハッカソン、カンファレンスを通じてブルンジの若者をつなぎ、育成しています。IT、デジタルセキュリティ、分散型技術の実践的スキルを養い、デジタル格差を縮小。さらに、革新と自立した起業家精神を促し、技術を持続可能な社会経済的発展の真の原動力へと変えています。",
    },
    sw: {
      title: "Free Tech Institute (FREETI)",
      description:
        "Shirika lisilo la faida linalojitolea kukuza ujumuishaji wa kidijitali na uhuru wa kiteknolojia nchini Burundi. FREETI huunganisha na kufundisha vijana wa Burundi kupitia warsha, bootcamps, hackathons na mikutano. Kwa kujenga ujuzi wa vitendo katika TEHAMA, usalama wa kidijitali na teknolojia za ugatuzi, taasisi hii hupunguza pengo la kidijitali. Pia hukuza ubunifu na ujasiriamali huru, ikifanya teknolojia kuwa nguzo halisi ya maendeleo endelevu ya kijamii na kiuchumi.",
    },
  },

  "https://www.edi.bi": {
    fr: {
      title: "EDI COMPANY SA",
      description:
        "Entreprise agro-industrielle et cabinet de consultance moderne engagé dans le développement durable et le commerce équitable au Burundi. EDI COMPANY excelle dans la production, le traitement et l'exportation de café burundais d'exception de manière éco-responsable. Elle collabore activement avec des centaines de planteurs locaux à travers des pratiques agroforestières. Parallèlement, l'entreprise déploie des services de consultance technique et des programmes de formation intégrant les nouvelles technologies (NTIC) pour moderniser la collecte de données agricoles et autonomiser les coopératives.",
    },
    en: {
      title: "EDI COMPANY SA",
      description:
        "A modern agro-industrial company and consultancy firm committed to sustainable development and fair trade in Burundi. EDI COMPANY excels in producing, processing and exporting exceptional Burundian coffee in an eco-responsible way. It actively partners with hundreds of local growers through agroforestry practices. In parallel, the company delivers technical consultancy and training programs leveraging ICTs to modernize agricultural data collection and empower cooperatives.",
    },
    es: {
      title: "EDI COMPANY SA",
      description:
        "Empresa agroindustrial y consultoría moderna comprometida con el desarrollo sostenible y el comercio justo en Burundi. EDI COMPANY sobresale en la producción, transformación y exportación de café burundés de excepción de forma ecorresponsable. Colabora activamente con cientos de productores locales mediante prácticas agroforestales. Además, ofrece servicios de consultoría técnica y programas de formación con TIC para modernizar la recopilación de datos agrícolas y empoderar a las cooperativas.",
    },
    de: {
      title: "EDI COMPANY SA",
      description:
        "Modernes agroindustrielles Unternehmen und Beratungsbüro, das sich in Burundi für nachhaltige Entwicklung und fairen Handel engagiert. EDI COMPANY überzeugt in Produktion, Verarbeitung und Export von hochwertigem burundischem Kaffee auf umweltbewusste Weise. Sie arbeitet aktiv mit Hunderten lokaler Pflanzer über Agroforstwirtschaft zusammen. Zudem bietet sie technische Beratung und Schulungsprogramme mit modernen IKT, um die landwirtschaftliche Datenerhebung zu modernisieren und Kooperativen zu stärken.",
    },
    it: {
      title: "EDI COMPANY SA",
      description:
        "Azienda agroindustriale e società di consulenza moderna impegnata nello sviluppo sostenibile e nel commercio equo in Burundi. EDI COMPANY eccelle nella produzione, lavorazione ed esportazione di caffè burundese d'eccellenza in modo eco-responsabile. Collabora attivamente con centinaia di coltivatori locali tramite pratiche agroforestali. Offre inoltre consulenza tecnica e programmi di formazione integrando le nuove tecnologie (TIC) per modernizzare la raccolta dei dati agricoli e rafforzare le cooperative.",
    },
    ja: {
      title: "EDI COMPANY SA",
      description:
        "ブルンジで持続可能な開発とフェアトレードに取り組む近代的な農業関連企業兼コンサルティング会社。EDI COMPANYは、環境に配慮した方法でブルンジ産の高品質コーヒーの生産、加工、輸出に優れています。アグロフォレストリーを通じて数百の地元農家と連携。さらに、ICTを活用した技術コンサルティングや研修プログラムを展開し、農業データ収集の近代化と協同組合の強化を推進しています。",
    },
    sw: {
      title: "EDI COMPANY SA",
      description:
        "Kampuni ya kisasa ya kilimo-viwanda na ushauri iliyojitolea kwa maendeleo endelevu na biashara ya haki nchini Burundi. EDI COMPANY inafanikiwa katika uzalishaji, usindikaji na uuzaji nje wa kahawa bora ya Burundi kwa njia rafiki kwa mazingira. Inashirikiana na mamia ya wakulima wa ndani kupitia mifumo ya kilimo mseto. Pia hutoa huduma za ushauri wa kiufundi na programu za mafunzo zinazotumia TEHAMA kuboresha ukusanyaji wa data za kilimo na kuimarisha vyama vya ushirika.",
    },
  },

  "https://www.cnacburundi.bi": {
    fr: {
      title: "CNAC MURIMAW'ISANGI",
      description:
        "Organisation nationale dédiée au développement de la filière caféicole et à la défense des intérêts des caféiculteurs au Burundi. Elle œuvre activement pour l'amélioration de la qualité de la production du café burundais, le renforcement des capacités des coopératives agricoles et la promotion du commerce équitable. À travers des actions de plaidoyer, de communication et un accompagnement technique de proximité, elle fédère les producteurs locaux pour assurer une filière café durable, performante, transparente et génératrice de revenus équitables.",
    },
    en: {
      title: "CNAC MURIMAW'ISANGI",
      description:
        "National organization dedicated to developing the coffee sector and defending the interests of coffee farmers in Burundi. It actively works to improve the quality of Burundian coffee production, strengthen the capacities of agricultural cooperatives and promote fair trade. Through advocacy, communication and close technical support, it unites local growers to build a sustainable, high-performing, transparent coffee industry that generates equitable income.",
    },
    es: {
      title: "CNAC MURIMAW'ISANGI",
      description:
        "Organización nacional dedicada al desarrollo del sector cafetero y a la defensa de los intereses de los caficultores en Burundi. Trabaja para mejorar la calidad del café burundés, reforzar las capacidades de las cooperativas agrícolas y promover el comercio justo. A través de la incidencia, la comunicación y el acompañamiento técnico cercano, une a los productores locales para asegurar una cadena cafetera sostenible, eficaz, transparente y generadora de ingresos justos.",
    },
    de: {
      title: "CNAC MURIMAW'ISANGI",
      description:
        "Nationale Organisation zur Förderung des Kaffeesektors und zur Verteidigung der Interessen der Kaffeebauern in Burundi. Sie setzt sich für eine bessere Qualität des burundischen Kaffees, die Stärkung landwirtschaftlicher Kooperativen und fairen Handel ein. Durch Advocacy, Kommunikation und praxisnahe technische Begleitung bündelt sie die lokalen Erzeuger und schafft einen nachhaltigen, leistungsfähigen und transparenten Kaffeesektor mit gerechten Einkommen.",
    },
    it: {
      title: "CNAC MURIMAW'ISANGI",
      description:
        "Organizzazione nazionale dedicata allo sviluppo della filiera del caffè e alla difesa degli interessi dei caficoltori in Burundi. Opera per migliorare la qualità del caffè burundese, rafforzare le cooperative agricole e promuovere il commercio equo. Attraverso advocacy, comunicazione e supporto tecnico di prossimità, unisce i produttori locali per una filiera del caffè sostenibile, performante, trasparente e generatrice di redditi equi.",
    },
    ja: {
      title: "CNAC MURIMAW'ISANGI",
      description:
        "ブルンジのコーヒー産業の発展とコーヒー生産者の利益擁護に取り組む全国組織。ブルンジ産コーヒーの品質向上、農業協同組合の能力強化、フェアトレードの推進に積極的に取り組んでいます。アドボカシー、コミュニケーション、現場に密着した技術支援を通じて、地元生産者を結集し、持続可能で高性能かつ透明性が高く、公平な収入を生むコーヒー産業の構築を目指します。",
    },
    sw: {
      title: "CNAC MURIMAW'ISANGI",
      description:
        "Shirika la kitaifa lililojitolea kuendeleza sekta ya kahawa na kutetea maslahi ya wakulima wa kahawa nchini Burundi. Linafanya kazi kuboresha ubora wa kahawa ya Burundi, kuimarisha uwezo wa vyama vya ushirika na kukuza biashara ya haki. Kupitia utetezi, mawasiliano na msaada wa kiufundi wa karibu, huunganisha wazalishaji wa ndani ili kujenga sekta ya kahawa endelevu, yenye ufanisi, uwazi na inayozalisha mapato ya haki.",
    },
  },

  "https://www.instituteforeconomicsandentreprises.org": {
    fr: {
      title: "Institute for Economics and Enterprises",
      description:
        "Think tank et organisme de formation dédié à la promotion de la liberté économique, de l'entrepreneuriat et du développement des compétences en gestion au Burundi. L'institut mène des recherches, produit des analyses économiques et propose des programmes de formation ciblant les jeunes professionnels, les entrepreneurs et les petites entreprises. Son but est d'encourager un climat des affaires favorable, de stimuler l'innovation locale et de vulgariser les principes de l'économie de marché comme solutions clés pour réduire la pauvreté.",
    },
    en: {
      title: "Institute for Economics and Enterprises",
      description:
        "A think tank and training organization dedicated to promoting economic freedom, entrepreneurship and management skills in Burundi. The institute conducts research, publishes economic analyses and delivers training programs for young professionals, entrepreneurs and small businesses. Its goal is to foster a favorable business climate, stimulate local innovation and popularize the principles of a market economy as key solutions to reduce poverty.",
    },
    es: {
      title: "Institute for Economics and Enterprises",
      description:
        "Think tank y organismo de formación dedicado a promover la libertad económica, el emprendimiento y el desarrollo de competencias de gestión en Burundi. Realiza investigaciones, publica análisis económicos y ofrece programas de formación para jóvenes profesionales, emprendedores y pequeñas empresas. Busca fomentar un clima favorable a los negocios, estimular la innovación local y divulgar los principios de la economía de mercado como soluciones para reducir la pobreza.",
    },
    de: {
      title: "Institute for Economics and Enterprises",
      description:
        "Think Tank und Bildungseinrichtung zur Förderung wirtschaftlicher Freiheit, unternehmerischen Handelns und von Managementkompetenzen in Burundi. Das Institut betreibt Forschung, veröffentlicht Wirtschaftsanalysen und bietet Schulungsprogramme für junge Fachkräfte, Unternehmer und kleine Unternehmen. Ziel ist es, ein günstiges Geschäftsklima zu schaffen, lokale Innovation anzuregen und die Prinzipien der Marktwirtschaft als Schlüssel zur Armutsbekämpfung zu vermitteln.",
    },
    it: {
      title: "Institute for Economics and Enterprises",
      description:
        "Think tank e organismo di formazione dedicato alla promozione della libertà economica, dell'imprenditorialità e delle competenze manageriali in Burundi. Conduce ricerche, pubblica analisi economiche e propone programmi formativi per giovani professionisti, imprenditori e piccole imprese. Mira a favorire un clima imprenditoriale positivo, stimolare l'innovazione locale e divulgare i principi dell'economia di mercato come soluzioni chiave per ridurre la povertà.",
    },
    ja: {
      title: "Institute for Economics and Enterprises",
      description:
        "ブルンジにおける経済的自由、起業家精神、マネジメントスキルの育成を目指すシンクタンク兼研修機関。研究の実施、経済分析の発表、若手専門家、起業家、中小企業向けの研修プログラムを提供します。ビジネスに有利な環境の醸成、地域のイノベーション促進、そして貧困削減の鍵として市場経済の原則を広めることを目的としています。",
    },
    sw: {
      title: "Institute for Economics and Enterprises",
      description:
        "Kituo cha fikra na taasisi ya mafunzo iliyojitolea kukuza uhuru wa kiuchumi, ujasiriamali na ujuzi wa usimamizi nchini Burundi. Hufanya utafiti, huchapisha uchambuzi wa kiuchumi na hutoa mafunzo kwa wataalamu wachanga, wajasiriamali na biashara ndogo. Lengo ni kuunda mazingira mazuri ya biashara, kuchochea ubunifu wa ndani na kueneza kanuni za uchumi wa soko kama suluhu muhimu za kupunguza umaskini.",
    },
  },

  "https://www.greengold.bi": {
    fr: {
      title: "Green Gold Burundi",
      description:
        "Entreprise agro-industrielle spécialisée dans la production et le conditionnement d'avocats de qualité supérieure au Burundi, notamment les variétés Hass et Fuerte. Engagée dans une agriculture 100 % bio et naturelle, l'entreprise gère des pépinières modernes, fournit des jeunes plants vigoureux et accompagne les agriculteurs locaux. Grâce à un processus de conditionnement certifié préservant la fraîcheur, Green Gold Burundi valorise le terroir burundais et ouvre de nouvelles opportunités d'exportation pour le secteur des fruits frais sur le marché international.",
    },
    en: {
      title: "Green Gold Burundi",
      description:
        "An agro-industrial company specialized in growing and packing premium avocados in Burundi, including the Hass and Fuerte varieties. Committed to 100% organic and natural farming, it operates modern nurseries, supplies vigorous young plants and supports local farmers. Through a certified packing process that preserves freshness, Green Gold Burundi showcases the Burundian terroir and opens new export opportunities for the fresh fruit sector on the international market.",
    },
    es: {
      title: "Green Gold Burundi",
      description:
        "Empresa agroindustrial especializada en la producción y el envasado de aguacates de alta calidad en Burundi, especialmente las variedades Hass y Fuerte. Comprometida con una agricultura 100 % orgánica y natural, gestiona viveros modernos, suministra plántulas vigorosas y acompaña a los agricultores locales. Con un proceso de envasado certificado que conserva la frescura, Green Gold Burundi pone en valor el terruño burundés y abre nuevas oportunidades de exportación en el sector de frutas frescas.",
    },
    de: {
      title: "Green Gold Burundi",
      description:
        "Agroindustrielles Unternehmen mit Fokus auf Anbau und Verpackung hochwertiger Avocados in Burundi, insbesondere Hass und Fuerte. Verpflichtet zu 100 % biologischer und natürlicher Landwirtschaft, betreibt es moderne Baumschulen, liefert kräftige Jungpflanzen und begleitet lokale Landwirte. Dank eines zertifizierten Verpackungsprozesses zur Frischeerhaltung stellt Green Gold Burundi das burundische Terroir heraus und eröffnet neue Exportchancen im Frischobstsektor.",
    },
    it: {
      title: "Green Gold Burundi",
      description:
        "Azienda agroindustriale specializzata nella produzione e nel confezionamento di avocado di alta qualità in Burundi, in particolare le varietà Hass e Fuerte. Impegnata in un'agricoltura 100% biologica e naturale, gestisce vivai moderni, fornisce piante giovani vigorose e supporta gli agricoltori locali. Grazie a un processo di confezionamento certificato che preserva la freschezza, Green Gold Burundi valorizza il terroir burundese e apre nuove opportunità di esportazione nel settore della frutta fresca.",
    },
    ja: {
      title: "Green Gold Burundi",
      description:
        "ブルンジで高品質なアボカド、特にハス種とフエルテ種の栽培と梱包を専門とする農業関連企業。100%オーガニックかつ自然な農業に取り組み、近代的な苗床を運営し、丈夫な若木を供給し、地元農家を支援しています。鮮度を保つ認証済みの梱包工程により、Green Gold Burundiはブルンジの土壌の価値を高め、国際市場の生鮮果物分野で新たな輸出機会を切り拓いています。",
    },
    sw: {
      title: "Green Gold Burundi",
      description:
        "Kampuni ya kilimo-viwanda inayobobea katika uzalishaji na ufungashaji wa parachichi bora nchini Burundi, hasa aina za Hass na Fuerte. Ikijitolea kwa kilimo cha asilia 100% na hai, huendesha vitalu vya kisasa, hutoa miche imara na huwasaidia wakulima wa ndani. Kupitia mchakato wa ufungashaji ulioidhinishwa unaohifadhi ubichi, Green Gold Burundi huinua thamani ya udongo wa Burundi na kufungua fursa mpya za uuzaji nje wa matunda mabichi katika soko la kimataifa.",
    },
  },

  "https://www.emsi.bi": {
    fr: {
      title: "EMSI (Entreprise de Maintenance, Services et Informatique)",
      description:
        "Fournisseur de solutions technologiques au Burundi, spécialisé dans la maintenance technique, le support informatique et les services d'intégration réseau pour les entreprises et les institutions. EMSI accompagne la transformation digitale locale en proposant des services d'ingénierie logicielle, de gestion d'infrastructures informatiques et de maintenance préventive et curative de systèmes technologiques. Son expertise permet aux organisations d'optimiser leur outil informatique, d'assurer la continuité de leurs opérations et de sécuriser leurs données environnementales.",
    },
    en: {
      title: "EMSI (Maintenance, Services and IT Company)",
      description:
        "Technology solutions provider in Burundi, specialized in technical maintenance, IT support and network integration services for companies and institutions. EMSI supports local digital transformation with software engineering, IT infrastructure management and preventive and corrective maintenance of technology systems. Its expertise helps organizations optimize their IT tools, ensure business continuity and secure their operational data.",
    },
    es: {
      title: "EMSI (Empresa de Mantenimiento, Servicios e Informática)",
      description:
        "Proveedor de soluciones tecnológicas en Burundi, especializado en mantenimiento técnico, soporte informático e integración de redes para empresas e instituciones. EMSI acompaña la transformación digital local con ingeniería de software, gestión de infraestructuras TI y mantenimiento preventivo y correctivo de sistemas tecnológicos. Su experiencia permite a las organizaciones optimizar sus herramientas TI, asegurar la continuidad de sus operaciones y proteger sus datos.",
    },
    de: {
      title: "EMSI (Unternehmen für Wartung, Services und IT)",
      description:
        "Anbieter von Technologielösungen in Burundi, spezialisiert auf technische Wartung, IT-Support und Netzwerkintegration für Unternehmen und Institutionen. EMSI begleitet die lokale Digitalisierung mit Softwareentwicklung, IT-Infrastrukturmanagement sowie präventiver und kurativer Wartung technologischer Systeme. Die Expertise hilft Organisationen, ihre IT zu optimieren, die Geschäftskontinuität zu sichern und ihre Daten zu schützen.",
    },
    it: {
      title: "EMSI (Impresa di Manutenzione, Servizi e Informatica)",
      description:
        "Fornitore di soluzioni tecnologiche in Burundi, specializzato in manutenzione tecnica, supporto informatico e integrazione di rete per aziende e istituzioni. EMSI accompagna la trasformazione digitale locale con servizi di ingegneria del software, gestione delle infrastrutture IT e manutenzione preventiva e correttiva dei sistemi tecnologici. La sua competenza aiuta le organizzazioni a ottimizzare gli strumenti IT, garantire la continuità operativa e proteggere i dati.",
    },
    ja: {
      title: "EMSI(保守・サービス・IT企業)",
      description:
        "ブルンジのテクノロジーソリューション企業で、企業や機関向けの技術保守、IT サポート、ネットワーク統合サービスを専門としています。EMSIはソフトウェアエンジニアリング、ITインフラ管理、テクノロジーシステムの予防・修復保守を通じて地域のデジタル変革を支援。組織のIT環境の最適化、業務継続性の確保、データセキュリティを実現します。",
    },
    sw: {
      title: "EMSI (Kampuni ya Matengenezo, Huduma na TEHAMA)",
      description:
        "Mtoa suluhisho za teknolojia nchini Burundi, mwenye utaalamu wa matengenezo ya kiufundi, msaada wa TEHAMA na huduma za muunganiko wa mtandao kwa makampuni na taasisi. EMSI husaidia mabadiliko ya kidijitali ya ndani kwa uhandisi wa programu, usimamizi wa miundombinu ya TEHAMA na matengenezo ya kinga na tiba ya mifumo ya teknolojia. Utaalamu wake huwasaidia mashirika kuboresha zana zao, kuhakikisha mwendelezo wa shughuli na kulinda data zao.",
    },
  },

  "https://www.odedim.org": {
    fr: {
      title: "ODEDIM Caritas Muyinga",
      description:
        "Organisation diocésaine engagée dans l'aide humanitaire, l'entraide sociale et le développement intégral au nord du Burundi. L'ODEDIM mène des projets multisectoriels touchant la sécurité alimentaire, l'accès à l'eau potable, la santé nutritionnelle et la cohésion sociale. Elle intervient activement auprès des communautés vulnérables et des réfugiés à travers des programmes d'assistance d'urgence, de réconciliation et de promotion de la communication non violente (CNV), contribuant ainsi durablement à restaurer la dignité humaine et à édifier une paix solide.",
    },
    en: {
      title: "ODEDIM Caritas Muyinga",
      description:
        "A diocesan organization engaged in humanitarian aid, social solidarity and integral development in northern Burundi. ODEDIM runs multi-sector projects covering food security, access to safe water, nutritional health and social cohesion. It actively works with vulnerable communities and refugees through emergency assistance, reconciliation and nonviolent communication (NVC) programs, sustainably contributing to restoring human dignity and building lasting peace.",
    },
    es: {
      title: "ODEDIM Caritas Muyinga",
      description:
        "Organización diocesana comprometida con la ayuda humanitaria, la solidaridad social y el desarrollo integral en el norte de Burundi. ODEDIM lleva a cabo proyectos multisectoriales en seguridad alimentaria, acceso al agua potable, salud nutricional y cohesión social. Interviene junto a comunidades vulnerables y refugiados mediante programas de asistencia de emergencia, reconciliación y comunicación no violenta (CNV), contribuyendo de forma sostenible a restaurar la dignidad humana y a construir una paz sólida.",
    },
    de: {
      title: "ODEDIM Caritas Muyinga",
      description:
        "Diözesane Organisation, die sich in Nord-Burundi für humanitäre Hilfe, soziale Solidarität und ganzheitliche Entwicklung einsetzt. ODEDIM führt multisektorale Projekte zu Ernährungssicherheit, Zugang zu Trinkwasser, Ernährungsgesundheit und sozialem Zusammenhalt durch. Sie unterstützt aktiv gefährdete Gemeinschaften und Flüchtlinge mit Nothilfe-, Versöhnungs- und Programmen zur gewaltfreien Kommunikation (GFK) und trägt so nachhaltig zur Wiederherstellung menschlicher Würde und zum Aufbau eines stabilen Friedens bei.",
    },
    it: {
      title: "ODEDIM Caritas Muyinga",
      description:
        "Organizzazione diocesana impegnata nell'aiuto umanitario, nella solidarietà sociale e nello sviluppo integrale nel nord del Burundi. ODEDIM realizza progetti multisettoriali su sicurezza alimentare, accesso all'acqua potabile, salute nutrizionale e coesione sociale. Interviene attivamente presso comunità vulnerabili e rifugiati con programmi di assistenza d'urgenza, riconciliazione e comunicazione non violenta (CNV), contribuendo in modo duraturo a restituire dignità e a costruire una pace solida.",
    },
    ja: {
      title: "ODEDIM Caritas Muyinga",
      description:
        "ブルンジ北部で人道支援、社会的連帯、包括的な発展に取り組む教区組織。ODEDIMは食料安全保障、安全な水へのアクセス、栄養健康、社会的結束など多分野プロジェクトを展開しています。緊急支援、和解、非暴力コミュニケーション(NVC)プログラムを通じて、脆弱なコミュニティや難民を積極的に支援し、人間の尊厳の回復と持続的な平和の構築に貢献しています。",
    },
    sw: {
      title: "ODEDIM Caritas Muyinga",
      description:
        "Shirika la jimbo linalojishughulisha na misaada ya kibinadamu, mshikamano wa kijamii na maendeleo shirikishi kaskazini mwa Burundi. ODEDIM huendesha miradi ya sekta mbalimbali kuhusu usalama wa chakula, upatikanaji wa maji safi, afya ya lishe na mshikamano wa kijamii. Inasaidia jamii zilizo katika hatari na wakimbizi kupitia misaada ya dharura, upatanisho na mawasiliano yasiyo na jeuri (NVC), ikichangia kwa uendelevu kurejesha utu wa binadamu na kujenga amani imara.",
    },
  },

  "https://www.mysatoshis.bi": {
    fr: {
      title: "My Satoshis",
      description:
        "Passerelle de transaction financière innovante conçue au Burundi pour démocratiser l'inclusion économique et les envois de fonds transfrontaliers. Sans exiger de création de compte ni de barrières KYC, la plateforme connecte instantanément le réseau Lightning de Bitcoin avec les solutions locales de mobile money (Lumicash). Elle permet de réaliser des transferts transfrontaliers immédiats, sécurisés et à coût quasi nul. En éliminant les intermédiaires traditionnels, My Satoshis offre un outil mobile souverain qui connecte directement l'économie locale burundaise aux flux financiers décentralisés mondiaux.",
    },
    en: {
      title: "My Satoshis",
      description:
        "An innovative financial transaction gateway built in Burundi to democratize economic inclusion and cross-border remittances. With no account creation and no KYC barriers, the platform instantly connects the Bitcoin Lightning Network with local mobile money solutions (Lumicash). It enables instant, secure and near-zero-cost cross-border transfers. By eliminating traditional intermediaries, My Satoshis offers a sovereign mobile tool that connects Burundi's local economy directly to global decentralized financial flows.",
    },
    es: {
      title: "My Satoshis",
      description:
        "Pasarela financiera innovadora creada en Burundi para democratizar la inclusión económica y las remesas transfronterizas. Sin requerir cuentas ni barreras KYC, la plataforma conecta al instante la red Lightning de Bitcoin con soluciones locales de mobile money (Lumicash). Permite transferencias transfronterizas inmediatas, seguras y a coste casi nulo. Al eliminar intermediarios tradicionales, My Satoshis ofrece una herramienta móvil soberana que conecta la economía burundesa con los flujos financieros descentralizados globales.",
    },
    de: {
      title: "My Satoshis",
      description:
        "Innovatives Finanztransaktions-Gateway aus Burundi, das wirtschaftliche Teilhabe und grenzüberschreitende Überweisungen demokratisiert. Ohne Kontoerstellung und ohne KYC-Hürden verbindet die Plattform das Bitcoin-Lightning-Netzwerk sofort mit lokalen Mobile-Money-Lösungen (Lumicash). So werden sofortige, sichere und nahezu kostenlose grenzüberschreitende Überweisungen möglich. My Satoshis eliminiert traditionelle Zwischenhändler und bietet ein souveränes mobiles Werkzeug, das die lokale Wirtschaft Burundis direkt an globale dezentrale Finanzströme anschließt.",
    },
    it: {
      title: "My Satoshis",
      description:
        "Gateway di transazione finanziaria innovativo nato in Burundi per democratizzare l'inclusione economica e le rimesse transfrontaliere. Senza creazione di account né barriere KYC, la piattaforma collega istantaneamente la rete Lightning di Bitcoin con le soluzioni locali di mobile money (Lumicash). Consente trasferimenti transfrontalieri immediati, sicuri e a costo quasi nullo. Eliminando gli intermediari tradizionali, My Satoshis offre uno strumento mobile sovrano che connette l'economia burundese ai flussi finanziari decentralizzati globali.",
    },
    ja: {
      title: "My Satoshis",
      description:
        "ブルンジで開発された革新的な金融トランザクションゲートウェイで、経済的包摂と国際送金を民主化します。アカウント作成やKYCの手間なしに、Bitcoin Lightning Networkと地元のモバイルマネー(Lumicash)を瞬時に接続。即時、安全かつほぼ無料の国際送金を実現します。従来の仲介者を排除し、My Satoshisはブルンジの地域経済を世界の分散型金融フローに直接つなぐ主権的なモバイルツールを提供します。",
    },
    sw: {
      title: "My Satoshis",
      description:
        "Lango la kifedha la ubunifu lililotengenezwa Burundi kudemokratisha ujumuishaji wa kiuchumi na uhamisho wa fedha wa kimataifa. Bila kuhitaji akaunti wala vikwazo vya KYC, jukwaa hili huunganisha mara moja mtandao wa Bitcoin Lightning na huduma za ndani za mobile money (Lumicash). Huwezesha uhamisho wa haraka, salama na wa gharama karibu sifuri. Kwa kuondoa wapatanishi wa kawaida, My Satoshis hutoa chombo huru cha simu kinachounganisha uchumi wa Burundi moja kwa moja na mifumo ya fedha ya ugatuzi ya kimataifa.",
    },
  },

  "https://centreforgreendevelopment.org": {
    fr: {
      title: "Centre for Green Development",
      description:
        "Organisation dédiée à la promotion du développement durable, de la protection de l'environnement et de la transition écologique en Afrique. Le Centre for Green Development met en œuvre des projets de recherche, de plaidoyer et de formation autour de l'économie verte, de l'agriculture régénérative, des énergies renouvelables et de la résilience climatique. En collaborant avec les communautés locales, les gouvernements et les partenaires internationaux, il contribue à bâtir un futur plus vert et à renforcer les capacités locales face aux défis environnementaux.",
    },
    en: {
      title: "Centre for Green Development",
      description:
        "Organization dedicated to promoting sustainable development, environmental protection and the ecological transition in Africa. The Centre for Green Development leads research, advocacy and training projects on the green economy, regenerative agriculture, renewable energy and climate resilience. Working with local communities, governments and international partners, it helps build a greener future and strengthens local capacities to face environmental challenges.",
    },
    es: {
      title: "Centre for Green Development",
      description:
        "Organización dedicada a promover el desarrollo sostenible, la protección del medio ambiente y la transición ecológica en África. El Centre for Green Development impulsa proyectos de investigación, incidencia y formación sobre economía verde, agricultura regenerativa, energías renovables y resiliencia climática. Colaborando con comunidades locales, gobiernos y socios internacionales, contribuye a construir un futuro más verde y a reforzar las capacidades locales frente a los desafíos ambientales.",
    },
    de: {
      title: "Centre for Green Development",
      description:
        "Organisation zur Förderung nachhaltiger Entwicklung, Umweltschutz und ökologischer Transformation in Afrika. Das Centre for Green Development leitet Forschungs-, Advocacy- und Bildungsprojekte zu grüner Wirtschaft, regenerativer Landwirtschaft, erneuerbaren Energien und Klimaresilienz. In Zusammenarbeit mit lokalen Gemeinschaften, Regierungen und internationalen Partnern trägt es zu einer grüneren Zukunft bei und stärkt lokale Kapazitäten gegenüber Umweltproblemen.",
    },
    it: {
      title: "Centre for Green Development",
      description:
        "Organizzazione dedicata alla promozione dello sviluppo sostenibile, alla tutela dell'ambiente e alla transizione ecologica in Africa. Il Centre for Green Development guida progetti di ricerca, advocacy e formazione su economia verde, agricoltura rigenerativa, energie rinnovabili e resilienza climatica. Collaborando con comunità locali, governi e partner internazionali, contribuisce a costruire un futuro più verde e a rafforzare le capacità locali di fronte alle sfide ambientali.",
    },
    ja: {
      title: "Centre for Green Development",
      description:
        "アフリカにおける持続可能な開発、環境保護、生態系移行の推進に取り組む組織。Centre for Green Developmentはグリーン経済、再生型農業、再生可能エネルギー、気候レジリエンスに関する研究、アドボカシー、研修プロジェクトを主導します。地域社会、政府、国際的なパートナーと協力し、より緑豊かな未来の構築と、環境課題に立ち向かう地域能力の強化に貢献します。",
    },
    sw: {
      title: "Centre for Green Development",
      description:
        "Shirika lililojitolea kukuza maendeleo endelevu, ulinzi wa mazingira na mabadiliko ya kiikolojia barani Afrika. Centre for Green Development huongoza miradi ya utafiti, utetezi na mafunzo kuhusu uchumi wa kijani, kilimo cha kurejesha, nishati mbadala na uhimilivu wa hali ya hewa. Kwa kushirikiana na jamii za ndani, serikali na washirika wa kimataifa, huchangia kujenga mustakabali wa kijani zaidi na kuimarisha uwezo wa ndani wa kukabiliana na changamoto za mazingira.",
    },
  },
};

export const getPortfolioTranslation = (
  link: string | null | undefined,
  lang: string,
): Entry | null => {
  if (!link) return null;
  const normalized = link.trim().replace(/\/$/, "");
  const entry = portfolioContent[normalized];
  if (!entry) return null;
  const short = (lang || "en").split("-")[0] as PortfolioLang;
  return entry[short] || entry.en || entry.fr || null;
};
