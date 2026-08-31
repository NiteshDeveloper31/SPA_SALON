/* ==========================================================================
   AURA & GOLD — Royal Indian Salon & Spa
   Lightweight Scroll Reveal Animation Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
});

function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
