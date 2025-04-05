import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector) // Detectar el idioma del navegador
  .use(initReactI18next) // Conectar con React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    fallbackLng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false, // No es necesario escapar los valores en React
    },
  });

export default i18n;
