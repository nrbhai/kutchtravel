'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  History, 
  MapPin, 
  Ship, 
  Castle, 
  BookOpen, 
  CloudRain, 
  Globe, 
  Compass,
  Landmark,
  Scroll,
  Anchor,
  Minimize2
} from 'lucide-react';
import MetallicHeading from '../components/MetallicHeading';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BackgroundEffects from '../components/BackgroundEffects';
import { fadeUp, stagger } from '../../lib/animations';

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-500/30 selection:text-amber-200">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation variant="solid" />
      </div>

      {/* 1. INTRODUCTION: Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
          <Image
            src="/images/destinations/dholavira.webp"
            alt="Ancient Dholavira Ruins"
            fill
            className="object-cover opacity-50 contrast-125"
            priority
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex justify-center">
               <span className="inline-flex items-center gap-2 px-6 py-2 bg-amber-950/40 backdrop-blur-md border border-amber-500/30 rounded-full text-sm font-bold tracking-wide text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <History className="w-4 h-4" />
                  <span className="uppercase">Timeless Kutch</span>
               </span>
            </div>
            <MetallicHeading 
              text="The Chronicle of Kutch"
              variant="gold"
              as="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] font-sora block"
            />
            <p className="text-xl md:text-2xl text-white font-inter font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
              From the advanced urban planning of the Indus Valley to the maritime glory of the Jadeja dynasty, explore the resilient soul of a land shaped by the salt, the sea, and the indomitable <span className="text-amber-400 font-medium font-serif italic">Kutchi</span> spirit.
            </p>
          </motion.div>
        </div>
        <BackgroundEffects />
      </section>

      {/* 2. GEOGRAPHY AND EARLY SETTLEMENT */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               variants={fadeUp}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
            >
              <h2 className="text- amber-500 font-mono tracking-widest text-sm uppercase mb-4 text-amber-500">The Land & Roots</h2>
              <MetallicHeading 
                text="Geography & Early Settlement"
                variant="gold"
                as="h2"
                className="text-4xl md:text-5xl font-black mb-8 font-sora"
              />
              <div className="space-y-6 text-lg font-inter leading-relaxed text-white">
                <p className="text-white">
                  Kutch is historically an island, isolated by the Great Rann of Kutch to the north, the Little Rann to the east, and the Arabian Sea to the south. This geographical isolation fostered a distinct cultural identity (*Kutchdo*)—resilient, self-reliant, and maritime-focused.
                </p>
                <p className="text-white">
                  The vast salt marshes of the **Rann**, once a navigable sea, significantly influenced settlement patterns. Early communities settled on the rocky outcrops and "islands" like **Khadir Bet** and **Pachcham**, adapting to an arid environment where water was as precious as gold.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <CloudRain className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-white font-medium">Arid Climate</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span className="text-sm text-white font-medium">Strategic Location</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
               <Image
                  src="/images/destinations/white-rann-hero.webp"
                  alt="Geography of Kutch"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                 <p className="text-white font-serif italic text-xl">"Kutch nahi dekha to kuch nahi dekha."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANCIENT AND MEDIEVAL PERIOD */}
      <section className="py-24 bg-white/5 relative">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <MetallicHeading 
              text="Ancient Echoes"
              variant="gold"
              as="h2"
              className="text-4xl md:text-6xl font-black mb-6 font-sora"
            />
            <p className="max-w-3xl mx-auto text-gray-200 text-lg">
              Tracing the footsteps of the Harappans to the early regional rulers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Indus Valley Civilization",
                year: "2650 BCE",
                desc: "Dholavira stands as a testament to advanced urban planning, water conservation, and trade with Mesopotamia.",
                icon: BookOpen
              },
              {
                title: "Regional Kingdoms",
                year: "Medieval Era",
                desc: "Rise of the Samma Rajputs from Sindh, who migrated and established their dominance, blending cultures.",
                icon: Castle
              },
              {
                title: "Trade Routes",
                year: "Ancient Times",
                desc: "Kutch served as a vital gateway for overland and maritime trade connecting India to the Persian Gulf.",
                icon: Compass
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <item.icon className="w-7 h-7 text-amber-500" />
                </div>
                <span className="text-sm font-mono text-amber-400 block mb-2">{item.year}</span>
                <h3 className="text-2xl font-bold text-white mb-4 font-sora">{item.title}</h3>
                <p className="text-gray-200 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. JADEJA RULE AND PRINCELY STATE ERA */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6">
           <div className="bg-gradient-to-br from-amber-950/20 to-black rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-amber-900/30">
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <MetallicHeading 
                     text="The Era of Jadeja Rule" 
                     variant="gold" 
                     as="h2" 
                     className="text-4xl md:text-5xl font-black font-sora leading-tight" 
                   />
                   <p className="text-xl text-white font-light leading-relaxed">
                     In 1549, **Rao Khengarji I** unified Kutch and established **Bhuj** as its capital. The Jadeja dynasty ruled for centuries, fostering a golden age of art, architecture, and administration. They built formidable forts like **Bhujia Fort** and initiated the *Kutch Kori* currency, asserting their sovereignty.
                   </p>
                   <ul className="space-y-4">
                     {["Capital moved to Bhuj (1549)", "Construction of Aina Mahal", "Defense Fortifications built across Kutch", "Minting of Kutch Kori currency"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-white">
                         <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl skew-y-2 lg:skew-y-0 transform lg:rotate-3 border border-white/10">
                   <Image 
                      src="/images/destinations/bhuj-overview.webp"
                      alt="Aina Mahal and Bhuj Heritage"
                      fill
                      className="object-cover"
                   />
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. TRADE, PORTS, AND MARITIME HISTORY */}
      <section className="py-24 relative bg-blue-950/10">
        <div className="max-w-[1600px] mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10">
                 <Image 
                    src="/images/destinations/mandvi.webp"
                    alt="Maritime History of Mandvi"
                    fill
                    className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="inline-flex items-center gap-2 text-blue-400 border border-blue-400/30 px-3 py-1 rounded-full text-sm font-mono uppercase">
                  <Ship className="w-4 h-4" />
                  <span>Masters of the Sea</span>
                </div>
                <MetallicHeading 
                  text="Maritime Legacy"
                  variant="gold"
                  as="h2"
                  className="text-4xl md:text-5xl font-black font-sora"
                  animationDuration="15s"
                />
                <p className="text-white text-lg leading-relaxed">
                  The Kutchi people, renowned as *Kharvas* (sailors), dominated the Indian Ocean trade. Ships built in **Mandvi**, famously known for their durability and craftsmanship, sailed to Zanzibar, Oman, and Malabar. This maritime connection brought not just wealth but a cosmopolitan openness to Kutchi society, reflected in the diverse architectural styles of the region.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                     <h4 className="font-bold text-white mb-2">Shipbuilding</h4>
                     <p className="text-sm text-gray-200">400-year-old tradition still active in Mandvi.</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                     <h4 className="font-bold text-white mb-2">Global Trade</h4>
                     <p className="text-sm text-gray-200">Export of textiles, spices, and indigo.</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. CULTURE, COMMUNITIES, AND CRAFTS */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6">
           <div className="text-center mb-16">
              <MetallicHeading text="A Tapestry of Culture" variant="gold" as="h2" className="text-4xl md:text-5xl font-black font-sora mb-6" />
              <p className="text-white max-w-2xl mx-auto">
                Kutch is a melting pot where diverse communities weave a vibrant social fabric.
              </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Diverse Communities", desc: "Ahirs, Rabaris, Jats, and Meghwals co-existing in harmony." },
                { title: "Languages", desc: "Kutchi and Gujarati are the primary languages spoken with pride." },
                { title: "Handicrafts", desc: "World-renowned embroidery, Rogan art, and Ajrakh printing." },
                { title: "Festivals", desc: "From Navratri to Rann Utsav, life is a constant celebration." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-center">
                   <h3 className="text-xl font-bold text-amber-400 mb-3 font-sora">{item.title}</h3>
                   <p className="text-white text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

       {/* 7 & 8: RELIGIOUS HISTORY & COLONIAL PERIOD */}
       <section className="py-24 bg-zinc-900/50">
          <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
             {/* Religion */}
             <div>
                <MetallicHeading text="Spiritual Harmony" variant="gold" as="h3" className="text-3xl font-bold mb-6 font-sora" />
                <p className="text-white leading-relaxed mb-6">
                   Kutch is a sanctuary of faith. The **Ashapura Mata** temple at Mata no Madh is the presiding deity of the region. The **Narayan Sarovar** is one of the five holy lakes in Hindu theology. Simultaneously, the region hosts historic mosques and shrines like **Haji Pir**, symbolizing a syncretic culture where faiths coexist peacefully.
                </p>
                <div className="h-64 relative rounded-xl overflow-hidden border border-white/10 mt-6">
                   <Image src="/images/destinations/narayan-sarovar.webp" alt="Narayan Sarovar" fill className="object-cover" />
                </div>
             </div>
             
             {/* Colonial */}
             <div>
                <MetallicHeading text="The Colonial Encounter" variant="gold" as="h3" className="text-3xl font-bold mb-6 font-sora" />
                <p className="text-white leading-relaxed mb-6">
                   While technically a princely state, Kutch had significant interactions with the British Raj. The British influence brought administrative reforms and the railway, but Kutch maintained its internal autonomy. The 1819 treaty was a pivotal moment, shaping the geopolitical boundaries of the state for the next century.
                </p>
                 <div className="h-64 relative rounded-xl overflow-hidden border border-white/10 mt-6">
                   <Image src="/images/destinations/prag-mahal.webp" alt="Prag Mahal Colonial Architecture" fill className="object-cover" />
                </div>
             </div>
          </div>
       </section>

      {/* 9 & 10: POST INDEPENDENCE & EARTHQUAKE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-[1600px] mx-auto px-6">
           <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-8">
                 <MetallicHeading text="1947 to 2001: Trials & Transformation" variant="gold" as="h2" className="text-4xl font-bold font-sora" />
                 <p className="text-white leading-relaxed text-lg">
                    Post-independence, Kutch was a separate state before merging with Gujarat in 1960. Being a border district, it saw wars and challenges. However, the defining moment of modern Kutch history was the **January 26, 2001 Earthquake**.
                 </p>
                 <p className="text-white leading-relaxed text-lg">
                    The 7.7 magnitude quake devastated Bhuj, Anjar, and Bachau. It was a tragedy of immense scale, claiming thousands of lives and flattening historic structures.
                 </p>
              </div>
               <div className="lg:col-span-7">
                  <div className="bg-gradient-to-br from-red-950/30 to-black p-8 md:p-12 rounded-3xl border border-red-900/30 relative">
                     <MetallicHeading text="Resilience Reborn" variant="gold" as="h3" className="text-3xl font-bold mb-6 font-sora" />
                     <p className="text-lg text-white italic mb-8">
                        "Like a phoenix rising from the ashes, Kutch rebuilt itself not just with bricks, but with sheer willpower."
                     </p>
                     <div className="grid sm:grid-cols-2 gap-6">
                       <div className="bg-black/40 p-6 rounded-xl">
                          <span className="text-4xl font-black text-white block mb-2">Smritivan</span>
                          <span className="text-sm text-gray-200">A world-class memorial near Bhuj honoring the lost lives.</span>
                       </div>
                       <div className="bg-black/40 p-6 rounded-xl">
                          <span className="text-4xl font-black text-white block mb-2">Industry</span>
                          <span className="text-sm text-gray-200">Post-2001 tax holidays sparked massive industrial growth.</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 11 & 12: PRESENT DAY & TRAVEL CONTEXT */}
      <section className="py-24 bg-white/5">
         <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-16">
               <MetallicHeading text="Kutch Today" variant="gold" as="h2" className="text-4xl md:text-5xl font-black mb-6 font-sora" />
               <p className="text-xl text-white max-w-3xl mx-auto">
                  A perfect blend of antiquity and modernity, welcoming travelers from across the globe.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
               {[
                  { img: "/images/destinations/white-rann-hero.webp", title: "Tourism Hub", desc: "Home to the world-famous Rann Utsav." },
                  { img: "/images/destinations/mundra.webp", title: "Economic Powerhouse", desc: "Mundra & Kandla are among India's largest ports." },
                  { img: "/images/culture/crafts-hero.webp", title: "Cultural Capital", desc: "Preserving ancient crafts in a modern world." }
               ].map((item, i) => (
                  <div key={i} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                     <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2 font-sora">{item.title}</h3>
                        <p className="text-gray-100 text-sm">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="bg-amber-500 text-black rounded-[2rem] p-10 md:p-16 text-center">
               <h3 className="text-3xl md:text-4xl font-black font-sora mb-6">How History Shapes Your Visit</h3>
               <p className="text-lg md:text-xl font-medium max-w-4xl mx-auto mb-10 leading-relaxed">
                  When you walk through the **Prag Mahal**, you see European influence. When you explore **Dholavira**, you touch the dawn of civilization. Every craft you buy supports a lineage of artisans. Understanding this history transforms your trip from sightseeing to soul-searching.
               </p>
               <a href="/destinations" className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                  Start Your Journey
               </a>
            </div>
         </div>
      </section>

      {/* 13 & 14: SUMMARY & FAQs */}
      <section className="py-24">
         <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
               <MetallicHeading text="Frequently Asked Questions" variant="gold" as="h2" className="text-3xl font-bold font-sora" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               {[
                  { q: "How old is the history of Kutch?", a: "Kutch's history dates back over 4500 years to the Indus Valley Civilization (Dholavira)." },
                  { q: "Why is Kutch culturally distinct?", a: "Its geographical isolation as an island (historically) led to a unique development of language, dress, and self-reliance." },
                  { q: "What role did trade play?", a: "Maritime trade with Africa and the Middle East brought wealth, diversity, and varied influences to Kutch." },
                  { q: "How did the 2001 earthquake change Kutch?", a: "It caused massive destruction but also led to rapid industrialization, better infrastructure, and a modernized economy." }
               ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                     <h4 className="font-bold text-amber-400 mb-3 text-lg">{item.q}</h4>
                     <p className="text-white leading-relaxed">{item.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
