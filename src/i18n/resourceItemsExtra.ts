// Additional useful websites (hidden toolbox of the internet), grouped by category.
// Page-level category labels live in src/i18n/locales/*.json under "resources.cat".
import type { ResourceCategory } from "./resourceItems";

const d = (
  fr: string,
  en: string,
  es: string,
  de: string,
  it: string,
  ja: string,
  sw: string
) => ({ fr, en, es, de, it, ja, sw });

export const extraResourceCategories: ResourceCategory[] = [
  {
    key: "research",
    items: [
      {
        name: "Unpaywall",
        url: "https://unpaywall.org",
        desc: d(
          "Accédez gratuitement et légalement à des articles scientifiques.",
          "Free, legal access to scientific papers.",
          "Acceso gratuito y legal a artículos científicos.",
          "Kostenloser, legaler Zugang zu wissenschaftlichen Artikeln.",
          "Accesso gratuito e legale ad articoli scientifici.",
          "学術論文に無料かつ合法的にアクセス。",
          "Pata makala za kisayansi bure na kihalali."
        ),
      },
      {
        name: "DOAJ",
        url: "https://doaj.org",
        desc: d(
          "Annuaire mondial des revues académiques en libre accès.",
          "Global directory of open access academic journals.",
          "Directorio mundial de revistas académicas de acceso abierto.",
          "Weltweites Verzeichnis frei zugänglicher Fachzeitschriften.",
          "Directory mondiale di riviste accademiche ad accesso aperto.",
          "オープンアクセス学術誌の世界的ディレクトリ。",
          "Orodha ya kimataifa ya majarida ya kitaaluma huria."
        ),
      },
      {
        name: "Elicit",
        url: "https://elicit.org",
        desc: d(
          "Assistant de recherche IA pour explorer la littérature scientifique.",
          "AI research assistant to explore scientific literature.",
          "Asistente de investigación con IA para la literatura científica.",
          "KI-Rechercheassistent für wissenschaftliche Literatur.",
          "Assistente di ricerca IA per la letteratura scientifica.",
          "科学文献を探索するAIリサーチアシスタント。",
          "Msaidizi wa utafiti wa AI kwa maandiko ya kisayansi."
        ),
      },
      {
        name: "Consensus",
        url: "https://consensus.app",
        desc: d(
          "Des réponses appuyées sur des études scientifiques vérifiées.",
          "Answers backed by verified scientific studies.",
          "Respuestas respaldadas por estudios científicos verificados.",
          "Antworten, gestützt auf geprüfte wissenschaftliche Studien.",
          "Risposte basate su studi scientifici verificati.",
          "検証済みの科学的研究に基づく回答。",
          "Majibu yanayotegemea tafiti za kisayansi zilizothibitishwa."
        ),
      },
      {
        name: "Connected Papers",
        url: "https://www.connectedpapers.com",
        desc: d(
          "Visualisez les liens entre les publications scientifiques.",
          "Visualize the connections between research papers.",
          "Visualiza las conexiones entre publicaciones científicas.",
          "Verbindungen zwischen Forschungsarbeiten visualisieren.",
          "Visualizza le connessioni tra pubblicazioni scientifiche.",
          "論文同士のつながりを可視化。",
          "Ona uhusiano kati ya machapisho ya utafiti."
        ),
      },
      {
        name: "Semantic Scholar",
        url: "https://www.semanticscholar.org",
        desc: d(
          "Moteur de recherche académique enrichi par l'IA.",
          "AI-powered academic search engine.",
          "Buscador académico potenciado por IA.",
          "KI-gestützte akademische Suchmaschine.",
          "Motore di ricerca accademico potenziato dall'IA.",
          "AIを活用した学術検索エンジン。",
          "Injini ya utafutaji wa kitaaluma inayotumia AI."
        ),
      },
      {
        name: "SciSpace",
        url: "https://scispace.com",
        desc: d(
          "Comprenez un article scientifique expliqué ligne par ligne.",
          "Understand research papers explained line by line.",
          "Comprende artículos científicos explicados línea por línea.",
          "Forschungsarbeiten Zeile für Zeile verständlich erklärt.",
          "Comprendi gli articoli scientifici spiegati riga per riga.",
          "論文を一行ずつ解説して理解。",
          "Elewa makala za utafiti zinazoelezwa mstari kwa mstari."
        ),
      },
      {
        name: "Summarize.tech",
        url: "https://www.summarize.tech",
        desc: d(
          "Résumés automatiques de longues vidéos YouTube.",
          "Automatic summaries of long YouTube videos.",
          "Resúmenes automáticos de vídeos largos de YouTube.",
          "Automatische Zusammenfassungen langer YouTube-Videos.",
          "Riassunti automatici di lunghi video YouTube.",
          "長いYouTube動画の自動要約。",
          "Muhtasari wa kiotomatiki wa video ndefu za YouTube."
        ),
      },
      {
        name: "Phind",
        url: "https://www.phind.com",
        desc: d(
          "Moteur de recherche IA pensé pour les développeurs.",
          "AI search engine built for developers.",
          "Buscador con IA pensado para desarrolladores.",
          "KI-Suchmaschine für Entwicklerinnen und Entwickler.",
          "Motore di ricerca IA pensato per sviluppatori.",
          "開発者向けのAI検索エンジン。",
          "Injini ya utafutaji ya AI kwa wasanidi programu."
        ),
      },
    ],
  },
  {
    key: "learning",
    items: [
      {
        name: "Open Library",
        url: "https://openlibrary.org",
        desc: d(
          "Empruntez des livres numériques gratuitement en ligne.",
          "Borrow digital books online for free.",
          "Toma prestados libros digitales gratis en línea.",
          "Digitale Bücher kostenlos online ausleihen.",
          "Prendi in prestito libri digitali gratis online.",
          "電子書籍を無料でオンライン貸出。",
          "Azima vitabu vya kidijitali bure mtandaoni."
        ),
      },
      {
        name: "Project Gutenberg",
        url: "https://www.gutenberg.org",
        desc: d(
          "Plus de 70 000 livres classiques libres de droits.",
          "Over 70,000 free public-domain books.",
          "Más de 70.000 libros gratuitos de dominio público.",
          "Über 70.000 kostenlose gemeinfreie Bücher.",
          "Oltre 70.000 libri gratuiti di pubblico dominio.",
          "7万冊以上のパブリックドメイン書籍。",
          "Zaidi ya vitabu 70,000 bure vya umma."
        ),
      },
      {
        name: "OpenStax",
        url: "https://openstax.org",
        desc: d(
          "Manuels universitaires gratuits et de qualité.",
          "Free, peer-reviewed university textbooks.",
          "Libros de texto universitarios gratuitos y revisados.",
          "Kostenlose, geprüfte Hochschullehrbücher.",
          "Manuali universitari gratuiti e revisionati.",
          "無料で質の高い大学教科書。",
          "Vitabu vya kiada vya chuo bure na vya ubora."
        ),
      },
      {
        name: "Open Culture",
        url: "https://www.openculture.com",
        desc: d(
          "Cours, films et livres audio gratuits du monde entier.",
          "Free courses, films and audiobooks from around the world.",
          "Cursos, películas y audiolibros gratuitos de todo el mundo.",
          "Kostenlose Kurse, Filme und Hörbücher aus aller Welt.",
          "Corsi, film e audiolibri gratuiti da tutto il mondo.",
          "世界中の無料講座・映画・オーディオブック。",
          "Kozi, filamu na vitabu vya sauti bure duniani kote."
        ),
      },
    ],
  },
  {
    key: "media",
    items: [
      {
        name: "JustWatch",
        url: "https://www.justwatch.com",
        desc: d(
          "Trouvez sur quelle plateforme regarder un film ou une série.",
          "Find which platform streams a given film or series.",
          "Descubre en qué plataforma ver una película o serie.",
          "Finden, auf welcher Plattform ein Film oder eine Serie läuft.",
          "Scopri su quale piattaforma vedere un film o una serie.",
          "映画やドラマの配信先を検索。",
          "Tafuta jukwaa linaloonyesha filamu au mfululizo."
        ),
      },
      {
        name: "Radio Garden",
        url: "https://radio.garden",
        desc: d(
          "Écoutez des radios du monde entier sur un globe interactif.",
          "Listen to radio stations worldwide on an interactive globe.",
          "Escucha radios de todo el mundo en un globo interactivo.",
          "Radiosender weltweit auf einem interaktiven Globus hören.",
          "Ascolta radio di tutto il mondo su un globo interattivo.",
          "インタラクティブな地球儀で世界中のラジオを聴く。",
          "Sikiliza redio za dunia nzima kwenye dunia shirikishi."
        ),
      },
      {
        name: "Every Noise at Once",
        url: "https://everynoise.com",
        desc: d(
          "Explorez des milliers de genres musicaux par l'écoute.",
          "Explore thousands of music genres by listening.",
          "Explora miles de géneros musicales escuchando.",
          "Tausende Musikgenres hörend entdecken.",
          "Esplora migliaia di generi musicali ascoltando.",
          "何千もの音楽ジャンルを試聴して探索。",
          "Gundua maelfu ya aina za muziki kwa kusikiliza."
        ),
      },
      {
        name: "Tunefind",
        url: "https://www.tunefind.com",
        desc: d(
          "Identifiez les musiques entendues dans films et séries.",
          "Identify songs heard in films and TV series.",
          "Identifica las canciones de películas y series.",
          "Songs aus Filmen und Serien identifizieren.",
          "Identifica le canzoni di film e serie TV.",
          "映画やドラマで流れた曲を特定。",
          "Tambua nyimbo zilizotumika kwenye filamu na mfululizo."
        ),
      },
      {
        name: "musicForProgramming",
        url: "https://musicforprogramming.net",
        desc: d(
          "Sélections musicales pensées pour la concentration.",
          "Music selections designed for deep focus.",
          "Selecciones musicales pensadas para concentrarse.",
          "Musikauswahl für konzentriertes Arbeiten.",
          "Selezioni musicali pensate per la concentrazione.",
          "集中するための音楽セレクション。",
          "Muziki ulioandaliwa kwa umakini wa kazi."
        ),
      },
      {
        name: "myNoise",
        url: "https://mynoise.net",
        desc: d(
          "Ambiances sonores personnalisables pour travailler au calme.",
          "Customizable background soundscapes for calm work.",
          "Ambientes sonoros personalizables para trabajar en calma.",
          "Anpassbare Klangkulissen für ruhiges Arbeiten.",
          "Ambienti sonori personalizzabili per lavorare in calma.",
          "作業用にカスタマイズできる環境音。",
          "Sauti za mazingira zinazobinafsishwa kwa utulivu."
        ),
      },
      {
        name: "Coffitivity",
        url: "https://coffitivity.com",
        desc: d(
          "L'ambiance d'un café pour stimuler la créativité.",
          "Café ambience to boost creativity.",
          "El ambiente de una cafetería para estimular la creatividad.",
          "Café-Atmosphäre für mehr Kreativität.",
          "L'atmosfera di un caffè per stimolare la creatività.",
          "創造性を高めるカフェの環境音。",
          "Mazingira ya mkahawa kuchochea ubunifu."
        ),
      },
    ],
  },
  {
    key: "tools",
    items: [
      {
        name: "AlternativeTo",
        url: "https://alternativeto.net",
        desc: d(
          "Trouvez des alternatives à n'importe quel logiciel.",
          "Find alternatives to any software or app.",
          "Encuentra alternativas a cualquier software.",
          "Alternativen zu jeder Software finden.",
          "Trova alternative a qualsiasi software.",
          "あらゆるソフトの代替を発見。",
          "Tafuta mbadala wa programu yoyote."
        ),
      },
      {
        name: "Photopea",
        url: "https://www.photopea.com",
        desc: d(
          "Alternative gratuite à Photoshop, directement dans le navigateur.",
          "Free Photoshop alternative, right in the browser.",
          "Alternativa gratuita a Photoshop en el navegador.",
          "Kostenlose Photoshop-Alternative direkt im Browser.",
          "Alternativa gratuita a Photoshop nel browser.",
          "ブラウザで使える無料のPhotoshop代替。",
          "Mbadala wa bure wa Photoshop ndani ya kivinjari."
        ),
      },
      {
        name: "Cleanup.pictures",
        url: "https://cleanup.pictures",
        desc: d(
          "Effacez un objet indésirable d'une photo en quelques secondes.",
          "Erase unwanted objects from a photo in seconds.",
          "Borra objetos no deseados de una foto en segundos.",
          "Unerwünschte Objekte in Sekunden aus Fotos entfernen.",
          "Cancella oggetti indesiderati da una foto in pochi secondi.",
          "写真から不要な物を数秒で消去。",
          "Futa vitu visivyohitajika kwenye picha kwa sekunde."
        ),
      },
      {
        name: "Unscreen",
        url: "https://www.unscreen.com",
        desc: d(
          "Supprimez l'arrière-plan d'une vidéo automatiquement.",
          "Remove the background from a video automatically.",
          "Elimina el fondo de un vídeo automáticamente.",
          "Videohintergründe automatisch entfernen.",
          "Rimuovi automaticamente lo sfondo di un video.",
          "動画の背景を自動で削除。",
          "Ondoa mandharinyuma ya video kiotomatiki."
        ),
      },
      {
        name: "ray.so",
        url: "https://ray.so",
        desc: d(
          "Transformez votre code en belles images à partager.",
          "Turn your code into beautiful shareable images.",
          "Convierte tu código en bonitas imágenes para compartir.",
          "Code in ansprechende, teilbare Bilder verwandeln.",
          "Trasforma il codice in belle immagini condivisibili.",
          "コードを美しい共有画像に変換。",
          "Geuza msimbo kuwa picha nzuri za kushiriki."
        ),
      },
      {
        name: "Shots.so",
        url: "https://shots.so",
        desc: d(
          "Créez des maquettes produit soignées à partir de captures.",
          "Create polished product mockups from screenshots.",
          "Crea maquetas de producto pulidas desde capturas.",
          "Aus Screenshots gepflegte Produkt-Mockups erstellen.",
          "Crea mockup di prodotto curati dagli screenshot.",
          "スクリーンショットから洗練された製品モックアップを作成。",
          "Tengeneza mifano ya bidhaa safi kutoka picha za skrini."
        ),
      },
      {
        name: "Smartmockups",
        url: "https://smartmockups.com",
        desc: d(
          "Présentez vos visuels sur des supports réalistes.",
          "Showcase your designs on realistic mockups.",
          "Muestra tus diseños en maquetas realistas.",
          "Designs auf realistischen Mockups präsentieren.",
          "Presenta i tuoi design su mockup realistici.",
          "リアルなモックアップでデザインを提示。",
          "Onyesha miundo yako kwenye mifano halisi."
        ),
      },
      {
        name: "Code Beautify",
        url: "https://codebeautify.org",
        desc: d(
          "Formatez, nettoyez et convertissez tout type de code.",
          "Format, clean and convert any kind of code.",
          "Formatea, limpia y convierte cualquier tipo de código.",
          "Code jeder Art formatieren, bereinigen und konvertieren.",
          "Formatta, pulisci e converti qualsiasi codice.",
          "あらゆるコードの整形・変換。",
          "Panga, safisha na badilisha msimbo wa aina yoyote."
        ),
      },
      {
        name: "JSON Formatter",
        url: "https://jsonformatter.org",
        desc: d(
          "Validez et mettez en forme vos fichiers JSON.",
          "Validate and prettify your JSON files.",
          "Valida y formatea tus archivos JSON.",
          "JSON-Dateien validieren und formatieren.",
          "Valida e formatta i tuoi file JSON.",
          "JSONファイルの検証と整形。",
          "Thibitisha na panga faili zako za JSON."
        ),
      },
      {
        name: "Raindrop.io",
        url: "https://raindrop.io",
        desc: d(
          "Classez et retrouvez tous vos favoris au même endroit.",
          "Organize and find all your bookmarks in one place.",
          "Organiza y encuentra todos tus marcadores en un lugar.",
          "Alle Lesezeichen an einem Ort ordnen und finden.",
          "Organizza e ritrova tutti i segnalibri in un unico posto.",
          "ブックマークを一箇所で整理・検索。",
          "Panga na pata alamisho zako zote mahali pamoja."
        ),
      },
      {
        name: "TinEye",
        url: "https://tineye.com",
        desc: d(
          "Recherche d'image inversée pour vérifier une source.",
          "Reverse image search to verify a source.",
          "Búsqueda inversa de imágenes para verificar una fuente.",
          "Rückwärtssuche für Bilder zur Quellenprüfung.",
          "Ricerca inversa di immagini per verificare una fonte.",
          "出典確認のための画像逆検索。",
          "Utafutaji wa picha kinyume ili kuthibitisha chanzo."
        ),
      },
      {
        name: "Archive.today",
        url: "https://archive.ph",
        desc: d(
          "Sauvegardez une page web telle qu'elle est aujourd'hui.",
          "Save a snapshot of a web page as it is today.",
          "Guarda una página web tal como está hoy.",
          "Eine Webseite im heutigen Zustand speichern.",
          "Salva una pagina web così com'è oggi.",
          "ウェブページを現状のまま保存。",
          "Hifadhi ukurasa wa wavuti kama ulivyo leo."
        ),
      },
      {
        name: "Privnote",
        url: "https://privnote.com",
        desc: d(
          "Envoyez une note qui s'autodétruit après lecture.",
          "Send a note that self-destructs after reading.",
          "Envía una nota que se autodestruye tras leerla.",
          "Eine Notiz senden, die sich nach dem Lesen löscht.",
          "Invia una nota che si autodistrugge dopo la lettura.",
          "読んだ後に自動消滅するメモを送信。",
          "Tuma ujumbe unaojifuta baada ya kusomwa."
        ),
      },
      {
        name: "Temp Mail",
        url: "https://temp-mail.org",
        desc: d(
          "Adresse e-mail jetable pour éviter le spam.",
          "Disposable email address to avoid spam.",
          "Dirección de correo desechable para evitar spam.",
          "Wegwerf-E-Mail-Adresse gegen Spam.",
          "Indirizzo email usa e getta contro lo spam.",
          "迷惑メール対策の使い捨てメールアドレス。",
          "Barua pepe ya muda kuepuka taka."
        ),
      },
      {
        name: "File.io",
        url: "https://www.file.io",
        desc: d(
          "Partage de fichiers temporaire, supprimé après téléchargement.",
          "Temporary file sharing, deleted after download.",
          "Compartir archivos temporal, se borra tras la descarga.",
          "Temporäres Teilen von Dateien, nach Download gelöscht.",
          "Condivisione file temporanea, cancellata dopo il download.",
          "ダウンロード後に消える一時ファイル共有。",
          "Kushiriki faili kwa muda, hufutwa baada ya kupakuliwa."
        ),
      },
    ],
  },
];
