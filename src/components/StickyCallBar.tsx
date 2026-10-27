import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

/** Przyklejony pasek z przyciskiem „Zadzwoń” widoczny tylko na telefonach. */
export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-xl gap-3">
        <a
          href={BUSINESS.phoneHref}
          aria-label={"Zadzwoń " + BUSINESS.phone}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold uppercase tracking-widest text-background"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Zadzwoń
        </a>
        <a
          href={BUSINESS.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border-silver px-5 py-3 text-sm font-semibold uppercase tracking-widest text-foreground"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Dojazd
        </a>
      </div>
    </div>
  );
}
