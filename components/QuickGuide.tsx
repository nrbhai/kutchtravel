import Image from "next/image";

const places = [
  {
    title: "White Rann of Kutch",
    icon: "🏜️",
    img: "/images/white-rann-hero.jpg",
    note: "Endless salt flats that glow silver under the full moon. Visit during Rann Utsav for a surreal experience."
  },
  {
    title: "Mandvi Beach",
    icon: "🏖️",
    img: "/images/mandvi.jpg",
    note: "A peaceful coastal town where desert meets sea. Explore Vijay Vilas Palace and Mandvi’s old shipyards."
  },
  {
    title: "Bhuj",
    icon: "🏰",
    img: "/images/bhuj.jpg",
    note: "Cultural heart of Kutch. Visit Aina Mahal, Bhujodi craft village, and enjoy local Kutchi food."
  },
  {
    title: "Dholavira",
    icon: "🏛️",
    img: "/images/dholavira.jpg",
    note: "A 4,000-year-old Harappan site preserved in salt-flat silence — pure time travel for history lovers."
  },
  {
    title: "Kala Dungar (Black Hill)",
    icon: "🌄",
    img: "/images/kala-dungar.jpg",
    note: "Highest viewpoint of Kutch with stunning Rann vistas and a centuries-old Dattatreya temple."
  },
  {
    title: "Road to Heaven",
    icon: "🛣️",
    img: "/images/road-to-heaven.jpg",
    note: "The iconic straight road through the Rann — endless symmetry, perfect for breathtaking photos."
  },
  {
    title: "Mata na Madh",
    icon: "🕉️",
    img: "/images/mata-na-madh.jpg",
    note: "Ashapura Mata Temple — centuries of devotion, festivals, and a taste of spiritual Gujarat."
  },
  {
    title: "Kadia Dhrow Caves",
    icon: "🪨",
    img: "/images/kadia-dhrow.jpg",
    note: "Ancient Buddhist caves carved into hills. Quiet, mysterious, and perfect for a short scenic hike."
  }
];

export default function QuickGuide() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Quick Guide to Kutch
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {places.map((place, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={place.img}
                alt={place.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="text-3xl">{place.icon}</div>
              <h3 className="text-xl font-semibold mt-2">{place.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {place.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
