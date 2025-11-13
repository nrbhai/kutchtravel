'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import Navigation from '../components/Navigation';
import { blogPosts, categories } from './data';

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
    <main className="scroll-smooth selection:bg-gray-300 selection:text-gray-900 relative text-gray-900">
      {/* Hero Section with Navigation */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        {/* Enhanced Background Elements with vibrant gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
          {/* Animated gradient blobs */}
          <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/10 backdrop-blur-sm rounded-full mb-6 border border-gray-300/30">
              <BookOpen className="w-5 h-5 text-gray-900" />
              <span className="text-sm font-semibold text-gray-900">Travel Stories & Guides</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-sora leading-tight holographic drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
              Kutch Travel Blog
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-900 mb-8 font-poppins leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Discover insider tips, travel guides, and stories from the magical land of Kutch
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-gray-800 font-semibold">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>{blogPosts.length} Articles</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Updated Weekly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative bg-gradient-to-b from-white/70 via-blue-50/30 to-indigo-50/40">
        {/* Add subtle floating shapes in content area */}
        <div className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-60 left-20 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-lg scale-105 border-transparent'
                    : 'bg-white/80 backdrop-blur-sm text-gray-900 hover:bg-white hover:scale-105 shadow-md border-gray-200'
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
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 rounded-3xl p-2">
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-80 md:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                          <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-semibold">Featured Article</p>
                        </div>
                        {/* Add animated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 via-transparent to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Featured
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 text-indigo-700 rounded-full text-sm font-bold border border-indigo-200">
                          {featuredPost.category}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 group-hover:text-cyan-600 transition-colors font-sora">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed font-poppins font-medium">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 font-semibold">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-cyan-600" />
                          <span>{featuredPost.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-indigo-600" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-cyan-600 font-bold group-hover:gap-4 transition-all">
                        <span>Read Full Article</span>
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.id} variants={fadeUp}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border border-gray-200">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm font-semibold opacity-75">Blog Post</p>
                      </div>
                      {/* Add animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 via-transparent to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full border border-gray-200 shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-extrabold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors font-sora line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3 font-poppins font-medium flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <div className="flex items-center justify-between text-sm text-gray-600 font-semibold">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-indigo-600" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-cyan-600 font-bold mt-4 group-hover:gap-4 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
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
            className="text-center py-16"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">Stay Updated</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-poppins">
                Get the latest travel tips, destination guides, and insider stories delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
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
          className="text-center py-8"
        >
          <p className="text-gray-800 text-sm font-medium">
            Designed with ❤️ for travelers seeking authentic Kutch
          </p>
        </motion.div>
        </div>
      </div>
    </main>
  );
}
