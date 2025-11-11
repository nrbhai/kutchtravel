'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, Menu, MenuButton, MenuItem, MenuItems, PopoverButton, PopoverPanel } from "@headlessui/react";
import { 
  Home, 
  MapPin, 
  Calendar, 
  Camera, 
  BookOpen, 
  Users, 
  Sparkles,
  Mountain,
  Waves,
  Castle,
  Building,
  Ship,
  ChevronDown,
  MenuIcon,
  Globe
} from 'lucide-react';
import GoogleTranslate from './GoogleTranslate';

// Animation variants
const panelVars = {
  initial: { opacity: 0, y: 6, scale: 0.98, transformOrigin: "top center" },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, y: 4, scale: 0.98, transition: { duration: 0.12 } },
};

const itemVars = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.03 * i, duration: 0.16 } }),
  exit: { opacity: 0, y: 6, transition: { duration: 0.12 } },
};

// Sample destinations data for navigation with icons
const DESTINATIONS = [
  { title: 'Bhuj', slug: 'bhuj', icon: Castle, category: 'Heritage City' },
  { title: 'Dhordo White Rann', slug: 'dhordo-white-rann', icon: Sparkles, category: 'Salt Desert' },
  { title: 'Mandvi', slug: 'mandvi', icon: Waves, category: 'Beach Town' },
  { title: 'Lakhpat', slug: 'lakhpat', icon: Castle, category: 'Historic Fort' },
  { title: 'Kalo Dungar', slug: 'kalo-dungar', icon: Mountain, category: 'Scenic Peak' },
  { title: 'Anjar', slug: 'anjar', icon: Building, category: 'Planned City' },
  { title: 'Gandhidham', slug: 'gandhidham', icon: Building, category: 'Commercial Hub' },
  { title: 'Mundra', slug: 'mundra', icon: Ship, category: 'Port City' }
];

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      {/* Enhanced Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo/Brand */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-md" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold font-sora bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap tracking-tight">
                TravelKutch
              </h1>
              <p className="text-xs text-gray-500 font-medium font-poppins tracking-wide">Discover the Magic</p>
            </div>
          </Link>

          {/* Empty space - all navigation in tabs */}
          <div></div>

          {/* Mobile Menu */}
          <Menu as="div" className="lg:hidden relative">
            {({ open }) => (
              <>
                <MenuButton
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                  aria-label="Open menu"
                  aria-expanded={open}
                >
                  <motion.div
                    animate={{ rotate: open ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MenuIcon className="w-6 h-6 text-gray-100" />
                  </motion.div>
                </MenuButton>

                <AnimatePresence>
                  {open && (
                    <MenuItems
                      static
                      as={motion.div}
                      key="mobile-menu"
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      anchor="bottom end"
                      className="absolute right-0 mt-4 w-80 max-w-[95vw] origin-top-right overflow-hidden rounded-2xl border border-white/40 bg-white/98 backdrop-blur-xl shadow-2xl z-50"
                    >
                      <div className="bg-gradient-to-r from-gray-600 via-gray-600 to-gray-700 p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white">TravelKutch</h3>
                            <p className="text-gray-100 text-sm">Explore the Magic</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 space-y-2">
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-gray-50 to-gray-50 scale-105" : ""}`} 
                              href="/"
                            >
                              <Home className="w-5 h-5 text-gray-300" />
                              <span className="font-semibold text-white">Home</span>
                            </Link>
                          )}
                        </MenuItem>

                        {/* Mobile Destinations Menu */}
                        <MenuItem>
                          {({ active }) => (
                            <details className={`group rounded-xl ${active ? "bg-gradient-to-r from-gray-50 to-gray-50" : ""}`}>
                              <summary className="flex items-center space-x-3 px-4 py-3 cursor-pointer list-none">
                                <MapPin className="w-5 h-5 text-gray-300" />
                                <span className="font-medium text-gray-100">Destinations</span>
                                <ChevronDown className="w-4 h-4 text-gray-200 ml-auto group-open:rotate-180 transition-transform duration-300" />
                              </summary>
                              <div className="mt-2 ml-6 space-y-1 max-h-60 overflow-auto">
                                {DESTINATIONS.map((destination) => {
                                  const Icon = destination.icon;
                                  return (
                                    <Link
                                      key={destination.slug}
                                      href={`/destinations/${destination.slug}`}
                                      className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-500/20 transition-colors"
                                    >
                                      <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center">
                                        <Icon className="w-4 h-4 text-white" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-white text-sm">{destination.title}</div>
                                        <div className="text-xs text-gray-200">{destination.category}</div>
                                      </div>
                                    </Link>
                                  );
                                })}
                                <Link
                                  href="/destinations"
                                  className="flex items-center justify-center space-x-2 w-full py-2 mt-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg text-sm font-semibold"
                                >
                                  <MapPin className="w-4 h-4" />
                                  <span>View All</span>
                                </Link>
                              </div>
                            </details>
                          )}
                        </MenuItem>

                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-gray-50 to-gray-50 scale-105" : ""}`} 
                              href="/hidden-gems"
                            >
                              <Sparkles className="w-5 h-5 text-gray-700" />
                              <span className="font-semibold text-white">Hidden Gems</span>
                            </Link>
                          )}
                        </MenuItem>

                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-gray-50 to-gray-50 scale-105" : ""}`} 
                              href="/bookings"
                            >
                              <Calendar className="w-5 h-5 text-gray-600" />
                              <span className="font-medium text-gray-100">Bookings</span>
                            </Link>
                          )}
                        </MenuItem>
                        
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-gray-50 to-gray-50 scale-105" : ""}`} 
                              href="/#culture"
                            >
                              <Camera className="w-5 h-5 text-gray-600" />
                              <span className="font-medium text-gray-100">Culture</span>
                            </Link>
                          )}
                        </MenuItem>
                        
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-gray-50 to-gray-50 scale-105" : ""}`} 
                              href="/gallery"
                            >
                              <Camera className="w-5 h-5 text-gray-300" />
                              <span className="font-medium text-gray-100">Gallery</span>
                            </Link>
                          )}
                        </MenuItem>
                        
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-gray-50 to-gray-50 scale-105" : ""}`} 
                              href="/#guide"
                            >
                              <BookOpen className="w-5 h-5 text-gray-600" />
                              <span className="font-medium text-gray-100">Guide</span>
                            </Link>
                          )}
                        </MenuItem>
                        
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-gray-50 to-gray-50 scale-105" : ""}`} 
                              href="/about"
                            >
                              <Users className="w-5 h-5 text-gray-600" />
                              <span className="font-medium text-gray-100">About</span>
                            </Link>
                          )}
                        </MenuItem>
                      </div>
                    </MenuItems>
                  )}
                </AnimatePresence>
              </>
            )}
          </Menu>
        </div>
      </div>
    </motion.nav>
  );
}


