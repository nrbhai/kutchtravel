import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 0,
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: 'https://kutchtravel.com/sitemap.xml',
    host: 'https://kutchtravel.com',
  };
}