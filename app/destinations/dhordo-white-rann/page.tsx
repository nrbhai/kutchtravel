import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { dhordo } from "@/app/destinations/data/dhordo";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${dhordo.title} - White Desert of Kutch`,
  description: 'Experience Dhordo, the gateway to the White Rann of Kutch. Discover luxury tent stays, cultural performances, and the magical moonlit desert. Complete guide to Rann Utsav and year-round attractions.',
  keywords: [
    'Dhordo tourism',
    'White Rann of Kutch',
    'Rann Utsav',
    'Tent City Dhordo',
    'Desert festival Kutch',
    'White desert tourism',
    'Kutch desert stay',
    'Full moon desert tour'
  ],
  openGraph: {
    title: `${dhordo.title} - White Desert of Kutch`,
    description: 'Discover Dhordo and the magical White Rann of Kutch, home to the famous Rann Utsav festival and stunning desert landscapes.',
    images: [dhordo.image],
  },
};

export default function DhordoWhiteRann() {
  const structuredData = generateDestinationStructuredData({
    title: dhordo.title,
    description: "The gateway to the White Rann of Kutch, famous for its surreal salt desert landscape and the vibrant Rann Utsav festival.",
    image: dhordo.image,
    slug: dhordo.slug,
    facts: dhordo.facts,
    mapUrl: dhordo.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: dhordo.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {dhordo.sections.map((section, index) => (
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
        title={dhordo.title}
        image={dhordo.image}
        description={description}
        facts={dhordo.facts}
        mapUrl={dhordo.mapUrl}
        gallery={dhordo.gallery}
      />
    </>
  );
}
