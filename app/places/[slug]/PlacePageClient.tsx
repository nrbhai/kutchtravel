"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ArrowLeft, ChevronDown } from 'lucide-react';

interface PlacePageClientProps {
  place: any;
}

export default function PlacePageClient({ place }: PlacePageClientProps) {
  const [index, setIndex] = useState(-1);
  const [offsetY, setOffsetY] = useState(0);
  const [imageSrc, setImageSrc] = useState(place.image);
  
  const openGallery = (i = 0) => setIndex(i);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = offsetY * 0.3;
  const opacity = Math.max(1 - offsetY / 800, 0.85);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-white/20/50 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href={`/destinations/${place.parentDestination}`}
                className="flex items-center gap-2 text-purple-300 hover:text-purple-300 font-inter font-medium transition-colors hover:bg-purple-500/20 px-3 py-2 rounded-lg"
              >
                <ArrowLeft size={18} />
                Back to {place.parentDestination.charAt(0).toUpperCase() + place.parentDestination.slice(1)}
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/destinations" className="text-purple-100 hover:text-purple-100 font-inter transition-colors hover:bg-white/10 backdrop-blur-xl px-3 py-2 rounded-lg">
                All Destinations
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/" className="text-purple-100 hover:text-purple-100 font-inter transition-colors hover:bg-white/10 backdrop-blur-xl px-3 py-2 rounded-lg">
                Home
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-purple-200 font-inter">
                <span>📍</span>
                <span>{place.title}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative w-full h-[60vh] md:h-[65vh] overflow-hidden rounded-b-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        <motion.div
          style={{
            transform: `translateY(${translateY}px) scale(1.03)`,
            opacity,
          }}
          className="absolute inset-0"
        >
          <Image
            src={imageSrc}
            alt={place.title}
            fill
            className="object-cover scale-105 brightness-110 contrast-125 saturate-[1.25] transition-transform duration-700 ease-out"
            priority
            quality={95}
            onError={() => {
              setImageSrc("/file.svg");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 120px 200px -80px rgba(0,0,0,0.2)" }}
          />
        </motion.div>

        {/* Title and Scroll Arrow */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-inter font-black mb-4"
            style={{ 
              color: '#E5E5E5', 
              textShadow: '1px 1px 0px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.3), 3px 3px 6px rgba(0,0,0,0.2)' 
            }}
          >
            {place.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-inter font-medium mb-6"
            style={{ 
              color: '#D1D5DB', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)' 
            }}
          >
            {place.shortDescription}
          </motion.p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)] mb-6" />

          {/* Animated scroll-down arrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 flex flex-col items-center space-y-1"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              style={{
                opacity: Math.max(1 - offsetY / 150, 0),
              }}
            >
              <ChevronDown
                size={42}
                className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />
            </motion.div>
            <motion.span
              style={{
                opacity: Math.max(1 - offsetY / 150, 0),
              }}
              className="text-sm text-cyan-300 font-inter font-medium tracking-wider"
            >
              Scroll Down
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 bg-white/70 backdrop-blur-sm rounded-t-3xl mt-8 shadow-lg border border-white/50">
        
        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-purple-400/50 shadow-sm backdrop-blur-sm"
          >
            <h3 className="text-xl font-inter font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Location & Access
            </h3>
            <div className="space-y-2 text-purple-100 font-inter">
              <p><strong>Location:</strong> {place.location}</p>
              {place.distanceFromBhuj && (
                <p><strong>From Bhuj:</strong> {place.distanceFromBhuj}</p>
              )}
              {place.distanceFromMandvi && (
                <p><strong>From Mandvi:</strong> {place.distanceFromMandvi}</p>
              )}
              {place.coordinates && (
                <p><strong>Coordinates:</strong> {place.coordinates}</p>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200/50 shadow-sm backdrop-blur-sm"
          >
            <h3 className="text-xl font-inter font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Visit Information
            </h3>
            <div className="space-y-2 text-purple-100 font-inter">
              <p><strong>Best Time:</strong> {place.bestTimeToVisit}</p>
              <p><strong>How to Reach:</strong> {place.howToReach}</p>
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200/50 shadow-sm backdrop-blur-sm mb-12"
        >
          <h2 className="text-2xl font-inter font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            About This Place
          </h2>
          <div className="text-lg leading-relaxed font-inter text-white">
            {place.significance}
          </div>
        </motion.div>

        {/* Photo Gallery */}
        {place.gallery && place.gallery.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 border-l-4 border-gradient-to-b from-purple-500 to-pink-500 pl-3">
                Photo Gallery
              </h2>
              <button
                onClick={() => openGallery(0)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-inter font-medium rounded-md shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                aria-label="Open full gallery"
              >
                View Gallery
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[300px]">
              {place.gallery.map((photo: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openGallery(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openGallery(index);
                  }}
                  role="button"
                  tabIndex={0}
                  className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    index === 0
                      ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2"
                      : index % 7 === 0
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
                    <Image
                      src={photo.src}
                      alt={`${place.title} photo ${index + 1}`}
                      fill
                      className="object-cover group-hover:brightness-90 transition-all duration-300"
                    />
                  </div>

                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-inter font-medium py-3 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.caption}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <Lightbox
              open={index >= 0}
              close={() => setIndex(-1)}
              slides={place.gallery.map((item: any) => ({
                src: item.src,
                description: item.caption,
              }))}
              index={index}
              on={{
                view: ({ index: current }) => setIndex(current),
              }}
            />
          </motion.div>
        )}

        {/* Map Section */}
        {place.mapUrl && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 border-l-4 border-gradient-to-b from-blue-500 to-indigo-500 pl-3 mb-8">
              Location
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/50">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-purple-400/50">
                <h3 className="text-lg font-inter font-semibold text-white">Find {place.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={place.directMapUrl || place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-300 hover:text-purple-300 font-inter font-medium hover:underline transition-colors"
                  >
                    Open in Maps
                  </a>
                  {place.coordinates && (
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(place.coordinates!);
                        } catch (err) {
                          // ignore clipboard errors
                        }
                      }}
                      className="text-sm text-purple-100 hover:text-white font-inter transition-colors"
                      aria-label="Copy coordinates"
                    >
                      Copy Coordinates
                    </button>
                  )}
                </div>
              </div>
              <div className="w-full h-80">
                <iframe
                  src={place.mapUrl}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                  title={`Map of ${place.title}`}
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}

      </section>
    </main>
  );
}