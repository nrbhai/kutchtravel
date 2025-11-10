import DestinationTemplate from "@/app/components/DestinationTemplate";
import { dhordo } from "@/app/destinations/data/dhordo";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${dhordo.title} - Kutch Tourism`,
  description: 'Experience Dhordo, the gateway to the White Rann of Kutch. Visit during Rann Utsav, explore the salt desert, and enjoy luxury tent stays.',
  keywords: [
    'Dhordo',
    'White Rann',
    'Rann Utsav',
    'Kutch desert',
    'Salt desert',
    'Tent city',
    'White desert tourism',
    'Kutch travel guide'
  ],
  openGraph: {
    title: `${dhordo.title} - Kutch Tourism`,
    description: 'Experience the magic of the White Rann through Dhordo, gateway to the endless salt desert.',
    images: [dhordo.image],
  },
};

export default function Dhordo() {
  const structuredData = generateDestinationStructuredData({
    title: dhordo.title,
    description: "Gateway to the White Rann of Kutch, famous for Rann Utsav and the endless salt desert.",
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

  // Transform data to match DestinationTemplate's expected format
  const formattedSections = dhordo.sections.map(section => {
    let content = '';
    if (section.content) {
      content = section.content;
    } else if (section.list) {
      content = `<div class="space-y-4">${section.list.map(item => `<p>${item}</p>`).join('')}</div>`;
    }
    return {
      title: section.heading,
      content: content
    };
  });

  const formattedGallery = dhordo.gallery.map(item => ({
    src: item.src,
    caption: item.caption
  }));

  // Get overview description with fallback
  const description = dhordo.sections[0]?.content || '';

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
        gallery={formattedGallery}
      />
    </>
  );
}