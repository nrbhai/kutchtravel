import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
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

  // Format description content
  const description = (
    <div className="space-y-8">
      {mandvi.sections.map((section, index) => (
        <SectionCard 
          key={index}
          title={section.heading}
          image={section.image}
          color={section.color}
          border={section.border}
        >
          {section.content && <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />}
          {section.list && (
            <ul className="list-none space-y-4">
              {section.list.map((item, itemIndex) => (
                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </SectionCard>
      ))}
    </div>
  );

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
        description={description}
        facts={mandvi.facts}
        mapUrl={mandvi.mapUrl}
        gallery={mandvi.gallery}
      />
    </>
  );
}