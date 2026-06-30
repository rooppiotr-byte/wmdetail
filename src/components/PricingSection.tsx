import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Car, Sofa } from "lucide-react";

const interiorServices = [
  {
    title: "Detailing Basic",
    price: {
      S: "100 zł",
      M: "130 zł",
      L: "160 zł",
    },
    features: [
      "Odkurzanie wnętrza",
      "Czyszczenie plastików",
      "Mycie szyb",
    ],
  },
  {
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
    title: "Pranie tapicerki materiałowej",
    price: "od 250 zł",
    features: [
      "Dokładne pranie foteli",
      "Usuwanie zabrudzeń",
      "Odświeżenie wnętrza",
    ],
  },
  {
    title: "Pranie tapicerki skórzanej",
    price: "od 250 zł",
    features: [
      "Czyszczenie skóry",
      "Odżywienie",
      "Impregnacja",
    ],
  },
];

const paintServices = [
  {
    title: "Korekta lakieru 1-etapowa",
    price: "od 800 zł",
    features: [
      "Usunięcie drobnych rys",
      "Przywrócenie połysku",
      "Przygotowanie lakieru",
    ],
  },
];

const exteriorServices = [
  {
    title: "Mycie detailingowe",
    price: {
      S: "150 zł",
      M: "180 zł",
      L: "220 zł",
    },
    features: [
      "Pre Wash",
      "Mycie metodą na dwa wiadra",
      "Felgi i opony",
      "Osuszanie",
      "Dressing opon",
    ],
  },
  {
    title: "Mycie komory silnika",
    price: "150 zł",
    features: [
      "Bezpieczne czyszczenie",
      "Konserwacja plastików",
    ],
  },
];function PriceBox({
  title,
  price,
  features,
}: {
  title: string;
  price: any;
  features: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-500">

      <div className="flex items-start justify-between gap-6">

        <div>

          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>

          <ul className="mt-6 space-y-2">

            {features.map((item) => (
              <li
                key={item}
                className="text-muted-foreground"
              >
                ✓ {item}
              </li>
            ))}

          </ul>

        </div>

        <div className="text-right">

          {typeof price === "string" ? (
            <span className="text-3xl font-bold text-silver whitespace-nowrap">
              {price}
            </span>
          ) : (
            <div className="space-y-2">

              {Object.entries(price).map(([size, value]) => (

                <div
                  key={size}
                  className="flex gap-3 justify-end"
                >

                  <span className="text-muted-foreground">
                    {size}
                  </span>

                  <span className="font-bold text-silver">
                    {value as string}
                  </span>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}export function PricingSection() {
  return (
    <section
      id="cennik"
      className="py-28 border-t border-white/10"
    >
      <div className="container mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-silver">
            Cennik
          </p>

          <h2 className="mt-4 font-display text-5xl md:text-6xl font-bold">
            Poznaj nasze ceny
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Każda usługa jest wyceniana indywidualnie w zależności od
            wielkości pojazdu oraz jego stanu. Poniżej znajdziesz
            orientacyjne ceny naszych najpopularniejszych usług.
          </p>

        </div>        <div className="mt-24">

          <div className="flex items-center gap-4 mb-10">

            <div className="rounded-xl bg-silver/10 p-3">

              <Sofa className="h-6 w-6 text-silver" />

            </div>

            <div>

              <h3 className="text-3xl font-bold">
                Wnętrze
              </h3>

              <p className="text-muted-foreground">
                Kompleksowy detailing oraz pranie wnętrza.
              </p>

            </div>

          </div>

          <div className="grid gap-8">

            {interiorServices.map((service) => (

              <PriceBox
                key={service.title}
                title={service.title}
                price={service.price}
                features={service.features}
              />

            ))}

          </div>

        </div>        <div className="mt-28">

          <div className="flex items-center gap-4 mb-10">

            <div className="rounded-xl bg-silver/10 p-3">

              <Sparkles className="h-6 w-6 text-silver" />

            </div>

            <div>

              <h3 className="text-3xl font-bold">
                Lakier
              </h3>

              <p className="text-muted-foreground">
                Korekta oraz przywracanie głębi koloru.
              </p>

            </div>

          </div>

          <div className="grid gap-8">

            {paintServices.map((service) => (

              <PriceBox
                key={service.title}
                title={service.title}
                price={service.price}
                features={service.features}
              />

            ))}

          </div>

        </div>        <div className="mt-28">

          <div className="flex items-center gap-4 mb-10">

            <div className="rounded-xl bg-silver/10 p-3">
              <Car className="h-6 w-6 text-silver" />
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                Zewnętrze
              </h3>

              <p className="text-muted-foreground">
                Kompleksowa pielęgnacja karoserii oraz elementów zewnętrznych.
              </p>
            </div>

          </div>

          <div className="grid gap-8">

            {exteriorServices.map((service) => (

              <PriceBox
                key={service.title}
                title={service.title}
                price={service.price}
                features={service.features}
              />

            ))}

          </div>

        </div>        <div className="mt-32">

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

              <Button
                size="lg"
                asChild
              >

                <a href="#kontakt">

                  Umów termin

                  <ArrowRight className="ml-2 h-5 w-5" />

                </a>

              </Button>

            </div>

          </div>

        </div>      </div>
    </section>
  );
}