'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function BookingsClient() {
  const [activeTab, setActiveTab] = useState('hotels');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Booking-related images carousel
  const bookingImages = [
    { src: '/images/bhuj/bhuj.jpg', title: 'Heritage Hotels in Bhuj' },
    { src: '/images/mandvi/mandvi.jpg', title: 'Beach Resorts in Mandvi' },
    { src: '/images/dhordo-white-rann/dhordo.jpg', title: 'Desert Camps at White Rann' },
    { src: '/images/lakhpat/lakhpat.jpg', title: 'Historic Stays in Lakhpat' },
    { src: '/images/gandhidham/gandhidham.jpg', title: 'Modern Hotels in Gandhidham' },
    { src: '/images/mundra/mundra.jpg', title: 'Coastal Resorts in Mundra' }
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bookingImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bookingImages.length]);

  return (
    <div className="min-h-screen bg-white selection:bg-purple-200 selection:text-purple-900">
      {/* Header Section - Two Column Layout */}
      <div className="relative overflow-hidden pt-8 pb-20 bg-white">
        {/* Navigation - Position it absolutely over the section */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-30"></div>
          <div className="blob blob-2 w-[400px] h-[400px] bottom-0 right-0 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-full text-base font-poppins font-semibold tracking-wide shadow-xl shadow-purple-500/30">
                  <span>🎫</span>
                  <span>Complete Travel Solutions</span>
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-sora holographic">
                Book Your Kutch Adventure
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-900 max-w-3xl leading-relaxed mb-8 font-space-grotesk font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                Hotels, Flights, Tours & Shopping - Everything for your perfect trip
              </p>

              {/* Quick Features */}
              <div className="space-y-3 text-lg font-poppins text-gray-900">
                <div className="flex items-center gap-3">
                  <span className="text-purple-600 text-2xl">•</span>
                  <span className="font-medium">Best price guarantee on all bookings</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-600 text-2xl">•</span>
                  <span className="font-medium">Curated stays & authentic experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-2xl">•</span>
                  <span className="font-medium">24/7 travel support & assistance</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Auto-rotating Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <div className="relative h-full">
                {bookingImages.map((img, index) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === currentImageIndex ? 1 : 0,
                      scale: index === currentImageIndex ? 1 : 1.1
                    }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-sora font-bold text-white" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.6)' }}>
                        {img.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Booking Categories Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'hotels', label: 'Hotels', icon: '🏨' },
              { id: 'flights', label: 'Flights', icon: '✈️' },
              { id: 'tours', label: 'Tours', icon: '🎯' },
              { id: 'shopping', label: 'Shopping', icon: '🛍️' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg flex items-center gap-3 font-poppins ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-xl shadow-purple-500/30 transform scale-105'
                    : 'bg-white text-gray-900 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

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
                className="inline-flex items-center gap-2 bg-white text-purple-600 font-poppins font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-purple-200 hover:border-purple-400"
              >
                <span>Explore Destinations</span>
                <span>→</span>
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-poppins font-bold px-8 py-4 rounded-full shadow-xl shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
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
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 font-sora bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Find Perfect Accommodation</h2>
        <p className="text-gray-900 max-w-2xl mx-auto text-lg font-poppins leading-relaxed">
          Book hotels, resorts, and homestays in Kutch with our trusted partners. Best prices guaranteed!
        </p>
      </motion.div>

      {/* Booking Widget Placeholder - Booking.com */}
      <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border-2 border-purple-200/50">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-2 font-sora text-gray-900">Search Hotels</h3>
          <p className="text-gray-800 text-base font-poppins">Powered by Booking.com</p>
        </div>
        
        {/* Booking.com Widget Placeholder */}
        <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-purple-300 shadow-lg">
          <p className="text-center text-gray-900 mb-4 text-2xl">
            🏨 Booking.com Widget Integration
          </p>
          <p className="text-base text-gray-800 text-center mb-6 font-poppins">
            To integrate: Sign up for Booking.com Partner Program and replace this with their booking widget
          </p>
          <div className="mt-4 text-center">
            <a 
              href="https://www.booking.com/searchresults.html?ss=kutch&checkin=2024-12-01&checkout=2024-12-03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-poppins font-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/30"
            >
              <span>Search Hotels in Kutch</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hotel Recommendations */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Heritage Hotels in Bhuj", price: "₹3,500/night", rating: "4.5", image: "/images/bhuj/bhuj.jpg" },
          { name: "Beach Resorts in Mandvi", price: "₹5,000/night", rating: "4.7", image: "/images/mandvi/mandvi.jpg" },
          { name: "Desert Camps near White Rann", price: "₹4,200/night", rating: "4.3", image: "/images/dhordo-white-rann/dhordo.jpg" }
        ].map((hotel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50/50 to-white">
              <h3 className="font-semibold text-lg mb-3 font-sora text-gray-900">{hotel.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-bold text-lg font-poppins">{hotel.price}</span>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-poppins font-bold shadow-lg">★ {hotel.rating}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Flights Section Component
function FlightsSection() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 font-sora bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Book Your Flight to Kutch</h2>
        <p className="text-gray-900 max-w-2xl mx-auto text-lg font-poppins leading-relaxed">
          Find the best flight deals to Bhuj and other nearby airports. Compare prices from multiple airlines.
        </p>
      </motion.div>

      {/* Flight Search Widget */}
      <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 rounded-3xl p-8 shadow-xl border-2 border-blue-200/50">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-sora">Search Flights</h3>
          <p className="text-gray-800 text-base font-poppins">Powered by Skyscanner</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-blue-300 shadow-lg">
          <p className="text-center text-gray-900 mb-4 text-2xl">
            ✈️ Skyscanner Widget Integration
          </p>
          <p className="text-base text-gray-800 text-center mb-6 font-poppins">
            To integrate: Join Skyscanner Travel Partner Program and add their search widget here
          </p>
          <div className="mt-4 text-center">
            <a 
              href="https://www.skyscanner.com/flights-to/bhuj/cheapest-flights-to-bhuj.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-poppins font-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/30"
            >
              <span>Search Flights to Bhuj</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Flight Information */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">✈️</span>
            <h3 className="text-2xl font-semibold font-sora text-gray-900">How to Reach Kutch</h3>
          </div>
          <ul className="space-y-4 text-gray-900 font-poppins">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Bhuj Airport (BHJ):</strong> Main airport serving Kutch region</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>From Mumbai:</strong> Direct flights available (1.5 hours)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>From Delhi:</strong> Direct flights available (2 hours)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>From Ahmedabad:</strong> 1 hour flight or 6-hour drive</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-cyan-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💡</span>
            <h3 className="text-2xl font-semibold font-sora text-gray-900">Flight Booking Tips</h3>
          </div>
          <ul className="space-y-4 text-gray-900 font-poppins">
            <li className="flex items-start gap-2">
              <span className="text-cyan-600">•</span>
              <span>Book 2-3 weeks in advance for best prices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600">•</span>
              <span>Winter season (Nov-Feb) is peak time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600">•</span>
              <span>Compare prices across different booking sites</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600">•</span>
              <span>Consider nearby airports for better deals</span>
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
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 font-sora bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Discover Amazing Tours & Experiences</h2>
        <p className="text-gray-900 max-w-2xl mx-auto text-lg font-poppins leading-relaxed">
          Book guided tours, cultural experiences, and adventure activities in Kutch with local experts.
        </p>
      </motion.div>

      {/* Tours Widget */}
      <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border-2 border-purple-200/50">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-sora">Book Tours & Activities</h3>
          <p className="text-gray-800 text-base font-poppins">Powered by GetYourGuide</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-purple-300 shadow-lg">
          <p className="text-center text-gray-900 mb-4 text-2xl">
            🎯 GetYourGuide Widget Integration
          </p>
          <p className="text-base text-gray-800 text-center mb-6 font-poppins">
            To integrate: Join GetYourGuide Affiliate Program and embed their booking widget
          </p>
          <div className="mt-4 text-center">
            <a 
              href="https://www.getyourguide.com/s/?q=gujarat%20kutch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-poppins font-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/30"
            >
              <span>Explore Tours in Kutch</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Popular Tours */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "White Rann Full Moon Tour", duration: "2 Days", price: "₹8,500", rating: "4.8" },
          { name: "Kutch Heritage Village Tour", duration: "1 Day", price: "₹3,200", rating: "4.6" },
          { name: "Handicrafts Workshop Tour", duration: "Half Day", price: "₹1,800", rating: "4.7" },
          { name: "Mandvi Beach & Palace Tour", duration: "1 Day", price: "₹2,500", rating: "4.5" },
          { name: "Bhuj City Heritage Walk", duration: "4 Hours", price: "₹1,200", rating: "4.4" },
          { name: "Desert Safari & Camel Ride", duration: "Half Day", price: "₹2,800", rating: "4.9" }
        ].map((tour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300"
          >
            <h3 className="font-semibold text-lg mb-3 font-sora text-gray-900">{tour.name}</h3>
            <div className="space-y-2 text-base text-gray-900 mb-4 font-poppins">
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-semibold">{tour.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Price:</span>
                <span className="text-purple-600 font-bold">{tour.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Rating:</span>
                <span className="text-gray-900 font-semibold">★ {tour.rating}</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-full font-poppins font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Shopping Section Component
function ShoppingSection() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 font-sora bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Travel Gear & Local Handicrafts</h2>
        <p className="text-gray-900 max-w-2xl mx-auto text-lg font-poppins leading-relaxed">
          Shop for travel essentials, authentic Kutchi handicrafts, and local souvenirs.
        </p>
      </motion.div>

      {/* Shopping Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            category: "Travel Gear", 
            icon: "🎒", 
            description: "Backpacks, cameras, travel accessories",
            link: "https://amzn.to/3example1"
          },
          { 
            category: "Kutchi Handicrafts", 
            icon: "🎨", 
            description: "Authentic bandhani, ajrakh, and embroidery",
            link: "#local-handicrafts"
          },
          { 
            category: "Travel Clothing", 
            icon: "👕", 
            description: "Comfortable travel wear and traditional attire",
            link: "https://amzn.to/3example2"
          },
          { 
            category: "Souvenirs", 
            icon: "🛍️", 
            description: "Local artifacts and memorable gifts",
            link: "#souvenirs"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border-2 border-purple-100 hover:border-purple-300"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2 font-sora text-gray-900">{item.category}</h3>
            <p className="text-gray-800 text-base mb-4 font-poppins">{item.description}</p>
            <a 
              href={item.link}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-poppins font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30 text-base"
            >
              <span>Shop Now</span>
              <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Featured Products */}
      <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border-2 border-purple-200/50">
        <h3 className="text-3xl font-semibold text-center mb-8 font-sora bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Featured Travel Products</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              name: "Professional Travel Camera", 
              price: "₹45,000", 
              originalPrice: "₹52,000",
              affiliate: "Amazon",
              image: "/images/products/camera.jpg",
              rating: "4.5"
            },
            { 
              name: "Kutchi Bandhani Saree", 
              price: "₹3,500", 
              originalPrice: "₹4,200",
              affiliate: "Local Artisan",
              image: "/images/products/bandhani.jpg",
              rating: "4.8"
            },
            { 
              name: "Travel Backpack 50L", 
              price: "₹8,500", 
              originalPrice: "₹12,000",
              affiliate: "Amazon",
              image: "/images/products/backpack.jpg",
              rating: "4.6"
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-purple-100 hover:border-purple-300 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-indigo-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-4xl">
                  📸
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-2 font-sora text-gray-900 text-lg">{product.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl font-bold text-purple-600 font-poppins">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through font-poppins">{product.originalPrice}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-900 mb-4 font-poppins">
                  <span>via {product.affiliate}</span>
                  <span className="font-semibold">★ {product.rating}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-full font-poppins font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Affiliate Disclaimer */}
      <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 text-base text-gray-900 font-poppins">
        <p className="font-bold mb-2 text-purple-900">🔔 Affiliate Disclosure:</p>
        <p>This page contains affiliate links. We may earn a small commission from purchases made through these links at no additional cost to you. This helps us maintain and improve our travel guides.</p>
      </div>
    </div>
  );
}










