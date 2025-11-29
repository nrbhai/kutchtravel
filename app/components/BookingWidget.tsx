'use client';

import Image from 'next/image';
import { ExternalLink, Hotel, Star, Shield, Clock, MapPin, CheckCircle } from 'lucide-react';

interface BookingWidgetProps {
  aid?: string;
  label?: string;
}

export default function BookingWidget({ aid = '2665264', label = 'website' }: BookingWidgetProps) {
  
  const handleBooking = () => {
    // Redirect to Booking.com with affiliate ID and label
    const bookingUrl = `https://www.booking.com/?aid=${aid}&label=${label}`;
    window.open(bookingUrl, '_blank');
  };

  return (
    <div className="w-full my-16 relative z-10">
      {/* Decorative background glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-[2rem] opacity-20 blur-2xl -z-10"></div>
      
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row min-h-[500px]">
        {/* Left Side - Image Section */}
        <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
          <Image
            src="/images/destinations/bhuj-overview.jpg" // Using an existing high-quality image
            alt="Luxury Hotel Stay in Kutch"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
          
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recommended
              </span>
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <h3 className="text-3xl font-sora font-bold leading-tight mb-2">
              Find Your Perfect Stay
            </h3>
            <p className="text-blue-100 font-inter text-sm">
              From heritage palaces to desert tents
            </p>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50/30">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Hotel className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Official Booking Partner</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-gray-900 mb-6 leading-tight">
              Experience Kutch in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Comfort & Style</span>
            </h2>
            <p className="text-lg text-gray-600 font-inter leading-relaxed">
              Whether you're looking for a luxurious palace stay in Bhuj, a traditional Bhunga in the White Rann, or a comfortable city hotel, we have the widest range of accommodations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-6 h-6 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Best Price Guarantee</h4>
                <p className="text-sm text-gray-500">We match any price</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-blue-500 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Free Cancellation</h4>
                <p className="text-sm text-gray-500">Flexible booking options</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-6 h-6 text-red-500 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Top Locations</h4>
                <p className="text-sm text-gray-500">Stay near attractions</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <Star className="w-6 h-6 text-yellow-500 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Real Reviews</h4>
                <p className="text-sm text-gray-500">Verified guest ratings</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-6 px-8 rounded-2xl shadow-xl shadow-blue-500/30 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 text-xl group"
          >
            <span>Find Deals on Booking.com</span>
            <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-center mt-4 text-sm text-gray-500">
            Secure booking • No booking fees • 24/7 Customer Support
          </p>
        </div>
      </div>
    </div>
  );
}
