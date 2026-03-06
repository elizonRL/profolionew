
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
        slug: 'DLS Junk REMOVAl',
        title_es: 'DLS Junk Removal - Sitio web para empresa de remoción de desechos',
        title_en: 'DLS Junk Removal - Website for junk removal company',
        descrition_es: 'Sitio web para empresa de remoción de desechos. Desarrollado con Astro y diseño responsivo.',
        descrition_en: 'Website for junk removal company. Built with Astro and responsive design.',
        descrition_es_long: 'DLS Waste Removal es un sitio web estático de alto rendimiento para servicios de remoción de basura y alquiler de contenedores, construido con Astro y Tailwind CSS, ofreciendo tiempos de carga ultra-rápidos, animaciones suaves y experiencia de usuario moderna con arquitectura zero-JavaScript y despliegue production-ready.\n\n🛠️ Stack Tecnológico\nFrontend: Astro 5.16.7 + TypeScript + Tailwind CSS 4.1.18\nRuntime: Node.js 18+\nMapas: Leaflet 1.9.4\nAPI Email: Resend\nSeguridad: Cloudflare Turnstile CAPTCHA\n\n🎯 Características Frontend\nDiseño responsive moderno con enfoque mobile-first\nNavegación sticky con efectos glass morphism\nAnimaciones activadas por scroll con Intersection Observer\nTarjetas de servicio interactivas con efectos hover\nGalería showcase Antes/Después\nIntegración de contacto directo con llamadas de un clic\n\n⚙️ Rendimiento y Optimización\nGeneración de Sitios Estáticos (SSG) para cargas instantáneas\nZero-JavaScript por defecto con arquitectura de islas\nImágenes WebP con estrategia de lazy loading\nRequestAnimationFrame para animaciones a 60fps\nTamaño de bundle mínimo con hidratación parcial\nPuntuaciones perfectas en Core Web Vitals (LCP, FID, CLS)\n\n📊 Experiencia de Usuario e Interacción\nComportamiento de scroll suave con CSS nativo\nMenú hamburguesa móvil con animación slide-in\nServer Actions para manejo de formularios\nValidación de formularios en tiempo real\nFeedback visual en todas las interacciones\nHTML semántico con accesibilidad ARIA\n\n🐳 DevOps y Despliegue\nDespliegue multi-plataforma listo (Vercel, Netlify, AWS S3)\nSoporte de containerización Docker\nConfiguración de variables de entorno\nHot Module Replacement en desarrollo\nSeguridad de tipos completa con TypeScript\nOptimización de build de producción con tree-shaking\n\n🔒 Seguridad\nValidación de formularios del lado del servidor con API Resend\nProtección contra bots con CAPTCHA Turnstile\nAislamiento de variables de entorno\nPrevención XSS con escape automático\nManejo seguro de emails\n\n🌟 Excelencia Técnica\nDemuestra dominio de arquitectura JAMstack moderna con el enfoque innovador SSG de Astro, combinando filosofía zero-JavaScript con islas interactivas para rendimiento ultra-rápido y excelencia SEO.\n\nResultado: Un sitio web estático production-ready que combina diseño moderno, huella mínima de JavaScript e infraestructura de despliegue profesional con puntuaciones perfectas de Lighthouse.',
        descrition_en_long: 'DLS Waste Removal is a high-performance static website for junk removal and dumpster rental services, built with Astro and Tailwind CSS, delivering blazing-fast load times, smooth animations, and a modern user experience with zero-JavaScript architecture and production-ready deployment.\n\n🛠️ Tech Stack\nFrontend: Astro 5.16.7 + TypeScript + Tailwind CSS 4.1.18\nRuntime: Node.js 18+\nMaps: Leaflet 1.9.4\nEmail API: Resend\nSecurity: Cloudflare Turnstile CAPTCHA\n\n🎯 Frontend Features\nModern responsive design with mobile-first approach\nSticky navigation with glass morphism effects\nScroll-triggered animations using Intersection Observer\nInteractive service cards with hover effects\nBefore/After gallery showcase\nDirect contact integration with one-click calls\n\n⚙️ Performance & Optimization\nStatic Site Generation (SSG) for instant page loads\nZero-JavaScript by default with island architecture\nWebP images with lazy loading strategy\nRequestAnimationFrame for 60fps animations\nMinimal bundle size with partial hydration\nPerfect Core Web Vitals scores (LCP, FID, CLS)\n\n📊 User Experience & Interaction\nSmooth scroll behavior with native CSS\nMobile hamburger menu with slide-in animation\nServer Actions for form handling\nReal-time form validation\nVisual feedback on all interactions\nSemantic HTML with ARIA accessibility\n\n🐳 DevOps & Deployment\nMulti-platform deployment ready (Vercel, Netlify, AWS S3)\nDocker containerization support\nEnvironment variables configuration\nHot Module Replacement in development\nTypeScript full type safety\nProduction build optimization with tree-shaking\n\n🔒 Security\nServer-side form validation with Resend API\nTurnstile CAPTCHA bot protection\nEnvironment variable isolation\nXSS prevention with automatic escaping\nSecure email handling\n\n🌟 Technical Excellence\nDemonstrates mastery of modern JAMstack architecture with Astro\'s innovative SSG approach, combining zero-JavaScript philosophy with interactive islands for blazing-fast performance and SEO excellence.\n\nResult: A production-ready static website that combines modern design, minimal JavaScript footprint, and professional deployment infrastructure with perfect Lighthouse scores.',
        image: '/projects/junkRemoval.webp',
        tags: [TAGS.ASTROICON, TAGS.TYPESCRIPT, TAGS.TAILWIND],
        link: 'https://www.dlswasteremoval.com/',
    },
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
        descrition_es_long: 'Egresados UASD es una aplicación móvil híbrida desarrollada para conectar a los graduados de la Universidad Autónoma de Santo Domingo (UASD) y facilitar oportunidades de networking profesional.\n\n🛠️ Tecnologías\nAngular + TypeScript - Framework robusto para aplicaciones escalables\n\nIonic - Desarrollo híbrido multiplataforma (iOS/Android)\n\nCapacitor - Acceso nativo a funcionalidades del dispositivo\n\nSCSS - Estilos modulares y mantenibles\n\n🎯 Características Principales\nPerfil profesional completo con habilidades y experiencia\n\nSistema de networking entre egresados destacados\n\nBúsqueda avanzada por carrera, promoción y ubicación\n\nFiltros personalizables para encontrar egresados específicos\n\nLista interactiva de egresados con paginación\n\nDetalles completos de cada graduado\n\n📱 Funcionalidades Móviles\nInterfaz nativa con componentes Ionic optimizados\n\nBúsqueda en tiempo real con debounce integrado\n\nNavegación fluida entre secciones\n\nLoader dinámico para mejor experiencia de usuario\n\nResponsive design adaptable a diferentes dispositivos\n\n🌟 Impacto\nFacilita la conexión profesional entre más de 200,000 egresados de la UASD, creando una red sólida de oportunidades laborales y colaboración académica a través de una plataforma móvil intuitiva y moderna.\n\nResultado: Una aplicación híbrida que fortalece la comunidad universitaria y potencia el desarrollo profesional de los graduados mediante tecnología de vanguardia.',
        descrition_en_long: 'UASD Graduates is a hybrid mobile application developed to connect graduates of the Autonomous University of Santo Domingo (UASD) and facilitate professional networking opportunities.\n\n🛠️ Technologies\nAngular + TypeScript - Robust framework for scalable applications\n\nIonic - Hybrid cross-platform development (iOS/Android)\n\nCapacitor - Native access to device functionalities\n\nSCSS - Modular and maintainable styles\n\n🎯 Key Features\nComplete professional profile with skills and experience\n\nNetworking system between outstanding graduates\n\nAdvanced search by career, class year and location\n\nCustomizable filters to find specific graduates\n\nInteractive list of graduates with pagination\n\nComplete details of each graduate\n\n📱 Mobile Features\nNative interface with optimized Ionic components\n\nReal-time search with integrated debounce\n\nFluid navigation between sections\n\nDynamic loader for better user experience\n\nResponsive design adaptable to different devices\n\n🌟 Impact\nFacilitates professional connection among more than 200,000 UASD graduates, creating a solid network of job opportunities and academic collaboration through an intuitive and modern mobile platform.\n\nResult: A hybrid application that strengthens the university community and enhances graduates\' professional development through cutting-edge technology.',
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