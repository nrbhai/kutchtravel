import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.
export const gandhidham: Destination = {
  slug: "gandhidham",
  title: "Gandhidham — Modern Gateway to Kutch",
  image: "/images/gandhidham/gandhidham1.jpg",
  sections: [
    {
      heading: "Overview",
      color: "#f0f8ff",
      border: "border-l-4 border-sky-500 text-sky-700",
      content: "Gandhidham is a modern planned city that serves as the commercial and transportation hub of Kutch. Named after Mahatma Gandhi, this well-organized city offers modern amenities while maintaining connections to traditional Kutchi culture and crafts."
    },
    {
      heading: "History",
      color: "#f5f0ff",
      border: "border-l-4 border-purple-500 text-purple-700",
      content: "Gandhidham was established in 1947 as a planned city to rehabilitate Sindhi refugees who migrated from Pakistan after partition. The city was designed with modern urban planning principles and has grown into a major commercial center, serving as the gateway to Kutch for many visitors."
    },
    {
      heading: "Places of Interest",
      color: "#fff8f0",
      border: "border-l-4 border-blue-500 text-purple-300",
      list: [
        "<b>Gandhidham Railway Station:</b> Major railway junction connecting Kutch to rest of India",
        "<b>Commercial Markets:</b> Modern shopping centers and traditional markets",
        "<b>Religious Sites:</b> Temples and gurudwaras reflecting diverse communities",
        "<b>Educational Institutions:</b> Schools and colleges serving the region",
        "<b>Industrial Areas:</b> Manufacturing and processing units",
        "<b>Transportation Hub:</b> Bus stands and connectivity to all parts of Kutch"
      ]
    },
    {
      heading: "Food & Crafts",
      color: "#f0fff4",
      border: "border-l-4 border-green-500 text-green-700",
      list: [
        "<b>Multi-cuisine Food:</b> Gujarati, Sindhi, Punjabi, and other regional cuisines",
        "<b>Modern Restaurants:</b> Contemporary dining options",
        "<b>Traditional Crafts:</b> Kutchi handicrafts and textiles",
        "<b>Commercial Goods:</b> Modern products and traditional items",
        "<b>Textile Markets:</b> Wholesale and retail textile trading",
        "<b>Electronics & Appliances:</b> Modern consumer goods"
      ]
    },
    {
      heading: "Nearby Destinations",
      color: "#fff0f5",
      border: "border-l-4 border-pink-500 text-pink-700",
      list: [
        "<b>Bhuj:</b> 25km - Cultural capital of Kutch",
        "<b>Anjar:</b> 15km - Ancient town with temples",
        "<b>Kandla Port:</b> 10km - Major port city",
        "<b>Adipur:</b> 5km - Sister city with additional amenities",
        "<b>White Rann:</b> 75km - Famous salt desert"
      ]
    }
  ],
  facts: [
    "Founded: 1947 as planned city",
    "Population: ~200,000",
    "Best months: October to March",
    "Famous for: Transportation hub and commercial center",
    "Railway: Major junction with connections to Mumbai, Delhi, and other cities"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.123456789!2d69.6697!3d23.2420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sGandhidham%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
    { src: "/images/gandhidham/gandhidham1.jpg", caption: "Gandhidham Railway Station" },
    { src: "/images/gandhidham/gandhidham2.jpg", caption: "Modern City Planning" },
    { src: "/images/gandhidham/gandhidham3.jpg", caption: "Commercial Market Area" },
    { src: "/images/gandhidham/gandhidham4.jpg", caption: "Religious Sites" },
    { src: "/images/gandhidham/gandhidham5.jpg", caption: "Educational Institutions" },
    { src: "/images/gandhidham/gandhidham6.jpg", caption: "Transportation Hub" }
  ]
};


