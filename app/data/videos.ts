export interface KutchShort {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  location: string;
  description: string;
  category: 'destination' | 'culture' | 'food' | 'vibe';
  tags: string[];
}

export const KUTCH_SHORTS: KutchShort[] = [
  {
    id: 'nadappa-caves-vibe',
    videoUrl: '/videos/travelkutch-naddapa.mp4',
    thumbnailUrl: '/videos/naddappa.jpg',
    title: 'Secret Nadappa Caves',
    location: 'Nadappa, Kutch',
    description: 'Exploring the legendary thin and sharp caves of Nadappa, a hidden geological marvel of Kutch.',
    category: 'vibe',
    tags: ['Caves', 'Adventure', 'Hidden']
  },
  {
    id: 'pingleshwar-beach-vibe',
    videoUrl: '/videos/travelkutch-pingleshwar.mp4',
    thumbnailUrl: '/images/destinations/beach5.jpg',
    title: 'Pingleshwar Beach Serenity',
    location: 'Pingleshwar, Kutch',
    description: 'A beautiful and secluded rocky beach near the ancient temple (1km away). Experience the raw, untamed beauty of Kutch\'s coastline.',
    category: 'vibe',
    tags: ['Rocky Beach', 'Secluded', 'Temple']
  },
  {
    id: 'kadiya-dhrow-canyon-vibe',
    videoUrl: '/videos/travelkutch-kadiadhrow.mp4',
    thumbnailUrl: '/images/destinations/kadia-dhrow.jpg',
    title: 'The Great Canyon of Kutch',
    location: 'Kadiya Dhrow, Nakhatrana',
    description: 'Breathtaking views of the ancient multi-colored rock formations at Kadiya Dhrow, often called the Grand Canyon of India.',
    category: 'vibe',
    tags: ['Canyon', 'Adventure', 'Nature']
  },
  {
    id: 'khari-nadi-waterfall-vibe',
    videoUrl: '/videos/travelkutch-sercret-waterfall.mp4',
    thumbnailUrl: '/images/destinations/kadia-dhrow.jpg',
    title: 'Secret Khari Nadi Waterfall',
    location: 'Khari Nadi, Near Bhuj',
    description: 'A hidden wonder found deep in the riverbed. Requires an adventurous 2km trek along the Khari Nadi riverbed to reach this secluded waterfall.',
    category: 'vibe',
    tags: ['Waterfall', 'Trek', 'Adventure', 'Hidden']
  },
  {
    id: 'white-rann-sunset',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sunset-over-the-desert-4251-large.mp4', // Placeholder
    thumbnailUrl: '/images/destinations/white-rann-hero.jpg',
    title: 'Sunset at White Rann',
    location: 'Dhordo, Great Rann of Kutch',
    description: 'Experience the magical transition from orange to white at the Great Rann.',
    category: 'destination',
    tags: ['Sunrise', 'Desert', 'Magic']
  },
  {
    id: 'mandvi-beach-vibe',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-walking-on-the-beach-at-sunset-41481-large.mp4', // Placeholder
    thumbnailUrl: '/images/destinations/mandvi.jpg',
    title: 'Mandvi Beach Bliss',
    location: 'Mandvi, Kutch',
    description: 'Golden sands and the rhythmic sound of the Arabian Sea.',
    category: 'destination',
    tags: ['Beach', 'Sunset', 'Relax']
  },
  {
    id: 'bhuj-palace-tour',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-ancient-temple-architecture-detail-40432-large.mp4', // Placeholder
    thumbnailUrl: '/images/destinations/bhuj-overview.jpg',
    title: 'Bhuj Heritage',
    location: 'Aina Mahal, Bhuj',
    description: 'Walking through the mirror-filled halls of history.',
    category: 'culture',
    tags: ['Heritage', 'Palace', 'Art']
  },
  {
    id: 'kalo-dungar-view',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sun-shining-through-mountain-peaks-33887-large.mp4', // Placeholder
    thumbnailUrl: '/images/destinations/kalo-dungar.jpg',
    title: 'Top of the World',
    location: 'Kalo Dungar',
    description: 'Standing at the highest point of Kutch, looking towards Pakistan.',
    category: 'vibe',
    tags: ['View', 'Mountain', 'Height']
  },
  {
    id: 'ajrakh-art-process',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-artisan-painting-intricate-details-on-a-ceramic-pot-40431-large.mp4', // Placeholder
    thumbnailUrl: '/images/crafts/ajrakh.jpg',
    title: 'The Soul of Ajrakh',
    location: 'Ajrakhpur Village',
    description: 'Watch the rhythmic block printing that takes weeks to master.',
    category: 'culture',
    tags: ['Craft', 'Artisan', 'Handmade']
  }
];
