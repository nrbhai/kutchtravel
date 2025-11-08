# Quick Reference: Kutch Travel Theme System

## 🎨 Color Palette (Copy-Paste Ready)

### Text Colors
```tsx
text-white              // Headings, primary text
text-purple-100         // Body text, descriptions
text-purple-200         // Secondary information
text-purple-300         // Links, muted text
text-pink-300           // Accents, hover states
```

### Background Colors
```tsx
bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900  // Page background
bg-white/10 backdrop-blur-xl                                   // Cards, sections
bg-white/20                                                    // Hover states
bg-purple-500/30                                               // Highlighted areas
```

### Border Colors
```tsx
border-white/20         // Default borders
border-white/30         // Emphasized borders
border-purple-400       // Accent borders
border-pink-400         // Alternative accent
```

## 🔤 Typography

### Fonts
```tsx
font-sora               // Headings
font-poppins            // Body text
font-space-grotesk      // Technical/accent text
font-playfair           // Display/special text
```

### Common Combinations
```tsx
// Heading
className="font-sora text-white font-bold text-3xl"

// Subheading
className="font-sora text-purple-100 font-semibold text-xl"

// Body text
className="font-poppins text-purple-100 leading-relaxed"

// Small text
className="font-poppins text-purple-200 text-sm"
```

## 📦 Component Patterns

### Card (Glassmorphism)
```tsx
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">
  <h3 className="font-sora text-white font-bold text-xl mb-3">Card Title</h3>
  <p className="font-poppins text-purple-100 leading-relaxed">Card content goes here.</p>
</div>
```

### Button (Primary)
```tsx
<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-poppins font-semibold px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
  Click Me
</button>
```

### Button (Secondary)
```tsx
<button className="bg-white/20 backdrop-blur-xl text-white font-poppins font-medium px-6 py-3 rounded-full border border-white/20 hover:bg-white/30 transition-all">
  Secondary Action
</button>
```

### Link
```tsx
<a href="/page" className="text-purple-300 hover:text-pink-300 transition-colors font-poppins underline-offset-4 hover:underline">
  Link Text
</a>
```

### Section Container
```tsx
<section className="py-16 md:py-24 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Hero Section
```tsx
<section className="relative h-screen flex items-center justify-center text-center">
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900" />
  <div className="relative z-10 max-w-5xl mx-auto px-4">
    <h1 className="text-5xl md:text-7xl font-sora font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-300 to-purple-200 mb-6">
      Hero Title
    </h1>
    <p className="text-xl md:text-2xl font-poppins text-purple-100 mb-8">
      Hero subtitle
    </p>
  </div>
</section>
```

### Grid Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
      {/* Card content */}
    </div>
  ))}
</div>
```

## 🛠️ Maintenance Commands

### Check for light color issues
```bash
node scripts/check-theme.js
```

### Auto-fix common issues
```bash
node scripts/fix-theme.js
```

### Start development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## 🚫 Common Mistakes to Avoid

### ❌ Don't Use
```tsx
text-gray-900          // Too dark, invisible on dark bg
text-gray-800          // Too dark
text-blue-600          // Not part of theme
bg-white               // Use bg-white/10 backdrop-blur-xl instead
border-gray-200        // Use border-white/20 instead
```

### ✅ Use Instead
```tsx
text-white             // For headings
text-purple-100        // For body
text-purple-300        // For links
bg-white/10 backdrop-blur-xl  // For cards
border-white/20        // For borders
```

## 📂 Key Files

```
app/
├── theme/
│   └── colors.ts              ← Theme configuration
├── globals.css                ← Global styles
├── layout.tsx                 ← Root layout (no hardcoded colors!)
└── components/
    ├── DestinationTemplate.tsx  ← Destination page template
    ├── HiddenGemTemplate.tsx    ← Hidden gem template
    └── SectionCard.tsx          ← Reusable card component

Documentation:
├── DESIGN_SYSTEM.md           ← Complete guide
├── THEME_MIGRATION_SUMMARY.md ← What changed
└── QUICK_REFERENCE.md         ← This file!

Scripts:
└── scripts/
    ├── check-theme.js         ← Find light colors
    └── fix-theme.js           ← Auto-fix light colors
```

## 🎯 Quick Checklist for New Components

When creating a new component:

- [ ] Uses `font-sora` for headings
- [ ] Uses `font-poppins` for body text
- [ ] Text is `text-white`, `text-purple-100`, or `text-purple-200`
- [ ] Links are `text-purple-300 hover:text-pink-300`
- [ ] Cards use `bg-white/10 backdrop-blur-xl`
- [ ] Borders are `border-white/20`
- [ ] No `bg-white` (unless with opacity like `bg-white/10`)
- [ ] No `text-gray-[5-9]` or `text-blue-[5-9]`
- [ ] Has proper transitions: `transition-all duration-300`
- [ ] Tested on dark background for readability

## 🔄 Update Workflow

1. **Make changes** to theme in `app/theme/colors.ts`
2. **Check consistency** with `node scripts/check-theme.js`
3. **Test visually** in browser (npm run dev)
4. **Fix issues** with `node scripts/fix-theme.js` or manually
5. **Document changes** if pattern changes

## 📚 Learn More

- **Full Guide:** See `DESIGN_SYSTEM.md`
- **Migration Details:** See `THEME_MIGRATION_SUMMARY.md`
- **Theme Code:** See `app/theme/colors.ts`
- **Examples:** Browse `app/page.tsx` and `app/destinations/bhuj/page.tsx`

---

**Last Updated:** January 27, 2025
**Quick Tips:**
- When in doubt, use `text-purple-100` for text
- When in doubt, use `bg-white/10 backdrop-blur-xl` for cards
- Run `check-theme.js` before committing changes
