'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Music, Users, Camera, Sparkles, Moon, Sun, Info, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MetallicHeading from '../components/MetallicHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const festivals = [
  {
    title: "Rann Utsav",
    date: "November - February",
    location: "Dhordo, White Rann",
    description: "The grandest celebration of Kutch's culture, set against the mesmerizing white salt desert. A carnival of music, dance, and luxury tent living.",
    image: "/images/festivals/rann-utsav.webp",
    tags: ["Culture", "Music", "Luxury Camping"],
    highlights: ["Full Moon Nights", "Folk Performances", "Handicraft Bazaar", "Adventure Sports"]
  },
  {
    title: "Ravechi Fair",
    date: "August - September (Bhadrapad)",
    location: "Ravechi Mata Temple, Rapar",
    description: "A vibrant gathering of the Ahir and Rabari communities celebrating their heritage with traditional Raas dances and colorful attire.",
    image: "/images/festivals/ravechi.webp",
    tags: ["Traditional", "Religious", "Folk Dance"],
    highlights: ["Tribal Attire", "Raas Garba", "Local Cuisine"]
  },
  {
    title: "Modhera Dance Festival",
    date: "January (Third week)",
    location: "Modhera Sun Temple (Nearby)",
    description: "Classical dance performances by renowned artists against the backdrop of the magnificent 11th-century Sun Temple.",
    image: "/images/festivals/modhera.webp",
    tags: ["Classical Dance", "Heritage", "Art"],
    highlights: ["Classical Dance", "Light & Sound Show", "Temple Architecture"]
  },
  {
    title: "Kutch Rann Utsav Cricket Carnival",
    date: "December",
    location: "White Rann",
    description: "A unique sporting event played on the salt flats, combining the passion for cricket with the beauty of the Rann.",
    image: "/images/festivals/cricket.webp",
    tags: ["Sports", "Unique", "Fun"],
    highlights: ["Salt Desert Cricket", "Night Matches", "Celebrity Guests"]
  }
];

export default function FestivalsClient() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-500/30 selection:text-amber-200">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500/10 to-purple-500/10 backdrop-blur-md border border-amber-500/20 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              <span className="text-amber-200 font-semibold tracking-wide uppercase text-sm">Celebrations of Kutch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-sora leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
                Colors of the Desert
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter font-light max-w-3xl mx-auto leading-relaxed">
              Experience the vibrant soul of Kutch through its spectacular festivals, where the barren white desert comes alive with music, dance, and celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rann Utsav Special Section */}
      <section className="py-24 relative bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="inline-block px-4 py-1 bg-white/10 rounded-lg text-sm font-bold text-white mb-6 transform -rotate-2">
                🌟 The Main Event
              </div>
              <MetallicHeading 
                text="The Rann Utsav"
                variant="gold"
                as="h2"
                className="text-4xl md:text-6xl font-black mb-8"
              />
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-inter">
                More than just a festival, Rann Utsav is a carnival of color, culture, and nature's beauty. Held annually from November to February, it celebrates the spirit of Kutch under the full moon.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0">
                    <Moon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-sora">Full Moon Magic</h3>
                    <p className="text-gray-400">Witness the White Rann shimmering like silver under the moonlight.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-sora">Cultural Extravaganza</h3>
                    <p className="text-gray-400">Live folk music, Kutchi garba, and puppet shows every night.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/blog/rann-utsav-2025-guide" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full transition-all shadow-lg shadow-amber-500/20">
                  Complete Guide 2025
                </Link>
                <Link href="/bookings" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/10 transition-all">
                  Book Tent City
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative group">
                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-gray-500">
                   Image: Rann Utsav Night View
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-amber-400 font-bold mb-1 uppercase tracking-widest text-xs">Next Edition</p>
                        <p className="text-white font-sora font-bold text-xl">Nov 1, 2024 - Feb 28, 2025</p>
                      </div>
                      <div className="text-right">
                        <span className="block text-3xl font-black text-white">100+</span>
                        <span className="text-xs text-gray-400 uppercase">Days of Joy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Festivals Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white font-sora mb-6">Annual Calendar</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivals.slice(1).map((festival, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all group"
              >
                <div className="aspect-video bg-zinc-800 relative">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                     Image: {festival.title}
                   </div>
                   <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                     {festival.date}
                   </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-sora group-hover:text-amber-400 transition-colors">{festival.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>{festival.location}</span>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {festival.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {festival.highlights.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 font-medium border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info FAQ */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-white font-sora mb-12 text-center">Festival Tips & FAQ</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-sora">When is the best time for Rann Utsav?</h3>
              <p className="text-gray-300 leading-relaxed">
                The best time is during the Full Moon nights, as the white desert glows silver. December and January are the pleasantest months weather-wise.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-sora">Do I need a permit?</h3>
              <p className="text-gray-300 leading-relaxed">
                Yes, a permit is mandatory to visit the White Rann even during the festival. You can obtain it online from rannpermit.com or at the Bhirandiyara check post.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-sora">How to book tents?</h3>
              <p className="text-gray-300 leading-relaxed">
                Official bookings for the Tent City are available through the official website. It gets sold out months in advance for full moon dates, so early booking is recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
