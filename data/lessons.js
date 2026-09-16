// Treść lekcji: wyjaśnienia do zagadnień z curriculum.js (ta sama kolejność).
// Opcjonalne pole `goals` — cele lekcji wyświetlane na ekranie startowym.

export const LESSONS = {
  strategia: {
    goals: ['Mieć gotowy schemat myślenia zamiast wyuczonej listy kroków', 'Wiedzieć, gdzie postawić mikrofon i po co'],
    steps: [
      {
        t: 'Zanim zaczniesz cokolwiek stroić, sprawdź, czy system w ogóle jest zbudowany poprawnie. Puść sygnał kolejno do każdego podsystemu i posłuchaj: czy lewa strona brzmi tak samo jak prawa, czy nie są zamienione miejscami, czy wszystkie skrzynie grają, czy któraś nie jest cichsza albo ciemniejsza. To brzmi banalnie, a jest najczęstszym źródłem straconego dnia. Analogia: nie zaczynaj tapetowania, zanim nie załatasz dziury w ścianie. Korektor nie naprawi przerwanego kabla, uszkodzonego przetwornika ani zamienionych stron — tylko ukryje problem tak, że wróci w najgorszym momencie.',
      },
      {
        t: 'Pierwsza zasada strojenia: każdy subsystem ma swój rewir. Front fill odpowiada za pierwsze rzędy, tablica główna za środek widowni, wieża delay za tyły. W swoim rewirze — i tylko tam — ustawiasz poziom i barwę. To upraszcza myślenie, bo zamiast pytania „jak brzmi cały system?” zadajesz pytanie „czy ten subsystem robi to, co do niego należy, w swoim obszarze?”. Podział rewirów powstał już na etapie projektu; strojenie tylko go realizuje.',
        viz: 'strefy-odpowiedzialnosci',
      },
      {
        t: 'Druga zasada: czas ustawiasz na szwie, czyli tam, gdzie dwa sąsiednie systemy grają równie głośno. Dlaczego akurat tam? Bo właśnie przy równych poziomach sumowanie jest najbardziej wrażliwe na różnicę czasu — kilka milisekund decyduje o tym, czy dostaniesz wzmocnienie, czy dziurę. Krok w bok od szwu jeden system zaczyna dominować i wpływ tego drugiego szybko maleje. Ważna kolejność: najpierw poziomy, potem czas. Zmiana poziomu przesuwa położenie szwu, więc wyrównanie czasu zrobione wcześniej trzeba byłoby powtarzać.',
      },
      {
        t: 'Trzecia zasada: zaczynasz od systemu o największym rewirze i schodzisz w dół. Najpierw tablice główne razem z subami, bo obsługują najwięcej ludzi i ustalają docelowy charakter brzmienia. Potem kolejno mniejsze subsystemy, które mają ten charakter przywrócić w swoich obszarach. Ta kolejność ma bardzo praktyczny sens: jeśli produkcja skróci Ci czas o połowę, zdążysz obsłużyć miejsca, w których siedzi najwięcej widzów, a nieobsłużone zostaną najmniejsze fragmenty widowni.',
      },
      {
        t: 'Czwarta zasada dotyczy źródeł złożonych, takich jak tablica liniowa. Traktujesz ją dwuetapowo. Najpierw zajmujesz się jednorodnością wewnątrz tablicy — wyrównujesz różnice między skrzyniami w górze pasma, gdzie każda ma swój kawałek widowni. Dopiero gdy tablica jest spójna od pierwszego do ostatniego rzędu, traktujesz ją jako jedno źródło i łączysz z kolejnym systemem, na przykład z subami. To po prostu ponowne zastosowanie zasad pierwszej i drugiej, tyle że wewnątrz jednego urządzenia.',
      },
      {
        t: 'Zostaje pytanie, gdzie stawiać mikrofon pomiarowy. Reguła jest prosta: zanim go postawisz, odpowiedz sobie, na jakie pytanie chcesz odpowiedzieć. Jeśli ustawiasz poziom i barwę subsystemu, mikrofon idzie w głąb jego rewiru — najlepiej kilka pozycji, żeby zobaczyć trend, a nie lokalny przypadek. Jeśli ustawiasz czas, mikrofon idzie dokładnie na szew. Ile pozycji wystarczy? Tyle, po ilu kolejny pomiar przestaje zmieniać Twoje decyzje. Od tego momentu zbieranie danych tylko zjada czas.',
      },
    ],
  },

  mainsub: {
    goals: ['Wyrównać suby z tablicą świadomie', 'Rozumieć, dlaczego idealne jest tylko w jednym miejscu'],
    steps: [
      {
        t: 'Suby i tablica spotykają się w wąskim pasmie, zwykle gdzieś między 60 a 120 Hz. W tym pasmie oba systemy grają podobnie głośno, więc — zgodnie z zasadą szwu — jesteśmy w najbardziej wrażliwym punkcie: wystarczy kilka milisekund różnicy, żeby zamiast wzmocnienia dostać wycięcie dokładnie tam, gdzie siedzi stopa i bas. To dlatego wyrównanie main–sub jest pierwszą rzeczą, którą słychać, gdy jest zrobione dobrze, i pierwszą, którą słychać, gdy zrobione jest źle.',
      },
      {
        t: 'Zacznij od znalezienia miejsca, w którym oba systemy grają równie głośno. Zmierz każdy osobno i porównaj poziomy w pasmie przejścia. Jeśli jeden jest wyraźnie mocniejszy, przesuń mikrofon w stronę tego cichszego i zmierz ponownie. Dopiero gdy poziomy są zbliżone, decyzja o czasie ma sens — i dopiero wtedy ma wpływ na to, co usłyszy publiczność.',
      },
      {
        t: 'Teraz najważniejsza pułapka. Wielu ludzi wyrównuje suby „po piku” odpowiedzi impulsowej — szukają najwyższego szczytu i zrównują czasy. Problem w tym, że pik jest zdominowany przez wysokie częstotliwości, których sub w ogóle nie odtwarza. Właściwym kryterium jest zgodność fazy w pasmie przejścia: patrzysz na wykresy fazy obu systemów i dobierasz opóźnienie tak, żeby w okolicy zwrotnicy biegły równolegle. Wtedy suma jest maksymalna.',
      },
      {
        t: 'Masz do dyspozycji trzy narzędzia. Opóźnienie przesuwa fazę tym mocniej, im wyższa częstotliwość. Odwrócenie polaryzacji obraca ją o pół cyklu na całym paśmie naraz. Filtr all-pass zmienia nachylenie fazy, nie ruszając poziomu. W praktyce zaczynasz od opóźnienia, sprawdzasz, czy odwrócenie polaryzacji nie daje lepszego dopasowania, a all-pass zostawiasz jako precyzyjne dostrojenie, gdy nachylenia faz obu systemów się rozjeżdżają.',
      },
      {
        t: 'Teraz zła wiadomość, z którą trzeba się pogodzić: przy subach na ziemi i tablicy wysoko pod dachem idealne wyrównanie istnieje tylko wzdłuż jednej linii na widowni. Wynika to z geometrii — różnica dróg do obu źródeł zmienia się z każdym metrem w głąb i w bok. Twoim zadaniem nie jest więc „naprawienie wszystkiego”, tylko wybór miejsca, w którym kompromis obsłuży największą część publiczności, i sprawdzenie, jak bardzo psuje się poza nim.',
      },
      {
        t: 'Dlatego po ustawieniu zawsze weryfikujesz w kilku punktach: bliżej sceny, dalej, na bokach. Jeśli w dużej części widowni suma wychodzi gorzej niż same składniki, wróć i zmień punkt odniesienia albo częstotliwość zwrotnicy. Przy pomiarach czasu w pasmie basowym pomocna bywa pozycja mikrofonu na podłodze — eliminuje odbicie od gruntu, przez co wykresy są czytelniejsze w okolicy 200 Hz. Pamiętaj tylko, żeby nie podejmować w tej pozycji decyzji o barwie: nikt nie słucha koncertu z uchem przy posadzce.',
      },
    ],
  },

  filldelay: {
    goals: ['Wpiąć fille i delaye w system bez psucia obrazu', 'Świadomie wybierać punkt decyzji o czasie'],
    steps: [
      {
        t: 'Fill zaczynasz tak samo jak każdy inny subsystem: ustawiasz go w jego własnym rewirze. Mikrofon idzie tam, gdzie fill ma realnie pracować — na przykład w drugim rzędzie dla front fillu — i dopiero tam ustawiasz poziom oraz barwę tak, żeby pasowały do celu, który ustaliłeś przy systemie głównym. Kolejność ma znaczenie: fill nie ma „brzmieć ładnie sam w sobie”, ma przywrócić w swoim obszarze to samo, co system główny robi w swoim.',
      },
      {
        t: 'Potem szukasz szwu z systemem głównym, czyli miejsca, w którym oba grają równie głośno. Najprościej znaleźć je uchem, przechodząc się z mikrofonem, a potwierdzić pomiarem: mierzysz każdy system osobno i patrzysz, czy w górze pasma poziomy się pokrywają. Jeśli nie — przesuwasz mikrofon w stronę cichszego i próbujesz ponownie. To jest punkt, w którym podejmiesz decyzję o opóźnieniu.',
      },
      {
        t: 'Przy ustawianiu opóźnienia wchodzi w grę psychoakustyka. Gdybyś wyrównał czasy idealnie, suma byłaby najlepsza, ale obraz dźwiękowy mógłby przeskoczyć na fill — a publiczność ma słyszeć scenę, nie kolumienkę pod barierką. Dlatego w praktyce dokłada się kilka milisekund ponad wynik geometryczny: dźwięk z systemu głównego dociera pierwszy i wyznacza kierunek, a fill już tylko dodaje poziomu i zrozumiałości.',
      },
      {
        t: 'Zwróć uwagę na barwę w strefie przejścia. System główny dociera tam z dużej odległości, więc powietrze zabrało mu część wysokich częstotliwości. Fill gra z bliska i jest pełny w górze pasma. Jeśli oba zestawisz „na płasko”, przejście będzie słyszalne jako nagła zmiana jasności. Lekkie ściągnięcie góry pasma w fillu robi z przejścia rzecz niesłyszalną — a o to właśnie chodzi.',
      },
      {
        t: 'W przypadku wieży delay szew nie jest linią, tylko szerokim pasem: oba systemy grają podobnie głośno na przestrzeni wielu metrów. Trzeba wtedy świadomie wybrać, w którym miejscu tego pasa podejmujesz decyzję o czasie, i uczciwie przyjąć, że poza nim wyrównanie będzie się psuć. Zwykle wybiera się punkt bliżej wieży, gdzie siedzi więcej ludzi, a resztę pasa kontroluje się poziomem i kierunkowością, żeby był jak najwęższy.',
      },
    ],
  },

  eq: {
    goals: ['Używać korekcji tam, gdzie faktycznie działa', 'Wyrównywać tablicę strefami zamiast na ślepo'],
    steps: [
      {
        t: 'Korektor działa identycznie w każdym miejscu widowni — nie ma pojęcia, gdzie stoisz. Wynika z tego prosta zasada: korygujesz tylko to, co jest wspólne dla całej strefy. Jeśli pomiar w jednym miejscu pokazuje głęboką dziurę, a dwa metry dalej jej nie ma, to nie jest robota dla korektora, tylko skutek interferencji albo odbicia. Próba „zasypania” takiej dziury podbiciem kończy się tym, że w pozostałych miejscach robi się nadmiar.',
      },
      {
        t: 'Dlatego decyzje tonalne podejmuje się na podstawie kilku pomiarów w obrębie rewiru, uśrednionych i wygładzonych. Uśrednianie wycisza lokalne dziwactwa, a zostawia to, co powtarza się wszędzie — czyli rzeczywisty charakter systemu w tej strefie. Dopiero taki uśredniony obraz porównujesz z krzywą docelową.',
      },
      {
        t: 'Sama krzywa docelowa to decyzja, a nie prawo fizyki. Duże systemy koncertowe stroi się zwykle z podniesionym dołem i łagodnie opadającą górą pasma — takie brzmienie odbieramy jako naturalne przy wysokich poziomach. Konkretne nachylenie zależy od gatunku, obiektu i realizatora, dlatego warto mieć własną, zapisaną krzywą odniesienia i konsekwentnie do niej wracać, zamiast za każdym razem zaczynać od zera.',
      },
      {
        t: 'W tablicy liniowej wyrównanie robi się strefami. Dzielisz skrzynie na grupy według tego, w jaki fragment widowni celują: górne rzucają najdalej, środkowe obsługują środek, dolne pierwsze rzędy. Każdą grupę mierzysz w jej obszarze i korygujesz górę pasma osobno — górne zwykle wymagają podbicia, bo powietrze zabrało im wysokie częstotliwości, dolne obniżenia, bo grają z bliska. Skoki między strefami warto wygładzić, rozkładając korektę na sąsiadujące skrzynie, żeby przejście było niesłyszalne.',
        viz: 'zonowanie-tablicy',
      },
      {
        t: 'Cieniować można też poziomem, ale to inne narzędzie. Zmiana poziomu działa na całe pasmo, więc ścisza również bas — a bas w tablicy powstaje ze współpracy wszystkich skrzyń, więc tracisz trochę zapasu w dole i skracasz efektywną długość tablicy. Strata jest mniejsza, niż się wydaje: przy typowym cieniowaniu kilku dolnych skrzyń mówimy o ułamkach decybela zapasu w basie. Uważaj natomiast w systemach z fabrycznym algorytmem kształtowania wiązki — tam zmiany poziomu potrafią zaburzyć obliczenia producenta.',
      },
      {
        t: 'Na koniec zjawisko, które zaskakuje przy dolnych skrzyniach. Stojąc pod tablicą, słyszysz w górze pasma nie tylko skrzynie wycelowane w Ciebie, ale też rozproszoną energię z elementów położonych wyżej. Dlatego ściszanie góry pasma w dolnych skrzyniach działa tylko do pewnego momentu — potem przestaje poprawiać barwę, a zaczyna sprawiać, że dźwięk brzmi odlegle i mniej wyraźnie. Znajdź granicę, przy której cieniowanie przestaje pomagać, cofnij się o decybel i zaakceptuj resztę: odrobina jasności w pierwszych rzędach jest mniejszym złem.',
      },
    ],
  },

  kierunkowosc: {
    goals: ['Rozumieć, czym naprawdę jest „kąt pokrycia”', 'Przewidzieć, jak głośnik zachowa się w różnych pasmach'],
    steps: [
      {
        t: 'Kiedy w katalogu widzisz „90° × 40°”, łatwo wyobrazić sobie ostry snop światła: w środku pełna moc, a tuż za krawędzią cisza. Rzeczywistość jest łagodniejsza. Kąt pokrycia to umowa: mierzymy, gdzie poziom spada o 6 dB względem osi, i to nazywamy krawędzią. Sześć decybeli to mniej więcej „o połowę ciszej w odczuciu ciśnienia” — czyli sporo, ale wciąż dobrze słyszalnie. Poza tą granicą dźwięk nie znika, tylko dalej maleje. Dlatego mówiąc, że kolumna „nie sięga” w któreś miejsce, tak naprawdę mówimy, że tam poziom spadł poniżej umownej granicy — a energia i tak tam trafia i, w pomieszczeniu, wraca do nas jako odbicie.',
      },
      {
        t: 'Teraz rzecz, która zaskakuje najbardziej: ten sam głośnik ma zupełnie inny kąt pokrycia dla różnych częstotliwości. Wyobraź sobie latarkę, która świeci wąsko na niebiesko, szerzej na zielono i rozlewa się na czerwono we wszystkie strony. Tak działa każda skrzynia: wysokie częstotliwości wychodzą wąską wiązką, średnie szerzej, a bas rozchodzi się prawie dookoła. Potwierdzisz to w dwie sekundy — stań za działającą kolumną. Usłyszysz bas i trochę średnicy, ale nie usłyszysz blachy perkusji. Z tego jednego faktu wynika połowa problemów, które rozwiązujesz przy strojeniu: „wycelowanie” skrzyni działa tylko dla górnej części pasma.',
        viz: 'kierunkowosc-pasma',
      },
      {
        t: 'Skąd ta różnica? Żeby cokolwiek skierować falę, przeszkoda albo źródło muszą być duże w porównaniu z długością fali. Dłoń zasłoni strumień wody z kranu, ale nie zatrzyma fali na jeziorze. Tuba o wylocie pół metra jest ogromna dla fali 7-centymetrowej (5 kHz), więc świetnie ją prowadzi. Ta sama tuba jest praktycznie niewidzialna dla fali trzymetrowej (100 Hz), która po prostu ją opływa. To dlatego kierunkowość w basie wymaga wielkich rozmiarów — nie da się jej uzyskać jedną skrzynią, trzeba użyć wielu źródeł i gry czasem, o czym będzie w kolejnych lekcjach.',
      },
      {
        t: 'Żeby nie opisywać tego za każdym razem słowami, używamy dwóch liczb. Współczynnik kierunkowości Q mówi, ile razy więcej energii leci na osi w porównaniu ze źródłem rozsiewającym dookoła. Indeks kierunkowości DI to ta sama informacja w decybelach. Źródło dookólne ma Q = 1 i DI = 0 dB. Głośnik grający w pół przestrzeni ma Q = 2, czyli DI = 3 dB. Typowa skrzynia koncertowa w środku pasma osiąga DI rzędu kilkunastu decybeli. Te liczby przydają się później do liczenia odległości krytycznej i stosunku dźwięku bezpośredniego do pogłosowego w hali.',
        eq: '<math display="block"><mi>DI</mi><mo>=</mo><mn>10</mn><mo>&#8202;</mo><mi>log</mi><mo>&#8202;</mo><mi>Q</mi></math>',
        where: 'DI — indeks kierunkowości [dB]; Q — współczynnik kierunkowości (bezwymiarowy)',
      },
      {
        t: 'Falowód albo tuba to nic innego jak ścianki, które nadają fali kształt, zanim ta wyjdzie w świat. Konstrukcje „o stałej kierunkowości” starają się utrzymać podobny kąt w szerokim paśmie, bo inaczej brzmienie zmieniałoby się w zależności od tego, gdzie stoisz. Ale nawet najlepsza tuba przestaje działać poniżej częstotliwości, dla której jest za mała. Poniżej tej granicy kąt zaczyna się rozszerzać, aż w basie skrzynia gra dookoła. Znajomość tej granicy dla własnych skrzyń to praktyczna wiedza — mówi, od którego momentu w dół musisz kontrolować energię inaczej.',
      },
      {
        t: 'Na koniec o danych. Producenci publikują pełne charakterystyki kierunkowości, tzw. dane balonowe, w formatach, które wczytuje oprogramowanie do predykcji. To setki pomiarów w różnych kierunkach i pasmach — dopiero one opisują skrzynię uczciwie. Jedna liczba z ulotki („90 na 40”) jest jak podanie średniej temperatury w kraju: technicznie prawdziwa, praktycznie bezużyteczna do planowania. Jeśli masz wybierać system do trudnego obiektu, sprawdź w predykcji wykres szerokości wiązki w funkcji częstotliwości. To jeden z niewielu wykresów, które mówią prawdę o tym, jak system zachowa się na widowni.',
      },
    ],
  },

  pointsource: {
    goals: ['Policzyć, ile decybeli różnicy robi sam dystans', 'Dobierać kąty między skrzyniami świadomie'],
    steps: [
      {
        t: 'Zacznijmy od najprostszej prawdy o dźwięku w otwartej przestrzeni: im dalej, tym ciszej — i to w bardzo konkretnym tempie. Pojedyncze źródło traci 6 decybeli za każdym podwojeniem odległości. Z 5 metrów na 10 metrów to −6 dB, z 10 na 20 kolejne −6 dB. Powód jest czysto geometryczny: ta sama energia rozkłada się na coraz większą kulę. Wyobraź sobie, że malujesz balon stałą ilością farby — im większy balon, tym cieńsza warstwa. Nic się nie „gubi”, po prostu rozkłada się szerzej.',
        eq: '<math display="block"><mi>&#916;</mi><mi>L</mi><mo>=</mo><mn>20</mn><mo>&#8202;</mo><mi>log</mi><mfrac><msub><mi>d</mi><mn>2</mn></msub><msub><mi>d</mi><mn>1</mn></msub></mfrac></math>',
        where: 'ΔL — zmiana poziomu [dB]; d₁, d₂ — odległości od źródła [m]; wynik ujemny oznacza spadek',
      },
      {
        t: 'Ten wzór daje Ci najważniejszą liczbę na starcie każdego projektu: ile decybeli różnicy między pierwszym a ostatnim rzędem wynika z samej geometrii. Jeśli pierwszy rząd jest 5 metrów od systemu, a ostatni 50 metrów, to stosunek wynosi 1:10, czyli 20 dB. Oznacza to, że jeśli z tyłu jest komfortowo, z przodu jest niebezpiecznie głośno — albo odwrotnie. Cała sztuka projektowania polega na tym, żeby tę różnicę zredukować do wartości, którą sam wybierasz. I uwaga: celem nie jest zero. Ludzie kupujący bilety pod scenę chcą czegoś innego niż ci z tyłu, a lekki spadek poziomu w głąb widowni jest naturalny i pożądany. Typowo dąży się do kilku decybeli, nie do idealnej równości.',
        viz: 'zakres-odleglosci',
      },
      {
        t: 'Jak więc zmniejszyć tę różnicę? Nie poziomem — ten podnosi wszystko naraz. Zmniejsza się ją geometrią: dokładając źródła obsługujące dalsze rzędy, celując je precyzyjnie i dobierając kąty tak, żeby bliskie miejsca dostawały tylko krawędź wiązki, a dalekie jej środek. To fundament, na którym opierają się i tablice liniowe, i systemy delay, i wszystkie fille. Zapamiętaj zasadę: różnicę poziomów pokonuje się rozkładem energii, a nie mocą.',
      },
      {
        t: 'Gdy ustawiasz obok siebie dwie skrzynie, pojawia się pytanie o kąt między nimi. Klasyczne rozwiązanie mówi: rozwarcie równe kątowi pokrycia. Wtedy krawędzie obu wiązek — miejsca o poziomie −6 dB — spotykają się w jednym punkcie i sumują z powrotem do poziomu zbliżonego do osi. Powstaje płynne przejście bez dziury i bez nadmiaru. Jeśli zrobisz kąt mniejszy, wiązki mocno na siebie nachodzą: w środku będzie głośniej, ale w szerokim obszarze pojawi się interferencja. Jeśli większy — między skrzyniami powstanie wyraźnie cichszy pas.',
      },
      {
        t: 'Dlaczego nakładanie bywa groźne, skoro daje więcej decybeli? Bo suma dwóch źródeł zależy od różnicy czasu dotarcia, a ta zmienia się z każdym krokiem w bok. Dopóki różnica faz między źródłami mieści się mniej więcej w jednej trzeciej cyklu, sumowanie jest korzystne. Gdy przekroczy tę granicę, zaczyna się odejmowanie. Kłopot w tym, że ta sama różnica drogi oznacza zupełnie inną fazę dla basu i dla góry pasma. Pół metra różnicy to drobiazg dla 100 Hz, ale kilka pełnych cykli dla 4 kHz. Dlatego w górze pasma pilnujemy, żeby wiązki się nie nakładały, a w basie spokojnie pozwalamy im się sumować — tam i tak nie mamy wyboru.',
      },
    ],
  },

  linearray: {
    goals: ['Zrozumieć, dlaczego tablica działa inaczej w basie i w górze pasma', 'Świadomie dobierać długość i kąty'],
    steps: [
      {
        t: 'Tablica liniowa wygląda jak jedna wielka kolumna, ale w rzeczywistości pracuje na dwa zupełnie różne sposoby jednocześnie. W górze pasma każda skrzynia ma bardzo wąską wiązkę pionową i obsługuje swój kawałek widowni — tu kierujesz energię tak, jak kierowałbyś reflektorem: po prostu celując. W basie skrzynie nie mają żadnej kierunkowości, więc wszystkie grają wszędzie i o kształcie pokrycia decyduje coś innego: sumowanie i wzajemne opóźnienia. Jedno urządzenie, dwa mechanizmy — w górze rządzi poziom, w dole rządzi czas.',
        viz: 'pokrycie-tablicy',
      },
      {
        t: 'Przyjrzyjmy się dolnemu mechanizmowi, bo jest mniej oczywisty. Ustaw sześć subwooferów w szereg. Na wprost szeregu fale ze wszystkich skrzyń docierają do słuchacza niemal równocześnie, więc pięknie się sumują. Ale idąc w bok, zaczynasz być bliżej jednych skrzyń, a dalej od innych: dotarcia rozjeżdżają się w czasie i sumowanie przestaje działać. Efekt jest taki, że energia koncentruje się na wprost, a z boków ubywa. Powstała kierunkowość nie wzięła się z kształtu obudowy, tylko z gry czasem między wieloma źródłami.',
      },
      {
        t: 'Teraz najważniejszy wniosek praktyczny, który wielu ludzi zaskakuje. O szerokości tej wiązki decyduje **długość szeregu**, a nie liczba skrzyń. Jeśli w ten sam odcinek wstawisz więcej, mniejszych skrzyń, dostaniesz więcej decybeli, ale dokładnie ten sam kąt. Jeśli tę samą liczbę skrzyń rozciągniesz na dłuższym odcinku, kąt się zwęzi. Długość działa zawsze w odniesieniu do długości fali: szereg o długości jednej fali danej częstotliwości daje określony kąt, a dla częstotliwości dwa razy wyższej ten sam szereg jest dwa razy dłuższy „w falach”, więc wiązka jest dwa razy węższa.',
        viz: 'dlugosc-linii',
      },
      {
        t: 'Stąd bierze się sposób, w jaki układa się kąty w tablicy. Górne skrzynie mają najdalej do pokonania, więc ustawia się je prawie płasko i pod małymi kątami względem siebie. Małe kąty oznaczają, że kilka skrzyń oświetla ten sam daleki obszar i ich energia się sumuje — dokładnie tego potrzebujemy, żeby ostatni rząd usłyszał tyle samo co dziesiąty. Im niżej w tablicy, tym bliżej jest publiczność i tym większe kąty: energia jednej skrzyni w zupełności wystarcza, a rozwarcie zapobiega nadmiarowi poziomu pod sceną. Krzywizna tablicy to więc nie estetyka, tylko rozkład mocy w przestrzeni.',
      },
      {
        t: 'To prowadzi do bardzo praktycznej konsekwencji przy strojeniu. Siedząc na widowni, słuchasz w górze pasma kilku skrzyń — tych, których wiązki Cię obejmują — ale w basie słuchasz całej tablicy naraz. Dlatego nadmiar wysokich częstotliwości w pierwszych rzędach możesz spokojnie skorygować, ściszając górę pasma w dolnych skrzyniach: reszta widowni tego nie zauważy, bo obsługują ją inne elementy. Natomiast nadmiaru basu pod sceną nie naprawisz, ściszając bas w dolnych skrzyniach — bas dociera tam z całej tablicy, więc korekta w kilku skrzyniach zmieni niewiele, a popsuje bilans gdzie indziej.',
      },
      {
        t: 'Zostaje pytanie, dlaczego tablica, w której skrzynie celowo na siebie nachodzą, nie brzmi jak jedno wielkie pasmo interferencji. Odpowiadają za to dwie rzeczy. Po pierwsze, falowody są zaprojektowane tak, by źródła dźwięku sąsiednich skrzyń leżały jak najbliżej siebie — im mniejsze przesunięcie, tym mniejsza różnica czasu. Po drugie, wiązka pionowa pojedynczej skrzyni jest bardzo wąska: zanim odejdziesz w pionie na tyle daleko, żeby zebrać groźną różnicę czasu, wypadasz już z zasięgu sąsiedniej skrzyni. To dlatego tablica z fabrycznych elementów działa, a „domowa tablica” ze zwykłych szerokopasmowych skrzyń ustawionych jedna na drugiej brzmi źle — tam wiązki są szerokie, więc słuchacz zbiera energię z wielu skrzyń o dużych różnicach czasu.',
      },
    ],
  },

  suby: {
    goals: ['Zaprojektować układ subów pod konkretną scenę', 'Policzyć rozstaw i opóźnienie kardioidy'],
    steps: [
      {
        t: 'Subwoofer to skrzynia, która gra praktycznie we wszystkie strony. Nie da się jej „wycelować”, bo przy falach długich na kilka metrów obudowa jest za mała, by cokolwiek osłonić. Konsekwencje znasz z pracy: bas na scenie potrafi być głośniejszy niż na widowni, mikrofony zbierają dudnienie, a sąsiedzi za płotem słyszą głównie stopę. Skoro pojedyncza skrzynia nie ma kierunkowości, trzeba ją zbudować — z kilku źródeł i z precyzyjnie dobranych opóźnień.',
      },
      {
        t: 'Pierwszy sposób już znasz z tablicy: szereg. Ustawione w linii suby zawężają wiązkę w płaszczyźnie tej linii, a o kącie decyduje długość szeregu w stosunku do długości fali. Rząd subów rozciągnięty wzdłuż sceny zwęża pokrycie w poziomie i mocniej „strzela” na wprost. To samo zjawisko, gdy podwiesisz suby pionowo, zawęża wiązkę w pionie — mniej energii leci w sufit i w podłogę, więcej w publiczność. Ograniczeniem jest rozstaw: gdy odstępy między skrzyniami stają się porównywalne z połową długości fali, zamiast jednej wiązki pojawiają się dodatkowe listki boczne.',
      },
      {
        t: 'Drugi sposób to układ end-fire, czyli szereg skierowany w stronę publiczności. Działa jak sztafeta: tylna skrzynia startuje pierwsza, a przednia odpala dokładnie w chwili, gdy fala z tylnej do niej dociera. Do przodu obie fale maszerują razem i się wzmacniają. Do tyłu jest odwrotnie: energia z przedniej skrzyni wraca spóźniona podwójnie — raz przez opóźnienie elektroniczne, raz przez drogę — więc spotyka falę z tylnej skrzyni w przeciwfazie i wygasza ją. Rozstaw dobiera się jako mniej więcej ćwierć długości fali częstotliwości, na której zależy nam najbardziej.',
        eq: '<math display="block"><mi>&#916;</mi><mi>t</mi><mo>=</mo><mfrac><mi>s</mi><mi>c</mi></mfrac><mspace width="1.6em"/><mi>s</mi><mo>≈</mo><mfrac><mi>&#955;</mi><mn>4</mn></mfrac></math>',
        where: 'Δt — opóźnienie skrzyni przedniej [s]; s — rozstaw środków akustycznych [m]; c — prędkość dźwięku [m/s]; λ — długość fali częstotliwości projektowej [m]',
        viz: 'kardioida-subow',
      },
      {
        t: 'Trzeci sposób to układ gradientowy, spotykany jako „stack kardioidalny”: dwie lub trzy skrzynie, z których jedna jest odwrócona tyłem do publiczności. Tutaj logika jest odwrotna niż w end-fire — układ stroi się „od tyłu”. Opóźniasz skrzynię tak, żeby za zestawem obie fale spotkały się w tej samej chwili, a następnie odwracasz jej polaryzację. Efekt: z tyłu fale się znoszą, a z przodu, dzięki sumie opóźnienia i różnicy drogi, i tak się dodają. Odwrócenie skrzyni samo w sobie niczego nie kieruje — chodzi o to, że przesuwa jej źródło dźwięku w głąb, tworząc potrzebną różnicę drogi.',
      },
      {
        t: 'Pozostaje klasyczny problem dużych scen: suby ustawione w dwóch stosach po bokach tworzą wzór interferencji na widowni. Na osi symetrii fale spotykają się zgodnie i powstaje głośny korytarz — „power alley” — a obok niego pasma wyraźnie cichsze, w dodatku różne dla różnych częstotliwości. Rozwiązania są dwa. Fizyczne: rozłożyć suby w ciągły szereg wzdłuż sceny albo ustawić je centralnie. Elektroniczne: zbudować wirtualny łuk, opóźniając skrzynie w środku szeregu tak, jakby stały na okręgu, co rozszerza pokrycie i rozbija korytarz.',
      },
      {
        t: 'Na koniec dwie rzeczy, które decydują o powodzeniu w terenie. Po pierwsze, w obliczeniach liczy się odległość między źródłami dźwięku, a nie między obudowami — mierzysz od membrany do membrany albo od frontu do frontu, konsekwentnie. Po drugie, rzeczywiste opóźnienie w układzie gradientowym bywa większe, niż wynika z geometrii, bo fala z przodu musi opłynąć obudowę, zanim pojawi się z tyłu. Dlatego układy kardioidalne zawsze weryfikuje się pomiarem, a fabryczne presety producenta — jeśli istnieją — są dobrym punktem startu, bo mają tę korektę już policzoną.',
      },
    ],
  },

  fale: {
    goals: ['Rozumieć, czym fizycznie jest dźwięk', 'Liczyć długość fali, okres i fazę bez kalkulatora w głowie'],
    steps: [
      {
        t: 'Wyobraź sobie długi sznur korali leżący na stole. Popychasz pierwszy koralik — uderza w drugi, ten w trzeci i tak dalej. Zaburzenie przebiega przez cały sznur, ale żaden koralik nie przewędrował na drugi koniec stołu; każdy tylko szturchnął sąsiada i wrócił na miejsce. Dokładnie tak działa dźwięk w powietrzu. Membrana głośnika popycha cząsteczki powietrza tuż przed sobą, te napierają na kolejne i zaburzenie ciśnienia biegnie dalej z prędkością ok. 343 m/s. Powietrze nie „leci” od sceny do publiczności — gdyby leciało, na koncercie wiałby huragan. Wędruje wyłącznie informacja: naprzemienne zagęszczenia i rozrzedzenia. To dlatego dźwięk potrzebuje ośrodka: w próżni nie ma czego szturchać.',
        viz: 'fala-w-powietrzu',
      },
      {
        t: 'Prędkość, z jaką biegnie to zaburzenie, zależy przede wszystkim od temperatury powietrza — a nie, wbrew intuicji, od głośności czy od tego, jak mocno napierasz na głośnik. Cieplejsze powietrze to szybciej poruszające się cząsteczki, więc szturchnięcie przekazuje się sprawniej. Praktyczna reguła: przy 20°C dźwięk pokonuje 343 metry w sekundę, a każdy stopień w górę dokłada ok. 0,6 m/s. Wilgotność ma wpływ pomijalny dla prędkości, choć — co zobaczysz przy plenerze — spory dla tłumienia wysokich częstotliwości. Ten jeden wzór przewija się potem przez cały Twój dzień pracy: liczysz z niego opóźnienia, długości fal i rozstawy subwooferów.',
        eq: '<math display="block"><mi>c</mi><mo>≈</mo><mn>331,3</mn><mo>+</mo><mn>0,606</mn><mo>&#8202;</mo><mi>T</mi></math>',
        where: 'c — prędkość dźwięku [m/s]; T — temperatura powietrza [°C]',
      },
      {
        t: 'Skoro fala biegnie ze stałą prędkością i jednocześnie faluje w górę i w dół, to jedno pełne „huśtnięcie” zajmuje pewien odcinek przestrzeni. Ten odcinek to długość fali. Analogia: jedziesz samochodem ze stałą prędkością i co sekundę mrugasz światłami — mrugnięcia zostawią ślady co kilkadziesiąt metrów. Mrugaj dziesięć razy szybciej, a ślady będą dziesięć razy gęściej. Tak samo z dźwiękiem: 50 Hz daje falę długą na blisko siedem metrów, a 5 kHz — na siedem centymetrów. Ta różnica wyjaśnia niemal wszystko, co robisz z systemem. Bas obchodzi przeszkody i wchodzi wszędzie, bo przeszkoda wielkości człowieka jest dla siedmiometrowej fali niewidoczna. Górę pasma da się natomiast celować jak światłem latarki, bo tuba o rozmiarze pół metra jest dla siedmiocentymetrowej fali wielką ścianą.',
        eq: '<math display="block"><mi>&#955;</mi><mo>=</mo><mfrac><mi>c</mi><mi>f</mi></mfrac></math>',
        where: 'λ — długość fali [m]; c — prędkość dźwięku [m/s]; f — częstotliwość [Hz]',
        viz: 'dlugosc-fali',
      },
      {
        t: 'Częstotliwość mówi, ile razy w ciągu sekundy fala wykona pełny cykl — stąd herce, czyli „razy na sekundę”. Okres to ta sama informacja odwrócona: ile czasu trwa jeden cykl. Jeśli coś powtarza się sto razy na sekundę, jeden cykl trwa setną część sekundy, czyli 10 ms. Warto mieć w głowie kilka takich par, bo wracają nieustannie: 1000 Hz to 1 ms, 100 Hz to 10 ms, 50 Hz to 20 ms. Kiedy ktoś mówi „przesunąłem sub o 5 milisekund”, od razu wiesz, że dla 100 Hz to pół cyklu, czyli odwrócenie fazy, a dla 1 kHz aż pięć pełnych cykli. Ta zamiana czasu na cykle jest odruchem, który odróżnia osobę rozumiejącą system od osoby przesuwającej suwaki na wyczucie.',
        eq: '<math display="block"><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mi>f</mi></mfrac></math>',
        where: 'T — okres, czyli czas jednego cyklu [s]; f — częstotliwość [Hz]',
      },
      {
        t: 'Faza to sposób opisania, w którym miejscu cyklu aktualnie jesteśmy — jak wskazówka na tarczy zegara, gdzie pełny obrót to 360 stopni. Teraz najważniejsza konsekwencja: stałe opóźnienie w milisekundach oznacza zupełnie różne przesunięcie fazy dla różnych częstotliwości. Wyobraź sobie dwie karuzele, dużą i małą, kręcące się z różną prędkością. Zatrzymujesz obie na dwie sekundy: mała zdąży wykonać kilka obrotów, duża ledwie drgnie. Opóźnienie 1 ms to dla 1 kHz pełny obrót (360°), dla 250 Hz ćwierć obrotu (90°), a dla 50 Hz ledwie 18°. Dlatego wyrównanie systemu „na oko po pikach” działa dla góry pasma i zawodzi w basie — i dlatego mierzy się fazę, a nie tylko amplitudę.',
        eq: '<math display="block"><mi>&#966;</mi><mo>=</mo><mn>360</mn><mo>&#8202;</mo><mi>f</mi><mo>&#8202;</mo><mi>&#916;</mi><mi>t</mi></math>',
        where: 'φ — przesunięcie fazy [°]; f — częstotliwość [Hz]; Δt — opóźnienie [s]',
        viz: 'faza-opoznienie',
      },
      {
        t: 'Na koniec rzecz, która zaskakuje wielu początkujących: system wyrównany w południe może być rozstrojony wieczorem, choć nikt niczego nie dotknął. Powód jest prozaiczny — spadła temperatura, więc dźwięk zwolnił, a wszystkie czasy przelotu się wydłużyły. Przy wieży delay stojącej 100 metrów od sceny ochłodzenie o 10 stopni wydłuża czas przelotu o ok. 5 ms. Dla 100 Hz to połowa cyklu, czyli różnica między „dodaje się” a „znosi się”. Dlatego na dużych plenerach notuje się temperaturę przy strojeniu, a przed koncertem sprawdza się ją ponownie. To samo dotyczy hal, w których klimatyzacja pracuje inaczej przy pustej i pełnej widowni.',
      },
    ],
  },

  db: {
    goals: ['Czytać decybele bez wkuwania tabelek', 'Nie mylić skal: SPL, dBu, dBFS'],
    steps: [
      {
        t: 'Decybel nie jest „ilością dźwięku”, tylko porównaniem dwóch wielkości — zawsze czegoś do czegoś. To jak powiedzenie „dwa razy więcej”: bez informacji, więcej od czego, zdanie nie ma sensu. Dlatego sam zapis „30 dB” znaczy tyle co „trzydzieści decybeli różnicy”, a dopiero dopisek w rodzaju dB SPL, dBu czy dBFS mówi, względem czego mierzymy. Skala jest logarytmiczna, bo ucho i cała przyroda reagują na stosunki, nie na różnice. Dwa razy większe ciśnienie to zawsze te same +6 dB, niezależnie od tego, czy zaczynamy od szeptu, czy od ściany dźwięku na festiwalu.',
      },
      {
        t: 'Skąd biorą się magiczne liczby, które co chwilę słyszysz w branży? Podwojenie napięcia albo ciśnienia to +6 dB. Podwojenie mocy to +3 dB, bo moc rośnie z kwadratem napięcia. A subiektywne „dwa razy głośniej” to mniej więcej +10 dB, czyli dziesięciokrotny wzrost mocy. Stąd bierze się rozczarowanie inwestorów: dołożenie drugiego takiego samego wzmacniacza daje +3 dB, czyli zmianę ledwie zauważalną, a nie „dwa razy głośniejszy koncert”. Żeby publiczność faktycznie usłyszała podwojenie głośności, potrzeba dziesięciokrotnie większej mocy albo — znacznie taniej — lepszej kierunkowości i celniejszego pokrycia.',
        eq: '<math display="block"><mi>L</mi><mo>=</mo><mn>20</mn><mo>&#8202;</mo><mi>log</mi><mfrac><msub><mi>p</mi><mn>1</mn></msub><msub><mi>p</mi><mn>0</mn></msub></mfrac><mspace width="1.4em"/><mi>L</mi><mo>=</mo><mn>10</mn><mo>&#8202;</mo><mi>log</mi><mfrac><msub><mi>P</mi><mn>1</mn></msub><msub><mi>P</mi><mn>0</mn></msub></mfrac></math>',
        where: 'p — ciśnienie lub napięcie (wielkości „polowe”, mnożnik 20); P — moc (mnożnik 10); indeks 0 oznacza wartość odniesienia',
        viz: 'skala-db',
      },
      {
        t: 'Teraz punkty odniesienia, bo tu rodzi się najwięcej pomyłek. dB SPL odnosi się do ciśnienia 20 mikropaskali, czyli mniej więcej najcichszego dźwięku, jaki słyszy zdrowe ucho — to skala „ile dźwięku jest w powietrzu”. dBu i dBV to świat elektryczny: napięcie w kablu, odpowiednio względem 0,775 V i 1 V. dBFS to świat cyfrowy, gdzie zero jest na samej górze skali i wszystko poniżej ma wartość ujemną, bo powyżej zera konwerter nie ma już zapasu. Te trzy światy łączą się w konkretnych urządzeniach: konwerter może mieć 0 dBFS odpowiadające +24 dBu, a głośnik przy określonym napięciu wytwarza określone SPL. Mylenie skal to najczęstsza przyczyna sytuacji „limiter pracuje, a system gra cicho”.',
      },
      {
        t: 'Mikrofon mierzy uczciwie całe pasmo, ale ucho tak nie działa — na niskie częstotliwości jest dużo mniej czułe, szczególnie przy cichych dźwiękach. Żeby miernik lepiej odwzorowywał wrażenie, stosuje się filtry ważące. Waga A mocno obcina bas i jest podstawą przepisów o hałasie. Waga C jest prawie płaska i dlatego lepiej opisuje energię subów na koncercie. Prosty trik warsztatowy: odejmij LAeq od LCeq. Jeśli różnica sięga kilkunastu decybeli, wiesz, że w miksie jest bardzo dużo basu — nawet jeśli pomiar „w wadze A” wygląda niewinnie. Ta jedna liczba potrafi wyjaśnić, dlaczego mieszkańcy dzwonią ze skargą, choć formalnie limit nie jest przekroczony.',
      },
      {
        t: 'Poziom zmienia się w czasie, więc trzeba umówić się, jak go uśredniamy. Leq to poziom równoważny: energia uśredniona po określonym czasie, tak jakby cały koncert grał równo. LAeq,15min oznacza więc „średnia energetyczna z piętnastu minut, z wagą A”. LCpeak to zupełnie co innego — najwyższa chwilowa wartość szczytowa, istotna dla ryzyka urazu słuchu od pojedynczego huku. Rozumienie różnicy jest praktyczne: limit określony jako średnia pozwala na chwilowe głośne momenty, o ile reszta jest cichsza. Dlatego monitoring SPL na festiwalu to nie jedna liczba na wyświetlaczu, tylko okno czasowe, waga i miejsce pomiaru — i to wszystko musi być zapisane w raporcie.',
      },
      {
        t: 'Ostatnia para pojęć: wartość szczytowa i skuteczna. Szczyt to najwyższy wierzchołek fali, RMS to wartość odpowiadająca realnej energii — coś jak różnica między najwyższą falą na morzu a średnim poziomem wody. Ich różnica w decybelach to współczynnik szczytu. Czysty sinus ma 3 dB, szum różowy ok. 12 dB, a żywa muzyka nierzadko kilkanaście i więcej. To wyjaśnia, dlaczego system, który „wyrabia” przy sinusie, potrafi się zapchać przy perkusji: wzmacniacz musi mieć zapas napięcia na chwilowe szczyty, choć średnia moc jest niewielka. Stąd bierze się cała filozofia headroomu i limiterów ustawianych osobno na energię i na szczyty.',
      },
    ],
  },

  sumowanie: {
    goals: ['Przewidzieć, co zrobią dwa głośniki grające to samo', 'Rozumieć, skąd biorą się dziury w paśmie'],
    steps: [
      {
        t: 'Wyobraź sobie dwie osoby popychające huśtawkę. Jeśli popychają równo w rytm, huśtawka rozbuja się dwa razy mocniej. Jeśli jedna popycha, gdy druga ciągnie, huśtawka stanie w miejscu — mimo że obie ciężko pracują. Dwa głośniki grające ten sam sygnał zachowują się identycznie. Gdy ich fale docierają do słuchacza „w nogę”, ciśnienie się sumuje i robi się o 6 dB głośniej. Gdy docierają w przeciwfazie, znoszą się do ciszy. I tu sedno: o tym, który wariant zobaczysz, decyduje wyłącznie różnica drogi, jaką fale pokonały. Przesunięcie słuchacza o metr w bok potrafi zamienić sumowanie w odejmowanie.',
        viz: 'sumowanie-fal',
      },
      {
        t: 'Nie wszystkie sygnały zachowują się tak dramatycznie. Kluczowe jest to, czy są skorelowane, czyli czy to ten sam sygnał. Dwa głośniki grające tę samą stopę są skorelowane i mogą się dodać do +6 dB albo wyciąć do zera. Ale gitara z jednej strony sceny i wokal z drugiej to sygnały niezależne — sumują się energetycznie, spokojnie, dając +3 dB, bez żadnych dziur. Tak samo zachowuje się pogłos w hali i gwar publiczności. Dlatego to samo pytanie „ile będzie głośniej, gdy dołożę drugi głośnik?” ma dwie różne odpowiedzi i zawsze trzeba zacząć od ustalenia, czy oba grają dokładnie to samo.',
        eq: '<math display="block"><msub><mi>L</mi><mi>suma</mi></msub><mo>=</mo><mn>10</mn><mo>&#8202;</mo><mi>log</mi><mo>(</mo><msup><mn>10</mn><mfrac><msub><mi>L</mi><mn>1</mn></msub><mn>10</mn></mfrac></msup><mo>+</mo><msup><mn>10</mn><mfrac><msub><mi>L</mi><mn>2</mn></msub><mn>10</mn></mfrac></msup><mo>)</mo></math>',
        where: 'wzór dla sygnałów nieskorelowanych: dwa równe źródła dają +3 dB; dla sygnałów skorelowanych w fazie sumują się ciśnienia, co daje +6 dB',
      },
      {
        t: 'Skoro dla jednej częstotliwości fale trafiają „w nogę”, a dla innej w przeciwfazę, to w całym paśmie powstaje regularny wzór wzmocnień i wycięć. Nazywamy go filtrem grzebieniowym, bo na wykresie wygląda jak grzebień. Pierwsza dziura pojawia się tam, gdzie różnica drogi odpowiada połowie cyklu, a kolejne w równych odstępach. Im większe opóźnienie między dwiema drogami dźwięku, tym gęstsze zęby grzebienia. To nie jest usterka sprzętu — tak zachowuje się fizyka zawsze, gdy ten sam dźwięk dociera dwiema drogami: z głośnika i z odbicia od podłogi, z dwóch kolumn front fill, z main i z delaya.',
        eq: '<math display="block"><msub><mi>f</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo>&#8202;</mo><mi>&#916;</mi><mi>t</mi></mrow></mfrac><mspace width="1.2em"/><mi>odstęp</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>&#916;</mi><mi>t</mi></mrow></mfrac></math>',
        where: 'f₁ — pierwsze wycięcie [Hz]; Δt — różnica czasu dotarcia obu sygnałów [s]',
        viz: 'filtr-grzebieniowy',
      },
      {
        t: 'Skoro interferencji nie da się wyłączyć, trzeba ją osłabić — i tu przychodzi z pomocą różnica poziomów. Wróćmy do huśtawki: jeśli jedna osoba popycha z całej siły, a druga tylko muska palcem, to niezależnie od rytmu wynik będzie prawie taki sam. Podobnie z głośnikami: gdy jeden jest o 10 dB głośniejszy od drugiego, wahania wynoszą już tylko ok. +2,4 / −3,3 dB zamiast dramatycznych dziur. Przy 20 dB różnicy efekt jest praktycznie niesłyszalny. Dlatego w projekcie dąży się do tego, żeby w każdym miejscu widowni jeden subsystem wyraźnie dominował, a strefy, w których dwa grają po równo, były jak najwęższe.',
      },
      {
        t: 'Z tego rodzi się prosty sposób patrzenia na widownię. Są miejsca, gdzie dominuje jedno źródło — tam jest spokojnie i przewidywalnie; nazwijmy je strefą izolacji. Są miejsca, gdzie dwa źródła grają po równo i trwa przeciąganie liny — to strefa przejścia, w której zobaczysz największe wahania w paśmie. I są miejsca, gdzie różnice czasu są znikome, więc sumowanie jest czystym zyskiem. Dobry projekt polega na tym, żeby strefy przejścia były wąskie i wypadały tam, gdzie mniej przeszkadzają, a nie na próbie usunięcia ich EQ — korektor działa tak samo w całej strefie, a dziura jest tylko w jej części.',
      },
      {
        t: 'Na końcu zostaje wybór, który będziesz podejmował przy każdym projekcie: moc czy jednorodność. Mocne nakładanie kilku elementów daje więcej decybeli, ale też szerokie strefy interferencji i „dziurawe” brzmienie w ruchu. Duża izolacja daje równe, spokojne pokrycie, ale wymaga więcej elementów i precyzji w kątach. Line array to świadomie kontrolowana interferencja: elementy nakładają się w ściśle policzony sposób. Dobrze zaprojektowane front fille to z kolei przykład izolacji — każdy obsługuje swój wycinek pierwszego rzędu i prawie nie wchodzi sąsiadowi w drogę.',
      },
    ],
  },

  sluch: {
    goals: ['Stosować efekt pierwszeństwa przy fills i delay', 'Uwzględniać percepcję przy decyzjach tonalnych'],
    steps: [
      'Krzywe jednakowej głośności (ISO 226) pokazują, jaki poziom SPL w funkcji częstotliwości odbierany jest jako jednakowo głośny. Przy niskich poziomach ucho jest bardzo nieczułe na LF i trochę na skrajne HF; przy wysokich poziomach krzywe się spłaszczają. Dlatego ten sam miks brzmi „chudo” po ściszeniu.',
      'Efekt pierwszeństwa: gdy ten sam dźwięk dociera z dwóch kierunków z opóźnieniem kilku–kilkudziesięciu ms, lokalizujemy go w kierunku pierwszego frontu, nawet jeśli późniejszy jest nieco głośniejszy (w pewnym zakresie). To fundament działania delay i fillów z zachowaniem obrazu na scenie.',
      'Powyżej pewnego opóźnienia (zależnie od sygnału — dla perkusyjnych krócej, dla mowy i muzyki legato dłużej, orientacyjnie kilkadziesiąt ms) dwa fronty przestają się zlewać i słyszymy echo. Im głośniejszy późniejszy sygnał, tym wcześniej echo staje się słyszalne.',
      'ITD (różnica czasu międzyusznego) dominuje w lokalizacji LF, bo długie fale obchodzą głowę bez cienia. ILD (różnica poziomu) dominuje w HF, gdzie głowa tworzy cień akustyczny. Małżowina dodaje wskazówki spektralne dla elewacji i przód/tył.',
      'Maskowanie częstotliwościowe: głośny dźwięk ukrywa cichsze składowe w pobliskich pasmach, szczególnie powyżej swojej częstotliwości. Maskowanie czasowe działa krótko przed i dłużej po głośnym zdarzeniu. Ma to wpływ na zrozumiałość i na to, co naprawdę słyszysz, porównując warianty strojenia.',
      'Po długiej ekspozycji na wysoki SPL próg słyszenia tymczasowo rośnie (TTS), zwłaszcza w okolicy 3–6 kHz. Decyzje tonalne podejmowane pod koniec głośnego dnia mają tendencję do nadmiernego podbijania HF. Strojenie najlepiej robić wypoczętym słuchem, przy umiarkowanych poziomach i z przerwami.',
      'Ucho nie analizuje widma w sposób ciągły, tylko zestawem nakładających się filtrów — pasm krytycznych. Ich szerokość rośnie z częstotliwością; w okolicy 1 kHz to rząd 160 Hz. Wszystko, co dzieje się wewnątrz jednego pasma krytycznego, zlewa się w jedno wrażenie barwy — dlatego gęste wycięcia filtru grzebieniowego w HF słyszymy jako zmianę brzmienia, a nie jako oddzielne dziury.',
      'Ucho jest układem nieliniowym. Przy wysokich poziomach generuje własne harmoniczne oraz tony sumacyjne i różnicowe, których w sygnale nie ma. To zjawisko fizjologiczne, niemierzalne mikrofonem — dlatego dwie osoby mogą inaczej opisywać bardzo głośny materiał, a pomiar niczego takiego nie pokaże.',
      'Przewód słuchowy jest rurą zamkniętą błoną bębenkową i zachowuje się jak rezonator ćwierćfalowy, dając podbicie rzędu kilkunastu decybeli w okolicy 2–4 kHz. Mózg traktuje tę stałą charakterystykę jako neutralną, ale to jeden z powodów, dla których jesteśmy tak wrażliwi na korekcje w tym właśnie zakresie.',
    ],
  },

  gain: {
    goals: ['Zaprojektować strukturę wzmocnienia bez wąskich gardeł', 'Ustawić jeden kontrolowany punkt ograniczania'],
    steps: [
      'Poziom mikrofonowy to od kilku mV do dziesiątek mV, liniowy profesjonalny to nominalnie +4 dBu (1,23 V). Maksymalny poziom wyjściowy konsolet i procesorów to zwykle +20 do +28 dBu. Różnica między nominalnym a maksymalnym to headroom analogowy.',
      'Wejście zbalansowane mierzy różnicę napięć między żyłą „gorącą” i „zimną”. Zakłócenia indukujące się jednakowo w obu żyłach są odejmowane. CMRR (Common Mode Rejection Ratio) opisuje, jak skutecznie — zależy od symetrii impedancji źródła i odbiornika, nie tylko od kabla.',
      'Konwertery A/D i D/A mają określone napięcie odpowiadające 0 dBFS, np. +18, +24 lub +26 dBu. W systemach z sieciami audio trzeba to znać na każdym styku analog/cyfra, inaczej poziomy się „rozjeżdżają”, a przesterowania pojawiają się w nieoczekiwanych miejscach.',
      'Czułość wzmacniacza to napięcie wejściowe, przy którym osiąga pełną moc wyjściową (lub wzmocnienie w dB). Jeżeli procesor może podać o 20 dB więcej, niż wzmacniacz potrzebuje, cała górna część zakresu procesora prowadzi do clipu wzmacniacza. W nowoczesnych systemach często jest to rozwiązane przez zintegrowane DSP w końcówce.',
      'Każdy etap ma szum własny i maksymalny poziom. Dynamika systemu jest ograniczona przez etap o najmniejszym zakresie. Zbyt niski poziom na początku toru i duże wzmocnienie na końcu to szum; zbyt wysoki na początku — clip przed limiterem.',
      'Najlepiej, gdy system ogranicza w jednym miejscu, zaprojektowanym przez producenta — w limiterach procesora dopasowanych do wzmacniacza i głośnika. Wszystkie etapy wcześniej powinny mieć zapas, żeby nigdy nie przesterować przed tym punktem.',
    ],
  },
  wzmacniacze: {
    goals: ['Liczyć napięcia, obciążenia i straty', 'Rozumieć rolę presetów i kompresji mocy'],
    steps: [
      'Impedancja nominalna (np. 8 Ω) to uproszczenie — rzeczywista krzywa impedancji zmienia się z częstotliwością, a minimum może być niższe. Połączenie równoległe n identycznych kolumn daje Z/n. Wzmacniacze mają minimalną dopuszczalną impedancję; praca poniżej grozi przegrzaniem i zabezpieczeniem.',
      'W praktyce myśl napięciem: wzmacniacz oddaje określone napięcie maksymalne, a moc wynika z obciążenia (P = U²/R). Ten sam wzmacniacz daje na 4 Ω dwa razy więcej mocy niż na 8 Ω tylko wtedy, gdy wydoli prądowo.',
      'Czułość (dB SPL przy 1 W lub 2,83 V na 1 m) i maksymalny SPL pozwalają oszacować potrzebną moc. Kompresja mocy to utrata poziomu przy wysokich mocach, bo cewka nagrzewa się i rośnie jej rezystancja — realny SPL jest niższy niż wynika z prostego rachunku.',
      'Rezystancja kabla to R = ρ·L/S, gdzie L to długość całej pętli (tam i z powrotem), ρ miedzi ≈ 0,0175 Ω·mm²/m. Kabel tworzy dzielnik napięcia z obciążeniem: im niższa impedancja głośnika, tym większe straty. Przy niskich impedancjach i długich trasach warto przenieść wzmacniacze bliżej.',
      'Współczynnik tłumienia to stosunek impedancji obciążenia do impedancji wyjściowej wzmacniacza z kablem. Wzmacniacz z DF 1000 i długim kablem daje w praktyce DF rzędu kilku–kilkunastu — to kabel dominuje. Wpływ na kontrolę membrany w LF jest realny, ale często przeceniany w marketingu.',
      'W profesjonalnych systemach koncertowych preset producenta (zwrotnica, EQ, faza, limitery) jest częścią konstrukcji głośnika. Samodzielne „budowanie” zwrotnic dla takich systemów zwykle pogarsza wynik i może uszkodzić przetworniki. System engineer pracuje na warstwie powyżej presetów.',
    ],
  },
  filtry: {
    goals: ['Czytać amplitudę i fazę filtrów', 'Rozumieć różnicę IIR/FIR w praktyce'],
    steps: [
      'Każdy rząd filtru dodaje 6 dB/okt nachylenia i do 90° przesunięcia fazy w pełnym zakresie. Filtr 2. rzędu: 12 dB/okt i 180° obrotu, 4. rzędu: 24 dB/okt i 360°. Strome filtry nie są „za darmo” — kosztują obrót fazy.',
      'Butterworth ma maksymalnie płaską charakterystykę w pasmie przepustowym i −3 dB w fc. Linkwitz-Riley to kaskada dwóch Butterworthów, więc w fc ma −6 dB. Dwa sygnały −6 dB w fazie sumują się do 0 dB, dlatego LR daje płaską sumę amplitudy.',
      'W LR4 wyjścia LP i HP są w fazie w całym zakresie przejścia (różnica 360° to w praktyce zgodność), a suma zachowuje się jak filtr all-pass 2. rzędu. W LR2 (12 dB/okt) wyjścia trzeba odwrócić polaryzacją, by się poprawnie sumowały.',
      'EQ parametryczny ma trzy parametry: częstotliwość, wzmocnienie i dobroć Q (lub szerokość pasma w oktawach). Filtry półkowe zmieniają poziom powyżej lub poniżej częstotliwości. W EQ systemowym stosuje się zwykle szerokie, łagodne korekcje.',
      'Filtry IIR (analogowe i ich cyfrowe odpowiedniki) są minimalnofazowe — amplituda i faza są ze sobą powiązane. Filtry FIR mogą mieć fazę liniową lub dowolną, niezależną od amplitudy, ale wymagają latencji, która rośnie przy kontroli niskich częstotliwości.',
      'Opóźnienie grupowe opisuje, jak długo „opóźniana” jest energia w danym pasmie. Filtr all-pass nie zmienia amplitudy, tylko obraca fazę — przydaje się do dopasowania nachylenia fazy np. subów do tablicy w strefie przejścia.',
    ],
  },
  dsp: {
    goals: ['Znać źródła latencji i ich wpływ', 'Rozróżniać typy limiterów'],
    steps: [
      'Każdy konwerter, blok DSP i sieć wnoszą latencję — zwykle od ułamka ms do kilku ms. Suma latencji ma znaczenie przy wyrównaniu systemów z różnymi torami (np. sub przez inny procesor), przy odsłuchach dousznych i przy nagłośnieniu mowy.',
      'Opóźnienie w procesorze służy do wyrównania czasowego głośników w różnych odległościach od słuchacza. Dodaje się je do elementów bliższych, by „poczekały” na dalsze. Nie da się opóźnić ujemnie — referencją jest najdalsze źródło w danej relacji.',
      'Limiter RMS (z długimi czasami) chroni przed przegrzaniem cewek, bo śledzi energię średnią. Limiter peak (szybki) chroni przed nadmiernym wychyleniem membrany i przesterowaniem wzmacniacza. Nowoczesne systemy łączą oba, często z modelem termicznym przetwornika.',
      'Przy 48 kHz jedna próbka to ok. 20,8 µs, przy 96 kHz — 10,4 µs. Aliasing powstaje, gdy sygnał zawiera składowe powyżej połowy fs — zapobiegają mu filtry antyaliasingowe w konwerterach. Rozdzielczość opóźnienia w procesorach jest zwykle wystarczająca do wyrównania na poziomie ułamka ms.',
      'Procesory systemów liniowych oferują kompensację absorpcji powietrza (podbicie HF dla elementów grających daleko) i korekcje strefowe (array EQ). Ich ustawienia najczęściej przychodzą z software predykcji — trzeba wiedzieć, co zostało policzone, zanim zacznie się korygować „ręcznie”.',
      'Grupy pozwalają zmieniać parametry wielu kanałów jednocześnie, snapshoty — wrócić do znanego stanu. Zanim zaczniesz strojenie, zapisz stan wyjściowy. Po strojeniu zapisz stan końcowy i opisz zmiany — to Twoja dokumentacja i zabezpieczenie.',
    ],
  },

  workflow: {
    goals: ['Budować wiarygodny model sali', 'Znać ograniczenia software predykcji'],
    steps: [
      'Najlepsze źródła to rysunki CAD sali z rzutem i przekrojem, lista punktów rigu z nośnościami i aktualny układ widowni. Jeśli masz tylko PDF — skaluj wg znanych wymiarów. Brak danych uzupełnij site survey: dalmierz laserowy, inklinometr, zdjęcia.',
      'Płaszczyzny słuchania ustawia się na wysokości uszu: dla stojących ok. 1,6–1,7 m, dla siedzących ok. 1,1–1,2 m nad podłogą lub stopniem. Na trybunach każda sekcja powinna mieć własną płaszczyznę odpowiadającą nachyleniu.',
      'Soundvision, ArrayCalc, MAPP 3D i EASE Focus liczą przede wszystkim dźwięk bezpośredni — pokazują, gdzie trafia energia z głośników, ale nie pogłos sali. W salach o dużym pogłosie należy to uwzględnić, choćby jakościowo.',
      'Do analizy akustycznej (pogłos, STI w salach, odbicia) potrzebne są narzędzia typu EASE z modelem materiałów i ray tracingiem. W produkcji koncertowej zwykle wystarczy predykcja bezpośrednia plus wiedza o sali; w instalacjach — pełna symulacja.',
      'Model powinien być tak prosty, jak to możliwe, ale nie prostszy. Kluczowe są: obszary publiczności, wysokości, pozycje głośników i przeszkody. Szczegóły architektoniczne mają znaczenie, gdy wpływają na zasłanianie lub gdy kierujesz energię w ich pobliże.',
      'Po montażu zweryfikuj wysokości i kąty (dalmierz, inklinometr) względem predykcji, a po strojeniu porównaj pomiary w kilku punktach z mapą. Rozbieżności to najlepsza lekcja na następny projekt.',
    ],
  },
  cele: {
    goals: ['Formułować mierzalne cele projektu', 'Oceniać mapy predykcji w pasmach'],
    steps: [
      'Cel jednorodności poziomu to np. ±3 dB w strefie publiczności w pasmie 1–4 kHz. Bez takiego celu optymalizacja kątów jest subiektywna. Wyznacz osobne cele dla różnych stref (parter, balkon), jeśli mają inną funkcję.',
      'Nawet przy równym poziomie szerokopasmowym widmo może się zmieniać z pozycją (np. mniej HF daleko, więcej LF blisko subów). Oceniaj mapy w pasmach oktawowych i dąż do podobnego kształtu widma w całej strefie.',
      'Docelowy SPL na FOH wynika z gatunku i riderów, ale system powinien mieć dodatkowy zapas (kilka–kilkanaście dB) względem średniego poziomu programu, żeby szczyty nie trafiały w limitery.',
      'Energia skierowana na ściany, sufit i puste przestrzenie wraca jako odbicia i pogłos, pogarszając zrozumiałość i wywołując echa. Kierunkowość systemu i precyzyjne kąty to podstawowa „akustyka”, jaką kontroluje system engineer.',
      'STI (0–1) opisuje, jak dobrze zachowana jest modulacja sygnału mowy po przejściu przez system i salę. W systemach mowy i ewakuacyjnych jako minimalne wymaganie przyjmuje się zwykle STI ok. 0,50, a wartości powyżej 0,6 oznaczają dobrą zrozumiałość.',
      'Mapa szerokopasmowa uśrednia zjawiska z różnych pasm i może ukrywać problemy. Sprawdzaj 125 Hz (kontrola LF), 1 kHz (średnica), 4–8 kHz (zasięg i jednorodność HF).',
    ],
  },
  fills: {
    goals: ['Projektować subsystemy uzupełniające', 'Utrzymać spójny obraz sceny'],
    steps: [
      'L/R to standard koncertowy, ale jednorodność miksu jest dobra tylko w centrum. Mono (np. centralny klaster) daje spójny odbiór wszędzie. LCR pozwala oddzielić wokal do centrum, zachowując szerokość instrumentów.',
      'Front fill pokrywa pierwsze rzędy poniżej pokrycia tablic głównych. Kolumny rozstawia się tak, by ich krawędzie pokrycia spotykały się na linii pierwszego rzędu (lub nieco za nią). Mniejsze, gęściej rozstawione kolumny dają lepszy obraz niż kilka dużych.',
      'Out fill i side hang pokrywają boczne sektory, do których główna tablica nie sięga kątowo. Wymagają osobnego strojenia i wyrównania z systemem głównym w strefie przejścia.',
      'Delay jest uzasadniony, gdy daleko od sceny poziom spada zbyt mocno, HF zanika, a stosunek dźwięku bezpośredniego do pogłosu i hałasu tła pogarsza zrozumiałość. Delay powinien grać tylko na swój obszar, z możliwie małym nakładaniem z przodu.',
      'Przestrzenny punkt przejścia to miejsce, gdzie poziomy dwóch subsystemów są równe. Tam ustala się relację czasową. Przed nim dominuje jeden system, za nim drugi — celem jest wąska strefa przejścia i dobrze wyrównany czas.',
      'Utrzymanie obrazu na scenie wymaga, by pierwsze docierało źródło „od sceny” lub by różnica była na tyle mała, że efekt pierwszeństwa nadal działa. Front fille i delay ustawia się tak, by wzmacniały poziom, a nie „przyciągały” lokalizację.',
    ],
  },
  rigging: {
    goals: ['Rozumieć obciążenia w systemach podwieszanych', 'Współpracować z riggerami na wspólnym języku'],
    steps: [
      'WLL to maksymalne obciążenie, jakie element może przenosić w normalnej pracy. Obciążenie niszczące jest wielokrotnie wyższe — stosunek to współczynnik bezpieczeństwa. Nigdy nie planuj pracy powyżej WLL, a w ocenie uwzględniaj obciążenia dynamiczne.',
      'Masa podwieszenia to nie tylko głośniki: rama, łączniki, kable głośnikowe i sygnałowe, wyciągarki (jeśli podwieszone), dodatkowe elementy (np. suby, laser). Software producentów liczy rozkład sił w punktach — korzystaj z tego.',
      'W bridle siła w każdej nodze rośnie wraz z kątem między nimi. Przy 120° każda noga przenosi obciążenie równe całemu ciężarowi. Dlatego szerokie bridle wymagają przemyślenia, nie tylko sprawdzenia masy.',
      'Wyciągarki D8 służą do podnoszenia, a ładunek nad ludźmi wymaga dodatkowego zabezpieczenia (np. stalówki). D8+ spełniają wyższe wymagania (m.in. podwójny hamulec) i mogą w określonych warunkach utrzymywać ładunek nad ludźmi. Zawsze obowiązują lokalne przepisy i procedury obiektu.',
      'Pullback (odciągnięcie tyłu tablicy) i duże kąty site przesuwają środek ciężkości i obciążenia między punktami. Software producenta pokazuje dopuszczalne konfiguracje i ostrzeżenia — nie ignoruj ich.',
      'W plenerze obciążenie wiatrem i dopuszczalne prędkości wiatru dla konstrukcji muszą być znane i monitorowane. Procedury zakładają progi, przy których ogranicza się ekspozycję lub opuszcza systemy.',
    ],
  },

  fft: {
    goals: ['Dobierać parametry FFT', 'Rozróżniać RTA i funkcję przejścia'],
    steps: [
      'FFT dzieli sygnał na N próbek i zamienia na widmo z rozdzielczością fs/N. Większe N to lepsza rozdzielczość w częstotliwości, ale dłuższe okno czasowe — i wolniejsza reakcja. Przy 48 kHz: 16k próbek ≈ 3 Hz i 340 ms, 1k próbek ≈ 47 Hz i 21 ms.',
      'Wycięcie fragmentu sygnału powoduje przeciek widma. Okna czasowe (Hann, Blackman-Harris) łagodzą krawędzie fragmentu, zmniejszając przeciek kosztem szerokości prążka. Do pomiarów systemowych stosuje się okna domyślne analizatora, chyba że wiesz, dlaczego chcesz inne.',
      'Multi-time window (MTW) łączy wiele FFT o różnych długościach: długie dla LF, krótkie dla HF. Daje w przybliżeniu stałą rozdzielczość względną (np. 1/24 oktawy) i ogranicza wpływ późnego pogłosu w HF.',
      'RTA pokazuje widmo jednego sygnału — zależy od tego, co grasz. Funkcja przejścia porównuje wyjście (mikrofon) z wejściem (referencja), więc pokazuje zachowanie systemu niezależnie od sygnału. Do strojenia używa się TF; RTA do obserwacji programu i szumu.',
      'Szum różowy ma równą energię w każdej oktawie — na RTA oktawowym jest płaski, na wąskopasmowym opada 3 dB/okt. Sweep daje bardzo dobry stosunek sygnału do szumu. Muzyka też działa w TF, jeśli ma energię w danym pasmie — koherencja to pokaże.',
      'Średniowanie stabilizuje odczyt. Więcej średnich = mniej fluktuacji, ale wolniejsza reakcja na zmiany. W głośnym otoczeniu i przy muzyce jako sygnale potrzebne jest dłuższe uśrednianie.',
    ],
  },
  tf: {
    goals: ['Czytać fazę i koherencję', 'Ustawiać poprawny pomiar dwukanałowy'],
    steps: [
      'Referencja to sygnał elektryczny tuż przed systemem (najlepiej z pętli zwrotnej interfejsu), pomiar to sygnał z mikrofonu. TF = pomiar/referencja. Analizator musi skompensować opóźnienie między nimi, inaczej widzisz przede wszystkim czas przelotu.',
      'Delay finder liczy odpowiedź impulsową i szuka jej szczytu. To czas od referencji do mikrofonu: latencja systemu + przelot. Po wprowadzeniu kompensacji faza przestaje się gwałtownie zawijać.',
      'Koherencja (0–1 lub %) mówi, jaka część sygnału mierzonego jest liniowo związana z referencją. Spada przez szum tła, pogłos, niestabilność czasu i zbyt mały poziom. W pasmach o niskiej koherencji nie podejmuj decyzji EQ.',
      'Nachylenie fazy = opóźnienie. Faza jest wyświetlana w zakresie ±180°, więc przy dużym opóźnieniu „zawija się”. Faza rosnąca w górę z częstotliwością oznacza, że sygnał przychodzi wcześniej niż kompensacja; opadająca — później.',
      'Uśrednianie wektorowe (complex) uwzględnia fazę, więc szum i odbicia niezwiązane czasowo z sygnałem się wygaszają. Uśrednianie mocy (RMS) jest stabilniejsze przy ruchu i wietrze, ale zawiera więcej energii pogłosu. Wybierz świadomie w zależności od sytuacji.',
      'Mikrofon na statywie na wysokości uszu łapie odbicie od podłogi (filtr grzebieniowy). Mikrofon na podłodze (ground plane) je eliminuje, ale daje +6 dB i nieco inny obraz niż u słuchacza. Konsekwencja w wyborze jest ważniejsza niż sama metoda.',
    ],
  },
  ir: {
    goals: ['Wyciągać z IR informacje o sali', 'Liczyć i interpretować RT'],
    steps: [
      'Odpowiedź impulsowa to reakcja systemu i sali na idealny impuls. ETC (Energy Time Curve) pokazuje ją w dB w funkcji czasu — widać bezpośredni front, pojedyncze odbicia (czas → różnica dróg) i zanik pogłosu.',
      'RT60 to czas spadku poziomu o 60 dB po wyłączeniu źródła. W praktyce mierzy się T20 lub T30 (z mniejszego zakresu i ekstrapolacji), bo rzadko jest 60 dB dynamiki. EDT (z pierwszych 10 dB) lepiej koreluje z subiektywnym odczuciem pogłosu.',
      'Sabine: RT60 = 0,161·V/A, gdzie A to suma powierzchni × współczynniki pochłaniania. Wzór dobrze działa dla sal o umiarkowanym pochłanianiu. Daje intuicję: dwa razy większa chłonność → dwa razy krótszy pogłos.',
      'C50 i C80 to stosunek energii wczesnej (do 50/80 ms) do późnej w dB. Wyższe wartości = większa klarowność. C50 stosuje się dla mowy, C80 dla muzyki.',
      'Bramkowanie IR (np. wycięcie przed pierwszym odbiciem) daje odpowiedź „bez sali”, ale rozdzielczość częstotliwościowa jest ograniczona do ok. 1/długość okna. Okno 5 ms → wiarygodne dane od ok. 200 Hz.',
      'STI można wyznaczyć z IR (metoda pośrednia), uwzględniając szum tła. To wygodne, ale wymaga poprawnego poziomu i warunków pomiaru. Dla systemów bezpieczeństwa stosuje się też metody bezpośrednie (np. STIPA).',
    ],
  },
  narzedzia: {
    goals: ['Zbudować powtarzalny rig pomiarowy', 'Wiedzieć, jak kalibrować tor pomiarowy'],
    steps: [
      'Smaart to branżowy standard z bogatym workflow (wiele pomiarów, średnie, SPL). Open Sound Meter jest darmowy i świetny do TF. REW specjalizuje się w sweepach, IR i akustyce sal. SysTune oferuje zaawansowaną analizę w czasie rzeczywistym. Warto znać przynajmniej dwa.',
      'Mikrofony pomiarowe powinny mieć płaską charakterystykę (lub plik korekcyjny), małą membranę i dookólność. Klasa 1/2 dotyczy mierników poziomu (IEC 61672) — do pomiarów SPL z raportowaniem liczy się klasa całego toru.',
      'Kalibrator akustyczny generuje znany poziom (zwykle 94 dB = 1 Pa lub 114 dB = 10 Pa przy 1 kHz). Kalibracja toru pozwala odczytywać bezwzględne dB SPL. Kalibruj po każdej zmianie interfejsu, gainu lub mikrofonu.',
      'Pętla zwrotna: sygnał wyjściowy interfejsu wraca na jego wejście jako referencja. Dzięki temu referencja i pomiar przechodzą przez te same konwertery, a analizator mierzy dokładnie to, co wysłano — niezależnie od latencji interfejsu i sterownika.',
      'Pomiar wieloma mikrofonami przyspiesza strojenie: zbierasz dane z kilku pozycji bez chodzenia. Średnia przestrzenna z kilku mikrofonów pokazuje trend strefy. Pamiętaj o jednakowej kalibracji i kompensacji opóźnień każdego z nich.',
      'Pomiary szumem przy wysokich poziomach przez długi czas to realne obciążenie słuchu — Twojego i ekipy. Używaj ochronników, mierz na rozsądnych poziomach (dla TF wystarczy dobry stosunek S/N) i komunikuj, kiedy gra szum.',
    ],
  },

  ip: {
    goals: ['Budować stabilne sieci audio', 'Szybko diagnozować problemy sieciowe'],
    steps: [
      'Adres IP i maska określają, które urządzenia są w tej samej podsieci. DHCP ułatwia start, adresy statyczne dają przewidywalność. Gdy urządzenie nie dostanie adresu, przydziela sobie link-local 169.254.x.x — to częsty objaw braku serwera DHCP.',
      'Switch zarządzalny pozwala dzielić sieć na VLAN (np. audio, sterowanie, internet), ustawiać QoS (priorytet ruchu zegara i audio przez DSCP) i monitorować porty. W systemach produkcyjnych switche niezarządzalne to ryzyko.',
      'Unicast to strumień do jednego odbiorcy, multicast — do grupy. Bez IGMP snooping switch rozsyła multicast na wszystkie porty, co może przeciążyć urządzenia o słabszych interfejsach. Z IGMP ruch trafia tylko tam, gdzie jest subskrypcja.',
      'Energy Efficient Ethernet usypia porty przy małym ruchu, wprowadzając zmienne opóźnienia. Dla protokołów czasu rzeczywistego i PTP to problem. W sieciach audio EEE powinno być wyłączone.',
      'Skrętka ma limit 100 m na segment. Dłuższe trasy (np. FOH na dużym plenerze) prowadzi się światłowodem przez moduły SFP w switchach. Światłowód daje też izolację galwaniczną.',
      'Plan adresacji (tabela: urządzenie, IP, VLAN, port switcha) to podstawa diagnozy. Kiedy coś przestaje działać, wiesz od razu, gdzie szukać, i nie tracisz czasu na skanowanie sieci.',
    ],
  },
  dante: {
    goals: ['Znać różnice protokołów AoIP', 'Projektować redundancję'],
    steps: [
      'Dante pozwala ustawić latencję odbiornika (od ułamka ms do kilku ms) — niższa wymaga lepszej sieci. Redundancja polega na drugim porcie urządzenia podłączonym do niezależnej sieci secondary; strumienie idą oboma torami jednocześnie.',
      'AES67 to standard interoperacyjności: określa format strumieni, synchronizację PTPv2 i sposób transportu. Pozwala łączyć urządzenia różnych ekosystemów, ale wymaga ręcznej konfiguracji części parametrów (np. zegara, adresów multicast).',
      'AVB to zestaw standardów IEEE 802.1 z rezerwacją pasma i synchronizacją gPTP, realizowany w switchach. Milan to profil AVB od Avnu Alliance z wymaganiami certyfikacji, gwarantujący interoperacyjność urządzeń. Wymaga switchy obsługujących AVB/Milan.',
      'SMPTE ST 2110-30 to standard przesyłania audio w sieciach broadcastowych, bazujący na AES67. Spotkasz go przy współpracy z telewizją i realizacjami transmisji.',
      'Dante Domain Manager dodaje uwierzytelnianie, role i podział na domeny — przydatne w dużych i współdzielonych systemach. Niezależnie od narzędzi: sieć audio produkcji powinna być odseparowana od sieci publicznej i gości.',
    ],
  },
  zegar: {
    goals: ['Projektować hierarchię zegara', 'Rozpoznawać objawy problemów z synchronizacją'],
    steps: [
      'W każdej domenie cyfrowej musi być jeden master zegara. W AES3/MADI często jest to word clock lub urządzenie wskazane jako master, w sieciach IP — PTP grandmaster wybierany automatycznie lub z priorytetów.',
      'AES3 to cyfrowy interfejs dwukanałowy: wersja zbalansowana na kablu 110 Ω (XLR), wersja niezbalansowana AES-3id na koncentryku 75 Ω. Zwykły kabel mikrofonowy działa na krótkich odcinkach, ale nie ma właściwej impedancji.',
      'Konwerter SRC pozwala połączyć urządzenia pracujące na różnych częstotliwościach próbkowania lub z różnych domen zegarowych. Kosztem jest dodatkowa latencja i przetwarzanie.',
      'Jitter to wahania momentów próbkowania. Wpływa na jakość konwersji A/D i D/A oraz na stabilność łączy. Dobrej jakości zegar i poprawna synchronizacja minimalizują ten problem.',
      'Latencja różnych torów (np. sub z innego procesora, delay przez inny switch) sumuje się z czasem przelotu. Pomiar końcowy zawsze uwzględnia całość — ale planując, trzeba znać składowe, żeby nie „wyrównywać” latencji sieci jako przelotu.',
    ],
  },

  zasilanie: {
    goals: ['Planować zasilanie systemu', 'Rozmawiać z elektrykiem obiektu na konkretach'],
    steps: [
      'W Polsce napięcie fazowe wynosi 230 V, międzyfazowe 400 V. Przyłącza CEE 16A/32A/63A/125A to 5 przewodów: L1, L2, L3, N, PE. Wzmacniacze zasila się zwykle jednofazowo, rozkładając je równomiernie na fazy.',
      'Przy symetrycznym obciążeniu faz prądy w N się znoszą. Przy niesymetrycznym przez N płynie prąd wyrównawczy, a napięcia na fazach mogą się rozjeżdżać. Zasilacze impulsowe wprowadzają harmoniczne, które sumują się w N.',
      'Wyłącznik różnicowoprądowy (RCD) 30 mA wyłącza obwód, gdy prąd upływu przekroczy próg — chroni ludzi. Wiele urządzeń na jednym RCD sumuje prądy upływu filtrów, co może powodować wyzwalanie bez awarii.',
      'Długie kable zasilające o małym przekroju powodują spadki napięcia przy dużych prądach szczytowych, co ogranicza realną moc wzmacniaczy. Planuj przekroje w odniesieniu do długości i prądów, a nie tylko do zabezpieczenia.',
      'Agregaty różnią się jakością napięcia i reakcją na dynamiczne obciążenie. Wzmacniacze z PFC pobierają prąd bardziej równomiernie, ale przy włączeniu wielu naraz prądy rozruchowe mogą wyzwolić zabezpieczenia — stosuj sekwencyjne włączanie.',
      'Oświetlenie (ściemniacze, zasilacze LED) generuje zakłócenia i skoki obciążenia. Oddzielne rozdzielnie i obwody dla audio ograniczają przenoszenie zakłóceń i ryzyko, że awaria światła wyłączy dźwięk.',
    ],
  },
  uziemienie: {
    goals: ['Bezpiecznie usuwać przydźwięki', 'Zapobiegać problemom na etapie projektu'],
    steps: [
      'Pętla masy powstaje, gdy dwa urządzenia połączone sygnałowo mają różne potencjały masy (np. zasilane z różnych gniazd). Prąd płynie ekranem kabla i pojawia się w sygnale jako przydźwięk 50 Hz i harmoniczne.',
      'Przewód ochronny PE chroni przed porażeniem w razie uszkodzenia izolacji. Odłączenie go (adaptery, obcięte bolce) usuwa objaw kosztem ryzyka śmierci. W profesjonalnej pracy nie ma na to miejsca.',
      'Rozwiązania bezpieczne: transformator separujący sygnał, DI z ground liftem (odcina ekran sygnałowy, nie PE), izolatory sygnałowe, zasilanie całego systemu audio z jednego punktu dystrybucji.',
      'W źle zaprojektowanych urządzeniach ekran kabla (pin 1 XLR) jest podłączony do masy sygnałowej wewnątrz, a nie do obudowy przy gnieździe. Wtedy prądy ekranu płyną przez obwody sygnałowe. Przy uporczywym przydźwięku sprawdź, czy problem nie wynika z konkretnego urządzenia.',
      'Ściemniacze tyrystorowe i zasilacze LED emitują zakłócenia przewodzone i promieniowane. Prowadź kable sygnałowe z dala od zasilania oświetlenia, krzyżuj je pod kątem prostym i używaj zbalansowanych połączeń.',
      'Włączaj od źródeł do wzmacniaczy, wyłączaj odwrotnie. Stuki przy włączaniu konsolety czy procesora przy włączonych wzmacniaczach mogą uszkodzić przetworniki HF.',
    ],
  },
  halas: {
    goals: ['Znać limity i wytyczne', 'Prowadzić monitoring SPL w sposób obronny'],
    steps: [
      'Polskie przepisy BHP dla hałasu w pracy określają najwyższe dopuszczalne natężenie: ekspozycja dzienna LEX,8h 85 dB (A) i szczytowy poziom LCpeak 135 dB (C). Przekroczenie progów działania wiąże się z obowiązkami pracodawcy (ocena ryzyka, ochronniki, pomiary).',
      'WHO w 2022 opublikowało globalny standard bezpiecznego słuchania dla miejsc i wydarzeń: m.in. średni poziom nie wyższy niż 100 dB LAeq,15 min w miejscu najbardziej narażonej publiczności, monitoring SPL, dostęp do ochronników i strefy wypoczynku.',
      'Monitoring powinien być ciągły, z zapisem i pozycją pomiaru opisaną w raporcie. Pomiar na FOH to typowy punkt odniesienia — jeśli publiczność stoi bliżej, trzeba znać różnicę poziomów między FOH a przodem.',
      'Hałas środowiskowy mierzy się na granicy terenu lub przy najbliższej zabudowie, zgodnie z lokalnymi regulacjami i warunkami pozwolenia. W odległości dominuje LF, bo powietrze i przegrody słabo go tłumią.',
      'Kierunkowe układy subów (kardioidy, end-fire) i mniejsza energia skierowana poza teren redukują LF u sąsiadów, nie obniżając wrażeń publiczności. To często skuteczniejsze niż ograniczanie poziomu.',
      'Ochronniki dla ekipy i publiczności, strefy odpoczynku i komunikacja o ryzyku to część profesjonalnej produkcji. System engineer dostarcza dane — pomiar, raport, rekomendację.',
    ],
  },

  sala: {
    goals: ['Oceniać salę pod kątem nagłośnienia', 'Wykorzystywać kierunkowość zamiast walki EQ'],
    steps: [
      'Czas pogłosu w typowych salach jest dłuższy w LF, bo materiały słabiej pochłaniają niskie częstotliwości. Dlatego w pogłosowych halach LF „buczy”, a zrozumiałość spada.',
      'Wczesne odbicia (do kilkudziesięciu ms) wzmacniają poziom i mogą barwić dźwięk. Późne, silne pojedyncze odbicia (np. od tylnej ściany) są słyszalne jako echo — szczególnie dokuczliwe przy scenie.',
      'Mody osiowe powstają między równoległymi ścianami: f = n·c / (2L). W małych salach i w LF dominują nierównomierności poziomu zależne od pozycji. W dużych salach mody są gęste i mniej wyraźne, ale w najniższym zakresie wciąż wpływają na odbiór subów.',
      'Odległość krytyczna to miejsce, gdzie energia bezpośrednia równa jest pogłosowej. Dalej dominuje pogłos. Zwiększenie kierunkowości (Q) źródła i celowanie w publiczność (która pochłania) przesuwa ją dalej.',
      'EQ nie zmieni stosunku energii bezpośredniej do pogłosowej — obniżenie pasma obniża oba. Skuteczne narzędzia to kierunkowość, kąty, pozycje głośników i bliższe źródła (fills, delay).',
      'Publiczność to duża powierzchnia chłonna, szczególnie w średnich i wysokich pasmach. Pełna sala ma krótszy pogłos niż pusta, więc strojenie w pustej wymaga przewidzenia zmian.',
    ],
  },
  plener: {
    goals: ['Przewidywać wpływ pogody', 'Planować korekty w trakcie dnia'],
    steps: [
      'Absorpcja powietrza rośnie z częstotliwością i odległością, a zależy mocno od wilgotności i temperatury. Przy kilkuset metrach straty w 8–16 kHz mogą sięgać wielu dB. ISO 9613-1 podaje sposób obliczania tych współczynników.',
      'Dźwięk zagina się w stronę wolniejszego, chłodniejszego powietrza. W słoneczny dzień przy gruncie jest cieplej, więc fala zagina się w górę i zasięg spada. Wieczorem przy inwersji (chłodno przy gruncie) zagina się w dół — dźwięk niesie się daleko.',
      'Prędkość wiatru rośnie z wysokością. Z wiatrem fronty zaginają się ku ziemi (lepszy zasięg), pod wiatr — w górę (strefa cienia). Wiatr boczny przesuwa pokrycie. Porywisty wiatr powoduje fluktuacje poziomu i barwy.',
      'Spadek temperatury wydłuża czas przelotu. Na dużym plenerze wyrównanie delay wykonane w dzień może wieczorem odbiegać o kilka ms. Warto mieć przygotowaną tabelę korekt wg temperatury.',
      'Grunt odbija LF i część MF; różne podłoża (beton, trawa, piasek) zachowują się inaczej. Konstrukcje, namioty i ekrany LED tworzą odbicia i cienie, które warto uwzględnić w projekcie.',
      'ISO 9613-2 opisuje prognozowanie tłumienia dźwięku w plenerze (geometria, powietrze, grunt, ekrany) i jest stosowane do oceny hałasu środowiskowego. Przydaje się przy uzgodnieniach z urzędami i sąsiadami.',
    ],
  },

  advance: {
    goals: ['Przygotować event przed przyjazdem', 'Tworzyć czytelną dokumentację'],
    steps: [
      'Advance to zebranie wszystkich ograniczeń: rysunki i wymiary, punkty rigu i nośności, zasilanie (przyłącza, odległości), harmonogram dostępu, limity hałasu, wymagania artysty. Każda niewiadoma to ryzyko w dniu montażu.',
      'Kluczowe dokumenty: plan rozmieszczenia (plot), patch, plan sieci i adresacji, predykcja z kątami i wysokościami, schemat zasilania. Nazywaj pliki spójnie i wersjonuj — wszyscy muszą pracować na tej samej wersji.',
      'System engineer jest łącznikiem między FOH, monitorami, oświetleniem (linie widoczności, ekrany), riggerami i produkcją. Jasne ustalenia z wyprzedzeniem oszczędzają kłótnie przy montażu.',
      'Standard nazw (np. RRRR-MM-DD_Obiekt_System_v03) i archiwum projektów pozwalają szybko odtworzyć poprzednie realizacje w tej samej sali.',
      'Po evencie krótki raport: co działało, co nie, pomiary, uwagi do sali, sugestie. To najcenniejsza baza wiedzy, jaką możesz zbudować.',
    ],
  },
  dzien: {
    goals: ['Mieć przewidywalny przebieg dnia', 'Znać punkty kontrolne'],
    steps: [
      'Każdy etap ma warunek zakończenia: rig — kąty i wysokości zgodne z projektem, line check — wszystkie tory grają, weryfikacja — parametry poprawne, strojenie — cele spełnione, soundcheck — akceptacja FOH. Pomijanie etapów zwykle mści się później.',
      'Po podwieszeniu zmierz kąty elementów i site angle inklinometrem, a wysokości dalmierzem. Różnice kilku stopni zmieniają pokrycie dalekich rzędów. Jeśli coś się nie zgadza — popraw teraz, nie po strojeniu.',
      'Line check to test „czy gra”: sygnał dociera do każdego głośnika. Weryfikacja idzie dalej: czy polaryzacja, poziom, EQ, delay i preset są zgodne z projektem. Weryfikacja wykrywa błędy, które line check przepuszcza.',
      'W trakcie show obserwuj zmiany temperatury, SPL i odpowiedzi systemu (pomiar na muzyce). Reaguj na trendy i komunikuj się z FOH, zamiast wprowadzać zmiany bez uzgodnienia.',
      'Plan B to zapasowe elementy, zapisane snapshoty, alternatywna ścieżka sygnału (analog backup, redundancja sieci) i procedura na awarię zasilania. Przećwiczony plan B to spokój podczas show.',
    ],
  },
  awarie: {
    goals: ['Diagnozować metodycznie', 'Utrzymać zespół w spokoju'],
    steps: [
      'Half-split: sprawdzasz sygnał w połowie toru. Jeśli jest — usterka jest dalej, jeśli nie ma — wcześniej. Każdy krok eliminuje połowę możliwości, więc nawet długi tor diagnozujesz w kilku ruchach.',
      'Idź logicznie od źródła do głośnika: czy jest sygnał, czy kable i złącza są całe, czy routing jest poprawny, czy urządzenie ma zasilanie i nie jest w trybie ochrony. Najczęstsze awarie są banalne.',
      'Checklisty awaryjne (brak dźwięku, przydźwięk, zanik sieci, awaria wzmacniacza) i redundancja pozwalają działać automatycznie, gdy stres ogranicza myślenie.',
      'Krótkie, rzeczowe komunikaty: co się stało, co robisz, ile to potrwa. Spokój system engineera uspokaja FOH i produkcję.',
      'Po evencie przeanalizuj awarię: przyczyna, czas reakcji, co pomogło, co zmienić w sprzęcie, procedurach lub dokumentacji. Zapisz to w Dzienniku.',
    ],
  },

  immersja: {
    goals: ['Rozumieć zasady systemów obiektowych', 'Znać różnice w projekcie pokrycia'],
    steps: [
      'Systemy obiektowe traktują każde źródło (wokal, instrument) jako obiekt z pozycją. Procesor wylicza poziomy i opóźnienia dla wielu głośników nad sceną i wokół publiczności, żeby lokalizacja odpowiadała pozycji na scenie.',
      'Żeby obiekt był słyszany z właściwego kierunku w całej widowni, wiele głośników scenicznych musi pokrywać większość publiczności. To zmienia projekt: zamiast dwóch tablic L/R — kilka tablic o szerszym pokryciu i starannie dobranej kierunkowości.',
      'Panoramowanie oparte na różnicach czasu i poziomu wykorzystuje efekt pierwszeństwa, by utrzymać lokalizację w szerokiej strefie, a nie tylko w „sweet spocie”, jak w klasycznym stereo.',
      'Wave Field Synthesis rekonstruuje fizyczny front falowy wirtualnego źródła za pomocą wielu gęsto rozmieszczonych głośników, zgodnie z zasadą Huygensa. Wymaga dużej liczby kanałów i ma ograniczenia w HF (aliasing przestrzenny).',
      'Główne rozwiązania na rynku to m.in. L-ISA (L-Acoustics), Soundscape (d&b), Spacemap Go (Meyer Sound) i Holophonix. Różnią się podejściem, integracją z predykcją i workflow miksu.',
      'Więcej subsystemów to więcej wyrównań, więcej pomiarów i wyższe wymagania wobec predykcji. Dobra dokumentacja i procedura strojenia są tu jeszcze ważniejsze niż w systemie L/R.',
    ],
  },
  beam: {
    goals: ['Rozumieć cyfrowe kształtowanie wiązki', 'Znać ograniczenia fizyczne'],
    steps: [
      'Każdy przetwornik lub element dostaje własny filtr i opóźnienie. Zmieniając relacje czasowe i poziomowe między nimi, kształtuje się kierunek i szerokość wiązki niezależnie od fizycznego ustawienia.',
      'Kolumna montowana płasko przy ścianie może kierować wiązkę w dół na publiczność, omijając sufit i odbicia. Idealne w kościołach, halach i instalacjach, gdzie estetyka ogranicza możliwość pochylenia.',
      'W dużych systemach algorytmy optymalizują filtry dla każdego elementu, by osiągnąć zadany rozkład SPL i tonalny w obszarze publiczności oraz ograniczyć energię poza nim (np. Martin Audio MLA, procesory tablic innych producentów).',
      'Fizyki nie da się oszukać: kontrola LF nadal zależy od długości tablicy, a kształtowanie wiązki pochłania część headroomu, bo elementy nie grają w pełni „razem”.',
      'Tworzenie stref o niższym poziomie (np. scena, obszary za publicznością, zabudowa) to jedno z największych zastosowań. Zawsze weryfikuj w predykcji i pomiarze, jak głęboka jest redukcja w praktyce.',
    ],
  },
  techniki: {
    goals: ['Dobrać metodę pomiaru do warunków', 'Wiedzieć, skąd biorą się dzisiejsze narzędzia'],
    steps: [
      'Zanim komputery udźwignęły dwukanałową analizę FFT w czasie rzeczywistym, akustycy potrzebowali sposobu na oddzielenie dźwięku bezpośredniego od odbić. Powstałe wtedy metody wciąż są używane, a ich logika tkwi w każdym współczesnym programie pomiarowym.',
      'TDS, czyli spektrometria opóźnienia czasowego, wykorzystuje przestrajany sygnał sinusoidalny i wąski filtr podążający za nim z określonym opóźnieniem. Energia docierająca później — odbicia i szum — trafia poza okno filtru i jest odrzucana. To pomiar quasi-bezechowy w zwykłym pomieszczeniu.',
      'Metoda MLS używa pseudolosowej sekwencji binarnej, która brzmi jak szum, ale jest dokładnie znana. Korelacja sygnału odebranego z wysłanym daje odpowiedź impulsową układu, a powtarzanie sekwencji poprawia stosunek sygnału do szumu.',
      'MLS zakłada, że układ nie zmienia się w trakcie pomiaru. Ruch mikrofonu, podmuch wiatru czy zmiana temperatury rozmywają wynik — dlatego na plenerze i w obecności publiczności metoda bywa zawodna.',
      'Sweep logarytmiczny z dekonwolucją rozwiązuje inny problem: produkty zniekształceń nieliniowych lądują w odpowiedzi czasowej przed właściwym impulsem, więc można je odciąć. Dostajesz czystą odpowiedź liniową plus osobną informację o zniekształceniach — stąd popularność sweepów w REW.',
      'Z jednej dobrej odpowiedzi impulsowej wyciągasz właściwie wszystko: charakterystykę amplitudową i fazową, ETC z rozkładem odbić, czasy pogłosu, klarowność C50/C80 i wskaźnik STI. Wybór metody to kwestia hałasu tła i stabilności warunków, a nie mody na narzędzie.',
    ],
  },

  izolacja: {
    goals: ['Rozpoznać dominującą drogę przenoszenia', 'Nie marnować pieniędzy na pozorne rozwiązania'],
    steps: [
      'Hałas w pomieszczeniu wrażliwym można ograniczyć na cztery sposoby: wybrać cichszą lokalizację, obniżyć energię zakłóceń w samym pomieszczeniu, wyciszyć źródło albo postawić między nimi przegrodę. Kolejność nie jest przypadkowa — najtańsze decyzje zapadają najwcześniej, na etapie wyboru miejsca.',
      'Podstawą izolacyjności pojedynczej przegrody jest jej masa: im cięższa, tym trudniej ją wprawić w drgania. Podwojenie masy daje jednak tylko kilka decybeli, więc sama masa szybko przestaje się opłacać.',
      'Znacznie skuteczniejsze jest rozdzielenie konstrukcji: ściana podwójna albo słupki naprzemienne sprawiają, że drgania jednej strony nie przenoszą się bezpośrednio na drugą. Wypełnienie pustki materiałem porowatym dokłada kolejne kilkanaście decybeli.',
      'Wskaźniki jednoliczbowe (STC w literaturze amerykańskiej, Rw w europejskiej) porządkują porównania, ale uśredniają zachowanie w paśmie mowy. Muzyka i bas leżą niżej, dlatego przegroda o dobrym wskaźniku wciąż może przepuszczać stopę i bas.',
      'Izolacyjność całej przegrody wyznacza jej najsłabszy element. Drzwi, okno, przepust kablowy czy kratka wentylacyjna potrafią zniweczyć pracę całej ściany. Dobre okno podwójne z ciężkimi, różnej grubości szybami i starannym montażem dorównuje ścianie — byle rama nie łączyła obu konstrukcji sztywno.',
      'Szczelność jest warunkiem koniecznym. Niewielka nieuszczelniona szczelina obniża izolacyjność drastycznie, bo dźwięk przechodzi przez nią bez żadnego oporu. Uszczelki, masy akustyczne i staranne wykonanie są tu ważniejsze od grubości materiału.',
      'Ostatnia droga to przenoszenie konstrukcyjne i boczne: wibracje omijają przegrodę przez strop, ściany boczne czy instalacje. Rozwiązaniem są wibroizolatory, podłogi pływające i elastyczne łączenia — inaczej nawet najlepsza ściana nie da spodziewanego efektu.',
    ],
  },
  tlo: {
    goals: ['Postawić cel dla hałasu tła', 'Wiedzieć, gdzie szukać źródeł szumu'],
    steps: [
      'Hałas tła wyznacza dolną granicę dynamiki pomieszczenia. Nie ma sensu budować systemu o dynamice 100 dB w miejscu, gdzie wentylacja szumi na poziomie 40 dB — dlatego cel dla tła ustala się na początku projektu, nie na końcu.',
      'Do opisu używa się rodzin krzywych kryterialnych — NCB, NC czy RC. Każda krzywa określa maksymalny dopuszczalny poziom ciśnienia w kolejnych pasmach oktawowych, więc pomiar sprowadza się do naniesienia wyników na wykres.',
      'Krzywe opadają w stronę wysokich częstotliwości i dopuszczają więcej energii w basie. Wynika to z dwóch rzeczy naraz: ucho jest mniej czułe na niskie częstotliwości, a typowe szumy instalacji mają tam najwięcej energii.',
      'Dla studiów i pomieszczeń odsłuchowych przyjmuje się zwykle NCB-20 jako najwyższą akceptowalną krzywą. Zaostrzanie wymagań do NCB-15 ma sens tylko wtedy, gdy inne źródła — ulica, sąsiedzi, sprzęt — są równie cicho.',
      'Głównym źródłem tła jest wentylacja: hałas wentylatora przenoszony kanałem, szum przepływu powietrza oraz turbulencje na kratkach. Najprostszym lekarstwem jest zmniejszenie prędkości przepływu — większe przekroje kanałów zamiast szybszego powietrza.',
      'Dalsze narzędzia to tłumiki akustyczne w kanałach, wyciszone odcinki, rozdzielenie kanałów obsługujących różne pomieszczenia (żeby nie przenosiły dźwięku między nimi) oraz odsunięcie urządzeń od stref wrażliwych. Wszystko to zapada na etapie projektu instalacji.',
    ],
  },
  kubatura: {
    goals: ['Oszacować pogłos obiektu przed montażem', 'Przewidzieć wpływ publiczności'],
    steps: [
      {
        t: 'Czas pogłosu dużego obiektu oszacujesz jeszcze na etapie advance, mając kubaturę i zgrubny bilans powierzchni. Wzór Sabine’a wystarcza do oceny skali problemu: hala o kubaturze kilkudziesięciu tysięcy metrów sześciennych i twardych wykończeniach potrafi mieć pogłos rzędu kilku sekund.',
        eq: '<math display="block"><msub><mi>RT</mi><mn>60</mn></msub><mo>=</mo><mfrac><mrow><mn>0,161</mn><mo>&#8202;</mo><mi>V</mi></mrow><mi>A</mi></mfrac></math>',
        where: 'RT₆₀ — czas pogłosu [s]; V — kubatura [m³]; A — chłonność [m² Sabine]',
      },
      {
        t: 'Chłonność liczysz jako sumę iloczynów powierzchni i ich współczynników pochłaniania, osobno w każdym paśmie oktawowym. W hali największe powierzchnie to podłoga, dach i trybuny — i to one, a nie ściany boczne, decydują o wyniku.',
        eq: '<math display="block"><mi>A</mi><mo>=</mo><munder><mo movablelimits="false">&#8721;</mo><mi>i</mi></munder><msub><mi>S</mi><mi>i</mi></msub><mo>&#8202;</mo><msub><mi>&#945;</mi><mi>i</mi></msub></math>',
        where: 'S — pole powierzchni [m²]; α — współczynnik pochłaniania danej powierzchni w rozpatrywanym paśmie',
      },
      'Publiczność jest największym ustrojem pochłaniającym, jaki wjeżdża na obiekt. Pusta hala na próbie i pełna hala na koncercie to dwa różne pomieszczenia — pogłos skraca się głównie w średnich i wysokich pasmach, natomiast bas zostaje niemal nietknięty.',
      'To tłumaczy typowe zjawisko: system strojony w pustej hali po wpuszczeniu ludzi robi się ciemniejszy i mniej pogłosowy w górze pasma, a proporcja basu do reszty rośnie. Dlatego weryfikacja pomiarem i uchem po otwarciu drzwi jest częścią procedury, a nie fanaberią.',
      'Odległość krytyczna wyznacza granicę, za którą dominuje pole pogłosowe. Rośnie wraz z kierunkowością źródła i chłonnością obiektu — w hali to główny powód, dla którego walczymy o wąskie, precyzyjnie wycelowane pokrycie zamiast o kolejne decybele.',
      'Przy dużych dystansach rzutu dochodzi tłumienie w powietrzu, rosnące z częstotliwością i zależne od wilgotności. Na stadionie strata w górnym paśmie na dystansie stu metrów jest na tyle duża, że projektowo kompensuje się ją korekcją stref dalekich.',
      'Wniosek systemowy jest prosty: w dużym obiekcie liczy się, ile energii trafi w publiczność, a ile w puste powierzchnie. Każdy decybel wysłany w dach albo w pustą trybunę wraca jako pogłos i pogarsza zrozumiałość dla wszystkich.',
    ],
  },
  echa: {
    goals: ['Znaleźć echa zanim zrobi to publiczność', 'Poprawiać geometrią, nie korekcją'],
    steps: [
      'Echo słyszymy wtedy, gdy pojedyncze, silne odbicie dociera na tyle późno, że mózg przestaje je łączyć z frontem. W dużych obiektach to zwykle kilkadziesiąt milisekund — czyli dodatkowa droga rzędu kilkunastu metrów i więcej.',
      'Najczęstsi winowajcy to tylna ściana za publicznością, dach i ekrany. Energia wysłana ponad ostatni rząd wraca do widowni z opóźnieniem, którego nie da się już naprawić żadnym filtrem.',
      'Powierzchnie wklęsłe — łukowe dachy, kopuły, zaokrąglone balkony — skupiają energię w ognisku, tworząc miejsca o wyraźnie wyższym poziomie i silnym echu. Powierzchnie wypukłe działają odwrotnie: rozpraszają energię i są akustycznie bezpieczniejsze.',
      'W predykcji pracujesz metodą lustra: sprawdzasz, gdzie trafia energia z krawędzi pokrycia tablicy i co odbije ją z powrotem. To moment, w którym echo jest jeszcze tanie w usunięciu — wystarczy zmiana kąta, krzywizny lub wysokości podwieszenia.',
      'Na obiekcie diagnozujesz to pomiarem odpowiedzi impulsowej: silny, izolowany pik w ETC kilkadziesiąt milisekund po froncie wskazuje odbicie. Z różnicy czasu wyliczasz dodatkową drogę i wskazujesz powierzchnię.',
      'Kolejność działań jest zawsze ta sama: najpierw geometria (kąty, krzywizna, trim, pozycja), potem adaptacja obiektu (kurtyny, banery), a dopiero na końcu kompromisy elektroniczne. Odwrócenie tej kolejności kończy się systemem, który brzmi dobrze tylko na FOH.',
    ],
  },
  sprzezenie: {
    goals: ['Przewidzieć wpływ powierzchni na LF', 'Policzyć wycięcia od odbicia od gruntu'],
    steps: [
      'Ten sam głośnik promieniujący w pełną sferę i w pół przestrzeni to dwa różne poziomy. Przy jednej dużej powierzchni zyskujesz w niskich częstotliwościach ok. 3 dB, przy dwóch ok. 6 dB, a w narożniku trzech powierzchni ok. 9 dB — energia rozkłada się na coraz mniejszy kąt bryłowy.',
      'Warunkiem jest bliskość: odległość od powierzchni musi być mała względem długości fali. Gdy staje się z nią porównywalna, fala bezpośrednia i odbita zaczynają interferować i zamiast równego wzmocnienia dostajesz grzebień wycięć.',
      {
        t: 'Częstotliwości wycięć wyliczysz wprost z różnicy dróg między falą bezpośrednią a odbitą. To ten sam mechanizm, który tworzy filtr grzebieniowy od odbicia od gruntu na pozycji pomiarowej czy na FOH.',
        eq: '<math display="block"><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo>(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>&#8202;</mo><mi>c</mi></mrow><mrow><mn>2</mn><mo>&#8202;</mo><mi>Δ</mi><mi>d</mi></mrow></mfrac><mo>,</mo><mspace width="0.6em"/><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>…</mo></math>',
        where: 'fₙ — kolejne wycięcia [Hz]; c — prędkość dźwięku [m/s]; Δd — różnica dróg fali bezpośredniej i odbitej [m]',
      },
      'W praktyce dużych systemów oznacza to konkretne decyzje. Suby stojące na gruncie korzystają ze sprzężenia i grają o kilka decybeli głośniej niż te same skrzynie podwieszone, ale podwieszenie daje lepszą jednorodność poziomu od pierwszego do ostatniego rzędu.',
      'Scena, ściany boczne i dach sceny to kolejne powierzchnie sprzęgające. Wpływają nie tylko na system frontowy, ale też na monitory i na to, co słyszy zespół — a odbicie od podłogi sceny potrafi zmienić barwę odsłuchu bardziej niż korekcja.',
      'W halach bas dodatkowo pobudza drgania własne obiektu. Energia niskich częstotliwości zostaje w przestrzeni znacznie dłużej niż średnica, dlatego kierunkowe układy subów mają w hali jeszcze większy sens niż w plenerze.',
    ],
  },
  'adaptacja-obiektu': {
    goals: ['Policzyć potrzebną chłonność', 'Rozmawiać z produkcją konkretami'],
    steps: [
      'W obiekcie nie zmienisz wymiarów, ale możesz zmienić jego chłonność. Kurtyny, banery akustyczne i zabudowa to realne narzędzia, pod warunkiem że wiesz, ile metrów kwadratowych czego i w którym miejscu.',
      'Materiały tekstylne pracują przede wszystkim w średnich i wysokich pasmach. Ich skuteczność rośnie z masą powierzchniową, stopniem zmarszczenia i odstępem od ściany — kotara powieszona płasko na murze jest znacznie mniej skuteczna niż ta sama tkanina odsunięta i marszczona.',
      {
        t: 'Potrzebną chłonność policzysz, odwracając wzór Sabine’a: z docelowego czasu pogłosu i znanej kubatury wychodzi wymagane A, a różnica względem stanu obecnego mówi, ile powierzchni pochłaniającej trzeba dowiesić.',
        eq: '<math display="block"><mi>A</mi><mo>=</mo><mfrac><mrow><mn>0,161</mn><mo>&#8202;</mo><mi>V</mi></mrow><msub><mi>RT</mi><mn>60</mn></msub></mfrac><mspace width="1.2em"/><mo>⇒</mo><mspace width="1.2em"/><mi>Δ</mi><mi>S</mi><mo>=</mo><mfrac><mrow><msub><mi>A</mi><mi>cel</mi></msub><mo>−</mo><msub><mi>A</mi><mn>0</mn></msub></mrow><mi>&#945;</mi></mfrac></math>',
        where: 'A_cel — chłonność wymagana dla docelowego RT; A₀ — chłonność obiektu bez adaptacji; α — współczynnik pochłaniania zastosowanego materiału; ΔS — powierzchnia do dowieszenia [m²]',
      },
      'Największy zysk daje zwykle zasłonięcie pustych trybun i tylnej ściany za publicznością — to powierzchnie odpowiedzialne za najsilniejsze późne odbicia. Zasłanianie ścian bocznych blisko sceny bywa mniej skuteczne, a droższe.',
      'Bilans zmienia się w trakcie eventu: publiczność stojąca pochłania inaczej niż siedząca, a zabudowa sceny, kotary i ekrany dokładają swoje. Dlatego oszacowanie robi się dla stanu „pełny obiekt”, a nie dla pustej hali z montażu.',
      'Adaptacja to zawsze negocjacja z produkcją: koszt materiału, dostępne punkty rigowania, estetyka transmisji i czas montażu. Im wcześniej pokażesz liczby — ile m², jaki efekt w sekundach pogłosu — tym większa szansa, że ktoś się na to zgodzi.',
    ],
  },

  mody: {
    goals: ['Policzyć i zinterpretować drgania własne', 'Wskazać, które mody realnie przeszkadzają'],
    steps: [
      'W pomieszczeniu prostopadłościennym częstotliwości drgań własnych opisuje jeden wzór: f = (c/2)·√((p/L)² + (q/W)² + (r/H)²), gdzie L, W, H to wymiary, a p, q, r liczby całkowite (również zero). Fala stojąca powstaje tylko dla całkowitych wielokrotności, stąd dyskretny zbiór częstotliwości.',
      'Liczba zer wśród p, q, r mówi o typie rezonansu. Dwa zera to rezonans osiowy — fala biegnie między dwiema równoległymi ścianami i niesie najwięcej energii. Jedno zero to rezonans styczny, angażujący cztery ściany, o mniej więcej połowie energii osiowego. Brak zer to rezonans skośny, najsłabszy, ale też obecny.',
      'Najniższy mod osiowy wyznacza najdłuższy wymiar pomieszczenia. Poniżej tej częstotliwości pomieszczenie nie wspiera już dźwięku rezonansowo — dlatego w małych pokojach bas poniżej ok. 30 Hz „znika”, mimo że głośnik go odtwarza.',
      'Wraz z częstotliwością mody stają się coraz gęstsze. Powyżej pewnej granicy (tzw. częstotliwości granicznej) zlewają się i można opisywać pomieszczenie statystycznie: czasem pogłosu i rozkładem energii. Poniżej — trzeba myśleć pojedynczymi rezonansami.',
      'Problemem nie jest sama obecność modów, tylko ich rozkład. Gdy kilka modów wypada dokładnie w tej samej częstotliwości, powstaje wyraźne wzmocnienie i zakolorowanie; gdy między modami jest duża luka, część pasma wypada. Dlatego proporcje pomieszczenia mają znaczenie.',
      'Kryterium Bonella ocenia to liczbowo: w pasmach 1/3 oktawy poniżej 200 Hz liczba modów nie powinna maleć w stosunku do pasma poprzedniego, a kumulacje są akceptowalne dopiero wtedy, gdy w paśmie jest co najmniej pięć modów. To szybki test proporcji projektowanego pomieszczenia.',
      'Ustrój niskotonowy pobiera energię z pola ciśnienia, więc musi stać w strzałce ciśnienia danego modu — w narożniku albo na środku ściany. Umieszczony w węźle, gdzie ciśnienie jest bliskie zeru, nie zrobi nic.',
    ],
  },
  'odbicia-pom': {
    goals: ['Czytać echogram pomieszczenia', 'Decydować, co zrobić z pierwszymi odbiciami'],
    steps: [
      'Średnia droga swobodna to średni dystans, jaki fala pokonuje między kolejnymi odbiciami: 4V/S, gdzie V to objętość, a S powierzchnia wszystkich przegród. Dzieląc ją przez prędkość dźwięku, dostajesz średni odstęp czasu między odbiciami.',
      'W pomieszczeniu o wymiarach rzędu 7 × 6 × 3 m średnia droga swobodna to ok. 3 m, czyli odbicie mniej więcej co 9 ms i ponad sto odbić na sekundę. To pokazuje, dlaczego małe pomieszczenie tak mocno wpływa na brzmienie.',
      'Echogram (ETC, krzywa energii w czasie) pokazuje te odbicia jako kolejne piki. Z ich czasu odczytasz różnicę dróg, a z poziomu — znaczenie. To podstawowe narzędzie diagnostyki pomieszczeń, o wiele bardziej wymowne niż sama charakterystyka częstotliwościowa.',
      'Wczesne odbicia sumują się z dźwiękiem bezpośrednim: podnoszą poziom i poszerzają obraz, ale mogą też barwić dźwięk. Odbicia późne i silne przestają być zlewane z frontem i są słyszalne jako echo.',
      'Punkty pierwszych odbić wyznaczasz metodą lustra: traktujesz powierzchnię jak lustro i szukasz miejsca, w którym „widać” głośnik z pozycji słuchacza. Masz trzy opcje działania — pochłonąć odbicie, rozproszyć je albo odchylić powierzchnię tak, żeby energia poszła gdzie indziej.',
      'Krótkie różnice czasu dają zakolorowanie: opóźnienie rzędu pół milisekundy tworzy filtr grzebieniowy o grzbietach mieszczących się w jednym paśmie krytycznym ucha, co słyszymy jako zmianę barwy. Przy kilkudziesięciu ms mózg traktuje sygnał już jako osobne zdarzenie.',
    ],
  },
  dyfuzory: {
    goals: ['Wybierać między pochłanianiem a rozpraszaniem', 'Zaprojektować dyfuzor pod konkretne pasmo'],
    steps: [
      'Projektant pomieszczenia ma trzy narzędzia: pochłanianie zamienia energię na ciepło, odbicie kieruje ją w wybraną stronę, a rozpraszanie rozkłada ją w czasie i w wielu kierunkach. Klasyczny błąd to używanie wyłącznie pierwszego z nich.',
      'Dyfuzor Schroedera to rząd studni o różnych głębokościach. Fala odbita od dna każdej studni wraca z inną fazą, więc zamiast jednego silnego odbicia powstaje rozmyta w czasie i przestrzeni odpowiedź.',
      'Głębokości studni wynikają z sekwencji residuum kwadratowego: kolejne wartości to n² modulo p, gdzie p jest liczbą pierwszą. Ta sekwencja zapewnia równomierny rozkład faz, a więc równomierne rozpraszanie.',
      'Najniższą rozpraszaną częstotliwość wyznacza maksymalna głębokość studni — im niżej chcesz zejść, tym głębszy musi być dyfuzor. To najczęstsze ograniczenie praktyczne w małych pomieszczeniach.',
      'Górną granicę pasma wyznacza szerokość studni: powinna odpowiadać mniej więcej połowie najkrótszej długości fali, którą chcesz rozproszyć. Zbyt szerokie studnie oznaczają, że powyżej pewnej częstotliwości dyfuzor zachowuje się jak zwykła ściana.',
      'Rozpraszanie zachowuje energię w pomieszczeniu, zamiast ją usuwać. Dla muzyków i realizatorów to różnica między pomieszczeniem martwym a żywym, ale pozbawionym zakolorowań. Pamiętaj jednak, że dyfuzor nie wyeliminuje modów ani nadmiaru pogłosu — to zadanie dla ustrojów pochłaniających.',
    ],
  },
  dyfrakcja: {
    goals: ['Przewidywać zachowanie fali przy przeszkodach', 'Rozumieć ograniczenia ekranów akustycznych'],
    steps: [
      'Dyfrakcja to uginanie fali na krawędziach i przeszkodach. Decyduje stosunek wymiaru przeszkody do długości fali: obiekt mały względem λ praktycznie nie istnieje dla fali, obiekt duży tworzy cień akustyczny.',
      'Dlatego ekran akustyczny przy drodze czy scenie działa głównie na wysokie częstotliwości. Bas ugina się nad krawędzią i wchodzi w strefę cienia — to samo zjawisko, które sprawia, że zza budynku słychać głównie dudnienie basu z koncertu.',
      'Przy przejściu przez szczelinę obowiązuje reguła odwrotna do intuicji: im węższa szczelina względem długości fali, tym szersza wiązka za nią. Wąskie otwory nie prowadzą dźwięku „strumieniem”, tylko go rozpraszają.',
      'Dyfrakcja na krawędziach obudowy głośnika zmienia jego charakterystykę i wpływa na obraz stereofoniczny. Zaokrąglone krawędzie i odpowiednie proporcje frontu ograniczają ten efekt — dlatego dobre monitory mają fazowane obudowy.',
      'Refrakcja to zakrzywienie toru fali w ośrodku o zmiennej prędkości dźwięku. W atmosferze wywołują ją gradienty temperatury i wiatru: przy inwersji fala zagina się ku ziemi i dźwięk niesie się daleko, w ciepły dzień ucieka w górę.',
      'Kształt powierzchni decyduje o rozkładzie energii: powierzchnie wklęsłe skupiają dźwięk w ognisku, tworząc „gorące punkty” i echa, wypukłe rozpraszają go szeroko. Dlatego łuki i kopuły są akustycznie trudne, a elementy wypukłe chętnie stosowane w adaptacjach.',
    ],
  },

  porowate: {
    goals: ['Dobierać grubość i odstęp materiału do pasma', 'Czytać karty katalogowe ze zrozumieniem'],
    steps: [
      'Współczynnik pochłaniania α mówi, jaka część energii padającej nie wraca do pomieszczenia. Zależy od częstotliwości, dlatego jedna liczba nic nie znaczy — potrzebujesz wartości w pasmach oktawowych od 125 Hz do 4 kHz. Ten sam materiał potrafi mieć α = 0,1 w LF i 0,9 w HF.',
      'Materiał porowaty nie „zatrzymuje” ciśnienia, tylko zamienia ruch cząsteczek powietrza na ciepło przez tarcie lepkie w porach. Dlatego musi znaleźć się tam, gdzie prędkość cząsteczek jest duża. Przy sztywnej ścianie prędkość jest bliska zeru, a ciśnienie maksymalne — cienka warstwa tuż przy ścianie prawie nie pracuje w niskich częstotliwościach.',
      'Prędkość cząsteczek osiąga maksimum w odległości ćwierci długości fali od ściany. Stąd praktyczna reguła: materiał zaczyna skutecznie działać, gdy jego grubość jest rzędu λ/4 dla najniższej częstotliwości, którą chcesz kontrolować. Dla 1 kHz to ok. 8 cm, dla 100 Hz już ok. 85 cm — dlatego kontrola basu wełną wymaga albo wielkich grubości, albo innych rozwiązań.',
      'Pustka powietrzna między materiałem a ścianą działa jak przedłużenie grubości: przesuwa warstwę w obszar większej prędkości cząsteczek. Panel 5 cm odsunięty o 10 cm od ściany pochłania znacznie niżej niż ten sam panel przyklejony na płasko — bez wzrostu kosztu materiału.',
      'Gęstość i opór przepływu muszą być w rozsądnym zakresie. Materiał zbyt gęsty zaczyna odbijać falę zamiast ją wpuszczać, zbyt rzadki nie stawia oporu ruchowi cząsteczek. Dlatego producenci podają wełny o różnych gęstościach przeznaczone do różnych zastosowań akustycznych.',
      'Dane katalogowe zawsze dotyczą konkretnego montażu — bezpośrednio na ścianie, na ruszcie z pustką, ze szczeliną. Wartości tego samego produktu w różnych montażach różnią się w LF nawet kilkukrotnie. Karta bez opisu montażu jest bezużyteczna do projektowania.',
    ],
  },
  rezonansowe: {
    goals: ['Policzyć częstotliwość pracy ustroju', 'Świadomie sterować szerokością pasma'],
    steps: [
      'Ustrój membranowy (przeponowy) to płyta zamykająca szczelną pustkę. Masa płyty i sprężystość powietrza tworzą układ rezonansowy, który pobiera energię z pola akustycznego w okolicy swojej częstotliwości drgań własnych. To narzędzie do niskich częstotliwości przy niewielkiej głębokości konstrukcji.',
      'Częstotliwość pracy liczysz ze wzoru f₀ ≈ 60 / √(m · d), gdzie m to masa powierzchniowa płyty w kg/m², a d głębokość pustki w metrach. Masę powierzchniową łatwo wyznaczysz, ważąc kawałek płyty o znanej powierzchni.',
      'Przykład: sklejka o masie 3,6 kg/m² na pustce 9,5 cm daje f₀ = 60/√(3,6 · 0,095) ≈ 100 Hz. Cięższa płyta albo głębsza pustka przesuwają pracę w dół; lżejsza i płytsza — w górę. Zmiana o oktawę wymaga czterokrotnej zmiany iloczynu m·d.',
      'Płyta perforowana to zestaw połączonych rezonatorów Helmholtza: każdy otwór jest szyjką, a pustka za płytą wspólną objętością. Jej częstotliwość liczy się ze wzoru f₀ ≈ 508 · √(p / (t · d)), gdzie p to procentowy udział perforacji, t efektywna długość otworu w cm, d głębokość pustki w cm.',
      'Efektywna długość otworu jest większa od grubości płyty, bo powietrze „wystaje” z otworu po obu stronach: t = grubość + 0,8 · średnica otworu. Im mniejszy udział perforacji, tym niżej pracuje ustrój — od kilku procent schodzisz w okolice 200–300 Hz, poniżej jednego procenta w okolice 100 Hz.',
      'Pusta konstrukcja daje wąskie i ostre maksimum. Wypełnienie pustki wełną obniża dobroć Q: maksimum spada, ale pasmo pracy robi się szerokie i bardziej użyteczne. Wełna przesuwa też rzeczywistą częstotliwość względem wzoru, dlatego projekt kończy się pomiarem, a nie obliczeniem.',
    ],
  },
  helmholtz: {
    goals: ['Rozumieć działanie rezonatorów objętościowych', 'Umieszczać basotrapy tam, gdzie pracują'],
    steps: [
      'Rezonator Helmholtza to objętość powietrza połączona ze światem szyjką. Masa powietrza w szyjce drga na sprężynie, jaką jest sprężystość powietrza w objętości. Efekt znasz z dmuchania w butelkę — wysokość dźwięku zależy od objętości i wymiarów szyjki.',
      'Zmiana dowolnego z trzech parametrów przesuwa częstotliwość: większa objętość obniża, krótsza lub szersza szyjka podnosi. To pozwala zaprojektować pochłanianie dokładnie tam, gdzie pomiar pokazał problem.',
      'Sam rezonator ma bardzo małe straty, więc pochłania w wąskim paśmie. Umieszczenie gazy lub wełny w szyjce zwiększa tarcie: amplituda drgań spada, ale pasmo pracy się poszerza. To ten sam kompromis co w ustrojach perforowanych.',
      'Ostrość dostrojenia opisuje dobroć Q = f₀/Δf, gdzie Δf to szerokość krzywej dla spadku o 3 dB. Typowe ustroje perforowane i listwowe mają Q rzędu 1–2, wyjątkowo do 5. Przy Q = 5 i 100 Hz czas zaniku drgań ustroju to ok. 0,1 s, więc obawy o „dzwonienie” są bezpodstawne — słyszalne byłoby dopiero Q rzędu 100.',
      'Energia, która nie zostaje zamieniona na ciepło, jest wypromieniowana z wylotu szyjki półkoliście. Rezonator działa więc również jako element rozpraszający — pożądany efekt w pomieszczeniach odsłuchowych i studiach.',
      'Ustrój listwowy to rząd listew ze szczelinami na wspólnej pustce — każda szczelina pełni rolę szyjki rezonatora. Szerokość szczelin, szerokość listew i głębokość pustki wyznaczają pasmo pracy, a wełna w środku decyduje o jego szerokości. To konstrukcja wdzięczna warsztatowo: wygląda jak okładzina, a pracuje jak zestaw rezonatorów.',
      'Lokalizacja przesądza o skuteczności. Ustrój pobiera energię z pola ciśnienia, więc musi stać tam, gdzie mod ma strzałkę: w narożnikach, gdzie zbiegają się maksima wszystkich modów osiowych, albo na środku ściany dla konkretnego modu. Ten sam ustrój przeniesiony do węzła ciśnienia przestaje działać.',
    ],
  },
  adaptacja: {
    goals: ['Zrobić bilans chłonności w pasmach', 'Unikać typowych błędów adaptacji'],
    steps: [
      'Współczynniki pochłaniania wyznacza się dwiema metodami. W komorze pogłosowej mierzy się skrócenie czasu pogłosu po wniesieniu próbki — wynik odpowiada polu rozproszonemu. W rurze impedancyjnej (Kundta) mierzy się falę stojącą dla padania prostopadłego na małą próbkę. Wyniki obu metod różnią się, więc nie miesza się ich w jednym bilansie.',
      'Bilans adaptacji to suma chłonności: A = Σ S·α, liczona osobno w każdym paśmie oktawowym. Z chłonności wyznaczasz czas pogłosu ze wzoru Sabine’a RT = 0,161·V/A. Dopiero porównanie RT w pasmach z celem projektowym mówi, czego i ile brakuje.',
      'Wskaźniki jednoliczbowe (NRC, αw) upraszczają komunikację z inwestorem, ale gubią widmo. Dwa materiały o tym samym NRC mogą zachowywać się zupełnie inaczej w pasmie 125 Hz — a to zwykle tam leży problem.',
      'W bilansie uwzględnij publiczność i fotele, które są dużą powierzchnią chłonną, oraz pochłanianie w powietrzu, istotne w dużych kubaturach powyżej 2 kHz. Sala pusta i pełna to dwa różne pomieszczenia.',
      'Najczęstszy błąd adaptacji to pokrycie wszystkiego cienką pianką. Efekt: martwe wysokie częstotliwości przy niemal niezmienionym basie, czyli pogorszenie bilansu tonalnego. Kontrola basu wymaga grubych warstw z pustką albo ustrojów rezonansowych.',
      'Projekt adaptacji zaczyna się od pomiaru (RT w pasmach, echa w ETC, mody) i od jasno postawionego celu, a nie od katalogu produktów. Po montażu mierzysz ponownie i dokumentujesz różnicę — to jedyny sposób, żeby nauczyć się przewidywać skutki.',
    ],
  },

  automatyzacja: {
    goals: ['Budować własne narzędzia', 'Ograniczać błędy powtarzalnych zadań'],
    steps: [
      'OSC (Open Sound Control) to lekki protokół sterowania, zwykle po UDP, obsługiwany przez wiele konsolet, procesorów i programów. Wiele urządzeń oferuje też własne API — sprawdzaj dokumentację producentów.',
      'Python świetnie nadaje się do obliczeń: tabel opóźnień, strat w kablach, rozstawów subów, raportów SPL. Proste skrypty oszczędzają czas i eliminują błędy przy przepisywaniu.',
      'Szablony arkuszy (patch, IP, zasilanie, rigging) z formułami to najprostsza forma automatyzacji. Raz dobrze przygotowane działają przez lata.',
      'Git pozwala wersjonować projekty, show files, szablony i dokumentację. Widzisz, co zmieniło się między eventami, i możesz wrócić do działającej wersji.',
      'Automatyczne raporty (np. SPL z pomiaru, podsumowanie strojenia) oszczędzają czas po evencie i budują profesjonalny wizerunek wobec klienta i organizatora.',
    ],
  },
};
