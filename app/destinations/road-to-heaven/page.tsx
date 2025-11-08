import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { roadToHeaven } from "@/app/destinations/data/road-to-heaven";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${roadToHeaven.title} - Scenic Desert Highway`,
  description: 'Experience the Road to Heaven, a mesmerizing highway through the White Desert of Kutch. Discover endless salt plains, stunning sunsets, and unique desert landscapes.',
  keywords: [
    'Road to Heaven Kutch',
    'White Desert highway',
    'Rann of Kutch road',
    'Scenic drive Kutch',
    'Desert highway',
    'White Rann road',
    'Kutch landscapes',
    'Desert tourism'
  ],
  openGraph: {
    title: `${roadToHeaven.title} - Scenic Desert Highway`,
    description: 'Journey through the mesmerizing Road to Heaven, where endless white salt desert meets the sky.',
    images: [roadToHeaven.image],
  },
};

export default function RoadToHeaven() {
  const structuredData = generateDestinationStructuredData({
    title: roadToHeaven.title,
    description: "A spectacular desert highway cutting through the White Rann, offering surreal landscapes and unforgettable sunset views.",
    image: roadToHeaven.image,
    slug: "road-to-heaven",
    facts: roadToHeaven.facts,
    mapUrl: roadToHeaven.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: roadToHeaven.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {roadToHeaven.sections.map((section, index) => (
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
        title={roadToHeaven.title}
        image={roadToHeaven.image}
        description={description}
        facts={roadToHeaven.facts}
        mapUrl={roadToHeaven.mapUrl}
        gallery={roadToHeaven.gallery}
      />
    </>
  );
}
