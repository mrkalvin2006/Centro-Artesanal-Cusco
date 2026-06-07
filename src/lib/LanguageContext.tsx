import React, { createContext, useState, useContext } from 'react';

const translations = {
  ES: {
    navInicio: 'Inicio',
    navHistoria: 'Nuestra Historia',
    navCategorias: 'Categorías',
    navPasajes: 'Pasajes',
    navUbicacion: 'Ubicación',
    navVisitanos: 'Visítanos',

    heroBadge: 'Arte, tradición y cultura viva',
    heroTitleTop: 'Centro Artesanal',
    heroTitleBottom: 'Cusco',
    heroSubtitle:
      'Descubre artesanías, textiles, joyería, cerámica y recuerdos únicos en el corazón de la ciudad imperial.',
    heroBtnExplore: 'Explorar Pasajes',
    heroBtnLocation: 'Cómo Llegar',
    heroBtnContact: 'Contactar',
  },

  EN: {
    navInicio: 'Home',
    navHistoria: 'Our History',
    navCategorias: 'Categories',
    navPasajes: 'Directory',
    navUbicacion: 'Location',
    navVisitanos: 'Visit Us',

    heroBadge: 'Art, tradition and living culture',
    heroTitleTop: 'Artisan Center',
    heroTitleBottom: 'Cusco',
    heroSubtitle:
      'Discover crafts, textiles, jewelry, ceramics and unique souvenirs in the heart of the imperial city.',
    heroBtnExplore: 'Explore Passages',
    heroBtnLocation: 'How to Get There',
    heroBtnContact: 'Contact',
  },

  PT: {
    navInicio: 'Início',
    navHistoria: 'Nossa História',
    navCategorias: 'Categorias',
    navPasajes: 'Diretório',
    navUbicacion: 'Localização',
    navVisitanos: 'Visite-nos',

    heroBadge: 'Arte, tradição e cultura viva',
    heroTitleTop: 'Centro Artesanal',
    heroTitleBottom: 'Cusco',
    heroSubtitle:
      'Descubra artesanato, têxteis, joias, cerâmica e lembranças únicas no coração da cidade imperial.',
    heroBtnExplore: 'Explorar Passagens',
    heroBtnLocation: 'Como Chegar',
    heroBtnContact: 'Contato',
  },
};

type Language = keyof typeof translations;
type TranslationKey = keyof typeof translations.ES;

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}>({
  lang: 'ES',
  setLang: () => {},
  t: () => '',
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('ES');

  const t = (key: TranslationKey) => {
    return translations[lang]?.[key] || translations.ES[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);