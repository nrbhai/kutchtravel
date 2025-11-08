'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function WebVitals() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    // Function to send metrics to analytics
    function sendToAnalytics(metric: any) {
      if (window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    }

    // Dynamic import to avoid blocking initial load
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(sendToAnalytics);
      onINP(sendToAnalytics); // INP (Interaction to Next Paint) replaces FID in web-vitals v3+
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
    });

    // Monitor long tasks that could affect performance
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
            // You could send this to analytics too
            if (window.gtag) {
              window.gtag('event', 'long_task', {
                event_category: 'Performance',
                event_label: 'Long Task',
                value: Math.round(entry.duration),
              });
            }
          }
        });
      });

      observer.observe({ entryTypes: ['longtask'] });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}

export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
}