'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Hotel, Plane, MapPin, Star, Shield, Clock, CheckCircle, Globe } from 'lucide-react';

interface TripWidgetProps {
  affiliateId?: string;
  subId?: string;
  defaultTab?: 'hotels' | 'flights' | 'activities';
  compact?: boolean;
}

export default function TripWidget({ 
  affiliateId = '7347712', 
  subId = 'website',
  defaultTab = 'hotels',
  compact = false
}: TripWidgetProps) {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights' | 'activities'>(defaultTab);
  
  const handleTripRedirect = (type: 'hotels' | 'flights' | 'activities') => {
    let tripUrl = '';
    const baseUrl = 'https://us.trip.com/travel-guide/destination/bhuj-15546/';
    const params = `?locale=en-US&curr=INR&allianceid=${affiliateId}&sid=${subId}`;
    
    switch(type) {
      case 'hotels':
        // Specific Bhuj hotel list URL requested by user
        tripUrl = `https://us.trip.com/hotels/list?city=4657&display=%E6%99%AE%E6%9D%B0&tid=H0008_10650006152_entry&locale=en-US&curr=INR&allianceid=${affiliateId}&sid=${subId}`;
        break;
      case 'activities':
        // For activities, direct to the Bhuj Destination Guide as a hub
        tripUrl = `${baseUrl}${params}`;
        break;
      case 'flights':
        // Keep flights specific as the destination page is more for ground services
        tripUrl = `https://www.trip.com/flights/?locale=en-US&curr=INR&allianceid=${affiliateId}&sid=${subId}`;
        break;
    }
    
    window.open(tripUrl, '_blank');
  };

  if (compact) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
        <div className="bg-orange-600 p-4 flex items-center gap-2">
           <div className="bg-white/20 p-1.5 rounded-lg">
             <Plane className="w-5 h-5 text-white" />
           </div>
           <span className="text-white font-bold text-sm tracking-wide">Trip.com Official Partner</span>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-sora font-bold text-gray-900 mb-2">Flights & Activities</h3>
          <p className="text-gray-600 text-sm mb-6 flex-grow">
            Best flight deals to Bhuj/Ahmedabad and curated Kutch experiences.
          </p>
          
          <button
            onClick={() => handleTripRedirect('flights')}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-colors group"
          >
            <span>Search Trip.com</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-400 border-t border-gray-100 pt-4">
             <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Global Partner</span>
             <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> 24/7 Support</span>
          </div>
        </div>
      </div>
    );
  }

  // Dynamic content based on active tab
  const content = {
    hotels: {
      title: "Stay in Comfort",
      description: "From luxury tents in the White Rann to heritage hotels in Bhuj.",
      icon: <Hotel className="w-6 h-6" />,
      features: ["Best Price Guarantee", "Free Cancellation", "Verified Reviews", "24/7 Support"],
      color: "text-blue-600",
      bg: "bg-blue-100",
      button: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/20"
    },
    flights: {
      title: "Fly to Kutch",
      description: "Find the best flight deals to Bhuj (BHJ) or Ahmedabad (AMD).",
      icon: <Plane className="w-6 h-6" />,
      features: ["Compare Airlines", "No Hidden Fees", "Real-time Updates", "Easy Booking"],
      color: "text-sky-600",
      bg: "bg-sky-100",
      button: "from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-sky-500/20"
    },
    activities: {
      title: "Explore Culture",
      description: "Book guided tours, desert safaris, and cultural workshops.",
      icon: <MapPin className="w-6 h-6" />,
      features: ["Local Guides", "Instant Confirmation", "Skip the Line", "Curated Experiences"],
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      button: "from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-emerald-500/20"
    }
  };

  return (

    <div className="w-full my-8 md:my-12 relative z-10">
      {/* Trip.com Blue Background Container */}
      <div className="bg-[#0F294D] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[550px] border border-[#234270]">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        {/* Left Side - Image Section */}
        <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full group order-2 lg:order-1">
          <Image
            src="/images/destinations/white-rann-hero.jpg"
            alt="Travel to Kutch"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F294D] via-[#0F294D]/30 to-transparent"></div>
          
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#2681FF] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Official Partner
              </span>
            </div>
            <h3 className="text-3xl font-sora font-bold leading-tight mb-2 text-white drop-shadow-sm">
              Your Journey Starts Here
            </h3>
            <p className="text-blue-100 font-inter text-sm opacity-90">
              One platform for all your travel needs
            </p>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="lg:w-3/5 p-8 md:p-12 lg:p-14 flex flex-col relative z-10 order-1 lg:order-2">
          
          {/* Logo & Header */}
          <div className="flex items-center justify-between mb-8">
             <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
               <span className="font-sora font-black text-2xl tracking-tighter text-white">
                 Trip<span className="text-[#2681FF]">.com</span>
               </span>
             </div>
             <div className="flex items-center gap-2 text-blue-200 text-sm font-medium">
               <Globe className="w-4 h-4" />
               <span>Global Travel Expert</span>
             </div>
          </div>
          
          {/* Custom Tab Switcher */}
          <div className="flex flex-wrap gap-2 mb-8 bg-[#1a3c6b] p-1.5 rounded-2xl w-fit">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'hotels'
                  ? 'bg-[#2681FF] text-white shadow-lg shadow-blue-500/30'
                  : 'text-blue-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <Hotel className="w-4 h-4" />
              <span className="capitalize">Hotels</span>
            </button>
            <button
              onClick={() => setActiveTab('flights')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'flights'
                  ? 'bg-[#2681FF] text-white shadow-lg shadow-blue-500/30'
                  : 'text-blue-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span className="capitalize">Flights</span>
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'activities'
                  ? 'bg-[#2681FF] text-white shadow-lg shadow-blue-500/30'
                  : 'text-blue-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span className="capitalize">Activities</span>
            </button>
          </div>

          <div className="flex-grow">
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-white mb-4 leading-tight">
              {content[activeTab].title}
            </h2>
            <p className="text-lg text-blue-100 font-inter leading-relaxed mb-8">
              {content[activeTab].description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {content[activeTab].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[#1a3c6b]/50 border border-blue-400/20">
                  <CheckCircle className="w-5 h-5 shrink-0 text-[#2681FF]" />
                  <span className="font-medium text-blue-50 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleTripRedirect(activeTab)}
            className="w-full bg-[#2681FF] hover:bg-[#1a6fd4] text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-blue-900/30 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg group border border-blue-400/20"
          >
            <span>Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-blue-300/80">
            <Shield className="w-4 h-4" />
            <span>Secure Booking • 24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
