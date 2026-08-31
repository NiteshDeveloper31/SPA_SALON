/* ==========================================================================
   AURA & GOLD — Royal Indian Salon & Spa
   Commercial Step-by-Step Appointment Booking Flow & Receipt Generator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initBookingEngine();
});

function initBookingEngine() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const serviceSelect = document.getElementById('bookingService');
  const locationSelect = document.getElementById('bookingLocation');
  const stylistSelect = document.getElementById('bookingStylist');
  const dateInput = document.getElementById('bookingDate');
  const slotBtns = document.querySelectorAll('.slot-btn');
  const summaryBox = document.getElementById('bookingSummaryBox');

  let selectedTimeSlot = '11:30 AM';

  // Set default date to tomorrow
  if (dateInput && !dateInput.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  // Pre-select service/stylist from URL query params (e.g. ?service=balayage)
  const urlParams = new URLSearchParams(window.location.search);
  const paramService = urlParams.get('service');
  const paramStylist = urlParams.get('stylist');

  if (paramService && serviceSelect) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].value.toLowerCase().includes(paramService.toLowerCase()) || 
          serviceSelect.options[i].text.toLowerCase().includes(paramService.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (paramStylist && stylistSelect) {
    for (let i = 0; i < stylistSelect.options.length; i++) {
      if (stylistSelect.options[i].value.toLowerCase().includes(paramStylist.toLowerCase()) || 
          stylistSelect.options[i].text.toLowerCase().includes(paramStylist.toLowerCase())) {
        stylistSelect.selectedIndex = i;
        break;
      }
    }
  }

  // Restore saved selection from localStorage if available
  const savedData = localStorage.getItem('aura_booking_draft');
  if (savedData && !paramService) {
    try {
      const parsed = JSON.parse(savedData);
      if (parsed.service && serviceSelect) serviceSelect.value = parsed.service;
      if (parsed.location && locationSelect) locationSelect.value = parsed.location;
      if (parsed.stylist && stylistSelect) stylistSelect.value = parsed.stylist;
      if (parsed.date && dateInput) dateInput.value = parsed.date;
      if (parsed.slot) selectedTimeSlot = parsed.slot;
    } catch(e) {}
  }

  // Slot buttons selection listener
  slotBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      slotBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedTimeSlot = btn.getAttribute('data-time') || btn.textContent.trim();
      saveDraft();
      updateSummary();
    });
  });

  if (serviceSelect) serviceSelect.addEventListener('change', () => { saveDraft(); updateSummary(); });
  if (locationSelect) locationSelect.addEventListener('change', () => { saveDraft(); updateSummary(); });
  if (stylistSelect) stylistSelect.addEventListener('change', () => { saveDraft(); updateSummary(); });
  if (dateInput) dateInput.addEventListener('change', () => { saveDraft(); updateSummary(); });

  function saveDraft() {
    const draft = {
      service: serviceSelect?.value || '',
      location: locationSelect?.value || '',
      stylist: stylistSelect?.value || '',
      date: dateInput?.value || '',
      slot: selectedTimeSlot
    };
    localStorage.setItem('aura_booking_draft', JSON.stringify(draft));
  }

  function updateSummary() {
    if (!summaryBox) return;

    const selectedServiceOpt = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex] : null;
    const serviceName = selectedServiceOpt ? selectedServiceOpt.text.split('—')[0].trim() : 'Royal Hair Treatment';
    const priceAttr = selectedServiceOpt ? selectedServiceOpt.getAttribute('data-price') : null;
    const servicePrice = priceAttr ? `₹${parseInt(priceAttr).toLocaleString('en-IN')}` : '₹4,500';
    const duration = selectedServiceOpt ? selectedServiceOpt.getAttribute('data-duration') || '90 mins' : '90 mins';

    const selectedLocOpt = locationSelect ? locationSelect.options[locationSelect.selectedIndex] : null;
    const locationName = selectedLocOpt ? selectedLocOpt.text.split('—')[0].trim() : 'Bandra West, Mumbai';

    const selectedStylistOpt = stylistSelect ? stylistSelect.options[stylistSelect.selectedIndex] : null;
    const stylistName = selectedStylistOpt ? selectedStylistOpt.text.split('—')[0].trim() : 'Senior Stylist';

    summaryBox.innerHTML = `
      <div style="background: #FFFFFF; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm);">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 1.5px;">APPOINTMENT SUMMARY</span>
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; font-weight: 600; color: var(--text-primary); margin: 0.35rem 0 1rem 0;">${serviceName}</h3>
        
        <div style="display: flex; flex-direction: column; gap: 0.65rem; padding: 1rem 0; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); margin-bottom: 1rem; font-size: 0.88rem;">
          <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-secondary);">Location:</span> <strong>${locationName}</strong></div>
          <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-secondary);">Specialist:</span> <strong>${stylistName}</strong></div>
          <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-secondary);">Date & Slot:</span> <strong>${dateInput?.value || 'Tomorrow'} @ ${selectedTimeSlot}</strong></div>
          <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-secondary);">Duration:</span> <strong>${duration}</strong></div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">Total Payable (at salon):</span>
          <span style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 700; color: var(--text-primary);">${servicePrice}</span>
        </div>
      </div>
    `;
  }

  updateSummary();

  // Handle Static Booking Submission Receipt
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('clientName');
    const phoneInput = document.getElementById('clientPhone');

    const clientName = nameInput ? nameInput.value : 'Sanjana Sharma';
    const clientPhone = phoneInput ? phoneInput.value : '+91 98765 43210';

    const selectedServiceOpt = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex] : null;
    const serviceName = selectedServiceOpt ? selectedServiceOpt.text.split('—')[0].trim() : 'Hair Treatment';
    const priceAttr = selectedServiceOpt ? selectedServiceOpt.getAttribute('data-price') : null;
    const servicePrice = priceAttr ? `₹${parseInt(priceAttr).toLocaleString('en-IN')}` : '₹4,500';

    const referenceId = `AG-${Math.floor(100000 + Math.random() * 900000)}`;

    showReceiptModal(clientName, clientPhone, serviceName, servicePrice, referenceId);
  });

  function showReceiptModal(name, phone, service, price, refId) {
    let modal = document.querySelector('.booking-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'lightbox-modal booking-modal';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="lightbox-content" style="max-width: 540px; background: #FFFFFF; padding: 2.5rem 2rem; border-radius: var(--radius-md); text-align: center; color: var(--text-primary);">
        <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--accent-gold-light); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; margin: 0 auto 1.25rem auto;"><i class="fa-solid fa-check"></i></div>
        <h2 style="font-family: var(--font-serif); font-size: 2rem; color: var(--text-primary); margin-bottom: 0.35rem;">Appointment Requested</h2>
        <p style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem;">CONFIRMATION REF: #${refId}</p>
        
        <div style="background: var(--bg-main); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1.25rem; text-align: left; font-size: 0.9rem; margin-bottom: 1.5rem;">
          <p style="margin-bottom: 0.5rem;"><strong>Guest:</strong> ${name} (${phone})</p>
          <p style="margin-bottom: 0.5rem;"><strong>Treatment:</strong> ${service}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Date & Time:</strong> ${dateInput?.value || 'Tomorrow'} @ ${selectedTimeSlot}</p>
          <p style="margin-bottom: 0;"><strong>Payable at Salon:</strong> ${price}</p>
        </div>

        <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1.75rem;">This is a demonstration booking request. Our team will contact you via WhatsApp to reconfirm your time slot.</p>
        <button class="btn btn-primary modal-close-btn" style="width: 100%;">Done & Return Home</button>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.onclick = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      localStorage.removeItem('aura_booking_draft');
      window.location.href = 'index.html';
    };
  }
}
