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
import MetallicHeading from '../components/MetallicHeading';
import { heroImages, accommodationDeals } from './config';
import { Sparkles, Calendar, Search, MapPin, Tag, Clock } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function BookingsClient() {
  const [activeTab, setActiveTab] = useState('hotels');

  return (
    <div className="min-h-screen bg-background text-white selection:bg-amber-500/30 selection:text-amber-200">
      {/* Header Section */}
      <div className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
          {/* Animated gradient blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/90"></div>
        </div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium tracking-wide text-amber-400">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Curated Travel Solutions</span>
                </span>
              </motion.div>
              
              <div className="mb-6">
                <MetallicHeading 
                  text="Book Your Next"
                  variant="gold"
                  as="h1"
                  className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight font-sora block"
                />
                 <MetallicHeading 
                  text="Golden Adventure"
                  variant="silver"
                  as="span"
                  className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight font-sora block mt-2"
                />
              </div>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10 font-inter font-light">
                Unlock exclusive deals on premium stays, flights, and curated cultural experiences in the land of the White Desert.
              </p>

              {/* Quick Features */}
              <div className="flex flex-wrap gap-4">
                 {['Best Price Guarantee', 'Luxury Selection', '24/7 Concierge'].map((feat, i) => (
                   <div key={i} className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-amber-500/30 transition-colors">
                     <span className="text-amber-500 text-lg">✓</span>
                     <span className="font-semibold text-sm text-gray-300 font-inter">{feat}</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* Right Column - Swiper Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[50vh] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] order-1 lg:order-2 border border-white/10"
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
                      className="object-cover transition-transform duration-[10s] hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                       <p className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em] mb-3 font-inter">Featured Stay</p>
                      <h3 className="text-3xl md:text-4xl font-sora font-bold text-white leading-tight mb-2">
                        {img.title}
                      </h3>
                      {img.subtitle && (
                        <p className="text-gray-300 text-sm md:text-base font-inter border-l-2 border-amber-500 pl-3">{img.subtitle}</p>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Booking Categories Tabs - Sticky */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-y border-white/10 py-4">
        <div className="max-w-[1600px] mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex md:justify-center gap-4 min-w-max">
            {[
              { id: 'hotels', label: 'Hotels', icon: '🏨' },
              { id: 'flights', label: 'Flights', icon: '✈️' },
              { id: 'tours', label: 'Experiences', icon: '✨' },
              { id: 'shopping', label: 'Shop', icon: '🛍️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-3 font-sora text-sm md:text-base border ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105 border-amber-400'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border-white/5'
                }`}
              >
                <span className="text-lg filter drop-shadow-md">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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

      {/* Footer CTA */}
      <FooterCTA />
    </div>
  );
}

// Hotels Section Component
function HotelsSection() {
  return (
    <div className="space-y-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center px-2"
      >
        <div className="inline-block">
            <MetallicHeading text="Sanctuaries of Comfort" variant="gold" as="h2" className="text-3xl md:text-5xl font-black mb-6" />
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-inter leading-relaxed">
          From royal heritage palaces to eco-friendly desert resorts, find your perfect abode in Kutch.
        </p>
      </motion.div>

      {/* Curated Best Deals Section */}
      <BestDealsSection />

      {/* Booking Widget Wrapper - Just for spacing, aesthetic provided by widget itself or contained mostly */}
      <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
         <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-sora text-white mb-2">Search Availability</h3>
            <p className="text-gray-400 text-sm">Powered by our trusted partners</p>
         </div>
         <BookingWidget />
      </div>

      <TripWidget defaultTab="hotels" />
    </div>
  );
}

// Flights Section Component
function FlightsSection() {
  return (
    <div className="space-y-16">
      <div className="text-center px-2">
         <MetallicHeading text="Wings to Kutch" variant="gold" as="h2" className="text-3xl md:text-5xl font-black mb-6 mx-auto block" />
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-inter leading-relaxed">
          Seamless connectivity to the land of white sands. Compare prices and book effortlessly.
        </p>
      </div>

      {/* Popular Flight Routes - Premium Dark Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
            className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 shadow-xl border border-white/10 flex items-center justify-between group hover:border-amber-500/50 transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-2xl text-black shadow-lg group-hover:rotate-12 transition-transform">
                ✈️
              </div>
              <div>
                <h4 className="font-bold text-white font-sora text-lg mb-1">{flight.from} ⇄ {flight.to}</h4>
                <p className="text-sm text-gray-400 font-inter font-medium flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Non-stop • {flight.duration}
                </p>
              </div>
            </div>
            <div className="text-right bg-white/5 px-4 py-3 rounded-xl border border-white/5">
              <p className="text-[10px] text-amber-500 font-bold uppercase tracking-wider font-inter mb-1">From</p>
              <p className="text-xl font-black text-white font-sora">{flight.price}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
         <TripWidget defaultTab="flights" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-[2rem] p-8 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">✈️</span>
            <h3 className="text-2xl font-bold font-sora text-white">Reach Kutch</h3>
          </div>
          <ul className="space-y-4 text-gray-300 font-inter text-base font-light">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg">›</span>
              <span><strong>Bhuj Airport (BHJ):</strong> The gateway to Kutch, well connected to Mumbai.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 text-lg">›</span>
              <span><strong>Kandla Airport (IXY):</strong> Alternative option near Gandhidham.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-[2rem] p-8 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">💡</span>
            <h3 className="text-2xl font-bold font-sora text-white">Smart Tips</h3>
          </div>
          <ul className="space-y-4 text-gray-300 font-inter text-base font-light">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 text-lg">›</span>
              <span>Book 3-4 weeks in advance for Rann Utsav (Dec-Feb).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 text-lg">›</span>
              <span>Early morning flights offer spectacular aerial views of the salt desert.</span>
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
    <div className="space-y-16">
      <div className="text-center">
         <MetallicHeading text="Curated Experiences" variant="gold" as="h2" className="text-3xl md:text-5xl font-black mb-6 mx-auto block" />
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-inter leading-relaxed">
          Embark on guided journeys through time, tradition, and terrain with our expert local partners.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
         <TripWidget defaultTab="activities" />
      </div>

      {/* Popular Tours - Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "White Rann Full Moon Night", duration: "2 Days", price: "₹8,500", rating: "4.9", tag: "Exclusive" },
          { name: "Heritage Walk of Bhuj", duration: "1 Day", price: "₹3,200", rating: "4.7", tag: "Cultural" },
          { name: "Wild Ass Sanctuary Safari", duration: "Full Day", price: "₹4,500", rating: "4.8", tag: "Adventure" }
        ].map((tour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-md rounded-[2rem] p-1 border border-white/10 hover:border-amber-500/50 transition-colors group"
          >
            <div className="bg-white/5 rounded-[1.8rem] p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500 text-xl border border-amber-500/20">✨</div>
                <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold font-inter uppercase tracking-wide">{tour.tag}</span>
              </div>
              
              <h3 className="font-bold text-xl mb-4 font-sora text-white leading-snug group-hover:text-amber-400 transition-colors">{tour.name}</h3>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8 font-inter font-medium">
                 <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> {tour.duration}</span>
                 <span className="flex items-center gap-2"><span className="text-yellow-400">★</span> {tour.rating}</span>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                 <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Starting from</p>
                    <p className="text-2xl font-black text-white font-sora">{tour.price}</p>
                 </div>
                 <button className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-500 transition-colors shadow-lg">
                   Book Now
                 </button>
              </div>
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
    <div className="space-y-16">
      <div className="text-center">
         <MetallicHeading text="Treasures of Kutch" variant="gold" as="h2" className="text-3xl md:text-5xl font-black mb-6 mx-auto block" />
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-inter leading-relaxed">
          Bring a piece of heritage home. Shop authentic handicrafts, textiles, and travel essentials.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { category: "Travel Gear", icon: "🎒", desc: "For the Explorer" },
          { category: "Handicrafts", icon: "🎨", desc: "Artisan Made" },
          { category: "Textiles", icon: "🧣", desc: "Bandhani & Ajrakh" },
          { category: "Souvenirs", icon: "🛍️", desc: "Memories" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 text-center border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all cursor-pointer group"
          >
            <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">{item.icon}</span>
            <h3 className="font-bold text-white font-sora text-xl mb-1">{item.category}</h3>
            <p className="text-xs text-amber-500 font-inter uppercase tracking-widest">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Featured Products */}
      <div className="bg-gradient-to-b from-white/5 to-transparent rounded-[2.5rem] p-8 md:p-12 border border-white/10">
        <h3 className="text-2xl font-bold mb-10 font-sora text-white flex items-center gap-3">
           <Sparkles className="w-6 h-6 text-amber-500" /> Featured Collections
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Kutchi Embroidered Bag", 
              price: "₹2,500", 
              tag: "Handmade",
              rating: "4.9"
            },
            { 
              name: "Ajrakh Block Print Stole", 
              price: "₹1,800", 
              tag: "Natural Dye",
              rating: "4.8"
            },
             { 
              name: "Bandhani Silk Saree", 
              price: "₹12,000", 
              tag: "Premium Silk",
              rating: "5.0"
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              className="bg-black/40 rounded-3xl overflow-hidden group border border-white/5 hover:border-amber-500/30 transition-all"
            >
              <div className="relative h-64 bg-gray-800 group-hover:bg-gray-700 transition-colors flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20"></div>
                 <span className="text-6xl grayscale group-hover:grayscale-0 transition-all duration-500">🛍️</span>
                 <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {product.tag}
                 </div>
              </div>
              <div className="p-6">
                 <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white font-sora text-lg">{product.name}</h4>
                    <span className="text-yellow-400 text-xs font-bold flex items-center gap-1">★ {product.rating}</span>
                 </div>
                 <div className="flex items-center justify-between mt-6">
                    <span className="text-amber-500 font-black text-xl font-sora">{product.price}</span>
                    <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-amber-400 transition-colors">
                      View
                    </button>
                 </div>
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
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8 px-2">
        <div>
          <h3 className="text-2xl font-bold font-sora text-white flex items-center gap-3">
             <span className="text-amber-500 text-2xl">⚡</span> Limited Time Offers
          </h3>
        </div>
        <a href="https://www.booking.com/searchresults.html?ss=kutch" target="_blank" rel="noopener noreferrer" className="text-amber-500 text-sm font-bold hover:text-white transition-colors flex items-center gap-2">
          View All Offers <span className="text-lg">→</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {accommodationDeals.map((deal) => (
          <motion.a
            href={deal.link}
            target="_blank"
            rel="noopener noreferrer"
            key={deal.id}
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -5 }}
            className="group block bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 shadow-lg flex flex-col h-full transition-colors"
          >
            <div className="relative aspect-[4/5] w-full bg-gray-900 overflow-hidden">
              <Image
                src={deal.image}
                alt={deal.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-white flex items-center gap-1 z-10 border border-white/10">
                <span className="text-yellow-400">★</span> {deal.rating}
              </div>
              
              {deal.dealType && (
                <div className="absolute top-2 left-2 bg-amber-500 text-black px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider z-10 shadow-lg">
                  {deal.dealType}
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                 <h4 className="font-bold text-white font-sora text-base mb-1 leading-tight group-hover:text-amber-400 transition-colors">{deal.name}</h4>
                 <p className="text-gray-300 text-xs font-inter flex items-center gap-1 mb-2">
                   <MapPin className="w-3 h-3 text-amber-500" /> {deal.location}
                 </p>
                 <div className="flex items-center justify-between border-t border-white/20 pt-2 mt-2">
                    <p className="font-black text-amber-500 text-lg font-sora">{deal.price}</p>
                    <span className="bg-white/20 p-1.5 rounded-full text-white text-xs">↗</span>
                 </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

function FooterCTA() {
  return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden mt-32 bg-black py-24 border-t border-white/10"
      >
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
             
             {/* Glows */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10">
                <MetallicHeading text="Craft Your Dream Journey" variant="gold" as="h2" className="text-3xl md:text-5xl font-black mb-8 mx-auto block" />
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 font-inter font-light max-w-2xl mx-auto">
                Need a bespoke itinerary? Our travel artisans are ready to curate your perfect Kutch experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                    href="/destinations"
                    className="group bg-amber-500 text-black font-inter font-bold px-10 py-4 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:scale-105"
                >
                    <span className="flex items-center gap-2">Explore Destinations <span className="group-hover:translate-x-1 transition-transform">→</span></span>
                </Link>
                <Link 
                    href="/about"
                    className="group bg-transparent border border-white/30 text-white hover:bg-white/10 font-inter font-bold px-10 py-4 rounded-full transition-all duration-300"
                >
                    <span className="flex items-center gap-2">Contact Experts <span className="group-hover:translate-x-1 transition-transform">→</span></span>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
  )
}
