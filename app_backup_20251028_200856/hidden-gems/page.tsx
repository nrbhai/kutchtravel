"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Map, Compass, Sparkles, Eye, Star } from "lucide-react";
import Navigation from "../components/Navigation";
import { HIDDEN_GEMS } from "./data/collection";

const difficultyColors = {
  Easy: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Moderate: "bg-purple-50 text-purple-700 border-gray-400", 
  Challenging: "bg-purple-50 text-purple-700 border-gray-400",
  Expert: "bg-indigo-50 text-indigo-700 border-indigo-200"
};

const typeColors = {
  Nature: "bg-gray-100 text-gray-800",
  Heritage: "bg-purple-50 text-purple-700",
  Adventure: "bg-purple-50 text-purple-700",
  Culture: "bg-gray-100 text-gray-800",
  Wildlife: "bg-gray-100 text-gray-800"
};

const discoveryIcons = {
  Secret: "🤫",
  "Local Favorite": "⭐", 
  Emerging: "🌟",
  Explorer: "🔍"
} as const;

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function HiddenGemsPage() {
  return (
    <main className="scroll-smooth selection:bg-gray-300 selection:text-gray-900 bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-50 text-gray-900">
      <Navigation />

      {/* Hero Section - Matching main page style */}
      <section className="relative overflow-hidden py-24 pt-32">
        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-1 bg-gray-500/30"></div>
          <div className="blob blob-2 bg-gray-500/30"></div>
          <div className="blob blob-3 bg-gray-500/30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Enhanced Header with Beautiful Typography matching main page */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp} 
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl text-gray-600 rounded-full text-sm font-semibold tracking-wide border border-gray-200 shadow-xl font-poppins">
                🏴‍☠️ Secret Destinations
              </span>
            </div>
            
            {/* Holographic heading matching main page style */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sora holographic">
              Hidden Gems of Kutch
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium font-poppins">
              Discover secret destinations, off-the-beaten-path adventures, and authentic experiences 
              that only the most curious travelers find. These hidden gems await those who dare to explore beyond the ordinary.
            </p>
            
            
            {/* Decorative Elements matching main page */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="text-sm font-medium font-poppins">Secret Places</span>
              </div>
              <div className="w-px h-4 bg-gray-400"></div>
              <div className="flex items-center gap-2 text-gray-800">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="text-sm font-medium font-poppins">Local Secrets</span>
              </div>
              <div className="w-px h-4 bg-gray-400"></div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="text-sm font-medium font-poppins">Adventure Awaits</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Action Buttons */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp} 
            className="text-center mb-16"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/destinations" className="inline-block bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98] font-poppins">
                Popular Destinations
              </Link>
              <Link href="/hidden-gallery" className="inline-block bg-white/10 backdrop-blur-xl text-gray-600 font-medium py-3 px-5 rounded-full border border-gray-200 shadow-xl hover:bg-white/20 transition font-poppins">
                🏴‍☠️ Hidden Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Difficulty Legend - Enhanced */}
      <section className="relative overflow-hidden py-8">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3 font-sora">
                <Compass className="text-gray-600" size={28} />
                Adventure Difficulty Guide
              </h3>
              <div className="flex items-center justify-center gap-6 flex-wrap font-poppins">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">🟢 Easy - Family Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">🟡 Moderate - Some Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">🟠 Challenging - Adventure Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">🔴 Expert - Professional Guided</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hidden Gems Grid Section - Enhanced */}
      <section className="relative overflow-hidden py-24">
        {/* Animated blobs background */}
        <div className="absolute inset-0">
          <div className="blob blob-1 bg-gray-500/30"></div>
          <div className="blob blob-2 bg-gray-500/30"></div>
          <div className="blob blob-3 bg-gray-500/30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Enhanced Grid with Main Page Styling */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-10% 0px" }} 
            variants={stagger} 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {HIDDEN_GEMS.map((gem, index) => (
              <Link
                key={gem.slug}
                href={`/hidden-gems/${gem.slug}`}
                className="block group"
                tabIndex={0}
              >
                <motion.article 
                  variants={fadeUp} 
                  whileHover={{ y: -12, scale: 1.02 }} 
                  className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:bg-white/15 hover:border-white/30"
                >
                  {/* Enhanced Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={gem.image}
                      alt={`${gem.title} - Hidden gem in Kutch`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Enhanced Overlay Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-transparent to-gray-500/20" />
                    
                    {/* Discovery Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                        <span>{discoveryIcons[gem.discoveryLevel] || "🔍"}</span>
                        {gem.discoveryLevel}
                      </span>
                    </div>
                    
                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 ${difficultyColors[gem.difficulty]} text-sm font-medium rounded-full backdrop-blur-sm border`}>
                        {gem.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Content Area */}
                  <div className="p-8">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 ${typeColors[gem.type]} text-sm font-medium rounded-full`}>
                        <Star size={14} />
                        {gem.type}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors font-sora">
                      {gem.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3 font-poppins">
                      {gem.sections[0]?.content || "Discover this hidden gem..."}
                    </p>

                    {/* Enhanced Metadata */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Eye size={16} />
                          <span className="font-medium font-poppins">Best Time:</span>
                          <span className="text-gray-600 font-poppins">{gem.bestTime || "All Season"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800">
                          <Map size={16} />
                          <span className="font-medium font-poppins">{gem.discoveryLevel}</span>
                        </div>
                      </div>
                      
                      {/* Highlights */}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                          {gem.facts.slice(0, 2).map((fact: string, i: number) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-white/10 backdrop-blur-xl text-gray-600 text-xs rounded-full border border-gray-200 font-poppins"
                            >
                              {fact}
                            </span>
                          ))}
                          {gem.facts.length > 2 && (
                            <span className="px-2 py-1 bg-white/5 text-gray-600 text-xs rounded-full border border-white/10 font-poppins">
                              +{gem.facts.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-poppins">Tap to explore</span>
                        <div className="flex items-center gap-2 text-gray-600 group-hover:text-gray-800 transition-colors">
                          <span className="text-sm font-medium font-poppins">Discover</span>
                          <ArrowLeft size={16} className="transform rotate-180 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>

          {/* Call to Action - Enhanced */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp} 
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-br from-white/80 via-gray-50/80 to-gray-50/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-12">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                  <Sparkles className="text-gray-600" size={32} />
                  Ready for Adventure?
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  These hidden gems are waiting to be discovered. Plan your adventure and explore the unexplored corners of Kutch.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/destinations" 
                    className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-purple-500/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Explore Popular Destinations
                  </Link>
                  <Link 
                    href="/hidden-gallery" 
                    className="inline-block bg-gradient-to-r from-gray-600/90 via-gray-600/90 to-gray-600/90 text-gray-900 font-medium py-3 px-8 rounded-full shadow-sm hover:shadow-md transition backdrop-blur border border-gray-200"
                  >
                    🏴‍☠️ Hidden Gallery
                  </Link>
                  <Link 
                    href="/bookings" 
                    className="inline-block bg-gradient-to-r from-white/90 via-gray-50/90 to-gray-50/90 text-gray-900 font-medium py-3 px-8 rounded-full shadow-sm hover:shadow-md transition backdrop-blur border border-gray-200"
                  >
                    Plan Your Trip
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}











