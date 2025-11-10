import CraftTemplate from '@/app/components/CraftTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leather Craft - Traditional Leatherwork | Kutch Travel',
  description: 'Discover the traditional leather crafts of Kutch, including shoes (mojari), bags, and decorative items crafted by skilled artisans.',
};

export default function LeatherCraftPage() {
  const craft = {
    slug: "leather-craft",
    title: "Leather Craft",
    subtitle: "Traditional Leatherwork & Mojari Making",
    image: "/images/crafts/leather-craft.jpg",
    icon: "👞",
    category: "Leatherwork",
    
    sections: [
      {
        heading: "Overview",
        content: "Leather craft in Kutch is a centuries-old tradition practiced primarily by the Mochi community. From the famous Kutchi mojari (traditional shoes) to beautifully embroidered bags and decorative items, leather artisans create functional and artistic pieces that blend utility with aesthetics. Kutch leatherwork is distinguished by its intricate embroidery, mirror work, and vibrant colors applied to high-quality leather."
      },
      {
        heading: "History",
        content: "The Mochi community has been working with leather in Kutch for over 400 years. Historically, they created essential items for the pastoral communities - shoes, water bags, horse saddles, and storage containers. Leather was crucial in the desert environment for its durability and water resistance. The craft evolved from purely functional items to include decorative elements influenced by the region's rich embroidery traditions."
      },
      {
        heading: "Kutchi Mojari - The Iconic Shoes",
        content: "Kutchi mojari (also called jutti or mojdi) are traditional handcrafted shoes that have become globally recognized. These flat, closed-toe shoes feature no left-right distinction and are known for their comfort and durability. Authentic Kutchi mojaris are made entirely by hand, with each pair taking 2-3 days to complete. The uppers are made from soft leather or velvet, often embroidered with traditional patterns and mirror work."
      },
      {
        heading: "Types of Leather Products",
        list: [
          "Mojari/Jutti - Traditional embroidered shoes",
          "Bags and purses - With mirror work and embroidery",
          "Belts - Hand-tooled leather with brass fittings",
          "Saddles and horse gear - For the pastoral community",
          "Water containers - Traditional leather mashak",
          "Wall hangings - Decorative leather panels",
          "Wallets and accessories - Contemporary designs",
          "Footstools and cushions - Leather with embroidered covers"
        ]
      },
      {
        heading: "Traditional Techniques",
        content: "The leather is first cleaned and softened through a tanning process using natural materials. For mojaris, the artisan cuts the leather pieces according to patterns passed down through generations. The pieces are stitched together using strong thread, traditionally made from camel sinew but now often cotton or nylon. The soles are made from layers of leather stacked and stitched together for durability. Finally, embroidery, mirror work, or beadwork is applied to the upper surface."
      },
      {
        heading: "Embroidery & Decoration",
        list: [
          "Thread embroidery in geometric and floral patterns",
          "Shisha (mirror work) creating sparkling effects",
          "Zari work - metallic thread embroidery",
          "Beadwork in traditional designs",
          "Sequins and colored stones",
          "Hand-painting on leather surfaces",
          "Cutwork and appliqué techniques"
        ]
      },
      {
        heading: "Leather Tanning Process",
        content: "Traditional tanning in Kutch uses vegetable tanning methods with materials like tree bark, roots, and leaves. The raw hide is cleaned, dehaired, and soaked in tanning solutions for several weeks. This creates soft, pliable leather with a natural color. Modern artisans also use chrome tanning for certain products. Natural tanning produces more sustainable, eco-friendly leather compared to industrial chemical tanning."
      },
      {
        heading: "Contemporary Innovations",
        content: "Modern leather artisans are adapting to contemporary tastes while preserving traditional techniques. They create fusion designs combining Kutchi embroidery with modern shoe styles. Leather bags with traditional mirror work are popular globally. Some artisans collaborate with fashion designers to create contemporary accessories. There's also growing interest in vegetable-tanned, eco-friendly leather products."
      },
      {
        heading: "How to Identify Quality Leatherwork",
        list: [
          "Check the stitching - should be tight and even",
          "Quality leather feels supple and has a natural grain",
          "Embroidery should be securely attached without loose threads",
          "Mirrors should be firmly set and not wobble",
          "No chemical smell - good leather has an earthy aroma",
          "Soles should be thick and well-constructed",
          "Colors should be consistent and vibrant"
        ]
      },
      {
        heading: "Buying Tips",
        list: [
          "Visit leather craft shops in Bhuj and local villages",
          "Try mojaris before buying - they should fit snugly initially",
          "Ask about the leather type (camel, goat, buffalo, or cow)",
          "Check if embroidery is hand-done or machine-made",
          "Negotiate respectfully - handmade items take days to create",
          "Request care instructions from the artisan",
          "Support cooperatives that ensure fair wages to craftspeople"
        ]
      },
      {
        heading: "Care & Maintenance",
        content: "New mojaris may feel tight but will stretch to fit your feet perfectly within a week. Clean leather items with a soft, damp cloth. Apply leather conditioner or natural oils periodically to prevent drying. Store in a cool, dry place away from direct sunlight. For embroidered items, avoid getting the thread work wet. Resoling services are available in Kutch for worn mojaris."
      },
      {
        heading: "Price Range",
        content: "₹500 - ₹8,000 depending on materials and craftsmanship. Basic mojaris (₹500-1,500), embroidered mojaris with mirror work (₹1,500-4,000), premium designer pieces (₹4,000-8,000), leather bags (₹800-5,000), belts and accessories (₹300-2,000)."
      }
    ],
    
    artisanInfo: {
      villages: ["Bhuj", "Bhujodi", "Khavda", "Anjar"],
      workshops: "The Mochi community in Bhuj has several workshops in the old city area. Bhujodi village also has leather artisans who combine embroidery with leatherwork. Many shops in the markets display the entire range of leather crafts. Some workshops offer demonstrations of mojari making and embroidery techniques."
    },
    
    facts: [
      "Kutchi mojaris have no left-right distinction - they fit either foot",
      "A single pair of mojaris can involve over 1,000 individual stitches",
      "Traditional mojari soles can last for years with proper care",
      "Camel leather is prized for its durability and natural water resistance",
      "The embroidery patterns often tell stories from local folklore",
      "Natural tanning process can take 4-6 weeks for quality leather",
      "Some artisan families have been making mojaris for 15+ generations",
      "Kutchi mojaris are exported to fashion markets worldwide"
    ],
    
    gallery: [
      { src: "/images/crafts/leather-craft.jpg", caption: "Traditional Embroidered Mojari" },
      { src: "/images/crafts/leather-craft-2.jpg", caption: "Artisan Stitching Leather" },
      { src: "/images/crafts/leather-craft-3.jpg", caption: "Mirror Work Detail" },
      { src: "/images/crafts/leather-craft-4.jpg", caption: "Leather Bags Collection" },
      { src: "/images/crafts/leather-craft-5.jpg", caption: "Traditional Leatherworking Tools" }
    ]
  };

  return <CraftTemplate craft={craft} />;
}
