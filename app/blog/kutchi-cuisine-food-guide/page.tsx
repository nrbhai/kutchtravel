'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Tag, Camera, UtensilsCrossed } from 'lucide-react';
import Navigation from '../../components/Navigation';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function KutchiCuisinePage() {
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-bold text-white">
              Food
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sora leading-tight bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            A Food Lover's Guide to Kutchi Cuisine
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <div>
                <div className="font-semibold text-gray-900">Meera Shah</div>
                <div className="text-sm">Food Blogger</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>December 28, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>6 min read</span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-yellow-100 to-orange-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <UtensilsCrossed className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500 font-semibold">Traditional Kutchi Dishes</p>
                <p className="text-sm text-gray-400">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Kutchi cuisine is a delightful blend of flavors, influenced by the region's desert climate, pastoral communities, and rich cultural heritage. The food here is designed to last in hot weather while providing maximum nutrition and energy.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Must-Try Dishes</h2>

            {/* Dish 1 - Dabeli */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">🥖 Dabeli</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This iconic street food consists of a spicy potato filling mixed with pomegranate, roasted peanuts, and special dabeli masala, served in a pav (bun). The sweet, spicy, and tangy flavors create an explosion of taste.
              </p>

              <div className="relative h-64 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-red-100 to-orange-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Dabeli - Street Food Delight</p>
                    <p className="text-sm text-gray-400">Image: Fresh Dabeli with garnish</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dish 2 - Khichdi */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">🍚 Khichdi</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Kutchi version of this comfort food is different from what you'll find elsewhere in India. Made with rice, lentils, and vegetables, it's often served with kadhi (yogurt curry) and papad.
              </p>

              <div className="relative h-64 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-yellow-100 to-green-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Khichdi with Kadhi</p>
                    <p className="text-sm text-gray-400">Image: Traditional thali</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dish 3 - Bajra Rotla */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">🫓 Bajra Rotla with Ringan no Oro</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pearl millet flatbread served with roasted eggplant curry and buttermilk is a traditional meal that sustained the pastoral communities. It's simple, nutritious, and delicious.
              </p>

              <div className="relative h-64 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-purple-100 to-pink-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Traditional Meal</p>
                    <p className="text-sm text-gray-400">Image: Bajra rotla and curry</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Kutchi Sweets</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-5 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">🥟 Mawa Kachori</h4>
                <p className="text-gray-700 text-sm">A sweet pastry filled with milk solids and dry fruits. Crispy on the outside, sweet on the inside.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 border border-pink-100">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">🌹 Gulab Pak</h4>
                <p className="text-gray-700 text-sm">A unique sweet made from rose petals and milk. Aromatic and delicately flavored.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-5 border border-yellow-100">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">🍬 Mohanthal</h4>
                <p className="text-gray-700 text-sm">A gram flour fudge with nuts. Rich, sweet, and perfect with chai.</p>
              </div>
            </div>

            {/* Sweets Image Placeholder */}
            <div className="relative h-72 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-pink-100 to-yellow-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Assorted Kutchi Sweets</p>
                  <p className="text-sm text-gray-400">Image: Traditional sweet platter</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-12">Where to Eat</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2">🛣️ Highway Dhabas</h4>
                <p className="text-gray-700">Local dhabas on the highway offer authentic flavors and generous portions at reasonable prices.</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">🏙️ Bhuj City Restaurants</h4>
                <p className="text-gray-700">Several restaurants serving traditional thalis with a variety of Kutchi dishes in one meal.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-2">🎪 Rann Utsav Food Stalls</h4>
                <p className="text-gray-700">During the festival, food stalls offer a wide variety of local dishes and street food.</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-2">🏠 Homestays</h4>
                <p className="text-gray-700">Many homestays provide home-cooked traditional meals prepared with authentic family recipes.</p>
              </div>
            </div>

            {/* Market/Restaurant Image Placeholder */}
            <div className="relative h-72 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-green-100 to-blue-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Local Food Market</p>
                  <p className="text-sm text-gray-400">Image: Bustling food stalls</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-12">Cultural Significance</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Food in Kutch is deeply connected to the lifestyle of its people. The use of dry lentils, minimal water in cooking, and preservation techniques all reflect adaptations to the desert environment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Due to cultural and religious practices, most Kutchi cuisine is vegetarian, making it a paradise for vegetarian food lovers seeking unique and flavorful dishes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Food
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Cuisine
              </span>
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Culture
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Local
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Taste the Flavors of Kutch</h3>
            <p className="mb-6 text-white/90">Experience authentic Kutchi cuisine on your next visit.</p>
            <Link href="/guide" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              View Travel Guide
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
