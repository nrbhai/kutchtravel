import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { kadiaDhrow } from "@/app/destinations/data/kadia-dhrow";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${kadiaDhrow.title} - Ancient Buddhist Site`,
  description: 'Explore Kadia Dhrow, the ancient Buddhist archaeological site in Kutch. Discover caves, stupas, and centuries of Buddhist heritage. Complete guide to this historical treasure.',
  keywords: [
    'Kadia Dhrow caves',
    'Buddhist sites Kutch',
    'Ancient caves Gujarat',
    'Buddhist heritage',
    'Archaeological site',
    'Kutch Buddhism',
    'Historical caves',
    'Kadia Dhrow guide'
  ],
  openGraph: {
    title: `${kadiaDhrow.title} - Ancient Buddhist Site`,
    description: 'Discover Kadia Dhrow, an ancient Buddhist site with remarkable caves and archaeological treasures.',
    images: [kadiaDhrow.image],
  },
};

export default function KadiaDhrow() {
  const structuredData = generateDestinationStructuredData({
    title: kadiaDhrow.title,
    description: "An ancient Buddhist archaeological site featuring historic caves and stupas, revealing centuries of Buddhist influence in Kutch.",
    image: kadiaDhrow.image,
    slug: "kadia-dhrow",
    facts: kadiaDhrow.facts,
    mapUrl: kadiaDhrow.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: kadiaDhrow.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {kadiaDhrow.sections.map((section, index) => (
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
        title={kadiaDhrow.title}
        image={kadiaDhrow.image}
        description={description}
        facts={kadiaDhrow.facts}
        mapUrl={kadiaDhrow.mapUrl}
        gallery={kadiaDhrow.gallery}
      />
    </>
  );
}
