import Image from "next/image";
import BhujClient from "./BhujClient";

export const metadata = {
  title: "Bhuj — The Soul of Kutch | Travel Kutch",
  description:
    "Explore Bhuj, the cultural heart of Kutch: Aina Mahal, Prag Mahal, Smritivan Museum, Bhujang Dev temple, Bandhani artisans, and the birthplace of Dabeli. History, crafts, and heritage await.",
  openGraph: {
    title: "Bhuj — The Soul of Kutch",
    description:
      "Discover Bhuj: from royal palaces and Bandhani art to Smritivan Museum and the birthplace of Dabeli.",
    url: "https://travelkutch.com/destinations/bhuj",
    siteName: "Travel Kutch",
    images: [
      {
        url: "/images/bhuj-overview.jpg",
        width: 1200,
        height: 700,
        alt: "Bhuj city view with Aina Mahal",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
};

export default function BhujPage() {
  return (
    <main className="bg-gradient-to-b from-amber-50 via-white to-gray-100 text-gray-800 overflow-hidden">
      {/* ✅ Hero handled by Client Component */}
      <BhujClient />

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <article className="prose prose-lg prose-amber max-w-none">
          <p>
            Bhuj is the soul of Kutch — a city where royal grandeur, desert resilience, and artistic brilliance coexist effortlessly.
            Founded over 400 years ago by Rao Hamir, Bhuj has seen empires rise, earthquakes strike, and yet continues to hum with life and color.
          </p>

          <p>
            At its heart stand the regal <strong>Aina Mahal</strong> and <strong>Prag Mahal</strong>, twin palaces that blend Mughal, European, and local artistry.
            The <strong>Kutch Museum</strong>, the oldest in Gujarat, houses tribal artifacts, ancient scripts, and hand-crafted textiles narrating the region’s vivid story.
          </p>

          <p>
            Bhuj is also the cradle of <strong>Bandhani</strong> — Gujarat’s celebrated tie-and-dye art.
            The city’s narrow lanes, especially near <strong>Bhujodi</strong> and <strong>Ajrakhpur</strong>, pulse with weavers and dyers shaping fabric into vibrant patterns.
            Every knot, every color burst carries generations of heritage.
          </p>

          <p>
            Overlooking the city, <strong>Bhujiya Hill</strong> shelters the shrine of <strong>Bhujang Dev</strong>, the serpent deity believed to have defended Bhuj from invaders.
            The climb offers sweeping views of Hamirsar Lake and the old walled city glowing beneath the desert sun.
          </p>

          <p>
            On the same hill, the <strong>Smritivan Earthquake Memorial & Museum</strong> transforms loss into learning.
            Spanning 470 acres, it honors the 2001 quake victims through forest trails, architecture, and sound installations that make remembrance quietly powerful.
          </p>

          <p>
            The marble-white <strong>Swaminarayan Temple</strong> glows with serene precision at dawn.
            And when evening arrives, the streets serve Bhuj’s pride — the original <strong>Dabeli</strong>: spiced potato, peanuts, chutneys, and buttered buns that changed Indian street food forever.
          </p>

          <p>
            Bhuj isn’t a stop on a route — it’s a chapter of Kutch itself, written in craft, faith, and flavor.
          </p>
        </article>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-center mb-10 text-gray-900">
          Glimpses of Bhuj
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/images/aina-mahal.jpg", alt: "Aina Mahal" },
            { src: "/images/prag-mahal.jpg", alt: "Prag Mahal" },
            { src: "/images/smritivan.jpg", alt: "Smritivan Museum" },
            { src: "/images/bandhani.jpg", alt: "Bandhani Craft" },
            { src: "/images/swami-temple.jpg", alt: "Swaminarayan Temple" },
            { src: "/images/dabeli.jpg", alt: "Famous Dabeli" },
          ].map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-white/40 backdrop-blur-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm md:text-base">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
