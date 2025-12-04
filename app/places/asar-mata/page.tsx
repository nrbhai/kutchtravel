
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { asarMata } from "@/app/places/data/asar-mata";

export default function AsarMata() {
  return (
    <DestinationTemplate
      title={asarMata.title}
      image={asarMata.image}
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-teal-50"
            border="border-l-4 border-teal-600 text-teal-800"
            image={{
              src: "/images/places/asar-mata/temple-overview.jpg",
              alt: "Asar Mata Temple and surrounding beach area"
            }}
          >
            <p className="leading-relaxed">{asarMata.significance}</p>
          </SectionCard>

          <SectionCard 
            title="Temple Significance"
            color="bg-orange-50"
            border="border-l-4 border-orange-600 text-orange-800"
            image={{
              src: "/images/places/asar-mata/temple-deity.jpg",
              alt: "Goddess Asar Mata shrine"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Ancient Heritage:</b> Historic temple dedicated to Goddess Asar Mata with centuries of spiritual tradition</li>
              <li><b>Pilgrimage Site:</b> Important religious destination for local communities and devotees from across Kutch</li>
              <li><b>Traditional Architecture:</b> Authentic Kutchi temple design with local architectural elements</li>
              <li><b>Religious Ceremonies:</b> Regular pujas, festivals, and special celebrations throughout the year</li>
              <li><b>Meditation Space:</b> Peaceful atmosphere conducive to prayer, meditation, and spiritual contemplation</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Beach Experience"
            color="bg-sky-50"
            border="border-l-4 border-sky-600 text-sky-800"
            image={{
              src: "/images/places/asar-mata/beach-view.jpg",
              alt: "Secluded beach near Asar Mata Temple"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Secluded Paradise:</b> Clean, pristine beach stretch away from crowded tourist areas</li>
              <li><b>Peaceful Walks:</b> Perfect for meditative beach walks and quiet contemplation</li>
              <li><b>Sunset Spectacle:</b> Breathtaking sunset views over the Arabian Sea</li>
              <li><b>Natural Beauty:</b> Coastal vegetation and unspoiled natural environment</li>
              <li><b>Photography:</b> Ideal location for capturing serene coastal landscapes and spiritual moments</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-violet-50"
            border="border-l-4 border-violet-600 text-violet-800"
            image={{
              src: "/images/places/asar-mata/seasonal.jpg",
              alt: "Best season to visit Asar Mata"
            }}
          >
            <p className="leading-relaxed">{asarMata.bestTimeToVisit}</p>
          </SectionCard>

          <SectionCard 
            title="How to Reach"
            color="bg-lime-50"
            border="border-l-4 border-lime-600 text-lime-800"
            image={{
              src: "/images/places/asar-mata/route.jpg",
              alt: "Route to Asar Mata from Mandvi"
            }}
          >
            <p className="leading-relaxed">{asarMata.howToReach}</p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-pink-50"
            border="border-l-4 border-pink-600 text-pink-800"
            image={{
              src: "/images/places/asar-mata/facilities.jpg",
              alt: "Visitor facilities at Asar Mata"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Distance:</b> 10-12 km from Mandvi town center</li>
              <li><b>Temple Timings:</b> Sunrise to Sunset (approximately 6 AM to 7 PM)</li>
              <li><b>Entry Fee:</b> Free entry to both temple and beach</li>
              <li><b>Transportation:</b> Auto-rickshaws and taxis available from Mandvi</li>
              <li><b>Facilities:</b> Basic amenities available near the temple</li>
              <li><b>Dress Code:</b> Modest clothing recommended for temple visit</li>
              <li><b>Duration:</b> Allow 1-2 hours for temple visit and beach exploration</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Ancient temple with historical significance",
        "Secluded beach location perfect for peace-seekers",
        "Important religious site for local devotees",
        "Combines spiritual and natural attractions",
        "Less crowded alternative to main Mandvi beach",
        "Located 10-12km from Mandvi town",
        "Offers stunning sunset views over the Arabian Sea"
      ]}
      mapUrl={asarMata.mapUrl || asarMata.directMapUrl || ""}
      gallery={asarMata.gallery}
    />
  );
}