'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Map, Sun, Snowflake, CheckCircle, ExternalLink, Clock, Car, AlertCircle, Info, Shield, ShoppingBag, MapPin, Ticket } from 'lucide-react';
import Navigation from '../components/Navigation';
import GoldenFooter from '../components/GoldenFooter';
import MetallicHeading from '../components/MetallicHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function PlanPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1️⃣ Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl opacity-30"></div>
           {/* Grid Pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 pt-32 lg:pt-40 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <MetallicHeading 
              text="Plan Your Perfect Kutch Adventure"
              as="h1"
              variant="gold"
              className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] font-sora tracking-tight drop-shadow-2xl"
            />
            
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold tracking-wide text-amber-500 shadow-lg shadow-amber-500/10 mb-8 backdrop-blur-md">
              <Map className="w-4 h-4" />
              <span>Travel Toolkit</span>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 max-w-3xl mx-auto border-l-4 border-amber-500/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              Your comprehensive guide to exploring the Land of White Desert. Curated itineraries, essential permits, packing checklists, and distance maps—everything you need for a seamless journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Featured Itineraries */}
      <section className="py-24 relative bg-gray-900/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80"></div>
        <div className="relative max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <MetallicHeading text="Curated Itineraries" as="h2" variant="silver" className="text-4xl font-bold mb-4 font-sora" />
            <p className="text-lg text-gray-400">Expertly crafted plans for every traveler</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 3-4 Days */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-900/20 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sora">3-4 Days: The Essentials</h3>
              <p className="text-amber-400/80 text-sm mb-6 font-medium uppercase tracking-wider">Perfect Long Weekend</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="font-bold text-amber-500 min-w-[60px]">Day 1</span>
                  <span className="text-gray-300 text-sm">Bhuj Heritage: Aina Mahal, Prag Mahal & Swaminarayan Temple</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-amber-500 min-w-[60px]">Day 2</span>
                  <span className="text-gray-300 text-sm">The Great Rann: Kalo Dungar & White Desert Sunset</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-amber-500 min-w-[60px]">Day 3</span>
                  <span className="text-gray-300 text-sm">Coastal Charm: Mandvi Beach & Vijay Vilas Palace</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                 <button className="w-full py-3 rounded-xl bg-white/5 text-amber-500 font-semibold border border-amber-500/20 hover:bg-amber-500 hover:text-black transition-all">
                    View Details
                 </button>
              </div>
            </motion.div>

            {/* 5 Days (Featured) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)] transform md:-translate-y-6"
            >
              <div className="absolute top-0 right-0 px-4 py-1 bg-amber-500 text-black text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                 Most Popular
              </div>
              
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <Map className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sora">5 Days: The Classic Kutch</h3>
              <p className="text-amber-200/80 text-sm mb-6 font-medium uppercase tracking-wider">Best Seller</p>
              
              <ul className="space-y-4 mb-8">
                {[
                    { day: "Day 1", text: "Arrival in Bhuj & Local Sightseeing" },
                    { day: "Day 2", text: "Road to Heaven & White Rann Stay" },
                    { day: "Day 3", text: "Mata na Madh & Lakhpat Fort" },
                    { day: "Day 4", text: "Narayan Sarovar & Mandvi Beach" },
                    { day: "Day 5", text: "Craft Villages (Ajrakhpur) & Departure" }
                ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                        <span className="font-bold text-amber-400 min-w-[60px]">{item.day}</span>
                        <span className="text-gray-300 text-sm">{item.text}</span>
                    </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                  Request This Plan
              </button>
            </motion.div>

            {/* 7 Days */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                <Car className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sora">7 Days: Kutch Explorer</h3>
              <p className="text-blue-300 text-sm mb-6 font-medium uppercase tracking-wider">Complete Expedition</p>
              
              <ul className="space-y-4 mb-8">
                 <li className="flex gap-3">
                  <span className="font-bold text-blue-400 min-w-[60px]">Day 1-2</span>
                  <span className="text-gray-300 text-sm">Deep Dive: Bhuj Heritage & Museums</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-400 min-w-[60px]">Day 3-4</span>
                  <span className="text-gray-300 text-sm">North Kutch: Dholavira & Fossil Park</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-400 min-w-[60px]">Day 5-7</span>
                  <span className="text-gray-300 text-sm">West & South: Rann, Lakhpat & Mandvi Leisure</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                 <button className="w-full py-3 rounded-xl bg-white/5 text-blue-400 font-semibold border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all">
                    View Details
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Permit Guide (Redesigned) */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">
                  <Ticket className="w-4 h-4" />
                  <span>Essential Travel Documents</span>
              </div>
              <MetallicHeading text="White Rann Permit Guide" as="h2" variant="gold" className="text-4xl md:text-5xl font-bold font-sora mb-6" />
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
                To experience the magic of the White Rann (Dhordo), a permit is mandatory as it sits near the international border. Don't worry—getting one is simple and digital.
              </p>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-amber-500" />
                  <span>Permit Costs</span>
                </h4>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-400">Adult</span>
                    <span className="font-bold text-amber-400 text-lg">₹100 <span className="text-xs text-gray-500 font-normal">/ person</span></span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-400">Child (6-12 yrs)</span>
                    <span className="font-bold text-amber-400 text-lg">₹50 <span className="text-xs text-gray-500 font-normal">/ person</span></span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Vehicle (Car)</span>
                    <span className="font-bold text-amber-400 text-lg">₹50 <span className="text-xs text-gray-500 font-normal">/ vehicle</span></span>
                  </li>
                </ul>
              </div>

              <a 
                href="https://www.rannpermit.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-700 text-black px-8 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
              >
                <span>Apply for Permit Online</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-gray-900 rounded-3xl p-8 border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-white mb-8 font-sora">How to Apply in 5 Steps</h3>
                <div className="space-y-6 relative z-10">
                  {[
                    { title: "Visit Website", desc: "Go to rannpermit.com official portal." },
                    { title: "Enter Details", desc: "Fill name, age, and vehicle number." },
                    { title: "Upload ID", desc: "Aadhar Card or Driving License photo." },
                    { title: "Online Payment", desc: "Pay securely via UPI or Card." },
                    { title: "Download", desc: "Save the PDF on your phone." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-800 border border-white/10 text-amber-500 rounded-full flex items-center justify-center font-bold font-sora shadow-inner group-hover:bg-amber-500 group-hover:text-black transition-colors">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{step.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Packing Checklist */}
      <section className="py-24 bg-black/40 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Be Prepared</span>
            </div>
            <MetallicHeading text="Smart Packing List" as="h2" variant="silver" className="text-4xl font-bold mb-6 font-sora" />
            <p className="text-lg text-gray-400">Don't let the desert weather surprise you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Winter */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8 border-b border-blue-500/20 pb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/30">
                  <Snowflake className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-sora">Winter Season</h3>
                  <p className="text-blue-300 text-sm">Nov - Feb (Rann Utsav)</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Heavy Woolens (Nights ~5°C)",
                  "Thermal Innerwear",
                  "Moisturizer & Lip Balm",
                  "Sunglasses (White Glare)",
                  "Walking Shoes",
                  "Power Bank",
                  "Original ID Proof",
                  "Cash (Remote Areas)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Summer/Monsoon */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8 border-b border-orange-500/20 pb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                  <Sun className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-sora">Summer / Monsoon</h3>
                  <p className="text-orange-300 text-sm">Mar - Oct (Off-Season)</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Light Cotton Clothes",
                  "Sunscreen (SPF 50+)",
                  "Hat/Cap & Scarf",
                  "Dark Sunglasses",
                  "Flip Flops/Sandals",
                  "Mosquito Repellent",
                  "Hydration Bottle",
                  "Umbrella (Monsoon)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Distance Matrix */}
      <section className="py-24 relative overflow-hidden bg-white/5">
        <div className="absolute inset-0 bg-[url('/images/noise.webp')] opacity-[0.05]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 text-gray-400 font-bold tracking-widest uppercase text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Travel Logistics</span>
            </div>
            <MetallicHeading text="Distance Matrix" as="h2" variant="gold" className="text-3xl md:text-4xl font-bold mb-4 font-sora" />
            <p className="text-gray-400">Plan your drive times across the vast Kutch landscape.</p>
          </div>

          <div className="bg-black/50 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-5 font-bold text-amber-500 border-b border-white/10">From / To</th>
                    <th className="p-5 font-bold text-white border-b border-white/10 font-sora">Bhuj</th>
                    <th className="p-5 font-bold text-white border-b border-white/10 font-sora">Dhordo (Rann)</th>
                    <th className="p-5 font-bold text-white border-b border-white/10 font-sora">Mandvi</th>
                    <th className="p-5 font-bold text-white border-b border-white/10 font-sora">Dholavira</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-5 font-bold text-amber-500 font-sora">Bhuj</td>
                    <td className="p-5 text-gray-600 font-mono">-</td>
                    <td className="p-5 text-gray-300">85 km <span className="text-xs text-gray-500 block">(1.5 hr)</span></td>
                    <td className="p-5 text-gray-300">60 km <span className="text-xs text-gray-500 block">(1 hr)</span></td>
                    <td className="p-5 text-gray-300">220 km <span className="text-xs text-gray-500 block">(4.5 hr)</span></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-5 font-bold text-amber-500 font-sora">Dhordo</td>
                    <td className="p-5 text-gray-300">85 km <span className="text-xs text-gray-500 block">(1.5 hr)</span></td>
                    <td className="p-5 text-gray-600 font-mono">-</td>
                    <td className="p-5 text-gray-300">140 km <span className="text-xs text-gray-500 block">(3 hr)</span></td>
                    <td className="p-5 text-gray-300">300 km <span className="text-xs text-gray-500 block">(6 hr)</span></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-5 font-bold text-amber-500 font-sora">Mandvi</td>
                    <td className="p-5 text-gray-300">60 km <span className="text-xs text-gray-500 block">(1 hr)</span></td>
                    <td className="p-5 text-gray-300">140 km <span className="text-xs text-gray-500 block">(3 hr)</span></td>
                    <td className="p-5 text-gray-600 font-mono">-</td>
                    <td className="p-5 text-gray-300">280 km <span className="text-xs text-gray-500 block">(5.5 hr)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-amber-500/10 border-t border-amber-500/20 text-sm text-amber-200/80 flex items-start gap-3">
              <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
              <span>Safety Tip: Roads in Kutch are excellent, but wildlife often crosses at night. We recommend avoiding night driving on remote village roads.</span>
            </div>
          </div>
        </div>
      </section>

      <GoldenFooter />
    </main>
  );
}
