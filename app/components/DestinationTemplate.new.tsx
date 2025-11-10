import {
  getFont,
  getTextColor,
  getBgColor,
  getBorderColor,
  getTextSize,
  theme,
} from "@/app/theme/config";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronDown, ArrowLeft } from "lucide-react";

"use client";

export default function DestinationTemplate({
  title,
  description,
  image,
  facts,
  mapUrl,
  gallery,
  variant = "light",
}: {
  title: string;
  description: React.ReactNode;
  image: string;
  facts?: string[];
  mapUrl?: string;
  gallery?: { src: string; caption?: string }[];
  variant?: "light" | "main";
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
  const opacity = Math.max(1 - offsetY / 800, 0.85);

  return (
    <main className={`min-h-screen overflow-x-hidden ${getBgColor("main")} ${getTextColor("primary")}`}>
      {/* Navigation Header */}
      <nav className={`sticky top-0 z-30 ${getBgColor("nav")} ${getBorderColor("light")} shadow-sm`}>
        <div className={theme.spacing.container}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/destinations"
                className={`flex items-center gap-2 ${getFont("body")} font-medium transition-colors px-3 py-2 rounded-lg ${getTextColor("secondary")} ${theme.colors.text.linkHover}`}
              >
                <ArrowLeft size={18} />
                All Destinations
              </Link>
              <span className={theme.colors.text.muted}>|</span>
              <Link
                href="/"
                className={`${getFont("body")} transition-colors px-3 py-2 rounded-lg ${getTextColor("secondary")} ${theme.colors.text.linkHover}`}
              >
                Home
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 text-sm ${getFont("body")} ${getTextColor("secondary")}`}>
                <span>📍</span>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[65vh] overflow-hidden rounded-b-[2rem] shadow-lg">
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
            className="object-cover scale-105 brightness-95 contrast-105"
            priority
            quality={95}
            onError={() => {
              setImageSrc("/file.svg");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </section>

      {/* Main Content */}
      <section className={`max-w-5xl mx-auto px-6 py-16 mt-8 ${theme.spacing.container}`}>
        <div className="prose prose-lg max-w-none">
          {description}
        </div>

        {/* Facts Section */}
        {facts && facts.length > 0 && (
          <div className={`mt-12 p-6 rounded-xl ${getBgColor("card")} ${getBorderColor("DEFAULT")} shadow-sm`}>
            <h3 className={`${getFont("heading")} ${getTextSize("h3")} mb-4`}>Quick Facts</h3>
            <ul className="grid gap-3">
              {facts.map((fact, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Map Section */}
        {mapUrl && (
          <div className="mt-12">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {gallery && gallery.length > 0 && (
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={() => openGallery(i)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${theme.effects.shadow.DEFAULT} hover:${theme.effects.shadow.lg} ${theme.effects.transition}`}
                >
                  <Image
                    src={item.src}
                    alt={item.caption || title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Lightbox for Gallery */}
      {gallery && (
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={gallery.map((item) => ({
            src: item.src,
            alt: item.caption || title,
          }))}
        />
      )}
    </main>
  );
}