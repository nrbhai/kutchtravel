# Adding New Destinations Guide

This guide explains how to add new destinations to the Kutch Travel website while maintaining consistency with existing destinations.

## Step 1: Create Data File

1. Create a new file in `app/destinations/data/your-destination.ts`
2. Use this template structure:

```typescript
import type { Destination } from "./index";

export const yourDestination: Destination = {
  slug: "your-destination-slug",
  title: "Your Destination — Subtitle",
  image: "/images/your-destination-slug/main.jpg",
  sections: [
    {
      heading: "Overview",
      color: "bg-blue-50",
      border: "border-l-4 border-blue-600 text-blue-800",
      image: {
        src: "/images/your-destination-slug/overview.jpg",
        alt: "Overview description"
      },
      content: "Main overview content..."
    },
    {
      heading: "History",
      color: "bg-purple-50",
      border: "border-l-4 border-purple-600 text-purple-800",
      image: {
        src: "/images/your-destination-slug/history.jpg",
        alt: "Historical image description"
      },
      content: "Historical content..."
    },
    {
      heading: "Places of Interest",
      color: "bg-amber-50",
      border: "border-l-4 border-amber-600 text-amber-800",
      image: {
        src: "/images/your-destination-slug/attractions.jpg",
        alt: "Key attractions"
      },
      list: [
        "<b>Place 1:</b> Description",
        "<b>Place 2:</b> Description"
      ]
    },
    {
      heading: "Food & Crafts",
      color: "bg-emerald-50",
      border: "border-l-4 border-emerald-600 text-emerald-800",
      image: {
        src: "/images/your-destination-slug/culture.jpg",
        alt: "Local culture"
      },
      list: [
        "<b>Item 1:</b> Description",
        "<b>Item 2:</b> Description"
      ]
    },
    {
      heading: "Nearby Destinations",
      color: "bg-indigo-50",
      border: "border-l-4 border-indigo-600 text-indigo-800",
      list: [
        "<b><a href='/places/place-1' class='text-blue-400 hover:text-blue-300'>Place 1:</a></b> Distance and description",
        "<b><a href='/places/place-2' class='text-blue-400 hover:text-blue-300'>Place 2:</a></b> Distance and description"
      ],
      image: {
        src: "/images/your-destination-slug/nearby.jpg",
        alt: "Nearby attractions"
      }
    },
    {
      heading: "How to Reach",
      color: "bg-cyan-50",
      border: "border-l-4 border-cyan-600 text-cyan-800",
      image: {
        src: "/images/your-destination-slug/transport.jpg",
        alt: "Transportation options"
      },
      list: [
        "<b>By Air:</b> Air connectivity details",
        "<b>By Rail:</b> Rail connectivity details",
        "<b>By Road:</b> Road connectivity details",
        "<b>Local Transport:</b> Local transport options"
      ]
    }
  ],
  facts: [
    "Important fact 1",
    "Important fact 2",
    "Important fact 3"
  ],
  mapUrl: "GOOGLE_MAPS_EMBED_URL",
  gallery: [
    {
      src: "/images/your-destination-slug/gallery1.jpg",
      caption: "Gallery image 1 description"
    },
    {
      src: "/images/your-destination-slug/gallery2.jpg",
      caption: "Gallery image 2 description"
    }
  ]
};
```

## Step 2: Create Page Component

1. Create a new folder: `app/destinations/your-destination-slug/`
2. Create `page.tsx` inside this folder using this template:

```typescript
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { yourDestination } from "@/app/destinations/data/your-destination";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

// Generate metadata for this destination
export const metadata: Metadata = {
  title: `${yourDestination.title} - Subtitle for SEO`,
  description: 'Detailed SEO description (150-160 characters)',
  keywords: [
    'Keyword 1',
    'Keyword 2',
    'Keyword 3',
    'Keyword 4',
    'Keyword 5',
    'Keyword 6',
    'Keyword 7',
    'Keyword 8'
  ],
  openGraph: {
    title: `${yourDestination.title} - Subtitle for Social`,
    description: 'Shorter, engaging description for social sharing',
    images: [yourDestination.image],
  },
};

export default function YourDestination() {
  const structuredData = generateDestinationStructuredData({
    title: yourDestination.title,
    description: "Concise description for structured data",
    image: yourDestination.image,
    slug: "your-destination-slug",
    facts: yourDestination.facts,
    mapUrl: yourDestination.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: yourDestination.title }
  ]);

  // Format description content
  const description = (
    <div className="space-y-8">
      {yourDestination.sections.map((section, index) => (
        <SectionCard 
          key={index}
          title={section.heading}
          image={section.image}
          color={section.color}
          border={section.border}
        >
          {section.content && <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />}
          {section.list && (
            <ul className="list-none space-y-4">
              {section.list.map((item, itemIndex) => (
                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </SectionCard>
      ))}
    </div>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([structuredData, breadcrumbData]),
        }}
      />
      <DestinationTemplate
        title={yourDestination.title}
        image={yourDestination.image}
        description={description}
        facts={yourDestination.facts}
        mapUrl={yourDestination.mapUrl}
        gallery={yourDestination.gallery}
      />
    </>
  );
}
```

## Step 3: Add Images

1. Create a new folder in `public/images/your-destination-slug/`
2. Add required images:
   - main.jpg (hero image)
   - overview.jpg
   - history.jpg
   - attractions.jpg
   - culture.jpg
   - nearby.jpg
   - transport.jpg
   - gallery1.jpg, gallery2.jpg, etc.

## Step 4: Color Scheme Reference

Use these color combinations for different sections:

1. Overview:
   ```
   color: "bg-blue-50"
   border: "border-l-4 border-blue-600 text-blue-800"
   ```

2. History:
   ```
   color: "bg-purple-50"
   border: "border-l-4 border-purple-600 text-purple-800"
   ```

3. Places of Interest:
   ```
   color: "bg-amber-50"
   border: "border-l-4 border-amber-600 text-amber-800"
   ```

4. Food & Crafts:
   ```
   color: "bg-emerald-50"
   border: "border-l-4 border-emerald-600 text-emerald-800"
   ```

5. Nearby Destinations:
   ```
   color: "bg-indigo-50"
   border: "border-l-4 border-indigo-600 text-indigo-800"
   ```

6. How to Reach:
   ```
   color: "bg-cyan-50"
   border: "border-l-4 border-cyan-600 text-cyan-800"
   ```

## Step 5: Update Index

Add your destination to `app/destinations/data/index.ts`:

```typescript
import { yourDestination } from "./your-destination";

export const DESTINATIONS: Destination[] = [
  // ... existing destinations
  yourDestination,
];
```

## Image Guidelines

1. **Aspect Ratios:**
   - Hero images: 16:9
   - Section images: 16:9
   - Gallery images: 4:3 or 16:9

2. **Sizes:**
   - Hero images: 1920x1080px
   - Section images: 1280x720px
   - Gallery images: 1280x720px

3. **Format:**
   - Use .jpg for photographs
   - Use .png for graphics/illustrations
   - Optimize all images for web

## SEO Best Practices

1. **Title Format:**
   ```
   [Destination Name] — [Key Feature]
   ```
   Example: "Bhuj — Cultural Heart of Kutch"

2. **Description Guidelines:**
   - 150-160 characters
   - Include key attractions
   - Mention unique features
   - Use active voice

3. **Keywords:**
   - Include destination name variations
   - Add main attractions
   - Include activity types
   - Add regional terms

## Content Guidelines

1. **Overview:**
   - 2-3 paragraphs
   - Location context
   - Key highlights
   - Why visit

2. **History:**
   - Historical significance
   - Key dates/events
   - Cultural importance

3. **Places of Interest:**
   - 5-10 key attractions
   - Brief descriptions
   - Unique features

4. **Lists:**
   - Use `<b>` for item titles
   - Keep descriptions concise
   - Use proper HTML formatting