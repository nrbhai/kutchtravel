/**
 * Centralized Theme Configuration
 * All color tokens, typography, and styling constants in one place
 * for easy maintenance and consistent theming across the entire site
 */

export const themeColors = {
  // Background gradients
  background: {
    main: "bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700",
    section: "bg-white/20 backdrop-blur-xl",
    card: "bg-white/20 backdrop-blur-xl",
    hover: "hover:bg-white/30",
  },

  // Text colors
  text: {
    primary: "text-white",
    secondary: "text-purple-100",
    tertiary: "text-purple-200",
    muted: "text-purple-300",
    accent: "text-pink-300",
  },

  // Border colors
  border: {
    light: "border-white/20",
    medium: "border-white/30",
    accent: "border-purple-400",
    accentAlt: "border-pink-400",
  },

  // Heading colors
  heading: {
    gradient: "text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-300 to-purple-200",
    solid: "text-white",
    secondary: "text-purple-100",
  },

  // Link colors
  link: {
    default: "text-purple-300",
    hover: "hover:text-pink-300",
  },

  // Button colors
  button: {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600",
    secondary: "bg-white/20 backdrop-blur-xl text-white hover:bg-white/30",
    ghost: "text-purple-300 hover:text-pink-300",
  },

  // Icon colors
  icon: {
    primary: "text-purple-300",
    secondary: "text-pink-300",
    tertiary: "text-indigo-300",
    muted: "text-purple-400",
  },
};

export const themeTypography = {
  fonts: {
    heading: "font-sora",
    body: "font-poppins",
    accent: "font-space-grotesk",
    display: "font-playfair",
  },
  
  sizes: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  },

  weights: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
};

export const themeSpacing = {
  section: "py-16 md:py-24",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  card: "p-6 md:p-8",
  gap: {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  },
};

export const themeEffects = {
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
  },
  
  blur: {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  },

  transition: {
    default: "transition-all duration-300",
    fast: "transition-all duration-150",
    slow: "transition-all duration-500",
  },

  animation: {
    blob1: "animate-blob animation-delay-2000",
    blob2: "animate-blob animation-delay-4000",
  },
};

// Utility function to combine class names
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Pre-built component styles for consistency
export const componentStyles = {
  card: cn(
    themeColors.background.card,
    themeColors.border.light,
    "border rounded-2xl",
    themeSpacing.card,
    themeEffects.shadow.lg,
    themeEffects.transition.default,
  ),

  heading: cn(
    themeColors.heading.gradient,
    themeTypography.fonts.heading,
    themeTypography.weights.bold,
  ),

  paragraph: cn(
    themeColors.text.secondary,
    themeTypography.fonts.body,
    "leading-relaxed",
  ),

  link: cn(
    themeColors.link.default,
    themeColors.link.hover,
    themeEffects.transition.default,
    "underline-offset-4 hover:underline",
  ),

  button: {
    primary: cn(
      themeColors.button.primary,
      themeTypography.fonts.body,
      themeTypography.weights.semibold,
      "px-6 py-3 rounded-full",
      themeEffects.shadow.lg,
      themeEffects.transition.default,
      "transform hover:scale-105",
    ),
    secondary: cn(
      themeColors.button.secondary,
      themeTypography.fonts.body,
      themeTypography.weights.medium,
      "px-6 py-3 rounded-full",
      themeColors.border.light,
      "border",
      themeEffects.transition.default,
    ),
  },

  section: cn(
    themeSpacing.section,
    "relative",
  ),

  container: themeSpacing.container,
};

export default {
  colors: themeColors,
  typography: themeTypography,
  spacing: themeSpacing,
  effects: themeEffects,
  components: componentStyles,
  cn,
};
