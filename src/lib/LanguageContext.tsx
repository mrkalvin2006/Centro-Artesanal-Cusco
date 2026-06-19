import React, { createContext, useState, useContext } from 'react';

const translations = {
  ES: {
    welcomeTitle: 'Bienvenido', welcomeSubtitle: 'Seleccione su idioma para continuar', welcomeEnter: 'INGRESAR',
    navInicio: 'Inicio', navHistoria: 'Nuestra Historia', navCategorias: 'Categorías', navGaleria: 'Galería', navUbicacion: 'Ubicación', navVisitanos: 'Visítanos',
    heroBtnExplore: 'Explorar Pasajes', heroBtnLocation: 'Cómo Llegar', heroBtnContact: 'Contactar',
    heroStat1: '24 Pasajes', heroStat2: '+300 Artesanos', heroStat3: 'Cultura Viva',
    heroSlide1Badge: 'Centro Artesanal Cusco', heroSlide1Title1: 'CENTRO', heroSlide1Title2: 'ARTESANAL', heroSlide1Title3: 'CUSCO', heroSlide1Desc: 'Más de 300 artesanos reunidos en un solo lugar para compartir la riqueza cultural del Cusco.',
    heroSlide2Badge: 'Manos Cusqueñas al Mundo', heroSlide2Title1: 'ARTE', heroSlide2Title2: 'HECHO', heroSlide2Title3: 'A MANO', heroSlide2Desc: 'Conoce a nuestros maestros artesanos y descubre técnicas transmitidas de generación en generación.',
    heroSlide3Badge: 'Tradición Viva', heroSlide3Title1: 'TEXTILES', heroSlide3Title2: 'Y', heroSlide3Title3: 'CULTURA', heroSlide3Desc: 'Textiles, tejidos y expresiones artísticas que mantienen vivo el legado de nuestros antepasados.',
    aboutBadge: 'Nuestra Historia', aboutTitleTop: 'Centro Artesanal', aboutTitleBottom: ' Cusco',
    aboutP1: 'El Centro Artesanal Cusco es uno de los espacios culturales y comerciales más importantes de la ciudad imperial. Reúne a cientos de artesanos que mantienen vivas las técnicas ancestrales heredadas de generación en generación.',
    aboutP2: 'Aquí convergen el arte textil, la cerámica, la joyería, la talla en madera, los instrumentos musicales y diversas expresiones culturales que representan la riqueza del patrimonio andino.',
    aboutP3: 'Nuestro objetivo es promover el talento local, fortalecer la economía de las familias artesanas y ofrecer a visitantes nacionales e internacionales una experiencia auténtica llena de tradición, identidad y creatividad.',
    aboutMissionTitle: 'Misión', aboutMissionDesc: 'Promover, fortalecer y visibilizar el trabajo de los artesanos cusqueños, ofreciendo un espacio digno para la difusión de su arte y tradición.',
    aboutVisionTitle: 'Visión', aboutVisionDesc: 'Ser un referente cultural y turístico del Cusco, reconocido por preservar la identidad andina y conectar el arte local con el mundo.',
    aboutValuesTitle: 'Valores', aboutValuesList: 'Autenticidad,Comercio Justo,Respeto Cultural,Excelencia,Sostenibilidad',
    galleryBadge: 'Galería', galleryTitleTop: 'GALERÍA', galleryTitleBottom: ' PREMIUM', galleryDesc: 'Próximamente compartiremos fotografías reales de nuestros pasajes, stands, artesanías y visitantes. Por ahora, explora nuestros rubros artísticos.',
    dirTitleTop: 'Directorio de', dirTitleBottom: ' Artesanos', dirDesc: 'Explora nuestros más de 300 stands. Filtra por rubro artesanal o navega por nuestros pasajes.', dirSearch: 'Buscar stand o artesano...', dirRubros: 'Rubros', dirPasajes: 'Pasajes', dirBtnContact: 'Contactar', dirNotFoundTitle: 'No encontramos ningún stand', dirNotFoundDesc: 'Intenta cambiar los filtros o tu término de búsqueda.',
  },
  EN: {
    welcomeTitle: 'Welcome', welcomeSubtitle: 'Select your language to continue', welcomeEnter: 'ENTER',
    navInicio: 'Home', navHistoria: 'Our History', navCategorias: 'Categories', navGaleria: 'Gallery', navUbicacion: 'Location', navVisitanos: 'Visit Us',
    heroBtnExplore: 'Explore Passages', heroBtnLocation: 'How to Get There', heroBtnContact: 'Contact',
    heroStat1: '24 Passages', heroStat2: '300+ Artisans', heroStat3: 'Living Culture',
    heroSlide1Badge: 'Cusco Artisanal Center', heroSlide1Title1: 'CUSCO', heroSlide1Title2: 'ARTISANAL', heroSlide1Title3: 'CENTER', heroSlide1Desc: 'More than 300 artisans gathered in one place to share the cultural wealth of Cusco.',
    heroSlide2Badge: 'Cusco Hands to the World', heroSlide2Title1: 'HANDMADE', heroSlide2Title2: 'ART', heroSlide2Title3: 'AND CRAFT', heroSlide2Desc: 'Meet our master artisans and discover techniques passed down from generation to generation.',
    heroSlide3Badge: 'Living Tradition', heroSlide3Title1: 'TEXTILES', heroSlide3Title2: '&', heroSlide3Title3: 'CULTURE', heroSlide3Desc: 'Textiles, weavings, and artistic expressions that keep the legacy of our ancestors alive.',
    aboutBadge: 'Our History', aboutTitleTop: 'Artisanal Center', aboutTitleBottom: ' Cusco',
    aboutP1: 'The Cusco Artisanal Center is one of the most important cultural and commercial spaces in the imperial city. It brings together hundreds of artisans who keep alive ancestral techniques inherited from generation to generation.',
    aboutP2: 'Textile art, ceramics, jewelry, wood carving, musical instruments, and various cultural expressions converge here, representing the richness of the Andean heritage.',
    aboutP3: 'Our goal is to promote local talent, strengthen the economy of artisan families, and offer national and international visitors an authentic experience full of tradition, identity, and creativity.',
    aboutMissionTitle: 'Mission', aboutMissionDesc: 'To promote, strengthen, and make visible the work of Cusco artisans, offering a dignified space for the dissemination of their art and tradition.',
    aboutVisionTitle: 'Vision', aboutVisionDesc: 'To be a cultural and tourist benchmark in Cusco, recognized for preserving Andean identity and connecting local art with the world.',
    aboutValuesTitle: 'Values', aboutValuesList: 'Authenticity,Fair Trade,Cultural Respect,Excellence,Sustainability',
    galleryBadge: 'Gallery', galleryTitleTop: 'PREMIUM', galleryTitleBottom: ' GALLERY', galleryDesc: 'We will soon share real photographs of our passages, stands, crafts, and visitors. For now, explore our artistic categories.',
    dirTitleTop: 'Artisan', dirTitleBottom: ' Directory', dirDesc: 'Explore our more than 300 stands. Filter by craft category or browse our passages.', dirSearch: 'Search stand or artisan...', dirRubros: 'Categories', dirPasajes: 'Passages', dirBtnContact: 'Contact', dirNotFoundTitle: 'No stands found', dirNotFoundDesc: 'Try changing the filters or your search term.',
  },
  PT: {
    welcomeTitle: 'Bem-vindo', welcomeSubtitle: 'Selecione seu idioma para continuar', welcomeEnter: 'ENTRAR',
    navInicio: 'Início', navHistoria: 'Nossa História', navCategorias: 'Categorias', navGaleria: 'Galeria', navUbicacion: 'Localização', navVisitanos: 'Visite-nos',
    heroBtnExplore: 'Explorar Passagens', heroBtnLocation: 'Como Chegar', heroBtnContact: 'Contato',
    heroStat1: '24 Corredores', heroStat2: '+300 Artesãos', heroStat3: 'Cultura Viva',
    heroSlide1Badge: 'Centro Artesanal Cusco', heroSlide1Title1: 'CENTRO', heroSlide1Title2: 'ARTESANAL', heroSlide1Title3: 'CUSCO', heroSlide1Desc: 'Mais de 300 artesãos reunidos em um só lugar para compartilhar a riqueza cultural de Cusco.',
    heroSlide2Badge: 'Mãos de Cusco para o Mundo', heroSlide2Title1: 'ARTE', heroSlide2Title2: 'FEITA', heroSlide2Title3: 'À MÃO', heroSlide2Desc: 'Conheça nossos mestres artesãos e descubra técnicas transmitidas de geração em geração.',
    heroSlide3Badge: 'Tradição Viva', heroSlide3Title1: 'TÊXTEIS', heroSlide3Title2: 'E', heroSlide3Title3: 'CULTURA', heroSlide3Desc: 'Têxteis, tecidos e expressões artísticas que mantêm vivo o legado de nossos antepassados.',
    aboutBadge: 'Nossa História', aboutTitleTop: 'Centro Artesanal', aboutTitleBottom: ' Cusco',
    aboutP1: 'O Centro Artesanal Cusco é um dos espaços culturais e comerciais mais importantes da cidade imperial. Reúne centenas de artesãos que mantêm vivas as técnicas ancestrais herdadas de geração em geração.',
    aboutP2: 'Aqui convergem a arte têxtil, a cerâmica, a joalheria, a escultura em madeira, os instrumentos musicais e diversas expressões culturais que representam a riqueza do patrimônio andino.',
    aboutP3: 'Nosso objetivo é promover o talento local, fortalecer a economia das famílias artesãs e oferecer aos visitantes uma experiência autêntica, cheia de tradição, identidade e criatividade.',
    aboutMissionTitle: 'Missão', aboutMissionDesc: 'Promover, fortalecer e dar visibilidade ao trabalho dos artesãos de Cusco, oferecendo um espaço digno para a difusão de sua arte e tradição.',
    aboutVisionTitle: 'Visão', aboutVisionDesc: 'Ser uma referência cultural e turística de Cusco, reconhecida por preservar a identidade andina e conectar a arte local com o mundo.',
    aboutValuesTitle: 'Valores', aboutValuesList: 'Autenticidade,Comércio Justo,Respeito Cultural,Excelência,Sustentabilidade',
    galleryBadge: 'Galeria', galleryTitleTop: 'GALERIA', galleryTitleBottom: ' PREMIUM', galleryDesc: 'Em breve compartilharemos fotos reais de nossos corredores, estandes, artesanatos e visitantes. Por enquanto, explore nossas categorias artísticas.',
    dirTitleTop: 'Diretório de', dirTitleBottom: ' Artesãos', dirDesc: 'Explore nossos mais de 300 estandes. Filtre por categoria de artesanato ou navegue por nossos corredores.', dirSearch: 'Buscar estande ou artesão...', dirRubros: 'Categorias', dirPasajes: 'Corredores', dirBtnContact: 'Contato', dirNotFoundTitle: 'Nenhum estande encontrado', dirNotFoundDesc: 'Tente mudar os filtros ou seu termo de busca.',
  },
  FR: {
    welcomeTitle: 'Bienvenue', welcomeSubtitle: 'Sélectionnez votre langue pour continuer', welcomeEnter: 'ENTRER',
    navInicio: 'Accueil', navHistoria: 'Notre Histoire', navCategorias: 'Catégories', navGaleria: 'Galerie', navUbicacion: 'Emplacement', navVisitanos: 'Visitez-nous',
    heroBtnExplore: 'Explorer les Passages', heroBtnLocation: 'Comment s\'y rendre', heroBtnContact: 'Contact',
    heroStat1: '24 Passages', heroStat2: '+300 Artisans', heroStat3: 'Culture Vivante',
    heroSlide1Badge: 'Centre Artisanal Cusco', heroSlide1Title1: 'CENTRE', heroSlide1Title2: 'ARTISANAL', heroSlide1Title3: 'CUSCO', heroSlide1Desc: 'Plus de 300 artisans réunis en un seul lieu pour partager la richesse culturelle de Cusco.',
    heroSlide2Badge: 'Les Mains de Cusco au Monde', heroSlide2Title1: 'ART', heroSlide2Title2: 'FAIT', heroSlide2Title3: 'À LA MAIN', heroSlide2Desc: 'Rencontrez nos maîtres artisans et découvrez des techniques transmises de génération en génération.',
    heroSlide3Badge: 'Tradition Vivante', heroSlide3Title1: 'TEXTILES', heroSlide3Title2: 'ET', heroSlide3Title3: 'CULTURE', heroSlide3Desc: 'Textiles, tissages et expressions artistiques qui maintiennent vivant l\'héritage de nos ancêtres.',
    aboutBadge: 'Notre Histoire', aboutTitleTop: 'Centre Artisanal', aboutTitleBottom: ' Cusco',
    aboutP1: 'Le Centre Artisanal de Cusco est l\'un des espaces culturels et commerciaux les plus importants de la ville impériale. Il rassemble des centaines d\'artisans qui perpétuent des techniques ancestrales.',
    aboutP2: 'Ici convergent l\'art textile, la céramique, la bijouterie, la sculpture sur bois et diverses expressions culturelles qui représentent la richesse du patrimoine andin.',
    aboutP3: 'Notre objectif est de promouvoir les talents locaux, de renforcer l\'économie des familles d\'artisans et d\'offrir aux visiteurs une expérience authentique pleine de tradition et de créativité.',
    aboutMissionTitle: 'Mission', aboutMissionDesc: 'Promouvoir, renforcer et rendre visible le travail des artisans de Cusco, en offrant un espace digne pour la diffusion de leur art.',
    aboutVisionTitle: 'Vision', aboutVisionDesc: 'Être une référence culturelle et touristique à Cusco, reconnue pour la préservation de l\'identité andine.',
    aboutValuesTitle: 'Valeurs', aboutValuesList: 'Authenticité,Commerce Équitable,Respect Culturel,Excellence,Durabilité',
    galleryBadge: 'Galerie', galleryTitleTop: 'GALERIE', galleryTitleBottom: ' PREMIUM', galleryDesc: 'Nous partagerons bientôt de vraies photos de nos passages, stands, artisanats et visiteurs. Pour l\'instant, explorez nos catégories artistiques.',
    dirTitleTop: 'Annuaire des', dirTitleBottom: ' Artisans', dirDesc: 'Explorez nos plus de 300 stands. Filtrez par catégorie d\'artisanat ou parcourez nos passages.', dirSearch: 'Rechercher un stand ou un artisan...', dirRubros: 'Catégories', dirPasajes: 'Passages', dirBtnContact: 'Contact', dirNotFoundTitle: 'Aucun stand trouvé', dirNotFoundDesc: 'Essayez de modifier les filtres ou votre terme de recherche.',
  },
  ZH: {
    welcomeTitle: '欢迎', welcomeSubtitle: '请选择您的语言以继续', welcomeEnter: '进入',
    navInicio: '首页', navHistoria: '我们的历史', navCategorias: '类别', navGaleria: '画廊', navUbicacion: '位置', navVisitanos: '访问我们',
    heroBtnExplore: '探索通道', heroBtnLocation: '如何到达', heroBtnContact: '联系我们',
    heroStat1: '24 个通道', heroStat2: '300+ 名工匠', heroStat3: '活文化',
    heroSlide1Badge: '库斯科手工艺中心', heroSlide1Title1: '库斯科', heroSlide1Title2: '手工艺', heroSlide1Title3: '中心', heroSlide1Desc: '超过300名工匠聚集在一个地方，分享库斯科的文化财富。',
    heroSlide2Badge: '库斯科之手走向世界', heroSlide2Title1: '手工', heroSlide2Title2: '制作', heroSlide2Title3: '艺术', heroSlide2Desc: '认识我们的手工艺大师，发现代代相传的技艺。',
    heroSlide3Badge: '活态传统', heroSlide3Title1: '纺织品', heroSlide3Title2: '与', heroSlide3Title3: '文化', heroSlide3Desc: '纺织品、编织品和艺术表现形式让祖先的遗产保持活力。',
    aboutBadge: '我们的历史', aboutTitleTop: '手工艺中心', aboutTitleBottom: ' 库斯科',
    aboutP1: '库斯科手工艺中心是帝国城市最重要的文化和商业空间之一。它汇集了数百名工匠，他们传承了代代相传的古老技艺。',
    aboutP2: '这里汇聚了纺织艺术、陶瓷、珠宝、木雕、乐器和各种代表安第斯遗产丰富的文化表现形式。',
    aboutP3: '我们的目标是促进当地人才，加强工匠家庭的经济，为国内和国际游客提供充满传统、身份和创造力的真实体验。',
    aboutMissionTitle: '使命', aboutMissionDesc: '促进、加强和展示库斯科工匠的作品，为传播他们的艺术和传统提供一个有尊严的空间。',
    aboutVisionTitle: '愿景', aboutVisionDesc: '成为库斯科的文化和旅游标杆，因保护安第斯身份并将当地艺术与世界连接而受到认可。',
    aboutValuesTitle: '价值观', aboutValuesList: '真实性,公平贸易,文化尊重,卓越,可持续性',
    galleryBadge: '画廊', galleryTitleTop: '高级', galleryTitleBottom: ' 画廊', galleryDesc: '我们很快将分享我们的通道、摊位、手工艺品和游客的真实照片。现在，请探索我们的艺术类别。',
    dirTitleTop: '工匠', dirTitleBottom: ' 目录', dirDesc: '探索我们300多个摊位。按手工艺类别过滤或浏览我们的通道。', dirSearch: '搜索摊位或工匠...', dirRubros: '类别', dirPasajes: '通道', dirBtnContact: '联系', dirNotFoundTitle: '未找到摊位', dirNotFoundDesc: '请尝试更改过滤器或搜索词。',
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