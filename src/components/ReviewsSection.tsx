import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { BUSINESS } from "@/lib/site";

// Prawdziwe opinie z wizytówki Google (treść bez zmian, bez emoji). Autor: imię i inicjał nazwiska.
const REVIEWS = [
  {
    author: "Łukasz G.",
    when: "2 tygodnie temu",
    text: "Tesla po wizycie w WM Detail wygląda dosłownie jak nowa! Lakier błyszczy, wnętrze petarda, a całość robi efekt jak przy odbiorze z salonu. Mega robota, pełna profeska i dbałość o każdy detal. Polecam 100%, na pewno wrócę!",
  },
  {
    author: "Marek K.",
    when: "3 miesiące temu",
    text: "Usługa została wykonana bardzo starannie (czyszczenie wnętrza z tapicerką i fotelami). Czas trwania około 4 godzin. Ogólne wrażenie bardzo dobre, auto było bardzo zabrudzone, a po odebraniu wnętrze jak w nowym samochodzie. Z czystym sumieniem mogę polecić tą firmę.",
  },
  {
    author: "Marcel K.",
    when: "2 miesiące temu",
    text: "Dla mnie mega robota zrobiona, auto oddane w dobre ręce i efekt przeszedł oczekiwania, widać dbałość o każdy detal a auto wygląda jak nowe.",
  },
  {
    author: "Dominik S.",
    when: "4 tygodnie temu",
    text: "Super mycie. Super polerka. Super pranie tapicerek. Polecam.",
  },
  {
    author: "Mateusz J.",
    when: "2 miesiące temu",
    text: "Polecam, fachowa robota, miła obsługa i komunikatywna.",
  },
  {
    author: "Karolina W.",
    when: "3 miesiące temu",
    text: "Profesjonalna usługa. Polecam.",
  },
];

const INTERVAL_MS = 7000;

export function ReviewsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % REVIEWS.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <section id="opinie" className="relative py-20 sm:py-32 px-6" aria-labelledby="opinie-heading">
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow eyebrow-c mb-4">Opinie</p>
        <h2 id="opinie-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
          Co mówią <span className="text-silver">klienci</span>
        </h2>
        <p className="mt-6 text-muted-foreground">
          <span className="text-signal font-semibold">5,0</span> na 5 · 10 opinii w Google
        </p>

        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="grid" aria-live={paused || reduceMotion ? "polite" : "off"}>
            {REVIEWS.map((r, i) => (
              <figure
                key={r.author}
                className={`col-start-1 row-start-1 flex flex-col items-center justify-center transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={i !== active}
              >
                <div className="flex gap-1 text-signal" role="img" aria-label="5 na 5 gwiazdek">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-6 text-xl sm:text-2xl leading-relaxed text-foreground">
                  „{r.text}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{r.author}</span> · {r.when}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex justify-center" role="group" aria-label="Wybierz opinię">
            {REVIEWS.map((r, i) => (
              <button
                key={r.author}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Opinia ${i + 1} z ${REVIEWS.length}`}
                aria-current={i === active}
                className="group flex h-11 w-9 items-center justify-center"
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-signal" : "w-2 bg-muted-foreground/60 group-hover:bg-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <a
          href={BUSINESS.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow mt-10 inline-flex items-center gap-3 px-8 py-4 border-silver rounded-md font-semibold uppercase tracking-widest text-sm text-silver hover:bg-secondary"
        >
          Zobacz wszystkie opinie w Google
        </a>
      </div>
    </section>
  );
}
