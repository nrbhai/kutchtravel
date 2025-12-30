'use client';

import { useState, useEffect } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function GalleryManager() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/gallery'); // Reusing existing public API
      const data = await res.json();
      setExistingImages(data.images || []);
    } catch (error) {
      console.error('Failed to load images', error);
    } finally {
      setLoadingImages(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('files', file);
    });

    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('Upload successful!');
        setSelectedFiles([]);
        fetchImages(); // Refresh gallery
      } else {
        alert('Upload failed');
      }
    } catch (error) {
      console.error('Upload error', error);
      alert('Error uploading files');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Gallery Manager</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Upload className="w-5 h-5" /> Upload New Photos
            </h2>
            
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors cursor-pointer relative">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center">
                <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                <p className="text-gray-600 dark:text-gray-400 font-medium">Click or drag images here</p>
                <p className="text-gray-400 text-sm mt-1">Supports JPG, PNG, WEBP</p>
              </div>
            </div>

            {selectedFiles.length > 0 && (
              <div className="mt-6 space-y-4">
                <h3 className="font-medium text-gray-700 dark:text-gray-300">Selected Files ({selectedFiles.length})</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 relative">
                             {/* Simple preview if possible, otherwise generic icon */}
                             <img src={URL.createObjectURL(file)} className="w-full h-full object-cover" alt="preview" />
                        </div>
                        <span className="truncate text-sm text-gray-600 dark:text-gray-300">{file.name}</span>
                      </div>
                      <button onClick={() => removeFile(index)} className="p-1 hover:bg-red-100 text-red-500 rounded">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Uploading...
                    </>
                  ) : (
                    'Upload Files'
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Existing Gallery Preview */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-[calc(100vh-200px)] flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Existing Gallery ({existingImages.length})</h2>
          
          <div className="flex-1 overflow-y-auto pr-2">
            {loadingImages ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
              </div>
            ) : existingImages.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">No images found.</p>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {existingImages.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                    <Image
                      src={src}
                      alt="Gallery image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
