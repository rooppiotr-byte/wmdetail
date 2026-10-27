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
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-500">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>

          <ul className="mt-6 space-y-2">
            {features.map((item) => (
              <li key={item} className="text-muted-foreground">
                ✓ {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-right">
          {typeof price === "string" ? (
            <span className="text-3xl font-bold text-silver whitespace-nowrap">{price}</span>
          ) : (
            <div className="space-y-2">
              {Object.entries(price).map(([size, value]) => (
                <div key={size} className="flex gap-3 justify-end">
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
