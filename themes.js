export const THEMES = [
  { id: 'anime', name: 'Anime', icon: '/images/quiet_sunset_anime.png', colors: ['#FF6B6B', '#4ECDC4', '#FFE66D'], tag: 'Fan Favourites', mood: 'Bold & Expressive' },
  { id: 'marvel', name: 'Marvel', icon: '/images/theme_marvel_new.jpg', colors: ['#E63946', '#F1FAEE', '#A8DADC'], tag: 'Superhero Edition', mood: 'Bold & Powerful' },
  { id: 'cars', name: 'Cars', icon: '/images/theme_cars_new.png', colors: ['#2B2D42', '#8D99AE', '#EDF2F4'], tag: 'Speed & Style', mood: 'Sleek & Dynamic' },
  { id: 'mandala', name: 'Mandala', icon: '/images/theme_mandala_new.webp', colors: ['#606C38', '#283618', '#FEFAE0'], tag: 'Sacred Geometry', mood: 'Calm & Intricate' },
  { id: 'floral', name: 'Floral', icon: '/images/theme_floral_new.jpg', colors: ['#FFC8DD', '#FFAFCC', '#BDE0FE'], tag: 'Nature in Bloom', mood: 'Soft & Romantic' },
  { id: 'disney', name: 'Disney', icon: '/images/theme_disney_new.jpg', colors: ['#B7094C', '#A01A58', '#892B64'], tag: 'Magic Collection', mood: 'Enchanting & Pure' },
];

export const BASE_STYLES = [
  { id: 'matte', name: 'Matte Finish', icon: '/images/icon_pro.png' },
  { id: 'glossy', name: 'High Gloss', icon: '/images/icon_pro.png' },
  { id: 'transparent', name: 'Crystal Clear', icon: '/images/icon_easy.png' }
];

export const PATTERNS = [
  { id: 'none', name: 'Solid Finish', sub: 'Matte Studio Canvas' },
  { id: 'carbon', name: 'Carbon Fiber', sub: 'Industrial 3D Weave' },
  { id: 'topo', name: 'Topographic', sub: 'Terrain Vector Map' },
  { id: 'honeycomb', name: 'Honeycomb Grid', sub: 'Technical Hex Structure' },
  { id: 'matrix', name: 'Digital Matrix', sub: 'Micro-Grid Array' },
  { id: 'lines-pro', name: 'Pro Velocity', sub: 'Kinetic Racing Lines' },
  { id: 'noise', name: 'Grain Texture', sub: 'Tactile Analog Paper' },
  { id: 'hex-grid', name: 'Hex Connect', sub: 'Modular Geometric Link' },
  { id: 'marble', name: 'White Marble', sub: 'Premium Stone Texture' },
  { id: 'wood', name: 'Oak Wood', sub: 'Natural Timber Grain' },
  { id: 'terrazzo', name: 'Terrazzo', sub: 'Italian Mosaic Stone' },
  { id: 'chevron', name: 'Chevron', sub: 'Classic Zig-Zag' },
  { id: 'waves', name: 'Ocean Waves', sub: 'Smooth Curved Lines' }
];

export const EFFECTS = [
  { id: 'none', label: 'Standard Matte', sub: 'Original Device Texture', hint: 'Natural texture without overlays' },
  { id: 'satin-gloss', label: 'Satin Gloss', sub: 'Premium Clear Coat', hint: 'Balanced studio-grade reflection' },
  { id: 'liquid-metal', label: 'Liquid Metal', sub: 'Dynamic Specular Sheen', hint: 'Reactive brushed-aluminum look' },
  { id: 'holo-prism', label: 'Prism Refraction', sub: 'Spectral Light Filter', hint: 'Rainbow shifts when rotating' },
  { id: 'gold-plating', label: 'Gold Plating', sub: '24K Luxury Leafing', hint: 'Genuine metallic gold leaf' },
  { id: 'frost-glass', label: 'Frosted Glass', sub: 'Deep Diffusion Blur', hint: 'Translucent depth-based blur' },
  { id: 'neon-glow', label: 'Cyber Glow', sub: 'Vibrant Light Emission', hint: 'Bright edge glow effect' },
  { id: 'iridescent', label: 'Pearl Shine', sub: 'Iridescent Overcoat', hint: 'Soft color-shifting sheen' },
  { id: 'mirror-chrome', label: 'Mirror Chrome', sub: 'High Reflection Finish', hint: 'Polished metal reflection' }
];

export const TEXT_EFFECTS = [
  { id: 'none', label: 'Clean Text' },
  { id: 'shadow', label: 'Soft Drop Shadow' },
  { id: 'glow', label: 'Outer Neon Glow' },
  { id: 'outline', label: 'Stroke / Outline' },
  { id: 'emboss', label: '3D Embossed' }
];

export const COLORS = [
  '#FADADD', '#F8C8DC', '#D4688E', '#B2E8E4', '#81D8D0', '#3AAFA9',
  '#E8E0F5', '#C9B8E8', '#9D7EC9', '#F0D98A', '#C9A84C', '#F5F5DC',
  '#A8D5A2', '#2C2C4A', '#FFFFFF', '#130a21', '#ff007f', '#00e5ff',
  '#9d00ff', '#f3f000', '#4a0000', '#ed1d24', '#ffd700', '#e63946',
  '#457b9d', '#ff9f1c', '#b8860b', '#556b2f', '#8b0000', '#ff6b81',
  '#7bed9f', '#eccc68', '#70a1ff', '#8a483c', '#54634f', '#7a6352'
];

export const FONT_STYLES = [
  'Poppins', 'Great Vibes', 'Montserrat', 'Dancing Script', 'Outfit',
  'Rajdhani', 'Orbitron', 'Anton', 'Bangers', 'Racing Sans One',
  'Cinzel', 'Bubblegum Sans', 'Special Elite'
];

export const TEXT_POSITIONS = ['Center', 'Top', 'Bottom', 'Top Left', 'Top Right'];
export const TEXT_LAYOUTS = ['Horizontal', 'Vertical', 'Arc'];

export const THEME_CATALOG = [
  {
    id: 'anime', name: 'Anime', emoji: '/images/quiet_sunset_anime.png?v=1',
    tag: 'Fan Favourites', mood: 'Bold & Expressive',
    accent: '#C084FC', accent2: '#F9A8D4',
    img: '/images/quiet_sunset_anime.png?v=1',
    config: {
      colors: ['#130a21', '#ff007f', '#00e5ff', '#9d00ff', '#f3f000'],
      fonts: ['Rajdhani', 'Orbitron'],
      patterns: ['none', 'cyber', 'speed'],
      effects: ['none', 'neon-glow', 'holo']
    },
    productDesigns: {
      phone: [
        { id: 'goku', name: 'Goku', sub: 'Legendary Saiyan', img: '/images/goku.jpg' },
        { id: 'itachi', name: 'Itachi', sub: 'Uchiha Legacy', img: '/images/itachi.jpg' },
        { id: 'n_and_s', name: 'Naruto & Sasuke', sub: 'Eternal Rivals', img: '/images/n_and_s.jpg' },
        { id: 'naruto_multi', name: 'Naruto Sage', sub: 'Six Paths Power', img: '/images/narutoooooooooo.jpg' },
      ],
      earbuds: [
        { id: 'akatsuki', name: 'Akatsuki', sub: 'Red Cloud Elite', img: '/images/akatsuki.jpg' },
        { id: 'ds', name: 'Demon Slayer', sub: 'Nichirin Sword Guard', img: '/images/ds.jpg' },
        { id: 'eren', name: 'Eren Jaeger', sub: 'Attack Titan', img: '/images/eren_jaeger.jpg' },
        { id: 'anime_gear', name: 'Anime Gear', sub: 'Limited Edition', img: '/images/anime_gear.jpg' },
      ],
      laptop: [
        { id: 'naruto_l', name: 'Naruto', sub: 'Hokage Dreams', img: '/images/naruto.jpg' },
        { id: 'sasuke_l', name: 'Sasuke', sub: 'Shadow Shinobi', img: '/images/sasuke.jpg' },
        { id: 'tanjiro_l', name: 'Tanjiro', sub: 'Water Breathing', img: '/images/tanjiro.jpg' },
        { id: 'zenitsu_l', name: 'Zenitsu', sub: 'Thunder Breathing', img: '/images/zenitsu.jpg' },
      ]
    }
  },
  {
    id: 'marvel', name: 'Marvel', emoji: '/images/theme_marvel_new.jpg?v=1',
    tag: 'Superhero Edition', mood: 'Bold & Powerful',
    accent: '#E63946', accent2: '#F1FAEE',
    img: '/images/theme_marvel_new.jpg?v=1',
    config: {
      colors: ['#4a0000', '#ed1d24', '#ffd700', '#000000', '#ffffff'],
      fonts: ['Anton', 'Bangers'],
      patterns: ['none', 'marvel-web', 'halftone'],
      effects: ['none', 'glossy', 'hard-shadow']
    },
    productDesigns: {
      phone: [
        { id: 'batman', name: 'Batman Noir', sub: 'Gotham Knight', img: '/images/batman.jpg' },
        { id: 'captain', name: 'Captain America', sub: 'First Avenger', img: '/images/captain_america.jpg' },
        { id: 'ironman_p', name: 'Iron Man', sub: 'Stark Tech', img: '/images/iron_man_phone_case.jpg' },
        { id: 'spiderman_p', name: 'Spider-Man', sub: 'Web Slinger', img: '/images/spider_man_phone_case.jpg' },
      ],
      earbuds: [
        { id: 'avengers', name: 'Avengers', sub: "Earth's Mightiest", img: '/images/avengers.jpg' },
        { id: 'marvel_lg', name: 'Marvel Legacy', sub: 'Classic Comic', img: '/images/download.jpg' },
        { id: 'ironman_a', name: 'Iron ManPods', sub: 'Arc Reactor', img: '/images/iron_man_airpods.jpg' },
        { id: 'spiderman_a', name: 'Spider-Buds', sub: 'Spidey Sense', img: '/images/spiderman_ear_buds.jpg' },
      ],
      laptop: [
        { id: 'deadpool', name: 'Deadpool', sub: 'Merc with a Mouth', img: '/images/deadpool.jpg' },
        { id: 'ironman_l', name: 'Iron Man', sub: 'Invincible Armor', img: '/images/iron_man.jpg' },
        { id: 'moonknight', name: 'Moon Knight', sub: 'Fist of Khonshu', img: '/images/moon_knight.jpg' },
        { id: 'spiderman_l', name: 'Spider-Man', sub: 'Wall Crawler', img: '/images/spider_man.jpg' },
      ]
    }
  },
  {
    id: 'cars', name: 'Cars', emoji: '/images/theme_cars_new.png?v=1',
    tag: 'Speed & Style', mood: 'Sleek & Dynamic',
    accent: '#FACC15', accent2: '#3B82F6',
    img: '/images/theme_cars_new.png?v=1',
    config: {
      colors: ['#e63946', '#457b9d', '#ff9f1c', '#e0e6ed', '#111'],
      fonts: ['Racing Sans One'],
      patterns: ['none', 'carbon', 'stripes'],
      effects: ['none', 'metallic', 'motion-blur']
    },
    productDesigns: {
      phone: [
        { id: 'p911', name: 'Porsche 911', sub: 'German Engineering', img: '/images/911.jpg' },
        { id: 'bmw_p', name: 'BMW M Series', sub: 'The Ultimate Machine', img: '/images/phone_case_bmw.jpg' },
        { id: 'mazda_p', name: 'Mazda Spirit', sub: 'Jinba Ittai', img: '/images/mazda.jpg' },
        { id: 'porsche_p', name: 'Porsche GT', sub: 'Track Ready', img: '/images/porsche.jpg' },
      ],
      earbuds: [
        { id: 'bmw_e', name: 'BMW Elite', sub: 'M-Performance', img: '/images/bmwwwwwwww.jpg' },
        { id: 'cars_e', name: 'Rust-eze', sub: 'Lightning Style', img: '/images/cars.jpg' },
        { id: 'f1_e', name: 'Formula 1', sub: 'Grand Prix Vibe', img: '/images/f1.jpg' },
        { id: 'gtr_e', name: 'Nissan GTR', sub: 'Godzilla', img: '/images/gtr.jpg' },
      ],
      laptop: [
        { id: 'bmw_l1', name: 'BMW M4', sub: 'Modern Luxury', img: '/images/another_bmv.jpg' },
        { id: 'bmw_l2', name: 'BMW Classic', sub: 'Iconic Kidney Grille', img: '/images/bmw.jpg' },
        { id: 'lambo_l', name: 'Lamborghini', sub: 'Raging Bull', img: '/images/lambo.jpg' },
        { id: 'porsche_l', name: 'Porsche 911', sub: 'Timeless Silhouette', img: '/images/prosche.jpg' },
      ]
    }
  },
  {
    id: 'mandala', name: 'Mandala', emoji: '/images/theme_mandala_new.webp',
    tag: 'Sacred Geometry', mood: 'Calm & Intricate',
    accent: '#10B981', accent2: '#D1FAE5',
    img: '/images/theme_mandala_new.webp',
    config: {
      colors: ['#b8860b', '#556b2f', '#8b0000', '#faf7f2', '#2f4f4f'],
      fonts: ['Cinzel'],
      patterns: ['none', 'mandala1', 'mandala2'],
      effects: ['none', 'gold-foil', 'emboss-fx']
    },
    productDesigns: {
      phone: [
        { id: 'm_e', name: 'Zen Bloom', sub: 'Inner Peace', img: '/images/e.jpg' },
        { id: 'm_f', name: 'Sacred Path', sub: 'Harmonious Geometry', img: '/images/f.jpg' },
        { id: 'm_g', name: 'Cosmic Wheel', sub: 'Universal Balance', img: '/images/g.png' },
        { id: 'm_h', name: 'Luxe Mandala', sub: 'Elegant Patterns', img: '/images/h.jpg' },
      ],
      earbuds: [
        { id: 'm_i', name: 'Mandala I', sub: 'Compact Peace', img: '/images/i.jpg' },
        { id: 'm_j', name: 'Mandala J', sub: 'Spiritual Bud', img: '/images/j.jpg' },
        { id: 'm_k', name: 'Mandala K', sub: 'Radiant Energy', img: '/images/k.jpg' },
        { id: 'm_l', name: 'Mandala L', sub: 'Golden Ratio', img: '/images/l.jpg' },
      ],
      laptop: [
        { id: 'm_a', name: 'Mandala Alpha', sub: 'Workspace Zen', img: '/images/a.jpg' },
        { id: 'm_b', name: 'Mandala Beta', sub: 'Creative Flow', img: '/images/b.jpg' },
        { id: 'm_c', name: 'Mandala Gamma', sub: 'Mindful Tech', img: '/images/c.jpg' },
        { id: 'm_d', name: 'Mandala Delta', sub: 'Symmetry in Motion', img: '/images/d.jpg' },
      ]
    }
  },
  {
    id: 'floral', name: 'Floral', emoji: '/images/theme_floral_new.jpg',
    tag: 'Nature in Bloom', mood: 'Soft & Romantic',
    accent: '#F472B6', accent2: '#FDF2F8',
    img: '/images/theme_floral_new.jpg',
    config: {
      colors: ['#ffebd6', '#fbcadd', '#a3e4d7', '#eaddf0', '#fdfaf8'],
      fonts: ['Dancing Script', 'Outfit'],
      patterns: ['none', 'petals', 'roses'],
      effects: ['none', 'glossy']
    },
    productDesigns: {
      phone: [
        { id: 'f_p1', name: 'Spring Dream', sub: 'Fresh Bloom', img: '/images/flowerrrrrrr.jpg' },
        { id: 'f_p2', name: 'Summer Meadow', sub: 'Wild Flowers', img: '/images/flowerrrrrrrrrrrrr.jpg' },
        { id: 'f_p3', name: 'Petal Soft', sub: 'Delicate Texture', img: '/images/petal_soft.jpg' },
        { id: 'f_p4', name: 'Mogra Spirit', sub: 'Traditional Scent', img: '/images/mogra.jpg' },
      ],
      earbuds: [
        { id: 'f_e1', name: 'Floral Nili', sub: 'Blue Blossom', img: '/images/nili.jpg' },
        { id: 'f_e2', name: 'Floral Dhili', sub: 'Soft Petals', img: '/images/dhili.jpg' },
        { id: 'f_e3', name: 'Floral Pili', sub: 'Yellow Radiance', img: '/images/pili.jpg' },
        { id: 'f_e4', name: 'Floral Tili', sub: 'Garden Bud', img: '/images/tili.jpg' },
      ],
      laptop: [
        { id: 'f_l1', name: 'Floral Skin', sub: 'Botanical Beauty', img: '/images/floral.jpg' },
        { id: 'f_l2', name: 'Flower Power', sub: 'Vibrant Bloom', img: '/images/flower.jpg' },
        { id: 'f_l3', name: 'Lily Essence', sub: 'Elegant White', img: '/images/lily.jpg' },
        { id: 'f_l4', name: 'Phool Art', sub: 'Artistic Nature', img: '/images/phool.jpg' },
      ]
    }
  },
  {
    id: 'disney', name: 'Disney', emoji: '/images/theme_disney_new.jpg',
    tag: 'Magic Collection', mood: 'Magical & Whimsical',
    accent: '#6EE7B7', accent2: '#FDE68A',
    img: '/images/theme_disney_new.jpg',
    config: {
      colors: ['#ff6b81', '#7bed9f', '#eccc68', '#70a1ff', '#ffffff'],
      fonts: ['Bubblegum Sans'],
      patterns: ['none', 'sparkles', 'polka'],
      effects: ['none', 'glassmorphism', 'candy-gloss']
    },
    productDesigns: {
      phone: [
        { id: 'dumbo_p', name: 'Dumbo', sub: 'Fly High', img: '/images/dumbo.jpg' },
        { id: 'elsa_p', name: 'Elsa', sub: 'Let it Go', img: '/images/elsa.jpg' },
        { id: 'lionking_p', name: 'Lion King', sub: 'Hakuna Matata', img: '/images/lion_king.jpg' },
        { id: 'mickey_p', name: 'Mickey Mouse', sub: 'The Original', img: '/images/mickey_mouse.jpg' },
      ],
      earbuds: [
        { id: 'bear_e', name: 'Winnie', sub: 'Hundred Acre Wood', img: '/images/bear.jpg' },
        { id: 'mini_e', name: 'Minnie', sub: 'Polka Dot Style', img: '/images/mini_mouse.jpg' },
        { id: 'minni_e', name: 'Classic Minnie', sub: 'Red & White', img: '/images/minni.jpg' },
        { id: 'ohana_e', name: 'Ohana v2', sub: 'Stitch & Soul', img: '/images/ohana_v2.jpg' },
      ],
      laptop: [
        { id: 'deer_l', name: 'Bambi', sub: 'Forest Magic', img: '/images/deer.jpg' },
        { id: 'ohana_l', name: 'Stitch', sub: 'Family First', img: '/images/ohana.jpg' },
        { id: 'pinaco_l', name: 'Pinocchio', sub: 'Always Be True', img: '/images/pinaco.jpg' },
        { id: 'rabbit_l', name: 'Thumper', sub: 'Playful Nature', img: '/images/rabbit.jpg' },
      ]
    }
  },
];
