/**
 * Centralized Theme Configuration for Kutch Travel Website
 * This file contains all design tokens, colors, typography, and shared styles
 * Update this file to change the theme across the entire application
 */

export const theme = {
  // Color system
  colors: {
    // Brand colors
    brand: {
      primary: {
        bg: 'bg-blue-600',
        text: 'text-blue-400',
        border: 'border-blue-600',
        hover: 'hover:bg-blue-700',
      },
      secondary: {
        bg: 'bg-indigo-600',
        text: 'text-indigo-400',
        border: 'border-indigo-600',
        hover: 'hover:bg-indigo-700',
      },
    },

    // Badge styles
    badges: {
      primary: 'from-blue-600 to-blue-700',
      secondary: 'from-indigo-600 to-indigo-700',
      featured: 'from-amber-600 to-amber-700',
      accent: 'from-emerald-600 to-emerald-700',
    },

    // Section colors
    sections: {
      overview: {
        bg: 'bg-gradient-to-br from-blue-950/40 to-black',
        border: 'border-blue-900/40',
        text: 'text-blue-100',
      },
      history: {
        bg: 'bg-gradient-to-br from-amber-950/40 to-black',
        border: 'border-amber-900/40',
        text: 'text-amber-100',
      },
      geography: {
        bg: 'bg-gradient-to-br from-emerald-950/40 to-black',
        border: 'border-emerald-900/40',
        text: 'text-emerald-100',
      },
      culture: {
        bg: 'bg-gradient-to-br from-purple-950/40 to-black',
        border: 'border-purple-900/40',
        text: 'text-purple-100',
      },
      bestTimeToVisit: {
        bg: 'bg-gradient-to-br from-cyan-950/40 to-black',
        border: 'border-cyan-900/40',
        text: 'text-cyan-100',
      },
      howToReach: {
        bg: 'bg-gradient-to-br from-rose-950/40 to-black',
        border: 'border-rose-900/40',
        text: 'text-rose-100',
      },
      default: {
        bg: 'bg-gradient-to-br from-gray-950/40 to-black',
        border: 'border-white/10',
        text: 'text-gray-100',
      },
    },

    // Text colors
    text: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
      muted: 'text-gray-400',
      link: 'text-blue-400',
      linkHover: 'hover:text-blue-300',
    },

    // Background colors
    background: {
      main: 'bg-black',
      card: 'bg-black/40',
      nav: 'bg-black/80',
    },

    // Border colors
    border: {
      light: 'border-white/10',
      DEFAULT: 'border-white/20',
      dark: 'border-white/30',
    },
  },
  
  // Typography
  typography: {
    fonts: {
      heading: 'font-sora',
      body: 'font-inter',
      accent: 'font-space-grotesk',
    },
    
    sizes: {
      hero: 'text-6xl md:text-8xl lg:text-9xl',
      h1: 'text-5xl md:text-6xl lg:text-7xl',
      h2: 'text-4xl md:text-5xl lg:text-6xl',
      h3: 'text-3xl md:text-4xl',
      body: 'text-xl md:text-2xl',
      small: 'text-sm md:text-base',
    },
    
    weights: {
      extrabold: 'font-extrabold',
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      light: 'font-light',
    },
  },
  
  // Spacing
  spacing: {
    section: 'py-24 md:py-28',
    container: 'max-w-[1600px] mx-auto px-6',
    card: 'p-6 md:p-8',
  },
  
  // Effects
  effects: {
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow-md',
      lg: 'shadow-lg',
    },
    rounded: {
      sm: 'rounded',
      DEFAULT: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
    },
    transition: 'transition-all duration-300',
    glass: 'backdrop-blur-2xl bg-black/40 border border-white/10',
    glow: 'shadow-[0_0_100px_rgba(139,92,246,0.4)]',
    blob: {
      opacity: 'opacity-30',
      sizes: ['w-[500px] h-[500px]', 'w-[400px] h-[400px]', 'w-[450px] h-[450px]'],
    },
  },
  
  // Animations
  animations: {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hover: { scale: 1.05, y: -8 },
    },
  },
} as const;

// Helper functions to get theme values
export const getFont = (key: keyof typeof theme.typography.fonts) => theme.typography.fonts[key];
export const getTextSize = (key: keyof typeof theme.typography.sizes) => theme.typography.sizes[key];
export const getSectionColors = (section: keyof typeof theme.colors.sections) => theme.colors.sections[section];
export const getTextColor = (key: keyof typeof theme.colors.text) => theme.colors.text[key];
export const getBgColor = (key: keyof typeof theme.colors.background) => theme.colors.background[key];
export const getBorderColor = (key: keyof typeof theme.colors.border) => theme.colors.border[key];
export const getSpacing = (key: keyof typeof theme.spacing) => theme.spacing[key];

// Helper function to get text class
export const getText = (type: keyof typeof theme.colors.text) => 
  theme.colors.text[type];

// Helper function to get complete heading class
export const getHeading = (size: keyof typeof theme.typography.sizes) => 
  `${theme.typography.fonts.heading} ${theme.typography.sizes[size]} ${theme.typography.weights.extrabold}`;

// Helper function to get complete body text class
export const getBody = (size: keyof typeof theme.typography.sizes = 'body') => 
  `${theme.typography.fonts.body} ${theme.typography.sizes[size]} ${theme.typography.weights.light}`;

// Card gradient variants for QuickGuide and other components
export const cardGradients = [
  { 
    bg: 'from-gray-500/20 via-gray-500/15 to-gray-500/10', 
    border: 'border-gray-400/40', 
    icon: 'from-gray-400 to-gray-400',
    glow: 'rgba(99, 102, 241, 0.5)'
  },
    { 
      bg: 'from-indigo-600/20 via-purple-600/15 to-pink-600/10', 
      border: 'border-indigo-400/40', 
      icon: 'from-indigo-600 to-purple-600',
      glow: 'rgba(99, 102, 241, 0.5)'
    },
    { 
      bg: 'from-cyan-600/20 via-blue-600/15 to-indigo-600/10', 
      border: 'border-cyan-400/40', 
      icon: 'from-cyan-600 to-blue-600',
      glow: 'rgba(59, 130, 246, 0.5)'
    },
    { 
      bg: 'from-pink-600/20 via-purple-600/15 to-indigo-600/10', 
      border: 'border-pink-400/40', 
      icon: 'from-pink-600 to-purple-600',
      glow: 'rgba(236, 72, 153, 0.5)'
    },
    { 
      bg: 'from-indigo-600/20 via-purple-600/15 to-pink-600/10', 
      border: 'border-indigo-400/40', 
      icon: 'from-indigo-600 to-purple-600',
      glow: 'rgba(99, 102, 241, 0.5)'
    },
    { 
      bg: 'from-cyan-600/20 via-blue-600/15 to-indigo-600/10', 
      border: 'border-cyan-400/40', 
      icon: 'from-cyan-600 to-blue-600',
      glow: 'rgba(59, 130, 246, 0.5)'
    },
    { 
      bg: 'from-pink-600/20 via-purple-600/15 to-indigo-600/10', 
      border: 'border-pink-400/40', 
      icon: 'from-pink-600 to-purple-600',
      glow: 'rgba(236, 72, 153, 0.5)'
    },
  { 
    bg: 'from-gray-500/20 via-gray-500/15 to-gray-500/10', 
    border: 'border-gray-400/40', 
    icon: 'from-gray-400 to-gray-400',
    glow: 'rgba(59, 130, 246, 0.5)'
  },
  { 
    bg: 'from-gray-500/20 via-gray-500/15 to-gray-500/10', 
    border: 'border-gray-400/40', 
    icon: 'from-gray-400 to-gray-400',
    glow: 'rgba(236, 72, 153, 0.5)'
  },
  { 
    bg: 'from-gray-500/20 via-gray-500/15 to-gray-500/10', 
    border: 'border-gray-400/40', 
    icon: 'from-gray-400 to-gray-400',
    glow: 'rgba(99, 102, 241, 0.5)'
  },
  { 
    bg: 'from-gray-500/20 via-gray-500/15 to-gray-500/10', 
    border: 'border-gray-400/40', 
    icon: 'from-gray-400 to-gray-400',
    glow: 'rgba(168, 85, 247, 0.5)'
  },
  { 
    bg: 'from-gray-500/20 via-gray-500/15 to-gray-500/10', 
    border: 'border-gray-400/40', 
    icon: 'from-gray-400 to-gray-400',
    glow: 'rgba(59, 130, 246, 0.5)'
  },
  { 
    bg: 'from-gray-500/20 via-gray-500/15 to-gray-500/10', 
    border: 'border-gray-400/40', 
    icon: 'from-gray-400 to-gray-400',
    glow: 'rgba(99, 102, 241, 0.5)'
  },
];

