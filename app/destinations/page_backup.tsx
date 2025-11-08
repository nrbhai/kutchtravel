'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Map } from "lucide-react";
import { DESTINATIONS } from "@/app/destinations/data";
import NewKutchMap from "../components/NewKutchMap";
import { useCallback } from "react";

export default function DestinationsPage() {
  const handleRefresh = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation Header */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-inter font-medium transition-colors hover:bg-blue-50 px-3 py-2 rounded-lg"
              >
                <ArrowLeft size={18} />
                Home
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/hidden-gems" className="text-gray-600 hover:text-gray-700 font-inter transition-colors hover:bg-gray-50 px-3 py-2 rounded-lg">
                Hidden Gems
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-inter">
                <Map size={16} />
                <span>All Destinations</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Map */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title and Description */}
            <div className="text-center lg:text-left">
              <h1 className="text-6xl md:text-8xl font-inter font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 drop-shadow-[0_8px_32px_rgba(99,102,241,0.3)] filter brightness-110 contrast-125" 
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 10px rgba(99,102,241,0.2)',
                    WebkitTextStroke: '1px rgba(99,102,241,0.1)'
                  }}>
                Explore Kutch
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto lg:mx-0 mb-6 shadow-lg"></div>
              <p className="text-xl text-gray-700 font-inter max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
                Journey through the incredible landscapes of Kutch — from the mystical White Rann to ancient palaces, 
                vibrant markets, and pristine beaches. Each destination tells a unique story of culture, history, and natural beauty.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 shadow-lg">
                  <span className="text-purple-700 font-inter font-medium text-sm">🏛️ 12+ Heritage Sites</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-lg">
                  <span className="text-blue-700 font-inter font-medium text-sm">🏖️ Pristine Beaches</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200 shadow-lg">
                  <span className="text-indigo-700 font-inter font-medium text-sm">🎨 Cultural Villages</span>
                </div>
              </div>
            </div>

            {/* Right Side - Kutch Map Placeholder */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                    Kutch Region Map
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">�️</span>
                    <div className="flex gap-1">
                      <button className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">Interactive</button>
                      <button className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">Satellite</button>
                    </div>
                  </div>
                </div>
                
                {/* Google Maps Section - Clean and Professional */}
                <div className="relative h-80 bg-white rounded-xl border-2 border-gray-300 overflow-hidden shadow-xl">
                  
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462164.0839159057!2d69.1!3d23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395be2bfce8e1357%3A0xd7f86e4c53b1c7c9!2sKutch%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1729000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>

                  {/* Destination Overlay with Quick Links */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200 max-w-xs">
                    <h3 className="font-bold text-green-700 text-lg mb-3 flex items-center gap-2">
                      🗺️ Kutch Destinations
                    </h3>
                    <div className="space-y-2 text-sm">
                      <button 
                        onClick={() => window.location.href = '/destinations/bhuj'}
                        className="w-full text-left p-2 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-3"
                      >
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-medium">Bhuj - Heritage Hub</span>
                      </button>
                      <button 
                        onClick={() => window.location.href = '/destinations/mandvi'}
                        className="w-full text-left p-2 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-3"
                      >
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">Mandvi - Coastal Paradise</span>
                      </button>
                      <button 
                        onClick={() => window.location.href = '/destinations/dhordo-white-rann'}
                        className="w-full text-left p-2 hover:bg-purple-50 rounded-lg transition-colors flex items-center gap-3"
                      >
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="font-medium">White Rann - Desert Wonder</span>
                      </button>
                      <button 
                        onClick={() => window.location.href = '/destinations/lakhpat'}
                        className="w-full text-left p-2 hover:bg-green-50 rounded-lg transition-colors flex items-center gap-3"
                      >
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium">Lakhpat - Historic Fort</span>
                      </button>
                      <div className="pt-2 border-t border-gray-200">
                        <button 
                          onClick={() => {
                            const moreDestinations = document.getElementById('more-destinations');
                            if (moreDestinations) {
                              moreDestinations.style.display = moreDestinations.style.display === 'none' ? 'block' : 'none';
                            }
                          }}
                          className="text-green-600 hover:text-green-700 font-medium text-xs"
                        >
                          + 4 more destinations →
                        </button>
                        <div id="more-destinations" style={{ display: 'none' }} className="mt-2 space-y-2">
                          <button 
                            onClick={() => window.location.href = '/destinations/mundra'}
                            className="w-full text-left p-2 hover:bg-cyan-50 rounded-lg transition-colors flex items-center gap-3"
                          >
                            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                            <span className="font-medium text-sm">Mundra - Port City</span>
                          </button>
                          <button 
                            onClick={() => window.location.href = '/destinations/gandhidham'}
                            className="w-full text-left p-2 hover:bg-indigo-50 rounded-lg transition-colors flex items-center gap-3"
                          >
                            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                            <span className="font-medium text-sm">Gandhidham - Planned City</span>
                          </button>
                          <button 
                            onClick={() => window.location.href = '/destinations/anjar'}
                            className="w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-3"
                          >
                            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                            <span className="font-medium text-sm">Anjar - Cultural Center</span>
                          </button>
                          <button 
                            onClick={() => window.location.href = '/destinations/kalo-dungar'}
                            className="w-full text-left p-2 hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-3"
                          >
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <span className="font-medium text-sm">Kalo Dungar - Black Hill</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Controls Info */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
                    <h4 className="font-bold text-gray-700 text-sm mb-2">🎯 Map Features</h4>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>• Zoom in/out to explore</div>
                      <div>• Switch to satellite view</div>
                      <div>• Get directions</div>
                      <div>• See nearby places</div>
                    </div>
                  </div>

                  {/* Destination Counter */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full px-4 py-2 shadow-lg">
                    <span className="font-bold text-sm">8 Destinations</span>
                  </div>
                </div>
                
                {/* Alternative: Simple Google Maps backup */}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <details className="cursor-pointer">
                    <summary className="font-inter font-medium text-blue-700 text-sm">
                      📍 Alternative: View Kutch on Google Maps
                    </summary>
                    <div className="mt-3 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200 overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.3661717653!2d68.9!3d23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395be2bfce8e1357%3A0xd7f86e4c53b1c7c9!2sKutch%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1729000000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </details>
                </div>
                
                {/* Map Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                    <div className="text-2xl font-inter font-bold text-purple-600">12+</div>
                    <div className="text-xs text-gray-600 font-inter">Destinations</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
                    <div className="text-2xl font-inter font-bold text-emerald-600">5</div>
                    <div className="text-xs text-gray-600 font-inter">Regions</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
                    <div className="text-2xl font-inter font-bold text-orange-600">8+</div>
                    <div className="text-xs text-gray-600 font-inter">Hidden Gems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-inter font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-gray-800">
            Popular Destinations
          </h2>
          <p className="text-gray-600 font-inter max-w-2xl mx-auto">
            Click on any destination to discover detailed guides, photo galleries, and insider tips for your perfect Kutch adventure.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/60 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  className="object-cover group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur text-xs font-inter font-bold text-purple-700 rounded-full shadow-lg">
                    📍 Destination
                  </span>
                  <div className="bg-black/30 backdrop-blur rounded-full p-2">
                    <span className="text-white text-xs">✨</span>
                  </div>
                </div>
                
                {/* Bottom overlay with quick info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/30">
                    <h3 className="font-inter font-bold text-lg text-white mb-1 drop-shadow-lg">
                      {d.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90 text-xs font-inter">
                        📸 {d.gallery?.length || 0} photos
                      </span>
                      <span className="text-white/90 text-xs font-inter">
                        🎯 {d.sections?.length || 0} sections
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 text-sm font-inter leading-relaxed mb-4 line-clamp-3">
                  {d.sections?.[0]?.content?.slice(0, 120) || "Discover this amazing destination in Kutch."}...
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-inter font-bold text-sm group-hover:from-purple-700 group-hover:to-blue-700 transition-all">
                    Explore Now
                    <span className="transform group-hover:translate-x-1 transition-transform text-purple-600">→</span>
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500 font-inter">Available</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 rounded-3xl p-8 shadow-xl border border-white/50">
            <h3 className="text-2xl md:text-3xl font-inter font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700">
              Ready for Adventure?
            </h3>
            <p className="text-gray-600 font-inter mb-6 max-w-2xl mx-auto">
              Don't miss our hidden gems and off-the-beaten-path experiences. Discover secret destinations that only the most adventurous travelers find.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/hidden-gems"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-inter font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                🏴‍☠️ Explore Hidden Gems
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-white/80 text-gray-700 font-inter font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-200"
              >
                🏠 Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
