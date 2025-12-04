import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { abjibapaChhatardi } from "@/app/places/data/abjibapa-chhatardi";

export default function AbjibapaChhatardi() {
  return (
    <DestinationTemplate
      title={abjibapaChhatardi.title}
      image={abjibapaChhatardi.image}
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/abjibapa-chhatardi/cenotaph-overview.jpg",
              alt: "Abjibapa ni Chhatardi cenotaph overview"
            }}
          >
            <p className="leading-relaxed">{abjibapaChhatardi.significance}</p>
            <p className="leading-relaxed mt-4">
              This historic cenotaph (chhatardi) stands as a beautiful example of traditional Kutchi memorial architecture. 
              Built to honor Abjibapa, the structure showcases intricate stonework and design elements characteristic of 
              the region's architectural heritage. The site offers visitors a glimpse into the cultural traditions and 
              craftsmanship of historical Kutch.
            </p>
          </SectionCard>

          <SectionCard 
            title="Architectural Features"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/abjibapa-chhatardi/architecture-details.jpg",
              alt: "Architectural details of the cenotaph"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Traditional Design:</b> Classic Kutchi chhatardi architecture with domed structure and pillared pavilion</li>
              <li><b>Stonework:</b> Intricate carvings and decorative elements showcasing local craftsmanship</li>
              <li><b>Memorial Structure:</b> Built as a cenotaph to commemorate and honor Abjibapa</li>
              <li><b>Heritage Value:</b> Represents important cultural and architectural traditions of the region</li>
              <li><b>Historical Significance:</b> Stands as a testament to Kutch's rich memorial architecture tradition</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Cultural Significance"
            color="bg-blue-50"
            border="border-l-4 border-blue-600 text-blue-800"
            image={{
              src: "/images/places/abjibapa-chhatardi/cultural-heritage.jpg",
              alt: "Cultural heritage site"
            }}
          >
            <p className="leading-relaxed">
              The chhatardi holds deep cultural significance for the local community, representing the tradition of 
              building memorial structures to honor respected individuals. These cenotaphs are an integral part of 
              Kutch's architectural landscape, combining artistic expression with commemorative purpose. The site 
              serves as an important link to the region's historical and cultural past.
            </p>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-emerald-50"
            border="border-l-4 border-emerald-600 text-emerald-800"
            image={{
              src: "/images/places/abjibapa-chhatardi/seasonal.jpg",
              alt: "Best season to visit"
            }}
          >
            <p className="leading-relaxed">{abjibapaChhatardi.bestTimeToVisit}</p>
            <p className="leading-relaxed mt-4">
              The cooler months provide comfortable weather for exploring the site and appreciating the architectural 
              details. Early morning or late afternoon visits offer the best lighting for photography and a more 
              peaceful experience.
            </p>
          </SectionCard>

          <SectionCard 
            title="How to Reach"
            color="bg-cyan-50"
            border="border-l-4 border-cyan-600 text-cyan-800"
            image={{
              src: "/images/places/abjibapa-chhatardi/route.jpg",
              alt: "Route from Bhuj"
            }}
          >
            <p className="leading-relaxed">{abjibapaChhatardi.howToReach}</p>
            <p className="leading-relaxed mt-4">
              The site is easily accessible by road from Bhuj. Private vehicles or hired taxis are recommended 
              as public transport may be limited. The journey offers views of the rural Kutch landscape.
            </p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-rose-50"
            border="border-l-4 border-rose-600 text-rose-800"
            image={{
              src: "/images/places/abjibapa-chhatardi/visitor-info.jpg",
              alt: "Visitor information"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Distance from Bhuj:</b> 20km via local roads</li>
              <li><b>Entry Fee:</b> Free entry</li>
              <li><b>Duration:</b> Allow 30-45 minutes for visit</li>
              <li><b>Photography:</b> Permitted; great for architectural photography</li>
              <li><b>Facilities:</b> Basic amenities; carry water</li>
              <li><b>Best Time:</b> Early morning or late afternoon for photography</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Historic cenotaph showcasing traditional Kutchi architecture",
        "Located 20km from Bhuj",
        "Features intricate stonework and carvings",
        "Important cultural heritage site",
        "Free entry for visitors",
        "Best visited October to March"
      ]}
      mapUrl={abjibapaChhatardi.mapUrl || abjibapaChhatardi.directMapUrl || ""}
      gallery={abjibapaChhatardi.gallery}
    />
  );
}
