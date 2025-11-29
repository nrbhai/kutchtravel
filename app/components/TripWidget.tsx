'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Hotel, Plane, MapPin, Star, Shield, Clock, CheckCircle, Globe } from 'lucide-react';

interface TripWidgetProps {
  affiliateId?: string;
  subId?: string;
  defaultTab?: 'hotels' | 'flights' | 'activities';
}

export default function TripWidget({ 
  affiliateId = '7347712', 
  subId = 'website',
  defaultTab = 'hotels' 
}: TripWidgetProps) {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights' | 'activities'>(defaultTab);
  
  const handleTripRedirect = (type: 'hotels' | 'flights' | 'activities') => {
    let tripUrl = '';
    
    switch(type) {
      case 'hotels':
        tripUrl = `https://www.trip.com/hotels/?locale=en-US&curr=INR&allianceid=${affiliateId}&sid=${subId}`;
        break;
      case 'flights':
        tripUrl = `https://www.trip.com/flights/?locale=en-US&curr=INR&allianceid=${affiliateId}&sid=${subId}`;
        break;
      case 'activities':
        tripUrl = `https://www.trip.com/things-to-do/?locale=en-US&curr=INR&allianceid=${affiliateId}&sid=${subId}`;
        break;
    }
    
    window.open(tripUrl, '_blank');
  };

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
    <div className="w-full my-16 relative z-10">
      {/* Decorative background glow - Dynamic based on active tab */}
      <div className={`absolute -inset-2 bg-gradient-to-r rounded-[2rem] opacity-20 blur-2xl -z-10 transition-colors duration-500
        ${activeTab === 'hotels' ? 'from-blue-500 via-indigo-500 to-blue-600' : 
          activeTab === 'flights' ? 'from-sky-500 via-blue-500 to-indigo-600' : 
          'from-emerald-500 via-teal-500 to-green-600'}`}
      ></div>
      
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row min-h-[550px]">
        {/* Left Side - Image Section */}
        <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full group">
          <Image
            src="/images/destinations/white-rann-hero.jpg"
            alt="Travel to Kutch"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent"></div>
          
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Trip.com Partner
              </span>
            </div>
            <h3 className="text-3xl font-sora font-bold leading-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 drop-shadow-sm">
              Your Journey Starts Here
            </h3>
            <p className="text-purple-100 font-inter text-sm opacity-90">
              One platform for all your travel needs
            </p>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="lg:w-3/5 p-8 md:p-12 lg:p-14 flex flex-col bg-gradient-to-br from-white via-gray-50/50 to-white">
          
          {/* Custom Tab Switcher */}
          <div className="flex flex-wrap gap-2 mb-8 bg-gray-100/80 p-1.5 rounded-2xl w-fit backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'hotels'
                  ? 'bg-white text-blue-600 shadow-md scale-105'
                  : 'text-gray-500 hover:text-blue-600 hover:bg-white/50'
              }`}
            >
              <Hotel className="w-4 h-4" />
              <span className="capitalize">Hotels</span>
            </button>
            <button
              onClick={() => setActiveTab('flights')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'flights'
                  ? 'bg-white text-sky-600 shadow-md scale-105'
                  : 'text-gray-500 hover:text-sky-600 hover:bg-white/50'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span className="capitalize">Flights</span>
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'activities'
                  ? 'bg-white text-emerald-600 shadow-md scale-105'
                  : 'text-gray-500 hover:text-emerald-600 hover:bg-white/50'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span className="capitalize">Activities</span>
            </button>
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl ${content[activeTab].bg} ${content[activeTab].color}`}>
                {content[activeTab].icon}
              </div>
              <span className={`${content[activeTab].color} font-bold tracking-wide uppercase text-sm`}>
                {activeTab === 'hotels' ? 'Accommodations' : activeTab === 'flights' ? 'Travel' : 'Experiences'}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-gray-900 mb-4 leading-tight">
              {content[activeTab].title}
            </h2>
            <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
              {content[activeTab].description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {content[activeTab].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:border-gray-200 transition-colors">
                  <CheckCircle className={`w-5 h-5 shrink-0 ${content[activeTab].color}`} />
                  <span className="font-medium text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleTripRedirect(activeTab)}
            className={`w-full bg-gradient-to-r ${content[activeTab].button} text-white font-bold py-5 px-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg group`}
          >
            <span>Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
            <Globe className="w-4 h-4" />
            <span>Global Travel Partner • Secure Booking</span>
          </div>
        </div>
      </div>
    </div>
  );
}
