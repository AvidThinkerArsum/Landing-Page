/**
 * Analytics utility
 *
 * To enable analytics:
 * 1. Add your analytics ID to .env.local as NEXT_PUBLIC_ANALYTICS_ID
 * 2. Uncomment the analytics script in app/layout.tsx
 * 3. Use trackEvent() to track custom events
 */

export const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
}

export function trackPageView(url: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", ANALYTICS_ID, {
      page_path: url,
    });
  }
}
