'use client';

import { useEffect } from 'react';

interface DestinationSEOProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  category?: string;
  bestTime?: string;
  rating?: number;
}

export function DestinationSEO({
  name,
  description,
  image,
  slug,
  category = 'TouristDestination',
  bestTime = 'November to February',
  rating = 4.5
}: DestinationSEOProps) {
  useEffect(() => {
    const baseUrl = 'https://kutchtravel.com';
    const structuredDataArray = [
      // Tourist Destination
      {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": name,
        "description": description,
        "image": `${baseUrl}${image}`,
        "url": `${baseUrl}/destinations/${slug}`,
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Kutch",
          "addressLocality": name,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.2",
          "longitude": "69.8"
        },
        "touristType": [
          "Families",
          "Photographers",
          "Culture Enthusiasts",
          "Adventure Seekers"
        ],
        "isAccessibleForFree": true,
        "publicAccess": true
      },
      // Place
      {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": name,
        "description": description,
        "image": `${baseUrl}${image}`,
        "url": `${baseUrl}/destinations/${slug}`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": rating.toString(),
          "ratingCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "containedInPlace": {
          "@type": "Place",
          "name": "Kutch District, Gujarat, India"
        }
      },
      // Breadcrumb
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Destinations",
            "item": `${baseUrl}/destinations`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": name,
            "item": `${baseUrl}/destinations/${slug}`
          }
        ]
      },
      // Article (for content-rich pages)
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${name} - Complete Travel Guide`,
        "description": description,
        "image": `${baseUrl}${image}`,
        "author": {
          "@type": "Organization",
          "name": "Kutch Travel Guide"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Kutch Travel Guide",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/logo.png`
          }
        },
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseUrl}/destinations/${slug}`
        }
      }
    ];

    // Remove existing destination scripts
    document.querySelectorAll('[id^="destination-seo-"]').forEach(el => el.remove());

    // Add each schema
    structuredDataArray.forEach((data, index) => {
      const script = document.createElement('script');
      script.id = `destination-seo-${slug}-${index}`;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup on unmount
      document.querySelectorAll(`[id^="destination-seo-${slug}-"]`).forEach(el => el.remove());
    };
  }, [name, description, image, slug, rating]);

  return null;
}
