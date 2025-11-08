// /app/page.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, Menu, MenuButton, MenuItem, MenuItems, PopoverButton, PopoverPanel } from "@headlessui/react";
import QuickGuide from "./components/QuickGuide";
import Navigation from "./components/Navigation";
import { DESTINATIONS } from "@/app/destinations/data";
import { useState } from "react";

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
    <main className="scroll-smooth selection:bg-gray-300 selection:text-gray-900 relative text-gray-900 dark:bg-gray-950 dark:text-gray-900">
      <Navigation />

      {/* 1️⃣ Modern Hero Section with Animated Mesh Background */}
      <section id="home" className="relative h-[100svh] min-h-[560px] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Animated blob background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-50"></div>
          <div className="blob blob-2 w-[400px] h-[400px] top-1/3 right-0 opacity-50"></div>
          <div className="blob blob-3 w-[450px] h-[450px] bottom-0 left-1/2 opacity-50"></div>
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        {/* Hero image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/white-rann-hero.jpg"
            alt="Panoramic view of the White Rann of Kutch salt desert under blue sky - a pristine white landscape stretching to the horizon"
            fill
            priority
            className="object-cover opacity-30 brightness-95 contrast-110 saturate-110 mix-blend-overlay"
            sizes="100vw"
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        {/* Content container without background */}
        <motion.div 
          className="relative z-10 px-6 max-w-6xl mx-auto pt-16" 
          initial="hidden" 
          animate="visible" 
          variants={stagger}
        >
          <motion.h1 variants={fadeUp} className="font-sora leading-tight tracking-tight">
            <span className="block text-6xl md:text-8xl lg:text-9xl font-extrabold holographic drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
              Discover Kutch
            </span>
            <motion.span 
              variants={fadeUp} 
              className="block text-2xl md:text-3xl lg:text-4xl font-poppins font-medium bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-transparent mt-6 drop-shadow-[0_6px_14px_rgba(0,0,0,0.3)] tracking-wide sparkle-wrap" 
              tabIndex={0}
            >
              {subtitle.split("").map((ch, i) => (
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

          <motion.p variants={fadeUp} className="mt-8 text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto font-space-grotesk font-medium leading-relaxed">
            <span className="text-gray-900 font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              Where salt meets sky, and stories meet silence
            </span>
            <span className="block text-lg md:text-xl lg:text-2xl mt-6 font-poppins font-light text-gray-800">
              Practical guides, real photos, and local tips — not tourist brochures.
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-5">
            <Link 
              href="/destinations" 
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-poppins font-semibold py-4 px-8 rounded-full shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Explore Destinations</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </Link>
            <a 
              href="#quick-guide" 
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xl text-gray-900 font-poppins font-medium py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/30 hover:bg-white/20"
            >
              <span>Quick Guide</span>
              <span>✨</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.9 }} 
          transition={{ delay: 1, duration: 0.8 }} 
          className="pointer-events-none absolute inset-x-0 bottom-28 flex justify-center z-20"
        >
          <div className="h-px w-56 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 6 }} 
          animate={{ opacity: 0.8, y: 0 }} 
          transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }} 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-900 text-3xl z-20"
        >
          ↓
        </motion.div>
      </section>

      {/* 2️⃣ Enhanced Explore Kutch Section */}
      <section id="quick-guide" className="relative overflow-hidden py-28">
        {/* Modern gradient background - consistent with hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-1/3 right-0 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Enhanced Header with Beautiful Typography */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }} 
            variants={fadeUp} 
            className="text-center mb-20"
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-900 rounded-full text-sm font-poppins font-semibold tracking-wide shadow-lg shadow-gray-800/30">
                <span>🗺️</span>
                <span>Local Insights</span>
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-sora font-extrabold mb-8 leading-tight holographic">
              Explore Kutch
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins font-light">
              Local-first insights to plan the perfect trip across seasons and regions. 
              <span className="block mt-2 text-gray-800 font-medium">Get expert guidance for an authentic Kutch experience.</span>
            </p>
            
            {/* Decorative Elements */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-gray-600 font-poppins font-medium">
                <span className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></span>
                <span className="text-sm">Expert Tips</span>
              </div>
              <div className="w-px h-5 bg-gradient-to-b from-gray-400 to-gray-500"></div>
              <div className="flex items-center gap-2 text-gray-600 font-poppins font-medium">
                <span className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></span>
                <span className="text-sm">Local Insights</span>
              </div>
              <div className="w-px h-5 bg-gradient-to-b from-gray-400 to-gray-500"></div>
              <div className="flex items-center gap-2 text-gray-600 font-poppins font-medium">
                <span className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></span>
                <span className="text-sm">Season Guide</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced QuickGuide Component Container */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fade} 
            className="relative"
          >
            {/* Modern card with glassmorphism */}
            <div className="frosted-glass rounded-[2rem] shadow-2xl border-2 border-gray-200 p-10 md:p-14 relative overflow-hidden bg-white/10">
              {/* Decorative gradient orb */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full opacity-20 blur-3xl"></div>
              
              <div className="relative z-10">
                <QuickGuide />
              </div>
            </div>
            
            {/* Decorative Glow Effect */}
            <div className="absolute inset-0 rounded-[2rem] opacity-40 pointer-events-none">
              <div className="absolute inset-0 rounded-[2rem] shadow-[0_0_100px_rgba(139,92,246,0.4)]"></div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp} 
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-900 px-10 py-5 rounded-full font-poppins font-bold text-lg shadow-2xl border-2 border-gray-200 hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="text-2xl">🧭</span>
              <span>Ready to explore? Plan your perfect Kutch journey</span>
              <span className="text-2xl">✨</span>
            </div>
            <p className="text-gray-600 font-poppins text-base mt-6">Expert recommendations for every season and interest</p>
          </motion.div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      </div>

      {/* 3️⃣ Enhanced Featured Destinations Section */}
      <section id="destinations" className="relative overflow-hidden py-28">
        {/* Modern gradient background - consistent with hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 right-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 left-0 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Enhanced Header with Beautiful Typography */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp} 
            className="text-center mb-20"
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-900 rounded-full text-sm font-poppins font-semibold tracking-wide shadow-lg shadow-gray-800/30">
                <span>✨</span>
                <span>Handpicked Destinations</span>
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-sora font-extrabold mb-8 leading-tight holographic">
              Featured Destinations
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins font-light">
              Discover the most captivating places in Kutch, each with its own story of heritage, 
              <span className="block mt-2 text-gray-800 font-medium">natural beauty, and cultural significance.</span>
            </p>
            
            {/* Decorative Elements */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-gray-600 font-poppins font-medium">
                <span className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></span>
                <span className="text-sm">12+ Destinations</span>
              </div>
              <div className="w-px h-5 bg-gradient-to-b from-gray-400 to-gray-500"></div>
              <div className="flex items-center gap-2 text-gray-600 font-poppins font-medium">
                <span className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></span>
                <span className="text-sm">Rich Heritage</span>
              </div>
              <div className="w-px h-5 bg-gradient-to-b from-gray-400 to-gray-500"></div>
              <div className="flex items-center gap-2 text-gray-700 font-poppins font-medium">
                <span className="w-3 h-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full animate-pulse"></span>
                <span className="text-sm">Cultural Experiences</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Destinations Grid */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-10% 0px" }} 
            variants={stagger} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {DESTINATIONS.map((destination) => (
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
                  whileHover={{ y: -16, scale: 1.03 }} 
                  className="modern-card relative frosted-glass rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)]"
                >
                  {/* Enhanced Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={`${destination.title} - ${destinationDescriptions[destination.slug] || destination.title} in Kutch, Gujarat`}
                      fill
                      className="object-cover group-hover:scale-125 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      priority={false}
                      loading="lazy"
                      quality={85}
                    />
                    {/* Beautiful Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 via-transparent to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Premium Category Badge */}
                    <div className="absolute top-5 right-5 z-10">
                      <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-gray-900 px-5 py-2.5 rounded-full shadow-2xl backdrop-blur-sm border-2 border-white/30 font-poppins">
                        <span className="text-xs font-bold tracking-wide">{destinationCategories[destination.slug] || "Explore"}</span>
                      </div>
                    </div>
                    
                    {/* Floating Action Button */}
                    <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 z-10">
                      <div className="w-14 h-14 bg-gradient-to-r from-white/95 to-white/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center border-2 border-white/50 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:text-gray-900 transition-all duration-300">
                        <span className="text-gray-600 hover:text-gray-900 text-xl font-bold">→</span>
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 z-10">
                      <h3 className="text-3xl font-sora font-bold text-gray-900 mb-2 leading-tight deep-shadow">
                        {destination.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-100/95">
                        <span className="text-sm">📍</span>
                        <span className="text-sm font-poppins font-medium">Kutch, Gujarat</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content Area */}
                  <div className="p-7 bg-white/90 backdrop-blur-xl border-t border-gray-200">
                    <p className="text-gray-700 font-poppins text-sm leading-relaxed mb-5 line-clamp-3 group-hover:text-gray-900 transition-colors">
                      {destinationDescriptions[destination.slug] || "Discover this amazing destination in Kutch with rich history and stunning landscapes."}
                    </p>
                    
                    {/* Action Footer */}
                    <div className="flex items-center justify-between pt-5 border-t border-gray-200">
                      <span className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-poppins font-bold text-sm">
                        <span>Explore More</span>
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gray-500/30 rounded-full flex items-center justify-center">
                          <span className="text-xs">✨</span>
                        </div>
                        <span className="text-xs font-poppins font-semibold text-gray-600">Featured</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp} 
            className="text-center mt-16"
          >
            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-gray-600 hover:via-gray-600 hover:to-gray-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-200"
            >
              <span>View All Destinations</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <p className="text-gray-700 text-sm mt-4">Discover all 12+ amazing places in Kutch</p>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ Enhanced Culture & Experiences Section */}
      <section id="culture" className="relative overflow-hidden py-24">
        {/* Consistent Indigo/Purple/Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-slate-100 to-zinc-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 right-0 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Enhanced Header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-gray-900 font-poppins font-medium text-sm border border-gray-400 mb-6">
                🎨 Traditional Arts & Culture
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sora font-extrabold mb-6 leading-tight holographic">
              Culture & Crafts
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 font-poppins font-light max-w-4xl mx-auto leading-relaxed mb-8">
              Immerse yourself in the vibrant world of Kutchi traditions, where every thread tells a story 
              <br className="hidden md:block" />
              <span className="text-gray-800 font-medium">and every craft carries centuries of heritage.</span>
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left Side - Textile Showcase */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {/* Bandhani Placeholder */}
                <div 
                  className="group cursor-pointer" 
                  onClick={() => {
                    console.log('Bandhani clicked');
                    setSelectedTextile('bandhani');
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl p-8 border-2 border-gray-400 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-gray-900">🔴</span>
                      </div>
                      <h3 className="font-bold text-gray-600 mb-2">Bandhani</h3>
                      <p className="text-xs text-gray-600">Tie-dye artistry with intricate dot patterns</p>
                      <p className="text-xs text-gray-800 mt-2 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </div>

                {/* Ajrakh Placeholder */}
                <div 
                  className="group cursor-pointer" 
                  onClick={() => {
                    console.log('Ajrakh clicked');
                    setSelectedTextile('ajrakh');
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl p-8 border-2 border-gray-400 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-gray-900">🔵</span>
                      </div>
                      <h3 className="font-bold text-gray-600 mb-2">Ajrakh</h3>
                      <p className="text-xs text-gray-600">Block-printed geometric masterpieces</p>
                      <p className="text-xs text-gray-800 mt-2 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </div>

                {/* Rogan Art Placeholder */}
                <div 
                  className="group cursor-pointer" 
                  onClick={() => {
                    console.log('Rogan Art clicked');
                    setSelectedTextile('rogan');
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-gray-900">🟡</span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">Rogan Art</h3>
                      <p className="text-xs text-gray-600">Painted fabric with castor oil colors</p>
                      <p className="text-xs text-gray-500 mt-2 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </div>

                {/* Mirror Work Placeholder */}
                <div 
                  className="group cursor-pointer" 
                  onClick={() => {
                    console.log('Mirror Work clicked');
                    setSelectedTextile('mirror');
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl p-8 border-2 border-gray-400 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-gray-900">✨</span>
                      </div>
                      <h3 className="font-bold text-gray-600 mb-2">Mirror Work</h3>
                      <p className="text-xs text-gray-600">Shisha embroidery with tiny mirrors</p>
                      <p className="text-xs text-gray-800 mt-2 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </div>
              </div>

              {/* Additional Crafts Row */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Sudi Chappu Card */}
                <div 
                  className="group cursor-pointer" 
                  onClick={() => {
                    console.log('Sudi Chappu clicked');
                    setSelectedTextile('sudi');
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-gray-900">🔪</span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">Sudi Chappu</h3>
                      <p className="text-xs text-gray-600">Traditional knife-making in Anjar</p>
                      <p className="text-xs text-gray-500 mt-2 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </div>

                {/* Pottery Card */}
                <div 
                  className="group cursor-pointer" 
                  onClick={() => {
                    console.log('Pottery clicked');
                    setSelectedTextile('pottery');
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-gray-900">🏺</span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">Pottery</h3>
                      <p className="text-xs text-gray-600">Clay craft traditions across villages</p>
                      <p className="text-xs text-gray-500 mt-2 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </div>

                {/* Leather Craft Card */}
                <div 
                  className="group cursor-pointer" 
                  onClick={() => {
                    console.log('Leather Craft clicked');
                    setSelectedTextile('leather');
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-gray-900">👜</span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">Leather Craft</h3>
                      <p className="text-xs text-gray-600">Traditional leather working</p>
                      <p className="text-xs text-gray-500 mt-2 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </div>

                {/* Weaving Card */}
                <div 
                  className="group cursor-pointer" 
                  onClick={() => {
                    console.log('Weaving clicked');
                    setSelectedTextile('weaving');
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-gray-900">🧵</span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">Weaving</h3>
                      <p className="text-xs text-gray-600">Handloom textiles and carpets</p>
                      <p className="text-xs text-gray-500 mt-2 opacity-75">Click to learn more</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Cultural Experiences */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-to-br from-white/80 via-gray-50/80 to-gray-50/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 emboss-text">
                Living Heritage
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-gray-900 text-lg">🏛️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Artisan Villages</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Visit Bhujodi, Nirona, and Dhamadka where master craftsmen preserve ancient techniques passed down through generations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-gray-900 text-lg">🎭</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Festival Celebrations</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Experience Rann Utsav and Navratri where folk dances, music, and cultural performances light up the desert nights.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-gray-900 text-lg">🛍️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Authentic Shopping</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Discover unique handicrafts, textiles, and pottery directly from local artisans in traditional markets and cooperative societies.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link 
                  href="/culture" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500 to-gray-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:from-gray-600 hover:to-gray-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Explore Culture Guide</span>
                  <span>🎨</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800" />
      </div>

      {/* 5️⃣ Enhanced Travel Guide Section */}
      <section id="guide" className="relative overflow-hidden py-24">
        {/* Consistent Indigo/Purple/Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-slate-100 to-zinc-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 right-0 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Enhanced Header with Beautiful Typography */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp} 
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-900 rounded-full text-sm font-poppins font-semibold tracking-wide border border-gray-400 shadow-lg">
                🧭 Essential Information
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sora font-extrabold mb-6 leading-tight holographic">
              Travel Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins font-light">
              Everything you need to know for the perfect Kutch adventure. From seasonal tips 
              to packing essentials, we've got you covered.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-gray-600 font-poppins">
                <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Best Times</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-gray-600 font-poppins">
                <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Travel Tips</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-gray-600 font-poppins">
                <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Safety Guide</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Best Time to Visit */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-900 text-2xl">🗓️</span>
                </div>
                <h3 className="text-2xl font-sora font-bold text-gray-900">Best Time</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-500/20 p-4 rounded-2xl border border-gray-400/30">
                  <h4 className="font-poppins font-bold text-gray-200 mb-2">November - February</h4>
                  <p className="text-sm text-gray-700 font-poppins">Perfect weather, Rann Utsav festival, ideal for desert camping</p>
                </div>
                <div className="bg-gray-500/20 p-4 rounded-2xl border border-gray-400/30">
                  <h4 className="font-poppins font-bold text-gray-600 mb-2">March - April</h4>
                  <p className="text-sm text-gray-700 font-poppins">Mild temperatures, fewer crowds, great for photography</p>
                </div>
                <div className="bg-gray-500/20 p-4 rounded-2xl border border-gray-400/30">
                  <h4 className="font-poppins font-bold text-gray-200 mb-2">May - September</h4>
                  <p className="text-sm text-gray-700 font-poppins">Hot & humid, monsoon season, avoid this period</p>
                </div>
              </div>
            </motion.div>

            {/* How to Reach */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-900 text-2xl">✈️</span>
                </div>
                <h3 className="text-2xl font-sora font-bold text-gray-900">How to Reach</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 text-sm">✈️</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900">By Air</h4>
                    <p className="text-sm text-gray-700 font-poppins">Bhuj Airport (1 hr from Rann), Ahmedabad (4-5 hrs drive)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 text-sm">🚂</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900">By Train</h4>
                    <p className="text-sm text-gray-700 font-poppins">Bhuj Railway Station, Gandhidham Junction</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 text-sm">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900">By Road</h4>
                    <p className="text-sm text-gray-700 font-poppins">Well-connected highways from major Gujarat cities</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What to Pack */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-500 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-900 text-2xl">🎒</span>
                </div>
                <h3 className="text-2xl font-sora font-bold text-gray-900">What to Pack</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-poppins">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-700">Layered clothing for temperature changes</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-poppins">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-700">Comfortable walking shoes</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-poppins">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-700">Sunscreen & sunglasses</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-poppins">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-700">Camera with extra batteries</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-poppins">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="text-gray-700">Water bottle & snacks</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-poppins">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="text-gray-700">First aid kit & medications</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Safety & Tips Section */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl p-8 text-gray-900 shadow-xl mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-sora font-bold mb-4 flex items-center justify-center gap-3">
                <span>🛡️</span>
                Safety & Important Tips
              </h3>
              <p className="text-gray-700 text-lg font-poppins">Stay safe and make the most of your Kutch adventure</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200">
                <div className="text-3xl mb-3">🌡️</div>
                <h4 className="font-poppins font-bold mb-2">Weather Check</h4>
                <p className="text-sm text-gray-700 font-poppins">Monitor weather conditions, especially during monsoon</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-poppins font-bold mb-2">Stay Connected</h4>
                <p className="text-sm text-gray-700 font-poppins">Keep emergency contacts, local network may be limited</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200">
                <div className="text-3xl mb-3">💧</div>
                <h4 className="font-poppins font-bold mb-2">Stay Hydrated</h4>
                <p className="text-sm text-gray-700 font-poppins">Carry plenty of water, desert climate can be dehydrating</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200">
                <div className="text-3xl mb-3">🗺️</div>
                <h4 className="font-poppins font-bold mb-2">Local Guide</h4>
                <p className="text-sm text-gray-700 font-poppins">Consider hiring local guides for remote areas</p>
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
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-3xl font-sora font-bold text-gray-900 mb-4">Need Personalized Guidance?</h3>
              <p className="text-gray-700 font-poppins mb-8 max-w-2xl mx-auto">
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
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/30 flex items-center gap-2"
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
        {/* Consistent Indigo/Purple/Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-slate-100 to-zinc-50">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] top-1/3 right-0 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sora font-extrabold mb-6 holographic">
              Stay Connected
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-poppins font-light">
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
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-gray-200">
                <h3 className="text-3xl font-sora font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-4xl">🌟</span>
                  What You'll Get
                </h3>
                <ul className="space-y-4 text-lg text-gray-700 font-poppins">
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
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-gray-200">
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
      <footer className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></div>
        
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
                >
                  <h3 className="text-4xl font-sora font-extrabold bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6">
                    Travel Kutch
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-md font-poppins">
                    Your gateway to the mystical land of Kutch — from the ethereal White Desert to ancient heritage sites. 
                    Discover authentic crafts, vibrant festivals, and the timeless stories that define Gujarat's cultural crown jewel.
                  </p>
                  
                  {/* Social & Contact Quick Access */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/919825034580" 
                      className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      💬 WhatsApp
                    </a>
                    <a 
                      href="tel:+919512234395" 
                      className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
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
              >
                <h4 className="text-2xl font-sora font-bold text-gray-900 mb-6">Explore</h4>
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
                        className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
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
              >
                <h4 className="text-2xl font-sora font-bold text-gray-900 mb-6">Connect</h4>
                <div className="space-y-4 font-poppins">
                  <div className="flex items-start gap-3 text-gray-600">
                    <span className="text-xl mt-1">📍</span>
                    <div>
                      <p className="font-medium text-gray-900">Visit Us</p>
                      <p className="text-sm">Bhuj, Kutch District</p>
                      <p className="text-sm">Gujarat, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-medium text-gray-900">Call Us</p>
                      <a href="tel:+919825034580" className="hover:text-gray-800 transition-colors text-sm">+91 98250 34580</a>
                      <br />
                      <a href="tel:+919512234395" className="hover:text-gray-800 transition-colors text-sm">+91 95122 34395</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@travelkutch.com" className="hover:text-gray-800 transition-colors text-sm">
                        info@travelkutch.com
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
              <h4 className="text-3xl font-bold text-center bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-8 font-playfair emboss-text">
                Discover the Geography of Wonder
              </h4>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-gray-200">
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
                  <p className="text-gray-100/80 text-center mt-4">
                    From the vast salt marshes of the Rann to historic ports along the Arabian Sea — explore every corner of this magnificent region
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <motion.p 
                  className="text-gray-200/80 text-center md:text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Travel Kutch</span>. 
                  Crafted with passion for authentic cultural experiences.
                </motion.p>
                
                <motion.p 
                  className="text-gray-200/60 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Designed with ❤️ for travelers seeking authentic Gujarat
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
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-500/20 rounded-lg">
                          <span className="text-gray-600 text-sm font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Villages */}
                  <div className="bg-gradient-to-r from-gray-100 to-gray-100 p-6 rounded-2xl mb-6">
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">🏘️ Where to Experience:</h3>
                    <p className="text-gray-600">{textileInfo[selectedTextile as keyof typeof textileInfo].villages}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/destinations"
                      className="bg-gradient-to-r from-gray-500 to-gray-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:from-gray-600 hover:to-gray-600 transition-all duration-300 hover:scale-105 shadow-lg"
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


















