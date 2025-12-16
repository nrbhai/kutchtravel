import DestinationTemplate from "@/app/components/DestinationTemplate";

import { mandvi } from "@/app/destinations/data/mandvi";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${mandvi.title} - Coastal Gem of Kutch`,
  description: 'Explore Mandvi, the coastal paradise of Kutch. Visit the magnificent Vijay Vilas Palace, pristine beaches, and historic shipyards. Complete travel guide with heritage sites and local attractions.',
  keywords: [
    'Mandvi tourism',
    'Vijay Vilas Palace',
    'Mandvi Beach',
    'Mandvi shipyard',
    'Kutch beaches',
    'Mandvi heritage',
    'Mandvi travel guide',
    'Wind farms Mandvi'
  ],
  openGraph: {
    title: `${mandvi.title} - Coastal Gem of Kutch`,
    description: 'Discover Mandvi, the coastal paradise of Kutch with royal palace, pristine beaches and historic shipyards.',
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