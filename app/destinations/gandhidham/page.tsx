import DestinationTemplate from "@/app/components/DestinationTemplate";
import { gandhidham } from "@/app/destinations/data/gandhidham";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${gandhidham.title} - Commercial Hub of Kutch`,
  description: 'Explore Gandhidham, the commercial powerhouse of Kutch. Discover modern markets, Kandla Port connectivity, and vibrant business districts. Complete guide to this modern industrial city.',
  keywords: [
    'Gandhidham city',
    'Kandla Port link',
    'Kutch business hub',
    'Gandhidham market',
    'Industrial Kutch',
    'Modern Gandhidham',
    'Port city Gujarat',
    'Gandhidham guide'
  ],
  openGraph: {
    title: `${gandhidham.title} - Commercial Hub of Kutch`,
    description: 'Discover Gandhidham, the vibrant commercial center of Kutch with modern markets and strong port connections.',
    images: [gandhidham.image],
  },
};

export default function Gandhidham() {
  const structuredData = generateDestinationStructuredData({
    title: gandhidham.title,
    description: "The commercial powerhouse of Kutch, known for its modern markets, port connectivity, and vibrant business ecosystem.",
    image: gandhidham.image,
    slug: "gandhidham",
    facts: gandhidham.facts,
    mapUrl: gandhidham.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: gandhidham.title }
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
        title={gandhidham.title}
        image={gandhidham.image}
        description={gandhidham.sections[1].content || ""}
        sections={gandhidham.sections}
        facts={gandhidham.facts}
        mapUrl={gandhidham.mapUrl}
        gallery={gandhidham.gallery}
      />
    </>
  );
}
