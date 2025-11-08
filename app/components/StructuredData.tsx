'use client';

import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Only add structured data on the client side after hydration
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Kutch Travel Guide",
      "description": "Complete travel guide to Kutch, Gujarat, India",
      "url": "https://kutchtravel.com",
      "logo": "https://kutchtravel.com/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/kutchtravel",
        "https://www.instagram.com/kutchtravel",
        "https://www.twitter.com/kutchtravel"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Kutch, Gujarat, India"
      },
      "knowsAbout": [
        "Kutch tourism",
        "White Rann of Kutch",
        "Bhuj heritage",
        "Mandvi beaches",
        "Gujarat travel",
        "Indian tourism"
      ]
    };

    // Check if script already exists to avoid duplicates
    if (!document.getElementById('structured-data-script')) {
      const script = document.createElement('script');
      script.id = 'structured-data-script';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything
}