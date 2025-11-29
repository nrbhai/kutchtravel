'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Users, Heart, Star, Camera, Compass, Award, Sparkles, Shield, Globe, Smile } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-cyan-100 selection:text-cyan-900">
      {/* 1️⃣ Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20 lg:pb-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/40 to-blue-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 pt-24 lg:pt-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center lg:text-left">
              <div className="mb-8 flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-sm font-bold tracking-wide text-cyan-700 shadow-lg shadow-cyan-500/10">
                  <Sparkles className="w-4 h-4" />
                  <span>Our Story</span>
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] font-sora tracking-tight">
                <span className="block text-gray-900 drop-shadow-sm">Curating</span>
                <span className="holographic">Kutch Memories</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed font-inter mb-10 max-w-2xl mx-auto lg:mx-0">
                We are passionate local experts dedicated to showcasing the incredible beauty, rich heritage, and vibrant culture of Kutch, Gujarat.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl shadow-blue-500/5 border border-white/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-gray-900 text-lg font-sora">10k+</span>
                    <span className="text-sm text-gray-500 font-medium">Happy Travelers</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl shadow-blue-500/5 border border-white/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-gray-900 text-lg font-sora">4.9/5</span>
                    <span className="text-sm text-gray-500 font-medium">Guest Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={scaleIn} className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-w-md mx-auto lg:max-w-none">
                {/* Abstract Composition */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-[2rem] transform rotate-3 scale-95 opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-[2rem] transform -rotate-3 scale-95 opacity-50"></div>
                
                <div className="relative h-full w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 z-10"></div>
                  
                  {/* Placeholder for Team Image */}
                  <div className="absolute inset-0 bg-gray-50">
                    <Image
                      src="/images/team.jpg"
                      alt="Team Kutch Travel"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Decorative Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/50 to-transparent z-20">
                    <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg transform translate-y-4">
                      <p className="text-gray-900 font-medium italic">"Travel is the only thing you buy that makes you richer."</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Mission & Vision */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="mb-20"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-sora text-gray-900">Our Mission</h2>
                  </div>
                  <div className="space-y-6 text-lg text-gray-600 font-inter leading-relaxed">
                    <p>
                      Born from a deep love for our homeland, Kutch Travel began with a simple mission: to share the untold stories of this mystical desert land with the world.
                    </p>
                    <p>
                      We believe that travel should be transformative. It's not just about seeing places; it's about feeling the soul of the land, connecting with its people, and understanding the threads of history that weave through every village and valley.
                    </p>
                    <p>
                      From the pristine white salt desert of the Great Rann to the bustling markets of Bhuj, we curate experiences that are authentic, responsible, and unforgettable.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6 mt-12">
                    <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <span className="text-4xl mb-4 block">🌍</span>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Sustainable</h3>
                      <p className="text-sm text-gray-600">Promoting eco-friendly tourism practices</p>
                    </div>
                    <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                      <span className="text-4xl mb-4 block">🤝</span>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Community</h3>
                      <p className="text-sm text-gray-600">Supporting local artisans and villages</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-cyan-50 rounded-3xl p-6 border border-cyan-100 hover:shadow-lg transition-all duration-300">
                      <span className="text-4xl mb-4 block">✨</span>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Authentic</h3>
                      <p className="text-sm text-gray-600">Real experiences, no tourist traps</p>
                    </div>
                    <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <span className="text-4xl mb-4 block">🎓</span>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Expert</h3>
                      <p className="text-sm text-gray-600">Deep local knowledge and insights</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sora">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Why Choose Us
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
                We don't just plan trips; we craft memories that last a lifetime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Local Experts",
                  desc: "Born and raised in Kutch, we know every hidden gem.",
                  color: "blue",
                  gradient: "bg-gradient-to-br from-blue-50 via-white to-blue-50"
                },
                {
                  icon: Sparkles,
                  title: "Curated Trips",
                  desc: "Personalized itineraries matched to your interests.",
                  color: "cyan",
                  gradient: "bg-gradient-to-br from-cyan-50 via-white to-cyan-50"
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  desc: "We're always here for you, anytime, anywhere.",
                  color: "teal",
                  gradient: "bg-gradient-to-br from-teal-50 via-white to-teal-50"
                },
                {
                  icon: Shield,
                  title: "Trusted Service",
                  desc: "Transparent pricing and reliable bookings.",
                  color: "indigo",
                  gradient: "bg-gradient-to-br from-indigo-50 via-white to-indigo-50"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className={`group ${item.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-sora">{item.title}</h3>
                  <p className="text-gray-600 font-inter leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Contact Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]"></div>
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
            >
              <span className="text-cyan-600 font-bold tracking-wider text-sm uppercase mb-4 block">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold font-sora text-gray-900 mb-8">
                Ready to Start Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Adventure?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Whether you need a custom itinerary, hotel bookings, or just some local advice, we're here to help you plan the perfect Kutch trip.
              </p>

              <div className="space-y-6">
                <a href="tel:+919825034580" className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Call Us Anytime</p>
                    <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">+91 98250 34580</p>
                  </div>
                </a>

                <a href="mailto:info@travelkutch.org" className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                  <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Send an Email</p>
                    <p className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">info@travelkutch.org</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Visit Our Office</p>
                    <p className="text-xl font-bold text-gray-900">Bhuj, Kutch, Gujarat</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={scaleIn}
              className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2.5rem] p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[500px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold font-sora mb-6">Services We Offer</h3>
                <ul className="space-y-6">
                  {[
                    "Customized Tour Packages",
                    "Hotel & Resort Bookings",
                    "Car Rental & Transportation",
                    "Rann Utsav Tent Booking",
                    "Local Guide Services",
                    "Photography Tours"
                  ].map((service, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-sm">✓</span>
                      </div>
                      <span className="text-lg font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-12">
                <Link 
                  href="/destinations" 
                  className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Explore Destinations
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
