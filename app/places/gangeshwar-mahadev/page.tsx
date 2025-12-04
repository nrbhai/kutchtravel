import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { gangeshwarMahadev } from "@/app/places/data/gangeshwar-mahadev";

export default function GangeshwarMahadev() {
  return (
    <DestinationTemplate
      title={gangeshwarMahadev.title}
      image={gangeshwarMahadev.image}
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-orange-50"
            border="border-l-4 border-orange-600 text-orange-800"
            image={{
              src: "/images/places/gangeshwar-mahadev/temple-hill.jpg",
              alt: "Gangeshwar Mahadev temple on hill"
            }}
          >
            <p className="leading-relaxed">{gangeshwarMahadev.significance}</p>
            <p className="leading-relaxed mt-4">
              Perched on a hill just 10km from Bhuj, Gangeshwar Mahadev temple offers not only spiritual significance 
              but also vast trekking opportunities and panoramic views of the surrounding landscape. The temple dedicated 
              to Lord Shiva attracts both devotees and adventure enthusiasts seeking a blend of spirituality and nature.
            </p>
          </SectionCard>

          <SectionCard 
            title="Temple Significance"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/gangeshwar-mahadev/temple-deity.jpg",
              alt: "Lord Shiva temple"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Shiva Temple:</b> Sacred temple dedicated to Lord Shiva (Mahadev) with regular worship and rituals</li>
              <li><b>Hilltop Location:</b> Situated on an elevated position offering spiritual ambiance</li>
              <li><b>Pilgrimage Site:</b> Important religious destination for devotees from across the region</li>
              <li><b>Festivals:</b> Special celebrations during Maha Shivaratri and other Shiva festivals</li>
              <li><b>Peaceful Atmosphere:</b> Serene environment conducive to prayer and meditation</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Trekking & Adventure"
            color="bg-green-50"
            border="border-l-4 border-green-600 text-green-800"
            image={{
              src: "/images/places/gangeshwar-mahadev/trekking-path.jpg",
              alt: "Trekking trails to the temple"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Hill Trek:</b> Moderate trekking trail to reach the hilltop temple</li>
              <li><b>Panoramic Views:</b> Stunning 360-degree views of Kutch landscape from the summit</li>
              <li><b>Nature Trails:</b> Explore the natural beauty and local flora during the trek</li>
              <li><b>Sunrise/Sunset:</b> Spectacular views during golden hours</li>
              <li><b>Photography:</b> Excellent opportunities for landscape and nature photography</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-blue-50"
            border="border-l-4 border-blue-600 text-blue-800"
            image={{
              src: "/images/places/gangeshwar-mahadev/seasonal-view.jpg",
              alt: "Temple during the best season"
            }}
          >
            <p className="leading-relaxed">{gangeshwarMahadev.bestTimeToVisit}</p>
            <p className="leading-relaxed mt-4">
              Early morning visits are ideal for trekking and witnessing sunrise. The cooler months make the trek more 
              comfortable and enjoyable.
            </p>
          </SectionCard>

          <SectionCard 
            title="How to Reach"
            color="bg-cyan-50"
            border="border-l-4 border-cyan-600 text-cyan-800"
            image={{
              src: "/images/places/gangeshwar-mahadev/route.jpg",
              alt: "Route to Gangeshwar Mahadev"
            }}
          >
            <p className="leading-relaxed">{gangeshwarMahadev.howToReach}</p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/gangeshwar-mahadev/visitor-tips.jpg",
              alt: "Visitor information and tips"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Distance from Bhuj:</b> 10km via local roads</li>
              <li><b>Trek Duration:</b> 30-45 minutes to reach the temple</li>
              <li><b>Entry Fee:</b> Free entry</li>
              <li><b>Best Time:</b> Early morning for sunrise or late afternoon for sunset</li>
              <li><b>What to Carry:</b> Water, comfortable trekking shoes, sun protection</li>
              <li><b>Dress Code:</b> Modest clothing for temple visit</li>
              <li><b>Difficulty:</b> Moderate trek suitable for most fitness levels</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Temple on hill 10km from Bhuj",
        "Dedicated to Lord Shiva (Mahadev)",
        "Offers vast trekking opportunities",
        "Panoramic views of Kutch landscape",
        "Popular for sunrise and sunset views",
        "Free entry for all visitors",
        "Best visited October to March"
      ]}
      mapUrl={gangeshwarMahadev.mapUrl || gangeshwarMahadev.directMapUrl || ""}
      gallery={gangeshwarMahadev.gallery}
    />
  );
}
