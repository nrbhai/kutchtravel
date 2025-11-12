# Blog Section

## Overview
The blog section features travel stories, destination guides, cultural insights, and photography tips about Kutch.

## Structure
- **Main Blog Page** (`/blog`): Grid layout with category filters and featured posts
- **Individual Posts** (`/blog/[slug]`): Full article pages with related content
- **Data** (`/blog/data/index.ts`): Blog post content and metadata

## Features
- ✨ 6 pre-written articles covering destinations, culture, food, photography, and events
- 📱 Responsive grid layout
- 🎨 Beautiful gradient designs matching site theme
- 🏷️ Category filtering (Destinations, Culture, Travel Tips, Food, Photography, Events)
- 📖 Featured posts section
- 🔗 Related articles at the end of each post
- 📱 Social sharing buttons
- 👤 Author information
- 🏷️ Tag system
- 📧 Newsletter subscription CTA

## Navigation
The Blog link has been added to the mobile menu in the Navigation component.

## Adding New Blog Posts
1. Open `app/blog/data/index.ts`
2. Add a new `BlogPost` object to the `blogPosts` array
3. Include all required fields:
   - `id`, `title`, `slug`, `excerpt`, `content`
   - `author` (name and role)
   - `date`, `readTime`, `category`
   - `tags[]`, `image`
   - `featured` (optional, for homepage highlight)

## Categories
- All
- Destinations
- Culture
- Travel Tips
- Food
- Photography
- Events

## Example Blog Post Structure
```typescript
{
  id: '7',
  title: 'Your Article Title',
  slug: 'your-article-slug',
  excerpt: 'Brief summary of the article...',
  content: `Full article content with markdown-style formatting...`,
  author: {
    name: 'Author Name',
    role: 'Author Title'
  },
  date: '2025-01-15',
  readTime: '8 min read',
  category: 'Destinations',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  image: '/images/folder/image.jpg',
  featured: true // Optional
}
```

## Content Guidelines
- Keep excerpts between 150-200 characters
- Write content in markdown-friendly format
- Use ## for section headings
- Include relevant tags for discoverability
- Add featured flag for standout articles
- Estimate read time based on ~200 words/minute

## Customization
- Update colors in gradient classes to match site theme
- Modify category list in `data/index.ts`
- Customize newsletter CTA functionality
- Add actual social sharing functionality to share buttons
