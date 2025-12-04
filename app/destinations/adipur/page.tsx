import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { adipur } from "@/app/destinations/data/adipur";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${adipur.title} - Residential City`,
  description: 'Discover Adipur, a well-planned residential city and sister city of Gandhidham. Learn about its modern amenities, education, and quality of life.',
  keywords: [
    'Adipur Gujarat',
    'Adipur city',
    'Gandhidham sister city',
    'residential city Kutch',
    'planned city',
    'Adipur amenities',
    'Kutch cities'
  ],
  openGraph: {
    title: `${adipur.title} - Residential City`,
    description: 'Well-planned residential city with modern amenities and quality of life.',
    images: [adipur.image],
  },
};

export default function Adipur() {
  const structuredData = generateDestinationStructuredData({
    title: adipur.title,
    description: "Well-planned residential city established in 1947, offering modern amenities, quality education, and peaceful living environment.",
    image: adipur.image,
    slug: adipur.slug,
    facts: adipur.facts,
    mapUrl: adipur.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: adipur.title }
  ]);

  const description = (
    <div className="space-y-8">
      {adipur.sections.map((section, index) => (
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
        title={adipur.title}
        image={adipur.image}
        description={description}
        facts={adipur.facts}
        mapUrl={adipur.mapUrl}
        gallery={adipur.gallery}
      />
    </>
  );
}
