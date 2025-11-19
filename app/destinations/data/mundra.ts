import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.
export const mundra: Destination = {
  slug: "mundra",
    title: "Mundra — Port Town with Coastal Charm",
  image: "/images/mundra/mundra1.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: "Mundra is a bustling port town on the coast of Kutch, known for its commercial port, beautiful beaches, and traditional fishing communities. The town offers a unique blend of industrial development and coastal beauty, making it an interesting destination for visitors.",
      image: {
        src: "/images/mundra/overview.jpg",
        alt: "Overview of Mundra — Port Town with Coastal Charm"
      }
    },
    {
      heading: "History",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      content: "Mundra has been an important trading port for centuries, with historical connections to maritime trade routes. The modern Mundra Port, one of India's largest private ports, was developed in the 1990s, transforming the town into a major commercial hub while preserving its coastal heritage.",
      image: {
        src: "/images/mundra/history.jpg",
        alt: "Historical view of Mundra — Port Town with Coastal Charm"
      }
    },
    {
      heading: "Places of Interest",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>Mundra Port:</b> One of India's largest private ports",
        "<b>Mundra Beach:</b> Clean sandy beach perfect for relaxation",
        "<b>Fishing Harbor:</b> Traditional fishing community and boats",
        "<b>Coastal Drive:</b> Scenic road along the Arabian Sea",
        "<b>Industrial Complex:</b> Modern industrial development",
        "<b>Local Markets:</b> Fresh seafood and local products"
      ],
      image: {
        src: "/images/mundra/attractions.jpg",
        alt: "Main attractions in Mundra — Port Town with Coastal Charm"
      }
    },
    {
      heading: "Food & Crafts",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      list: [
        "<b>Fresh Seafood:</b> Local fish, prawns, and other marine delicacies",
        "<b>Coastal Cuisine:</b> Traditional Kutchi coastal dishes",
        "<b>Port Workers' Food:</b> Simple, hearty meals for laborers",
        "<b>Marine Crafts:</b> Items made from seashells and marine materials",
        "<b>Fishing Equipment:</b> Traditional fishing tools and nets",
        "<b>Coastal Souvenirs:</b> Marine-themed handicrafts"
      ],
      image: {
        src: "/images/mundra/crafts.jpg",
        alt: "Traditional crafts and cuisine of Mundra — Port Town with Coastal Charm"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "#fff0f5",
      border: "border-l-4 border-gray-500 text-gray-700",
      list: [
        "<b>Mandvi:</b> 30km - Historic coastal town with palaces",
        "<b>Bhuj:</b> 60km - Cultural capital of Kutch",
        "<b>Gandhidham:</b> 50km - Modern commercial city",
        "<b>Kandla Port:</b> 20km - Another major port city",
        "<b>White Rann:</b> 90km - Famous salt desert"
      ],
      image: {
        src: "/images/mundra/nearby.jpg",
        alt: "Nearby attractions around Mundra — Port Town with Coastal Charm"
      }
    }
  ],
  facts: [
    "Port Type: Private commercial port",
    "Best months: October to March",
    "Famous for: Major port and coastal beauty",
    "Industry: Shipping, fishing, and industrial development",
    "Access: Well connected by road and rail"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.123456789!2d69.6697!3d23.2420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sMundra%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
  { src: "/images/mundra/mundra1.jpg", caption: "Mundra Port Facilities" },
  { src: "/images/mundra/mundra2.jpg", caption: "Mundra Beach" },
  { src: "/images/mundra/mundra3.jpg", caption: "Fishing Harbor" },
  { src: "/images/mundra/mundra4.jpg", caption: "Coastal Drive" },
  { src: "/images/mundra/mundra5.jpg", caption: "Traditional Fishing Boats" },
  { src: "/images/mundra/mundra6.jpg", caption: "Industrial Development" }
  ]
};




