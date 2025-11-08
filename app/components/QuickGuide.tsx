"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Palette,
  Compass,
  Image as ImageIcon,
  PenSquare,
  Plane,
  Info,
  Star,
} from "lucide-react";
import { cardGradients, theme } from "../theme/config";

export default function QuickGuide() {
  const sections = [
    {
      name: "Destinations",
      href: "/destinations",
      desc: "Explore Kutch’s White Rann, Mandvi, Bhuj, and more.",
      icon: MapPin,
      featured: true,
    },
    {
      name: "Itineraries",
      href: "/itineraries",
      desc: "3-, 5- & 7-day travel plans for every season.",
      icon: Calendar,
    },
    {
      name: "Culture & Experiences",
      href: "/culture",
      desc: "Handicrafts, folk music, and Kutchi traditions.",
      icon: Palette,
    },
    {
      name: "Travel Guide",
      href: "/guide",
      desc: "How to reach, what to pack, and when to visit.",
      icon: Compass,
    },
    {
      name: "Gallery",
      href: "/gallery",
      desc: "The Rann, artisans, and breathtaking landscapes.",
      icon: ImageIcon,
    },
    {
      name: "Blog",
      href: "/blog",
      desc: "Hidden gems, travel tips, and Kutchi food stories.",
      icon: PenSquare,
    },
    {
      name: "Plan Your Trip",
      href: "/plan",
      desc: "Hotels, local tours, and curated experiences.",
      icon: Plane,
    },
    {
      name: "About / Contact",
      href: "/about",
      desc: "Our story and how to connect with us.",
      icon: Info,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sections.map((s, i) => {
        const Icon = s.icon;
        const cardGradient = cardGradients[i % cardGradients.length];
        
        return (
          <Link
            href={s.href}
            key={s.name}
            className="block group"
            tabIndex={0}
            style={{ textDecoration: "none" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`relative ${theme.spacing.card} rounded-2xl transition-all duration-500 bg-gradient-to-br ${cardGradient.bg} border ${cardGradient.border} hover:border-opacity-100 shadow-lg hover:shadow-2xl backdrop-blur-sm group overflow-hidden`}
            >
              {/* Featured Badge */}
              {s.featured && (
                <div className={`absolute top-3 right-3 bg-gradient-to-r ${theme.colors.badges.featured} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg`}>
                  <Star size={10} />
                  Featured
                </div>
              )}
              
              {/* Icon Container */}
              <div className="flex justify-center mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${cardGradient.icon} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 border border-white/50`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-lg ${theme.typography.fonts.body} font-bold ${theme.colors.text.primary} mb-2 text-center`}>
                  {s.name}
                </h3>
                <p className={`text-sm ${theme.typography.fonts.body} ${theme.colors.text.muted} leading-relaxed text-center group-hover:text-white transition-colors duration-300`}>
                  {s.desc}
                </p>
              </div>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className={`w-6 h-6 bg-gradient-to-r ${theme.colors.badges.accent} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-xs font-bold">→</span>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: `0 0 30px ${cardGradient.glow}` }}></div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
