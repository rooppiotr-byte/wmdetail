export type ContentSection = { heading: string; paragraphs: string[] };
export type FaqItem = { q: string; a: string };
export type ServiceContent = { sections: ContentSection[]; faq: FaqItem[] };

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
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
