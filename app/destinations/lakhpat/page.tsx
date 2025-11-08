import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { lakhpat } from "@/app/destinations/data/lakhpat";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${lakhpat.title} - Historic Port Town of Kutch`,
  description: 'Explore Lakhpat, the ancient fortified port town of Kutch. Discover its historic fort, Gurudwara, Tomb of Pir Ghaus Muhammad and rich trading heritage.',
  keywords: [
    'Lakhpat Fort',
    'Lakhpat Gurudwara',
    'Pir Ghaus Muhammad',
    'Historic port Kutch',
    'Ancient trade route',
    'Lakhpat heritage',
    'Kutch history',
    'Lakhpat travel guide'
  ],
  openGraph: {
    title: `${lakhpat.title} - Historic Port Town of Kutch`,
    description: 'Discover Lakhpat, the ancient fortified port town with rich trading heritage and spiritual significance.',
    images: [lakhpat.image],
  },
};

export default function Lakhpat() {
  const structuredData = generateDestinationStructuredData({
    title: lakhpat.title,
    description: "An ancient fortified port town with rich trading heritage, home to historic Gurudwara and the tomb of Pir Ghaus Muhammad.",
    image: lakhpat.image,
    slug: "lakhpat",
    facts: lakhpat.facts,
    mapUrl: lakhpat.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: lakhpat.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {lakhpat.sections.map((section, index) => (
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
        title={lakhpat.title}
        image={lakhpat.image}
        description={description}
        facts={lakhpat.facts}
        mapUrl={lakhpat.mapUrl}
        gallery={lakhpat.gallery}
      />
    </>
  );
}
