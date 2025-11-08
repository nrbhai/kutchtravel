/**
 * Centralized Theme Configuration for Kutch Travel Website
 * This file contains all design tokens, colors, typography, and shared styles
 * Update this file to change the theme across the entire application
 */

export const theme = {
  // Color Palette - Indigo/Purple/Blue theme
  colors: {
    // Background gradients
    gradients: {
      primary: 'from-indigo-800 via-purple-800 to-blue-800',
      secondary: 'from-purple-900 via-indigo-900 to-blue-900',
      accent: 'from-pink-500 via-purple-500 to-indigo-500',
      light: 'from-indigo-50 via-purple-50 to-blue-50',
    },
    
    // Text colors
    text: {
      primary: 'text-white',
      secondary: 'text-purple-200',
      accent: 'text-pink-300',
      muted: 'text-purple-100',
      light: 'text-gray-700',
    },
    
    // Interactive elements
    interactive: {
      border: 'border-white/20',
      borderHover: 'border-white/40',
      bg: 'bg-white/10',
      bgHover: 'bg-white/20',
    },
    
    // Badge/Button colors
    badges: {
      primary: 'from-indigo-500 to-purple-500',
      secondary: 'from-purple-500 to-pink-500',
      accent: 'from-pink-500 to-purple-500',
    },
  },
  
  // Typography
  typography: {
    fonts: {
      heading: 'font-sora',
      body: 'font-poppins',
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
    container: 'max-w-7xl mx-auto px-6',
    card: 'p-6 md:p-8',
  },
  
  // Effects
  effects: {
    glass: 'backdrop-blur-2xl bg-white/10 border border-white/20',
    shadow: 'shadow-2xl',
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

// Helper function to get gradient class
export const getGradient = (type: keyof typeof theme.colors.gradients) => 
  `bg-gradient-to-br ${theme.colors.gradients[type]}`;

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
    bg: 'from-indigo-500/20 via-purple-500/15 to-blue-500/10', 
    border: 'border-indigo-400/40', 
    icon: 'from-indigo-400 to-purple-400',
    glow: 'rgba(99, 102, 241, 0.5)'
  },
  { 
    bg: 'from-purple-500/20 via-pink-500/15 to-indigo-500/10', 
    border: 'border-purple-400/40', 
    icon: 'from-purple-400 to-pink-400',
    glow: 'rgba(168, 85, 247, 0.5)'
  },
  { 
    bg: 'from-blue-500/20 via-indigo-500/15 to-purple-500/10', 
    border: 'border-blue-400/40', 
    icon: 'from-blue-400 to-indigo-400',
    glow: 'rgba(59, 130, 246, 0.5)'
  },
  { 
    bg: 'from-pink-500/20 via-purple-500/15 to-blue-500/10', 
    border: 'border-pink-400/40', 
    icon: 'from-pink-400 to-purple-400',
    glow: 'rgba(236, 72, 153, 0.5)'
  },
  { 
    bg: 'from-indigo-500/20 via-blue-500/15 to-purple-500/10', 
    border: 'border-indigo-400/40', 
    icon: 'from-indigo-400 to-blue-400',
    glow: 'rgba(99, 102, 241, 0.5)'
  },
  { 
    bg: 'from-purple-500/20 via-indigo-500/15 to-pink-500/10', 
    border: 'border-purple-400/40', 
    icon: 'from-purple-400 to-indigo-400',
    glow: 'rgba(168, 85, 247, 0.5)'
  },
  { 
    bg: 'from-blue-500/20 via-purple-500/15 to-pink-500/10', 
    border: 'border-blue-400/40', 
    icon: 'from-blue-400 to-purple-400',
    glow: 'rgba(59, 130, 246, 0.5)'
  },
  { 
    bg: 'from-indigo-500/20 via-pink-500/15 to-blue-500/10', 
    border: 'border-indigo-400/40', 
    icon: 'from-indigo-400 to-pink-400',
    glow: 'rgba(99, 102, 241, 0.5)'
  },
];
