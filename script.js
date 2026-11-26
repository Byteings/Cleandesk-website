/**
 * CleanDesk website – minimal progressive enhancement.
 * All content is accessible without JS; this adds smooth reveal and nav behavior.
 */
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Sticky header ──────────────────────────────────────────
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Mobile menu ────────────────────────────────────────────
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  if (toggle && nav) {
    const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) close();
    });
  }

  // ── Scroll reveal ──────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
})();
