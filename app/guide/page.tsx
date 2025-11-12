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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function TravelGuidePage() {
  return (
    <main className="scroll-smooth selection:bg-cyan-200 selection:text-gray-900 relative text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        {/* Enhanced Background - Matching Main Page */}
        <div className="absolute inset-0 bg-white/90">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-gray-200 shadow-lg">
              <BookOpen className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-semibold text-gray-900">Your Complete Travel Companion</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-sora leading-tight holographic">
              Kutch Travel Guide
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 mb-8 font-poppins leading-relaxed font-medium">
              Everything you need to know for an unforgettable journey to the land of white deserts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative bg-white/90">
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-60 left-20 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          
          {/* Quick Overview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl relative overflow-hidden border border-gray-200">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-40 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
              
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
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 text-white shadow-lg">
                      <MapPin className="w-8 h-8 mb-2" />
                      <div className="text-sm opacity-90">Area</div>
                      <div className="text-2xl font-bold">45,674 km²</div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
                      <Compass className="w-8 h-8 mb-2" />
                      <div className="text-sm opacity-90">Capital</div>
                      <div className="text-xl font-bold">Bhuj</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-4 text-white shadow-lg">
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
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                    <Sun className="w-6 h-6 text-white" />
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Umbrella className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Monsoon</h3>
                </div>
                <div className="text-sm font-bold text-blue-600 mb-3">July to September</div>
                <p className="text-gray-700 mb-4 font-medium">
                  Sparse rainfall (250-500mm annually). The Rann floods and becomes a seasonal wetland. Best for birdwatching as migratory birds arrive.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <Info className="w-5 h-5" />
                  <span>For Nature Lovers</span>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Thermometer className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Summer</h3>
                </div>
                <div className="text-sm font-bold text-red-600 mb-3">March to June</div>
                <p className="text-gray-700 mb-4 font-medium">
                  Very hot with temperatures reaching 45°C-48°C. Not recommended for tourism. The Rann becomes completely dry and harsh.
                </p>
                <div className="flex items-center gap-2 text-red-600 font-semibold">
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
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="w-7 h-7 text-white" />
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Train className="w-7 h-7 text-white" />
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Bus className="w-7 h-7 text-white" />
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Car className="w-7 h-7 text-white" />
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

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
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
                    <Bus className="w-6 h-6 text-indigo-600" />
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
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
                <Hotel className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3 font-sora">Budget</h3>
                <div className="text-3xl font-bold mb-2">₹800-2,000</div>
                <div className="text-sm opacity-90 mb-4">per night</div>
                <ul className="space-y-2 text-white/90">
                  <li>• Guesthouses in Bhuj</li>
                  <li>• Basic hotels</li>
                  <li>• Government rest houses</li>
                  <li>• Dharamshalas</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
                <Hotel className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3 font-sora">Mid-Range</h3>
                <div className="text-3xl font-bold mb-2">₹2,000-5,000</div>
                <div className="text-sm opacity-90 mb-4">per night</div>
                <ul className="space-y-2 text-white/90">
                  <li>• 3-star hotels in Bhuj</li>
                  <li>• Heritage properties</li>
                  <li>• Rann Utsav tents</li>
                  <li>• Comfortable amenities</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
                <Hotel className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3 font-sora">Luxury</h3>
                <div className="text-3xl font-bold mb-2">₹5,000-15,000+</div>
                <div className="text-sm opacity-90 mb-4">per night</div>
                <ul className="space-y-2 text-white/90">
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
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
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
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200">
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-200">
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Banknote className="w-10 h-10 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Luxury Trip</h3>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">₹15,000+</div>
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
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-200">
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-200">
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-green-600" />
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

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900 font-sora">Connectivity</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Mobile network:</strong> Good in cities, patchy in remote areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Internet:</strong> Available in hotels/resorts, limited in villages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Download offline maps</strong> before visiting remote areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Inform family about <strong>limited connectivity</strong> in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
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
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-10 h-10" />
                  <h3 className="text-3xl font-bold font-sora">3-4 Days</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-lg mb-1">Day 1: Bhuj</div>
                    <div className="text-white/90 text-sm">Aina Mahal, Prag Mahal, Bhuj Museum, local markets</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Day 2: White Rann</div>
                    <div className="text-white/90 text-sm">Sunrise at White Rann, Kalo Dungar, Dhordo village</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Day 3: Craft Villages</div>
                    <div className="text-white/90 text-sm">Nirona (Rogan art), Bhujodi (weaving), Ajrakhpur</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Day 4: Mandvi</div>
                    <div className="text-white/90 text-sm">Mandvi Beach, Vijay Vilas Palace, ship-building yard</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-10 h-10" />
                  <h3 className="text-3xl font-bold font-sora">5-7 Days</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-lg mb-1">Day 1-2: Bhuj & Surroundings</div>
                    <div className="text-white/90 text-sm">Historic sites, museums, craft villages nearby</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Day 3: White Rann Circuit</div>
                    <div className="text-white/90 text-sm">Full day at White Rann, Kalo Dungar, India Bridge</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Day 4: Western Kutch</div>
                    <div className="text-white/90 text-sm">Narayan Sarovar, Koteshwar, Lakhpat Fort</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Day 5: Mandvi</div>
                    <div className="text-white/90 text-sm">Beach, palace, shipyard, water sports</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Day 6-7: Wildlife & Nature</div>
                    <div className="text-white/90 text-sm">Chhari Dhand wetland, flamingo watching, village stays</div>
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
            <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-50 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">Need Help Planning Your Trip?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto font-poppins">
                  Contact us for personalized itineraries, bookings, and local insights to make your Kutch journey unforgettable
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+919825034580"
                    className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
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

        </div>
      </div>
    </main>
  );
}
