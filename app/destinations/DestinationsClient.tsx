'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import BackButton from './BackButton';
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-400 mx-auto mb-6"></div>
          <p className="text-xl font-sora font-semibold text-gray-600">
            Loading destinations...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-50 selection:bg-gray-300 selection:text-gray-900">
      <Navigation />
      
      {/* Header Section with Hero Image */}
      <div className="relative overflow-hidden h-[min(65vh,480px)] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Hero Image with Parallax Effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/hero.jpg"
            alt="Kutch Landscape"
            fill
            className="object-cover opacity-60 scale-110 origin-center transform motion-safe:animate-subtle-zoom"
            priority
            quality={100}
          />
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
          <div className="absolute top-4 left-4 z-10">
            <BackButton />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-lg text-sm font-medium tracking-wide border border-white/10 shadow-lg">
                🗺️ Explore the Unexplored
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-sora text-white tracking-tight text-balance relative"
            >
              <span className="inline-block blur-xl absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 mix-blend-overlay" aria-hidden="true">
                Discover Kutch
              </span>
              <span className="relative">
                Discover Kutch
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/80 mx-auto leading-relaxed font-medium max-w-2xl text-balance mb-8"
            >
              From ancient temples to pristine landscapes, explore the hidden treasures of Gujarat's largest district
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-8 mb-8"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-white mb-1">{DESTINATIONS.length}</p>
                <p className="text-sm text-white/70">Destinations</p>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white mb-1">{categories.length - 1}</p>
                <p className="text-sm text-white/70">Categories</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Category Filters Section */}
      {/* Category Filters and Search Section */}
      <div className="bg-white/90 backdrop-blur-xl sticky top-0 z-10 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-5">
          {/* Search and Results Count Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search destinations..."
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

        {/* Destinations Grid with Gradient Cards */}
        {filteredDestinations.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.slug}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group"
              >
                <Link href={`/destinations/${destination.slug}`}>
                  <motion.article 
                    className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-purple-100 group-hover:border-purple-300"
                  >
                    {/* Image Container */}
                    <div className="relative h-[400px] overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-125"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-700" />
                      
                      {/* Premium Category Badge */}
                      <div className="absolute top-6 right-6 z-10">
                        <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-2xl backdrop-blur-sm border-2 border-white/30 font-poppins">
                          <span className="text-sm font-bold tracking-wide">
                            {destination.sections.find(s => s.heading === 'Category')?.content || 'Explore'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Floating Action Button */}
                      <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 z-10">
                        <div className="w-16 h-16 bg-gradient-to-r from-white/95 to-white/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center border-2 border-white/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300">
                          <span className="text-gray-600 hover:text-gray-900 text-2xl font-bold">→</span>
                        </div>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 z-10">
                        <h3 className="text-2xl font-sora font-semibold mb-3 leading-tight text-white" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.4)' }}>
                          {destination.title}
                        </h3>
                        <div className="flex items-center gap-3 text-white/90">
                          <span className="text-base">📍</span>
                          <span className="text-base font-poppins font-medium text-white/90">Kutch, Gujarat</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content Area */}
                    <div className="p-7 bg-white/90 backdrop-blur-xl border-t border-purple-100">
                      <p className="text-gray-700 font-poppins text-base leading-relaxed mb-5 line-clamp-3 group-hover:text-gray-800 transition-colors">
                        {destination.description}
                      </p>
                      
                      {/* Action Footer */}
                      <div className="flex items-center justify-between pt-5 border-t border-purple-100">
                        <span className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-poppins font-bold text-sm">
                          <span>Explore More</span>
                          <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center border border-white/30">
                            <span className="text-xs">✨</span>
                          </div>
                          <span className="text-xs font-poppins font-semibold text-gray-600">
                            {destination.sections.find(s => s.heading === 'Duration')?.content || '1-2 days'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
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

      {/* Call to Action with Ocean Gradient */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative overflow-hidden mt-16"
      >
        {/* Background with ocean-like gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-800 via-purple-300 to-pink-100">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 drop-shadow-[0_6px_18px_rgba(0,0,0,0.18)] emboss-text display-heading mb-6">
            Plan Your Kutch Adventure
          </h2>
          <p className="text-xl md:text-2xl font-lora font-semibold text-indigo-700 drop-shadow-[0_6px_14px_rgba(0,0,0,0.12)] tracking-wide mb-8">
            Ready to explore the wonders of Kutch? Start planning your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-white/90 via-indigo-50/90 to-purple-50/90 text-indigo-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur transform hover:scale-105"
            >
              Back to Home
            </Link>
            <Link 
              href="#"
              className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DestinationsClient;



