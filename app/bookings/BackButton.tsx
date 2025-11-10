"use client";

import Link from 'next/link';

export default function BackButton() {
  return (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg hover:bg-white transition-all font-semibold border-2 border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-xl"
    >
      <span className="text-lg">←</span>
      <span>Back to Home</span>
    </Link>
  );
}
