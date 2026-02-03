
/**
 * Simple analytics utility for SINA Sportlab.
 * Handles event tracking with respect to cookie consent.
 */

type ConsentState = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const getConsent = (): ConsentState => {
  try {
    const saved = localStorage.getItem('sina-cookie-consent');
    return saved ? JSON.parse(saved) : { functional: true, analytics: false, marketing: false };
  } catch {
    return { functional: true, analytics: false, marketing: false };
  }
};

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  const consent = getConsent();
  
  if (!consent.analytics) {
    console.debug(`[Analytics Blocked] ${eventName}`, params);
    return;
  }

  // Log to console for dev awareness
  console.debug(`[Analytics Tracked] ${eventName}`, params);

  // If GA4 is initialized on window
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

export const initGA = (measurementId: string) => {
  const consent = getConsent();
  if (!consent.analytics) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { 'anonymize_ip': true });
  `;
  document.head.appendChild(script2);
};
