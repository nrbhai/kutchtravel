import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.
export const anjar: Destination = {
  slug: "anjar",
  title: "Anjar — Ancient Town of Temples and Textiles",
  image: "/images/anjar/anjar1.jpg",
  sections: [
    {
      heading: "Overview",
      color: "#f0f8ff",
      border: "border-l-4 border-sky-500 text-sky-700",
      content: "Anjar is one of the oldest towns in Kutch, known for its rich cultural heritage, ancient temples, and traditional textile industry. This historic town offers a glimpse into authentic Kutchi life, with narrow lanes filled with temples, traditional houses, and bustling markets."
    },
    {
      heading: "History",
      color: "#f5f0ff",
      border: "border-l-4 border-purple-500 text-purple-700",
      content: "Anjar was founded in the 7th century and served as an important trading center. The town was ruled by various dynasties including the Jadejas, and was known for its strategic location on trade routes. The 2001 earthquake caused significant damage, but the town has been rebuilt while preserving its cultural heritage."
    },
    {
      heading: "Places of Interest",
      color: "#fff8f0",
      border: "border-l-4 border-blue-500 text-purple-300",
      list: [
        "<b>Swaminarayan Temple:</b> Beautiful white marble temple complex",
        "<b>Jesal Toral Samadhi:</b> Sacred shrine dedicated to legendary lovers",
        "<b>Anjar Fort:</b> Historic fort with ancient architecture",
        "<b>Local Markets:</b> Traditional bazaars selling textiles and crafts",
        "<b>Ancient Temples:</b> Several historic temples throughout the town",
        "<b>Traditional Houses:</b> Old Kutchi architecture and design"
      ]
    },
    {
      heading: "Food & Crafts",
      color: "#f0fff4",
      border: "border-l-4 border-green-500 text-green-700",
      list: [
        "<b>Local Food:</b> Traditional Gujarati thali, Kutchi Dabeli, and local sweets",
        "<b>Textile Industry:</b> Traditional weaving and textile production",
        "<b>Bandhani Work:</b> Traditional tie-dye textiles",
        "<b>Embroidery:</b> Intricate mirror work and traditional patterns",
        "<b>Wooden Crafts:</b> Traditional furniture and decorative items",
        "<b>Silver Jewelry:</b> Traditional Kutchi silver ornaments"
      ]
    },
    {
      heading: "Nearby Destinations",
      color: "#fff0f5",
      border: "border-l-4 border-pink-500 text-pink-700",
      list: [
        "<b>Bhuj:</b> 40km - Cultural capital of Kutch",
        "<b>Gandhidham:</b> 15km - Modern city and railway junction",
        "<b>Kandla Port:</b> 25km - Major port city",
        "<b>Mandvi:</b> 80km - Coastal town with beaches",
        "<b>White Rann:</b> 100km - Famous salt desert"
      ]
    }
  ],
  facts: [
    "Founded: 7th century",
    "Population: ~50,000",
    "Best months: October to March",
    "Famous for: Ancient temples and textile industry",
    "Access: Well connected by road and rail"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.123456789!2d69.6697!3d23.2420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sAnjar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
  { src: "/images/anjar/anjar1.jpg", caption: "Swaminarayan Temple Complex" },
  { src: "/images/anjar/anjar2.jpg", caption: "Jesal Toral Samadhi" },
  { src: "/images/anjar/anjar3.jpg", caption: "Traditional Anjar Market" },
  { src: "/images/anjar/anjar4.jpg", caption: "Ancient Temple Architecture" },
  { src: "/images/anjar/anjar5.jpg", caption: "Traditional Kutchi Houses" },
  { src: "/images/anjar/anjar6.jpg", caption: "Textile Weaving Workshop" }
  ]
};


