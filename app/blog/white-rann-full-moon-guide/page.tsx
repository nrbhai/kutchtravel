'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft, Tag, Camera, MapPin } from 'lucide-react';
import Navigation from '../../components/Navigation';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function WhiteRannFullMoonGuidePage() {
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold text-white">
              Destinations
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sora leading-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            The Ultimate Guide to Visiting the White Rann During Full Moon
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <div>
                <div className="font-semibold text-gray-900">Priya Patel</div>
                <div className="text-sm">Travel Writer</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500 font-semibold">White Rann at Full Moon</p>
                <p className="text-sm text-gray-400">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The White Rann of Kutch transforms into a surreal moonscape during full moon nights, creating one of nature's most spectacular displays. This vast expanse of white salt desert stretches as far as the eye can see, and under the silvery glow of a full moon, it becomes nothing short of magical.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">Best Time to Visit</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The ideal time to experience the White Rann during full moon is between November and February, when the weather is pleasant and the salt desert is at its pristine best. The Rann Utsav, a cultural festival celebrating the heritage of Kutch, runs during these months and adds an extra layer of excitement to your visit.
            </p>

            {/* Image Placeholder 1 */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-indigo-100 to-blue-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">White Rann Landscape</p>
                  <p className="text-sm text-gray-400">Image: Best viewing spots</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">What to Expect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              During full moon nights, the white salt crystals reflect moonlight, creating an ethereal silver-blue glow across the landscape. The experience is so surreal that many visitors describe it as walking on the moon. The clear night sky is perfect for stargazing, and you can see the Milky Way stretching across the horizon.
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 my-8 border border-purple-100">
              <h3 className="text-xl font-bold mb-3 text-gray-900">💡 Quick Tip</h3>
              <p className="text-gray-700">
                The best time to arrive is about an hour before sunset. This way, you can capture the transition from golden hour to blue hour, and finally to the magical moonlit landscape.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">Photography Tips</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>Bring a sturdy tripod for long-exposure shots</li>
              <li>Use manual mode on your camera to control exposure</li>
              <li>Arrive before sunset to capture the transition from day to night</li>
              <li>The blue hour (just after sunset) offers stunning color contrasts</li>
              <li>Wide-angle lenses work best to capture the vastness</li>
            </ul>

            {/* Image Placeholder 2 */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-orange-100 to-pink-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Photography Setup</p>
                  <p className="text-sm text-gray-400">Image: Camera equipment and settings</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">What to Bring</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2">🧥 Clothing</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Warm jacket (nights can be cold)</li>
                  <li>Comfortable walking shoes</li>
                  <li>Hat and sunglasses</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-2">📷 Photography Gear</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>DSLR/Mirrorless camera</li>
                  <li>Tripod</li>
                  <li>Extra batteries</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">🎒 Essentials</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Water and snacks</li>
                  <li>Flashlight or headlamp</li>
                  <li>Power bank</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-2">🏕️ Camping</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Booking confirmation</li>
                  <li>ID proof</li>
                  <li>Cash for local purchases</li>
                </ul>
              </div>
            </div>

            {/* Image Placeholder 3 */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-yellow-100 to-orange-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Camping Under the Moon</p>
                  <p className="text-sm text-gray-400">Image: Tent accommodations</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">Local Tip</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-100">
              <p className="text-gray-700 leading-relaxed">
                Stay at one of the traditional tent accommodations near Dhordo to wake up to sunrise views over the Rann. The local hosts often organize cultural performances and traditional Gujarati meals that enhance the experience. Book at least 2-3 months in advance, especially for full moon nights!
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                White Rann
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Full Moon
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Photography
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Rann Utsav
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Magic?</h3>
            <p className="mb-6 text-white/90">Plan your visit to the White Rann and witness nature's spectacular moonlit desert.</p>
            <Link href="/destinations/dhordo-white-rann" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Explore White Rann
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
