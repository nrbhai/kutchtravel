'use client';

import { ExternalLink, Hotel, Star, Shield, Clock } from 'lucide-react';

interface BookingWidgetProps {
  aid?: string;
}

export default function BookingWidget({ aid = '2665264' }: BookingWidgetProps) {
  
  const handleBooking = () => {
    // Redirect to Booking.com with affiliate ID
    const bookingUrl = `https://www.booking.com/?aid=${aid}`;
    window.open(bookingUrl, '_blank');
  };

  return (
    <div className="w-full my-12 relative z-10">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-xl -z-10"></div>
      
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-sora font-bold text-white flex items-center gap-3">
                <Hotel className="h-8 w-8" />
                Book Your Stay in Kutch
              </h3>
              <p className="text-blue-50 mt-2 font-inter text-base">
                Find the perfect accommodation for your Kutch adventure
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Best Price Guarantee</h4>
                <p className="text-sm text-gray-600">Lowest prices on hotels</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Star className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Verified Reviews</h4>
                <p className="text-sm text-gray-600">Real guest experiences</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Free Cancellation</h4>
                <p className="text-sm text-gray-600">On most properties</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-5 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-xl group"
          >
            <Hotel className="h-7 w-7" />
            <span>Search Hotels on Booking.com</span>
            <ExternalLink className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust Badge */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Powered by <span className="font-bold text-blue-900">Booking.com</span> • Trusted by millions worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
