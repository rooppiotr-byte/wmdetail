import { Phone } from "lucide-react";

import { BUSINESS } from "@/lib/site";

const BLOCKS = [
  {
    title: "Jak wygląda wizyta",
    text: "Zaczynamy od rozmowy i oględzin auta. Możesz też wysłać zdjęcia, a wycenę przygotujemy bez wizyty. Mówimy, co jest do zrobienia, co się opłaca i co może poczekać. Cenę podajemy przed rozpoczęciem pracy, bez dopłat po fakcie. Po wszystkim oddajemy auto i pokazujemy efekt.",
  },
  {
    title: "Czego używamy",
    text: "Pracujemy na środkach Kiurlab, SWAG, Zvizzer, ADBL i Fresso. Dobieramy je do stanu lakieru, tapicerki i materiałów w aucie, a nie do jednego schematu.",
  },
  {
    title: "Dla kogo",
    text: "Dla właścicieli aut, które mają wyglądać jak z salonu: nowych, elektrycznych i tych, które trzeba przywrócić po latach użytkowania. Przyjeżdżają do nas klienci z Dąbrowy Górniczej, Sosnowca, Będzina, Czeladzi, Katowic i Mysłowic.",
  },
];

export function AboutSection({ asPage = false }: { asPage?: boolean }) {
  // Na osobnej stronie /o-nas nagłówek główny to h1, a bloki to h2 (bez przeskoku poziomów)
  const Title = asPage ? "h1" : "h2";
  const BlockTitle = asPage ? "h2" : "h3";
  return (
    <section id="o-nas" className={`relative px-6 bg-graphite ${asPage ? "pt-36 sm:pt-44 pb-20 sm:pb-32" : "py-20 sm:py-32"}`} aria-labelledby="o-nas-heading">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow eyebrow-c mb-4">O nas</p>
          <Title id="o-nas-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
            O <span className="text-silver">studiu</span>
          </Title>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            WM Detail to nowe, szybko rozwijające się studio detailingu w Dąbrowie Górniczej, przy {BUSINESS.street}.
            W krótkim czasie obsłużyliśmy wiele aut premium, m.in. Lucida i Teslę. Zajmujemy się myciem
            detailingowym, detailingiem wnętrza, praniem tapicerki, korektą lakieru i powłokami ceramicznymi.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BLOCKS.map((b) => (
            <div key={b.title} className="rounded-xl bg-background/60 border-silver p-8 card-glow">
              <BlockTitle className="font-display text-2xl font-semibold mb-3">{b.title}</BlockTitle>
              <p className="text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
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
