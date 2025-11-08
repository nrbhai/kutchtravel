import DestinationsClient from './DestinationsClient';
import type { Metadata } from 'next';

// Generate metadata for this page
export const metadata: Metadata = {
  title: 'All Destinations in Kutch | Complete Travel Guide',
  description: 'Explore all 12+ destinations in Kutch, Gujarat. From the White Rann to historic Bhuj, pristine Mandvi beaches, and hidden gems. Find your perfect Kutch adventure.',
  keywords: [
    'Kutch destinations',
    'Kutch travel guide',
    'White Rann destinations',
    'Bhuj tourism',
    'Mandvi beaches',
    'Kutch sightseeing',
    'Gujarat destinations',
    'Kutch heritage sites'
  ],
  openGraph: {
    title: 'All Destinations in Kutch | Complete Travel Guide',
    description: 'Explore all 12+ destinations in Kutch, Gujarat. From the White Rann to historic Bhuj and pristine beaches.',
    images: ['/images/destinations-overview.jpg'],
  },
};

export default function DestinationsPage() {
  return <DestinationsClient />;
}