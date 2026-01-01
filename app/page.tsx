// /app/page.tsx
'use client';

import MetallicHeading from "./components/MetallicHeading";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, Menu, MenuButton, MenuItem, MenuItems, PopoverButton, PopoverPanel } from "@headlessui/react";
import { MapPin, Calendar, Camera, BookOpen, Users, Sparkles, Mountain, Waves, ArrowRight, Palette, Home as HomeIcon } from "lucide-react";
import QuickGuide from "./components/QuickGuide";
import Navigation from "./components/Navigation";
import BookingWidget from "./components/BookingWidget";
import TripWidget from "./components/TripWidget";
import ShortsGallery from "./components/ShortsGallery";
import { DESTINATIONS } from "@/app/destinations/data";
import { useState, useEffect } from "react";





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
  'road-to-heaven': 'A breathtaking scenic route through the desert landscape that feels like a pathway to the heavens.',
  'dholavira': 'One of the largest Harappan sites, featuring advanced water management systems and ancient fortifications.'
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
  'road-to-heaven': 'Scenic Route',
  'dholavira': 'Archaeological Site'
};

// Hero carousel images
const heroImages = [
  {
    src: "/images/destinations/white-rann-hero.webp",
    alt: "The mesmerizing White Rann of Kutch under a starlit sky",
    caption: "White Rann Desert"
  },
  {
    src: "/images/destinations/bhuj-overview.webp",
    alt: "Panoramic view of Bhuj city and its heritage",
    caption: "Bhuj Heritage"
  },
  {
    src: "/images/destinations/mandvi.webp",
    alt: "The beautiful coastal town of Mandvi",
    caption: "Mandvi"
  },
  {
    src: "/images/destinations/kalo-dungar.webp",
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
    <main className="scroll-smooth selection:bg-blue-200 selection:text-gray-900 relative text-gray-900 dark:bg-gray-950 dark:text-gray-900" style={{ scrollPaddingTop: '80px' }}>
      {/* 1️⃣ Modern Hero Section with Premium Dark Background */}
      <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
        {/* Navigation - Position it absolutely over the hero */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Elements with Gold Accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 w-[480px] h-[480px] bg-primary/5 rounded-full blur-3xl opacity-40"></div>
        </div>

        {/* Content container - Centered single column */}
        
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Centered Text Content */}
          <motion.div 
            className="text-center relative max-w-5xl mx-auto"
            initial="hidden" 
            animate="visible" 
            variants={stagger}
          >
            {/* Local Watermark for Text Section */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.15]">
               <div className="relative w-[600px] h-[600px] grayscale mix-blend-multiply">
                  <Image
                     src="/images/logo-v3.webp"
                     alt="Travel Kutch Watermark"
                     fill
                     className="object-contain"
                  />
               </div>
            </div>

            <motion.h1 variants={fadeUp} className="font-sora leading-tight tracking-tight relative z-10">
              <MetallicHeading 
                text="Discover Kutch"
                as="strong"
                variant="gold"
                className="text-5xl md:text-6xl lg:text-8xl font-extrabold"
                animationDuration="12s"
              />
              <MetallicHeading 
                text={subtitle} 
                as="strong" 
                variant="silver-green"
                className="block text-2xl md:text-3xl lg:text-4xl font-inter font-medium mt-4 tracking-wide" 
                animationDuration="12s"
              />
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-8 text-base md:text-lg lg:text-xl max-w-4xl mx-auto font-inter font-medium leading-relaxed">
              <span className="text-gray-300 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-xl md:text-2xl lg:text-3xl">
                Where salt meets sky, and stories meet silence
              </span>
              <span className="block text-sm md:text-base mt-5 font-inter font-medium text-primary">
                Your complete Kutch tour guide with real photos and local tips — not just brochures.
              </span>
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                href="/destinations" 
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 hover:from-yellow-500 hover:via-amber-400 hover:to-yellow-600 text-white font-inter font-bold py-3 px-6 rounded-full shadow-xl shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Explore Destinations</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </Link>

              <a 
                href="#destinations" 
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-inter font-semibold py-3 px-6 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Quick Guide</span>
                <span>✨</span>
              </a>
            </motion.div>
          </motion.div>
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
      <section className="relative -mt-20 mb-12 z-20 overflow-visible">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto overflow-visible">
            <Link href="/" className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-600 backdrop-blur-sm border border-yellow-400/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[120px]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <HomeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <span className="text-xs sm:text-sm font-medium text-white font-sans tracking-wide">Home</span>
              </div>
            </Link>
            <Link href="/destinations" className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 backdrop-blur-sm border border-cyan-400/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[120px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <span className="text-xs sm:text-sm font-medium text-white font-sans tracking-wide">Destinations</span>
              </div>
            </Link>
            <Link href="/history" className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 backdrop-blur-sm border border-violet-400/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[120px]">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <span className="text-xs sm:text-sm font-medium text-white font-sans tracking-wide">History</span>
              </div>
            </Link>
            <Link href="/hidden-gems" className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-red-600 backdrop-blur-sm border border-pink-400/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[120px]">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-rose-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <span className="text-xs sm:text-sm font-medium text-white font-sans tracking-wide">Hidden Gems</span>
              </div>
            </Link>
            <Link href="/gallery" className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-lime-500 via-green-500 to-emerald-600 backdrop-blur-sm border border-lime-400/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[120px]">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-600 via-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <span className="text-xs sm:text-sm font-medium text-white font-sans tracking-wide">Gallery</span>
              </div>
            </Link>
            <Link href="/bookings" className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 backdrop-blur-sm border border-emerald-400/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[120px]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <span className="text-xs sm:text-sm font-medium text-white font-sans tracking-wide">Booking</span>
              </div>
            </Link>
            <Link href="#culture" className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-600 backdrop-blur-sm border border-fuchsia-400/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[120px]">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <span className="text-xs sm:text-sm font-medium text-white font-sans tracking-wide">Crafts</span>
              </div>
            </Link>
            <Link href="/about" className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 backdrop-blur-sm border border-orange-400/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[120px]">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <span className="text-xs sm:text-sm font-medium text-white font-sans tracking-wide">About</span>
              </div>
            </Link>
          </div>
        </div>
      </section>



      {/* 3️⃣ Enhanced Featured Destinations Section */}
      <section id="destinations" className="relative overflow-hidden py-28 bg-background">
        {/* Modern gradient background - consistent with hero */}
        <div className="absolute inset-0">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 right-0 opacity-20 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 left-0 opacity-20 bg-yellow-500/20 rounded-full blur-3xl"></div>
        </div>



        <div className="relative max-w-[1600px] mx-auto px-6">
          {/* Centered Title Section - Carousel Removed */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp} 
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <span className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full text-base font-inter font-semibold tracking-wide shadow-xl shadow-cyan-500/30">
                  <span>✨</span>
                  <span>Handpicked Destinations</span>
                </span>
              </div>
              <MetallicHeading 
                text="Top Destinations"
                as="h2"
                variant="gold"
                className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold mb-8 leading-tight md:whitespace-nowrap"
                animationDuration="12s"
              />
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-inter font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Start with our handpicked favorites - the must-visit places that capture the essence of Kutch's beauty and heritage.
              </p>
              
              {/* Decorative Elements Centered */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3 text-gray-300 font-inter font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse"></span>
                  <span className="text-base">Top 6 Featured</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 font-inter font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse"></span>
                  <span className="text-base">Rich Heritage</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 font-inter font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-cyan-700 to-blue-800 rounded-full animate-pulse"></span>
                  <span className="text-base">Cultural Experiences</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Destinations Grid - Show only first 6 */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-10% 0px" }} 
            variants={stagger} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-mobile-1 gap-12 mt-20 max-w-[120rem] mx-auto px-4 sm:px-8 lg:px-12"
          >
            {DESTINATIONS.slice(0, 6).map((destination, index) => {
              // Define unique colors for each card (Dark Theme Adapted)
              const cardColors = [
                { border: 'border-cyan-800/50', hoverBorder: 'hover:border-cyan-500', gradient: 'from-gray-900 via-cyan-950/30 to-blue-950/30', tag: 'bg-cyan-950/50 text-cyan-300 border-cyan-800', button: 'bg-cyan-700 hover:bg-cyan-600' },
                { border: 'border-purple-800/50', hoverBorder: 'hover:border-purple-500', gradient: 'from-gray-900 via-purple-950/30 to-pink-950/30', tag: 'bg-purple-950/50 text-purple-300 border-purple-800', button: 'bg-purple-700 hover:bg-purple-600' },
                { border: 'border-emerald-800/50', hoverBorder: 'hover:border-emerald-500', gradient: 'from-gray-900 via-emerald-950/30 to-teal-950/30', tag: 'bg-emerald-950/50 text-emerald-300 border-emerald-800', button: 'bg-emerald-700 hover:bg-emerald-600' },
                { border: 'border-orange-800/50', hoverBorder: 'hover:border-orange-500', gradient: 'from-gray-900 via-orange-950/30 to-amber-950/30', tag: 'bg-orange-950/50 text-orange-300 border-orange-800', button: 'bg-orange-700 hover:bg-orange-600' },
                { border: 'border-blue-800/50', hoverBorder: 'hover:border-blue-500', gradient: 'from-gray-900 via-blue-950/30 to-indigo-950/30', tag: 'bg-blue-950/50 text-blue-300 border-blue-800', button: 'bg-blue-700 hover:bg-blue-600' },
                { border: 'border-rose-800/50', hoverBorder: 'hover:border-rose-500', gradient: 'from-gray-900 via-rose-950/30 to-red-950/30', tag: 'bg-rose-950/50 text-rose-300 border-rose-800', button: 'bg-rose-700 hover:bg-rose-600' }
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
                    <div className="relative h-64 m-4 rounded-xl overflow-hidden">
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
                        <span className={`backdrop-blur-sm border px-3 py-1 rounded-lg text-xs font-bold font-inter shadow-md ${colors.tag}`}>
                          {destinationCategories[destination.slug] || "Explore"}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-5 pb-5 space-y-3">
                      
                      {/* Title with Location */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-sora font-bold text-gray-100 leading-tight">
                          {destination.title}
                        </h3>
                        <span className="text-xl shrink-0">📍</span>
                      </div>

                      {/* Info Grid */}
                      <div className="space-y-2.5">
                        
                        {/* Famous For */}
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                          <div className="flex items-start gap-2">
                            <span className="text-base shrink-0">✨</span>
                            <div className="min-w-0">
                              <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider font-inter mb-0.5">Famous For</p>
                              <p className="text-xs text-gray-300 font-inter leading-snug">
                                {destination.slug === 'bhuj' && 'Historic palaces, museums & vibrant bazaars'}
                                {destination.slug === 'white-rann' && 'Endless white salt desert & full moon nights'}
                                {destination.slug === 'mandvi' && 'Pristine beaches & Vijay Vilas Palace'}
                                {destination.slug === 'dhordo' && 'Rann Utsav festival & tent city experience'}
                                {destination.slug === 'kalo-dungar' && "Black Hills & India's magnetic hill"}
                                {destination.slug === 'lakhpat' && 'Ancient fort ruins & Gurudwara'}
                                {destination.slug === 'mata-na-madh' && 'Ancient Ashapura Mata temple & pilgrimage site'}
                                {destination.slug === 'road-to-heaven' && 'Iconic straight highway through salt flats'}
                                {!['bhuj', 'white-rann', 'mandvi', 'dhordo', 'kalo-dungar', 'lakhpat', 'mata-na-madh', 'road-to-heaven'].includes(destination.slug) && 'Rich cultural heritage & scenic beauty'}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Best Season */}
                        <div className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 rounded-lg p-3 border border-white/10">
                          <div className="flex items-start gap-2">
                            <span className="text-base shrink-0">🌤️</span>
                            <div className="min-w-0">
                              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider font-inter mb-0.5">Best Season</p>
                              <p className="text-xs text-gray-300 font-inter font-semibold">
                                November to February
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        <div className={`flex items-center justify-between rounded-lg px-4 py-2.5 transition-colors duration-300 ${colors.button}`}>
                          <span className="text-white font-inter font-semibold text-sm">View Details</span>
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
            <div className="bg-gradient-to-r from-gray-900 via-cyan-950/50 to-blue-950/50 backdrop-blur-md rounded-3xl p-12 max-w-3xl mx-auto border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-sora font-bold mb-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                Explore More Destinations
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-inter leading-relaxed">
                We've shown you just a glimpse! Discover {DESTINATIONS.length - 6} more incredible destinations waiting to be explored in Kutch.
              </p>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 text-white px-10 py-5 rounded-full font-inter font-bold text-lg hover:from-cyan-500 hover:via-sky-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-900/50 group border border-white/10"
              >
                <span>View All {DESTINATIONS.length}+ Destinations</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-2xl">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ShortsGallery />

      {/* 5️⃣ Enhanced Culture & Crafts Section */}
      <section id="culture" className="relative overflow-hidden py-28 scroll-mt-28 bg-background">
        {/* Modern gradient background */}
        <div className="absolute inset-0">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-20 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 right-0 opacity-20 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>



        <div className="relative max-w-[1600px] mx-auto px-6">
          {/* Centered Title Section */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp} 
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full text-base font-inter font-semibold tracking-wide shadow-xl shadow-cyan-500/30">
                <span>🎨</span>
                <span>Traditional Arts & Culture</span>
              </span>
            </div>
            <MetallicHeading 
              text="Culture & Crafts"
              as="h2"
              variant="gold"
              className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold mb-8 leading-tight"
              animationDuration="12s"
            />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-inter font-light mb-8">
              Immerse yourself in the vibrant world of Kutchi traditions, where every thread tells a story 
              <span className="block mt-3 text-gray-200 font-medium">and every craft carries centuries of heritage.</span>
            </p>
            
            {/* Decorative Elements */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 text-gray-300 font-inter font-medium">
                <span className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse"></span>
                <span className="text-base">Traditional Textiles</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 font-inter font-medium">
                <span className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse"></span>
                <span className="text-base">Ancient Techniques</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 font-inter font-medium">
                <span className="w-4 h-4 bg-gradient-to-r from-cyan-700 to-blue-800 rounded-full animate-pulse"></span>
                <span className="text-base">Master Artisans</span>
              </div>
            </div>
          </motion.div>

          {/* Craft Cards Grid Below - Compact Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Bandhani */}
            <Link href="/crafts/bandhani" className="group">
              <div className="bg-gradient-to-br from-cyan-950/30 to-cyan-900/10 rounded-2xl border border-cyan-800/50 hover:border-cyan-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-xl border border-white/5">
                  <Image 
                    src="/images/crafts/bandhani/bandhani1.webp" 
                    alt="Bandhani"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 pt-2">
                  <h3 className="font-bold text-gray-200 mb-2 text-base font-sora">Bandhani</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 font-inter">Tie-dye artistry with intricate dot patterns</p>
                </div>
              </div>
            </Link>

            {/* Ajrakh */}
            <Link href="/crafts/ajrakh" className="group">
              <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 rounded-2xl border border-blue-800/50 hover:border-blue-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-xl border border-white/5">
                  <Image 
                    src="/images/crafts/ajrakh/ajrakh1.webp" 
                    alt="Ajrakh"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 pt-2">
                  <h3 className="font-bold text-gray-200 mb-2 text-base font-sora">Ajrakh</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 font-inter">Block-printed geometric masterpieces</p>
                </div>
              </div>
            </Link>

            {/* Rogan Art */}
            <Link href="/crafts/rogan-art" className="group">
              <div className="bg-gradient-to-br from-indigo-950/30 to-indigo-900/10 rounded-2xl border border-indigo-800/50 hover:border-indigo-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-xl border border-white/5">
                  <Image 
                    src="/images/crafts/rogan/rogan1.webp" 
                    alt="Rogan Art"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 pt-2">
                  <h3 className="font-bold text-gray-200 mb-2 text-base font-sora">Rogan Art</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 font-inter">Painted fabric with castor oil colors</p>
                </div>
              </div>
            </Link>

            {/* Mirror Work */}
            <Link href="/crafts/mirror-work" className="group">
              <div className="bg-gradient-to-br from-purple-950/30 to-purple-900/10 rounded-2xl border border-purple-800/50 hover:border-purple-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-xl bg-gradient-to-br from-purple-900/50 to-purple-800/50 flex items-center justify-center border border-white/5">
                  <Image 
                    src="/images/crafts/mirror/mirror1.webp" 
                    alt="Mirror Work"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 pt-2">
                  <h3 className="font-bold text-gray-200 mb-2 text-base font-sora">Mirror Work</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 font-inter">Shisha embroidery with tiny mirrors</p>
                </div>
              </div>
            </Link>

            {/* Sudi Chappu */}
            <Link href="/crafts/sudi-chappu" className="group">
              <div className="bg-gradient-to-br from-teal-950/30 to-teal-900/10 rounded-2xl border border-teal-800/50 hover:border-teal-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-xl border border-white/5">
                  <Image 
                    src="/images/crafts/sudi/sudi-hero.webp" 
                    alt="Sudi Chappu"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 pt-2">
                  <h3 className="font-bold text-gray-200 mb-2 text-base font-sora">Sudi Chappu</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 font-inter">Traditional knife-making in Anjar</p>
                </div>
              </div>
            </Link>

            {/* Pottery */}
            <Link href="/crafts/pottery" className="group">
              <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/10 rounded-2xl border border-amber-800/50 hover:border-amber-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-xl border border-white/5">
                  <Image 
                    src="/images/crafts/pottery/pottery1.webp" 
                    alt="Pottery"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 pt-2">
                  <h3 className="font-bold text-gray-200 mb-2 text-base font-sora">Pottery</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 font-inter">Clay craft traditions across villages</p>
                </div>
              </div>
            </Link>

            {/* Leather Craft */}
            <Link href="/crafts/leather-craft" className="group">
              <div className="bg-gradient-to-br from-orange-950/30 to-orange-900/10 rounded-2xl border border-orange-800/50 hover:border-orange-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-xl border border-white/5">
                  <Image 
                    src="/images/crafts/leather/leather-hero.png" 
                    alt="Leather Craft"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 pt-2">
                  <h3 className="font-bold text-gray-200 mb-2 text-base font-sora">Leather Craft</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 font-inter">Traditional leather working & mojari shoes</p>
                </div>
              </div>
            </Link>

            {/* Weaving */}
            <Link href="/crafts/weaving" className="group">
              <div className="bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 rounded-2xl border border-emerald-800/50 hover:border-emerald-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-xl border border-white/5">
                  <Image 
                    src="/images/crafts/weaving/weaving-hero.png" 
                    alt="Weaving"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 pt-2">
                  <h3 className="font-bold text-gray-200 mb-2 text-base font-sora">Weaving</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 font-inter">Handloom textiles & traditional carpets</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-16 bg-gradient-to-br from-[#2c3e50] via-[#000000] to-[#2c3e50] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.webp')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
           <div className="text-center mb-10">
              <MetallicHeading 
                text="Plan Your Journey"
                as="h2"
                variant="gold"
                className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-2 md:whitespace-nowrap"
                animationDuration="12s"
              />
              <p className="text-gray-300">Find the best deals on hotels and flights</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BookingWidget compact={true} />
              <TripWidget compact={true} />
           </div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800" />
      </div>

      {/* 5️⃣ Enhanced Travel Guide Section */}
      <section id="guide" className="relative overflow-hidden py-24 bg-background">
        {/* Consistent Dark Background with Gold Accents */}
        <div className="absolute inset-0">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-10 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 right-0 opacity-10 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6">
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
                  <span className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-inter font-bold tracking-wide shadow-lg shadow-cyan-500/30 border border-cyan-400/30">
                    ✈️ Plan Your Journey
                  </span>
                </div>
                <MetallicHeading 
                  text="Travel Essentials"
                  as="h2"
                  variant="gold"
                  className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold mb-6 leading-tight"
                  animationDuration="12s"
                />
                <p className="text-xl text-gray-300 leading-relaxed font-inter font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
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
                  className="group bg-gradient-to-br from-cyan-950/30 via-sky-950/30 to-blue-950/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-900/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">🗓️</span>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-sora font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">When to Visit</h3>
                      <p className="text-sm text-gray-400 font-inter">Choose your perfect season</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-inter font-bold text-cyan-400">November - February</h4>
                        <span className="px-2 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs rounded-full font-bold">BEST</span>
                      </div>
                      <p className="text-xs text-gray-300 font-inter">Pleasant weather (10-25°C), Rann Utsav festival, perfect for desert camping.</p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-inter font-bold text-indigo-400">March - April</h4>
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs rounded-full font-bold">GOOD</span>
                      </div>
                      <p className="text-xs text-gray-300 font-inter">Mild temperatures, fewer crowds, great for photography and village visits.</p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-inter font-bold text-red-400">May - October</h4>
                        <span className="px-2 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs rounded-full font-bold">AVOID</span>
                      </div>
                      <p className="text-xs text-gray-300 font-inter">Extremely hot (40-48°C), monsoon rains, many facilities closed.</p>
                    </div>
                  </div>
                </motion.div>

                {/* How to Reach */}
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group bg-gradient-to-br from-blue-950/30 via-cyan-950/30 to-teal-950/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">✈️</span>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-sora font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Getting There</h3>
                      <p className="text-sm text-gray-400 font-inter">All routes lead to Kutch</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-800">
                          <span className="text-xl">✈️</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-inter font-bold text-blue-400 mb-1">By Air</h4>
                          <p className="text-xs text-gray-300 font-inter">Bhuj Airport (BHJ) - Direct flights from major cities, 60 km from Rann.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-indigo-800">
                          <span className="text-xl">🚂</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-inter font-bold text-indigo-400 mb-1">By Train</h4>
                          <p className="text-xs text-gray-300 font-inter">Bhuj Railway Station - Overnight trains from Mumbai, Delhi, Ahmedabad.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-teal-500/50 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-900/50 to-cyan-900/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-800">
                          <span className="text-xl">🚗</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-inter font-bold text-teal-400 mb-1">By Road</h4>
                          <p className="text-xs text-gray-300 font-inter">Well-connected highways from Ahmedabad (330 km) and Rajkot (250 km).</p>
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
                <div className="bg-gradient-to-br from-orange-950/40 via-amber-950/40 to-yellow-950/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-800/50">
                <div className="mb-6">
                  <span className="block w-fit px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-700 text-white rounded-full text-xs font-inter font-bold mb-4 shadow-lg shadow-orange-900/50">
                    🏨 ACCOMMODATIONS
                  </span>
                  <MetallicHeading 
                    text="Stay in Comfort"
                    as="h3"
                    variant="gold"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-2"
                    animationDuration="12s"
                  />
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-space-grotesk font-medium mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-relaxed">
              Beyond the White Desert
            </p>
                </div>
                
                {/* Placeholder Images Grid */}
                <div className="space-y-4">
                  <a 
                    href="https://www.booking.com/searchresults.html?ss=Bhuj%2C+Gujarat&efdco=1&label=gen173rf-10CAEoggI46AdIM1gDaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGiAg5sb2NhbGhvc3Q6MzAwMKgCAbgCwov7yAbAAgHSAiQ5MmI3NTUzZi00MmYtNGNmNi05ODFkLTMyODk1MGMzNTIxNlYAgHgAgE&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=-2091701&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=947b35e1a2bd0635&ac_meta=GhA5NDdiMzVlMWEyYmQwNjM1IAAoATICZW46BGJodWo%3D&checkin=2025-11-20&checkout=2025-12-22&group_adults=2&no_rooms=1&group_children=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-white/10"
                  >
                    <Image 
                      src="/images/luxury-hotel.webp" 
                      alt="Luxury Hotels in Bhuj" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                      <h4 className="text-white font-sora font-bold text-2xl mb-1 drop-shadow-md">Luxury Hotels</h4>
                      <p className="text-gray-300 font-inter text-sm font-medium drop-shadow-sm">Premium resorts & 5-star properties</p>
                    </div>
                  </a>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://www.booking.com/searchresults.html?ss=Bhuj%2C+Gujarat&efdco=1&label=gen173rf-10CAEoggI46AdIM1gDaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGiAg5sb2NhbGhvc3Q6MzAwMKgCAbgCwov7yAbAAgHSAiQ5MmI3NTUzZi00MmYtNGNmNi05ODFkLTMyODk1MGMzNTIxNlYAgHgAgE&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=-2091701&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=947b35e1a2bd0635&ac_meta=GhA5NDdiMzVlMWEyYmQwNjM1IAAoATICZW46BGJodWo%3D&checkin=2025-11-20&checkout=2025-12-22&group_adults=2&no_rooms=1&group_children=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-white/10"
                    >
                      <Image 
                        src="/images/homestay-village.webp" 
                        alt="Homestays in Bhuj" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                        <h4 className="text-white font-sora font-bold text-lg drop-shadow-md">Homestays</h4>
                        <p className="text-gray-300 font-inter text-xs font-medium px-1 drop-shadow-sm">Authentic village life</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.booking.com/searchresults.html?ss=Bhuj%2C+Gujarat&efdco=1&label=gen173rf-10CAEoggI46AdIM1gDaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGiAg5sb2NhbGhvc3Q6MzAwMKgCAbgCwov7yAbAAgHSAiQ5MmI3NTUzZi00MmYtNGNmNi05ODFkLTMyODk1MGMzNTIxNlYAgHgAgE&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=-2091701&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=947b35e1a2bd0635&ac_meta=GhA5NDdiMzVlMWEyYmQwNjM1IAAoATICZW46BGJodWo%3D&checkin=2025-11-20&checkout=2025-12-22&group_adults=2&no_rooms=1&group_children=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-white/10"
                    >
                      <Image 
                        src="/images/desert-camp-tent.webp" 
                        alt="Desert Camps in Kutch" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                        <h4 className="text-white font-sora font-bold text-lg drop-shadow-md">Desert Camps</h4>
                        <p className="text-gray-300 font-inter text-xs font-medium px-1 drop-shadow-sm">Glamping under stars</p>
                      </div>
                    </a>
                  </div>
                  
                  <a 
                    href="https://www.booking.com/searchresults.html?ss=Bhuj%2C+Gujarat&efdco=1&label=gen173rf-10CAEoggI46AdIM1gDaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGiAg5sb2NhbGhvc3Q6MzAwMKgCAbgCwov7yAbAAgHSAiQ5MmI3NTUzZi00MmYtNGNmNi05ODFkLTMyODk1MGMzNTIxNlYAgHgAgE&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=-2091701&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=947b35e1a2bd0635&ac_meta=GhA5NDdiMzVlMWEyYmQwNjM1IAAoATICZW46BGJodWo%3D&checkin=2025-11-20&checkout=2025-12-22&group_adults=2&no_rooms=1&group_children=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-white/10"
                  >
                    <Image 
                      src="/images/heritage-palace.webp" 
                      alt="Heritage Stays in Bhuj" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                      <h4 className="text-white font-sora font-bold text-2xl mb-1 drop-shadow-md">Heritage Stays</h4>
                      <p className="text-gray-300 font-inter text-sm font-medium drop-shadow-sm">Royal palaces & historic havelis</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-orange-800/60">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">💰</span>
                      <h4 className="font-inter font-bold text-orange-400">Budget Options</h4>
                    </div>
                    <p className="text-xs text-gray-300 font-inter">Starting from ₹800/night - Guesthouses, hostels, and budget hotels available in Bhuj and surrounding villages.</p>
                  </div>
                  
                  <Link 
                    href="/bookings"
                    className="block w-full text-center bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-500 hover:via-amber-500 hover:to-yellow-500 text-white px-6 py-4 rounded-2xl font-inter font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-900/50"
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
            className="group bg-gradient-to-br from-cyan-950/40 via-sky-950/40 to-blue-950/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-cyan-800/50 hover:border-cyan-500/70 hover:shadow-2xl transition-all duration-500 mb-16 mt-20"
          >
            <div className="flex flex-col items-center justify-center text-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-900/50 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🎒</span>
              </div>
              <div>
                <MetallicHeading 
                  text="Packing Essentials"
                  as="h3"
                  variant="gold"
                  className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold"
                  animationDuration="12s"
                />
                <p className="text-base text-gray-400 font-inter">Travel smart, travel light</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-cyan-800/60 hover:border-cyan-500 transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center text-center gap-2 h-full">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">👕</span>
                  <div>
                    <h4 className="font-inter font-bold text-cyan-400 mb-1 text-sm">Clothing</h4>
                    <p className="text-xs text-gray-400 font-inter">Cotton & warm layers</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-indigo-800/60 hover:border-indigo-500 transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center text-center gap-2 h-full">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">👟</span>
                  <div>
                    <h4 className="font-inter font-bold text-indigo-400 mb-1 text-sm">Footwear</h4>
                    <p className="text-xs text-gray-400 font-inter">Shoes & sandals</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-blue-800/60 hover:border-blue-500 transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center text-center gap-2 h-full">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">☀️</span>
                  <div>
                    <h4 className="font-inter font-bold text-blue-400 mb-1 text-sm">Sun Protection</h4>
                    <p className="text-xs text-gray-400 font-inter">Sunscreen & hat</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-cyan-800/60 hover:border-cyan-500 transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center text-center gap-2 h-full">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📸</span>
                  <div>
                    <h4 className="font-inter font-bold text-cyan-400 mb-1 text-sm">Camera Gear</h4>
                    <p className="text-xs text-gray-400 font-inter">Camera & batteries</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-teal-800/60 hover:border-teal-500 transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center text-center gap-2 h-full">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">💧</span>
                  <div>
                    <h4 className="font-inter font-bold text-teal-400 mb-1 text-sm">Hydration</h4>
                    <p className="text-xs text-gray-400 font-inter">Water & snacks</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-sky-800/60 hover:border-sky-500 transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center text-center gap-2 h-full">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">💊</span>
                  <div>
                    <h4 className="font-inter font-bold text-sky-400 mb-1 text-sm">Medical Kit</h4>
                    <p className="text-xs text-gray-400 font-inter">First aid & meds</p>
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
            className="group bg-gradient-to-br from-emerald-950/40 via-teal-950/40 to-cyan-950/40 backdrop-blur-xl rounded-3xl p-12 shadow-2xl mb-16 border-2 border-emerald-800/50 hover:border-emerald-500/70 hover:shadow-3xl transition-all duration-500"
          >
            <div className="text-center mb-10">
              <span className="block w-fit mx-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-inter font-bold tracking-wide mb-6 shadow-lg shadow-emerald-900/50 border border-emerald-500/30">
                🛡️ TRAVEL SAFELY
              </span>
              <MetallicHeading 
                text="Safety & Important Tips"
                as="h3"
                variant="gold"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-4"
                animationDuration="12s"
              />
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-inter mb-8 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-relaxed px-4">
              Experience the magic of India's largest salt desert, vibrant culture, and timeless traditions
            </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-5">
              <div className="group bg-black/40 backdrop-blur-sm rounded-xl p-5 text-center border border-emerald-800/60 hover:border-emerald-500 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-emerald-800 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏜️</span>
                </div>
                <h4 className="font-inter font-bold mb-2 text-emerald-400">Desert Essentials</h4>
                <p className="text-xs text-gray-400 font-inter">Check weather daily, carry plenty of water, protect from heat</p>
              </div>
              <div className="group bg-black/40 backdrop-blur-sm rounded-xl p-5 text-center border border-teal-800/60 hover:border-teal-500 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-900/50 to-cyan-900/50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-teal-800 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📱</span>
                </div>
                <h4 className="font-inter font-bold mb-2 text-teal-400">Stay Connected</h4>
                <p className="text-xs text-gray-400 font-inter">Keep emergency contacts, network may be limited in remote areas</p>
              </div>
              <div className="group bg-black/40 backdrop-blur-sm rounded-xl p-5 text-center border border-blue-800/60 hover:border-blue-500 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-blue-800 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🗺️</span>
                </div>
                <h4 className="font-inter font-bold mb-2 text-blue-400">Local Guide</h4>
                <p className="text-xs text-gray-400 font-inter">Hire experienced guides for authentic village experiences</p>
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
            <div className="bg-gray-950/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/10">
              <h3 className="text-3xl md:text-4xl font-sora font-bold text-white mb-4">Need Personalized Guidance?</h3>
              <p className="text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
                Get customized itineraries, local insights, and 24/7 support for your Kutch journey. 
                Our local experts are here to help plan your perfect adventure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-inter font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-cyan-900/50 flex items-center gap-2"
                >
                  <span>📞</span>
                  <span>Contact Our Experts</span>
                </Link>
                <Link
                  href="/destinations"
                  className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-inter font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/50 flex items-center gap-2"
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
      <section id="contact" className="relative overflow-hidden py-20 bg-background">
        {/* Consistent Dark Background */}
        <div className="absolute inset-0">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-20 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="blob blob-2 w-[400px] h-[400px] top-1/3 right-0 opacity-20 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-[1600px] mx-auto px-6">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full text-sm font-inter font-semibold tracking-wide shadow-lg shadow-green-500/30">
                <span>💬</span>
                <span>Join Our Community</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-sora font-extrabold mb-6 holographic">
              Stay Connected
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-inter font-medium">
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
              <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-800/50 shadow-lg">
                <h3 className="text-2xl font-sora font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                  <span className="text-4xl">🌟</span>
                  What You'll Get
                </h3>
                <ul className="space-y-4 text-base text-gray-300 font-inter">
                  <li className="flex items-start gap-4 p-3 bg-cyan-950/30 rounded-xl border border-cyan-800/30">
                    <span className="text-cyan-400 text-2xl flex-shrink-0">✨</span>
                    <span className="font-medium">Exclusive Rann Utsav festival updates and early bird offers</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-blue-950/30 rounded-xl border border-blue-800/30">
                    <span className="text-blue-400 text-2xl flex-shrink-0">📸</span>
                    <span className="font-medium">Stunning photo collections from hidden corners of Kutch</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-teal-950/30 rounded-xl border border-teal-800/30">
                    <span className="text-teal-400 text-2xl flex-shrink-0">🗺️</span>
                    <span className="font-medium">Local insider tips and off-the-beaten-path recommendations</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-sky-950/30 rounded-xl border border-sky-800/30">
                    <span className="text-sky-400 text-2xl flex-shrink-0">🎯</span>
                    <span className="font-medium">Personalized travel guides and itinerary suggestions</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/919825034580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white px-6 py-4 rounded-2xl font-bold text-base shadow-xl shadow-green-500/40 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">💬</span>
                  <span className="relative z-10 whitespace-nowrap">Join Community</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </motion.a>

                <motion.a
                  href="/about"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-4 rounded-2xl font-bold text-base border-2 border-white/20 shadow-lg shadow-cyan-500/30 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">🎯</span>
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
              <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 border-2 border-blue-800/60 shadow-lg">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 text-center font-sora">
                  Explore the Magic of Kutch
                </h3>
                <div className="w-full h-80 rounded-2xl overflow-hidden border border-cyan-800/50 shadow-xl">
                  <iframe
                    title="Kutch Interactive Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946493.0711048405!2d68.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950c4976e1d8b25%3A0x76e2f6be5b8c8a86!2sKutch%20District%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1735228800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0"
                    style={{ filter: "invert(90%) hue-rotate(180deg)" }}
                  />
                </div>
                <p className="text-gray-400 text-center mt-4 text-sm font-inter font-medium">
                  From the White Desert to ancient ports, discover your perfect Kutch adventure
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Footer */}
      <footer className="relative overflow-hidden bg-background border-t border-white/10">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
        
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"></div>
        
        <div className="relative pt-20 pb-12">
          <div className="max-w-[1600px] mx-auto px-6">
            
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* About Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-lg"
                >
                  <MetallicHeading 
              text="Discover Kutch"
              as="h1"
              variant="gold"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sora font-extrabold drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-6 leading-tight"
              animationDuration="12s"
            />
                  <p className="text-xl text-gray-300 leading-relaxed mb-8 font-inter">
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
                className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-lg"
              >
                <h4 className="text-2xl font-sora font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-6">Explore</h4>
                <ul className="space-y-3 font-inter">
                  {[
                    { name: "Home", href: "/", icon: "🏠" },
                    { name: "Destinations", href: "/destinations", icon: "🗺️" },
                    { name: "Hidden Gems", href: "/hidden-gems", icon: "💎" },
                    { name: "History", href: "/history", icon: "🏰" },
                    { name: "Bookings", href: "/bookings", icon: "📅" },
                    { name: "Blog", href: "/blog", icon: "📝" },
                    { name: "About Us", href: "/about", icon: "ℹ️" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
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
                className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-lg"
              >
                <h4 className="text-2xl font-sora font-bold bg-gradient-to-r from-cyan-600 to-orange-600 bg-clip-text text-transparent mb-6">Connect</h4>
                <div className="space-y-5 font-inter">
                  <div className="flex items-start gap-3 text-white">
                    <span className="text-2xl mt-1">📍</span>
                    <div>
                      <p className="font-semibold mb-1 text-white">Visit Us</p>
                      <p className="text-sm leading-relaxed text-gray-100">Bhuj, Kutch District<br />Gujarat, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-white">
                    <span className="text-2xl mt-1">📞</span>
                    <div>
                      <p className="font-semibold mb-1 text-white">Call Us</p>
                      <a href="tel:+919825034580" className="hover:text-cyan-300 transition-colors text-sm block text-gray-100">+91 98250 34580</a>
                      <a href="tel:+919512234395" className="hover:text-cyan-300 transition-colors text-sm block text-gray-100">+91 95122 34395</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-white">
                    <span className="text-2xl mt-1">✉️</span>
                    <div>
                      <p className="font-semibold mb-1 text-white">Email</p>
                      <a href="mailto:info@travelkutch.org" className="hover:text-cyan-300 transition-colors text-sm text-gray-100">
                        info@travelkutch.org
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
              <h4 className="text-3xl font-bold text-center text-white mb-8 font-playfair">
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
                  <p className="text-gray-300 text-center mt-4 font-medium">
                    From the vast salt marshes of the Rann to historic ports along the Arabian Sea — explore every corner of this magnificent region
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <motion.p 
                  className="text-gray-400 text-center md:text-left font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  © {new Date().getFullYear()} <span className="text-white font-bold">Travel Kutch</span>. 
                  Crafted with passion for authentic cultural experiences.
                </motion.p>
                
                <motion.p 
                  className="text-gray-400 text-sm font-medium"
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
              className="bg-black/90 backdrop-blur-xl rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedTextile && textileInfo[selectedTextile as keyof typeof textileInfo] && (
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {textileInfo[selectedTextile as keyof typeof textileInfo].title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {textileInfo[selectedTextile as keyof typeof textileInfo].description}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedTextile(null)}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/10"
                    >
                      <span className="text-gray-300 text-xl">×</span>
                    </button>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features:</h3>
                    <div className="grid gap-3">
                      {textileInfo[selectedTextile as keyof typeof textileInfo].details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                          <span className="text-gray-300 text-sm font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Villages */}
                  <div className="bg-white/5 p-6 rounded-2xl mb-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">🏘️ Where to Experience:</h3>
                    <p className="text-gray-400">{textileInfo[selectedTextile as keyof typeof textileInfo].villages}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/destinations"
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg"
                      onClick={() => setSelectedTextile(null)}
                    >
                      Explore Destinations
                    </Link>
                    <button
                      onClick={() => setSelectedTextile(null)}
                      className="bg-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
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
