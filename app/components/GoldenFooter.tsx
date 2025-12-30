"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MetallicHeading from "./MetallicHeading";

export default function GoldenFooter() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 border-t border-white/10">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full blur-3xl opacity-5"></div>
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"></div>
      
      <div className="relative py-8">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-400 text-center md:text-left font-medium text-sm md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} <span className="text-amber-400 font-bold">Travel Kutch</span>. 
              Crafted with passion for authentic cultural experiences.
            </motion.p>
            
            <motion.p 
              className="text-gray-500 text-xs md:text-sm font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Designed with ❤️ for travelers seeking authentic Kutch
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
