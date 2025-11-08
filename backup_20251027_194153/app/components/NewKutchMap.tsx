'use client';

import { useState } from 'react';

interface MapDestination {
  id: string;
  name: string;
  description: string;
  slug: string;
  position: { top: string; left: string };
  color: string;
  category: 'heritage' | 'coastal' | 'desert' | 'cultural';
}

const mapDestinations: MapDestination[] = [
  {
    id: 'bhuj',
    name: 'Bhuj',
    description: 'Heritage Hub of Kutch',
    slug: 'bhuj',
    position: { top: '45%', left: '35%' },
    color: '#ef4444',
    category: 'heritage'
  },
  {
    id: 'mandvi',
    name: 'Mandvi',
    description: 'Beautiful Coastal Town',
    slug: 'mandvi',
    position: { top: '65%', left: '70%' },
    color: '#3b82f6',
    category: 'coastal'
  },
  {
    id: 'white-rann',
    name: 'White Rann',
    description: 'Great Rann of Kutch',
    slug: 'dhordo-white-rann',
    position: { top: '20%', left: '25%' },
    color: '#8b5cf6',
    category: 'desert'
  },
  {
    id: 'lakhpat',
    name: 'Lakhpat',
    description: 'Historic Fort Town',
    slug: 'lakhpat',
    position: { top: '15%', left: '15%' },
    color: '#059669',
    category: 'heritage'
  },
  {
    id: 'kalo-dungar',
    name: 'Kalo Dungar',
    description: 'Black Hill',
    slug: 'kalo-dungar',
    position: { top: '25%', left: '45%' },
    color: '#dc2626',
    category: 'heritage'
  },
  {
    id: 'mundra',
    name: 'Mundra',
    description: 'Major Port City',
    slug: 'mundra',
    position: { top: '75%', left: '60%' },
    color: '#0891b2',
    category: 'coastal'
  },
  {
    id: 'gandhidham',
    name: 'Gandhidham',
    description: 'Planned Industrial City',
    slug: 'gandhidham',
    position: { top: '55%', left: '65%' },
    color: '#7c3aed',
    category: 'cultural'
  },
  {
    id: 'anjar',
    name: 'Anjar',
    description: 'Cultural Center',
    slug: 'anjar',
    position: { top: '40%', left: '75%' },
    color: '#059669',
    category: 'cultural'
  }
];

const NewKutchMap = () => {
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);

  const handleDestinationClick = (slug: string) => {
    window.location.href = `/destinations/${slug}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'heritage': return '🏛️';
      case 'coastal': return '🏖️';
      case 'desert': return '🏜️';
      case 'cultural': return '🎭';
      default: return '📍';
    }
  };

  return (
    <div className="w-full h-80 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 rounded-xl border-2 border-green-300 relative overflow-hidden shadow-lg">
      
      {/* Map Background with Kutch Shape */}
      <div className="absolute inset-0 p-4">
        {/* Main Kutch Region Outline */}
        <div 
          className="absolute bg-green-100 border-4 border-green-600 rounded-lg opacity-80"
          style={{
            top: '10%',
            left: '10%',
            width: '80%',
            height: '70%',
            transform: 'skew(-5deg, 2deg)',
            borderRadius: '20px 40px 30px 20px'
          }}
        />
        
        {/* Secondary outline for depth */}
        <div 
          className="absolute bg-green-50 border-2 border-dashed border-green-500 rounded-lg opacity-60"
          style={{
            top: '8%',
            left: '8%',
            width: '84%',
            height: '74%',
            transform: 'skew(-5deg, 2deg)',
            borderRadius: '20px 40px 30px 20px'
          }}
        />

        {/* Region Labels */}
        <div className="absolute top-4 left-6 text-green-700 font-bold text-sm opacity-60">
          Great Rann
        </div>
        <div className="absolute bottom-6 right-8 text-purple-300 font-bold text-sm opacity-60">
          Arabian Sea
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-800 font-bold text-lg opacity-40">
          KUTCH
        </div>
      </div>

      {/* Destination Markers */}
      {mapDestinations.map((destination) => (
        <div
          key={destination.id}
          className="absolute cursor-pointer group z-10"
          style={{
            top: destination.position.top,
            left: destination.position.left,
            transform: 'translate(-50%, -50%)'
          }}
          onClick={() => handleDestinationClick(destination.slug)}
          onMouseEnter={() => setHoveredDestination(destination.id)}
          onMouseLeave={() => setHoveredDestination(null)}
        >
          
          {/* Pulsing Background */}
          {hoveredDestination === destination.id && (
            <div 
              className="absolute inset-0 rounded-full animate-ping opacity-75"
              style={{
                backgroundColor: destination.color,
                width: '32px',
                height: '32px',
                left: '-16px',
                top: '-16px'
              }}
            />
          )}

          {/* Main Marker */}
          <div 
            className="relative w-6 h-6 rounded-full border-3 border-white shadow-lg transform transition-all duration-300 group-hover:scale-125 flex items-center justify-center text-white text-xs font-bold"
            style={{ 
              backgroundColor: destination.color,
              borderWidth: '3px',
              zIndex: 20
            }}
          >
            {getCategoryIcon(destination.category)}
          </div>

          {/* Tooltip */}
          {hoveredDestination === destination.id && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
              <div 
                className="bg-white/10 backdrop-blur-xl rounded-lg shadow-xl border-2 px-4 py-3 text-center min-w-max"
                style={{ borderColor: destination.color }}
              >
                <div 
                  className="font-bold text-sm mb-1"
                  style={{ color: destination.color }}
                >
                  {destination.name}
                </div>
                <div className="text-purple-100 text-xs mb-2">
                  {destination.description}
                </div>
                <div 
                  className="text-xs font-medium"
                  style={{ color: destination.color }}
                >
                  Click to explore →
                </div>
              </div>
              
              {/* Tooltip Arrow */}
              <div 
                className="absolute top-full left-1/2 transform -translate-x-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: `8px solid ${destination.color}`
                }}
              />
            </div>
          )}
        </div>
      ))}

      {/* Map Title */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h3 className="font-bold text-green-700 text-sm flex items-center gap-2">
          🗺️ Kutch Interactive Map
        </h3>
        <p className="text-xs text-purple-100 mt-1">
          Click on markers to explore destinations
        </p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h4 className="font-bold text-purple-100 text-xs mb-2">Legend</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>🏛️ Heritage Sites</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>🏖️ Coastal Areas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>🏜️ Desert Regions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>🎭 Cultural Centers</span>
          </div>
        </div>
      </div>

      {/* Destination Counter */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">
        {mapDestinations.length} Destinations
      </div>
    </div>
  );
};

export default NewKutchMap;