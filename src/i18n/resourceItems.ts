// Multilingual list of genuinely useful websites, grouped by category.
// Page-level strings (tag, title, desc, cat.*) live in src/i18n/locales/*.json under "resources".

export type Lang = "fr" | "en" | "es" | "de" | "it" | "ja" | "sw";

export interface ResourceItem {
  name: string;
  url: string;
  desc: Record<Lang, string>;
}

export interface ResourceCategory {
  key: string; // i18n key: resources.cat.<key>
  items: ResourceItem[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    key: "archive",
    items: [
      {
        name: "Internet Archive",
        url: "https://archive.org",
        desc: {
          fr: "Consultez les anciennes versions des sites web et du contenu archivé.",
          en: "Browse old versions of websites and archived content.",
          es: "Consulta versiones antiguas de sitios web y contenido archivado.",
          de: "Alte Versionen von Websites und archivierte Inhalte ansehen.",
          it: "Consulta le versioni precedenti dei siti web e i contenuti archiviati.",
          ja: "ウェブサイトの過去のバージョンやアーカイブを閲覧。",
          sw: "Tazama matoleo ya zamani ya tovuti na maudhui yaliyohifadhiwa.",
        },
      },
      {
        name: "Wolfram Alpha",
        url: "https://www.wolframalpha.com",
        desc: {
          fr: "Moteur de calcul : maths, sciences, données et réponses expertes.",
          en: "Computation engine: maths, science, data and expert answers.",
          es: "Motor de cálculo: matemáticas, ciencias, datos y respuestas expertas.",
          de: "Rechenmaschine: Mathe, Naturwissenschaft, Daten und Expertenantworten.",
          it: "Motore di calcolo: matematica, scienze, dati e risposte esperte.",
          ja: "計算エンジン：数学・科学・データのエキスパートな回答。",
          sw: "Injini ya mahesabu: hisabati, sayansi, data na majibu ya kitaalamu.",
        },
      },
    ],
  },
  {
    key: "files",
    items: [
      {
        name: "Remove.bg",
        url: "https://www.removebg.com",
        desc: {
          fr: "Supprimez l'arrière-plan de vos images en un clic.",
          en: "Remove image backgrounds in one click.",
          es: "Elimina el fondo de tus imágenes en un clic.",
          de: "Bildhintergründe mit einem Klick entfernen.",
          it: "Rimuovi lo sfondo delle immagini con un clic.",
          ja: "ワンクリックで画像の背景を削除。",
          sw: "Ondoa mandhari ya nyuma ya picha kwa mbofyo mmoja.",
        },
      },
      {
        name: "TinyPNG",
        url: "https://tinypng.com",
        desc: {
          fr: "Compressez vos images PNG et JPEG gratuitement.",
          en: "Compress PNG and JPEG images for free.",
          es: "Comprime imágenes PNG y JPEG gratis.",
          de: "PNG- und JPEG-Bilder kostenlos komprimieren.",
          it: "Comprimi immagini PNG e JPEG gratis.",
          ja: "PNG・JPEG画像を無料で圧縮。",
          sw: "Banifuisha picha za PNG na JPEG bila malipo.",
        },
      },
      {
        name: "Smallpdf",
        url: "https://smallpdf.com",
        desc: {
          fr: "Éditez vos PDF gratuitement, en ligne.",
          en: "Edit your PDFs online, for free.",
          es: "Edita tus PDF gratis, en línea.",
          de: "PDFs kostenlos online bearbeiten.",
          it: "Modifica i PDF gratis, online.",
          ja: "PDFを無料でオンライン編集。",
          sw: "Hariri PDF zako bila malipo, mtandaoni.",
        },
      },
      {
        name: "iLovePDF",
        url: "https://www.ilovepdf.com",
        desc: {
          fr: "Fusionnez, divisez et convertissez vos PDF.",
          en: "Merge, split and convert your PDFs.",
          es: "Combina, divide y convierte tus PDF.",
          de: "PDFs zusammenfügen, teilen und konvertieren.",
          it: "Unisci, dividi e converti i tuoi PDF.",
          ja: "PDFの結合・分割・変換。",
          sw: "Unganisha, gawanya na ubadilishe PDF zako.",
        },
      },
      {
        name: "Squoosh",
        url: "https://squoosh.app",
        desc: {
          fr: "Compressez n'importe quelle image, directement dans le navigateur.",
          en: "Compress any image, right in your browser.",
          es: "Comprime cualquier imagen, en tu navegador.",
          de: "Beliebige Bilder direkt im Browser komprimieren.",
          it: "Comprimi qualsiasi immagine, nel browser.",
          ja: "ブラウザでどんな画像でも圧縮。",
          sw: "Banifuisha picha yoyote, kwenye kivinjari.",
        },
      },
      {
        name: "Screely",
        url: "https://screely.com",
        desc: {
          fr: "Transformez vos captures d'écran en belles images.",
          en: "Turn your screenshots into beautiful images.",
          es: "Convierte tus capturas de pantalla en imágenes bonitas.",
          de: "Screenshots in schöne Bilder verwandeln.",
          it: "Trasforma i tuoi screenshot in belle immagini.",
          ja: "スクリーンショットをおしゃれな画像に。",
          sw: "Fanya picha zako za skrini kuwa nzuri.",
        },
      },
    ],
  },
  {
    key: "writing",
    items: [
      {
        name: "DeepL",
        url: "https://www.deepl.com",
        desc: {
          fr: "Le meilleur traducteur en ligne, précis et naturel.",
          en: "The best online translator — accurate and natural.",
          es: "El mejor traductor online, preciso y natural.",
          de: "Der beste Online-Übersetzer – präzise und natürlich.",
          it: "Il miglior traduttore online, preciso e naturale.",
          ja: "正確で自然な、最高のオンライン翻訳。",
          sw: "Mtafsiri bora mtandaoni — sahihi na wa asili.",
        },
      },
      {
        name: "Grammarly",
        url: "https://www.grammarly.com",
        desc: {
          fr: "Corrigez et améliorez vos écrits en anglais.",
          en: "Fix and improve your English writing.",
          es: "Corrige y mejora tus textos en inglés.",
          de: "Englische Texte korrigieren und verbessern.",
          it: "Correggi e migliora i tuoi testi in inglese.",
          ja: "英語の文章を校正・改善。",
          sw: "Sahihisha na boresha uandishi wako wa Kiingereza.",
        },
      },
      {
        name: "Hemingway Editor",
        url: "https://hemingwayapp.com",
        desc: {
          fr: "Simplifiez et clarifiez votre style d'écriture.",
          en: "Simplify and clarify your writing style.",
          es: "Simplifica y aclara tu estilo de escritura.",
          de: "Schreibstil vereinfachen und klarer machen.",
          it: "Semplifica e rendi più chiaro il tuo stile di scrittura.",
          ja: "文章をシンプルで分かりやすく。",
          sw: "Rahisisha na ufafanue mtindo wako wa uandishi.",
        },
      },
    ],
  },
  {
    key: "ai",
    items: [
      {
        name: "ChatGPT",
        url: "https://chatgpt.com",
        desc: {
          fr: "Posez n'importe quelle question à une IA conversationnelle.",
          en: "Ask an AI assistant any question.",
          es: "Pregunta lo que quieras a una IA conversacional.",
          de: "Stelle einer KI beliebige Fragen.",
          it: "Fai qualsiasi domanda a un'IA conversazionale.",
          ja: "AIにどんな質問でも。",
          sw: "Uliza AI swali lolote.",
        },
      },
      {
        name: "Perplexity",
        url: "https://www.perplexity.ai",
        desc: {
          fr: "Un moteur de recherche intelligent avec sources.",
          en: "A smart search engine with sources.",
          es: "Un buscador inteligente con fuentes.",
          de: "Eine intelligente Suchmaschine mit Quellen.",
          it: "Un motore di ricerca intelligente con fonti.",
          ja: "出典付きの賢い検索エンジン。",
          sw: "Injini ya utafutaji mahiri yenye vyanzo.",
        },
      },
    ],
  },
  {
    key: "productivity",
    items: [
      {
        name: "Notion",
        url: "https://www.notion.so",
        desc: {
          fr: "Organisez notes, projets et travail d'équipe.",
          en: "Organize notes, projects and teamwork.",
          es: "Organiza notas, proyectos y trabajo en equipo.",
          de: "Notizen, Projekte und Teamwork organisieren.",
          it: "Organizza note, progetti e lavoro di squadra.",
          ja: "メモ・プロジェクト・チームワークを整理。",
          sw: "Panga maelezo, miradi na kazi za timu.",
        },
      },
      {
        name: "Trello",
        url: "https://trello.com",
        desc: {
          fr: "Gérez vos projets avec des tableaux visuels.",
          en: "Manage projects with visual boards.",
          es: "Gestiona proyectos con tableros visuales.",
          de: "Projekte mit visuellen Boards verwalten.",
          it: "Gestisci progetti con lavagne visive.",
          ja: "ボードでプロジェクトを視覚的に管理。",
          sw: "Simamia miradi kwa bodi za kuona.",
        },
      },
    ],
  },
  {
    key: "design",
    items: [
      {
        name: "Canva",
        url: "https://www.canva.com",
        desc: {
          fr: "Créez des designs professionnels gratuitement.",
          en: "Create professional designs for free.",
          es: "Crea diseños profesionales gratis.",
          de: "Kostenlos professionelle Designs erstellen.",
          it: "Crea design professionali gratis.",
          ja: "無料でプロフェッショナルなデザインを。",
          sw: "Tengeneza michoro ya kitaalamu bila malipo.",
        },
      },
      {
        name: "Unsplash",
        url: "https://unsplash.com",
        desc: {
          fr: "Des photos gratuites de grande qualité.",
          en: "High-quality free photos.",
          es: "Fotos gratuitas de gran calidad.",
          de: "Kostenlose Fotos in hoher Qualität.",
          it: "Foto gratuite di alta qualità.",
          ja: "高品質な無料写真素材。",
          sw: "Picha za bora bila malipo.",
        },
      },
      {
        name: "Pexels",
        url: "https://www.pexels.com",
        desc: {
          fr: "Vidéos et photos libres de droits.",
          en: "Free stock videos and photos.",
          es: "Vídeos y fotos libres de derechos.",
          de: "Freie Videos und Fotos.",
          it: "Video e foto liberi da diritti.",
          ja: "自由に使える動画・写真素材。",
          sw: "Video na picha za bure.",
        },
      },
      {
        name: "Flaticon",
        url: "https://www.flaticon.com",
        desc: {
          fr: "Des millions d'icônes gratuites.",
          en: "Millions of free icons.",
          es: "Millones de iconos gratuitos.",
          de: "Millionen kostenlose Icons.",
          it: "Milioni di icone gratuite.",
          ja: "数百万の無料アイコン。",
          sw: "Aidhioni milioni bila malipo.",
        },
      },
      {
        name: "Coolors",
        url: "https://coolors.co",
        desc: {
          fr: "Générez des palettes de couleurs en un clic.",
          en: "Generate color palettes in a click.",
          es: "Genera paletas de colores en un clic.",
          de: "Farbpaletten auf Klick erzeugen.",
          it: "Genera palette di colori con un clic.",
          ja: "ワンクリックでカラーパレットを生成。",
          sw: "Tengeneza paleti za rangi kwa mbofyo mmoja.",
        },
      },
      {
        name: "Google Fonts",
        url: "https://fonts.google.com",
        desc: {
          fr: "Des polices gratuites et open source.",
          en: "Free, open-source fonts.",
          es: "Fuentes gratuitas y de código abierto.",
          de: "Kostenlose Open-Source-Schriftarten.",
          it: "Font gratuiti e open source.",
          ja: "無料のオープンソースフォント。",
          sw: "Fonti za bure na za chanzo huria.",
        },
      },
      {
        name: "Carbon",
        url: "https://carbon.now.sh",
        desc: {
          fr: "Partagez votre code avec de jolis extraits.",
          en: "Share your code as beautiful snippets.",
          es: "Comparte tu código con extractos elegantes.",
          de: "Code als schöne Snippets teilen.",
          it: "Condividi il codice con snippet eleganti.",
          ja: "コードを美しいスニペットで共有。",
          sw: "Shiriki msimbo kwa muonekano mzuri.",
        },
      },
      {
        name: "Shortcuts.design",
        url: "https://shortcuts.design",
        desc: {
          fr: "Tous les raccourcis clavier des outils de design.",
          en: "Every design tool's keyboard shortcuts.",
          es: "Todos los atajos de teclado de las herramientas de diseño.",
          de: "Alle Tastenkürzel der Design-Tools.",
          it: "Tutte le scorciatoie da tastiera dei tool di design.",
          ja: "デザインツールのショートカット一覧。",
          sw: "Orodha ya mikato ya kibodi ya vifaa vya muundo.",
        },
      },
    ],
  },
  {
    key: "dev",
    items: [
      {
        name: "Namecheap",
        url: "https://www.namecheap.com",
        desc: {
          fr: "Achetez des noms de domaine à petit prix.",
          en: "Buy domain names at low prices.",
          es: "Compra dominios a buen precio.",
          de: "Domains zu günstigen Preisen kaufen.",
          it: "Compra domini a prezzi bassi.",
          ja: "お得な価格でドメインを購入。",
          sw: "Nunua majina ya kikoa kwa bei nafuu.",
        },
      },
      {
        name: "GitHub",
        url: "https://github.com",
        desc: {
          fr: "Hébergement de code et collaboration.",
          en: "Code hosting and collaboration.",
          es: "Alojamiento de código y colaboración.",
          de: "Code-Hosting und Zusammenarbeit.",
          it: "Hosting di codice e collaborazione.",
          ja: "コードホスティングと共同開発。",
          sw: "Upangishaji wa msimbo na ushirikiano.",
        },
      },
      {
        name: "Replit",
        url: "https://replit.com",
        desc: {
          fr: "Codez directement dans le navigateur.",
          en: "Code right in your browser.",
          es: "Programa directamente en el navegador.",
          de: "Direkt im Browser programmieren.",
          it: "Programma direttamente nel browser.",
          ja: "ブラウザで直接コーディング。",
          sw: "Andika msimbo moja kwa moja kwenye kivinjari.",
        },
      },
      {
        name: "Regex101",
        url: "https://regex101.com",
        desc: {
          fr: "Testez et déboguez vos expressions régulières.",
          en: "Test and debug your regular expressions.",
          es: "Prueba y depura tus expresiones regulares.",
          de: "Reguläre Ausdrücke testen und debuggen.",
          it: "Prova e fai il debug delle espressioni regolari.",
          ja: "正規表現のテストとデバッグ。",
          sw: "Jaribu na rekebisha misemo ya kawaida (regex).",
        },
      },
      {
        name: "ExplainShell",
        url: "https://explainshell.com",
        desc: {
          fr: "Comprenez chaque commande shell, argument par argument.",
          en: "Understand any shell command, flag by flag.",
          es: "Entiende cualquier comando de shell, opción por opción.",
          de: "Jeden Shell-Befehl Flag für Flag verstehen.",
          it: "Capisci ogni comando shell, opzione per opzione.",
          ja: "シェルコマンドをオプション単位で解説。",
          sw: "Elewa amri yoyote ya shell, hoja kwa hoja.",
        },
      },
    ],
  },
  {
    key: "security",
    items: [
      {
        name: "Fast.com",
        url: "https://fast.com",
        desc: {
          fr: "Testez la vitesse de votre connexion internet.",
          en: "Check your internet connection speed.",
          es: "Comprueba la velocidad de tu conexión a internet.",
          de: "Geschwindigkeit deiner Internetverbindung prüfen.",
          it: "Verifica la velocità della tua connessione internet.",
          ja: "インターネット速度をチェック。",
          sw: "Pima kasi ya mtandao wako.",
        },
      },
      {
        name: "Have I Been Pwned",
        url: "https://haveibeenpwned.com",
        desc: {
          fr: "Vérifiez si votre email a été compromis.",
          en: "Check whether your email has been breached.",
          es: "Comprueba si tu correo ha sido comprometido.",
          de: "Prüfen, ob deine E-Mail leaked wurde.",
          it: "Controlla se la tua email è stata compromessa.",
          ja: "メールアドレスの漏洩をチェック。",
          sw: "Angalia kama barua pepe yako imevujishwa.",
        },
      },
      {
        name: "VirusTotal",
        url: "https://www.virustotal.com",
        desc: {
          fr: "Analysez fichiers et liens contre les virus.",
          en: "Scan files and links for viruses.",
          es: "Analiza archivos y enlaces en busca de virus.",
          de: "Dateien und Links auf Viren prüfen.",
          it: "Analizza file e link alla ricerca di virus.",
          ja: "ファイルやリンクのウイルスを検査。",
          sw: "Kagua faili na viungo dhidi ya virusi.",
        },
      },
      {
        name: "Downdetector",
        url: "https://downdetector.com",
        desc: {
          fr: "Vérifiez si un site est en panne.",
          en: "Check whether a website is down.",
          es: "Comprueba si un sitio web está caído.",
          de: "Prüfen, ob eine Website ausgefallen ist.",
          it: "Verifica se un sito è offline.",
          ja: "サイトの障害情報をチェック。",
          sw: "Angalia kama tovuti imezima.",
        },
      },
    ],
  },
  {
    key: "sharing",
    items: [
      {
        name: "10 Minute Mail",
        url: "https://10minutemail.com",
        desc: {
          fr: "Une adresse email temporaire et jetable.",
          en: "A temporary, disposable email address.",
          es: "Una dirección de correo temporal y desechable.",
          de: "Eine temporäre, wegwerfbare E-Mail-Adresse.",
          it: "Un indirizzo email temporaneo e monouso.",
          ja: "一時的な使い捨てメールアドレス。",
          sw: "Anwani ya barua pepe ya muda.",
        },
      },
      {
        name: "JustPaste.it",
        url: "https://justpaste.it",
        desc: {
          fr: "Partagez du texte instantanément, sans compte.",
          en: "Share text instantly, no account needed.",
          es: "Comparte texto al instante, sin cuenta.",
          de: "Text sofort teilen, ohne Konto.",
          it: "Condividi testo all'istante, senza account.",
          ja: "アカウント不要でテキストを即共有。",
          sw: "Shiriki maandishi papo hapo, bila akaunti.",
        },
      },
      {
        name: "SimilarSites",
        url: "https://www.similarsites.com",
        desc: {
          fr: "Trouvez des sites similaires à vos préférés.",
          en: "Find websites similar to your favorites.",
          es: "Encuentra sitios web similares a tus favoritos.",
          de: "Websites finden, die deinen Favoriten ähneln.",
          it: "Trova siti web simili ai tuoi preferiti.",
          ja: "お気に入りに似たサイトを発見。",
          sw: "Tafuta tovuti zinazofanana na unazopenda.",
        },
      },
    ],
  },
];

export const totalResources = resourceCategories.reduce(
  (acc, cat) => acc + cat.items.length,
  0
);
