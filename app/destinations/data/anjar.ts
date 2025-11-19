import type { Destination } from "./index";

export const anjar: Destination = {
  slug: "anjar",
  title: "Anjar — History, Resilience, and Crafts",
  image: "/images/anjar/anjar.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: `🏰 <b>Anjar, Kutch: History, Resilience, and Crafts</b><br>
Anjar is a historically and culturally significant town located in the Kutch district of Gujarat. Claimed to be one of the oldest towns in Kutch, its history stretches back over 1,400 years (founded around 650 AD). It is a town defined by its resilience, having rebuilt itself after facing massive destruction from multiple major earthquakes.`,
      image: {
        src: "/images/anjar/overview.jpg",
        alt: "Overview of Anjar — History, Resilience, and Crafts"
      }
    },
    {
      heading: "Historical and Cultural Highlights",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>Ancient Heritage:</b> Founded by the Chauhan warrior Ajay Pal Chauhan (Ajepal)",
        "<b>Jesal-Toral Samadhi:</b> Shrine dedicated to the legendary 14th-century couple, Jesal and Toral, central to Kutchi folklore and a pilgrimage site",
        "<b>Temples and Shrines:</b> Ajay Pal Temple, Madhavrai Temple, Mohanrai Temple, Amba Mata's Shrine, Kalya Mahadev's Temple",
        "<b>The Clock Tower</b>"
      ],
      // ...existing code...
    },
    {
      heading: "Crafts and Cuisine",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      list: [
        "<b>Handicrafts and Metalwork:</b> Famous for artisans, especially traditional Kutchi knives, swords, and metal objects",
        "<b>Textiles:</b> Hub for Kutchi embroidery and Bandhani",
        "<b>Cuisine:</b> Renowned for local street food and delicacies, including Kutchi Dabeli, Gher, and Peda"
      ],
      image: {
        src: "/images/anjar/crafts.jpg",
        alt: "Crafts and cuisine of Anjar"
      }
    },
    {
      heading: "The 2001 Gujarat Earthquake",
      color: "bg-rose-50",
      border: "border-l-4 border-rose-600 text-rose-800",
      content: `💔 <b>The 2001 Gujarat Earthquake</b><br>
Anjar was one of the towns most severely affected by the devastating Gujarat earthquake (Magnitude 7.7) that struck on January 26, 2001.<br><b>Impact:</b> The earthquake caused large-scale devastation, particularly destroying the entirety of the "old town" district. Anjar suffered immense loss of life, including over 200 people killed at a Republic Day parade.`,
      image: {
        src: "/images/anjar/earthquake.jpg",
        alt: "Impact of the 2001 Gujarat Earthquake on Anjar"
      }
    }
  ],
  facts: [
    "Founded: ~650 AD (over 1,400 years old)",
    "Famous for: Jesal-Toral Samadhi, ancient temples, metalwork, Bandhani, Dabeli",
    "Major event: 2001 Gujarat Earthquake",
    "Best months: October to March",
    "Access: Well connected by road and rail"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.123456789!2d69.6697!3d23.2420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sAnjar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
    { src: "/images/anjar/anjar1.jpg", caption: "Jesal-Toral Samadhi" },
    { src: "/images/anjar/anjar2.jpg", caption: "Ajay Pal Temple" },
    { src: "/images/anjar/anjar3.jpg", caption: "Traditional Metalwork" },
    { src: "/images/anjar/anjar4.jpg", caption: "Bandhani and Embroidery" },
    { src: "/images/anjar/anjar5.jpg", caption: "Kutchi Dabeli Street Food" },
    { src: "/images/anjar/anjar6.jpg", caption: "Earthquake Memorial" }
  ]
};




