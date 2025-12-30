import React from 'react';

interface BackgroundEffectsProps {
  color1?: string; // Tailwind color class for first blob (e.g. bg-amber-900/20)
  color2?: string; // Tailwind color class for second blob
  opacity?: number; // Opacity of noise
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  color1 = 'bg-amber-900/20',
  color2 = 'bg-purple-900/20',
  opacity = 0.2
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 bg-[url('/images/noise.png')] mix-blend-overlay`} style={{ opacity }} />
      <div className={`absolute top-0 left-0 w-[500px] h-[500px] ${color1} rounded-full blur-[100px] mix-blend-screen animate-blob`} />
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${color2} rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000`} />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/90" />
    </div>
  );
};

export default BackgroundEffects;
