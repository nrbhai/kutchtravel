"use client";

import { Calendar, User, ArrowLeft, Tag, Music } from "lucide-react";
import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function RannUtsav202526GuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <Navigation />
      <article className="max-w-3xl mx-auto px-6 py-16">
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
          Rann Utsav 2025-26: Complete Festival Guide
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <div>
              <div className="font-semibold text-gray-900">KutchTravel Team</div>
              <div className="text-sm">Festival Guide</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>October 23, 2025 – March 4, 2026</span>
          </div>
        </div>
        {/* Hero Image Placeholder */}
        <div className="relative h-80 rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-pink-100 to-purple-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Music className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500 font-semibold">Rann Utsav Festival</p>
              <p className="text-sm text-gray-400">Hero Image Placeholder</p>
            </div>
          </div>
        </div>
        <div className="prose prose-lg max-w-none">
          <h2>Rann Utsav 2025-2026 Key Dates</h2>
          <ul>
            <li><b>Start Date:</b> October 23, 2025</li>
            <li><b>End Date:</b> March 4, 2026</li>
            <li><b>Location:</b> Dhordo Village, Kutch, Gujarat, India</li>
          </ul>
          <h3>Special Highlights & Dates</h3>
          <table>
            <thead>
              <tr><th>Occasion / Highlight</th><th>Dates (2025-2026)</th></tr>
            </thead>
            <tbody>
              <tr><td>Diwali Week</td><td>October 23 - 26, 2025</td></tr>
              <tr><td>Full Moon Nights</td><td>Nov 4-6, Dec 3-5, 2025; Jan 2-4, Feb 1-2, Mar 2-4, 2026</td></tr>
              <tr><td>Christmas & New Year Week</td><td>December 19, 2025 - January 1, 2026</td></tr>
              <tr><td>Kite Flying Festival (Uttarayan)</td><td>Mid-January (exact dates vary)</td></tr>
              <tr><td>Republic Day</td><td>January 26, 2026</td></tr>
              <tr><td>Valentine's Day</td><td>February 14, 2026</td></tr>
            </tbody>
          </table>
          <p><b>Tip:</b> Visiting during a Full Moon Night is highly recommended, as the white salt desert is said to sparkle like diamonds under the moonlight.</p>
          <h3>What to Expect</h3>
          <ul>
            <li><b>The White Rann (Salt Marsh):</b> Witness the endless white salt desert at sunrise, sunset, and especially under the full moon.</li>
            <li><b>Cultural Immersion:</b> Enjoy daily folk music, dance performances (including Garba and Bhavai), and cultural parades.</li>
            <li><b>Art & Craft:</b> Explore exhibitions and bazaars showcasing traditional Kutchi embroidery, leather goods, pottery, and other exquisite handicrafts, offering a chance to buy directly from local artisans.</li>
            <li><b>Accommodation:</b> Stay in the dedicated Rann Utsav Tent City at Dhordo, which offers various packages for luxury tents/cottages with all modern amenities.</li>
            <li><b>Activities & Adventure:</b> Opportunities for camel cart rides, ATV rides, paramotoring, paintball, and sightseeing excursions to places like Kala Dungar (Black Hill) and traditional Kutchi villages like Hodko.</li>
          </ul>
          <h3>Planning Your Visit</h3>
          <ul>
            <li><b>Packages:</b> Official packages are typically available for 1 Night/2 Days, 2 Nights/3 Days, and 3 Nights/4 Days, which usually include accommodation, meals, and sightseeing.</li>
            <li><b>Nearest City:</b> The nearest airport and major railway station is Bhuj, which is approximately 85 km from the Tent City in Dhordo.</li>
          </ul>
          <p>Would you like me to look up the official booking website or provide details on the different package options available?</p>
        </div>
      </article>
    </main>
  );
}
