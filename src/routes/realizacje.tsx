import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PORTFOLIO } from "@/lib/portfolio";
import { BUSINESS, SITE_URL } from "@/lib/site";
import { Phone } from "lucide-react";

const TITLE = "Realizacje detailingu Dąbrowa Górnicza | WM Detail";
const DESCRIPTION =
  "Zdjęcia naszych prac: korekta lakieru, powłoki ceramiczne, detailing wnętrza i mycie detailingowe aut premium w Dąbrowie Górniczej.";
const URL = `${SITE_URL}/realizacje`;

export const Route = createFileRoute("/realizacje")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Realizacje", item: URL },
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SiteHeader />
      <main className="pt-36 sm:pt-44 pb-20 sm:pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow eyebrow-c mb-4">Realizacje</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
              Nasza <span className="text-silver">robota</span>
            </h1>
            <p className="mt-6 text-foreground/80">Wybrane auta, które obsłużyliśmy w WM Detail w Dąbrowie Górniczej.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {PORTFOLIO.map((p, i) => (
              <figure key={p.title + p.tag + i} className="group relative overflow-hidden rounded-lg border-silver">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-44 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
                <figcaption className="absolute bottom-0 inset-x-0 p-3 sm:p-5">
                  <h2 className="font-display text-sm sm:text-lg font-semibold leading-tight text-foreground">{p.title}</h2>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/90 mt-1">{p.tag}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={BUSINESS.phoneHref}
              className="btn-signal btn-glow inline-flex items-center gap-3 px-8 py-4 rounded-md font-semibold uppercase tracking-widest text-sm"
            >
              <Phone className="w-4 h-4" aria-hidden="true" /> Umów termin
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
