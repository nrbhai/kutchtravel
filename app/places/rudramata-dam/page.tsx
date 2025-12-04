import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { rudramataDam } from "@/app/places/data/rudramata-dam";

export default function RudramataDam() {
  return (
    <DestinationTemplate
      title={rudramataDam.title}
      image={rudramataDam.image}
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-blue-50"
            border="border-l-4 border-blue-600 text-blue-800"
            image={{
              src: "/images/places/rudramata-dam/dam-overview.jpg",
              alt: "Rudramata Dam water reservoir"
            }}
          >
            <p className="leading-relaxed">{rudramataDam.significance}</p>
            <p className="leading-relaxed mt-4">
              Located just 15km from Bhuj, Rudramata Dam is a scenic water reservoir that offers peaceful surroundings 
              and beautiful views. The dam serves as both a water resource and a popular spot for visitors seeking 
              tranquility away from the city. The serene environment makes it an ideal location for relaxation and 
              nature appreciation.
            </p>
          </SectionCard>

          <SectionCard 
            title="Dam Features"
            color="bg-emerald-50"
            border="border-l-4 border-emerald-600 text-emerald-800"
            image={{
              src: "/images/places/rudramata-dam/reservoir.jpg",
              alt: "Water reservoir and surrounding landscape"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Water Reservoir:</b> Large water body providing irrigation and drinking water to the region</li>
              <li><b>Scenic Views:</b> Beautiful vistas of the dam and surrounding Kutch landscape</li>
              <li><b>Peaceful Environment:</b> Quiet setting perfect for relaxation and contemplation</li>
              <li><b>Bird Watching:</b> Attracts various water birds and migratory species</li>
              <li><b>Photography:</b> Excellent spot for landscape and nature photography</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Activities & Attractions"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/rudramata-dam/activities.jpg",
              alt: "Activities at the dam"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Picnic Spot:</b> Popular location for family picnics and group outings</li>
              <li><b>Nature Walks:</b> Peaceful walks along the dam and surrounding areas</li>
              <li><b>Sunset Views:</b> Beautiful sunset vistas over the water</li>
              <li><b>Bird Watching:</b> Opportunity to observe local and migratory birds</li>
              <li><b>Photography:</b> Capture stunning landscapes and water reflections</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/rudramata-dam/seasonal.jpg",
              alt: "Dam during the best season"
            }}
          >
            <p className="leading-relaxed">{rudramataDam.bestTimeToVisit}</p>
            <p className="leading-relaxed mt-4">
              The monsoon and post-monsoon months (July to February) are particularly beautiful when the dam is full. 
              Early morning and late afternoon visits offer the best lighting and cooler temperatures.
            </p>
          </SectionCard>

          <SectionCard 
            title="How to Reach"
            color="bg-cyan-50"
            border="border-l-4 border-cyan-600 text-cyan-800"
            image={{
              src: "/images/places/rudramata-dam/route.jpg",
              alt: "Route to Rudramata Dam"
            }}
          >
            <p className="leading-relaxed">{rudramataDam.howToReach}</p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-rose-50"
            border="border-l-4 border-rose-600 text-rose-800"
            image={{
              src: "/images/places/rudramata-dam/facilities.jpg",
              alt: "Visitor facilities"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Distance from Bhuj:</b> 15km via paved roads</li>
              <li><b>Entry Fee:</b> Free entry</li>
              <li><b>Duration:</b> Allow 1-2 hours for visit</li>
              <li><b>Best Time:</b> Early morning or late afternoon</li>
              <li><b>Facilities:</b> Basic amenities; carry food and water</li>
              <li><b>Safety:</b> Stay in designated areas near the dam</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Scenic dam located 15km from Bhuj",
        "Popular picnic and relaxation spot",
        "Great for bird watching and photography",
        "Beautiful views especially after monsoon",
        "Free entry for all visitors",
        "Best visited October to March"
      ]}
      mapUrl={rudramataDam.mapUrl || rudramataDam.directMapUrl || ""}
      gallery={rudramataDam.gallery}
    />
  );
}
