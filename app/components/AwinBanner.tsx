'use client';

import { useEffect } from 'react';

interface AwinBannerProps {
  advertiserId?: string; // ID of the specific merchant (e.g., Booking.com on Awin)
  height?: number;
  width?: number;
}

export default function AwinBanner({ 
  advertiserId = 'YOUR_ADVERTISER_ID', 
  height = 250, 
  width = 300 
}: AwinBannerProps) {
  // Awin Publisher ID: 2665264
  
  return (
    <div className="awin-banner flex justify-center my-8">
      {/* 
        Replace the src below with the actual banner code/URL provided by Awin 
        for the specific advertiser you want to promote.
        
        Example generic structure (you must get the real HTML from Awin dashboard):
      */}
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-500 mb-2">Advertisement</p>
        {/* Placeholder for Awin Script/Iframe */}
        <div style={{ width, height }} className="bg-gray-200 flex items-center justify-center">
          <span>Awin Banner Placehoder</span>
        </div>
      </div>
    </div>
  );
}
