# 📂 Project Structure Documentation

This document provides an overview of the project's file structure to help you navigate and edit files easily.

## 🏗️ Root Directory
The main entry point of the project.

- **`package.json`**: Project dependencies and scripts (dev, build, start).
- **`next.config.ts`**: Next.js configuration (image optimization, security headers).
- **`tsconfig.json`**: TypeScript configuration.
- **`tailwind.config.ts`**: Tailwind CSS styling configuration.
- **`postcss.config.mjs`**: PostCSS configuration.
- **`.env.example`**: Example environment variables.

## 📱 `app/` Directory (Next.js App Router)
Contains all the pages and routes of the application.

- **`layout.tsx`**: The main wrapper for all pages. Contains `<html>`, `<body>`, fonts, and global providers.
- **`page.tsx`**: The Homepage content.
- **`globals.css`**: Global CSS styles and Tailwind imports.
- **`loading.tsx`**: Loading UI shown while pages are fetching data.
- **`sitemap.ts`**: Generates `sitemap.xml` for SEO.
- **`robots.ts`**: Generates `robots.txt` for SEO.

### 📍 `app/destinations/`
Pages for individual travel destinations.
- **`[slug]/page.tsx`**: Dynamic page template for any destination (e.g., `/destinations/bhuj`).
- **`data.ts`**: **CRITICAL**. Contains all the text/content for destinations. **Edit this to change destination info.**

### 🛍️ `app/crafts/`
Pages for Kutch handicrafts.
- **`[slug]/page.tsx`**: Dynamic page template for crafts.
- **`data.ts`**: Contains content for all craft pages.

### 📝 `app/blog/`
Blog section.
- **`[slug]/page.tsx`**: Dynamic blog post template.
- **`data.ts`**: Content for all blog posts.

### 🧩 `app/components/`
Reusable UI components used specifically within the `app` directory.
- **`Navigation.tsx`**: The top navigation bar (Menu).
- **`Footer.tsx`**: The website footer.
- **`StructuredData.tsx`**: JSON-LD schema for SEO.
- **`Analytics.tsx`**: Google Analytics integration.

## 🧱 `components/` Directory
Shared UI components used across the project.
- **`ui/`**: Generic UI elements (buttons, cards, inputs).

## 🖼️ `public/` Directory
Static assets served directly.
- **`images/`**: All website images.
- **`google....html`**: Google Search Console verification file.
- **`robots.txt`**: Instructions for search engine crawlers.

## 📚 `docs/` Directory
Project documentation and guides.
- **`PROJECT_STRUCTURE.md`**: This file.
- **`SEO_CHECKLIST.md`**: SEO tasks and status.
- **`HOSTINGER_VPS_DEPLOYMENT.md`**: Guide for deploying to VPS.
- **`DESIGN_SYSTEM.md`**: Colors, fonts, and style guide.

## 🛠️ `lib/` & `utils/`
Helper functions and utilities.
- **`utils.ts`**: Common utility functions (e.g., class name merging).

---

## 💡 Quick Edit Guide

| To Change... | Go to File |
| :--- | :--- |
| **Homepage Content** | `app/page.tsx` |
| **Destination Info** | `app/destinations/data.ts` |
| **Craft Info** | `app/crafts/data.ts` |
| **Blog Posts** | `app/blog/data.ts` |
| **Navigation Menu** | `app/components/Navigation.tsx` |
| **Global Styles** | `app/globals.css` |
| **SEO/Meta Tags** | `app/layout.tsx` |
