import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { hajiPir } from "@/app/destinations/data/haji-pir";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${hajiPir.title} - Sacred Shrine`,
  description: 'Visit Haji Pir Dargah in Kutch, a symbol of communal harmony near the Pakistan border. Explore the history, significance, and annual Urs festival.',
  keywords: [
    'Haji Pir Dargah',
    'Ali Akbar Saint',
    'Kutch pilgrimage',
    'India Pakistan border tourism',
    'Communal harmony shrine',
    'Urs festival Kutch',
    'Zinda Pir',
    'Religious places in Kutch'
  ],
  openGraph: {
    title: `${hajiPir.title} - Sacred Shrine`,
    description: 'Pay homage at the Haji Pir Dargah, a revered shrine symbolizing unity and faith near the Great Rann of Kutch.',
    images: [hajiPir.image],
  },
};

export default function HajiPir() {
  const structuredData = generateDestinationStructuredData({
    title: hajiPir.title,
    description: "A revered shrine dedicated to Saint Haji Pir (Ali Akbar), known for his sacrifice and as a symbol of Hindu-Muslim unity.",
    image: hajiPir.image,
    slug: "haji-pir",
    facts: hajiPir.facts,
    mapUrl: hajiPir.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: hajiPir.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {hajiPir.sections.map((section, index) => (
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
        title={hajiPir.title}
        image={hajiPir.image}
        description={description}
        facts={hajiPir.facts}
        mapUrl={hajiPir.mapUrl}
        gallery={hajiPir.gallery}
      />
    </>
  );
}
