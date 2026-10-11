import type { Lang, ResourceCategory } from "./resourceItems";

const item = (name: string, url: string, fr: string, en: string, es: string, de: string, it: string, ja: string, sw: string) => ({
  name, url, desc: { fr, en, es, de, it, ja, sw } satisfies Record<Lang, string>,
});

export const toolboxCategories: ResourceCategory[] = [
  { key: "research", items: [
    item("Sci-Hub", "https://sci-hub.se", "Bibliothèque de publications scientifiques ; vérifiez les droits d’accès applicables.", "Scientific paper library; check applicable access rights.", "Biblioteca científica; consulta los derechos de acceso aplicables.", "Bibliothek wissenschaftlicher Arbeiten; geltende Zugriffsrechte prüfen.", "Biblioteca scientifica; verifica i diritti di accesso applicabili.", "学術論文ライブラリ。適用されるアクセス権を確認。", "Maktaba ya makala za kisayansi; angalia haki za ufikiaji."),
  ]},
  { key: "learning", items: [
    item("Coursera", "https://www.coursera.org", "Découvrez des cours universitaires et leurs options d’accès.", "Explore university courses and their access options.", "Explora cursos universitarios y sus opciones de acceso.", "Hochschulkurse und Zugangsoptionen entdecken.", "Esplora corsi universitari e opzioni di accesso.", "大学講座と受講方法を探索。", "Gundua kozi za vyuo na njia za kuzipata."),
    item("Keybr", "https://www.keybr.com", "Entraînez-vous à taper au clavier avec précision.", "Practice accurate touch typing.", "Practica mecanografía con precisión.", "Präzises Tippen trainieren.", "Esercitati a digitare con precisione.", "正確なタッチタイピングを練習。", "Jifunze kuandika kwa usahihi kwenye kibodi."),
    item("Monkeytype", "https://monkeytype.com", "Mesurez votre vitesse et votre précision de frappe.", "Measure typing speed and accuracy.", "Mide tu velocidad y precisión al escribir.", "Tippgeschwindigkeit und Genauigkeit messen.", "Misura velocità e precisione di digitazione.", "タイピング速度と正確さを測定。", "Pima kasi na usahihi wa kuandika."),
    item("Anki", "https://ankiweb.net", "Mémorisez avec des cartes et la répétition espacée.", "Learn with flashcards and spaced repetition.", "Aprende con tarjetas y repetición espaciada.", "Mit Lernkarten und verteilten Wiederholungen lernen.", "Impara con schede e ripetizione dilazionata.", "単語カードと間隔反復で学習。", "Jifunze kwa kadi na marudio yaliyopangwa."),
  ]},
  { key: "files", items: [
    item("TinyWow", "https://tinywow.com", "Outils rapides pour les PDF, images et fichiers.", "Quick tools for PDFs, images and files.", "Herramientas rápidas para PDF, imágenes y archivos.", "Schnelle Werkzeuge für PDFs, Bilder und Dateien.", "Strumenti rapidi per PDF, immagini e file.", "PDF・画像・ファイル用の便利なツール。", "Zana za haraka za PDF, picha na faili."),
    item("CloudConvert", "https://cloudconvert.com", "Convertissez des fichiers entre différents formats.", "Convert files between different formats.", "Convierte archivos entre distintos formatos.", "Dateien zwischen verschiedenen Formaten konvertieren.", "Converti file tra diversi formati.", "ファイルを各種形式に変換。", "Badilisha faili kati ya miundo mbalimbali."),
    item("HandBrake", "https://handbrake.fr", "Convertissez et compressez vos vidéos avec un logiciel libre.", "Convert and compress videos with open-source software.", "Convierte y comprime vídeos con software libre.", "Videos mit freier Software konvertieren und komprimieren.", "Converti e comprimi video con software libero.", "オープンソースソフトで動画を変換・圧縮。", "Badilisha na bana video kwa programu huria."),
  ]},
  { key: "design", items: [
    item("Excalidraw", "https://excalidraw.com", "Dessinez rapidement des schémas sur un tableau partagé.", "Draw quick diagrams on a shared whiteboard.", "Dibuja diagramas rápidos en una pizarra compartida.", "Schnelle Diagramme auf einem gemeinsamen Whiteboard zeichnen.", "Disegna diagrammi su una lavagna condivisa.", "共有ホワイトボードで図を手軽に作成。", "Chora michoro haraka kwenye ubao wa pamoja."),
    item("Figma", "https://www.figma.com", "Concevez des interfaces et des prototypes en équipe.", "Design interfaces and prototypes collaboratively.", "Diseña interfaces y prototipos en equipo.", "Oberflächen und Prototypen gemeinsam gestalten.", "Progetta interfacce e prototipi in gruppo.", "チームでインターフェースと試作品を設計。", "Buni violesura na mifano kwa ushirikiano."),
  ]},
  { key: "media", items: [
    item("Endel", "https://endel.io", "Ambiances sonores pour la concentration et la détente.", "Soundscapes for focus and relaxation.", "Paisajes sonoros para concentrarse y relajarse.", "Klangwelten für Konzentration und Entspannung.", "Paesaggi sonori per concentrazione e relax.", "集中とリラックスのための音環境。", "Mazingira ya sauti kwa umakini na mapumziko."),
    item("yt-dlp", "https://github.com/yt-dlp/yt-dlp", "Outil libre de téléchargement vidéo, à utiliser avec les autorisations nécessaires.", "Open-source video downloader; use with the necessary permissions.", "Descargador de vídeo libre; úsalo con los permisos necesarios.", "Freier Video-Downloader; mit den erforderlichen Berechtigungen nutzen.", "Strumento libero per scaricare video con le autorizzazioni necessarie.", "必要な許可を得て使用する動画ダウンロードツール。", "Zana huria ya kupakua video; tumia kwa ruhusa zinazohitajika."),
  ]},
  { key: "archive", items: [
    item("Wayback Machine", "https://web.archive.org", "Retrouvez les anciennes versions des pages web.", "Browse past versions of web pages.", "Consulta versiones antiguas de páginas web.", "Frühere Versionen von Webseiten ansehen.", "Consulta versioni precedenti delle pagine web.", "ウェブページの過去の版を閲覧。", "Tazama matoleo ya zamani ya kurasa za wavuti."),
  ]},
  { key: "security", items: [
    item("Similarweb", "https://www.similarweb.com", "Explorez les estimations de trafic des sites web.", "Explore website traffic estimates.", "Explora estimaciones de tráfico web.", "Geschätzte Besucherzahlen von Websites erkunden.", "Esplora stime del traffico dei siti web.", "ウェブサイトの推定アクセス数を確認。", "Chunguza makadirio ya trafiki ya tovuti."),
    item("UptimeRobot", "https://uptimerobot.com", "Surveillez la disponibilité de vos sites web.", "Monitor website availability.", "Supervisa la disponibilidad de tus sitios web.", "Die Verfügbarkeit von Websites überwachen.", "Monitora la disponibilità dei siti web.", "ウェブサイトの稼働状況を監視。", "Fuatilia upatikanaji wa tovuti zako."),
    item("PageSpeed Insights", "https://pagespeed.web.dev", "Analysez les performances de vos pages web.", "Analyze web page performance.", "Analiza el rendimiento de páginas web.", "Die Leistung von Webseiten analysieren.", "Analizza le prestazioni delle pagine web.", "ウェブページの性能を分析。", "Changanua utendaji wa kurasa za wavuti."),
  ]},
  { key: "dev", items: [
    item("Diffchecker", "https://www.diffchecker.com", "Comparez deux textes et repérez les différences.", "Compare two texts and spot differences.", "Compara textos y detecta diferencias.", "Texte vergleichen und Unterschiede erkennen.", "Confronta testi e individua le differenze.", "テキストを比較して違いを検出。", "Linganisha maandishi na tambua tofauti."),
    item("JavaScript Obfuscator", "https://obfuscator.io", "Transformez le code JavaScript pour le rendre moins lisible.", "Transform JavaScript code to make it harder to read.", "Transforma JavaScript para dificultar su lectura.", "JavaScript-Code schwerer lesbar machen.", "Trasforma JavaScript per renderlo meno leggibile.", "JavaScriptコードを難読化。", "Badilisha msimbo wa JavaScript uwe mgumu kusoma."),
  ]},
  { key: "productivity", items: [
    item("Obsidian", "https://obsidian.md", "Organisez vos connaissances dans des notes locales liées.", "Organize knowledge in linked local notes.", "Organiza conocimientos en notas locales enlazadas.", "Wissen in verknüpften lokalen Notizen organisieren.", "Organizza conoscenze in note locali collegate.", "ローカルのリンク付きノートで知識を整理。", "Panga maarifa katika madokezo ya ndani yaliyounganishwa."),
    item("Todoist", "https://todoist.com", "Organisez vos tâches et vos projets quotidiens.", "Organize everyday tasks and projects.", "Organiza tareas y proyectos diarios.", "Tägliche Aufgaben und Projekte organisieren.", "Organizza attività e progetti quotidiani.", "日々のタスクとプロジェクトを整理。", "Panga kazi na miradi ya kila siku."),
    item("Miro", "https://miro.com", "Collaborez sur un tableau blanc pour vos idées et projets.", "Collaborate on a whiteboard for ideas and projects.", "Colabora en una pizarra para ideas y proyectos.", "Ideen und Projekte auf einem Whiteboard gemeinsam bearbeiten.", "Collabora su una lavagna per idee e progetti.", "ホワイトボードでアイデアとプロジェクトを共同作成。", "Shirikiana kwenye ubao kwa mawazo na miradi."),
  ]},
  { key: "sharing", items: [
    item("LocalSend", "https://localsend.org", "Transférez des fichiers entre appareils sur votre réseau local.", "Transfer files between devices on your local network.", "Transfiere archivos entre dispositivos en tu red local.", "Dateien zwischen Geräten im lokalen Netzwerk übertragen.", "Trasferisci file tra dispositivi sulla rete locale.", "ローカルネットワークで端末間のファイルを転送。", "Hamisha faili kati ya vifaa kwenye mtandao wako wa ndani."),
  ]},
];