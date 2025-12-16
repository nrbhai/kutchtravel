import DestinationTemplate from "@/app/components/DestinationTemplate";

import { lakhpat } from "@/app/destinations/data/lakhpat";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${lakhpat.title} - Historic Port Town of Kutch`,
  description: 'Explore Lakhpat, the ancient fortified port town of Kutch. Discover its historic fort, Gurudwara, Tomb of Pir Ghaus Muhammad and rich trading heritage.',
  keywords: [
    'Lakhpat Fort',
    'Lakhpat Gurudwara',
    'Pir Ghaus Muhammad',
    'Historic port Kutch',
    'Ancient trade route',
    'Lakhpat heritage',
    'Kutch history',
    'Lakhpat travel guide'
  ],
  openGraph: {
    title: `${lakhpat.title} - Historic Port Town of Kutch`,
    description: 'Discover Lakhpat, the ancient fortified port town with rich trading heritage and spiritual significance.',
    images: [lakhpat.image],
  },
};

export default function Lakhpat() {
  const structuredData = generateDestinationStructuredData({
    title: lakhpat.title,
    description: "An ancient fortified port town with rich trading heritage, home to historic Gurudwara and the tomb of Pir Ghaus Muhammad.",
    image: lakhpat.image,
    slug: "lakhpat",
    facts: lakhpat.facts,
    mapUrl: lakhpat.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: lakhpat.title }
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
        title={lakhpat.title}
        image={lakhpat.image}
        sections={lakhpat.sections}
        facts={lakhpat.facts}
        mapUrl={lakhpat.mapUrl}
        gallery={lakhpat.gallery}
      />
    </>
  );
}
