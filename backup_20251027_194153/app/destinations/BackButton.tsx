"use client";

import Link from 'next/link';

export default function BackButton() {
  return (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-lg hover:bg-white/30 transition-all font-medium border border-purple-200/50"
    >
      <span className="text-lg">←</span>
      <span>Home</span>
    </Link>
  );
}