/* ==========================================================================
   AURA & GOLD — Royal Indian Salon & Spa
   Extraordinary Motion Engine & Before/After Drag Slider
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  initBeforeAfterSliders();
  initParallaxEngine();
});

/* 1. Kinetic Typography & Clip-Path Scroll Reveal Observer */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal, .line-mask-wrap, .img-clip-sweep');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* 2. Concept C: Real-Time Interactive Before/After Drag Slider Engine */
function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll('.ba-slider-container');
  if (!sliders.length) return;

  sliders.forEach(container => {
    const range = container.querySelector('.ba-range-input');
    const afterImg = container.querySelector('.ba-after-img');
    const handle = container.querySelector('.ba-handle');

    if (!range || !afterImg || !handle) return;

    function updateSlider(val) {
      afterImg.style.clipPath = `inset(0 0 0 ${val}%)`;
      handle.style.left = `${val}%`;
    }

    range.addEventListener('input', (e) => {
      updateSlider(e.target.value);
    });

    // Touch & Mouse Drag Fallback
    updateSlider(range.value || 50);
  });
}

/* 3. Concept E: Subtle Parallax Scroll Momentum */
function initParallaxEngine() {
  const heroImg = document.querySelector('.hero-img-wrap img');
  if (!heroImg) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroImg.style.transform = `translateY(${scrolled * 0.12}px) scale(1.02)`;
    }
  });
}
