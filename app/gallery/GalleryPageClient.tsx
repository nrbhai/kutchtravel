"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, X, Filter, Share2, Camera, ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "../components/Navigation";
import MetallicHeading from "../components/MetallicHeading";
import GoldenFooter from "../components/GoldenFooter";
import { galleryImages, galleryCategories, GalleryItem } from "./GalleryData";

export default function GalleryPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleShare = async (image: GalleryItem) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Kutch Travel Gallery',
          text: `Check out this photo of ${image.caption} on Kutch Travel!`,
          url: window.location.href
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: copy link
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white selection:bg-amber-500/30 selection:text-amber-200">
      <Navigation />

      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm font-medium mb-6">
              <Camera className="w-4 h-4" />
              <span className="uppercase tracking-wider">Visual Journey</span>
            </div>
            
            <MetallicHeading 
              text="Capturing the Soul of Kutch"
              as="h1"
              variant="gold"
              className="text-5xl md:text-7xl font-bold font-sora mb-6"
            />
            
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Explore stunning original photos of Kutch — from the endless White Rann to the pristine Mandvi coast, majestic palaces, and hidden wildlife. Every photo here highlights the diversity of Kutch’s beauty.
            </p>
          </motion.div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-20 z-30 py-4 bg-gray-950/80 backdrop-blur-md border-y border-white/5 -mx-4 px-4 md:mx-0 md:px-0 md:rounded-2xl md:border">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar max-w-full">
            <Filter className="w-5 h-5 text-amber-500 mr-2 hidden md:block" />
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer bg-gray-900 border border-white/10 hover:border-amber-500/50 transition-colors"
                onClick={() => setLightboxImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 8 ? "eager" : "lazy"}
                  priority={index < 4}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">{image.category}</p>
                    <h3 className="text-white font-sora font-semibold text-lg leading-tight mb-2">{image.caption}</h3>
                    
                    <div className="flex items-center gap-4 text-gray-400 text-xs">
                      {image.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{image.location}</span>
                        </div>
                      )}
                      {image.date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{image.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile Caption (Visible by default on touch, subtle gradient) */ }
                 <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent md:hidden pointer-events-none"></div>
                 <div className="absolute bottom-3 left-3 md:hidden">
                    <p className="text-white text-sm font-medium drop-shadow-md">{image.caption}</p>
                 </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>No images found in this category yet.</p>
          </div>
        )}

        {/* Call to Action */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 to-amber-800 p-8 md:p-16 text-center">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold font-sora text-white">Inspired to Visit?</h2>
                <p className="text-amber-100 text-lg">
                    Turn these pictures into memories. Plan your perfect Kutch trip today with our comprehensive guides.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link href="/destinations" className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                        Explore Destinations <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/plan" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                        View Itineraries
                    </Link>
                </div>
            </div>
        </section>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-[110]"
            >
                <X className="w-8 h-8" />
            </button>

            <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               className="relative max-w-7xl max-h-[90vh] flex flex-col items-center"
               onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-auto h-auto max-w-full max-h-[80vh] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                    <Image
                        src={lightboxImage.src}
                        alt={lightboxImage.alt}
                        width={1200}
                        height={900}
                        className="object-contain max-h-[80vh] w-auto"
                        priority
                    />
                </div>
                
                <div className="mt-6 text-center space-y-2 max-w-2xl px-4">
                    <div className="flex items-center justify-center gap-3 text-amber-400 text-sm font-medium tracking-wide uppercase">
                        <span>{lightboxImage.category}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {lightboxImage.location}
                        </div>
                    </div>
                    <h3 className="text-2xl text-white font-sora font-semibold">{lightboxImage.caption}</h3>
                    <p className="text-gray-400 text-sm">{lightboxImage.alt}</p>
                    
                    <button 
                        onClick={() => handleShare(lightboxImage)}
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mt-4 hover:underline transition-all"
                    >
                        <Share2 className="w-4 h-4" /> Share Photo
                    </button>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <GoldenFooter />
    </main>
  );
}
