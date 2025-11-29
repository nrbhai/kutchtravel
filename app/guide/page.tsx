'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, Calendar, Sun, Umbrella, Thermometer, Wind, 
  Plane, Train, Bus, Car, Hotel, Utensils, Camera, 
  Shield, Heart, AlertCircle, CheckCircle, Info,
  Clock, Phone, Compass, BookOpen, Users, Sparkles,
  Wallet, CreditCard, Banknote, Mountain, Waves
} from 'lucide-react';
import Navigation from '../components/Navigation';
import BookingWidget from '../components/BookingWidget';
import TripWidget from '../components/TripWidget';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function TravelGuidePage() {
  // Destination coordinates (approximate positions on the map)
  const destinations = [
    { name: 'Mandvi', top: '65%', left: '75%', delay: 0 },
    { name: 'Bhuj', top: '55%', left: '50%', delay: 0.1 },
    { name: 'Dhordo', top: '30%', left: '40%', delay: 0.2 },
    { name: 'Kalo Dungar', top: '25%', left: '45%', delay: 0.3 },
    { name: 'Anjar', top: '70%', left: '45%', delay: 0.4 },
    { name: 'Gandhidham', top: '75%', left: '55%', delay: 0.5 },
    { name: 'Mundra', top: '80%', left: '65%', delay: 0.6 },
    { name: 'Lakhpat', top: '15%', left: '30%', delay: 0.7 },
    { name: 'Mata Na Madh', top: '35%', left: '25%', delay: 0.8 },
    { name: 'Kadia Dhrow', top: '45%', left: '35%', delay: 0.9 },
    { name: 'Narayan Sarovar', top: '28%', left: '15%', delay: 1.0 },
    { name: 'Road to Heaven', top: '40%', left: '55%', delay: 1.1 },
  ];

  return (
    <main className="scroll-smooth selection:bg-cyan-200 selection:text-gray-900 relative text-gray-900">
      {/* Twinkling Star Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes twinkle {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.3; 
            transform: scale(1.3);
          }
        }
        .star-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}} />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        {/* Enhanced Background - Matching Main Page */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-sky-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-20 max-w-[1600px] mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Map with Twinkling Stars */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-cyan-200">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                  {/* Using embedded Google Maps as static iframe with pointer-events disabled */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947193.0711048405!2d69.5!3d23.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950c4976e1d8b25%3A0x76e2f6be5b8c8a86!2sKutch%20District%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1735228800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: 'none' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kutch District Map"
                  />
                </div>
                <p className="text-gray-700 text-center mt-4 font-medium text-sm">
                  Kutch District, Gujarat - Gateway to the White Desert
                </p>
              </div>
            </motion.div>

            {/* Right Side - Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-gray-200 shadow-lg">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-semibold text-gray-900">Your Complete Travel Companion</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-sora leading-tight holographic">
                Kutch Travel Guide
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-800 mb-8 font-inter leading-relaxed font-medium">
                Everything you need to know for an unforgettable journey to the land of white deserts
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#itineraries"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  View Itineraries
                </a>
                <a
                  href="/destinations"
                  className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full shadow-lg border border-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Destinations
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-60 left-20 w-80 h-80 bg-gradient-to-br from-sky-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-12">
          
          {/* Quick Overview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl relative overflow-hidden border border-gray-200">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full blur-3xl opacity-40 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-200 to-teal-300 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora holographic">About Kutch</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg leading-relaxed mb-4 text-gray-800">
                      Kutch (also spelled Kachchh) is the largest district in India by area, located in the state of Gujarat. Known for its unique geography, the region transforms dramatically with seasons - becoming a vast salt marsh during monsoons and a stunning white desert in the dry season.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800">
                      The district covers approximately 45,674 km² and is bordered by the Arabian Sea, Pakistan, and other Gujarat districts. The name "Kutch" is derived from the Sanskrit word "Kaccha" meaning something that appears intermittently.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-4 text-white shadow-lg">
                      <Users className="w-8 h-8 mb-2" />
                      <div className="text-sm opacity-90">Population</div>
                      <div className="text-2xl font-bold">2.1M+</div>
                    </div>
                    <div className="bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl p-4 text-white shadow-lg">
                      <MapPin className="w-8 h-8 mb-2" />
                      <div className="text-sm opacity-90">Area</div>
                      <div className="text-2xl font-bold">45,674 km²</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-sky-600 rounded-xl p-4 text-white shadow-lg">
                      <Compass className="w-8 h-8 mb-2" />
                      <div className="text-sm opacity-90">Capital</div>
                      <div className="text-xl font-bold">Bhuj</div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-4 text-white shadow-lg">
                      <Sparkles className="w-8 h-8 mb-2" />
                      <div className="text-sm opacity-90">Languages</div>
                      <div className="text-lg font-bold">Kutchi, Gujarati</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Best Time to Visit */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-8 font-sora text-center holographic">
              Best Time to Visit
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:border-orange-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center border border-orange-200">
                    <Sun className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Winter</h3>
                </div>
                <div className="text-sm font-bold text-orange-600 mb-3">November to February (BEST)</div>
                <p className="text-gray-700 mb-4 font-medium">
                  Perfect weather with temperatures between 12°C-25°C. Ideal for exploring the White Rann, attending Rann Utsav festival, and outdoor activities.
                </p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Recommended</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-cyan-200 hover:border-cyan-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center border border-cyan-200">
                    <Umbrella className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Monsoon</h3>
                </div>
                <div className="text-sm font-bold text-cyan-600 mb-3">July to September</div>
                <p className="text-gray-700 mb-4 font-medium">
                  Sparse rainfall (250-500mm annually). The Rann floods and becomes a seasonal wetland. Best for birdwatching as migratory birds arrive.
                </p>
                <div className="flex items-center gap-2 text-cyan-600 font-semibold">
                  <Info className="w-5 h-5" />
                  <span>For Nature Lovers</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-red-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-rose-200 hover:border-rose-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-red-100 rounded-xl flex items-center justify-center border border-rose-200">
                    <Thermometer className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Summer</h3>
                </div>
                <div className="text-sm font-bold text-rose-600 mb-3">March to June</div>
                <p className="text-gray-700 mb-4 font-medium">
                  Very hot with temperatures reaching 45°C-48°C. Not recommended for tourism. The Rann becomes completely dry and harsh.
                </p>
                <div className="flex items-center gap-2 text-rose-600 font-semibold">
                  <AlertCircle className="w-5 h-5" />
                  <span>Avoid</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How to Reach */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-8 font-sora text-center holographic">
              How to Reach Kutch
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-cyan-200 hover:border-cyan-300 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 border border-cyan-200">
                  <Plane className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-sora">By Air</h3>
                <p className="text-gray-700 font-medium mb-3">
                  <strong>Bhuj Airport (BHJ)</strong> is well-connected to major cities including Mumbai, Ahmedabad, and Delhi.
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Distance to city: 5 km</div>
                  <div>• Daily flights available</div>
                  <div>• Cab/taxi readily available</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-blue-50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-sky-200 hover:border-sky-300 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 border border-sky-200">
                  <Train className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-sora">By Train</h3>
                <p className="text-gray-700 font-medium mb-3">
                  <strong>Bhuj Railway Station</strong> is the main railhead, connected to Ahmedabad, Mumbai, and other major cities.
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Express trains available</div>
                  <div>• 7-8 hrs from Ahmedabad</div>
                  <div>• Well-connected network</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-teal-200 hover:border-teal-300 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 border border-teal-200">
                  <Bus className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-sora">By Bus</h3>
                <p className="text-gray-700 font-medium mb-3">
                  Gujarat State Road Transport buses (GSRTC) connect Bhuj to Ahmedabad, Rajkot, and other cities.
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Regular services</div>
                  <div>• Overnight buses available</div>
                  <div>• Private operators too</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-sky-50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-blue-200 hover:border-blue-300 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl flex items-center justify-center mb-4 border border-blue-200">
                  <Car className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-sora">By Road</h3>
                <p className="text-gray-700 font-medium mb-3">
                  Well-maintained highways connect Kutch. <strong>NH-8A and NH-941</strong> are the main routes.
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• 330 km from Ahmedabad</div>
                  <div>• 6-7 hours drive</div>
                  <div>• Scenic highway route</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trip.com Affiliate Widget */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <TripWidget defaultTab="flights" />
          </motion.div>

          {/* Local Transportation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-8 font-sora text-center holographic">
              Getting Around Kutch
            </h2>

            <div className="bg-gradient-to-br from-white to-cyan-50/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-cyan-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sora flex items-center gap-2">
                    <Car className="w-6 h-6 text-cyan-600" />
                    Private Vehicles
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Rental Cars:</strong> Available in Bhuj, ideal for exploring remote areas. Cost: ₹2,500-4,000/day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Rental Bikes/2-Wheelers:</strong> Affordable option for solo travelers. Cost: ₹500-800/day. Great for flexibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Taxis:</strong> Most convenient option. Book full-day or point-to-point. Cost: ₹3,000-5,000/day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Auto-rickshaws:</strong> Available within cities for short distances. Always negotiate fare beforehand</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sora flex items-center gap-2">
                    <Bus className="w-6 h-6 text-blue-600" />
                    Public Transport
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Local Buses:</strong> Connect major towns and villages. Infrequent but economical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Shared Jeeps:</strong> Popular among locals for inter-village travel. Authentic experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Note:</strong> Public transport is limited in remote areas. Private vehicle recommended</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Accommodation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-8 font-sora text-center holographic">
              Where to Stay
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-amber-200 hover:border-amber-300 transition-all">
                <Hotel className="w-12 h-12 mb-4 text-amber-600" />
                <h3 className="text-2xl font-bold mb-3 font-sora text-gray-900">Budget</h3>
                <div className="text-3xl font-bold mb-2 text-amber-600">₹800-2,000</div>
                <div className="text-sm text-gray-600 mb-4">per night</div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Homestays in Bhuj</li>
                  <li>• Guesthouses in Bhuj</li>
                  <li>• Basic hotels</li>
                  <li>• Government rest houses</li>
                  <li>• Dharamshalas</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-cyan-200 hover:border-cyan-300 transition-all">
                <Hotel className="w-12 h-12 mb-4 text-cyan-600" />
                <h3 className="text-2xl font-bold mb-3 font-sora text-gray-900">Mid-Range</h3>
                <div className="text-3xl font-bold mb-2 text-cyan-600">₹2,000-5,000</div>
                <div className="text-sm text-gray-600 mb-4">per night</div>
                <ul className="space-y-2 text-gray-700">
                  <li>• 3-star hotels in Bhuj</li>
                  <li>• Heritage properties</li>
                  <li>• Rann Utsav tents</li>
                  <li>• Comfortable amenities</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl p-8 shadow-lg border-2 border-sky-200 hover:border-sky-300 transition-all">
                <Hotel className="w-12 h-12 mb-4 text-sky-600" />
                <h3 className="text-2xl font-bold mb-3 font-sora text-gray-900">Luxury</h3>
                <div className="text-3xl font-bold mb-2 text-sky-600">₹5,000-15,000+</div>
                <div className="text-sm text-gray-600 mb-4">per night</div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Premium resorts</li>
                  <li>• Luxury tent cities</li>
                  <li>• Heritage palaces</li>
                  <li>• All modern amenities</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-cyan-200">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Pro Tips:</h4>
                  <ul className="text-gray-700 space-y-1 font-medium">
                    <li>• Book accommodation well in advance during Rann Utsav (November-February)</li>
                    <li>• Dhordo tent city offers unique experience near the White Rann</li>
                    <li>• Bhuj has maximum accommodation options with good connectivity</li>
                    <li>• Many villages offer authentic homestay experiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking.com Affiliate Widget */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <BookingWidget />
          </motion.div>

          {/* Food & Cuisine */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-8 font-sora text-center holographic">
              Food & Cuisine
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:border-orange-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Must-Try Dishes</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Dabeli:</strong> Kutch's iconic street food - spiced potato filling in pav with peanuts and pomegranate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Kutchi Khichdi:</strong> Traditional rice and lentil dish served with kadhi and papad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Bajra Rotla:</strong> Pearl millet flatbread served with Ringan no Oro (eggplant curry)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Gulab Pak:</strong> Unique sweet made from rose petals and milk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Mawa Kachori:</strong> Sweet pastry filled with khoya and dry fruits</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-pink-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-rose-200 hover:border-rose-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-rose-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Dining Tips</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Most Kutchi cuisine is <strong>vegetarian</strong> due to cultural and religious practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Try local <strong>dhabas</strong> on highways for authentic flavors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Gujarati thali</strong> restaurants offer unlimited traditional meals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>During Rann Utsav, food stalls serve variety of local dishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Carry bottled water; tap water may not suit all stomachs</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Budget Planning */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-8 font-sora text-center holographic">
              Budget Planning
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-green-200 hover:border-green-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Wallet className="w-10 h-10 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Budget Trip</h3>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">₹3,000-5,000</div>
                <div className="text-sm text-gray-600 mb-6">per person per day</div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Budget accommodation</li>
                  <li>• Local transport</li>
                  <li>• Street food & dhabas</li>
                  <li>• Free attractions</li>
                  <li>• Self-guided tours</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:border-blue-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-10 h-10 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Mid-Range Trip</h3>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">₹6,000-10,000</div>
                <div className="text-sm text-gray-600 mb-6">per person per day</div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Comfortable hotels</li>
                  <li>• Private cab rentals</li>
                  <li>• Restaurant dining</li>
                  <li>• Paid attractions</li>
                  <li>• Guided tours</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-teal-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-sky-200 hover:border-sky-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Banknote className="w-10 h-10 text-sky-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Luxury Trip</h3>
                </div>
                <div className="text-4xl font-bold text-sky-600 mb-2">₹15,000+</div>
                <div className="text-sm text-gray-600 mb-6">per person per day</div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Luxury resorts</li>
                  <li>• Private drivers</li>
                  <li>• Fine dining</li>
                  <li>• Premium experiences</li>
                  <li>• Personalized services</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Important Tips */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-8 font-sora text-center holographic">
              Important Travel Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:border-orange-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Health & Safety</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Carry <strong>sunscreen, sunglasses, and hat</strong> - desert sun is intense</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Stay <strong>hydrated</strong> - carry water bottles at all times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Keep <strong>basic medicines</strong> - limited medical facilities in remote areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Border area:</strong> Carry valid ID proofs always</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Emergency numbers: Police (100), Ambulance (108)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-sky-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:border-blue-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">What to Pack</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Clothing:</strong> Light cotton for day, warm layers for night (winter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Footwear:</strong> Comfortable walking shoes, sandals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Camera:</strong> DSLR/phone with extra batteries and memory cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Power bank:</strong> Limited charging points in remote areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Cash:</strong> ATMs scarce in villages, carry sufficient cash</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-emerald-200 hover:border-emerald-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Cultural Etiquette</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Dress modestly</strong> when visiting villages and religious sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Ask permission</strong> before photographing people, especially women</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Remove shoes</strong> before entering temples and homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Respect artisans:</strong> Don't bargain too aggressively for handicrafts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Learn basic <strong>Gujarati/Kutchi phrases</strong> - locals appreciate it</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-cyan-200 hover:border-cyan-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Connectivity</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Mobile network:</strong> Good in cities, patchy in remote areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Internet:</strong> Available in hotels/resorts, limited in villages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Download offline maps</strong> before visiting remote areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span>Inform family about <strong>limited connectivity</strong> in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span>Tourist information: +91-2832-220002 (Bhuj office)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Suggested Itineraries */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-8 font-sora text-center holographic">
              Suggested Itineraries
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-cyan-200 hover:border-cyan-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-10 h-10 text-cyan-600" />
                  <h3 className="text-3xl font-bold font-sora text-gray-900">3-4 Days</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-lg mb-1 text-cyan-700">Day 1: Bhuj City Exploration</div>
                    <div className="text-gray-700 text-sm">Explore Prag Mahal & Aina Mahal palaces, visit Swaminarayan Temple, Museum, leisurely walk around Hamirsar Talav, discover Smritivan Earthquake Memorial, and shop at Bhuj local bazaar</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-cyan-700">Day 2: Road to Heaven & White Rann</div>
                    <div className="text-gray-700 text-sm">Early morning visit to Road to Heaven, mid-day exploration of Kalo Dungar (Black Hill), and evening to night at Dhordo White Rann</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-cyan-700">Day 3: Mandvi Beach</div>
                    <div className="text-gray-700 text-sm">Relax at pristine Mandvi Beach and explore the magnificent nearby Vijay Vilas Palace</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-cyan-700">Day 4: Craft Villages & Gardens</div>
                    <div className="text-gray-700 text-sm">Witness traditional weaving at Bhujodi village, experience authentic Ajrakh block printing at Ajrakhpur, and relax at Hiralaxmi Memorial Craft Park</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl p-8 shadow-lg border-2 border-sky-200 hover:border-sky-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-10 h-10 text-sky-600" />
                  <h3 className="text-3xl font-bold font-sora text-gray-900">5 Days</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-700">Day 1: Bhuj City Exploration</div>
                    <div className="text-gray-700 text-sm">Explore Prag Mahal & Aina Mahal palaces, visit Swaminarayan Temple, Museum, leisurely walk around Hamirsar Talav, discover Smritivan Earthquake Memorial, and shop at Bhuj local bazaar</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-700">Day 2: Road to Heaven & White Rann</div>
                    <div className="text-gray-700 text-sm">Early morning visit to Road to Heaven, mid-day exploration of Kalo Dungar (Black Hill), and evening to night at Dhordo White Rann</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-700">Day 3: Mandvi Beach</div>
                    <div className="text-gray-700 text-sm">Relax at pristine Mandvi Beach and explore the magnificent nearby Vijay Vilas Palace</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-700">Day 4: Western Kutch Circuit</div>
                    <div className="text-gray-700 text-sm">Journey through Western Kutch - visit the sacred Mata na Madh temple, explore the serene Narayan Sarovar lake, and discover the ancient Koteshwar Temple by the sea</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-700">Day 5: Craft Villages & Gardens</div>
                    <div className="text-gray-700 text-sm">Discover traditional weaving at Bhujodi, experience Ajrakh block printing at Ajrakhpur, visit Hiralaxmi Memorial Craft Park</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-600 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full blur-3xl opacity-50 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-300 to-teal-400 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">Need Help Planning Your Trip?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto font-inter">
                  Contact us for personalized itineraries, bookings, and local insights to make your Kutch journey unforgettable
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+919825034580"
                    className="px-8 py-4 bg-white text-cyan-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Call Us Now
                  </a>
                  <Link
                    href="/destinations"
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-bold hover:bg-white/30 transition-colors flex items-center gap-2"
                  >
                    <MapPin size={20} />
                    Explore Destinations
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-8"
          >
            <p className="text-gray-800 text-sm font-medium">
              Designed with ❤️ for travelers seeking authentic Kutch
            </p>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
