import DestinationTemplate from "@/app/components/DestinationTemplate";
import { mundra } from "@/app/destinations/data/mundra";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${mundra.title} - Port City of Kutch`,
  description: 'Explore Mundra, the bustling port city of Kutch. Discover modern infrastructure, historic temples, and coastal charm. Complete guide to this industrial powerhouse.',
  keywords: [
    'Mundra Port',
    'Mundra SEZ',
    'Kutch ports',
    'Industrial Mundra',
    'Mundra tourism',
    'Port city Gujarat',
    'Mundra temples',
    'Mundra guide'
  ],
  openGraph: {
    title: `${mundra.title} - Port City of Kutch`,
    description: 'Discover Mundra, where ancient maritime heritage meets modern industrial progress.',
    images: [mundra.image],
  },
};

export default function Mundra() {
  const structuredData = generateDestinationStructuredData({
    title: mundra.title,
    description: "A major port city blending industrial progress with rich maritime heritage, home to India's largest private port.",
    image: mundra.image,
    slug: "mundra",
    facts: mundra.facts,
    mapUrl: mundra.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: mundra.title }
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
        title={mundra.title}
        image={mundra.image}
        description={mundra.sections[1].content || ""}
        sections={mundra.sections}
        facts={mundra.facts}
        mapUrl={mundra.mapUrl}
        gallery={mundra.gallery}
      />
    </>
  );
}