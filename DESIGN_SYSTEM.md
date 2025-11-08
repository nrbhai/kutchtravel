# Kutch Travel Design System Documentation

## Overview
This document describes the centralized design system for maintainable and consistent theming across the entire Kutch Travel website.

## Architecture

### 1. Centralized Theme Configuration
**Location:** `app/theme/colors.ts`

All design tokens, colors, typography, and styling constants are defined in one place. This allows you to update the entire site's theme by modifying a single file.

### 2. Global Styles
**Location:** `app/globals.css`

The `@layer base` section defines global defaults that apply to all pages:
- Dark gradient background (indigo-900 → purple-900 → blue-900)
- White text as default
- Headings: font-sora, white, bold
- Paragraphs: font-poppins, purple-100, relaxed leading
- Links: purple-300 with pink-300 hover
- Selection: purple-500/50 background

### 3. Root Layout
**Location:** `app/layout.tsx`

The body tag NO LONGER has hardcoded colors. All styling comes from globals.css and component-level styles.

## Color System

### Background Colors
```typescript
background.main: "bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"
background.section: "bg-white/10 backdrop-blur-xl"
background.card: "bg-white/10 backdrop-blur-xl"
background.hover: "hover:bg-white/20"
```

### Text Colors
```typescript
text.primary: "text-white"          // Main headings, important text
text.secondary: "text-purple-100"   // Body text, descriptions
text.tertiary: "text-purple-200"    // Secondary information
text.muted: "text-purple-300"       // Subtle text, captions
text.accent: "text-pink-300"        // Highlights, accents
```

### Border Colors
```typescript
border.light: "border-white/20"     // Light borders on glassmorphism
border.medium: "border-white/30"    // More visible borders
border.accent: "border-purple-400"  // Accent borders
border.accentAlt: "border-pink-400" // Alternative accent
```

## Typography System

### Fonts
- **Headings:** `font-sora` - Modern, bold, geometric sans-serif
- **Body:** `font-poppins` - Clean, readable, weights 300-800
- **Accent:** `font-space-grotesk` - Technical, stylish
- **Display:** `font-playfair` - Elegant serif for special occasions

### Usage Guidelines
```typescript
// Headings
<h1 className="font-sora text-white font-bold">
<h2 className="font-sora text-white font-semibold">

// Body text
<p className="font-poppins text-purple-100 leading-relaxed">

// Links
<a className="text-purple-300 hover:text-pink-300">
```

## Component Patterns

### Cards (Glassmorphism)
```tsx
className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
```

### Buttons
**Primary:**
```tsx
className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full"
```

**Secondary:**
```tsx
className="bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 border border-white/20 px-6 py-3 rounded-full"
```

### Sections
```tsx
<section className="py-16 md:py-24 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

## How to Use the Theme System

### Method 1: Import Theme Tokens
```tsx
import { themeColors, themeTypography, componentStyles } from '@/app/theme/colors';

<div className={componentStyles.card}>
  <h2 className={componentStyles.heading}>Title</h2>
  <p className={componentStyles.paragraph}>Description</p>
</div>
```

### Method 2: Use Direct Classes (Recommended for simplicity)
```tsx
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-300 to-purple-200 font-sora font-bold">
    Title
  </h2>
  <p className="text-purple-100 font-poppins leading-relaxed">
    Description
  </p>
</div>
```

## Common Patterns to Follow

### ✅ DO:
```tsx
// Use theme colors
<p className="text-purple-100">Readable text</p>

// Use glassmorphism for cards
<div className="bg-white/10 backdrop-blur-xl">

// Use proper fonts
<h2 className="font-sora">Heading</h2>
<p className="font-poppins">Body text</p>

// Use consistent spacing
<section className="py-16 md:py-24">
```

### ❌ DON'T:
```tsx
// Don't use light colors on dark backgrounds
<p className="text-gray-800">Invisible text</p>

// Don't use solid white backgrounds
<div className="bg-white">

// Don't use inconsistent fonts
<h2 className="font-inter">Heading</h2>

// Don't hardcode light theme colors
<div className="text-blue-900 bg-blue-100">
```

## Updating the Theme

To change the entire site's color scheme, edit `app/theme/colors.ts`:

```typescript
export const themeColors = {
  background: {
    main: "bg-gradient-to-br from-YOUR-COLOR via-YOUR-COLOR to-YOUR-COLOR",
    // ... rest of your colors
  },
  // ... update all colors here
};
```

## Migration Guide

When updating existing components:

1. **Remove light colors:**
   - `text-gray-[5-9]` → `text-purple-100` or `text-purple-200`
   - `text-blue-[5-9]` → `text-purple-300` or `text-pink-300`
   - `bg-white` → `bg-white/10 backdrop-blur-xl`
   - `bg-gray-[1-4]` → `bg-white/10 backdrop-blur-xl`

2. **Update borders:**
   - `border-gray-200` → `border-white/20`
   - `border-blue-500` → `border-purple-400`

3. **Update fonts:**
   - Headings → `font-sora`
   - Body → `font-poppins`
   - Accent → `font-space-grotesk`

4. **Test readability:**
   - Ensure text is readable (sufficient contrast)
   - Check hover states are visible
   - Verify animations work smoothly

## Component Checklist

When creating or updating a component:

- [ ] Uses dark theme colors (purple-100, purple-200, white)
- [ ] Uses glassmorphism for cards (bg-white/10 backdrop-blur-xl)
- [ ] Uses proper fonts (font-sora for headings, font-poppins for body)
- [ ] Has consistent spacing (py-16 md:py-24 for sections)
- [ ] Links are visible (text-purple-300 hover:text-pink-300)
- [ ] Borders are subtle (border-white/20)
- [ ] Animations are smooth (transition-all duration-300)
- [ ] Text is readable on dark background
- [ ] Hover states are visible and intuitive

## File Structure

```
app/
├── theme/
│   ├── colors.ts          # Central theme configuration
│   └── config.ts          # Additional theme utilities
├── globals.css            # Global base styles
├── layout.tsx             # Root layout (NO hardcoded colors in body)
└── components/
    ├── Section.tsx        # Reusable section wrapper
    ├── SectionCard.tsx    # Reusable card component
    └── ...other components
```

## Support & Troubleshooting

### Issue: Text is invisible or hard to read
**Solution:** Check if you're using light colors (text-gray-[5-9]). Replace with:
- `text-white` for headings
- `text-purple-100` for body text
- `text-purple-200` for secondary text

### Issue: Background is light instead of dark
**Solution:** Check these files:
1. `app/layout.tsx` - body should NOT have `bg-white`
2. `app/globals.css` - body should have the dark gradient
3. Component - should use `bg-white/10 backdrop-blur-xl`, not `bg-white`

### Issue: Theme changes don't apply
**Solution:** 
1. Clear browser cache
2. Restart dev server
3. Check if component has hardcoded colors overriding theme

## Best Practices

1. **Single Source of Truth:** Always refer to `app/theme/colors.ts` for color values
2. **Consistency:** Use the same patterns across all pages
3. **Maintainability:** Don't hardcode colors; use theme tokens
4. **Accessibility:** Ensure sufficient contrast (WCAG AA minimum)
5. **Performance:** Use backdrop-blur sparingly (can be CPU intensive)
6. **Responsiveness:** Test on mobile, tablet, and desktop

## Examples

See these files for reference implementations:
- `app/page.tsx` - Main landing page
- `app/destinations/bhuj/page.tsx` - Destination page example
- `app/components/DestinationTemplate.tsx` - Template component
- `app/components/SectionCard.tsx` - Reusable card component

---

**Last Updated:** 2025-01-27
**Version:** 2.0
**Maintained by:** Kutch Travel Development Team
