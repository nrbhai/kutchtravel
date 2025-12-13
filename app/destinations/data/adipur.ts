import type { Destination } from "./index";

export const adipur: Destination = {
  slug: "adipur",
  title: "Adipur — City of Memories",
  image: "/images/adipur/adipur1.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: "Adipur is a unique township in Kutch, originally established as a refugee camp. Located about 5km from Gandhidham, it serves as a residential twin city. The town is famous for its distinct culture, including a fascinating tradition of Charlie Chaplin impersonators and the sacred Gandhi Samadhi.",
      image: {
        src: "/images/adipur/adipur1.jpg",
        alt: "Adipur city landmark"
      }
    },
    {
      heading: "History & Heritage",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      content: "Founded in 1947 after the partition of India, Adipur was created to resettle Sindhi Hindu refugees from Pakistan. The settlement was the vision of Bhai Pratap Dialdas, who requested land from Mahatma Gandhi. The Maharaja of Kutch donated 15,000 acres for this purpose. The Sindhu Resettlement Corporation (SRC) was formed to manage the town's administration, making it a planned settlement with deep historical roots.",
      image: {
        src: "/images/adipur/adipur4.jpg",
        alt: "Historical significance of Adipur"
      }
    },
    {
      heading: "Culture & Institutions",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      list: [
        "<b>Gandhi Samadhi:</b> A revered memorial dedicated to Mahatma Gandhi",
        "<b>Indian Institute of Sindhology:</b> Center for preserving Sindhi language, art, and culture",
        "<b>Charlie Chaplin Connection:</b> Home to a unique club of Charlie Chaplin impersonators",
        "<b>Education Hub:</b> Hosts numerous colleges and schools managed by the Tolani/Gandhidham Collegiate Board",
        "<b>Cultural Mix:</b> A melting pot of Sindhi and Kutchi traditions"
      ],
      image: {
        src: "/images/adipur/adipur3.jpg",
        alt: "Cultural and educational center"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
        "<b><a href='/destinations/gandhidham' class='text-blue-600 hover:text-blue-800'>Gandhidham:</a></b> 5km - Commercial twin city",
        "<b><a href='/destinations/kandla' class='text-blue-600 hover:text-blue-800'>Kandla Port:</a></b> 8km - Major economic hub",
        "<b><a href='/destinations/anjar' class='text-blue-600 hover:text-blue-800'>Anjar:</a></b> 20km - Historic town renowned for metalwork",
        "<b><a href='/destinations/bhuj' class='text-blue-600 hover:text-blue-800'>Bhuj:</a></b> 50km - District headquarters"
      ],
      image: {
        src: "/images/adipur/adipur2.jpg",
        alt: "Nearby attractions"
      }
    },
    {
      heading: "Best Time to Visit",
      color: "bg-rose-50",
      border: "border-l-4 border-rose-600 text-rose-800",
      content: "The winter months from October to March are pleasant for visiting. The town comes alive during cultural festivals and events celebrating Sindhi heritage."
    },
    {
      heading: "How to Reach",
      color: "bg-teal-50",
      border: "border-l-4 border-teal-600 text-teal-800",
      list: [
        "<b>From Gandhidham:</b> 5-8 km via local roads (10-15 mins)",
        "<b>From Bhuj:</b> 50 km via NH-8A (approx. 1 hour)",
        "<b>Railway:</b> Adipur Junction and Gandhidham Railway Station nearby",
        "<b>Airport:</b> Kandla Airport (limited connectivity) or Bhuj Airport (50 km)"
      ]
    }
  ],
  facts: [
    "Established in 1947 for Sindhi refugees",
    "Vision of Bhai Pratap Dialdas",
    "Home to the Indian Institute of Sindhology",
    "Known for Gandhi Samadhi and Chaplin fans",
    "Educational hub of the region"
  ],
  mapUrl: "https://maps.google.com/maps?q=23.0722,70.0886&hl=en&z=14&output=embed",
  gallery: [
    { src: "/images/adipur/adipur1.jpg", caption: "Landmark of Adipur" },
    { src: "/images/adipur/adipur2.jpg", caption: "Town View" },
    { src: "/images/adipur/adipur3.jpg", caption: "Educational Institute" },
    { src: "/images/adipur/adipur4.jpg", caption: "Historical Site" }
  ]
};
