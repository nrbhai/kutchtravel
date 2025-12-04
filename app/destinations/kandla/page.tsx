import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { kandla } from "@/app/destinations/data/kandla";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${kandla.title} - Major Seaport`,
  description: 'Discover Kandla, one of India\'s major seaports and a vital gateway for international trade. Learn about the port operations and economic importance.',
  keywords: [
    'Kandla Port',
    'Kandla Gujarat',
    'India seaport',
    'Kandla Free Trade Zone',
    'port city',
    'international trade',
    'Kutch port'
  ],
  openGraph: {
    title: `${kandla.title} - Major Seaport`,
    description: 'One of India\'s major seaports handling billions in trade annually.',
    images: [kandla.image],
  },
};

export default function Kandla() {
  const structuredData = generateDestinationStructuredData({
    title: kandla.title,
    description: "One of India's major seaports and vital gateway for international trade, featuring modern facilities and a Special Economic Zone.",
    image: kandla.image,
    slug: kandla.slug,
    facts: kandla.facts,
    mapUrl: kandla.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: kandla.title }
  ]);

  const description = (
    <div className="space-y-8">
      {kandla.sections.map((section, index) => (
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
        title={kandla.title}
        image={kandla.image}
        description={description}
        facts={kandla.facts}
        mapUrl={kandla.mapUrl}
        gallery={kandla.gallery}
      />
    </>
  );
}
