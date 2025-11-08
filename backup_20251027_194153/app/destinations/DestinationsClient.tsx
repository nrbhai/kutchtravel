'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import BackButton from './BackButton';

// Type for destination data structure
interface Destination {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  highlights: string[];
  bestTime?: string;
  duration?: string;
  difficulty?: string;
}

// Sample destinations data (this could come from a separate data file)
const destinations: Destination[] = [
  {
    title: 'Bhuj',
    description: 'The cultural capital of Kutch, known for its magnificent palaces, ancient temples, and rich artisan traditions.',
    image: '/images/bhuj/bhuj.jpg',
    slug: 'bhuj',
    category: 'Heritage',
    highlights: ['Aina Mahal Palace', 'Prag Mahal', 'Kutch Museum', 'Local Handicrafts'],
    bestTime: 'October to March',
    duration: '2-3 days',
    difficulty: 'Easy'
  },
  {
    title: 'Dhordo White Rann',
    description: 'The mesmerizing white salt desert that transforms into a moonlit wonderland during the Rann Festival.',
    image: '/images/dhordo-white-rann/dhordo.jpg',
    slug: 'dhordo-white-rann',
    category: 'Natural Wonder',
    highlights: ['Salt Desert', 'Rann Festival', 'Cultural Performances', 'Sunset Views'],
    bestTime: 'November to February',
    duration: '1-2 days',
    difficulty: 'Easy'
  },
  {
    title: 'Mandvi',
    description: 'A historic port town with pristine beaches, ancient shipbuilding traditions, and the magnificent Vijay Vilas Palace.',
    image: '/images/mandvi/mandvi.jpg',
    slug: 'mandvi',
    category: 'Beach',
    highlights: ['Vijay Vilas Palace', 'Mandvi Beach', 'Shipbuilding Yards', 'Windmill Beach'],
    bestTime: 'October to March',
    duration: '1-2 days',
    difficulty: 'Easy'
  },
  {
    title: 'Lakhpat',
    description: 'A ghost town with a massive fort wall, gurudwara, and stunning desert landscapes.',
    image: '/images/lakhpat/lakhpat.jpg',
    slug: 'lakhpat',
    category: 'Historical',
    highlights: ['Lakhpat Fort', 'Gurudwara Sahib', 'Desert Views', 'Historical Ruins'],
    bestTime: 'October to March',
    duration: '1 day',
    difficulty: 'Easy'
  },
  {
    title: 'Kalo Dungar',
    description: 'The highest point in Kutch offering panoramic views of the Great Rann and Pakistan border.',
    image: '/images/kalo-dungar/kalo-dungar.jpg',
    slug: 'kalo-dungar',
    category: 'Scenic',
    highlights: ['Black Hill', 'Panoramic Views', 'Dattatreya Temple', 'Border Views'],
    bestTime: 'October to March',
    duration: 'Half day',
    difficulty: 'Easy'
  },
  {
    title: 'Anjar',
    description: 'A planned town known for its beautiful architecture, historical significance, and vibrant local culture.',
    image: '/images/anjar/anjar.jpg',
    slug: 'anjar',
    category: 'Cultural',
    highlights: ['Planned Architecture', 'Local Markets', 'Cultural Heritage', 'Traditional Crafts'],
    bestTime: 'October to March',
    duration: '1 day',
    difficulty: 'Easy'
  },
  {
    title: 'Gandhidham',
    description: 'A modern planned city serving as the commercial hub of Kutch with excellent connectivity.',
    image: '/images/gandhidham/gandhidham.jpg',
    slug: 'gandhidham',
    category: 'Modern',
    highlights: ['Modern Architecture', 'Commercial Hub', 'Good Connectivity', 'Urban Planning'],
    bestTime: 'Year Round',
    duration: '1 day',
    difficulty: 'Easy'
  },
  {
    title: 'Mundra',
    description: 'A major port town with historical significance, beautiful temples, and coastal charm.',
    image: '/images/mundra/mundra.jpg',
    slug: 'mundra',
    category: 'Port Town',
    highlights: ['Historic Port', 'Ancient Temples', 'Coastal Views', 'Maritime Heritage'],
    bestTime: 'October to March',
    duration: '1 day',
    difficulty: 'Easy'
  }
];

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

export default function DestinationsClient() {
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories for filter buttons
  const categories = ['All', ...Array.from(new Set(destinations.map(dest => dest.category)))];

  // Filter destinations based on category and search term
  const filterDestinations = useCallback((category: string, search: string) => {
    let filtered = destinations;

    if (category !== 'All') {
      filtered = filtered.filter(dest => dest.category === category);
    }

    if (search) {
      filtered = filtered.filter(dest =>
        dest.title.toLowerCase().includes(search.toLowerCase()) ||
        dest.description.toLowerCase().includes(search.toLowerCase()) ||
        dest.highlights.some(highlight => 
          highlight.toLowerCase().includes(search.toLowerCase())
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-400 mx-auto mb-6"></div>
          <p className="text-xl font-sora font-semibold text-purple-200">
            Loading destinations...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700 selection:bg-purple-200 selection:text-purple-900">
      <Navigation />
      
      {/* Header Section with Embossed Design */}
      <div className="relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-1 bg-purple-500/30"></div>
          <div className="blob blob-2 bg-blue-500/30"></div>
          <div className="blob blob-3 bg-indigo-500/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <BackButton />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl text-purple-200 rounded-full text-sm font-semibold tracking-wide border border-white/20 shadow-xl font-poppins">
                🗺️ Explore Kutch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sora holographic">
              Discover Kutch
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed font-medium font-poppins">
              Explore the hidden gems and famous destinations of Gujarat's largest district
            </p>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-px w-56 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar with Gradient Background */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-full focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none shadow-xl transition-all duration-300 placeholder-purple-300/70 font-poppins"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filters with Gradient Buttons */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={filterButtonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg font-poppins ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-xl transform scale-105'
                    : 'bg-white/10 backdrop-blur-xl text-purple-200 hover:bg-white/20 border border-white/20 hover:shadow-xl hover:scale-105'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Results Count */}
        {/* Results Count with Embossed Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-lg font-poppins font-semibold text-purple-200">
            {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
          </p>
        </motion.div>

        {/* Destinations Grid with Gradient Cards */}
        {filteredDestinations.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.slug}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group"
              >
                <Link href={`/destinations/${destination.slug}`}>
                  <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] hover:bg-white/15 hover:border-white/30">
                    
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur font-poppins">
                          {destination.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Overlay content on hover */}
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-white text-sm font-medium drop-shadow-lg font-poppins">
                          Click to explore →
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-3 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300 drop-shadow-sm font-sora">
                        {destination.title}
                      </h3>
                      <p className="text-purple-100 mb-6 line-clamp-3 leading-relaxed font-poppins">
                        {destination.description}
                      </p>

                      {/* Travel Info with Gradient Background */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/10 backdrop-blur-xl rounded-lg p-3 border border-white/20">
                          <span className="font-semibold text-purple-300 text-sm block mb-1 font-sora">Best Time</span>
                          <p className="text-purple-200 text-sm font-poppins">{destination.bestTime}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-xl rounded-lg p-3 border border-white/20">
                          <span className="font-semibold text-purple-300 text-sm block mb-1 font-sora">Duration</span>
                          <p className="text-purple-200 text-sm font-poppins">{destination.duration}</p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-3 text-sm font-sora">Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.slice(0, 3).map((highlight, idx) => (
                            <span 
                              key={idx}
                              className="text-xs px-3 py-1 bg-white/10 backdrop-blur-xl text-purple-200 rounded-full border border-white/20 font-poppins"
                            >
                              {highlight}
                            </span>
                          ))}
                          {destination.highlights.length > 3 && (
                            <span className="text-xs px-3 py-1 bg-white/5 backdrop-blur-xl text-purple-300 rounded-full border border-white/10 font-poppins">
                              +{destination.highlights.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex justify-between items-center pt-4 border-t border-white/20">
                        <span className="text-sm font-medium text-purple-300 font-poppins">
                          {destination.difficulty} • {destination.category}
                        </span>
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                          Explore →
                        </div>
                      </div>
                    </div>
                  </div>
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
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100/80 to-indigo-100/80 dark:from-blue-900/80 dark:to-indigo-900/80 rounded-full flex items-center justify-center backdrop-blur">
              <svg className="w-12 h-12 text-pink-300 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 dark:from-blue-100 dark:via-indigo-100 dark:to-purple-100 mb-4 drop-shadow-sm">
              No destinations found
            </h3>
            <p className="text-purple-100 dark:text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchTerm('');
                setFilteredDestinations(destinations);
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-blue-300 to-sky-100">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-indigo-900 to-cyan-900 dark:from-blue-800 dark:via-indigo-800 dark:to-cyan-800 drop-shadow-[0_6px_18px_rgba(0,0,0,0.18)] emboss-text display-heading mb-6">
            Plan Your Kutch Adventure
          </h2>
          <p className="text-xl md:text-2xl font-lora font-semibold text-purple-300 dark:text-blue-300 drop-shadow-[0_6px_14px_rgba(0,0,0,0.12)] tracking-wide mb-8">
            Ready to explore the wonders of Kutch? Start planning your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-white/90 via-blue-50/90 to-indigo-50/90 text-white dark:from-white/85 dark:via-blue-50/85 dark:to-indigo-50/85 dark:text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur transform hover:scale-105"
            >
              Back to Home
            </Link>
            <Link 
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-blue-900/30 transition-all duration-300 transform hover:scale-105"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

