'use client';

import React from 'react';
import { motion } from 'framer-motion';

export type MetallicHeadingProps = {
  text: string;
  variant?: 'gold' | 'silver' | 'silver-green' | 'blue-cyan';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'strong' | 'div';
  className?: string;
  animationDuration?: string;
  delay?: number;
  subtitle?: string; // Optional: for 'Experience The Vibe' or similar two-part headings in future
};

export default function MetallicHeading({
  text,
  variant = 'gold',
  as: Component = 'h2',
  className = '',
  animationDuration = '12s',
  delay = 0
}: MetallicHeadingProps) {
  
  // Define gradient styles based on variant
  const getGradientStyle = () => {
    switch (variant) {
      case 'gold':
        return {
          background: 'linear-gradient(to right, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
        };
      case 'silver':
        return {
          background: 'linear-gradient(to right, #99a1af 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #99a1af 100%)',
          filter: 'drop-shadow(0 2px 4px rgba(255,255,255,0.2))'
        };
      case 'silver-green':
        return {
          background: 'linear-gradient(to right, #94a3b8 0%, #e2e8f0 25%, #86efac 50%, #e2e8f0 75%, #94a3b8 100%)',
          filter: 'drop-shadow(0 2px 4px rgba(255,255,255,0.2))'
        };
      case 'blue-cyan': // Keeping the old holographic look available if needed, but animated properly
         return {
          background: 'linear-gradient(90deg, #4338ca, #6b21a8, #c026d3, #0891b2, #0e7490, #4338ca)',
          backgroundSize: '300% 300%',
          filter: 'brightness(1.3) contrast(1.2)'
         };
      default:
        return {
          background: 'linear-gradient(to right, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
        };
    }
  };

  const gradientStyle = getGradientStyle();

  const inlineStyles: React.CSSProperties = {
    ...gradientStyle,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    animation: `shine ${animationDuration} linear infinite`,
    display: 'inline-block', // Critical for text-width gradient
    width: 'fit-content'
  };

  // If using framer motion component
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={inlineStyles}
    >
      {text}
    </MotionComponent>
  );
}
