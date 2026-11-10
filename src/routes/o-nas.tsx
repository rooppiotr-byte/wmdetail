import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SITE_URL } from "@/lib/site";

const TITLE = "O nas | Studio detailingu Dąbrowa Górnicza | WM Detail";
const DESCRIPTION =
  "WM Detail to nowe studio detailingu w Dąbrowie Górniczej. Jak pracujemy, czego używamy i co mówią klienci. Bezpłatna wycena po telefonie lub zdjęciach.";
const URL = `${SITE_URL}/o-nas`;

export const Route = createFileRoute("/o-nas")({
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
            { "@type": "ListItem", position: 2, name: "O nas", item: URL },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SiteHeader />
      <main>
        <AboutSection asPage />
        <ReviewsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
