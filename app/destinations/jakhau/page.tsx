import DestinationTemplate from "@/app/components/DestinationTemplate";
import { jakhau } from "@/app/destinations/data/jakhau";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${jakhau.title} - Historic Port of Kutch`,
  description: 'Discover Jakhau, a historic port and fishing harbor in Kutch. Famous for the legend of Jakh Botera saints and authentic maritime culture. Complete travel guide.',
  keywords: [
    'Jakhau Port',
    'Jakh Botera',
    'Kutch fishing harbor',
    'Jakhau beach',
    'Abdasa tourism',
    'Jakhau lighthouse',
    'Gujarat coastal tourism'
  ],
  openGraph: {
    title: `${jakhau.title} - Historic Port of Kutch`,
    description: 'Explore the historic port of Jakhau, home to the legend of 72 saints and a bustling fishing harbor.',
    images: [jakhau.image],
  },
};

export default function Jakhau() {
  const structuredData = generateDestinationStructuredData({
    title: jakhau.title,
    description: "A historic port town steeped in the legend of Jakh Botera saints, now a bustling fishing harbor on the Arabian Sea.",
    image: jakhau.image,
    slug: jakhau.slug,
    facts: jakhau.facts,
    mapUrl: jakhau.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: jakhau.title }
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
        title={jakhau.title}
        image={jakhau.image}
        description={jakhau.sections[1].content || ""} // Significance section
        sections={jakhau.sections}
        facts={jakhau.facts}
        mapUrl={jakhau.mapUrl}
        gallery={jakhau.gallery}
      />
    </>
  );
}
