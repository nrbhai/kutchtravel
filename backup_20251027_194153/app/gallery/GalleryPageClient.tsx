'use client';

import { useEffect, useState } from 'react';
import GalleryClient from './GalleryClient';
import BackButton from './BackButton';
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700">
      <Navigation />
      
      {/* Modern Header with Back Button */}
      <div className="relative overflow-hidden py-16">
        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-1 bg-purple-500/30"></div>
          <div className="blob blob-2 bg-blue-500/30"></div>
          <div className="blob blob-3 bg-indigo-500/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          {/* Header Content */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight font-sora holographic">
              Gallery
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed font-medium font-poppins">
              Discover the breathtaking beauty of Kutch through our curated collection of stunning photographs.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-sora">{images.length}+</div>
              <div className="text-sm text-purple-200 font-poppins">Images</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-sora">12+</div>
              <div className="text-sm text-purple-200 font-poppins">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-sora">4K</div>
              <div className="text-sm text-purple-200 font-poppins">Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Instructions */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2 font-sora">
            💡 How to Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-purple-200 font-poppins">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span><strong>Click:</strong> Any image to open full view</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              <span><strong>Navigate:</strong> Use arrow keys or buttons</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span><strong>Close:</strong> Press Escape or click X</span>
            </div>
          </div>
        </div>

        <GalleryClient images={images} />
      </main>
    </div>
  );
}

