import DestinationTemplate from "@/app/components/DestinationTemplate";
import { kaloDungar } from "@/app/destinations/data/kalo-dungar";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${kaloDungar.title} - Highest Point of Kutch`,
  description: 'Visit Kalo Dungar, the Black Hill of Kutch. Experience panoramic views, ancient temple, and mysterious magnetic hills. Complete guide to Kutch\'s highest point.',
  keywords: [
    'Kalo Dungar tourism',
    'Black Hill Kutch',
    'Dattatreya temple',
    'Magnetic Hill Kutch',
    'Highest point Kutch',
    'Kalo Dungar sunset',
    'Kutch viewpoint',
    'Kalo Dungar travel guide'
  ],
  openGraph: {
    title: `${kaloDungar.title} - Highest Point of Kutch`,
    description: 'Experience Kalo Dungar, the Black Hill offering panoramic views of the Great Rann of Kutch.',
    images: [kaloDungar.image],
  },
};

export default function KaloDungar() {
  const structuredData = generateDestinationStructuredData({
    title: kaloDungar.title,
    description: "The highest point in Kutch, offering panoramic views of the Great Rann and home to the mysterious magnetic hill.",
    image: kaloDungar.image,
    slug: "kalo-dungar",
    facts: kaloDungar.facts,
    mapUrl: kaloDungar.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: kaloDungar.title }
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
        title={kaloDungar.title}
        image={kaloDungar.image}
        description={kaloDungar.sections[0].content || "Highest point in Kutch."}
        sections={kaloDungar.sections}
        facts={kaloDungar.facts}
        mapUrl={kaloDungar.mapUrl}
        gallery={kaloDungar.gallery}
      />
    </>
  );
}
