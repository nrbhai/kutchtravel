import type { Destination } from "./index";

export const kandla: Destination = {
  slug: "kandla",
  title: "Kandla (Deendayal Port) — Major Seaport",
  image: "/images/kandla/kandla1.png",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: "Kandla, officially known as Deendayal Port, is a major seaport located in the Kutch district of Gujarat, near Gandhidham. Situated on the Kandla Creek, it is one of India's principal ports on the western coast and the largest port by volume of cargo handled. It serves as a vital gateway for international trade, particularly for Northern India.",
      image: {
        src: "/images/kandla/kandla1.jpg",
        alt: "Kandla Port overview"
      }
    },
    {
      heading: "History",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      content: "Constructed in the 1950s following India's independence, Kandla Port was established to serve western India after the Port of Karachi went to Pakistan during partition. It was renamed Deendayal Port in 2017 under the Indian Ports Act, 1908. The port has consistently been India's largest by cargo volume and hosts the first Special Economic Zone (SEZ) in India and Asia, established in 1965.",
      image: {
        src: "/images/kandla/kandla4.jpg",
        alt: "Historical view of Kandla"
      }
    },
    {
      heading: "Port Operations",
      color: "bg-cyan-50",
      border: "border-l-4 border-cyan-600 text-cyan-800",
      list: [
        "<b>Major Cargo Hub:</b> India's largest port by volume, handling over 132 million tonnes annually",
        "<b>Diverse Cargo:</b> Handles petroleum, chemicals, iron, steel, salt, textiles, and grains",
        "<b>Strategic Location:</b> Natural tidal harbor well-protected from monsoon waves",
        "<b>SEZ:</b> Home to Kandla Port Special Economic Zone (KASEZ), the largest multi-product SEZ",
        "<b>Connectivity:</b> Connected to deep water by a dredged channel"
      ],
      image: {
        src: "/images/kandla/kandla2.jpg",
        alt: "Container terminal operations"
      }
    },
    {
      heading: "Economic Impact",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      content: "Deendayal Port is a cornerstone of the regional and national economy. It facilitates massive volumes of trade, supporting industries across Northern and Western India. The port's activity drives employment and business opportunities in the nearby cities of Gandhidham and Adipur.",
      image: {
        src: "/images/kandla/kandla3.jpg",
        alt: "Economic activity at the port"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      list: [
        "<b><a href='/destinations/gandhidham' class='text-blue-600 hover:text-blue-800'>Gandhidham:</a></b> 10km - The main commercial and residential hub serving the port",
        "<b><a href='/destinations/adipur' class='text-blue-600 hover:text-blue-800'>Adipur:</a></b> 8km - Residential sister city",
        "<b><a href='/destinations/anjar' class='text-blue-600 hover:text-blue-800'>Anjar:</a></b> 25km - Historical town known for its culture",
        "<b><a href='/destinations/bhuj' class='text-blue-600 hover:text-blue-800'>Bhuj:</a></b> 70km - District headquarters and major tourist center"
      ],
      image: {
        src: "/images/kandla/kandla5.jpg",
        alt: "Nearby attractions"
      }
    },
    {
      heading: "How to Reach",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
        "<b>From Gandhidham:</b> 10km via NH-8A (15-20 min)",
        "<b>From Bhuj:</b> 70km via NH-8A (1.5 hours)",
        "<b>From Ahmedabad:</b> 350km via NH-27 and NH-8A",
        "<b>Railway:</b> Gandhidham Railway Station is the nearest major railhead",
        "<b>Airport:</b> Bhuj Airport (70km) or Kandla Airport (limited flights)"
      ]
    },
    {
      heading: "Visitor Information",
      color: "bg-teal-50",
      border: "border-l-4 border-teal-600 text-teal-800",
      list: [
        "<b>Restricted Access:</b> Port areas are restricted; permissions required for entry",
        "<b>Business Visits:</b> Common for trade and logistics professionals",
        "<b>Accommodation:</b> Hotels available in Gandhidham",
        "<b>Sightseeing:</b> Limited tourist access inside port; view from outside designated areas"
      ]
    }
  ],
  facts: [
    "Officially named Deendayal Port",
    "India's largest port by cargo volume",
    "Established in 1950s to replace Karachi Port",
    "Hosts India's first Special Economic Zone (KASEZ)",
    "Major hub for petroleum, chemicals, and grains"
  ],
  mapUrl: "https://maps.google.com/maps?q=23.0027,70.2186&hl=en&z=14&output=embed",
  gallery: [
    { src: "/images/kandla/kandla1.jpg", caption: "Deendayal Port Overview" },
    { src: "/images/kandla/kandla2.jpg", caption: "Cargo Handling Operations" },
    { src: "/images/kandla/kandla3.jpg", caption: "Port Infrastructure" },
    { src: "/images/kandla/kandla4.jpg", caption: "Industrial Activity" },
    { src: "/images/kandla/kandla5.jpg", caption: "Port Area" }
  ]
};
