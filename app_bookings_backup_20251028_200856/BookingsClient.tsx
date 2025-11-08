'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import BackButton from './BackButton';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-50 selection:bg-gray-300 selection:text-gray-900">
      <Navigation />
      
      {/* Header Section */}
      <div className="relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-1 bg-gray-500/30"></div>
          <div className="blob blob-2 bg-gray-500/30"></div>
          <div className="blob blob-3 bg-gray-500/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <BackButton />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sora holographic">
              Book Your Kutch Adventure
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium font-poppins">
              Hotels, Flights, Tours & Shopping - Everything for your perfect trip
            </p>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-px w-56 bg-gradient-to-r from-transparent via-gray-400/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Categories Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
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
                    ? 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-gray-900 shadow-xl transform scale-105'
                    : 'bg-white/10 backdrop-blur-xl text-gray-600 hover:bg-white/20 border border-gray-200 hover:shadow-xl hover:scale-105'
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
        className="relative overflow-hidden mt-16"
      >
        {/* Background with ocean-like gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-gray-300 to-gray-100">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 py-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6" style={{ color: '#E5E5E5', textShadow: '0 -2px 1px rgba(255,255,255,0.4), 0 2px 1px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.6)' }}>
            Need Help Planning?
          </h2>
          <p className="text-lg md:text-xl font-lora font-semibold text-gray-600 dark:text-gray-300 drop-shadow-[0_6px_14px_rgba(0,0,0,0.12)] tracking-wide mb-8">
            Our travel experts are here to help you plan the perfect Kutch adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/destinations"
              className="inline-block bg-gradient-to-r from-white/90 via-gray-50/90 to-gray-50/90 text-gray-900 dark:from-white/85 dark:via-gray-50/85 dark:to-gray-50/85 dark:text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur transform hover:scale-105"
            >
              Explore Destinations
            </Link>
            <Link 
              href="mailto:info@kutchtravel.com"
              className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
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
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#E5E5E5', textShadow: '0 -1px 0 rgba(255,255,255,0.3), 0 1px 0 rgba(0,0,0,0.7), 0 0 3px rgba(0,0,0,0.2), 0 3px 8px rgba(0,0,0,0.4)' }}>Find Perfect Accommodation</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base">
          Book hotels, resorts, and homestays in Kutch with our trusted partners. Best prices guaranteed!
        </p>
      </motion.div>

      {/* Booking Widget Placeholder - Booking.com */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-400/50">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#E5E5E5', textShadow: '0 -1px 0 rgba(255,255,255,0.3), 0 1px 0 rgba(0,0,0,0.7), 0 0 3px rgba(0,0,0,0.2), 0 3px 8px rgba(0,0,0,0.4)' }}>Search Hotels</h3>
          <p className="text-gray-700 text-sm">Powered by Booking.com</p>
        </div>
        
        {/* Booking.com Widget Placeholder */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-50 rounded-lg p-8 border-2 border-dashed border-gray-400">
          <p className="text-center text-gray-700 mb-4">
            🏨 Booking.com Widget Integration
          </p>
          <p className="text-sm text-gray-600 text-center">
            To integrate: Sign up for Booking.com Partner Program and replace this with their booking widget
          </p>
          <div className="mt-4 text-center">
            <a 
              href="https://www.booking.com/searchresults.html?ss=kutch&checkin=2024-12-01&checkout=2024-12-03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Search Hotels in Kutch →
            </a>
          </div>
        </div>
      </div>

      {/* Hotel Recommendations */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{hotel.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">{hotel.price}</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">★ {hotel.rating}</span>
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
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#E5E5E5', textShadow: '1px 1px 0px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.3)' }}>Book Your Flight to Kutch</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Find the best flight deals to Bhuj and other nearby airports. Compare prices from multiple airlines.
        </p>
      </motion.div>

      {/* Flight Search Widget */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-400/50">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Search Flights</h3>
          <p className="text-gray-700">Powered by Skyscanner</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-50 rounded-lg p-8 border-2 border-dashed border-gray-200">
          <p className="text-center text-gray-700 mb-4">
            ✈️ Skyscanner Widget Integration
          </p>
          <p className="text-sm text-gray-600 text-center">
            To integrate: Join Skyscanner Travel Partner Program and add their search widget here
          </p>
          <div className="mt-4 text-center">
            <a 
              href="https://www.skyscanner.com/flights-to/bhuj/cheapest-flights-to-bhuj.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Search Flights to Bhuj →
            </a>
          </div>
        </div>
      </div>

      {/* Flight Information */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">✈️ How to Reach Kutch</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Bhuj Airport (BHJ):</strong> Main airport serving Kutch region</li>
            <li><strong>From Mumbai:</strong> Direct flights available (1.5 hours)</li>
            <li><strong>From Delhi:</strong> Direct flights available (2 hours)</li>
            <li><strong>From Ahmedabad:</strong> 1 hour flight or 6-hour drive</li>
          </ul>
        </div>
        
        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">💡 Flight Booking Tips</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Book 2-3 weeks in advance for best prices</li>
            <li>• Winter season (Nov-Feb) is peak time</li>
            <li>• Compare prices across different booking sites</li>
            <li>• Consider nearby airports for better deals</li>
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
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#E5E5E5', textShadow: '1px 1px 0px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.3)' }}>Discover Amazing Tours & Experiences</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Book guided tours, cultural experiences, and adventure activities in Kutch with local experts.
        </p>
      </motion.div>

      {/* Tours Widget */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-400/50">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Book Tours & Activities</h3>
          <p className="text-gray-700">Powered by GetYourGuide</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-50 rounded-lg p-8 border-2 border-dashed border-gray-200">
          <p className="text-center text-gray-700 mb-4">
            🎯 GetYourGuide Widget Integration
          </p>
          <p className="text-sm text-gray-600 text-center">
            To integrate: Join GetYourGuide Affiliate Program and embed their booking widget
          </p>
          <div className="mt-4 text-center">
            <a 
              href="https://www.getyourguide.com/s/?q=gujarat%20kutch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Explore Tours in Kutch →
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
            className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="font-semibold text-lg mb-3">{tour.name}</h3>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <div className="flex justify-between">
                <span>Duration:</span>
                <span>{tour.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Price:</span>
                <span className="text-gray-600 font-semibold">{tour.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Rating:</span>
                <span className="text-gray-600">★ {tour.rating}</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
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
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#E5E5E5', textShadow: '1px 1px 0px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.3)' }}>Travel Gear & Local Handicrafts</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
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
            className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.category}</h3>
            <p className="text-gray-700 text-sm mb-4">{item.description}</p>
            <a 
              href={item.link}
              className="inline-block bg-gradient-to-r from-gray-600 to-gray-600 text-gray-900 px-4 py-2 rounded-lg hover:from-gray-700 hover:to-gray-700 transition-colors text-sm"
            >
              Shop Now →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Featured Products */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-400/50">
        <h3 className="text-2xl font-semibold text-center mb-8">Featured Travel Products</h3>
        
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
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 bg-white/10 backdrop-blur-xl">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  📸 Product Image
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-2">{product.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-gray-600">{product.price}</span>
                  <span className="text-sm text-gray-600 line-through">{product.originalPrice}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
                  <span>via {product.affiliate}</span>
                  <span>★ {product.rating}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded hover:bg-gray-600 transition-colors">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Affiliate Disclaimer */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
        <p className="font-semibold mb-1">🔔 Affiliate Disclosure:</p>
        <p>This page contains affiliate links. We may earn a small commission from purchases made through these links at no additional cost to you. This helps us maintain and improve our travel guides.</p>
      </div>
    </div>
  );
}










