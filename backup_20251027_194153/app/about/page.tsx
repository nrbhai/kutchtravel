'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Users, Heart, Star, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import BackButton from '../bookings/BackButton';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-1 bg-purple-500/30"></div>
          <div className="blob blob-2 bg-blue-500/30"></div>
          <div className="blob blob-3 bg-indigo-500/30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <BackButton />
          
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-xl rounded-full text-base font-bold tracking-wide border border-white/20 shadow-xl relative overflow-hidden font-poppins">
                <span className="relative z-10 text-purple-200">
                  ✨ Your Gateway to Kutch's Wonders ✨
                </span>
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-sora holographic">
              Discover Kutch with Us
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed font-medium font-poppins">
              Your trusted local guide to exploring the magical landscapes, rich heritage, 
              and vibrant culture of Kutch, Gujarat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* About Content */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            {/* Our Story */}
            <motion.div 
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white font-sora">Our Story</h2>
              </div>
              <p className="text-purple-100 leading-relaxed mb-4 font-poppins">
                Born from a passion for showcasing the incredible beauty and rich cultural heritage of Kutch, 
                we are dedicated to providing authentic and memorable experiences for travelers from around the world.
              </p>
              <p className="text-purple-100 leading-relaxed font-poppins">
                From the pristine white salt desert of the Great Rann to the bustling markets of Bhuj, 
                from ancient handicrafts to modern hospitality, we help you discover the true essence of Kutch.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div 
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Star className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white font-sora">Why Choose Us</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users size={16} className="text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 font-sora">Local Expertise</h3>
                    <p className="text-sm text-purple-200 font-poppins">Deep knowledge of Kutch's hidden gems and cultural nuances</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe size={16} className="text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 font-sora">Authentic Experiences</h3>
                    <p className="text-sm text-purple-200 font-poppins">Genuine connections with local communities and traditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock size={16} className="text-pink-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 font-sora">24/7 Support</h3>
                    <p className="text-sm text-purple-200 font-poppins">Round-the-clock assistance for your travel needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart size={16} className="text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 font-sora">Personalized Service</h3>
                    <p className="text-sm text-purple-200 font-poppins">Customized itineraries based on your interests</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            {/* Contact Details */}
            <motion.div 
              variants={fadeUp}
              className="bg-gradient-to-br from-white/95 via-blue-50/80 to-indigo-50/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                <Phone size={32} className="text-purple-300" />
                Get in Touch
              </h2>
              <p className="text-purple-100 mb-8 leading-relaxed">
                Ready to explore Kutch? Contact us for personalized travel planning, 
                local guidance, and unforgettable experiences.
              </p>

              {/* Contact Numbers */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-purple-100 text-sm">Primary Contact</p>
                    <a href="tel:+919825034580" className="text-xl font-bold text-white hover:text-purple-300 transition-colors">
                      +91 98250 34580
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-purple-100 text-sm">Alternative Contact</p>
                    <a href="tel:+919512234395" className="text-xl font-bold text-white hover:text-purple-300 transition-colors">
                      +91 95122 34395
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-purple-300" />
                  <div>
                    <p className="text-purple-100 text-sm">Email</p>
                    <a href="mailto:info@kutchtravel.com" className="text-white font-semibold hover:text-purple-300 transition-colors">
                      info@kutchtravel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-purple-300" />
                  <div>
                    <p className="text-purple-100 text-sm">Location</p>
                    <p className="text-white font-semibold">Kutch, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-emerald-600" />
                  <div>
                    <p className="text-purple-100 text-sm">Available</p>
                    <p className="text-white font-semibold">24/7 for travelers</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div 
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-purple-500/20 rounded-xl">
                  <span className="text-purple-300">🗺️</span>
                  <span className="font-medium text-white">Customized Tour Packages</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-500/20 rounded-xl">
                  <span className="text-purple-300">🏨</span>
                  <span className="font-medium text-white">Accommodation Booking</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                  <span className="text-emerald-600">🚗</span>
                  <span className="font-medium text-white">Transportation Services</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                  <span className="text-purple-600">🎨</span>
                  <span className="font-medium text-white">Cultural Experience Tours</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-rose-50 rounded-xl">
                  <span className="text-rose-600">📸</span>
                  <span className="font-medium text-white">Photography Tours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl p-8 text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Kutch?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's plan your perfect Kutch adventure together. Contact us today for personalized recommendations and bookings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919825034580"
                className="bg-white/10 backdrop-blur-xl text-purple-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500/20 transition-colors shadow-lg flex items-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <Link
                href="/destinations"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <MapPin size={20} />
                View Destinations
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

