import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Droplets, Sofa, Shield, MapPin, Phone, Mail, Instagram, ArrowRight, Clock } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import servicePolish from "@/assets/service-polish.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import portfolio1Asset from "@/assets/portfolio-lucid.jpg.asset.json";
import portfolio2Asset from "@/assets/lucid-pure.jpg.asset.json";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4Asset from "@/assets/lucid-interior.jpg.asset.json";
const portfolio2 = portfolio2Asset.url;
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BUSINESS, SITE_URL } from "@/lib/site";

const portfolio1 = portfolio1Asset.url;
const portfolio4 = portfolio4Asset.url;

const TITLE = "WM Detail Car Detailing | Detailing samochodowy Dąbrowa Górnicza";
const DESCRIPTION = "Profesjonalny detailing samochodowy w Dąbrowie Górniczej. Detailing wnętrza, korekta lakieru, powłoki ceramiczne, pranie tapicerki oraz kompleksowa pielęgnacja samochodów.";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: BUSINESS.name,
  image: `${SITE_URL}${heroCar}`,
  "@id": `${SITE_URL}/#localbusiness`,
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    postalCode: BUSINESS.postalCode,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
  ],
  sameAs: [BUSINESS.instagram],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}${heroCar}` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}${heroCar}` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: heroCar, fetchpriority: "high" } as any,
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Droplets, title: "Mycie detailingowe", desc: "Pre wash, opony i felgi, wnęki drzwi, osuszanie, szyby.", img: servicePolish, to: "/uslugi/mycie-detailingowe", alt: "Mycie detailingowe samochodu w studio w Dąbrowie Górniczej" },
  { icon: Sparkles, title: "Korekta lakieru", desc: "Usuwanie rys, hologramów i defektów. Poprawa połysku i redukcja zarysowań.", img: serviceCeramic, to: "/uslugi/korekta-lakieru", alt: "Korekta lakieru maszynową polerką — WM Detail Dąbrowa Górnicza" },
  { icon: Shield, title: "Powłoki ceramiczne", desc: "Profesjonalne powłoki kwarcowe i ceramiczne. Hydrofobowość, głębia koloru i długoletnia ochrona lakieru.", img: serviceCeramic, to: "/uslugi/powloki-ceramiczne", alt: "Aplikacja powłoki ceramicznej na lakier samochodu" },
  { icon: Sofa, title: "Detailing wnętrza", desc: "Pranie tapicerki, czyszczenie skóry, dezynfekcja ozonem. Wnętrze jak prosto z salonu.", img: serviceInterior, to: "/uslugi/detailing-wnetrza", alt: "Detailing wnętrza auta — czyszczenie tapicerki i skóry" },
];

const portfolio = [
  { img: portfolio1, title: "Lucid Air Pure", tag: "Korekta + Ceramika", alt: "Lucid Air Pure po korekcie lakieru i powłoce ceramicznej w WM Detail" },
  { img: portfolio2, title: "Mercedes AMG", tag: "Detailing kompletny", alt: "Mercedes AMG po kompletnym detailingu w Dąbrowie Górniczej" },
  { img: portfolio3, title: "BMW M3", tag: "Powłoka ceramiczna", alt: "BMW M3 z powłoką ceramiczną — realizacja WM Detail" },
  { img: portfolio4, title: "Lucid Grand Touring", tag: "Detailing wnętrza", alt: "Lucid Grand Touring po detailingu wnętrza" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-20" aria-labelledby="hero-heading">
          <div className="absolute inset-0">
            <img
              src={heroCar}
              alt="Premium car detailing — studio WM Detail w Dąbrowie Górniczej"
              className="w-full h-full object-cover opacity-60"
              width={1920}
              height={1088}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
            <div className="max-w-3xl">
              <h1 id="hero-heading" className="text-xs uppercase tracking-[0.4em] text-silver mb-6">
                Detailing samochodowy Dąbrowa Górnicza
              </h1>
              <p className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8" aria-hidden="false">
                <span className="text-silver">ODPICUJEMY</span>
                <br />
                <span className="text-foreground">TWOJĄ FURĘ!</span>
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
                {DESCRIPTION}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#uslugi" className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-md font-semibold uppercase tracking-widest text-sm hover:bg-silver-bright transition-colors shadow-silver-glow">
                  Zobacz usługi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                <a href={BUSINESS.phoneHref} aria-label={`Umów termin — zadzwoń ${BUSINESS.phone}`} className="inline-flex items-center gap-3 px-8 py-4 border-silver rounded-md font-semibold uppercase tracking-widest text-sm text-silver hover:bg-secondary transition-colors">
                  <Phone className="w-4 h-4" aria-hidden="true" /> Umów termin
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* USLUGI */}
        <section id="uslugi" className="relative py-32 px-6" aria-labelledby="uslugi-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-silver mb-4">— Usługi</p>
                <h2 id="uslugi-heading" className="font-display text-5xl sm:text-6xl font-bold">
                  Co dla Ciebie <span className="text-silver">zrobimy</span>
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <article key={s.title} className="group relative overflow-hidden rounded-xl bg-graphite border-silver shadow-elegant">
                  <div className="relative h-64 overflow-hidden">
                    <img src={s.img} alt={s.alt} loading="lazy" width={1280} height={720} className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-md bg-background/80 backdrop-blur border-silver flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-silver" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-semibold mb-3">
                      <Link to={s.to} className="hover:text-silver transition-colors">{s.title}</Link>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <Link to={s.to} className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-silver hover:text-foreground">
                      Dowiedz się więcej <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REALIZACJE */}
        <section id="realizacje" className="relative py-32 px-6 bg-graphite" aria-labelledby="realizacje-heading">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-xs uppercase tracking-[0.4em] text-silver mb-4">— Realizacje</p>
              <h2 id="realizacje-heading" className="font-display text-5xl sm:text-6xl font-bold">
                Nasza <span className="text-silver">robota</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolio.map((p, i) => (
                <figure key={p.title} className={`group relative overflow-hidden rounded-xl border-silver shadow-elegant ${i === 0 ? "md:col-span-2" : ""}`}>
                  <img src={p.img} alt={p.alt} loading="lazy" width={1280} height={896} className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "h-[28rem]" : "h-80"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <figcaption className="absolute bottom-0 inset-x-0 p-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-silver mb-2">{p.tag}</p>
                    <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">Dąbrowa Górnicza</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT + MAPA */}
        <section id="kontakt" className="relative py-32 px-6" aria-labelledby="kontakt-heading">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-xs uppercase tracking-[0.4em] text-silver mb-4">— Kontakt</p>
              <h2 id="kontakt-heading" className="font-display text-5xl sm:text-6xl font-bold">
                Zarezerwuj <span className="text-silver">termin</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-graphite border-silver rounded-xl p-10 shadow-elegant space-y-8">
                <a href={BUSINESS.phoneHref} className="flex items-start gap-5 group" aria-label={`Zadzwoń ${BUSINESS.phone}`}>
                  <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Phone className="w-5 h-5 text-silver" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Telefon</p>
                    <p className="font-display text-2xl">{BUSINESS.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-5 group" aria-label={`Wyślij e-mail na ${BUSINESS.email}`}>
                  <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Mail className="w-5 h-5 text-silver" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">E-mail</p>
                    <p className="font-display text-2xl">{BUSINESS.email}</p>
                  </div>
                </a>

                <address className="flex items-start gap-5 not-italic">
                  <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-silver" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Adres</p>
                    <p className="font-display text-2xl">{BUSINESS.street}</p>
                    <p className="text-muted-foreground">{BUSINESS.postalCode} {BUSINESS.city}</p>
                  </div>
                </address>

                <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group" aria-label="Instagram WM Detail">
                  <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Instagram className="w-5 h-5 text-silver" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Instagram</p>
                    <p className="font-display text-2xl">@wmdetail.dg</p>
                  </div>
                </a>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" aria-hidden="true" /> Godziny otwarcia
                  </p>
                  <div className="flex justify-between text-foreground">
                    <span>Pon — Pt</span><span className="text-silver">08:00 — 16:00</span>
                  </div>
                  <div className="flex justify-between text-foreground mt-1">
                    <span>Sobota</span><span className="text-silver">09:00 — 14:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground mt-1">
                    <span>Niedziela</span><span>Zamknięte</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border-silver shadow-elegant min-h-[500px]">
                <iframe
                  title="Mapa dojazdu — WM Detail Car Detailing, Dąbrowa Górnicza"
                  src="https://www.google.com/maps?q=ul.+%C5%9Aw.+Antoniego+166,+41-303+D%C4%85browa+G%C3%B3rnicza&output=embed"
                  className="w-full h-full min-h-[500px] grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
