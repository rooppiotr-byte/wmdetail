import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ALL_SERVICES } from "@/lib/services";
import { BUSINESS, SITE_URL } from "@/lib/site";

const TITLE = "Usługi detailingowe Dąbrowa Górnicza | WM Detail Car Detailing";
const DESCRIPTION =
  "Wszystkie usługi WM Detail w Dąbrowie Górniczej: detailing wnętrza, korekta lakieru, powłoki ceramiczne, pranie tapicerki i mycie detailingowe.";
const URL = `${SITE_URL}/uslugi`;

export const Route = createFileRoute("/uslugi/")({
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
          "@type": "ItemList",
          name: "Usługi WM Detail Car Detailing",
          itemListElement: ALL_SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `${SITE_URL}/uslugi/${s.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Usługi", item: URL },
          ],
        }),
      },
    ],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SiteHeader />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ label: "Strona główna", to: "/" }, { label: "Usługi" }]} />
          <p className="text-xs uppercase tracking-[0.4em] text-silver mb-4">— Usługi</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Usługi detailingowe w Dąbrowie Górniczej
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            WM Detail to studio detailingu samochodowego. Wybierz usługę, aby zobaczyć zakres prac,
            realizacje, orientacyjne ceny i odpowiedzi na najczęstsze pytania.
          </p>

          <ul className="grid gap-6 md:grid-cols-2">
            {ALL_SERVICES.map((s) => (
              <li key={s.slug} className="rounded-xl bg-graphite border-silver shadow-elegant overflow-hidden">
                <Link to={`/uslugi/${s.slug}` as any} className="block group">
                  <img
                    src={s.image}
                    alt={s.alt}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-6">
                    <h2 className="font-display text-2xl font-semibold mb-2 group-hover:text-silver transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{s.intro}</p>
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-silver">
                      Zobacz szczegóły <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <section className="mt-12 rounded-xl border-silver bg-graphite p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold mb-3">Dodatkowe usługi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Poza głównymi usługami wykonujemy m.in. ozonowanie wnętrza i mycie komory silnika.
              Ich ceny znajdziesz w{" "}
              <Link to={"/cennik" as any} className="text-silver underline underline-offset-4 hover:text-foreground">
                cenniku
              </Link>
              .
            </p>
          </section>

          <div className="bg-graphite border-silver rounded-xl p-8 mt-10">
            <h2 className="font-display text-2xl font-semibold mb-3">Umów termin</h2>
            <p className="text-muted-foreground mb-6">Zadzwoń lub napisz, a przygotujemy bezpłatną wycenę.</p>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-md font-semibold uppercase tracking-widest text-sm hover:bg-silver-bright transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
