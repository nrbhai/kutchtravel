import type { Destination } from "./index";

export const destination: Destination = {
  slug: "destination-slug",
  title: "Destination Title — Subtitle",
  image: "/images/destination-slug/main.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      image: {
        src: "/images/destination-slug/overview.jpg",
        alt: "Overview image description"
      },
      content: "Main overview content here..."
    },
    {
      heading: "History",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      image: {
        src: "/images/destination-slug/history.jpg",
        alt: "Historical image description"
      },
      content: "Historical content here..."
    },
    {
      heading: "Places of Interest",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      image: {
        src: "/images/destination-slug/attractions.jpg",
        alt: "Key attractions image"
      },
      list: [
        "<b>Place 1:</b> Description of place 1",
        "<b>Place 2:</b> Description of place 2",
        "<b>Place 3:</b> Description of place 3"
      ]
    },
    {
      heading: "Food & Crafts",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      image: {
        src: "/images/destination-slug/culture.jpg",
        alt: "Local culture and crafts"
      },
      list: [
        "<b>Item 1:</b> Description of food/craft 1",
        "<b>Item 2:</b> Description of food/craft 2",
        "<b>Item 3:</b> Description of food/craft 3"
      ]
    },
    {
      heading: "Nearby Destinations",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
        "<b><a href='/places/place-1' class='text-blue-400 hover:text-blue-300'>Place 1:</a></b> Description and distance",
        "<b><a href='/places/place-2' class='text-blue-400 hover:text-blue-300'>Place 2:</a></b> Description and distance"
      ],
      image: {
        src: "/images/destination-slug/nearby.jpg",
        alt: "Nearby attractions"
      }
    },
    {
      heading: "How to Reach",
      color: "bg-cyan-50",
      border: "border-l-4 border-cyan-600 text-cyan-800",
      image: {
        src: "/images/destination-slug/transport.jpg",
        alt: "Transportation options"
      },
      list: [
        "<b>By Air:</b> Air connectivity details",
        "<b>By Rail:</b> Rail connectivity details",
        "<b>By Road:</b> Road connectivity details",
        "<b>Local Transport:</b> Local transport options"
      ]
    }
  ],
  facts: [
    "Key fact 1",
    "Key fact 2",
    "Key fact 3"
  ],
  mapUrl: "GOOGLE_MAPS_EMBED_URL",
  gallery: [
    {
      src: "/images/destination-slug/gallery1.jpg",
      caption: "Gallery image 1 description"
    },
    {
      src: "/images/destination-slug/gallery2.jpg",
      caption: "Gallery image 2 description"
    }
  ]
};