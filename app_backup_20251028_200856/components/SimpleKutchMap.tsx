'use client';

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

interface Destination {
  id: string;
  name: string;
  x: string;
  y: string;
  color: string;
  description: string;
  slug: string;
}

const destinations: Destination[] = [
  { id: 'bhuj', name: 'Bhuj', x: '40%', y: '60%', color: '#ef4444', description: 'Heritage Hub', slug: 'bhuj' },
  { id: 'mandvi', name: 'Mandvi', x: '75%', y: '70%', color: '#3b82f6', description: 'Coastal Paradise', slug: 'mandvi' },
  { id: 'dhordo', name: 'White Rann', x: '30%', y: '25%', color: '#8b5cf6', description: 'Desert Wonder', slug: 'dhordo-white-rann' },
  { id: 'lakhpat', name: 'Lakhpat', x: '20%', y: '15%', color: '#059669', description: 'Historic Fort', slug: 'lakhpat' },
  { id: 'kalo-dungar', name: 'Kalo Dungar', x: '50%', y: '20%', color: '#dc2626', description: 'Black Hill', slug: 'kalo-dungar' },
  { id: 'mundra', name: 'Mundra', x: '60%', y: '80%', color: '#0891b2', description: 'Port City', slug: 'mundra' },
  { id: 'gandhidham', name: 'Gandhidham', x: '65%', y: '55%', color: '#7c3aed', description: 'Planned City', slug: 'gandhidham' },
  { id: 'anjar', name: 'Anjar', x: '80%', y: '45%', color: '#059669', description: 'Cultural Center', slug: 'anjar' },
];

const SimpleKutchMap: React.FC = () => {
  const handleDestinationClick = useCallback((slug: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/destinations/${slug}`;
    }
  }, []);

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-gray-100 to-gray-100 rounded-xl border-2 border-gray-300 overflow-hidden shadow-lg">
      {/* Background Map Image/Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-gray-200 rounded-xl"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      {/* Map Outline - More Visible */}
      <div className="absolute inset-4">
        <div className="relative w-full h-full">
          {/* Simple Kutch shape outline */}
          <div 
            className="absolute border-4 border-gray-600 bg-gray-50/50 rounded-lg"
            style={{
              left: '10%',
              top: '20%',
              width: '75%',
              height: '60%',
              clipPath: 'polygon(0% 60%, 10% 20%, 40% 10%, 70% 15%, 90% 30%, 95% 50%, 90% 80%, 70% 90%, 40% 85%, 10% 75%)'
            }}
          />
          <div 
            className="absolute border-2 border-dashed border-gray-500 rounded-lg opacity-60"
            style={{
              left: '8%',
              top: '18%',
              width: '79%',
              height: '64%',
              clipPath: 'polygon(0% 60%, 10% 20%, 40% 10%, 70% 15%, 90% 30%, 95% 50%, 90% 80%, 70% 90%, 40% 85%, 10% 75%)'
            }}
          />
        </div>
      </div>

      {/* Destination Markers */}
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          style={{ left: dest.x, top: dest.y }}
          onClick={() => handleDestinationClick(dest.slug)}
        >
          {/* Pulse Effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-30 group-hover:animate-ping"
            style={{ 
              backgroundColor: dest.color,
              width: '24px',
              height: '24px',
              left: '-12px',
              top: '-12px'
            }}
          />
          
          {/* Main Marker */}
          <div 
            className="w-4 h-4 rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-all duration-300 relative z-10"
            style={{ backgroundColor: dest.color }}
          />
          
          {/* Tooltip */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div 
              className="bg-white/10 backdrop-blur-xl rounded-lg shadow-xl border-2 px-3 py-2 text-center whitespace-nowrap"
              style={{ borderColor: dest.color }}
            >
              <div className="font-inter font-bold text-sm" style={{ color: dest.color }}>
                {dest.name}
              </div>
              <div className="text-xs text-gray-100 mt-1">
                {dest.description}
              </div>
              <div className="text-xs mt-1" style={{ color: dest.color }}>
                Click to explore →
              </div>
            </div>
            {/* Arrow */}
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent"
              style={{ borderTopColor: dest.color }}
            />
          </div>
        </div>
      ))}

      {/* Title Overlay */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
        <h5 className="font-inter font-bold text-sm text-gray-700 mb-1">🗺️ Interactive Kutch Map</h5>
        <p className="text-xs text-gray-100">Click markers to explore destinations</p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
        <h6 className="font-inter font-bold text-xs text-gray-700 mb-2">Destinations</h6>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <span className="text-gray-100">Heritage</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <span className="text-gray-100">Coastal</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <span className="text-gray-100">Desert</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleKutchMap;


