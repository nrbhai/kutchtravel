import { bhuj } from "@/app/destinations/data/bhuj";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';
import BhujClient from "./BhujClient";

// Generate metadata for this destination
export const metadata: Metadata = {
  title: 'Bhuj City Guide | Palaces, Museums & Handicraft Shopping',
  description: 'The ultimate guide to Bhuj, Kutch. Visit Aina Mahal, Prag Mahal, and Bhujodi. Best places for shopping Bandhani and Rogan art. Includes 2-day itinerary and hotel tips.',
  keywords: [
    'Bhuj city guide',
    'Aina Mahal entry fee',
    'Prag Mahal timings',
    'shopping in Bhuj',
    'Bhujodi village guide',
    'best places to eat in Bhuj',
    'how to reach Bhuj'
  ],
  openGraph: {
    title: 'Bhuj City Guide | Palaces, History & Handicrafts',
    description: 'Explore the royal heart of Kutch. Complete guide to palaces, museums, and artisan villages.',
    images: [bhuj.image],
    url: '/destinations/bhuj',
  },
  alternates: {
    canonical: '/destinations/bhuj',
  },
};

export default function Bhuj() {
  const structuredData = generateDestinationStructuredData({
    title: bhuj.title,
    description: "The cultural capital of Kutch, known for its magnificent palaces, ancient temples, and rich artisan traditions.",
    image: bhuj.image,
    slug: bhuj.slug,
    facts: bhuj.facts,
    mapUrl: bhuj.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: bhuj.title }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([structuredData, breadcrumbData]),
        }}
      />
      <BhujClient data={bhuj} />
    </>
  );
}