'use client';

import { useEffect, useState } from 'react';

interface BookingWidgetProps {
  aid?: string;
  width?: string;
  height?: string;
}

export default function BookingWidget({ 
  aid = '2665264', // Default to the provided ID
  width = '100%',
  height = '200'
}: BookingWidgetProps) {
  
  return (
    <div className="booking-widget w-full my-8 bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
      <div className="bg-blue-600 px-6 py-3">
        <h3 className="text-white font-sora font-semibold flex items-center gap-2">
          <span>🏨</span> Find Your Perfect Stay in Kutch
        </h3>
      </div>
      <div className="p-4 bg-blue-50/50">
        <iframe
          src={`https://www.booking.com/flexiproduct.html?product=sb&w=100%25&h=auto&aid=${aid}&target_aid=${aid}&ss=Kutch+District%2C+Gujarat%2C+India&fid=1706926561067&lang=en-us`}
          width={width}
          height={height}
          frameBorder="0"
          scrolling="no"
          style={{ border: 'none', overflow: 'hidden' }}
          title="Booking.com Hotel Search"
        ></iframe>
        <div className="text-center mt-2">
            <span className="text-xs text-gray-500">Trusted by millions of travelers worldwide</span>
        </div>
      </div>
    </div>
  );
}
