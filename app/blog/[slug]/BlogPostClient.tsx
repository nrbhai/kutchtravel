'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Tag, Facebook, Twitter, Linkedin, Sparkles } from 'lucide-react';
import Navigation from '../../components/Navigation';
import MetallicHeading from '../../components/MetallicHeading';
import { getBlogPostBySlug, blogPosts } from '../data';
import Image from 'next/image';

import { fadeUp } from '../../../lib/animations';

// Simple Markdown Renderer Component
const MarkdownRenderer = ({ content }: { content: string }) => {
  // Function to process inline styles (bold)
  const processInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const blocks = content.split('\n\n');

  return (
    <div className="space-y-8">
      {blocks.map((block, index) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={index} className="text-3xl font-bold text-white font-sora mt-12 mb-6">
              {processInline(block.replace('## ', ''))}
            </h2>
          );
        }
        if (block.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-bold text-amber-500 font-sora mt-8 mb-4">
              {processInline(block.replace('### ', ''))}
            </h3>
          );
        }
        if (block.startsWith('- ')) {
          const items = block.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={index} className="space-y-3 list-disc list-inside text-gray-300 font-inter ml-4">
              {items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {processInline(item.replace('- ', ''))}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-lg text-gray-300 leading-8 font-inter font-light">
            {processInline(block)}
          </p>
        );
      })}
    </div>
  );
};

export default function BlogPostClient() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-white relative">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
          <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold font-sora text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8 font-inter">The story you're looking for has wandered off into the desert.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 text-black rounded-full font-bold hover:bg-amber-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Journal
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
    <main className="scroll-smooth selection:bg-amber-500/30 selection:text-amber-200 relative bg-background min-h-screen text-white overflow-x-hidden">
      {/* Header with Navigation */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-end pb-16">
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        {/* Feature Image Background with Overlay */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
           <div className="absolute inset-0 bg-black/40 z-0"></div>
           {/* Fallback pattern if no image, using noise texture */}
           <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay z-10"></div>
           
           {/* If we had a real post.image we would use Next/Image here as a background too, but for now relying on the design elements */}
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors font-medium backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 hover:border-white/20 bg-black/20">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Journal</span>
            </Link>

            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 backdrop-blur-md rounded-full text-xs font-bold text-amber-400 tracking-widest uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 font-sora leading-tight text-white drop-shadow-lg">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 font-medium text-sm tracking-wide">
              {/* Author */}
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black font-bold text-xs">
                   {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{post.author.name}</div>
                  <div className="text-xs text-gray-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative bg-background">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            
            {/* Main Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                 <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                 />
              </div>

              {/* Share Mobile/Tablet */}
              <div className="flex lg:hidden items-center gap-4 mb-8 pb-8 border-b border-white/10">
                <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">Share</span>
                <button className="p-3 rounded-full bg-white/5 text-gray-300 hover:bg-blue-600 hover:text-white transition-all border border-white/10">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-3 rounded-full bg-white/5 text-gray-300 hover:bg-sky-500 hover:text-white transition-all border border-white/10">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-3 rounded-full bg-white/5 text-gray-300 hover:bg-blue-700 hover:text-white transition-all border border-white/10">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>

              {/* Actual Text Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-xl md:text-2xl text-white leading-relaxed mb-10 font-inter font-light p-8 bg-gradient-to-r from-amber-500/10 to-transparent rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm">
                  {post.excerpt}
                </div>

                <MarkdownRenderer content={post.content} />
              </div>

              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="w-4 h-4 text-amber-500" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar Column */}
            <div className="space-y-12">
               {/* Share Desktop */}
               <div className="hidden lg:block p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md sticky top-32">
                  <h3 className="text-lg font-bold text-white mb-6 font-sora">Share Story</h3>
                  <div className="flex gap-4">
                    <button className="p-3 rounded-full bg-white/5 text-gray-300 hover:bg-blue-600 hover:text-white transition-all border border-white/10 hover:border-transparent flex-1 flex justify-center items-center">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-white/5 text-gray-300 hover:bg-sky-500 hover:text-white transition-all border border-white/10 hover:border-transparent flex-1 flex justify-center items-center">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-white/5 text-gray-300 hover:bg-blue-700 hover:text-white transition-all border border-white/10 hover:border-transparent flex-1 flex justify-center items-center">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
               </div>

                {/* Related Posts Sidebar */}
               {relatedPosts.length > 0 && (
                   <div className="block">
                      <MetallicHeading text="Related Reads" variant="gold" as="h3" className="text-xl font-bold mb-6" />
                      <div className="space-y-6">
                        {relatedPosts.map((relatedPost) => (
                          <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                            <div className="bg-white/5 rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
                              <div className="relative h-40">
                                 <Image 
                                    src={relatedPost.image} 
                                    alt={relatedPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                 />
                                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                              </div>
                              <div className="p-5">
                                <h3 className="text-base font-bold mb-2 text-white group-hover:text-amber-400 transition-colors font-sora line-clamp-2">
                                  {relatedPost.title}
                                </h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-semibold">
                                  <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                   </div>
               )}
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 mt-12">
            <div className="bg-gradient-to-r from-gray-900 border border-amber-500/20 to-black rounded-3xl p-12 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
               <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-[80px]"></div>
               <div className="relative z-10">
                  <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora text-white">Inspired by this story?</h2>
                  <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-inter">
                    Turn this inspiration into your next expedition. Explore our curated range of Kutch experiences.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/"
                      className="px-8 py-4 bg-amber-500 text-black rounded-full font-bold hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                    >
                      Explore Destinations
                    </Link>
                    <Link
                      href="/bookings"
                      className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-full font-bold hover:bg-white/10 transition-colors"
                    >
                      Plan Your Trip
                    </Link>
                  </div>
               </div>
            </div>
        </div>
      </article>
    </main>
  );
}

// Fallback BookOpen icon if not imported above
function BookOpen(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
