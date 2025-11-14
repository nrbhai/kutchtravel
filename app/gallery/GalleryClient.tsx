"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryClient({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex === null) return;
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : Math.min(images.length - 1, (i + 1))));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : Math.max(0, (i - 1))));
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  return (
    <div>
      {/* Modern Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-cyan-200 shadow-lg max-w-md mx-auto">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">No Images Found</h3>
              <p className="text-gray-700 text-sm">
                Add photos to <code className="bg-cyan-100 px-2 py-1 rounded text-xs text-cyan-700">public/images/gallery/</code> to see them here.
              </p>
            </div>
          </div>
        ) : (
          images.map((src, i) => {
            const colors = [
              { border: 'border-cyan-300', hover: 'hover:border-cyan-500', gradient: 'from-cyan-600/20' },
              { border: 'border-blue-300', hover: 'hover:border-blue-500', gradient: 'from-blue-600/20' },
              { border: 'border-teal-300', hover: 'hover:border-teal-500', gradient: 'from-teal-600/20' },
              { border: 'border-sky-300', hover: 'hover:border-sky-500', gradient: 'from-sky-600/20' },
              { border: 'border-indigo-300', hover: 'hover:border-indigo-500', gradient: 'from-indigo-600/20' },
              { border: 'border-purple-300', hover: 'hover:border-purple-500', gradient: 'from-purple-600/20' },
            ];
            const colorScheme = colors[i % colors.length];
            
            return (
              <div key={src} className="group">
                <button 
                  onClick={() => {
                    setIsLoading(true);
                    setOpenIndex(i);
                    setTimeout(() => setIsLoading(false), 300);
                  }}
                  className={`relative block w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white border-2 ${colorScheme.border} ${colorScheme.hover}`}
                >
                  <Image 
                    src={src} 
                    alt={`Gallery image ${i + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" 
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${colorScheme.gradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/50">
                        <p className="text-sm font-medium text-gray-900">Photo {i + 1}</p>
                        <p className="text-xs text-gray-600">Click to view full size</p>
                      </div>
                    </div>
                  </div>

                  {/* Loading Indicator */}
                  {isLoading && openIndex === i && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Modern Lightbox */}
      {openIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="flex items-center justify-center h-full p-6">
            
            {/* Close Button */}
            <button 
              onClick={() => setOpenIndex(null)} 
              className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm text-white rounded-full hover:from-cyan-500/50 hover:to-blue-500/50 transition-all flex items-center justify-center text-xl font-bold z-10 border border-white/20"
              title="Close (Esc)"
            >
              ✕
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium z-10 border border-white/20">
              {openIndex + 1} of {images.length}
            </div>

            {/* Previous Button */}
            {openIndex > 0 && (
              <button 
                onClick={() => setOpenIndex(openIndex - 1)} 
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm text-white rounded-full hover:from-cyan-500/50 hover:to-blue-500/50 transition-all flex items-center justify-center text-xl z-10 border border-white/20"
                title="Previous (←)"
              >
                ←
              </button>
            )}

            {/* Next Button */}
            {openIndex < images.length - 1 && (
              <button 
                onClick={() => setOpenIndex(openIndex + 1)} 
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm text-white rounded-full hover:from-cyan-500/50 hover:to-blue-500/50 transition-all flex items-center justify-center text-xl z-10 border border-white/20"
                title="Next (→)"
              >
                →
              </button>
            )}

            {/* Main Image */}
            <div className="relative w-full max-w-6xl h-[80vh] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
              <Image 
                src={images[openIndex]} 
                alt={`Gallery image ${openIndex + 1}`} 
                fill 
                className="object-contain" 
                sizes="100vw"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20">
              <p className="text-sm font-medium">
                📸 Kutch Gallery • Photo {openIndex + 1}
              </p>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-2xl overflow-x-auto pb-2">
              {images.slice(Math.max(0, openIndex - 5), Math.min(images.length, openIndex + 6)).map((src, i) => {
                const actualIndex = Math.max(0, openIndex - 5) + i;
                return (
                  <button
                    key={src}
                    onClick={() => setOpenIndex(actualIndex)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      actualIndex === openIndex 
                        ? 'border-white scale-110' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${actualIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Footer Line */}
      <div className="text-center py-8 mt-8">
        <p className="text-gray-700 text-sm font-medium font-inter">
          Designed with ❤️ for travelers seeking authentic Kutch
        </p>
      </div>
    </div>
  );
}

