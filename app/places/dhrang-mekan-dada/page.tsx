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
              src: "/images/places/dhrang-mekan-dada/overview.jpg",
              alt: "Dhrang Mekan Dada shrine"
            }}
          >
            <p className="leading-relaxed">
              <b>Sant Mekan Dada</b> (1667–1730 AD) was a revered Hindu saint and humanitarian from the Kutch region. 
              Born in Khombhadi village, he dedicated his life to serving the people of the Rann of Kutch. He is often 
              worshipped as an incarnation of Lakshman by the Ahir community and founded the Makadbanth Kapdi sect.
            </p>
            <p className="leading-relaxed mt-4">
              His resting place in Dhrang village has become a major pilgrimage site, symbolizing selfless service 
              and compassion for all living beings.
            </p>
          </SectionCard>

          <SectionCard 
            title="The Legend of Laliyo & Motiyo"
            color="bg-orange-50"
            border="border-l-4 border-orange-600 text-orange-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/laliyo-motiyo.jpg",
              alt: "Laliyo the donkey and Motiyo the dog"
            }}
          >
            <p className="leading-relaxed text-lg font-medium text-orange-900 mb-4">
              "The Saint, The Dog, and The Donkey"
            </p>
            <p className="leading-relaxed">
              Mekan Dada is famously remembered for his two loyal animal companions who helped him save countless lives 
              in the harsh desert:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-4">
              <li>
                <b>Laliyo (The Donkey):</b> A strong donkey who would carry gallons of water and food supplies on his back.
              </li>
              <li>
                <b>Motiyo (The Dog):</b> An intelligent dog trained to guide Laliyo. Motiyo would sniff out travelers 
                lost in the vast Rann, and lead Laliyo to them to provide life-saving water and food.
              </li>
            </ul>
            <p className="leading-relaxed mt-4 italic text-gray-700">
              Together, this trio spent their lives roaming the desert, providing "Annadana" (food) and "Jaldana" (water) 
              to hungry, thirsty, and lost nomads.
            </p>
          </SectionCard>

          <SectionCard 
            title="Teachings & Philosophy"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/teachings.jpg",
              alt: "Spiritual teachings"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Humanitarian Service:</b> Believed in serving humanity ("Seva") as the highest form of worship.</li>
              <li><b>Social Equality:</b> Preached against untouchability and superstitions, welcoming people of all castes and religions.</li>
              <li><b>Poetry:</b> Composed hymns and bhajans reflecting Hindu philosophy and local wisdom.</li>
              <li><b>Kapdi Sect:</b> Founded the Makadbanth (or Mastani) Kapdi sect, one of the ten branches of the Kapdi community.</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Mekan Dada Fair"
            color="bg-rose-50"
            border="border-l-4 border-rose-600 text-rose-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/fair.jpg",
              alt: "Annual Fair"
            }}
          >
            <p className="leading-relaxed">
              Every year on <b>Maha Shivaratri</b>, a grand fair is organized at the Samadhi memorial in Dhrang. 
              The event attracts thousands of devotees from across Gujarat and beyond. It is a vibrant display of 
              Kutchi culture, featuring traditional music, bhajans, and community feasts in honor of the saint.
            </p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-blue-50"
            border="border-l-4 border-blue-600 text-blue-800"
            image={{
              src: "/images/places/dhrang-mekan-dada/facilities.jpg",
              alt: "Visitor facilities at the shrine"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Distance from Bhuj:</b> 25km via local roads</li>
              <li><b>Visiting Hours:</b> Open all day; morning and evening aartis are special.</li>
              <li><b>Best Time:</b> October to March; Maha Shivaratri for the fair.</li>
              <li><b>Etiquette:</b> Dress modestly and maintain silence near the Samadhi.</li>
              <li><b>Facilities:</b> Basic amenities and dharmashalas (pilgrim rest houses) available.</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Home of Sant Mekan Dada (1667–1730)",
        "Famous for Laliyo (Donkey) & Motiyo (Dog)",
        "Historic humanitarian site in Rann of Kutch",
        "Grand Fair on Maha Shivaratri",
        "Center of Makadbanth Kapdi sect",
        "Symbol of social equality and service"
      ]}
      mapUrl={dhrangMekanDada.mapUrl || dhrangMekanDada.directMapUrl || ""}
      gallery={dhrangMekanDada.gallery}
    />
  );
}
