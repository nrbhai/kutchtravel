'use client';

import { useEffect, useState } from 'react';
import GalleryClient from './GalleryClient';
import Navigation from '../components/Navigation';

export default function GalleryPageClient() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Fetch images from API route that reads the public/images/gallery folder
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        setImages(data.images || []);
      } catch (error) {
        console.error('Failed to fetch gallery images:', error);
        setImages([]);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      {/* Modern Header with Back Button */}
      <div className="relative overflow-hidden pt-8 pb-16">
        {/* Navigation - Position it absolutely over the section */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-1 bg-cyan-400/20"></div>
          <div className="blob blob-2 bg-blue-400/20"></div>
          <div className="blob blob-3 bg-teal-400/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 pt-20">
          {/* Header Content */}
          <div className="text-center">
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full text-sm font-inter font-semibold tracking-wide shadow-lg shadow-cyan-500/30">
                <span>📸</span>
                <span>Visual Journey</span>
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight font-sora holographic drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
              Gallery
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium font-inter">
              Discover the breathtaking beauty of Kutch through our curated collection of stunning photographs.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border-2 border-cyan-200 shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-sora">{images.length}+</div>
              <div className="text-sm text-gray-600 font-inter font-medium">Images</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-sora">12+</div>
              <div className="text-sm text-gray-600 font-inter font-medium">Destinations</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border-2 border-teal-200 shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-sora">4K</div>
              <div className="text-sm text-gray-600 font-inter font-medium">Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Instructions */}
        <div className="mb-10 p-6 bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-cyan-200 shadow-lg">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4 flex items-center gap-2 font-sora">
            💡 How to Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 font-inter">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></span>
              <span><strong className="text-cyan-700">Click:</strong> Any image to open full view</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse"></span>
              <span><strong className="text-blue-700">Navigate:</strong> Use arrow keys or buttons</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse"></span>
              <span><strong className="text-teal-700">Close:</strong> Press Escape or click X</span>
            </div>
          </div>
        </div>

        <GalleryClient images={images} />
      </main>
    </div>
  );
}







