import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { bhuj } from "@/app/destinations/data/bhuj";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${bhuj.title} - Cultural Capital of Kutch`,
  description: 'Discover Bhuj, the cultural capital of Kutch. Explore Aina Mahal, Prag Mahal, Kutch Museum, and rich artisan traditions. Complete travel guide with heritage sites and local culture.',
  keywords: [
    'Bhuj tourism',
    'Bhuj palace',
    'Aina Mahal',
    'Prag Mahal', 
    'Kutch Museum',
    'Bhuj heritage',
    'Kutch handicrafts',
    'Bhuj travel guide'
  ],
  openGraph: {
    title: `${bhuj.title} - Cultural Capital of Kutch`,
    description: 'Discover Bhuj, the cultural capital of Kutch with magnificent palaces and rich heritage.',
    images: [bhuj.image],
  },
};

export default function Bhuj() {
  const structuredData = generateDestinationStructuredData({
    title: bhuj.title,
    description: "The cultural capital of Kutch, known for its magnificent palaces, ancient temples, and rich artisan traditions.",
    image: bhuj.image,
    slug: bhuj.slug,
    facts: bhuj.facts,
    mapUrl: bhuj.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: bhuj.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {bhuj.sections.map((section, index) => (
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
        title={bhuj.title}
        image={bhuj.image}
        description={description}
        facts={bhuj.facts}
        mapUrl={bhuj.mapUrl}
        gallery={bhuj.gallery}
      />
    </>
  );
}