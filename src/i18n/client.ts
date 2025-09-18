import es from './es.json';
import en from './en.json';

const translations = { es, en };

export class I18nClient {
  private currentLocale: string = 'es';
  private translations = translations;

  constructor(initialLocale: string = 'es') {
    this.currentLocale = initialLocale;
  }

  setLocale(locale: string) {
    this.currentLocale = locale;
    this.updatePageContent();
    this.updateURL();
    this.updateLanguageButton();
  }

  t(key: string): string {
    const translation = this.translations[this.currentLocale as keyof typeof translations];
    return key.split('.').reduce((obj: any, k) => obj?.[k], translation) || key;
  }

  private updatePageContent() {
    // Actualizar navegación
    this.updateNavigation();
    
    // Actualizar hero section
    this.updateHeroSection();
    
    // Actualizar títulos de secciones
    this.updateSectionTitles();
    
    // Actualizar botones
    this.updateButtons();
    
    // Actualizar contenido con HTML
    this.updateHTMLContent();
    
    // Actualizar meta tags
    this.updateMetaTags();
  }

  private updateNavigation() {
    const navItems = document.querySelectorAll('[data-nav-item]');
    navItems.forEach((item) => {
      const key = item.getAttribute('data-nav-item');
      if (key) {
        item.textContent = this.t(`nav.${key}`);
      }
    });
  }

  private updateHeroSection() {
    const greeting = document.querySelector('[data-i18n="hero.greeting"]');
    const description = document.querySelector('[data-i18n="hero.description"]');
    const contactTitle = document.querySelector('[data-i18n="contact.title"]');
    const contacts = document.querySelector('[data-i18n="contact.contacts"]');
    
    if (greeting) greeting.textContent = this.t('hero.greeting');
    if (description) description.textContent = this.t('hero.description');
    if (contactTitle) contactTitle.textContent = this.t('contact.title');
    if (contacts) contacts.textContent = this.t('contact.contacts');
  }

  private updateSectionTitles() {
    const titles = document.querySelectorAll('[data-i18n-title]');
    titles.forEach((title) => {
      const key = title.getAttribute('data-i18n-title');
      if (key) {
        title.textContent = this.t(key);
      }
    });
  }

  private updateButtons() {
    const buttons = document.querySelectorAll('[data-i18n-btn]');
    buttons.forEach((button) => {
      const key = button.getAttribute('data-i18n-btn');
      if (key) {
        button.textContent = this.t(key);
      }
    });
  }

  private updateHTMLContent() {
    // Actualizar contenido de About Me con estilos
    const aboutParagraphs = document.querySelectorAll('[data-i18n^="about.paragraph"]');
    aboutParagraphs.forEach((paragraph) => {
      const key = paragraph.getAttribute('data-i18n');
      if (key === 'about.paragraph1') {
        paragraph.innerHTML = this.currentLocale === 'es' 
          ? `Soy Licenciado en Informática con formación integral en el desarrollo de soluciones tecnológicas y un fuerte enfoque en el desarrollo web moderno. Trabajo con tecnologías del ecosistema JavaScript como <span class='text-[#61DBFB] font-semibold'>React</span>, <span class='text-[#B52E31] font-semibold'>Angular</span>, <span class='text-[#42b883] font-semibold'>Vue</span> y <span class='text-[#339933] font-semibold'>Node.js</span>, creando aplicaciones eficientes, escalables y centradas en el usuario.`
          : `I am a Computer Science graduate with comprehensive training in the development of technological solutions and a strong focus on modern web development. I work with JavaScript ecosystem technologies such as <span class='text-[#61DBFB] font-semibold'>React</span>, <span class='text-[#B52E31] font-semibold'>Angular</span>, <span class='text-[#42b883] font-semibold'>Vue</span> and <span class='text-[#339933] font-semibold'>Node.js</span>, creating efficient, scalable and user-centered applications.`;
      } else if (key === 'about.paragraph2') {
        paragraph.innerHTML = this.currentLocale === 'es'
          ? `He desarrollado proyectos que abarcan desde el diseño de interfaces dinámicas hasta la implementación de lógica de negocio en frontend y backend, incluyendo integraciones como envío seguro de correos, validación avanzada de formularios y manejo confiable de datos. Mi experiencia incluye el trabajo con bases de datos no relacionales (<span class='text-amber-50 font-semibold'>MongoDB</span>) y relacionales (<span class='text-amber-50 font-semibold'>MySQL, Oracle, SQL Server</span>), así como el uso de <span class='text-amber-50 font-semibold'>Git y GitHub</span> para una gestión colaborativa del código.`
          : `I have developed projects ranging from designing dynamic interfaces to implementing business logic in frontend and backend, including integrations such as secure email sending, advanced form validation and reliable data handling. My experience includes working with non-relational databases (<span class='text-amber-50 font-semibold'>MongoDB</span>) and relational databases (<span class='text-amber-50 font-semibold'>MySQL, Oracle, SQL Server</span>), as well as using <span class='text-amber-50 font-semibold'>Git and GitHub</span> for collaborative code management.`;
      } else if (key === 'about.paragraph3') {
        paragraph.innerHTML = this.currentLocale === 'es'
          ? `Además, cuento con conocimientos en diseño <span class='text-amber-50 font-semibold'>UX/UI utilizando Figma</span>, lo que me permite unir la parte técnica con una experiencia visual intuitiva y atractiva. Me defino como un profesional <span class='text-amber-50 font-semibold'>proactivo</span>, <span class='text-amber-50 font-semibold'>responsable</span> y en <span class='text-amber-50 font-semibold'>permanente actualización</span>, con el objetivo de aportar soluciones innovadoras y de calidad en cada proyecto que desarrollo.`
          : `Additionally, I have knowledge in <span class='text-amber-50 font-semibold'>UX/UI design using Figma</span>, which allows me to unite the technical part with an intuitive and attractive visual experience. I define myself as a <span class='text-amber-50 font-semibold'>proactive</span>, <span class='text-amber-50 font-semibold'>responsible</span> professional in <span class='text-amber-50 font-semibold'>permanent updating</span>, with the objective of providing innovative and quality solutions in each project I develop.`;
      }
    });

    // Actualizar proyectos
    this.updateProjects();
    
    // Actualizar estudios
    this.updateStudies();
  }

  private updateProjects() {
    const projectTitles = document.querySelectorAll('[data-project-title]');
    const projectDescriptions = document.querySelectorAll('[data-project-description]');
    
    projectTitles.forEach((title, index) => {
      if (index === 0) {
        title.textContent = this.currentLocale === 'es' 
          ? 'ENGLISH BLOG - UN BLOG PARA APRENDER INGLÉS'
          : 'ENGLISH BLOG - A BLOG TO LEARN ENGLISH';
      } else if (index === 1) {
        title.textContent = this.currentLocale === 'es'
          ? 'Egresados UASD - App móvil para egresados de la Universidad'
          : 'UASD Graduates - Mobile app for university graduates';
      }
    });
    
    projectDescriptions.forEach((desc, index) => {
      if (index === 0) {
        desc.textContent = this.currentLocale === 'es'
          ? 'Blog interactivo para aprender inglés desde cero. Incluye artículos y recursos gratuitos. Desarrollado con Astro y Tailwind CSS.'
          : 'Interactive blog to learn English from scratch. Includes articles and free resources. Developed with Astro and Tailwind CSS.';
      } else if (index === 1) {
        desc.textContent = this.currentLocale === 'es'
          ? 'Aplicación móvil para egresados de la Universidad Autónoma de Santo Domingo (UASD). Permite a los egresados conectarse, compartir sus habilidades y ser contactados para obtener trabajo.'
          : 'Mobile application for graduates of the Autonomous University of Santo Domingo (UASD). Allows graduates to connect, share their skills and be contacted for job opportunities.';
      }
    });
  }

  private updateStudies() {
    const studyTitles = document.querySelectorAll('[data-study-title]');
    const studyInstitutions = document.querySelectorAll('[data-study-institution]');
    const studyDescriptions = document.querySelectorAll('[data-study-description]');
    
    const studies = {
      es: [
        { title: 'Licenciatura en Informática', institution: 'Universidad Autónoma de Santo Domingo', description: 'Graduado de la Licenciatura en Informática de la UASD, con formación sólida en el desarrollo y mantenimiento de software, sistemas de información, bases de datos y redes. Preparado para enfrentar retos tecnológicos en pequeñas, medianas y grandes organizaciones, con enfoque en ingeniería de software y soluciones empresariales.' },
        { title: 'Curso java Developer', institution: 'Universidad Autónoma de Santo Domingo', description: 'Curso intensivo de Java Developer, cubriendo fundamentos de programación, estructuras de datos y desarrollo de aplicaciones.' },
        { title: 'Curso de Desarrollo front-end con html, css y javascript', institution: 'Master mind', description: 'Curso curso de desarrollo front-end, abarcando HTML, CSS y JavaScript, con un enfoque práctico en la creación de sitios web responsivos.' },
        { title: 'Analisis de datos con SQL', institution: 'Universidad Autónoma de Santo Domingo', description: 'Curso de análisis de datos con SQL, cubriendo desde consultas básicas hasta técnicas avanzadas de manipulación y análisis de datos.' },
        { title: 'Curso de analisis de datos con mongoDB', institution: 'Master mind', description: 'Curso de análisis de datos con MongoDB, abarcando desde la creación de bases de datos hasta consultas avanzadas y optimización de rendimiento.' }
      ],
      en: [
        { title: "Bachelor's Degree in Computer Science", institution: 'Autonomous University of Santo Domingo', description: 'Graduate of the Bachelor\'s Degree in Computer Science from UASD, with solid training in software development and maintenance, information systems, databases and networks. Prepared to face technological challenges in small, medium and large organizations, with a focus on software engineering and business solutions.' },
        { title: 'Java Developer Course', institution: 'Autonomous University of Santo Domingo', description: 'Intensive Java Developer course, covering programming fundamentals, data structures and application development.' },
        { title: 'Front-end Development Course with HTML, CSS and JavaScript', institution: 'Master mind', description: 'Front-end development course, covering HTML, CSS and JavaScript, with a practical focus on creating responsive websites.' },
        { title: 'Data Analysis with SQL', institution: 'Autonomous University of Santo Domingo', description: 'Data analysis course with SQL, covering from basic queries to advanced data manipulation and analysis techniques.' },
        { title: 'Data Analysis Course with MongoDB', institution: 'Master mind', description: 'Data analysis course with MongoDB, covering from database creation to advanced queries and performance optimization.' }
      ]
    };
    
    const currentStudies = studies[this.currentLocale as keyof typeof studies];
    
    studyTitles.forEach((title, index) => {
      if (currentStudies[index]) {
        title.textContent = currentStudies[index].title;
      }
    });
    
    studyInstitutions.forEach((institution, index) => {
      if (currentStudies[index]) {
        institution.textContent = currentStudies[index].institution;
      }
    });
    
    studyDescriptions.forEach((description, index) => {
      if (currentStudies[index]) {
        description.textContent = currentStudies[index].description;
      }
    });
    
    // Actualizar Stack de tecnologías
    const techStackTitle = document.querySelector('[data-i18n="skills.techStack"]');
    if (techStackTitle) {
      techStackTitle.textContent = this.currentLocale === 'es' ? 'Stack de tecnologias' : 'Technology Stack';
    }
  }

  private updateMetaTags() {
    const title = document.querySelector('title');
    const description = document.querySelector('meta[name="description"]');
    
    if (title) {
      title.textContent = this.currentLocale === 'es' 
        ? 'Elizon Rodriguez - Portfolio' 
        : 'Elizon Rodriguez - Portfolio';
    }
    
    if (description) {
      description.setAttribute('content', this.currentLocale === 'es'
        ? 'Este es el portafolio de Elizon Rodriguez, un desarrollador web con experiencia en tecnologías modernas como react, node.js vue.js angular entre otras tecnologias. Explora mis proyectos y habilidades.'
        : 'This is the portfolio of Elizon Rodriguez, a web developer with experience in modern technologies like React, Node.js, Vue.js, Angular and other technologies. Explore my projects and skills.'
      );
    }
  }

  private updateURL() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    let newPath;
    if (this.currentLocale === 'en') {
      newPath = currentPath.startsWith('/en') ? currentPath : `/en${currentPath === '/' ? '' : currentPath}`;
    } else {
      newPath = currentPath.replace('/en', '') || '/';
    }
    
    // Actualizar URL sin recargar
    window.history.pushState({}, '', newPath + currentHash);
  }

  private updateLanguageButton() {
    const languageBtn = document.getElementById('language-btn');
    const flagIcon = languageBtn?.querySelector('svg use');
    const langText = languageBtn?.querySelector('span');
    
    if (flagIcon) {
      flagIcon.setAttribute('href', `/assets/sprite.svg#flag-${this.currentLocale === 'es' ? 'do' : 'us'}`);
    }
    
    if (langText) {
      langText.textContent = this.currentLocale === 'es' ? 'ES' : 'EN';
    }
    
    if (languageBtn) {
      languageBtn.setAttribute('data-current-locale', this.currentLocale);
      languageBtn.setAttribute('title', this.currentLocale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
    }
  }

  getCurrentLocale(): string {
    return this.currentLocale;
  }
}

// Instancia global
export const i18nClient = new I18nClient();