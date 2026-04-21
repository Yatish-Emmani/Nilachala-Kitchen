/* ============================================================
   NILACHALA KITCHEN — APP LOGIC
   Handles: rendering, modal, cart, toast, order type.
   Data comes from data/menu.js and data/config.js
   ============================================================ */

'use strict';

// ── Apply config colors into :root ───────────────────────────
(function applyColors() {
  const root = document.documentElement;
  Object.entries(CONFIG.colors).forEach(([prop, val]) => root.style.setProperty(prop, val));
})();

// ── Logo helpers ─────────────────────────────────────────────
function logoImgTag(cls, fallbackClass) {
  return `
    <img class="${cls}" src="${CONFIG.logoFile}" alt="${CONFIG.restaurantName}"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
    <div class="${fallbackClass}" style="display:none;">🍽️</div>
  `;
}

// ── State ─────────────────────────────────────────────────────
let cart             = [];
let activeItem       = null;
let activeSelections = {};
let activeQty        = 1;

// ── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectBranding();
  renderOrderTypes();
  renderNavCategories();
  renderMenu();
  updateCartUI();
});

// ── Branding ─────────────────────────────────────────────────
function injectBranding() {
  document.title = `${CONFIG.restaurantName} — Order Online`;

  // Nav
  document.getElementById('nav-logo-slot').innerHTML = logoImgTag('nav-logo', 'nav-logo-fallback');
  document.getElementById('nav-name').textContent    = CONFIG.restaurantName;
  document.getElementById('nav-sub').textContent     = CONFIG.tagline;

  // Hero
  document.getElementById('hero-logo-slot').innerHTML = logoImgTag('hero-logo', 'hero-logo-fallback');
  document.getElementById('hero-title').textContent   = CONFIG.restaurantName;
  document.getElementById('hero-sub').textContent     = CONFIG.heroSubtitle;

  const tagsEl = document.getElementById('hero-tags');
  tagsEl.innerHTML = CONFIG.heroTags
    .map(t => `<span class="hero-tag">${t}</span>`)
    .join('');
}

// ── Order Type ────────────────────────────────────────────────
function renderOrderTypes() {
  const row = document.getElementById('order-type-row');
  const types = CONFIG.orderTypes.filter(t => t.enabled);
  row.innerHTML = types.map(t => `
    <button class="order-type-btn${t.id === CONFIG.defaultOrderType ? ' active' : ''}"
            onclick="setOrderType(this,'${t.id}')">
      <div class="ot-icon">${t.icon}</div>
      <div class="ot-label">${t.label}</div>
      <div class="ot-sub">${t.sub}</div>
    </button>
  `).join('');
}

function setOrderType(el) {
  document.querySelectorAll('.order-type-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ── Nav categories ────────────────────────────────────────────
function renderNavCategories() {
  const nav = document.getElementById('nav-cats');
  nav.innerHTML = MENU.map((sec, i) => `
    <button class="cat-btn${i === 0 ? ' active' : ''}"
            onclick="scrollToSection('${sec.id}',this)">
      ${sec.title.split(' ')[0]}
    </button>
  `).join('');
}

// ── Render menu ───────────────────────────────────────────────
function renderMenu() {
  const root = document.getElementById('menu-root');
  root.innerHTML = MENU.map(sec => `
    <div class="section" id="${sec.id}">
      <div class="section-head">
        <span class="section-icon">${sec.icon}</span>
        <div>
          <div class="section-title">${sec.title}</div>
          <div class="section-sub">${sec.sub}</div>
        </div>
      </div>
      <div class="cards">
        ${sec.items.map(item => renderCard(item)).join('')}
      </div>
    </div>
  `).join('');
}

function badgeHTML(badges = []) {
  return (badges || []).map(b => {
    if (b === 'spice') return `<span class="badge badge-spice">🌶 Spicy</span>`;
    if (b === 'hot')   return `<span class="badge badge-hot">🔥 Fiery</span>`;
    if (b === 'green') return `<span class="badge badge-green">🌱 Healthy</span>`;
    return '';
  }).join('');
}

function renderCard(item) {
  return `
    <div class="card" onclick="openModal('${item.id}')">
      <div class="card-top">
        <p class="card-name">${item.name}</p>
        <div class="card-badges">${badgeHTML(item.badges)}</div>
      </div>
      <p class="card-desc">${item.desc}</p>
      ${item.note ? `<p class="card-sub-note">${item.note}</p>` : ''}
      <div class="card-footer">
        <p class="card-price">${CONFIG.currencySymbol}${item.price} <span>onwards</span></p>
        <button class="add-btn" onclick="event.stopPropagation();openModal('${item.id}')">
          <span class="plus">+</span> Add
        </button>
      </div>
    </div>`;
}

// ── Modal ─────────────────────────────────────────────────────
function findItem(id) {
  for (const s of MENU) {
    const found = s.items.find(i => i.id === id);
    if (found) return found;
  }
  return null;
}

function openModal(itemId) {
  const item = findItem(itemId);
  if (!item) return;
  activeItem = item;
  activeQty  = 1;
  activeSelections = {};

  // initialise defaults
  (item.customise || []).forEach(group => {
    if (group.type === 'radio') {
      const def = group.options.find(o => o.default);
      activeSelections[group.id] = def ? def.label : group.options[0].label;
    } else {
      const defaults = group.options.filter(o => o.default).map(o => o.label);
      activeSelections[group.id] = new Set(defaults);
    }
  });

  document.getElementById('modalName').textContent = item.name;
  document.getElementById('modalDesc').textContent = item.desc;
  renderCustomise(item);
  updateModalTotal();
  document.getElementById('modalBg').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalBg').classList.remove('open');
  document.body.style.overflow = '';
}

function handleModalBgClick(e) {
  if (e.target === document.getElementById('modalBg')) closeModal();
}

function renderCustomise(item) {
  const el = document.getElementById('modalCustomise');
  el.innerHTML = (item.customise || []).map(group => `
    <div class="customise-section">
      <div class="customise-label">
        ${group.label}
        ${group.required
          ? '<span class="customise-required">Required</span>'
          : '<span class="customise-optional">Optional</span>'}
      </div>
      <div class="opt-list">
        ${group.options.map(opt => renderOption(group, opt)).join('')}
      </div>
    </div>
  `).join('');
}

function renderOption(group, opt) {
  const isSelected = group.type === 'radio'
    ? activeSelections[group.id] === opt.label
    : (activeSelections[group.id] || new Set()).has(opt.label);

  const checkClass   = group.type === 'radio' ? '' : 'square';
  const selectedClass = isSelected ? 'selected' : '';
  const safeLabel    = opt.label.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const onclick      = group.type === 'radio'
    ? `selectRadio('${group.id}','${safeLabel}',${opt.price})`
    : `toggleCheck('${group.id}','${safeLabel}',${opt.price})`;

  return `
    <div class="opt-item ${selectedClass}" onclick="${onclick}">
      <div class="opt-check ${checkClass}">
        <div class="opt-check-inner"></div>
      </div>
      <span class="opt-label">${opt.label}</span>
      ${opt.price ? `<span class="opt-price">+${CONFIG.currencySymbol}${opt.price}</span>` : ''}
    </div>
  `;
}

function selectRadio(groupId, label) {
  activeSelections[groupId] = label;
  renderCustomise(activeItem);
  updateModalTotal();
}

function toggleCheck(groupId, label) {
  if (!activeSelections[groupId]) activeSelections[groupId] = new Set();
  const s = activeSelections[groupId];
  s.has(label) ? s.delete(label) : s.add(label);
  renderCustomise(activeItem);
  updateModalTotal();
}

function calcItemTotal(item, selections, qty) {
  let total = item.price;
  (item.customise || []).forEach(group => {
    const sel = selections[group.id];
    if (group.type === 'radio') {
      const opt = group.options.find(o => o.label === sel);
      if (opt) total += opt.price;
    } else if (sel instanceof Set) {
      sel.forEach(label => {
        const opt = group.options.find(o => o.label === label);
        if (opt) total += opt.price;
      });
    }
  });
  return total * qty;
}

function updateModalTotal() {
  const total = calcItemTotal(activeItem, activeSelections, activeQty);
  document.getElementById('modalTotal').textContent   = `${CONFIG.currencySymbol}${total}`;
  document.getElementById('modalQty').textContent     = activeQty;
  document.getElementById('modalBtnPrice').textContent = `· ${CONFIG.currencySymbol}${total}`;
}

function changeQty(delta) {
  activeQty = Math.max(1, activeQty + delta);
  updateModalTotal();
}

// ── Add to cart ───────────────────────────────────────────────
function addToCart() {
  if (!activeItem) return;

  const customs = [];
  (activeItem.customise || []).forEach(group => {
    const sel = activeSelections[group.id];
    if (group.type === 'radio' && sel) {
      customs.push(sel);
    } else if (sel instanceof Set) {
      sel.forEach(l => customs.push(l));
    }
  });

  const selClone = {};
  Object.entries(activeSelections).forEach(([k, v]) => {
    selClone[k] = v instanceof Set ? new Set(v) : v;
  });

  const unitTotal = calcItemTotal(activeItem, activeSelections, 1);
  const total     = unitTotal * activeQty;

  cart.push({
    id: Date.now(),
    itemId: activeItem.id,
    name: activeItem.name,
    price: activeItem.price,
    unitTotal,
    qty: activeQty,
    total,
    selections: selClone,
    customSummary: customs,
  });

  updateCartUI();
  closeModal();
  showToast(`${activeItem.name} added to cart`);
}

// ── Cart ──────────────────────────────────────────────────────
function openCart() {
  document.getElementById('cartBg').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartBg').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

function updateCartUI() {
  const count  = cart.reduce((a, c) => a + c.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const el     = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const sym    = CONFIG.currencySymbol;

  if (cart.length === 0) {
    el.innerHTML = `<div class="cart-empty">
      <div class="cart-empty-icon">🛒</div>
      Your cart is empty.<br>Add some Dakshin Bites!
    </div>`;
    footer.style.display = 'none';
    return;
  }

  el.innerHTML = cart.map(ci => `
    <div class="cart-item">
      <div class="ci-info">
        <p class="ci-name">${ci.qty}× ${ci.name}</p>
        <p class="ci-customs">${ci.customSummary.join(' · ')}</p>
        <div class="ci-ctrl">
          <button class="ci-qty-btn" onclick="changeCartQty(${ci.id},-1)">−</button>
          <span class="ci-qty">${ci.qty}</span>
          <button class="ci-qty-btn" onclick="changeCartQty(${ci.id},1)">+</button>
          <button class="ci-remove" onclick="removeCartItem(${ci.id})">Remove</button>
        </div>
      </div>
      <span class="ci-price">${sym}${ci.total}</span>
    </div>
  `).join('');

  const subtotal = cart.reduce((a, c) => a + c.total, 0);
  const tax      = Math.round(subtotal * CONFIG.taxRate);
  const total    = subtotal + tax;

  document.getElementById('cartSubtotal').textContent = `${sym}${subtotal}`;
  document.getElementById('cartTax').textContent      = `${sym}${tax}`;
  document.getElementById('cartTotal').textContent    = `${sym}${total}`;
  footer.style.display = 'block';
}

function changeCartQty(id, delta) {
  const ci = cart.find(c => c.id === id);
  if (!ci) return;
  ci.qty   = Math.max(1, ci.qty + delta);
  ci.total = ci.unitTotal * ci.qty;
  updateCartUI();
}

function removeCartItem(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function checkout() {
  if (cart.length === 0) return;
  const sym      = CONFIG.currencySymbol;
  const subtotal = cart.reduce((a, c) => a + c.total, 0);
  const tax      = Math.round(subtotal * CONFIG.taxRate);
  alert(
    `🎉 Order placed!\n\n` +
    `Items: ${cart.reduce((a, c) => a + c.qty, 0)}\n` +
    `Subtotal: ${sym}${subtotal}\n` +
    `Tax: ${sym}${tax}\n` +
    `Total: ${sym}${subtotal + tax}\n\n` +
    CONFIG.checkoutMessage
  );
  cart = [];
  updateCartUI();
  closeCart();
}

// ── Helpers ───────────────────────────────────────────────────
function scrollToSection(id, btn) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}
