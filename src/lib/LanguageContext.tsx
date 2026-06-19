import React, { createContext, useState, useContext } from 'react';

const translations = {
  ES: {
    welcomeTitle: 'Bienvenido', welcomeSubtitle: 'Seleccione su idioma para continuar', welcomeEnter: 'INGRESAR',
    navInicio: 'Inicio', navHistoria: 'Nuestra Historia', navCategorias: 'Categorías', navPasajes: 'Pasajes', navUbicacion: 'Ubicación', navVisitanos: 'Visítanos',
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
    aboutPeopleBadge: 'Nuestra Gente', aboutPeopleTitleTop: 'Manos que ', aboutPeopleTitleBottom: 'Crean Magia', aboutPeopleDesc: 'Conoce el rostro detrás del arte. Detrás de cada pieza extraordinaria existe una vida dedicada al perfeccionamiento de una técnica milenaria.',
    aboutProcessBadge: 'Detrás de la Magia', aboutProcessTitleTop: 'El Arte en ', aboutProcessTitleBottom: 'Proceso',
    artisan1Craft: 'Arte Textil Ancestral', artisan1Desc: 'Preservando el tejido andino tradicional, utilizando tintes naturales y técnicas milenarias.',
    artisan2Craft: 'Platería y Joyería', artisan2Desc: 'Diseños que fusionan la estética incaica con el arte virreinal en plata de la más alta pureza.',
    artisan3Craft: 'Cerámica Andina', artisan3Desc: 'Piezas utilitarias y decorativas que cuentan la cosmovisión andina a través del barro.',
  },

  EN: {
    welcomeTitle: 'Welcome', welcomeSubtitle: 'Select your language to continue', welcomeEnter: 'ENTER',
    navInicio: 'Home', navHistoria: 'Our History', navCategorias: 'Categories', navPasajes: 'Directory', navUbicacion: 'Location', navVisitanos: 'Visit Us',
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
    aboutPeopleBadge: 'Our People', aboutPeopleTitleTop: 'Hands that ', aboutPeopleTitleBottom: 'Create Magic', aboutPeopleDesc: 'Meet the faces behind the art. Behind every extraordinary piece is a life dedicated to perfecting a millenary technique.',
    aboutProcessBadge: 'Behind the Magic', aboutProcessTitleTop: 'Art in ', aboutProcessTitleBottom: 'Process',
    artisan1Craft: 'Ancestral Textile Art', artisan1Desc: 'Preserving traditional Andean weaving, using natural dyes and ancient techniques.',
    artisan2Craft: 'Silversmithing & Jewelry', artisan2Desc: 'Designs that fuse Incan aesthetics with colonial art in silver of the highest purity.',
    artisan3Craft: 'Andean Ceramics', artisan3Desc: 'Utilitarian and decorative pieces that tell the Andean worldview through clay.',
  },

  PT: {
    welcomeTitle: 'Bem-vindo', welcomeSubtitle: 'Selecione seu idioma para continuar', welcomeEnter: 'ENTRAR',
    navInicio: 'Início', navHistoria: 'Nossa História', navCategorias: 'Categorias', navPasajes: 'Diretório', navUbicacion: 'Localização', navVisitanos: 'Visite-nos',
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
    aboutPeopleBadge: 'Nossa Gente', aboutPeopleTitleTop: 'Mãos que ', aboutPeopleTitleBottom: 'Criam Magia', aboutPeopleDesc: 'Conheça os rostos por trás da arte. Por trás de cada peça extraordinária há uma vida dedicada ao aperfeiçoamento de uma técnica milenar.',
    aboutProcessBadge: 'Por Trás da Magia', aboutProcessTitleTop: 'A Arte em ', aboutProcessTitleBottom: 'Processo',
    artisan1Craft: 'Arte Têxtil Ancestral', artisan1Desc: 'Preservando a tecelagem andina tradicional, usando corantes naturais e técnicas milenares.',
    artisan2Craft: 'Ourivesaria e Joalheria', artisan2Desc: 'Designs que fundem a estética inca com a arte colonial em prata da mais alta pureza.',
    artisan3Craft: 'Cerâmica Andina', artisan3Desc: 'Peças utilitárias e decorativas que contam a cosmovisão andina através do barro.',
  },

  FR: {
    welcomeTitle: 'Bienvenue', welcomeSubtitle: 'Sélectionnez votre langue pour continuer', welcomeEnter: 'ENTRER',
    navInicio: 'Accueil', navHistoria: 'Notre Histoire', navCategorias: 'Catégories', navPasajes: 'Passages', navUbicacion: 'Emplacement', navVisitanos: 'Visitez-nous',
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
    aboutPeopleBadge: 'Notre Peuple', aboutPeopleTitleTop: 'Des Mains qui ', aboutPeopleTitleBottom: 'Créent la Magie', aboutPeopleDesc: 'Rencontrez les visages derrière l\'art. Derrière chaque pièce extraordinaire se cache une vie dédiée au perfectionnement d\'une technique millénaire.',
    aboutProcessBadge: 'Derrière la Magie', aboutProcessTitleTop: 'L\'Art en ', aboutProcessTitleBottom: 'Processus',
    artisan1Craft: 'Art Textile Ancestral', artisan1Desc: 'Préserver le tissage andin traditionnel, en utilisant des colorants naturels et des techniques anciennes.',
    artisan2Craft: 'Orfèvrerie et Bijouterie', artisan2Desc: 'Des designs qui fusionnent l\'esthétique inca avec l\'art colonial dans un argent de la plus haute pureté.',
    artisan3Craft: 'Céramique Andine', artisan3Desc: 'Des pièces utilitaires et décoratives qui racontent la vision du monde andine à travers l\'argile.',
  },

  ZH: {
    welcomeTitle: '欢迎', welcomeSubtitle: '请选择您的语言以继续', welcomeEnter: '进入',
    navInicio: '首页', navHistoria: '我们的历史', navCategorias: '类别', navPasajes: '通道', navUbicacion: '位置', navVisitanos: '访问我们',
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
    aboutPeopleBadge: '我们的人民', aboutPeopleTitleTop: '创造魔力', aboutPeopleTitleBottom: '的双手', aboutPeopleDesc: '认识艺术背后的面孔。每一件非凡作品背后，都是一生致力于完善一项千年技艺的奉献。',
    aboutProcessBadge: '魔力背后', aboutProcessTitleTop: '艺术', aboutProcessTitleBottom: '创作中',
    artisan1Craft: '古老纺织艺术', artisan1Desc: '保护传统的安第斯编织，使用天然染料和古老技艺。',
    artisan2Craft: '银器与珠宝', artisan2Desc: '将印加美学与殖民地艺术融合在最高纯度的银器中的设计。',
    artisan3Craft: '安第斯陶瓷', artisan3Desc: '通过粘土讲述安第斯世界观的实用和装饰作品。',
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