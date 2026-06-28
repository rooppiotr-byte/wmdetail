import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logoAsset from "@/assets/wm-detail-logo.png.asset.json";
import { BUSINESS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" aria-label="WM Detail Car Detailing — strona główna" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="WM Detail Car Detailing — logo"
            className="h-9 sm:h-12 w-auto"
            width={1641}
            height={405}
          />
        </Link>
        <nav aria-label="Główna" className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          <Link to="/" hash="uslugi" className="hover:text-foreground transition-colors">Usługi</Link>
          <Link to="/" hash="realizacje" className="hover:text-foreground transition-colors">Realizacje</Link>
          <Link to="/" hash="kontakt" className="hover:text-foreground transition-colors">Kontakt</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Zadzwoń ${BUSINESS.phone}`}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm uppercase tracking-widest text-silver hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
          </a>
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Umów termin — zadzwoń ${BUSINESS.phone}`}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-md bg-foreground text-background text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-silver-bright transition-colors shadow-silver-glow"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Umów termin</span>
            <span className="sm:hidden">Zadzwoń</span>
          </a>
        </div>
      </div>
    </header>
  );
}
