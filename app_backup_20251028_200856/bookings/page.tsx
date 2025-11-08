import BookingsClient from './BookingsClient';
import type { Metadata } from 'next';

// Generate metadata for this page
export const metadata: Metadata = {
  title: 'Book Your Kutch Adventure | Hotels, Flights, Tours & Shopping',
  description: 'Book hotels, flights, tours and shop for travel gear for your Kutch adventure. Best deals from trusted partners with secure booking and 24/7 support.',
  keywords: [
    'Kutch hotels booking',
    'Kutch flight booking',
    'Kutch tour packages',
    'Gujarat travel booking',
    'Kutch accommodation',
    'travel gear shopping',
    'India tour packages',
    'Kutch travel deals'
  ],
  openGraph: {
    title: 'Book Your Kutch Adventure | Hotels, Flights, Tours & Shopping',
    description: 'Book everything you need for your Kutch trip. Best deals on hotels, flights, tours and travel gear.',
    images: ['/images/bookings-overview.jpg'],
  },
};

export default function BookingsPage() {
  return <BookingsClient />;
}