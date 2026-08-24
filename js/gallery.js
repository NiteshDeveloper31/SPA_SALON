/* ==========================================================================
   AURA & GOLD - ROYAL INDIAN SALON & SPA
   Interactive Lightbox & Portfolio Filter System
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryFiltering();
  initGalleryLightbox();
});

/* Portfolio Category Filtering */
function initGalleryFiltering() {
  const filterBtns = document.querySelectorAll('.tab-btn[data-filter]');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.85)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* Premium Fullscreen Lightbox Modal */
function initGalleryLightbox() {
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  if (!galleryItems.length) return;

  // Inject Lightbox Modal markup into DOM if not present
  let lightbox = document.querySelector('.lightbox-modal');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
      <div class="lightbox-container">
        <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous Image"><i class="fa-solid fa-chevron-left"></i></button>
        <img src="" class="lightbox-img" alt="Gallery Lightbox View">
        <button class="lightbox-nav lightbox-next" aria-label="Next Image"><i class="fa-solid fa-chevron-right"></i></button>
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const modalImg = lightbox.querySelector('.lightbox-img');
  const caption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;

  function openLightbox(index) {
    const visibleItems = galleryItems.filter(item => item.style.display !== 'none');
    if (!visibleItems.length) return;

    if (index < 0) index = visibleItems.length - 1;
    if (index >= visibleItems.length) index = 0;

    currentIndex = index;
    const currentItem = visibleItems[currentIndex];
    const img = currentItem.querySelector('img');
    const title = currentItem.querySelector('.gallery-title')?.textContent || '';

    modalImg.src = img.src;
    modalImg.alt = img.alt || title;
    caption.textContent = title;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const visibleItems = galleryItems.filter(i => i.style.display !== 'none');
      const idx = visibleItems.indexOf(item);
      openLightbox(idx >= 0 ? idx : 0);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => openLightbox(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => openLightbox(currentIndex + 1));

  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard Navigation (ESC, Left, Right Arrow)
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') openLightbox(currentIndex - 1);
    if (e.key === 'ArrowRight') openLightbox(currentIndex + 1);
  });
}
