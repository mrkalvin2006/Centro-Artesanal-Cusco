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

  FR: {
    navInicio: 'Accueil',
    navHistoria: 'Notre Histoire',
    navCategorias: 'Catégories',
    navPasajes: 'Passages',
    navUbicacion: 'Emplacement',
    navVisitanos: 'Visitez-nous',

    heroBadge: 'Art, tradition et culture vivante',
    heroTitleTop: 'Centre Artisanal',
    heroTitleBottom: 'Cusco',
    heroSubtitle:
      'Découvrez de l\'artisanat, des textiles, des bijoux, des céramiques et des souvenirs uniques au cœur de la ville impériale.',
    heroBtnExplore: 'Explorer les Passages',
    heroBtnLocation: 'Comment s\'y rendre',
    heroBtnContact: 'Contact',
  },

  ZH: {
    navInicio: '首页',
    navHistoria: '我们的历史',
    navCategorias: '类别',
    navPasajes: '通道',
    navUbicacion: '位置',
    navVisitanos: '访问我们',

    heroBadge: '艺术、传统与活文化',
    heroTitleTop: '手工艺中心',
    heroTitleBottom: '库斯科',
    heroSubtitle:
      '在帝国城市的中心探索工艺品、纺织品、珠宝、陶瓷和独特的纪念品。',
    heroBtnExplore: '探索通道',
    heroBtnLocation: '如何到达',
    heroBtnContact: '联系我们',
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