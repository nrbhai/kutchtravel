'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Palette, Users, MapPin, Search, ArrowRight, Scissors, Brush, PenTool } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MetallicHeading from '../components/MetallicHeading';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const crafts = [
  {
    title: "Ajrakh Block Printing",
    description: "Complex geometric patterns printed using natural dyes and wooden blocks. A 16-step process that celebrates the harmony of nature.",
    location: "Ajrakhpur & Dhamadka",
    link: "/crafts/ajrakh",
    color: "from-blue-600 to-indigo-800"
  },
  {
    title: "Bandhani Tie-Dye",
    description: "The art of tying thousands of tiny knots to create intricate patterns. Each dot represents a connection to tradition.",
    location: "Bhuj & Anjar",
    link: "/crafts/bandhani",
    color: "from-red-600 to-rose-800"
  },
  {
    title: "Rogan Art",
    description: "Painting on fabric using castor oil and natural pigments. A rare art form practiced by only one family in the world.",
    location: "Nirona Village",
    link: "/crafts/rogan-art",
    color: "from-yellow-500 to-amber-700"
  },
  {
    title: "Kutchi Embroidery",
    description: "Vibrant needlework reflecting the distinct identity of various tribal communities. Mirrors and threads weave stories of life.",
    location: "Hodka, Sumrasar, Bhujodi",
    link: "/crafts/mirror-work",
    color: "from-emerald-600 to-teal-800"
  },
  {
    title: "Leather Craft",
    description: "Marwada artisans transform leather into beautifully stitched and embroidered artifacts using traditional techniques.",
    location: "Hodka & Bhirandiara",
    link: "/crafts/leather-craft",
    color: "from-orange-700 to-amber-900"
  },
  {
    title: "Pottery & Mud Work",
    description: "From cooling water pots to intricate 'Lippan Kaam' (mud mirror art) on walls, earth comes alive in Kutch.",
    location: "Khavda & Bhujodi",
    link: "/crafts/pottery",
    color: "from-stone-600 to-stone-800"
  }
];

const villages = [
  {
    name: "Bhujodi",
    title: "The Weaver's Village",
    desc: "Just 8km from Bhuj, Bhujodi is a living museum of textile art. Meet the Vankar community weavers who create magic on looms.",
    tag: "Weaving"
  },
  {
    name: "Nirona",
    title: "Village of Three Arts",
    desc: "Home to Rogan Art, Copper Bell making, and Lacquer work. A must-visit destination for genuine art lovers.",
    tag: "Multiple Crafts"
  },
  {
    name: "Ajrakhpur",
    title: "Indigo Capital",
    desc: "A village dedicated entirely to the art of Ajrakh block printing, rebuilt after the 2001 earthquake.",
    tag: "Block Print"
  }
];

export default function CultureClient() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-rose-500/30 selection:text-rose-200">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-rose-500/10 to-purple-500/10 backdrop-blur-md border border-rose-500/20 rounded-full mb-8">
              <Palette className="w-5 h-5 text-rose-400" />
              <span className="text-rose-200 font-semibold tracking-wide uppercase text-sm">Living Heritage</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-sora leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-400 to-rose-600">
                Crafted by Hand,
              </span>
              <span className="block text-white">Inspired by Soul</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter font-light max-w-3xl mx-auto leading-relaxed">
              Discover the intricate world of Kutchi craftsmanship, where every thread, stroke, and block print tells a story of generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Craft Grid */}
      <section className="py-24 relative bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-20">
             <MetallicHeading 
                text="Masterpieces of Kutch"
                variant="silver"
                as="h2"
                className="text-4xl md:text-5xl font-black mb-6"
             />
             <p className="text-gray-400 max-w-2xl mx-auto">
               Explore the diverse art forms that put Kutch on the global map of heritage textiles.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crafts.map((craft, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={craft.link} className="block group h-full">
                  <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all h-full flex flex-col hover:-translate-y-2 duration-300">
                    <div className={`h-48 bg-gradient-to-br ${craft.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
                      {/* Decorative Pattern overlay simulation */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
                          {craft.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-3 font-sora group-hover:text-amber-400 transition-colors">
                        {craft.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-1">
                        {craft.description}
                      </p>
                      <div className="flex items-center text-sm font-bold text-gray-300 group-hover:text-white mt-auto">
                        <span>Explore Craft</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Villages Map/Highlight */}
      <section className="py-24 bg-black relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/50 -skew-x-12 transform translate-x-32" />
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-4xl font-bold text-white font-sora mb-8">
                The Artisan Villages
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                To truly understand Kutch, you must walk the dusty lanes of its villages where art is not a hobby, but a way of life.
              </p>

              <div className="space-y-6">
                {villages.map((village, index) => (
                  <div key={index} className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-rose-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white font-sora group-hover:text-rose-400 transition-colors">
                        {village.name}
                      </h3>
                      <span className="text-xs font-bold px-2 py-1 bg-white/10 rounded text-gray-300">
                        {village.tag}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-gray-500 mb-2">{village.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {village.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUp}
               className="relative lg:h-[600px]"
            >
               <div className="relative w-full h-full min-h-[400px]">
                  <div className="absolute top-10 left-10 w-2/3 h-2/3 bg-zinc-800 rounded-3xl border border-white/10 z-10 overflow-hidden transform rotate-[-2deg]">
                     <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 to-black/40"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold">
                        Image: Artisan at Work
                     </div>
                  </div>
                  <div className="absolute bottom-10 right-10 w-2/3 h-2/3 bg-zinc-700 rounded-3xl border border-white/10 z-20 overflow-hidden transform rotate-[2deg] shadow-2xl">
                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black/40"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold">
                        Image: Colorful Textiles
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white font-sora mb-12 text-center">Culture & Craft FAQ</h2>
          
          <div className="space-y-4">
            <details className="group bg-zinc-900 rounded-2xl border border-white/5 open:border-rose-500/30 transition-all">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-white font-sora">Where is the best place to buy handicrafts?</span>
                <span className="transition group-open:rotate-180">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                While Bhuj markets are convenient, visiting villages like Bhujodi (for textiles) and Nirona (for Rogan art) ensures you buy authentic items directly from artisans at fair prices.
              </div>
            </details>
            <details className="group bg-zinc-900 rounded-2xl border border-white/5 open:border-rose-500/30 transition-all">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-white font-sora">Is bargaining acceptable?</span>
                <span className="transition group-open:rotate-180">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                Yes, bargaining is common in local markets. However, when buying directly from artisans in villages, please respect their pricing as it reflects weeks of intricate manual labor.
              </div>
            </details>
            <details className="group bg-zinc-900 rounded-2xl border border-white/5 open:border-rose-500/30 transition-all">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-white font-sora">Can we see the artisans at work?</span>
                <span className="transition group-open:rotate-180">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                Absolutely! Places like Bhujodi and Nirona are welcoming to tourists. Artisans are usually proud to demonstrate their skills. Always ask for permission before taking photos.
              </div>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
