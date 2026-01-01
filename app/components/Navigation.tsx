'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Globe,
  History,
  FileText
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

interface NavigationProps {
  variant?: 'transparent' | 'solid';
}

export default function Navigation({ variant = 'transparent' }: NavigationProps) {
  const isSolid = variant === 'solid';

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full z-50 transition-colors duration-300 ${
        isSolid ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Brand */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative w-14 h-14 flex-shrink-0 p-1 overflow-visible transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo-v3.webp"
                alt="Travel Kutch Logo"
                fill
                className="object-contain shadow-sm rounded-lg"
                priority
              />
            </div>
            <div className="hidden xs:block">
              <h1 className="text-xl font-bold font-sora bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent whitespace-nowrap tracking-tight">
                TravelKutch
              </h1>
              <p className={`text-[10px] font-medium font-inter tracking-wide ${isSolid ? 'text-gray-400' : 'text-gray-400'}`}>Discover the Magic</p>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex nav-desktop items-center space-x-1">
            {[
              { name: 'Home', href: '/', icon: Home },
              { name: 'Destinations', href: '/destinations', icon: MapPin },
              { name: 'History', href: '/history', icon: History },
              { name: 'Hidden Gems', href: '/hidden-gems', icon: Sparkles },
              { name: 'Blog', href: '/blog', icon: FileText },
              { name: 'Booking', href: '/bookings', icon: Calendar },
              { name: 'About', href: '/about', icon: Users },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isSolid 
                    ? 'text-gray-300 hover:bg-white/10 hover:text-white' 
                    : 'text-gray-100 hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-semibold font-sora">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            
            {/* Mobile Menu Button */}
            <Menu as="div" className="lg:hidden nav-mobile-trigger relative">
              {({ open }) => (
                <>
                  <MenuButton
                    className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:scale-105 ${
                      isSolid ? 'bg-white/10 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    aria-label="Open menu"
                    aria-expanded={open}
                  >
                    <motion.div
                      animate={{ rotate: open ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MenuIcon className="w-6 h-6" />
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
                        className="absolute right-0 mt-4 w-80 max-w-[95vw] origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl z-50"
                      >
                        <div className="bg-gradient-to-r from-orange-950 to-amber-950 p-6 border-b border-white/5">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-amber-400" />
                            </div>
                            <div>
                              <h3 className="font-bold text-white">TravelKutch</h3>
                              <p className="text-gray-400 text-sm">Explore the Magic</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 space-y-1">
                          {[
                            { name: 'Home', href: '/', icon: Home },
                            { name: 'Destinations', href: '/destinations', icon: MapPin },
                            { name: 'History', href: '/history', icon: History },
                            { name: 'Hidden Gems', href: '/hidden-gems', icon: Sparkles },
                            { name: 'Blog', href: '/blog', icon: FileText },
                            { name: 'Booking', href: '/bookings', icon: Calendar },
                            { name: 'About', href: '/about', icon: Users },
                          ].map((item) => (
                            <MenuItem key={item.href}>
                              {({ active }) => (
                                <Link 
                                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                    active ? "bg-white/10 text-amber-400 scale-[1.02]" : "text-gray-300"
                                  }`} 
                                  href={item.href}
                                >
                                  <item.icon className={`w-5 h-5 ${active ? "text-amber-400" : "text-gray-400"}`} />
                                  <span className="font-semibold font-sora">{item.name}</span>
                                </Link>
                              )}
                            </MenuItem>
                          ))}
                        </div>
                      </MenuItems>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}


