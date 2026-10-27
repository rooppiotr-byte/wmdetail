import { Button } from "@/components/ui/button";
import { PriceBox } from "@/components/PriceBox";
import { ArrowRight, Sparkles, Car, Sofa } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import {
  EXTERIOR_PRICES,
  INTERIOR_PRICES,
  PAINT_PRICES,
  type PriceItem,
} from "@/lib/prices";

function PriceGroup({ items }: { items: PriceItem[] }) {
  return (
    <div className="grid gap-8">
      {items.map((service) => (
        <PriceBox
          key={service.id}
          title={service.title}
          price={service.price}
          features={service.features}
        />
      ))}
    </div>
  );
}

/**
 * Cennik. Na stronie głównej (domyślnie) to sekcja #cennik z nagłówkiem h2,
 * na osobnej stronie /cennik (asPage) nagłówek jest h1.
 */
export function PricingSection({ asPage = false }: { asPage?: boolean }) {
  return (
    <section
      id="cennik"
      className={asPage ? "pt-12 pb-28" : "py-28 border-t border-white/10"}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-silver">Cennik</p>

          {asPage ? (
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold">
              Cennik detailingu w Dąbrowie Górniczej
            </h1>
          ) : (
            <h2 className="mt-4 font-display text-5xl md:text-6xl font-bold">
              Poznaj nasze ceny
            </h2>
          )}

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Każda usługa jest wyceniana indywidualnie w zależności od
            wielkości pojazdu oraz jego stanu. Poniżej znajdziesz
            orientacyjne ceny naszych najpopularniejszych usług.
          </p>
        </div>

        <div className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="rounded-xl bg-silver/10 p-3">
              <Sofa className="h-6 w-6 text-silver" />
            </div>

            <div>
              <h3 className="text-3xl font-bold">Wnętrze</h3>
              <p className="text-muted-foreground">
                Kompleksowy detailing, pranie i ozonowanie wnętrza.
              </p>
            </div>
          </div>

          <PriceGroup items={INTERIOR_PRICES} />
        </div>

        <div className="mt-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="rounded-xl bg-silver/10 p-3">
              <Sparkles className="h-6 w-6 text-silver" />
            </div>

            <div>
              <h3 className="text-3xl font-bold">Lakier</h3>
              <p className="text-muted-foreground">
                Korekta, powłoki ceramiczne i przywracanie głębi koloru.
              </p>
            </div>
          </div>

          <PriceGroup items={PAINT_PRICES} />
        </div>

        <div className="mt-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="rounded-xl bg-silver/10 p-3">
              <Car className="h-6 w-6 text-silver" />
            </div>

            <div>
              <h3 className="text-3xl font-bold">Zewnętrze</h3>
              <p className="text-muted-foreground">
                Kompleksowa pielęgnacja karoserii oraz elementów zewnętrznych.
              </p>
            </div>
          </div>

          <PriceGroup items={EXTERIOR_PRICES} />
        </div>

        <div className="mt-32">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-10 lg:p-14 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-silver">
              Indywidualna wycena
            </p>

            <h3 className="mt-4 text-4xl font-bold">
              Nie znalazłeś interesującej Cię usługi?
            </h3>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Oferujemy również wiele innych usług detailingowych,
              takich jak aplikacja wosków, przygotowanie auta do sprzedaży,
              renowacja reflektorów, detailing motocykli,
              zabezpieczenia lakieru oraz indywidualne pakiety usług.
            </p>

            <p className="mt-6 max-w-3xl mx-auto text-muted-foreground">
              Każdy samochód jest inny, dlatego ostateczna cena zależy od
              wielkości pojazdu, stanu lakieru oraz zakresu prac.
              Skontaktuj się z nami — przygotujemy bezpłatną wycenę
              dopasowaną do Twojego auta.
            </p>

            <div className="mt-10">
              <Button size="lg" asChild>
                <a href={asPage ? BUSINESS.phoneHref : "#kontakt"}>
                  Umów termin
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
