import DestinationTemplate from "@/app/components/DestinationTemplate";
import { bhadreshwar } from "@/app/destinations/data/bhadreshwar";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${bhadreshwar.title} - Jain Pilgrimage`,
  description: 'Visit Bhadreshwar (Bhadresar) Jain Tirth near the Kutch coast. Explore the Vasai Jain temple complex, historic mosque ruins, and the village’s rich pilgrimage heritage.',
  keywords: [
    'Bhadreshwar Jain Temple',
    'Bhadresar village',
    'Vasai Jain Tirth',
    'Jain pilgrimage Gujarat',
    'Kutch temples',
    'coastal heritage Kutch',
    'Bhadreshwar tourism'
  ],
  openGraph: {
    title: `${bhadreshwar.title} - Jain Pilgrimage`,
    description: 'A coastal Jain pilgrimage center with the Vasai temple complex and early Islamic monuments nearby.',
    images: [bhadreshwar.image],
  },
};

export default function Bhadreshwar() {
  const structuredData = generateDestinationStructuredData({
    title: bhadreshwar.title,
    description: "Coastal Jain pilgrimage center known for the Vasai Jain temple complex, multiple sub‑shrines, and nearby historic mosques.",
    image: bhadreshwar.image,
    slug: bhadreshwar.slug,
    facts: bhadreshwar.facts,
    mapUrl: bhadreshwar.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: bhadreshwar.title }
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
        title={bhadreshwar.title}
        image={bhadreshwar.image}
        data={bhadreshwar}
        facts={bhadreshwar.facts}
        mapUrl={bhadreshwar.mapUrl}
        gallery={bhadreshwar.gallery}
      />
    </>
  );
}
