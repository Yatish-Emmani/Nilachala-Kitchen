// ============================================================
//  NILACHALA KITCHEN — MENU DATA
//  Edit this file to add / remove / update menu items.
//
//  Structure:
//  - Each top-level object = a section (category)
//  - Each section has an `items` array
//  - Each item can have a `customise` array of option groups
//  - Option group types: 'radio' (pick one) | 'checkbox' (pick many)
//  - Set `required: true` on a group to mark it Required
//  - Set `default: true` on an option to pre-select it
//  - badges: ['spice'] | ['hot'] | ['green']
// ============================================================

const MENU = [
  {
    id: 'idlis',
    icon: '🫧',
    title: 'Signature Idlis',
    sub: 'Soft · Steamed · Soulful',
    items: [
      {
        id: 'i1',
        name: 'Classic Idli',
        price: 5.99,
        desc: 'Cloud-soft steamed rice cakes served with house chutneys & sambar',
        note: '2 pcs',
        customise: [
          {
            id: 'c_idli_extra',
            label: 'Extra Sides',
            type: 'checkbox',
            options: [
              { label: 'Extra Sambar',        price: 2.0 },
              { label: 'Extra Coconut Chutney', price: 1.5 },
              { label: 'Extra Tomato Chutney', price: 1.5 },
              { label: 'Extra Ghee',           price: 1.0 },
            ],
          },
          {
            id: 'c_idli_size',
            label: 'Serving Size',
            type: 'radio',
            required: true,
            options: [
              { label: 'Regular (2 pcs)', price: 0,  default: true },
              { label: 'Large (4 pcs)',   price: 5.0 },
            ],
          },
        ],
      },
      {
        id: 'i2',
        name: 'Mini Idli',
        price: 7.99,
        desc: 'Bite-sized comfort soaked in aromatic, slow-cooked sambar',
        note: '10 pcs',
        customise: [
          {
            id: 'c_mini_sambar',
            label: 'Sambar Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Classic Sambar',   price: 0,  default: true },
              { label: 'Drumstick Sambar', price: 1.0 },
              { label: 'Mixed Veg Sambar', price: 1.0 },
            ],
          },
          {
            id: 'c_mini_extra',
            label: 'Add-ons',
            type: 'checkbox',
            options: [
              { label: 'Extra Sambar',  price: 2.0 },
              { label: 'Extra Chutney', price: 1.5 },
            ],
          },
        ],
      },
      {
        id: 'i3',
        name: 'Ghee Dip Idli',
        price: 7.99,
        desc: 'Idlis gently finished in warm, fragrant ghee',
        customise: [
          {
            id: 'c_ghee_type',
            label: 'Ghee Type',
            type: 'radio',
            required: true,
            options: [
              { label: 'Pure Desi Ghee',           price: 0,  default: true },
              { label: 'Flavoured Curry Leaf Ghee', price: 1.5 },
            ],
          },
          {
            id: 'c_ghee_idli_side',
            label: 'Accompaniments',
            type: 'checkbox',
            options: [
              { label: 'Coconut Chutney', price: 0, default: true },
              { label: 'Sambar',          price: 0, default: true },
              { label: 'Extra Ghee',      price: 1.5 },
            ],
          },
        ],
      },
      {
        id: 'i4',
        name: 'Chutney Ghee Idli',
        price: 8.99,
        desc: 'A rich fusion of house-ground chutneys and golden ghee',
        customise: [
          {
            id: 'c_cg_chutney',
            label: 'Chutney Choice',
            type: 'radio',
            required: true,
            options: [
              { label: 'Coconut & Mint',   price: 0, default: true },
              { label: 'Tomato & Garlic',  price: 0 },
              { label: 'Peanut Chutney',   price: 1.0 },
            ],
          },
          {
            id: 'c_cg_spice',
            label: 'Spice Level',
            type: 'radio',
            required: true,
            options: [
              { label: 'Mild',   price: 0, default: true },
              { label: 'Medium', price: 0 },
              { label: 'Spicy',  price: 0 },
            ],
          },
        ],
      },
      {
        id: 'i5',
        name: 'Sambar Idli',
        price: 6.99,
        desc: 'Idlis immersed in spiced lentil broth, slow simmered for depth',
        note: 'Regular / Mini',
        customise: [
          {
            id: 'c_si_size',
            label: 'Size',
            type: 'radio',
            required: true,
            options: [
              { label: 'Regular Idli (2 pcs)', price: 0,  default: true },
              { label: 'Mini Idli (12 pcs)',   price: 2.0 },
            ],
          },
          {
            id: 'c_si_sambar',
            label: 'Sambar Type',
            type: 'radio',
            required: true,
            options: [
              { label: 'Classic',     price: 0,  default: true },
              { label: 'Drumstick',   price: 1.0 },
              { label: 'Pearl Onion', price: 1.0 },
            ],
          },
          {
            id: 'c_si_extra',
            label: 'Add Extra',
            type: 'checkbox',
            options: [
              { label: 'Extra Sambar', price: 2.0 },
              { label: 'Papad',        price: 1.0 },
            ],
          },
        ],
      },
      {
        id: 'i6',
        name: 'Ghee Karam Podi Idli',
        price: 8.99,
        desc: 'Smoky podi spice blended with ghee for a bold finish',
        badges: ['spice'],
        customise: [
          {
            id: 'c_kp_heat',
            label: 'Podi Spice Level',
            type: 'radio',
            required: true,
            options: [
              { label: 'Medium',     price: 0, default: true },
              { label: 'Hot',        price: 0 },
              { label: 'Extra Hot',  price: 0 },
            ],
          },
          {
            id: 'c_kp_ghee',
            label: 'Ghee Amount',
            type: 'radio',
            required: true,
            options: [
              { label: 'Regular Ghee',     price: 0,  default: true },
              { label: 'Extra Ghee (+$1.50)', price: 1.5 },
            ],
          },
          {
            id: 'c_kp_side',
            label: 'Side',
            type: 'checkbox',
            options: [
              { label: 'Coconut Chutney', price: 0, default: true },
              { label: 'Sambar',          price: 0, default: true },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'dosas',
    icon: '🥞',
    title: 'Crafted Dosas',
    sub: 'Crisp · Golden · Perfectly Balanced',
    items: [
      {
        id: 'd1',
        name: 'Classic Dosa',
        price: 6.99,
        desc: 'Thin, crisp fermented crepe served with chutneys & sambar',
        customise: [
          {
            id: 'c_cd_type',
            label: 'Dosa Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Plain (Thin & Crisp)',    price: 0,  default: true },
              { label: 'Set Dosa (Soft, 3 pcs)',  price: 1.0 },
              { label: 'Paper Roast',             price: 2.0 },
            ],
          },
          {
            id: 'c_cd_sides',
            label: 'Chutneys',
            type: 'checkbox',
            options: [
              { label: 'Coconut Chutney', price: 0, default: true },
              { label: 'Tomato Chutney',  price: 0, default: true },
              { label: 'Sambar',          price: 0, default: true },
              { label: 'Peanut Chutney',  price: 1.0 },
            ],
          },
        ],
      },
      {
        id: 'd2',
        name: 'Masala Dosa',
        price: 9.99,
        desc: 'Golden dosa filled with spiced potato masala',
        customise: [
          {
            id: 'c_md_style',
            label: 'Dosa Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Regular',          price: 0,  default: true },
              { label: 'Paper Roast',      price: 2.0 },
              { label: 'Rava Masala Dosa', price: 2.0 },
            ],
          },
          {
            id: 'c_md_masala',
            label: 'Masala Type',
            type: 'radio',
            required: true,
            options: [
              { label: 'Classic Potato',        price: 0,  default: true },
              { label: 'Spicy Potato & Onion',  price: 0 },
              { label: 'Paneer Masala',         price: 2.99 },
            ],
          },
          {
            id: 'c_md_spice',
            label: 'Spice Level',
            type: 'radio',
            required: true,
            options: [
              { label: 'Mild',   price: 0, default: true },
              { label: 'Medium', price: 0 },
              { label: 'Hot',    price: 0 },
            ],
          },
        ],
      },
      {
        id: 'd3',
        name: 'Cheese Dosa',
        price: 11.99,
        desc: 'A comforting fusion of South Indian crispness & creamy richness',
        customise: [
          {
            id: 'c_chd_cheese',
            label: 'Cheese Type',
            type: 'radio',
            required: true,
            options: [
              { label: 'Processed Cheese', price: 0,  default: true },
              { label: 'Mozzarella',        price: 2.0 },
              { label: 'Double Cheese',     price: 2.99 },
            ],
          },
          {
            id: 'c_chd_filling',
            label: 'Add Filling',
            type: 'checkbox',
            options: [
              { label: 'Potato Masala',  price: 2.0 },
              { label: 'Onion & Chilli', price: 1.0 },
              { label: 'Corn',           price: 1.5 },
            ],
          },
        ],
      },
      {
        id: 'd4',
        name: 'Paneer Dosa',
        price: 11.99,
        desc: 'Soft paneer filling wrapped in a perfectly crisp dosa',
        customise: [
          {
            id: 'c_pd_paneer',
            label: 'Paneer Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Plain Paneer',      price: 0,  default: true },
              { label: 'Spiced Bhurji Style', price: 0 },
              { label: 'Paneer & Pepper',   price: 1.0 },
            ],
          },
          {
            id: 'c_pd_spice',
            label: 'Spice Level',
            type: 'radio',
            required: true,
            options: [
              { label: 'Mild',   price: 0, default: true },
              { label: 'Medium', price: 0 },
              { label: 'Hot',    price: 0 },
            ],
          },
        ],
      },
      {
        id: 'd5',
        name: 'Ghee Podi Dosa',
        price: 8.99,
        desc: 'Signature podi spice elevated with aromatic ghee',
        note: 'Wet / Dry',
        customise: [
          {
            id: 'c_gpd_style',
            label: 'Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Wet (More Ghee)',  price: 0, default: true },
              { label: 'Dry (Crisp Finish)', price: 0 },
            ],
          },
          {
            id: 'c_gpd_heat',
            label: 'Podi Intensity',
            type: 'radio',
            required: true,
            options: [
              { label: 'Mild',   price: 0, default: true },
              { label: 'Medium', price: 0 },
              { label: 'Fiery',  price: 0 },
            ],
          },
        ],
      },
      {
        id: 'd6',
        name: 'Nellore Karam Dosa',
        price: 10.99,
        desc: 'Bold Andhra-style spice dosa with a fiery character',
        badges: ['hot'],
        customise: [
          {
            id: 'c_nkd_heat',
            label: 'Heat Level',
            type: 'radio',
            required: true,
            options: [
              { label: 'Hot',        price: 0, default: true },
              { label: 'Extra Hot',  price: 0 },
              { label: 'Volcano 🌋', price: 0 },
            ],
          },
          {
            id: 'c_nkd_base',
            label: 'Dosa Base',
            type: 'radio',
            required: true,
            options: [
              { label: 'Regular',    price: 0,  default: true },
              { label: 'Rava Dosa',  price: 1.5 },
              { label: 'Paper Roast', price: 2.0 },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'pesarattu',
    icon: '🌿',
    title: 'Pesarattu Collection',
    sub: 'Wholesome · Protein-Rich · Rooted in Tradition',
    items: [
      {
        id: 'p1',
        name: 'Plain Pesarattu',
        price: 7.99,
        desc: 'Classic moong dal crepe, light and nourishing',
        customise: [
          {
            id: 'c_pp_side',
            label: 'Served With',
            type: 'checkbox',
            options: [
              { label: 'Ginger Chutney',   price: 0, default: true },
              { label: 'Upma',             price: 2.0 },
              { label: 'Coconut Chutney',  price: 0 },
            ],
          },
          {
            id: 'c_pp_size',
            label: 'Size',
            type: 'radio',
            required: true,
            options: [
              { label: 'Regular (1 pc)', price: 0,  default: true },
              { label: 'Large (2 pcs)',  price: 6.00 },
            ],
          },
        ],
      },
      {
        id: 'p2',
        name: 'Upma Pesarattu',
        price: 9.99,
        desc: 'Crisp green gram crepe paired with soft upma',
        customise: [
          {
            id: 'c_up_upma',
            label: 'Upma Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Classic Rava Upma', price: 0,  default: true },
              { label: 'Vermicelli Upma',   price: 0 },
              { label: 'Masala Upma',       price: 1.0 },
            ],
          },
          {
            id: 'c_up_side',
            label: 'Extra Sides',
            type: 'checkbox',
            options: [
              { label: 'Ginger Chutney',  price: 0, default: true },
              { label: 'Coconut Chutney', price: 0 },
              { label: 'Sambar',          price: 1.5 },
            ],
          },
        ],
      },
      {
        id: 'p3',
        name: 'Onion Pesarattu',
        price: 8.99,
        desc: 'Fresh onions folded into a crisp, savory batter',
        customise: [
          {
            id: 'c_op_spice',
            label: 'Spice Level',
            type: 'radio',
            required: true,
            options: [
              { label: 'Mild',   price: 0, default: true },
              { label: 'Medium', price: 0 },
              { label: 'Hot',    price: 0 },
            ],
          },
        ],
      },
      {
        id: 'p4',
        name: 'Onion Chilli Pesarattu',
        price: 9.49,
        desc: 'A spicy variation with green chili heat',
        badges: ['spice'],
        customise: [
          {
            id: 'c_ocp_heat',
            label: 'Chilli Heat',
            type: 'radio',
            required: true,
            options: [
              { label: 'Medium',    price: 0, default: true },
              { label: 'Hot',       price: 0 },
              { label: 'Extra Hot', price: 0 },
            ],
          },
          {
            id: 'c_ocp_onion',
            label: 'Onion Type',
            type: 'radio',
            required: true,
            options: [
              { label: 'Raw White Onion',   price: 0,  default: true },
              { label: 'Caramelised Onion', price: 1.0 },
            ],
          },
        ],
      },
      {
        id: 'p5',
        name: 'Nellore Karam Pesarattu',
        price: 10.49,
        desc: 'Signature Andhra spice blend for bold flavor lovers',
        badges: ['hot'],
        customise: [
          {
            id: 'c_nkp_heat',
            label: 'Karam Level',
            type: 'radio',
            required: true,
            options: [
              { label: 'Regular Karam', price: 0, default: true },
              { label: 'Extra Karam',   price: 0 },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'attu',
    icon: '🥘',
    title: 'Godavari Attu',
    sub: 'Rustic Andhra Comfort · Served in Threes',
    items: [
      {
        id: 'a1',
        name: 'Plain Attu',
        price: 6.99,
        desc: 'Traditional Godavari style, served as a set of 3',
        customise: [
          {
            id: 'c_pa_side',
            label: 'Chutney Pairing',
            type: 'radio',
            required: true,
            options: [
              { label: 'Coconut Chutney', price: 0,  default: true },
              { label: 'Gongura Chutney', price: 1.0 },
              { label: 'Peanut Chutney',  price: 1.0 },
            ],
          },
        ],
      },
      {
        id: 'a2',
        name: 'Ulli Karam Attu',
        price: 7.99,
        desc: 'Onion spice blend folded into rustic attu',
        badges: ['spice'],
        customise: [
          {
            id: 'c_uk_spice',
            label: 'Spice Level',
            type: 'radio',
            required: true,
            options: [
              { label: 'Medium', price: 0, default: true },
              { label: 'Hot',    price: 0 },
            ],
          },
          {
            id: 'c_uk_side',
            label: 'Chutney',
            type: 'radio',
            required: true,
            options: [
              { label: 'Coconut Chutney', price: 0,  default: true },
              { label: 'Gongura Chutney', price: 1.0 },
            ],
          },
        ],
      },
      {
        id: 'a3',
        name: 'Kobbari Karam Attu',
        price: 7.99,
        desc: 'Coconut spice blend for a rich, coastal character',
        customise: [
          {
            id: 'c_kk_coconut',
            label: 'Coconut Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Fresh Coconut',       price: 0, default: true },
              { label: 'Dry Coconut (Kopra)', price: 0 },
            ],
          },
        ],
      },
      {
        id: 'a4',
        name: 'Onion Attu',
        price: 7.49,
        desc: 'Fresh onions, rustic Godavari character',
        customise: [
          {
            id: 'c_oa_spice',
            label: 'Spice',
            type: 'radio',
            required: true,
            options: [
              { label: 'Mild',   price: 0, default: true },
              { label: 'Medium', price: 0 },
              { label: 'Hot',    price: 0 },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'health',
    icon: '🌱',
    title: 'Health Kitchen',
    sub: 'Clean · Green · Energizing',
    items: [
      {
        id: 'h1',
        name: 'Millet Dosa',
        price: 9.99,
        desc: 'Ancient grains reimagined for modern wellness',
        badges: ['green'],
        customise: [
          {
            id: 'c_mil_grain',
            label: 'Millet Type',
            type: 'radio',
            required: true,
            options: [
              { label: 'Foxtail Millet',          price: 0, default: true },
              { label: 'Finger Millet (Ragi)',     price: 0 },
              { label: 'Pearl Millet (Bajra)',     price: 0 },
            ],
          },
          {
            id: 'c_mil_side',
            label: 'Accompaniments',
            type: 'checkbox',
            options: [
              { label: 'Coconut Chutney',  price: 0, default: true },
              { label: 'Sambar',           price: 0, default: true },
              { label: 'Flaxseed Chutney', price: 1.0 },
            ],
          },
        ],
      },
      {
        id: 'h2',
        name: 'Moringa Dosa',
        price: 10.99,
        desc: 'Nutrient-rich moringa greens blended into a light crisp dosa',
        badges: ['green'],
        customise: [
          {
            id: 'c_mor_style',
            label: 'Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Crispy Thin',       price: 0,  default: true },
              { label: 'Soft Set (2 pcs)',  price: 1.0 },
            ],
          },
          {
            id: 'c_mor_side',
            label: 'Chutney',
            type: 'checkbox',
            options: [
              { label: 'Green Chutney',   price: 0, default: true },
              { label: 'Coconut Chutney', price: 0 },
              { label: 'Sambar',          price: 0 },
            ],
          },
        ],
      },
      {
        id: 'h3',
        name: 'Karivepaku Dosa',
        price: 10.49,
        desc: 'Aromatic, antioxidant-rich curry leaf house specialty',
        badges: ['green'],
        customise: [
          {
            id: 'c_kv_extra',
            label: 'Add-ons',
            type: 'checkbox',
            options: [
              { label: 'Extra Curry Leaf Ghee', price: 1.5 },
              { label: 'Coconut Chutney',       price: 0, default: true },
              { label: 'Sambar',                price: 0, default: true },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'bites',
    icon: '🔥',
    title: 'Classic Bites',
    sub: 'Golden Fried · Street-Side Favorites',
    items: [
      {
        id: 'b1',
        name: 'Mini Punugulu',
        price: 6.99,
        desc: 'Golden fried lentil dumplings — crispy outside, soft inside',
        customise: [
          {
            id: 'c_pun_qty',
            label: 'Quantity',
            type: 'radio',
            required: true,
            options: [
              { label: 'Regular (8 pcs)', price: 0,  default: true },
              { label: 'Large (14 pcs)',  price: 5.0 },
            ],
          },
          {
            id: 'c_pun_dip',
            label: 'Dipping Chutney',
            type: 'radio',
            required: true,
            options: [
              { label: 'Coconut Chutney', price: 0,  default: true },
              { label: 'Gongura Chutney', price: 1.0 },
              { label: 'Tamarind Dip',    price: 0 },
            ],
          },
        ],
      },
      {
        id: 'b2',
        name: 'Mysore Bonda',
        price: 7.49,
        desc: 'Fluffy savory fritters with a delicate spice balance',
        customise: [
          {
            id: 'c_bond_qty',
            label: 'Quantity',
            type: 'radio',
            required: true,
            options: [
              { label: 'Regular (4 pcs)', price: 0,  default: true },
              { label: 'Large (8 pcs)',   price: 5.5 },
            ],
          },
          {
            id: 'c_bond_dip',
            label: 'Accompaniment',
            type: 'radio',
            required: true,
            options: [
              { label: 'Coconut Chutney', price: 0, default: true },
              { label: 'Sambar',          price: 0 },
              { label: 'Mint Chutney',    price: 0 },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'rice',
    icon: '🍚',
    title: 'Rice Bowls',
    sub: 'Simple · Comforting · Homestyle',
    items: [
      {
        id: 'r1',
        name: 'Pulihora Bowl',
        price: 7.99,
        desc: 'Tangy tamarind rice tempered with traditional spices',
        customise: [
          {
            id: 'c_pul_extra',
            label: 'Add-ons',
            type: 'checkbox',
            options: [
              { label: 'Papad',            price: 1.0, default: true },
              { label: 'Pickle (Avakaya)', price: 1.5 },
              { label: 'Curd',             price: 1.5 },
            ],
          },
          {
            id: 'c_pul_heat',
            label: 'Tanginess',
            type: 'radio',
            required: true,
            options: [
              { label: 'Mild Tangy',    price: 0, default: true },
              { label: 'Classic Tangy', price: 0 },
              { label: 'Extra Tangy',   price: 0 },
            ],
          },
        ],
      },
      {
        id: 'r2',
        name: 'Mudda Pappu Avakaya Bowl',
        price: 8.99,
        desc: 'Comforting lentils with mango pickle essence',
        customise: [
          {
            id: 'c_mud_pickle',
            label: 'Avakaya Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Mild Mango Pickle', price: 0, default: true },
              { label: 'Spicy Avakaya',     price: 0 },
            ],
          },
          {
            id: 'c_mud_ghee',
            label: 'Ghee',
            type: 'radio',
            required: true,
            options: [
              { label: 'With Ghee',        price: 0,  default: true },
              { label: 'Extra Ghee (+$1.50)', price: 1.5 },
              { label: 'No Ghee',          price: 0 },
            ],
          },
        ],
      },
      {
        id: 'r3',
        name: 'Perugu Annam Bowl',
        price: 7.99,
        desc: 'Cooling curd rice, finished with homestyle seasoning',
        customise: [
          {
            id: 'c_per_temp',
            label: 'Tempering',
            type: 'radio',
            required: true,
            options: [
              { label: 'Plain',           price: 0, default: true },
              { label: 'With Tempering',  price: 0 },
            ],
          },
          {
            id: 'c_per_extra',
            label: 'Add-ons',
            type: 'checkbox',
            options: [
              { label: 'Mango Pickle',  price: 1.0, default: true },
              { label: 'Pomegranate',   price: 1.5 },
              { label: 'Papad',         price: 1.0 },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'drinks',
    icon: '🥤',
    title: 'Fresh Drinks',
    sub: 'Juices · Smoothies · Cold-Pressed',
    items: [
      {
        id: 'j1',
        name: 'Aqua Melon',
        price: 6.99,
        desc: 'Refreshing seasonal watermelon juice, cold pressed',
        customise: [
          {
            id: 'c_am_sweet',
            label: 'Sweetness',
            type: 'radio',
            required: true,
            options: [
              { label: 'Natural (No Sugar)', price: 0, default: true },
              { label: 'Lightly Sweet',      price: 0 },
              { label: 'Sweet',              price: 0 },
            ],
          },
          {
            id: 'c_am_add',
            label: 'Add-ins',
            type: 'checkbox',
            options: [
              { label: 'Mint Leaves',    price: 0 },
              { label: 'Lemon Squeeze',  price: 0 },
              { label: 'Salt & Cumin',   price: 0 },
            ],
          },
        ],
      },
      {
        id: 'j2',
        name: "Nature's Trio",
        price: 8.49,
        desc: 'Apple · Beetroot · Carrot — naturally balanced vitality',
        customise: [
          {
            id: 'c_nt_ginger',
            label: 'Boost',
            type: 'checkbox',
            options: [
              { label: 'Ginger Shot',                price: 1.0 },
              { label: 'Amla (Indian Gooseberry)',   price: 1.0 },
              { label: 'Turmeric',                   price: 1.0 },
            ],
          },
        ],
      },
      {
        id: 's1',
        name: 'Dry Fruit Bliss',
        price: 11.99,
        desc: 'Dates and nuts blended into a rich, nourishing smoothie',
        customise: [
          {
            id: 'c_df_base',
            label: 'Base',
            type: 'radio',
            required: true,
            options: [
              { label: 'Full Cream Milk', price: 0,  default: true },
              { label: 'Almond Milk',     price: 1.5 },
              { label: 'Oat Milk',        price: 2.0 },
            ],
          },
          {
            id: 'c_df_extra',
            label: 'Add Extra Nuts',
            type: 'checkbox',
            options: [
              { label: 'Cashews',    price: 1.5 },
              { label: 'Pistachios', price: 2.0 },
              { label: 'Almonds',    price: 1.5 },
            ],
          },
        ],
      },
      {
        id: 's2',
        name: 'Melon Magic',
        price: 9.99,
        desc: 'Light, refreshing seasonal melon blend',
        customise: [
          {
            id: 'c_mm_base',
            label: 'Style',
            type: 'radio',
            required: true,
            options: [
              { label: 'Pure Fruit',          price: 0,  default: true },
              { label: 'With Coconut Milk',   price: 2.0 },
              { label: 'With Yoghurt',        price: 1.5 },
            ],
          },
        ],
      },
      {
        id: 's3',
        name: 'Avocado Crush',
        price: 12.99,
        desc: 'Creamy avocado smoothie with a silky finish',
        customise: [
          {
            id: 'c_av_sweet',
            label: 'Sweetness',
            type: 'radio',
            required: true,
            options: [
              { label: 'Unsweetened', price: 0, default: true },
              { label: 'Honey',       price: 0 },
              { label: 'Jaggery',     price: 0 },
            ],
          },
          {
            id: 'c_av_add',
            label: 'Add-ins',
            type: 'checkbox',
            options: [
              { label: 'Chia Seeds',    price: 1.0 },
              { label: 'Protein Scoop', price: 2.0 },
              { label: 'Banana',        price: 1.0 },
            ],
          },
        ],
      },
      {
        id: 's4',
        name: 'Seasonal Secret',
        price: 10.99,
        desc: "Chef's curated seasonal fruit blend",
        customise: [
          {
            id: 'c_ss_base',
            label: 'Base',
            type: 'radio',
            required: true,
            options: [
              { label: 'Smoothie (with Yoghurt)', price: 0, default: true },
              { label: 'Pure Juice',              price: 0 },
            ],
          },
        ],
      },
    ],
  },
];
