'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, Menu, MenuButton, MenuItem, MenuItems, PopoverButton, PopoverPanel } from "@headlessui/react";
import QuickGuide from "./components/QuickGuide";
import Navigation from "./components/Navigation";
import { DESTINATIONS } from "@/app/destinations/data";
import { useState } from "react";

// [Previous imports and constants remain the same...]

export default function Home() {
  // [Previous state and constants remain the same...]

  return (
    <main className="scroll-smooth selection:bg-gray-300 selection:text-gray-900 relative text-gray-900 dark:bg-gray-950 dark:text-gray-900">
      <Navigation />

      {/* 1️⃣ Modern Hero Section with Animated Mesh Background */}
      <section id="home" className="relative h-[100svh] min-h-[560px] flex flex-col items-center overflow-hidden">
        {/* Text Content Section - At the top */}
        <motion.div 
          className="relative z-20 px-6 max-w-6xl mx-auto mt-28"
          initial="hidden" 
          animate="visible" 
          variants={stagger}
        >
          <motion.h1 variants={fadeUp} className="font-sora leading-tight tracking-tight text-center">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-extrabold holographic drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] text-gray-900">
              Discover Kutch
            </span>
            <motion.span 
              variants={fadeUp} 
              className="block text-xl md:text-2xl lg:text-3xl font-poppins font-medium bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4 drop-shadow-[0_6px_14px_rgba(0,0,0,0.3)] tracking-wide sparkle-wrap" 
              tabIndex={0}
            >
              {subtitle.split("").map((ch, i) => (
                <span
                  key={i}
                  className="sparkle-letter inline-block"
                  style={{
                    animationName: "sparkle",
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: 1,
                    animationDuration: `${totalDuration}s`,
                    animationDelay: `${i * perLetterDuration}s`,
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto font-space-grotesk font-medium leading-relaxed text-center">
            <span className="text-gray-900 font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              Where salt meets sky, and stories meet silence
            </span>
            <span className="block text-base md:text-lg lg:text-xl mt-4 font-poppins font-light text-gray-800">
              Practical guides, real photos, and local tips — not tourist brochures.
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link 
              href="/destinations" 
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white font-poppins font-semibold py-3 px-6 rounded-full shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Explore Destinations</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </Link>
            <a 
              href="#quick-guide" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white font-poppins font-medium py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/20"
            >
              <span>Quick Guide</span>
              <span>✨</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-white">
          <div className="blob blob-1 w-[500px] h-[500px] top-0 left-0 opacity-50"></div>
          <div className="blob blob-2 w-[400px] h-[400px] top-1/3 right-0 opacity-50"></div>
          <div className="blob blob-3 w-[450px] h-[450px] bottom-0 left-1/2 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        {/* Hero image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/white-rann-hero.jpg"
            alt="Panoramic view of the White Rann of Kutch salt desert under blue sky - a pristine white landscape stretching to the horizon"
            fill
            priority
            className="object-cover opacity-30 brightness-95 contrast-110 saturate-110 mix-blend-overlay"
            sizes="100vw"
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        {/* Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.9 }} 
          transition={{ delay: 1, duration: 0.8 }} 
          className="pointer-events-none absolute inset-x-0 bottom-28 flex justify-center z-20"
        >
          <div className="h-px w-56 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 6 }} 
          animate={{ opacity: 0.8, y: 0 }} 
          transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }} 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-900 text-3xl z-20"
        >
          ↓
        </motion.div>
      </section>

      {/* [Rest of the components remain the same...] */}
    </main>
  );
}