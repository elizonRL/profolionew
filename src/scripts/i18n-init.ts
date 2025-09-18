import { i18nClient } from '../i18n/client';

// Inicializar el cliente de i18n cuando se carga la página
document.addEventListener('astro:page-load', () => {
  // Detectar idioma actual desde el HTML lang attribute
  const currentLocale = document.documentElement.lang || 'es';
  
  // Inicializar el cliente sin actualizar el contenido (ya está renderizado)
  i18nClient['currentLocale'] = currentLocale;
  
  // Solo actualizar el botón de idioma
  i18nClient['updateLanguageButton']();
});

// Hacer el cliente disponible globalmente
(window as any).i18nClient = i18nClient;