'use client';

import { ExternalLink, Hotel, Plane, MapPin, Star, Shield, Clock } from 'lucide-react';
import { useState } from 'react';

interface TripWidgetProps {
  affiliateId?: string;
  defaultTab?: 'hotels' | 'flights' | 'activities';
}

export default function TripWidget({ 
  affiliateId = '7347712', 
  defaultTab = 'hotels' 
}: TripWidgetProps) {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights' | 'activities'>(defaultTab);
  
  const handleTripRedirect = (type: 'hotels' | 'flights' | 'activities') => {
    let tripUrl = '';
    
    // Construct Trip.com URLs with your affiliate ID
    // Note: Replace with your actual affiliate tracking parameters from Trip.com
    switch(type) {
      case 'hotels':
        tripUrl = `https://www.trip.com/hotels/?locale=en-US&curr=USD&allianceid=${affiliateId}`;
        break;
      case 'flights':
        tripUrl = `https://www.trip.com/flights/?locale=en-US&curr=USD&allianceid=${affiliateId}`;
        break;
      case 'activities':
        tripUrl = `https://www.trip.com/things-to-do/?locale=en-US&curr=USD&allianceid=${affiliateId}`;
        break;
    }
    
    window.open(tripUrl, '_blank');
  };

  return (
    <div className="w-full my-12 relative z-10">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 rounded-2xl opacity-20 blur-xl -z-10"></div>
      
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-sora font-bold text-white flex items-center gap-3">
                <Hotel className="h-8 w-8" />
                Book Your Trip to Kutch
              </h3>
              <p className="text-orange-50 mt-2 font-inter text-base">
                Hotels, Flights & Activities - All in one place
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-gray-50 border-b border-gray-200 px-8">
          <div className="flex gap-2 -mb-px">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all ${
                activeTab === 'hotels'
                  ? 'bg-white text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Hotel className="h-5 w-5" />
              Hotels
            </button>
            <button
              onClick={() => setActiveTab('flights')}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all ${
                activeTab === 'flights'
                  ? 'bg-white text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Plane className="h-5 w-5" />
              Flights
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all ${
                activeTab === 'activities'
                  ? 'bg-white text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <MapPin className="h-5 w-5" />
              Activities
            </button>
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
                <p className="text-sm text-gray-600">Competitive prices worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Star className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Verified Reviews</h4>
                <p className="text-sm text-gray-600">Real traveler experiences</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">24/7 Support</h4>
                <p className="text-sm text-gray-600">Customer service anytime</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleTripRedirect(activeTab)}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-5 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-xl group"
          >
            {activeTab === 'hotels' && <Hotel className="h-7 w-7" />}
            {activeTab === 'flights' && <Plane className="h-7 w-7" />}
            {activeTab === 'activities' && <MapPin className="h-7 w-7" />}
            <span>
              {activeTab === 'hotels' && 'Search Hotels on Trip.com'}
              {activeTab === 'flights' && 'Search Flights on Trip.com'}
              {activeTab === 'activities' && 'Explore Activities on Trip.com'}
            </span>
            <ExternalLink className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust Badge */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Powered by <span className="font-bold text-orange-600">Trip.com</span> • Trusted travel platform worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
