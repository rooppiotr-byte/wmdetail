import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  disableAnalytics,
  loadAnalytics,
  readConsent,
  saveConsent,
} from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored === "granted") loadAnalytics();
    if (stored === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const accept = () => {
    saveConsent("granted");
    (window as unknown as Record<string, unknown>)["ga-disable-G-VTM05EJ641"] = false;
    loadAnalytics();
    setVisible(false);
  };

  const decline = () => {
    saveConsent("denied");
    disableAnalytics();
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookies"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-xl border-silver bg-graphite p-5 shadow-elegant sm:p-6"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        Używamy plików cookies Google Analytics, aby mierzyć ruch na stronie i ją ulepszać. Uruchomimy je
        tylko za Twoją zgodą. Szczegóły znajdziesz w{" "}
        <Link to="/polityka-prywatnosci" className="text-silver underline underline-offset-4 hover:text-foreground">
          polityce prywatności
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={decline}
          className="inline-flex items-center justify-center rounded-md border-silver px-6 py-3 text-sm font-semibold uppercase tracking-widest text-silver transition-colors hover:bg-secondary"
        >
          Odrzucam
        </button>
        <button
          type="button"
          onClick={accept}
          className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-widest text-background transition-colors hover:bg-silver-bright"
        >
          Akceptuję
        </button>
      </div>
    </div>
  );
}
