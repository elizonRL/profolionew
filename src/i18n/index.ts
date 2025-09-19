import es from './es.json';
import en from './en.json';

const translations = { es, en };

export function getTranslations(locale: string = 'es') {
  return translations[locale as keyof typeof translations] || translations.es;
}

export function t(key: string, locale: string = 'es') {
  const translation = getTranslations(locale);
  return key.split('.').reduce((obj: any, k) => obj?.[k], translation) || key;
}