import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History of Kutch | A Timeless Journey',
  description: 'Explore the rich history of Kutch, from the ancient Indus Valley Civilization to the resilience of its people and modern cultural revival.',
};

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-500/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           {/* Placeholder for Hero Image - using one of the generated ones or a dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
           <Image
            src="/assets/aina_mahal_interior.png" // Using Aina Mahal as hero for now or will update
            alt="History of Kutch"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
              Echoes of Time
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Where the sands of the Rann whisper stories of ancient civilizations, royal grandeur, and an unbreakable spirit.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500">A Land of Legends</h2>
            <div className="w-20 h-1 bg-amber-500/50 rounded-full"></div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Kutch is not just a district; it's a living museum. Its history is etched in the fossils of the Jurassic era, the bricks of the Harappan civilization, and the intricate carvings of royal palaces. Isolated by the Rann and the sea, Kutch developed a unique culture, distinct yet deeply connected to the trade routes of the world.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From being an island in ancient times to becoming a cradle of maritime trade, the story of Kutch is a fascinating saga of adaptation and survival.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-900/10 group">
             <Image
                src="/assets/white_rann_camel.png"
                alt="Kutch Culture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
             <div className="absolute bottom-6 left-6">
                <p className="text-amber-400 font-medium">The White Desert</p>
                <p className="text-sm text-gray-400">A canvas of nature and culture</p>
             </div>
          </div>
        </div>
      </section>

      {/* Timeline Sections */}
      <div className="space-y-24 pb-24">
        
        {/* Ancient Roots */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-amber-950/20 -skew-y-3 z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden border border-white/10">
               <Image
                  src="/assets/dholavira_ruins.png" 
                  alt="Dholavira Ruins"
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <span className="text-amber-400 font-mono tracking-widest text-sm uppercase">4500 Years Ago</span>
              <h2 className="text-4xl font-bold text-white">The Cradle of Civilization</h2>
              <p className="text-gray-300 leading-relaxed">
                Long before modern cities rose, **Dholavira** stood as a metropolis of the Indus Valley Civilization. Known locally as *Kotada Timba*, this UNESCO World Heritage site reveals advanced water conservation systems, town planning, and trade links with Mesopotamia. It whispers the secrets of a sophisticated society that thrived in the arid lands of Kutch.
              </p>
            </div>
          </div>
        </section>

        {/* The Foundation */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-400 font-mono tracking-widest text-sm uppercase">1549 AD</span>
              <h2 className="text-4xl font-bold text-white">The Foundation of Power</h2>
              <p className="text-gray-300 leading-relaxed">
                In the mid-16th century, **Rao Khengarji I** unified the region and established **Bhuj** as the capital in **1549**. Strategically located at the base of Bhujiyo Dungar, the city became the political heart of the Kingdom of Kutch. Khengarji I is often hailed as the true architect of the state, laying the foundations of a dynasty that would rule for centuries. He also developed the port of Mandvi, opening Kutch to the world.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
               <Image
                  src="/assets/bhujia_fort.png" // Generated Bhujia Fort
                  alt="Bhujia Fort"
                  fill
                  className="object-cover"
               />
            </div>
        </section>

        {/* Maritime Glory */}
        <section className="relative py-16">
           <div className="absolute inset-0 bg-amber-900/10 skew-y-2 z-0"></div>
           <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden border border-white/10">
               <Image
                  src="/assets/mandvi_port_historical.png" // Generated Mandvi Port
                  alt="Historic Mandvi Port"
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-sepia/30 mixed-blend-overlay"></div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <span className="text-amber-400 font-mono tracking-widest text-sm uppercase">18th Century</span>
              <h2 className="text-4xl font-bold text-white">Golden Age of Trade</h2>
              <p className="text-gray-300 leading-relaxed">
                The 18th century marked a **Golden Age** for Kutch. Under the patronage of Maharao Lakhpatji, art and culture flourished. The legendary artisan **Ram Singh Malam** returned from Europe to create the exquisite **Aina Mahal**, a palace of mirrors that blended Venetian and Indian styles. The Kutchi sailors, masters of the sea, traded across the Indian Ocean to Africa and the Middle East, bringing wealth and stories back to their homeland. The state even minted its own currency, the **Kutch Kori**.
              </p>
            </div>
          </div>
        </section>

         {/* Nature's Fury - 1819 */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-400 font-mono tracking-widest text-sm uppercase">1819 AD</span>
              <h2 className="text-4xl font-bold text-white">The Great Shift</h2>
              <p className="text-gray-300 leading-relaxed">
                On June 16, 1819, a massive earthquake altered the geography of Kutch forever. The earth rose to form a natural dam known as the **Allah Bund** (Dam of God), blocking the Nara river. This cataclysmic event shifted the course of the Indus river westward, turning the fertile Rann into the vast saline desert we see today. It was a stark reminder of nature's power over the land.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Reusing White Rann image as it depicts the aftermath/current state effectively */}
               <Image
                  src="/assets/white_rann_camel.png" 
                  alt="The White Rann"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl text-white font-light italic bg-black/50 px-4 py-2 rounded">The River Become Desert</span>
               </div>
            </div>
        </section>

        {/* Road to Democracy */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gray-800/20 -skew-y-2 z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden border border-white/10">
               <Image
                  src="/assets/aina_mahal_interior.png" // Reusing palace image to represent governance/state
                  alt="Legacy of Kutch"
                  fill
                  className="object-cover"
               />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <span className="text-amber-400 font-mono tracking-widest text-sm uppercase">1947 - 1960 AD</span>
              <h2 className="text-4xl font-bold text-white">A New Dawn</h2>
              <p className="text-gray-300 leading-relaxed">
                 As India awoke to freedom in **1947**, Kutch was one of the first princely states to accede to the dominion. It held the status of a separate 'C' state until 1956. In **1960**, with the bifurcation of Bombay State, Kutch became an integral district of the newly formed state of **Gujarat**. The Kutch Kori was replaced by the Indian Rupee, symbolizing the complete integration of the historic kingdom into the world's largest democracy.
              </p>
            </div>
          </div>
        </section>

        {/* Resilience */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gray-900/50 skew-y-3 z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden border border-white/10">
               <Image
                  src="/assets/smritivan_memorial.png"
                  alt="Smritivan Memorial"
                  fill
                  className="object-cover"
               />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6">
                     <p className="text-white font-medium">Smritivan Memorial</p>
                  </div>
                </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <span className="text-amber-400 font-mono tracking-widest text-sm uppercase">2001 - Present</span>
              <h2 className="text-4xl font-bold text-white">Rise from the Rubble</h2>
              <p className="text-gray-300 leading-relaxed">
                On January 26, 2001, a devastating earthquake shook Kutch to its core. But the spirit of Kutch proved stronger than the calamity. Like the phoenix, the region rose from the debris. The **Smritivan Memorial** on Bhujiyo Dungar is a poignant tribute to the lost souls and a celebration of the unbreakable human spirit. Today, Kutch stands rebuilt, revitalized, and more vibrant than ever.
              </p>
            </div>
          </div>
        </section>


        {/* Modern Kutch */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
                The Celebration Continues
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
                Today, Kutch is a global destination. The **Rann Utsav** celebrates the stark beauty of the White Desert, bringing together music, dance, and crafts under the full moon. It is a land where tradition hugs modernity, where every village has a craft, and every stone has a story.
            </p>
            <div className="pt-8">
                 <a href="/destinations" className="inline-block px-8 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    Explore Destinations
                 </a>
            </div>
        </section>

      </div>
    </main>
  );
}
