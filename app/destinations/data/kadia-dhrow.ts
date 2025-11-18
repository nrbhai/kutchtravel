import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.

export const kadiaDhrow: Destination = {
  slug: "kadia-dhrow",
  title: "Kadiya Dhro — The Grand Canyon of Gujarat",
  image: "/images/kadia-dhrow/kadia-dhrow1.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      content: `Kadiya Dhro (also known as Kaliya Dhrow or Mamai Dev Kaliya Dhrow) is a significant natural and geological site located in the Kutch district of Gujarat, India. Often called the "Grand Canyon of India" or the "Grand Canyon of Gujarat," it is famous for its dramatic and colorful rock formations created by centuries of river erosion.`,
      image: {
        src: "/images/kadia-dhrow/overview.jpg",
        alt: "Overview of Kadiya Dhro — Grand Canyon of Gujarat"
      }
    },
    {
      heading: "Key Information",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>Location:</b> Near Kodki or Ulat village, 32–40 km from Bhuj, Kutch, Gujarat",
        "<b>Geological Significance:</b> Canyon formed by the Bhaiad River and its tributaries, cutting through shale and sandstone, creating vibrant yellow, orange, and blue rock walls",
        "<b>Discovery:</b> Gained international attention after being featured in The New York Times' '52 Best Places to Visit in 2021'",
        "<b>Name Origin:</b> 'Kadiya' means 'artisan', 'Dhrow' means 'small pond' in Kutchi",
        "<b>Activities:</b> Trekking, camping, sightseeing, and photography, especially at sunrise or sunset",
        "<b>Seasonal Feature:</b> Waterfall during monsoon (June–September)",
        "<b>Access:</b> Requires 4–5 km off-road drive; use vehicles with good ground clearance or local jeeps"
      ],
      image: {
        src: "/images/kadia-dhrow/attractions.jpg",
        alt: "Key features of Kadiya Dhro — Grand Canyon of Gujarat"
      }
    },
    {
      heading: "Visitor Information & Safety",
      color: "bg-rose-50",
      border: "border-l-4 border-rose-600 text-rose-800",
      list: [
        "<b>Safety:</b> The river and ponds can be deep; crocodiles have been spotted. <b>Do not swim.</b>",
        "<b>Facilities:</b> No proper facilities nearby. Carry your own food and water."
      ],
      image: {
        src: "/images/kadia-dhrow/info.jpg",
        alt: "Visitor safety and tips for Kadiya Dhro"
      }
    }
  ],
  facts: [
    "Also known as Kaliya Dhrow or Mamai Dev Kaliya Dhrow",
    "Called the 'Grand Canyon of Gujarat'",
    "Best time to visit: October to March; monsoon for waterfall",
    "No facilities—carry essentials",
    "Internationally recognized by The New York Times (2021)"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.123456789!2d69.6697!3d23.2420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sKadia%20Dhrow%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
    { src: "/images/kadia-dhrow/kadia-dhrow1.jpg", caption: "Kadiya Dhro Canyon Walls" },
    { src: "/images/kadia-dhrow/kadia-dhrow2.jpg", caption: "Colorful Rock Formations" },
    { src: "/images/kadia-dhrow/kadia-dhrow3.jpg", caption: "Panoramic View at Sunset" },
    { src: "/images/kadia-dhrow/kadia-dhrow4.jpg", caption: "Monsoon Waterfall (seasonal)" },
    { src: "/images/kadia-dhrow/kadia-dhrow5.jpg", caption: "Trekking Trail through the Canyon" },
    { src: "/images/kadia-dhrow/kadia-dhrow6.jpg", caption: "Off-road Access to Kadiya Dhro" }
  ]
};




