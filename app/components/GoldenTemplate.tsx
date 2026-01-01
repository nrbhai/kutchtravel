"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ExternalLink, MapPin, Sparkles, Phone, Globe, Clock, Info, AlertTriangle } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import MetallicHeading from "@/app/components/MetallicHeading";
import ShortsGallery from "@/app/components/ShortsGallery";
import GoldenFooter from "@/app/components/GoldenFooter";
import type { Destination } from "@/app/destinations/data";
import type { HiddenGem } from "@/app/hidden-gems/data";

type Props = {
  data: Destination | HiddenGem;
};

// Type guard to check if data is HiddenGem
function isHiddenGem(data: any): data is HiddenGem {
  return 'difficulty' in data;
}

export default function GoldenTemplate({ data }: Props) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const isGem = isHiddenGem(data);
  const backLink = isGem ? "/hidden-gems" : "/destinations";
  const backText = isGem ? "Back to Hidden Gems" : "Back to Destinations";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gray-950 text-white selection:bg-amber-500/30 selection:text-amber-200">
      <Navigation />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-yellow-600/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/2 w-[480px] h-[480px] bg-orange-600/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Contextual Navigation Bar */}
      <div className="bg-black/80 backdrop-blur-md border-b border-white/10 py-3 sticky top-[64px] z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={backLink} className="inline-flex items-center gap-2 text-gray-200 hover:text-amber-400 text-sm font-medium transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{backText}</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[85vh]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-950"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-2 flex items-center justify-center gap-3">
                 <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-500/50"></div>
                 <span className="text-amber-400 text-lg md:text-xl font-sora font-medium tracking-[0.3em] uppercase drop-shadow-md">
                   {/* Dynamic Category/Eyebrow Text */}
                    {isGem ? (
                         data.type || data.discoveryLevel || "Hidden Gem"
                    ) : (
                         data.sections.find(s => s.heading === "Category")?.content || "Heritage City"
                    )}
                 </span>
                 <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-500/50"></div>
              </div>
              <MetallicHeading 
                text={data.title.split(' — ')[0]} 
                as="h1"
                variant="gold"
                className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-sora mb-6"
              />
              <p className="text-xl md:text-2xl text-white font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                {/* Try to extract subtitle from title after mdash, or use a default */}
                 {data.title.includes('—') ? data.title.split('—')[1].trim() : (isGem ? "Uncover the Secret" : "The Cultural Heart of Kutch")}
              </p>

                {/* Hidden Gem Badges */}
                {isGem && (
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {data.difficulty && (
                             <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-200">
                                Difficulty: {data.difficulty}
                             </span>
                        )}
                         {data.bestTime && (
                             <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-200">
                                Best Time: {data.bestTime.split('.')[0]}
                             </span>
                        )}
                    </div>
                )}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-200/60 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
             </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 space-y-32">
        
        {/* Quick Facts Grid */}
        <section>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {data.facts.map((fact, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="h-full flex flex-col justify-between gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-black font-bold text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-100 font-medium leading-relaxed group-hover:text-white transition-colors">
                    {fact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Warnings for Hidden Gems */}
        {isGem && data.warnings && data.warnings.length > 0 && (
             <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-red-900/20 border border-red-500/30 p-6 rounded-2xl"
             >
                 <div className="flex items-center gap-3 mb-4">
                     <AlertTriangle className="text-red-400 w-6 h-6" />
                     <h3 className="text-xl font-bold text-red-200">Important Advisories</h3>
                 </div>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     {data.warnings.map((w, i) => (
                         <li key={i} className="flex gap-2 text-red-100/80 text-sm">
                             <span className="text-red-500">•</span> {w}
                         </li>
                     ))}
                 </ul>
             </motion.section>
        )}

        {/* Dynamic Sections */}
        {data.sections.map((section, index) => {
          if (section.heading === "Category") return null;

          const isEven = index % 2 === 0;
          const isAccommodation = section.heading.toLowerCase().includes('accommodation') || 
                                section.heading.toLowerCase().includes('where to stay');

          return (
            <motion.section 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side */}
              {section.image && (
                <div className="w-full lg:w-1/2">
                   <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-900/10 group`}>
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
                      
                      {/* Decorative Golden Frame */}
                      <div className="absolute inset-4 border border-white/20 rounded-2xl opacity-50 group-hover:inset-6 transition-all duration-500"></div>
                   </div>
                </div>
              )}

              {/* Content Side */}
              <div className={`w-full ${section.image ? 'lg:w-1/2' : 'lg:w-full'} space-y-6`}>
                <MetallicHeading 
                  text={section.heading}
                  as="h2"
                  variant="gold"
                  className="text-3xl md:text-4xl font-bold font-sora"
                />
                
                {section.content && (
                  <div className="text-gray-200 text-lg leading-relaxed font-light [&_strong]:text-white [&_strong]:font-semibold" dangerouslySetInnerHTML={{ __html: section.content }} />
                )}

                {section.list && (
                  <div className={`mt-8 ${
                    (section.heading === "Places of Interest" || section.heading === "Nearby Destinations" || section.heading === "Food & Crafts" || section.list.length > 4)
                      ? "grid grid-cols-1 md:grid-cols-2 gap-4" 
                      : "grid grid-cols-1 gap-4"
                  }`}>
                    {section.list.map((item, idx) => {
                      // Parse the item string to extract title (<b>...</b>) and description
                      // Logic: title matches <b>...</b>, rest is description
                      // Handles: "<b>Title:</b> Desc", "<b>Title</b> Desc", "<b>Link</b> Desc"
                      
                      const parts = item.split('</b>');
                      const titleBlock = parts[0] || "";
                      const descBlock = parts.slice(1).join('</b>') || "";

                      // Clean Description
                      const description = descBlock.replace(/^[\s:-]+/, '').trim();

                      // Extract HREF from titleBlock if present
                      const hrefMatch = titleBlock.match(/href=['"](.*?)['"]/);
                      const href = hrefMatch ? hrefMatch[1] : null;

                      // Extract Title Text
                      const anchorContentMatch = titleBlock.match(/<a[^>]*>(.*?)<\/a>/);
                      let titleText = anchorContentMatch ? anchorContentMatch[1] : "";
                      if (!titleText) {
                         // Fallback for non-link titles
                         titleText = titleBlock.replace(/<[^>]*>/g, '');
                      }
                      titleText = titleText.replace(/:$/, '').trim();

                      // --- RENDER LOGIC ---

                      // 1. Nearby Destinations (Interactive Cards)
                      if (section.heading === "Nearby Destinations" && href) {
                        return (
                          <Link href={href} key={idx} className="block group">
                            <motion.div 
                              whileHover={{ y: -5, scale: 1.02 }}
                              className="relative p-5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                            >
                              <div className="flex justify-between items-start gap-4">
                                <div>
                                  <h3 className="font-sora font-semibold text-lg text-amber-400 mb-2 group-hover:text-amber-300 transition-colors flex items-center gap-2">
                                    {titleText}
                                    <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                  </h3>
                                  <p className="text-gray-200 text-sm font-light leading-relaxed">
                                    {description}
                                  </p>
                                </div>
                                <div className="hidden sm:flex h-8 w-8 rounded-full bg-white/10 items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
                                  <span className="text-xl">→</span>
                                </div>
                              </div>
                              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-amber-500/30 transition-all"></div>
                            </motion.div>
                          </Link>
                        );
                      }

                       // 2. Places of Interest (Card with Icon)
                      if (section.heading === "Places of Interest") {
                          // Check if it's a link (some data might link these too)
                          const Wrapper = href ? Link : motion.div;
                          const wrapperProps = href ? { href, className:"block group" } : { className: "flex gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-amber-500/30 hover:from-white/10 transition-all group", whileHover: { x: 6 } };

                          if (href) {
                              return (
                                  <Link href={href} key={idx} className="block group">
                                     <motion.div 
                                        whileHover={{ x: 6 }}
                                        className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-amber-500/30 hover:from-white/10 transition-all group"
                                     >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-amber-950/50 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-amber-400 font-sora font-semibold text-lg mb-1">{titleText}</h3>
                                            <p className="text-gray-200 font-light text-sm leading-relaxed border-l-2 border-white/10 pl-3 group-hover:border-amber-500/30 transition-colors">
                                                {description}
                                            </p>
                                        </div>
                                     </motion.div>
                                  </Link>
                              )
                          }

                         return (
                          <motion.div 
                            key={idx} 
                            whileHover={{ x: 6 }}
                            className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-amber-500/30 hover:from-white/10 transition-all group"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-10 h-10 rounded-full bg-amber-950/50 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                                <MapPin className="w-5 h-5" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-amber-400 font-sora font-semibold text-lg mb-1">{titleText}</h3>
                              <p className="text-gray-200 font-light text-sm leading-relaxed border-l-2 border-white/10 pl-3 group-hover:border-amber-500/30 transition-colors">
                                {description}
                              </p>
                            </div>
                          </motion.div>
                        );
                      }
                      
                      // 3. Food & Crafts (Compact Cards)
                      if (section.heading === "Food & Crafts") {
                        return (
                          <motion.div 
                            key={idx}
                            whileHover={{ y: -4 }}
                            className="relative overflow-hidden p-5 rounded-2xl bg-gray-900/50 border border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-amber-500/5 transition-all group"
                          >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                            <h3 className="font-sora font-bold text-lg text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">
                              {titleText}
                            </h3>
                            <p className="text-gray-200 text-sm font-light leading-relaxed">
                              {description}
                            </p>
                            <div className="mt-3 flex justify-end">
                                <Sparkles className="w-4 h-4 text-white/20 group-hover:text-amber-400/50 transition-colors" />
                            </div>
                          </motion.div>
                        );
                      }

                      // 4. Default List Item
                      return (
                        <div key={idx} className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors">
                          <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                          <div className="text-sm">
                            {titleText ? (
                              <span className="leading-relaxed text-gray-200">
                                <strong className="text-amber-400 font-semibold text-base">{titleText}</strong>{" "}
                                {description}
                              </span>
                            ) : (
                              <span className="text-gray-200" dangerouslySetInnerHTML={{ __html: item }} />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {isAccommodation && (
                  <a 
                    href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(data.title + ", Gujarat")}&aid=2665264&sb=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
                  >
                    <span>Check Deals on Booking.com</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.section>
          );
        })}

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-12">
            <MetallicHeading 
              text="Gallery"
              as="h2"
              variant="gold"
              className="text-4xl md:text-5xl font-bold font-sora mb-4"
            />
            <p className="text-gray-200">Glimpses of the {isGem ? "hidden gem" : "royal city"}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm border-l-2 border-amber-500 pl-3">{item.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <ShortsGallery destinationSlug={data.slug} />

        {/* Interactive Map */}
        <section className="bg-white/5 rounded-3xl p-2 border border-white/10 shadow-2xl">
          <iframe
            src={data.mapUrl.replace(/!4f[\d.]+/i, '!4f9.5').replace(/!2i\d+!2i\d+!4f[\d.]+/i, '!2i1024!2i768!4f9.5')}
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: '20px', filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </section>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl w-full max-h-[90vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={data.gallery[selectedImage].src}
                alt={data.gallery[selectedImage].caption}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                 <span className="bg-black/50 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium border border-white/10">
                    {data.gallery[selectedImage].caption}
                 </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <GoldenFooter />
    </main>
  );
}
