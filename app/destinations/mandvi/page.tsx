import DestinationTemplate from "@/app/components/DestinationTemplate";

import { mandvi } from "@/app/destinations/data/mandvi";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mandvi Beach & Palace Guide | Things to Do & Itinerary',
  description: 'Plan your trip to Mandvi, Kutch. Complete travel guide covering Vijay Vilas Palace, Wind Farm Beach, Shipbuilding Yard, and Dabeli food spots. Includes 1-day itinerary and travel tips.',
  keywords: [
    'Mandvi beach Kutch',
    'Vijay Vilas Palace entry fee',
    'places to visit in Mandvi',
    'Mandvi shipbuilding yard',
    'Mandvi resorts',
    'how to reach Mandvi from Bhuj',
    'Mandvi Dabeli'
  ],
  openGraph: {
    title: 'Mandvi Beach & Palace Guide | Things to Do & Itinerary',
    description: 'The only beach destination in Kutch worth visiting. Royal palaces, wooden ships, and sunset beaches.',
    images: [mandvi.image],
  },
};

export default function Mandvi() {
  const structuredData = generateDestinationStructuredData({
    title: mandvi.title,
    description: "A coastal paradise known for its royal palace, pristine beaches, and historic shipbuilding traditions.",
    image: mandvi.image,
    slug: "mandvi",
    facts: mandvi.facts,
    mapUrl: mandvi.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: mandvi.title }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([structuredData, breadcrumbData]),
        }}
      />
      <DestinationTemplate
        title={mandvi.title}
        image={mandvi.image}
        sections={mandvi.sections}
        facts={mandvi.facts}
        mapUrl={mandvi.mapUrl}
        gallery={mandvi.gallery}
      />
    </>
  );
}