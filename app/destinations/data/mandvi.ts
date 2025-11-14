import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.
export const mandvi: Destination = {
  slug: "mandvi",
  title: "Mandvi — Where the Desert Meets the Sea",
  image: "/images/mandvi/mandvi1.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: "At the magical confluence where the Rukmavati River embraces the Gulf of Kutch, Mandvi unfolds as a coastal gem that has witnessed centuries of maritime glory. This enchanting town, born from the vision of Rao Khengarji I in 1580, once commanded the seas as one of India's most powerful ports, its merchant fleets sailing to distant lands laden with treasures. Today, Mandvi captivates visitors with its unique dual personality—a place where ancient dhow builders still craft vessels using techniques passed down through 400 years, while pristine beaches and royal palaces create an atmosphere of timeless elegance. Here, the rhythmic sound of waves mingles with the hammering of shipwrights, creating a symphony that speaks of Mandvi's enduring love affair with the sea.",
      image: {
        src: "/images/mandvi/overview.jpg",
        alt: "Overview of Mandvi — Where the Desert Meets the Sea"
      }
    },
    {
      heading: "History",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      content: "Mandvi's maritime saga began when the ambitious Rao Khengarji I recognized this river mouth's strategic potential in 1580, establishing what would become a legendary trading empire. Positioned perfectly where desert caravan routes met ocean highways, Mandvi blossomed into an extraordinary commercial powerhouse. By the 1700s, local merchants commanded an impressive armada of 400 vessels that carried spices, textiles, and precious goods across vast distances to East Africa, the Malabar coast, and the Persian Gulf. Such was Mandvi's prosperity that it actually overshadowed the regional capital Bhuj in terms of wealth and influence. The town's maritime legacy carries a fascinating footnote: Kanji Malam, a skilled navigator from Mandvi, served as the local guide who helped Vasco da Gama navigate to India in 1497—connecting Mandvi to one of history's most pivotal maritime expeditions.",
      image: {
        src: "/images/mandvi/history.jpg",
        alt: "Historical view of Mandvi — Where the Desert Meets the Sea"
      }
    },
    {
      heading: "Places of Interest",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>Vijay Vilas Palace:</b> Royal palace built in 1920 with Rajput architecture, private beach, and filming location for Hindi movies",
        "<b>Mandvi Beach:</b> Clean white sandy beach with wooden sailboats and scenic wind farms",
        "<b>Traditional Shipbuilding Yard:</b> 400-year-old ship construction center where dhows are still built using traditional techniques",
        "<b>Rukmavati Bridge:</b> Historic 1883 bridge, longest existing structure of its kind in India",
        "<b>72 Jinalaya:</b> Beautiful Jain temple complex with intricate architecture",
        "<b>Shyamji Krishna Varma Memorial:</b> Kranti Tirth dedicated to the freedom fighter and scholar",
        "<b>Topansar Lake:</b> Central city lake attracting thousands of seagulls every winter",
        "<b>Mandvi Fort:</b> Remains of the original fortified town with 8m high stone walls",
        "<b>Wind Farms Beach:</b> Asia's first wind mill project from 1983 with scenic coastline views"
      ],
      image: {
        src: "/images/mandvi/attractions.jpg",
        alt: "Main attractions in Mandvi — Where the Desert Meets the Sea"
      }
    },
    {
      heading: "Food & Crafts",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      list: [
        "<b>Dabeli - Mandvi's Culinary Gift:</b> Savor the original Kutchi burger created right here in the 1960s by the innovative Keshavji Gabha Chudasama",
        "<b>Ocean's Fresh Bounty:</b> Indulge in the day's catch of fish, crabs, and Arabian Sea treasures prepared with authentic coastal spices",
        "<b>Living Shipbuilding Heritage:</b> Witness master craftsmen perpetuating four centuries of dhow-building wisdom using traditional hand tools",
        "<b>Vibrant Bandhani Artistry:</b> Discover exquisite tie-dye textiles in the colorful stalls of Bandhni Bazaar",
        "<b>Local Industrial Heritage:</b> Explore traditional bentonite mining and oil production that have sustained local communities",
        "<b>Textile Legacy:</b> Experience cotton processing and textile production that connects to Mandvi's trading past"
      ],
      image: {
        src: "/images/mandvi/crafts.jpg",
        alt: "Traditional crafts and cuisine of Mandvi — Where the Desert Meets the Sea"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
        "<b><a href='/places/kashi-vishwanath' class='text-blue-400 hover:text-blue-300'>Kashi Vishwanath Temple & Beach:</a></b> 5km - Serene secluded beach with Shiv temple nearby",
        "<b><a href='/places/vijay-vilas-palace' class='text-blue-400 hover:text-blue-300'>Vijay Vilas Palace:</a></b> 8km - Royal palace with private beach and stunning architecture",
        "<b><a href='/places/asar-mata' class='text-blue-400 hover:text-blue-300'>Asar Mata Temple & Beach:</a></b> 10-12km - Serene and secluded temple site with peaceful beach",
        "<b>72 Jinalaya:</b> 2km - Beautiful Jain temple complex with intricate architecture",
        "<b>Maska:</b> 25km - Coastal village with traditional crafts and local culture",
        "<b><a href='/places/shyamji-krishnavarma' class='text-blue-400 hover:text-blue-300'>Shyamji Krishnavarma Memorial:</a></b> 3km - Kranti Tirth dedicated to the freedom fighter and scholar",
        "<b><a href='/places/ravalpir' class='text-blue-400 hover:text-blue-300'>Ravalpir Temple & Beach:</a></b> 15km - Sacred temple rebuilt in 1819 with clean beach nearby"
      ],
      image: {
        src: "/images/mandvi/nearby.jpg",
        alt: "Nearby attractions around Mandvi — Where the Desert Meets the Sea"
      }
    },
    {
      heading: "How to Reach",
      color: "bg-cyan-50",
      border: "border-l-4 border-cyan-600 text-cyan-800",
      list: [
        "<b>By Air:</b> Bhuj Airport (58km) - Daily flights from Mumbai, Delhi, Ahmedabad",
        "<b>By Rail:</b> Nearest station is Bhuj (58km) - No direct rail connectivity to Mandvi",
        "<b>By Road:</b> Well-connected by highways from Bhuj, Gandhidham, and other major cities",
        "<b>Local Transport:</b> Auto-rickshaws, taxis, and rental vehicles available"
      ],
      image: {
        src: "/images/mandvi/transport.jpg",
        alt: "Transportation hub in Mandvi — Where the Desert Meets the Sea"
      }
    },
    {
      heading: "Travel Information",
      color: "bg-rose-50",
      border: "border-l-4 border-rose-600 text-rose-800",
      list: [
        "<b>Distance from Bhuj Airport:</b> 58km (approximately 1.2 hours drive)",
        "<b>Distance from Bhuj city:</b> 58km south of Bhuj (1.2 hours drive)",
        "<b>Distance from Ahmedabad:</b> 382km (approximately 7.5 hours drive)",
        "<b>Distance from Gandhidham:</b> 101km (approximately 2 hours drive)",
        "<b>Coordinates:</b> Located at 22.83°N 69.36°E where Rukmavati River meets Gulf of Kutch"
      ],
      image: {
        src: "/images/mandvi/info.jpg",
        alt: "Travel information about Mandvi — Where the Desert Meets the Sea"
      }
    },
    {
      heading: "Best Time to Visit",
      color: "bg-teal-50",
      border: "border-l-4 border-teal-600 text-teal-800",
      content: "Plan your coastal escape between October and March when Mandvi transforms into a seaside paradise with comfortable temperatures ranging from 14-34°C. The town's location along the Arabian Sea creates a more moderate climate than the harsh inland desert, though it still experiences the characteristic unpredictability of coastal weather—annual rainfall averages 538mm but can swing dramatically from a parched 1.1mm to a deluge of 1,635mm depending on monsoon patterns. Summer months from March to June bring intense heat reaching 43°C, while the monsoon season from June to September delivers refreshing but sometimes heavy rainfall that brings the landscape to vibrant life.",
      image: {
        src: "/images/mandvi/season.jpg",
        alt: "Best season to visit Mandvi — Where the Desert Meets the Sea"
      }
    },
    {
      heading: "Accommodation & Local Tips",
      color: "bg-lime-50",
      border: "border-l-4 border-lime-600 text-lime-800",
      list: [
        "<b>Accommodation Variety:</b> Choose from charming beach resorts, heritage properties, comfortable guesthouses, and budget-friendly options",
        "<b>Community Spirit:</b> Experience the warmth of approximately 51,000 residents, primarily Hindu with a vibrant Jain community",
        "<b>Language Bridge:</b> Enjoy easy communication with locals speaking Gujarati, Hindi, Kutchi, and English in tourist areas",
        "<b>Shopping Treasures:</b> Browse authentic handicrafts, stunning Bandhani textiles, and miniature ship models at the bustling Bandhni Bazaar",
        "<b>Peaceful Environment:</b> Relax in this generally safe destination while following common-sense travel precautions"
      ],
      image: {
        src: "/images/mandvi/accommodation.jpg",
        alt: "Accommodation options in Mandvi — Where the Desert Meets the Sea"
      }
    }
  ],
  facts: [
    "Maritime Birth: Established in 1580 by the visionary Rao Khengarji I",
    "Coastal Community: Home to approximately 51,000 residents with rich Hindu and Jain traditions",
    "Strategic Position: Perfectly situated where the Rukmavati River greets the Gulf of Kutch",
    "Bhuj Connection: Located 58km south of the cultural capital via scenic road routes",
    "Dual Fame: Renowned for majestic Vijay Vilas Palace and living 400-year shipbuilding heritage",
    "Coastal Climate: Enjoys hot semi-arid weather moderated by refreshing sea breezes",
    "Culinary Legacy: Proudly claims to be the birthplace of beloved Dabeli in the 1960s"
  ],
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58976.01309221809!2d69.3378!3d22.8288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sMandvi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
  { src: "/images/mandvi/mandvi1.jpg", caption: "Vijay Vilas Palace" },
  { src: "/images/mandvi/mandvi2.jpg", caption: "Mandvi Beach" },
  ],
};



