// ============================================================
//  NILACHALA KITCHEN — SITE CONFIG
//  Edit this file to change branding, meta, and tax settings.
// ============================================================

const CONFIG = {

  // ── Branding ──────────────────────────────────────────────
  restaurantName:  'Nilachala Kitchen',
  tagline:         'Dakshin Bites',
  heroSubtitle:    'Authentic Dakshin Bites · Made with Fresh Ingredients',
  heroTags:        ['South Indian', 'Andhra Flavours', 'Traditional Recipes'],

  // Logo file — place in the same folder as index.html
  // Supported: .png  .jpg  .svg  .webp
  logoFile:        'NilaChala.png',

  // ── Tax ───────────────────────────────────────────────────
  // e.g. 0.05 = 5%,  0 = no tax
  taxRate:         0.05,
  taxLabel:        'Taxes & charges',

  // ── Currency ──────────────────────────────────────────────
  currencySymbol:  '$',

  // ── Order Types (shown above menu) ───────────────────────
  // Set enabled: false to hide an option
  orderTypes: [
    { id: 'dine',    icon: '🍽️', label: 'Dine In',  sub: 'Table service',    enabled: true },
    { id: 'takeaway',icon: '🛍️', label: 'Takeaway', sub: 'Ready in 15 min',  enabled: true },
    { id: 'delivery',icon: '🛵', label: 'Delivery',  sub: '30–45 min',        enabled: true },
  ],
  defaultOrderType: 'dine',

  // ── Checkout Message ─────────────────────────────────────
  // Shown in the alert after "Place Order"
  checkoutMessage: 'Thank you for ordering from Nilachala Kitchen!',

  // ── Theme Colors (CSS variables) ─────────────────────────
  // Advanced: only change if you want to rebrand colors.
  // These are injected into :root at runtime.
  colors: {
    '--olive':      '#3E3C10',
    '--olive-mid':  '#5A5820',
    '--gold':       '#8A7A30',
    '--gold-lt':    '#B0A055',
    '--gold-pale':  '#D4C87A',
    '--parchment':  '#F5EED8',
    '--cream':      '#FAF5E4',
    '--warm-white': '#FFFDF5',
    '--border':     '#C8BC8A',
    '--muted':      '#8A8470',
    '--spice':      '#B03A1A',
    '--leaf':       '#3E6B30',
    '--shadow':     'rgba(62,60,16,0.14)',
  },
};
