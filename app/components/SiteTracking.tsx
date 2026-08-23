"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const TRACKING_CONSENT_KEY = "lh-cookie-choice";
export const TRACKING_CONSENT_EVENT = "lh-cookie-choice-changed";

const GA4_MEASUREMENT_ID = "G-LT3B6453LM";
const CLARITY_PROJECT_ID = "y6vtzo8z9z";

type ConsentState = "granted" | "denied";
type ClarityFunction = ((...args: unknown[]) => void) & { q?: unknown[] };
type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: ClarityFunction;
  __lhTrackingInitialised?: boolean;
  __lhLastPageView?: string;
};

function consentValues(analyticsStorage: ConsentState) {
  return {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: analyticsStorage,
  };
}

function sendPageView() {
  const trackingWindow = window as TrackingWindow;
  const pagePath = `${window.location.pathname}${window.location.search}`;

  if (!trackingWindow.gtag || trackingWindow.__lhLastPageView === pagePath) return;

  trackingWindow.__lhLastPageView = pagePath;
  trackingWindow.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

function enableTracking() {
  const trackingWindow = window as TrackingWindow;

  if (!trackingWindow.gtag) {
    trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
    trackingWindow.gtag = (...args: unknown[]) => trackingWindow.dataLayer?.push(args);
    trackingWindow.gtag("consent", "default", consentValues("denied"));
  }

  trackingWindow.gtag("consent", "update", consentValues("granted"));

  if (!document.querySelector('script[data-lh-tracker="ga4"]')) {
    const googleScript = document.createElement("script");
    googleScript.async = true;
    googleScript.dataset.lhTracker = "ga4";
    googleScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(googleScript);
  }

  if (!trackingWindow.__lhTrackingInitialised) {
    trackingWindow.gtag("js", new Date());
    trackingWindow.gtag("config", GA4_MEASUREMENT_ID, { send_page_view: false });
    trackingWindow.__lhTrackingInitialised = true;
  }

  if (!trackingWindow.clarity) {
    const clarity = ((...args: unknown[]) => {
      clarity.q = clarity.q ?? [];
      clarity.q.push(args);
    }) as ClarityFunction;
    trackingWindow.clarity = clarity;
  }

  trackingWindow.clarity?.("consentv2", {
    ad_Storage: "denied",
    analytics_Storage: "granted",
  });

  if (!document.querySelector('script[data-lh-tracker="clarity"]')) {
    const clarityScript = document.createElement("script");
    clarityScript.async = true;
    clarityScript.dataset.lhTracker = "clarity";
    clarityScript.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
    document.head.appendChild(clarityScript);
  }

  sendPageView();
}

function disableTracking() {
  const trackingWindow = window as TrackingWindow;
  trackingWindow.gtag?.("consent", "update", consentValues("denied"));
  trackingWindow.clarity?.("consentv2", {
    ad_Storage: "denied",
    analytics_Storage: "denied",
  });
  trackingWindow.clarity?.("consent", false);
  trackingWindow.__lhLastPageView = undefined;
}

export function SiteTracking() {
  const pathname = usePathname();

  useEffect(() => {
    const applyConsent = (allowed: boolean) => {
      if (allowed) enableTracking();
      else disableTracking();
    };

    applyConsent(localStorage.getItem(TRACKING_CONSENT_KEY) === "analytics");

    const consentChanged = (event: Event) => {
      applyConsent((event as CustomEvent<boolean>).detail === true);
    };

    window.addEventListener(TRACKING_CONSENT_EVENT, consentChanged);
    return () => window.removeEventListener(TRACKING_CONSENT_EVENT, consentChanged);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(TRACKING_CONSENT_KEY) !== "analytics") return;
    const timer = window.setTimeout(sendPageView, 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
