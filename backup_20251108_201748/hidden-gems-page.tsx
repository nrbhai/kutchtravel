import HiddenGemsClient from './HiddenGemsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hidden Gems of Kutch - Secret Destinations & Off-Beat Places',
  description: 'Discover secret destinations and hidden gems in Kutch. Explore off-the-beaten-path adventures, local favorites, and authentic experiences beyond the ordinary.',
  keywords: [
    'Hidden gems Kutch',
    'Secret destinations Kutch',
    'Off-beat places Kutch',
    'Unexplored Kutch',
    'Local favorites Kutch',
    'Hidden treasures Gujarat',
    'Secret spots Kutch',
    'Adventure travel Kutch'
  ],
  openGraph: {
    title: 'Hidden Gems of Kutch - Secret Destinations',
    description: 'Discover secret destinations and hidden gems that only the most curious travelers find in Kutch.',
    images: ['/images/hidden-gems-og.jpg'],
  },
};

export default function HiddenGemsPage() {
  return <HiddenGemsClient />;
}
