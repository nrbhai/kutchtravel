'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, Calendar, Sun, Umbrella, Thermometer, Wind, FileText,
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
    <main className="scroll-smooth selection:bg-cyan-900 selection:text-white relative text-gray-100">
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
        <div className="absolute inset-0 bg-black">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-sky-900/20 to-teal-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
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
              <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/10">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-950 to-cyan-950">
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
                <p className="text-gray-400 text-center mt-4 font-medium text-sm">
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
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-black/40 backdrop-blur-sm rounded-full mb-6 border border-white/10 shadow-lg">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold text-white">Your Complete Travel Companion</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-sora leading-tight holographic">
                Kutch Travel Guide
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-inter leading-relaxed font-medium">
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
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full shadow-lg border border-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Destinations
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative bg-black">
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-60 left-20 w-80 h-80 bg-gradient-to-br from-sky-900/20 to-teal-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-12">

          {/* Quick Overview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-12 shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-sky-900/30 to-blue-900/30 rounded-full blur-3xl opacity-40 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sora holographic">About Kutch</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg leading-relaxed mb-4 text-gray-300">
                      Kutch (also spelled Kachchh) is the largest district in India by area, located in the state of Gujarat. Known for its unique geography, the region transforms dramatically with seasons - becoming a vast salt marsh during monsoons and a stunning white desert in the dry season.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
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
              <div className="bg-gradient-to-br from-orange-950/40 to-amber-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-orange-900/40 hover:border-orange-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-900/50 to-amber-900/50 rounded-xl flex items-center justify-center border border-orange-700/30">
                    <Sun className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sora">Winter</h3>
                </div>
                <div className="text-sm font-bold text-orange-400 mb-3">November to February (BEST)</div>
                <p className="text-gray-300 mb-4 font-medium">
                  Perfect weather with temperatures between 12°C-25°C. Ideal for exploring the White Rann, attending Rann Utsav festival, and outdoor activities.
                </p>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Recommended</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-cyan-900/40 hover:border-cyan-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl flex items-center justify-center border border-cyan-700/30">
                    <Umbrella className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sora">Monsoon</h3>
                </div>
                <div className="text-sm font-bold text-cyan-400 mb-3">July to September</div>
                <p className="text-gray-300 mb-4 font-medium">
                  Sparse rainfall (250-500mm annually). The Rann floods and becomes a seasonal wetland. Best for birdwatching as migratory birds arrive.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <Info className="w-5 h-5" />
                  <span>For Nature Lovers</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-950/40 to-red-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-rose-900/40 hover:border-rose-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-900/50 to-red-900/50 rounded-xl flex items-center justify-center border border-rose-700/30">
                    <Thermometer className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sora">Summer</h3>
                </div>
                <div className="text-sm font-bold text-rose-400 mb-3">March to June</div>
                <p className="text-gray-300 mb-4 font-medium">
                  Very hot with temperatures reaching 45°C-48°C. Not recommended for tourism. The Rann becomes completely dry and harsh.
                </p>
                <div className="flex items-center gap-2 text-rose-400 font-semibold">
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
              <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-cyan-900/40 hover:border-cyan-700/60 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl flex items-center justify-center mb-4 border border-cyan-700/30">
                  <Plane className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sora">By Air</h3>
                <p className="text-gray-300 font-medium mb-3">
                  <strong>Bhuj Airport (BHJ)</strong> is well-connected to major cities including Mumbai, Ahmedabad, and Delhi.
                </p>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• Distance to city: 5 km</div>
                  <div>• Daily flights available</div>
                  <div>• Cab/taxi readily available</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-950/40 to-blue-950/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-sky-900/40 hover:border-sky-700/60 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-900/50 to-blue-900/50 rounded-xl flex items-center justify-center mb-4 border border-sky-700/30">
                  <Train className="w-7 h-7 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sora">By Train</h3>
                <p className="text-gray-300 font-medium mb-3">
                  <strong>Bhuj Railway Station</strong> is the main railhead, connected to Ahmedabad, Mumbai, and other major cities.
                </p>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• Express trains available</div>
                  <div>• 7-8 hrs from Ahmedabad</div>
                  <div>• Well-connected network</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-950/40 to-cyan-950/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-teal-900/40 hover:border-teal-700/60 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-900/50 to-cyan-900/50 rounded-xl flex items-center justify-center mb-4 border border-teal-700/30">
                  <Bus className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sora">By Bus</h3>
                <p className="text-gray-300 font-medium mb-3">
                  Gujarat State Road Transport buses (GSRTC) connect Bhuj to Ahmedabad, Rajkot, and other cities.
                </p>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• Regular services</div>
                  <div>• Overnight buses available</div>
                  <div>• Private operators too</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-950/40 to-sky-950/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-blue-900/40 hover:border-blue-700/60 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-900/50 to-sky-900/50 rounded-xl flex items-center justify-center mb-4 border border-blue-700/30">
                  <Car className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sora">By Road</h3>
                <p className="text-gray-300 font-medium mb-3">
                  Well-maintained highways connect Kutch. <strong>NH-8A and NH-941</strong> are the main routes.
                </p>
                <div className="text-sm text-gray-400 space-y-1">
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

            <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-cyan-900/40">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-sora flex items-center gap-2">
                    <Car className="w-6 h-6 text-cyan-400" />
                    Private Vehicles
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Rental Cars:</strong> Available in Bhuj, ideal for exploring remote areas. Cost: ₹2,500-4,000/day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Rental Bikes/2-Wheelers:</strong> Affordable option for solo travelers. Cost: ₹500-800/day. Great for flexibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Taxis:</strong> Most convenient option. Book full-day or point-to-point. Cost: ₹3,000-5,000/day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Auto-rickshaws:</strong> Available within cities for short distances. Always negotiate fare beforehand</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-sora flex items-center gap-2">
                    <Bus className="w-6 h-6 text-blue-400" />
                    Public Transport
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Local Buses:</strong> Connect major towns and villages. Infrequent but economical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Shared Jeeps:</strong> Popular among locals for inter-village travel. Authentic experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
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
              <div className="bg-gradient-to-br from-amber-950/40 to-orange-950/40 rounded-2xl p-8 shadow-lg border-2 border-amber-900/40 hover:border-amber-700/60 transition-all">
                <Hotel className="w-12 h-12 mb-4 text-amber-500" />
                <h3 className="text-2xl font-bold mb-3 font-sora text-white">Budget</h3>
                <div className="text-3xl font-bold mb-2 text-amber-500">₹800-2,000</div>
                <div className="text-sm text-gray-400 mb-4">per night</div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Homestays in Bhuj</li>
                  <li>• Guesthouses in Bhuj</li>
                  <li>• Basic hotels</li>
                  <li>• Government rest houses</li>
                  <li>• Dharamshalas</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 rounded-2xl p-8 shadow-lg border-2 border-cyan-900/40 hover:border-cyan-700/60 transition-all">
                <Hotel className="w-12 h-12 mb-4 text-cyan-400" />
                <h3 className="text-2xl font-bold mb-3 font-sora text-white">Mid-Range</h3>
                <div className="text-3xl font-bold mb-2 text-cyan-400">₹2,000-5,000</div>
                <div className="text-sm text-gray-400 mb-4">per night</div>
                <ul className="space-y-2 text-gray-300">
                  <li>• 3-star hotels in Bhuj</li>
                  <li>• Heritage properties</li>
                  <li>• Rann Utsav tents</li>
                  <li>• Comfortable amenities</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sky-950/40 to-teal-950/40 rounded-2xl p-8 shadow-lg border-2 border-sky-900/40 hover:border-sky-700/60 transition-all">
                <Hotel className="w-12 h-12 mb-4 text-sky-400" />
                <h3 className="text-2xl font-bold mb-3 font-sora text-white">Luxury</h3>
                <div className="text-3xl font-bold mb-2 text-sky-400">₹5,000-15,000+</div>
                <div className="text-sm text-gray-400 mb-4">per night</div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Premium resorts</li>
                  <li>• Luxury tent cities</li>
                  <li>• Heritage palaces</li>
                  <li>• All modern amenities</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-cyan-500/30">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">Pro Tips:</h4>
                  <ul className="text-gray-300 space-y-1 font-medium">
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
              <div className="bg-gradient-to-br from-orange-950/40 to-amber-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-orange-900/40 hover:border-orange-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white font-sora">Must-Try Dishes</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span><strong>Dabeli:</strong> Kutch's iconic street food - spiced potato filling in pav with peanuts and pomegranate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span><strong>Kutchi Khichdi:</strong> Traditional rice and lentil dish served with kadhi and papad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span><strong>Bajra Rotla:</strong> Pearl millet flatbread served with Ringan no Oro (eggplant curry)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span><strong>Gulab Pak:</strong> Unique sweet made from rose petals and milk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span><strong>Mawa Kachori:</strong> Sweet pastry filled with khoya and dry fruits</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-rose-950/40 to-pink-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-rose-900/40 hover:border-rose-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-rose-400" />
                  <h3 className="text-2xl font-bold text-white font-sora">Dining Tips</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Most Kutchi cuisine is <strong>vegetarian</strong> due to cultural and religious practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Try local <strong>dhabas</strong> on highways for authentic flavors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Gujarati thali</strong> restaurants offer unlimited traditional meals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>During Rann Utsav, food stalls serve variety of local dishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
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
              <div className="bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-green-900/40 hover:border-green-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Wallet className="w-10 h-10 text-green-400" />
                  <h3 className="text-2xl font-bold text-white font-sora">Budget Trip</h3>
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">₹3,000-5,000</div>
                <div className="text-sm text-gray-400 mb-6">per person per day</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Budget accommodation</li>
                  <li>• Local transport</li>
                  <li>• Street food & dhabas</li>
                  <li>• Free attractions</li>
                  <li>• Self-guided tours</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-blue-900/40 hover:border-blue-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-10 h-10 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white font-sora">Mid-Range Trip</h3>
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">₹6,000-10,000</div>
                <div className="text-sm text-gray-400 mb-6">per person per day</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Comfortable hotels</li>
                  <li>• Private cab rentals</li>
                  <li>• Restaurant dining</li>
                  <li>• Paid attractions</li>
                  <li>• Guided tours</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sky-950/40 to-teal-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-sky-900/40 hover:border-sky-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Banknote className="w-10 h-10 text-sky-400" />
                  <h3 className="text-2xl font-bold text-white font-sora">Luxury Trip</h3>
                </div>
                <div className="text-4xl font-bold text-sky-400 mb-2">₹15,000+</div>
                <div className="text-sm text-gray-400 mb-6">per person per day</div>
                <ul className="space-y-2 text-gray-300 text-sm">
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
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-gray-800/40 hover:border-gray-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white font-sora">Health & Safety</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Carry <strong>sunscreen, sunglasses, and hat</strong> - desert sun is intense</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Stay <strong>hydrated</strong> - carry water bottles at all times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Keep <strong>basic medicines</strong> - limited medical facilities in remote areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Border area:</strong> Carry valid ID proofs always</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Emergency numbers: Police (100), Ambulance (108)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-gray-800/40 hover:border-gray-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white font-sora">What to Pack</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Clothing:</strong> Light cotton for day, warm layers for night (winter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Footwear:</strong> Comfortable walking shoes, sandals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Camera:</strong> DSLR/phone with extra batteries and memory cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Power bank:</strong> Limited charging points in remote areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Cash:</strong> ATMs scarce in villages, carry sufficient cash</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-gray-800/40 hover:border-gray-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white font-sora">Cultural Etiquette</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Dress modestly</strong> when visiting villages and religious sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Ask permission</strong> before photographing people, especially women</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Remove shoes</strong> before entering temples and homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Respect artisans:</strong> Don't bargain too aggressively for handicrafts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Learn basic <strong>Gujarati/Kutchi phrases</strong> - locals appreciate it</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-gray-800/40 hover:border-gray-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white font-sora">Connectivity</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Mobile network:</strong> Good in cities, patchy in remote areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
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
              <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 rounded-2xl p-8 shadow-lg border-2 border-cyan-900/40 hover:border-cyan-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-10 h-10 text-cyan-400" />
                  <h3 className="text-3xl font-bold font-sora text-white">3-4 Days</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-lg mb-1 text-cyan-400">Day 1: Bhuj City Exploration</div>
                    <div className="text-gray-300 text-sm">Explore Prag Mahal & Aina Mahal palaces, visit Swaminarayan Temple, Museum, leisurely walk around Hamirsar Talav, discover Smritivan Earthquake Memorial, and shop at Bhuj local bazaar</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-cyan-400">Day 2: Road to Heaven & White Rann</div>
                    <div className="text-gray-300 text-sm">Early morning visit to Road to Heaven, mid-day exploration of Kalo Dungar (Black Hill), and evening to night at Dhordo White Rann</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-cyan-400">Day 3: Mandvi Beach</div>
                    <div className="text-gray-300 text-sm">Relax at pristine Mandvi Beach and explore the magnificent nearby Vijay Vilas Palace</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-cyan-400">Day 4: Craft Villages & Gardens</div>
                    <div className="text-gray-300 text-sm">Witness traditional weaving at Bhujodi village, experience authentic Ajrakh block printing at Ajrakhpur, and relax at Hiralaxmi Memorial Craft Park</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-950/40 to-teal-950/40 rounded-2xl p-8 shadow-lg border-2 border-sky-900/40 hover:border-sky-700/60 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-10 h-10 text-sky-400" />
                  <h3 className="text-3xl font-bold font-sora text-white">5 Days</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-400">Day 1: Arrival & Bhuj</div>
                    <div className="text-gray-300 text-sm">Arrive in Bhuj, check-in, visit Aina Mahal, Prag Mahal, and watch sunset at Chhatardi. Dinner at a local Gujarati thali place.</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-400">Day 2: The Great Rann</div>
                    <div className="text-gray-300 text-sm">Visit Nirona village (Rogan Art), then head to Dhordo. Visit Kalo Dungar for panoramic views. Experience the White Rann at sunset and cultural program at night.</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-400">Day 3: Western Frontiers</div>
                    <div className="text-gray-300 text-sm">Drive to Mata na Madh (Ashapura Temple), Lakhpat Fort (Ghost Town), Narayan Sarovar (Holy Lake), and Koteshwar Temple. Return to Bhuj.</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-400">Day 4: Coastal Charm</div>
                    <div className="text-gray-300 text-sm">Head to Mandvi (1 hour drive). Visit Vijay Vilas Palace, the hidden Ship Building Yard, and enjoy water sports or relaxation at Mandvi Beach.</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-sky-400">Day 5: Heritage & Dholavira</div>
                    <div className="text-gray-300 text-sm">Early start for Dholavira (UNESCO Site) via Road to Heaven. Explore the Harappan ruins and Wood Fossil Park before heading back for departure.</div>
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
