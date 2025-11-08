"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

type HiddenGemProps = {
  gem: {
    slug: string;
    title: string;
    image: string;
    difficulty: string;
    type: string;
    discoveryLevel: string;
    sections: {
      heading: string;
      color?: string;
      border?: string;
      content?: string;
      list?: string[];
    }[];
    facts: string[];
    mapUrl: string;
    bestTime?: string;
    warnings?: string[];
    gallery: {
      src: string;
      caption: string;
    }[];
  };
};

export default function HiddenGemTemplate({ gem }: HiddenGemProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage < gem.gallery.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex">
              <Link href="/hidden-gems" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Hidden Gems</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Compact */}
      <section className="relative w-full">
        <div className="relative h-[45vh] md:h-[50vh] w-full overflow-hidden">
          <Image
            src={gem.image}
            alt={gem.title}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
            className="hover:scale-105 transition-transform duration-1000"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-10 md:pb-12 w-full">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sora text-white tracking-tight mb-3 leading-tight"
                style={{ textShadow: "2px 4px 12px rgba(0,0,0,0.7)" }}
              >
                {gem.title}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-3 text-white/90 flex-wrap"
              >
                <span className="text-lg">🏴‍☠️</span>
                <span className="text-base md:text-lg font-poppins font-medium">
                  {gem.discoveryLevel} • {gem.type} • {gem.difficulty}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-6">
          {gem.sections.map((section, index) => {
            const sectionColors = [
              { bg: "bg-blue-50", text: "text-blue-900", border: "border-blue-400" },
              { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-400" },
              { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-400" },
              { bg: "bg-purple-50", text: "text-purple-900", border: "border-purple-400" },
              { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-400" },
              { bg: "bg-cyan-50", text: "text-cyan-900", border: "border-cyan-400" },
            ];
            const colorSet = sectionColors[index % sectionColors.length];

            return (
              <section 
                key={index}
                className={`${colorSet.bg} py-8 px-6 rounded-2xl shadow-lg border-2 ${colorSet.border} hover:shadow-xl transition-all duration-300`}
              >
                <h2 className={`text-xl md:text-2xl font-sora font-bold mb-4 ${colorSet.text} pl-4 border-l-4 ${colorSet.border}`}>
                  {section.heading}
                </h2>
                <div className="font-poppins text-slate-800">
                  {section.content && (
                    <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: section.content }} />
                  )}
                  {section.list && (
                    <ul className="list-none space-y-3">
                      {section.list.map((item, itemIndex) => (
                        <li 
                          key={itemIndex} 
                          className="leading-relaxed flex items-start gap-2"
                          dangerouslySetInnerHTML={{ __html: `<span class="text-lg mr-1">•</span>${item}` }}
                        />
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Best Time & Warnings */}
      {(gem.bestTime || (gem.warnings && gem.warnings.length > 0)) && (
        <div className="max-w-6xl mx-auto px-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gem.bestTime && (
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-2xl shadow-lg border-2 border-teal-300">
                <h3 className="text-xl font-bold text-teal-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  Best Time to Visit
                </h3>
                <p className="text-teal-800 font-medium text-lg">{gem.bestTime}</p>
              </div>
            )}
            {gem.warnings && gem.warnings.length > 0 && (
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg border-2 border-orange-300">
                <h3 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Important Warnings
                </h3>
                <ul className="space-y-2">
                  {gem.warnings.map((warning, idx) => (
                    <li key={idx} className="text-orange-800 text-sm flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Facts */}
      <section className="max-w-6xl mx-auto px-6 py-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Quick Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {gem.facts.map((fact, index) => {
            const colors = [
              { bg: "bg-blue-50", text: "text-blue-900", border: "border-blue-300", shadow: "hover:shadow-blue-200/50" },
              { bg: "bg-purple-50", text: "text-purple-900", border: "border-purple-300", shadow: "hover:shadow-purple-200/50" },
              { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-300", shadow: "hover:shadow-emerald-200/50" },
              { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-300", shadow: "hover:shadow-amber-200/50" },
              { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-300", shadow: "hover:shadow-rose-200/50" },
            ];
            const colorSet = colors[index % colors.length];
            
            return (
              <div 
                key={index} 
                className={`p-5 rounded-2xl border-2 ${colorSet.bg} ${colorSet.border} transition-all duration-300 hover:shadow-xl ${colorSet.shadow} hover:scale-[1.02]`}
              >
                <p className={`${colorSet.text} text-sm md:text-base font-medium leading-relaxed`}>{fact}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gem.gallery.map((item, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium line-clamp-2">{item.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 py-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Location & Nearby Cities
        </h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg">
          Explore the location and judge distances to nearby cities like Bhuj, Gandhidham, and other major destinations in Kutch.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 bg-white p-3">
          <iframe
            src={gem.mapUrl.replace(/!4f[\d.]+/g, "!4f9.5").replace(/z=\d+/g, "z=9")}
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${gem.title} and nearby cities`}
          />
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
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>

            {selectedImage > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-[101] bg-black/30 rounded-full p-2 hover:bg-black/50"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {selectedImage < gem.gallery.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-[101] bg-black/30 rounded-full p-2 hover:bg-black/50"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={gem.gallery[selectedImage].src}
                  alt={gem.gallery[selectedImage].caption}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {gem.gallery[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-center text-sm md:text-base font-poppins">
                    {gem.gallery[selectedImage].caption}
                  </p>
                </div>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-poppins bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {gem.gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
