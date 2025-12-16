import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/app/components/Navigation";

export const metadata = {
  title: "Bandhani - Traditional Tie-Dye Art of Kutch | Kutch Travel",
  description: "Discover the ancient art of Bandhani tie-dye from Kutch, Gujarat. Learn about traditional techniques, patterns, and master artisans.",
};

export default function BandhaniPage() {
  const images = [
    "/images/crafts/bandhani/bandhani2.jpg",
    "/images/crafts/bandhani/bandhani3.jpg",
    "/images/crafts/bandhani/bandhani4.webp",
    "/images/crafts/bandhani/bandhani5.jpg",
    "/images/crafts/bandhani/bandhani1.jpg", 
  ];

  const sections = [
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
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bandhani - Traditional Tie-Dye Art of Kutch",
    "description": "Discover the ancient art of Bandhani tie-dye from Kutch, Gujarat. Learn about traditional techniques, patterns, and master artisans.",
    "image": "https://kutchtravel.com/images/crafts/bandhani/bandhani1.jpg",
    "author": {
      "@type": "Organization",
      "name": "Kutch Travel Guide"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kutch Travel Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kutchtravel.com/icon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://kutchtravel.com/crafts/bandhani"
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-rose-50 selection:bg-rose-200 selection:text-rose-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Back Button Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-rose-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#culture" className="inline-flex items-center gap-2 text-rose-700 hover:text-rose-900 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Culture & Crafts
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/crafts/bandhani/bandhani1.jpg"
          alt="Bandhani Craft"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold font-sora mb-4 tracking-tight text-orange-50">Bandhani</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide text-rose-100">Traditional Tie-Dye Art of Kutch</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          const imageSrc = images[index % images.length];

          return (
            <div key={section.heading} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
              
              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <div className="inline-block relative">
                  <span className="absolute -inset-1 bg-rose-100 transform -skew-x-12" />
                  <h2 className="relative text-3xl md:text-4xl font-bold font-sora text-rose-900">{section.heading}</h2>
                </div>
                
                {section.content && (
                  <p className="text-lg text-gray-700 leading-relaxed font-space-grotesk">
                    {section.content}
                  </p>
                )}
                
                {section.list && (
                  <ul className="grid grid-cols-1 gap-3 mt-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <span className="h-2 w-2 rounded-full bg-rose-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className={`relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02] ${isEven ? 'rotate-2' : '-rotate-2'}`}>
                  <Image
                    src={imageSrc}
                    alt={section.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Decorative dots to mimic Bandhani */}
                <div className={`absolute -z-10 h-32 w-32 opacity-20 ${isEven ? '-bottom-10 -right-10' : '-top-10 -left-10'}`}>
                   <div className="grid grid-cols-4 gap-2">
                     {[...Array(16)].map((_, i) => (
                       <div key={i} className="h-2 w-2 rounded-full bg-rose-500" />
                     ))}
                   </div>
                </div>
              </div>

            </div>
          );
        })}

        {/* Facts Section */}
        <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50 rounded-3xl p-8 md:p-12 text-gray-900 shadow-xl relative overflow-hidden border border-rose-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold font-sora mb-8 text-rose-900">Did You Know?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                     <div className="space-y-4">
                        <div className="flex gap-4">
                            <span className="text-2xl">🧵</span>
                            <p className="font-medium">A master artisan can tie up to 1000-1500 knots per day</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">💎</span>
                            <p className="font-medium">Some premium Bandhani pieces have over 100,000 individual ties</p>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="flex gap-4">
                            <span className="text-2xl">🌿</span>
                            <p className="font-medium">Traditional Bandhani uses only natural fabrics like silk, cotton, and georgette</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">🖐️</span>
                            <p className="font-medium">The craft requires no machinery - completely handmade</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        {/* Footer Line */}
        <div className="border-t border-rose-200/50 pt-8 text-center pb-8">
             <p className="text-gray-800 text-sm font-medium">Designed with ❤️ for travelers seeking authentic Kutch</p>
        </div>

      </div>
    </main>
  );
}
