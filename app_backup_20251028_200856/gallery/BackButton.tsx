"use client";

export default function BackButton() {
  return (
    <button 
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all font-medium"
    >
      <span className="text-lg">←</span>
      <span>Back</span>
    </button>
  );
}