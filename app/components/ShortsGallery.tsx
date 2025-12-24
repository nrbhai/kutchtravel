'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  X, 
  Volume2, 
  VolumeX, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  Bookmark
} from 'lucide-react';
import { KUTCH_SHORTS, KutchShort } from '@/app/data/videos';

// --- Video Interface for Card ---
const VideoCard = ({ short, onSelect }: { short: KutchShort, onSelect: (short: KutchShort) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const shouldPlay = isHovering || (isInView && window.innerWidth < 768);
    if (shouldPlay && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      if (!isHovering) videoRef.current.currentTime = 0;
    }
  }, [isHovering, isInView]);

  return (
    <motion.div
      ref={containerRef}
      whileHover={{ y: -8 }}
      className="relative flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-gray-100 shadow-xl cursor-pointer group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onSelect(short)}
    >
      {/* Thumbnail */}
      <Image
        src={short.thumbnailUrl}
        alt={short.title}
        fill
        className={`object-cover transition-opacity duration-500 ${isHovering && isLoaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Hover Video Preview */}
      <video
        ref={videoRef}
        src={short.videoUrl}
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovering && isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
      
      <div className="absolute bottom-6 left-6 right-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-400 mb-2 uppercase tracking-widest">
           <MapPin className="w-2.5 h-2.5" />
           {short.location.split(',')[0]}
        </div>
        <h3 className="text-lg font-bold font-sora leading-tight text-green-400">{short.title}</h3>
      </div>

      <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <Play className="w-5 h-5 fill-white" />
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 border-2 border-white/20 rounded-[2rem] pointer-events-none group-hover:border-white/40 transition-colors"></div>
    </motion.div>
  );
};

// --- Full Screen Player ---
const FullScreenPlayer = ({ 
  shorts, 
  initialIndex, 
  onClose,
  isMuted,
  setIsMuted
}: { 
  shorts: KutchShort[], 
  initialIndex: number, 
  onClose: () => void,
  isMuted: boolean,
  setIsMuted: (muted: boolean) => void
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showHeart, setShowHeart] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const currentShort = shorts[currentIndex];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleNext = () => {
    if (currentIndex < shorts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    if (e.detail === 2) {
      // Double tap
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 800);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center touch-none"
    >
      <div className="relative w-full h-full md:max-w-[450px] md:h-[90vh] md:rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl">
        
        {/* Main Video Stream - With Swipe Navigation */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentShort.id}
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-0"
          >
            <video
              src={currentShort.videoUrl}
              autoPlay
              loop
              playsInline
              muted={isMuted}
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Overlay to catch clicks since video is pointer-events-none */}
            <div className="absolute inset-0 z-0" onClick={handleVideoClick} />

            {/* Heart Animation for Double Tap */}
            <AnimatePresence>
              {showHeart && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 1 }}
                  exit={{ scale: 2, opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                >
                  <motion.div
                    animate={{ rotate: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 0.2 }}
                  >
                    <svg className="w-24 h-24 text-red-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>


        {/* UI Overlay - Top */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-30 bg-gradient-to-b from-black/60 to-transparent">
          <button onClick={onClose} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div className="flex gap-3">
            <button onClick={() => setIsMuted(!isMuted)} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* UI Overlay - Right Sidebar */}
        <div className="absolute right-4 bottom-32 flex flex-col gap-6 z-30 items-center">
            <div className="flex flex-col items-center gap-1 group">
                <button 
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-red-500 transition-colors border border-white/20 group-hover:border-red-400"
                  onClick={() => { setShowHeart(true); setTimeout(() => setShowHeart(false), 800); }}
                >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Like</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-cyan-500 transition-colors border border-white/20">
                    <Bookmark className="w-5 h-5" />
                </button>
                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Save</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-blue-500 transition-colors border border-white/20">
                    <Share2 className="w-5 h-5" />
                </button>
                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Share</span>
            </div>
        </div>

        {/* UI Overlay - Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black via-black/40 to-transparent text-white z-20">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-[10px] mb-2">
            <MapPin className="w-3 h-3" />
            <span className="tracking-wide uppercase">{currentShort.location}</span>
          </div>
          <h2 className="text-lg md:text-xl font-extrabold font-sora mb-1.5 tracking-tight text-green-400">{currentShort.title}</h2>
          <p className="text-white/80 font-inter text-[11px] md:text-xs leading-relaxed line-clamp-2">
            {currentShort.description}
          </p>
          
          {/* Progress Bar (Visual Only for now) */}
          <div className="mt-8 h-1 w-full bg-white/20 rounded-full overflow-hidden">
             <motion.div 
               key={currentIndex}
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 15, ease: "linear" }}
               className="h-full bg-cyan-400 origin-left"
             />
          </div>
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden md:block z-40">
           {currentIndex > 0 && (
             <button 
               onClick={handlePrev}
               className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 border border-white/10"
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
           )}
           {currentIndex < shorts.length - 1 && (
             <button 
               onClick={handleNext}
               className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 border border-white/10"
             >
               <ChevronRight className="w-6 h-6" />
             </button>
           )}
        </div>

        {/* Preload Next/Prev Videos */}
        <div className="hidden">
           {currentIndex < shorts.length - 1 && (
             <video src={shorts[currentIndex + 1].videoUrl} preload="auto" />
           )}
           {currentIndex > 0 && (
             <video src={shorts[currentIndex - 1].videoUrl} preload="auto" />
           )}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function ShortsGallery({ destinationSlug }: { destinationSlug?: string }) {
  const [selectedShort, setSelectedShort] = useState<{ short: KutchShort, index: number } | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (selectedShort) {
        setSelectedShort(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedShort]);

  const handleOpenVideo = (short: KutchShort, index: number) => {
    setSelectedShort({ short, index });
    // Push a new state so the back button works
    window.history.pushState({ videoOpen: true }, '', window.location.href);
  };

  const handleCloseVideo = () => {
    // Go back in history to close the modal (triggers popstate)
    window.history.back();
  };

  const filteredShorts = destinationSlug 
    ? KUTCH_SHORTS.filter(s => s.id.includes(destinationSlug) || s.location.toLowerCase().includes(destinationSlug.toLowerCase()))
    : KUTCH_SHORTS;

  // If we're filtering and there are no videos for this place, don't show the section
  if (destinationSlug && filteredShorts.length === 0) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50/50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-xl">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 text-xs font-bold tracking-widest uppercase mb-4">
                <Play className="w-3 h-3 fill-cyan-700" />
                Kutch Shorts
             </div>
             <h2 className="text-4xl md:text-5xl font-black font-sora text-gray-900 tracking-tight leading-tight">
               Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">The Vibe</span>
             </h2>
             <p className="mt-4 text-gray-600 font-inter font-medium text-lg">
               Immersive vertical clips showcasing the soul of our homeland.
             </p>
          </div>
          
          <div className="hidden md:flex gap-3">
             <button 
               onClick={() => scroll('left')}
               className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm"
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
               onClick={() => scroll('right')}
               className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm"
             >
               <ChevronRight className="w-6 h-6" />
             </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
        >
          {filteredShorts.map((short, index) => (
            <div key={short.id} className="snap-start">
              <VideoCard 
                short={short} 
                onSelect={(s) => handleOpenVideo(s, index)} 
              />
            </div>
          ))}
          
          {/* View More Placeholder */}
          <div className="flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-[2rem] border-4 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 gap-4 hover:border-cyan-300 hover:text-cyan-500 transition-all group">
             <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-cyan-50 transition-colors">
                <ChevronRight className="w-8 h-8" />
             </div>
             <span className="font-bold font-sora uppercase tracking-widest text-sm">More Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {selectedShort && (
          <FullScreenPlayer 
            shorts={filteredShorts}
            initialIndex={selectedShort.index}
            onClose={handleCloseVideo}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
          />
        )}
      </AnimatePresence>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}
