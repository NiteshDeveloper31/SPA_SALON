/* ==========================================================================
   AURA & GOLD - ROYAL INDIAN SALON & SPA
   Agency-Grade Multi-Page Interaction & Animation Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initCustomCursor();
  initMagneticButtons();
  initUniversalCardTilt();
  initScrollProgressAndParallax();
  initScrollObserver();
});

/* 1. Cinematic Page Transition Overlay System */
function initPageTransitions() {
  // Inject transition overlay if not present
  if (!document.querySelector('.page-transition-overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay active';
    overlay.innerHTML = `
      <div class="page-transition-curtain"></div>
      <div class="page-transition-logo">
        <div class="logo-icon" style="width: 60px; height: 60px; font-size: 1.5rem;">AG</div>
        <span class="logo-title" style="font-size: 1.8rem; font-family: var(--font-serif); color: #FFF;">AURA & GOLD</span>
        <span class="logo-sub" style="font-size: 0.75rem; color: var(--gold-primary); letter-spacing: 4px;">ROYAL SALON & SPA</span>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const overlay = document.querySelector('.page-transition-overlay');

  // Fade out transition overlay on page load
  setTimeout(() => {
    if (overlay) overlay.classList.remove('active');
  }, 400);

  // Intercept internal navigation link clicks
  const internalLinks = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="javascript"]):not([href^="tel"]):not([href^="mailto"])');

  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetUrl = link.getAttribute('href');
      if (!targetUrl || targetUrl === window.location.pathname.split('/').pop()) return;

      e.preventDefault();

      if (overlay) {
        overlay.classList.add('active');
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 450);
      } else {
        window.location.href = targetUrl;
      }
    });
  });
}

/* 2. Unique Royal Gold Starburst & Dynamic Action Badge Cursor System */
function initCustomCursor() {
  if (window.innerWidth <= 768 || ('ontouchstart' in window)) return;

  document.body.classList.add('has-custom-cursor');

  let starburst = document.querySelector('.custom-cursor-starburst');
  let badge = document.querySelector('.custom-cursor-badge');

  if (!starburst) {
    starburst = document.createElement('div');
    starburst.className = 'custom-cursor-starburst';
    starburst.innerHTML = '✦';
    document.body.appendChild(starburst);
  }

  if (!badge) {
    badge = document.createElement('div');
    badge.className = 'custom-cursor-badge';
    badge.textContent = 'EXPLORE';
    document.body.appendChild(badge);
  }

  let mouseX = 0, mouseY = 0;
  let badgeX = 0, badgeY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    starburst.style.left = `${mouseX}px`;
    starburst.style.top = `${mouseY}px`;
  });

  function renderBadge() {
    badgeX += (mouseX - badgeX) * 0.2;
    badgeY += (mouseY - badgeY) * 0.2;

    badge.style.left = `${badgeX}px`;
    badge.style.top = `${badgeY}px`;

    requestAnimationFrame(renderBadge);
  }
  renderBadge();

  // Dynamic Contextual Hover Badge Targets
  const cards = document.querySelectorAll('.card, .stylist-card, .package-card, .offer-card');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('button, .btn, a');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      badge.textContent = '✦ DISCOVER';
      badge.classList.add('active');
      starburst.classList.add('hidden');
    });
    card.addEventListener('mouseleave', () => {
      badge.classList.remove('active');
      starburst.classList.remove('hidden');
    });
  });

  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      badge.textContent = '🔍 VIEW FULL';
      badge.classList.add('active');
      starburst.classList.add('hidden');
    });
    item.addEventListener('mouseleave', () => {
      badge.classList.remove('active');
      starburst.classList.remove('hidden');
    });
  });

  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      badge.textContent = '👑 BOOK NOW';
      badge.classList.add('active');
      starburst.classList.add('hidden');
    });
    btn.addEventListener('mouseleave', () => {
      badge.classList.remove('active');
      starburst.classList.remove('hidden');
    });
  });
}

/* 3. Magnetic CTA Button Attraction */
function initMagneticButtons() {
  if (window.innerWidth <= 768) return;

  const magButtons = document.querySelectorAll('.btn-gold, .btn-outline, .btn-magnetic');

  magButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.03)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px) scale(1)';
    });
  });
}

/* 4. Universal 3D Card Tilt & Cursor Dynamic Glare Spotlight */
function initUniversalCardTilt() {
  const cards = document.querySelectorAll('.card, .stylist-card, .package-card, .testimonial-card, .perk-card, .offer-card, .gallery-item');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      if (window.innerWidth > 768) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* 5. Scroll Progress Bar & Hero Parallax */
function initScrollProgressAndParallax() {
  let progress = document.querySelector('.scroll-progress-bar');
  if (!progress) {
    progress = document.createElement('div');
    progress.className = 'scroll-progress-bar';
    document.body.appendChild(progress);
  }

  const heroBg = document.querySelector('.hero-bg-img');

  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      const currentProgress = (window.scrollY / totalScroll) * 100;
      progress.style.width = `${currentProgress}%`;
    }

    if (heroBg && window.scrollY < window.innerHeight) {
      heroBg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.25}px)`;
    }
  });
}

/* 6. IntersectionObserver Scroll Reveal Animations */
function initScrollObserver() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
