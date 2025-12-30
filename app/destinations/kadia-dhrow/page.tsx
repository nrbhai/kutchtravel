import DestinationTemplate from "@/app/components/DestinationTemplate";
import { kadiaDhrow } from "@/app/destinations/data/kadia-dhrow";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${kadiaDhrow.title} - Grand Canyon of Gujarat`,
  description: 'Explore Kadia Dhrow, a stunning geological marvel in Kutch. Often called the Grand Canyon of India, it features colorful rock formations and river pools.',
  keywords: [
    'Kadia Dhrow',
    'Grand Canyon of India',
    'Kadiya Dhrow',
    'Kutch geological sites',
    'Hidden gems Kutch',
    'Kodki caves',
    'Gujarat Grand Canyon',
    'Kutch photography'
  ],
  openGraph: {
    title: `${kadiaDhrow.title} - Grand Canyon of India`,
    description: 'Discover the colorful canyons and rock formations of Kadia Dhrow, a hidden geological masterpiece in Kutch.',
    images: [kadiaDhrow.image],
  },
};

export default function KadiaDhrow() {
  const structuredData = generateDestinationStructuredData({
    title: kadiaDhrow.title,
    description: "A geological wonder featuring multi-colored canyon walls carved by wind and water, known as the Grand Canyon of India.",
    image: kadiaDhrow.image,
    slug: "kadia-dhrow",
    facts: kadiaDhrow.facts,
    mapUrl: kadiaDhrow.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: kadiaDhrow.title }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([structuredData, breadcrumbData]),
        }}
      />
      <DestinationTemplate
        title={kadiaDhrow.title}
        image={kadiaDhrow.image}
        description={kadiaDhrow.sections[1].content || ""}
        sections={kadiaDhrow.sections}
        facts={kadiaDhrow.facts}
        mapUrl={kadiaDhrow.mapUrl}
        gallery={kadiaDhrow.gallery}
      />
    </>
  );
}
