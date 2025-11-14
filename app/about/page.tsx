'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Users, Heart, Star, Camera, Compass, Award, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
      <section className="relative overflow-hidden pt-8 pb-12">
        {/* Navigation - Position it absolutely over the section */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-600 opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="mb-6">
                <span className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold tracking-wide text-white shadow-lg">
                  ✨ About Us
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sora">
                <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Your Gateway to
                </span>
                <br />
                <span className="text-gray-900">Kutch Wonders</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed font-inter mb-8">
                We are passionate local experts dedicated to showcasing the incredible beauty, rich heritage, and vibrant culture of Kutch, Gujarat.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
                  <Award className="w-5 h-5 text-cyan-600" />
                  <span className="font-semibold text-gray-800">10,000+ Travelers</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-gray-800">4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={scaleIn} className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-20 h-20 mx-auto mb-4 opacity-50" />
                    <p className="text-xl font-semibold">Team Photo</p>
                    <p className="text-sm opacity-75">Coming Soon</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-24 h-24 bg-cyan-300 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-cyan-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Heart className="text-white" size={28} />
                </div>
                <h2 className="text-4xl font-bold font-sora bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Our Story</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-lg text-gray-700 leading-relaxed font-inter">
                  Born from a passion for showcasing the incredible beauty and rich cultural heritage of Kutch, we are dedicated to providing authentic and memorable experiences for travelers from around the world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-inter">
                  From the pristine white salt desert of the Great Rann to the bustling markets of Bhuj, from ancient handicrafts to modern hospitality, we help you discover the true essence of Kutch.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="mb-16">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-400 flex items-center justify-center">
              <div className="text-center text-white">
                <Compass className="w-20 h-20 mx-auto mb-4 opacity-50" />
                <p className="text-2xl font-bold">Kutch Landscape</p>
                <p className="text-sm opacity-75 mt-2">Placeholder Image</p>
              </div>
            </div>
            <div className="absolute top-6 left-6 w-32 h-32 bg-cyan-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-6 right-6 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-40"></div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sora">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-inter">We bring Kutch to life with expertise and passion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 hover:border-cyan-300 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <Users size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-sora text-gray-900">Local Expertise</h3>
              <p className="text-gray-700 font-inter">Deep knowledge of Kutch hidden gems and cultural nuances</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-gradient-to-br from-sky-50 to-cyan-50 border-2 border-sky-200 hover:border-sky-300 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles size={32} className="text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-sora text-gray-900">Authentic Experiences</h3>
              <p className="text-gray-700 font-inter">Genuine connections with local communities and traditions</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 hover:border-teal-300 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-4">
                <Clock size={32} className="text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-sora text-gray-900">24/7 Support</h3>
              <p className="text-gray-700 font-inter">Round-the-clock assistance for your travel needs</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-200 hover:border-blue-300 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl flex items-center justify-center mb-4">
                <Heart size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-sora text-gray-900">Personalized Service</h3>
              <p className="text-gray-700 font-inter">Customized itineraries based on your interests</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-cyan-200">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 font-sora">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed font-inter text-lg">
              Ready to explore Kutch? Contact us for personalized travel planning and unforgettable experiences.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-5 border-2 border-cyan-200 hover:border-cyan-300 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-semibold">Primary Contact</p>
                  <a href="tel:+919825034580" className="text-xl font-bold text-cyan-600 hover:text-blue-600 transition-colors">
                    +91 98250 34580
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-5 border-2 border-sky-200 hover:border-sky-300 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-semibold">Alternative Contact</p>
                  <a href="tel:+919512234395" className="text-xl font-bold text-sky-600 hover:text-cyan-600 transition-colors">
                    +91 95122 34395
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                <Mail size={20} className="text-cyan-600" />
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <a href="mailto:rachhnn@gmail.com" className="text-gray-900 font-semibold hover:text-cyan-600 transition-colors">
                    rachhnn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-sky-50 rounded-xl border border-sky-100">
                <MapPin size={20} className="text-sky-600" />
                <div>
                  <p className="text-gray-600 text-sm">Location</p>
                  <p className="text-gray-900 font-semibold">Kutch, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <Clock size={20} className="text-blue-600" />
                <div>
                  <p className="text-gray-600 text-sm">Available</p>
                  <p className="text-gray-900 font-semibold">24/7 for travelers</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border-2 border-teal-200 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 font-sora bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Our Services</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:shadow-md transition-shadow border-2 border-cyan-200 hover:border-cyan-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🗺️
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">Customized Tour Packages</p>
                  <p className="text-gray-700 text-sm">Tailored to your preferences</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl hover:shadow-md transition-shadow border-2 border-sky-200 hover:border-sky-300">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🏨
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">Accommodation Booking</p>
                  <p className="text-gray-700 text-sm">From budget to luxury stays</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl hover:shadow-md transition-shadow border-2 border-teal-200 hover:border-teal-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🚗
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">Transportation Services</p>
                  <p className="text-gray-700 text-sm">Comfortable vehicle options</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl hover:shadow-md transition-shadow border-2 border-blue-200 hover:border-blue-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🎨
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">Cultural Experience Tours</p>
                  <p className="text-gray-700 text-sm">Meet local artisans communities</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl hover:shadow-md transition-shadow border-2 border-cyan-200 hover:border-cyan-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  📸
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">Photography Tours</p>
                  <p className="text-gray-700 text-sm">Capture Kutch beauty</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <div className="bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sora">Ready to Explore Kutch?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
                Let us plan your perfect Kutch adventure together. Contact us today for personalized recommendations and bookings.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+919825034580"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <Link
                  href="/destinations"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors flex items-center gap-2"
                >
                  <MapPin size={20} />
                  View Destinations
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
          className="text-center py-8 mt-8"
        >
          <p className="text-gray-800 text-sm font-medium">
            Designed with ❤️ for travelers seeking authentic Kutch
          </p>
        </motion.div>
      </div>
    </main>
  );
}
