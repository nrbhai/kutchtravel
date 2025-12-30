'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Sparkles, BookOpen, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import MetallicHeading from '../components/MetallicHeading';
import { blogPosts, categories } from './data';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <main className="scroll-smooth selection:bg-amber-500/30 selection:text-amber-200 relative bg-background min-h-screen text-white overflow-x-hidden">
      {/* Hero Section with Navigation */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        {/* Premium Dark Background Elements */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
          {/* Animated gradient blobs - Dark & Gold Theme */}
          <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/90"></div>
        </div>

        <div className="relative z-20 max-w-[1600px] mx-auto px-6 pt-32 pb-16 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full mb-8 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-gray-300 tracking-wide uppercase">Travel Stories & Guides</span>
            </div>
            
            <div className="mb-6">
              <MetallicHeading 
                text="Journal of Kutch"
                variant="gold"
                as="h1"
                className="text-5xl md:text-7xl font-extrabold font-sora leading-tight"
              />
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 font-inter leading-relaxed max-w-2xl mx-auto">
              Curated stories, insider tips, and cultural deep-dives from the white desert to the Arabian sea.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:border-amber-500/30 transition-colors group">
                <Sparkles className="w-5 h-5 text-amber-400 group-hover:animate-pulse" />
                <span className="text-gray-300 font-medium">{blogPosts.length} Articles</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:border-amber-500/30 transition-colors group">
                <Calendar className="w-5 h-5 text-amber-400 group-hover:animate-pulse" />
                <span className="text-gray-300 font-medium">Updated Weekly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative bg-gradient-to-b from-background via-gray-900/50 to-black border-t border-white/5">
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-16">
          
          {/* Category Filter */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-16"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border backdrop-blur-sm ${
                    selectedCategory === category
                      ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] border-amber-400 scale-105'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 border-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          {selectedCategory === 'All' && featuredPost && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-20"
            >
              <div className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-amber-500/20 hover:via-amber-500/40 transition-all duration-500">
                <Link href={`/blog/${featuredPost.slug}`} className="block relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-[400px] lg:h-auto overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/80"></div>
                      <div className="absolute top-6 left-6 px-4 py-2 bg-amber-500/90 backdrop-blur text-black font-bold text-sm rounded-full flex items-center gap-2 shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Featured Story
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center relative bg-gradient-to-br from-white/5 via-transparent to-transparent">
                      <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-amber-400 rounded-full text-sm font-bold tracking-wide uppercase">
                          {featuredPost.category}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white group-hover:text-amber-400 transition-colors font-sora leading-tight">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-400 mb-8 text-lg leading-relaxed font-inter font-medium border-l-2 border-white/10 pl-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 font-semibold uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-amber-500" />
                          <span>{featuredPost.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-amber-500" />
                          <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-500" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-3 text-white font-bold group-hover:gap-5 transition-all w-fit">
                        <span className="border-b border-amber-500 pb-0.5">Read Full Story</span>
                        <div className="p-2 bg-amber-500 rounded-full text-black">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={fadeUp}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-amber-400 text-xs font-bold rounded-full border border-white/10 tracking-wider uppercase">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4 font-medium uppercase tracking-widest">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <div className="flex items-center gap-1">
                           <Clock className="w-3 h-3 text-amber-500" />
                           <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-gray-100 group-hover:text-amber-400 transition-colors font-sora line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 line-clamp-3 font-inter text-sm flex-1 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="border-t border-white/10 pt-4 mt-auto flex items-center justify-between group/link">
                         <span className="text-sm font-semibold text-gray-300 group-hover/link:text-white transition-colors">Read Article</span>
                         <ArrowRight className="w-4 h-4 text-amber-500 transform group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No posts message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-center py-20 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sora">No stories found</h3>
              <p className="text-gray-400">Try selecting a different category or check back later.</p>
            </motion.div>
          )}

          {/* Newsletter CTA - Premium Dark Version */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12"
          >
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"></div>
              <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
              
              {/* Glow effects */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 px-8 py-16 md:p-20 text-center">
                <MetallicHeading 
                  text="Join The Elite Travelers"
                  variant="gold"
                  as="h2"
                  className="text-3xl md:text-5xl font-extrabold mb-6 font-sora block mx-auto"
                />
                
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-inter">
                  Get exclusive access to hidden gems, premium itineraries, and cultural secrets delivered to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-inter"
                  />
                  <button className="px-10 py-4 bg-amber-500 text-black rounded-full font-bold hover:bg-amber-400 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-12 mt-12 border-t border-white/5"
          >
            <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">
              Curated with <span className="text-red-500 mx-1">❤</span> for the curious soul
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
