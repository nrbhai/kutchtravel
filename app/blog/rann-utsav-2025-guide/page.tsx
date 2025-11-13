'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Tag, Camera, Music, Tent, ShoppingBag } from 'lucide-react';
import Navigation from '../../components/Navigation';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function RannUtsav2025GuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-6 py-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors font-semibold">
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold text-white">
              Events
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sora leading-tight bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Rann Utsav 2025: Complete Festival Guide
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <div>
                <div className="font-semibold text-gray-900">Karan Mehta</div>
                <div className="text-sm">Festival Guide</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>11 min read</span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-pink-100 to-purple-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Music className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500 font-semibold">Rann Utsav Festival</p>
                <p className="text-sm text-gray-400">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The Rann Utsav is Gujarat's most spectacular cultural festival, celebrating the unique heritage of Kutch against the stunning backdrop of the White Rann.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Festival Overview</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-100">
              <p className="text-gray-700 leading-relaxed">
                Running from November to February, the Rann Utsav transforms the White Desert into a vibrant carnival of culture, crafts, music, and tradition. The government sets up a massive tent city with all modern amenities while maintaining the rustic charm.
              </p>
            </div>

            {/* Festival Grounds Placeholder */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-orange-100 to-pink-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Tent className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Tent City Overview</p>
                  <p className="text-sm text-gray-400">Image: Festival grounds aerial view</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">What to Experience</h2>

            {/* Cultural Performances */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <Music className="w-8 h-8 text-pink-600" />
                Cultural Performances
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Traditional folk dances performed every evening</li>
                <li>Live music performances featuring local artists</li>
                <li>Fire dance demonstrations under the stars</li>
                <li>Traditional puppetry shows showcasing local stories</li>
              </ul>

              <div className="relative h-72 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-pink-100 to-red-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Music className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Cultural Dance Performance</p>
                    <p className="text-sm text-gray-400">Image: Folk dancers in action</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Adventure Activities */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <span className="text-3xl">🎪</span>
                Adventure Activities
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-2">🐪 Camel Rides</h4>
                  <p className="text-gray-700 text-sm">Explore the White Rann on camelback during sunset for magical views.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                  <h4 className="font-bold text-gray-900 mb-2">🏍️ ATV Rides</h4>
                  <p className="text-gray-700 text-sm">Thrilling quad bike rides across the salt desert.</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                  <h4 className="font-bold text-gray-900 mb-2">🪂 Paramotoring</h4>
                  <p className="text-gray-700 text-sm">Aerial views of the Rann (weather permitting).</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <h4 className="font-bold text-gray-900 mb-2">🎈 Hot Air Balloons</h4>
                  <p className="text-gray-700 text-sm">Sunrise balloon rides for breathtaking panoramas.</p>
                </div>
              </div>

              <div className="relative h-72 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-blue-100 to-cyan-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Adventure Activities</p>
                    <p className="text-sm text-gray-400">Image: Camel ride at sunset</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopping */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <ShoppingBag className="w-8 h-8 text-orange-600" />
                Shopping
              </h3>
              <p className="text-gray-700 mb-4">
                The festival features a vibrant market where you can purchase authentic handicrafts directly from artisans:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Traditional textiles with intricate embroidery</li>
                <li>Handmade jewelry with mirror work and beads</li>
                <li>Leather goods and footwear</li>
                <li>Home decor items including wall hangings and cushions</li>
                <li>Paintings and artwork by local artists</li>
              </ul>

              <div className="relative h-72 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-yellow-100 to-orange-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Craft Market</p>
                    <p className="text-sm text-gray-400">Image: Colorful handicraft stalls</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Food */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <span className="text-3xl">🍽️</span>
                Food & Dining
              </h3>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-4 border border-green-100">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Traditional Gujarati thalis with unlimited servings</li>
                  <li>Street food stalls offering local specialties</li>
                  <li>Regional delicacies from across Kutch</li>
                  <li>Modern cafes with fusion cuisine</li>
                </ul>
              </div>

              <div className="relative h-72 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-red-100 to-pink-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Festival Food</p>
                    <p className="text-sm text-gray-400">Image: Traditional thali spread</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Accommodation Options</h2>
            <div className="grid gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
                  <Tent className="w-6 h-6 text-purple-600" />
                  Premium Tents
                </h4>
                <p className="text-gray-700 mb-2">AC tents with attached bathrooms and modern amenities. Higher rates but maximum comfort.</p>
                <p className="text-sm text-purple-600 font-semibold">₹5,000 - ₹8,000 per night</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
                  <Tent className="w-6 h-6 text-blue-600" />
                  Standard Tents
                </h4>
                <p className="text-gray-700 mb-2">Clean and comfortable accommodations with shared facilities. Budget-friendly option.</p>
                <p className="text-sm text-blue-600 font-semibold">₹2,500 - ₹4,000 per night</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
                  <span className="text-2xl">🏨</span>
                  Luxury Resorts
                </h4>
                <p className="text-gray-700 mb-2">Located outside the festival area. Premium experience with private transport to festival.</p>
                <p className="text-sm text-orange-600 font-semibold">₹10,000+ per night</p>
              </div>
            </div>

            {/* Accommodation Placeholder */}
            <div className="relative h-72 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-indigo-100 to-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Tent className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Tent Accommodations</p>
                  <p className="text-sm text-gray-400">Image: Premium tent interior</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Booking Tips</h2>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 mb-8 border border-yellow-100">
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Book Early:</strong> Reserve at least 2-3 months in advance</li>
                <li><strong>Peak Times:</strong> Weekends and full moon nights fill up fastest</li>
                <li><strong>Weekday Visits:</strong> Better rates and fewer crowds</li>
                <li><strong>Package Deals:</strong> Often include transfers and meals</li>
                <li><strong>Cancellation Policy:</strong> Check before booking as policies vary</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Getting There</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2">✈️ By Air</h4>
                <p className="text-gray-700 text-sm">Nearest airport: Bhuj (75 km). Regular flights from major cities.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-2">🚗 By Road</h4>
                <p className="text-gray-700 text-sm">Well-connected by road. Special buses during festival season.</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">🚖 Taxi Services</h4>
                <p className="text-gray-700 text-sm">Available from Bhuj airport and city. Book in advance.</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-2">🚌 Tour Packages</h4>
                <p className="text-gray-700 text-sm">Many agencies offer all-inclusive packages with transport.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">What to Pack</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-5 border border-pink-100">
                <h4 className="font-bold text-gray-900 mb-3">🧥 Clothing</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Warm jacket for evenings</li>
                  <li>Comfortable walking shoes</li>
                  <li>Light cotton clothes for day</li>
                  <li>Traditional wear (optional)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-3">📱 Essentials</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Power bank</li>
                  <li>Flashlight/headlamp</li>
                  <li>Sunscreen & sunglasses</li>
                  <li>Water bottle</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-3">📷 Photography</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Camera equipment</li>
                  <li>Extra batteries</li>
                  <li>Memory cards</li>
                  <li>Tripod</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Pro Tips</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Arrive Before Sunset</p>
                  <p className="text-gray-700 text-sm">Capture golden hour and the transition to evening festivities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-purple-50 rounded-xl p-5 border border-purple-100">
                <span className="text-2xl">🏘️</span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Visit Artisan Villages</p>
                  <p className="text-gray-700 text-sm">During the day, explore nearby craft villages for authentic experiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-orange-50 rounded-xl p-5 border border-orange-100">
                <span className="text-2xl">🍽️</span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Try Local Food</p>
                  <p className="text-gray-700 text-sm">Don't miss the traditional thalis and street food at the festival.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-green-50 rounded-xl p-5 border border-green-100">
                <span className="text-2xl">🌕</span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Full Moon Nights</p>
                  <p className="text-gray-700 text-sm">Book well in advance for full moon nights - they're the most popular!</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <span className="text-2xl">💵</span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Carry Cash</p>
                  <p className="text-gray-700 text-sm">Card facilities may be limited. Bring sufficient cash for shopping and tips.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Rann Utsav
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Festival
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Events
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Culture
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Experience Rann Utsav 2025</h3>
            <p className="mb-6 text-white/90">Join us for the most spectacular cultural festival in Gujarat!</p>
            <Link href="/destinations/dhordo-white-rann" className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Plan Your Visit
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
