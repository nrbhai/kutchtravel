export type Destination = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  heroImage: string;
  bestTime: string;
  tips: string[];
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "white-rann-of-kutch",
    title: "White Rann of Kutch",
    category: "Nature",
    excerpt:
      "A vast salt desert that glows under the moonlight and stretches endlessly across Gujarat’s western edge.",
    heroImage: "/images/white-rann-hero.jpg",
    bestTime: "November to February",
    content: `
      <p>The White Rann is Kutch’s signature landscape — a surreal salt desert that reflects the sky like a mirror. 
      By day it’s blinding white, by night it turns silver beneath the full moon. The Rann Utsav festival brings 
      music, dance, camel rides and handicraft bazaars to this endless horizon.</p>

      <p>Stay overnight in tents at Dhordo, explore nearby villages like Hodka, and visit Kalo Dungar for a view 
      that stretches to Pakistan on clear days.</p>
    `,
    tips: [
      "Carry sunglasses; glare is intense.",
      "Book tents 1–2 months in advance during Rann Utsav.",
      "Visit around full moon for best photos."
    ]
  },
  {
    slug: "mandvi",
    title: "Mandvi Beach",
    category: "Coastal Kutch",
    excerpt:
      "Golden sands, calm tides, and the charm of an old port town with palaces and shipyards.",
    heroImage: "/images/mandvi.jpg",
    bestTime: "October to March",
    content: `
      <p>Mandvi sits where the desert meets the sea. It’s known for its quiet beaches, wind farms, and 
      centuries-old shipbuilding yards. Vijay Vilas Palace — the royal retreat — offers cinematic sunsets 
      overlooking the Arabian Sea.</p>

      <p>Grab street food near the lighthouse and watch wooden dhow ships being crafted by hand — a scene that’s 
      barely changed in a century.</p>
    `,
    tips: [
      "Carry snacks; beach stalls close early.",
      "Stay for sunset at Vijay Vilas Palace viewpoint.",
      "Combine with Bhuj or Mundra for a 2-day trip."
    ]
  },
  {
    slug: "bhuj",
    title: "Bhuj Heritage",
    category: "Heritage",
    excerpt:
      "A cultural capital with palaces, temples, markets, and living crafts in every lane.",
    heroImage: "/images/bhuj.jpg",
    bestTime: "October to February",
    content: `
      <p>Bhuj blends old-world grandeur and resilience. Visit Aina Mahal and Prag Mahal for their Indo-European 
      architecture, stroll through Bhujodi village to see weavers at work, and taste Kutchi Dabeli from a street cart.</p>

      <p>The town’s markets are treasure chests for textiles, mirror work, and copper crafts — all still handmade.</p>
    `,
    tips: [
      "Aina Mahal is closed on Thursdays.",
      "Early mornings are best for street photography.",
      "Buy local crafts directly from artisans."
    ]
  },
  {
    slug: "dholavira",
    title: "Dholavira – The Indus Valley Legacy",
    category: "Heritage",
    excerpt:
      "One of the world’s oldest Harappan archaeological sites, perfectly preserved in the Rann’s silence.",
    heroImage: "/images/dholavira.jpg",
    bestTime: "November to February",
    content: `
      <p>Dholavira tells stories older than time. Its excavated ruins reveal planned streets, water systems, and 
      reservoirs from 4,500 years ago. The museum nearby gives insight into the Harappan civilization’s life and 
      trade networks.</p>

      <p>Combine history with adventure — the drive to Dholavira cuts through shimmering salt plains and flamingo 
      habitats.</p>
    `,
    tips: [
      "Carry water; the site is exposed and sunny.",
      "Ideal half-day trip from Bhuj or Khadir Bet.",
      "Stay at government guesthouse near site."
    ]
  },
  {
    slug: "kala-dungar",
    title: "Kala Dungar (Black Hill)",
    category: "Nature",
    excerpt:
      "Kutch’s highest point offering surreal desert panoramas and magnetic hills.",
    heroImage: "/images/kala-dungar.jpg",
    bestTime: "Year-round",
    content: `
      <p>Kala Dungar stands 460 meters above the Rann, offering spectacular views of the white desert below. 
      The 400-year-old Dattatreya Temple here feeds jackals every evening — a tradition locals swear by.</p>

      <p>It’s also home to the mysterious 'Magnetic Hill' where vehicles seem to roll uphill — science or sorcery, 
      you decide.</p>
    `,
    tips: [
      "Reach before sunset for the golden view.",
      "Carry light jackets; it gets windy.",
      "Combine with White Rann for a same-day trip."
    ]
  },
  {
    slug: "road-to-heaven",
    title: "Road to Heaven",
    category: "Scenic Route",
    excerpt:
      "The famous straight highway through the Rann — pure horizon, perfect symmetry, endless sky.",
    heroImage: "/images/road-to-heaven.jpg",
    bestTime: "October to February",
    content: `
      <p>This stretch near Dhordo earned its nickname for good reason. A perfectly straight blacktop slicing through 
      white salt flats makes it one of India’s most photogenic roads.</p>

      <p>Best visited early morning or evening for reflections and soft light. Bring a tripod — this is the Instagram shot of Kutch.</p>
    `,
    tips: [
      "Avoid high noon; glare can blow out photos.",
      "Use drone responsibly; check local permissions.",
      "No services nearby — carry water and fuel."
    ]
  },
  {
    slug: "mata-na-madh",
    title: "Mata na Madh Temple",
    category: "Religious",
    excerpt:
      "Spiritual heart of Kutch — the centuries-old Ashapura Mata temple drawing pilgrims from across Gujarat.",
    heroImage: "/images/mata-na-madh.jpg",
    bestTime: "All year",
    content: `
      <p>The Ashapura Mata temple at Mata na Madh has been a pilgrimage center for over a thousand years. 
      It’s beautifully carved and surrounded by vibrant markets selling prasad and silver trinkets.</p>

      <p>The atmosphere peaks during Navratri with garba nights and continuous chants — a glimpse of devotion and culture fused.</p>
    `,
    tips: [
      "Avoid weekends if you dislike crowds.",
      "Try local farsan and sweets sold outside.",
      "Photography is restricted inside sanctum."
    ]
  },
  {
    slug: "kadia-dhrow",
    title: "Kadia Dhrow Caves",
    category: "Nature & Heritage",
    excerpt:
      "Ancient Buddhist caves carved into a hill near Zinzuwada — serenity meets mystery.",
    heroImage: "/images/kadia-dhrow.jpg",
    bestTime: "October to March",
    content: `
      <p>Kadia Dhrow hides rock-cut caves dating back to the 3rd century. With stone pillars, meditation cells, and 
      the remains of a stupa, it’s one of Kutch’s least-known heritage spots.</p>

      <p>The view from the hilltop stretches across dry plains — a reward for anyone willing to wander off the main map.</p>
    `,
    tips: [
      "Wear good shoes; short trek uphill.",
      "Visit morning or evening for cooler weather.",
      "Respect site — it’s archaeologically protected."
    ]
  }
];
