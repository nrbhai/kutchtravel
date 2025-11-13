'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Tag, Camera, Palette } from 'lucide-react';
import Navigation from '../../components/Navigation';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AncientCraftsKutchPage() {
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-sm font-bold text-white">
              Culture
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sora leading-tight bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Exploring the Ancient Crafts of Kutch: A Heritage Journey
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <div>
                <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                <div className="text-sm">Cultural Historian</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>10 min read</span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-orange-100 to-red-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Palette className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500 font-semibold">Traditional Kutchi Crafts</p>
                <p className="text-sm text-gray-400">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Kutch is not just a geographical wonder; it's a living museum of India's richest craft traditions. For centuries, the artisans of this region have perfected their skills, passing them down through generations, creating masterpieces that tell the story of their culture and heritage.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">Rogan Art: Painting with Oil</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rogan art is perhaps one of the most unique crafts you'll find in Kutch. Using thick, brightly colored castor oil paint, artisans create intricate designs on fabric. The paint is carefully heated and then applied using a metal rod, creating symmetrical patterns that are nothing short of mesmerizing.
            </p>

            {/* Image Placeholder 1 */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-red-100 to-orange-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Rogan Art Process</p>
                  <p className="text-sm text-gray-400">Image: Artisan creating Rogan art</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 my-8 border border-orange-100">
              <h3 className="text-xl font-bold mb-3 text-gray-900">🎨 Master Craftsman</h3>
              <p className="text-gray-700">
                The Abdul Gafur Khatri family in Nirona village are among the last practitioners of this 400-year-old art form. Visiting their workshop offers insight into the painstaking process and dedication required to keep this tradition alive.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">Bandhani: The Art of Tie-Dye</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The vibrant Bandhani textiles of Kutch are instantly recognizable. This intricate tie-dye technique involves tying thousands of tiny knots in the fabric before dyeing, creating beautiful patterns of dots and shapes. A single sari can have over 100,000 knots, each tied by hand.
            </p>

            {/* Image Placeholder 2 */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-pink-100 to-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Bandhani Patterns</p>
                  <p className="text-sm text-gray-400">Image: Colorful Bandhani textiles</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">Ajrakh Block Printing</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This ancient craft uses natural dyes and hand-carved wooden blocks to create stunning geometric patterns. The process is labor-intensive, often taking several weeks to complete a single piece. The blue and red patterns are iconic to the region.
            </p>

            {/* Image Placeholder 3 */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-blue-100 to-indigo-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Ajrakh Block Printing</p>
                  <p className="text-sm text-gray-400">Image: Block printing process</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">Where to Visit</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">🧵 Bhujodi Village</h4>
                <p className="text-gray-700">Famous for traditional weaving. Watch skilled weavers create intricate patterns on handlooms.</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">🎨 Nirona Village</h4>
                <p className="text-gray-700">Home to Rogan art and traditional bell making. Meet master artisans at work.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">🖼️ Ajrakhpur</h4>
                <p className="text-gray-700">Experience Ajrakh block printing using natural dyes and traditional techniques.</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">🏛️ Bhuj Markets</h4>
                <p className="text-gray-700">Multiple craft villages and markets showcasing diverse artisan traditions.</p>
              </div>
            </div>

            {/* Image Placeholder 4 */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-green-100 to-emerald-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Artisan Village</p>
                  <p className="text-sm text-gray-400">Image: Traditional craft village scene</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-8">Supporting Local Artisans</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                When you purchase crafts directly from artisans, you're not just buying a souvenir; you're supporting families and helping preserve endangered art forms. Many villages now offer workshops where tourists can try their hand at these crafts.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Buy directly from artisans rather than middlemen</li>
                <li>Participate in craft workshops to understand the skill involved</li>
                <li>Share your experiences on social media to raise awareness</li>
                <li>Respect the time and skill that goes into each piece</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Crafts
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Heritage
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Artisans
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Culture
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Explore Traditional Crafts</h3>
            <p className="mb-6 text-white/90">Visit artisan villages and experience the living heritage of Kutch.</p>
            <Link href="/crafts" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Discover Kutchi Crafts
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
