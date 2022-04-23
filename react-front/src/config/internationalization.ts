import i18next, { TFunction } from 'i18next';
import httpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const initInternationalization = (): Promise<TFunction> =>
  i18next.use(httpBackend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'fr',
    debug: process.env.NODE_ENV === 'development',
  });
