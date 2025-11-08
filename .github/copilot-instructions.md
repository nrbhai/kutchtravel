
## Onboarding Checklist: Adding a New Destination

To add a new destination, follow this checklist for consistency and discoverability:

1. **Create Data File**
  - Add a new file in `app/destinations/data/` (e.g., `myplace.ts`).
  - Use the shared `Destination` type from `app/destinations/data/index.ts`.
  - Fill in all required fields: `title`, `description`, `image`, `facts`, `mapUrl`, and `gallery` (5–10 images recommended).

2. **Add Page Component**
  - Create a new folder: `app/destinations/<slug>/`.
  - Add `page.tsx` using the `DestinationTemplate` component.
  - Structure sections (Overview, History, Geography, Culture, etc.) as in `bhuj/page.tsx`.
  - Import data from your new data file if needed.

3. **Add Images**
  - Place images in `public/images/<slug>/`.
  - Ensure all gallery images referenced in data exist and have descriptive captions.

4. **Update Index/Exports**
  - If required, update `app/destinations/data/index.ts` to export your new destination.

5. **Test Locally**
  - Run `npm run dev` and verify your new destination page loads, images display, and layout matches other destinations.

6. **Keep Consistency**
  - Follow naming, type, and layout conventions from existing destinations.
  - Use comments and documentation to clarify any new fields or props.

7. **(Optional) Add to Navigation**
  - If there is a navigation menu, add a link to your new destination.

---
This checklist ensures new destinations are discoverable, type-safe, and visually consistent across the site.
# Copilot Instructions for kutchtravel

## Project Overview
- This is a Next.js project (App Router, TypeScript) for a travel website focused on destinations in Kutch.
- Main app code is in `app/`, with per-destination pages under `app/destinations/` and dynamic routing via `[slug]`.
- Data for destinations is colocated in `app/destinations/data/` as TypeScript modules.
- Shared UI components are in `app/components/` and `components/ui/`.

## Key Patterns & Conventions
- **Destination Pages:**
  - Static pages for each destination: `app/destinations/<slug>/page.tsx`.
  - Dynamic fallback: `app/destinations/[slug]/page.tsx` uses a utility (`getDestinationBySlug.ts`) to fetch data from `app/destinations/data/`.
  - Example: To add a new destination, create a data file and a page under `app/destinations/<slug>/`.
- **Component Usage:**
  - Use `DestinationTemplate` for consistent destination layouts.
  - Use `QuickGuide` for summary/guide sections.
- **Assets:**
  - Images are stored in `public/images/<destination>/`.

## Developer Workflows
- **Development:**
  - Start with `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
  - Main entry: `app/page.tsx`.
- **TypeScript:**
  - Types are inferred from data modules; keep data shape consistent.
- **Adding Destinations:**
  - Add a new data file in `app/destinations/data/`.
  - Add a new folder and `page.tsx` in `app/destinations/<slug>/`.
  - Reference images in `public/images/<slug>/`.

## Integration & Extensibility
- **No backend/serverless functions** in this repo; all data is static/colocated.
- **No custom API routes**; all data is imported directly.
- **No explicit test setup** detected; add tests if needed using your preferred framework.

## Examples
- See `app/destinations/bhuj/page.tsx` and `app/destinations/data/bhuj.ts` for a typical destination implementation.
- See `app/components/DestinationTemplate.tsx` for layout conventions.

## Special Notes
- Follow Next.js/TypeScript idioms for imports, dynamic routing, and static asset usage.
- Keep new destination data and pages consistent with existing structure for discoverability.
