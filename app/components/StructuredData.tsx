'use client';

import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Enhanced structured data with multiple schemas
    const structuredDataArray = [
      // Organization/Travel Agency
      {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Kutch Travel Guide",
        "description": "Complete travel guide to Kutch, Gujarat - Explore White Rann, Bhuj, Mandvi and 12+ destinations",
        "url": "https://kutchtravel.com",
        "logo": "https://kutchtravel.com/images/logo.png",
        "image": "https://kutchtravel.com/images/og-image.jpg",
        "telephone": "+91-9825034580",
        "email": "info@kutchtravel.com",
        "sameAs": [
          "https://www.facebook.com/kutchtravel",
          "https://www.instagram.com/kutchtravel",
          "https://twitter.com/kutchtravel"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Kutch District, Gujarat, India"
        },
        "priceRange": "$$",
        "knowsAbout": [
          "Kutch tourism",
          "White Rann of Kutch",
          "Rann Utsav",
          "Bhuj heritage",
          "Mandvi beaches",
          "Gujarat travel",
          "Indian handicrafts",
          "Desert camping"
        ]
      },
      // Website
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kutch Travel Guide",
        "url": "https://kutchtravel.com",
        "description": "Your complete guide to exploring Kutch - destinations, itineraries, and local insights",
        "publisher": {
          "@type": "Organization",
          "name": "Kutch Travel Guide"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kutchtravel.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      // Breadcrumb for homepage
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kutchtravel.com"
          }
        ]
      },
      // Tourist Destinations Collection
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Top Destinations in Kutch",
        "description": "Must-visit places in Kutch, Gujarat",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "TouristDestination",
              "name": "White Rann of Kutch",
              "description": "The iconic white salt desert, famous for Rann Utsav and full moon nights",
              "url": "https://kutchtravel.com/destinations/dhordo-white-rann"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "TouristDestination",
              "name": "Bhuj",
              "description": "Historic city with palaces, museums, and rich cultural heritage",
              "url": "https://kutchtravel.com/destinations/bhuj"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "TouristDestination",
              "name": "Mandvi Beach",
              "description": "Pristine beach with historic Vijay Vilas Palace",
              "url": "https://kutchtravel.com/destinations/mandvi"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "TouristDestination",
              "name": "Kalo Dungar",
              "description": "Black Hill - highest point in Kutch with panoramic views",
              "url": "https://kutchtravel.com/destinations/kalo-dungar"
            }
          }
        ]
      }
    ];

    // Remove existing scripts to avoid duplicates
    document.querySelectorAll('[id^="structured-data-"]').forEach(el => el.remove());

    // Add each schema as separate script
    structuredDataArray.forEach((data, index) => {
      const script = document.createElement('script');
      script.id = `structured-data-${index}`;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }, []);

  return null;
}