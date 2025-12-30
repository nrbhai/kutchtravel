import type { Metadata } from 'next';
import CultureClient from './CultureClient';

export const metadata: Metadata = {
  title: 'Culture & Crafts of Kutch | Art, Tribes & Heritage Villages',
  description: 'Discover the rich cultural heritage of Kutch. Explore Ajrakh, Bandhani, Rogan art, and visit artisan villages like Bhujodi and Nirona. A journey into India\'s finest craftsmanship.',
  keywords: ['Kutch culture', 'Kutch handicrafts', 'Bhujodi village', 'Nirona Rogan art', 'Ajrakhpur', 'Bandhani Kutch', 'Tribes of Kutch', 'Artisan villages'],
  openGraph: {
    title: 'Culture & Crafts of Kutch | Art, Tribes & Heritage',
    description: 'Discover the rich cultural heritage of Kutch and its artisan villages.',
    images: ['/images/culture/crafts-hero.webp'],
  },
};

export default function CulturePage() {
  return <CultureClient />;
}
