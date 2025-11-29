'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Map, Sun, Snowflake, CheckCircle, ExternalLink, Clock, Car, AlertCircle, Info } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function PlanPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-cyan-100 selection:text-cyan-900">
      {/* 1️⃣ Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 pt-24 lg:pt-32 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-sm font-bold tracking-wide text-cyan-700 shadow-lg shadow-cyan-500/10 mb-8">
              <Map className="w-4 h-4" />
              <span>Travel Toolkit</span>
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] font-sora tracking-tight">
              <span className="block text-gray-900 drop-shadow-sm">Plan Your Perfect</span>
              <span className="holographic">Kutch Adventure</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed font-inter mb-12 max-w-2xl mx-auto">
              Everything you need to know before you go. Curated itineraries, permit guides, and essential packing lists for a seamless journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Featured Itineraries */}
      <section className="py-24 relative">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-sora text-gray-900">Curated Itineraries</h2>
            <p className="text-lg text-gray-600">Choose the perfect plan for your time and interests</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 3-4 Days */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sora">3-4 Days: Kutch Highlights</h3>
              <p className="text-gray-500 text-sm mb-6 font-medium uppercase tracking-wider">The Perfect Long Weekend</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-gray-700">
                  <span className="font-bold text-blue-600 min-w-[60px]">Day 1:</span>
                  <span className="text-sm">Bhuj City: Prag Mahal, Aina Mahal, Swaminarayan Temple & Hamirsar Talav</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="font-bold text-blue-600 min-w-[60px]">Day 2:</span>
                  <span className="text-sm">Road to Heaven, Kalo Dungar & White Rann (Dhordo)</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="font-bold text-blue-600 min-w-[60px]">Day 3:</span>
                  <span className="text-sm">Mandvi Beach & Vijay Vilas Palace</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="font-bold text-blue-600 min-w-[60px]">Day 4:</span>
                  <span className="text-sm">Craft Villages: Bhujodi, Ajrakhpur & Hiralaxmi Park</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 text-center bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition-colors">
                Customize This Trip
              </Link>
            </motion.div>

            {/* 5 Days */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-8 shadow-xl text-white transform md:-translate-y-4 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                  <Map className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-sora">5 Days: The Classic</h3>
                <p className="text-blue-100 text-sm mb-6 font-medium uppercase tracking-wider">Most Popular Choice</p>
                
                <ul className="space-y-4 mb-8 text-blue-50">
                  <li className="flex gap-3">
                    <span className="font-bold text-white min-w-[60px]">Day 1:</span>
                    <span className="text-sm">Bhuj City: Palaces, Museum & Local Bazaar</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-white min-w-[60px]">Day 2:</span>
                    <span className="text-sm">Road to Heaven, Kalo Dungar & White Rann</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-white min-w-[60px]">Day 3:</span>
                    <span className="text-sm">Mandvi Beach & Vijay Vilas Palace</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-white min-w-[60px]">Day 4:</span>
                    <span className="text-sm">Western Kutch: Mata na Madh, Narayan Sarovar & Koteshwar</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-white min-w-[60px]">Day 5:</span>
                    <span className="text-sm">Craft Villages: Bhujodi, Ajrakhpur & Shopping</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full py-3 text-center bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                  Book This Package
                </Link>
              </div>
            </motion.div>

            {/* 7 Days */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-gradient-to-br from-white to-teal-50 rounded-3xl p-8 shadow-xl border border-teal-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <Car className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sora">7 Days: Kutch Explorer</h3>
              <p className="text-gray-500 text-sm mb-6 font-medium uppercase tracking-wider">The Complete Experience</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-gray-700">
                  <span className="font-bold text-teal-600">Day 1-2:</span>
                  <span>Bhuj & Mandvi Coastal Charm</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="font-bold text-teal-600">Day 3-4:</span>
                  <span>White Rann & Lakhpat Fort</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="font-bold text-teal-600">Day 5:</span>
                  <span>Dholavira & Fossil Park</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="font-bold text-teal-600">Day 6-7:</span>
                  <span>Little Rann (Wild Ass) & Crafts</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 text-center bg-teal-50 text-teal-700 font-bold rounded-xl hover:bg-teal-100 transition-colors">
                Plan My Expedition
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Permit Guide */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl font-bold font-sora text-gray-900 mb-6">White Rann Permit Guide</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To visit the White Rann (Dhordo), all visitors must obtain a permit. This is a mandatory requirement by the BSF (Border Security Force) as it is a border area.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  <span>Important Details</span>
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Cost (Adult)</span>
                    <span className="font-bold">₹100 per person</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Cost (Child 6-12)</span>
                    <span className="font-bold">₹50 per person</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Vehicle (Car)</span>
                    <span className="font-bold">₹50 per vehicle</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span>Validity</span>
                    <span className="font-bold">1 Day (Date Specific)</span>
                  </li>
                </ul>
              </div>

              <a 
                href="https://www.rannpermit.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30"
              >
                <span>Get Permit Online</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h3>
                <div className="space-y-8">
                  {[
                    { title: "Visit Official Website", desc: "Go to rannpermit.com and click on 'Start Application'." },
                    { title: "Fill Details", desc: "Enter name, age, gender, and ID proof details for all travelers." },
                    { title: "Upload ID", desc: "Upload a clear photo of ID proof (Aadhar/Driving License)." },
                    { title: "Make Payment", desc: "Pay online via UPI, Card, or Netbanking." },
                    { title: "Download Pass", desc: "Save the PDF on your phone. Hard copy is not mandatory." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.desc}</p>
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
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-sora text-gray-900">Smart Packing List</h2>
            <p className="text-lg text-gray-600">Don't let the desert weather surprise you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Winter */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-blue-50 rounded-3xl p-8 border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Snowflake className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Winter (Nov - Feb)</h3>
                  <p className="text-blue-600 font-medium">Rann Utsav Season</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Heavy Woolens (Nights are 5°C)",
                  "Thermals & Warm Socks",
                  "Moisturizer & Lip Balm",
                  "Sunglasses (White Rann Glare)",
                  "Comfortable Walking Shoes",
                  "Power Bank",
                  "ID Proofs (Original)",
                  "Cash (ATMs are scarce)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Summer/Monsoon */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-orange-50 rounded-3xl p-8 border border-orange-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Sun className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Summer (Mar - Oct)</h3>
                  <p className="text-orange-600 font-medium">Off-Season Travel</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Light Cotton Clothes",
                  "Sunscreen (SPF 50+)",
                  "Hat/Cap & Scarf",
                  "Sunglasses",
                  "Flip Flops/Sandals",
                  "Mosquito Repellent",
                  "Water Bottle (Hydration)",
                  "Umbrella (Monsoon)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Distance Matrix */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.05]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">Distance Matrix</h2>
            <p className="text-gray-400">Plan your travel times (approximate)</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 font-bold text-cyan-400 border-b border-white/10">From / To</th>
                    <th className="p-4 font-bold border-b border-white/10">Bhuj</th>
                    <th className="p-4 font-bold border-b border-white/10">Dhordo (Rann)</th>
                    <th className="p-4 font-bold border-b border-white/10">Mandvi</th>
                    <th className="p-4 font-bold border-b border-white/10">Dholavira</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-4 font-bold text-cyan-400">Bhuj</td>
                    <td className="p-4 text-gray-500">-</td>
                    <td className="p-4">85 km (1.5h)</td>
                    <td className="p-4">60 km (1h)</td>
                    <td className="p-4">220 km (4.5h)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-cyan-400">Dhordo</td>
                    <td className="p-4">85 km (1.5h)</td>
                    <td className="p-4 text-gray-500">-</td>
                    <td className="p-4">140 km (3h)</td>
                    <td className="p-4">300 km (6h)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-cyan-400">Mandvi</td>
                    <td className="p-4">60 km (1h)</td>
                    <td className="p-4">140 km (3h)</td>
                    <td className="p-4 text-gray-500">-</td>
                    <td className="p-4">280 km (5.5h)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-white/5 text-sm text-gray-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>Roads in Kutch are generally excellent, but allow extra time for stops and photography.</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
