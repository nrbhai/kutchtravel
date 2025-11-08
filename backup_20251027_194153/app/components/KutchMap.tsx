'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface Destination {
  id: string;
  name: string;
  x: number;
  y: number;
  color: string;
  description: string;
  slug: string;
}

const destinations: Destination[] = [
  { id: 'bhuj', name: 'Bhuj', x: 280, y: 200, color: '#ef4444', description: 'Heritage Hub', slug: 'bhuj' },
  { id: 'mandvi', name: 'Mandvi', x: 420, y: 250, color: '#3b82f6', description: 'Coastal Paradise', slug: 'mandvi' },
  { id: 'dhordo', name: 'White Rann', x: 200, y: 120, color: '#8b5cf6', description: 'Desert Wonder', slug: 'dhordo-white-rann' },
  { id: 'lakhpat', name: 'Lakhpat', x: 150, y: 80, color: '#059669', description: 'Historic Fort', slug: 'lakhpat' },
  { id: 'kalo-dungar', name: 'Kalo Dungar', x: 320, y: 100, color: '#dc2626', description: 'Black Hill', slug: 'kalo-dungar' },
  { id: 'mundra', name: 'Mundra', x: 350, y: 300, color: '#0891b2', description: 'Port City', slug: 'mundra' },
  { id: 'gandhidham', name: 'Gandhidham', x: 380, y: 220, color: '#7c3aed', description: 'Planned City', slug: 'gandhidham' },
  { id: 'anjar', name: 'Anjar', x: 450, y: 180, color: '#059669', description: 'Cultural Center', slug: 'anjar' },
];

const KutchMap: React.FC = () => {
  const [hoveredDest, setHoveredDest] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsLoaded(true);
  }, []);

  const handleDestinationClick = useCallback((slug: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/destinations/${slug}`;
    }
  }, []);

  const handleMouseEnter = useCallback((destId: string) => {
    setHoveredDest(destId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredDest(null);
  }, []);

  // Don't render anything until mounted (avoids SSR issues)
  if (!isMounted || !isLoaded) {
    return (
      <div className="relative w-full h-80 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 overflow-hidden shadow-inner flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">🗺️</div>
          <p className="text-emerald-600 font-inter text-sm">Loading interactive map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 overflow-hidden shadow-inner">
      {/* SVG Map */}
      <svg
        viewBox="0 0 500 350"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient and filter definitions */}
        <defs>
          <linearGradient id="kutchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ecfdf5" />
            <stop offset="50%" stopColor="#d1fae5" />
            <stop offset="100%" stopColor="#a7f3d0" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="mapShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#065f46" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Kutch district outline (more detailed and visible) */}
        <path
          d="M80 280 L80 220 Q80 180 120 160 L160 140 Q200 120 250 125 Q300 130 350 140 Q400 150 430 180 Q450 200 460 240 L470 280 Q470 310 450 330 Q420 350 380 360 L320 370 Q270 375 220 370 Q170 365 120 350 Q90 340 80 280 Z"
          fill="url(#kutchGradient)"
          stroke="#059669"
          strokeWidth="3"
          strokeDasharray="none"
          filter="url(#mapShadow)"
          className="opacity-90"
        />
        
        {/* Border enhancement */}
        <path
          d="M80 280 L80 220 Q80 180 120 160 L160 140 Q200 120 250 125 Q300 130 350 140 Q400 150 430 180 Q450 200 460 240 L470 280 Q470 310 450 330 Q420 350 380 360 L320 370 Q270 375 220 370 Q170 365 120 350 Q90 340 80 280 Z"
          fill="none"
          stroke="#047857"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="opacity-60"
        />

        {/* Destination markers */}
        {destinations.map((dest) => (
          <g key={dest.id}>
            {/* Pulse effect for hovered destination */}
            {hoveredDest === dest.id && (
              <circle
                cx={dest.x}
                cy={dest.y}
                r="15"
                fill={dest.color}
                opacity="0.2"
              >
                <animate
                  attributeName="r"
                  values="15;25;15"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.1;0.2"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
            
            {/* Main marker */}
            <circle
              cx={dest.x}
              cy={dest.y}
              r={hoveredDest === dest.id ? "10" : "7"}
              fill={dest.color}
              stroke="white"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 ease-in-out"
              filter="url(#glow)"
              onMouseEnter={() => handleMouseEnter(dest.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleDestinationClick(dest.slug)}
              style={{
                transformOrigin: `${dest.x}px ${dest.y}px`,
                transform: hoveredDest === dest.id ? 'scale(1.3)' : 'scale(1)'
              }}
            />
            
            {/* Stable label (fixed shaking issue) */}
            {hoveredDest === dest.id && (
              <g className="pointer-events-none">
                <rect
                  x={dest.x - 35}
                  y={dest.y - 40}
                  width="70"
                  height="22"
                  rx="6"
                  fill="white"
                  stroke={dest.color}
                  strokeWidth="1.5"
                  filter="url(#glow)"
                  className="opacity-95"
                />
                <text
                  x={dest.x}
                  y={dest.y - 26}
                  textAnchor="middle"
                  className="text-xs font-inter font-bold pointer-events-none"
                  fill={dest.color}
                  style={{ userSelect: 'none' }}
                >
                  {dest.name}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>

      {/* Info panel */}
      {hoveredDest && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-emerald-200 transition-all duration-200">
          {(() => {
            const dest = destinations.find(d => d.id === hoveredDest);
            return dest ? (
              <div>
                <h5 className="font-inter font-bold text-sm text-emerald-700">{dest.name}</h5>
                <p className="text-xs text-purple-100 mt-1">{dest.description}</p>
                <button 
                  onClick={() => handleDestinationClick(dest.slug)}
                  className="text-xs text-emerald-600 hover:text-emerald-700 mt-1 font-medium transition-colors"
                >
                  Explore →
                </button>
              </div>
            ) : null;
          })()}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-emerald-200">
        <h6 className="font-inter font-bold text-xs text-emerald-700 mb-2">Map Legend</h6>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-purple-100">Heritage Sites</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-purple-100">Coastal Areas</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-100">Desert Regions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KutchMap;