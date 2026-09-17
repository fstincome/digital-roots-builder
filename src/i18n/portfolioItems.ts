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
      title: "EMSI BURUNDI (Electro Multi-Services Innovation)",
      description:
        "Basée à Muyinga, EMSI BURUNDI (Electro Multi-Services Innovation) se consacre à la livraison de biens et services exceptionnels : support d'approvisionnement en ligne et commandes de produits électroniques pour tous vos besoins professionnels. Son équipe d'experts offre une large gamme de services spécialisés adaptés à divers secteurs — solutions logicielles personnalisées, sourcing en ligne de produits de qualité. Son engagement pour l'excellence et la satisfaction client fait d'elle un partenaire de choix.",
    },
    en: {
      title: "EMSI BURUNDI (Electro Multi-Services Innovation)",
      description:
        "Based in Muyinga, EMSI BURUNDI (Electro Multi-Services Innovation) is dedicated to delivering exceptional goods and services: online procurement support and electronics orders for all your business needs. Its team of experts offers a wide range of specialized services for various industries — customized software solutions and online sourcing of top-quality products. Its commitment to excellence and customer satisfaction makes it a preferred partner.",
    },
    es: {
      title: "EMSI BURUNDI (Electro Multi-Services Innovation)",
      description:
        "Con sede en Muyinga, EMSI BURUNDI (Electro Multi-Services Innovation) se dedica a ofrecer bienes y servicios excepcionales: apoyo de aprovisionamiento en línea y pedidos de productos electrónicos para todas sus necesidades empresariales. Su equipo de expertos ofrece una amplia gama de servicios especializados para diversos sectores — soluciones de software personalizadas y abastecimiento en línea de productos de primera calidad. Su compromiso con la excelencia y la satisfacción del cliente la convierten en un socio preferido.",
    },
    de: {
      title: "EMSI BURUNDI (Electro Multi-Services Innovation)",
      description:
        "EMSIS BURUNDI (Electro Multi-Services Innovation) mit Sitz in Muyinga widmet sich der Lieferung außergewöhnlicher Waren und Dienstleistungen: Online-Beschaffungsunterstützung und Elektronikbestellungen für alle Ihre geschäftlichen Bedürfnisse. Das Expertenteam bietet ein breites Spektrum spezialisierter Dienstleistungen für verschiedene Branchen — maßgeschneiderte Softwarelösungen und Online-Sourcing von Qualitätsprodukten. Das Engagement für Exzellenz und Kundenzufriedenheit macht EMSI zum bevorzugten Partner.",
    },
    it: {
      title: "EMSI BURUNDI (Electro Multi-Services Innovation)",
      description:
        "Con sede a Muyinga, EMSI BURUNDI (Electro Multi-Services Innovation) si dedica alla fornitura di beni e servizi eccezionali: supporto all'approvvigionamento online e ordini di prodotti elettronici per ogni esigenza aziendale. Il suo team di esperti offre un'ampia gamma di servizi specializzati per diversi settori — soluzioni software personalizzate e sourcing online di prodotti di alta qualità. L'impegno per l'eccellenza e la soddisfazione del cliente ne fa un partner privilegiato.",
    },
    ja: {
      title: "EMSI BURUNDI（Electro Multi-Services Innovation）",
      description:
        "ムインガに拠点を置くEMSI BURUNDI（Electro Multi-Services Innovation）は、優れた商品とサービスの提供に専念しています。ビジネスのあらゆるニーズに対応するオンライン調達サポートと電子製品の注文を提供。専門家チームが、様々な業界に合わせたカスタムソフトウェアソリューションや高品質製品のオンライン調達など、幅広い専門サービスを提供します。卓越性と顧客満足へのコミットメントにより、信頼のパートナーとして選ばれています。",
    },
    sw: {
      title: "EMSI BURUNDI (Electro Multi-Services Innovation)",
      description:
        "Iliyo makao Muyinga, EMSI BURUNDI (Electro Multi-Services Innovation) imejitolea kutoa bidhaa na huduma bora: msaada wa ununuzi mtandaoni na oda za vifaa vya elektroniki kwa mahitaji yote ya biashara yako. Timu yake ya wataalamu inatoa huduma mbalimbali za kipekee kwa sekta mbalimbali — suluhisho za programu za kipekee na utafutaji mtandaoni wa bidhaa bora. Dhamira yake ya ubora na kuridhisha wateja huifanya kuwa mshirika unaopendwa.",
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

  "https://www.tabito.travel": {
    fr: {
      title: "Tanganyika e-Bridge International Tours (TABITO)",
      description:
        "Société anonyme de droit burundais créée en septembre 2023, TABITO est un tour opérateur récepteur porté par une équipe multidisciplinaire dévouée au tourisme durable. Elle couvre le tourisme de divertissement comme le tourisme de conférence et d'évènementiel, en régénérant les valeurs de l'après Covid-19. Partenaire privilégié pour rejoindre la destination d'Afrique centrale et orientale logée dans le bassin du Lac Tanganyika, TABITO est connectée aux sous-destinations nationales : montagnes, destinations maritimes et balnéaires. Née d'une expérience hautement humaine, d'une ambition hautement technologique et d'un cœur hautement hospitalier, elle garde sa clientèle branchée globalement par un pont digital enraciné dans la fraîcheur des brises du Tanganyika.",
    },
    en: {
      title: "Tanganyika e-Bridge International Tours (TABITO)",
      description:
        "A Burundian public limited company founded in September 2023, TABITO is an inbound tour operator driven by a multidisciplinary team devoted to sustainable tourism. It serves both leisure travel and conference and event tourism, renewing the values of the post-Covid-19 era. A privileged partner for reaching the great destination of Central and East Africa nestled in the Lake Tanganyika basin, TABITO connects travellers to national sub-destinations: mountains, lakeside and seaside experiences. Born of deeply human experience, high technological ambition and a profoundly hospitable heart, it keeps its clients globally connected through a digital bridge rooted in the fresh breezes of Tanganyika.",
    },
    es: {
      title: "Tanganyika e-Bridge International Tours (TABITO)",
      description:
        "Sociedad anónima de derecho burundés creada en septiembre de 2023, TABITO es un operador turístico receptivo impulsado por un equipo multidisciplinario dedicado al turismo sostenible. Abarca tanto el turismo de ocio como el de congresos y eventos, renovando los valores de la era pos-Covid-19. Socio privilegiado para acceder al gran destino de África central y oriental situado en la cuenca del lago Tanganica, TABITO conecta con los subdestinos nacionales: montañas, destinos lacustres y balnearios. Nacida de una experiencia profundamente humana, una ambición altamente tecnológica y un corazón hospitalario, mantiene a su clientela conectada globalmente mediante un puente digital arraigado en las brisas frescas del Tanganica.",
    },
    de: {
      title: "Tanganyika e-Bridge International Tours (TABITO)",
      description:
        "Die im September 2023 gegründete burundische Aktiengesellschaft TABITO ist ein Incoming-Reiseveranstalter mit einem multidisziplinären Team, das sich dem nachhaltigen Tourismus widmet. Sie deckt sowohl Freizeittourismus als auch Kongress- und Eventtourismus ab und belebt die Werte der Zeit nach Covid-19 neu. Als bevorzugter Partner für die große Destination Zentral- und Ostafrikas im Becken des Tanganjikasees verbindet TABITO Reisende mit nationalen Teildestinationen: Berge, See- und Badeziele. Aus zutiefst menschlicher Erfahrung, hohem technologischem Anspruch und großer Gastfreundschaft entstanden, hält sie ihre Gäste über eine digitale Brücke global vernetzt.",
    },
    it: {
      title: "Tanganyika e-Bridge International Tours (TABITO)",
      description:
        "Società per azioni di diritto burundese creata nel settembre 2023, TABITO è un tour operator incoming guidato da un team multidisciplinare dedito al turismo sostenibile. Si occupa sia di turismo leisure sia di turismo congressuale ed eventi, rigenerando i valori del periodo post Covid-19. Partner privilegiato per raggiungere la grande destinazione dell'Africa centrale e orientale nel bacino del Lago Tanganica, TABITO collega alle sotto-destinazioni nazionali: montagne, mete lacustri e balneari. Nata da un'esperienza profondamente umana, da un'ambizione tecnologica e da un cuore ospitale, mantiene i clienti connessi globalmente tramite un ponte digitale.",
    },
    ja: {
      title: "Tanganyika e-Bridge International Tours (TABITO)",
      description:
        "2023年9月に設立されたブルンジの株式会社TABITOは、持続可能な観光に献身する多分野のチームによるインバウンド・ツアーオペレーターです。レジャー観光に加え、会議・イベント観光も手がけ、コロナ後の新しい価値を創出しています。タンガニーカ湖流域に広がる中央・東アフリカの魅力的なデスティネーションへの特別なパートナーとして、山岳地帯や湖畔・海浜など国内のサブデスティネーションをつなぎます。人間味あふれる経験、高い技術的野心、そしてもてなしの心から生まれ、デジタルの架け橋で顧客を世界とつなぎ続けます。",
    },
    sw: {
      title: "Tanganyika e-Bridge International Tours (TABITO)",
      description:
        "Kampuni ya hisa ya Burundi iliyoanzishwa Septemba 2023, TABITO ni mwendeshaji watalii wa ndani unaoongozwa na timu ya taaluma mbalimbali iliyojitolea kwa utalii endelevu. Hushughulikia utalii wa burudani pamoja na utalii wa mikutano na matukio, ikihuisha maadili ya kipindi cha baada ya Covid-19. Kama mshirika wa kipekee wa kufikia eneo kuu la Afrika ya Kati na Mashariki katika bonde la Ziwa Tanganyika, TABITO huunganisha maeneo madogo ya kitaifa: milima, fukwe na maeneo ya ziwa. Ikizaliwa kutokana na uzoefu wa kibinadamu, matarajio ya kiteknolojia na moyo wa ukarimu, huwaweka wateja wake wameunganishwa kidunia kupitia daraja la kidijitali.",
    },
  },

  "https://www.bitlibera.com": {
    fr: {
      title: "BitLibera",
      description:
        "Notre solution de paiement Bitcoin pour l'Afrique de l'Est. BitLibera relie le Lightning Network aux portefeuilles mobiles locaux : commerçants, freelances et diaspora encaissent et envoient de la valeur en quelques secondes, sans frais d'intermédiaires excessifs. La plateforme propose l'encaissement par QR code, la conversion instantanée entre satoshis et portefeuilles mobiles, des transferts diaspora quasi immédiats, ainsi qu'une API et des webhooks pour intégrer les paiements Bitcoin dans vos applications. Ancrée au Burundi, elle s'étend à toute la Communauté d'Afrique de l'Est et s'accompagne de formations pratiques sur la garde autonome des fonds.",
    },
    en: {
      title: "BitLibera",
      description:
        "Our Bitcoin payment solution for East Africa. BitLibera bridges the Lightning Network with local mobile wallets: merchants, freelancers and the diaspora receive and send value in seconds, without excessive intermediary fees. The platform offers QR code checkout, instant conversion between satoshis and mobile wallets, near-instant diaspora transfers, plus an API and webhooks to embed Bitcoin payments in your own applications. Rooted in Burundi, it extends across the East African Community and comes with hands-on self-custody training.",
    },
    es: {
      title: "BitLibera",
      description:
        "Nuestra solución de pago Bitcoin para África del Este. BitLibera conecta la Lightning Network con las carteras móviles locales: comercios, freelancers y la diáspora cobran y envían valor en segundos, sin comisiones abusivas de intermediarios. La plataforma ofrece cobro por código QR, conversión instantánea entre satoshis y carteras móviles, transferencias de la diáspora casi inmediatas, además de una API y webhooks para integrar los pagos Bitcoin en sus aplicaciones. Arraigada en Burundi, se extiende a toda la Comunidad de África Oriental con formaciones prácticas de autocustodia.",
    },
    de: {
      title: "BitLibera",
      description:
        "Unsere Bitcoin-Zahlungslösung für Ostafrika. BitLibera verbindet das Lightning Network mit lokalen Mobile Wallets: Händler, Freelancer und die Diaspora empfangen und senden Werte in Sekunden, ohne überhöhte Vermittlergebühren. Die Plattform bietet QR-Code-Zahlungen, sofortigen Umtausch zwischen Satoshis und Mobile Wallets, nahezu unmittelbare Diaspora-Überweisungen sowie API und Webhooks zur Integration von Bitcoin-Zahlungen in eigene Anwendungen. In Burundi verankert, reicht sie in die gesamte Ostafrikanische Gemeinschaft und wird von praxisnahen Self-Custody-Schulungen begleitet.",
    },
    it: {
      title: "BitLibera",
      description:
        "La nostra soluzione di pagamento Bitcoin per l'Africa orientale. BitLibera collega la Lightning Network ai portafogli mobili locali: commercianti, freelance e diaspora incassano e inviano valore in pochi secondi, senza commissioni eccessive. La piattaforma offre l'incasso tramite QR code, la conversione istantanea tra satoshi e portafogli mobili, trasferimenti della diaspora quasi immediati, oltre a API e webhook per integrare i pagamenti Bitcoin nelle proprie applicazioni. Radicata in Burundi, si estende a tutta la Comunità dell'Africa Orientale con formazioni pratiche sulla self-custody.",
    },
    ja: {
      title: "BitLibera",
      description:
        "東アフリカ向けの当社のビットコイン決済ソリューション。BitLiberaはライトニングネットワークと現地のモバイルウォレットを接続し、加盟店、フリーランス、ディアスポラが過大な仲介手数料なしに数秒で価値を受け取り送金できます。QRコード決済、サトシとモバイルウォレット間の即時変換、ほぼ即時のディアスポラ送金、さらに自社アプリへ組み込むためのAPIとWebhookを提供。ブルンジに根ざしながら東アフリカ共同体全域へ広がり、自己保管に関する実践的な研修も伴います。",
    },
    sw: {
      title: "BitLibera",
      description:
        "Suluhu yetu ya malipo ya Bitcoin kwa Afrika Mashariki. BitLibera huunganisha Lightning Network na pochi za simu za ndani: wafanyabiashara, wafanyakazi huru na diaspora hupokea na kutuma thamani kwa sekunde, bila gharama kubwa za wapatanishi. Jukwaa hutoa malipo kwa QR code, ubadilishaji wa papo hapo kati ya satoshi na pochi za simu, uhamisho wa diaspora wa haraka, pamoja na API na webhooks za kuunganisha malipo ya Bitcoin katika programu zako. Ikiwa na mizizi Burundi, inafikia Jumuiya yote ya Afrika Mashariki na mafunzo ya vitendo ya kutunza fedha mwenyewe.",
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
