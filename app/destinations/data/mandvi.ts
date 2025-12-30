import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.
export const mandvi: Destination = {
  slug: "mandvi",
    title: "Mandvi — Where the Desert Meets the Sea",
  image: "/images/mandvi/mandvi1.webp",
  sections: [
    {
      heading: "Overview",
      content: "Mandvi is the only premier beach destination in Kutch, offering a perfect relaxed break from the arid desert landscape. Once a major port for the spice trade, it is now a popular day-trip and weekend getaway from Bhuj (1 hour away). Known for its pristine beaches, the royal Vijay Vilas Palace, and a 400-year-old shipbuilding tradition, Mandvi is where history meets the Arabian Sea. A typical visit lasts 1 to 2 days, making it ideal for unwinding after exploring the White Rann.",
      image: {
        src: "/images/mandvi/overview.webp",
        alt: "Mandvi Beach and Vijay Vilas Palace - The Jewel of Kutch"
      }
    },
    {
        heading: "Who Should Visit",
        color: "bg-pink-50",
        border: "border-l-4 border-pink-600 text-pink-800",
        list: [
            "<b>Families:</b> Safe beaches with camel rides and water sports keep kids entertained.",
            "<b>Couples:</b> Romantic sunsets at the Wind Farm Beach and royal palace vibes.",
            "<b>History Buffs:</b> The living heritage of the Dhow shipbuilding yard is fascinating.",
            "<b>Relaxed Travelers:</b> Anyone looking to escape the desert heat and chill by the ocean."
        ]
    },
    {
      heading: "How to Reach",
      color: "bg-cyan-50",
      border: "border-l-4 border-cyan-600 text-cyan-800",
      list: [
        "<b>From Bhuj (Most Popular):</b> 58km | 1 hr 15 mins. The road is excellent (NH 341). State buses run every 30 mins, but a private taxi (₹1500-2000 return) allows you to stop at places en route.",
        "<b>From Gandhidham:</b> 100km | 2 hours. Good for those arriving by train to Gandhidham.",
        "<b>By Air/Train:</b> Nearest airport and railway station are in Bhuj. No direct flights/trains to Mandvi.",
        "<b>Local Transport:</b> Auto-rickshaws are the best way to get around Mandvi town (₹50-100 per ride)."
      ],
      image: {
        src: "/images/mandvi/transport.webp",
        alt: "Road to Mandvi - Scenic coastal drive"
      }
    },
    {
      heading: "Top Things to Do",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      list: [
        "<b>Vijay Vilas Palace:</b> (1-2 Hours) Visit in the afternoon (3 PM - 5 PM) to see the royal grandeur. Famous for 'Hum Dil De Chuke Sanam' shoot. Entry: ₹50. Phone cameras allowed.",
        "<b>Mandvi Wind Farm Beach:</b> (Evening) The best sunset point. Enjoy camel rides, horse rides, and street food. It gets crowded on weekends, so go a bit further down for peace.",
        "<b>Shipbuilding Yard:</b> (30-45 Mins) Visit in the morning. Watch craftsmen build massive wooden ships by hand on the banks of Rukmavati River. Free to watch from the bridge.",
        "<b>72 Jinalaya:</b> (45 Mins) A stunning Jain temple complex 10km from town. Best visited on the way to/from Mundra. Peaceful and photogenic architecture.",
        "<b>Shyamji Krishna Varma Memorial:</b> (1 Hour) Interactive museum dedicated to the freedom fighter. Great for history lovers. Closed on Thursdays."
      ],
      image: {
        src: "/images/mandvi/attractions.webp",
        alt: "Tourists enjoying Mandvi Beach"
      }
    },
    {
        heading: "Local Tips & Common Mistakes",
        color: "bg-yellow-50",
        border: "border-l-4 border-yellow-600 text-yellow-800",
        list: [
            "<b>Timing:</b> Don't visit the beach at noon (12-3 PM); it's too hot. Mornings and evenings are perfect.",
            "<b>Palace:</b> The Vijay Vilas Palace closes strictly at 6 PM. Arrive by 4:30 PM to enjoy it fully.",
            "<b>Swimming:</b> Mandvi beaches are generally safe, but avoid swimming near the rocky patches. The wind farm beach has strong breezes.",
            "<b>Food:</b> Don't leave without eating Dabeli at a local street stall (e.g., Joshi's) - it tastes different here!"
        ]
    },
    {
      heading: "Best Time to Visit",
      color: "bg-teal-50",
      border: "border-l-4 border-teal-600 text-teal-800",
      content: "<strong>October to March (Winter):</strong> Best time. Days are pleasant (20-30°C) and evenings are cool. Perfect for beach activities.\n\n<strong>April to June (Summer):</strong> Hot and humid. Day temps hit 35-40°C. Good for evening beach walks but avoid day sightseeing.\n\n<strong>July to September (Monsoon):</strong> Mandvi looks beautiful with green surroundings and dramatic clouds, but swimming is restricted due to rough seas.",
      image: {
        src: "/images/mandvi/season.webp",
        alt: "Mandvi beach during winter sunset"
      }
    },
    {
      heading: "Suggested Itinerary (1 Day)",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
          "<b>10:00 AM:</b> Arrive in Mandvi. Visit the Shipbuilding Yard.",
          "<b>11:30 AM:</b> Explore Shyamji Krishna Varma Memorial.",
          "<b>01:00 PM:</b> Authentic Gujarati Thali lunch at Osho or a local dining hall.",
          "<b>03:30 PM:</b> Head to Vijay Vilas Palace. Explore the interiors and royal grounds.",
          "<b>05:30 PM:</b> Reach Wind Farm Beach. Enjoy water sports, sunset, and Dabeli for a snack.",
          "<b>07:30 PM:</b> Return to Bhuj."
      ]
    },
    {
      heading: "Food & Culture",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      list: [
        "<b>Dabeli:</b> Mandvi is the BIRTHPLACE of Dabeli. Try the authentic version which is less sweet and more spicy than elsewhere.",
        "<b>Kutchi Thali:</b> Unlimited vegetarian meal. Try 'Rotla' (millet bread) with 'Olo' (roasted eggplant).",
        "<b>Bandhani:</b> Mandvi has a small but authentic Bandhani manufacturing community. Prices here can be lower than Bhuj."
      ],
      image: {
        src: "/images/mandvi/crafts.webp",
        alt: "Famous Kutchi Dabeli of Mandvi"
      }
    },
    {
      heading: "Nearby Destinations",
      color: "bg-slate-50",
      border: "border-l-4 border-slate-600 text-slate-800",
      list: [
        "<b><a href='/destinations/mundra' class='text-blue-500 hover:underline'>Mundra:</a></b> (45km | 1 hr) Historic port town with colonial charm.",
        "<b><a href='/places/72-jinalaya' class='text-blue-500 hover:underline'>72 Jinalaya:</a></b> (10km | 20 mins) A must-visit detour for architecture lovers.",
        "<b>Ambe Dham:</b> (20km) A large temple complex worth a quick stop."
      ],
      image: {
        src: "/images/mandvi/nearby.webp",
        alt: "Nearby scenic spots around Mandvi"
      }
    },
    {
        heading: "Frequently Asked Questions",
        color: "bg-gray-50",
        border: "border-l-4 border-gray-600 text-gray-800",
        list: [
            "<b>Is one day enough for Mandvi?</b> Yes, you can cover all major spots (Palace, Beach, Shipyard) in a relaxed day trip from Bhuj.",
            "<b>Can we stay in Mandvi?</b> Absolutely. There are luxury tented resorts near the beach and heritage hotels like the Beach Camp at Vijay Vilas Palace.",
            "<b>Is it crowded?</b> It gets crowded on weekends and holidays. Weekdays are very peaceful.",
            "<b>Are there changing rooms at the beach?</b> Yes, basic changing facilities and paid showers are available at the main Wind Farm beach."
        ]
    }
  ],
  facts: [
    "Ideal For: Families, Couples & History Lovers",
    "Best Time: October to March (Pleasant Weather)",
    "Distance: 58km from Bhuj (1 Hr drive)",
    "Famous For: Vijay Vilas Palace & Beach",
    "Unique Heritage: 400-year-old Dhow Shipbuilding",
    "Food Speciality: Birthplace of Kutchi Dabeli",
    "Ideal Duration: 1 Full Day or 1 Night Stay"
  ],
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58976.01309221809!2d69.3378!3d22.8288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sMandvi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
  { src: "/images/mandvi/mandvi1.webp", caption: "Vijay Vilas Palace" },
  { src: "/images/mandvi/mandvi2.webp", caption: "Mandvi Beach" },
  ],
};



