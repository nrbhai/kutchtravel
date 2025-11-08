'use client';

import { useEffect, useState } from 'react';
import HiddenGalleryClient from './HiddenGalleryClient';
import BackButton from '../gallery/BackButton';
import Navigation from '../components/Navigation';

export default function HiddenGalleryPageClient() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Fetch images from API route that reads the public/images/hidden-gallery folder
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/hidden-gallery');
        const data = await response.json();
        setImages(data.images || []);
      } catch (error) {
        console.error('Failed to fetch hidden gallery images:', error);
        setImages([]);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-50">
      <Navigation />
      
      {/* Modern Header with Back Button - Hidden Gems Theme */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-800 via-gray-600 to-gray-600 py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          {/* Header Content */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
              <span 
                className="inline-block"
                style={{
                  textShadow: `
                    2px 2px 0px rgba(0, 0, 0, 0.3),
                    4px 4px 0px rgba(0, 0, 0, 0.2),
                    6px 6px 0px rgba(0, 0, 0, 0.1),
                    0px 0px 30px rgba(255, 255, 255, 0.3)
                  `
                }}
              >
                🏴‍☠️ Hidden Gallery
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Secret snapshots from the unexplored corners of Kutch - where only the most adventurous travelers dare to go
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{images.length}</div>
                <div className="text-gray-200 text-sm">Secret Photos</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">🤫</div>
                <div className="text-gray-200 text-sm">Hidden Gems</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">🗺️</div>
                <div className="text-gray-200 text-sm">Uncharted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <HiddenGalleryClient images={images} />
    </div>
  );
}

