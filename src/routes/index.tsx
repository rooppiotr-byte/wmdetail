import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Droplets, Sofa, Shield, MapPin, Phone, Mail, Instagram, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/wm-detail-logo.png.asset.json";
import heroCar from "@/assets/hero-car.jpg";
import servicePolish from "@/assets/service-polish.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import portfolio1Asset from "@/assets/portfolio-lucid.jpg.asset.json";
const portfolio1 = portfolio1Asset.url;
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4Asset from "@/assets/lucid-interior.jpg.asset.json";
const portfolio4 = portfolio4Asset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WM Detail — Car Detailing Premium | Odpicujemy Twoją Furę" },
      {
        name: "description",
        content:
          "WM Detail — profesjonalny car detailing. Korekta lakieru, powłoki ceramiczne, detailing wnętrza. Premium jakość dla Twojej fury.",
      },
      { property: "og:title", content: "WM Detail — Car Detailing Premium" },
      { property: "og:description", content: "Odpicujemy Twoją Furę! Premium car detailing." },
      { property: "og:image", content: heroCar },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroCar },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return <img src={logoAsset.url} alt="WM Detail" className={className} width={1641} height={405} />;
}

const services = [
  {
    icon: Droplets,
    title: "Mycie detailingowe",
    desc: "Pre wash, opony i felgi, wnęki drzwi, osuszanie, szyby.",
    img: servicePolish,
  },
  {
    icon: Sparkles,
    title: "Korekta lakieru",
    desc: "Usuwanie rys, hologramów i defektów. Poprawa połysku i redukcja zarysowań.",
    img: serviceCeramic,
  },
  {
    icon: Shield,
    title: "Powłoki ceramiczne",
    desc: "Profesjonalne powłoki kwarcowe i ceramiczne. Hydrofobowość, głębia koloru i długoletnia ochrona lakieru.",
    img: serviceCeramic,
  },
  {
    icon: Sofa,
    title: "Detailing wnętrza",
    desc: "Pranie tapicerki, czyszczenie skóry, dezynfekcja ozonem. Wnętrze jak prosto z salonu.",
    img: serviceInterior,
  },
];

const portfolio = [
  { img: portfolio1, title: "Lucid Air", tag: "Korekta + Ceramika" },
  { img: portfolio2, title: "Mercedes AMG", tag: "Detailing kompletny" },
  { img: portfolio3, title: "BMW M3", tag: "Powłoka ceramiczna" },
  { img: portfolio4, title: "Lucid Gravity", tag: "Detailing wnętrza" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Logo className="h-9 sm:h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            <a href="#uslugi" className="hover:text-foreground transition-colors">Usługi</a>
            <a href="#realizacje" className="hover:text-foreground transition-colors">Realizacje</a>
            <a href="#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
          </nav>
          <a
            href="tel:+48505797300"
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-md border-silver text-xs sm:text-sm uppercase tracking-widest text-silver hover:bg-secondary transition-colors"
          >
            Umów termin
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src={heroCar}
            alt="Premium car detailing"
            className="w-full h-full object-cover opacity-60"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
              <span className="text-silver">ODPICUJEMY</span>
              <br />
              <span className="text-foreground">TWOJĄ FURĘ!</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
              Studio detailingu, w którym każdy detal ma znaczenie. Korekta lakieru, powłoki ceramiczne i pełna pielęgnacja Twojego auta.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#uslugi"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-md font-semibold uppercase tracking-widest text-sm hover:bg-silver-bright transition-colors shadow-silver-glow"
              >
                Zobacz usługi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#realizacje"
                className="inline-flex items-center gap-3 px-8 py-4 border-silver rounded-md font-semibold uppercase tracking-widest text-sm text-silver hover:bg-secondary transition-colors"
              >
                Nasze realizacje
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground animate-pulse">
          Scroll
        </div>
      </section>

      {/* USLUGI */}
      <section id="uslugi" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-silver mb-4">— Usługi</p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold">
                Co dla Ciebie <span className="text-silver">zrobimy</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Każda usługa wykonywana jest w klimatyzowanym studio z oświetleniem detailingowym, z użyciem chemii premium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-xl bg-graphite border-silver shadow-elegant"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-md bg-background/80 backdrop-blur border-silver flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-silver" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REALIZACJE */}
      <section id="realizacje" className="relative py-32 px-6 bg-graphite">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-silver mb-4">— Realizacje</p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold">
                Nasza <span className="text-silver">robota</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.map((p, i) => (
              <figure
                key={p.title}
                className={`group relative overflow-hidden rounded-xl border-silver shadow-elegant ${
                  i === 0 ? "md:col-span-2 md:row-span-1" : ""
                }`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 ? "h-[28rem]" : "h-80"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <figcaption className="absolute bottom-0 inset-x-0 p-8 flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-silver mb-2">{p.tag}</p>
                    <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-silver mb-4">— KONTAKT</p>
            <h2 className="font-display text-5xl sm:text-6xl font-bold">
              Zarezerwuj <span className="text-silver">termin</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-graphite border-silver rounded-xl p-10 shadow-elegant space-y-8">
              <a href="tel:+48505797300" className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Phone className="w-5 h-5 text-silver" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Telefon</p>
                  <p className="font-display text-2xl">+48 505 797 300</p>
                </div>
              </a>

              <a href="mailto:wmdetaildg@gmail.com" className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Mail className="w-5 h-5 text-silver" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">E-mail</p>
                  <p className="font-display text-2xl">wmdetaildg@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-silver" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">ADRES{"\u00a0"}</p>
                  <p className="font-display text-2xl">ul. Św. Antoniego 166</p>
                  <p className="text-muted-foreground">41-303 Dąbrowa Górnicza</p>
                </div>
              </div>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-md bg-background border-silver flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Instagram className="w-5 h-5 text-silver" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Instagram</p>
                  <p className="font-display text-2xl">@wmdetail.dg</p>
                </div>
              </a>

              <div className="pt-4 border-t border-border">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Godziny otwarcia</p>
                <div className="flex justify-between text-foreground">
                  <span>Pon — Pt</span>
                  <span className="text-silver">08:00 — 16:00</span>
                </div>
                <div className="flex justify-between text-foreground mt-1">
                  <span>Sobota</span>
                  <span className="text-silver">09:00 — 14:00</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border-silver shadow-elegant min-h-[500px]">
              <iframe
                title="Mapa WM Detail"
                src="https://www.google.com/maps?q=ul.+%C5%9Aw.+Antoniego+166,+41-303+D%C4%85browa+G%C3%B3rnicza&output=embed"
                className="w-full h-full min-h-[500px] grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-auto" />
            <span className="font-display tracking-widest text-silver">CAR DETAILING</span>
          </div>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} WM Detail — Odpicujemy Twoją Furę
          </p>
        </div>
      </footer>
    </div>
  );
}
