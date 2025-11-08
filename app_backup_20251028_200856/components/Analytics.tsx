'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics tracking ID - replace with your actual ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

export function GoogleAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
}

export function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (!window.gtag) return;

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname, searchParams]);
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (process.env.NODE_ENV !== 'production') return;
  if (!window.gtag) return;

  window.gtag('event', eventName, {
    event_category: 'engagement',
    event_label: parameters?.label,
    value: parameters?.value,
    ...parameters,
  });
}

// Track destination views
export function trackDestinationView(destinationName: string) {
  trackEvent('destination_view', {
    event_category: 'travel',
    destination_name: destinationName,
  });
}

// Track user interactions
export function trackUserInteraction(action: string, element: string) {
  trackEvent('user_interaction', {
    event_category: 'engagement',
    action: action,
    element: element,
  });
}