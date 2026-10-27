import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingSection } from "@/components/PricingSection";
import { SITE_URL } from "@/lib/site";
import { buildOfferCatalog } from "@/lib/prices";

const TITLE = "Cennik detailingu Dąbrowa Górnicza | WM Detail Car Detailing";
const DESCRIPTION =
  "Cennik detailingu w Dąbrowie Górniczej: wnętrze, pranie tapicerki, ozonowanie, korekta lakieru, powłoki ceramiczne i mycie. Bezpłatna wycena.";
const URL = `${SITE_URL}/cennik`;

export const Route = createFileRoute("/cennik")({
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
        children: JSON.stringify({ "@context": "https://schema.org", ...buildOfferCatalog() }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Cennik", item: URL },
          ],
        }),
      },
    ],
  }),
  component: CennikPage,
});

function CennikPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SiteHeader />
      <main className="pt-28">
        <PricingSection asPage />
      </main>
      <SiteFooter />
    </div>
  );
}
