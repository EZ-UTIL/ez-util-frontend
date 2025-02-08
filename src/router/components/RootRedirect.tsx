import { Navigate } from 'react-router';

const supportedLanguages = [
  'cs', 'da', 'de', 'en', 'es', 'fr', 'id', 'it', 'hu',
  'nl', 'no', 'pl', 'pt', 'ro', 'fi', 'sv', 'vi', 'tr',
  'el', 'ru', 'mr', 'hi', 'ta', 'te', 'th', 'ko', 'ja',
  'zh-CN', 'zh-TW'
];

export function RootRedirect() {
 let lang = localStorage.getItem('lang');

 if (!lang || !supportedLanguages.includes(lang)) {
   const rawLang = navigator.language.split('-')[0].toLowerCase();
   lang = rawLang === 'zh' ? 'zh-CN' : rawLang;
   if (!supportedLanguages.includes(lang)) {
     lang = 'en';
   }
 }

 return <Navigate to={`/${lang}`} replace />;
};

