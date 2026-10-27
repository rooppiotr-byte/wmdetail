// Zdarzenia Google Analytics wysyłamy tylko wtedy, gdy użytkownik wyraził zgodę
// (window.gtag powstaje dopiero po zgodzie, patrz lib/consent.ts). Bez zgody nic nie jest wysyłane.

type Gtag = (...args: unknown[]) => void;

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

/** Mierzy kliknięcia w telefon, e-mail i dojazd (mapy). Zwraca funkcję czyszczącą. */
export function initContactTracking(): () => void {
  const onClick = (event: MouseEvent) => {
    const target = event.target as Element | null;
    const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!link) return;

    const href = link.getAttribute("href") ?? "";
    const params = { link_url: href, page_path: window.location.pathname };

    if (href.startsWith("tel:")) {
      trackEvent("click_to_call", params);
    } else if (href.startsWith("mailto:")) {
      trackEvent("click_email", params);
    } else if (href.includes("maps.app.goo.gl") || href.includes("google.com/maps")) {
      trackEvent("click_directions", params);
    }
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
