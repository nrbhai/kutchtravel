"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionCard from "@/app/components/SectionCard";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { theme } from "@/app/theme/config";

type Props = {
  title: string;
  description: React.ReactNode;
  image: string;
  facts: string[];
  mapUrl: string;
  variant?: string;
  gallery: {
    src: string;
    caption: string;
  }[];
};

export default function DestinationTemplate({
  title,
  description,
  image,
  facts,
  mapUrl,
  gallery,
  variant = 'main'
}: Props) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex">
              <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium">
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
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

      {/* Hero Section - Immersive Image */}
      <section className="relative w-full">
        {/* Hero Image Container */}
        <div className="relative h-[50vh] md:h-[65vh] lg:h-[75vh] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
            className="hover:scale-105 transition-transform duration-[2000ms]"
          />
          {/* Enhanced Gradient Overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60"></div>
          
          {/* Title Overlay on Image */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sora text-white tracking-tight mb-4"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                >
                  {title}
                </h1>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="text-xl">📍</span>
                  <span className="text-lg md:text-xl font-inter font-medium tracking-wide">Kutch, Gujarat</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {description}
      </div>

      {/* Quick Facts */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Quick Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {facts.map((fact, index) => {
            // Array of color combinations
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
            // Get color set based on index
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

      {/* Gallery */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((item, index) => (
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
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  Click to enlarge
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
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

            {/* Next Button */}
            {selectedImage < gallery.length - 1 && (
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

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[selectedImage].src}
                alt={gallery[selectedImage].caption}
                fill
                className="object-contain"
                sizes="100vw"
              />
              {/* Caption */}
              {gallery[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                  <p className="text-sm md:text-base font-inter">
                    {gallery[selectedImage].caption}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-inter">
              {selectedImage + 1} / {gallery.length}
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
            src={mapUrl.replace(/!4f[\d.]+/i, '!4f9.5').replace(/!2i\d+!2i\d+!4f[\d.]+/i, '!2i1024!2i768!4f9.5')}
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${title} and nearby cities`}
          />
        </div>
      </section>
    </main>
  );
}