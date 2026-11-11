import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Droplets, Sofa, Shield, MapPin, Phone, Mail, Instagram, ArrowRight, Clock } from "lucide-react";
import heroCar from "@/assets/detailing-samochodu-lucid-air.webp";
import serviceCeramic from "@/assets/lucid-air-detailing-korekta-ceramika.webp";
import { PORTFOLIO } from "@/lib/portfolio";
import korektaImg from "@/assets/korekta-lakieru-polerka.webp";
import wnetrzeImg from "@/assets/lucid-wnetrze-detailing.webp";
import mycieImg from "@/assets/mycie-zewnetrzne-audi.webp";
import logoAsset from "@/assets/wm-detail-logo.png";
import { PricingSection } from "@/components/PricingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AREA_SERVED, BUSINESS, SITE_URL } from "@/lib/site";
import { buildOfferCatalog } from "@/lib/prices";


const TITLE = "Detailing Dąbrowa Górnicza | WM Detail – bezpłatna wycena";
const DESCRIPTION = "Studio detailingu w Dąbrowie Górniczej: korekta lakieru, powłoki ceramiczne od 800 zł, wnętrze od 150 zł, pranie tapicerki. Bezpłatna wycena.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  // "AutoDetailing" nie istnieje w schema.org — AutoWash + AutoBodyShop to najbliższe poprawne typy.
  "@type": ["AutoWash", "AutoBodyShop"],
  name: BUSINESS.name,
  image: [OG_IMAGE, `${SITE_URL}${heroCar}`],
  logo: `${SITE_URL}${logoAsset}`,
  "@id": `${SITE_URL}/#localbusiness`,
  url: SITE_URL,
  hasMap: BUSINESS.maps,
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
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
  areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
  hasOfferCatalog: buildOfferCatalog(),
  sameAs: [
    BUSINESS.instagram,
    BUSINESS.maps,
    "https://www.tiktok.com/@wmdetail.dg",
    "https://www.facebook.com/profile.php?id=61590402852365",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "WM Detail Car Detailing — detailing samochodowy w Dąbrowie Górniczej" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: heroCar, fetchpriority: "high" } as any,
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Droplets, title: "Mycie detailingowe", desc: "Pre wash, opony i felgi, wnęki drzwi, osuszanie, szyby.", img: mycieImg, to: "/uslugi/mycie-detailingowe", alt: "Audi e-tron Sportback po myciu detailingowym w WM Detail w Dąbrowie Górniczej" },
  { icon: Sparkles, title: "Korekta lakieru", desc: "Usuwanie rys, hologramów i defektów. Poprawa połysku i redukcja zarysowań.", img: korektaImg, to: "/uslugi/korekta-lakieru", alt: "Maszynowa korekta lakieru w studio WM Detail w Dąbrowie Górniczej" },
  { icon: Shield, title: "Powłoki ceramiczne", desc: "Profesjonalne powłoki kwarcowe i ceramiczne. Hydrofobowość, głębia koloru i długoletnia ochrona lakieru.", img: serviceCeramic, to: "/uslugi/powloki-ceramiczne", alt: "Lucid Air po korekcie lakieru i powłoce ceramicznej w WM Detail" },
  { icon: Sofa, title: "Detailing wnętrza", desc: "Pranie tapicerki, czyszczenie skóry, dezynfekcja ozonem. Wnętrze jak prosto z salonu.", img: wnetrzeImg, to: "/uslugi/detailing-wnetrza", alt: "Wnętrze Lucida po detailingu w WM Detail w Dąbrowie Górniczej" },
];



function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="relative min-h-[100svh] flex items-center pt-20" aria-labelledby="hero-heading">
          <div className="absolute inset-0">
            <img
              src={heroCar}
              alt="Premium car detailing — studio WM Detail w Dąbrowie Górniczej"
              className="w-full h-full object-cover opacity-60"
              width={1920}
              height={1088}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-background/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-96 w-[40rem] max-w-full rounded-full bg-signal/10 blur-3xl" aria-hidden="true" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 w-full">
            <div className="max-w-6xl mx-auto text-center">
              <p className="eyebrow eyebrow-c mb-6">
                Studio w Dąbrowie Górniczej
              </p>
              <p className="font-hero text-[12vw] sm:text-[10vw] lg:text-9xl xl:text-[10rem] font-bold tracking-tight leading-[0.95] mb-6" aria-hidden="false">
                <span className="text-silver">ODPICUJEMY</span>
                <br />
                <span className="text-foreground">TWOJĄ FURĘ!</span>
              </p>
              <h1 id="hero-heading" className="font-display text-2xl sm:text-3xl font-semibold text-foreground/90 mb-6">
                Detailing samochodowy Dąbrowa Górnicza
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
                Detailing wnętrza, korekta lakieru, powłoki ceramiczne i pranie tapicerki. Bezpłatna wycena po telefonie lub zdjęciach auta.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-4">
                <a href={BUSINESS.phoneHref} aria-label={`Umów termin — zadzwoń ${BUSINESS.phone}`} className="animate-breathe btn-signal btn-glow inline-flex justify-center items-center gap-3 px-8 py-4 rounded-md font-semibold uppercase tracking-widest text-sm">
                  <Phone className="w-4 h-4" aria-hidden="true" /> Umów termin
                </a>
                <a href="#kontakt" className="group btn-glow inline-flex justify-center items-center gap-3 px-8 py-4 border-silver rounded-md font-semibold uppercase tracking-widest text-sm text-silver hover:bg-secondary">
                  Poproś o wycenę
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section id="uslugi" className="relative py-16 sm:py-24 px-6" aria-labelledby="uslugi-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="eyebrow eyebrow-c mb-4">Usługi</p>
              <h2 id="uslugi-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="text-silver">Oferta</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s) => (
                <article key={s.title} className="group relative overflow-hidden rounded-lg bg-graphite border-silver card-glow">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    width={640}
                    height={480}
                    className="aspect-[4/3] w-full object-cover object-[50%_40%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="relative p-5">
                    <s.icon className="w-5 h-5 text-signal mb-3" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      <Link to={s.to} className="after:absolute after:inset-0 after:content-[''] hover:text-silver transition-colors">
                        {s.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-foreground/85 leading-relaxed line-clamp-2">{s.desc}</p>
                    <ArrowRight className="absolute right-5 top-5 w-4 h-4 text-signal transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REALIZACJE */}
        <section id="realizacje" className="relative py-16 sm:py-24 px-6 bg-graphite" aria-labelledby="realizacje-heading">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 text-center">
              <p className="eyebrow eyebrow-c mb-4">Realizacje</p>
              <h2 id="realizacje-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
                Nasza <span className="text-silver">robota</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {PORTFOLIO.slice(0, 8).map((p) => (
                <figure key={p.title + p.tag} className="group relative overflow-hidden rounded-lg border-silver">
                  <img src={p.img} alt={p.alt} loading="lazy" width={1280} height={896} className="w-full h-40 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
                  <figcaption className="absolute bottom-0 inset-x-0 p-3 sm:p-4">
                    <h3 className="font-display text-sm sm:text-base font-semibold leading-tight text-foreground">{p.title}</h3>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/90 mt-1">{p.tag}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to={"/realizacje" as any} className="btn-glow inline-flex items-center gap-3 px-8 py-4 border-silver rounded-md font-semibold uppercase tracking-widest text-sm text-silver hover:bg-secondary">
                Zobacz więcej realizacji <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
        <ReviewsSection />
        <PricingSection />
        {/* KONTAKT + MAPA */}
        <section id="kontakt" className="relative py-20 sm:py-32 px-6" aria-labelledby="kontakt-heading">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <p className="eyebrow eyebrow-c mb-4">Kontakt</p>
              <h2 id="kontakt-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
                Zarezerwuj <span className="text-silver">termin</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-graphite border-silver rounded-xl p-6 sm:p-10 shadow-elegant space-y-8">
                <a href={BUSINESS.phoneHref} className="flex items-start gap-5 group" aria-label={`Zadzwoń ${BUSINESS.phone}`}>
                  <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Phone className="w-5 h-5 text-signal" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Telefon</p>
                    <p className="font-display text-xl sm:text-2xl break-words">{BUSINESS.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-5 group" aria-label={`Wyślij e-mail na ${BUSINESS.email}`}>
                  <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Mail className="w-5 h-5 text-signal" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">E-mail</p>
                    <p className="font-display text-xl sm:text-2xl break-words">{BUSINESS.email}</p>
                  </div>
                </a>

                <address className="flex items-start gap-5 not-italic">
                  <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-signal" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Adres</p>
                    <p className="font-display text-xl sm:text-2xl break-words">{BUSINESS.street}</p>
                    <p className="text-muted-foreground">{BUSINESS.postalCode} {BUSINESS.city}</p>
                  </div>
                </address>

                <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group" aria-label="Instagram @wmdetail.dg">
                  <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Instagram className="w-5 h-5 text-signal" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Instagram</p>
                    <p className="font-display text-xl sm:text-2xl break-words">@wmdetail.dg</p>
                  </div>
                </a>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" aria-hidden="true" /> Godziny otwarcia
                  </p>
                  <div className="flex justify-between text-foreground">
                    <span>Pon — Pt</span><span className="text-signal">08:00 — 16:00</span>
                  </div>
                  <div className="flex justify-between text-foreground mt-1">
                    <span>Sobota</span><span className="text-signal">09:00 — 14:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground mt-1">
                    <span>Niedziela</span><span>Zamknięte</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border-silver shadow-elegant min-h-[360px] sm:min-h-[500px]">
                <iframe
                  title="Mapa dojazdu — WM Detail Car Detailing, Dąbrowa Górnicza"
                  src="https://www.google.com/maps?q=ul.+%C5%9Aw.+Antoniego+166,+41-300+D%C4%85browa+G%C3%B3rnicza&output=embed"
                  className="w-full h-full min-h-[360px] sm:min-h-[500px] grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OBSZAR DZIAŁANIA */}
        <section id="obszar" className="relative py-24 px-6 bg-graphite" aria-labelledby="obszar-heading">
          <div className="max-w-5xl mx-auto text-center">
            <p className="eyebrow eyebrow-c mb-4">Obszar działania</p>
            <h2 id="obszar-heading" className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Studio w <span className="text-silver">Dąbrowie Górniczej</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Obsługujemy klientów z Dąbrowy Górniczej i całego Zagłębia — przyjeżdżają do nas również z Sosnowca, Będzina, Czeladzi, Katowic i Mysłowic.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              WM Detail to studio car detailingu, w którym każde auto traktujemy indywidualnie. Wykonujemy mycie detailingowe, maszynową korektę lakieru, aplikację powłok ceramicznych, detailing wnętrza oraz pranie tapicerki. Zakres prac dobieramy do stanu samochodu i Twoich oczekiwań, a wycenę przygotowujemy po rozmowie lub na podstawie zdjęć auta.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 mb-10" aria-label="Miasta, które obsługujemy">
              {AREA_SERVED.map((c) => (
                <li key={c} className="px-4 py-2 rounded-md border-silver text-sm uppercase tracking-widest text-silver">{c}</li>
              ))}
            </ul>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 px-8 py-4 btn-signal btn-glow rounded-md font-semibold uppercase tracking-widest text-sm">
              <Phone className="w-4 h-4" aria-hidden="true" /> Zadzwoń teraz
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      {/* Mobilny pasek „Zadzwoń” jest renderowany globalnie w __root.tsx */}
    </div>
  );
}
