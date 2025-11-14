import { DESTINATIONS } from '@/app/destinations/data';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kutchtravel.com';
  const currentDate = new Date();

  // Static pages with proper priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hidden-gems`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Dynamic destination pages
  const destinationPages = DESTINATIONS.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Craft pages
  const craftPages = [
    'bandhani',
    'ajrakh',
    'rogan-art',
    'mirror-work',
    'sudi-chappu',
    'pottery',
    'leather-craft',
    'weaving'
  ].map((craft) => ({
    url: `${baseUrl}/crafts/${craft}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Blog posts
  const blogPosts = [
    'white-rann-full-moon-guide',
    'rann-utsav-2025-guide',
    'kutchi-cuisine-food-guide',
    'photography-guide-kutch',
    'hidden-gems-kutch',
    'ancient-crafts-kutch-heritage'
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...destinationPages, ...craftPages, ...blogPosts];
}