/* ==========================================================================
   AURA & GOLD - ROYAL INDIAN SALON & SPA
   Interactive Booking Engine & Confirmation Modal System
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initBookingEngine();
});

function initBookingEngine() {
  const appointmentForm = document.getElementById('appointmentForm') || document.getElementById('bookingForm');
  if (!appointmentForm) return;

  const serviceSelect = document.getElementById('serviceSelect') || document.getElementById('bookingService');
  const stylistSelect = document.getElementById('stylistSelect') || document.getElementById('bookingStylist');
  const locationSelect = document.getElementById('locationSelect') || document.getElementById('bookingLocation');
  const dateInput = document.getElementById('dateInput') || document.getElementById('bookingDate');

  const slotBtns = document.querySelectorAll('.slot-btn');
  const summaryBox = document.getElementById('bookingSummaryBox');

  let selectedSlot = '11:30 AM';

  // Set default date to tomorrow
  if (dateInput && !dateInput.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  // Pre-select service from URL parameter (e.g. ?service=keratin)
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

  // Slot selector listener
  slotBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      slotBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSlot = btn.getAttribute('data-time') || btn.textContent.trim();
      renderSummary();
    });
  });

  if (serviceSelect) serviceSelect.addEventListener('change', renderSummary);
  if (stylistSelect) stylistSelect.addEventListener('change', renderSummary);
  if (locationSelect) locationSelect.addEventListener('change', renderSummary);
  if (dateInput) dateInput.addEventListener('change', renderSummary);

  function renderSummary() {
    if (!summaryBox) return;

    const selectedServiceOpt = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex] : null;
    const serviceName = selectedServiceOpt ? selectedServiceOpt.text.split('—')[0] : 'Royal Keratin Smoothening';
    const servicePrice = selectedServiceOpt ? selectedServiceOpt.getAttribute('data-price') ? `₹${parseInt(selectedServiceOpt.getAttribute('data-price')).toLocaleString('en-IN')}` : '₹6,999' : '₹6,999';
    const duration = selectedServiceOpt ? selectedServiceOpt.getAttribute('data-duration') || '180 mins' : '180 mins';

    const selectedStylistOpt = stylistSelect ? stylistSelect.options[stylistSelect.selectedIndex] : null;
    const stylistName = selectedStylistOpt ? selectedStylistOpt.text : 'Ananya Sharma — Creative Hair Director';

    const selectedLocOpt = locationSelect ? locationSelect.options[locationSelect.selectedIndex] : null;
    const locationName = selectedLocOpt ? selectedLocOpt.text : 'Mumbai — Waterfield Road, Bandra West';

    summaryBox.innerHTML = `
      <div style="background: var(--bg-card); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.75rem; box-shadow: 0 15px 40px rgba(0,0,0,0.5);">
        <span style="font-size: 0.75rem; color: var(--gold-primary); text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">APPOINTMENT SUMMARY</span>
        <h3 style="font-size: 1.5rem; color: var(--text-white); margin: 0.35rem 0 1.25rem 0; font-family: var(--font-serif);">${serviceName}</h3>
        
        <div style="display: flex; flex-direction: column; gap: 0.85rem; border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08); padding: 1.25rem 0; margin-bottom: 1.25rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
            <span style="color: var(--text-secondary);"><i class="fa-solid fa-location-dot text-gold"></i> Location:</span>
            <strong style="color: var(--text-white); text-align: right;">${locationName.split('—')[0]}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
            <span style="color: var(--text-secondary);"><i class="fa-solid fa-scissors text-gold"></i> Specialist:</span>
            <strong style="color: var(--text-white); text-align: right;">${stylistName.split('—')[0]}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
            <span style="color: var(--text-secondary);"><i class="fa-regular fa-calendar-days text-gold"></i> Date & Slot:</span>
            <strong style="color: var(--gold-light); text-align: right;">${dateInput?.value || 'Tomorrow'} @ ${selectedSlot}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
            <span style="color: var(--text-secondary);"><i class="fa-regular fa-clock text-gold"></i> Est. Duration:</span>
            <strong style="color: var(--text-white);">${duration}</strong>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.9rem; color: var(--text-muted);">Total Payable (at salon):</span>
          <span style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--gold-primary); font-weight: 700;">${servicePrice}</span>
        </div>
      </div>
    `;
  }

  renderSummary();

  // Confirmation Receipt Modal Submission
  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const clientNameInput = document.getElementById('clientName');
    const clientPhoneInput = document.getElementById('clientPhone');

    const clientName = clientNameInput ? clientNameInput.value : 'Sanjana Sharma';
    const clientPhone = clientPhoneInput ? clientPhoneInput.value : '+91 98765 43210';

    const modal = document.getElementById('bookingModal');
    const modalDetails = document.getElementById('modalDetails');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    const selectedServiceOpt = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex] : null;
    const serviceName = selectedServiceOpt ? selectedServiceOpt.text.split('—')[0] : 'Royal Keratin Smoothening';
    const servicePrice = selectedServiceOpt ? selectedServiceOpt.getAttribute('data-price') ? `₹${parseInt(selectedServiceOpt.getAttribute('data-price')).toLocaleString('en-IN')}` : '₹6,999' : '₹6,999';

    const reservationId = `AG-${Math.floor(100000 + Math.random() * 900000)}`;

    if (modal && modalDetails) {
      modalDetails.innerHTML = `
        <div style="width: 75px; height: 75px; border-radius: 50%; background: var(--gold-gradient); color: var(--bg-dark); font-size: 2.4rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; box-shadow: var(--gold-glow); border: 2px solid #FFF;">✓</div>
        <h2 style="font-family: var(--font-serif); font-size: 2.3rem; color: var(--text-white); margin-bottom: 0.35rem;">Appointment Reserved!</h2>
        <p style="color: var(--gold-primary); font-size: 0.95rem; text-transform: uppercase; letter-spacing: 2.5px; font-weight: 700; margin-bottom: 1.5rem;">RESERVATION ID: #${reservationId}</p>
        
        <div style="background: var(--bg-dark); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.5rem; text-align: left; margin-bottom: 1.75rem;">
          <p style="margin-bottom: 0.6rem; color: var(--text-secondary);"><strong>Guest:</strong> <span style="color: #FFF;">${clientName} (${clientPhone})</span></p>
          <p style="margin-bottom: 0.6rem; color: var(--text-secondary);"><strong>Treatment:</strong> <span style="color: #FFF;">${serviceName}</span></p>
          <p style="margin-bottom: 0.6rem; color: var(--text-secondary);"><strong>Date & Slot:</strong> <span style="color: var(--gold-light);">${dateInput?.value || 'Tomorrow'} @ ${selectedSlot}</span></p>
          <p style="margin-bottom: 0.6rem; color: var(--text-secondary);"><strong>Total Payable:</strong> <span style="color: var(--gold-primary); font-weight: 700;">${servicePrice}</span> (Pay after treatment)</p>
          <p style="color: var(--text-secondary); margin: 0;"><strong>Perks Included:</strong> <span style="color: #FFF;">Private Suite, Kashmiri Kahwa Bar & Free Valet</span></p>
        </div>

        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 2rem;">Instant SMS & WhatsApp receipt sent to ${clientPhone}. We look forward to pampering you!</p>
        <button class="btn btn-gold modal-done-btn" style="width: 100%;">Return to Home</button>
      `;

      modal.classList.add('active');

      const doneBtn = modalDetails.querySelector('.modal-done-btn');
      if (doneBtn) doneBtn.onclick = () => {
        modal.classList.remove('active');
        window.location.href = 'index.html';
      };
      if (modalCloseBtn) modalCloseBtn.onclick = () => modal.classList.remove('active');
    }
  });
}
