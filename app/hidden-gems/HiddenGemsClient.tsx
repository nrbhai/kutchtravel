'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
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

// Category style mapping function
const getCategoryStyle = (category: string) => {
  const styles = {
    'All': 'bg-gradient-to-r from-slate-500 to-slate-600 border-slate-400 text-white shadow-sm',
    'Nature': 'bg-gradient-to-r from-emerald-50 to-green-100 border-emerald-200 text-emerald-900',
    'Heritage': 'bg-gradient-to-r from-amber-50 to-yellow-100 border-amber-200 text-amber-900',
    'Adventure': 'bg-gradient-to-r from-rose-50 to-red-100 border-rose-200 text-rose-900',
    'Culture': 'bg-gradient-to-r from-purple-50 to-fuchsia-100 border-purple-200 text-purple-900',
    'Wildlife': 'bg-gradient-to-r from-lime-50 to-green-100 border-lime-200 text-lime-900',
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading hidden gems...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-12 pb-16">
        {/* Navigation - Position it absolutely over the section */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={HIDDEN_GEMS[0]?.image || "/images/kutch-landscape.jpg"}
                alt="Hidden Gems of Kutch"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <span className="text-xl">🏴‍☠️</span>
                  <span className="text-sm font-semibold text-indigo-600 font-inter">Unexplored Treasures</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Title and Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left md:text-right space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4">
                <span className="text-xl">✨</span>
                <span className="text-sm font-semibold text-indigo-600 font-inter">Secret Destinations</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-sora leading-tight whitespace-nowrap">
                Hidden Gems of Kutch
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 font-inter leading-relaxed">
                Discover secret destinations and off-the-beaten-path adventures that only the most curious travelers find
              </p>

              <div className="flex items-center justify-start md:justify-end gap-6 text-sm text-gray-500 font-inter flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                  <span>{HIDDEN_GEMS.length} Secret Places</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                  <span>Local Favorites</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Category Filters and Search Section */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-5">
          {/* Search and Results Count Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search hidden gems..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-2.5 pl-10 bg-white text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition-all duration-300 shadow-sm"
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
                    filterGems(activeFilter, '');
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
              {filteredGems.length} hidden gem{filteredGems.length !== 1 ? 's' : ''} found
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
                      : 'bg-white/80 text-gray-600 hover:bg-gray-50 border-gray-200 hover:text-gray-900'
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

        {/* Hidden Gems Grid with Gradient Cards */}
        {filteredGems.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredGems.map((gem, index) => {
              // Define unique colors for each card
              const cardColors = [
                { border: 'border-cyan-200', hoverBorder: 'hover:border-cyan-400', gradient: 'from-white via-cyan-50/30 to-blue-50/30', tag: 'bg-cyan-50 text-cyan-700 border-cyan-200', button: 'bg-cyan-600 hover:bg-cyan-700' },
                { border: 'border-emerald-200', hoverBorder: 'hover:border-emerald-400', gradient: 'from-white via-emerald-50/30 to-teal-50/30', tag: 'bg-emerald-50 text-emerald-700 border-emerald-200', button: 'bg-emerald-600 hover:bg-emerald-700' },
                { border: 'border-amber-200', hoverBorder: 'hover:border-amber-400', gradient: 'from-white via-amber-50/30 to-orange-50/30', tag: 'bg-amber-50 text-amber-700 border-amber-200', button: 'bg-amber-600 hover:bg-amber-700' },
                { border: 'border-blue-200', hoverBorder: 'hover:border-blue-400', gradient: 'from-white via-blue-50/30 to-indigo-50/30', tag: 'bg-blue-50 text-blue-700 border-blue-200', button: 'bg-blue-600 hover:bg-blue-700' },
                { border: 'border-rose-200', hoverBorder: 'hover:border-rose-400', gradient: 'from-white via-rose-50/30 to-pink-50/30', tag: 'bg-rose-50 text-rose-700 border-rose-200', button: 'bg-rose-600 hover:bg-rose-700' },
                { border: 'border-teal-200', hoverBorder: 'hover:border-teal-400', gradient: 'from-white via-teal-50/30 to-cyan-50/30', tag: 'bg-teal-50 text-teal-700 border-teal-200', button: 'bg-teal-600 hover:bg-teal-700' }
              ];
              const colors = cardColors[index % 6];
              
              return (
              <motion.div
                key={gem.slug}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group"
              >
                <Link href={`/hidden-gems/${gem.slug}`}>
                  <motion.article 
                    className={`group relative bg-gradient-to-br ${colors.gradient} rounded-2xl overflow-hidden shadow-lg border-2 ${colors.border} transition-all duration-500 hover:shadow-2xl ${colors.hoverBorder}`}
                  >
                    {/* Compact Layout matching destinations */}
                    <div className="flex flex-col">
                      
                      {/* Compact Image with Rounded Corners */}
                      <div className="relative h-40 m-4 rounded-xl overflow-hidden">
                        <Image
                          src={gem.image}
                          alt={gem.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                        
                        {/* Floating Category Tag */}
                        <div className="absolute top-2 right-2">
                          <span className={`backdrop-blur-sm border px-3 py-1 rounded-lg text-xs font-bold font-inter shadow-md ${colors.tag}`}>
                            {gem.type || 'Hidden Gem'}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="px-5 pb-5 space-y-3">
                        
                        {/* Title with Icon */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-sora font-bold text-gray-900 leading-tight">
                            {gem.title}
                          </h3>
                          <span className="text-xl shrink-0">🏴‍☠️</span>
                        </div>

                        {/* Info Grid */}
                        <div className="space-y-2.5">
                          
                          {/* Description */}
                          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-cyan-100">
                            <div className="flex items-start gap-2">
                              <span className="text-base shrink-0">✨</span>
                              <div className="min-w-0">
                                <p className="text-[10px] font-bold text-cyan-700 uppercase tracking-wider font-inter mb-0.5">About</p>
                                <p className="text-xs text-gray-800 font-inter leading-snug line-clamp-2">
                                  {gem.sections[0]?.content || "Discover this amazing hidden gem in Kutch."}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Discovery Level */}
                          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-3 border border-emerald-200/50">
                            <div className="flex items-start gap-2">
                              <span className="text-base shrink-0">🗺️</span>
                              <div className="min-w-0">
                                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider font-inter mb-0.5">Discovery Level</p>
                                <p className="text-xs text-gray-800 font-inter font-semibold">
                                  {gem.discoveryLevel || 'Off the beaten path'}
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* Action Button */}
                        <div className="pt-2">
                          <div className={`flex items-center justify-between rounded-lg px-4 py-2.5 transition-colors duration-300 ${colors.button}`}>
                            <span className="text-white font-inter font-semibold text-sm">Explore</span>
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
              No hidden gems found
            </h3>
            <p className="text-indigo-700 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchTerm('');
                setFilteredGems(HIDDEN_GEMS);
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Call to Action with Ocean Gradient */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative overflow-hidden mt-16"
      >
        {/* Background with ocean-like gradient */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sora">
              Ready for Your Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-inter">
              Explore all the amazing destinations that Kutch has to offer
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/destinations"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl font-inter"
              >
                <span>View All Destinations</span>
                <span>→</span>
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 font-inter"
              >
                <span>Back to Home</span>
              </Link>
            </div>
            
            {/* Footer Line */}
            <motion.p 
              className="text-white/90 text-sm font-medium mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Designed with ❤️ for travelers seeking authentic Kutch
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HiddenGemsClient;
