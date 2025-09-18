# 🌟 Portfolio Personal - Elizon Rodriguez

Un portafolio web moderno y completamente bilingüe construido con **Astro**, **Tailwind CSS** y **TypeScript**. Presenta un diseño elegante, animaciones fluidas y un sistema de internacionalización completo.

## 🚀 Características Principales

### 🌐 Internacionalización (i18n)
- **Soporte bilingüe**: Español (predeterminado) y Inglés
- **Cambio dinámico de idioma**: Sin recarga de página
- **URLs SEO-friendly**: `/` para español, `/en` para inglés
- **Selector de idioma elegante**: Con banderas de República Dominicana 🇩🇴 y Estados Unidos 🇺🇸

### ✨ Animaciones y Efectos Visuales
- **Logos flotantes**: React, HTML5, CSS3 y JavaScript animados alrededor de la imagen de perfil
- **Navegación inteligente**: Resaltado automático de sección activa
- **Efectos de hover**: Transiciones suaves en todos los elementos interactivos
- **Animaciones de entrada**: Elementos que aparecen gradualmente al cargar

### 📱 Diseño Responsivo
- **Mobile-first**: Optimizado para dispositivos móviles
- **Breakpoints adaptativos**: Diseño fluido en todas las resoluciones
- **Navegación fija**: Header que se adapta al scroll con efectos visuales

### 🎨 Interfaz Moderna
- **Tema oscuro**: Diseño elegante con colores profesionales
- **Tipografía cuidada**: Jerarquía visual clara y legible
- **Iconografía SVG**: Sprites optimizados para mejor rendimiento
- **Layout profesional**: Secciones bien estructuradas y organizadas

## 🛠️ Tecnologías Utilizadas

### Frontend
- **[Astro](https://astro.build/)** - Framework web moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de utilidades CSS
- **Vanilla JavaScript** - Interactividad y animaciones

### Herramientas de Desarrollo
- **Vite** - Build tool y dev server
- **PostCSS** - Procesamiento de CSS
- **ESLint** - Linting de código
- **Git** - Control de versiones

## 📁 Estructura del Proyecto

```
profolionew/
├── public/
│   ├── assets/
│   │   └── sprite.svg          # Iconos SVG optimizados
│   ├── img/
│   │   └── elizonperfil.webp   # Imagen de perfil
│   ├── projects/               # Imágenes de proyectos
│   └── cvs/                    # Archivos CV
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navegación principal
│   │   ├── HeroSection.astro   # Sección hero con animaciones
│   │   ├── Proyects.astro      # Galería de proyectos
│   │   ├── StudySection.astro  # Formación académica
│   │   ├── SkillSection.astro  # Habilidades técnicas
│   │   ├── AboutMe.astro       # Información personal
│   │   ├── LanguageToggle.astro # Selector de idioma
│   │   └── icons/              # Componentes de iconos
│   ├── i18n/
│   │   ├── es.json            # Traducciones en español
│   │   ├── en.json            # Traducciones en inglés
│   │   ├── index.ts           # Utilidades de traducción
│   │   └── client.ts          # Cliente i18n dinámico
│   ├── layouts/
│   │   └── Layout.astro       # Layout base
│   ├── pages/
│   │   ├── index.astro        # Página principal (ES)
│   │   ├── 404.astro          # Página de error (ES)
│   │   └── en/
│   │       ├── index.astro    # Página principal (EN)
│   │       └── 404.astro      # Página de error (EN)
│   └── styles/
│       └── global.css         # Estilos globales
├── astro.config.mjs           # Configuración de Astro
├── tailwind.config.mjs        # Configuración de Tailwind
└── package.json
```

## 🎯 Secciones del Portfolio

### 🏠 Hero Section
- Presentación personal con imagen de perfil
- Logos tecnológicos flotantes animados
- Enlaces a proyectos y descarga de CV
- Redes sociales (GitHub, LinkedIn, Email)

### 💼 Proyectos
- **English Blog**: Blog interactivo para aprender inglés
- **Egresados UASD**: App móvil para graduados universitarios
- Enlaces a demos en vivo y código fuente

### 🎓 Estudios
- Licenciatura en Informática (UASD)
- Cursos especializados en desarrollo web
- Certificaciones en análisis de datos

### 🛠️ Habilidades
- Stack tecnológico visual
- Estadísticas de GitHub integradas
- Tecnologías frontend y backend

### 👨‍💻 Sobre Mí
- Experiencia profesional
- Enfoque en desarrollo full-stack
- Conocimientos en UX/UI

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/elizonRL/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run astro        # CLI de Astro
```

## 🌐 Despliegue

### Build de Producción
```bash
npm run build
```

### Opciones de Hosting
- **Vercel** (Recomendado)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 🔧 Configuración

### Personalización de Contenido
1. **Traducciones**: Editar `src/i18n/es.json` y `src/i18n/en.json`
2. **Proyectos**: Modificar array en `src/components/Proyects.astro`
3. **Estudios**: Actualizar datos en `src/components/StudySection.astro`
4. **Información personal**: Editar `src/components/AboutMe.astro`

### Configuración de Idiomas
```typescript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
```

## 📊 Rendimiento

### Métricas de Lighthouse
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimizaciones
- Imágenes WebP optimizadas
- Sprites SVG para iconos
- CSS crítico inline
- Lazy loading de imágenes
- Minificación automática

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Elizon Rodriguez**
- 📧 Email: elizorodriguez16@gmail.com
- 💼 LinkedIn: [elizonrodriguez](https://www.linkedin.com/in/elizonrodriguez/)
- 🐙 GitHub: [elizonRL](https://github.com/elizonRL)

---

⭐ **¡Dale una estrella si te gustó el proyecto!**