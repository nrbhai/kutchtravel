"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import type { HiddenGem } from "../hidden-gems/data/index";

interface HiddenGemTemplateProps {
  gem: HiddenGem;
}

export default function HiddenGemTemplate({ gem }: HiddenGemTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex">
              <Link href="/hidden-gems" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Hidden Gems</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative w-full">
        <div className="relative h-[40vh] md:h-[45vh] lg:h-[50vh] w-full overflow-hidden">
          <Image
            src={gem.image}
            alt={gem.title}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
            className="hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 w-full">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sora text-white tracking-tight mb-4 whitespace-nowrap overflow-hidden text-ellipsis"
                style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.6)' }}
              >
                {gem.title}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-3 text-white/90 flex-wrap"
              >
                <span className="text-xl">🏴‍☠️</span>
                <span className="text-lg md:text-xl font-poppins font-medium">{gem.discoveryLevel || 'Hidden Gem'} • {gem.type}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-8">
          {gem.sections.map((section, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-900">{section.heading}</h2>
              {section.content && (
                <p className="leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: section.content }} />
              )}
              {section.list && (
                <ul className="list-none space-y-4 mt-4">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Quick Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gem.facts.map((fact, index) => {
            const colors = [
              { bg: "bg-blue-50", text: "text-blue-800", border: "border-blue-200" },
              { bg: "bg-purple-50", text: "text-purple-800", border: "border-purple-200" },
              { bg: "bg-emerald-50", text: "text-emerald-800", border: "border-emerald-200" },
              { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200" },
              { bg: "bg-rose-50", text: "text-rose-800", border: "border-rose-200" },
              { bg: "bg-indigo-50", text: "text-indigo-800", border: "border-indigo-200" },
              { bg: "bg-cyan-50", text: "text-cyan-800", border: "border-cyan-200" },
              { bg: "bg-teal-50", text: "text-teal-800", border: "border-teal-200" },
            ];
            const colorSet = colors[index % colors.length];
            
            return (
              <div 
                key={index} 
                className={`p-4 rounded-xl border ${colorSet.bg} ${colorSet.border} transition-all duration-300 hover:shadow-lg`}
              >
                <p className={`${colorSet.text} text-sm font-medium leading-relaxed`}>{fact}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gem.gallery.map((item, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  Click to enlarge
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {selectedImage > 0 && (
              <button
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-[101]"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {selectedImage < gem.gallery.length - 1 && (
              <button
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-[101]"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gem.gallery[selectedImage].src}
                alt={gem.gallery[selectedImage].caption}
                fill
                className="object-contain"
                sizes="100vw"
              />
              {gem.gallery[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                  <p className="text-sm md:text-base font-poppins">
                    {gem.gallery[selectedImage].caption}
                  </p>
                </div>
              )}
            </motion.div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-poppins">
              {selectedImage + 1} / {gem.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">Location & Nearby Cities</h2>
        <p className="text-gray-700 mb-6 text-lg">Explore the location and judge distances to nearby cities like Bhuj, Gandhidham, and other major destinations in Kutch.</p>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-2">
          <iframe
            src={gem.mapUrl.replace(/!4f[\d.]+/i, '!4f9.5').replace(/!2i\d+!2i\d+!4f[\d.]+/i, '!2i1024!2i768!4f9.5')}
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${gem.title} and nearby cities`}
          />
        </div>
      </section>
    </main>
  );
}
