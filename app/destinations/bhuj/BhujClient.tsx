"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BhujClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full aspect-[16/9] mb-20">
        <Image
          src="/images/bhuj-overview.jpg"
          alt="Bhuj City, Kutch"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-white drop-shadow-lg"
          >
            Bhuj — The Soul of Kutch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl text-gray-200 mt-4 max-w-3xl"
          >
            Where tradition meets endurance — palaces, crafts, temples, and tales that define Kutch.
          </motion.p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-10 text-white text-3xl"
          >
            ↓
          </motion.div>
        </div>
      </section>
    </>
  );
}
