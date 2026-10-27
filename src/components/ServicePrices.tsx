import { Link } from "@tanstack/react-router";
import { PriceBox } from "@/components/PriceBox";
import { pricesForService } from "@/lib/prices";

/** Cennik na stronie konkretnej usługi (te same dane co strona główna i /cennik). */
export function ServicePrices({ slug }: { slug: string }) {
  const items = pricesForService(slug);
  if (items.length === 0) return null;

  return (
    <section className="mb-10" aria-labelledby="cennik-uslugi">
      <h2 id="cennik-uslugi" className="font-display text-2xl font-semibold mb-4">
        Cennik
      </h2>
      <div className="grid gap-6">
        {items.map((item) => (
          <PriceBox key={item.id} title={item.title} price={item.price} features={item.features} />
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Ceny są orientacyjne i zależą od wielkości auta, jego stanu oraz zakresu prac.{" "}
        <Link
          to={"/cennik" as any}
          className="text-silver underline underline-offset-4 hover:text-foreground"
        >
          Zobacz pełny cennik
        </Link>
        .
      </p>
    </section>
  );
}
