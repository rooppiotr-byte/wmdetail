import type { PriceValue } from "@/lib/prices";

export function PriceBox({
  title,
  price,
  features,
}: {
  title: string;
  price: PriceValue;
  features: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 hover:border-white/20 transition-all duration-500">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 sm:gap-6">
        <div className="min-w-0">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>

          <ul className="mt-6 space-y-2">
            {features.map((item) => (
              <li key={item} className="text-muted-foreground">
                ✓ {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:text-right border-t border-white/10 pt-4 sm:border-0 sm:pt-0">
          {typeof price === "string" ? (
            <span className="text-3xl font-bold text-silver whitespace-nowrap">{price}</span>
          ) : (
            <div className="space-y-2">
              {Object.entries(price).map(([size, value]) => (
                <div key={size} className="flex gap-3 justify-between sm:justify-end">
                  <span className="text-muted-foreground">{size}</span>
                  <span className="font-bold text-silver whitespace-nowrap">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Kompaktowy wiersz cennika: nazwa po lewej, cena po prawej. Na stronie głównej pokazuje cenę "od", na /cennik pełny podział. */
export function PriceRow({
  title,
  price,
  features,
  detailed = false,
  Heading = "h4",
}: {
  title: string;
  price: PriceValue;
  features: string[];
  detailed?: boolean;
  Heading?: "h3" | "h4";
}) {
  const entries = typeof price === "string" ? null : Object.entries(price);
  const from = typeof price === "string" ? price : entries![0][1].startsWith("od") ? entries![0][1] : `od ${entries![0][1]}`;
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3 last:border-b-0">
      <div className="min-w-0">
        <Heading className="text-base font-medium text-foreground">{title}</Heading>
        {detailed && <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{features.join(" · ")}</p>}
      </div>
      <div className="shrink-0 text-right">
        {detailed && entries ? (
          <div className="space-y-0.5 text-sm">
            {entries.map(([size, value]) => (
              <div key={size} className="flex justify-end gap-3">
                <span className="text-muted-foreground">{size}</span>
                <span className="font-semibold text-silver whitespace-nowrap">{value}</span>
              </div>
            ))}
          </div>
        ) : (
          <span className="font-semibold text-silver whitespace-nowrap">{from}</span>
        )}
      </div>
    </li>
  );
}
