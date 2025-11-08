import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
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

  // Format description content
  const description = (
    <div className="space-y-8">
      {mundra.sections.map((section, index) => (
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
        title={mundra.title}
        image={mundra.image}
        description={description}
        facts={mundra.facts}
        mapUrl={mundra.mapUrl}
        gallery={mundra.gallery}
      />
    </>
  );
}