import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let ctx: gsap.Context | null = null;

function inView(el: Element) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
}

function scrollReveal(
  targets: gsap.TweenTarget,
  fromVars: gsap.TweenVars,
  trigger: Element,
  toVars: gsap.TweenVars = {}
) {
  if (inView(trigger)) {
    gsap.set(targets, { clearProps: 'all' });
    return;
  }
  gsap.set(targets, fromVars);
  gsap.to(targets, {
    opacity: 1, x: 0, y: 0, scale: 1, rotation: 0,
    duration: 0.8,
    ease: 'power3.out',
    ...toVars,
    scrollTrigger: {
      trigger,
      start: 'top 90%',
      toggleActions: 'play none none none',
      onEnter: () => ScrollTrigger.refresh(),
    },
  });
}

export function initAnimations() {
  // Limpia contexto anterior
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
  ScrollTrigger.getAll().forEach(t => t.kill());
  gsap.killTweensOf('*');

  ctx = gsap.context(() => {

    // ── HERO ──
    if (document.querySelector('.hero-line')) {
      gsap.set(['.hero-line', '.hero-image', '.tech-logo'], { opacity: 0 });
      gsap.set('.orb1, .orb2', { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to('.orb1, .orb2', { opacity: 1, duration: 1.5, stagger: 0.3 }, 0);
      tl.fromTo('.hero-image', { opacity: 0, x: 60, scale: 0.9 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'back.out(1.4)' }, 0.2);
      tl.fromTo('.hero-line',  { opacity: 0, y: 40, skewX: -3 },  { opacity: 1, y: 0, skewX: 0, duration: 0.7, stagger: 0.12, ease: 'power4.out' }, 0.3);
      tl.fromTo('.tech-logo',  { opacity: 0, scale: 0, rotation: -180 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.8, stagger: 0.15, ease: 'elastic.out(1, 0.5)' }, 0.9);
      tl.fromTo('.particle',   { opacity: 0, y: 0 }, { opacity: 0.7, duration: 0.6, stagger: { each: 0.2, from: 'random' } }, 1.2);
      tl.eventCallback('onComplete', () => {
        gsap.to('.tech-logo-1', { y: -8,  duration: 3,   ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to('.tech-logo-2', { y: -6,  duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.3 });
        gsap.to('.tech-logo-3', { y: -10, duration: 4,   ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.6 });
        gsap.to('.tech-logo-4', { y: -7,  duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.9 });
        document.querySelectorAll('.particle').forEach((p, i) => {
          gsap.to(p, { y: -120, x: 20, opacity: 0, duration: 8 + i * 1.5, ease: 'none', repeat: -1, delay: i * 0.8,
            onRepeat() { gsap.set(p, { y: 0, x: 0, opacity: 0.7 }); }
          });
        });
        gsap.to('.orb1', { scale: 1.1, opacity: 0.8, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
    }

    // ── SECTION TITLES ──
    document.querySelectorAll('[class*="mb-16"]').forEach(header => {
      if (!header.children.length) return;
      scrollReveal(header.children, { opacity: 0, y: 35 }, header);
    });

    // ── EXPERIENCE ──
    const expHeader = document.querySelector('.exp-header');
    if (expHeader) {
      scrollReveal(['.exp-subtitle', '.exp-title', '.exp-desc'], { opacity: 0, y: 40 }, expHeader);
      if (!inView(expHeader)) {
        gsap.set('.exp-line', { scaleY: 0, transformOrigin: 'top center' });
        gsap.to('.exp-line', { scaleY: 1, duration: 1.5, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.exp-line', start: 'top 75%', end: 'bottom 20%', scrub: 1 }
        });
      }
      document.querySelectorAll('.exp-row').forEach((row, i) => {
        const fromLeft = i % 2 === 0;
        const card = row.querySelector('article');
        const dot  = row.querySelector('.exp-dot');
        scrollReveal(dot,  { opacity: 0, scale: 0 }, row, { duration: 0.5, ease: 'back.out(2)' });
        scrollReveal(card, { opacity: 0, x: fromLeft ? -60 : 60, y: 20 }, row, { duration: 0.9 });
        scrollReveal(row.querySelectorAll('.rounded-full'), { opacity: 0, scale: 0.7 }, row, { duration: 0.4, stagger: 0.08, ease: 'back.out(1.5)' });
      });
    }

    // ── PROJECTS ──
    document.querySelectorAll('.project-card').forEach((card, i) => {
      const img  = card.querySelector('.project-img');
      const info = card.querySelector('.project-info');
      const tags = card.querySelectorAll('li span');
      const btns = card.querySelectorAll('footer a');
      const fromLeft = i % 2 === 0;
      if (inView(card)) {
        gsap.set([img, info, tags, btns], { clearProps: 'all' });
      } else {
        gsap.set([img, info, tags, btns], { opacity: 0 });
        const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' } });
        tl.fromTo(img,  { opacity: 0, x: fromLeft ? -70 : 70, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out' });
        tl.fromTo(info, { opacity: 0, x: fromLeft ? 70 : -70 }, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '<');
        tl.fromTo(tags, { opacity: 0, scale: 0.6, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.35, stagger: 0.07, ease: 'back.out(1.7)' }, '-=0.4');
        tl.fromTo(btns, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' }, '-=0.2');
      }
    });

    // ── STUDY ──
    document.querySelectorAll('.study-item').forEach(item => {
      scrollReveal(item.querySelector('.study-dot'),   { opacity: 0, scale: 0 }, item, { duration: 0.5, ease: 'back.out(2)' });
      scrollReveal(item.querySelector('.study-left'),  { opacity: 0, x: -50 },  item);
      scrollReveal(item.querySelector('.study-right'), { opacity: 0, x: 50 },   item);
    });

    // ── SKILLS ──
    const skillsEl = document.querySelector('#skills');
    if (skillsEl) {
      const techGrid  = skillsEl.querySelector('article > aside:last-child .grid');
      const statsEl   = skillsEl.querySelector('article > aside:first-child');
      const stackTitle = skillsEl.querySelector('.skills-stack-title');
      if (stackTitle) scrollReveal(stackTitle, { opacity: 0, x: -40 }, stackTitle, { duration: 0.7 });
      if (statsEl)    scrollReveal(statsEl,    { opacity: 0, y: 60 },  statsEl,    { duration: 1.0 });
      if (techGrid)   scrollReveal(Array.from(techGrid.children), { opacity: 0, scale: 0.5, y: 20 }, techGrid, { duration: 0.4, stagger: 0.05, ease: 'back.out(1.5)' });
    }

    // ── ABOUT ──
    const aboutImg  = document.querySelector('.about-img');
    const aboutText = document.querySelector('.about-text');
    if (aboutImg)  scrollReveal(aboutImg,        { opacity: 0, x: 80, rotation: 4 }, aboutImg,  { duration: 1.0 });
    if (aboutText) scrollReveal('.about-text p', { opacity: 0, x: -50 },             aboutText, { duration: 0.7, stagger: 0.2 });

    // ── PROJECT DETAIL PAGE ──
    if (document.querySelector('article > a') && document.querySelector('.prose')) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('article > a',                     { opacity: 0, x: -20 },            { opacity: 1, x: 0, duration: 0.5 }, 0);
      tl.fromTo('article header h1',               { opacity: 0, y: 40 },             { opacity: 1, y: 0, duration: 0.7 }, 0.2);
      tl.fromTo('article header .flex span',       { opacity: 0, scale: 0.7, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'back.out(1.5)' }, 0.4);
      tl.fromTo('article img',                     { opacity: 0, scale: 0.96, y: 30 },{ opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 0.5);
      tl.fromTo('article .flex.flex-wrap.gap-4 a', { opacity: 0, y: 15 },             { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 }, 0.9);
      const prose = document.querySelector('.prose');
      if (prose) {
        if (inView(prose)) {
          gsap.set(['.prose h2', '.prose p'], { clearProps: 'all' });
        } else {
          gsap.fromTo('.prose h2', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: prose, start: 'top 90%', toggleActions: 'play none none none' } });
          gsap.fromTo('.prose p',  { opacity: 0, y: 20 },  { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: prose, start: 'top 90%', toggleActions: 'play none none none' } });
        }
      }
    }

  }); // end gsap.context

  // Refresh después de inicializar y después de que las imágenes carguen
  ScrollTrigger.refresh();
  setTimeout(() => ScrollTrigger.refresh(), 300);
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
