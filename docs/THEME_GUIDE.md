# Theme System Guide

## Overview
This project now uses a centralized theme configuration system that makes it easy to update colors, fonts, and styles across the entire application.

## File Structure

```
app/
├── theme/
│   └── config.ts          # Centralized theme configuration
├── components/
│   ├── Section.tsx        # Reusable section components
│   └── QuickGuide.tsx     # Updated to use theme system
└── globals.css            # Global styles and animations
```

## Theme Configuration (`app/theme/config.ts`)

### 1. Color Palette

All colors are defined in the `theme.colors` object:

```typescript
theme.colors = {
  gradients: {
    primary: 'from-indigo-900 via-purple-900 to-blue-900',  // Main dark gradient
    secondary: 'from-purple-900 via-indigo-900 to-blue-900', // Alternative
    accent: 'from-pink-500 via-purple-500 to-indigo-500',    // For highlights
    light: 'from-indigo-50 via-purple-50 to-blue-50',        // Light sections
  },
  text: {
    primary: 'text-white',           // Main text on dark backgrounds
    secondary: 'text-purple-200',    // Secondary text
    accent: 'text-pink-300',         // Accent text
    muted: 'text-purple-100',        // Muted text
  },
  badges: {
    primary: 'from-indigo-500 to-purple-500',   // Primary badges/buttons
    secondary: 'from-purple-500 to-pink-500',   // Secondary
    accent: 'from-pink-500 to-purple-500',      // Accent
  }
}
```

### 2. Typography

```typescript
theme.typography = {
  fonts: {
    heading: 'font-sora',          // All headings
    body: 'font-poppins',          // Body text
    accent: 'font-space-grotesk',  // Special accents
  },
  sizes: {
    hero: 'text-6xl md:text-8xl lg:text-9xl',  // Hero text
    h1: 'text-5xl md:text-6xl lg:text-7xl',    // H1 headings
    h2: 'text-4xl md:text-5xl lg:text-6xl',    // H2 headings
    h3: 'text-3xl md:text-4xl',                // H3 headings
    body: 'text-xl md:text-2xl',               // Body text
    small: 'text-sm md:text-base',             // Small text
  }
}
```

### 3. Effects

```typescript
theme.effects = {
  glass: 'backdrop-blur-2xl bg-white/10 border border-white/20',  // Glassmorphism
  shadow: 'shadow-2xl',                                            // Shadow
  glow: 'shadow-[0_0_100px_rgba(139,92,246,0.4)]',               // Purple glow
  blob: {
    opacity: 'opacity-30',                                         // Blob opacity
    sizes: ['w-[500px] h-[500px]', ...]                          // Blob sizes
  }
}
```

## How to Update the Theme

### Change the Color Scheme

**To change from indigo/purple/blue to a different color scheme:**

1. Open `app/theme/config.ts`
2. Update the `theme.colors.gradients` values:

```typescript
// Example: Change to green/teal theme
gradients: {
  primary: 'from-emerald-900 via-teal-900 to-cyan-900',
  secondary: 'from-teal-900 via-emerald-900 to-cyan-900',
  accent: 'from-green-500 via-teal-500 to-cyan-500',
  light: 'from-emerald-50 via-teal-50 to-cyan-50',
}
```

3. Update `theme.colors.text` accordingly:

```typescript
text: {
  primary: 'text-white',
  secondary: 'text-teal-200',
  accent: 'text-green-300',
  muted: 'text-teal-100',
}
```

4. Update `cardGradients` array in the same file to match your new colors.

### Change Typography

**To change fonts:**

1. Add your fonts to `app/layout.tsx`
2. Update `app/theme/config.ts`:

```typescript
fonts: {
  heading: 'font-your-heading-font',
  body: 'font-your-body-font',
  accent: 'font-your-accent-font',
}
```

### Change Spacing

```typescript
spacing: {
  section: 'py-20 md:py-24',        // Section padding
  container: 'max-w-6xl mx-auto px-4', // Container
  card: 'p-4 md:p-6',               // Card padding
}
```

## Using the Reusable Components

### Section Component

Use `Section` for consistent section layouts:

```tsx
import { Section, SectionHeader } from '@/app/components/Section';

<Section id="my-section" variant="dark">
  <SectionHeader
    badge={{ icon: "🎨", text: "My Badge" }}
    title="My Section Title"
    subtitle="My subtitle text"
    decorativeItems={[
      { icon: "✨", text: "Feature 1" },
      { icon: "🌟", text: "Feature 2" }
    ]}
  />
  {/* Your content */}
</Section>
```

**Props:**
- `id`: Section ID for navigation
- `variant`: `'dark'` or `'light'`
- `className`: Additional classes

### SectionHeader Component

Provides consistent headers with badges, titles, and subtitles.

### GlassCard Component

For glassmorphism effect cards:

```tsx
import { GlassCard } from '@/app/components/Section';

<GlassCard withOrbs={true}>
  <YourContent />
</GlassCard>
```

## Helper Functions

### getGradient()
```tsx
import { getGradient } from '@/app/theme/config';

<div className={getGradient('primary')}>...</div>
```

### getHeading()
```tsx
import { getHeading } from '@/app/theme/config';

<h1 className={getHeading('hero')}>My Heading</h1>
```

### getBody()
```tsx
import { getBody } from '@/app/theme/config';

<p className={getBody('body')}>My text</p>
```

## Component Examples

### Adding a New Section

```tsx
import { Section, SectionHeader, GlassCard } from '@/app/components/Section';

export default function MyNewSection() {
  return (
    <Section id="new-section" variant="dark">
      <SectionHeader
        badge={{ icon: "🚀", text: "New Feature" }}
        title="Amazing New Section"
        subtitle={
          <>
            This is my new section with{" "}
            <span className="text-pink-300 font-medium">
              highlighted text
            </span>
          </>
        }
      />
      
      <GlassCard>
        <div>Your content here</div>
      </GlassCard>
    </Section>
  );
}
```

## Benefits of This System

1. **Centralized Control**: Change colors/fonts in one place
2. **Consistency**: All components use the same design tokens
3. **Easy Updates**: No need to search through multiple files
4. **Type Safety**: TypeScript ensures correct usage
5. **Reusability**: Pre-built components for common patterns
6. **Maintainability**: Clear structure and documentation

## Migration Checklist

To migrate existing sections to use the new system:

- [ ] Import theme config: `import { theme } from '@/app/theme/config'`
- [ ] Replace hardcoded colors with `theme.colors.*`
- [ ] Replace hardcoded fonts with `theme.typography.*`
- [ ] Use `Section` component instead of manual section structure
- [ ] Use `SectionHeader` for headers
- [ ] Use `GlassCard` for card components
- [ ] Replace gradient classes with `theme.colors.gradients.*`
- [ ] Remove duplicate styling code

## Next Steps

1. Migrate remaining sections (Destinations, Culture, Contact, Footer)
2. Create more reusable components (Button, Badge, Card, etc.)
3. Add dark/light mode toggle using theme config
4. Create component variants (size, color variations)
