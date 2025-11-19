import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.
export const roadToHeaven: Destination = {
  slug: "road-to-heaven",
    title: "Road to Heaven — The Famous Straight Highway",
  image: "/images/road-to-heaven/road-to-heaven1.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: "The Road to Heaven is one of India's most photogenic highways, a perfectly straight blacktop that cuts through the White Rann salt flats. This iconic stretch near Dhordo has earned its celestial name for the surreal experience of driving through endless white desert with nothing but sky above.",
      image: {
        src: "/images/road-to-heaven/overview.jpg",
        alt: "Overview of Road to Heaven — The Famous Straight Highway"
      }
    },
    {
      heading: "History",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      content: "This highway was built as part of the infrastructure development for Rann Utsav and to connect Dhordo with other parts of Kutch. The road's unique location through the salt flats and its perfect straightness have made it a popular destination for photographers and travelers seeking unique experiences.",
      image: {
        src: "/images/road-to-heaven/history.jpg",
        alt: "Historical view of Road to Heaven — The Famous Straight Highway"
      }
    },
    {
      heading: "Places of Interest",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>Straight Highway:</b> Perfectly straight road through salt flats",
        "<b>Photography Spot:</b> Iconic location for landscape photography",
        "<b>Sunset Views:</b> Spectacular sunsets over the white desert",
        "<b>Reflection Photography:</b> Perfect reflections during wet season",
        "<b>Drone Photography:</b> Popular spot for aerial photography",
        "<b>Desert Experience:</b> Unique driving experience through salt flats"
      ],
      image: {
        src: "/images/road-to-heaven/attractions.jpg",
        alt: "Main attractions in Road to Heaven — The Famous Straight Highway"
      }
    },
    {
      heading: "Food & Crafts",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      list: [
        "<b>Basic Refreshments:</b> Simple snacks and drinks available",
        "<b>Photography Services:</b> Local guides offering photo services",
        "<b>Desert Souvenirs:</b> Salt crystals and desert-themed items",
        "<b>Traditional Crafts:</b> Handmade items from nearby villages",
        "<b>Photography Equipment:</b: Basic camera accessories and guides"
      ],
      image: {
        src: "/images/road-to-heaven/crafts.jpg",
        alt: "Traditional crafts and cuisine of Road to Heaven — The Famous Straight Highway"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "#fff0f5",
      border: "border-l-4 border-gray-500 text-gray-700",
      list: [
        "<b>Dhordo:</b> 5km - Gateway to White Rann",
        "<b>Kalo Dungar:</b> 30km - Highest point in Kutch",
        "<b>Dholavira:</b> 120km - Ancient Harappan site",
        "<b>Bhuj:</b> 80km - Cultural capital of Kutch",
        "<b>White Rann:</b> 2km - Famous salt desert"
      ],
      image: {
        src: "/images/road-to-heaven/nearby.jpg",
        alt: "Nearby attractions around Road to Heaven — The Famous Straight Highway"
      }
    }
  ],
  facts: [
    "Road Length: Approximately 15km straight stretch",
    "Best months: October to March",
    "Famous for: Straight highway through salt flats",
    "Photography: Most photogenic road in India",
    "Access: Easy road access, popular tourist destination"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.123456789!2d69.6697!3d23.2420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sRoad%20to%20Heaven%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
  { src: "/images/road-to-heaven/road-to-heaven1.jpg", caption: "Straight Highway Through Salt Flats" },
  { src: "/images/road-to-heaven/road-to-heaven2.jpg", caption: "Sunset Photography" },
  { src: "/images/road-to-heaven/road-to-heaven3.jpg", caption: "Reflection Photography" },
  { src: "/images/road-to-heaven/road-to-heaven4.jpg", caption: "Drone Aerial View" },
  { src: "/images/road-to-heaven/road-to-heaven5.jpg", caption: "Desert Driving Experience" },
  { src: "/images/road-to-heaven/road-to-heaven6.jpg", caption: "Iconic Road Photography" }
  ]
};




