/* eslint-disable */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "../public/locales/en/translations.json";
import translationFR from "../public/locales/fr/translations.json";

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    // we init with resources
    resources: {
      en: {
        translations: translationEN,
      },
      fr: {
        translations: translationFR,
      },
    },

    lng: "en",
    fallbackLng: "en",
    debug: true,
    whitelist: ["en", "fr"],

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: ".",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
