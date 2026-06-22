/* ============================================================
   OYETEMA — House of Fashion
   Shared JavaScript
   ============================================================ */


/* ------------------------------------------------------------
   1. NAV — darken background on scroll
   ------------------------------------------------------------ */

const nav = document.getElementById('mainNav');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}


/* ------------------------------------------------------------
   2. HERO SLASH — subtle parallax on scroll
   ------------------------------------------------------------ */

const slash = document.querySelector('.hero-slash');

if (slash) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    slash.style.transform = `skewX(-8deg) translateY(${y * 0.12}px)`;
  });
}
