"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

type CraftProps = {
  craft: {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
    icon: string;
    category: string;
    sections: {
      heading: string;
      content?: string;
      list?: string[];
    }[];
    facts: string[];
    artisanInfo?: {
      villages: string[];
      keyArtisans?: string[];
      workshops?: string;
    };
    gallery: {
      src: string;
      caption: string;
    }[];
  };
};

export default function CraftTemplate({ craft }: CraftProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage < craft.gallery.length - 1) {
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
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-amber-50/50 via-orange-50/50 to-rose-50/50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex">
              <Link href="/#culture" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Culture & Crafts</span>
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

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[45vh] md:h-[50vh] w-full overflow-hidden">
          <Image
            src={craft.image}
            alt={craft.title}
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-4"
              >
                <span className="text-5xl">{craft.icon}</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                  {craft.category}
                </span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sora text-white tracking-tight mb-3 leading-tight"
                style={{ textShadow: "2px 4px 12px rgba(0,0,0,0.7)" }}
              >
                {craft.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 font-poppins font-medium"
              >
                {craft.subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-6">
          {craft.sections.map((section, index) => {
            const sectionColors = [
              { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-400" },
              { bg: "bg-orange-50", text: "text-orange-900", border: "border-orange-400" },
              { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-400" },
              { bg: "bg-red-50", text: "text-red-900", border: "border-red-400" },
              { bg: "bg-yellow-50", text: "text-yellow-900", border: "border-yellow-400" },
              { bg: "bg-pink-50", text: "text-pink-900", border: "border-pink-400" },
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

      {/* Artisan Information */}
      {craft.artisanInfo && (
        <div className="max-w-6xl mx-auto px-6 pb-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg border-2 border-indigo-300">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">👨‍🎨</span>
              Artisan Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {craft.artisanInfo.villages && craft.artisanInfo.villages.length > 0 && (
                <div>
                  <h4 className="font-bold text-indigo-800 mb-3 text-lg">Villages & Centers</h4>
                  <ul className="space-y-2">
                    {craft.artisanInfo.villages.map((village, idx) => (
                      <li key={idx} className="text-indigo-700 flex items-start gap-2">
                        <span className="mt-1">📍</span>
                        <span>{village}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {craft.artisanInfo.workshops && (
                <div>
                  <h4 className="font-bold text-indigo-800 mb-3 text-lg">Workshop Information</h4>
                  <p className="text-indigo-700">{craft.artisanInfo.workshops}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Quick Facts */}
      <section className="max-w-6xl mx-auto px-6 py-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Quick Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {craft.facts.map((fact, index) => {
            const colors = [
              { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-300", shadow: "hover:shadow-amber-200/50" },
              { bg: "bg-orange-50", text: "text-orange-900", border: "border-orange-300", shadow: "hover:shadow-orange-200/50" },
              { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-300", shadow: "hover:shadow-rose-200/50" },
              { bg: "bg-red-50", text: "text-red-900", border: "border-red-300", shadow: "hover:shadow-red-200/50" },
              { bg: "bg-yellow-50", text: "text-yellow-900", border: "border-yellow-300", shadow: "hover:shadow-yellow-200/50" },
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
      <section className="max-w-6xl mx-auto px-6 py-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {craft.gallery.map((item, index) => (
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

            {selectedImage < craft.gallery.length - 1 && (
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
                  src={craft.gallery[selectedImage].src}
                  alt={craft.gallery[selectedImage].caption}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {craft.gallery[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-center text-sm md:text-base font-poppins">
                    {craft.gallery[selectedImage].caption}
                  </p>
                </div>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-poppins bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {craft.gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
