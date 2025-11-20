'use client';

import { useState } from 'react';
import { Calendar, MapPin, Search, Users } from 'lucide-react';

interface BookingWidgetProps {
  aid?: string;
}

export default function BookingWidget({ aid = '2665264' }: BookingWidgetProps) {
  const [destination, setDestination] = useState('Bhuj');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct Booking.com URL with split date parameters for better reliability
    const baseUrl = 'https://www.booking.com/searchresults.html';
    const params = new URLSearchParams({
      ss: destination,
      aid: aid,
      group_adults: guests.toString(),
      no_rooms: '1',
      sb: '1',
      src: 'searchresults',
      lang: 'en-us',
      selected_currency: 'INR'
    });

    if (checkIn) {
      const [year, month, day] = checkIn.split('-');
      params.append('checkin_year', year);
      params.append('checkin_month', month);
      params.append('checkin_monthday', day);
    }
    
    if (checkOut) {
      const [year, month, day] = checkOut.split('-');
      params.append('checkout_year', year);
      params.append('checkout_month', month);
      params.append('checkout_monthday', day);
    }

    // Open in new tab
    window.open(`${baseUrl}?${params.toString()}`, '_blank');
  };

  // Get tomorrow's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full my-12 relative z-10">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-xl -z-10"></div>
      
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
          <h3 className="text-xl md:text-2xl font-sora font-bold flex items-center gap-3 text-white">
            <span className="text-2xl">🏨</span> 
            Find Your Perfect Stay
          </h3>
          <p className="text-blue-50 mt-1 font-inter text-base">
            Best prices for hotels, resorts, and homestays in Kutch
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSearch} className="p-5 md:p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            
            {/* Destination Input */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                Destination
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-blue-500 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium text-base"
                  placeholder="Where are you going?"
                  required
                />
              </div>
            </div>

            {/* Check-in Date */}
            <div className="md:col-span-3 space-y-1.5">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                Check-in
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-blue-500 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium text-base"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="md:col-span-3 space-y-1.5">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                Check-out
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-blue-500 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium text-base"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                Guests
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-blue-500 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <select
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="block w-full pl-10 pr-8 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium text-base appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Adults</option>
                  ))}
                </select>
                {/* Custom arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="pt-1">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 text-lg"
            >
              <Search className="h-6 w-6" />
              <span>Search Hotels</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <span className="text-green-500">✓</span> Free Cancellation
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <span className="text-green-500">✓</span> No Booking Fees
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <span className="text-green-500">✓</span> 24/7 Support
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
