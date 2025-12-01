import CraftTemplate from "@/app/components/CraftTemplate";

export const metadata = {
  title: "Ajrakh - Ancient Block Printing Art of Kutch | Kutch Travel",
  description: "Explore the 4000-year-old Ajrakh block printing tradition of Kutch. Discover intricate geometric patterns and natural dyeing techniques.",
};

export default function AjrakhPage() {
  const craft = {
    slug: "ajrakh",
    title: "Ajrakh",
    subtitle: "Ancient Block Printing Art",
    image: "/images/crafts/ajrakh/ajrakh1.jpg",
    icon: "🖌️",
    category: "Block Printing",
    
    sections: [
      {
        heading: "Overview",
        content: "Ajrakh is an ancient block printing technique believed to be over 4000 years old. The name 'Ajrakh' comes from 'Azrak', meaning blue in Arabic, though traditional Ajrakh uses a rich palette of indigo blue, deep reds, and black. This intricate craft requires precise alignment of hand-carved wooden blocks to create complex geometric and floral patterns."
      },
      {
        heading: "History",
        content: "The Khatri community brought Ajrakh printing to Kutch from Sindh (now in Pakistan) around 400 years ago. The craft has been passed down through generations, with each family developing their unique style. Ajrakh fabrics were historically worn by pastoral communities and became an integral part of Kutchi identity."
      },
      {
        heading: "Technique",
        content: "Ajrakh printing is one of the most complex textile techniques, involving 16 stages of washing, dyeing, and printing. The fabric undergoes multiple rounds of resist printing using wooden blocks carved with intricate designs. Natural dyes like indigo, madder root, and iron rust create the characteristic colors. The entire process can take up to a month for a single piece."
      },
      {
        heading: "Cultural Significance",
        content: "Ajrakh represents the cultural heritage of Kutch's pastoral communities. The geometric patterns have symbolic meanings - stars represent the universe, flowers symbolize life, and waves represent the sea. Traditionally worn by men and women, Ajrakh has become a symbol of sustainable, eco-friendly textile art."
      },
      {
        heading: "Traditional Patterns",
        list: [
          "Indigo blue base with red and white motifs",
          "Geometric star patterns (representing cosmos)",
          "Floral medallions",
          "Wave patterns (symbolizing water)",
          "Tree of Life designs",
          "Border patterns with intricate details"
        ]
      },
      {
        heading: "Colors & Natural Dyes",
        content: "The classic Ajrakh palette includes deep indigo blue, rich red from madder root, and black from iron rust. Modern artisans also experiment with natural dyes to create green, yellow, and brown variations, all derived from plants and minerals."
      },
      {
        heading: "How to Identify Authentic Ajrakh",
        list: [
          "Look for precise geometric patterns on both sides of fabric",
          "Check for natural dye variations - each piece is unique",
          "Authentic Ajrakh has a distinct earthy smell from natural dyes",
          "The fabric should be printed on both sides",
          "Look for slight irregularities in block alignment - sign of handwork"
        ]
      },
      {
        heading: "Buying Tips",
        list: [
          "Visit Ajrakhpur village for authentic pieces",
          "Check if natural dyes were used - ask the artisan",
          "Look for GI (Geographical Indication) tags",
          "Higher thread count fabric commands premium prices",
          "Buy directly from artisans when possible",
          "Be patient - quality Ajrakh is never rushed"
        ]
      },
      {
        heading: "Price Range",
        content: "₹800 - ₹15,000 per meter depending on fabric quality, intricacy, and whether natural dyes were used. Authentic hand-block printed Ajrakh with natural dyes commands premium prices."
      }
    ],
    
    artisanInfo: {
      villages: ["Dhamadka", "Ajrakhpur", "Bhuj"],
      workshops: "Ajrakhpur village near Bhuj is dedicated to Ajrakh printing, with multiple family workshops open to visitors. The Khatri families are renowned master craftsmen preserving this ancient art."
    },
    
    facts: [
      "A single Ajrakh piece requires at least 16 different stages",
      "The craft uses only natural materials - no chemicals",
      "Wooden printing blocks can last for generations",
      "One meter of fabric is washed up to 14 times during the process",
      "The indigo dye fermentation process takes several days",
      "UNESCO has recognized Ajrakh as intangible cultural heritage"
    ],
    
    gallery: [
      { src: "/images/crafts/ajrakh/ajrakh1.jpg", caption: "Traditional Ajrakh Block Print" },
      { src: "/images/crafts/ajrakh/ajrakh2.jpg", caption: "Intricate Geometric Patterns" },
      { src: "/images/crafts/ajrakh/ajrakh3.jpg", caption: "Block Printing Process" },
      { src: "/images/crafts/ajrakh/ajrakh4.jpg", caption: "Natural Dyeing Vats" },
      { src: "/images/crafts/ajrakh/ajrakh4.webp", caption: "Master Artisan at Work" }
    ]
  };

  return <CraftTemplate craft={craft} />;
}
