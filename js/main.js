/* ==========================================================================
   AURA & GOLD — Royal Indian Salon & Spa
   Commercial Application Logic & Interactive Outlets Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initAccordions();
  initActiveNavLink();
  initOutletsMap();
  initServiceFilters();
});

/* Sticky Header on Scroll */
function initNavbar() {
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

/* Mobile Navigation Drawer */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.drawer-close');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.backdrop-overlay');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
}

/* FAQ Accordion Toggle */
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (!accordionItems.length) return;

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

/* Highlight Current Active Nav Link */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* Interactive Leaflet Outlets Map & Tab Selector */
function initOutletsMap() {
  const mapElement = document.getElementById('leafletMap');
  if (!mapElement || typeof L === 'undefined') return;

  // 4 Flagship Metro Outlets Data
  const outletsData = {
    mumbai: {
      name: 'Mumbai — Bandra West Sanctuary',
      lat: 19.0600,
      lng: 72.8300,
      address: 'Waterfield Road, Bandra West, Mumbai, Maharashtra 400050',
      phone: '+91 98765 43210',
      hours: 'Mon – Sun: 09:00 AM – 09:00 PM',
      directions: 'https://maps.google.com/?q=Bandra+West+Mumbai'
    },
    delhi: {
      name: 'New Delhi — Connaught Place Sanctuary',
      lat: 28.6315,
      lng: 77.2167,
      address: 'Block M, Outer Circle, Connaught Place, New Delhi 110001',
      phone: '+91 98765 43211',
      hours: 'Mon – Sun: 09:30 AM – 09:00 PM',
      directions: 'https://maps.google.com/?q=Connaught+Place+New+Delhi'
    },
    bengaluru: {
      name: 'Bengaluru — Indiranagar Sanctuary',
      lat: 12.9784,
      lng: 77.6408,
      address: '100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038',
      phone: '+91 98765 43212',
      hours: 'Mon – Sun: 09:00 AM – 09:00 PM',
      directions: 'https://maps.google.com/?q=Indiranagar+Bengaluru'
    },
    hyderabad: {
      name: 'Hyderabad — Jubilee Hills Sanctuary',
      lat: 17.4319,
      lng: 78.4071,
      address: 'Road No. 36, Opposite Metro Pillar 165, Jubilee Hills, Hyderabad 500033',
      phone: '+91 98765 43213',
      hours: 'Mon – Sun: 09:30 AM – 09:00 PM',
      directions: 'https://maps.google.com/?q=Jubilee+Hills+Hyderabad'
    }
  };

  // Initialize Leaflet Map
  const map = L.map('leafletMap', { scrollWheelZoom: false }).setView([19.0600, 72.8300], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const markers = {};

  // Add markers for all 4 outlets
  Object.keys(outletsData).forEach(key => {
    const item = outletsData[key];
    const marker = L.marker([item.lat, item.lng]).addTo(map);
    marker.bindPopup(`<strong>${item.name}</strong><br>${item.address}`);
    markers[key] = marker;
  });

  // Outlet Tab Click Listeners
  const outletTabs = document.querySelectorAll('.outlet-tab');
  const addressEl = document.getElementById('outletDisplayAddress');
  const phoneEl = document.getElementById('outletDisplayPhone');
  const hoursEl = document.getElementById('outletDisplayHours');
  const directionsEl = document.getElementById('outletDisplayDirections');

  outletTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-outlet');
      const data = outletsData[key];
      if (!data) return;

      outletTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      map.flyTo([data.lat, data.lng], 14, { duration: 1.2 });
      markers[key].openPopup();

      if (addressEl) addressEl.textContent = data.address;
      if (phoneEl) phoneEl.textContent = data.phone;
      if (hoursEl) hoursEl.textContent = data.hours;
      if (directionsEl) directionsEl.href = data.directions;
    });
  });
}

/* Service Category Filter Tabs */
function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  const cards = document.querySelectorAll('.filter-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
