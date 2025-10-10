
export const Locale = ['es', 'en'];
import SvgTag from '@/icons/SvgTag.astro';

const TAGS = {
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#003159] text-white',
    tagIcon: 'tailwindcss', 
    icon: SvgTag,
  },
  ASTROICON: {
    name: 'Astro',
    class: 'bg-[#e06b27] text-white',
    tagIcon: 'astro', 
    icon: SvgTag,
  },
  Angular: {
    name: 'Angular',
    class: 'bg-red-600 text-white',
    tagIcon: 'angular', 
    icon: SvgTag, 
  },
  IONIC: {
    name: 'Ionic',
    class: 'bg-[#3880ff] text-white',
    tagIcon: 'ionic', 
    icon: SvgTag,
  },
  REACT: {
    name: 'React',
    class: 'bg-[#20232a] text-white',
    tagIcon: 'react', 
    icon: SvgTag,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'bg-[#1e3a8a] text-white',
    tagIcon: 'typescript', 
    icon: SvgTag,
  },
  NODE: {
    name: 'Node.js',
    class: 'bg-[#1a1a1a] text-white',
    tagIcon: 'node', 
    icon: SvgTag,
  },
  MONGODB: {
    name: 'MongoDB',
    class: 'bg-[#8b4513] text-white',
    tagIcon: 'mongodb', 
    icon: SvgTag,
  },
  DOCKER: {
    name: 'Docker',
    class: 'bg-[#f7fafc] text-black',
    tagIcon: 'docker', 
    icon: SvgTag,
  },

};

export const PROJECTS = [
    {
        slug: 'english-blog',
        title_es: 'ENGLISH BLOG - UN BLOG PARA APRENDER INGLÉS',
        title_en: 'ENGLISH BLOG - A BLOG TO LEARN ENGLISH',
        descrition_es: 'Un blog para aprender inglés con artículos, podcasts y videos. Contenido gratuito y de pago.',
        descrition_en: 'A blog to learn English with articles, podcasts and videos. Free and paid content.',
        descrition_es_long: 'English Learning Blog es una plataforma web moderna para aprender inglés que combina lecciones de gramática con quizzes interactivos y una experiencia de usuario excepcional.\n\n🛠️ Tecnologías\nAstro + TypeScript - Framework moderno para sitios web ultra-rápidos\nTailwind CSS - Diseño responsive y consistente\nMarkdown - Gestión de contenido educativo\nJavaScript Vanilla - Interactividad sin dependencias pesadas\n\n🎯 Características Principales\n5 lecciones completas de gramática inglesa (Modal Verbs, Conditionals, Past Perfect)\nQuizzes interactivos con feedback visual (verde/rojo) y explicaciones\nBento grid de idiomas con efectos hover modernos\nSistema de progreso de lectura en tiempo real\nDiseño glassmorphism con gradientes y micro-interacciones\n\n📊 Mejores Prácticas\nPerformance: Lazy loading, SSG, bundle splitting\nSEO: Meta tags optimizados, HTML semántico\nAccesibilidad: WCAG compliance, contraste adecuado\nCódigo limpio: Componentes modulares, tipado estricto\nUX/UI: Mobile-first, smooth scrolling, responsive design\n\n🌟 Valor Diferencial\nCombina tecnologías web modernas con metodología pedagógica efectiva, creando una experiencia de aprendizaje interactiva que es tanto técnicamente excelente como educativamente valiosa.\n\nResultado: Una plataforma rápida, accesible y visualmente atractiva que demuestra cómo las mejores prácticas de desarrollo web pueden potenciar la educación digital.',
        descrition_en_long: 'English Learning Blog is a modern web platform for learning English that combines grammar lessons with interactive quizzes and an exceptional user experience.\n\n🛠️ Technologies\nAstro + TypeScript - Modern framework for ultra-fast websites\nTailwind CSS - Responsive and consistent design\nMarkdown - Educational content management\nVanilla JavaScript - Interactivity without heavy dependencies\n\n🎯 Key Features\n5 complete English grammar lessons (Modal Verbs, Conditionals, Past Perfect)\nInteractive quizzes with visual feedback (green/red) and explanations\nLanguage bento grid with modern hover effects\nReal-time reading progress system\nGlassmorphism design with gradients and micro-interactions\n\n📊 Best Practices\nPerformance: Lazy loading, SSG, bundle splitting\nSEO: Optimized meta tags, semantic HTML\nAccessibility: WCAG compliance, adequate contrast\nClean code: Modular components, strict typing\nUX/UI: Mobile-first, smooth scrolling, responsive design\n\n🌟 Differential Value\nCombines modern web technologies with effective pedagogical methodology, creating an interactive learning experience that is both technically excellent and educationally valuable.\n\nResult: A fast, accessible and visually appealing platform that demonstrates how web development best practices can enhance digital education.',
        link: 'https://english-project-three.vercel.app/',
        github: 'https://github.com/elizonRL/english-blog',
        image: '/projects/englishblog.webp',
        tags: [TAGS.ASTROICON, TAGS.TAILWIND],
    },
    {
        slug: 'egresados-uasd',
        title_es: 'Egresados UASD - App móvil para egresados de la Universidad',
        title_en: 'UASD Graduates - Mobile app for university graduates',
        descrition_es: 'App móvil para egresados UASD. Conecta graduados, comparte habilidades y facilita oportunidades laborales.',
        descrition_en: 'Mobile app for UASD graduates. Connects alumni, shares skills and facilitates job opportunities.',
        descrition_es_long: 'Egresados UASD es una aplicación móvil híbrida desarrollada para conectar a los graduados de la Universidad Autónoma de Santo Domingo (UASD) y facilitar oportunidades de networking profesional.\n\n🛠️ Tecnologías\nAngular + TypeScript - Framework robusto para aplicaciones escalables\nIonic - Desarrollo híbrido multiplataforma (iOS/Android)\nCapacitor - Acceso nativo a funcionalidades del dispositivo\nSCSS - Estilos modulares y mantenibles\n\n🎯 Características Principales\nPerfil profesional completo con habilidades y experiencia\nSistema de networking entre egresados\nBúsqueda avanzada por carrera, promoción y ubicación\nNotificaciones push para oportunidades laborales\nChat integrado para comunicación directa\nMapa interactivo de egresados por ubicación\n\n📱 Funcionalidades Móviles\nAutenticación biométrica (huella/Face ID)\nSincronización offline con almacenamiento local\nCompartir perfil vía redes sociales\nNotificaciones push personalizadas\nCámara integrada para actualizar foto de perfil\n\n🌟 Impacto\nFacilita la conexión profesional entre más de 200,000 egresados de la UASD, creando una red sólida de oportunidades laborales y colaboración académica.\n\nResultado: Una plataforma móvil que fortalece la comunidad universitaria y potencia el desarrollo profesional de los graduados.',
        descrition_en_long: 'UASD Graduates is a hybrid mobile application developed to connect graduates of the Autonomous University of Santo Domingo (UASD) and facilitate professional networking opportunities.\n\n🛠️ Technologies\nAngular + TypeScript - Robust framework for scalable applications\nIonic - Hybrid cross-platform development (iOS/Android)\nCapacitor - Native access to device functionalities\nSCSS - Modular and maintainable styles\n\n🎯 Key Features\nComplete professional profile with skills and experience\nNetworking system between graduates\nAdvanced search by career, class year and location\nPush notifications for job opportunities\nIntegrated chat for direct communication\nInteractive map of graduates by location\n\n📱 Mobile Features\nBiometric authentication (fingerprint/Face ID)\nOffline synchronization with local storage\nProfile sharing via social networks\nPersonalized push notifications\nIntegrated camera to update profile photo\n\n🌟 Impact\nFacilitates professional connection among more than 200,000 UASD graduates, creating a solid network of job opportunities and academic collaboration.\n\nResult: A mobile platform that strengthens the university community and enhances graduates\' professional development.',
        github: 'https://github.com/ericmguzmanc/egresados-uasd',
        image: '/projects/egresados.webp',
        tags: [TAGS.Angular, TAGS.IONIC],
    },
    {
        slug: 'notemarket',
        title_es: 'NoteMarket - web para controlar tus gastos en el supermercado',
        title_en: 'NoteMarket - web to control your supermarket expenses',
        descrition_es: 'Aplicación web para gestionar gastos del supermercado. Organiza compras, controla presupuesto y visualiza gastos con gráficos interactivos.',
        descrition_en: 'Web application to manage supermarket expenses. Organizes shopping, controls budget and visualizes expenses with interactive charts.',
        descrition_es_long: 'NoteMarket es una aplicación web progresiva (PWA) diseñada para ayudar a las familias a gestionar y controlar sus gastos de supermercado de manera inteligente y eficiente.\n\n🛠️ Tecnologías\nReact + TypeScript - Interfaz de usuario reactiva y tipada\nTailwind CSS - Diseño moderno y responsive\nChart.js - Visualización de datos con gráficos interactivos\nLocalStorage API - Persistencia de datos local\nPWA - Funcionalidad offline y instalable\n\n🎯 Características Principales\nLista de compras inteligente con categorización automática\nControl de presupuesto con alertas en tiempo real\nHistorial detallado de compras por fecha y tienda\nGráficos interactivos de gastos por categoría y tiempo\nComparador de precios entre diferentes supermercados\nCalculadora de descuentos y ofertas\n\n📊 Análisis y Reportes\nDashboard con métricas de gastos mensuales\nTendencias de consumo por categorías\nRecomendaciones de ahorro basadas en patrones\nExportación de datos a CSV/PDF\nAlertas de presupuesto excedido\n\n💡 Funcionalidades Avanzadas\nModo offline completo con sincronización\nEscaneo de códigos de barras (futuro)\nIntegración con APIs de supermercados\nNotificaciones push para ofertas\nCompartir listas familiares\n\n🌟 Valor Agregado\nAyuda a las familias a ahorrar hasta un 20% en gastos de supermercado mediante análisis inteligente de patrones de consumo y recomendaciones personalizadas.\n\nResultado: Una herramienta completa que transforma la experiencia de compras familiares en una actividad más consciente y económica.',
        descrition_en_long: 'NoteMarket is a progressive web application (PWA) designed to help families manage and control their supermarket expenses intelligently and efficiently.\n\n🛠️ Technologies\nReact + TypeScript - Reactive and typed user interface\nTailwind CSS - Modern and responsive design\nChart.js - Data visualization with interactive charts\nLocalStorage API - Local data persistence\nPWA - Offline functionality and installable\n\n🎯 Key Features\nSmart shopping list with automatic categorization\nBudget control with real-time alerts\nDetailed purchase history by date and store\nInteractive expense charts by category and time\nPrice comparison between different supermarkets\nDiscount and offer calculator\n\n📊 Analysis and Reports\nDashboard with monthly expense metrics\nConsumption trends by categories\nSaving recommendations based on patterns\nData export to CSV/PDF\nBudget exceeded alerts\n\n💡 Advanced Features\nComplete offline mode with synchronization\nBarcode scanning (future)\nSupermarket API integration\nPush notifications for offers\nFamily list sharing\n\n🌟 Added Value\nHelps families save up to 20% on supermarket expenses through intelligent analysis of consumption patterns and personalized recommendations.\n\nResult: A complete tool that transforms the family shopping experience into a more conscious and economical activity.',
        link: 'https://notemarket.elizonrodriguez.com/',
        github: 'https://github.com/elizonRL/notemarket',
        image: '/projects/notemarket.webp',
        tags: [TAGS.REACT, TAGS.TAILWIND],
    },
    {
        slug: 'link-shortener',
        title_es: 'Acortador de links - Acorta tus URLs fácilmente',
        title_en: 'Link Shortener - Shorten your URLs easily',
        descrition_es: 'Aplicación web full-stack para acortar URLs largas en enlaces cortos y fáciles de compartir. Desarrollada con React y diseño responsivo, incluye sistema de autenticación, gestión de enlaces y proxy de redirección.',
        descrition_en: 'Full-stack web application to shorten long URLs into short, easy-to-share links. Built with React and responsive design, it includes an authentication system, link management, and redirection proxy.',
        descrition_es_long: 'ShortLink es una aplicación web full-stack completa para acortar URLs, similar a Bit.ly, que permite a los usuarios crear enlaces cortos personalizados con análisis detallados y gestión avanzada.\n\n🛠️ Stack Tecnológico\nFrontend: React + TypeScript + Tailwind CSS\nBackend: Node.js + Express + TypeScript\nBase de Datos: MongoDB con Mongoose\nAutenticación: JWT + bcrypt\nDespliegue: Docker + Docker Compose\n\n🎯 Características Frontend\nInterfaz moderna y responsive con Tailwind CSS\nDashboard completo para gestión de enlaces\nSistema de autenticación con registro/login\nEstadísticas en tiempo real con gráficos\nCopia al portapapeles con feedback visual\nValidación de formularios en tiempo real\n\n⚙️ Funcionalidades Backend\nAPI RESTful completa con Express\nMiddleware de autenticación JWT\nValidación de datos con Joi\nSistema de rate limiting\nProxy de redirección con tracking\nBase de datos optimizada con índices\n\n📊 Analytics y Gestión\nContador de clics en tiempo real\nHistorial detallado de accesos\nEstadísticas por fecha y ubicación\nGestión CRUD completa de enlaces\nFiltros y búsqueda avanzada\nExportación de datos\n\n🐳 DevOps y Despliegue\nContainerización completa con Docker\nDocker Compose para desarrollo local\nVariables de entorno configurables\nScripts de automatización\nDocumentación completa de API\n\n🔒 Seguridad\nHasheo seguro de contraseñas\nValidación de URLs maliciosas\nSanitización de inputs\nCORS configurado\nRate limiting por IP\n\n🌟 Valor Técnico\nDemuestra dominio completo del stack MERN con TypeScript, mejores prácticas de seguridad, arquitectura escalable y despliegue profesional.\n\nResultado: Una aplicación production-ready que combina frontend moderno, backend robusto y DevOps profesional.',
        descrition_en_long: 'ShortLink is a complete full-stack web application for URL shortening, similar to Bit.ly, that allows users to create custom short links with detailed analytics and advanced management.\n\n🛠️ Technology Stack\nFrontend: React + TypeScript + Tailwind CSS\nBackend: Node.js + Express + TypeScript\nDatabase: MongoDB with Mongoose\nAuthentication: JWT + bcrypt\nDeployment: Docker + Docker Compose\n\n🎯 Frontend Features\nModern and responsive interface with Tailwind CSS\nComplete dashboard for link management\nAuthentication system with register/login\nReal-time statistics with charts\nClipboard copy with visual feedback\nReal-time form validation\n\n⚙️ Backend Functionalities\nComplete RESTful API with Express\nJWT authentication middleware\nData validation with Joi\nRate limiting system\nRedirection proxy with tracking\nOptimized database with indexes\n\n📊 Analytics and Management\nReal-time click counter\nDetailed access history\nStatistics by date and location\nComplete CRUD link management\nAdvanced filters and search\nData export\n\n🐳 DevOps and Deployment\nComplete containerization with Docker\nDocker Compose for local development\nConfigurable environment variables\nAutomation scripts\nComplete API documentation\n\n🔒 Security\nSecure password hashing\nMalicious URL validation\nInput sanitization\nConfigured CORS\nRate limiting per IP\n\n🌟 Technical Value\nDemonstrates complete mastery of the MERN stack with TypeScript, security best practices, scalable architecture and professional deployment.\n\nResult: A production-ready application that combines modern frontend, robust backend and professional DevOps.',
        github: 'https://github.com/elizonRL/shorlink-front',
        image: '/projects/Shortlink.webp',
        tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.NODE, TAGS.MONGODB, TAGS.DOCKER, TAGS.TAILWIND],
    }
];