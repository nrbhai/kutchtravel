'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, MapPin, Eye, Star } from 'lucide-react';

interface HiddenGalleryClientProps {
  images: string[];
}

export default function HiddenGalleryClient({ images }: HiddenGalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (image: string, index: number) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(imageIndex + 1) % images.length]);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(imageIndex - 1 + images.length) % images.length]);
  };

  // Hidden gems themed categories
  const getImageCategory = (imageName: string) => {
    const name = imageName.toLowerCase();
    if (name.includes('sunset') || name.includes('sunrise')) return { icon: '🌅', label: 'Golden Hour', color: 'from-gray-500 to-gray-500' };
    if (name.includes('cave') || name.includes('underground')) return { icon: '🕳️', label: 'Hidden Caves', color: 'from-gray-600 to-gray-800' };
    if (name.includes('water') || name.includes('lake') || name.includes('pond')) return { icon: '💧', label: 'Secret Waters', color: 'from-gray-500 to-gray-500' };
    if (name.includes('temple') || name.includes('heritage')) return { icon: '🏛️', label: 'Ancient Sites', color: 'from-gray-500 to-gray-500' };
    if (name.includes('wildlife') || name.includes('bird')) return { icon: '🦅', label: 'Wildlife Secrets', color: 'from-gray-500 to-gray-500' };
    return { icon: '🗺️', label: 'Uncharted', color: 'from-gray-500 to-gray-500' };
  };

  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏴‍☠️</div>
          <h2 className="text-2xl font-bold text-white mb-2">No Hidden Treasures Found</h2>
          <p className="text-gray-100">The secret gallery is still being assembled...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Secret Collection</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Each image tells a story of adventure, mystery, and discovery. These are the moments that define true exploration.
          </p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => {
            const category = getImageCategory(image);
            return (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Enhanced Image */}
                <Image
                  src={`/images/hidden-gallery/${image}`}
                  alt={`Hidden gem photography ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${category.color} text-white text-sm font-medium rounded-full backdrop-blur-sm`}>
                      <span>{category.icon}</span>
                      {category.label}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white">
                        <Eye size={16} />
                        <span className="text-sm font-medium">Discover</span>
                      </div>
                      <button
                        onClick={() => openModal(image, index)}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                        aria-label="View full image"
                      >
                        <Star size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Click to open */}
                <button
                  onClick={() => openModal(image, index)}
                  className="absolute inset-0 w-full h-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  aria-label={`View hidden gem image ${index + 1}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>

              {/* Image */}
              <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden">
                <Image
                  src={`/images/hidden-gallery/${selectedImage}`}
                  alt={`Hidden gem photography ${imageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>

              {/* Navigation and Info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={prevImage}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                  disabled={images.length <= 1}
                >
                  Previous
                </button>
                
                <div className="text-center text-white">
                  <div className="text-lg font-medium">{getImageCategory(selectedImage).label}</div>
                  <div className="text-sm text-gray-300">{imageIndex + 1} of {images.length}</div>
                </div>

                <button
                  onClick={nextImage}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                  disabled={images.length <= 1}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


