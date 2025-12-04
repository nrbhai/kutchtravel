import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { vandeMataram } from "@/app/places/data/vande-mataram-memorial";

export default function VandeMataramMemorial() {
  return (
    <DestinationTemplate
      title={vandeMataram.title}
      image={vandeMataram.image}
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-red-50"
            border="border-l-4 border-red-600 text-red-800"
            image={{
              src: "/images/places/vande-mataram-memorial/memorial-exterior.jpg",
              alt: "Vande Mataram Memorial exterior"
            }}
          >
            <p className="leading-relaxed">{vandeMataram.significance}</p>
            <p className="leading-relaxed mt-4">
              Located at Bhujodi village, just 8km from Bhuj, this memorial commemorates India's freedom struggle and 
              pays tribute to the brave freedom fighters who sacrificed for the nation. The site serves as an important 
              reminder of India's journey to independence and the patriotic spirit that drove the movement.
            </p>
          </SectionCard>

          <SectionCard 
            title="Historical Significance"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/vande-mataram-memorial/freedom-struggle.jpg",
              alt: "Freedom struggle exhibits"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Freedom Struggle:</b> Commemorates the sacrifices made during India's independence movement</li>
              <li><b>Patriotic Tribute:</b> Honors freedom fighters and their contribution to the nation</li>
              <li><b>Educational Value:</b> Provides insights into India's struggle for independence</li>
              <li><b>Bhujodi Connection:</b> Located in the famous weaving village of Bhujodi</li>
              <li><b>National Pride:</b> Instills patriotic values and remembrance of our history</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Memorial Features"
            color="bg-blue-50"
            border="border-l-4 border-blue-600 text-blue-800"
            image={{
              src: "/images/places/vande-mataram-memorial/memorial-features.jpg",
              alt: "Memorial features and architecture"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Memorial Structure:</b> Dedicated monument honoring freedom fighters</li>
              <li><b>Information Displays:</b> Exhibits about the independence movement</li>
              <li><b>Patriotic Atmosphere:</b> Inspiring environment celebrating national heroes</li>
              <li><b>Bhujodi Village:</b> Opportunity to explore the famous weaving village nearby</li>
              <li><b>Cultural Connection:</b> Links historical significance with local crafts</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-green-50"
            border="border-l-4 border-green-600 text-green-800"
            image={{
              src: "/images/places/vande-mataram-memorial/seasonal.jpg",
              alt: "Memorial during the best season"
            }}
          >
            <p className="leading-relaxed">{vandeMataram.bestTimeToVisit}</p>
            <p className="leading-relaxed mt-4">
              National holidays like Independence Day (August 15) and Republic Day (January 26) are particularly 
              meaningful times to visit when special programs may be organized.
            </p>
          </SectionCard>

          <SectionCard 
            title="How to Reach"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/vande-mataram-memorial/bhujodi-route.jpg",
              alt: "Route to Bhujodi village"
            }}
          >
            <p className="leading-relaxed">{vandeMataram.howToReach}</p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-cyan-50"
            border="border-l-4 border-cyan-600 text-cyan-800"
            image={{
              src: "/images/places/vande-mataram-memorial/visitor-info.jpg",
              alt: "Visitor information"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Location:</b> Bhujodi village, 8km from Bhuj</li>
              <li><b>Entry Fee:</b> Free entry</li>
              <li><b>Duration:</b> Allow 30-45 minutes for visit</li>
              <li><b>Combine With:</b> Visit Bhujodi weaving village and handicraft shops</li>
              <li><b>Photography:</b> Permitted</li>
              <li><b>Best Time:</b> Morning or late afternoon</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Memorial commemorating India's freedom struggle",
        "Located at Bhujodi village, 8km from Bhuj",
        "Honors freedom fighters and their sacrifices",
        "Educational site about independence movement",
        "Near famous Bhujodi weaving village",
        "Free entry for all visitors",
        "Best visited October to March"
      ]}
      mapUrl={vandeMataram.mapUrl || vandeMataram.directMapUrl || ""}
      gallery={vandeMataram.gallery}
    />
  );
}
