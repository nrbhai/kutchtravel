
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { ravalpir } from "@/app/places/data/ravalpir";

export default function Ravalpir() {
  return (
    <DestinationTemplate
      title={ravalpir.title}
      image={ravalpir.image}
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-indigo-50"
            border="border-l-4 border-indigo-600 text-indigo-800"
            image={{
              src: "/images/places/ravalpir/temple-beach.jpg",
              alt: "Ravalpir Temple with beach view"
            }}
          >
            <p className="leading-relaxed">{ravalpir.significance}</p>
          </SectionCard>

          <SectionCard 
            title="Temple History"
            color="bg-orange-50"
            border="border-l-4 border-orange-600 text-orange-800"
            image={{
              src: "/images/places/ravalpir/temple-architecture.jpg",
              alt: "Ravalpir Temple architecture after 1819 reconstruction"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Ancient Origins:</b> Originally built centuries ago as a sacred site for local worship</li>
              <li><b>1819 Reconstruction:</b> Rebuilt following the devastating earthquake that reshaped Kutch's landscape</li>
              <li><b>Ravalpir Devotion:</b> Dedicated to Ravalpir, a revered local saint with deep spiritual significance</li>
              <li><b>Pilgrimage Destination:</b> Important religious site for communities across Kutch region</li>
              <li><b>Architectural Heritage:</b> Showcases traditional Kutchi temple design and construction techniques</li>
              <li><b>Resilience Symbol:</b> Represents the community's determination to preserve spiritual heritage</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Beach Features"
            color="bg-teal-50"
            border="border-l-4 border-teal-600 text-teal-800"
            image={{
              src: "/images/places/ravalpir/beach-view.jpg",
              alt: "Pristine beach near Ravalpir Temple"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Pristine Setting:</b> Clean, serene beach with unspoiled natural beauty</li>
              <li><b>Peaceful Atmosphere:</b> Perfect for meditative walks and quiet contemplation</li>
              <li><b>Arabian Sea Views:</b> Stunning vistas of the coastal waters and horizon</li>
              <li><b>Uncrowded:</b> Less frequented than main tourist beaches, offering tranquility</li>
              <li><b>Natural Landscape:</b> Authentic coastal environment with local flora and fauna</li>
              <li><b>Sunset Spot:</b> Beautiful location for watching the sun set over the sea</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Spiritual Significance"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/ravalpir/devotees.jpg",
              alt: "Devotees at Ravalpir Temple"
            }}
          >
            <p className="leading-relaxed">
              The Ravalpir Temple holds special significance for devotees who believe in the miraculous powers of Ravalpir. 
              The saint is revered for his spiritual wisdom and benevolence. Pilgrims visit throughout the year to seek 
              blessings, offer prayers, and participate in religious ceremonies. The temple's location by the sea adds to 
              its spiritual ambiance, creating a unique atmosphere where devotion meets natural serenity.
            </p>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-emerald-50"
            border="border-l-4 border-emerald-600 text-emerald-800"
            image={{
              src: "/images/places/ravalpir/seasonal.jpg",
              alt: "Best season to visit Ravalpir"
            }}
          >
            <p className="leading-relaxed">{ravalpir.bestTimeToVisit}</p>
          </SectionCard>

          <SectionCard 
            title="How to Reach"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/ravalpir/route.jpg",
              alt: "Route to Ravalpir from Mandvi"
            }}
          >
            <p className="leading-relaxed">{ravalpir.howToReach}</p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-sky-50"
            border="border-l-4 border-sky-600 text-sky-800"
            image={{
              src: "/images/places/ravalpir/facilities.jpg",
              alt: "Visitor facilities at Ravalpir"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Distance:</b> 15 km from Mandvi town center</li>
              <li><b>Temple Timings:</b> 6 AM to 7 PM daily</li>
              <li><b>Entry Fee:</b> Free entry to both temple and beach</li>
              <li><b>Transportation:</b> Auto-rickshaws and taxis available from Mandvi</li>
              <li><b>Facilities:</b> Basic amenities available near the temple</li>
              <li><b>Dress Code:</b> Modest clothing recommended for temple visit</li>
              <li><b>Duration:</b> Allow 1-2 hours for temple visit and beach exploration</li>
              <li><b>Special Days:</b> Increased activity during religious festivals and full moon days</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Historical temple rebuilt in 1819 after earthquake",
        "Combines religious heritage with coastal beauty",
        "Important spiritual site dedicated to Ravalpir",
        "Features traditional Kutchi architectural elements",
        "Offers peaceful, uncrowded beach experience",
        "Located 15km from Mandvi town center",
        "Popular pilgrimage destination for local communities"
      ]}
      mapUrl={ravalpir.mapUrl || ravalpir.directMapUrl || ""}
      gallery={ravalpir.gallery}
    />
  );
}