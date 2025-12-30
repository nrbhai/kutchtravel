import type { Destination } from "./index";

export const mundra: Destination = {
  slug: "mundra",
  title: "Mundra — The Port City",
  image: "/images/mundra/mundra1.jpg",
  sections: [
    {
      heading: "Category",
      content: "Port City"
    },
    {
      heading: "Significance",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: "Mundra is famous for housing the largest private port in India. While primarily an industrial hub, it retains the charm of an old fortified town with historic walls, temples, and a rich maritime history.",
      image: {
        src: "/images/mundra/mundra3.jpg",
        alt: "Overview of Mundra Port"
      }
    },
    {
      heading: "History",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      content: "Historically, Mundra was known for salt and spice trade. The old city walls and gates still stand as a testament to its past. Today, it represents the modern face of Kutch's economy.",
      image: {
        src: "/images/mundra/mundra2.jpg",
        alt: "Historic Mundra"
      }
    },
    {
      heading: "Places of Interest",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>Mundra Port:</b> Massive ships and cranes (requires permission for entry)",
        "<b>Shantinath Mahadev Temple:</b> A peaceful temple in the city",
        "<b>Bhadreshwar Jain Temple:</b> Located nearby, a significant pilgrimage site",
        "<b>Old City Gates:</b> Remnants of the fortification"
      ],
      image: {
        src: "/images/mundra/mundra1.jpg",
        alt: "Mundra Attractions"
      }
    },
    {
      heading: "Food & Crafts",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      list: [
        "<b>Local Markets:</b> Bustling with activity, offering local textiles and goods",
        "<b>Kutchi Dabeli:</b> Enjoy the spicy local burger",
        "<b>Seafood:</b> Fresh catch available near the coast"
      ],
      image: {
        src: "/images/mundra/mundra3.jpg",
        alt: "Mundra Food"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
        "<b><a href='/destinations/mandvi' class='text-blue-600 hover:text-blue-800'>Mandvi:</a></b> 50km - Beach town",
        "<b><a href='/destinations/bhuj' class='text-blue-600 hover:text-blue-800'>Bhuj:</a></b> 60km - District HQ",
        "<b><a href='/destinations/bhadreshwar' class='text-blue-600 hover:text-blue-800'>Bhadreshwar:</a></b> 25km - Jain Tirth"
      ],
      image: {
        src: "/images/mundra/mundra2.jpg",
        alt: "Nearby Places"
      }
    },
    {
      heading: "How to Reach",
      color: "bg-cyan-50",
      border: "border-l-4 border-cyan-500 text-cyan-800",
      list: [
        "<b>By Road:</b> 1 hour drive from Bhuj. Good highways connect it to Mandvi and Gandhidham.",
        "<b>By Air:</b> Nearest airport is Bhuj (60km) or Kandla (50km).",
        "<b>By Rail:</b> Gandhidham is the nearest major railway junction."
      ],
      image: {
        src: "/images/mundra/mundra3.jpg",
        alt: "Transport"
      }
    },
    {
      heading: "Travel Information",
      color: "bg-rose-50",
      border: "border-l-4 border-rose-500 text-rose-800",
      list: [
        "<b>Industrial Zone:</b> Some areas are restricted due to port activities.",
        "<b>Accommodaton:</b> Several business hotels are available due to corporate traffic.",
        "<b>Connectivity:</b> Excellent road and mobile network coverage."
      ],
      image: {
        src: "/images/mundra/mundra1.jpg",
        alt: "Travel Info"
      }
    },
    {
      heading: "Best Time to Visit",
      color: "bg-teal-50",
      border: "border-l-4 border-teal-500 text-teal-800",
      content: "October to March. The weather is pleasant for exploring the coast and town. Summers are humid.",
      image: {
        src: "/images/mundra/mundra2.jpg",
        alt: "Best Season"
      }
    },
    {
      heading: "Accommodation & Local Tips",
      color: "bg-lime-50",
      border: "border-l-4 border-lime-500 text-lime-800",
      list: [
        "<b>Hotels:</b> Fern Residency, Beetle Smartotels, and other business hotels.",
        "<b>Tip:</b> Visit Bhadreshwar temple on the way."
      ],
      image: {
        src: "/images/mundra/mundra3.jpg",
        alt: "Hotels"
      }
    }
  ],
  facts: [
    "Famous For: Largest Private Port",
    "Population: Growing industrial city",
    "History: Ancient spice trade center",
    "Location: Gulf of Kutch",
    "Vibe: Industrial & Historic mix"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14787.9!2d69.7!3d22.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AMundra!5e0!3m2!1sen!2sin",
  gallery: [
    { src: "/images/mundra/mundra1.jpg", caption: "City Gate of Mundra" },
    { src: "/images/mundra/mundra2.jpg", caption: "Historic Architecture" },
    { src: "/images/mundra/mundra3.jpg", caption: "Coastal View" }
  ]
};
