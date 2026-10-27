export type ContentSection = { heading: string; paragraphs: string[] };
export type FaqItem = { q: string; a: string };
export type ServiceContent = { sections: ContentSection[]; faq: FaqItem[] };

import { describePrices, SERVICE_PRICE_IDS } from "@/lib/prices";

const BASE_CONTENT: Record<string, ServiceContent> = {
  "detailing-wnetrza": {
    sections: [
      {
        heading: "Na czym polega detailing wnętrza samochodu",
        paragraphs: [
          "Detailing wnętrza to znacznie więcej niż odkurzenie i przetarcie deski rozdzielczej. W WM Detail w Dąbrowie Górniczej czyścimy całą kabinę element po elemencie: fotele i kanapę, podsufitkę, boczki drzwi, dywaniki, plastiki, szczeliny przy konsoli i miejsca, do których zwykła myjnia nigdy nie sięga. Dobieramy środki do rodzaju materiału, bo inaczej pielęgnuje się skórę, a inaczej alcantarę, welur czy tworzywa sztuczne.",
          "Efekt to wnętrze, które nie tylko wygląda czysto, ale też przyjemnie pachnie i jest świeże w dotyku. Dezynfekcja ozonem pomaga usunąć nieprzyjemne zapachy, na przykład po paleniu, zwierzętach, jedzeniu czy zalegającej wilgoci.",
        ],
      },
      {
        heading: "Kiedy warto zrobić detailing wnętrza",
        paragraphs: [
          "Najczęściej klienci z Dąbrowy Górniczej, Sosnowca, Będzina i Katowic zgłaszają się po zimie, gdy w aucie zostaje sól i wilgoć, przed sprzedażą samochodu, po zakupie auta z drugiej ręki albo gdy w kabinie jeżdżą dzieci i zwierzęta. Czyste, zadbane wnętrze realnie poprawia wrażenie podczas sprzedaży, a na co dzień wpływa na komfort jazdy.",
          "Jeśli nie wiesz, jaki zakres będzie odpowiedni, wyślij zdjęcia wnętrza. Zaproponujemy wariant od podstawowego czyszczenia po kompleksowy pakiet z praniem tapicerki. Orientacyjne ceny znajdziesz w cenniku na stronie głównej.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile trwa detailing wnętrza?",
        a: "Czas zależy od wielkości auta, stanu wnętrza i wybranego zakresu. Konkretny termin podajemy przy wycenie, po poznaniu stanu samochodu.",
      },
      {
        q: "Czy dezynfekcja ozonem usuwa zapachy?",
        a: "Ozonowanie pomaga neutralizować nieprzyjemne zapachy, ale najlepsze efekty daje w połączeniu z dokładnym czyszczeniem źródła zapachu, na przykład tapicerki. Po zabiegu wnętrze wietrzymy.",
      },
      {
        q: "Czy detailing wnętrza obejmuje pranie tapicerki?",
        a: "Pakiet Detailing Full obejmuje pranie tapicerki. Wariant podstawowy to odkurzanie, czyszczenie plastików i mycie szyb. Pranie tapicerki można też zamówić osobno.",
      },
    ],
  },
  "korekta-lakieru": {
    sections: [
      {
        heading: "Czym jest korekta lakieru i jak działa",
        paragraphs: [
          "Korekta lakieru to maszynowe polerowanie, które usuwa z powierzchni cienką warstwę zmatowionego lub porysowanego lakieru bezbarwnego. Dzięki temu znikają drobne rysy, hologramy, swirle (pajączki widoczne w słońcu) i utlenienie, a kolor odzyskuje głębię i połysk.",
          "Zanim zaczniemy pracę, mierzymy grubość powłoki lakierniczej, aby bezpiecznie dobrać pad, pastę i liczbę etapów. Korekta jednoetapowa poprawia połysk i usuwa lekkie defekty, a wieloetapowa jest przeznaczona dla aut z wyraźniejszymi zarysowaniami.",
        ],
      },
      {
        heading: "Czego możesz oczekiwać po korekcie",
        paragraphs: [
          "Polerowanie nie jest magią: bardzo głębokie rysy, które przechodzą przez lakier bezbarwny, można zredukować, ale nie zawsze da się je całkowicie usunąć bez ingerencji lakiernika. Zawsze mówimy o tym otwarcie jeszcze przed rozpoczęciem pracy.",
          "Po korekcie lakier jest odsłonięty, dlatego najlepiej zabezpieczyć go woskiem lub powłoką ceramiczną. Korekta jest też standardowym przygotowaniem przed aplikacją powłoki ceramicznej, bo każdy defekt zostałby pod nią zamknięty na długo.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy korekta lakieru usunie każdą rysę?",
        a: "Nie każdą. Usuwamy lub wyraźnie redukujemy rysy powierzchniowe, hologramy i swirle. Rysy, które przeszły przez lakier bezbarwny, mogą pozostać częściowo widoczne. Ocenę podajemy po obejrzeniu auta.",
      },
      {
        q: "Czy polerowanie szkodzi lakierowi?",
        a: "Polerowanie zdejmuje cienką warstwę lakieru bezbarwnego, dlatego przed pracą mierzymy jego grubość i dobieramy agresywność zabiegu do stanu powłoki.",
      },
      {
        q: "Co po korekcie, żeby efekt został na dłużej?",
        a: "Warto zabezpieczyć lakier powłoką ceramiczną lub woskiem oraz myć auto bezpiecznie, metodą ręczną, bez szczotek automatycznych myjni.",
      },
    ],
  },
  "powloki-ceramiczne": {
    sections: [
      {
        heading: "Jak działa powłoka ceramiczna",
        paragraphs: [
          "Powłoka ceramiczna (kwarcowa) to cienka, twarda warstwa nanoszona na lakier, która łączy się z jego powierzchnią i tworzy gładką, odporną barierę. Woda i brud słabo się do niej przyklejają, dlatego auto jest łatwiejsze w myciu i dłużej wygląda na czyste.",
          "Powłoka wzmacnia głębię koloru i połysk, a także chroni lakier przed promieniowaniem UV, środkami chemicznymi, ptasimi odchodami i owadami. W WM Detail w Dąbrowie Górniczej dobieramy rodzaj powłoki do auta i sposobu jego użytkowania.",
        ],
      },
      {
        heading: "Dlaczego przygotowanie lakieru jest najważniejsze",
        paragraphs: [
          "Trwałość i wygląd powłoki zależą w dużej mierze od przygotowania. Przed aplikacją dokładnie myjemy i oczyszczamy lakier, a w razie potrzeby wykonujemy korekcję, ponieważ wszystkie defekty zostałyby pod powłoką widoczne.",
          "Powłoka ceramiczna to nie pancerz. Nie chroni przed odpryskami od kamieni ani przed głębokimi rysami, ale znacząco ułatwia pielęgnację i zabezpiecza lakier przed codziennymi czynnikami. Przekażemy Ci zalecenia dotyczące mycia i dbania o auto po aplikacji.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy powłoka ceramiczna chroni przed zarysowaniami?",
        a: "Zwiększa odporność na drobne zarysowania i ułatwia pielęgnację, ale nie jest pancerzem. Nie zabezpiecza przed odpryskami ani głębokimi rysami.",
      },
      {
        q: "Czy trzeba robić korektę lakieru przed powłoką?",
        a: "W większości przypadków warto. Powłoka podkreśla stan lakieru, więc defekty zostałyby pod nią zamknięte. Zakres przygotowania ustalamy po obejrzeniu auta.",
      },
      {
        q: "Jak myć samochód z powłoką ceramiczną?",
        a: "Najlepiej ręcznie, metodą dwóch wiader, ze środkami o neutralnym pH i microfibrą. Unikaj szczotek w automatycznych myjniach, które mogą porysować lakier.",
      },
      {
        q: "Czy można pokryć powłoką nowe auto?",
        a: "Tak. Nowy lakier również zbiera zabrudzenia od pierwszych dni, a po transporcie i przygotowaniu w salonie często ma drobne defekty, które warto poprawić przed aplikacją.",
      },
    ],
  },
  "pranie-tapicerki": {
    sections: [
      {
        heading: "Pranie ekstrakcyjne tapicerki samochodowej",
        paragraphs: [
          "Pranie ekstrakcyjne polega na wprowadzeniu w tkaninę roztworu czyszczącego i natychmiastowym odessaniu go razem z brudem. Dzięki temu z foteli, kanapy, podsufitki i dywaników usuwamy kurz, plamy, resztki jedzenia i zapachy, a materiał nie jest nadmiernie przemoczony.",
          "Przed praniem sprawdzamy rodzaj materiału i odporność na zabrudzenia, by dobrać odpowiednią chemię. Inaczej czyścimy tkaninę, a inaczej skórę. W przypadku skóry oferujemy czyszczenie, odżywienie i impregnację.",
        ],
      },
      {
        heading: "Dla kogo jest pranie tapicerki",
        paragraphs: [
          "Z usługi najczęściej korzystają osoby, które przewożą dzieci, zwierzęta lub często jeżdżą służbowo, a także klienci przed sprzedażą auta albo po zakupie samochodu używanego. Regularne pranie ogranicza gromadzenie się kurzu i alergenów, a wnętrze odzyskuje świeżość.",
          "Stare, głęboko wżarte plamy nie zawsze znikają w 100%, ale w większości przypadków udaje się je wyraźnie rozjaśnić. O realnych szansach informujemy przed rozpoczęciem pracy. Orientacyjne ceny prania znajdziesz w cenniku na stronie głównej.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy pranie usunie każdą plamę?",
        a: "Większość plam da się usunąć lub wyraźnie rozjaśnić. Stare i głęboko wżarte zabrudzenia czasem pozostają częściowo widoczne. Mówimy o tym przed rozpoczęciem pracy.",
      },
      {
        q: "Czy pranie tapicerki usuwa zapachy?",
        a: "Tak, bo usuwamy ich źródło z materiału. Przy uporczywych zapachach pomocne bywa dodatkowo ozonowanie wnętrza.",
      },
      {
        q: "Ile schnie tapicerka po praniu?",
        a: "Czas schnięcia zależy od materiału i warunków. Metoda ekstrakcyjna ogranicza wilgoć w tapicerce, a po zabiegu zalecamy wietrzenie auta.",
      },
    ],
  },
  "mycie-detailingowe": {
    sections: [
      {
        heading: "Czym różni się mycie detailingowe od zwykłego",
        paragraphs: [
          "Mycie detailingowe to bezpieczna, ręczna metoda, której celem jest dokładne umycie auta bez rysowania lakieru. Zaczynamy od pre washu i piany aktywnej, które rozpuszczają i zbierają największe zabrudzenia jeszcze przed dotknięciem karoserii. Następnie myjemy metodą dwóch wiader, aby brud nie wracał na lakier.",
          "Osobno czyścimy felgi, opony i wnęki drzwi, a na końcu osuszamy auto miękką microfibrą. Takie podejście ogranicza powstawanie swirli i drobnych rys, które zostawiają szczotki w automatycznych myjniach.",
        ],
      },
      {
        heading: "Dla kogo i jak często",
        paragraphs: [
          "Mycie detailingowe sprawdza się u osób, które dbają o stan lakieru, jeżdżą nowymi lub wartościowymi autami i chcą utrzymać efekt po korekcie lub aplikacji powłoki ceramicznej. W ofercie mamy również bezpieczne czyszczenie komory silnika.",
          "Częstotliwość zależy od eksploatacji auta i pory roku. Zimą, gdy na drogach jest sól, warto myć auto częściej. Mycie nie zastąpi korekty lakieru, bo usuwa zabrudzenia, a nie defekty w samej powłoce lakierniczej.",
        ],
      },
    ],
    faq: [
      {
        q: "Dlaczego nie warto myć auta w myjni ze szczotkami?",
        a: "Szczotki zbierają brud z wielu aut i mogą zostawiać na lakierze drobne rysy i swirle. Ręczne mycie detailingowe znacząco ogranicza to ryzyko.",
      },
      {
        q: "Czy mycie detailingowe obejmuje felgi i opony?",
        a: "Tak, obejmuje felgi, opony, wnęki drzwi, szyby oraz osuszanie. Zakres obejmuje też dressing opon.",
      },
      {
        q: "Czy mycie zastąpi korektę lakieru?",
        a: "Nie. Mycie usuwa zabrudzenia, natomiast rysy i hologramy w lakierze można usunąć tylko korektą.",
      },
    ],
  },
};

// Rozszerzenia treści (proces, dla kogo, dodatkowe FAQ). Ceny w FAQ są generowane z src/lib/prices.ts.
const EXTRA_CONTENT: Record<string, ServiceContent> = {
  "detailing-wnetrza": {
    sections: [
      {
        heading: "Jak wygląda nasza praca krok po kroku",
        paragraphs: [
          "Zaczynamy od oceny stanu kabiny i rozmowy o tym, co najbardziej Ci przeszkadza: plamy, zapach, osad na plastikach czy zniszczona skóra. Na tej podstawie wybieramy wariant usługi i środki dopasowane do materiałów w Twoim aucie.",
          "Następnie dokładnie odkurzamy wnętrze, czyścimy plastiki i miejsca trudno dostępne, myjemy szyby od środka, a w pakiecie Detailing Full wykonujemy także pranie tapicerki. Na życzenie dodajemy ozonowanie, które pomaga usunąć zapachy z całej kabiny.",
        ],
      },
      {
        heading: "Basic czy Full, który wariant wybrać",
        paragraphs: [
          "Detailing Basic to dobry wybór do regularnego utrzymania czystości: odkurzanie wnętrza, czyszczenie plastików i mycie szyb. Cena zależy od wielkości auta (S, M, L).",
          "Detailing Full polecamy, gdy wnętrze jest mocno zabrudzone, auto jest po zakupie z drugiej ręki albo przygotowujesz je do sprzedaży. Obejmuje kompleksowe czyszczenie wnętrza razem z praniem tapicerki. Jeśli masz wątpliwości, wyślij zdjęcia, a podpowiemy, co będzie wystarczające.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje detailing wnętrza w Dąbrowie Górniczej?",
        a: `Orientacyjne ceny: ${describePrices(SERVICE_PRICE_IDS["detailing-wnetrza"])}. Ostateczna cena zależy od wielkości auta i stanu wnętrza, a wycena jest bezpłatna.`,
      },
      {
        q: "Jak przygotować auto przed wizytą?",
        a: "Wystarczy wyjąć z wnętrza rzeczy osobiste, fotelik dziecięcy i większe przedmioty. Resztą zajmiemy się my. Jeśli w aucie są szczególne plamy lub zapachy, daj nam znać przy umawianiu terminu.",
      },
    ],
  },
  "korekta-lakieru": {
    sections: [
      {
        heading: "Etapy korekty lakieru w WM Detail",
        paragraphs: [
          "Pracę zaczynamy od dokładnego umycia i oczyszczenia lakieru z zabrudzeń, aby podczas polerowania nie rysować go resztkami brudu. Następnie oceniamy defekty i mierzymy grubość powłoki lakierniczej, co pozwala bezpiecznie dobrać agresywność zabiegu.",
          "Właściwe polerowanie wykonujemy maszynowo, z użyciem padów i past dobranych do twardości lakieru i rodzaju defektów. Na końcu usuwamy resztki pasty i oceniamy efekt w świetle, które ujawnia ewentualne pozostałości zarysowań.",
        ],
      },
      {
        heading: "Dla kogo jest korekta lakieru",
        paragraphs: [
          "Korekta sprawdza się w autach z zarysowaniami po myjniach automatycznych, w samochodach z matowym lub utlenionym lakierem, przed sprzedażą auta oraz przed aplikacją powłoki ceramicznej. Jest też dobrym pomysłem po zakupie samochodu używanego, gdy chcesz odświeżyć kolor.",
          "Jeśli zależy Ci na dłuższym utrzymaniu efektu, połącz korektę z powłoką ceramiczną. Na stronie głównej i w cenniku znajdziesz orientacyjne widełki obu usług.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje korekta lakieru w Dąbrowie Górniczej?",
        a: `Orientacyjnie: ${describePrices(SERVICE_PRICE_IDS["korekta-lakieru"])}. Zakres i cena zależą od wielkości auta, stanu lakieru i liczby etapów, dlatego wycenę przygotowujemy po obejrzeniu samochodu lub zdjęć.`,
      },
      {
        q: "Czym różni się korekta jednoetapowa od wieloetapowej?",
        a: "Korekta jednoetapowa usuwa lekkie defekty i poprawia połysk. Wieloetapowa jest przeznaczona do aut z wyraźniejszymi zarysowaniami i wymaga więcej pracy, dlatego jest droższa.",
      },
    ],
  },
  "powloki-ceramiczne": {
    sections: [
      {
        heading: "Jak przebiega aplikacja powłoki ceramicznej",
        paragraphs: [
          "Najpierw dokładnie myjemy auto i oczyszczamy lakier z zanieczyszczeń. Jeśli lakier wymaga poprawy, wykonujemy korektę, bo powłoka ma być nałożona na możliwie idealną powierzchnię.",
          "Przed aplikacją odtłuszczamy lakier, a następnie nakładamy powłokę w kontrolowanych warunkach, element po elemencie. Po aplikacji powłoka potrzebuje czasu na utwardzenie, a my przekazujemy zalecenia dotyczące mycia i pielęgnacji w tym okresie.",
        ],
      },
      {
        heading: "Wybór powłoki: 1 rok, 3 lata lub 5 lat",
        paragraphs: [
          "W ofercie mamy powłoki o różnej przewidywanej trwałości: 1-roczne, 3-letnie i 5-letnie. Im dłuższa trwałość, tym wyższa cena, ale też większa odporność i dłuższa ochrona lakieru.",
          "Rodzaj powłoki dobieramy do tego, jak używasz samochodu, gdzie parkujesz i jakiego efektu oczekujesz. Chętnie doradzimy podczas rozmowy telefonicznej lub po obejrzeniu auta.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje powłoka ceramiczna w Dąbrowie Górniczej?",
        a: `Orientacyjne ceny: ${describePrices(SERVICE_PRICE_IDS["powloki-ceramiczne"])}. Cena zależy od wielkości auta oraz zakresu przygotowania lakieru, na przykład od potrzeby korekty.`,
      },
      {
        q: "Czy powłoka ceramiczna ma wady?",
        a: "Nie zabezpiecza przed odpryskami ani głębokimi rysami i wymaga prawidłowego mycia. Za to znacząco ułatwia pielęgnację, zwiększa hydrofobowość i chroni lakier przed codziennymi czynnikami.",
      },
    ],
  },
  "pranie-tapicerki": {
    sections: [
      {
        heading: "Jak wygląda pranie tapicerki krok po kroku",
        paragraphs: [
          "Zaczynamy od dokładnego odkurzenia i oceny zabrudzeń. Plamy traktujemy punktowo odpowiednim środkiem, a następnie wykonujemy pranie ekstrakcyjne, które wypłukuje brud z włókien i od razu odsysa wilgoć.",
          "Pranie obejmuje fotele, kanapę, a w razie potrzeby także podsufitkę i dywaniki. Po zabiegu zalecamy wietrzenie auta, aby tapicerka wyschła jak najszybciej.",
        ],
      },
      {
        heading: "Tapicerka materiałowa i skórzana",
        paragraphs: [
          "Tapicerka materiałowa wymaga prania ekstrakcyjnego, które usuwa kurz i plamy z głębi włókien. Skórę czyścimy innymi środkami, a następnie odżywiamy i impregnujemy, aby była miękka i odporna na zabrudzenia.",
          "Obie usługi mają w cenniku osobne pozycje, więc od razu wiesz, na jaki koszt możesz liczyć. W razie wątpliwości co do materiału prześlij zdjęcia foteli.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje pranie tapicerki samochodowej w Dąbrowie Górniczej?",
        a: `Orientacyjne ceny: ${describePrices(SERVICE_PRICE_IDS["pranie-tapicerki"])}. Cena zależy od zakresu prac i stanu tapicerki, a wycena jest bezpłatna.`,
      },
      {
        q: "Czy da się wyczyścić fotelik dziecięcy?",
        a: "Tak, fotelik można wyczyścić tą samą metodą, o ile materiał na to pozwala. Podaj markę i model przy umawianiu terminu, a ocenimy możliwość czyszczenia.",
      },
    ],
  },
  "mycie-detailingowe": {
    sections: [
      {
        heading: "Co obejmuje mycie detailingowe w WM Detail",
        paragraphs: [
          "Mycie zaczynamy od pre washu, który rozpuszcza i usuwa największe zabrudzenia bez dotykania lakieru. Następnie myjemy auto ręcznie metodą dwóch wiader, osobno czyścimy felgi i opony, a na końcu osuszamy karoserię i wykonujemy dressing opon.",
          "Cena zależy od wielkości samochodu (S, M, L). Jeśli auto jest bardzo brudne lub ma specyficzne wymagania, uwzględniamy to w wycenie.",
        ],
      },
      {
        heading: "Mycie komory silnika",
        paragraphs: [
          "Osobną usługą jest bezpieczne czyszczenie komory silnika połączone z konserwacją plastików. Wykonujemy je ostrożnie, z zabezpieczeniem wrażliwych elementów, aby usunąć brud i oleiste zacieki.",
          "Czysta komora silnika poprawia wygląd auta przy otwartej masce, ułatwia wykrycie ewentualnych wycieków i dobrze wpływa na wrażenie podczas sprzedaży samochodu.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje mycie detailingowe w Dąbrowie Górniczej?",
        a: `Orientacyjne ceny: ${describePrices(SERVICE_PRICE_IDS["mycie-detailingowe"])}. Cena zależy od wielkości auta (S, M, L) i jego stanu.`,
      },
      {
        q: "Czy mogę umówić samo mycie komory silnika?",
        a: "Tak, mycie komory silnika można zamówić osobno albo razem z myciem detailingowym.",
      },
    ],
  },
};

function mergeContent(): Record<string, ServiceContent> {
  const result: Record<string, ServiceContent> = {};
  for (const slug of Object.keys(BASE_CONTENT)) {
    const base = BASE_CONTENT[slug];
    const extra = EXTRA_CONTENT[slug];
    result[slug] = extra
      ? { sections: [...base.sections, ...extra.sections], faq: [...extra.faq.slice(0, 1), ...base.faq, ...extra.faq.slice(1)] }
      : base;
  }
  return result;
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = mergeContent();
