import type { Destination } from "./index";

export const anjar: Destination = {
  slug: "anjar",
  title: "Anjar — The Oldest Town of Kutch",
  image: "/images/anjar/anjar1.jpg",
  sections: [
    {
      heading: "Category",
      content: "Historic Town"
    },
    {
      heading: "Significance",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: "Anjar is the oldest capital of Kutch, founded in 650 AD. It is famous for the legendary tale of Jesal and Toral, whose samadhis (shrines) are a major pilgrimage site. The town is also renowned for its unique metal handicrafts (knives and nutcrackers) and textile traditions.",
      image: {
        src: "/images/anjar/anjar4.jpg", // overview
        alt: "Overview of Anjar Town"
      }
    },
    {
      heading: "Jesal-Toral Legend",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      content: "The shrines of Jesal Jadeja (a reformed outlaw) and Sati Toral (the queen who reformed him) are the heart of Anjar. It is believed that their two graves are slowly inching closer to each other, and when they meet, the world will end (Pralay).",
      image: {
        src: "/images/anjar/anjar2.jpg", 
        alt: "Jesal Toral Samadhi Shrine"
      }
    },
    {
      heading: "Places of Interest",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>Jesal Toral Samadhi:</b> The main spiritual attraction",
        "<b>Bileshwar Mahadev Temple:</b> An ancient Shiva temple",
        "<b>Market Place:</b> Famous for Anjar's swords, knives, and printed textiles",
        "<b>Vira Balak Smarak:</b> A memorial dedicated to 185 schoolchildren who died in the 2001 earthquake"
      ],
      image: {
        src: "/images/anjar/anjar6.jpg", // earthquake memorial
        alt: "Vira Balak Smarak"
      }
    },
    {
      heading: "Food & Crafts",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      list: [
        "<b>Metalwork:</b> Anjar is famous for nutcrackers (sudi) and knives decorated with brass work",
        "<b>Block Printing:</b> A distinct style of Batik and block printing is found here",
        "<b>Ghughra:</b> A sweet or savory snack popular in the local market"
      ],
      image: {
        src: "/images/anjar/anjar3.jpg",
        alt: "Anjar Crafts"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
        "<b><a href='/destinations/gandhidham' class='text-blue-600 hover:text-blue-800'>Gandhidham:</a></b> 15km - Modern commercial hub",
        "<b><a href='/destinations/bhuj' class='text-blue-600 hover:text-blue-800'>Bhuj:</a></b> 40km - District HQ",
        "<b><a href='/destinations/bhadreshwar' class='text-blue-600 hover:text-blue-800'>Bhadreshwar:</a></b> 25km - Jain Temple"
      ],
      image: {
        src: "/images/anjar/anjar7.jpg", // aerial/nearby
        alt: "Nearby Places"
      }
    },
    {
      heading: "How to Reach",
      color: "bg-cyan-50",
      border: "border-l-4 border-cyan-500 text-cyan-800",
      list: [
        "<b>By Road:</b> 40km from Bhuj and 15km from Gandhidham. Frequent buses and taxes available.",
        "<b>By Rail:</b> Anjar has its own railway station, though Gandhidham (15km) has more connections.",
        "<b>By Air:</b> Nearest airport is Kandla (20km) or Bhuj (40km)."
      ],
      image: {
        src: "/images/anjar/anjar1.jpg",
        alt: "Transport"
      }
    },
    {
      heading: "Travel Information",
      color: "bg-rose-50",
      border: "border-l-4 border-rose-500 text-rose-800",
      list: [
        "<b>Timings:</b> Jesal Toral shrine is open from 6 AM to 8 PM.",
        "<b>Shopping:</b> Markets close on Sunday afternoons or Mondays in some areas.",
        "<b>Vibe:</b> Historic, busy market town."
      ],
      image: {
        src: "/images/anjar/anjar4.jpg",
        alt: "Info"
      }
    },
    {
      heading: "Best Time to Visit",
      color: "bg-teal-50",
      border: "border-l-4 border-teal-500 text-teal-800",
      content: "Fairly good year-round, but October to March is pleasant. The Jesal Toral fair (Mela) is a significant event to witness.",
      image: {
        src: "/images/anjar/anjar2.jpg",
        alt: "Best Season"
      }
    },
    {
      heading: "Accommodation & Local Tips",
      color: "bg-lime-50",
      border: "border-l-4 border-lime-500 text-lime-800",
      list: [
        "<b>Stay:</b> Gandhidham (20 mins away) has better hotels than Anjar itself.",
        "<b>Buy:</b> Buy a traditional Anjar knife or Sudi as a souvenir."
      ],
      image: {
        src: "/images/anjar/anjar5.jpg",
        alt: "Accommodation"
      }
    }
  ],
  facts: [
    "Founded: 650 AD",
    "Fame: Jesal-Toral Shrine",
    "Craft: Knife Making & Batik",
    "Event: Jesal Toral Fair",
    "Location: Near Gandhidham"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14777!2d70.0!3d23.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AAnjar!5e0!3m2!1sen!2sin",
  gallery: [
    { src: "/images/anjar/anjar1.jpg", caption: "Anjar Town Gate" },
    { src: "/images/anjar/anjar2.jpg", caption: "Jesal Toral Shrine" },
    { src: "/images/anjar/anjar3.jpg", caption: "Traditional Handicrafts" },
    { src: "/images/anjar/anjar4.jpg", caption: "Market Streets" },
    { src: "/images/anjar/anjar5.jpg", caption: "Historic Architecture" },
    { src: "/images/anjar/anjar6.jpg", caption: "Vira Balak Smarak" }
  ]
};
