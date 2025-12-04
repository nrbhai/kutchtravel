
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { kashiVishwanath } from "@/app/places/data/kashi-vishwanath";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${kashiVishwanath.title} - Serene Beach & Temple`,
  description: kashiVishwanath.shortDescription,
  keywords: [
    'Kashi Vishwanath Mandvi',
    'Mandvi beach',
    'Shiva temple Mandvi',
    'Kutch beaches',
    'spiritual tourism Kutch',
    'Mandvi temples'
  ],
  openGraph: {
    title: `${kashiVishwanath.title} - Serene Beach & Temple`,
    description: kashiVishwanath.shortDescription,
    images: [kashiVishwanath.image],
  },
};

export default function KashiVishwanath() {
  const structuredData = generateDestinationStructuredData({
    title: kashiVishwanath.title,
    description: kashiVishwanath.significance,
    image: kashiVishwanath.image,
    slug: "places/kashi-vishwanath",
    facts: [
      "Combines religious significance with natural beauty",
      "One of the quieter beaches near Mandvi",
      "Important pilgrimage site for locals",
      "Features traditional Kutchi temple architecture",
      "Perfect for spiritual retreats and peaceful getaways"
    ],
    mapUrl: kashiVishwanath.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Places", url: "/places" },
    { name: kashiVishwanath.title }
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
        title={kashiVishwanath.title}
        image={kashiVishwanath.image}
        description={
          <div className="space-y-8">
            <SectionCard 
              title="Overview"
              color="bg-blue-50"
              border="border-l-4 border-blue-600 text-blue-800"
              image={{
                src: "/images/places/kashi-vishwanath/overview.jpg",
                alt: "Overview of Kashi Vishwanath Temple and Beach"
              }}
            >
              <p className="leading-relaxed">{kashiVishwanath.significance}</p>
            </SectionCard>

            <SectionCard 
              title="Temple Details"
              color="bg-purple-50"
              border="border-l-4 border-purple-600 text-purple-800"
              image={{
                src: "/images/places/kashi-vishwanath/temple-architecture.jpg",
                alt: "Traditional Kutchi temple architecture"
              }}
            >
              <ul className="list-none space-y-4">
                <li><b>Traditional Architecture:</b> Temple features local Kutchi architectural elements blended with traditional Hindu temple design</li>
                <li><b>Lord Shiva Worship:</b> Dedicated to Lord Shiva with daily rituals, prayers, and aarti ceremonies</li>
                <li><b>Meditation Spaces:</b> Peaceful areas with stunning sea views perfect for contemplation and prayer</li>
                <li><b>Religious Ceremonies:</b> Regular festivals and special pujas throughout the year</li>
                <li><b>Spiritual Significance:</b> Ancient temple with deep spiritual importance in the region</li>
              </ul>
            </SectionCard>

            <SectionCard 
              title="Beach Highlights"
              color="bg-emerald-50"
              border="border-l-4 border-emerald-600 text-emerald-800"
              image={{
                src: "/images/places/kashi-vishwanath/beach-view.jpg",
                alt: "Secluded beach with pristine waters"
              }}
            >
              <ul className="list-none space-y-4">
                <li><b>Secluded Paradise:</b> Clean, pristine beach perfect for peaceful walks and solitude</li>
                <li><b>Sunset Views:</b> Breathtaking sunset vistas over the Arabian Sea</li>
                <li><b>Safe Swimming:</b> Protected swimming areas during low tide periods</li>
                <li><b>Bird Watching:</b> Natural habitat for various coastal and migratory birds</li>
                <li><b>Photography:</b> Ideal location for capturing stunning coastal landscapes and spiritual moments</li>
              </ul>
            </SectionCard>

            <SectionCard 
              title="Best Time to Visit"
              color="bg-amber-50"
              border="border-l-4 border-amber-600 text-amber-800"
              image={{
                src: "/images/places/kashi-vishwanath/seasonal.jpg",
                alt: "Best season to visit Kashi Vishwanath"
              }}
            >
              <p className="leading-relaxed">{kashiVishwanath.bestTimeToVisit}</p>
            </SectionCard>

            <SectionCard 
              title="How to Reach"
              color="bg-cyan-50"
              border="border-l-4 border-cyan-600 text-cyan-800"
              image={{
                src: "/images/places/kashi-vishwanath/route.jpg",
                alt: "Route to Kashi Vishwanath from Mandvi"
              }}
            >
              <p className="leading-relaxed">{kashiVishwanath.howToReach}</p>
            </SectionCard>

            <SectionCard 
              title="Visitor Information"
              color="bg-rose-50"
              border="border-l-4 border-rose-600 text-rose-800"
              image={{
                src: "/images/places/kashi-vishwanath/facilities.jpg",
                alt: "Visitor facilities at Kashi Vishwanath"
              }}
            >
              <ul className="list-none space-y-4">
                <li><b>Distance:</b> 5 km east from Mandvi town center</li>
                <li><b>Temple Timings:</b> 6 AM to 8 PM daily</li>
                <li><b>Entry Fee:</b> Free entry to both temple and beach</li>
                <li><b>Local Transport:</b> Auto-rickshaws and taxis available from Mandvi</li>
                <li><b>Amenities:</b> Basic facilities available near the temple</li>
                <li><b>Dress Code:</b> Modest clothing recommended for temple visit</li>
              </ul>
            </SectionCard>
          </div>
        }
        facts={[
          "Combines religious significance with natural beauty",
          "One of the quieter beaches near Mandvi",
          "Important pilgrimage site for locals",
          "Features traditional Kutchi temple architecture",
          "Perfect for spiritual retreats and peaceful getaways",
          "Located 5km from Mandvi town center",
          "Offers stunning sunset views over the Arabian Sea"
        ]}
        mapUrl={kashiVishwanath.mapUrl || kashiVishwanath.directMapUrl || ""}
        gallery={kashiVishwanath.gallery}
      />
    </>
  );
}