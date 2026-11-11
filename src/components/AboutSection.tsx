import { Phone } from "lucide-react";

import { BUSINESS } from "@/lib/site";
import imgStudio from "@/assets/lucyna-gt-srodek-nastrone.webp";
import imgVisit from "@/assets/mycie-detailingowe-lucidgt.webp";
import imgInterior from "@/assets/lucid-wnetrze-detailing.webp";
import imgPaint from "@/assets/lucid-air-detailing-korekta-ceramika.webp";

// Akapity naprzemiennie: zdjęcie po lewej, potem po prawej (na telefonie zdjęcie zawsze nad tekstem).
const PARAGRAPHS = [
  {
    title: null,
    text: `WM Detail to nowe, szybko rozwijające się studio detailingu w Dąbrowie Górniczej, przy ${BUSINESS.street}. W krótkim czasie obsłużyliśmy wiele aut premium, m.in. Lucida i Teslę. Zajmujemy się myciem detailingowym, detailingiem wnętrza, praniem tapicerki, korektą lakieru i powłokami ceramicznymi.`,
    img: imgStudio,
    alt: "Wnętrze Lucida Grand Touring po detailingu w WM Detail w Dąbrowie Górniczej",
  },
  {
    title: "Jak wygląda wizyta",
    text: "Zaczynamy od rozmowy i oględzin auta. Możesz też wysłać zdjęcia, a wycenę przygotujemy bez wizyty. Mówimy, co jest do zrobienia, co się opłaca i co może poczekać. Cenę podajemy przed rozpoczęciem pracy, bez dopłat po fakcie. Po wszystkim oddajemy auto i pokazujemy efekt.",
    img: imgVisit,
    alt: "Lucid po myciu detailingowym w studio WM Detail",
  },
  {
    title: "Czego używamy",
    text: "Pracujemy na środkach Kiurlab, SWAG, Zvizzer, ADBL i Fresso. Dobieramy je do stanu lakieru, tapicerki i materiałów w aucie, a nie do jednego schematu.",
    img: imgInterior,
    alt: "Wnętrze Lucida po detailingu w WM Detail",
  },
  {
    title: "Dla kogo",
    text: "Dla właścicieli aut, które mają wyglądać jak z salonu: nowych, elektrycznych i tych, które trzeba przywrócić po latach użytkowania. Przyjeżdżają do nas klienci z Dąbrowy Górniczej, Sosnowca, Będzina, Czeladzi, Katowic i Mysłowic.",
    img: imgPaint,
    alt: "Lucid Air po korekcie lakieru i powłoce ceramicznej w WM Detail",
  },
];

export function AboutSection({ asPage = false }: { asPage?: boolean }) {
  // Na osobnej stronie /o-nas nagłówek główny to h1, a śródtytuły to h2 (bez przeskoku poziomów)
  const Title = asPage ? "h1" : "h2";
  const Sub = asPage ? "h2" : "h3";
  return (
    <section
      id="o-nas"
      className={`relative px-6 bg-graphite ${asPage ? "pt-36 sm:pt-44 pb-20 sm:pb-28" : "py-20 sm:py-32"}`}
      aria-labelledby="o-nas-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow eyebrow-c mb-4">O nas</p>
          <Title id="o-nas-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
            O <span className="text-silver">studiu</span>
          </Title>
        </div>

        <div className="space-y-14 md:space-y-20">
          {PARAGRAPHS.map((p, i) => (
            <div
              key={p.img}
              className={`flex flex-col items-center gap-8 md:gap-14 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <img
                src={p.img}
                alt={p.alt}
                loading={i === 0 ? "eager" : "lazy"}
                width={800}
                height={600}
                className="w-full md:w-1/2 aspect-[4/3] rounded-xl border-silver object-cover object-[50%_40%]"
              />
              <div className="md:w-1/2">
                {p.title && <Sub className="font-display text-2xl sm:text-3xl font-semibold mb-4">{p.title}</Sub>}
                <p className="text-lg text-foreground/85 leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/85 leading-relaxed">
            Pracujemy od poniedziałku do piątku 8:00–16:00 i w soboty 9:00–14:00. Zadzwoń lub wyślij zdjęcia
            auta, a przygotujemy bezpłatną wycenę.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="btn-signal btn-glow mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-md font-semibold uppercase tracking-widest text-sm"
          >
            <Phone className="w-4 h-4" aria-hidden="true" /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
