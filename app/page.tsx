"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import QuickGuide from "@/components/QuickGuide";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/white-rann-hero.jpg"
          alt="White Rann of Kutch"
          fill
          className="object-cover brightness-75"
          priority
        />

        <div className="relative z-10 text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair leading-tight tracking-tight"
          >
            <span className="block text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
              Discover Kutch
            </span>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-2xl md:text-4xl font-lora font-semibold text-white mt-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] tracking-wide"
            >
              Beyond the White Desert
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 font-inter"
          >
            Where salt meets sky, and stories meet silence.
          </motion.p>

          <motion.a
            href="/destinations"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg"
          >
            Explore Destinations
          </motion.a>
        </div>
      </section>

      {/* Quick Guide Section */}
      <section id="quick-guide" className="max-w-6xl mx-auto px-4 py-16">
        <QuickGuide />
      </section>
    </main>
  );
}
