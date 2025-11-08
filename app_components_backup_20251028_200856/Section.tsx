/**
 * Reusable Section Components
 * These components provide consistent layouts and styling across the application
 */

import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme/config';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
}

/**
 * Section with animated blob background
 */
export const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '',
  variant = 'dark'
}) => {
  const gradientClass = variant === 'dark' 
    ? theme.colors.gradients.primary 
    : theme.colors.gradients.light;
    
  return (
    <section id={id} className={`relative overflow-hidden ${theme.spacing.section} ${className}`}>
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}>
        {variant === 'dark' && (
          <>
            <div className={`blob blob-1 ${theme.effects.blob.sizes[0]} top-0 left-0 ${theme.effects.blob.opacity}`}></div>
            <div className={`blob blob-2 ${theme.effects.blob.sizes[1]} bottom-0 right-0 ${theme.effects.blob.opacity}`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
          </>
        )}
      </div>
      
      {/* Content */}
      <div className={`relative ${theme.spacing.container}`}>
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  badge?: {
    icon: string;
    text: string;
  };
  title: string;
  subtitle?: string | React.ReactNode;
  decorativeItems?: Array<{
    icon: string;
    text: string;
  }>;
  className?: string;
}

/**
 * Consistent Section Header
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  decorativeItems,
  className = ''
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={theme.animations.fadeUp}
      className={`text-center mb-20 ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div className="mb-8">
          <span className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${theme.colors.badges.primary} text-white rounded-full text-sm ${theme.typography.fonts.body} font-semibold tracking-wide shadow-lg`}>
            <span>{badge.icon}</span>
            <span>{badge.text}</span>
          </span>
        </div>
      )}
      
      {/* Title with Holographic Effect */}
      <h2 className={`${getHeadingClass('h1')} holographic mb-8`}>
        {title}
      </h2>
      
      {/* Subtitle */}
      {subtitle && (
        <div className={`${theme.typography.sizes.body} ${theme.colors.text.secondary} max-w-4xl mx-auto leading-relaxed ${theme.typography.fonts.body} ${theme.typography.weights.light}`}>
          {subtitle}
        </div>
      )}
      
      {/* Decorative Elements */}
      {decorativeItems && decorativeItems.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {decorativeItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="w-px h-5 bg-gradient-to-b from-gray-300 to-gray-300"></div>
              )}
              <div className={`flex items-center gap-2 ${theme.colors.text.secondary} ${theme.typography.fonts.body} font-medium`}>
                <span className={`w-3 h-3 bg-gradient-to-r ${theme.colors.badges.primary} rounded-full animate-pulse`}></span>
                <span className="text-sm">{item.text}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// Helper function to get heading class
const getHeadingClass = (size: 'hero' | 'h1' | 'h2' | 'h3') => {
  return `${theme.typography.fonts.heading} ${theme.typography.sizes[size]} ${theme.typography.weights.extrabold} leading-tight`;
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  withOrbs?: boolean;
}

/**
 * Glassmorphism Card Component
 */
export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '',
  withOrbs = true 
}) => {
  return (
    <div className="relative">
      <div className={`${theme.effects.glass} rounded-[2rem] ${theme.effects.shadow} ${theme.spacing.card} relative overflow-hidden ${className}`}>
        {/* Decorative Gradient Orbs */}
        {withOrbs && (
          <>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-gray-500 to-gray-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-gray-500 to-gray-500 rounded-full opacity-20 blur-3xl"></div>
          </>
        )}
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-[2rem] opacity-40 pointer-events-none ${theme.effects.glow}`}></div>
    </div>
  );
};

