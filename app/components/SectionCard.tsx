"use client";

import Image from 'next/image';
import { getSectionColors, theme } from '@/app/theme/config';

export default function SectionCard({
  title,
  children,
  color,
  border,
  style,
  image,
}: {
  title: string;
  children: React.ReactNode;
  color?: string;
  border?: string;
  style?: React.CSSProperties;
  image?: {
    src: string;
    alt: string;
  };
}) {
  // Convert title to theme key format and get section colors
  const sectionKey = title.toLowerCase().replace(/\s+/g, '') as keyof typeof theme.colors.sections;
  const themeColors = getSectionColors(sectionKey) || getSectionColors('default');

  // Extract text color from border prop if provided
  const textColorClass = border?.match(/text-[a-z]+-[0-9]+/)?.[0] || themeColors.text;
  
  return (
    <section className={`${color || themeColors.bg} py-10 px-6 rounded-2xl shadow-lg mb-8 border-2 border-slate-100 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300`} style={style}>
      <h2
        className={`text-2xl font-sora font-bold mb-4 bg-gradient-to-r ${textColorClass} pl-4 ${border || `border-l-4 ${themeColors.border}`}`}
      >
        {title}
      </h2>
      <div className="font-inter text-slate-900">{children}</div>
      
      {/* Section Image */}
      {image && (
        <div className="mt-6 relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
    </section>
  );
}

