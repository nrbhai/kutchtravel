import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { mataNaMadh } from "@/app/destinations/data/mata-na-madh";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${mataNaMadh.title} - Sacred Temple Town`,
  description: 'Experience Mata No Madh, the revered temple town of Kutch. Discover ancient shrines, spiritual traditions, and local culture. Complete guide to this sacred pilgrimage site.',
  keywords: [
    'Mata No Madh temple',
    'Ashapura Mata temple',
    'Kutch pilgrimage',
    'Sacred sites Kutch',
    'Temple tourism',
    'Religious Kutch',
    'Ashapura temple',
    'Mata No Madh guide'
  ],
  openGraph: {
    title: `${mataNaMadh.title} - Sacred Temple Town`,
    description: 'Discover the divine abode of Ashapura Mata, a sacred pilgrimage site steeped in faith and tradition.',
    images: [mataNaMadh.image],
  },
};

export default function MataNaMadh() {
  const structuredData = generateDestinationStructuredData({
    title: mataNaMadh.title,
    description: "A sacred pilgrimage destination, home to the revered temple of Ashapura Mata, the patron goddess of Kutch.",
    image: mataNaMadh.image,
    slug: "mata-na-madh",
    facts: mataNaMadh.facts,
    mapUrl: mataNaMadh.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: mataNaMadh.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {mataNaMadh.sections.map((section, index) => (
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
        title={mataNaMadh.title}
        image={mataNaMadh.image}
        description={description}
        facts={mataNaMadh.facts}
        mapUrl={mataNaMadh.mapUrl}
        gallery={mataNaMadh.gallery}
      />
    </>
  );
}