import { Watch } from '@/types';

export const watches: Watch[] = [
  {
    id: '1',
    name: 'ROLEX Submariner',
    model: 'Ref. 126610LN',
    price: 2394000,
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&h=800&fit=crop&crop=center',
    description: 'The Submariner is a legendary diving watch, waterproof to 300 metres. Its unidirectional rotatable bezel enables divers to safely monitor their dive time.',
    features: ['Waterproof to 300m', 'Unidirectional Bezel', 'Automatic Movement', 'Oystersteel Case'],
    category: 'Professional',
    isNew: true
  },
  {
    id: '2',
    name: 'ROLEX Daytona',
    model: 'Ref. 116500LN',
    price: 3752000,
    image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&h=800&fit=crop&crop=center',
    description: 'The Cosmograph Daytona is designed to be the ultimate tool for endurance racing drivers. With its highly reliable chronograph and bezel with tachymetric scale.',
    features: ['Chronograph Function', 'Tachymetric Scale', 'Ceramic Bezel', 'Oystersteel & Gold'],
    category: 'Professional'
  },
  {
    id: '3',
    name: 'ROLEX GMT-Master II',
    model: 'Ref. 126710BLNR',
    price: 2716000,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop&crop=center',
    description: 'The GMT-Master II is the watch of choice for world travellers. Its 24-hour rotatable bezel and additional 24-hour hand enable the wearer to read the time in two time zones simultaneously.',
    features: ['Dual Time Zone', '24-Hour Bezel', 'Automatic Movement', 'Waterproof to 100m'],
    category: 'Professional',
    isNew: true
  },
  {
    id: '4',
    name: 'ROLEX Datejust 41',
    model: 'Ref. 126334',
    price: 1904000,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop&crop=center',
    description: 'The Datejust is the archetype of the classic watch, a perfect embodiment of Rolex watchmaking expertise. It displays the date and is available in a range of sizes.',
    features: ['Date Display', 'Cyclops Lens', 'Oystersteel Case', 'Waterproof to 100m'],
    category: 'Classic'
  },
  {
    id: '5',
    name: 'ROLEX Sea-Dweller',
    model: 'Ref. 126600',
    price: 3178000,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=800&fit=crop&crop=center',
    description: 'The Sea-Dweller is specifically designed for saturation diving. Waterproof to 1,220 metres, it is equipped with a helium escape valve.',
    features: ['Waterproof to 1220m', 'Helium Escape Valve', 'Ceramic Bezel', 'Automatic Movement'],
    category: 'Professional'
  },
  {
    id: '6',
    name: 'ROLEX Explorer II',
    model: 'Ref. 226570',
    price: 2030000,
    image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&h=800&fit=crop&crop=center',
    description: 'The Explorer II was created for speleologists and volcanologists who work in environments where distinguishing between day and night is impossible.',
    features: ['24-Hour Hand', 'Fixed Bezel', 'Luminescent Display', 'Waterproof to 100m'],
    category: 'Professional',
    isNew: true
  },
  {
    id: '7',
    name: 'ROLEX John Cena Special Edition',
    model: 'Ref. JC2024',
    price: 30000000,
    image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&h=800&fit=crop&crop=center',
    description: 'Exclusive John Cena Special Edition - A masterpiece of luxury watchmaking with diamond-encrusted bezel and 18k gold case. Limited edition collector piece.',
    features: ['Diamond Bezel', '18K Gold Case', 'Limited Edition', 'Celebrity Endorsed', 'Swiss Movement'],
    category: 'Luxury',
    isNew: true
  }
];

export const collections = [
  {
    name: 'Professional Watches',
    description: 'Designed for professionals and adventurers',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=400&fit=crop&crop=center',
    count: 4
  },
  {
    name: 'Classic Watches',
    description: 'Timeless elegance for every occasion',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=400&fit=crop&crop=center',
    count: 2
  },
  {
    name: 'Luxury Collection',
    description: 'Exclusive celebrity endorsed timepieces',
    image: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=600&h=400&fit=crop&crop=center',
    count: 1
  }
];