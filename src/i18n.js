import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationDe from "./../locales/de/de.json";
import translationEn from "./../locales/en/en.json";
import translationRu from "./../locales/ru/ru.json";
import translationUk from "./../locales/Uk/Uk.json";

i18n.use(initReactI18next).init({
  fallbackLng: "de",
  debug: true,
  lng: "de",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    de: {
      translation: translationDe,
    },
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
    uk: {
      translation: translationUk,
    },
  },
});

export default i18n;
