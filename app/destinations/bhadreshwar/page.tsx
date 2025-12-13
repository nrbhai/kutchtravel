import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { bhadreshwar } from "@/app/destinations/data/bhadreshwar";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${bhadreshwar.title} - Jain Pilgrimage`,
  description: 'Visit Bhadreshwar Jain Temple, one of the oldest Jain tirths in India featuring ancient Sekhari architecture and historical significance.',
  keywords: [
    'Bhadreshwar Jain Temple',
    'Vasai Jain Tirth',
    'Jain pilgrimage Gujarat',
    'Kutch temples',
    'ancient Jain temples',
    'Sekhari architecture',
    'Bhadreshwar tourism'
  ],
  openGraph: {
    title: `${bhadreshwar.title} - Jain Pilgrimage`,
    description: 'One of the oldest Jain temples in India with stunning architecture and history.',
    images: [bhadreshwar.image],
  },
};

export default function Bhadreshwar() {
  const structuredData = generateDestinationStructuredData({
    title: bhadreshwar.title,
    description: "Ancient Jain temple complex established in 516 BCE, featuring 52 sub-shrines and exquisite marble architecture.",
    image: bhadreshwar.image,
    slug: bhadreshwar.slug,
    facts: bhadreshwar.facts,
    mapUrl: bhadreshwar.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: bhadreshwar.title }
  ]);

  const description = (
    <div className="space-y-8">
      {bhadreshwar.sections.map((section, index) => (
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
        title={bhadreshwar.title}
        image={bhadreshwar.image}
        description={description}
        facts={bhadreshwar.facts}
        mapUrl={bhadreshwar.mapUrl}
        gallery={bhadreshwar.gallery}
      />
    </>
  );
}
