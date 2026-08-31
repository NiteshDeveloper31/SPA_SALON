/* ==========================================================================
   AURA & GOLD — Royal Indian Salon & Spa
   Dynamic Service Details Page Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderServiceDetails();
});

function renderServiceDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  let serviceId = urlParams.get('service') || 'balayage';

  // Fallback if ID is invalid
  let data = servicesData[serviceId];
  if (!data) {
    serviceId = 'balayage';
    data = servicesData['balayage'];
  }

  // Page Title & Meta
  document.title = `${data.name} — AURA & GOLD Luxury Salon`;

  // 1. Hero
  setText('heroBreadcrumb', data.name);
  setText('heroCategory', data.category);
  setText('heroTitle', data.name);
  setText('heroTagline', data.tagline);
  setText('heroPrice', data.priceDisplay);
  setText('heroDuration', data.duration);

  const heroImg = document.getElementById('heroImage');
  if (heroImg) {
    heroImg.src = data.heroImage;
    heroImg.alt = data.name;
  }

  // Update Booking Links
  const bookingUrl = `booking.html?service=${data.id}`;
  setHref('heroBookBtn', bookingUrl);
  setHref('finalBookBtn', bookingUrl);
  setHref('stickyMobileBtn', bookingUrl);
  setText('stickyMobilePrice', data.priceDisplay);

  // 2. Quick Info Strip
  setText('quickSpecialist', data.specialist || 'Senior Specialist');
  setText('quickMaintenance', data.maintenance || '4–6 weeks');
  setText('quickRecommended', data.recommendedFor || 'All hair & skin types');
  setText('quickConsultation', data.consultation || 'Included');

  // 3. About Section
  setText('aboutTitle', data.aboutTitle || `About ${data.name}`);
  const aboutBox = document.getElementById('aboutContent');
  if (aboutBox) {
    aboutBox.innerHTML = (data.aboutContent || '').split('\n\n').map(p => `<p style="margin-bottom: 1rem;">${p.trim()}</p>`).join('');
  }

  const aboutImg = document.getElementById('aboutImage');
  if (aboutImg && data.aboutImage) {
    aboutImg.src = data.aboutImage;
    aboutImg.alt = data.name;
  }

  // 4. Included Checklist
  const includedBox = document.getElementById('includedList');
  if (includedBox && data.included) {
    includedBox.innerHTML = data.included.map(item => `
      <div style="display: flex; align-items: flex-start; gap: 0.65rem;">
        <i class="fa-solid fa-check text-gold" style="margin-top: 4px;"></i>
        <span>${item}</span>
      </div>
    `).join('');
  }

  // 6. Expect List
  const expectBox = document.getElementById('expectList');
  if (expectBox && data.expect) {
    expectBox.innerHTML = data.expect.map(item => `
      <div style="display: flex; align-items: flex-start; gap: 0.65rem;">
        <i class="fa-solid fa-star text-gold" style="margin-top: 4px; font-size: 0.8rem;"></i>
        <span>${item}</span>
      </div>
    `).join('');
  }

  // 5. Process Grid
  const processGrid = document.getElementById('processGrid');
  if (processGrid && data.process) {
    processGrid.innerHTML = data.process.map(p => `
      <div style="background-color: var(--bg-main); border: 1px solid var(--border-color); padding: 1.75rem; border-radius: var(--radius-md);">
        <span style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; color: var(--accent-gold); display: block; margin-bottom: 0.35rem;">${p.step}</span>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">${p.title}</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">${p.desc}</p>
      </div>
    `).join('');
  }

  // 7. Before & After Showcase
  const bImg = document.getElementById('beforeImg');
  const aImg = document.getElementById('afterImg');
  if (bImg && data.beforeImg) bImg.src = data.beforeImg;
  if (aImg && data.afterImg) aImg.src = data.afterImg;
  if (data.beforeLabel) setText('beforeLabel', data.beforeLabel);
  if (data.afterLabel) setText('afterLabel', data.afterLabel);

  // 8. Ideal For vs Not Ideal For
  const idealBox = document.getElementById('idealList');
  if (idealBox && data.idealFor) {
    idealBox.innerHTML = data.idealFor.map(item => `
      <div style="display: flex; align-items: flex-start; gap: 0.65rem;">
        <i class="fa-solid fa-check text-gold" style="margin-top: 3px;"></i>
        <span>${item}</span>
      </div>
    `).join('');
  }

  const notIdealBox = document.getElementById('notIdealList');
  if (notIdealBox && data.notIdealFor) {
    notIdealBox.innerHTML = data.notIdealFor.map(item => `
      <div style="display: flex; align-items: flex-start; gap: 0.65rem;">
        <i class="fa-solid fa-xmark text-gold" style="margin-top: 3px;"></i>
        <span>${item}</span>
      </div>
    `).join('');
  }

  // 9. Compatibility List
  const compBox = document.getElementById('compatibilityList');
  if (compBox && data.compatibility) {
    compBox.innerHTML = data.compatibility.map(c => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
        <span style="font-size: 0.92rem; font-weight: 500;">${c.type}</span>
        <span class="badge-status ${c.badgeClass}">${c.status}</span>
      </div>
    `).join('');
  }

  // 10. Aftercare Box
  const aftercareBox = document.getElementById('aftercareBox');
  if (aftercareBox && data.aftercare) {
    aftercareBox.innerHTML = `
      <p><strong>Recommended Touch-Up:</strong> ${data.aftercare.touchUp}</p>
      ${data.aftercare.shampoo !== 'N/A' ? `<p><strong>Recommended Shampoo:</strong> ${data.aftercare.shampoo}</p>` : ''}
      ${data.aftercare.conditioner !== 'N/A' ? `<p><strong>Recommended Conditioner:</strong> ${data.aftercare.conditioner}</p>` : ''}
      ${data.aftercare.mask !== 'N/A' ? `<p><strong>Recommended Mask:</strong> ${data.aftercare.mask}</p>` : ''}
      <p style="margin-top: 0.5rem; background: var(--bg-main); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);"><strong>Stylist Tip:</strong> ${data.aftercare.tips}</p>
    `;
  }

  // 12. Add-Ons & Dynamic Calculator
  let currentBasePrice = data.price || 8499;
  const addonsBox = document.getElementById('addonsList');
  const calcTotalEl = document.getElementById('addonCalculatedTotal');

  if (addonsBox && data.addOns) {
    addonsBox.innerHTML = data.addOns.map(a => `
      <label style="display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; background: var(--bg-main); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <input type="checkbox" class="addon-checkbox" data-price="${a.price}" style="width: 18px; height: 18px; accent-color: var(--accent-gold);">
          <span style="font-size: 0.9rem; font-weight: 500;">${a.name}</span>
        </div>
        <strong style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--accent-gold);">+₹${a.price.toLocaleString('en-IN')}</strong>
      </label>
    `).join('');

    const checkboxes = addonsBox.querySelectorAll('.addon-checkbox');
    checkboxes.forEach(cb => {
      cb.addEventListener('change', updateAddonTotal);
    });
  }

  function updateAddonTotal() {
    let total = currentBasePrice;
    if (addonsBox) {
      const cbs = addonsBox.querySelectorAll('.addon-checkbox:checked');
      cbs.forEach(c => {
        total += parseInt(c.getAttribute('data-price') || 0, 10);
      });
    }
    if (calcTotalEl) calcTotalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
  }

  // 14. FAQs Accordion
  const faqBox = document.getElementById('serviceFaqAccordion');
  if (faqBox && data.faqs) {
    faqBox.innerHTML = data.faqs.map((f, i) => `
      <div class="accordion-item ${i === 0 ? 'active' : ''}">
        <button class="accordion-header">${f.q} <i class="fa-solid fa-chevron-down"></i></button>
        <div class="accordion-body">
          <p>${f.a}</p>
        </div>
      </div>
    `).join('');
  }

  // 15. Reviews Grid
  const reviewsBox = document.getElementById('serviceReviewsGrid');
  if (reviewsBox && data.reviews) {
    reviewsBox.innerHTML = data.reviews.map(r => `
      <div class="card" style="padding: 1.5rem;">
        <div style="color: var(--accent-gold); font-size: 0.85rem; margin-bottom: 0.5rem;">
          ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">"${r.text}"</p>
        <div style="border-top: 1px solid var(--border-color); padding-top: 0.65rem;">
          <strong style="font-size: 0.95rem; color: var(--text-primary); font-family: var(--font-serif);">${r.name}</strong>
          <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">${r.location}</span>
        </div>
      </div>
    `).join('');
  }

  // 16. Gallery Grid
  const galleryBox = document.getElementById('serviceGalleryGrid');
  if (galleryBox && data.gallery) {
    galleryBox.innerHTML = data.gallery.map(img => `
      <div class="gallery-item card img-zoom-wrap" style="cursor: pointer;">
        <div class="card-img-wrap" style="padding-top: 75%;">
          <img src="${img}" alt="${data.name} Result">
        </div>
      </div>
    `).join('');
  }

  // 13. Related Services
  const relatedBox = document.getElementById('relatedServicesGrid');
  if (relatedBox && data.related) {
    relatedBox.innerHTML = data.related.map(relId => {
      const relData = servicesData[relId];
      if (!relData) return '';
      return `
        <div class="card">
          <div class="card-img-wrap">
            <img src="${relData.heroImage}" alt="${relData.name}">
          </div>
          <div class="card-body">
            <span class="card-category">${relData.category}</span>
            <h3 class="card-title">${relData.name}</h3>
            <p class="card-desc">${relData.tagline}</p>
            <div class="card-footer">
              <span class="card-price">${relData.priceDisplay}</span>
              <a href="service-details.html?service=${relData.id}" class="btn btn-outline btn-sm">View Details</a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Utility Helpers
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHref(id, href) {
  const el = document.getElementById(id);
  if (el) el.href = href;
}
