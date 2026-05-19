// src/context/LanguageContext.tsx
import React, { createContext, useState, useContext } from 'react';

const translations = {
  ES: {
    navInicio: "Inicio",
    navHistoria: "Nuestra Historia",
    navCategorias: "Categorías",
    navPasajes: "Pasajes",
    navUbicacion: "Ubicación",
    navVisitanos: "Visítanos"
  },
  EN: {
    navInicio: "Home",
    navHistoria: "Our History",
    navCategorias: "Categories",
    navPasajes: "Directory",
    navUbicacion: "Location",
    navVisitanos: "Visit Us"
  },
  PT: {
    navInicio: "Início",
    navHistoria: "Nossa História",
    navCategorias: "Categorias",
    navPasajes: "Diretório",
    navUbicacion: "Localização",
    navVisitanos: "Visite-nos"
  },
  RU: {
    navInicio: "Главная",
    navHistoria: "Наша история",
    navCategorias: "Категории",
    navPasajes: "Каталог",
    navUbicacion: "Локация",
    navVisitanos: "Посетите нас"
  }
};

type Language = keyof typeof translations;

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations['ES']) => string;
}>({
  lang: 'ES',
  setLang: () => {},
  t: () => '',
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('ES');

  const t = (key: keyof typeof translations['ES']) => {
    return translations[lang]?.[key] || translations['ES'][key];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);