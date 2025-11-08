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
  MenuIcon
} from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/25 via-indigo-600/30 to-purple-600/25 backdrop-blur-xl border-b border-white/30 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
                TravelKutch
              </h1>
              <p className="text-xs text-purple-100 font-medium">Discover the Magic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            
            {/* Home Link */}
            <Link href="/" className="group flex items-center space-x-1.5 px-3 py-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Home className="w-3.5 h-3.5 text-purple-300" />
              <span className="text-sm font-semibold text-white group-hover:text-purple-300">Home</span>
            </Link>

            {/* Destinations Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className="group flex items-center space-x-1.5 px-3 py-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 outline-none">
                    <MapPin className="w-3.5 h-3.5 text-purple-300" />
                    <span className="text-sm font-semibold text-white group-hover:text-purple-300">Destinations</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-purple-100 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                  </PopoverButton>

                  <AnimatePresence>
                    {open && (
                      <PopoverPanel
                        static
                        as={motion.div}
                        key="destinations-panel"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={panelVars}
                        anchor="bottom start"
                        className="absolute left-0 mt-4 w-96 origin-top-left z-50"
                      >
                        <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/95 backdrop-blur-xl shadow-2xl">
                          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-4">
                            <div className="flex items-center space-x-2 text-white">
                              <Sparkles className="w-5 h-5" />
                              <span className="font-semibold">Explore Kutch Destinations</span>
                            </div>
                          </div>
                          
                          <div className="p-4 max-h-80 overflow-y-auto">
                            <div className="grid grid-cols-1 gap-2">
                              {DESTINATIONS.map((destination, i) => {
                                const Icon = destination.icon;
                                return (
                                  <motion.div
                                    key={destination.slug}
                                    custom={i}
                                    variants={itemVars}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                  >
                                    <Link
                                      href={`/destinations/${destination.slug}`}
                                      className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:shadow-md"
                                    >
                                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-5 h-5 text-white" />
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-semibold text-white group-hover:text-purple-300">{destination.title}</div>
                                        <div className="text-sm text-purple-200">{destination.category}</div>
                                      </div>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-white/20">
                              <Link 
                                href="/destinations" 
                                className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-medium"
                              >
                                <MapPin className="w-4 h-4" />
                                <span>View All Destinations</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>

            {/* Other Navigation Items */}
            <Link href="/hidden-gems" className="group flex items-center space-x-1.5 px-3 py-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-sm font-semibold text-white group-hover:text-emerald-700 whitespace-nowrap">Hidden Gems</span>
            </Link>
            
            <Link href="/bookings" className="group flex items-center space-x-1.5 px-3 py-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Calendar className="w-3.5 h-3.5 text-purple-700" />
              <span className="text-sm font-semibold text-white group-hover:text-purple-700">Bookings</span>
            </Link>
            
            <Link href="/#culture" className="group flex items-center space-x-1.5 px-3 py-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Camera className="w-3.5 h-3.5 text-rose-700" />
              <span className="text-sm font-semibold text-white group-hover:text-rose-700">Culture</span>
            </Link>
            
            <Link href="/gallery" className="group flex items-center space-x-1.5 px-3 py-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Camera className="w-3.5 h-3.5 text-purple-300" />
              <span className="text-sm font-semibold text-white group-hover:text-purple-300">Gallery</span>
            </Link>
            
            <Link href="/#guide" className="group flex items-center space-x-1.5 px-3 py-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <BookOpen className="w-3.5 h-3.5 text-orange-700" />
              <span className="text-sm font-semibold text-white group-hover:text-orange-700">Guide</span>
            </Link>
            
            <Link href="/about" className="group flex items-center space-x-1.5 px-3 py-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Users className="w-3.5 h-3.5 text-cyan-700" />
              <span className="text-sm font-semibold text-white group-hover:text-cyan-700">About</span>
            </Link>
          </div>

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
                    <MenuIcon className="w-6 h-6 text-purple-100" />
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
                      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white">TravelKutch</h3>
                            <p className="text-blue-100 text-sm">Explore the Magic</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 space-y-2">
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-blue-50 to-indigo-50 scale-105" : ""}`} 
                              href="/"
                            >
                              <Home className="w-5 h-5 text-purple-300" />
                              <span className="font-semibold text-white">Home</span>
                            </Link>
                          )}
                        </MenuItem>

                        {/* Mobile Destinations Menu */}
                        <MenuItem>
                          {({ active }) => (
                            <details className={`group rounded-xl ${active ? "bg-gradient-to-r from-indigo-50 to-purple-50" : ""}`}>
                              <summary className="flex items-center space-x-3 px-4 py-3 cursor-pointer list-none">
                                <MapPin className="w-5 h-5 text-purple-300" />
                                <span className="font-medium text-purple-100">Destinations</span>
                                <ChevronDown className="w-4 h-4 text-purple-200 ml-auto group-open:rotate-180 transition-transform duration-300" />
                              </summary>
                              <div className="mt-2 ml-6 space-y-1 max-h-60 overflow-auto">
                                {DESTINATIONS.map((destination) => {
                                  const Icon = destination.icon;
                                  return (
                                    <Link
                                      key={destination.slug}
                                      href={`/destinations/${destination.slug}`}
                                      className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-purple-500/20 transition-colors"
                                    >
                                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                                        <Icon className="w-4 h-4 text-white" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-white text-sm">{destination.title}</div>
                                        <div className="text-xs text-purple-200">{destination.category}</div>
                                      </div>
                                    </Link>
                                  );
                                })}
                                <Link
                                  href="/destinations"
                                  className="flex items-center justify-center space-x-2 w-full py-2 mt-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg text-sm font-semibold"
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
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-emerald-50 to-green-50 scale-105" : ""}`} 
                              href="/hidden-gems"
                            >
                              <Sparkles className="w-5 h-5 text-emerald-700" />
                              <span className="font-semibold text-white">Hidden Gems</span>
                            </Link>
                          )}
                        </MenuItem>

                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-purple-50 to-pink-50 scale-105" : ""}`} 
                              href="/bookings"
                            >
                              <Calendar className="w-5 h-5 text-purple-600" />
                              <span className="font-medium text-purple-100">Bookings</span>
                            </Link>
                          )}
                        </MenuItem>
                        
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-rose-50 to-pink-50 scale-105" : ""}`} 
                              href="/#culture"
                            >
                              <Camera className="w-5 h-5 text-rose-600" />
                              <span className="font-medium text-purple-100">Culture</span>
                            </Link>
                          )}
                        </MenuItem>
                        
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-indigo-50 to-purple-50 scale-105" : ""}`} 
                              href="/gallery"
                            >
                              <Camera className="w-5 h-5 text-purple-300" />
                              <span className="font-medium text-purple-100">Gallery</span>
                            </Link>
                          )}
                        </MenuItem>
                        
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-orange-50 to-yellow-50 scale-105" : ""}`} 
                              href="/#guide"
                            >
                              <BookOpen className="w-5 h-5 text-orange-600" />
                              <span className="font-medium text-purple-100">Guide</span>
                            </Link>
                          )}
                        </MenuItem>
                        
                        <MenuItem>
                          {({ active }) => (
                            <Link 
                              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? "bg-gradient-to-r from-cyan-50 to-blue-50 scale-105" : ""}`} 
                              href="/about"
                            >
                              <Users className="w-5 h-5 text-cyan-600" />
                              <span className="font-medium text-purple-100">About</span>
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