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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-1 bg-gray-500/30"></div>
          <div className="blob blob-2 bg-gray-500/30"></div>
          <div className="blob blob-3 bg-gray-500/30"></div>
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
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-xl rounded-full text-base font-bold tracking-wide border border-gray-200 shadow-xl relative overflow-hidden font-poppins">
                <span className="relative z-10 text-gray-600">
                  ✨ Your Gateway to Kutch's Wonders ✨
                </span>
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-sora holographic">
              Discover Kutch with Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium font-poppins">
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
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center">
                  <Heart className="text-gray-900" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 font-sora">Our Story</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 font-poppins">
                Born from a passion for showcasing the incredible beauty and rich cultural heritage of Kutch, 
                we are dedicated to providing authentic and memorable experiences for travelers from around the world.
              </p>
              <p className="text-gray-700 leading-relaxed font-poppins">
                From the pristine white salt desert of the Great Rann to the bustling markets of Bhuj, 
                from ancient handicrafts to modern hospitality, we help you discover the true essence of Kutch.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div 
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center">
                  <Star className="text-gray-900" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 font-sora">Why Choose Us</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users size={16} className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-sora">Local Expertise</h3>
                    <p className="text-sm text-gray-600 font-poppins">Deep knowledge of Kutch's hidden gems and cultural nuances</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe size={16} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-sora">Authentic Experiences</h3>
                    <p className="text-sm text-gray-600 font-poppins">Genuine connections with local communities and traditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock size={16} className="text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-sora">24/7 Support</h3>
                    <p className="text-sm text-gray-600 font-poppins">Round-the-clock assistance for your travel needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart size={16} className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-sora">Personalized Service</h3>
                    <p className="text-sm text-gray-600 font-poppins">Customized itineraries based on your interests</p>
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
              className="bg-gradient-to-br from-white/95 via-gray-50/80 to-gray-50/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                <Phone size={32} className="text-gray-600" />
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Ready to explore Kutch? Contact us for personalized travel planning, 
                local guidance, and unforgettable experiences.
              </p>

              {/* Contact Numbers */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-500 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm">Primary Contact</p>
                    <a href="tel:+919825034580" className="text-xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
                      +91 98250 34580
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-500 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm">Alternative Contact</p>
                    <a href="tel:+919512234395" className="text-xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
                      +91 95122 34395
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-gray-600" />
                  <div>
                    <p className="text-gray-700 text-sm">Email</p>
                    <a href="mailto:info@kutchtravel.com" className="text-gray-900 font-semibold hover:text-gray-600 transition-colors">
                      info@kutchtravel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-gray-600" />
                  <div>
                    <p className="text-gray-700 text-sm">Location</p>
                    <p className="text-gray-900 font-semibold">Kutch, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-gray-600" />
                  <div>
                    <p className="text-gray-700 text-sm">Available</p>
                    <p className="text-gray-900 font-semibold">24/7 for travelers</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div 
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-500/20 rounded-xl">
                  <span className="text-gray-600">🗺️</span>
                  <span className="font-medium text-gray-900">Customized Tour Packages</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-500/20 rounded-xl">
                  <span className="text-gray-600">🏨</span>
                  <span className="font-medium text-gray-900">Accommodation Booking</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">🚗</span>
                  <span className="font-medium text-gray-900">Transportation Services</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">🎨</span>
                  <span className="font-medium text-gray-900">Cultural Experience Tours</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">📸</span>
                  <span className="font-medium text-gray-900">Photography Tours</span>
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
          <div className="bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 rounded-3xl p-8 text-gray-900 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Kutch?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's plan your perfect Kutch adventure together. Contact us today for personalized recommendations and bookings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919825034580"
                className="bg-white/10 backdrop-blur-xl text-gray-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-500/20 transition-colors shadow-lg flex items-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <Link
                href="/destinations"
                className="bg-white/20 backdrop-blur-sm text-gray-900 border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors flex items-center gap-2"
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









