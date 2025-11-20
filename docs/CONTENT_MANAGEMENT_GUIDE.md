# 📸 Image Inventory & Content Guide

## 🖼️ Image Inventory
All images are stored in the `public/images/` directory. Use them in your code with the path starting with `/images/...`.

### Directory Structure
```text
public/images/
├── anjar/                  # Images for Anjar destination
├── bhuj/                   # Images for Bhuj (forts, palaces, etc.)
├── blog-images/            # Images specifically for blog posts
├── crafts/                 # Images for handicraft pages
├── destinations/           # General destination thumbnails
├── dhordo-white-rann/      # White Rann specific images
├── gallery/                # Main photo gallery images
├── gandhidham/             # Gandhidham images
├── hidden-gallery/         # Hidden gems gallery
├── hidden-gems/            # Images for hidden gems section
├── kutchmap.png            # The main map image
├── mandvi/                 # Mandvi beach and palace images
├── mundra/                 # Mundra port and town images
└── ... (other destination folders)
```

### 💡 Best Practices
- **Format**: Use `.jpg` for photos and `.png` for graphics/maps.
- **Size**: Keep images under 200KB where possible.
- **Naming**: Use lowercase with hyphens (e.g., `white-rann-sunset.jpg`).

---

## ➕ How to Add New Content

### 1. Adding a New Destination
The site uses a data-driven approach. You don't need to create new page files, just add data!

**Step 1: Create Data File**
Create a new file in `app/destinations/data/` (e.g., `my-new-place.ts`).
Copy the structure from an existing file like `bhuj.ts`.

```typescript
import type { Destination } from "./index";

export const myNewPlace: Destination = {
  slug: "my-new-place", // URL will be /destinations/my-new-place
  title: "My New Place",
  image: "/images/destinations/new-place.jpg",
  sections: [
    {
      heading: "Overview",
      content: "Description here..."
    }
    // Add more sections...
  ],
  facts: ["Fact 1", "Fact 2"],
  mapUrl: "...",
  gallery: []
};
```

**Step 2: Register the Destination**
Open `app/destinations/data/index.ts`.
1. Import your new file at the top:
   ```typescript
   import { myNewPlace } from "./my-new-place";
   ```
2. Add it to the `DESTINATIONS` array:
   ```typescript
   export const DESTINATIONS: Destination[] = [
     // ... existing destinations
     myNewPlace,
   ];
   ```

**Step 3: Done!**
Visit `http://localhost:3000/destinations/my-new-place` to see your page.

### 2. Adding a New Blog Post
Similar to destinations, blog posts are data-driven.

**Step 1: Open Data File**
Go to `app/blog/data/index.ts` (or check `app/blog/data/` folder).

**Step 2: Add Post Entry**
Add a new object to the blog posts array:
```typescript
{
  slug: "my-new-blog-post",
  title: "My New Blog Post",
  excerpt: "Short summary...",
  date: "2025-11-20",
  image: "/images/blog-images/my-post.jpg",
  content: `
    <p>Your blog content here...</p>
  `
}
```

### 3. Adding Images
1. Paste your image into the appropriate folder in `public/images/`.
2. Reference it in your data files using the path `/images/folder/filename.jpg`.
