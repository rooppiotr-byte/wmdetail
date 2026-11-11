import { Button } from "@/components/ui/button";
import { PriceRow } from "@/components/PriceBox";
import { Phone, Sparkles, Car, Sofa } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import {
  EXTERIOR_PRICES,
  INTERIOR_PRICES,
  PAINT_PRICES,
  type PriceItem,
} from "@/lib/prices";

function PriceGroup({
  title,
  icon: Icon,
  items,
  asPage,
}: {
  title: string;
  icon: typeof Sofa;
  items: PriceItem[];
  asPage: boolean;
}) {
  // Na /cennik h1 jest nagłówkiem strony, więc grupy to h2, a wiersze h3 (bez przeskoku poziomów)
  const Group = asPage ? "h2" : "h3";
  return (
    <div className="rounded-xl border-silver bg-graphite p-6">
      <div className="mb-2 flex items-center gap-3">
        <Icon className="h-5 w-5 text-signal" aria-hidden="true" />
        <Group className="font-display text-xl font-semibold">{title}</Group>
      </div>
      <ul>
        {items.map((item) => (
          <PriceRow
            key={item.id}
            title={item.title}
            price={item.price}
            features={item.features}
            detailed={asPage}
            Heading={asPage ? "h3" : "h4"}
          />
        ))}
      </ul>
    </div>
  );
}

/**
 * Cennik. Na stronie głównej (domyślnie) to kompaktowa sekcja #cennik z nagłówkiem h2
 * (ceny "od"), na osobnej stronie /cennik (asPage) nagłówek jest h1, a wiersze pokazują pełny podział.
 */
export function PricingSection({ asPage = false }: { asPage?: boolean }) {
  return (
    <section
      id="cennik"
      className={asPage ? "pt-12 pb-20" : "py-16 sm:py-20 border-t border-white/10"}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow eyebrow-c">Cennik</p>

          {asPage ? (
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold">
              Cennik detailingu w Dąbrowie Górniczej
            </h1>
          ) : (
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Poznaj nasze ceny</h2>
          )}

          <p className="mt-4 text-muted-foreground">
            Ceny orientacyjne. Ostateczna zależy od wielkości auta i stanu lakieru.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <PriceGroup title="Wnętrze" icon={Sofa} items={INTERIOR_PRICES} asPage={asPage} />
          <PriceGroup title="Lakier" icon={Sparkles} items={PAINT_PRICES} asPage={asPage} />
          <PriceGroup title="Zewnętrze" icon={Car} items={EXTERIOR_PRICES} asPage={asPage} />
        </div>

        <div className="mt-10 mx-auto max-w-3xl rounded-xl border-silver bg-graphite p-6 sm:p-8 text-center">
          <h3 className="font-display text-2xl font-semibold">Nie ma Twojej usługi na liście?</h3>
          <p className="mt-3 text-muted-foreground">
            Robimy też woski, renowację reflektorów, detailing motocykli i przygotowanie auta do sprzedaży.
            Wycenę przygotujemy bezpłatnie po telefonie lub zdjęciach.
          </p>
          <div className="mt-6">
            <Button size="lg" asChild>
              <a href={BUSINESS.phoneHref}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Umów termin
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
