import DestinationTemplate from "@/app/components/DestinationTemplate";
import { dholavira } from "@/app/destinations/data/dholavira";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${dholavira.title} - UNESCO World Heritage Site`,
  description: 'Explore Dholavira, the ancient Harappan metropolis in Kutch. captivating UNESCO World Heritage site featuring advanced water management and urban planning.',
  keywords: [
    'Dholavira',
    'Harappan Civilization',
    'Indus Valley Civilization',
    'UNESCO World Heritage Kutch',
    'Khadir Bet',
    'Rann of Kutch archaeology',
    'ancient water system'
  ],
  openGraph: {
    title: `${dholavira.title} - UNESCO World Heritage Site`,
    description: 'Discover the secrets of the Indus Valley Civilization at Dholavira, a 4,500-year-old metropolis.',
    images: [dholavira.image],
  },
};

export default function DholaviraPage() {
  const structuredData = generateDestinationStructuredData({
    title: dholavira.title,
    description: "A UNESCO World Heritage site representing one of the largest and most prominent cities of the Harappan Civilization.",
    image: dholavira.image,
    slug: dholavira.slug,
    facts: dholavira.facts,
    mapUrl: dholavira.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: dholavira.title }
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
        title={dholavira.title}
        image={dholavira.image}
        description={dholavira.sections[1].content || ""}
        sections={dholavira.sections}
        facts={dholavira.facts}
        mapUrl={dholavira.mapUrl}
        gallery={dholavira.gallery}
      />
    </>
  );
}
