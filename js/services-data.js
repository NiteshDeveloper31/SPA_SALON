/* ==========================================================================
   AURA & GOLD — Royal Indian Salon & Spa
   Central Master Services Database & Detail Architecture
   ========================================================================== */

const servicesData = {
  'balayage': {
    id: 'balayage',
    category: 'HAIR STUDIO & COLOR',
    categoryCode: 'hair',
    name: 'French Caramel Balayage',
    tagline: 'Hand-painted dimensional highlights customized to your natural hair color, skin tone, and lifestyle.',
    heroImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
    price: 8499,
    priceDisplay: '₹8,499 onwards',
    duration: '150 mins',
    durationText: '150 minutes',
    specialist: 'Hair Color Specialist',
    maintenance: '8–12 weeks',
    recommendedFor: 'Medium to long dark Indian hair',
    consultation: 'Included',
    
    aboutTitle: 'About French Caramel Balayage',
    aboutContent: `Balayage—derived from the French word meaning "to sweep"—is a hand-painting technique that creates a soft, natural-looking graduation of lightness towards the ends. Unlike traditional foil highlights that start right at the scalp, balayage is applied freehand by our certified Art Directors to complement your natural hair growth and face structure.
    
    For Indian hair bases (typically levels 1 to 3 dark brown/black), caramel, honey, and warm hazelnut tones offer the most flattering, sun-kissed dimension without turning brassy. Combined with Olaplex bond protection, your hair remains soft, shiny, and strong throughout the lightening process.`,
    aboutImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',

    included: [
      'In-depth scalp & hair porosity consultation',
      'Personalized caramel shade mixology planning',
      'Freehand sectioning and balayage application',
      'Olaplex No.1 & No.2 bond repair integration',
      'Custom gloss toner finish to eliminate brassiness',
      'Color-safe luxury shampoo & hair mask',
      'Signature blowdry & soft wave styling',
      'Personalized home aftercare regimen prescription'
    ],

    process: [
      { step: '01', title: 'Consultation & Strand Test', desc: 'Your stylist evaluates hair porosity, base level, and previous color history to determine target lightener strength.' },
      { step: '02', title: 'Custom Color Formulations', desc: 'Caramel and warm amber shades are mixed with protective bond builders matched to your skin undertone.' },
      { step: '03', title: 'Freehand Application', desc: 'Highlights are hand-painted in sweeping V-shapes through mid-lengths and ends for seamless blending.' },
      { step: '04', title: 'Bond Repair Treatment', desc: 'Olaplex bond reconstructor is applied at the wash station to reconnect broken disulfide bonds.' },
      { step: '05', title: 'Toner & Gloss Finish', desc: 'A translucent gloss locks in warm caramel warmth, Seals cuticles, and boosts high-shine brilliance.' },
      { step: '06', title: 'Blowdry & Wave Styling', desc: 'Hair is blow-dried with heat protection and styled into soft dimensional beach waves.' }
    ],

    expect: [
      'Seamless, soft root transition without harsh lines',
      'Rich dimensional warmth suited for Indian complexions',
      'Low-maintenance grow-out lasting 8 to 12 weeks',
      'Enhanced natural shine and movement',
      'Protected hair fiber elasticity via Olaplex'
    ],

    beforeImg: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    beforeLabel: 'Natural Dark Base (Level 2)',
    afterLabel: 'After Caramel Balayage & Gloss',

    idealFor: [
      'First-time hair color clients seeking subtle dimension',
      'Medium to long virgin or dark brown hair',
      'Clients looking for low-maintenance color root grow-out',
      'Warm or olive Indian skin undertones'
    ],
    notIdealFor: [
      'Clients wanting an all-over solid jet black color',
      'Extremely compromised or over-bleached hair shafts',
      'Very short pixie cuts requiring full foil coverage'
    ],

    compatibility: [
      { type: 'Natural Black / Dark Brown Hair', status: 'Highly Suitable', badgeClass: 'bg-green' },
      { type: 'Previously Colored Hair (No Box Dye)', status: 'Suitable with Strand Test', badgeClass: 'bg-gold' },
      { type: 'Black Box Dyed Hair', status: 'Consultation Required', badgeClass: 'bg-red' },
      { type: 'Bleached / Damaged Hair', status: 'Bond Repair Required First', badgeClass: 'bg-red' }
    ],

    aftercare: {
      touchUp: '8–12 weeks for gloss toner refresh',
      shampoo: 'Sulfate-free, color-safe shampoo (e.g. Kérastase Chroma Absolu)',
      conditioner: 'Nourishing moisture conditioner after every wash',
      mask: 'Weekly Olaplex No.3 deep repair mask treatment',
      tips: 'Rinse with cool water, avoid hot styling tools above 180°C, and use leave-in thermal protection.'
    },

    addOns: [
      { id: 'addon-olaplex', name: 'Olaplex No.4 & No.5 Deep Bond Treatment', price: 1500 },
      { id: 'addon-cut', name: 'Art Director Split-End Trim', price: 1200 },
      { id: 'addon-scalp', name: 'Detox Scalp Scrub & Massage', price: 1000 }
    ],

    faqs: [
      { q: 'Will balayage damage my natural dark Indian hair?', a: 'Because we integrate Olaplex bond repair directly into our lightener and tone with ammonia-free glosses, cuticular damage is minimized. Your hair remains soft and elastic.' },
      { q: 'How long does the French Balayage appointment take?', a: 'A full balayage session takes approximately 150 to 180 minutes, including consultation, hand-painting, bond treatment, glossing, and styling.' },
      { q: 'How often will I need to touch up my balayage roots?', a: 'Because balayage does not start directly at the scalp root, there are no harsh regrowth lines. Most clients only return every 8 to 12 weeks for a quick 30-minute toner gloss refresh.' }
    ],

    reviews: [
      { name: 'Sanjana Sharma', location: 'Bandra West, Mumbai', rating: 5, text: 'Ananya at Bandra West transformed my dull dark hair into the exact caramel dimension I wanted. 3 months later and the grow-out is completely seamless!' },
      { name: 'Pooja Reddy', location: 'Jubilee Hills, Hyderabad', rating: 5, text: 'The Olaplex treatment included in the balayage kept my hair so soft. No dryness at all despite lightening!' }
    ],

    gallery: [
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80'
    ],

    related: ['keratin', 'couture-cut', 'olaplex-spa']
  },

  'keratin': {
    id: 'keratin',
    category: 'HAIR STUDIO & SMOOTHENING',
    categoryCode: 'hair',
    name: 'Royal Keratin Smoothening',
    tagline: 'Formaldehyde-free protein smoothing therapy that eliminates humidity frizz for up to 6 months.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    price: 6999,
    priceDisplay: '₹6,999 onwards',
    duration: '180 mins',
    durationText: '180 minutes',
    specialist: 'Keratin & Texture Master',
    maintenance: '4–6 months',
    recommendedFor: 'Frizzy, wavy, or unruly hair',
    consultation: 'Included',

    aboutTitle: 'About Royal Keratin Smoothening',
    aboutContent: `Humidity in Indian coastal and metro cities is the primary cause of unmanageable hair frizz, volume puffiness, and cuticular rough textures. Our Royal Keratin treatment infuses natural hydrolyzed keratin proteins deep into damaged hair cuticles.
    
    Unlike older straightening treatments that use harsh chemicals, our 100% formaldehyde-free formula smooths the hair shaft without breaking its internal bonds permanently. You retain natural movement and body while enjoying silky, wash-and-go manageability.`,
    aboutImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',

    included: [
      'Clarifying detox scalp and hair wash',
      'Formaldehyde-free keratin protein application',
      'Infrared flat-iron sealing process',
      'Deep moisture locking hair mask',
      'Blowdry & smooth silk press finishing',
      'Sulfate-free home aftercare advice'
    ],

    process: [
      { step: '01', title: 'Clarifying Cleansing', desc: 'Hair is washed twice with a deep clarifying shampoo to strip product buildup and open cuticles.' },
      { step: '02', title: 'Keratin Application', desc: 'Hydrolyzed protein formula is applied section-by-section from roots to ends.' },
      { step: '03', title: 'Processing Time', desc: 'The treatment processes for 35 to 45 minutes under ambient warmth to penetrate cuticles.' },
      { step: '04', title: 'Infrared Sealing', desc: 'Precision flat irons set at controlled temperatures seal the protein into the hair shaft.' },
      { step: '05', title: 'Final Silk Finish', desc: 'Hair is rinsed with cool water, mask treated, and blow-dried smooth.' }
    ],

    expect: [
      'Up to 95% reduction in daily hair frizz',
      'Cut blowdry styling time in half',
      'Soft, glossy touchable texture',
      'Results lasting 4 to 6 months with sulfate-free care'
    ],

    beforeImg: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    beforeLabel: 'Frizzy Unruly Wavy Texture',
    afterLabel: 'After Royal Keratin Smoothening',

    idealFor: [
      'Clients struggling with humidity frizz and puffiness',
      'Wavy or unruly hair textures requiring daily flat ironing',
      'Chemically treated or color-damaged hair'
    ],
    notIdealFor: [
      'Clients wanting pin-straight Japanese rebonding',
      'Severe scalp psoriasis or active open scalp cuts'
    ],

    compatibility: [
      { type: 'Frizzy / Wavy Hair', status: 'Highly Suitable', badgeClass: 'bg-green' },
      { type: 'Colored / Highlighted Hair', status: '100% Safe', badgeClass: 'bg-green' },
      { type: 'Coarse / Curly Hair', status: 'Frizz-Free Reduction', badgeClass: 'bg-green' }
    ],

    aftercare: {
      touchUp: '4–6 months',
      shampoo: 'Strictly Sodium Chloride & Sulfate-Free Shampoo',
      conditioner: 'Keratin Infused Conditioner',
      mask: 'Bi-weekly smoothing hair butter mask',
      tips: 'Avoid washing hair for 48 hours post-treatment. Do not tie tightly with elastic bands for the first 2 days.'
    },

    addOns: [
      { id: 'addon-trim', name: 'Post-Keratin Haircut & Split End Trim', price: 1200 },
      { id: 'addon-home-kit', name: 'Aftercare Keratin Shampoo & Conditioner Set', price: 2200 }
    ],

    faqs: [
      { q: 'Is your Keratin treatment formaldehyde-free?', a: 'Yes, 100%. Our Royal Keratin formula is completely formaldehyde-free and safe for hair and health.' },
      { q: 'Can I wash my hair immediately after the treatment?', a: 'We recommend waiting 48 hours before your first home wash to allow the protein matrix to fully set.' }
    ],

    reviews: [
      { name: 'Rohan Verma', location: 'Connaught Place, Delhi', rating: 5, text: 'My frizzy waves are now so soft and easy to style. Saves me 30 minutes every morning!' }
    ],

    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80'
    ],

    related: ['balayage', 'olaplex-spa', 'couture-cut']
  },

  'saffron-facial': {
    id: 'saffron-facial',
    category: 'SKINCARE & FACIALS',
    categoryCode: 'skin',
    name: '24K Kashmiri Saffron Kumkumadi Facial',
    tagline: 'Pure 24K edible gold foil leaf massage infused with organic wild Kashmiri saffron to restore bridal glow.',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    price: 4499,
    priceDisplay: '₹4,499 onwards',
    duration: '75 mins',
    durationText: '75 minutes',
    specialist: 'Senior Dermal Therapist',
    maintenance: '3–4 weeks',
    recommendedFor: 'Tanned, dull, or pre-event skin',
    consultation: 'Included',

    aboutTitle: 'About 24K Kashmiri Saffron Facial',
    aboutContent: `Kumkumadi Tailam—an ancient Ayurvedic formulation centered on saffron stamen extracts—has been used for centuries to enhance complexion luminosity and fade pigmentation.
    
    This luxurious treatment combines pure 24K edible gold foil leaf application with ultrasonic lymphatic facial drainage massage. Gold ions stimulate cellular micro-circulation, while Kashmiri saffron reduces sun tan and evens out skin tone.`,
    aboutImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',

    included: [
      'Double cleansing with herbal saffron water',
      'Gentle walnut and sandalwood micro-exfoliation',
      'Pore steaming and blackhead extraction',
      'Pure 24K gold foil leaf massage',
      'Kumkumadi herbal oil lymphatic massage',
      'Cooling saffron clay mask pack',
      'SPF 50 protective sunscreen application'
    ],

    process: [
      { step: '01', title: 'Cleansing & Skin Analysis', desc: 'Skin is cleansed with rosewater and evaluated under magnifying lamps for sensitivity.' },
      { step: '02', title: 'Gentle Exfoliation', desc: 'Dead skin cells are buffed away using natural sandalwood micro-pearls.' },
      { step: '03', title: '24K Gold Leaf Massage', desc: 'Edible 24K gold leaves are pressed onto the face and massaged with saffron serum until absorbed.' },
      { step: '04', title: 'Soothing Clay Mask', desc: 'A mineral-rich saffron pack calms pores and seals moisture.' }
    ],

    expect: [
      'Immediate radiant luminosity and tan reduction',
      'Refined skin texture and hydrated plumpness',
      'Faded dark spots over regular sessions'
    ],

    beforeImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80',
    beforeLabel: 'Dull Tanned Skin Texture',
    afterLabel: 'After 24K Gold Saffron Facial',

    idealFor: [
      'Brides and wedding guests seeking instant glow',
      'Dull or sun-tanned Indian complexions',
      'Dry or combination skin types'
    ],
    notIdealFor: [
      'Severe active cystic acne (Hydra Medi-Facial recommended instead)'
    ],

    compatibility: [
      { type: 'Normal / Dry Skin', status: 'Highly Suitable', badgeClass: 'bg-green' },
      { type: 'Combination Skin', status: 'Suitable', badgeClass: 'bg-green' },
      { type: 'Severe Active Acne', status: 'Consultation Advised', badgeClass: 'bg-gold' }
    ],

    aftercare: {
      touchUp: 'Every 3 to 4 weeks',
      shampoo: 'N/A',
      conditioner: 'N/A',
      mask: 'Weekly hydrating sheet mask',
      tips: 'Avoid direct sun exposure for 24 hours. Apply SPF 50 daily.'
    },

    addOns: [
      { id: 'addon-eye', name: 'Under-Eye Dark Circle Collagen Pad Mask', price: 800 },
      { id: 'addon-neck', name: 'Neck & Decollete Gold Firming Mask', price: 1000 }
    ],

    faqs: [
      { q: 'Is the 24K gold real gold?', a: 'Yes, we use 100% certified 24K edible pure gold foil leaves imported from certified cosmetic manufacturers.' },
      { q: 'How many days before my event should I get this facial?', a: 'We recommend scheduling 2 to 4 days prior to your wedding or main event.' }
    ],

    reviews: [
      { name: 'Ananya Deshmukh', location: 'Indiranagar, Bengaluru', rating: 5, text: 'My skin was glowing for a full week after my sangeet. Loved the gold foil massage!' }
    ],

    gallery: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80'
    ],

    related: ['hydra-facial', 'diamond-facial', 'abhyanga']
  },

  'abhyanga': {
    id: 'abhyanga',
    category: 'AYURVEDIC SPA & WELLNESS',
    categoryCode: 'spa',
    name: 'Kerala Abhyanga Warm Herbal Oil Massage',
    tagline: '90-minute rhythmic full-body massage using warm Kerala herbal oils in private hydrotherapy suites.',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    price: 4999,
    priceDisplay: '₹4,999 onwards',
    duration: '90 mins',
    durationText: '90 minutes',
    specialist: 'Certified Kerala Spa Therapist',
    maintenance: 'Bi-weekly or Monthly',
    recommendedFor: 'Muscular stress, fatigue & joint stiffness',
    consultation: 'Included',

    aboutTitle: 'About Kerala Abhyanga Warm Oil Massage',
    aboutContent: `Abhyanga is the flagship body therapy of traditional Kerala Ayurveda. Performed with warm medicated oils like Dhanwantharam or Mahanarayana, this 90-minute treatment uses synchronized long strokes towards the heart to stimulate blood flow and lymphatic drainage.
    
    Conducted in our soundproof spa suites featuring ambient lighting and acoustic rain sounds, Abhyanga releases deeply held muscular knots, lubricates joints, and calms an overactive nervous system.`,
    aboutImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',

    included: [
      'Private spa suite with ensuite hot shower',
      'Warm Dhanwantharam herbal oil application',
      '90-minute full body synchronized massage',
      'Herbal steam chamber session (Swedana)',
      'Complimentary Kashmiri Kahwa herbal tea'
    ],

    process: [
      { step: '01', title: 'Oil Selection', desc: 'Therapist selects warm medicated herbal oil matched to your body dosha.' },
      { step: '02', title: 'Full Body Massage', desc: 'Rhythmic long strokes knead muscles from head to toe.' },
      { step: '03', title: 'Herbal Steam', desc: 'A 10-minute herbal steam session helps oil absorb deeply into skin tissues.' },
      { step: '04', title: 'Hot Shower & Refreshments', desc: 'Enjoy a private hot rain shower followed by freshly brewed Kashmiri Kahwa.' }
    ],

    expect: [
      'Deep muscular relaxation and stress relief',
      'Improved sleep quality and skin nourishment',
      'Eased joint stiffness and tension'
    ],

    beforeImg: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    beforeLabel: 'Tense Muscular Fatigue',
    afterLabel: 'After 90-Min Abhyanga Spa',

    idealFor: [
      'Working professionals facing desk strain',
      'Athletes or individuals with muscle soreness',
      'Anyone seeking deep relaxation'
    ],
    notIdealFor: [
      'Fever, acute skin infections, or early pregnancy'
    ],

    compatibility: [
      { type: 'Muscular Tension', status: 'Highly Suitable', badgeClass: 'bg-green' },
      { type: 'Dry Skin', status: 'Deeply Nourishing', badgeClass: 'bg-green' }
    ],

    aftercare: {
      touchUp: 'Monthly wellness sessions',
      shampoo: 'N/A',
      conditioner: 'N/A',
      mask: 'N/A',
      tips: 'Drink plenty of warm water post-massage to flush toxins.'
    },

    addOns: [
      { id: 'addon-potli', name: 'Herbal Potli Hot Compress Supplement', price: 1000 },
      { id: 'addon-shirodhara', name: '30-Min Shirodhara Oil Pouring', price: 2000 }
    ],

    faqs: [
      { q: 'Are shower facilities provided in the spa room?', a: 'Yes. Every suite includes a private hot rain shower, organic body wash, and fresh towels.' }
    ],

    reviews: [
      { name: 'Vikram Mehta', location: 'Bandra West, Mumbai', rating: 5, text: 'The best 90 minutes of my month. Truly authentic Kerala oil massage!' }
    ],

    gallery: [
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    ],

    related: ['couple-spa', 'swedish', 'saffron-facial']
  },

  'hd-bridal': {
    id: 'hd-bridal',
    category: 'BRIDAL STUDIO & MAKEUP',
    categoryCode: 'bridal',
    name: 'HD Royal Bridal Package',
    tagline: 'Complete 4K airbrush bridal makeup, saree/dupatta draping, and hair styling for your wedding day.',
    heroImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80',
    price: 28000,
    priceDisplay: '₹28,000 onwards',
    duration: '240 mins',
    durationText: '240 minutes',
    specialist: 'Chief Bridal Makeup Artist',
    maintenance: 'Wedding Day',
    recommendedFor: 'Brides seeking 14+ hour waterproof makeup',
    consultation: 'Included',

    aboutTitle: 'About HD Royal Bridal Package',
    aboutContent: `Your wedding day is one of the most photographed moments of your life. Our HD Royal Bridal Makeup uses micro-fine 4K airbrush pigments that resist sweat, humidity, and tears for over 14 hours.
    
    Conducted in our private bridal suites, the package includes complete bridal makeup, hair extension setting, jewelry placement, and master dupatta/saree draping in traditional North or South Indian styles.`,
    aboutImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',

    included: [
      'HD 4K Airbrush waterproof bridal makeup',
      'High-grade mink false eyelashes application',
      'Bridal hair styling & floral/jewelry insertion',
      'Master saree / dupatta draping & pinning',
      'Body shimmer & decollete polish',
      'Mini bridal touch-up lipstick kit'
    ],

    process: [
      { step: '01', title: 'Skin Prep', desc: 'Hydrating primers and eye masks prepare the canvas.' },
      { step: '02', title: 'Airbrush Base', desc: 'Weightless 4K airbrush foundation creates a flawless, non-caky finish.' },
      { step: '03', title: 'Eye Artistry & Lashes', desc: 'Waterproof Smokey or gold cut-crease eye makeup with hand-placed lashes.' },
      { step: '04', title: 'Hair & Draping', desc: 'Intricate bridal bun styling and master dupatta pinning.' }
    ],

    expect: [
      '14+ hours of waterproof, tear-proof wear',
      'Flawless non-flashback 4K camera finish',
      'Complete stress-free pampering in a private suite'
    ],

    beforeImg: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
    beforeLabel: 'Natural Skin Prep',
    afterLabel: 'After HD Royal Bridal Finish',

    idealFor: [
      'Brides wanting long-lasting 4K camera makeup',
      'North & South Indian wedding ceremonies'
    ],
    notIdealFor: [
      'Simple minimal party makeup (Engagement Glam recommended instead)'
    ],

    compatibility: [
      { type: 'All Indian Skin Tones', status: 'Custom Shade Matched', badgeClass: 'bg-green' }
    ],

    aftercare: {
      touchUp: 'Wedding Day',
      shampoo: 'N/A',
      conditioner: 'N/A',
      mask: 'N/A',
      tips: 'Use oil-based makeup remover for gentle removal post-wedding.'
    },

    addOns: [
      { id: 'addon-trial', name: 'Pre-Wedding Trial Makeup Session', price: 3500 },
      { id: 'addon-mother', name: 'Mother of the Bride Makeup Package', price: 6500 }
    ],

    faqs: [
      { q: 'Is a makeup trial included?', a: 'Trial sessions can be added at a discounted rate 2 weeks prior to your date.' }
    ],

    reviews: [
      { name: 'Meera Kapoor', location: 'Connaught Place, Delhi', rating: 5, text: 'Priya Nair made me feel like royalty. The makeup stayed perfect through 14 hours of ceremony!' }
    ],

    gallery: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80'
    ],

    related: ['saffron-facial', 'balayage', 'abhyanga']
  }
};
