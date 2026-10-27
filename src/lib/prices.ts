// Jedno źródło prawdy dla cennika: korzystają z niego strona główna, /cennik,
// strony usług oraz dane strukturalne (schema.org). Zmiana ceny tutaj zmienia ją wszędzie.

export type PriceValue = string | Record<string, string>;

export type PriceItem = {
  id: string;
  title: string;
  price: PriceValue;
  features: string[];
};

export const INTERIOR_PRICES: PriceItem[] = [
  {
    id: "detailing-basic",
    title: "Detailing Basic",
    price: { S: "150 zł", M: "170 zł", L: "200 zł" },
    features: ["Odkurzanie wnętrza", "Czyszczenie plastików", "Mycie szyb"],
  },
  {
    id: "detailing-full",
    title: "Detailing Full",
    price: "od 700 zł",
    features: [
      "Kompleksowe czyszczenie wnętrza",
      "Pranie tapicerki",
      "Czyszczenie plastików",
      "Mycie szyb",
    ],
  },
  {
    id: "tapicerka-materialowa",
    title: "Pranie tapicerki materiałowej",
    price: "od 300 zł",
    features: ["Dokładne pranie foteli", "Usuwanie zabrudzeń", "Odświeżenie wnętrza"],
  },
  {
    id: "tapicerka-skorzana",
    title: "Pranie tapicerki skórzanej",
    price: "od 300 zł",
    features: ["Czyszczenie skóry", "Odżywienie", "Impregnacja"],
  },
  {
    id: "ozonowanie",
    title: "Ozonowanie wnętrza",
    price: "80 zł",
    features: ["Dezynfekcja wnętrza ozonem", "Neutralizacja nieprzyjemnych zapachów"],
  },
];

export const PAINT_PRICES: PriceItem[] = [
  {
    id: "korekta-1-etapowa",
    title: "Korekta lakieru 1-etapowa",
    price: "od 800 zł",
    features: ["Usunięcie drobnych rys", "Przywrócenie połysku", "Przygotowanie lakieru"],
  },
  {
    id: "powloki-ceramiczne",
    title: "Powłoki ceramiczne",
    price: { "1 rok": "od 800 zł", "3 lata": "od 1800 zł", "5 lat": "od 2400 zł" },
    features: ["Hydrofobowość", "Głębia koloru", "Długa ochrona lakieru"],
  },
];

export const EXTERIOR_PRICES: PriceItem[] = [
  {
    id: "mycie-detailingowe",
    title: "Mycie detailingowe",
    price: { S: "150 zł", M: "180 zł", L: "220 zł" },
    features: [
      "Pre Wash",
      "Mycie metodą na dwa wiadra",
      "Felgi i opony",
      "Osuszanie",
      "Dressing opon",
    ],
  },
  {
    id: "komora-silnika",
    title: "Mycie komory silnika",
    price: "150 zł",
    features: ["Bezpieczne czyszczenie", "Konserwacja plastików"],
  },
];

export const ALL_PRICE_ITEMS: PriceItem[] = [
  ...INTERIOR_PRICES,
  ...PAINT_PRICES,
  ...EXTERIOR_PRICES,
];

// Które pozycje cennika pokazujemy na której stronie usługi.
export const SERVICE_PRICE_IDS: Record<string, string[]> = {
  "detailing-wnetrza": ["detailing-basic", "detailing-full", "ozonowanie"],
  "pranie-tapicerki": ["tapicerka-materialowa", "tapicerka-skorzana"],
  "korekta-lakieru": ["korekta-1-etapowa"],
  "powloki-ceramiczne": ["powloki-ceramiczne"],
  "mycie-detailingowe": ["mycie-detailingowe", "komora-silnika"],
};

export function pricesByIds(ids: string[]): PriceItem[] {
  return ids
    .map((id) => ALL_PRICE_ITEMS.find((item) => item.id === id))
    .filter((item): item is PriceItem => Boolean(item));
}

export function pricesForService(slug: string): PriceItem[] {
  return pricesByIds(SERVICE_PRICE_IDS[slug] ?? []);
}

/** Tekst do opisów i FAQ, np. "Detailing Basic: S 150 zł, M 170 zł, L 200 zł; Detailing Full: od 700 zł". */
export function describePrices(ids: string[]): string {
  return pricesByIds(ids)
    .map((item) =>
      typeof item.price === "string"
        ? `${item.title}: ${item.price}`
        : `${item.title}: ${Object.entries(item.price)
            .map(([key, value]) => `${key} ${value}`)
            .join(", ")}`,
    )
    .join("; ");
}

function parsePrice(text: string): { amount: number; from: boolean } | null {
  const match = text.match(/(\d[\d\s]*)\s*zł/);
  if (!match) return null;
  const amount = Number(match[1].replace(/\s/g, ""));
  if (!Number.isFinite(amount)) return null;
  return { amount, from: /^\s*od\s/i.test(text) };
}

/** Oferty schema.org (Offer) dla pozycji cennika. Ceny "od" dostają minPrice. */
export function offersFor(item: PriceItem) {
  const entries: [string, string][] =
    typeof item.price === "string"
      ? [[item.title, item.price]]
      : Object.entries(item.price).map(([key, value]) => [`${item.title} (${key})`, value]);

  return entries.flatMap(([name, text]) => {
    const parsed = parsePrice(text);
    if (!parsed) return [];
    return [
      parsed.from
        ? {
            "@type": "Offer",
            name,
            priceCurrency: "PLN",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: parsed.amount,
              priceCurrency: "PLN",
            },
          }
        : {
            "@type": "Offer",
            name,
            priceCurrency: "PLN",
            price: parsed.amount,
          },
    ];
  });
}

/** Katalog ofert (bez @context), do osadzenia w LocalBusiness lub jako osobny JSON-LD. */
export function buildOfferCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Usługi detailingowe WM Detail",
    itemListElement: ALL_PRICE_ITEMS.map((item) => ({
      "@type": "OfferCatalog",
      name: item.title,
      itemListElement: offersFor(item).map((offer) => ({
        ...offer,
        itemOffered: { "@type": "Service", name: item.title },
      })),
    })),
  };
}
