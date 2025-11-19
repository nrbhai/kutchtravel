import type { Destination } from "./index";

// Ensure this object matches the Destination type. Update the type in index.ts if you add new fields.
export const bhuj: Destination = {
  slug: "bhuj",
    title: "Bhuj — Cultural Heart of Kutch",
  image: "/images/bhuj/bhuj1.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      image: {
        src: "/images/bhuj/bhuj-aerial.jpg",
        alt: "Aerial view of Bhuj city with its historic architecture"
      },
      content: "Nestled in the heart of India's largest district, Bhuj stands as the vibrant cultural capital where centuries of royal heritage come alive on every street corner. This remarkable city has witnessed the rise and fall of kingdoms, survived devastating earthquakes, and emerged stronger each time while preserving its soul. From the glittering mirrors of ancient palaces to the bustling bazaars where master craftsmen create magic with fabric and thread, Bhuj offers an authentic glimpse into the rich tapestry of Kutchi culture. Set against the backdrop of Bhujia Hill at 110 meters elevation, this resilient city serves as your gateway to understanding the true spirit of Kutch."
    },
    {
      heading: "History",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      image: {
        src: "/images/bhuj/bhujia-fort.jpg",
        alt: "Historic Bhujia Fort overlooking the city"
      },
      content: "Bhuj's story reads like a tale of determination and cultural pride spanning over five centuries. The city's foundations were laid when the visionary Rao Hamir claimed this strategic location in 1510, followed by Rao Khengarji I who elevated it to capital status in 1549 with great ceremony on January 25, 1548. Under Rao Godji I's leadership in 1723, protective walls embraced the growing city, while the iconic Bhujia Fort rose during Rao Deshalji I's prosperous reign from 1718-1741. Though nature tested Bhuj's resolve with devastating earthquakes in 1819 and 2001, each time the indomitable spirit of its people rebuilt not just structures, but strengthened the very essence of Kutchi culture that makes this city so captivating today."
    },
    {
      heading: "Places of Interest",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      image: {
        src: "/images/bhuj/prag-mahal.jpg",
        alt: "The magnificent Prag Mahal palace"
      },
      list: [
        "<b>Aina Mahal:</b> Palace of Mirrors with intricate glasswork and European-style architecture",
        "<b>Prag Mahal:</b> Italian Gothic palace built in the 19th century with clock tower",
        "<b>Kutch Museum:</b> Oldest museum in Gujarat showcasing regional artifacts and history",
        "<b>Bhujia Fort:</b> Historic fort built by Devkaran Seth atop Bhujia Hill",
        "<b>Hamirsar Lake:</b> Historic artificial lake in the city center for relaxation",
        "<b>Swaminarayan Temple:</b> One of the first six original temples built in 1822",
        "<b>Sharadbaug Palace:</b> Royal residence with beautiful gardens",
        "<b>Chhatardi:</b> Royal cenotaphs showcasing traditional architecture",
        "<b>Smritivan:</b> Earthquake memorial and museum on Bhujia Hill"
      ]
    },
    {
      heading: "Food & Crafts",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      image: {
        src: "/images/bhuj/handicrafts.jpg",
        alt: "Traditional Kutchi handicrafts and artisans at work"
      },
      list: [
        "<b>Kutchi Dabeli:</b> Famous local vegetarian burger with mashed potato and spices",
        "<b>Pakvans & Chikki:</b> Traditional sweets and regional Gujarati delicacies",
        "<b>Bandhani (Tie-dye):</b> Traditional textile art in vibrant patterns and colors",
        "<b>Rogan Art:</b> Ancient intellectual art form with intricate painted designs",
        "<b>Embroidery & Mirror Work:</b> Intricate needlework with small mirrors",
        "<b>Leather Work:</b> Traditional Kutchi leather crafts and footwear",
        "<b>Bhuj Haat:</b> Local market near Jubilee Ground for authentic handicrafts"
      ]
    },
    {
      heading: "Nearby Destinations",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
        "<b><a href='/places/kotay-surya-mandir' class='text-blue-400 hover:text-blue-300'>Kotay Surya Mandir:</a></b> 22km - Ancient 10th century Sun temple ruins with archaeological significance",
        "<b><a href='/places/dhrang-mekan-dada' class='text-blue-400 hover:text-blue-300'>Dhrang - Mekan Dada:</a></b> 25km - Sacred shrine and pilgrimage site",
        "<b><a href='/places/abjibapa-chhatardi' class='text-blue-400 hover:text-blue-300'>Abjibapa ni Chatardi Baladia:</a></b> 20km - Historical cenotaph and heritage site",
        "<b><a href='/places/rudramata-dam' class='text-blue-400 hover:text-blue-300'>Rudramata Dam:</a></b> 15km - Scenic dam with water reservoir and peaceful surroundings",
        "<b><a href='/places/gangeshwar-mahadev' class='text-blue-400 hover:text-blue-300'>Gangeshwar Mahadev:</a></b> 10km - Temple on hill with vast trekking opportunities and panoramic views",
        "<b><a href='/places/vande-mataram-memorial' class='text-blue-400 hover:text-blue-300'>Vande Mataram Memorial:</a></b> 8km - Memorial at Bhujodi village commemorating freedom struggle",
        "<b><a href='/places/jadura' class='text-blue-400 hover:text-blue-300'>Jadura:</a></b> 5km - Scenic sunset point with panoramic views",
        "<b><a href='/places/hanuman-tekri' class='text-blue-400 hover:text-blue-300'>Hanuman Tekri Kodki:</a></b> 10km - Hanuman temple and excellent sunset viewpoint"
      ],
      image: {
        src: "/images/bhuj/nearby.jpg",
        alt: "Nearby attractions around Bhuj — Cultural Heart of Kutch"
      }
    },
    {
      heading: "How to Reach",
      color: "bg-cyan-50",
      border: "border-l-4 border-cyan-600 text-cyan-800",
      image: {
        src: "/images/bhuj/railway-station.jpg",
        alt: "Bhuj Railway Station - A major connectivity hub"
      },
      list: [
        "<b>By Air:</b> Bhuj Airport (BHU) - Direct flights from Mumbai, Delhi, Ahmedabad",
        "<b>By Rail:</b> Bhuj Railway Station - Daily trains including Kutch Express, Shayajinagari Express",
        "<b>By Road:</b> Connected to Ahmedabad (330km), Mumbai, Delhi via major highways",
        "<b>Local Transport:</b> City buses, auto-rickshaws, and local connectivity to villages"
      ]
    },
    {
      heading: "Travel Information",
      color: "bg-rose-50",
      border: "border-l-4 border-rose-600 text-rose-800",
      list: [
        "<b>Bhuj Airport:</b> Located in the city, domestic flights available",
        "<b>Railway Connectivity:</b> Direct trains to Mumbai, Delhi, Ahmedabad",
        "<b>Distance from Ahmedabad:</b> 330km (6 hours drive)",
        "<b>Distance from Mumbai:</b> 450km (8 hours drive)",
        "<b>Local Services:</b> Good hospitals, banks, and tourist facilities"
      ],
      image: {
        src: "/images/bhuj/info.jpg",
        alt: "Travel information about Bhuj — Cultural Heart of Kutch"
      }
    },
    {
      heading: "Best Time to Visit",
      color: "bg-teal-50",
      border: "border-l-4 border-teal-600 text-teal-800",
      image: {
        src: "/images/bhuj/winter-palace.jpg",
        alt: "Bhuj palace during the winter season - perfect time to visit"
      },
      content: "The months from October through March transform Bhuj into a comfortable exploration paradise, with daytime temperatures ranging from a pleasant 11-38°C. This ancient city experiences one of India's most unpredictable climate patterns—while the average rainfall hovers around 370mm annually, Mother Nature keeps everyone guessing with years that might see as little as 9.6mm or as much as 1,311mm! Winter months from December to February offer crisp mornings perfect for palace visits, while summer months from March to June can push the mercury well above 40°C, making early morning and evening explorations the wisest choice."
    },
    {
      heading: "Accommodation & Local Tips",
      color: "bg-lime-50",
      border: "border-l-4 border-lime-600 text-lime-800",
      image: {
        src: "/images/bhuj/hotel-view.jpg",
        alt: "Luxury accommodation in Bhuj with traditional architecture"
      },
      list: [
        "<b>Stay Options:</b> Heritage hotels, modern hotels, guesthouses, and budget lodges",
        "<b>Shopping Areas:</b> Shroff Bazaar, Vandh Market for handicrafts and textiles",
        "<b>Local Cuisine:</b> Try Kutchi Dabeli, Pakwan, and traditional Gujarati thali",
        "<b>Photography:</b> Palace complexes offer great photo opportunities",
        "<b>Cultural Etiquette:</b> Respect local customs, especially at religious sites"
      ]
    }
  ],
  facts: [
    "Royal Origins: Established as capital in 1549 after Rao Hamir's settlement in 1510",
    "Population: Home to 213,514 diverse residents creating a vibrant cultural mosaic",
    "Elevation: Positioned at 110 meters above sea level with scenic Bhujia Hill backdrop",
    "Linguistic Diversity: Gujarati (48.9%), Kutchi (36.5%), Hindi (7.86%) create rich conversations",
    "Weather Patterns: Desert climate with fascinatingly unpredictable rainfall variations",
    "Administrative Pride: Serves as headquarters of India's geographically largest district"
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.123456789!2d69.6697!3d23.2420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950ec6e1e559f19%3A0x2e23b8365f3870e1!2sBhuj%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  gallery: [
  { src: "/images/bhuj/bhuj1.jpg", caption: "Aina Mahal - Palace of Mirrors" },
  { src: "/images/bhuj/bhuj2.jpg", caption: "Prag Mahal - Italian Gothic Architecture" },
  { src: "/images/bhuj/bhuj3.jpg", caption: "Swaminarayan Temple" },
  { src: "/images/bhuj/bhuj4.jpg", caption: "Bhujodi Village Weaving" },
  { src: "/images/bhuj/bhuj5.jpg", caption: "Hamirsar Lake" },
  { src: "/images/bhuj/bhuj6.jpg", caption: "Traditional Bandhani Work" }
  ]
};





