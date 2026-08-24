/* ==========================================================================
   AURA & GOLD - ROYAL INDIAN SALON & SPA
   Main Luxury Interactive Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initCounters();
  initActiveNavLink();
  initVIPToastNotification();
  initFloatingWhatsApp();
  initLuxuryCalculator();
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

/* Mobile Drawer Menu */
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

/* Animated Number Counters */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalVal = parseInt(target.getAttribute('data-target') || '0', 10);
        let startVal = 0;
        const duration = 2000;

        const timer = setInterval(() => {
          startVal += Math.ceil(finalVal / 45);
          if (startVal >= finalVal) {
            target.textContent = finalVal.toLocaleString('en-IN');
            clearInterval(timer);
          } else {
            target.textContent = startVal.toLocaleString('en-IN');
          }
        }, 30);

        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* Highlight Current Page Nav Link */
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

/* Realistic Live VIP Notification Toast */
function initVIPToastNotification() {
  const toastContainer = document.createElement('div');
  toastContainer.className = 'vip-toast';
  document.body.appendChild(toastContainer);

  const notifications = [
    { title: 'Sanjana S.', action: 'reserved a VIP Bridal Suite', location: 'Bandra West, Mumbai', time: '2 mins ago' },
    { title: 'Meera K.', action: 'booked Caramel Balayage', location: 'Indiranagar, Bengaluru', time: '5 mins ago' },
    { title: 'Rajesh M.', action: 'booked Royal Couple Spa', location: 'Connaught Place, New Delhi', time: '12 mins ago' },
    { title: 'Anusha R.', action: 'claimed 20% OFF Promo Code', location: 'Jubilee Hills, Hyderabad', time: '18 mins ago' }
  ];

  let currentIndex = 0;

  function showNextNotification() {
    const notif = notifications[currentIndex];
    toastContainer.innerHTML = `
      <div class="vip-toast-icon">✓</div>
      <div>
        <h5 style="color: var(--gold-primary); font-size: 0.9rem; margin: 0;">${notif.title} ${notif.action}</h5>
        <p style="color: var(--text-muted); font-size: 0.78rem; margin: 2px 0 0 0;">${notif.location} • ${notif.time}</p>
      </div>
    `;

    toastContainer.classList.add('show');

    setTimeout(() => {
      toastContainer.classList.remove('show');
    }, 4500);

    currentIndex = (currentIndex + 1) % notifications.length;
  }

  setTimeout(showNextNotification, 4000);
  setInterval(showNextNotification, 14000);
}

/* Floating WhatsApp Concierge Widget */
function initFloatingWhatsApp() {
  const waBtn = document.createElement('a');
  waBtn.href = 'https://wa.me/919876543210?text=Hello%20AURA%20%26%20GOLD,%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20salon%20appointment.';
  waBtn.target = '_blank';
  waBtn.className = 'whatsapp-float';
  waBtn.setAttribute('aria-label', 'Chat with VIP Concierge on WhatsApp');
  waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
  document.body.appendChild(waBtn);
}

/* Interactive Luxury Hair & Beauty Consultation Calculator */
function initLuxuryCalculator() {
  const optBtns = document.querySelectorAll('.calc-opt-btn');
  if (!optBtns.length) return;

  const resultTitle = document.getElementById('calcResultTitle');
  const resultDesc = document.getElementById('calcResultDesc');
  const resultPrice = document.getElementById('calcResultPrice');
  const resultBtn = document.getElementById('calcResultBtn');

  let selectedCategory = 'hair';
  let selectedNeed = 'keratin';

  optBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-group');
      const val = btn.getAttribute('data-val');

      // Unselect siblings in same group
      document.querySelectorAll(`.calc-opt-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (group === 'category') selectedCategory = val;
      if (group === 'need') selectedNeed = val;

      updateCalculatorResult(selectedCategory, selectedNeed);
    });
  });

  function updateCalculatorResult(cat, need) {
    if (!resultTitle || !resultPrice) return;

    if (cat === 'hair') {
      if (need === 'repair') {
        resultTitle.textContent = 'Royal Keratin Smoothening + Olaplex Repair';
        resultDesc.textContent = 'Frizz-free silky smooth hair for 6 months with bond strengthening.';
        resultPrice.textContent = '₹6,999';
        resultBtn.href = 'booking.html?service=Keratin';
      } else if (need === 'color') {
        resultTitle.textContent = 'Signature French Caramel Balayage';
        resultDesc.textContent = 'Sun-kissed hand-painted highlights with glossy toner treatment.';
        resultPrice.textContent = '₹8,499';
        resultBtn.href = 'booking.html?service=Balayage';
      } else {
        resultTitle.textContent = 'Couture Haircut & Red-Carpet Blowdry';
        resultDesc.textContent = 'Precision hair sculpting with luxury caviar scalp massage.';
        resultPrice.textContent = '₹2,500';
        resultBtn.href = 'booking.html?service=Couture%20Cut';
      }
    } else if (cat === 'skin') {
      if (need === 'glow') {
        resultTitle.textContent = '24K Kashmiri Saffron Kumkumadi Facial';
        resultDesc.textContent = 'Pure 24K edible gold leaves & saffron infusion for wedding radiance.';
        resultPrice.textContent = '₹4,499';
        resultBtn.href = 'booking.html?service=Saffron%20Facial';
      } else {
        resultTitle.textContent = 'Hydra-Dermabrasion Deep Oxygen Infusion';
        resultDesc.textContent = 'Vacuum pore extraction with glycolic glow peel and hyaluronic jet.';
        resultPrice.textContent = '₹3,999';
        resultBtn.href = 'booking.html?service=Hydra%20Facial';
      }
    } else if (cat === 'bridal') {
      resultTitle.textContent = 'HD Airbrush Royal Bridal Package';
      resultDesc.textContent = 'Waterproof 4K makeup, saree/dupatta draping, and hair styling.';
      resultPrice.textContent = '₹28,000';
      resultBtn.href = 'booking.html?service=Bridal%20Package';
    } else {
      resultTitle.textContent = 'Royal Abhyanga Warm Ayurvedic Oil Spa';
      resultDesc.textContent = '90 Mins Kerala warm Dhanwantharam herbal oil deep tissue massage.';
      resultPrice.textContent = '₹4,999';
      resultBtn.href = 'booking.html?service=Ayurvedic%20Spa';
    }
  }
}
