import type { ReactNode } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BUSINESS, SITE_URL } from "@/lib/site";
import servicePolish from "@/assets/lucid-air-pure-detailing-kompleksowy.jpg";
import serviceInterior from "@/assets/lucyna-gt-srodek-nastrone.jpg";
import serviceCeramic from "@/assets/lucid-air-detailing-korekta-ceramika.jpg";
import lucidInterior from "@/assets/lucyna-gt-srodek-nastrone.jpg";


type ServiceMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  bullets: string[];
  image: string;
  alt: string;
};

export const ALL_SERVICES: ServiceMeta[] = [
  {
    slug: "detailing-wnetrza",
    title: "Detailing wnętrza",
    metaTitle: "Detailing wnętrza Dąbrowa Górnicza | WM Detail Car Detailing",
    description: "Detailing wnętrza samochodu w Dąbrowie Górniczej — pranie tapicerki, czyszczenie skóry, dezynfekcja ozonem. Wnętrze jak z salonu.",
    h1: "Detailing wnętrza samochodu — Dąbrowa Górnicza",
    intro: "Kompleksowe czyszczenie kabiny: tapicerka, skóra, plastiki, podsufitka i wykończenia. Dezynfekcja ozonem usuwa nieprzyjemne zapachy.",
    bullets: ["Pranie tapicerki materiałowej i welurowej", "Czyszczenie i pielęgnacja skóry", "Detailing plastików i wykończeń", "Dezynfekcja ozonem", "Mycie szyb od wewnątrz"],
    image: lucidInterior.url,
    alt: "Detailing wnętrza Lucid Air w studio WM Detail w Dąbrowie Górniczej",
  },
  {
    slug: "korekta-lakieru",
    title: "Korekta lakieru",
    metaTitle: "Korekta lakieru Dąbrowa Górnicza | WM Detail Car Detailing",
    description: "Profesjonalna korekta lakieru w Dąbrowie Górniczej. Usuwanie rys, hologramów i defektów, maszynowa polerka i lustrzane wykończenie.",
    h1: "Korekta lakieru samochodowego — Dąbrowa Górnicza",
    intro: "Maszynowa korekta lakieru przywraca głębię koloru i lustrzane wykończenie. Usuwamy rysy, hologramy, swirle i utlenienie.",
    bullets: ["Pomiar grubości powłoki lakieru", "Jedno- lub wieloetapowa korekta", "Usuwanie rys i hologramów", "Lustrzane wykończenie", "Przygotowanie pod powłokę ceramiczną"],
    image: servicePolish,
    alt: "Korekta lakieru maszynową polerką — WM Detail Dąbrowa Górnicza",
  },
  {
    slug: "powloki-ceramiczne",
    title: "Powłoki ceramiczne",
    metaTitle: "Powłoki ceramiczne Dąbrowa Górnicza | WM Detail Car Detailing",
    description: "Powłoki ceramiczne i kwarcowe w Dąbrowie Górniczej. Hydrofobowość, głębia koloru i długoletnia ochrona lakieru samochodu.",
    h1: "Powłoki ceramiczne na lakier — Dąbrowa Górnicza",
    intro: "Profesjonalna aplikacja powłok ceramicznych i kwarcowych. Lakier zyskuje hydrofobowość, odporność na zabrudzenia i głębię koloru na lata.",
    bullets: ["Przygotowanie i korekta lakieru", "Aplikacja powłoki 2H–10H", "Hydrofobowość i efekt samoczyszczenia", "Ochrona przed UV i ptasimi odchodami", "Gwarancja trwałości"],
    image: serviceCeramic,
    alt: "Aplikacja powłoki ceramicznej na lakier samochodu — WM Detail",
  },
  {
    slug: "pranie-tapicerki",
    title: "Pranie tapicerki",
    metaTitle: "Pranie tapicerki samochodowej Dąbrowa Górnicza | WM Detail",
    description: "Pranie tapicerki samochodowej w Dąbrowie Górniczej. Ekstrakcyjne pranie foteli, podsufitki i dywaników. Usuwanie plam i zapachów.",
    h1: "Pranie tapicerki samochodowej — Dąbrowa Górnicza",
    intro: "Ekstrakcyjne pranie tapicerki usuwa kurz, plamy i alergeny. Wnętrze odzyskuje świeżość, a foteliki dziecięce wracają do stanu fabrycznego.",
    bullets: ["Pranie foteli i kanapy", "Pranie podsufitki", "Pranie dywaników i wykładziny", "Usuwanie plam organicznych", "Neutralizacja zapachów"],
    image: serviceInterior,
    alt: "Pranie tapicerki samochodowej w WM Detail Dąbrowa Górnicza",
  },
  {
    slug: "mycie-detailingowe",
    title: "Mycie detailingowe",
    metaTitle: "Mycie detailingowe Dąbrowa Górnicza | WM Detail Car Detailing",
    description: "Bezdotykowe mycie detailingowe samochodu w Dąbrowie Górniczej. Pre wash, dwa wiadra, dekontaminacja chemiczna i bezpieczne osuszanie.",
    h1: "Mycie detailingowe samochodu — Dąbrowa Górnicza",
    intro: "Pełne, bezpieczne mycie samochodu metodą detailingową: pre wash, dwa wiadra, opony, felgi, wnęki i bezpieczne osuszanie microfibrą.",
    bullets: ["Pre wash i piana aktywna", "Mycie metodą dwóch wiader", "Opony, felgi i wnęki", "Mycie szyb i listew", "Bezpieczne osuszanie"],
    image: servicePolish,
    alt: "Mycie detailingowe samochodu w studio WM Detail",
  },
];

export function ServicePageLayout({ slug, children }: { slug: string; children?: ReactNode }) {
  const svc = ALL_SERVICES.find((s) => s.slug === slug)!;
  const others = ALL_SERVICES.filter((s) => s.slug !== slug);
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SiteHeader />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-silver mb-4">— Usługa</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">{svc.h1}</h1>
          <p className="text-lg text-muted-foreground mb-10">{svc.intro}</p>


          <h2 className="font-display text-2xl font-semibold mb-4">Co obejmuje usługa</h2>
          <ul className="space-y-2 text-muted-foreground mb-10 list-disc list-inside">
            {svc.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>

          {children}

          <div className="bg-graphite border-silver rounded-xl p-8 my-10">
            <h2 className="font-display text-2xl font-semibold mb-3">Umów termin</h2>
            <p className="text-muted-foreground mb-6">Zadzwoń lub napisz — dobierzemy zakres usługi do Twojego auta.</p>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-md font-semibold uppercase tracking-widest text-sm hover:bg-silver-bright transition-colors">
              <Phone className="w-4 h-4" aria-hidden="true" /> {BUSINESS.phone}
            </a>
          </div>

          <h2 className="font-display text-2xl font-semibold mb-4">Pozostałe usługi</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/uslugi/${o.slug}` as any} className="flex items-center justify-between p-4 rounded-md border-silver hover:bg-secondary transition-colors">
                  <span>{o.title}</span>
                  <ArrowRight className="w-4 h-4 text-silver" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

export function buildServiceHead(slug: string) {
  const svc = ALL_SERVICES.find((s) => s.slug === slug)!;
  const url = `${SITE_URL}/uslugi/${svc.slug}`;
  const img = svc.image.startsWith("http") ? svc.image : `${SITE_URL}${svc.image}`;
  return {
    meta: [
      { title: svc.metaTitle },
      { name: "description", content: svc.description },
      { property: "og:title", content: svc.metaTitle },
      { property: "og:description", content: svc.description },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: svc.metaTitle },
      { name: "twitter:description", content: svc.description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: svc.title,
        serviceType: svc.title,
        provider: { "@type": "AutoDetailing", name: BUSINESS.name, telephone: BUSINESS.phone, address: { "@type": "PostalAddress", streetAddress: BUSINESS.street, postalCode: BUSINESS.postalCode, addressLocality: BUSINESS.city, addressCountry: BUSINESS.country } },
        areaServed: BUSINESS.city,
        url,
        description: svc.description,
      }),
    }],
  };
}

// Helper barrel for routes to import
export const _bind = { createFileRoute };
