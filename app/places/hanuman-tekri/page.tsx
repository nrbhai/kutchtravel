import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { hanumanTekri } from "@/app/places/data/hanuman-tekri";

export default function HanumanTekri() {
  return (
    <DestinationTemplate
      title={hanumanTekri.title}
      image={hanumanTekri.image}
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-orange-50"
            border="border-l-4 border-orange-600 text-orange-800"
            image={{
              src: "/images/places/hanuman-tekri/temple-hill.jpg",
              alt: "Hanuman Tekri temple on hilltop"
            }}
          >
            <p className="leading-relaxed">{hanumanTekri.significance}</p>
            <p className="leading-relaxed mt-4">
              Located 10km from Bhuj at Kodki village, Hanuman Tekri is both a sacred Hanuman temple and an excellent 
              sunset viewpoint. The hilltop location provides devotees and visitors with spiritual solace along with 
              stunning panoramic views of the surrounding landscape, making it a popular destination for both worship 
              and nature appreciation.
            </p>
          </SectionCard>

          <SectionCard 
            title="Temple Significance"
            color="bg-red-50"
            border="border-l-4 border-red-600 text-red-800"
            image={{
              src: "/images/places/hanuman-tekri/hanuman-deity.jpg",
              alt: "Lord Hanuman deity"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Hanuman Temple:</b> Sacred temple dedicated to Lord Hanuman with regular worship and prayers</li>
              <li><b>Hilltop Location:</b> Elevated position providing spiritual ambiance and divine atmosphere</li>
              <li><b>Pilgrimage Site:</b> Important religious destination for Hanuman devotees</li>
              <li><b>Tuesday Significance:</b> Tuesdays see increased devotee visits as it's dedicated to Hanuman</li>
              <li><b>Peaceful Worship:</b> Serene environment conducive to prayer and meditation</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Sunset Viewpoint"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/hanuman-tekri/sunset-views.jpg",
              alt: "Sunset views from Hanuman Tekri"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Panoramic Vistas:</b> Excellent 360-degree views of Kutch landscape from the hilltop</li>
              <li><b>Sunset Spectacle:</b> Breathtaking sunset views with vibrant colors across the sky</li>
              <li><b>Photography:</b> Perfect spot for landscape and sunset photography</li>
              <li><b>Peaceful Atmosphere:</b> Quiet setting ideal for contemplation and relaxation</li>
              <li><b>Kodki Village Views:</b> Overlooks the charming village of Kodki below</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-blue-50"
            border="border-l-4 border-blue-600 text-blue-800"
            image={{
              src: "/images/places/hanuman-tekri/golden-hour.jpg",
              alt: "Temple during golden hour"
            }}
          >
            <p className="leading-relaxed">{hanumanTekri.bestTimeToVisit}</p>
            <p className="leading-relaxed mt-4">
              Evening visits are particularly popular for combining temple worship with sunset viewing. Tuesdays are 
              special for Hanuman devotees and see increased religious activity.
            </p>
          </SectionCard>

          <SectionCard 
            title="How to Reach"
            color="bg-emerald-50"
            border="border-l-4 border-emerald-600 text-emerald-800"
            image={{
              src: "/images/places/hanuman-tekri/route-kodki.jpg",
              alt: "Route to Kodki village"
            }}
          >
            <p className="leading-relaxed">{hanumanTekri.howToReach}</p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/hanuman-tekri/visitor-facilities.jpg",
              alt: "Visitor facilities and information"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Location:</b> Kodki village, 10km from Bhuj</li>
              <li><b>Temple Timings:</b> Early morning to evening</li>
              <li><b>Entry Fee:</b> Free entry</li>
              <li><b>Best Time:</b> Evening for sunset or Tuesday for special prayers</li>
              <li><b>Duration:</b> 1-2 hours for temple visit and sunset viewing</li>
              <li><b>Dress Code:</b> Modest clothing for temple visit</li>
              <li><b>What to Bring:</b> Camera, water, offerings for the deity</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Hanuman temple at Kodki village, 10km from Bhuj",
        "Excellent sunset viewpoint with panoramic views",
        "Popular pilgrimage site for Hanuman devotees",
        "Hilltop location with spiritual ambiance",
        "Tuesdays see special religious significance",
        "Free entry for all visitors",
        "Best visited October to March"
      ]}
      mapUrl={hanumanTekri.mapUrl || hanumanTekri.directMapUrl || ""}
      gallery={hanumanTekri.gallery}
    />
  );
}
