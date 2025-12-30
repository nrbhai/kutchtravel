'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import MetallicHeading from '../components/MetallicHeading';
import { HIDDEN_GEMS } from './data/collection';

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const filterButtonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

// Category style mapping function - Updated for Dark Theme
const getCategoryStyle = (category: string) => {
  const styles = {
    'All': 'bg-gray-800 border-gray-600 text-white shadow-lg shadow-gray-900/50',
    'Nature': 'bg-gradient-to-r from-emerald-950/60 to-green-900/60 border-emerald-700/50 text-emerald-300',
    'Heritage': 'bg-gradient-to-r from-amber-950/60 to-yellow-900/60 border-amber-700/50 text-amber-300',
    'Adventure': 'bg-gradient-to-r from-rose-950/60 to-red-900/60 border-rose-700/50 text-rose-300',
    'Culture': 'bg-gradient-to-r from-purple-950/60 to-fuchsia-900/60 border-purple-700/50 text-purple-300',
    'Wildlife': 'bg-gradient-to-r from-lime-950/60 to-green-900/60 border-lime-700/50 text-lime-300',
  } as const;

  return styles[category as keyof typeof styles] || styles['All'];
};

function HiddenGemsClient() {
  const [filteredGems, setFilteredGems] = useState(HIDDEN_GEMS);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(HIDDEN_GEMS.map(gem => gem.type)))];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const filterGems = useCallback((category: string, search: string) => {
    let filtered = [...HIDDEN_GEMS];

    if (category !== 'All') {
      filtered = filtered.filter(gem => gem.type === category);
    }

    if (search) {
      filtered = filtered.filter(gem =>
        gem.title.toLowerCase().includes(search.toLowerCase()) ||
        gem.sections[0]?.content?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredGems(filtered);
  }, []);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    filterGems(category, searchTerm);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterGems(activeFilter, value);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-500 font-inter">Loading hidden gems...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white selection:bg-amber-500/30 selection:text-amber-100">
      {/* Hero Header Section */}
      <div className="relative overflow-hidden pt-12 pb-16 min-h-[60vh] flex items-center">
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Dark Theme Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/noise.jpg')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
             {/* Left: Image Placeholder */}
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <Image
                src={HIDDEN_GEMS[0]?.image || "/images/kutch-landscape.jpg"}
                alt="Hidden Gems of Kutch"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg mb-4">
                  <span className="text-xl">🏴‍☠️</span>
                  <span className="text-sm font-semibold text-amber-400 font-inter">Unexplored Treasures</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Title and Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left md:text-right space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                <span className="text-xl">✨</span>
                <span className="text-sm font-semibold text-amber-200 font-inter">Secret Destinations</span>
              </div>

              <div className="flex flex-col md:items-end">
                <MetallicHeading 
                  text="Hidden Gems"
                  as="h1"
                  variant="gold"
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-sora leading-tight whitespace-nowrap mb-2"
                />
                <MetallicHeading 
                  text="of Kutch"
                  as="span"
                  variant="silver"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold font-sora"
                />
              </div>

              <p className="text-lg md:text-xl text-gray-400 font-inter leading-relaxed max-w-xl md:ml-auto">
                Discover secret destinations and off-the-beaten-path adventures that only the most curious travelers find.
              </p>

              <div className="flex items-center justify-start md:justify-end gap-8 text-sm text-gray-400 font-inter flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
                  <span>{HIDDEN_GEMS.length} Secret Places</span>
                </div>
                <div className="w-px h-6 bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                  <span>Local Favorites</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Filters and Search Section */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-y border-white/5 shadow-2xl shadow-black/50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search and Results Count Row */}
          <div className="flex flex-col sm:flex-row gap-6 justify-between items-center mb-8">
            <div className="relative w-full max-w-md group">
              <input
                type="text"
                placeholder="Search hidden gems..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-5 py-3 pl-12 bg-white/5 text-gray-200 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300 shadow-inner group-hover:bg-white/10 placeholder-gray-500 font-inter"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-500 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    filterGems(activeFilter, '');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <p className="text-sm font-medium text-gray-400 font-inter">
              Showing <span className="text-amber-400 font-bold">{filteredGems.length}</span> results
            </p>
          </div>

          {/* Category Filters */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  variants={filterButtonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFilterChange(category)}
                  className={`w-full px-4 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm border font-inter ${
                    activeFilter === category
                      ? getCategoryStyle(category)
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border-white/5 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="line-clamp-1">{category}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 min-h-[50vh]">

        {/* Hidden Gems Grid with Gradient Cards */}
        {filteredGems.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredGems.map((gem, index) => {
              // Define unique colors for each card (Dark Theme Adapted)
              const cardColors = [
                { border: 'border-cyan-800/50', hoverBorder: 'hover:border-cyan-500', gradient: 'from-gray-900 via-cyan-950/30 to-blue-950/30', tag: 'bg-cyan-950/60 text-cyan-300 border-cyan-800', button: 'bg-cyan-900/50 hover:bg-cyan-800 border-cyan-800/50' },
                { border: 'border-emerald-800/50', hoverBorder: 'hover:border-emerald-500', gradient: 'from-gray-900 via-emerald-950/30 to-teal-950/30', tag: 'bg-emerald-950/60 text-emerald-300 border-emerald-800', button: 'bg-emerald-900/50 hover:bg-emerald-800 border-emerald-800/50' },
                { border: 'border-amber-800/50', hoverBorder: 'hover:border-amber-500', gradient: 'from-gray-900 via-amber-950/30 to-orange-950/30', tag: 'bg-amber-950/60 text-amber-300 border-amber-800', button: 'bg-amber-900/50 hover:bg-amber-800 border-amber-800/50' },
                { border: 'border-blue-800/50', hoverBorder: 'hover:border-blue-500', gradient: 'from-gray-900 via-blue-950/30 to-indigo-950/30', tag: 'bg-blue-950/60 text-blue-300 border-blue-800', button: 'bg-blue-900/50 hover:bg-blue-800 border-blue-800/50' },
                { border: 'border-rose-800/50', hoverBorder: 'hover:border-rose-500', gradient: 'from-gray-900 via-rose-950/30 to-pink-950/30', tag: 'bg-rose-950/60 text-rose-300 border-rose-800', button: 'bg-rose-900/50 hover:bg-rose-800 border-rose-800/50' },
                { border: 'border-teal-800/50', hoverBorder: 'hover:border-teal-500', gradient: 'from-gray-900 via-teal-950/30 to-cyan-950/30', tag: 'bg-teal-950/60 text-teal-300 border-teal-800', button: 'bg-teal-900/50 hover:bg-teal-800 border-teal-800/50' }
              ];
              const colors = cardColors[index % 6];
              
              return (
              <motion.div
                key={gem.slug}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group h-full"
              >
                <Link href={`/hidden-gems/${gem.slug}`} className="block h-full">
                  <motion.article 
                    whileHover={{ y: -6 }}
                    className={`h-full group relative bg-gradient-to-br ${colors.gradient} rounded-3xl overflow-hidden shadow-xl border ${colors.border} transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 ${colors.hoverBorder}`}
                  >
                    <div className="flex flex-col h-full">
                      
                      {/* Image Frame */}
                      <div className="relative aspect-[4/3] m-4 rounded-2xl overflow-hidden border border-white/5">
                        <Image
                          src={gem.image}
                          alt={gem.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                        
                        {/* Floating Category Badge */}
                        <div className="absolute top-3 right-3">
                          <span className={`backdrop-blur-md border px-3 py-1 rounded-lg text-xs font-bold font-inter shadow-lg tracking-wide ${colors.tag}`}>
                            {gem.type || 'Hidden Gem'}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="px-6 pb-6 space-y-4 flex-1 flex flex-col">
                        
                        {/* Title Row */}
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xl font-sora font-bold text-gray-100 leading-tight group-hover:text-amber-400 transition-colors">
                            {gem.title}
                          </h3>
                        </div>

                        {/* Description Box */}
                        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/5 flex-1">
                          <div className="flex items-start gap-3">
                            <span className="text-lg shrink-0 mt-0.5">✨</span>
                            <div className="min-w-0">
                              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-inter mb-1">Experience</p>
                              <p className="text-sm text-gray-300 font-inter leading-relaxed line-clamp-3">
                                {gem.sections[0]?.content || "Discover this amazing hidden gem in Kutch."}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Discovery Level */}
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                          <div className="flex items-center gap-3">
                            <span className="text-lg shrink-0">🗺️</span>
                            <div className="min-w-0 flex-1 flex justify-between items-center">
                              <span className="text-xs font-medium text-gray-400 font-inter">Discovery Level</span>
                              <span className="text-xs font-bold text-amber-500 font-inter px-2 py-0.5 bg-amber-950/30 border border-amber-900/50 rounded-full">
                                {gem.discoveryLevel || 'Secret'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Explore Button */}
                        <div className={`mt-auto flex items-center justify-between rounded-xl px-4 py-3 border transition-all duration-300 ${colors.button}`}>
                          <span className="text-gray-200 font-inter font-semibold text-sm">Explore Location</span>
                          <span className="text-amber-400 text-lg transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>

                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-24 h-24 mb-6 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shadow-inner">
              <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-sora">
              No hidden gems found
            </h3>
            <p className="text-gray-400 mb-8 font-inter">
              We couldn't find any destinations matching your search.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchTerm('');
                setFilteredGems(HIDDEN_GEMS);
              }}
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-amber-900/20 transition-all duration-300 transform hover:scale-105 font-inter"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Footer Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden mt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-background z-10"></div>
        <div className="relative bg-gradient-to-br from-indigo-900 to-purple-900 py-32">
          {/* Noise and Texture */}
          <div className="absolute inset-0 bg-[url('/images/noise.jpg')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-sora">
              Ready for Your Adventure?
            </h2>
            <p className="text-xl text-indigo-100/80 mb-10 font-inter max-w-2xl mx-auto">
              Explore the full list of destinations, from popular tourist spots to the most secluded hideaways.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/destinations"
                className="group relative inline-flex items-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-xl shadow-indigo-900/50 hover:-translate-y-1 font-inter overflow-hidden"
              >
                <span className="relative z-10">View All Destinations</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/50 transition-all duration-300 border border-white/10 hover:border-white/30 font-inter"
              >
                <span>Back to Home</span>
              </Link>
            </div>
            
            <p className="text-white/40 text-sm font-medium mt-16 font-inter tracking-widest uppercase">
              Designed with <span className="text-red-500">❤️</span> for travelers seeking authentic Kutch
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HiddenGemsClient;
