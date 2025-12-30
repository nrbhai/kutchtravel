import DestinationTemplate from "@/app/components/DestinationTemplate";
import { kandla } from "@/app/destinations/data/kandla";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${kandla.title} - India's Major Seaport`,
  description: 'Explore Kandla (Deendayal Port), the largest port in India by volume. Learn about its history, economic significance, and role as the gateway to Western India.',
  keywords: [
    'Kandla Port',
    'Deendayal Port',
    'Kutch industries',
    'Kandla SEZ',
    'Gandhidham tourism',
    'major ports India',
    'Gujarat maritime'
  ],
  openGraph: {
    title: `${kandla.title} - Major Seaport`,
    description: 'Discover the industrial might of Kandla Port, India\'s busiest cargo hub.',
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
        description={kandla.sections[1].content || ""}
        sections={kandla.sections}
        facts={kandla.facts}
        mapUrl={kandla.mapUrl}
        gallery={kandla.gallery}
      />
    </>
  );
}
