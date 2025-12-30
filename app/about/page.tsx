'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Users, Heart, Star, Compass, Award, Sparkles, Shield, Camera } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import MetallicHeading from '../components/MetallicHeading';

import { fadeUp, stagger, scaleIn } from '../../lib/animations';
import BackgroundEffects from '../components/BackgroundEffects';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1️⃣ Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20 lg:pb-32 min-h-[90vh] flex items-center">
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Elements */}
        <BackgroundEffects />

        <div className="relative max-w-[1600px] mx-auto px-6 pt-24 lg:pt-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center lg:text-left">
              <div className="mb-8 flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-bold tracking-wide text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Our Story</span>
                </span>
              </div>
              
              <div className="mb-8">
                 <MetallicHeading 
                  text="Curating Golden"
                  variant="silver"
                  as="h1"
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] font-sora block text-center lg:text-left"
                />
                 <MetallicHeading 
                  text="Kutch Memories"
                  variant="gold"
                  as="span"
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] font-sora block text-center lg:text-left"
                />
              </div>
              
              <p className="text-xl text-gray-400 leading-relaxed font-inter mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
                We are passionate local experts dedicated to showcasing the incredible beauty, rich heritage, and vibrant culture of Kutch, Gujarat.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl px-8 py-5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <span className="block font-black text-white text-2xl font-sora">10k+</span>
                    <span className="text-sm text-gray-400 font-medium">Happy Travelers</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl px-8 py-5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black shadow-lg">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div className="text-left">
                    <span className="block font-black text-white text-2xl font-sora">4.9/5</span>
                    <span className="text-sm text-gray-400 font-medium">Guest Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={scaleIn} className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-w-md mx-auto lg:max-w-none">
                {/* Abstract Composition */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-purple-900/40 rounded-[2rem] transform rotate-3 scale-95 opacity-50 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-[2rem] transform -rotate-3 scale-95 opacity-50 blur-sm"></div>
                
                <div className="relative h-full w-full bg-black/40 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10 z-10"></div>
                  
                  {/* Placeholder for Team Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/team.webp"
                      alt="Team Kutch Travel"
                      fill
                      className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>
                  
                  {/* Decorative Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/10 transform translate-y-4">
                       <div className="flex gap-4">
                          <div className="h-10 w-1 bg-amber-500 rounded-full"></div>
                          <p className="text-white/90 font-medium italic text-lg leading-relaxed">"Travel is the only thing you buy that makes you richer."</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="mb-24"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-white/10 relative overflow-hidden group hover:border-amber-500/20 transition-colors">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                      <Heart className="w-7 h-7 text-black fill-black" />
                    </div>
                    <MetallicHeading text="Our Mission" variant="gold" as="h2" className="text-3xl md:text-5xl font-black" />
                  </div>
                  <div className="space-y-8 text-xl text-gray-400 font-inter leading-relaxed font-light">
                    <p>
                      Born from a deep love for our homeland, Kutch Travel began with a simple mission: to share the untold stories of this mystical desert land with the world.
                    </p>
                    <div className="pl-6 border-l-2 border-amber-500/50">
                        <p className="italic text-gray-300">
                        We believe that travel should be transformative. It's not just about seeing places; it's about feeling the soul of the land, connecting with its people, and understanding the threads of history.
                        </p>
                    </div>
                    <p>
                      From the pristine white salt desert of the Great Rann to the bustling markets of Bhuj, we curate experiences that are authentic, responsible, and unforgettable.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6 mt-12">
                    <div className="bg-black/40 rounded-3xl p-8 border border-white/5 hover:border-amber-500/50 hover:bg-white/5 transition-all duration-300 group/card">
                      <span className="text-4xl mb-6 block group-hover/card:scale-110 transition-transform">🌍</span>
                      <h3 className="font-bold text-white text-xl mb-3 font-sora">Sustainable</h3>
                      <p className="text-sm text-gray-400">Promoting eco-friendly tourism practices</p>
                    </div>
                    <div className="bg-black/40 rounded-3xl p-8 border border-white/5 hover:border-amber-500/50 hover:bg-white/5 transition-all duration-300 group/card">
                      <span className="text-4xl mb-6 block group-hover/card:scale-110 transition-transform">🤝</span>
                      <h3 className="font-bold text-white text-xl mb-3 font-sora">Community</h3>
                      <p className="text-sm text-gray-400">Supporting local artisans and villages</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-black/40 rounded-3xl p-8 border border-white/5 hover:border-amber-500/50 hover:bg-white/5 transition-all duration-300 group/card">
                      <span className="text-4xl mb-6 block group-hover/card:scale-110 transition-transform">✨</span>
                      <h3 className="font-bold text-white text-xl mb-3 font-sora">Authentic</h3>
                      <p className="text-sm text-gray-400">Real experiences, no tourist traps</p>
                    </div>
                    <div className="bg-black/40 rounded-3xl p-8 border border-white/5 hover:border-amber-500/50 hover:bg-white/5 transition-all duration-300 group/card">
                      <span className="text-4xl mb-6 block group-hover/card:scale-110 transition-transform">🎓</span>
                      <h3 className="font-bold text-white text-xl mb-3 font-sora">Expert</h3>
                      <p className="text-sm text-gray-400">Deep local knowledge and insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Us Grid */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <MetallicHeading text="Why Choose Us" variant="gold" as="h2" className="text-4xl md:text-5xl font-black mb-6 block mx-auto" />
              <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto font-light">
                We don't just plan trips; we craft memories that last a lifetime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Local Experts",
                  desc: "Born and raised in Kutch, we know every hidden gem.",
                  color: "amber"
                },
                {
                  icon: Sparkles,
                  title: "Curated Trips",
                  desc: "Personalized itineraries matched to your interests.",
                  color: "purple"
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  desc: "We're always here for you, anytime, anywhere.",
                  color: "blue"
                },
                {
                  icon: Shield,
                  title: "Trusted Service",
                  desc: "Transparent pricing and reliable bookings.",
                  color: "green"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-8 border border-white/10 group-hover:border-amber-500/50 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-sora">{item.title}</h3>
                  <p className="text-gray-400 font-inter leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Contact Section */}
      <section className="py-24 relative overflow-hidden bg-black/80">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.05]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-900/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
            >
              <span className="text-amber-500 font-bold tracking-[0.2em] text-sm uppercase mb-6 block flex items-center gap-3">
                 <span className="w-8 h-[1px] bg-amber-500"></span> Get in Touch
              </span>
              <MetallicHeading 
                  text="Ready to Start Your Adventure?" 
                  variant="gold" 
                  as="h2" 
                  className="text-4xl md:text-6xl font-black mb-8 leading-tight block text-left"
              />
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light font-inter max-w-lg">
                Whether you need a custom itinerary, hotel bookings, or just some local advice, we're here to help you plan the perfect Kutch trip.
              </p>

              <div className="space-y-6">
                <a href="tel:+919825034580" className="flex items-center gap-8 p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-amber-500/50 hover:bg-white/10 transition-all group backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Call Us Anytime</p>
                    <p className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors font-sora">+91 98250 34580</p>
                  </div>
                </a>

                <a href="mailto:info@travelkutch.org" className="flex items-center gap-8 p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-amber-500/50 hover:bg-white/10 transition-all group backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Mail className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Send an Email</p>
                    <p className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors font-sora">info@travelkutch.org</p>
                  </div>
                </a>

                <div className="flex items-center gap-8 p-8 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Visit Our Office</p>
                    <p className="text-2xl font-black text-white font-sora">Bhuj, Kutch, Gujarat</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={scaleIn}
              className="bg-gradient-to-br from-slate-900 to-black rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[600px] border border-white/10 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black font-sora mb-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Services We Offer</h3>
                <ul className="space-y-6">
                  {[
                    "Customized Tour Packages",
                    "Hotel & Resort Bookings",
                    "Car Rental & Transportation",
                    "Rann Utsav Tent Booking",
                    "Local Guide Services",
                    "Photography Tours"
                  ].map((service, i) => (
                    <li key={i} className="flex items-center gap-6 group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/20 transition-all">
                        <span className="text-amber-500 font-bold">✓</span>
                      </div>
                      <span className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-12">
                <Link 
                  href="/destinations" 
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black py-5 rounded-2xl hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(245,158,11,0.4)] text-lg uppercase tracking-wide"
                >
                  Explore Destinations
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
