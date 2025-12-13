import type { Destination } from "./index";

export const dholavira: Destination = {
  slug: "dholavira",
  title: "Dholavira — Ancient Harappan Metropolis",
  image: "/images/dholavira/dholavira.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      content: "Dholavira is one of the most significant archaeological sites of the Indus Valley Civilization (Harappan Civilization). Located on Khadir Bet island in the Rann of Kutch, this UNESCO World Heritage site offers a fascinating glimpse into advanced urban planning, water conservation systems, and the lifestyle of an ancient civilization that thrived over 4,500 years ago.",
      image: {
        src: "/images/dholavira/dholavira-1.jpg",
        alt: "Overview of Dholavira Archaeological Site"
      }
    },
    {
      heading: "History",
      color: "bg-stone-50",
      border: "border-l-4 border-stone-600 text-stone-800",
      content: "Discovered in 1968 by archaeologist J.P. Joshi, Dholavira is the fifth largest Harappan site in the Indian subcontinent. It was occupied from c. 2650 BCE to 1450 BCE. The city is distinguished by its unique water management system, multi-layered defensive mechanisms, and extensive use of stone in construction.",
      image: {
        src: "/images/dholavira/dholavira-3.jpg",
        alt: "Ancient ruins of Dholavira"
      }
    },
    {
      heading: "Key Attractions",
      color: "bg-orange-50",
      border: "border-l-4 border-orange-600 text-orange-800",
      list: [
        "<b>The Citadel:</b> The fortified upper town where the rulers likely lived",
        "<b>Water Reservoirs:</b> Sophisticated water conservation system with 16 reservoirs",
        "<b>The Signboard:</b> One of the longest Indus script inscriptions found",
        "<b>Middle & Lower Town:</b> Well-planned residential areas for officials and commoners",
        "<b>Archaeological Museum:</b> Houses artifacts like seals, beads, and pottery found at the site",
        "<b>Fossil Park:</b> Nearby park showcasing wood fossils from the Jurassic era"
      ],
      image: {
        src: "/images/dholavira/dholavira.jpg",
        alt: "Water reservoirs at Dholavira"
      }
    },
    {
      heading: "Travel Information",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      list: [
        "<b>Distance from Bhuj:</b> ~215 km (4-5 hours drive)",
        "<b>Best Time to Visit:</b> October to March (Winter)",
        "<b>Entry Fee:</b> Nominal fee for Indian and foreign tourists",
        "<b>Guide:</b> Local guides are available and recommended",
        "<b>Road:</b> Connected via the new 'Road to Heaven' (Khavda-Dholavira road)"
      ],
      image: {
        src: "/images/dholavira/dholavira-1.jpg",
        alt: "Road to Dholavira"
      }
    }
  ],
  facts: [
    "UNESCO World Heritage Site (declared in 2021)",
    "One of the 5 largest Harappan sites",
    "Known for: Advanced Water Management System",
    "Location: Khadir Bet, Great Rann of Kutch",
    "Age: ~4,500 years old"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0!2d70.2!3d23.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3951633333333333%3A0x3333333333333333!2sDholavira!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
  gallery: [
    { src: "/images/dholavira/dholavira.jpg", caption: "The Grand Reservoirs" },
    { src: "/images/dholavira/dholavira-1.jpg", caption: "The Northern Gate" },
    { src: "/images/dholavira/dholavira-3.jpg", caption: "Indus Script Signboard" },
    { src: "/images/dholavira/dholavira.jpg", caption: "Circular Structures" },
    { src: "/images/dholavira/dholavira-1.jpg", caption: "Archaeological Museum" },
    { src: "/images/dholavira/dholavira-3.jpg", caption: "Road to Heaven Landscape" }
  ]
};
