'use client';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

void i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['es'],
    react: {
      useSuspense: false
    },
    defaultNS: 'common',
    ns: ['common'],
    detection: {
      order: ['querystring', 'navigator', 'cookie', 'htmlTag']
    }
  });

export default i18n;
