import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.
export const dhordo: Destination = {
  slug: "dhordo-white-rann",
    title: "Dhordo — Gateway to the White Desert",
  image: "/images/dhordo-white-rann/dhordo-main.webp",
  sections: [
    {
      heading: "Overview",
      content: "Dhordo is the gateway to the world-famous White Rann of Kutch—a vast salt marsh that transforms into a shimmering surreal landscape under the moonlight. Once a quiet hamlet, it is now the epicenter of the Rann Utsav (Nov-Feb), hosting the magnificent Tent City. Whether you want to witness a sunrise where the salt meets the sky or experience Kutchi culture at its vibrant best, Dhordo is the place to be. It serves as both a destination and a base for exploring the northern desert region.",
      image: {
        src: "/images/dhordo-white-rann/overview.webp",
        alt: "Panoramic view of White Rann salt desert at sunset"
      }
    },
    {
        heading: "Who Should Visit",
        color: "bg-pink-50",
        border: "border-l-4 border-pink-600 text-pink-800",
        list: [
            "<b>Photographers:</b> The infinite white horizon offers unique perspective shots.",
            "<b>Families:</b> The Rann Utsav offers activities like camel cart rides, ATV rides, and cultural shows.",
            "<b>Couples:</b> Full moon nights on the white desert are incredibly romantic.",
            "<b>Culture Enthusiasts:</b> A great place to see authentic folk dance, music, and crafts in one place."
        ]
    },
    {
      heading: "How to Reach",
      color: "bg-cyan-50",
      border: "border-l-4 border-cyan-600 text-cyan-800",
      list: [
        "<b>From Bhuj (Nearest City):</b> 81km | 1.5 - 2 Hours. The road is well-maintained tar. Taxis charge ₹2500-3000 for a round trip. ST Buses are available but sparse.",
        "<b>Access & Permits:</b> A PERMIT IS MANDATORY. Obtain it online at rannpermit.com or at the Bhirandiyara check post (en route).",
        "<b>During Rann Utsav:</b> Special AC buses run from Bhuj Airport/Railway Station to Dhordo Tent City for booked guests.",
        "<b>Nearest Transport Hubs:</b> Bhuj Airport (80km) and Bhuj Railway Station (80km)."
      ],
      image: {
        src: "/images/dhordo-white-rann/transport.webp",
        alt: "Road leading to the White Rann"
      }
    },
    {
      heading: "Top Things to Do",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>White Rann Viewpoint:</b> (Evening/Morning) Walk on the salt crust. Best visited during Sunrise (6:30-7:30 AM) or Sunset (5:30-6:30 PM) for magical colors.",
        "<b>Full Moon Walk:</b> (Night) If visiting during Full Moon, the desert glows silver. It's a once-in-a-lifetime experience. Open till late night.",
        "<b>Rann Utsav Activities:</b> (Evening) Enjoy Paramotoring, ATV rides, and Rifle shooting near the Tent City.",
        "<b>Cultural Shows:</b> (8 PM - 10 PM) Free for Tent City guests, ticketed for others. Witness energetic Garba and Sufi performances.",
        "<b>Magnetic Hill (Kalo Dungar):</b> (48km away) Combine your trip with the highest point in Kutch."
      ],
      image: {
        src: "/images/dhordo-white-rann/attractions.webp",
        alt: "Tourists exploring the White Rann salt flats"
      }
    },
    {
        heading: "Local Tips & Common Mistakes",
        color: "bg-yellow-50",
        border: "border-l-4 border-yellow-600 text-yellow-800",
        list: [
            "<b>Timing:</b> Do NOT visit in the afternoon (12-4 PM). The blinding white reflection and heat are unbearable.",
            "<b>Footwear:</b> Wear sandals or washable shoes. The salt can ruin expensive leather.",
            "<b>Permits:</b> Don't forget your ID proof (physical copy recommended) at the checkpoint.",
            "<b>Hydration:</b> It's a dry desert; carry plenty of water even in winter."
        ]
    },
    {
      heading: "Best Time to Visit",
      color: "bg-teal-50",
      border: "border-l-4 border-teal-600 text-teal-800",
      content: "<strong>November to February (Winter):</strong> The BEST time. Rann Utsav is on, weather is pleasant (10-25°C), and the salt is dry and firm.\n\n<strong>October & March:</strong> Shoulder season. It can get hot during the day. Salt might be slightly wet/slushy.\n\n<strong>April to September (Summer/Monsoon):</strong> CLOSED/NOT RECOMMENDED. The Rann is flooded with water and extremely hot. The 'White' look vanishes.",
      image: {
        src: "/images/dhordo-white-rann/season.webp",
        alt: "Rann Utsav tents under the moonlight"
      }
    },
    {
      heading: "Suggested Itinerary (Day Trip)",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
          "<b>2:00 PM:</b> Depart from Bhuj. Get permit approved online beforehand.",
          "<b>3:30 PM:</b> Stop at Bhirandiyara for 'Mava' (sweet) tea.",
          "<b>4:30 PM:</b> Reach Dhordo. Park vehicle. Enter the White Rann.",
          "<b>5:30 PM:</b> Enjoy Sunset and photography on the salt flats.",
          "<b>7:00 PM:</b> Enjoy snacks/dinner at the Rann Utsav food court.",
          "<b>8:30 PM:</b> Drive back to Bhuj (Arrival by 10 PM)."
      ]
    },
    {
      heading: "Food & Culture",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      list: [
        "<b>Food:</b> The region is strictly vegetarian. Try 'Bajra no Rotlo' with 'Ringan no Olo' at village resorts nearby.",
        "<b>Crafts:</b> Dhordo and nearby Hodka are famous for 'Mud Work' (Lippan Kaam) and leather embroidery.",
        "<b>Shopping:</b> The Rann Utsav Craft Bazaar is expensive but has good variety. For better rates, buy from village artisans directly."
      ],
      image: {
        src: "/images/dhordo-white-rann/crafts.webp",
        alt: "Traditional Kutchi mud work (Lippan Art)"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "bg-slate-50",
      border: "border-l-4 border-slate-600 text-slate-800",
      list: [
        "<b><a href='/destinations/kalo-dungar' class='text-blue-500 hover:underline'>Kalo Dungar:</a></b> (50km | 1 hr) Panoramic view of the Rann from the top.",
        "<b>Hodka Village:</b> (15km) Beautiful mud resorts and local crafts.",
        "<b>Gandhi Nu Gam:</b> (30km) Handicraft village rebuilt after the earthquake."
      ],
      image: {
        src: "/images/dhordo-white-rann/nearby.webp",
        alt: "Kalo Dungar view point"
      }
    },
    {
        heading: "Frequently Asked Questions",
        color: "bg-gray-50",
        border: "border-l-4 border-gray-600 text-gray-800",
        list: [
            "<b>Can I drive my own car on the salt?</b> No, vehicles are not allowed on the salt crust. You must park at the designated area and walk or take a camel cart.",
            "<b>Is there an entry fee?</b> Yes, apart from the permit, there might be a small parking fee.",
            "<b>Are washrooms available?</b> Yes, clean portable washrooms are available near the Rann entry point during the festival.",
            "<b>Is it safe at night?</b> Yes, it is very safe and well-guarded by BSF and local police."
        ]
    }
  ],
  facts: [
    "Ideal For: Families, Photographers, Couples",
    "Best Time: Nov to Feb (Rann Utsav)",
    "Permit: MANDATORY (Apply Online)",
    "Distance: 81km from Bhuj",
    "Key Event: Full Moon Nights",
    "Stay: Tents (Dhordo) or Mud Bhungas (Hodka)",
    "Note: Closed/Flooded in Monsoon"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.123456789!2d69.6697!3d23.2420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sDhordo%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
  { src: "/images/dhordo-white-rann/dhordo1.webp", caption: "White Rann Salt Desert" },
  { src: "/images/dhordo-white-rann/dhordo2.webp", caption: "Rann Utsav Tent City" },
  { src: "/images/dhordo-white-rann/dhordo3.webp", caption: "Sunset over the White Rann" },
  { src: "/images/dhordo-white-rann/dhordo4.webp", caption: "Full Moon Night at Dhordo" },
  { src: "/images/dhordo-white-rann/dhordo5.webp", caption: "Cultural Performance" },
  { src: "/images/dhordo-white-rann/dhordo6.webp", caption: "Camel Safari in the Desert" }
  ]
};





