'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Tag, Camera, Aperture, Image as ImageIcon } from 'lucide-react';
import Navigation from '../../components/Navigation';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PhotographyGuideKutchPage() {
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold text-white">
              Photography
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sora leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Photography Guide: Capturing the Colors of Kutch
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <div>
                <div className="font-semibold text-gray-900">Vikram Singh</div>
                <div className="text-sm">Professional Photographer</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>December 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>9 min read</span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500 font-semibold">Kutch Photography</p>
                <p className="text-sm text-gray-400">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Kutch is a photographer's dream destination. The stark white desert, vibrant traditional attire, colorful crafts, and dramatic landscapes offer endless opportunities for stunning photography.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Best Photography Locations</h2>

            {/* Location 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">🏜️ The White Rann</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><strong>Golden Hour:</strong> Arrive before sunrise or during sunset for warm, soft light</li>
                <li><strong>Blue Hour:</strong> The time just after sunset creates magical blue tones</li>
                <li><strong>Full Moon Nights:</strong> Ethereal silver landscapes with unique lighting</li>
              </ul>

              <div className="relative h-72 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-cyan-100 to-blue-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Aperture className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">White Rann at Golden Hour</p>
                    <p className="text-sm text-gray-400">Image: Sunset photography</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location 2 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">🏪 Bhuj Markets</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Colorful textiles and traditional crafts</li>
                <li>Vibrant street life and local people</li>
                <li>Traditional architecture and details</li>
              </ul>

              <div className="relative h-72 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-orange-100 to-red-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Colorful Market Scene</p>
                    <p className="text-sm text-gray-400">Image: Textile market</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">🏘️ Traditional Villages</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Authentic rural life and daily activities</li>
                <li>Artisans at work creating traditional crafts</li>
                <li>Colorful traditional homes with intricate details</li>
              </ul>

              <div className="relative h-72 rounded-2xl overflow-hidden my-6 bg-gradient-to-br from-green-100 to-emerald-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-500 font-semibold">Village Life</p>
                    <p className="text-sm text-gray-400">Image: Artisan at work</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Technical Tips</h2>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-100">
              <h3 className="text-xl font-bold mb-3 text-gray-900">📷 For Desert Photography</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use polarizing filters to reduce glare from salt crystals</li>
                <li>Protect your gear from dust and sand with covers</li>
                <li>Early morning and late afternoon offer the best light</li>
                <li>Use a sturdy tripod for long exposures and stability</li>
                <li>Shoot in RAW format for maximum editing flexibility</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-6 border border-purple-100">
              <h3 className="text-xl font-bold mb-3 text-gray-900">👥 For Cultural Photography</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Always respect local customs and ask permission</li>
                <li>Capture candid moments during festivals and celebrations</li>
                <li>Focus on details: hands working on crafts, colorful fabrics, intricate jewelry</li>
                <li>Use natural light in workshops and homes</li>
                <li>Build rapport with subjects for genuine expressions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border border-green-100">
              <h3 className="text-xl font-bold mb-3 text-gray-900">🦅 For Wildlife Photography</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Bring telephoto lenses (minimum 200mm recommended)</li>
                <li>Visit wetlands during early morning for best bird activity</li>
                <li>Patience is key for capturing perfect moments</li>
                <li>Maintain a safe distance from wildlife</li>
                <li>Use fast shutter speeds to freeze bird motion</li>
              </ul>
            </div>

            {/* Camera Settings Image Placeholder */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-indigo-100 to-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Aperture className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Camera Setup Guide</p>
                  <p className="text-sm text-gray-400">Image: Recommended settings</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Drone Photography</h2>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 mb-8 border border-orange-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Many areas allow drone photography, offering breathtaking aerial perspectives of the White Rann, patterns in the landscape, and village layouts.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold text-red-600">
                ⚠️ Important: Check local regulations, especially near borders and military zones. Always get permission from authorities and local communities before flying.
              </p>
            </div>

            {/* Aerial View Placeholder */}
            <div className="relative h-80 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-yellow-100 to-orange-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Aerial Perspective</p>
                  <p className="text-sm text-gray-400">Image: Drone shot of White Rann</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Ethical Photography</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2">🙏 Respect People</h4>
                <p className="text-gray-700 text-sm">Always ask permission before photographing people, especially women and children.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-2">🦜 Wildlife Safety</h4>
                <p className="text-gray-700 text-sm">Don't disturb wildlife or nesting birds. Observe from a safe distance.</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">🕉️ Sacred Spaces</h4>
                <p className="text-gray-700 text-sm">Respect religious sites and ceremonies. Some places prohibit photography.</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-2">💰 Fair Compensation</h4>
                <p className="text-gray-700 text-sm">Consider compensating artisans if photographing their work for commercial use.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-12">Best Season for Photography</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-100">
              <p className="text-gray-700 leading-relaxed">
                October to February offers clear skies, excellent visibility, and numerous cultural festivals. The light is softer, and the weather is pleasant for outdoor photography. This is also when the White Rann is at its most pristine and accessible.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Photography
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Travel Tips
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Landscape
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 inline mr-2" />
                Culture
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Capture Your Kutch Memories</h3>
            <p className="mb-6 text-white/90">Plan your photography trip and create stunning images of this magical land.</p>
            <Link href="/gallery" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              View Photo Gallery
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
