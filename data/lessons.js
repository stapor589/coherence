// Treść lekcji: wyjaśnienia do zagadnień z curriculum.js (ta sama kolejność).
// Opcjonalne pole `goals` — cele lekcji wyświetlane na ekranie startowym.

export const LESSONS = {
  gain: {
    goals: ['Ustawić poziomy w całym torze świadomie', 'Wiedzieć, gdzie system ma ograniczać'],
    steps: [
      {
        t: 'Wyobraź sobie sztafetę, w której każdy zawodnik przekazuje wiadro wody. Każdy ma wiadro innej wielkości: jeśli któryś dostanie więcej, niż mieści, reszta się rozleje — to jest przesterowanie. Jeśli dostanie za mało, następni będą przelewać ledwie kilka kropli i w tle zacznie być słychać szum. Struktura wzmocnienia to właśnie dobranie poziomów tak, żeby na każdym etapie sygnał był wyraźnie powyżej szumu i wyraźnie poniżej granicy przesterowania.',
      },
      {
        t: 'W świecie analogowym pracujesz wokół poziomu nominalnego, którym w sprzęcie profesjonalnym jest +4 dBu, czyli około 1,23 wolta. Maksymalny poziom wyjściowy konsolet i procesorów to zwykle +20 do +28 dBu, więc ponad poziomem roboczym zostaje kilkanaście do dwudziestu kilku decybeli zapasu. Ten zapas nie jest luksusem: muzyka ma szczyty znacznie wyższe od wartości średniej i to one decydują, czy sygnał się zmieści.',
        eq: '<math display="block"><msub><mi>L</mi><mi>dBu</mi></msub><mo>=</mo><mn>20</mn><mo>&#8202;</mo><mi>log</mi><mfrac><mi>U</mi><mn>0,775</mn></mfrac></math>',
        where: 'L — poziom [dBu]; U — napięcie skuteczne [V]; 0,775 V to napięcie odniesienia dla dBu',
      },
      {
        t: 'W świecie cyfrowym jest inaczej: zero jest na samej górze skali i nazywa się pełną skalą, a wszystko poniżej ma wartości ujemne. Powyżej zera nie ma nic — konwerter nie ma już żadnego zapasu, więc przesterowanie oznacza po prostu ścięcie szczytów. Żeby połączyć oba światy, musisz wiedzieć, ile dBu odpowiada pełnej skali w Twoim urządzeniu. Typowo jest to +18, +24 albo +26 dBu i ta jedna liczba decyduje, czy Twoje poziomy w cyfrze i analogu mówią o tym samym.',
      },
      {
        t: 'Połączenie zbalansowane działa jak dwóch świadków opowiadających tę samą historię: jeden mówi wprost, drugi dokładnie odwrotnie. Odbiornik słucha różnicy między nimi. Zakłócenie, które wskoczy po drodze w oba przewody tak samo, mówi „to samo” obu świadkom — a skoro liczy się różnica, zakłócenie się kasuje. Dlatego zbalansowany kabel przenosi sygnał przez scenę bez brumu, a niezbalansowany łapie wszystko po drodze.',
      },
      {
        t: 'Dynamika całego systemu jest ograniczona przez najsłabsze ogniwo — dokładnie jak w sztafecie z wiadrami. Jeśli w połowie toru ktoś pracuje na bardzo niskim poziomie, a dalej wszystko jest mocno podbijane, to w efekcie podbijasz też szum tego etapu. Odwrotnie: jeśli na wejściu wpychasz za dużo, sygnał zostanie ścięty, zanim dojdzie do limiterów, które miały go chronić.',
      },
      {
        t: 'Stąd zasada, do której warto wracać: system powinien ograniczać w jednym, zaplanowanym miejscu — w limiterach dopasowanych do wzmacniacza i głośnika, zwykle zaprojektowanych przez producenta. Wszystkie wcześniejsze etapy mają mieć zapas, żeby nigdy nie przesterować przed tym punktem. Dzięki temu wiesz, co się dzieje, gdy system dochodzi do granicy — zamiast zgadywać, które z pięciu urządzeń właśnie ścina szczyty.',
      },
    ],
  },

  wzmacniacze: {
    goals: ['Liczyć napięcia, obciążenia i straty', 'Rozumieć realne granice mocy systemu'],
    steps: [
      {
        t: 'Najprościej myśleć o wzmacniaczu jak o źródle napięcia: podaje na wyjście napięcie proporcjonalne do sygnału wejściowego, a prąd pobiera taki, jakiego zażąda głośnik. Moc jest więc wynikiem, a nie ustawieniem — wynika z napięcia i impedancji obciążenia. Ten sam wzmacniacz odda inną moc do 8 omów i inną do 4 omów, o ile wydoli prądowo.',
        eq: '<math display="block"><mi>P</mi><mo>=</mo><mfrac><msup><mi>U</mi><mn>2</mn></msup><mi>R</mi></mfrac><mspace width="1.6em"/><mi>U</mi><mo>=</mo><msqrt><mrow><mi>P</mi><mo>&#8202;</mo><mi>R</mi></mrow></msqrt></math>',
        where: 'P — moc [W]; U — napięcie skuteczne [V]; R — impedancja obciążenia [Ω]',
      },
      {
        t: 'Gdy łączysz głośniki równolegle, impedancja spada: dwie skrzynie ośmioomowe dają cztery omy, cztery skrzynie dwa omy. Dla wzmacniacza oznacza to większy pobór prądu, a każdy model ma określoną minimalną impedancję, poniżej której przechodzi w tryb ochrony albo się przegrzewa. Impedancja nominalna to zresztą uproszczenie — rzeczywista zmienia się z częstotliwością i w minimum bywa niższa niż liczba na tabliczce.',
      },
      {
        t: 'Katalogowa czułość mówi, ile decybeli wyprodukuje skrzynia przy jednym wacie z odległości metra. Wydaje się, że wystarczy dołożyć mocy, żeby dostać dowolny poziom — ale cewka drgawki nagrzewa się i jej rezystancja rośnie, więc przy dużych mocach skrzynia oddaje mniej, niż wynika z rachunku. To zjawisko nazywa się kompresją mocy i potrafi zabrać kilka decybeli właśnie wtedy, gdy najbardziej ich potrzebujesz — pod koniec głośnego koncertu.',
      },
      {
        t: 'Kabel głośnikowy też ma swoją rezystancję i tworzy z głośnikiem dzielnik napięcia. Liczy się długość całej pętli, czyli dwa razy odległość, oraz przekrój żyły. Przy niskiej impedancji obciążenia i długiej trasie straty robią się realne: pół oma szeregowo przy czterech omach obciążenia to już ponad decybel, który znika po drodze, plus utrata kontroli nad membraną w basie.',
        eq: '<math display="block"><mi>R</mi><mo>=</mo><mfrac><mrow><mi>&#961;</mi><mo>&#8202;</mo><mn>2</mn><mi>L</mi></mrow><mi>A</mi></mfrac><mspace width="1.4em"/><mi>&#916;</mi><mi>L</mi><mo>=</mo><mn>20</mn><mo>&#8202;</mo><mi>log</mi><mfrac><msub><mi>Z</mi><mi>gł</mi></msub><mrow><msub><mi>Z</mi><mi>gł</mi></msub><mo>+</mo><mi>R</mi></mrow></mfrac></math>',
        where: 'R — rezystancja pętli kabla [Ω]; ρ — rezystywność miedzi ≈ 0,0175 Ω·mm²/m; L — długość w jedną stronę [m]; A — przekrój żyły [mm²]; Z — impedancja głośnika [Ω]',
      },
      {
        t: 'W systemach koncertowych preset producenta nie jest „ustawieniem brzmienia”, tylko częścią konstrukcji głośnika. Zawiera podział pasma, korekcję, wyrównanie fazy między przetwornikami oraz limitery dopasowane do ich wytrzymałości termicznej i mechanicznej. Samodzielne budowanie zwrotnicy dla takiej skrzyni prawie zawsze pogarsza wynik i realnie grozi zniszczeniem przetworników, bo zabezpieczenia przestają pasować.',
      },
      {
        t: 'Na koniec praktyczna uwaga o zapasie mocy. Muzyka ma szczyty kilkanaście decybeli powyżej wartości średniej, więc wzmacniacz musi umieć oddać chwilowo znacznie więcej, niż wynosi jego obciążenie średnie. Dlatego dobiera się go z zapasem względem mocy znamionowej głośnika, a bezpieczeństwo zapewniają limitery — a nie „mniejszy wzmacniacz, żeby nie uszkodzić”. Zbyt mały wzmacniacz pracujący w ciągłym ograniczaniu jest dla przetwornika groźniejszy niż duży z poprawnie ustawioną ochroną.',
      },
    ],
  },

  filtry: {
    goals: ['Czytać filtr jednocześnie jako amplitudę i czas', 'Rozumieć zwrotnice i ich sumę'],
    steps: [
      {
        t: 'Filtr to nie jest ostra granica, tylko zbocze. Filtr pierwszego rzędu tłumi 6 decybeli na oktawę, drugiego 12, czwartego 24. Wyobraź sobie zjeżdżalnię: im wyższy rząd, tym bardziej stroma. Strome zbocze lepiej rozdziela pasma między przetworniki, ale nic nie jest za darmo — każdy rząd filtru przesuwa też sygnał w czasie w okolicy częstotliwości granicznej.',
      },
      {
        t: 'W zwrotnicach spotkasz dwie rodziny. Filtr Butterwortha ma w punkcie granicznym poziom −3 dB, a Linkwitza-Rileya −6 dB. Różnica wydaje się kosmetyczna, ale jest kluczowa: dwa sygnały o poziomie −6 dB, zgodne w fazie, sumują się dokładnie do poziomu wyjściowego. Dlatego zwrotnica Linkwitza-Rileya daje płaską sumę, a Butterwortha w punkcie przejścia lekki garb.',
      },
      {
        t: 'O fazie warto myśleć jak o opóźnieniu zależnym od częstotliwości. Filtr czwartego rzędu obraca fazę o pełny cykl w okolicy punktu granicznego — dlatego oba wyjścia zwrotnicy sumują się poprawnie, ale cała suma zachowuje się tak, jakby przepuścić ją przez dodatkowy układ opóźniający. To nie jest wada, tylko cena kontroli: nie da się stromo rozdzielić pasma bez ingerencji w czas.',
      },
      {
        t: 'Korektor parametryczny opisują trzy liczby: częstotliwość, wzmocnienie i dobroć Q, czyli szerokość działania. Duże Q to wąska szpilka, małe — szeroki, łagodny garb. W korekcji systemowej niemal zawsze pracujesz szeroko i płasko, bo poprawiasz ogólny charakter, a nie pojedynczy punkt. Filtry półkowe podnoszą lub obniżają całą górę albo cały dół pasma i świetnie nadają się do kształtowania krzywej docelowej.',
        eq: '<math display="block"><mi>Q</mi><mo>=</mo><mfrac><msub><mi>f</mi><mn>0</mn></msub><mrow><mi>&#916;</mi><mi>f</mi></mrow></mfrac></math>',
        where: 'Q — dobroć filtru; f₀ — częstotliwość środkowa [Hz]; Δf — szerokość pasma mierzona przy spadku 3 dB [Hz]',
      },
      {
        t: 'Filtry cyfrowe dzielą się na dwie rodziny. Te odwzorowujące świat analogowy mają fazę na stałe powiązaną z amplitudą — jak podnosisz, tak przesuwasz czas. Filtry o skończonej odpowiedzi impulsowej mogą mieć fazę liniową, czyli takie samo opóźnienie dla wszystkich częstotliwości, co pozwala korygować amplitudę bez zmiany relacji czasowych. Cena to opóźnienie całego toru, rosnące, gdy chcesz działać nisko — a w systemie z odsłuchem dousznym każda milisekunda jest zauważalna.',
      },
      {
        t: 'Jest jeszcze filtr, który nic nie zmienia w amplitudzie i istnieje wyłącznie po to, żeby przesuwać fazę. Nazywa się wszechprzepustowym i przydaje się dokładnie tam, gdzie dwa systemy mają w pasmie przejścia różne nachylenia fazy — na przykład suby i tablica. Zamiast zmuszać jeden z nich do kompromisu, dopasowujesz kształt fazy i suma robi się lepsza na większym obszarze widowni.',
      },
    ],
  },

  dsp: {
    goals: ['Wiedzieć, co naprawdę robi każdy parametr procesora', 'Świadomie zarządzać latencją i ochroną'],
    steps: [
      {
        t: 'Każdy element cyfrowego toru dokłada trochę opóźnienia: konwertery, procesor, sieć. Pojedynczo są to ułamki milisekundy, ale suma potrafi urosnąć do kilku milisekund — a to już wartość, która ma znaczenie przy wyrównywaniu systemów i przy odsłuchu dousznym. Dlatego opóźnienie własne systemu traktuje się jak parametr do zmierzenia, a nie do założenia.',
      },
      {
        t: 'Opóźnienie jest też Twoim głównym narzędziem. Dodajesz je do źródeł bliższych słuchaczowi, żeby „poczekały” na dźwięk z tych dalszych. Zasada jest jednokierunkowa: nie możesz przyspieszyć dźwięku, więc punktem odniesienia zawsze jest najdalsze źródło w danej relacji. Stąd w praktyce delaye i fille mają opóźnienie, a system główny zwykle zero.',
      },
      {
        t: 'Limitery pracują w dwóch rolach i warto je rozróżniać. Limiter o długim czasie reakcji pilnuje energii średniej, czyli tego, jak bardzo grzeje się cewka — chroni przed przepaleniem. Limiter szybki łapie pojedyncze szczyty i chroni membranę przed nadmiernym wychyleniem oraz wzmacniacz przed ścinaniem. Producenci ustawiają oba na podstawie pomiarów wytrzymałości konkretnego przetwornika, dlatego samodzielne „poluzowanie” ich to najprostsza droga do serwisu.',
      },
      {
        t: 'Procesory systemów liniowych mają jeszcze dwa użyteczne narzędzia. Kompensacja absorpcji powietrza podbija górę pasma w skrzyniach rzucających najdalej, bo to one tracą jej najwięcej po drodze. Korekcja strefowa pozwala traktować grupy skrzyń osobno, żeby wyrównać bilans tonalny od pierwszego do ostatniego rzędu. Zwykle wartości pochodzą wprost z programu do predykcji — warto sprawdzić, co już zostało policzone, zanim dołożysz swoje.',
      },
      {
        t: 'Praca w procesorze wymaga porządku. Grupy pozwalają zmieniać parametry wielu kanałów naraz, a zapisane stany pozwalają wrócić do znanego punktu. Nawyk jest prosty: zapisz stan wyjściowy, zanim cokolwiek zmienisz, i zapisz stan końcowy, gdy skończysz stroić. Bez tego po kilku godzinach nie odróżnisz, co poprawiło brzmienie, a co tylko wydawało się dobrym pomysłem.',
      },
      {
        t: 'Na koniec dwie liczby, które warto znać. Przy próbkowaniu 48 kHz jedna próbka trwa około 21 mikrosekund, więc rozdzielczość ustawiania opóźnienia jest znacznie drobniejsza, niż wymaga jakiekolwiek wyrównanie systemu. A latencja przetwarzania rośnie, gdy używasz filtrów o liniowej fazie — dlatego w systemach z odsłuchem dousznym stosuje się je oszczędnie i zawsze sprawdza całkowite opóźnienie toru.',
      },
    ],
  },

  fft: {
    goals: ['Rozumieć, co analizator naprawdę pokazuje', 'Dobierać sygnał i parametry do sytuacji'],
    steps: [
      {
        t: 'Analizator FFT działa jak aparat fotograficzny z ustawianym czasem naświetlania. Bierze fragment dźwięku o określonej długości i rozkłada go na częstotliwości. Im dłuższy fragment, tym dokładniej widać szczegóły w dole pasma, ale tym wolniej obraz reaguje na zmiany. Im krótszy — tym szybsza reakcja, ale bas rozmywa się w grube plamy. Nie da się mieć jednocześnie idealnej rozdzielczości w czasie i w częstotliwości; to nie ograniczenie programu, tylko fizyki.',
        eq: '<math display="block"><mi>&#916;</mi><mi>f</mi><mo>=</mo><mfrac><msub><mi>f</mi><mi>s</mi></msub><mi>N</mi></mfrac><mspace width="1.6em"/><mi>T</mi><mo>=</mo><mfrac><mi>N</mi><msub><mi>f</mi><mi>s</mi></msub></mfrac></math>',
        where: 'Δf — rozdzielczość częstotliwościowa [Hz]; T — długość okna czasowego [s]; f_s — częstotliwość próbkowania [Hz]; N — liczba próbek',
      },
      {
        t: 'Policzmy, żeby to poczuć. Przy próbkowaniu 48 kHz i oknie 4096 próbek rozdzielczość wynosi około 12 Hz, a okno trwa około 85 milisekund. Dwanaście herców to dużo w okolicy 40 Hz, gdzie cała oktawa ma 40 Hz szerokości, i zupełnie nieistotnie mało przy 5 kHz. Dlatego programy pomiarowe składają obraz z kilku okien naraz: długich dla basu i krótkich dla góry pasma. Dzięki temu widzisz stałą rozdzielczość „na oktawę”, zbliżoną do tego, jak słyszy ucho.',
      },
      {
        t: 'Teraz sygnał testowy. Szum różowy ma równo rozłożoną energię w każdej oktawie — brzmi jak szum wodospadu i jest bezpieczny dla przetworników. Sweep, czyli przestrajany ton, daje najlepszy stosunek sygnału do szumu i świetnie sprawdza się w cichym obiekcie. Możesz też mierzyć na muzyce, o ile w interesującym Cię paśmie jest wystarczająco dużo energii — analizator sam pokaże, czy dane są wiarygodne.',
      },
      {
        t: 'Kluczowa różnica, którą trzeba rozumieć: analizator w trybie widma (RTA) pokazuje po prostu to, co słyszy mikrofon — a więc zależy od tego, co gra zespół. Funkcja przejścia porównuje sygnał z mikrofonu z sygnałem wysłanym do systemu, więc pokazuje zachowanie samego systemu, niezależnie od materiału. Do strojenia używasz funkcji przejścia; widmo przydaje się do obserwowania koncertu i poziomu tła.',
      },
      {
        t: 'Uśrednianie to Twój regulator zaufania do obrazu. Więcej uśrednień oznacza spokojniejszy, stabilniejszy wykres, ale wolniejszą reakcję na zmiany. W hałaśliwym otoczeniu, na wietrze albo przy muzyce jako sygnale potrzebujesz więcej uśrednień, żeby odsiać przypadkowość. Przy szybkiej pracy na szumie — mniej, żeby od razu widzieć skutek zmiany.',
      },
      {
        t: 'Na koniec o wygładzaniu obrazu. Analizator potrafi pokazać każdą, najdrobniejszą dziurę w charakterystyce, ale większość z nich to lokalne zjawiska interferencyjne, których korektor i tak nie naprawi. Wygładzanie rzędu jednej trzeciej oktawy pokazuje to, co realnie słyszalne i wspólne dla obszaru. Surowe, niewygładzone dane zostaw do diagnozy szczegółów, a nie do podejmowania decyzji o barwie.',
      },
    ],
  },

  tf: {
    goals: ['Czytać amplitudę, fazę i koherencję razem', 'Ustawić pomiar, któremu można ufać'],
    steps: [
      {
        t: 'Pomiar dwukanałowy polega na porównaniu dwóch sygnałów: tego, który wysłałeś do systemu (referencja), i tego, który wrócił do mikrofonu (pomiar). Analizator pokazuje różnicę między nimi — czyli dokładnie to, co system i pomieszczenie zrobiły z dźwiękiem po drodze. To jak porównanie zdjęcia przed retuszem i po: interesuje Cię nie samo zdjęcie, tylko co się z nim stało.',
      },
      {
        t: 'Żeby to porównanie miało sens, trzeba uwzględnić czas przelotu. Dźwięk potrzebuje kilkudziesięciu milisekund, żeby dolecieć do mikrofonu, więc analizator musi opóźnić referencję o tyle samo. Służy do tego funkcja szukania opóźnienia: program liczy odpowiedź impulsową i znajduje moment, w którym dźwięk dotarł. Bez tej kompensacji wykres fazy będzie zawijał się jak szalony i nie powie Ci nic.',
      },
      {
        t: 'Amplituda mówi „ile” — jak głośno system gra w poszczególnych pasmach. Faza mówi „kiedy” — czy dane pasmo przychodzi wcześniej, czy później. Trzeci wykres, koherencja, mówi najważniejszą rzecz: czy w ogóle można wierzyć dwóm pozostałym. Koherencja bliska jedności oznacza, że to, co słyszy mikrofon, jest wyraźnie związane z tym, co wysłałeś. Koherencja niska — że w danym paśmie dominuje szum, pogłos albo warunki się zmieniają.',
      },
      {
        t: 'Praktyczny odruch brzmi: najpierw spójrz na koherencję, potem na resztę. Jeśli w okolicy 4 kHz koherencja leży na podłodze, to widoczna tam dziura może być całkowicie fikcyjna — wystarczy, że wiatr albo gwar publiczności zagłuszył sygnał. Podejmowanie decyzji o korekcji w takim paśmie to strzelanie na ślepo. Rozwiązania: głośniejszy sygnał, więcej uśrednień, bliższa pozycja mikrofonu.',
      },
      {
        t: 'Nachylenie wykresu fazy to ukryty miernik czasu. Stałe opóźnienie objawia się jako faza opadająca coraz szybciej wraz z częstotliwością. Gdy dwa systemy mają w pasmie przejścia równoległe wykresy fazy, sumują się dobrze; gdy wykresy się rozjeżdżają, suma będzie słabsza, niezależnie od tego, jak ładnie wyglądają amplitudy. To dlatego wyrównanie robi się na fazie, a nie „na oko po amplitudzie”.',
      },
      {
        t: 'Została jeszcze pozycja mikrofonu. Statyw na wysokości uszu daje obraz zbliżony do tego, co słyszy publiczność, ale łapie odbicie od podłogi, które robi charakterystyczne wcięcie w okolicy niskiej średnicy. Mikrofon położony na posadzce eliminuje to odbicie i daje czytelniejsze dane do decyzji czasowych, ale barwa mierzona przy ziemi nie odpowiada temu, co słychać na wysokości głowy. Stąd zasada: przy podłodze mierz czas, na statywie oceniaj barwę — albo uśrednij kilka pozycji.',
      },
    ],
  },

  ir: {
    goals: ['Wyciągać z jednego pomiaru całą historię obiektu', 'Rozpoznać echo, zanim zrobi to publiczność'],
    steps: [
      {
        t: 'Odpowiedź impulsowa to zapis tego, co obiekt zrobi z jednym krótkim trzaśnięciem. Najpierw dociera dźwięk bezpośredni, potem kolejne odbicia — od podłogi, ścian, dachu — a na końcu gęsty ogon pogłosu. To jak rzucenie kamienia do stawu i obserwowanie, które fale wracają i kiedy. Z jednego takiego pomiaru wyciągniesz niemal wszystko: barwę, czas, echa i pogłos.',
      },
      {
        t: 'Najbardziej praktyczny widok to energia w czasie. Każdy wyraźny pik to jedno odbicie, a jego położenie mówi, ile metrów nadłożyła droga. Wystarczy pomnożyć opóźnienie przez prędkość dźwięku: odbicie 40 milisekund po froncie pokonało dodatkowe 13–14 metrów. Znając geometrię obiektu, zwykle od razu wiesz, która powierzchnia je odesłała.',
        eq: '<math display="block"><mi>&#916;</mi><mi>d</mi><mo>=</mo><mi>c</mi><mo>&#8202;</mo><mi>&#916;</mi><mi>t</mi></math>',
        where: 'Δd — dodatkowa droga odbicia [m]; c — prędkość dźwięku [m/s]; Δt — opóźnienie odbicia względem dźwięku bezpośredniego [s]',
      },
      {
        t: 'Czas pogłosu opisuje, jak długo dźwięk zanika po wyłączeniu źródła. Umownie jest to czas spadku o 60 dB, ale w praktyce rzadko masz tyle czystej dynamiki, więc mierzy się spadek o 20 lub 30 dB i przelicza. W hali sportowej typowo wyjdzie kilka sekund, w teatrze około sekundy, a w studiu ułamek sekundy. Im dłuższy pogłos, tym mocniej musisz walczyć kierunkowością o zrozumiałość.',
      },
      {
        t: 'Dwie liczby pochodne bywają wygodniejsze niż sam czas pogłosu. Klarowność porównuje energię, która dotarła wcześnie, z tą, która dotarła późno — im wyższa, tym wyraźniejszy przekaz. Zrozumiałość mowy opisuje wskaźnik przyjmujący wartości od zera do jedynki, liczony z tej samej odpowiedzi impulsowej. Dla mowy i systemów bezpieczeństwa to on, a nie czas pogłosu, jest wymogiem projektowym.',
      },
      {
        t: 'Bramkowanie to sztuczka, która pozwala oglądać system „bez pomieszczenia”. Wycinasz z odpowiedzi impulsowej tylko początek, przed pierwszym odbiciem, i analizujesz sam dźwięk bezpośredni. Cena jest taka, że krótkie okno ogranicza rozdzielczość: przy oknie 5 milisekund wiarygodne dane masz dopiero od jakichś 200 Hz w górę. To świetne narzędzie do oceny samego głośnika w niedoskonałym obiekcie.',
      },
      {
        t: 'Na koniec zastosowanie praktyczne dla wielkiego formatu. Odpowiedź impulsowa zmierzona w kilku punktach widowni pokazuje, gdzie czają się echa od tylnej ściany i dachu, zanim usłyszy je publiczność. Kilkanaście minut z mikrofonem przed próbą oszczędza godzinę tłumaczenia realizatorowi, dlaczego werbel wraca echem w sektorze na wprost. To najtańsza forma diagnostyki, jaką masz.',
      },
    ],
  },

  narzedzia: {
    goals: ['Zbudować powtarzalny zestaw pomiarowy', 'Ufać własnym danym'],
    steps: [
      {
        t: 'Programy pomiarowe różnią się filozofią, ale liczą to samo. Smaart jest branżowym standardem przy strojeniu na żywo i wygodnie obsługuje wiele mikrofonów. Open Sound Meter robi to samo w podstawowym zakresie i jest darmowy — idealny na start. REW króluje przy pomiarach sweepem, akustyce pomieszczeń i odpowiedziach impulsowych. Warto znać dwa: jeden do pracy na żywo, jeden do analizy.',
      },
      {
        t: 'Mikrofon pomiarowy powinien mieć charakterystykę możliwie płaską i dookólną, a do tego plik korekcyjny od producenta, który poprawia jego drobne odchyłki. Nie musi być drogi, żeby był użyteczny, ale musi być sprawdzony. Traktuj go jak przyrząd, nie jak mikrofon estradowy: własny futerał, własny kabel, brak wypożyczania na wokal.',
      },
      {
        t: 'Kalibracja toru to moment, w którym Twoje decybele zaczynają coś znaczyć. Kalibrator akustyczny generuje znany poziom, zwykle 94 dB przy 1 kHz, a Ty ustawiasz w programie odczyt tak, by się zgadzał. Od tej chwili analizator pokazuje bezwzględne wartości, którymi możesz raportować głośność koncertu. Kalibrację powtarzasz po każdej zmianie mikrofonu, kabla lub wzmocnienia wejścia.',
      },
      {
        t: 'Pętla zwrotna referencji to prosty trik o dużym znaczeniu. Sygnał wysyłany do systemu wraca jednym kablem na wejście interfejsu, dzięki czemu analizator porównuje pomiar z tym, co naprawdę wyszło, a nie z tym, co teoretycznie powinno wyjść. Automatycznie znika też problem opóźnienia samego interfejsu i sterowników.',
      },
      {
        t: 'Przy pracy z wieloma mikrofonami obowiązuje jedna zasada przed wszystkim innym: najpierw zweryfikuj mikrofony. Ustaw je razem w jednym miejscu, puść sygnał i sprawdź, czy pokazują to samo. Jeśli któryś odstaje, wyrównaj wzmocnienie albo znajdź przyczynę. Dopiero wtedy ich rozstawienie po widowni da porównywalne dane — inaczej porównujesz mikrofony, a nie system.',
      },
      {
        t: 'Na koniec sprawa, o której się nie mówi: to praca głośna i długa. Kilkadziesiąt minut szumu różowego przy poziomach koncertowych to realne obciążenie dla Twojego słuchu, a słuch jest Twoim narzędziem pracy na całe życie. Mierz na rozsądnym poziomie, noś ochronniki, informuj ekipę, kiedy puszczasz szum, i rób przerwy. Zmęczony słuch podejmuje złe decyzje tonalne.',
      },
    ],
  },

  workflow: {
    goals: ['Prowadzić projekt w powtarzalnej kolejności', 'Nie dać się nabrać widokowi 2D'],
    steps: [
      {
        t: 'Projekt prowadzi się dokładnie w tej samej kolejności, w jakiej później stroisz system: od największego kawałka widowni do najmniejszego. Najpierw ustalasz, kto ma być obsłużony przez system główny, doprowadzasz go do porządnego pokrycia w tym obszarze, a potem patrzysz, co zostało nieobsłużone. Ta reszta dostaje własny subsystem — fill albo delay — i procedurę powtarzasz. Dzięki temu każdy element ma jasno przypisane zadanie, zamiast być „dosypany na wszelki wypadek”.',
      },
      {
        t: 'Model obiektu jest podstawą, a jego jakość decyduje o tym, czy predykcja cokolwiek znaczy. Potrzebujesz rzutu i przekroju z wymiarami, wysokości punktów rigowych z ich nośnością oraz realnego układu widowni. Płaszczyzny słuchania ustawia się na wysokości uszu: około 1,6–1,7 m dla stojących i około 1,2 m dla siedzących, a na trybunach osobno dla każdej sekcji. Brakujące dane uzupełnia się na wizji lokalnej: dalmierz, inklinometr, zdjęcia.',
      },
      {
        t: 'Pamiętaj, czego programy producentów nie liczą. Pokazują przede wszystkim dźwięk bezpośredni — to, gdzie trafia energia ze skrzyń. Nie pokazują pogłosu hali ani większości odbić. W suchej hali przewidywanie będzie bliskie rzeczywistości, w pogłosowej rzeczywistość będzie gorsza niż mapa. Traktuj więc mapę jako rozkład energii, a nie obietnicę brzmienia.',
      },
      {
        t: 'Największa pułapka to widok przekroju. Linie osi skrzyń wyglądają jak cienkie laserowe promienie, więc łatwo uwierzyć, że da się „przeskoczyć” czoło balkonu albo wąską przeszkodę, prowadząc oś nad nią i pod nią. W rzeczywistości między osiami też jest energia, a skrzynia to nie działko laserowe, tylko wachlarz. Widok trójwymiarowy pokazuje to uczciwie: przeskoczony balkon w 2D bywa oświetlony w 3D, a przy okazji powstaje zimne miejsce gdzieś z boku widowni.',
      },
      {
        t: 'Dodatkowo, gdy tablica świeci na powierzchnię nie pod kątem prostym, jej pokrycie wygina się w łuk — raz w „uśmiech”, raz w „grymas”. Dlatego kształt, który w przekroju wygląda równo, na płaskiej widowni potrafi zostawić cichszy pas przy krawędziach. Jeśli świadomie planujesz dziurę w pokryciu, musisz wiedzieć dokładnie, gdzie ona wyląduje — a to widać dopiero w modelu przestrzennym.',
      },
      {
        t: 'Projekt kończy się weryfikacją na obiekcie i dokumentacją. Po podwieszeniu sprawdzasz dalmierzem i inklinometrem, czy wysokości i kąty zgadzają się z projektem — kilka stopni różnicy potrafi przesunąć pokrycie o kilka rzędów. Pliki projektu wersjonujesz i opisujesz, bo w dniu montażu wszyscy muszą pracować na tej samej wersji: rigger, technik i Ty.',
      },
    ],
  },

  cele: {
    goals: ['Określić mierzalne cele przed projektem', 'Rozumieć, ile zmienności jest pożądane'],
    steps: [
      {
        t: 'Celem systemu nie jest, żeby brzmiał identycznie na każdym miejscu — to niemożliwe bez rozdania publiczności słuchawek. Celem jest, żeby decyzje realizatora przekładały się na wszystkie miejsca: jeśli podbije wokal o 2 dB, to każdy ma usłyszeć wokal głośniej, a nie tylko środek parteru. Dobra analogia to ustawienie kolorów w telewizorze: reżyser obrazu podejmuje decyzje, ale widz zobaczy je poprawnie tylko wtedy, gdy odbiornik ich nie zniekształca.',
      },
      {
        t: 'Postęp w tej pracy opisują dwie mierzalne wielkości. Zmienność poziomu mówi, o ile głośniej jest w jednym miejscu niż w drugim — potocznie „o ile głośniej jest z przodu”. Zmienność widmowa mówi, jak bardzo zmienia się barwa między miejscami. Obie widać w analizatorze i obie słychać uchem, więc można o nich rozmawiać konkretnie, zamiast powtarzać, że „na balkonie jakoś inaczej gra”.',
      },
      {
        t: 'Punktem wyjścia jest arytmetyka odległości. Jeśli najbliższe miejsca są 8 metrów od systemu, a najdalsze 80, to sam dystans daje 20 dB różnicy. Jeżeli chcesz zejść do 6 dB, wiesz, że projekt musi nadrobić 14 dB — kątami, krzywizną, dodatkowymi subsystemami. Ta jedna liczba, policzona na samym początku, mówi, jak trudne będzie zadanie i ile sprzętu naprawdę potrzebujesz.',
      },
      {
        t: 'Ale uwaga: zerowa zmienność nie jest celem. Ludzie wybierają sobie miejsce także ze względu na głośność — pod sceną chcą wrażenia fizycznego, na tyłach spokojniejszego odbioru. Mózg ocenia odległość źródła po trzech wskazówkach: poziomie, proporcji dźwięku bezpośredniego do pogłosu i ubytku wysokich częstotliwości. Jeśli wyzerujesz wszystkie trzy, ostatni rząd usłyszy scenę tuż przy uchu, choć widzi ją dwieście metrów dalej — i to jest nieprzyjemne. Dlatego ubytek góry pasma na dużych dystansach kompensuje się częściowo, a nie do zera.',
      },
      {
        t: 'Druga strona jednorodności to kształt pokrycia w funkcji częstotliwości. Pojedyncza skrzynia świeci wąsko w górze pasma i szeroko w dole, więc idąc w bok, tracisz najpierw wysokie — barwa zmienia się z pozycją. Żeby system brzmiał podobnie wszędzie, trzeba albo poszerzyć pokrycie w górze pasma, albo zwęzić je w dole, a w praktyce robi się jedno i drugie: kierunkowością elementów i długością tablicy.',
      },
      {
        t: 'Na koniec zapisz cele liczbowo, zanim otworzysz program do predykcji: docelowy poziom na stanowisku realizatora z zapasem na szczyty, dopuszczalną zmienność poziomu na widowni, wymaganą zrozumiałość mowy, ograniczenia hałasu na granicy terenu. Bez tego projekt jest kwestią gustu i nie da się go obronić ani przed sobą, ani przed klientem.',
      },
    ],
  },

  fills: {
    goals: ['Dobierać pozycje fillów pod stabilny czas', 'Traktować fille jako przedłużenie systemu głównego'],
    steps: [
      {
        t: 'Fill przejmuje widownię tam, gdzie system główny się kończy. To nie jest „dodatkowy głośnik na wszelki wypadek”, tylko element z przypisanym rewirem: pierwsze rzędy dla front fillu, sektory boczne dla out fillu, miejsca pod balkonem dla under-balcony. Jego zadaniem jest przywrócić w swoim obszarze ten sam poziom i tę samą barwę, jaką system główny zapewnia w swoim.',
        viz: 'strefy-odpowiedzialnosci',
      },
      {
        t: 'Najważniejsze kryterium przy wyborze pozycji to stabilność relacji czasowej. Chodzi o to, żeby idąc przez strefę styku, różnica czasu między fillem a systemem głównym zmieniała się jak najwolniej. Wtedy jedna decyzja o opóźnieniu obsłuży cały obszar, a nie jedno krzesło. Jeśli ta różnica zmienia się szybko, dostajesz filtr grzebieniowy wędrujący po widowni i żadne ustawienie nie będzie dobre wszędzie.',
      },
      {
        t: 'Klasyczny zły przykład to fill zawieszony na tylnej ścianie, grający ludziom w plecy. Idąc w głąb sali, oddalasz się od systemu głównego i jednocześnie zbliżasz do fillu — różnica czasu zmienia się wtedy najszybciej, jak to możliwe. Znacznie lepiej powiesić fill z przodu strefy, na czole balkonu, celując w tył: wtedy oddalasz się od obu źródeł naraz i różnica rośnie powoli.',
        viz: 'fill-geometria',
      },
      {
        t: 'Pomocne jest myślenie o fillach jak o przedłużeniu systemu głównego — w bok albo promieniście. Boczne tablice w arenie rozszerzają pokrycie w łuku, a szereg front fillów przedłuża je w linii wzdłuż sceny. Przy takim ustawieniu przejścia są naturalne, bo geometria obu systemów jest spójna, a nie przypadkowa.',
      },
      {
        t: 'Front fill ma jeszcze jedno zadanie poza poziomem: ratuje obraz dźwiękowy. W pierwszych rzędach tablica główna jest wysoko nad głowami, więc bez fillu dźwięk zdaje się dobiegać z góry. Kilka małych skrzyń na krawędzi sceny sprawia, że pierwszy dociera dźwięk „z poziomu sceny” i lokalizacja wraca tam, gdzie stoi wokalista. Rozstaw dobiera się tak, by krawędzie pokrycia sąsiadów spotykały się mniej więcej na linii pierwszego rzędu.',
      },
      {
        t: 'Wieża delay to ten sam pomysł w większej skali: dokłada poziom i świeżą energię bezpośrednią tam, gdzie system główny jest już daleko, cichy i pozbawiony góry pasma. Poziom fillu i delaya zwykle różni się o kilka decybeli od systemu głównego — front fille bywają ciut głośniejsze, wieże delay ciut cichsze — ale punktem wyjścia zawsze jest jednorodność, a nie „ile się da”.',
      },
    ],
  },

  rigging: {
    goals: ['Dobierać kąty i wysokość podwieszenia', 'Rozumieć konsekwencje mechaniczne swoich decyzji'],
    steps: [
      {
        t: 'Kąty między skrzyniami ustawia się tak, żeby osie kolejnych elementów trafiały w widownię w mniej więcej równych odstępach, od ostatniego rzędu do pierwszego. Taki rozkład sam z siebie wyrównuje energię w górze pasma i zmniejsza późniejszą potrzebę korekcji strefowej. W praktyce oznacza to małe kąty u góry tablicy i coraz większe w dół.',
        viz: 'celowanie-tablicy',
      },
      {
        t: 'Unikaj dużych skoków między sąsiednimi kątami. Przejście z jednego stopnia od razu na pięć tworzy zaburzenie w górze pasma — energia sąsiednich skrzyń przestaje się gładko łączyć i pojawia się nierówność w pokryciu. Lepiej wstawić stopień pośredni i rozłożyć zmianę łagodnie, nawet jeśli geometria widowni kusi, żeby „przeskoczyć”.',
      },
      {
        t: 'Górne skrzynie muszą przestrzelić ostatni rząd. Jeśli wycelujesz najwyższą skrzynię dokładnie w najdalsze miejsce, to miejsce wyląduje na samej krawędzi wiązki, gdzie góra pasma już opada. Praktyczna reguła mówi o mniej więcej dwóch skrzyniach zapasu ponad ostatni rząd. Test w terenie jest prosty: jeśli z ostatniego rzędu patrzysz prosto w grill górnej skrzyni albo, co gorsza, w ramę rigową, część widowni nie dostaje pełnego pasma.',
      },
      {
        t: 'Wysokość podwieszenia to kompromis. Wyżej oznacza mniejszą różnicę odległości między pierwszym a ostatnim rzędem, większą jednorodność i więcej miejsca na sensowną progresję kątów. Niżej oznacza lepszy obraz dźwiękowy związany ze sceną, bo źródło jest bliżej wysokości artysty. Zbyt nisko zaś tablica ma tak mały kąt pionowy do pokrycia, że wszystkie kąty schodzą do zera i przestajesz mieć narzędzie do wyrównywania poziomu.',
      },
      {
        t: 'Wysokość ma też konsekwencje mechaniczne, o których łatwo zapomnieć przy komputerze. Im wyżej wisi tablica, tym mocniej musi być pochylona w dół, a pochylenie przesuwa środek ciężkości do tyłu. Gdy środek ciężkości wyjdzie poza ramę, potrzebny jest punkt odciągający. Niższe podwieszenie oznacza więcej pochylenia ku górze, co przesuwa środek ciężkości do przodu i pozwala uzyskać większą krzywiznę na dole bez dodatkowego punktu. Rozkład obciążeń zawsze sprawdzasz w programie producenta, a decyzję o wykonalności podejmuje rigger.',
      },
      {
        t: 'Ostatnia rzecz to myślenie o całej przestrzeni, nie tylko o przedzie. Tablica promieniuje również do tyłu, zwłaszcza w dolnej średnicy. Podwieszona wysoko i pochylona w dół kieruje tę energię ponad scenę, a zawieszona nisko i płasko wysyła ją wprost na scenę i tylną ścianę. To, co wychodzi bokiem i tyłem systemu, bywa równie ważne jak to, co leci do publiczności — decyduje o czystości odsłuchu na scenie i o tym, co wróci z sali jako echo.',
      },
    ],
  },

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
        t: 'Falowód albo tuba to ścianki, które nadają fali kształt, zanim wyjdzie w świat. Konstrukcje o stałej kierunkowości starają się utrzymać podobny kąt w szerokim paśmie, bo inaczej brzmienie zmieniałoby się w zależności od tego, gdzie stoisz. Ale każda tuba ma częstotliwość graniczną wynikającą z tempa rozwierania: poniżej niej przestaje obciążać przetwornik i traci kontrolę nad wiązką, więc kąt zaczyna się rozszerzać, aż w basie skrzynia gra dookoła. Znajomość tej granicy dla własnych skrzyń mówi, od którego momentu w dół musisz kontrolować energię inaczej — układem wielu źródeł zamiast kształtem obudowy.',
        eq: '<math display="block"><msub><mi>f</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><mo>&#8202;</mo><mi>c</mi></mrow><mrow><mn>4</mn><mi>&#960;</mi></mrow></mfrac></math>',
        where: 'f_c — częstotliwość graniczna tuby [Hz]; m — stała rozwierania tuby wykładniczej [1/m]; c — prędkość dźwięku [m/s]',
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
