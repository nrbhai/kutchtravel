"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/app/components/Navigation";

type CraftProps = {
  craft: {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
    imageFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": craft.title,
    "description": craft.subtitle,
    "image": `https://kutchtravel.com${craft.image}`,
    "author": {
      "@type": "Organization",
      "name": "Kutch Travel Guide"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kutch Travel Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kutchtravel.com/icon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kutchtravel.com/crafts/${craft.slug}`
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-rose-50 selection:bg-rose-200 selection:text-rose-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation variant="solid" />

      {/* Back Button Bar */}
      <div className="sticky top-[64px] z-40 bg-white/80 backdrop-blur-md border-b border-rose-100 py-3">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#culture" className="inline-flex items-center gap-2 text-rose-700 hover:text-rose-900 font-medium transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Culture & Crafts
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden leading-none">
        <Image
          src={craft.image}
          alt={craft.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold font-sora mb-4 tracking-tight text-orange-50"
            >
              {craft.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-light tracking-wide text-rose-100"
            >
              {craft.subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {craft.sections.map((section, index) => {
          const isEven = index % 2 === 0;
          // Fallback to hero image if gallery is empty, or cycle gallery
          const imageSrc = craft.gallery.length > 0 
            ? craft.gallery[index % craft.gallery.length].src 
            : craft.image;

          return (
            <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
              
              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <div className="inline-block relative">
                  <span className="absolute -inset-1 bg-rose-100 transform -skew-x-12" />
                  <h2 className="relative text-3xl md:text-4xl font-bold font-sora text-rose-900">{section.heading}</h2>
                </div>
                
                {section.content && (
                  <p className="text-lg text-gray-700 leading-relaxed font-space-grotesk" dangerouslySetInnerHTML={{ __html: section.content }} />
                )}
                
                {section.list && (
                  <ul className="grid grid-cols-1 gap-3 mt-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <span className="h-2 w-2 rounded-full bg-rose-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className={`relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02] ${isEven ? 'rotate-2' : '-rotate-2'}`}>
                  <Image
                    src={imageSrc}
                    alt={section.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Decorative dots */}
                <div className={`absolute -z-10 h-32 w-32 opacity-20 ${isEven ? '-bottom-10 -right-10' : '-top-10 -left-10'}`}>
                   <div className="grid grid-cols-4 gap-2">
                     {[...Array(16)].map((_, i) => (
                       <div key={i} className="h-2 w-2 rounded-full bg-rose-500" />
                     ))}
                   </div>
                </div>
              </div>

            </div>
          );
        })}

        {/* Facts Section */}
        <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50 rounded-3xl p-8 md:p-12 text-gray-900 shadow-xl relative overflow-hidden border border-rose-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold font-sora mb-8 text-rose-900">Did You Know?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                     {craft.facts.map((fact, i) => (
                        <div key={i} className="flex gap-4">
                            <span className="text-2xl">✨</span>
                            <p className="font-medium text-lg">{fact}</p>
                        </div>
                     ))}
                </div>
            </div>
        </div>
        
        {/* Gallery Grid */}
        <section className="py-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-rose-900 text-center font-sora">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {craft.gallery.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 border border-rose-100"
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

        {/* Footer Line */}
        <div className="border-t border-rose-200/50 pt-8 text-center pb-8">
             <p className="text-gray-800 text-sm font-medium">Designed with ❤️ for travelers seeking authentic Kutch</p>
        </div>
      </div>

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
              className="relative w-full h-full max-w-[1600px] max-h-[90vh] flex flex-col items-center justify-center"
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
                  <p className="text-white text-center text-sm md:text-base font-inter">
                    {craft.gallery[selectedImage].caption}
                  </p>
                </div>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-inter bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {craft.gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
