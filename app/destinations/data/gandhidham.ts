import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.
export const gandhidham: Destination = {
  slug: "gandhidham",
    title: "Gandhidham — Modern Gateway to Kutch",
  image: "/images/gandhidham/gandhidham-main.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: "Gandhidham is a modern planned city that serves as the commercial and transportation hub of Kutch. Named after Mahatma Gandhi, this well-organized city offers modern amenities while maintaining connections to traditional Kutchi culture and crafts.",
      image: {
        src: "/images/gandhidham/overview.jpg",
        alt: "Overview of Gandhidham — Modern Gateway to Kutch"
      }
    },
    {
      heading: "History",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      content: "Gandhidham was established in 1947 as a planned city to rehabilitate Sindhi refugees who migrated from Pakistan after partition. The city was designed with modern urban planning principles and has grown into a major commercial center, serving as the gateway to Kutch for many visitors.",
      image: {
        src: "/images/gandhidham/history.jpg",
        alt: "Historical view of Gandhidham — Modern Gateway to Kutch"
      }
    },
    {
      heading: "Places of Interest",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>Gandhidham Railway Station:</b> Major railway junction connecting Kutch to rest of India",
        "<b>Commercial Markets:</b> Modern shopping centers and traditional markets",
        "<b>Religious Sites:</b> Temples and gurudwaras reflecting diverse communities",
        "<b>Educational Institutions:</b> Schools and colleges serving the region",
        "<b>Industrial Areas:</b> Manufacturing and processing units",
        "<b>Transportation Hub:</b> Bus stands and connectivity to all parts of Kutch"
      ],
      image: {
        src: "/images/gandhidham/attractions.jpg",
        alt: "Main attractions in Gandhidham — Modern Gateway to Kutch"
      }
    },
    {
      heading: "Food & Crafts",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      list: [
        "<b>Multi-cuisine Food:</b> Gujarati, Sindhi, Punjabi, and other regional cuisines",
        "<b>Modern Restaurants:</b> Contemporary dining options",
        "<b>Traditional Crafts:</b> Kutchi handicrafts and textiles",
        "<b>Commercial Goods:</b> Modern products and traditional items",
        "<b>Textile Markets:</b> Wholesale and retail textile trading",
        "<b>Electronics & Appliances:</b> Modern consumer goods"
      ],
      image: {
        src: "/images/gandhidham/crafts.jpg",
        alt: "Traditional crafts and cuisine of Gandhidham — Modern Gateway to Kutch"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
        "<b><a href='/places/bhuj' class='text-blue-400 hover:text-blue-300'>Bhuj:</a></b> 60km - Cultural capital of Kutch",
        "<b><a href='/places/anjar' class='text-blue-400 hover:text-blue-300'>Anjar:</a></b> 15km - Ancient town with temples",
        "<b><a href='/places/kandla' class='text-blue-400 hover:text-blue-300'>Kandla Port:</a></b> 10km - Major port city",
        "<b><a href='/places/adipur' class='text-blue-400 hover:text-blue-300'>Adipur:</a></b> 5km - Sister city with additional amenities",
        "<b><a href='/places/white-rann' class='text-blue-400 hover:text-blue-300'>White Rann:</a></b> 140km - Famous salt desert"
      ],
      image: {
        src: "/images/gandhidham/nearby.jpg",
        alt: "Nearby attractions around Gandhidham — Modern Gateway to Kutch"
      }
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
    { src: "/images/gandhidham/gandhidham-main.jpg", caption: "Gandhidham Railway Station" },
    { src: "/images/gandhidham/gandhidham2.jpg", caption: "Modern City Planning" },
    { src: "/images/gandhidham/gandhidham3.jpg", caption: "Commercial Market Area" },
    { src: "/images/gandhidham/gandhidham4.jpg", caption: "Religious Sites" },
    { src: "/images/gandhidham/gandhidham5.jpg", caption: "Educational Institutions" },
    { src: "/images/gandhidham/gandhidham6.jpg", caption: "Transportation Hub" }
  ]
};




