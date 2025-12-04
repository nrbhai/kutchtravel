import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { jadura } from "@/app/places/data/jadura";

export default function Jadura() {
  return (
    <DestinationTemplate
      title={jadura.title}
      image={jadura.image}
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-orange-50"
            border="border-l-4 border-orange-600 text-orange-800"
            image={{
              src: "/images/places/jadura/sunset-point.jpg",
              alt: "Jadura sunset point panoramic view"
            }}
          >
            <p className="leading-relaxed">{jadura.significance}</p>
            <p className="leading-relaxed mt-4">
              Just 5km from Bhuj, Jadura is a scenic sunset point offering panoramic views of the surrounding landscape. 
              This elevated location provides visitors with breathtaking vistas, especially during the golden hours of 
              sunset. It's a perfect spot for those seeking natural beauty and tranquility close to the city.
            </p>
          </SectionCard>

          <SectionCard 
            title="Scenic Highlights"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/jadura/panoramic-views.jpg",
              alt: "Panoramic landscape views"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Sunset Views:</b> Spectacular sunset vistas with changing colors across the sky</li>
              <li><b>Panoramic Landscape:</b> 360-degree views of Kutch's unique terrain</li>
              <li><b>Photography Paradise:</b> Excellent location for landscape and sunset photography</li>
              <li><b>Peaceful Atmosphere:</b> Quiet setting perfect for relaxation and contemplation</li>
              <li><b>Close to City:</b> Easily accessible from Bhuj for a quick evening outing</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Activities"
            color="bg-blue-50"
            border="border-l-4 border-blue-600 text-blue-800"
            image={{
              src: "/images/places/jadura/activities.jpg",
              alt: "Activities at Jadura"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Sunset Watching:</b> Main attraction - watch the sun set over the Kutch landscape</li>
              <li><b>Photography:</b> Capture stunning sunset and landscape photographs</li>
              <li><b>Picnics:</b> Popular spot for evening picnics with family and friends</li>
              <li><b>Nature Walks:</b> Explore the surrounding area and enjoy the natural environment</li>
              <li><b>Stargazing:</b> Clear skies make it great for observing stars after sunset</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-emerald-50"
            border="border-l-4 border-emerald-600 text-emerald-800"
            image={{
              src: "/images/places/jadura/golden-hour.jpg",
              alt: "Golden hour at Jadura"
            }}
          >
            <p className="leading-relaxed">{jadura.bestTimeToVisit}</p>
            <p className="leading-relaxed mt-4">
              Arrive about 30-45 minutes before sunset to find a good spot and enjoy the changing light. The golden 
              hour provides the most spectacular views and photography opportunities.
            </p>
          </SectionCard>

          <SectionCard 
            title="How to Reach"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/jadura/route.jpg",
              alt: "Route to Jadura"
            }}
          >
            <p className="leading-relaxed">{jadura.howToReach}</p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-cyan-50"
            border="border-l-4 border-cyan-600 text-cyan-800"
            image={{
              src: "/images/places/jadura/visitor-tips.jpg",
              alt: "Visitor tips and information"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Distance from Bhuj:</b> 5km via local roads</li>
              <li><b>Entry Fee:</b> Free entry</li>
              <li><b>Best Time:</b> 30-45 minutes before sunset</li>
              <li><b>Duration:</b> 1-2 hours for sunset viewing</li>
              <li><b>What to Bring:</b> Camera, water, light snacks</li>
              <li><b>Facilities:</b> Basic amenities; carry essentials</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Scenic sunset point 5km from Bhuj",
        "Offers panoramic views of Kutch landscape",
        "Popular spot for sunset photography",
        "Perfect for evening outings and picnics",
        "Free entry for all visitors",
        "Best visited during sunset hours",
        "Close proximity to Bhuj city"
      ]}
      mapUrl={jadura.mapUrl || jadura.directMapUrl || ""}
      gallery={jadura.gallery}
    />
  );
}
