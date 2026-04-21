# Nilachala Kitchen — Online Menu

A fully self-contained, no-framework ordering page for Nilachala Kitchen.

---

## 📁 File Structure

```
nilachala/
├── index.html          ← Entry point. Rarely needs editing.
├── NilaChala.png       ← Logo image (place here)
│
├── css/
│   └── style.css       ← All visual design (colors, layout, animations)
│
├── data/
│   ├── config.js       ← ⭐ Branding, tax, currency, order types
│   └── menu.js         ← ⭐ All menu sections and items
│
└── js/
    └── app.js          ← App logic (rendering, cart, modal)
```

---

## ✏️ How to Edit

### Change the restaurant name / logo / tagline
→ Open **`data/config.js`** and edit the top section.

```js
restaurantName: 'Nilachala Kitchen',
tagline:        'Dakshin Bites',
logoFile:       'NilaChala.png',   // must be in same folder as index.html
```

### Add a new menu item
→ Open **`data/menu.js`**, find the right section, and add to the `items` array:

```js
{
  id: 'x1',                         // must be unique
  name: 'My New Item',
  price: 120,
  desc: 'Short description',
  note: 'Optional sub-note',        // e.g. "2 pcs"
  badges: ['spice'],                 // 'spice' | 'hot' | 'green' (or omit)
  customise: [
    {
      id: 'c_x1_style',             // must be unique
      label: 'Choose Style',
      type: 'radio',                 // 'radio' = pick one, 'checkbox' = pick many
      required: true,
      options: [
        { label: 'Option A', price: 0,  default: true },
        { label: 'Option B', price: 20 },
      ],
    },
  ],
},
```

### Add a new section / category
→ In **`data/menu.js`**, add a new object to the `MENU` array:

```js
{
  id: 'specials',
  icon: '⭐',
  title: 'Chef\'s Specials',
  sub: 'Limited · Seasonal · Exclusive',
  items: [ /* ... */ ],
},
```

### Change tax rate
→ In **`data/config.js`**:
```js
taxRate: 0.05,   // 5% — set to 0 for no tax
```

### Change currency
→ In **`data/config.js`**:
```js
currencySymbol: '₹',
```

### Change theme colors
→ In **`data/config.js`**, edit the `colors` object. All colors are CSS variables.

---

## 🚀 Running Locally

Just open `index.html` in any browser — no build tools, no server needed.

For development with live reload you can use:
```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## 🖼️ Logo

Place your logo file (PNG, JPG, SVG, or WebP) in the **root folder** next to `index.html`.
Update `CONFIG.logoFile` in `data/config.js` to match the filename.

If the logo fails to load, the site gracefully falls back to a 🍽️ emoji placeholder.

---

## 📦 No Dependencies

- No npm, no build step, no bundler.
- Fonts loaded from Google Fonts (needs internet on first load; cached after).
- Works offline after first visit.
