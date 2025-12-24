/**
 * Centralized Theme Configuration
 * All color tokens, typography, and styling constants in one place
 * for easy maintenance and consistent theming across the entire site
 */

export const themeColors = {
  // Background gradients - dark and premium
  background: {
    main: "bg-black",
    section: "bg-black/40 backdrop-blur-xl",
    card: "bg-black/40 backdrop-blur-xl",
    hover: "hover:bg-white/5",
  },

  // Text colors - light on dark
  text: {
    primary: "text-gray-100",
    secondary: "text-gray-300",
    tertiary: "text-gray-400",
    muted: "text-gray-500",
    accent: "text-white",
  },

  // Border colors - subtle dark borders
  border: {
    light: "border-white/10",
    medium: "border-white/20",
    accent: "border-white/30",
    accentAlt: "border-white/40",
  },

  // Heading colors - light text
  heading: {
    gradient: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-yellow-400",
    solid: "text-white",
    secondary: "text-gray-200",
  },

  // Link colors - subtle
  link: {
    default: "text-blue-400",
    hover: "hover:text-blue-300",
  },

  // Button colors - dark theme
  button: {
    primary: "bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-500 hover:to-orange-500",
    secondary: "bg-white/10 backdrop-blur-xl text-white hover:bg-white/20",
    ghost: "text-gray-400 hover:text-white",
  },

  // Icon colors
  icon: {
    primary: "text-gray-100",
    secondary: "text-gray-300",
    tertiary: "text-gray-400",
    muted: "text-gray-500",
  },
};

export const themeTypography = {
  fonts: {
    heading: "font-sora",
    body: "font-inter",
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
  container: "max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8",
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
