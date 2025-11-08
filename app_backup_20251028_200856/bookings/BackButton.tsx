"use client";

import Link from 'next/link';

export default function BackButton() {
  return (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-gray-300 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-white/30 transition-all font-medium border border-gray-400/50 dark:border-gray-700/50"
    >
      <span className="text-lg">←</span>
      <span>Back to Home</span>
    </Link>
  );
}
