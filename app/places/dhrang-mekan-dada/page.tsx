import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { dhrangMekanDada } from "@/app/places/data/dhrang-mekan-dada";

export default function DhrangMekanDada() {
  return (
    <DestinationTemplate
      title={dhrangMekanDada.title}
      image={dhrangMekanDada.image}
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/shrine-exterior.jpg",
              alt: "Dhrang Mekan Dada shrine exterior"
            }}
          >
            <p className="leading-relaxed">{dhrangMekanDada.significance}</p>
          </SectionCard>

          <SectionCard 
            title="Spiritual Significance"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/devotional-area.jpg",
              alt: "Devotional area at the shrine"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Sacred Shrine:</b> Revered pilgrimage site dedicated to Mekan Dada, a respected spiritual figure in local traditions</li>
              <li><b>Regional Importance:</b> Attracts devotees from across Kutch and neighboring regions throughout the year</li>
              <li><b>Peaceful Atmosphere:</b> Serene environment conducive to prayer, meditation, and spiritual contemplation</li>
              <li><b>Local Traditions:</b> Important center for traditional religious practices and community gatherings</li>
              <li><b>Spiritual Heritage:</b> Represents the rich spiritual and cultural heritage of the Kutch region</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Pilgrimage Experience"
            color="bg-blue-50"
            border="border-l-4 border-blue-600 text-blue-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/pilgrims.jpg",
              alt: "Pilgrims at Dhrang Mekan Dada"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Devotional Practices:</b> Visitors can participate in daily prayers and traditional rituals</li>
              <li><b>Peaceful Setting:</b> Located in rural Kutch, offering tranquility away from urban areas</li>
              <li><b>Community Connection:</b> Experience local devotional practices and community spirit</li>
              <li><b>Scenic Journey:</b> The 25km drive from Bhuj offers beautiful views of rural Kutch landscape</li>
              <li><b>Spiritual Retreat:</b> Ideal for those seeking spiritual solace and connection</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-emerald-50"
            border="border-l-4 border-emerald-600 text-emerald-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/seasonal.jpg",
              alt: "Best season to visit the shrine"
            }}
          >
            <p className="leading-relaxed">{dhrangMekanDada.bestTimeToVisit}</p>
          </SectionCard>

          <SectionCard 
            title="How to Reach"
            color="bg-cyan-50"
            border="border-l-4 border-cyan-600 text-cyan-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/route-landscape.jpg",
              alt: "Scenic route through rural Kutch"
            }}
          >
            <p className="leading-relaxed">{dhrangMekanDada.howToReach}</p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-rose-50"
            border="border-l-4 border-rose-600 text-rose-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/facilities.jpg",
              alt: "Visitor facilities at the shrine"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Distance from Bhuj:</b> 25km via local roads</li>
              <li><b>Coordinates:</b> {dhrangMekanDada.coordinates}</li>
              <li><b>Transportation:</b> Private vehicle recommended; limited public transport</li>
              <li><b>Best Visiting Time:</b> Early morning for spiritual practices</li>
              <li><b>Dress Code:</b> Modest clothing recommended for shrine visit</li>
              <li><b>Duration:</b> Allow 1-2 hours for visit and prayers</li>
              <li><b>Facilities:</b> Basic amenities available at the shrine</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Local Tips"
            color="bg-indigo-50"
            border="border-l-4 border-indigo-600 text-indigo-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/local-culture.jpg",
              alt: "Local cultural practices at the shrine"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Respectful Behavior:</b> Maintain silence and respect during prayers and ceremonies</li>
              <li><b>Photography:</b> Ask permission before taking photos, especially during religious activities</li>
              <li><b>Offerings:</b> Traditional offerings can be made at the shrine</li>
              <li><b>Local Guidance:</b> Consider visiting with locals who can explain the traditions and significance</li>
              <li><b>Rural Setting:</b> Be prepared for basic facilities; carry water and essentials</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Important pilgrimage site in Kutch region",
        "Dedicated to Mekan Dada, a revered spiritual figure",
        "Located 25km from Bhuj in rural Kutch",
        "Attracts devotees from across the region",
        "Peaceful atmosphere ideal for spiritual practices",
        "Scenic drive through rural Kutch landscape",
        "Best visited October to March"
      ]}
      mapUrl={dhrangMekanDada.mapUrl || dhrangMekanDada.directMapUrl || ""}
      gallery={dhrangMekanDada.gallery}
    />
  );
}
