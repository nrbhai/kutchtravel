"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { HiddenGem } from "../hidden-gems/data/index";

const difficultyColors = {
  Easy: "bg-green-100 text-green-800 border-green-200",
  Moderate: "bg-yellow-100 text-yellow-800 border-yellow-200", 
  Challenging: "bg-orange-100 text-orange-800 border-orange-200",
  Expert: "bg-red-100 text-red-800 border-red-200"
};

const typeColors = {
  Nature: "bg-emerald-100 text-emerald-800",
  Heritage: "bg-amber-100 text-amber-800",
  Adventure: "bg-purple-500/30 text-purple-300",
  Culture: "bg-purple-100 text-purple-800",
  Wildlife: "bg-teal-100 text-teal-800"
};

const discoveryIcons = {
  Secret: "🤫",
  "Local Favorite": "⭐", 
  Emerging: "🌟",
  Explorer: "🔍"
};

interface HiddenGemTemplateProps {
  gem: HiddenGem;
}

export default function HiddenGemTemplate({ gem }: HiddenGemTemplateProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700">
      {/* Navigation */}
      <nav className="bg-indigo-900/90 backdrop-blur border-b border-white/20 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/hidden-gems" className="text-purple-300 hover:text-pink-300 font-poppins">
                ← Hidden Gems
              </Link>
              <span className="text-white/40">|</span>
              <Link href="/" className="text-purple-200 hover:text-white font-poppins">
                Home
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 text-sm font-medium rounded-full border ${difficultyColors[gem.difficulty]}`}>
                {gem.difficulty}
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${typeColors[gem.type]}`}>
                {gem.type}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <Image
          src={gem.image}
          alt={gem.title}
          fill
          className="object-cover brightness-105 contrast-110 saturate-110"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{discoveryIcons[gem.discoveryLevel]}</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-poppins font-medium text-pink-300">
                  {gem.discoveryLevel}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-sora font-black mb-4 holographic">{gem.title}</h1>
              <p className="text-xl text-purple-200 max-w-3xl font-poppins">
                {gem.sections[0]?.content}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Warning Section */}
      {gem.warnings && gem.warnings.length > 0 && (
        <div className="bg-red-50 border-b border-red-200">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-start gap-3">
              <div className="text-red-500 text-xl">⚠️</div>
              <div>
                <h3 className="font-bold text-red-800 mb-2">Important Safety Information</h3>
                <ul className="space-y-1">
                  {gem.warnings.map((warning, index) => (
                    <li key={index} className="text-red-700 text-sm">• {warning}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Info Bar */}
      <div className="bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl mb-1">🗺️</div>
              <div className="font-sora font-bold text-purple-300">Difficulty</div>
              <div className="text-sm text-purple-200 font-poppins">{gem.difficulty}</div>
            </div>
            <div>
              <div className="text-2xl mb-1">🎯</div>
              <div className="font-sora font-bold text-purple-300">Type</div>
              <div className="text-sm text-purple-200 font-poppins">{gem.type}</div>
            </div>
            <div>
              <div className="text-2xl mb-1">📅</div>
              <div className="font-sora font-bold text-purple-300">Best Time</div>
              <div className="text-sm text-purple-200 font-poppins">{gem.bestTime}</div>
            </div>
            <div>
              <div className="text-2xl mb-1">📍</div>
              <div className="font-sora font-bold text-purple-300">Discovery Level</div>
              <div className="text-sm text-purple-200 font-poppins">{gem.discoveryLevel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {gem.sections.slice(1).map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 shadow-xl"
                style={{ backgroundColor: section.color }}>
                <h2 className={`text-xl font-sora font-bold mb-4 pl-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 ${section.border}`}>
                  {section.heading}
                </h2>
                {section.content && (
                  <p className="text-purple-100 leading-relaxed font-poppins">{section.content}</p>
                )}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-purple-100 font-poppins" dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 shadow-xl">
              <h3 className="font-sora font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Quick Facts</h3>
              <ul className="space-y-2">
                {gem.facts.map((fact, index) => (
                  <li key={index} className="text-sm text-purple-200 font-poppins flex items-start gap-2">
                    <span className="text-pink-300 text-xs mt-1">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coordinates */}
            {gem.coordinates && (
              <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 shadow-xl">
                <h3 className="font-sora font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Location</h3>
                <div className="space-y-2 text-sm font-poppins text-purple-200">
                  <div>
                    <span className="font-medium text-purple-100">Latitude:</span> {gem.coordinates.lat}
                  </div>
                  <div>
                    <span className="font-medium text-purple-100">Longitude:</span> {gem.coordinates.lng}
                  </div>
                </div>
              </div>
            )}

            {/* Gallery Preview */}
            <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6">
              <h3 className="font-bold text-lg mb-4">Gallery Preview</h3>
              <div className="grid grid-cols-2 gap-2">
                {gem.gallery.slice(0, 4).map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white/10 backdrop-blur-xl py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Location Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={gem.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${gem.title}`}
            />
          </div>
        </div>
      </div>

      {/* Full Gallery */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gem.gallery.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Adventure?</h2>
          <p className="text-lg text-purple-100 mb-8">
            Plan your visit to this hidden gem and discover the authentic side of Kutch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hidden-gems"
              className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Explore More Hidden Gems
            </Link>
            <Link
              href="/destinations"
              className="px-6 py-3 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
            >
              View Popular Destinations
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

