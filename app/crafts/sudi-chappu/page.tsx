import CraftTemplate from '@/app/components/CraftTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sudi Chappu - Traditional Knife Making | Kutch Travel',
  description: 'Discover Sudi Chappu, the ancient knife-making craft of Anjar, where skilled artisans forge legendary blades used by warriors and craftsmen.',
};

export default function SudiChappuPage() {
  const craft = {
    slug: "sudi-chappu",
    title: "Sudi Chappu",
    subtitle: "Traditional Knife Making Art",
    image: "/images/crafts/sudi-chappu.jpg",
    icon: "🔪",
    category: "Metalwork",
    
    sections: [
      {
        heading: "Overview",
        content: "Sudi Chappu is the traditional knife-making craft of Anjar, a town in Kutch district. These aren't ordinary knives - they are legendary blades known for their exceptional sharpness, durability, and craftsmanship. For centuries, Anjar has been synonymous with the finest knives in Gujarat, used by everyone from farmers and craftsmen to warriors and hunters."
      },
      {
        heading: "History",
        content: "The knife-making tradition in Anjar dates back over 400 years. The craft was brought by metalworkers who settled in the region and found the local conditions ideal for forging high-quality blades. During the princely state era, Anjar knives were prized possessions, often presented as gifts to royalty. The Earthquake of 2001 destroyed many workshops, but the resilient artisans rebuilt and continue this proud tradition."
      },
      {
        heading: "The Forging Process",
        content: "Sudi Chappu making is a labor-intensive process that can take days for a single blade. The artisan starts by heating iron or steel in a traditional coal-fired furnace until it glows red-hot. The metal is then hammered repeatedly on an anvil to shape the blade, a process requiring immense skill to achieve the perfect curve and thickness. The blade is heated and cooled multiple times (tempering) to achieve the ideal hardness and flexibility."
      },
      {
        heading: "Types of Knives",
        list: [
          "Chappu - Curved blade knives, the most common type",
          "Sudi - Straight blade knives for precision work",
          "Khanjar - Decorative daggers with ornate handles",
          "Farming knives - Heavy-duty blades for agricultural use",
          "Hunting knives - Specialized designs for hunters",
          "Kitchen choppers - Traditional cooking knives"
        ]
      },
      {
        heading: "Handle Craftsmanship",
        content: "The handles are crafted from various materials - buffalo horn (most common), rosewood, sandalwood, or even camel bone for premium pieces. The horn is carefully shaped, polished, and fitted with brass rivets. Many handles feature intricate brass inlay work or carved patterns. The balance between blade and handle is crucial - a well-made Sudi Chappu feels perfectly weighted in the hand."
      },
      {
        heading: "Testing & Quality",
        content: "Traditional knife makers test their blades in several ways: slicing paper to test sharpness, cutting rope to test edge retention, and checking flexibility by bending the blade. A quality Anjar knife should hold its edge for months of regular use, resist rust, and have a blade that springs back when flexed. Master craftsmen stamp their mark on the blade as a guarantee of quality."
      },
      {
        heading: "Modern Challenges",
        content: "The craft faces challenges from mass-produced industrial knives that are cheaper but lack the quality and character of handmade blades. The younger generation is less interested in this demanding craft. However, there's growing appreciation for handcrafted tools, and some artisans are adapting by creating decorative pieces, custom knives for collectors, and premium kitchen knives."
      },
      {
        heading: "How to Identify Authentic Anjar Knives",
        list: [
          "Look for the artisan's mark stamped on the blade",
          "Genuine buffalo horn handles have natural grain patterns",
          "The blade should have visible hammer marks from hand forging",
          "Weight should be well-balanced between blade and handle",
          "Brass rivets should be flush and secure",
          "The blade should have a slight flex without breaking"
        ]
      },
      {
        heading: "Buying Tips",
        list: [
          "Visit the knife-making street (Lohar Gali) in Anjar town",
          "Buy directly from the forge to ensure authenticity",
          "Test the sharpness - a good blade cuts paper effortlessly",
          "Check the handle fitting - should be tight with no wobble",
          "Ask about the steel type used in the blade",
          "Request maintenance instructions from the artisan",
          "Negotiate respectfully - prices reflect hours of skilled work"
        ]
      },
      {
        heading: "Care & Maintenance",
        content: "Keep the blade oiled with mustard oil or any food-safe oil to prevent rust. Store in a dry place, preferably in a leather sheath. Sharpen periodically on a whetstone - the artisan can show you the correct angle. Clean and dry immediately after use. Never put in a dishwasher. With proper care, an Anjar knife can last for generations."
      },
      {
        heading: "Price Range",
        content: "₹300 - ₹5,000 depending on size, materials, and craftsmanship. Basic utility knives (₹300-800), premium buffalo horn handle knives (₹1,000-2,500), decorative khanjar daggers (₹2,000-5,000), custom-made collector pieces (₹5,000+)."
      }
    ],
    
    artisanInfo: {
      villages: ["Anjar"],
      workshops: "Visit Lohar Gali (Blacksmith Street) in Anjar town where multiple generations of knife makers have their forges. The rhythmic sound of hammering on anvils echoes through the street. Most artisans welcome visitors and demonstrate the forging process."
    },
    
    facts: [
      "Anjar knives are considered the sharpest traditional knives in Gujarat",
      "A single knife can require over 100 hammer strikes during forging",
      "Buffalo horn handles are preferred because they don't crack or warp",
      "Traditional forges use manually operated bellows to heat the coal",
      "Some knife-making families have been in the craft for 10+ generations",
      "During festivals, special ceremonial knives with silver inlay are made",
      "The 2001 earthquake destroyed most forges but couldn't kill the craft",
      "Master artisans can identify the maker of a knife just by looking at it"
    ],
    
    gallery: [
      { src: "/images/crafts/sudi-chappu.jpg", caption: "Traditional Anjar Knife" },
      { src: "/images/crafts/sudi-chappu-2.jpg", caption: "Artisan Forging Blade" },
      { src: "/images/crafts/sudi-chappu-3.jpg", caption: "Buffalo Horn Handle Details" },
      { src: "/images/crafts/sudi-chappu-4.jpg", caption: "Collection of Different Styles" },
      { src: "/images/crafts/sudi-chappu-5.jpg", caption: "Traditional Coal Forge" }
    ]
  };

  return <CraftTemplate craft={craft} />;
}
