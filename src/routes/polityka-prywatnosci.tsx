import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BUSINESS, SITE_URL } from "@/lib/site";

const TITLE = "Polityka prywatności | WM Detail Car Detailing";
const DESC = "Polityka prywatności serwisu WM Detail Car Detailing — informacje o przetwarzaniu danych osobowych.";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/polityka-prywatnosci` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/polityka-prywatnosci` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <SiteHeader />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto prose-invert">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">Polityka prywatności</h1>
          <p className="text-muted-foreground mb-6">
            Administratorem danych jest {BUSINESS.name}, {BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.city}.
            Dane kontaktowe: <a href={`mailto:${BUSINESS.email}`} className="text-silver">{BUSINESS.email}</a>,
            tel. <a href={BUSINESS.phoneHref} className="text-silver">{BUSINESS.phone}</a>.
          </p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Jakie dane przetwarzamy</h2>
          <p className="text-muted-foreground mb-6">Dane podane przez Państwa w trakcie kontaktu telefonicznego, e-mailowego lub przez media społecznościowe — w celu umówienia i realizacji usługi.</p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Pliki cookies</h2>
          <p className="text-muted-foreground mb-6">Strona może wykorzystywać pliki cookies w celach statystycznych i poprawy działania serwisu.</p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Prawa</h2>
          <p className="text-muted-foreground">Mają Państwo prawo dostępu do swoich danych, ich sprostowania, usunięcia oraz wniesienia sprzeciwu wobec ich przetwarzania.</p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
