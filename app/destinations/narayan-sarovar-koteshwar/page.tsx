import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { narayanSarovarKoteshwar } from "@/app/destinations/data/narayan-sarovar-koteshwar";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${narayanSarovarKoteshwar.title} - Sacred Lakes & Temples`,
  description: 'Discover Narayan Sarovar and Koteshwar, sacred pilgrimage sites of Kutch. Experience ancient temples, holy lakes, and spiritual tranquility. Complete guide to these historical religious sites.',
  keywords: [
    'Narayan Sarovar temple',
    'Koteshwar temple',
    'Kutch pilgrimage',
    'Sacred lakes Gujarat',
    'Ancient temples Kutch',
    'Religious tourism Kutch',
    'Holy sites Gujarat',
    'Narayan Sarovar guide'
  ],
  openGraph: {
    title: `${narayanSarovarKoteshwar.title} - Sacred Lakes & Temples`,
    description: 'Explore the divine sanctuaries of Narayan Sarovar and Koteshwar, ancient pilgrimage sites steeped in mythology and spirituality.',
    images: [narayanSarovarKoteshwar.image],
  },
};

export default function NarayanSarovarKoteshwar() {
  const structuredData = generateDestinationStructuredData({
    title: narayanSarovarKoteshwar.title,
    description: "Sacred pilgrimage destinations featuring ancient temples and holy lakes, steeped in mythology and spiritual significance.",
    image: narayanSarovarKoteshwar.image,
    slug: "narayan-sarovar-koteshwar",
    facts: narayanSarovarKoteshwar.facts,
    mapUrl: narayanSarovarKoteshwar.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: narayanSarovarKoteshwar.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {narayanSarovarKoteshwar.sections.map((section, index) => (
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
        title={narayanSarovarKoteshwar.title}
        image={narayanSarovarKoteshwar.image}
        description={description}
        facts={narayanSarovarKoteshwar.facts}
        mapUrl={narayanSarovarKoteshwar.mapUrl}
        gallery={narayanSarovarKoteshwar.gallery}
      />
    </>
  );
}
