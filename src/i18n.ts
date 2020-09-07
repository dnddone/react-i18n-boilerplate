import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN
  }
};

i18n
  /**
   * load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
   * learn more: https://github.com/i18next/i18next-xhr-backend
   */
  // .use(Backend)

  /**
   * detect user language
   * learn more: https://github.com/i18next/i18next-browser-languageDetector
   */
  .use(LanguageDetector)

  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
