import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { jinalaya72 } from "@/app/places/data/72-jinalaya";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${jinalaya72.title} - Magnificent Jain Temple Complex`,
  description: jinalaya72.shortDescription,
  keywords: [
    '72 Jinalaya',
    'Bounter Jinalaya',
    'Jain temple Mandvi',
    'Jain temple Kutch',
    'Adiswar Bounter Jinalaya',
    'Mandvi temples',
    'Jain pilgrimage',
    'white marble temple',
    'Kutch tourism'
  ],
  openGraph: {
    title: `${jinalaya72.title} - Magnificent Jain Temple Complex`,
    description: jinalaya72.shortDescription,
    images: [jinalaya72.image],
  },
};

export default function Jinalaya72Page() {
  const structuredData = generateDestinationStructuredData({
    title: jinalaya72.title,
    description: jinalaya72.significance,
    image: jinalaya72.image,
    slug: "places/72-jinalaya",
    facts: [
      "Built in 1982 in memory of Gun Sagar Suriswarji Mahara",
      "Spans an impressive 80 acres",
      "Features 72 individual shrines dedicated to Jain Tirthankaras",
      "Octagonal architectural design with white marble construction",
      "Main temple dedicated to Lord Mahavir, the 24th Tirthankara"
    ],
    mapUrl: jinalaya72.mapUrl || jinalaya72.directMapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Places", url: "/places" },
    { name: jinalaya72.title }
  ]);

  const description = (
    <div className="space-y-8">
      <SectionCard 
        title="About 72 Jinalaya"
        color="bg-orange-50"
        border="border-l-4 border-orange-600 text-orange-800"
        image={{
          src: "/images/places/72-jinalaya/temple-complex.jpg",
          alt: "72 Jinalaya temple complex overview"
        }}
      >
        <p className="leading-relaxed">{jinalaya72.significance}</p>
      </SectionCard>

      <SectionCard 
        title="Architectural Marvel"
        color="bg-purple-50"
        border="border-l-4 border-purple-600 text-purple-800"
        image={{
          src: "/images/places/72-jinalaya/marble-architecture.jpg",
          alt: "White marble architecture and intricate carvings"
        }}
      >
        <ul className="list-none space-y-4">
          <li><b>Octagonal Design:</b> The temple complex features a unique octagonal layout housing 72 individual shrines (deris), each dedicated to different Jain Tirthankaras</li>
          <li><b>White Marble Splendor:</b> Extensive use of pristine white marble throughout the complex, creating an atmosphere of purity and divine elegance</li>
          <li><b>Intricate Carvings:</b> Walls, pillars, and inner domes adorned with extremely detailed stonework featuring floral patterns, geometric designs, and religious motifs</li>
          <li><b>Precious Gemstones:</b> Select carvings incorporate precious and semi-precious gemstones, adding to the temple's magnificence</li>
          <li><b>Perfect Symmetry:</b> The architectural design showcases stunning symmetry and sacred geometry principles</li>
          <li><b>Main Temple:</b> At the heart of the complex stands the principal temple dedicated to Lord Mahavir, the 24th and last Tirthankara</li>
        </ul>
      </SectionCard>

      <SectionCard 
        title="Visitor Facilities"
        color="bg-blue-50"
        border="border-l-4 border-blue-600 text-blue-800"
        image={{
          src: "/images/places/72-jinalaya/facilities.jpg",
          alt: "Dharamsala and visitor facilities"
        }}
      >
        <ul className="list-none space-y-4">
          <li><b>Dharamsala (Accommodation):</b> The complex provides lodging facilities for pilgrims and visitors</li>
          <li><b>Bhojanalaya (Canteen):</b> Dining facilities offering vegetarian Jain meals</li>
          <li><b>Ample Parking:</b> Large parking area to accommodate visitors</li>
          <li><b>Peaceful Atmosphere:</b> The 80-acre complex offers serene spaces for meditation and prayer</li>
          <li><b>Ongoing Craftsmanship:</b> Some intricate decorative work continues even today, showcasing living traditional artistry</li>
        </ul>
      </SectionCard>

      <SectionCard 
        title="Best Time to Visit"
        color="bg-emerald-50"
        border="border-l-4 border-emerald-600 text-emerald-800"
        image={{
          src: "/images/places/72-jinalaya/seasonal.jpg",
          alt: "Best season to visit 72 Jinalaya"
        }}
      >
        <p className="leading-relaxed">{jinalaya72.bestTimeToVisit}</p>
      </SectionCard>

      <SectionCard 
        title="How to Reach"
        color="bg-cyan-50"
        border="border-l-4 border-cyan-600 text-cyan-800"
        image={{
          src: "/images/places/72-jinalaya/route.jpg",
          alt: "Route to 72 Jinalaya from Mandvi"
        }}
      >
        <p className="leading-relaxed">{jinalaya72.howToReach}</p>
      </SectionCard>

      <SectionCard 
        title="Visitor Guidelines"
        color="bg-amber-50"
        border="border-l-4 border-amber-600 text-amber-800"
        image={{
          src: "/images/places/72-jinalaya/guidelines.jpg",
          alt: "Visitor guidelines and temple etiquette"
        }}
      >
        <ul className="list-none space-y-4">
          <li><b>Dress Code:</b> Modest clothing is required. Remove shoes before entering temple premises</li>
          <li><b>Photography:</b> Check with temple authorities for photography permissions in certain areas</li>
          <li><b>Silence:</b> Maintain peaceful atmosphere for prayer and meditation</li>
          <li><b>Vegetarian Only:</b> No non-vegetarian food or leather items allowed within the complex</li>
          <li><b>Visiting Hours:</b> Generally open from early morning to evening; confirm timings before visiting</li>
        </ul>
      </SectionCard>
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
        title={jinalaya72.title}
        image={jinalaya72.image}
        description={description}
        facts={[
          "Built in 1982 in memory of Gun Sagar Suriswarji Mahara",
          "Spans an impressive 80 acres of sacred land",
          "Features 72 individual shrines (deris) dedicated to Jain Tirthankaras",
          "Unique octagonal architectural design",
          "Constructed entirely with pristine white marble",
          "Main temple dedicated to Lord Mahavir, the 24th Tirthankara",
          "Intricate carvings adorned with precious gemstones",
          "Provides Dharamsala (accommodation) and Bhojanalaya (dining) facilities",
          "Located just 2km from Mandvi town center",
          "Ongoing traditional craftsmanship continues to this day"
        ]}
        mapUrl={jinalaya72.mapUrl || jinalaya72.directMapUrl || ""}
        gallery={jinalaya72.gallery}
      />
    </>
  );
}
