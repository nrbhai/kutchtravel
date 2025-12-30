'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import MetallicHeading from '../components/MetallicHeading';
import GoldenFooter from '../components/GoldenFooter';
import { DESTINATIONS } from '@/app/destinations/data';
import type { Destination } from './data/index';

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
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const filterButtonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

// Create short descriptions if missing
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

// Create category labels
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

function DestinationsClient() {

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [
    { src: "/images/destinations/white-rann-hero.webp", alt: "White Rann" },
    { src: "/images/destinations/bhuj-overview.webp", alt: "Bhuj Heritage" },
    { src: "/images/destinations/mandvi.webp", alt: "Mandvi Beach" },
    { src: "/images/destinations/kalo-dungar.webp", alt: "Kalo Dungar" },
    { src: "/images/carousel/kutch14.webp", alt: "Kutch Landscape" },
  ];

  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(DESTINATIONS);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(DESTINATIONS.map((dest: Destination) => 
    Array.isArray(dest.sections)
      ? dest.sections.find((section: { heading: string; content?: string }) => section.heading === 'Category')?.content || 'Other'
      : 'Other'
  )))];

  // Filter destinations based on category and search term
  const filterDestinations = useCallback((category: string, search: string) => {
    let filtered = DESTINATIONS;

    if (category !== 'All') {
      filtered = filtered.filter((dest: Destination) =>
        Array.isArray(dest.sections) && dest.sections.some((section: { heading: string; content?: string }) =>
          section.heading === 'Category' && section.content === category
        )
      );
    }

    if (search) {
      filtered = filtered.filter((dest: Destination) =>
        dest.title.toLowerCase().includes(search.toLowerCase()) ||
        (Array.isArray(dest.sections) && dest.sections.some((section: { content?: string; list?: string[] }) =>
          section.content?.toLowerCase().includes(search.toLowerCase()) ||
          (Array.isArray(section.list) && section.list.some((item: string) =>
            item.toLowerCase().includes(search.toLowerCase())
          ))
        ))
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
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-500 mx-auto mb-6"></div>
          <p className="text-xl font-sora font-medium text-amber-500/80 tracking-widest uppercase">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1️⃣ Modern Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-950 pt-20 pb-10">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-yellow-600/10 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-1/2 w-[480px] h-[480px] bg-orange-600/5 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Explore Kutch
              </div>

              <div className="mb-2">
                 <MetallicHeading 
                  text="Journey Through"
                  as="h2"
                  variant="silver"
                  className="text-4xl md:text-5xl lg:text-6xl font-light font-sora mb-2 block"
                 />
                 <MetallicHeading 
                  text="Timeless Lands"
                  as="h1"
                  variant="gold"
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-sora leading-tight block"
                 />
              </div>

              <p className="mt-8 text-lg max-w-2xl mx-auto lg:mx-0 text-gray-300 font-light leading-relaxed">
                From the vast white salt desert to ancient heritage cities and pristine beaches. Discover the diverse landscapes that make Kutch a traveler's paradise.
              </p>

              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-8 text-gray-400 text-sm font-medium">
                   <div className="flex items-center gap-2">
                     <span className="text-amber-500 text-xl">12+</span>
                     <span>Destinations</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-amber-500 text-xl">5000+</span>
                     <span>Years History</span>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Carousel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
               {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === currentImageIndex ? 1 : 0,
                      scale: index === currentImageIndex ? 1.05 : 1.1
                    }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-sora font-bold text-xl drop-shadow-lg">
                      {image.alt}
                    </div>
                  </motion.div>
                ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2️⃣ Filters & Search */}
      <div className="sticky top-[64px] z-40 bg-gray-950/80 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-[1600px] mx-auto px-4 py-4">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              {/* Search */}
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Find your destination..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all font-inter"
                />
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Showing <span className="text-white">{filteredDestinations.length}</span> results
              </p>
           </div>

           {/* Categories */}
           <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-amber-500 text-black border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
           </div>
        </div>
      </div>

      {/* 3️⃣ Main Grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        {filteredDestinations.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDestinations.map((destination, index) => {
               const cardColors = [
                { border: 'border-cyan-800/50', hoverBorder: 'hover:border-cyan-500', gradient: 'from-gray-900 via-cyan-950/30 to-blue-950/30', tag: 'bg-cyan-950/50 text-cyan-300 border-cyan-800', button: 'bg-cyan-700 hover:bg-cyan-600' },
                { border: 'border-purple-800/50', hoverBorder: 'hover:border-purple-500', gradient: 'from-gray-900 via-purple-950/30 to-pink-950/30', tag: 'bg-purple-950/50 text-purple-300 border-purple-800', button: 'bg-purple-700 hover:bg-purple-600' },
                { border: 'border-emerald-800/50', hoverBorder: 'hover:border-emerald-500', gradient: 'from-gray-900 via-emerald-950/30 to-teal-950/30', tag: 'bg-emerald-950/50 text-emerald-300 border-emerald-800', button: 'bg-emerald-700 hover:bg-emerald-600' },
                { border: 'border-orange-800/50', hoverBorder: 'hover:border-orange-500', gradient: 'from-gray-900 via-orange-950/30 to-amber-950/30', tag: 'bg-orange-950/50 text-orange-300 border-orange-800', button: 'bg-orange-700 hover:bg-orange-600' },
                { border: 'border-blue-800/50', hoverBorder: 'hover:border-blue-500', gradient: 'from-gray-900 via-blue-950/30 to-indigo-950/30', tag: 'bg-blue-950/50 text-blue-300 border-blue-800', button: 'bg-blue-700 hover:bg-blue-600' },
                { border: 'border-rose-800/50', hoverBorder: 'hover:border-rose-500', gradient: 'from-gray-900 via-rose-950/30 to-red-950/30', tag: 'bg-rose-950/50 text-rose-300 border-rose-800', button: 'bg-rose-700 hover:bg-rose-600' }
              ];
              const colors = cardColors[index % 6];
              const category = destinationCategories[destination.slug] || 
                               (Array.isArray(destination.sections) ? destination.sections.find((s:any) => s.heading === 'Category')?.content : 'Destination') || 
                               'Experience';

              return (
              <motion.div
                key={destination.slug}
                variants={cardVariants}
                className="group relative"
              >
                 <Link href={`/destinations/${destination.slug}`} className="block h-full">
                    <article className={`h-full flex flex-col relative bg-gradient-to-br ${colors.gradient} rounded-2xl overflow-hidden shadow-lg border-2 ${colors.border} transition-all duration-500 hover:shadow-2xl ${colors.hoverBorder} hover:-translate-y-2`}>
                      
                      {/* Image */}
                      <div className="relative h-64 w-full overflow-hidden border-b border-white/5">
                        <Image
                          src={destination.image}
                          alt={destination.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Tag */}
                        <div className="absolute top-4 right-4">
                          <span className={`backdrop-blur-md border px-3 py-1 rounded-full text-xs font-bold font-inter shadow-lg ${colors.tag}`}>
                            {category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                           <h3 className="text-xl font-sora font-bold text-white leading-tight group-hover:text-amber-400 transition-colors">
                              {destination.title}
                           </h3>
                        </div>

                        {/* Description Logic */}
                        <div className="space-y-4 mb-6 flex-1">
                           <p className="text-sm text-gray-400 font-light leading-relaxed line-clamp-3">
                              {destinationDescriptions[destination.slug] || destination.title}
                           </p>

                           {/* Mini Features */}
                           <div className="flex flex-wrap gap-2">
                             <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-gray-300 uppercase tracking-widest font-semibold">
                               Explore
                             </span>
                             <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-gray-300 uppercase tracking-widest font-semibold">
                               Culture
                             </span>
                           </div>
                        </div>

                        {/* CTA */}
                        <div className={`mt-auto flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-300 ${colors.button}`}>
                            <span className="text-white font-medium text-sm">View Guide</span>
                            <span className="text-white text-lg transform group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>

                    </article>
                 </Link>
              </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }}
             className="flex flex-col items-center justify-center py-20 text-center"
          >
             <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🔍</span>
             </div>
             <h3 className="text-2xl font-sora font-bold text-white mb-2">No Destinations Found</h3>
             <p className="text-gray-400 max-w-md mx-auto mb-8">
               We couldn't find any destinations matching "{searchTerm}". Try adjusting your filters or search terms.
             </p>
             <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                  setFilteredDestinations(DESTINATIONS);
                }}
                className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full transition-colors"
             >
               Clear Filters
             </button>
          </motion.div>
        )}
      </div>

      <GoldenFooter />
    </div>
  );
}

export default DestinationsClient;


