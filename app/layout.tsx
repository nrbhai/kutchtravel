import "./globals.css";
import { Inter, Playfair_Display, Lora, Dancing_Script, Space_Grotesk, Sora } from "next/font/google";
import type { Metadata, Viewport } from 'next';
import ErrorBoundary from './components/ErrorBoundary';
import { GoogleAnalytics } from './components/Analytics';
import { WebVitals } from './components/WebVitals';
import { StructuredData } from './components/StructuredData';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: 'swap',
});

// Playfair as a bold display heading (request bold weight)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: 'swap',
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: 'swap',
});

// Cursive for tagline and decorative text
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap',
});

// Modern fonts for contemporary design
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Discover Kutch — Beyond the White Desert | Complete Travel Guide",
    template: "%s | Kutch Travel Guide"
  },
  description: "Complete travel guide to Kutch, Gujarat. Discover the White Rann, historic Bhuj, pristine beaches of Mandvi, and 12+ destinations. Culture, heritage, and hidden gems await.",
  keywords: [
    "Kutch travel guide",
    "White Rann of Kutch", 
    "Rann Utsav 2025",
    "Bhuj tourism",
    "Mandvi beaches",
    "Gujarat travel",
    "Rann Festival",
    "Kutch destinations",
    "Great Rann of Kutch",
    "Kutch culture",
    "India travel guide",
    "Kutch handicrafts",
    "Ajrakh block printing",
    "Bandhani tie dye",
    "Kalo Dungar Black Hill",
    "Desert camping Gujarat",
    "Kutch photography",
    "Gujarat tourism",
    "Kutch hidden gems",
    "Things to do in Kutch"
  ],
  authors: [{ name: "Kutch Travel Guide" }],
  creator: "Kutch Travel Guide",
  publisher: "Kutch Travel Guide",
  metadataBase: new URL('https://kutchtravel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Discover Kutch — Beyond the White Desert | Complete Travel Guide',
    description: 'Complete travel guide to Kutch, Gujarat. Discover the White Rann, historic Bhuj, pristine beaches of Mandvi, and 12+ destinations.',
    siteName: 'Kutch Travel Guide',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kutch Travel Guide - White Rann and Destinations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Kutch — Beyond the White Desert',
    description: 'Complete travel guide to Kutch, Gujarat. Discover destinations, culture, and hidden gems.',
    images: ['/images/twitter-card.jpg'],
    creator: '@kutchtravel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // REPLACE 'your-google-verification-code' with your actual code from Google Search Console
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'travel',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0369a1' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kutch Travel" />
        <meta name="application-name" content="Kutch Travel" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${lora.variable} ${dancing.variable} ${spaceGrotesk.variable} ${sora.variable}`}>
        {/* Work in Progress Banner */}
        <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white py-3 px-4 text-center font-semibold shadow-lg sticky top-0 z-50">
          <p className="text-sm md:text-base">
            🚧 Work in Progress - Website Under Development 🚧
          </p>
        </div>
        
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </ErrorBoundary>
        <StructuredData />
        <GoogleAnalytics />
        <WebVitals />
      </body>
    </html>
  );
}
