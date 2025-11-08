import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { destination } from "@/app/destinations/data/DESTINATION_FILE";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${destination.title} - SUBTITLE_HERE`,
  description: 'DETAILED_DESCRIPTION_HERE',
  keywords: [
    'KEYWORD1',
    'KEYWORD2',
    'KEYWORD3',
    'KEYWORD4',
    'KEYWORD5',
    'KEYWORD6',
    'KEYWORD7',
    'KEYWORD8'
  ],
  openGraph: {
    title: `${destination.title} - SUBTITLE_HERE`,
    description: 'CONCISE_DESCRIPTION_HERE',
    images: [destination.image],
  },
};

export default function DestinationPage() {
  const structuredData = generateDestinationStructuredData({
    title: destination.title,
    description: "STRUCTURED_DATA_DESCRIPTION",
    image: destination.image,
    slug: destination.slug,
    facts: destination.facts,
    mapUrl: destination.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: destination.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {destination.sections.map((section, index) => (
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
        title={destination.title}
        image={destination.image}
        description={description}
        facts={destination.facts}
        mapUrl={destination.mapUrl}
        gallery={destination.gallery}
      />
    </>
  );
}