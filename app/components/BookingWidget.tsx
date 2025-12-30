'use client';

import Image from 'next/image';
import { ExternalLink, Hotel, Star, Shield, Clock, MapPin, CheckCircle } from 'lucide-react';

interface BookingWidgetProps {
  aid?: string;
  label?: string;
  compact?: boolean;
}

export default function BookingWidget({ aid = '304142', label = 'gen173rf-10CAEoggI46AdIM1gDaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGiAg5sb2NhbGhvc3Q6MzAwMKgCAbgCwov7yAbAAgHSAiQ5MmI3NTUzZi00MmYwLTRjZjYtOTgxZC0zMjg5NTBjMzUyMTbYAgHgAgE', compact = false }: BookingWidgetProps) {
  
  const handleBooking = () => {
    // Redirect to Booking.com with specific search parameters
    const bookingUrl = `https://www.booking.com/searchresults.html?ss=Bhuj%2C+Gujarat&efdco=1&label=${label}&aid=${aid}&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=-2091701&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=947b35e1a2bd0635&ac_meta=GhA5NDdiMzVlMWEyYmQwNjM1IAAoATICZW46BGJodWo%3D&checkin=2025-11-20&checkout=2025-12-22&group_adults=2&no_rooms=1&group_children=0`;
    window.open(bookingUrl, '_blank');
  };

  if (compact) {
    return (
      <div className="bg-[#003580] rounded-2xl shadow-lg border border-blue-600/30 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
        <div className="bg-[#00224f] p-4 flex items-center justify-between gap-2">
           <div className="flex items-center gap-3">
             <div className="bg-white/10 p-1.5 rounded-lg border border-white/10">
               <Hotel className="w-5 h-5 text-white" />
             </div>
             <span className="text-white font-bold text-lg tracking-wide">Booking.com</span>
           </div>
           <span className="text-[#febb02] font-black text-sm tracking-wider uppercase">PARTNER</span>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-sora font-bold text-white mb-2">Find Perfect Stays</h3>
          <p className="text-blue-100 text-sm mb-6 flex-grow font-inter">
            From heritage palaces in Bhuj to desert camps in the Rann. Best prices guaranteed.
          </p>
          
          <button
            onClick={handleBooking}
            className="w-full bg-[#febb02] hover:bg-[#eac95b] text-[#003580] font-black py-3 px-4 rounded-xl shadow-lg shadow-black/20 flex items-center justify-center gap-2 transition-colors group"
          >
            <span>Search Deals</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-blue-200 border-t border-blue-400/20 pt-4">
             <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Secure Booking</span>
             <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Free Cancellation</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full my-8 md:my-12 relative z-10">
      {/* Booking.com Blue Background Container */}
      <div className="bg-[#003580] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[500px] relative">
        
        {/* Genius Badge / Deal Badge */}
        <div className="absolute top-6 right-6 z-20 bg-[#febb02] text-[#003580] px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-3 flex items-center gap-2">
          <span className="text-xl">⚡</span>
          <span>Unlock Mobile Deals</span>
        </div>

        {/* Left Side - Content Section */}
        <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/20">
                <Image src="/images/booking-logo-white.png" width={120} height={20} alt="Booking.com" className="opacity-90 invert brightness-0 grayscale-0" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
              <span className="text-blue-200 font-bold tracking-wide uppercase text-xs border border-blue-400/30 px-3 py-1 rounded-full">Official Partner</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-white mb-6 leading-tight">
              Find the perfect place to stay in <span className="text-[#febb02]">Kutch</span>
            </h2>
            <p className="text-lg text-blue-100 font-inter leading-relaxed max-w-xl">
              From luxury palaces in Bhuj to desert tents in the White Rann. Look for properties with the 'Genius' badge for extra discounts.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 text-white/90">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#febb02]" />
              <span className="font-medium text-sm">Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#febb02]" />
              <span className="font-medium text-sm">2M+ Properties</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#febb02]" />
              <span className="font-medium text-sm">No Booking Fees</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#febb02]" />
              <span className="font-medium text-sm">24/7 Support</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBooking}
            className="w-full sm:w-auto bg-[#febb02] hover:bg-[#eac95b] text-[#003580] font-black py-5 px-10 rounded-xl shadow-xl shadow-black/20 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-xl group"
          >
            <span className="text-2xl">🔍</span>
            <span>Search Deals on Booking.com</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform opacity-70" />
          </button>
        </div>

        {/* Right Side - Image Section with Overlay */}
        <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full overflow-hidden">
          <Image
            src="/images/destinations/bhuj-overview.webp"
            alt="Luxury Hotel Stay in Kutch"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003580] via-[#003580]/40 to-transparent lg:bg-gradient-to-l lg:from-[#003580] lg:via-[#003580]/20 lg:to-transparent"></div>
          
          {/* Floating Cards */}
          <div className="absolute bottom-8 right-8 left-8 lg:left-auto lg:w-72 bg-white rounded-2xl p-4 shadow-2xl animate-float hidden md:block">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-2xl">🏨</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Rann Visamo Resort</p>
                <div className="flex text-[#febb02] text-xs my-1">★★★★★</div>
                <p className="text-gray-500 text-xs">Recently booked by 3 people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
