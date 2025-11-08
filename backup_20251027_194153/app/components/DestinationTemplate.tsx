"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronDown, ArrowLeft } from "lucide-react"; // arrow icons

export default function DestinationTemplate({
  title,
  description,
  image,
  facts,
  mapUrl,
  gallery,
}: {
  title: string;
  description: React.ReactNode;
  image: string;
  facts?: string[];
  mapUrl?: string;
  gallery?: { src: string; caption?: string }[];
}) {
  const [index, setIndex] = useState(-1);
  const [offsetY, setOffsetY] = useState(0);
  const [imageSrc, setImageSrc] = useState(image);

  const openGallery = (i = 0) => setIndex(i);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = offsetY * 0.3;
  const opacity = Math.max(1 - offsetY / 800, 0.85); // Less opacity reduction, higher minimum
  // Removed blur effect for sharper images

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700 text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="bg-indigo-900/90 backdrop-blur-sm border-b border-white/10 sticky top-0 z-30 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/destinations" 
                className="flex items-center gap-2 text-purple-300 hover:text-white font-poppins font-medium transition-colors hover:bg-white/10 px-3 py-2 rounded-lg"
              >
                <ArrowLeft size={18} />
                All Destinations
              </Link>
              <span className="text-purple-400">|</span>
              <Link href="/" className="text-purple-200 hover:text-white font-poppins transition-colors hover:bg-white/10 px-3 py-2 rounded-lg">
                Home
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-purple-200 font-poppins">
                <span>📍</span>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax + Cinematic Fade */}
      <section className="relative w-full h-[60vh] md:h-[65vh] overflow-hidden rounded-b-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <motion.div
          style={{
            transform: `translateY(${translateY}px) scale(1.03)`,
            opacity,
          }}
          className="absolute inset-0"
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover scale-105 brightness-90 contrast-110 saturate-[1.1] transition-transform duration-700 ease-out"
            priority
            quality={95}
            onError={() => {
              setImageSrc("/file.svg");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-indigo-900/30 to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 120px 200px -80px rgba(0,0,0,0.4)" }}
          />
        </motion.div>

        {/* Title and Scroll Arrow */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-sora font-black mb-4 holographic"
          >
            {title}
          </motion.h1>
          <div className="w-20 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.8)] mb-6" />

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
                className="text-pink-300 drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]"
              />
            </motion.div>
            <motion.span
              style={{
                opacity: Math.max(1 - offsetY / 150, 0),
              }}
              className="text-sm text-pink-300 font-poppins font-medium tracking-wider"
            >
              Scroll Down
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 bg-white/10 backdrop-blur-xl rounded-t-3xl mt-8 shadow-lg border border-white/20">
        <div className="text-lg leading-relaxed font-inter text-purple-100 mb-10">
          {description}
        </div>

        {facts && (
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20 mb-12 shadow-xl">
            <h2 className="text-xl font-sora font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Quick Facts
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-purple-100 font-poppins">
              {facts.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {mapUrl && (
          <div className="mb-12">
            <div className="flex items-center justify-end gap-3 mb-3">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-300 hover:text-pink-300 font-poppins font-medium hover:underline"
              >
                Open in Maps
              </a>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(mapUrl);
                  } catch (err) {
                    // ignore clipboard errors
                  }
                }}
                className="text-sm text-purple-200 hover:text-white font-poppins"
                aria-label="Copy map URL"
              >
                Copy URL
              </button>
            </div>

            <div className="w-full h-64 rounded-lg overflow-hidden border border-white/20 mb-0 shadow-xl">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>
          </div>
        )}

        {gallery && gallery.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-sora font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 border-l-4 border-gradient-to-b from-purple-500 to-pink-500 pl-3"
              >
                Photo Gallery
              </motion.h2>
              <button
                onClick={() => openGallery(0)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-poppins font-medium rounded-md shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105"
                aria-label="Open full gallery"
              >
                View Gallery
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[300px]">
              {gallery.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openGallery(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openGallery(i);
                  }}
                  role="button"
                  tabIndex={0}
                  className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    i === 0
                      ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2"
                      : i % 7 === 0
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
                    <Image
                      src={item.src}
                      alt={`${title} photo ${i + 1}`}
                      fill
                      className="object-cover group-hover:brightness-90 transition-all duration-300"
                    />
                  </div>

                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-inter font-medium py-3 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.caption}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <Lightbox
              open={index >= 0}
              close={() => setIndex(-1)}
              slides={gallery.map((item) => ({
                src: item.src,
                description: item.caption,
              }))}
              index={index}
              on={{
                view: ({ index: current }) => setIndex(current),
              }}
            />
          </div>
        )}
      </section>
    </main>
  );
}


