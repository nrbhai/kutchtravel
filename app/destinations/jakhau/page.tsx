import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { jakhau } from "@/app/destinations/data/jakhau";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${jakhau.title} - Fishing Harbor & Coastal Town`,
  description: 'Discover Jakhau, a charming coastal fishing harbor at the westernmost tip of Gujarat. Experience traditional maritime culture, fresh seafood, and pristine beaches.',
  keywords: [
    'Jakhau fishing harbor',
    'Jakhau Gujarat',
    'coastal town Kutch',
    'fishing village',
    'Jakhau beach',
    'maritime culture',
    'Kutch coastline'
  ],
  openGraph: {
    title: `${jakhau.title} - Fishing Harbor & Coastal Town`,
    description: 'Experience traditional maritime life at Jakhau fishing harbor with pristine beaches and authentic coastal culture.',
    images: [jakhau.image],
  },
};

export default function Jakhau() {
  const structuredData = generateDestinationStructuredData({
    title: jakhau.title,
    description: "Charming coastal fishing harbor at the westernmost tip of Gujarat, offering authentic maritime culture and pristine beaches.",
    image: jakhau.image,
    slug: jakhau.slug,
    facts: jakhau.facts,
    mapUrl: jakhau.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: jakhau.title }
  ]);

  const description = (
    <div className="space-y-8">
      {jakhau.sections.map((section, index) => (
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
        title={jakhau.title}
        image={jakhau.image}
        description={description}
        facts={jakhau.facts}
        mapUrl={jakhau.mapUrl}
        gallery={jakhau.gallery}
      />
    </>
  );
}
