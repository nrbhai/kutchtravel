'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-cyan-50 to-blue-50">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"></div>
      
      <div className="relative pt-20 pb-12">
        <div className="max-w-[1600px] mx-auto px-6">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* About Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-lg"
              >
                <h3 className="text-5xl md:text-6xl font-sora font-extrabold holographic drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] mb-6">
                  Travel Kutch
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-inter">
                  Your gateway to the mystical land of Kutch — from the ethereal White Desert to ancient heritage sites. 
                  Discover authentic crafts, vibrant festivals, and the timeless stories that define Gujarat's cultural crown jewel.
                </p>
                
                {/* Social & Contact Quick Access */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/919825034580" 
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    💬 WhatsApp
                  </a>
                  <a 
                    href="tel:+919512234395" 
                    className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    📞 Call Now
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-lg"
            >
              <h4 className="text-2xl font-sora font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-6">Explore</h4>
              <ul className="space-y-3 font-inter">
                {[
                  { name: "Home", href: "/#home", icon: "🏠" },
                  { name: "Destinations", href: "/destinations", icon: "🗺️" },
                  { name: "About Us", href: "/about", icon: "ℹ️" },
                  { name: "Travel Guide", href: "/#guide", icon: "📖" },
                  { name: "Gallery", href: "/gallery", icon: "📸" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors duration-300 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-lg"
            >
              <h4 className="text-2xl font-sora font-bold bg-gradient-to-r from-cyan-600 to-orange-600 bg-clip-text text-transparent mb-6">Connect</h4>
              <div className="space-y-5 font-inter">
                <div className="flex items-start gap-3 text-gray-700">
                  <span className="text-2xl mt-1">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Visit Us</p>
                    <p className="text-sm leading-relaxed">Bhuj, Kutch District<br />Gujarat, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-gray-700">
                  <span className="text-2xl mt-1">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                    <a href="tel:+919825034580" className="hover:text-indigo-600 transition-colors text-sm block">+91 98250 34580</a>
                    <a href="tel:+919512234395" className="hover:text-indigo-600 transition-colors text-sm block">+91 95122 34395</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-700">
                  <span className="text-2xl mt-1">✉️</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:info@travelkutch.org" className="hover:text-indigo-600 transition-colors text-sm">
                      info@travelkutch.org
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Map Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl font-bold text-center text-gray-900 mb-8 font-playfair">
              Discover the Geography of Wonder
            </h4>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <div className="w-full h-96 rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
                  <iframe
                    title="Kutch Region Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946493.0711048405!2d68.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950c4976e1d8b25%3A0x76e2f6be5b8c8a86!2sKutch%20District%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1735228800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0"
                  />
                </div>
                <p className="text-gray-800 text-center mt-4 font-medium">
                  From the vast salt marshes of the Rann to historic ports along the Arabian Sea — explore every corner of this magnificent region
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-cyan-100 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="text-gray-800 text-center md:text-left font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} <span className="text-gray-900 font-bold">Travel Kutch</span>. 
                Crafted with passion for authentic cultural experiences.
              </motion.p>
              
              <motion.p 
                className="text-gray-800 text-sm font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Designed with ❤️ for travelers seeking authentic Kutch
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
