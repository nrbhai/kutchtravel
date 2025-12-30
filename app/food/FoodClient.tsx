'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Utensils, Coffee, Star, MapPin, ChefHat, Info } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MetallicHeading from '../components/MetallicHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const dishes = [
  {
    name: "Kutchi Dabeli",
    desc: "The world-famous spicy potato burger born in Mandvi. A symphony of sweet, spicy, and crunchy textures.",
    image: "/images/food/dabeli.webp",
    tags: ["Street Food", "Spicy", "Vegetarian"],
    mustTry: "Mandvi & Bhuj"
  },
  {
    name: "Kutchi Thali",
    desc: "A limitless platter of Bajra no Rotlo, Ringan no Oro (Eggplant mash), Sev Tameta, and Chaas.",
    image: "/images/food/thali.webp",
    tags: ["Main Course", "Healthy", "Traditional"],
    mustTry: "All Villages"
  },
  {
    name: "Odho (Kutchi Clay Oven)",
    desc: "A deliberate delicacy where rice and vegetables are slow-cooked in a clay pot buried in hot sand/ash.",
    image: "/images/food/odho.webp",
    tags: ["Rare", "Slow Food", "Smoky"],
    mustTry: "White Rann Resorts"
  },
  {
    name: "Mava / Gulab Pak",
    desc: "Rich, milk-based sweets infused with rose petals and dry fruits. A dense, fudgy delight.",
    image: "/images/food/sweets.webp",
    tags: ["Dessert", "Sweet", "Gift Item"],
    mustTry: "Khavda"
  },
  {
    name: "Kharekh (Fresh Dates)",
    desc: "Kutch is the largest producer of dates in India. Enjoy them fresh (red/yellow) or dried.",
    image: "/images/food/dates.webp",
    tags: ["Fruit", "Seasonal", "Healthy"],
    mustTry: "Mundra & Anjar"
  },
  {
    name: "Pakvan",
    desc: "Crispy, fried diamond-shaped crackers, often eaten with tea or chutney. A tea-time staple.",
    image: "/images/food/pakvan.webp",
    tags: ["Snack", "Crispy", "Tea-time"],
    mustTry: "Bhuj"
  }
];

function Leaf({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
  );
}

export default function FoodClient() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-orange-200">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-md border border-orange-500/20 rounded-full mb-8">
              <ChefHat className="w-5 h-5 text-orange-400" />
              <span className="text-orange-200 font-semibold tracking-wide uppercase text-sm">Taste of Kutch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-sora leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-400 to-orange-600">
                Flavors of the
              </span>
              <span className="block text-white">White Desert</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter font-light max-w-3xl mx-auto leading-relaxed">
              From the spicy kick of Dabeli to the sweetness of Gulab Pak, Kutch offers a culinary journey as diverse as its landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="py-24 relative bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all group hover:-translate-y-2 duration-300"
              >
                <div className="aspect-[4/3] bg-zinc-800 relative">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                     Image: {dish.name}
                   </div>
                   <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                     {dish.tags.map((tag, i) => (
                       <span key={i} className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-[10px] uppercase font-bold text-white border border-white/10">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-sora group-hover:text-orange-400 transition-colors">{dish.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Best in: <span className="text-gray-300 font-semibold">{dish.mustTry}</span></span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {dish.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Guidelines */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-6">
           <MetallicHeading 
              text="Foodie's Guide"
              variant="gold"
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
           />

           <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10">
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                 <Leaf className="w-5 h-5 text-green-500" />
                 Vegetarian Paradise
               </h3>
               <p className="text-gray-400 leading-relaxed">
                 Kutch is predominantly vegetarian. Most local eateries serve pure vegetarian food. Jain food (without onions/garlic) is also widely available.
               </p>
             </div>
             
             <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10">
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                 <Coffee className="w-5 h-5 text-amber-500" />
                 Tea Culture
               </h3>
               <p className="text-gray-400 leading-relaxed">
                 'Kutchi Chai' is strong, sweet, and milky. Offering tea is a sign of hospitality. You cannot say no to a cup of chai in a Kutchi home!
               </p>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
