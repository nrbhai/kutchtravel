'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { DESTINATIONS } from '@/app/destinations/data';
import type { Destination } from '@/app/destinations/data';

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

// Add this at the root of your CSS file or in your Tailwind config
const styles = `
  @keyframes subtle-zoom {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1.15);
    }
  }
  
  .animate-subtle-zoom {
    animation: subtle-zoom 15s ease-in-out infinite alternate;
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

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

// Category style mapping function
const getCategoryStyle = (category: string) => {
  const styles = {
    'All': 'bg-gradient-to-r from-slate-500 to-slate-600 border-slate-400 text-white shadow-sm',
    'Heritage': 'bg-gradient-to-r from-amber-50 to-yellow-100 border-amber-200 text-amber-900',
    'Nature': 'bg-gradient-to-r from-emerald-50 to-green-100 border-emerald-200 text-emerald-900',
    'Adventure': 'bg-gradient-to-r from-rose-50 to-red-100 border-rose-200 text-rose-900',
    'Culture': 'bg-gradient-to-r from-purple-50 to-fuchsia-100 border-purple-200 text-purple-900',
    'Pilgrimage': 'bg-gradient-to-r from-blue-50 to-indigo-100 border-blue-200 text-blue-900',
    'Beach': 'bg-gradient-to-r from-cyan-50 to-sky-100 border-cyan-200 text-cyan-900',
    'Desert': 'bg-gradient-to-r from-orange-50 to-amber-100 border-orange-200 text-orange-900',
    'Wildlife': 'bg-gradient-to-r from-lime-50 to-green-100 border-lime-200 text-lime-900',
    'Historical': 'bg-gradient-to-r from-stone-50 to-warm-gray-100 border-stone-200 text-stone-900',
    'Modern': 'bg-gradient-to-r from-zinc-50 to-gray-100 border-zinc-200 text-zinc-900',
    'Port Town': 'bg-gradient-to-r from-sky-50 to-blue-100 border-sky-200 text-sky-900',
    'Other': 'bg-gradient-to-r from-gray-50 to-slate-100 border-gray-200 text-gray-900'
  } as const;

  return styles[category as keyof typeof styles] || styles['Other'];
};

function DestinationsClient() {
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(DESTINATIONS);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(DESTINATIONS.map(dest => 
    dest.sections.find(section => section.heading === 'Category')?.content || 'Other'
  )))];

  // Filter destinations based on category and search term
  const filterDestinations = useCallback((category: string, search: string) => {
    let filtered = DESTINATIONS;

    if (category !== 'All') {
      filtered = filtered.filter(dest => 
        dest.sections.some(section => 
          section.heading === 'Category' && section.content === category
        )
      );
    }

    if (search) {
      filtered = filtered.filter(dest =>
        dest.title.toLowerCase().includes(search.toLowerCase()) ||
        dest.sections.some(section => 
          section.content?.toLowerCase().includes(search.toLowerCase()) ||
          section.list?.some(item => 
            item.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }

    setFilteredDestinations(filtered);
  }, []);

  // Handle filter change
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    filterDestinations(category, searchTerm);
  };

  // Handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchTerm(search);
    filterDestinations(activeFilter, search);
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-400 mx-auto mb-6"></div>
          <p className="text-xl font-sora font-semibold text-gray-700">
            Loading destinations...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-50 selection:bg-pink-200 selection:text-pink-900">
      {/* Header Section - Two Column Layout */}
      <div className="relative overflow-hidden pt-8 pb-20 bg-gradient-to-br from-pink-50/80 via-rose-50/80 to-pink-50/80">
        {/* Navigation - Position it absolutely over the section */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Auto-rotating Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <div className="relative h-full">
                {DESTINATIONS.slice(0, 6).map((dest, index) => (
                  <motion.div
                    key={dest.slug}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      scale: [1.1, 1, 1, 1.1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 5,
                      times: [0, 0.1, 0.9, 1]
                    }}
                    className="absolute inset-0"
                    style={{ display: index === 0 ? 'block' : 'none' }}
                  >
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-sora font-bold text-white" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.6)' }}>
                        {dest.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Discover Kutch Text */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-full text-base font-inter font-semibold tracking-wide shadow-xl shadow-purple-500/30">
                  <span>✨</span>
                  <span>All Destinations</span>
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-sora tracking-tight relative"
              >
                <span className="inline-block blur-xl absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 mix-blend-overlay" aria-hidden="true">
                  Discover Kutch
                </span>
                <span className="relative holographic">
                  Discover Kutch
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-900 leading-relaxed mb-8 font-space-grotesk font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
              >
                From ancient temples to pristine landscapes, explore the hidden treasures of Gujarat's largest district
              </motion.p>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col gap-4 mb-8"
              >
                <div className="flex items-center gap-3 text-slate-700 font-inter font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full animate-pulse"></span>
                  <span className="text-base">{DESTINATIONS.length}+ Destinations</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-inter font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full animate-pulse"></span>
                  <span className="text-base">Rich Heritage</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-inter font-medium">
                  <span className="w-4 h-4 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full animate-pulse"></span>
                  <span className="text-base">Cultural Experiences</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      {/* Category Filters and Search Section */}
      <div className="bg-pink-50/60 backdrop-blur-xl border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-5">
          {/* Search and Results Count Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-2.5 pl-10 bg-white text-gray-900 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-all duration-300 shadow-sm"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    filterDestinations(activeFilter, '');
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <p className="text-sm font-medium text-gray-500">
              {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Category Filters */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  variants={filterButtonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFilterChange(category)}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm border ${
                    activeFilter === category
                      ? getCategoryStyle(category)
                      : 'bg-white/80 text-gray-600 hover:bg-pink-50 border-pink-200 hover:text-gray-900'
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
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Destinations Grid with Gradient Cards */}
        {filteredDestinations.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredDestinations.map((destination, index) => {
              // Define unique colors for each card
              const cardColors = [
                { border: 'border-cyan-200', hoverBorder: 'hover:border-cyan-400', gradient: 'from-yellow-50 via-cyan-50/40 to-blue-50/40', tag: 'bg-cyan-50 text-cyan-700 border-cyan-200', button: 'bg-cyan-600 hover:bg-cyan-700' },
                { border: 'border-purple-200', hoverBorder: 'hover:border-purple-400', gradient: 'from-amber-50 via-purple-50/40 to-pink-50/40', tag: 'bg-purple-50 text-purple-700 border-purple-200', button: 'bg-purple-600 hover:bg-purple-700' },
                { border: 'border-emerald-200', hoverBorder: 'hover:border-emerald-400', gradient: 'from-yellow-50 via-emerald-50/40 to-teal-50/40', tag: 'bg-emerald-50 text-emerald-700 border-emerald-200', button: 'bg-emerald-600 hover:bg-emerald-700' },
                { border: 'border-orange-200', hoverBorder: 'hover:border-orange-400', gradient: 'from-amber-50 via-orange-50/40 to-yellow-50/40', tag: 'bg-orange-50 text-orange-700 border-orange-200', button: 'bg-orange-600 hover:bg-orange-700' },
                { border: 'border-blue-200', hoverBorder: 'hover:border-blue-400', gradient: 'from-yellow-50 via-blue-50/40 to-indigo-50/40', tag: 'bg-blue-50 text-blue-700 border-blue-200', button: 'bg-blue-600 hover:bg-blue-700' },
                { border: 'border-rose-200', hoverBorder: 'hover:border-rose-400', gradient: 'from-amber-50 via-rose-50/40 to-red-50/40', tag: 'bg-rose-50 text-rose-700 border-rose-200', button: 'bg-rose-600 hover:bg-rose-700' }
              ];
              const colors = cardColors[index % 6];
              
              return (
              <motion.div
                key={destination.slug}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group"
              >
                <Link href={`/destinations/${destination.slug}`}>
                  <motion.article 
                    className={`group relative bg-gradient-to-br ${colors.gradient} rounded-2xl overflow-hidden shadow-lg border-2 ${colors.border} transition-all duration-500 hover:shadow-2xl ${colors.hoverBorder}`}
                  >
                    {/* Horizontal Layout: Image + Content Side by Side */}
                    <div className="flex flex-col">
                      
                      {/* Compact Image with Rounded Corners */}
                      <div className="relative h-40 m-4 rounded-xl overflow-hidden">
                        <Image
                          src={destination.image}
                          alt={destination.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                        
                        {/* Floating Category Tag */}
                        <div className="absolute top-2 right-2">
                          <span className={`backdrop-blur-sm border px-3 py-1 rounded-lg text-xs font-bold font-inter shadow-md ${colors.tag}`}>
                            {destination.sections.find(s => s.heading === 'Category')?.content || 'Explore'}
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
                                <p className="text-[10px] font-bold text-cyan-700 uppercase tracking-wider font-inter mb-0.5">Famous For</p>
                                <p className="text-xs text-gray-800 font-inter leading-snug line-clamp-2">
                                  {destination.sections[0]?.content?.replace(/<[^>]*>/g, '') || destination.title}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Best Season */}
                          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-3 border border-cyan-200/50">
                            <div className="flex items-start gap-2">
                              <span className="text-base shrink-0">🌤️</span>
                              <div className="min-w-0">
                                <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider font-inter mb-0.5">Best Season</p>
                                <p className="text-xs text-gray-800 font-inter font-semibold">
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
              </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-100/80 to-purple-100/80 rounded-full flex items-center justify-center backdrop-blur">
              <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4 drop-shadow-sm">
              No destinations found
            </h3>
            <p className="text-indigo-700 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchTerm('');
                setFilteredDestinations(DESTINATIONS);
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Call to Action with Light Gradient */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative overflow-hidden mt-16 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50"
      >
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-100 to-teal-100 rounded-full blur-3xl opacity-30"></div>
        
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Plan Your Kutch Adventure
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
            Ready to explore the wonders of Kutch? Start planning your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/"
              className="inline-block bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              Back to Home
            </Link>
            <Link 
              href="/guide"
              className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Start Planning
            </Link>
          </div>
          
          {/* Bottom Text - Matching Main Page Style */}
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
      </motion.div>
    </div>
  );
}

export default DestinationsClient;



