'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Navigation from '../../components/Navigation';
import { getBlogPostBySlug, blogPosts } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function BlogPostClient() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform">
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="scroll-smooth selection:bg-gray-300 selection:text-gray-900 relative text-gray-900">
      {/* Header with Navigation */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
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

        <div className="relative z-20 max-w-4xl mx-auto px-6 pt-20 pb-12 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 mb-6 transition-colors font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>

            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/10 backdrop-blur-sm rounded-full text-sm font-bold text-gray-900 border border-gray-300/30">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-sora leading-tight holographic drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-800 font-semibold">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <User className="w-5 h-5 text-cyan-600" />
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-gray-600">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-indigo-600" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative bg-gradient-to-b from-white/70 via-blue-50/30 to-indigo-50/40">
        {/* Add subtle floating shapes in content area */}
        <div className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-60 left-20 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* Featured Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-96 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <p className="text-xl font-semibold">Featured Image</p>
                <p className="text-sm opacity-75 mt-2">{post.title}</p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <span className="font-semibold text-gray-700">Share:</span>
            <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors" aria-label="Share on Facebook">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors" aria-label="Share on Twitter">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors" aria-label="Share on LinkedIn">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-700 leading-relaxed mb-8 font-inter p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-l-4 border-indigo-600">
              {post.excerpt}
            </div>

            <div className="text-gray-700 leading-relaxed space-y-6 font-inter whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-gray-500" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-sora">{post.author.name}</h3>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-sora">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <p className="text-sm font-semibold opacity-75">Blog Post</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors font-sora line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">Ready to Explore Kutch?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
                Plan your perfect Kutch adventure with our expert guidance
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/destinations"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  Explore Destinations
                </Link>
                <Link
                  href="/bookings"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-bold hover:bg-white/30 transition-colors"
                >
                  Book Your Trip
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </article>
    </main>
  );
}
