export const GA_ID = "G-VTM05EJ641";
export const CONSENT_KEY = "wmdetail-cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "wmdetail:open-cookie-settings";

export type ConsentValue = "granted" | "denied";

export function readConsent(): ConsentValue | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // brak dostępu do localStorage — wybór obowiązuje tylko do końca wizyty
  }
}

let analyticsLoaded = false;

/** Ładuje Google Analytics dopiero po wyrażeniu zgody. */
export function loadAnalytics() {
  if (analyticsLoaded || typeof document === "undefined") return;
  analyticsLoaded = true;

  const w = window as unknown as { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

/** Po wycofaniu zgody blokuje wysyłanie danych do Google Analytics w bieżącej sesji. */
export function disableAnalytics() {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
}
