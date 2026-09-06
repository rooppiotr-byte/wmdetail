import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";

import logoAsset from "@/assets/wm-detail-logo.png";
import { BUSINESS } from "@/lib/site";

const navigation = [
  { label: "Usługi", hash: "uslugi" },
  { label: "Realizacje", hash: "realizacje" },
  { label: "Cennik", hash: "cennik" },
  { label: "Kontakt", hash: "kontakt" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="WM Detail Car Detailing — strona główna" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <img src={logoAsset} alt="WM Detail Car Detailing — logo" className="h-9 w-auto sm:h-12" width={1641} height={405} />
        </Link>

        <nav aria-label="Główna" className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground md:flex">
          {navigation.map((item) => (
            <Link key={item.hash} to="/" hash={item.hash} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={BUSINESS.phoneHref} aria-label={'Zadzwoń ' + BUSINESS.phone} className="hidden items-center gap-2 rounded-md bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-widest text-background shadow-silver-glow transition-colors hover:bg-silver-bright sm:inline-flex sm:px-5 sm:py-2.5 sm:text-sm">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
          </a>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-md border-silver text-foreground md:hidden" aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav aria-label="Menu mobilne" className="border-t border-border bg-background px-6 py-5 md:hidden">
          <ul className="mx-auto max-w-7xl space-y-1">
            {navigation.map((item) => (
              <li key={item.hash}>
                <Link to="/" hash={item.hash} onClick={() => setIsMenuOpen(false)} className="block rounded-md px-4 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a href={BUSINESS.phoneHref} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold uppercase tracking-widest text-background">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Zadzwoń: {BUSINESS.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
