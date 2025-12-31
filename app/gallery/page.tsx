import GalleryPageClient from './GalleryPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kutch Photo Gallery - Stunning Images of White Rann, Mandvi & Heritage',
  description: 'Explore our curated gallery of Kutch. High-quality photos of the White Rann salt desert, Mandvi Beach sunsets, ancient Bhuj temples, and elusive wildlife. A visual journey through Gujarat\'s cultural heart.',
  keywords: ['Kutch photos', 'White Rann images', 'Mandvi beach photography', 'Bhuj heritage photos', 'Kutch wildlife gallery', 'Gujarat travel photography'],
  openGraph: {
    title: 'Visual Journey of Kutch | Stunning Photo Gallery',
    description: 'See the beauty of Kutch before you visit. Authentic photos of landscapes, culture, and hidden gems.',
    images: ['/images/destinations/white-rann-hero.webp'],
  }
};

export const revalidate = 60; // revalidate the page every minute

export default function GalleryPage() {
  return <GalleryPageClient />;
}