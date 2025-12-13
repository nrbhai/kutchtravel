'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Navigation from '../components/Navigation';
import BookingWidget from '../components/BookingWidget';
import TripWidget from '../components/TripWidget';
import { heroImages, accommodationDeals } from './config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2 
    }
  }
};

export default function BookingsClient() {
  const [activeTab, setActiveTab] = useState('hotels');

  return (
    <div className="min-h-screen bg-white selection:bg-purple-200 selection:text-purple-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Blobs - Optimized for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob blob-1 w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-0 left-0 opacity-20 blur-3xl"></div>
          <div className="blob blob-2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bottom-0 right-0 opacity-20 blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80"></div>
        </div>
        
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left order-2 lg:order-1 relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-md border border-black/10 rounded-full text-sm font-inter font-semibold tracking-wide text-gray-900">
                  <span className="animate-pulse text-purple-600">●</span>
                  <span>Complete Travel Solutions</span>
                </span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] font-sora tracking-tight text-gray-900">
                Book Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Next Adventure
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-8 font-inter font-medium">
                Unlock exclusive deals on hotels, flights, and curated experiences in Kutch.
              </p>

              {/* Quick Features - Horizontal Scroll on Mobile */}
              <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar items-center">
                 {['Best Prices', 'Curated Stays', '24/7 Support'].map((feat, i) => (
                   <div key={i} className="flex-shrink-0 flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                     <span className="text-purple-600 text-lg">✓</span>
                     <span className="font-semibold text-sm text-gray-900 font-inter">{feat}</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* Right Column - Swiper Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[45vh] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2 ring-4 ring-white/50"
            >
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect={'fade'}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-full w-full"
              >
                {heroImages.map((img, index) => (
                  <SwiperSlide key={index} className="relative h-full w-full">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                       <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-1 font-inter">Featured</p>
                      <h3 className="text-2xl md:text-3xl font-sora font-bold text-white leading-tight">
                        {img.title}
                      </h3>
                      {img.subtitle && (
                        <p className="text-white/80 text-sm md:text-base mt-2 font-inter">{img.subtitle}</p>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Booking Categories Tabs - Sticky & Scrollable */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-y border-gray-100 shadow-sm py-4">
        <div className="max-w-[1600px] mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex md:justify-center gap-3 min-w-max">
            {[
              { id: 'hotels', label: 'Hotels', icon: '🏨' },
              { id: 'flights', label: 'Flights', icon: '✈️' },
              { id: 'tours', label: 'Tours', icon: '🎯' },
              { id: 'shopping', label: 'Shopping', icon: '🛍️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 font-sora text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Content Sections */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[600px]"
        >
          {activeTab === 'hotels' && <HotelsSection />}
          {activeTab === 'flights' && <FlightsSection />}
          {activeTab === 'tours' && <ToursSection />}
          {activeTab === 'shopping' && <ShoppingSection />}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative overflow-hidden mt-20 bg-white py-20"
      >
        {/* Background blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-3 w-[400px] h-[400px] top-0 right-0 opacity-20"></div>
          <div className="blob blob-1 w-[300px] h-[300px] bottom-0 left-0 opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-12 border-2 border-purple-100/50 shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 font-sora bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Need Help Planning?
            </h2>
            <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-8 font-space-grotesk font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Our travel experts are here to help you plan the perfect Kutch adventure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/destinations"
                className="inline-flex items-center gap-2 bg-white text-purple-600 font-inter font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-purple-200 hover:border-purple-400"
              >
                <span>Explore Destinations</span>
                <span>→</span>
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-inter font-bold px-8 py-4 rounded-full shadow-xl shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact Us</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Hotels Section Component
function HotelsSection() {
  return (
    <div className="space-y-8 md:space-y-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-6 md:mb-10 px-2"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-3 font-sora text-gray-900 leading-tight">
          Find Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Accommodation</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-inter leading-relaxed">
          Book hotels, resorts, and homestays in Kutch with our trusted partners. Best prices guaranteed!
        </p>
      </motion.div>

      {/* Curated Best Deals Section - Expanded Grid */}
      <BestDealsSection />

      {/* Booking Widget Section - Booking.com */}
      <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-xl shadow-purple-900/5 ring-1 ring-black/5">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-1 font-sora text-gray-900">Search Hotels</h3>
          <p className="text-gray-500 text-sm md:text-base font-inter">Compare deals from top providers</p>
        </div>
        
        <div className="space-y-8 md:space-y-12">
          <BookingWidget />
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-xs font-bold tracking-widest text-gray-400 uppercase">Or verify with</span>
            </div>
          </div>

          <TripWidget defaultTab="hotels" />
        </div>
      </div>
    </div>
  );
}

// Flights Section Component
function FlightsSection() {
  return (
    <div className="space-y-8 md:space-y-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-6 md:mb-10 px-2"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-3 font-sora text-gray-900">Book Your <span className="text-blue-600">Flight</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-inter leading-relaxed">
          Find the best flight deals to Bhuj and other nearby airports. Compare prices from multiple airlines.
        </p>
      </motion.div>

      {/* Popular Flight Routes - Modern Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
        {[
          {
            from: "Bhuj (BHJ)",
            to: "Mumbai (BOM)",
            duration: "1h 15m",
            price: "₹3,500+",
            image: "/images/flights/mumbai-skyline.jpg",
            link: "https://www.booking.com/flights/index.html?aid=2665264"
          },
          {
            from: "Bhuj (BHJ)",
            to: "Delhi (DEL)",
            duration: "2h 00m",
            price: "₹5,500+",
            image: "/images/flights/delhi-india-gate.jpg",
            link: "https://www.booking.com/flights/index.html?aid=2665264"
          }
        ].map((flight, index) => (
          <motion.a
            key={index}
            href={flight.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-[1.5rem] p-5 md:p-6 shadow-xl shadow-blue-900/5 border border-blue-50 flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">
                ✈️
              </div>
              <div>
                <h4 className="font-bold text-gray-900 font-sora text-sm md:text-base">{flight.from} ⇄ {flight.to}</h4>
                <p className="text-xs text-gray-500 font-inter font-medium mt-1">Non-stop • {flight.duration}</p>
              </div>
            </div>
            <div className="text-right bg-blue-50 px-3 py-2 rounded-xl">
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider font-inter">Start</p>
              <p className="text-base font-black text-blue-700 font-sora">{flight.price}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Flight Search Widget */}
      <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-xl shadow-blue-900/5 ring-1 ring-black/5">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 font-sora">Search Flights</h3>
          <p className="text-gray-500 text-sm md:text-base font-inter">Find the best flight deals</p>
        </div>
        
        <TripWidget defaultTab="flights" />
      </div>

      {/* Flight Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50/50 rounded-[2rem] p-6 md:p-8 border-none">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl md:text-4xl">✈️</span>
            <h3 className="text-xl md:text-2xl font-bold font-sora text-gray-900">Reach Kutch</h3>
          </div>
          <ul className="space-y-4 text-gray-700 font-inter text-sm md:text-base font-medium">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">•</span>
              <span><strong>Bhuj Airport (BHJ):</strong> Main airport serving Kutch region</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">•</span>
              <span><strong>From Mumbai:</strong> Direct flights available (1.5 hours)</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-cyan-50/50 rounded-[2rem] p-6 md:p-8 border-none">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl md:text-4xl">💡</span>
            <h3 className="text-xl md:text-2xl font-bold font-sora text-gray-900">Smart Tips</h3>
          </div>
          <ul className="space-y-4 text-gray-700 font-inter text-sm md:text-base font-medium">
            <li className="flex items-start gap-3">
              <span className="text-cyan-600 text-lg">•</span>
              <span>Book 2-3 weeks in advance for best prices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-600 text-lg">•</span>
              <span>Winter season (Nov-Feb) is peak time</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Tours Section Component
function ToursSection() {
  return (
    <div className="space-y-8 md:space-y-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-6 md:mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-3 font-sora text-gray-900">Discover <span className="text-purple-600">Amazing Tours</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-inter leading-relaxed">
          Book guided tours, cultural experiences, and adventure activities in Kutch with local experts.
        </p>
      </motion.div>

      {/* Tours Widget */}
      <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-xl shadow-purple-900/5 ring-1 ring-black/5">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 font-sora">Book Activities</h3>
          <p className="text-gray-500 text-sm md:text-base font-inter">Discover unforgettable experiences</p>
        </div>
        
        <TripWidget defaultTab="activities" />
      </div>

      {/* Popular Tours - Sleek Mobile Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "White Rann Full Moon Tour", duration: "2 Days", price: "₹8,500", rating: "4.8" },
          { name: "Kutch Heritage Village Tour", duration: "1 Day", price: "₹3,200", rating: "4.6" },
          { name: "Desert Safari & Camel Ride", duration: "Half Day", price: "₹2,800", rating: "4.9" }
        ].map((tour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-[1.5rem] p-6 shadow-xl shadow-purple-900/5 hover:shadow-2xl transition-all duration-300 border border-gray-50"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-50 rounded-2xl text-2xl">⚡</div>
              <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold font-inter">Best Seller</span>
            </div>
            
            <h3 className="font-bold text-lg mb-3 font-sora text-gray-900 line-clamp-2">{tour.name}</h3>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-inter font-medium">
               <span className="flex items-center gap-1">⏱️ {tour.duration}</span>
               <span className="flex items-center gap-1">⭐ {tour.rating}</span>
            </div>

            <div className="flex items-center justify-between mt-auto">
               <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Price</p>
                  <p className="text-xl font-black text-purple-600 font-sora">{tour.price}</p>
               </div>
               <button className="bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-80 transition-opacity">
                 Book
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Shopping Section Component
function ShoppingSection() {
  return (
    <div className="space-y-8 md:space-y-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-6 md:mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-3 font-sora text-gray-900">Local <span className="text-indigo-600">Treasures</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-inter leading-relaxed">
          Shop for travel essentials, authentic Kutchi handicrafts, and local souvenirs.
        </p>
      </motion.div>

      {/* Shopping Categories - Minimalist Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { category: "Travel Gear", icon: "🎒" },
          { category: "Handicrafts", icon: "🎨" },
          { category: "Clothing", icon: "👕" },
          { category: "Souvenirs", icon: "🛍️" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-[1.5rem] p-6 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100 flex flex-col items-center justify-center gap-3 aspect-square"
          >
            <span className="text-4xl">{item.icon}</span>
            <h3 className="font-bold text-gray-900 font-sora">{item.category}</h3>
          </motion.div>
        ))}
      </div>

      {/* Featured Products - Sleek Product Cards */}
      <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-xl shadow-indigo-900/5 ring-1 ring-black/5">
        <h3 className="text-2xl font-bold text-center mb-8 font-sora text-gray-900">Featured Products</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              name: "Professional Travel Camera", 
              price: "₹45,000", 
              originalPrice: "₹52,000",
              affiliate: "Amazon",
              rating: "4.5"
            },
            { 
              name: "Kutchi Bandhani Saree", 
              price: "₹3,500", 
              originalPrice: "₹4,200",
              affiliate: "Local Artisan",
              rating: "4.8"
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 bg-gray-200 group-hover:bg-gray-300 transition-colors">
                 <div className="absolute inset-0 flex items-center justify-center text-4xl">📸</div>
              </div>
              <div className="p-4">
                 <h4 className="font-bold text-gray-900 mb-1 font-sora">{product.name}</h4>
                 <div className="flex items-center gap-2 mb-4">
                    <span className="text-indigo-600 font-black text-lg">{product.price}</span>
                    <span className="text-gray-400 text-sm line-through decoration-2">{product.originalPrice}</span>
                 </div>
                 <button className="w-full bg-black text-white py-3 rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform">
                   Buy Now
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Curated Best Deals Component
function BestDealsSection() {
  return (
    <div className="mb-8 md:mb-16">
      <div className="flex items-center justify-between mb-6 px-2">
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-sora text-gray-900 flex items-center gap-2">
            <span className="text-2xl">🔥</span> Top Deals
          </h3>
        </div>
        <a href="https://www.booking.com/searchresults.html?ss=kutch" target="_blank" rel="noopener noreferrer" className="text-purple-600 text-sm font-bold hover:underline transition-all">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 md:px-0">
        {accommodationDeals.map((deal) => (
          <motion.a
            href={deal.link}
            target="_blank"
            rel="noopener noreferrer"
            key={deal.id}
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -5 }}
            className="group block bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
          >
            <div className="relative aspect-[4/5] md:aspect-[4/3] w-full bg-gray-200 overflow-hidden">
              <Image
                src={deal.image}
                alt={deal.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-white flex items-center gap-1 z-10">
                <span className="text-yellow-400">★</span> {deal.rating}
              </div>
              {deal.dealType && (
                <div className="absolute top-2 left-2 bg-purple-600 px-2 py-1 rounded-lg text-[10px] font-bold text-white z-10 shadow-lg">
                  {deal.dealType}
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-12 md:hidden">
                 <h4 className="font-bold text-white font-sora text-sm mb-0.5 leading-tight">{deal.name}</h4>
                 <p className="text-white/80 text-xs font-inter">{deal.price}</p>
              </div>
            </div>
            
            <div className="p-3 md:p-4 flex flex-col flex-grow hidden md:flex">
              <h4 className="font-bold text-gray-900 font-sora text-sm md:text-base mb-1 truncate">{deal.name}</h4>
               <p className="text-gray-500 text-xs font-inter mb-2 flex items-center gap-1">
                 <span>📍</span> {deal.location}
               </p>

              <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Avg. Price</p>
                  <p className="font-bold text-purple-600 text-base">{deal.price}</p>
                </div>
                <div className="bg-gray-50 group-hover:bg-purple-50 group-hover:text-purple-600 p-1.5 rounded-full transition-colors">
                  <span className="text-sm">↗️</span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
