import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { matangMatiyaDev } from "@/app/destinations/data/matang-matiya-dev";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${matangMatiyaDev.title} - Spiritual Heritage`,
  description: 'Explore the spiritual legacy of Mamaidev and the Baarmati Panth. Discover the history, prophecies, and religious significance of this revered site in Kutch.',
  keywords: [
    'Mamaidev',
    'Matang Matiya Dev',
    'Baarmati Panth',
    'Kutch spirituality',
    'Jadeja dynasty Rajguru',
    'Mamaidev prophecies',
    'Kutch pilgrimage'
  ],
  openGraph: {
    title: `${matangMatiyaDev.title} - Spiritual Heritage`,
    description: 'Discover the revered shrine of Mamaidev, the Rajguru of Jadeja Dynasty and a spiritual beacon in Kutch.',
    images: [matangMatiyaDev.image],
  },
};

export default function MatangMatiyaDev() {
  const structuredData = generateDestinationStructuredData({
    title: matangMatiyaDev.title,
    description: "Spiritual site dedicated to Mamaidev, the 4th Guru of Baarmati Panth and Rajguru of the Jadeja Dynasty.",
    image: matangMatiyaDev.image,
    slug: matangMatiyaDev.slug,
    facts: matangMatiyaDev.facts,
    mapUrl: matangMatiyaDev.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: matangMatiyaDev.title }
  ]);

  const description = (
    <div className="space-y-8">
      {matangMatiyaDev.sections.map((section, index) => (
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
        title={matangMatiyaDev.title}
        image={matangMatiyaDev.image}
        description={description}
        facts={matangMatiyaDev.facts}
        mapUrl={matangMatiyaDev.mapUrl}
        gallery={matangMatiyaDev.gallery}
      />
    </>
  );
}
