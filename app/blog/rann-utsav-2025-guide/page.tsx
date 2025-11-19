

import Link from 'next/link';
import { Calendar, MapPin, Star, Moon, Gift, Sun, Music, ShoppingBag, Tent, Plane, Camera, Sparkles, Heart, Flag } from 'lucide-react';


export default function Page() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 py-10">
			<div className="max-w-3xl mx-auto">
				{/* Hero Image */}
				<div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl">
					<img
						src="/images/blog-images/white-rann-hero.jpg"
						alt="Rann Utsav White Rann Hero"
						className="w-full h-72 md:h-96 object-cover object-center"
						style={{ filter: 'brightness(0.92) saturate(1.1)' }}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
					<div className="absolute bottom-0 left-0 p-6 md:p-10">
						<h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Rann Utsav 2025-2026</h1>
						<p className="text-lg md:text-2xl text-white/90 font-medium mb-2">The Ultimate Festival Guide</p>
						<div className="flex flex-wrap gap-3 items-center">
							<span className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow text-base font-semibold text-pink-700">
								<Calendar className="w-5 h-5 text-pink-600" /> Oct 23, 2025 – Mar 4, 2026
							</span>
							<span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-base font-semibold text-indigo-700">
								<MapPin className="w-5 h-5 text-indigo-600" /> Dhordo, Kutch
							</span>
						</div>
					</div>
					<Link href="/blog" className="absolute top-4 left-4 bg-white/80 hover:bg-white/100 text-pink-700 font-semibold px-4 py-2 rounded-full shadow flex items-center gap-2">
						<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
						Back to Blog
					</Link>
				</div>

				{/* Modern Image Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
					<div className="rounded-xl overflow-hidden shadow-lg">
						<img src="/images/blog-images/white-rann-tent.jpg" alt="Tent City" className="object-cover w-full h-32 md:h-36" />
					</div>
					<div className="rounded-xl overflow-hidden shadow-lg">
						<img src="/images/blog-images/white-rann-camera.jpg" alt="White Rann Photography" className="object-cover w-full h-32 md:h-36" />
					</div>
					<div className="rounded-xl overflow-hidden shadow-lg">
						<img src="/images/blog-images/fullmoon.jpg" alt="Full Moon Night" className="object-cover w-full h-32 md:h-36" />
					</div>
					<div className="rounded-xl overflow-hidden shadow-lg">
						<img src="/images/blog-images/rann-1.jpg" alt="Rann Utsav Landscape" className="object-cover w-full h-32 md:h-36" />
					</div>
				</div>

				{/* Intro */}
				<div className="bg-white/90 rounded-2xl shadow p-6 md:p-8 mb-8">
					<p className="text-lg text-gray-700 mb-2">That's a great choice! Rann Utsav is a magnificent festival. Based on the latest information, here are the updates and details for the Rann Utsav 2025-2026 season:</p>
				</div>

								{/* Key Dates & Special Highlights Modern Cards */}
								<div className="grid md:grid-cols-2 gap-6 mb-8">
									{/* Key Dates Card */}
									<div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl shadow border border-indigo-100 p-6 flex flex-col gap-2">
										<h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-900"><Calendar className="w-6 h-6 text-indigo-500" /> Key Dates</h2>
										<div className="flex items-center gap-2 text-gray-700"><Star className="w-5 h-5 text-yellow-500" /><b>Start:</b> Oct 23, 2025</div>
										<div className="flex items-center gap-2 text-gray-700"><Star className="w-5 h-5 text-yellow-500" /><b>End:</b> Mar 4, 2026</div>
										<div className="flex items-center gap-2 text-gray-700"><MapPin className="w-5 h-5 text-pink-500" /><b>Location:</b> Dhordo Village, Kutch, Gujarat</div>
									</div>
									{/* Special Highlights Redesigned */}
									<div className="flex flex-col gap-3">
										<h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-pink-900"><Gift className="w-6 h-6 text-pink-500" /> Special Highlights</h2>
										<div className="grid grid-cols-2 gap-3">
											<div className="bg-white/90 rounded-xl shadow flex flex-col items-center p-4 text-center">
												<Moon className="w-8 h-8 text-blue-500 mb-1" />
												<div className="font-semibold text-gray-800">Full Moon Nights</div>
												<div className="text-xs text-gray-500">Nov 4-6, Dec 3-5, 2025<br/>Jan 2-4, Feb 1-2, Mar 2-4, 2026</div>
											</div>
											<div className="bg-white/90 rounded-xl shadow flex flex-col items-center p-4 text-center">
												<Sun className="w-8 h-8 text-yellow-400 mb-1" />
												<div className="font-semibold text-gray-800">Diwali</div>
												<div className="text-xs text-gray-500">Oct 23-26, 2025</div>
											</div>
											<div className="bg-white/90 rounded-xl shadow flex flex-col items-center p-4 text-center">
												<Gift className="w-8 h-8 text-pink-400 mb-1" />
												<div className="font-semibold text-gray-800">Christmas & New Year</div>
												<div className="text-xs text-gray-500">Dec 19, 2025 – Jan 1, 2026</div>
											</div>
											<div className="bg-white/90 rounded-xl shadow flex flex-col items-center p-4 text-center">
												<Flag className="w-8 h-8 text-red-500 mb-1" />
												<div className="font-semibold text-gray-800">Republic Day</div>
												<div className="text-xs text-gray-500">Jan 26, 2026</div>
											</div>
											<div className="bg-white/90 rounded-xl shadow flex flex-col items-center p-4 text-center">
												<Sparkles className="w-8 h-8 text-green-500 mb-1" />
												<div className="font-semibold text-gray-800">Kite Festival</div>
												<div className="text-xs text-gray-500">Mid-Jan (dates vary)</div>
											</div>
											<div className="bg-white/90 rounded-xl shadow flex flex-col items-center p-4 text-center">
												<Heart className="w-8 h-8 text-pink-500 mb-1" />
												<div className="font-semibold text-gray-800">Valentine's Day</div>
												<div className="text-xs text-gray-500">Feb 14, 2026</div>
											</div>
										</div>
										<div className="mt-2 text-sm text-blue-700 bg-blue-50 rounded px-3 py-2 text-center">Tip: <b>Visit during a Full Moon Night</b> for magical views—the white salt desert sparkles like diamonds under the moonlight!</div>
									</div>
								</div>

				{/* What to Expect */}
				<div className="bg-white/90 rounded-2xl shadow p-6 md:p-8 mb-8">
					<h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-indigo-800"><Tent className="w-7 h-7 text-indigo-500" /> What to Expect</h2>
					<ul className="space-y-3 text-gray-800">
						<li className="flex items-start gap-3"><Sun className="w-5 h-5 text-yellow-400 mt-1" /><span><b>The White Rann (Salt Marsh):</b> Witness the endless white salt desert at sunrise, sunset, and especially under the full moon.</span></li>
						<li className="flex items-start gap-3"><Music className="w-5 h-5 text-pink-500 mt-1" /><span><b>Cultural Immersion:</b> Enjoy daily folk music, dance performances (Garba, Bhavai), and cultural parades.</span></li>
						<li className="flex items-start gap-3"><ShoppingBag className="w-5 h-5 text-indigo-500 mt-1" /><span><b>Art & Craft:</b> Explore exhibitions and bazaars with Kutchi embroidery, leather goods, pottery, and more—buy directly from artisans.</span></li>
						<li className="flex items-start gap-3"><Tent className="w-5 h-5 text-green-600 mt-1" /><span><b>Accommodation:</b> Stay in the Rann Utsav Tent City at Dhordo, with luxury tents/cottages and modern amenities.</span></li>
						<li className="flex items-start gap-3"><Star className="w-5 h-5 text-yellow-500 mt-1" /><span><b>Activities & Adventure:</b> Camel cart rides, ATV rides, paramotoring, paintball, and sightseeing to Kala Dungar and villages like Hodko.</span></li>
					</ul>
				</div>

				{/* Planning Your Visit */}
				<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow p-6 md:p-8 mb-8">
					<h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-900"><Plane className="w-7 h-7 text-blue-500" /> Planning Your Visit</h2>
					<ul className="space-y-3 text-gray-800">
						<li className="flex items-start gap-3"><Gift className="w-5 h-5 text-pink-500 mt-1" /><span><b>Packages:</b> Official packages for 1N/2D, 2N/3D, 3N/4D—usually include accommodation, meals, and sightseeing.</span></li>
						<li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-indigo-500 mt-1" /><span><b>Nearest City:</b> Bhuj (airport & railway), about 85 km from Tent City, Dhordo.</span></li>
					</ul>
				</div>

				{/* Call to Action */}
				<div className="mt-8 p-6 bg-gradient-to-r from-pink-200 via-blue-100 to-purple-200 border-l-4 border-blue-400 text-blue-900 rounded-2xl shadow flex items-center gap-4">
					<span className="font-bold text-lg">Want booking details or package options?</span>
					<span className="ml-auto"><Plane className="w-7 h-7 text-blue-400" /></span>
				</div>
			</div>
		</main>
	);
}


