import type { Metadata } from 'next';
import { generateEventStructuredData, generateBreadcrumbStructuredData } from '@/app/utils/seo';
import FestivalsClient from './FestivalsClient';

export const metadata: Metadata = {
  title: 'Festivals of Kutch | Rann Utsav & Cultural Events Calendar',
  description: 'Experience the magic of Rann Utsav and other vibrant festivals of Kutch. Complete guide to dates, events, bookings, and cultural celebrations.',
  keywords: ['Rann Utsav', 'Kutch festivals', 'Rann Utsav booking', 'Rann of Kutch festival', 'Modhera Dance Festival', 'Ravechi Fair', 'Kutch culture'],
  openGraph: {
    title: 'Festivals of Kutch | Rann Utsav & Cultural Events',
    description: 'Experience the magic of Rann Utsav and other vibrant festivals of Kutch.',
    images: ['/images/festivals/rann-utsav.webp'],
  },
};

export default function FestivalsPage() {
  const rannUtsavEvent = generateEventStructuredData({
    name: "Rann Utsav 2024-25",
    startDate: "2024-11-01",
    endDate: "2025-02-28",
    description: "The Rann Utsav is a cultural festival of Kutch, Gujarat, India. It is a Carnival of Music, Dance, nature beauty of White Rann and much more.",
    location: {
      name: "Dhordo White Rann",
      address: "Dhordo, Kutch"
    },
    image: "https://kutchtravel.com/images/festivals/rann-utsav.webp",
    offers: {
      price: "5000",
      currency: "INR",
      url: "https://www.rannutsav.net/"
    }
  });

  const breadcrumbs = generateBreadcrumbStructuredData([
     { name: "Home", url: "/" },
     { name: "Festivals", url: "/festivals" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([rannUtsavEvent, breadcrumbs]),
        }}
      />
      <FestivalsClient />
    </>
  );
}
