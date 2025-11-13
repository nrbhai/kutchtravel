// /app/page.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, Menu, MenuButton, MenuItem, MenuItems, PopoverButton, PopoverPanel } from "@headlessui/react";
import { MapPin, Calendar, Camera, BookOpen, Users, Sparkles, Mountain, Waves, ArrowRight } from "lucide-react";
import QuickGuide from "./components/QuickGuide";
import Navigation from "./components/Navigation";
import { DESTINATIONS } from "@/app/destinations/data";
import { useState, useEffect } from "react";

// Autoplay Carousel Component
const AutoplayCarousel = ({ images }: { images: { src: string; alt: string; caption: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 ${index === currentIndex ? 'z-10' : 'z-0'}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-gray-900 text-sm font-medium px-3 py-1 bg-white/80 rounded-full backdrop-blur-sm shadow-md">
            {image.caption}
          </div>
        </motion.div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white scale-100' 
                : 'bg-white/50 scale-75 hover:scale-90 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Craft Carousel Component - Changes every 5 seconds
const CraftCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const craftImages = [
    { src: "/images/crafts/bandhani.jpg", alt: "Bandhani Tie-Dye", caption: "Bandhani - Traditional Tie-Dye", hasImage: true },
    { src: "/images/crafts/ajrakh.jpg", alt: "Ajrakh Block Printing", caption: "Ajrakh - Block Printing Art", hasImage: true },
    { src: "/images/crafts/rogan.jpg", alt: "Rogan Art", caption: "Rogan Art - Painted Textiles", hasImage: true },
    { src: "/images/crafts/bandhani2.webp", alt: "Bandhani Variants", caption: "Bandhani - Colorful Patterns", hasImage: true },
    { src: "/images/crafts/rogan2.jpg", alt: "Rogan Art Designs", caption: "Rogan Art - Intricate Designs", hasImage: true },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % craftImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [craftImages.length]);

  return (
    <div className="relative w-full h-full">
      {craftImages.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 ${index === currentIndex ? 'z-10' : 'z-0'}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
              <h3 className="text-2xl font-sora font-bold text-gray-900 mb-2">
                {image.caption}
              </h3>
              <p className="text-gray-700 font-poppins font-medium">Traditional Kutchi Craft</p>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {craftImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-orange-600 scale-100' 
                : 'bg-orange-300 scale-75 hover:scale-90 hover:bg-orange-400'
            }`}
            aria-label={`Go to craft ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Create short descriptions matching the destinations page
const destinationDescriptions: Record<string, string> = {
  'bhuj': 'The cultural capital of Kutch, known for its magnificent palaces, ancient temples, and rich artisan traditions.',
  'dhordo-white-rann': 'The mesmerizing white salt desert that transforms into a moonlit wonderland during the Rann Festival.',
  'mandvi': 'A historic port town with pristine beaches, ancient shipbuilding traditions, and the magnificent Vijay Vilas Palace.',
  'lakhpat': 'A ghost town with a massive fort wall, gurudwara, and stunning desert landscapes.',
  'kalo-dungar': 'The highest point in Kutch offering panoramic views of the Great Rann and Pakistan border.',
  'anjar': 'A planned town known for its beautiful architecture, historical significance, and vibrant local culture.',
  'gandhidham': 'A modern planned city serving as the commercial hub of Kutch with excellent connectivity.',
  'mundra': 'A major port town with historical significance, beautiful temples, and coastal charm.',
  'kadia-dhrow': 'A stunning small canyon with unique rock formations, offering dramatic landscapes and excellent opportunities for photography and exploration.',
  'mata-na-madh': 'A sacred pilgrimage site with an ancient temple dedicated to Ashapura Mata, surrounded by scenic landscapes.',
  'narayan-sarovar-koteshwar': 'A sacred lake and ancient temple complex, one of the five holy sarovars mentioned in Hindu scriptures.',
  'road-to-heaven': 'A breathtaking scenic route through the desert landscape that feels like a pathway to the heavens.'
};

// Create category labels for destinations
const destinationCategories: Record<string, string> = {
  'bhuj': 'Heritage City',
  'dhordo-white-rann': 'Salt Desert',
  'mandvi': 'Beach Town',
  'lakhpat': 'Historic Fort',
  'kalo-dungar': 'Scenic Peak',
  'anjar': 'Planned City',
  'gandhidham': 'Commercial Hub',
  'mundra': 'Port City',
  'kadia-dhrow': 'Canyon',
  'mata-na-madh': 'Pilgrimage Site',
  'narayan-sarovar-koteshwar': 'Sacred Lake',
  'road-to-heaven': 'Scenic Route'
};

// Hero carousel images
const heroImages = [
  {
    src: "/images/destinations/white-rann-hero.jpg",
    alt: "The mesmerizing White Rann of Kutch under a starlit sky",
    caption: "White Rann Desert"
  },
  {
    src: "/images/destinations/bhuj-overview.jpg",
    alt: "Panoramic view of Bhuj city and its heritage",
    caption: "Bhuj Heritage"
  },
  {
    src: "/images/destinations/mandvi.jpg",
    alt: "The beautiful coastal town of Mandvi",
    caption: "Mandvi"
  },
  {
    src: "/images/destinations/kalo-dungar.jpg",
    alt: "Panoramic view from Kalo Dungar, the Black Hill",
    caption: "Kalo Dungar"
  }
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const panelVars = {
  initial: { opacity: 0, y: 6, scale: 0.98, transformOrigin: "top center" },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, y: 4, scale: 0.98, transition: { duration: 0.12 } },
};

const itemVars = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.03 * i, duration: 0.16 } }),
  exit: { opacity: 0, y: 6, transition: { duration: 0.12 } },
};

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  // Subtitle configuration: per-letter sparkle timing
  const subtitle = "Beyond the White Desert";
  const perLetterDuration = 0.6; // seconds each letter's active window
  const totalDuration = Math.max(3, subtitle.length * perLetterDuration); // total cycle duration

  // State for textile modals
  const [selectedTextile, setSelectedTextile] = useState<string | null>(null);

  // Textile information
  const textileInfo = {
    bandhani: {
      title: "Bandhani - The Art of Tie & Dye",
      description: "Bandhani, also known as Bandhej, is an ancient tie-dye technique that creates beautiful patterns through tiny knots. The word 'Bandhani' comes from the Sanskrit word 'banda' meaning 'to tie'.",
      details: [
        "🎨 Origins: Over 5000 years old, mentioned in ancient texts",
        "🔴 Colors: Traditionally red, yellow, blue, and green",
        "👗 Uses: Sarees, dupattas, turbans, and decorative items",
        "🏘️ Centers: Bhuj, Anjar, and surrounding villages",
        "⏱️ Process: Each piece can take weeks to complete",
        "✨ Patterns: Dots, waves, and intricate geometric designs"
      ],
      villages: "Visit Bhuj and Anjar to see master artisans at work"
    },
    ajrakh: {
      title: "Ajrakh - Block Print Mastery",
      description: "Ajrakh is a traditional block printing technique using natural dyes and intricate geometric patterns. The name comes from 'Azrak' meaning blue, reflecting its dominant indigo color.",
      details: [
        "🟦 Signature: Deep indigo blue with red and white accents",
        "📐 Patterns: Complex geometric and star motifs",
        "🌿 Natural Dyes: Indigo, madder, and pomegranate",
        "🏘️ Centers: Dhamadka and Ajrakhpur villages",
        "📚 Heritage: UNESCO recognized traditional craft",
        "🔄 Process: 16-step printing process taking weeks"
      ],
      villages: "Experience live demonstrations in Dhamadka village"
    },
    rogan: {
      title: "Rogan Art - Painted Perfection",
      description: "Rogan art uses thick paint made from castor oil and natural pigments, applied with a metal stylus to create vibrant patterns. This 300-year-old art form is practiced by only a few families.",
      details: [
        "🎨 Medium: Castor oil paint applied with metal stylus",
        "🏘️ Center: Exclusively in Nirona village",
        "👨‍👩‍👧‍👦 Artisans: Only the Khatri family practices this art",
        "🌈 Colors: Bright yellows, reds, blues, and greens",
        "✨ Technique: Half-painting, half-printing method",
        "🏆 Recognition: Featured on international platforms"
      ],
      villages: "Visit Nirona village to meet the Khatri family artisans"
    },
    mirror: {
      title: "Mirror Work - Shisha Embroidery",
      description: "Shisha or mirror work embroidery involves attaching small mirrors to fabric using colorful threads. This technique creates stunning reflective patterns that catch and play with light.",
      details: [
        "✨ Materials: Tiny mirrors stitched with silk threads",
        "🌈 Colors: Vibrant threads in contrasting colors",
        "👗 Applications: Clothing, wall hangings, bags",
        "🏘️ Centers: Throughout Kutch, especially Bhuj area",
        "🪞 Mirrors: Originally made from mica, now glass",
        "🎭 Cultural Use: Festival clothing and ceremonial items"
      ],
      villages: "Found across Kutch villages, with workshops in Bhuj"
    },
    sudi: {
      title: "Sudi Chappu - Traditional Knives",
      description: "The ancient art of knife-making in Anjar, where skilled blacksmiths forge traditional curved knives used by local communities for centuries.",
      details: [
        "🔥 Heritage: 400-year-old tradition brought by Muslim artisans",
        "⚒️ Process: Hand-forged using traditional coal furnaces",
        "🔪 Design: Distinctive curved blade for specific tasks",
        "🪵 Materials: High-quality steel with wooden handles",
        "👨‍🔧 Custom: Each knife customized for individual users",
        "🌾 Uses: Agriculture, crafts, and daily tasks"
      ],
      villages: "Visit Anjar's traditional blacksmith workshops to see master craftsmen at work"
    },
    pottery: {
      title: "Kutchi Pottery",
      description: "Traditional clay craft creating beautiful terracotta items, water pots, and decorative pieces using techniques passed down through generations.",
      details: [
        "🏺 Clay: Uses local clay rich in minerals from Kutch soil",
        "🎯 Technique: Hand-thrown on traditional potter's wheels",
        "🎨 Finish: Natural glazes and earth-tone finishes",
        "💧 Function: Water storage, cooking vessels",
        "🏛️ Decoration: Traditional motifs and patterns",
        "🌱 Eco-friendly: Environment-friendly and sustainable craft"
      ],
      villages: "Explore pottery workshops in Bhuj, Mundra, and rural villages across Kutch"
    },
    leather: {
      title: "Leather Craft",
      description: "Traditional leather working creating beautiful bags, shoes, and decorative items using time-honored techniques and natural materials.",
      details: [
        "🐪 Materials: Locally sourced camel and goat leather",
        "🌿 Tanning: Traditional vegetable tanning processes",
        "🪡 Crafting: Hand-stitched with decorative embroidery",
        "🌈 Design: Colorful leather products with mirror work",
        "👜 Products: Bags, footwear, belts, accessories",
        "🎨 Fusion: Combines with textile arts for unique designs"
      ],
      villages: "Discover leather craftsmen in Bhuj markets and Nirona village workshops"
    },
    weaving: {
      title: "Traditional Weaving",
      description: "Handloom textile production creating beautiful fabrics, carpets, and traditional garments using ancient weaving techniques.",
      details: [
        "🧵 Looms: Traditional pit looms and handloom techniques",
        "🐑 Materials: Cotton, wool, and silk thread production",
        "📐 Patterns: Geometric and floral pattern designs",
        "🌿 Dyes: Natural dyes from local plants and minerals",
        "🏠 Products: Dhurries, carpets, and fabric production",
        "👩‍🏭 Tradition: Women-led cottage industry tradition"
      ],
      villages: "Visit weaving cooperatives in Bhuj, Anjar, and surrounding villages"
    }
  };

  return (
    <main className="scroll-smooth selection:bg-blue-200 selection:text-gray-900 relative text-gray-900 dark:bg-gray-950 dark:text-gray-900">
      {/* 1️⃣ Modern Hero Section with Animated Mesh Background */}
      <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        {/* Navigation - Position it absolutely over the hero */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Elements with Light Blue/Cyan Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-1/2 w-[480px] h-[480px] bg-gradient-to-br from-teal-200/40 to-blue-200/40 rounded-full blur-3xl opacity-60"></div>
        </div>

        {/* Content grid container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial="hidden" 
              animate="visible" 
              variants={stagger}
            >
              <motion.h1 variants={fadeUp} className="font-sora leading-tight tracking-tight">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold holographic drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                  Discover Kutch
                </span>
                <motion.span 
                  variants={fadeUp} 
                  className="block text-lg md:text-xl lg:text-2xl font-poppins font-medium bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4 drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)] tracking-wide sparkle-wrap" 
                  tabIndex={0}
                >
                  {subtitle.split("").map((ch: string, i: number) => (
                    <span
                      key={i}
                      className="sparkle-letter inline-block"
                      style={{
                        animationName: "sparkle",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: 1,
                        animationDuration: `${totalDuration}s`,
                        animationDelay: `${i * perLetterDuration}s`,
                      }}
                    >
                      {ch === " " ? "\u00A0" : ch}
                    </span>
                  ))}
                </motion.span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-8 text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-space-grotesk font-medium leading-relaxed">
                <span className="text-gray-900 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  Where salt meets sky, and stories meet silence
                </span>
                <span className="block text-sm md:text-base mt-5 font-poppins font-light text-gray-800">
                  Practical guides, real photos, and local tips — not tourist brochures.
                </span>
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link 
                  href="/destinations" 
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white font-poppins font-semibold py-3 px-6 rounded-full shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">Explore Destinations</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </Link>
                <a 
                  href="#quick-guide" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 py-3 px-6 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <span>Quick Guide</span>
                  <span>✨</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Featured Image Carousel - Larger Size */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            >
              <AutoplayCarousel images={heroImages} />
            </motion.div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.9 }} 
          transition={{ delay: 1, duration: 0.8 }} 
          className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-center z-20"
        >
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 6 }} 
          animate={{ opacity: 0.8, y: 0 }} 
          transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }} 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-900 text-2xl z-20"
        >
          ↓
        </motion.div>
      </section>

      {/* Feature Tabs Grid Section */}
      <section className="relative -mt-20 mb-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 lg:gap-8 relative">
            <Link href="/destinations" 
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-blue-50 via-indigo-50/80 to-blue-50 backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-indigo-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <MapPin className="w-8 h-8 text-blue-600 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-blue-900 font-sans tracking-wide">Destinations</span>
              </div>
            </Link>
            <Link href="/hidden-gems" 
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-cyan-50 via-teal-50/80 to-cyan-50 backdrop-blur-sm border border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-100/50 via-teal-100/50 to-cyan-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 text-cyan-600 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-cyan-900 font-sans tracking-wide">Hidden Gems</span>
              </div>
            </Link>
            <Link href="/guide" 
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-teal-50 via-emerald-50/80 to-teal-50 backdrop-blur-sm border border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-teal-100/50 via-emerald-100/50 to-teal-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <BookOpen className="w-8 h-8 text-teal-600 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-teal-900 font-sans tracking-wide">Travel Guide</span>
              </div>
            </Link>
            <Link href="/gallery" 
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-sky-50 via-blue-50/80 to-sky-50 backdrop-blur-sm border border-sky-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-100/50 via-blue-100/50 to-sky-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Camera className="w-8 h-8 text-sky-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-sky-900 font-sans tracking-wide">Gallery</span>
              </div>
            </Link>
            <Link href="/blog" className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-cyan-50 via-sky-50/80 to-cyan-50 backdrop-blur-sm border border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-100/50 via-sky-100/50 to-cyan-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Waves className="w-8 h-8 text-cyan-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-cyan-900 font-sans tracking-wide">Blog</span>
              </div>
            </Link>
            <Link href="/plan" className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-green-50 via-lime-50/80 to-green-50 backdrop-blur-sm border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-green-100/50 via-lime-100/50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Mountain className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-green-900 font-sans tracking-wide">Plan Your Trip</span>
              </div>
            </Link>
            <Link href="/about" className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-orange-50 via-amber-50/80 to-orange-50 backdrop-blur-sm border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-100/50 via-amber-100/50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Users className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-orange-900 font-sans tracking-wide">About/Contact</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 2️⃣ Enhanced Explore Kutch Section */}
      <section id="explore-kutch" className="relative overflow-hidden py-12 bg-gradient-to-br from-blue-50/40 via-cyan-50/30 to-teal-50/40">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full text-sm font-poppins font-semibold tracking-wide shadow-lg shadow-cyan-500/30">
                  <span>🗺️</span>
                  <span>Local Insights</span>
                </span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold holographic drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] leading-tight">
                  Explore Kutch
                </h2>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-poppins font-light">
                  Local-first insights to plan the perfect trip across seasons and regions. 
                  <span className="block mt-2 text-slate-900 font-medium">Get expert guidance for an authentic Kutch experience.</span>
                </p>
              </div>

              {/* Feature Points */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse"></span>
                  <span className="text-sm font-poppins font-medium">Expert Tips</span>
                </div>
                <div className="w-px h-4 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 rounded-full animate-pulse"></span>
                  <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600">Local Insights</span>
                </div>
                <div className="w-px h-4 bg-gradient-to-b from-cyan-400 via-sky-400 to-blue-400"></div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 rounded-full animate-pulse"></span>
                  <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600">Season Guide</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                href="/destinations" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full font-poppins font-semibold text-base shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Start Exploring</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Map Side */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946413.6494866384!2d69.0!3d23.7337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511930d634542d%3A0xe68c6f6693b7b2be!2sKutch%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin&z=9"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold text-gray-800">📍 Kutch, Gujarat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Enhanced Featured Destinations Section */}
      <section id="destinations" className="relative overflow-hidden py-28">
        {/* Modern gradient background - consistent with hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 right-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 left-0 opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Two Column Layout: Title Left, Carousel Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Title */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp} 
              className="text-left"
            >
              <div className="mb-8">
                <span className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full text-base font-poppins font-semibold tracking-wide shadow-xl shadow-cyan-500/30">
                  <span>✨</span>
                  <span>Handpicked Destinations</span>
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold mb-8 leading-tight holographic whitespace-nowrap">
                Top Destinations
              </h2>
              <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-8 font-space-grotesk font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                Start with our handpicked favorites - the must-visit places that capture the essence of Kutch's beauty and heritage.
              </p>
              
              {/* Decorative Elements */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-slate-700 font-poppins font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse"></span>
                  <span className="text-base">Top 6 Featured</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-poppins font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse"></span>
                  <span className="text-base">Rich Heritage</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 font-poppins font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-cyan-700 to-blue-800 rounded-full animate-pulse"></span>
                  <span className="text-base">Cultural Experiences</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Auto-rotating Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <AutoplayCarousel 
                images={DESTINATIONS.slice(0, 6).map(dest => ({
                  src: dest.image,
                  alt: dest.title,
                  caption: dest.title
                }))}
              />
            </motion.div>
          </div>

          {/* Enhanced Destinations Grid - Show only first 6 */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-10% 0px" }} 
            variants={stagger} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 max-w-[120rem] mx-auto px-4 sm:px-8 lg:px-12"
          >
            {DESTINATIONS.slice(0, 6).map((destination, index) => {
              // Define unique colors for each card
              const cardColors = [
                { border: 'border-cyan-200', hoverBorder: 'hover:border-cyan-400', gradient: 'from-white via-cyan-50/30 to-blue-50/30', tag: 'bg-cyan-50 text-cyan-700 border-cyan-200', button: 'bg-cyan-600 hover:bg-cyan-700' },
                { border: 'border-purple-200', hoverBorder: 'hover:border-purple-400', gradient: 'from-white via-purple-50/30 to-pink-50/30', tag: 'bg-purple-50 text-purple-700 border-purple-200', button: 'bg-purple-600 hover:bg-purple-700' },
                { border: 'border-emerald-200', hoverBorder: 'hover:border-emerald-400', gradient: 'from-white via-emerald-50/30 to-teal-50/30', tag: 'bg-emerald-50 text-emerald-700 border-emerald-200', button: 'bg-emerald-600 hover:bg-emerald-700' },
                { border: 'border-orange-200', hoverBorder: 'hover:border-orange-400', gradient: 'from-white via-orange-50/30 to-amber-50/30', tag: 'bg-orange-50 text-orange-700 border-orange-200', button: 'bg-orange-600 hover:bg-orange-700' },
                { border: 'border-blue-200', hoverBorder: 'hover:border-blue-400', gradient: 'from-white via-blue-50/30 to-indigo-50/30', tag: 'bg-blue-50 text-blue-700 border-blue-200', button: 'bg-blue-600 hover:bg-blue-700' },
                { border: 'border-rose-200', hoverBorder: 'hover:border-rose-400', gradient: 'from-white via-rose-50/30 to-red-50/30', tag: 'bg-rose-50 text-rose-700 border-rose-200', button: 'bg-rose-600 hover:bg-rose-700' }
              ];
              const colors = cardColors[index % 6];
              
              return (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                prefetch={true}
                className="block group"
                tabIndex={0}
                style={{ textDecoration: "none" }}
              >
                <motion.article 
                  variants={fadeUp} 
                  whileHover={{ y: -6 }} 
                  className={`group relative bg-gradient-to-br ${colors.gradient} rounded-2xl overflow-hidden shadow-lg border-2 ${colors.border} transition-all duration-500 hover:shadow-2xl ${colors.hoverBorder}`}
                >
                  {/* Horizontal Layout: Image + Content Side by Side */}
                  <div className="flex flex-col">
                    
                    {/* Compact Image with Rounded Corners */}
                    <div className="relative h-40 m-4 rounded-xl overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={`${destination.title} - ${destinationDescriptions[destination.slug] || destination.title} in Kutch, Gujarat`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        priority={false}
                        loading="lazy"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                      
                      {/* Floating Category Tag */}
                      <div className="absolute top-2 right-2">
                        <span className={`backdrop-blur-sm border px-3 py-1 rounded-lg text-xs font-bold font-poppins shadow-md ${colors.tag}`}>
                          {destinationCategories[destination.slug] || "Explore"}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-5 pb-5 space-y-3">
                      
                      {/* Title with Location */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-sora font-bold text-gray-900 leading-tight">
                          {destination.title}
                        </h3>
                        <span className="text-xl shrink-0">📍</span>
                      </div>

                      {/* Info Grid */}
                      <div className="space-y-2.5">
                        
                        {/* Famous For */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-cyan-100">
                          <div className="flex items-start gap-2">
                            <span className="text-base shrink-0">✨</span>
                            <div className="min-w-0">
                              <p className="text-[10px] font-bold text-cyan-700 uppercase tracking-wider font-poppins mb-0.5">Famous For</p>
                              <p className="text-xs text-gray-800 font-poppins leading-snug">
                                {destination.slug === 'bhuj' && 'Historic palaces, museums & vibrant bazaars'}
                                {destination.slug === 'white-rann' && 'Endless white salt desert & full moon nights'}
                                {destination.slug === 'mandvi' && 'Pristine beaches & Vijay Vilas Palace'}
                                {destination.slug === 'dhordo' && 'Rann Utsav festival & tent city experience'}
                                {destination.slug === 'kalo-dungar' && "Black Hills & India's magnetic hill"}
                                {destination.slug === 'lakhpat' && 'Ancient fort ruins & Gurudwara'}
                                {!['bhuj', 'white-rann', 'mandvi', 'dhordo', 'kalo-dungar', 'lakhpat'].includes(destination.slug) && 'Rich cultural heritage & scenic beauty'}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Best Season */}
                        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-3 border border-cyan-200/50">
                          <div className="flex items-start gap-2">
                            <span className="text-base shrink-0">🌤️</span>
                            <div className="min-w-0">
                              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider font-poppins mb-0.5">Best Season</p>
                              <p className="text-xs text-gray-800 font-poppins font-semibold">
                                November to February
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        <div className={`flex items-center justify-between rounded-lg px-4 py-2.5 transition-colors duration-300 ${colors.button}`}>
                          <span className="text-white font-poppins font-semibold text-sm">View Details</span>
                          <span className="text-white text-lg transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.article>
              </Link>
              );
            })}
          </motion.div>

          {/* View All Destinations CTA */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp} 
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-50 rounded-3xl p-12 max-w-3xl mx-auto border-2 border-cyan-100/50 shadow-xl">
              <h3 className="text-3xl font-sora font-bold mb-4 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                Explore More Destinations
              </h3>
              <p className="text-gray-700 text-lg mb-8 font-poppins leading-relaxed">
                We've shown you just a glimpse! Discover {DESTINATIONS.length - 6} more incredible destinations waiting to be explored in Kutch.
              </p>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 text-white px-10 py-5 rounded-full font-poppins font-bold text-lg hover:from-cyan-700 hover:via-sky-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30 group"
              >
                <span>View All {DESTINATIONS.length}+ Destinations</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-2xl">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ Enhanced Culture & Crafts Section */}
      <section id="culture" className="relative overflow-hidden py-28">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 right-0 opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Two Column Layout: Carousel Left, Title Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Auto-rotating Craft Images Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <CraftCarousel />
            </motion.div>

            {/* Right Column - Title */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp} 
              className="text-left order-1 lg:order-2"
            >
              <div className="mb-8">
                <span className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full text-base font-poppins font-semibold tracking-wide shadow-xl shadow-cyan-500/30">
                  <span>🎨</span>
                  <span>Traditional Arts & Culture</span>
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold mb-8 leading-tight holographic whitespace-nowrap">
                Culture & Crafts
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-poppins font-light mb-8">
                Immerse yourself in the vibrant world of Kutchi traditions, where every thread tells a story 
                <span className="block mt-3 text-slate-900 font-medium">and every craft carries centuries of heritage.</span>
              </p>
              
              {/* Decorative Elements */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-slate-700 font-poppins font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse"></span>
                  <span className="text-base">Traditional Textiles</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-poppins font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse"></span>
                  <span className="text-base">Ancient Techniques</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 font-poppins font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-cyan-700 to-blue-800 rounded-full animate-pulse"></span>
                  <span className="text-base">Master Artisans</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Craft Cards Grid Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Bandhani */}
                <Link href="/crafts/bandhani" className="group cursor-pointer">
                  <div className="relative bg-gradient-to-br from-cyan-50/80 to-cyan-100/60 rounded-2xl p-8 border-2 border-cyan-200/40 hover:border-cyan-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-5 overflow-hidden shadow-lg border-2 border-white/30">
                        <Image 
                          src="/images/crafts/bandhani.jpg" 
                          alt="Bandhani"
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="font-bold text-gray-600 mb-3 text-lg">Bandhani</h3>
                      <p className="text-sm text-gray-600">Tie-dye artistry with intricate dot patterns</p>
                      <p className="text-sm text-gray-800 mt-3 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </Link>

                {/* Ajrakh */}
                <Link href="/crafts/ajrakh" className="group cursor-pointer">
                  <div className="relative bg-gradient-to-br from-indigo-50/80 to-indigo-100/60 rounded-2xl p-8 border-2 border-indigo-200/40 hover:border-indigo-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-5 overflow-hidden shadow-lg border-2 border-white/30">
                        <Image 
                          src="/images/crafts/ajrakh.jpg" 
                          alt="Ajrakh"
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="font-bold text-gray-600 mb-3 text-lg">Ajrakh</h3>
                      <p className="text-sm text-gray-600">Block-printed geometric masterpieces</p>
                      <p className="text-sm text-gray-800 mt-3 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </Link>

                {/* Rogan Art */}
                <Link href="/crafts/rogan-art" className="group cursor-pointer">
                  <div className="relative bg-gradient-to-br from-blue-50/80 to-blue-100/60 rounded-2xl p-8 border-2 border-blue-200/40 hover:border-blue-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-5 overflow-hidden shadow-lg border-2 border-white/30">
                        <Image 
                          src="/images/crafts/rogan.jpg" 
                          alt="Rogan Art"
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="font-bold text-gray-600 mb-3 text-lg">Rogan Art</h3>
                      <p className="text-sm text-gray-600">Painted fabric with castor oil colors</p>
                      <p className="text-sm text-gray-800 mt-3 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </Link>

                {/* Mirror Work */}
                <Link href="/crafts/mirror-work" className="group cursor-pointer">
                  <div className="relative bg-gradient-to-br from-sky-50/80 to-sky-100/60 rounded-2xl p-8 border-2 border-sky-200/40 hover:border-sky-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-sky-200 to-sky-300 shadow-lg border-2 border-white/30">
                        <span className="text-4xl">✨</span>
                      </div>
                      <h3 className="font-bold text-gray-600 mb-3 text-lg">Mirror Work</h3>
                      <p className="text-sm text-gray-600">Shisha embroidery with tiny mirrors</p>
                      <p className="text-sm text-gray-800 mt-3 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </Link>
              </div>

              {/* Additional Crafts Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {/* Sudi Chappu Card */}
                <Link href="/crafts/sudi-chappu" className="group cursor-pointer">
                  <div className="relative bg-gradient-to-br from-blue-50/80 to-blue-100/60 rounded-2xl p-8 border-2 border-blue-200/40 hover:border-blue-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-300 shadow-lg border-2 border-white/30">
                        <span className="text-4xl">🔪</span>
                      </div>
                      <h3 className="font-bold text-gray-600 mb-3 text-lg">Sudi Chappu</h3>
                      <p className="text-sm text-gray-600">Traditional knife-making in Anjar</p>
                      <p className="text-sm text-gray-800 mt-3 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </Link>

                {/* Pottery Card */}
                <Link href="/crafts/pottery" className="group cursor-pointer">
                  <div className="relative bg-gradient-to-br from-cyan-50/80 to-cyan-100/60 rounded-2xl p-8 border-2 border-cyan-200/40 hover:border-cyan-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-cyan-200 to-cyan-300 shadow-lg border-2 border-white/30">
                        <span className="text-4xl">🏺</span>
                      </div>
                      <h3 className="font-bold text-gray-600 mb-3 text-lg">Pottery</h3>
                      <p className="text-sm text-gray-600">Clay craft traditions across villages</p>
                      <p className="text-sm text-gray-800 mt-3 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </Link>

                {/* Leather Craft Card */}
                <Link href="/crafts/leather-craft" className="group cursor-pointer">
                  <div className="relative bg-gradient-to-br from-teal-50/80 to-teal-100/60 rounded-2xl p-8 border-2 border-teal-200/40 hover:border-teal-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-teal-200 to-teal-300 shadow-lg border-2 border-white/30">
                        <span className="text-4xl">👞</span>
                      </div>
                      <h3 className="font-bold text-gray-600 mb-3 text-lg">Leather Craft</h3>
                      <p className="text-sm text-gray-600">Traditional leather working and mojari shoes</p>
                      <p className="text-sm text-gray-800 mt-3 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </Link>

                {/* Weaving Card */}
                <Link href="/crafts/weaving" className="group cursor-pointer">
                  <div className="relative bg-gradient-to-br from-sky-50/80 to-sky-100/60 rounded-2xl p-8 border-2 border-sky-200/40 hover:border-sky-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-sky-200 to-sky-300 shadow-lg border-2 border-white/30">
                        <span className="text-4xl">🧵</span>
                      </div>
                      <h3 className="font-bold text-gray-600 mb-3 text-lg">Weaving</h3>
                      <p className="text-sm text-gray-600">Handloom textiles and traditional carpets</p>
                      <p className="text-sm text-gray-800 mt-3 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
      </section>

      {/* divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800" />
      </div>

      {/* 5️⃣ Enhanced Travel Guide Section */}
      <section id="guide" className="relative overflow-hidden py-24">
        {/* Consistent Cyan/Sky/Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 right-0 opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Travel Guide Content */}
            <div>
              {/* Enhanced Header */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp} 
                className="mb-12"
              >
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-poppins font-bold tracking-wide shadow-lg shadow-cyan-500/30 border border-cyan-400/30">
                    ✈️ Plan Your Journey
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold mb-6 leading-tight bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Travel Essentials
                </h2>
                <p className="text-xl text-gray-900 leading-relaxed font-space-grotesk font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  Your complete guide to experiencing Kutch like never before. We've curated everything 
                  you need for an unforgettable desert adventure.
                </p>
              </motion.div>

              {/* Enhanced Content Grid */}
              <div className="space-y-8">
            
                {/* Best Time to Visit */}
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group bg-gradient-to-br from-cyan-50/80 via-sky-50/80 to-blue-50/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-cyan-200/50 hover:border-cyan-300/70 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">🗓️</span>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-sora font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">When to Visit</h3>
                      <p className="text-sm text-gray-600 font-poppins">Choose your perfect season</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-cyan-200/60 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-poppins font-bold text-cyan-900 text-lg">November - February</h4>
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs rounded-full font-bold">BEST</span>
                      </div>
                      <p className="text-sm text-slate-700 font-poppins leading-relaxed">Pleasant weather (10-25°C), world-famous Rann Utsav festival, perfect for desert camping under starlit skies, vibrant cultural performances, and exploring the white salt desert.</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-indigo-200/60 hover:border-indigo-400/80 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-poppins font-bold text-indigo-900 text-lg">March - April</h4>
                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs rounded-full font-bold">GOOD</span>
                      </div>
                      <p className="text-sm text-slate-700 font-poppins leading-relaxed">Mild temperatures, fewer tourists means better deals, excellent for photography with clear skies, ideal for village visits and craft shopping without crowds.</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-red-200/60 hover:border-red-400/80 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-poppins font-bold text-red-900 text-lg">May - October</h4>
                        <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full font-bold">AVOID</span>
                      </div>
                      <p className="text-sm text-slate-700 font-poppins leading-relaxed">Extremely hot (40-48°C) with scorching desert heat, monsoon brings occasional rains making roads challenging, many tourist facilities remain closed during this off-season.</p>
                    </div>
                  </div>
                </motion.div>

                {/* How to Reach */}
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group bg-gradient-to-br from-blue-50/80 via-cyan-50/80 to-teal-50/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-blue-200/50 hover:border-blue-300/70 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">✈️</span>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-sora font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Getting There</h3>
                      <p className="text-sm text-gray-600 font-poppins">All routes lead to Kutch</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-blue-200/60 hover:border-blue-400/80 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-blue-300">
                          <span className="text-2xl">✈️</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-poppins font-bold text-blue-900 text-lg mb-2">By Air - Fastest Route</h4>
                          <p className="text-sm text-slate-700 font-poppins leading-relaxed mb-2"><strong>Bhuj Airport (BHJ)</strong> - Direct flights from Mumbai, Ahmedabad, and Bengaluru. Just 60 km (1 hour) from the Great Rann of Kutch.</p>
                          <p className="text-sm text-slate-700 font-poppins leading-relaxed"><strong>Ahmedabad Airport</strong> - Major international hub, 330 km away. Scenic 5-hour drive through Gujarat's countryside.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-indigo-200/60 hover:border-indigo-400/80 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-indigo-300">
                          <span className="text-2xl">🚂</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-poppins font-bold text-indigo-900 text-lg mb-2">By Train - Scenic Journey</h4>
                          <p className="text-sm text-slate-700 font-poppins leading-relaxed mb-2"><strong>Bhuj Railway Station</strong> - Well connected to major cities. Overnight trains from Mumbai, Delhi, and Ahmedabad available.</p>
                          <p className="text-sm text-slate-700 font-poppins leading-relaxed"><strong>Gandhidham Junction</strong> - Alternative station, 60 km from Bhuj with more train options.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-teal-200/60 hover:border-teal-400/80 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-teal-300">
                          <span className="text-2xl">🚗</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-poppins font-bold text-teal-900 text-lg mb-2">By Road - Freedom to Explore</h4>
                          <p className="text-sm text-slate-700 font-poppins leading-relaxed">Excellent highway network connects Kutch to Ahmedabad (330 km), Rajkot (250 km), and other Gujarat cities. State transport buses, private cabs, and self-drive options available. Road trip recommended for flexibility!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Hotels & Homestays Placeholder */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-gradient-to-br from-orange-50/90 via-amber-50/90 to-yellow-50/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-orange-200/50">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full text-xs font-poppins font-bold mb-4 shadow-lg shadow-orange-500/30">
                    🏨 ACCOMMODATIONS
                  </span>
                  <h3 className="text-3xl md:text-4xl font-sora font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">Where to Stay</h3>
                  <p className="text-gray-900 font-space-grotesk font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                    From luxury resorts to authentic village homes
                  </p>
                </div>
                
                {/* Placeholder Images Grid */}
                <div className="space-y-4">
                  <div className="group relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 border-2 border-orange-300/70 hover:border-orange-400 transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-7xl mb-3 group-hover:scale-110 transition-transform duration-300">🏨</span>
                      <h4 className="text-gray-900 font-sora font-bold text-2xl mb-1">Luxury Hotels</h4>
                      <p className="text-gray-700 font-poppins text-sm font-medium">Premium resorts & 5-star properties</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 border-2 border-amber-300/70 hover:border-amber-400 transition-all duration-300 hover:shadow-xl cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">🏡</span>
                        <h4 className="text-gray-900 font-sora font-bold text-lg">Homestays</h4>
                        <p className="text-gray-700 font-poppins text-xs font-medium px-2 text-center">Authentic village life</p>
                      </div>
                    </div>
                    
                    <div className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 border-2 border-yellow-300/70 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">⛺</span>
                        <h4 className="text-gray-900 font-sora font-bold text-lg">Desert Camps</h4>
                        <p className="text-gray-700 font-poppins text-xs font-medium px-2 text-center">Glamping under stars</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-red-100 via-orange-100 to-amber-100 border-2 border-red-300/70 hover:border-red-400 transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-7xl mb-3 group-hover:scale-110 transition-transform duration-300">🏰</span>
                      <h4 className="text-gray-900 font-sora font-bold text-2xl mb-1">Heritage Stays</h4>
                      <p className="text-gray-700 font-poppins text-sm font-medium">Royal palaces & historic havelis</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-orange-200/60">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">💰</span>
                      <h4 className="font-poppins font-bold text-orange-900">Budget Options</h4>
                    </div>
                    <p className="text-xs text-gray-700 font-poppins">Starting from ₹800/night - Guesthouses, hostels, and budget hotels available in Bhuj and surrounding villages.</p>
                  </div>
                  
                  <Link 
                    href="/bookings"
                    className="block w-full text-center bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white px-6 py-4 rounded-2xl font-poppins font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-500/30"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span>Explore All Stays</span>
                      <span>→</span>
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Packing Essentials - Full Width Section */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="group bg-gradient-to-br from-cyan-50/80 via-sky-50/80 to-blue-50/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-cyan-200/50 hover:border-cyan-300/70 hover:shadow-2xl transition-all duration-500 mb-16 mt-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🎒</span>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-sora font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Packing Essentials</h3>
                <p className="text-base text-gray-600 font-poppins">Travel smart, travel light</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-cyan-200/60 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">👕</span>
                  <div>
                    <h4 className="font-poppins font-bold text-cyan-900 mb-1 text-base">Clothing</h4>
                    <p className="text-xs text-slate-700 font-poppins leading-relaxed">Light cotton clothes, warm layers for nights</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-indigo-200/60 hover:border-indigo-400/80 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">👟</span>
                  <div>
                    <h4 className="font-poppins font-bold text-indigo-900 mb-1 text-base">Footwear</h4>
                    <p className="text-xs text-slate-700 font-poppins leading-relaxed">Walking shoes, sandals, socks for salt flats</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-blue-200/60 hover:border-blue-400/80 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">☀️</span>
                  <div>
                    <h4 className="font-poppins font-bold text-blue-900 mb-1 text-base">Sun Protection</h4>
                    <p className="text-xs text-slate-700 font-poppins leading-relaxed">SPF sunscreen, sunglasses, hat, lip balm</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-cyan-200/60 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">📸</span>
                  <div>
                    <h4 className="font-poppins font-bold text-cyan-900 mb-1 text-base">Photography Gear</h4>
                    <p className="text-xs text-slate-700 font-poppins leading-relaxed">Camera, batteries, power bank, memory cards</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-teal-200/60 hover:border-teal-400/80 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">💧</span>
                  <div>
                    <h4 className="font-poppins font-bold text-teal-900 mb-1 text-base">Hydration & Snacks</h4>
                    <p className="text-xs text-slate-700 font-poppins leading-relaxed">Water bottle, dry fruits, energy bars</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-sky-200/60 hover:border-sky-400/80 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">💊</span>
                  <div>
                    <h4 className="font-poppins font-bold text-sky-900 mb-1 text-base">Medical Essentials</h4>
                    <p className="text-xs text-slate-700 font-poppins leading-relaxed">First aid kit, medicines, antiseptic</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-blue-200/60 hover:border-blue-400/80 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🔦</span>
                  <div>
                    <h4 className="font-poppins font-bold text-blue-900 mb-1 text-base">Night Essentials</h4>
                    <p className="text-xs text-slate-700 font-poppins leading-relaxed">Flashlight, warm jacket, mosquito repellent</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-teal-200/60 hover:border-teal-400/80 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">📱</span>
                  <div>
                    <h4 className="font-poppins font-bold text-teal-900 mb-1 text-base">Documents & Tech</h4>
                    <p className="text-xs text-slate-700 font-poppins leading-relaxed">ID proof, bookings, offline maps, chargers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Safety & Tips Section */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="group bg-gradient-to-br from-emerald-50/80 via-teal-50/80 to-cyan-50/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl mb-16 border-2 border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-3xl transition-all duration-500"
          >
            <div className="text-center mb-10">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-poppins font-bold tracking-wide mb-6 shadow-lg shadow-emerald-500/30 border border-emerald-400/30">
                🛡️ TRAVEL SAFELY
              </span>
              <h3 className="text-3xl md:text-4xl font-sora font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">Safety & Important Tips</h3>
              <p className="text-gray-900 text-lg font-space-grotesk font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                Stay safe and make the most of your Kutch adventure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-emerald-200/60 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🌡️</span>
                </div>
                <h4 className="font-poppins font-bold mb-3 text-emerald-900 text-lg">Weather Check</h4>
                <p className="text-sm text-slate-700 font-poppins leading-relaxed">Monitor weather conditions daily, especially during monsoon season for safe travel</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-teal-200/60 hover:border-teal-400/80 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-teal-300 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">📱</span>
                </div>
                <h4 className="font-poppins font-bold mb-3 text-teal-900 text-lg">Stay Connected</h4>
                <p className="text-sm text-slate-700 font-poppins leading-relaxed">Keep emergency contacts handy, local network coverage may be limited in remote areas</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-cyan-200/60 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-cyan-300 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">💧</span>
                </div>
                <h4 className="font-poppins font-bold mb-3 text-cyan-900 text-lg">Stay Hydrated</h4>
                <p className="text-sm text-slate-700 font-poppins leading-relaxed">Carry plenty of water bottles, desert climate can be extremely dehydrating in hot weather</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-blue-200/60 hover:border-blue-400/80 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-blue-300 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🗺️</span>
                </div>
                <h4 className="font-poppins font-bold mb-3 text-blue-900 text-lg">Local Guide</h4>
                <p className="text-sm text-slate-700 font-poppins leading-relaxed">Consider hiring experienced local guides for remote areas and authentic village experiences</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-3xl md:text-4xl font-sora font-bold text-gray-900 mb-4">Need Personalized Guidance?</h3>
              <p className="text-slate-800 font-poppins mb-8 max-w-2xl mx-auto">
                Get customized itineraries, local insights, and 24/7 support for your Kutch journey. 
                Our local experts are here to help plan your perfect adventure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-cyan-500/30 flex items-center gap-2"
                >
                  <span>📞</span>
                  <span>Contact Our Experts</span>
                </Link>
                <Link
                  href="/destinations"
                  className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center gap-2"
                >
                  <span>🗺️</span>
                  <span>Explore Destinations</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ Contact CTA */}
      <section id="contact" className="relative overflow-hidden py-20">
        {/* Consistent Cyan/Sky/Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] top-1/3 right-0 opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-sora font-extrabold mb-6 holographic">
              Stay Connected
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-poppins font-light">
              Join our community of Kutch explorers! Get exclusive updates on Rann Utsav, discover hidden gems, 
              and receive insider tips that will transform your journey through this magical desert land.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-3xl font-sora font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-4xl">🌟</span>
                  What You'll Get
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-poppins">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 text-xl">✨</span>
                    <span>Exclusive Rann Utsav festival updates and early bird offers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 text-xl">📸</span>
                    <span>Stunning photo collections from hidden corners of Kutch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 text-xl">🗺️</span>
                    <span>Local insider tips and off-the-beaten-path recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 text-xl">🎯</span>
                    <span>Personalized travel guides and itinerary suggestions</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/919825034580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">💬</span>
                  Join WhatsApp Community
                </motion.a>

                <motion.a
                  href="/about"
                  className="flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:border-white/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">🎯</span>
                  Plan Your Journey
                </motion.a>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Explore the Magic of Kutch
                </h3>
                <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
                  <iframe
                    title="Kutch Interactive Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946493.0711048405!2d68.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950c4976e1d8b25%3A0x76e2f6be5b8c8a86!2sKutch%20District%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1735228800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0"
                  />
                </div>
                <p className="text-gray-100/80 text-center mt-4 text-sm">
                  From the White Desert to ancient ports, discover your perfect Kutch adventure
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-cyan-50 to-blue-50">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
        
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"></div>
        
        <div className="relative pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* About Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-lg"
                >
                  <h3 className="text-5xl md:text-6xl font-sora font-extrabold holographic drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-6">
                    Travel Kutch
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 font-poppins">
                    Your gateway to the mystical land of Kutch — from the ethereal White Desert to ancient heritage sites. 
                    Discover authentic crafts, vibrant festivals, and the timeless stories that define Gujarat's cultural crown jewel.
                  </p>
                  
                  {/* Social & Contact Quick Access */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/919825034580" 
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
                    >
                      💬 WhatsApp
                    </a>
                    <a 
                      href="tel:+919512234395" 
                      className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
                    >
                      📞 Call Now
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-lg"
              >
                <h4 className="text-2xl font-sora font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-6">Explore</h4>
                <ul className="space-y-3 font-poppins">
                  {[
                    { name: "Home", href: "#home", icon: "🏠" },
                    { name: "Destinations", href: "/destinations", icon: "🗺️" },
                    { name: "About Us", href: "/about", icon: "ℹ️" },
                    { name: "Travel Guide", href: "#guide", icon: "📖" },
                    { name: "Gallery", href: "#gallery", icon: "📸" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors duration-300 group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-lg"
              >
                <h4 className="text-2xl font-sora font-bold bg-gradient-to-r from-cyan-600 to-orange-600 bg-clip-text text-transparent mb-6">Connect</h4>
                <div className="space-y-5 font-poppins">
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-2xl mt-1">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Visit Us</p>
                      <p className="text-sm leading-relaxed">Bhuj, Kutch District<br />Gujarat, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-2xl mt-1">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                      <a href="tel:+919825034580" className="hover:text-indigo-600 transition-colors text-sm block">+91 98250 34580</a>
                      <a href="tel:+919512234395" className="hover:text-indigo-600 transition-colors text-sm block">+91 95122 34395</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-gray-700">
                    <span className="text-2xl mt-1">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a href="mailto:rachhnn@gmail.com" className="hover:text-indigo-600 transition-colors text-sm">
                        rachhnn@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Map Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-3xl font-bold text-center text-gray-900 mb-8 font-playfair">
                Discover the Geography of Wonder
              </h4>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <div className="w-full h-96 rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
                    <iframe
                      title="Kutch Region Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946493.0711048405!2d68.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950c4976e1d8b25%3A0x76e2f6be5b8c8a86!2sKutch%20District%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1735228800000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="border-0"
                    />
                  </div>
                  <p className="text-gray-800 text-center mt-4 font-medium">
                    From the vast salt marshes of the Rann to historic ports along the Arabian Sea — explore every corner of this magnificent region
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Bar */}
            <div className="border-t border-cyan-100 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <motion.p 
                  className="text-gray-800 text-center md:text-left font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  © {new Date().getFullYear()} <span className="text-gray-900 font-bold">Travel Kutch</span>. 
                  Crafted with passion for authentic cultural experiences.
                </motion.p>
                
                <motion.p 
                  className="text-gray-800 text-sm font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Designed with ❤️ for travelers seeking authentic Kutch
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Respect reduced motion + emboss text styles */}
      <style jsx global>{`
        /* Emboss text effect used for prominent headings */
        .emboss-text {
          color: #ffffff;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          /* stacked shadows: light highlight at top, thin inner shadow, and soft deep shadow for depth */
          text-shadow:
            0 -1px 0 rgba(255,255,255,0.25),
            0 1px 0 rgba(0,0,0,0.55),
            0 10px 30px rgba(0,0,0,0.45);
          /* small letter-spacing helps the embossed effect */
          letter-spacing: -0.5px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        /* Tagline: use the loaded Dancing Script font variable for a handcrafted feel */
        .tagline-cursive {
          font-family: var(--font-dancing), cursive;
          font-size: inherit;
          font-style: normal;
          font-weight: 400;
          letter-spacing: 0.2px;
          color: inherit;
        }


        /* Sparkle animation for subtitle letters (glow only — no vertical/dancing motion) */
        .sparkle-letter {
          display: inline-block;
          color: #ff2d2d; /* bright red */
          opacity: 0.95;
          /* per-letter durations and delays are set inline so the sparkle runs letter-by-letter */
          will-change: opacity, text-shadow, filter, color;
          transform: none;
        }

        /* Only run the sparkle animation when the subtitle is hovered or focused */
        .sparkle-wrap .sparkle-letter {
          animation-play-state: paused;
        }

        .sparkle-wrap:hover .sparkle-letter,
        .sparkle-wrap:focus .sparkle-letter,
        .sparkle-wrap:focus-within .sparkle-letter {
          animation-play-state: running;
        }

        @keyframes sparkle {
          0% { opacity: 0.95; text-shadow: none; filter: none; color: #ff2d2d; }
          40% { opacity: 1; text-shadow: 0 0 12px rgba(255,45,45,0.95), 0 0 24px rgba(255,45,45,0.18); filter: brightness(1.08) saturate(1.05); color: #ff2d2d; }
          60% { opacity: 0.98; text-shadow: 0 0 8px rgba(255,45,45,0.6); filter: brightness(1.03); color: #ff2d2d; }
          100% { opacity: 0.95; text-shadow: none; filter: none; color: #ff2d2d; }
        }

        /* Slow the overall sparkle by increasing animation delay multiplier via inline styles */
        @media (prefers-reduced-motion: reduce) {
          .sparkle-letter { animation: none !important; opacity: 1; }
        }
        /* Light animated background for the hero/first page */
        .light-animated-bg {
          background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(250,250,250,0.85) 50%, rgba(245,245,245,0.95) 100%);
        }

        .light-animated-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 10% 20%, rgba(255,244,229,0.55), transparent 12%), radial-gradient(circle at 80% 80%, rgba(229,245,255,0.4), transparent 14%);
          opacity: 0.9;
          pointer-events: none;
          animation: subtle-move 12s linear infinite;
        }

        @keyframes subtle-move {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.01); }
          100% { transform: translateY(0px) scale(1); }
        }
      `}</style>

      {/* Textile Information Modal */}
      <AnimatePresence>
        {selectedTextile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTextile(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedTextile && textileInfo[selectedTextile as keyof typeof textileInfo] && (
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {textileInfo[selectedTextile as keyof typeof textileInfo].title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {textileInfo[selectedTextile as keyof typeof textileInfo].description}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedTextile(null)}
                      className="w-10 h-10 bg-white/90 backdrop-blur-xl hover:bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center transition-colors"
                    >
                      <span className="text-gray-600 text-xl">×</span>
                    </button>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <div className="grid gap-3">
                      {textileInfo[selectedTextile as keyof typeof textileInfo].details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-white/90 rounded-lg border border-white/30">
                          <span className="text-gray-600 text-sm font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Villages */}
                  <div className="bg-white/90 p-6 rounded-2xl mb-6 border border-white/30">
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">🏘️ Where to Experience:</h3>
                    <p className="text-gray-600">{textileInfo[selectedTextile as keyof typeof textileInfo].villages}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/destinations"
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg border border-white/30"
                      onClick={() => setSelectedTextile(null)}
                    >
                      Explore Destinations
                    </Link>
                    <button
                      onClick={() => setSelectedTextile(null)}
                      className="bg-white/90 backdrop-blur-xl text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-white/90 backdrop-blur-xl transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}




















