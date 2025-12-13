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
              src: "/images/places/rudramata-dam/Rudra2.jpg",
              alt: "Rudramata Dam water reservoir"
            }}
          >
            <p className="leading-relaxed">{rudramataDam.significance}</p>
            <p className="leading-relaxed mt-4">
              Located just 15km from Bhuj, Rudramata Dam is a scenic water reservoir that offers peaceful surroundings 
              and beautiful views. The site is doubly significant as it houses the <b>Rakshak Van</b> (Protective Forest), 
              a unique memorial park.
            </p>
          </SectionCard>

          <SectionCard 
            title="Rakshak Van - The Protective Forest"
            color="bg-orange-50"
            border="border-l-4 border-orange-600 text-orange-800"
            image={{
              src: "/images/places/rudramata-dam/Rudra3.jpg", // We will need to check if this image exists or use a generic one/placeholder
              alt: "Rakshak Van Memorial"
            }}
          >
            <p className="leading-relaxed font-semibold">
              "A tribute to the brave women of Madhapar"
            </p>
            <p className="leading-relaxed mt-4">
              Rakshak Van is a cultural forest developed near the dam site. It stands as a powerful memorial dedicated to 
              the <b>300 courageous women of Madhapar village</b>. During the 1971 Indo-Pak war, these brave women 
              risked their lives to repair the bombed Bhuj airstrip in just 72 hours, ensuring the Indian Air Force 
              could continue its operations.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Spread over 9.4 hectares of diverse plantation</li>
              <li>Features statues and murals depicting the heroic story</li>
              <li>Offers a serene picnic spot with eco-friendly amenities</li>
              <li>Symbolizes the patriotism and resilience of Kutch</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Dam Features"
            color="bg-emerald-50"
            border="border-l-4 border-emerald-600 text-emerald-800"
            image={{
              src: "/images/places/rudramata-dam/Rudra4.jpg",
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
              src: "/images/places/rudramata-dam/Rudra5.jpg",
              alt: "Activities at the dam"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Picnic Spot:</b> Popular location for family picnics and group outings</li>
              <li><b>Rakshak Van:</b> Walk through the memorial forest and learn about local history</li>
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
              src: "/images/places/rudramata-dam/Rudra6.jpg",
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
              src: "/images/places/rudramata-dam/Rudra7.jpg",
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
              src: "/images/places/rudramata-dam/Rudra8.jpg",
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
