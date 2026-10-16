import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import sw from "./locales/sw.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import ja from "./locales/ja.json";
import { countryTranslations } from "./countryTranslations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { ...en, countries: countryTranslations.en } },
      fr: { translation: { ...fr, countries: countryTranslations.fr } },
      sw: { translation: { ...sw, countries: countryTranslations.sw } },
      de: { translation: { ...de, countries: countryTranslations.de } },
      es: { translation: { ...es, countries: countryTranslations.es } },
      it: { translation: { ...it, countries: countryTranslations.it } },
      ja: { translation: { ...ja, countries: countryTranslations.ja } },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
