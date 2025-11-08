import type { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateMetadata({
  title,
  description,
  image = '/images/og-image.jpg',
  url,
  type = 'website',
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
}: SEOProps = {}): Metadata {
  const defaultKeywords = [
    'Kutch travel guide',
    'Gujarat tourism',
    'White Rann',
    'Bhuj',
    'Mandvi',
    'India travel'
  ];

  const allKeywords = [...defaultKeywords, ...keywords];
  
  const metadata: Metadata = {
    title: title ? `${title} | Kutch Travel Guide` : undefined,
    description,
    keywords: allKeywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title: title || 'Kutch Travel Guide',
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || 'Kutch Travel Guide',
        },
      ],
      url,
      type,
      locale: 'en_US',
      siteName: 'Kutch Travel Guide',
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: title || 'Kutch Travel Guide',
      description,
      images: [image],
      creator: '@kutchtravel',
    },
    alternates: {
      canonical: url,
    },
  };

  return metadata;
}

export function generateDestinationStructuredData(destination: {
  title: string;
  description: string;
  image: string;
  slug: string;
  facts?: string[];
  mapUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.title,
    "description": destination.description,
    "image": destination.image,
    "url": `https://kutchtravel.com/destinations/${destination.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kutch, Gujarat",
      "addressCountry": "India"
    },
    "geo": destination.mapUrl ? {
      "@type": "GeoCoordinates",
      "latitude": "23.2599",
      "longitude": "69.6695"
    } : undefined,
    "touristType": ["Culture", "Heritage", "Nature", "Adventure"],
    "isAccessibleForFree": true,
    "additionalProperty": destination.facts?.map(fact => ({
      "@type": "PropertyValue",
      "name": "Travel Fact",
      "value": fact
    }))
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `https://kutchtravel.com${item.url}` : undefined
    }))
  };
}