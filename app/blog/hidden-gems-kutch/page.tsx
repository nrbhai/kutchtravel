'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Tag, Camera, MapPin, Compass } from 'lucide-react';
import Navigation from '../../components/Navigation';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HiddenGemsKutchPage() {
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-bold text-white">
              Travel Tips
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sora leading-tight bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            5 Hidden Gems in Kutch You Must Visit
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <div>
                <div className="font-semibold text-gray-900">Anjali Desai</div>
                <div className="text-sm">Adventure Traveler</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January 5, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>7 min read</span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-green-100 to-teal-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Compass className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500 font-semibold">Hidden Destinations of Kutch</p>
                <p className="text-sm text-gray-400">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              While the White Rann and Bhuj attract most tourists, Kutch has numerous hidden gems that offer equally breathtaking experiences without the crowds.
            </p>


            {/* Hidden Gem 1: Kotay Sun Temple */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">1</span>
                Kotay Sun Temple
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Just an hour north of Bhuj, the Sun Temple of Kotay (also known as Ra Lakha) dates back to the 9th century CE. Built of yellow and red sandstone, this little-known temple stands on a platform facing west, surrounded by the desert plains of Kutch. The temple is adorned with intricate carvings, including the Navagrahas (nine planets) on the lintel, yaksha guardians on the pillars, and a jali (stone screen) window topped with a statue of Surya. The garbhagriha (sanctum) contains a plaque flanked by an image of Surya, though some scholars believe the temple may also be dedicated to Shiva. The site is peaceful, unguarded, and best visited with a local guide. The northern facade is the best preserved, featuring deities, apsaras, and mythological animals like yalis. 
              </p>
              <div className="relative h-80 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-blue-100 to-cyan-100">
                <img src="/images/destinations/kotay-temple/kotay-sun-temple.jpg" alt="Kotay Sun Temple" className="object-cover w-full h-full" />
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2">🛕 Visitor Info</h4>
                <p className="text-gray-700">Kotay is about 25–40 km from Bhuj. The site is not well marked, so hire a local guide or taxi. There are no facilities at the temple—carry water and visit in the morning or late afternoon for the best experience.</p>
              </div>
            </div>


            {/* Hidden Gem 2: Kadia Dhrow */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">2</span>
                Kadia Dhrow Canyons
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kadia Dhrow is a dramatic landscape of colorful canyons and rock formations, often called the "Grand Canyon of Kutch." It’s a paradise for photographers, geology enthusiasts, and anyone seeking a surreal, otherworldly experience.
              </p>
              <div className="relative h-80 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-purple-100 to-pink-100">
                <img src="/images/destinations/kadia-dhrow/kadia-dhrow-canyon.jpg" alt="Kadia Dhrow Canyon" className="object-cover w-full h-full" />
              </div>
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">🪨 Geology Tip</h4>
                <p className="text-gray-700">Best visited in the golden hours for stunning light and colors. Wear sturdy shoes for exploring the rocky terrain.</p>
              </div>
            </div>
            {/* Hidden Gem 3: Bhujodi Village */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">3</span>
                Bhujodi Village
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Just 8 km southeast of Bhuj, Bhujodi is a vibrant artisan village renowned for its handwoven textiles and traditional crafts. Home to the Vankar community of weavers, the village offers visitors a chance to see artisans at work on their looms, shop for authentic shawls, stoles, and carpets, and learn about the region’s rich textile heritage. The Hiralaxmi Craft Park in Bhujodi is a must-visit for those interested in Kutch’s living traditions.
              </p>
              <div className="relative h-80 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-orange-100 to-yellow-100">
                <img src="/images/destinations/bhujodi/bhujodi-weaving.jpg" alt="Bhujodi Weaving" className="object-cover w-full h-full" />
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-2">🧶 Craft Tip</h4>
                <p className="text-gray-700">Visit the village workshops and the Hiralaxmi Craft Park for demonstrations. Support local artisans by purchasing directly from them.</p>
              </div>
            </div>



            {/* Hidden Gem 4 */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">4</span>
                India Bridge (Pul of Bharat)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This 250-year-old engineering marvel was built using only locally available materials. The structure has withstood earthquakes and floods, a testament to traditional construction techniques.
              </p>

              <div className="relative h-80 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-green-100 to-emerald-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Compass className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">India Bridge</p>
                    <p className="text-sm text-gray-400">Image: Historic bridge structure</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-2">🏛️ History Note</h4>
                <p className="text-gray-700">Built during the princely state era. A fine example of indigenous engineering without modern tools.</p>
              </div>
            </div>

            {/* Hidden Gem 5: Koteshwar & Narayan Sarovar */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">5</span>
                Koteshwar & Narayan Sarovar
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At the westernmost tip of India, Koteshwar Temple and Narayan Sarovar form a unique spiritual and scenic duo. Koteshwar is an ancient Shiva temple perched on the Arabian Sea, offering dramatic coastal views and a tranquil, sacred atmosphere. Just a few kilometers away, Narayan Sarovar is one of Hinduism’s five holy lakes, surrounded by temples and revered for its serenity. Visiting both sites together provides a blend of spiritual experience, history, and natural beauty—perfect for reflection and photography.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                  <img src="/images/destinations/koteshwar/koteshwar-temple.jpg" alt="Koteshwar Temple" className="object-cover w-full h-full" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <img src="/images/destinations/narayan-sarovar-koteshwar/narayan-sarovar.jpg" alt="Narayan Sarovar" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                <h4 className="font-bold text-gray-900 mb-2">🛕 Travel Tip</h4>
                <p className="text-gray-700">Plan to visit both Koteshwar and Narayan Sarovar together. Sunset at Koteshwar is especially beautiful, and the peaceful lake at Narayan Sarovar is ideal for quiet reflection. Facilities are limited, so carry essentials.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-12">Planning Your Visit</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2">🚗 Transportation</h4>
                <p className="text-gray-700 text-sm">Rent a private vehicle to reach these remote locations. Public transport is limited.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">🎒 Essentials</h4>
                <p className="text-gray-700 text-sm">Carry water, snacks, and sun protection. Facilities are minimal at most locations.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-5 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-2">📅 Best Season</h4>
                <p className="text-gray-700 text-sm">October to March offers pleasant weather for exploration.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-2">👨‍🏫 Local Guide</h4>
                <p className="text-gray-700 text-sm">Consider hiring a local guide for cultural context and navigation.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Hidden Gems
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Off-beat
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Adventure
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Nature
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Discover More Hidden Treasures</h3>
            <p className="mb-6 text-white/90">Explore the lesser-known wonders of Kutch for authentic experiences.</p>
            <Link href="/hidden-gems" className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              View All Hidden Gems
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
