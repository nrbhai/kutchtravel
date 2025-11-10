import CraftTemplate from "@/app/components/CraftTemplate";

export const metadata = {
  title: "Bandhani - Traditional Tie-Dye Art of Kutch | Kutch Travel",
  description: "Discover the ancient art of Bandhani tie-dye from Kutch, Gujarat. Learn about traditional techniques, patterns, and master artisans.",
};

export default function BandhaniPage() {
  const craft = {
    slug: "bandhani",
    title: "Bandhani",
    subtitle: "Traditional Tie-Dye Art",
    image: "/images/crafts/bandhani.jpg",
    icon: "🎨",
    category: "Textile Art",
    
    sections: [
      {
        heading: "Overview",
        content: "Bandhani is one of the oldest tie-dye techniques in India, dating back over 5000 years. The word 'Bandhani' comes from the Sanskrit word 'bandh' meaning to tie. This intricate craft involves tying thousands of tiny knots on fabric before dyeing, creating beautiful dotted patterns that are unique to each piece."
      },
      {
        heading: "History",
        content: "The art of Bandhani has been practiced in Kutch for centuries, passed down through generations of skilled artisans. Historical records suggest that Bandhani sarees were even mentioned in ancient Sanskrit texts. The craft flourished under royal patronage and became an integral part of Kutchi culture, especially in wedding ceremonies and festivals."
      },
      {
        heading: "Technique",
        content: "The Bandhani process is incredibly labor-intensive. Artisans first draw the design on plain fabric, then tie each dot individually with thread. The fabric is then dyed, and when the ties are removed, the tied portions remain undyed, creating the characteristic dotted patterns. A single Bandhani saree can have thousands of these tiny ties, taking weeks to complete."
      },
      {
        heading: "Traditional Patterns",
        list: [
          "Boond (dot pattern)",
          "Kodi (tear-drop shape)",
          "Khombi (square pattern)",
          "Laddu (circular pattern)",
          "Chaubandi (four-tie design)",
          "Dungar Shahi (mountain pattern)"
        ]
      },
      {
        heading: "Colors & Significance",
        content: "Traditional Bandhani uses vibrant colors - red, yellow, blue, and green being the most popular. Bandhani holds deep cultural significance in Kutch. Traditional pieces are considered auspicious and are often worn during weddings and religious ceremonies. Different patterns and colors carry different meanings."
      },
      {
        heading: "How to Identify Authentic Bandhani",
        list: [
          "Look for tiny white or colored dots in patterns",
          "Check for slight irregularities - each piece is unique",
          "Authentic Bandhani has uneven edges where cloth was tied",
          "The back side shows the tied marks clearly"
        ]
      },
      {
        heading: "Buying Tips",
        list: [
          "Purchase from certified artisan cooperatives",
          "Expect to pay more for finer work - more ties mean higher quality",
          "Ask about the number of ties - premium pieces have 10,000+ ties",
          "Look for natural dyes if you prefer traditional methods",
          "Get a certificate of authenticity"
        ]
      },
      {
        heading: "Price Range",
        content: "₹500 - ₹50,000 depending on intricacy, fabric quality, and number of ties"
      }
    ],
    
    artisanInfo: {
      villages: ["Bhuj", "Mundra", "Anjar", "Bhachau"],
      workshops: "Several family-run workshops operate in Bhuj's old city, where visitors can watch artisans at work"
    },
    
    facts: [
      "A master artisan can tie up to 1000-1500 knots per day",
      "Some premium Bandhani pieces have over 100,000 individual ties",
      "Traditional Bandhani uses only natural fabrics like silk, cotton, and georgette",
      "The craft requires no machinery - completely handmade",
      "Different regions of Kutch specialize in different Bandhani styles"
    ],
    
    gallery: [
      { src: "/images/crafts/bandhani.jpg", caption: "Traditional Bandhani Fabric" },
      { src: "/images/crafts/bandhani.jpg", caption: "Intricate Dot Patterns" },
      { src: "/images/crafts/bandhani.jpg", caption: "Bandhani Saree" },
      { src: "/images/crafts/bandhani.jpg", caption: "Artisan at Work" },
      { src: "/images/crafts/bandhani.jpg", caption: "Colorful Bandhani Display" }
    ]
  };

  return <CraftTemplate craft={craft} />;
}
