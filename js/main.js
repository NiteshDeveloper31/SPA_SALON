/* ==========================================================================
   AURA & GOLD — Royal Indian Salon & Spa
   Main Application & Interactive Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroSlider();
  initSearchModal();
  initPricingTabs();
  initMobileDrawer();
  initAccordions();
  initLeafletMap();
});

/* 1. Header Scroll Shrink & Transition */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* 2. VLS-Style Hero Banner Slider Rotation */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      goToSlide(idx);
      startAutoSlide();
    });
  });

  goToSlide(0);
  startAutoSlide();
}

/* 3. Search Modal Toggle */
function initSearchModal() {
  const searchTriggers = document.querySelectorAll('.search-trigger');
  const searchModal = document.getElementById('searchModal');
  const searchClose = document.getElementById('searchClose');

  if (!searchModal) return;

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('active');
      const input = searchModal.querySelector('.search-input');
      if (input) setTimeout(() => input.focus(), 200);
    });
  });

  if (searchClose) {
    searchClose.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });
  }
}

/* 4. Tabbed Pricing Menu Controller */
function initPricingTabs() {
  const tabBtns = document.querySelectorAll('.pricing-tab-btn');
  const panels = document.querySelectorAll('.pricing-table-panel');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`pricing-${targetCategory}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

/* 5. Mobile Drawer Navigation */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.backdrop-overlay');
  const closeBtn = document.querySelector('.drawer-close');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('active');
    backdrop.classList.add('active');
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
  }

  toggleBtn.addEventListener('click', openDrawer);
  backdrop.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
}

/* 6. Accordion Toggle */
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      accordionItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* 7. Leaflet Outlets Map */
function initLeafletMap() {
  const mapElement = document.getElementById('leafletMap');
  if (!mapElement || typeof L === 'undefined') return;

  const outlets = {
    mumbai: { lat: 19.0600, lng: 72.8300, title: 'Mumbai — Bandra West Sanctuary' },
    delhi: { lat: 28.6315, lng: 77.2167, title: 'New Delhi — Connaught Place' },
    bengaluru: { lat: 12.9784, lng: 77.6408, title: 'Bengaluru — Indiranagar' },
    hyderabad: { lat: 17.4319, lng: 78.4071, title: 'Hyderabad — Jubilee Hills' }
  };

  const map = L.map('leafletMap', { scrollWheelZoom: false }).setView([outlets.mumbai.lat, outlets.mumbai.lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const markers = {};
  Object.keys(outlets).forEach(key => {
    const item = outlets[key];
    markers[key] = L.marker([item.lat, item.lng]).addTo(map).bindPopup(`<strong>${item.title}</strong>`);
  });

  markers.mumbai.openPopup();
  setTimeout(() => map.invalidateSize(), 300);

  const tabs = document.querySelectorAll('.outlet-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const outletKey = tab.getAttribute('data-outlet');
      if (outlets[outletKey]) {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const pos = outlets[outletKey];
        map.flyTo([pos.lat, pos.lng], 14, { duration: 1.2 });
        markers[outletKey].openPopup();
      }
    });
  });
}
