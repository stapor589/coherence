// Ścieżka nauki: rozdziały → tematy.
// Każdy temat: zagadnienia (checklista), quiz (c = indeks poprawnej odpowiedzi), zadania praktyczne, materiały (id z resources.js).

export const CHAPTERS = [
  {
    id: 'ch1', short: 'Fizyka', title: 'Fizyka dźwięku i sygnał', color: '#2de2c0', icon: 'wave',
    subtitle: 'Fale, decybele, sumowanie i słuch — język, w którym mówi każdy pomiar.',
    topics: [
      {
        id: 'fale', title: 'Fale, prędkość i długość fali', level: 'podstawy',
        summary: 'Każda decyzja o opóźnieniu, rozstawie subów czy kierunkowości wynika z relacji między częstotliwością, długością fali i czasem. Tę arytmetykę trzeba mieć „w palcach”.',
        concepts: [
          'Dźwięk to fala ciśnienia: powietrze drga w miejscu, a fala biegnie dalej',
          'Prędkość dźwięku zależy głównie od temperatury powietrza',
          'Długość fali: ile metrów zajmuje jeden cykl — bas „długi”, góra pasma „krótka”',
          'Okres i częstotliwość: 1 kHz to 1 ms, 100 Hz to 10 ms',
          'Faza: to samo opóźnienie znaczy co innego dla basu i dla góry pasma',
          'Temperatura zmienia czasy przelotu i rozstraja wyrównanie delayów',
        ],
        quiz: [
          { q: 'Jaka jest długość fali 100 Hz przy 20°C?', a: ['34,3 m', '3,43 m', '0,343 m', '1,72 m'], c: 1, e: 'λ = c/f = 343/100 ≈ 3,43 m.' },
          { q: 'O ile w przybliżeniu wzrośnie prędkość dźwięku, gdy temperatura wzrośnie z 10°C do 30°C?', a: ['~1,2 m/s', '~6 m/s', '~12 m/s', '~24 m/s'], c: 2, e: '0,606 m/s na °C × 20°C ≈ 12 m/s.' },
          { q: 'Jakie przesunięcie fazy daje opóźnienie 1 ms dla 250 Hz?', a: ['45°', '90°', '180°', '360°'], c: 1, e: 'φ = 360° · 250 · 0,001 = 90°.' },
          { q: 'Ile oktaw obejmuje pasmo 20 Hz – 20 kHz?', a: ['3', '7', '10', '12'], c: 2, e: '2¹⁰ = 1024, czyli ~10 oktaw.' },
        ],
        tasks: [
          'Policz czas przelotu dla wieży delay oddalonej o 60 m przy 10°C, 20°C i 30°C. Zanotuj różnicę w ms i oceń, czy wymaga korekty w trakcie dnia.',
          'Wypisz długości fali dla 31,5 / 63 / 125 / 250 / 500 Hz i porównaj je z wymiarami subów, stacków i sceny, na których pracujesz.',
        ],
        res: ['w-speed', 'w-wavelength', 'b-everest', 't-sengpiel'],
      },
      {
        id: 'db', title: 'Decybele, poziomy i wagi', level: 'podstawy',
        summary: 'dB SPL, dBu, dBV, dBFS, LAeq, LCpeak — pomylenie skali to najczęstsze źródło błędów w gain structure i monitoringu hałasu.',
        concepts: [
          'Decybel to porównanie dwóch wielkości, a nie „ilość dźwięku”',
          '+6 dB = dwa razy większe ciśnienie, +3 dB = dwa razy większa moc, +10 dB ≈ dwa razy głośniej',
          'Punkty odniesienia: dB SPL, dBu, dBV i dBFS',
          'Wagi A i C — dlaczego miernik „słyszy” inaczej niż ucho',
          'Leq i LCpeak: uśredniona energia kontra pojedynczy szczyt',
          'Szczyt, RMS i współczynnik szczytu — skąd bierze się potrzeba headroomu',
        ],
        quiz: [
          { q: 'Jaka jest różnica między +4 dBu a 0 dBV?', a: ['4 dB', 'ok. 1,78 dB', 'ok. 2,2 dB', '0 dB'], c: 1, e: '0 dBV = +2,21 dBu, więc +4 dBu ≈ +1,78 dBV.' },
          { q: 'Napięcie na tym samym obciążeniu wzrosło dwukrotnie. O ile wzrósł poziom?', a: ['+3 dB', '+6 dB', '+10 dB', '+20 dB'], c: 1, e: '20·log(2) ≈ 6 dB.' },
          { q: 'Kolumna 98 dB (1 W/1 m) zasilona mocą 100 W — ile SPL teoretycznie na 1 m (bez kompresji mocy)?', a: ['108 dB', '118 dB', '128 dB', '198 dB'], c: 1, e: '10·log(100) = +20 dB → 118 dB.' },
          { q: 'Która waga lepiej opisuje energię niskich częstotliwości na koncercie?', a: ['A', 'C', 'Żadna — tylko dBFS', 'A i C dają to samo'], c: 1, e: 'Waga A mocno tłumi LF; C jest prawie płaska w pasmie subów.' },
        ],
        tasks: [
          'Sprawdź w dokumentacji swojego procesora/konsolety, ile dBu odpowiada 0 dBFS. Zapisz tabelkę: −18, −12, −6, 0 dBFS → dBu → V.',
          'Na najbliższym evencie zmierz jednocześnie LAeq i LCeq na FOH. Zanotuj różnicę C−A i zastanów się, co mówi o balansie LF.',
        ],
        res: ['w-decibel', 'w-aweight', 't-sengpiel', 'b-davis'],
      },
      {
        id: 'sumowanie', title: 'Sumowanie sygnałów i interferencja', level: 'średni',
        summary: 'Każde dwa głośniki grające to samo tworzą filtr grzebieniowy. Rozumienie sumowania (poziom + faza) to fundament projektu i strojenia.',
        concepts: [
          'Dwa głośniki grające to samo: raz głośniej, raz ciszej — decyduje różnica drogi',
          'Sygnały skorelowane (+6 dB) i nieskorelowane (+3 dB)',
          'Filtr grzebieniowy: skąd biorą się regularne dziury w paśmie',
          'Różnica poziomów ogranicza interferencję (10 dB → ok. +2,4 / −3,3 dB)',
          'Strefy izolacji, przejścia i sumowania na widowni',
          'Kompromis projektowy: moc czy jednorodność',
        ],
        quiz: [
          { q: 'Dwa nieskorelowane źródła o równym poziomie dają:', a: ['+0 dB', '+3 dB', '+6 dB', '+10 dB'], c: 1, e: 'Sumują się moce: 10·log(2) ≈ 3 dB.' },
          { q: 'Dwa równe sygnały przesunięte o 2 ms — gdzie jest pierwsze wycięcie?', a: ['250 Hz', '500 Hz', '1 kHz', '2 kHz'], c: 0, e: 'f = 1/(2·0,002) = 250 Hz, kolejne co 500 Hz.' },
          { q: 'Dwa skorelowane sygnały różnią się o 10 dB. Maksymalny ripple wynosi około:', a: ['±0,5 dB', '+2,4 / −3,3 dB', '+6 / −∞ dB', '±10 dB'], c: 1, e: 'Stosunek amplitud 0,316: 20·log(1,316) ≈ +2,4, 20·log(0,684) ≈ −3,3 dB.' },
          { q: 'Kiedy dwa identyczne sygnały dają +6 dB?', a: ['Zawsze', 'Przy równych poziomach i zgodnej fazie', 'Przy różnicy 3 dB', 'Tylko w polu pogłosowym'], c: 1, e: 'Pełne sumowanie wymaga równych amplitud i zerowej różnicy fazy.' },
        ],
        tasks: [
          'Ustaw dwie identyczne kolumny i zmierz TF w punkcie równo- i nierównoodległym (różnica ok. 1 m). Porównaj położenie wycięć z obliczeniem.',
          'Użyj kalkulatora sumowania w Warsztacie, by zbudować tabelkę ripple dla różnic 0, 3, 6, 10, 15 dB.',
        ],
        res: ['b-mccarthy', 'w-comb', 'a-mvv', 't-sengpiel'],
      },
      {
        id: 'sluch', title: 'Słuch i psychoakustyka', level: 'średni',
        summary: 'System stroimy dla ludzi, nie dla mikrofonu. Efekt pierwszeństwa, krzywe jednakowej głośności i lokalizacja decydują o tym, co publiczność faktycznie odbiera.',
        concepts: [
          'Krzywe jednakowej głośności (ISO 226) — zależność czułości od poziomu',
          'Efekt pierwszeństwa (Haasa): lokalizacja wg pierwszego frontu fali',
          'Próg echa i zakres fuzji odbić',
          'Lokalizacja: ITD (niskie częstotliwości), ILD (wysokie)',
          'Maskowanie częstotliwościowe i czasowe',
          'Zmęczenie słuchu (TTS) i jego wpływ na decyzje przy strojeniu',
          'Pasma krytyczne: ucho analizuje dźwięk zestawem filtrów o szerokości rosnącej z częstotliwością (ok. 160 Hz przy 1 kHz)',
          'Nieliniowość ucha: przy wysokich poziomach powstają harmoniczne i tony różnicowe, których nie ma w sygnale',
          'Przewód słuchowy działa jak rezonator ćwierćfalowy — podbicie rzędu kilkunastu dB w okolicy 2–4 kHz',
        ],
        quiz: [
          { q: 'Dlaczego delay często ustawia się kilka ms później niż wynika z samej geometrii?', a: ['By zmniejszyć latencję', 'By wykorzystać efekt pierwszeństwa i utrzymać obraz na scenie', 'By skompensować absorpcję powietrza', 'By uniknąć kompresji mocy'], c: 1, e: 'Gdy pierwszy dociera dźwięk z main, lokalizacja zostaje na scenie.' },
          { q: 'Przy niskich poziomach odsłuchu ucho jest:', a: ['Bardziej czułe na LF', 'Mniej czułe na LF', 'Jednakowo czułe', 'Mniej czułe na 3 kHz'], c: 1, e: 'Krzywe jednakowej głośności rozchodzą się w LF przy niskich poziomach.' },
          { q: 'Główna wskazówka lokalizacji poziomej dla niskich częstotliwości to:', a: ['ILD', 'ITD', 'Filtr małżowiny', 'Pogłos'], c: 1, e: 'Dla długich fal głowa nie tworzy cienia, więc liczy się różnica czasu.' },
        ],
        tasks: [
          'Przeprowadź test: main + front fill. Zmieniaj opóźnienie fillu od −5 do +20 ms i zanotuj, kiedy obraz „przeskakuje” na fill, a kiedy pojawia się echo.',
        ],
        res: ['w-equal', 'w-precedence', 'w-localization', 'b-toole'],
      },
    ],
  },

  {
    id: 'ch2', short: 'Elektroakustyka', title: 'Elektroakustyka i łańcuch sygnałowy', color: '#5aa9ff', icon: 'amp',
    subtitle: 'Gain structure, wzmacniacze, filtry i DSP — od konsolety do cewki.',
    topics: [
      {
        id: 'gain', title: 'Gain structure i interfejsy', level: 'podstawy',
        summary: 'Dobra struktura wzmocnienia to maksymalny zakres dynamiki i przewidywalne miejsce ograniczania. Zła — szum, przedwczesny clip i limitery, które pracują „nie tam”.',
        concepts: [
          'Poziomy mikrofonowe i liniowe; nominalne +4 dBu vs maksymalne +20…+28 dBu',
          'Sygnał zbalansowany i CMRR',
          'Kalibracja konwerterów: ile dBu = 0 dBFS',
          'Czułość wejściowa wzmacniacza (napięcie/dBu na pełną moc)',
          'Headroom i szum własny — gdzie tracimy dynamikę',
          'Zasada jednego, kontrolowanego punktu ograniczania',
        ],
        quiz: [
          { q: 'Konwerter: 0 dBFS = +24 dBu. Ile dBu ma sygnał −18 dBFS?', a: ['+6 dBu', '−6 dBu', '+18 dBu', '+42 dBu'], c: 0, e: '+24 − 18 = +6 dBu.' },
          { q: 'Główna zaleta sygnału zbalansowanego to:', a: ['Wyższy poziom', 'Odrzucanie zakłóceń wspólnych (CMRR)', 'Niższa latencja', 'Brak potrzeby ekranu'], c: 1, e: 'Zakłócenia indukowane w obu żyłach są odejmowane na wejściu różnicowym.' },
          { q: 'Procesor oddaje max +24 dBu, wzmacniacz osiąga pełną moc przy +4 dBu. Co grozi?', a: ['Nic, więcej zapasu jest lepsze', 'Wzmacniacz może przesterować 20 dB przed clipem procesora — limitery trzeba skalibrować', 'Szum procesora wzrośnie o 20 dB', 'Spadek pasma'], c: 1, e: 'Punkt ograniczania musi być tam, gdzie kończą się możliwości wzmacniacza/głośnika.' },
        ],
        tasks: [
          'Narysuj diagram gain structure swojego typowego systemu (konsoleta → sieć → procesor → wzmacniacz) z poziomami max w dBu na każdym etapie.',
        ],
        res: ['w-balanced', 'w-gain', 'b-self', 'b-yamaha'],
      },
      {
        id: 'wzmacniacze', title: 'Głośniki, wzmacniacze i kable', level: 'podstawy',
        summary: 'Impedancja, napięcie, straty w przewodach i kompresja mocy — różnica między „teoretycznym” a faktycznym SPL.',
        concepts: [
          'Impedancja nominalna vs krzywa impedancji; łączenie równoległe',
          'P = U² / R — myślenie napięciem, nie mocą',
          'Czułość, max SPL i kompresja mocy',
          'Rezystancja kabla: długość pętli, przekrój, straty w dB',
          'Współczynnik tłumienia (damping factor) i jego realne znaczenie',
          'Presety producenta i dlaczego w PA koncertowym są podstawą',
        ],
        quiz: [
          { q: 'Cztery kolumny 8 Ω połączone równolegle to:', a: ['32 Ω', '8 Ω', '4 Ω', '2 Ω'], c: 3, e: '8/4 = 2 Ω.' },
          { q: 'Jakie napięcie odpowiada 800 W na 8 Ω?', a: ['28 V', '40 V', '80 V', '100 V'], c: 2, e: 'U = √(P·R) = √6400 = 80 V.' },
          { q: 'Kabel Cu 2,5 mm², 50 m w jedną stronę, obciążenie 4 Ω. Straty wynoszą około:', a: ['0,1 dB', '1,4 dB', '3 dB', '6 dB'], c: 1, e: 'R = 0,0175·100/2,5 = 0,7 Ω; 20·log(4/4,7) ≈ −1,4 dB.' },
        ],
        tasks: [
          'Policz w Warsztacie straty dla najdłuższego ciągu kabli głośnikowych w swoim systemie. Zdecyduj, czy wzmacniacze powinny stać bliżej.',
        ],
        res: ['w-loudspeaker', 'w-damping', 'b-davis', 'b-ballou'],
      },
      {
        id: 'filtry', title: 'Filtry i zwrotnice', level: 'średni',
        summary: 'Każdy filtr to zmiana amplitudy i fazy. Zrozumienie tej pary to warunek poprawnego wyrównania zwrotnic i subów.',
        concepts: [
          'HPF/LPF — nachylenie 6 dB/okt na rząd filtru',
          'Butterworth (−3 dB w fc) vs Linkwitz-Riley (−6 dB w fc, płaska suma)',
          'LR4: 24 dB/okt, obrót fazy sumy 360°',
          'EQ parametryczny: częstotliwość, wzmocnienie, Q; filtry półkowe',
          'Minimalnofazowe IIR vs liniowofazowe FIR — koszt w latencji',
          'Opóźnienie grupowe i filtry all-pass',
        ],
        quiz: [
          { q: 'Filtr LR4 ma nachylenie i poziom w częstotliwości granicznej:', a: ['12 dB/okt, −3 dB', '24 dB/okt, −6 dB', '24 dB/okt, −3 dB', '48 dB/okt, −6 dB'], c: 1, e: 'Linkwitz-Riley 4. rzędu = dwa kaskadowe Butterworthy 2. rzędu.' },
          { q: 'Suma LP i HP LR4 daje:', a: ['Wycięcie w fc', '+3 dB w fc', 'Płaską amplitudę z obrotem fazy jak all-pass', 'Płaską amplitudę i fazę'], c: 2, e: 'Amplituda płaska, faza obraca się o 360° w okolicy fc.' },
          { q: 'Główna zaleta filtrów FIR liniowofazowych:', a: ['Zerowa latencja', 'Niezależna kontrola amplitudy i fazy', 'Mniejsze zużycie DSP', 'Lepsze działanie poniżej 20 Hz bez kosztów'], c: 1, e: 'Kosztem jest latencja, rosnąca zwłaszcza dla niskich częstotliwości.' },
          { q: 'Większe Q filtru parametrycznego oznacza:', a: ['Szersze pasmo', 'Węższe pasmo', 'Większe wzmocnienie', 'Większe nachylenie'], c: 1, e: 'Q ≈ fc / szerokość pasma.' },
        ],
        tasks: [
          'W Open Sound Meter lub Smaart zmierz elektrycznie procesor: HPF Butterworth 2. rzędu i LR4 na tej samej fc. Porównaj amplitudę i fazę.',
        ],
        res: ['w-lr', 'w-crossover', 'w-fir', 'a-linkwitz'],
      },
      {
        id: 'dsp', title: 'DSP, opóźnienia i limitery', level: 'średni',
        summary: 'Procesor systemowy to miejsce, gdzie teoria zamienia się w liczby: delay, filtry, limitery i kompensacje. Trzeba wiedzieć, co naprawdę robi każdy parametr.',
        concepts: [
          'Latencja konwersji i przetwarzania w całym torze',
          'Opóźnienie jako narzędzie wyrównania czasowego',
          'Limitery RMS (termiczne) vs peak (wychylenie membrany, clip)',
          'Próbkowanie, aliasing, rozdzielczość opóźnienia (1 próbka @ 48 kHz ≈ 20,8 µs)',
          'Kompensacja absorpcji powietrza i array EQ w procesorach producentów',
          'Grupy, snapshoty i dokumentowanie ustawień',
        ],
        quiz: [
          { q: 'Limiter RMS chroni głównie przed:', a: ['Przekroczeniem wychylenia membrany', 'Przegrzaniem cewki', 'Aliasingiem', 'Clipem konwertera'], c: 1, e: 'Uśrednianie RMS odpowiada energii cieplnej w cewce.' },
          { q: 'Ile trwa jedna próbka przy 48 kHz?', a: ['~2,08 µs', '~20,8 µs', '~0,208 ms', '~2,08 ms'], c: 1, e: '1/48000 s ≈ 20,8 µs.' },
          { q: 'Kompensacja absorpcji powietrza polega na:', a: ['Obcięciu LF', 'Podbiciu HF dla elementów grających daleko', 'Dodaniu opóźnienia', 'Zmniejszeniu poziomu subów'], c: 1, e: 'Powietrze tłumi HF proporcjonalnie do odległości i zależnie od wilgotności.' },
        ],
        tasks: [
          'Zmierz całkowitą latencję systemu (wejście konsolety → mikrofon pomiarowy) funkcją delay finder. Rozpisz, ile wnosi sieć, procesor i odległość.',
        ],
        res: ['b-mccarthy', 'w-fir', 'a-mvv'],
      },
    ],
  },

  {
    id: 'ch3', short: 'Kierunkowość', title: 'Kierunkowość i konfiguracje źródeł', color: '#b58cff', icon: 'speaker',
    subtitle: 'Point source, line array, suby kardioidalne i end-fire.',
    topics: [
      {
        id: 'kierunkowosc', title: 'Kierunkowość głośników', level: 'podstawy',
        summary: 'Kąt pokrycia nie jest stały — zmienia się z częstotliwością. Karta katalogowa to punkt wyjścia, balon kierunkowości to prawda.',
        concepts: [
          'Kąt pokrycia to umowna granica −6 dB, a nie ostra ściana',
          'Ten sam głośnik jest wąski w górze pasma i szeroki w basie',
          'Żeby kierować falę, źródło musi być duże względem długości fali',
          'Q i DI — liczby opisujące, jak bardzo źródło skupia energię',
          'Tuby i falowody działają tylko powyżej swojej granicy rozmiaru',
          'Dane balonowe (GLL, CLF) mówią prawdę, katalogowe „90 × 40” tylko część',
        ],
        quiz: [
          { q: 'Kąt pokrycia głośnika zwykle definiuje się w punktach:', a: ['−3 dB', '−6 dB', '−10 dB', '−20 dB'], c: 1, e: 'Standardem w nagłośnieniu jest −6 dB względem osi.' },
          { q: 'Dlaczego kolumna 12" z tubą 90° nie trzyma 90° przy 300 Hz?', a: ['Przez kompresję mocy', 'Źródło jest za małe względem długości fali', 'Przez filtr zwrotnicy', 'Przez absorpcję powietrza'], c: 1, e: 'Kontrola kierunkowości wymaga rozmiaru porównywalnego z λ (przy 300 Hz ≈ 1,14 m).' },
          { q: 'DI = 10 dB odpowiada Q równemu:', a: ['2', '3,16', '10', '100'], c: 2, e: 'DI = 10·log Q → Q = 10.' },
        ],
        tasks: [
          'Otwórz dane kierunkowości kolumny, której używasz najczęściej (GLL/predykcja). Zapisz beamwidth poziomy dla 250 Hz, 1 kHz, 4 kHz, 8 kHz.',
        ],
        res: ['w-directivity', 'b-davis', 't-easefocus'],
      },
      {
        id: 'pointsource', title: 'Źródła punktowe i układy punktowe', level: 'średni',
        summary: 'Układanie kolumn punktowych to zarządzanie nakładaniem: za mały kąt = interferencja, za duży = dziura w pokryciu.',
        concepts: [
          'Każde podwojenie odległości to −6 dB — czysta geometria',
          'Zakres odległości: ile decybeli różnicy robi sam dystans do ostatniego rzędu',
          'Różnicę poziomów pokonuje się rozkładem energii, nie mocą',
          'Kąt rozwarcia równy kątowi pokrycia — krawędzie wiązek spotykają się bez dziury',
          'Nakładanie: zysk poziomu kontra interferencja zależna od częstotliwości',
        ],
        quiz: [
          { q: 'Źródło punktowe, pole swobodne: z 8 m do 32 m poziom spada o:', a: ['−6 dB', '−12 dB', '−18 dB', '−24 dB'], c: 1, e: 'Dwa podwojenia odległości → 2 × −6 dB.' },
          { q: 'Dwie kolumny 60° rozwarte pod kątem 60° dają:', a: ['Pokrycie ~60° z +6 dB na osi', 'Pokrycie ~120° z minimalnym nakładaniem', 'Pokrycie 180°', 'Silne sumowanie na osi'], c: 1, e: 'Krawędzie −6 dB spotykają się na linii styku — suma ~0 dB.' },
          { q: 'Zbyt mały kąt między kolumnami punktowymi skutkuje:', a: ['Dziurą w pokryciu', 'Interferencją w strefie nakładania', 'Spadkiem latencji', 'Kompresją mocy'], c: 1, e: 'Duże nakładanie przy różnicy dróg = filtry grzebieniowe (lobing).' },
        ],
        tasks: [
          'Zaprojektuj w EASE Focus lub MAPP front fill z 4 małych kolumn dla pierwszego rzędu w odległości 3 m. Znajdź rozstaw, przy którym ripple jest najmniejszy.',
        ],
        res: ['w-inverse', 'b-mccarthy', 't-easefocus', 't-mapp'],
      },
      {
        id: 'linearray', title: 'Line array', level: 'średni',
        summary: 'Line array to nie magia, tylko kontrolowana interferencja. Kąty, długość tablicy i warunki WST decydują o zasięgu i jednorodności.',
        concepts: [
          'Tablica pracuje dwoma mechanizmami: poziomem w górze pasma, czasem w basie',
          'Szereg źródeł zawęża wiązkę, bo z boków dotarcia rozjeżdżają się w czasie',
          'O kierunkowości w basie decyduje długość tablicy, nie liczba skrzyń',
          'Małe kąty u góry (daleki rzut), duże na dole (bliskie rzędy)',
          'W górze pasma słyszysz kilka skrzyń, w basie całą tablicę — konsekwencje dla EQ',
          'Dlaczego fabryczna tablica nie „grzebieniuje”, a domowy stack tak',
        ],
        quiz: [
          { q: 'W polu bliskim idealnego źródła liniowego spadek na podwojenie odległości to:', a: ['−1,5 dB', '−3 dB', '−6 dB', '−12 dB'], c: 1, e: 'Fala cylindryczna: energia rozkłada się na powierzchni rosnącej liniowo.' },
          { q: 'Dłuższa tablica daje przede wszystkim:', a: ['Szersze pokrycie poziome', 'Lepszą kontrolę pionową w niższych częstotliwościach', 'Mniejszą latencję', 'Mniej HF'], c: 1, e: 'Kontrola kierunkowości zależy od wymiaru względem λ.' },
          { q: 'Małe kąty między górnymi elementami tablicy służą do:', a: ['Pokrycia pierwszych rzędów', 'Koncentracji energii na dalekie rzędy', 'Redukcji wagi', 'Poprawy LF'], c: 1, e: 'Mniejszy splay = więcej elementów „celuje” w ten sam obszar → większy SPL daleko.' },
          { q: 'Pole bliskie line array dla wyższych częstotliwości sięga:', a: ['Bliżej niż dla niskich', 'Dalej niż dla niskich', 'Tak samo daleko', 'Nie istnieje'], c: 1, e: 'Granica jest proporcjonalna do f·H².' },
        ],
        tasks: [
          'Weź salę z ostatniego eventu i zrób w software producenta dwa warianty: tablica 8 i 12 elementów. Porównaj mapy SPL w pasmach 125 Hz i 4 kHz.',
          'Przeczytaj artykuł o WST i zapisz własnymi słowami, dlaczego odstęp źródeł musi być mały względem λ.',
        ],
        res: ['w-linearray', 'l-aes', 't-soundvision', 't-arraycalc', 'b-mccarthy'],
      },
      {
        id: 'suby', title: 'Subwoofery: układy i kierunkowość', level: 'zaawansowany',
        summary: 'Układ subów decyduje o power alley, energii na scenie i skargach sąsiadów. Kardioidy, end-fire i arc to narzędzia, które system engineer musi umieć policzyć.',
        concepts: [
          'Pojedynczego suba nie da się wycelować — gra prawie dookoła',
          'Szereg subów: kierunkowość z długości linii, rozstaw poniżej λ/2',
          'End-fire: sztafeta skrzyń, rozstaw ok. λ/4 i opóźnienie równe czasowi przelotu',
          'Układ gradientowy: strojenie „od tyłu”, opóźnienie plus odwrócona polaryzacja',
          'Power alley przy subach L/R i sposoby na jego rozbicie (szereg, centrum, łuk)',
          'Liczą się środki akustyczne, nie obudowy; presety producenta mają korektę policzoną',
        ],
        quiz: [
          { q: 'End-fire z dwoma rzędami w odstępie 1,4 m. Który rząd opóźniamy i o ile?', a: ['Tylny o ~4,1 ms', 'Przedni o ~4,1 ms', 'Oba o 2 ms', 'Żaden, odwracamy polaryzację'], c: 1, e: 'Przedni rząd czeka na falę z tylnego: 1,4/343 ≈ 4,1 ms.' },
          { q: 'Power alley powstaje, gdy:', a: ['Suby stoją w centrum w jednym stacku', 'Suby L/R są szeroko rozstawione i interferują', 'Suby są podwieszone', 'Użyto filtru LR4'], c: 1, e: 'Na osi symetrii sumują się w fazie, obok powstają wycięcia zależne od pozycji.' },
          { q: 'W stacku gradientowym z jednym subem skierowanym do tyłu, sub tylny zwykle otrzymuje:', a: ['Tylko wyższy poziom', 'Opóźnienie odpowiadające różnicy dróg i odwróconą polaryzację', 'Tylko HPF', 'Nic — działa pasywnie'], c: 1, e: 'Z przodu fale się sumują, z tyłu znoszą.' },
          { q: 'Aby uniknąć lobingu, środki subów w rzędzie dla 100 Hz powinny być rozstawione mniej niż ok.:', a: ['0,4 m', '1,7 m', '3,4 m', '6,8 m'], c: 1, e: 'λ/2 dla 100 Hz ≈ 1,72 m.' },
        ],
        tasks: [
          'Policz w Warsztacie end-fire dla 63 Hz: optymalny rozstaw λ/4 i opóźnienie. Porównaj z możliwościami sceny, na której pracujesz.',
          'Zasymuluj (predykcja lub pomiar) L/R subs vs mono center. Zanotuj szerokość power alley przy 63 Hz.',
        ],
        res: ['a-mvv', 'a-sdl', 't-arraycalc', 'b-mccarthy'],
      },
    ],
  },

  {
    id: 'ch4', short: 'Predykcja', title: 'Predykcja i projekt systemu', color: '#ffb547', icon: 'blueprint',
    subtitle: 'Od rysunku sali do gotowego projektu z fills, delay i rigiem.',
    topics: [
      {
        id: 'workflow', title: 'Workflow predykcji i model sali', level: 'podstawy',
        summary: 'Predykcja jest tak dobra jak model. Najwięcej czasu oszczędza dobre advance: rysunki, wysokości, nośności i realne pozycje publiczności.',
        concepts: [
          'Projektuj w tej samej kolejności, w jakiej będziesz stroić: od największego rewiru',
          'Model obiektu: rysunki, punkty rigowe i płaszczyzny słuchania na wysokości uszu',
          'Programy producentów liczą głównie dźwięk bezpośredni, nie pogłos sali',
          'Widok 2D kusi „przeskakiwaniem” balkonów — między osiami też jest energia',
          'Świecenie na powierzchnie pod kątem wygina pokrycie w łuk',
          'Weryfikacja na obiekcie (dalmierz, inklinometr) i wersjonowanie projektu',
        ],
        quiz: [
          { q: 'Soundvision, ArrayCalc czy MAPP 3D w podstawowym trybie symulują:', a: ['Pełny pogłos sali', 'Głównie dźwięk bezpośredni', 'Tylko odbicia', 'Tylko STI'], c: 1, e: 'Dlatego sala o dużym pogłosie może brzmieć inaczej niż mapa predykcji.' },
          { q: 'Wysokość płaszczyzny słuchania dla publiczności stojącej to około:', a: ['0,5 m', '1,2 m', '1,6–1,7 m', '2,5 m'], c: 2, e: 'Wysokość uszu osoby stojącej.' },
          { q: 'Pierwszy krok przy nieznanej sali:', a: ['Wybór presetu EQ', 'Pozyskanie rysunków i danych rigowych', 'Zamówienie subów', 'Pomiar RT60 w dniu eventu'], c: 1, e: 'Bez wymiarów i nośności predykcja jest zgadywaniem.' },
        ],
        tasks: [
          'Zbuduj własny szablon checklisty „advance sali” (wymiary, punkty, nośności, zasilanie, publiczność, ograniczenia hałasu) i dodaj go do Dziennika.',
        ],
        res: ['t-soundvision', 't-arraycalc', 't-mapp', 't-easefocus'],
      },
      {
        id: 'cele', title: 'Cele projektowe: pokrycie, SPL, jednorodność', level: 'średni',
        summary: 'Zanim przestawisz pierwszy kąt, określ kryteria: jaki SPL, jaka jednorodność, jaka zrozumiałość i gdzie kończy się strefa publiczności.',
        concepts: [
          'Cel: decyzje realizatora mają docierać wszędzie, nie identyczne brzmienie',
          'Zmienność poziomu i zmienność widmowa jako mierzalne parametry',
          'Zakres odległości mówi, ile decybeli musi nadrobić projekt',
          'Zerowa zmienność nie jest celem — wskazówki odległości mają sens',
          'Kształt pokrycia w funkcji częstotliwości: zwęzić dół albo poszerzyć górę',
          'Cele zapisane liczbowo przed otwarciem programu do predykcji',
        ],
        quiz: [
          { q: 'Pierwszy rząd jest 8 m od systemu, ostatni 80 m. Ile decybeli różnicy daje sam dystans?', a: ['6 dB', '10 dB', '20 dB', '40 dB'], c: 2, e: '20·log(80/8) = 20 dB — tyle musi nadrobić projekt, jeśli chcesz mniejszej zmienności.' },
          { q: 'Dlaczego nie kompensuje się w pełni ubytku wysokich częstotliwości w ostatnich rzędach?', a: ['Bo brakuje mocy', 'Bo znika wskazówka odległości i scena „przykleja się” do ucha', 'Bo psuje to fazę', 'Bo zabrania tego norma'], c: 1, e: 'Mózg ocenia dystans m.in. po ubytku góry pasma — pełna kompensacja brzmi nienaturalnie.' },
          { q: 'Dlaczego unika się kierowania energii na tylną ścianę?', a: ['Zużywa moc wzmacniaczy', 'Powoduje odbicia i echa, pogarsza zrozumiałość', 'Zmniejsza LF', 'Nie ma to znaczenia'], c: 1, e: 'Silne późne odbicia to echa i spadek stosunku dźwięku bezpośredniego do pogłosowego.' },
          { q: 'Dlaczego unika się kierowania energii na tylną ścianę?', a: ['Zużywa moc wzmacniaczy', 'Powoduje odbicia i echa, pogarsza zrozumiałość', 'Zmniejsza LF', 'Nie ma to znaczenia'], c: 1, e: 'Silne późne odbicia to echa i spadek D/R.' },
          { q: 'STI jest miarą:', a: ['Maksymalnego SPL', 'Zrozumiałości mowy', 'Czasu pogłosu', 'Koherencji'], c: 1, e: 'Speech Transmission Index — oparty na zachowaniu modulacji sygnału.' },
        ],
        tasks: [
          'Dla następnego projektu zapisz przed predykcją 5 liczbowych celów (SPL, jednorodność, zasięg, ograniczenia hałasu, headroom). Po evencie porównaj z pomiarem.',
        ],
        res: ['w-sti', 'b-mccarthy', 'b-davis'],
      },
      {
        id: 'fills', title: 'Projekt main + fills + delay', level: 'średni',
        summary: 'Główny system rzadko pokrywa wszystko. Front fill, out fill i delay to osobne subsystemy z własnym pokryciem, poziomem i czasem.',
        concepts: [
          'Fill przejmuje rewir tam, gdzie kończy się system główny',
          'Kryterium pozycji: różnica czasu ma się zmieniać jak najwolniej',
          'Fill za plecami słuchaczy to najgorszy możliwy wariant',
          'Fille jako boczne lub promieniste przedłużenie systemu głównego',
          'Front fill ratuje obraz dźwiękowy w pierwszych rzędach',
          'Wieża delay: świeża energia bezpośrednia tam, gdzie main jest już daleko',
        ],
        quiz: [
          { q: 'Punkt wyrównania czasowego main–delay wybiera się zwykle:', a: ['Tuż przy scenie', 'W strefie przejścia, gdzie poziomy obu systemów są zbliżone', 'Na końcu terenu', 'Na FOH'], c: 1, e: 'Tam sumowanie ma największy wpływ; dalej dominuje delay.' },
          { q: 'Rozstaw kolumn front fill dobiera się tak, by:', a: ['Stały zawsze co 2 m', 'Krawędzie pokrycia sąsiadów spotykały się na linii pierwszego rzędu', 'Nakładały się w 100%', 'Stały tylko na rogach sceny'], c: 1, e: 'Rozstaw zależy od kąta pokrycia i odległości do celu.' },
          { q: 'Główny powód użycia wieży delay:', a: ['Obniżenie latencji', 'Kompensacja spadku poziomu i stosunku D/R daleko od sceny', 'Poprawa LF przy scenie', 'Ograniczenie hałasu'], c: 1, e: 'Daleko od sceny main traci poziom, HF i zrozumiałość.' },
        ],
        tasks: [
          'Zaprojektuj pokrycie open-air dla 15 000 osób: main + suby + front fill + 1 linia delay. Udokumentuj pozycje, kąty i punkty przejścia.',
        ],
        res: ['b-mccarthy', 't-soundvision', 't-arraycalc', 't-mapp'],
      },
      {
        id: 'rigging', title: 'Kąty, wysokość podwieszenia i rigging', level: 'średni',
        summary: 'Krzywizna tablicy, trim i środek ciężkości to jedna decyzja widziana z trzech stron: akustycznej, obrazowej i mechanicznej.',
        concepts: [
          'Osie kolejnych skrzyń mają trafiać w widownię w równych odstępach',
          'Bez dużych skoków między sąsiednimi kątami — łagodna progresja',
          'Przestrzał: ok. dwie skrzynie ponad ostatni rząd, inaczej tracą górę pasma',
          'Wysokość podwieszenia: wyżej to jednorodność, niżej to obraz sceny',
          'Pochylenie przesuwa środek ciężkości — stąd punkt odciągający i limity rigu',
          'Promieniowanie do tyłu: co leci na scenę i w tylną ścianę',
        ],
        quiz: [
          { q: 'Górną skrzynię tablicy celujesz dokładnie w ostatni rząd. Co się dzieje?', a: ['To optymalne ustawienie', 'Najdalsze miejsca lądują na krawędzi wiązki i tracą górę pasma', 'Ostatni rząd dostaje za dużo poziomu', 'Nic, kąt nie ma znaczenia'], c: 1, e: 'Dlatego stosuje się przestrzał rzędu dwóch skrzyń ponad ostatni rząd.' },
          { q: 'Wyższe podwieszenie tablicy przy tej samej widowni:', a: ['Zwiększa różnicę poziomów front-tył', 'Zmniejsza różnicę poziomów i daje miejsce na progresję kątów', 'Nie wpływa na jednorodność', 'Zawsze poprawia obraz sceny'], c: 1, e: 'Kosztem jest gorsze powiązanie obrazu dźwiękowego ze sceną.' },
          { q: 'Mocne pochylenie tablicy w dół przesuwa środek ciężkości:', a: ['Do przodu', 'Do tyłu, co może wymagać punktu odciągającego', 'W dół, bez znaczenia dla rigu', 'Nie zmienia go'], c: 1, e: 'Rozkład obciążeń zawsze sprawdza się w programie producenta, a decyzję podejmuje rigger.' },
        ],
        tasks: [
          'Dla ostatniego projektu sprawdź w predykcji, gdzie trafiają osie kolejnych skrzyń. Popraw kąty tak, by odstępy między punktami trafienia były równe.',
          'Policz masę całkowitą jednej strony (elementy, rama, kable, wyciągarki) i sprawdź w software producenta dopuszczalne kąty oraz rozkład obciążeń.',
        ],
        res: ['w-wll', 't-soundvision', 't-arraycalc'],
      },
    ],
  },

  {
    id: 'ch5', short: 'Pomiar', title: 'Pomiar i analiza', color: '#ff7eb6', icon: 'analyzer',
    subtitle: 'FFT, funkcja przejścia, koherencja i odpowiedź impulsowa.',
    topics: [
      {
        id: 'fft', title: 'Analiza FFT i sygnały pomiarowe', level: 'podstawy',
        summary: 'Analizator to okno o określonej rozdzielczości w czasie i częstotliwości. Wybór sygnału i parametrów FFT zmienia to, co widzisz.',
        concepts: [
          'Rozdzielczość FFT = fs / N, długość okna = N / fs',
          'Okna czasowe (Hann, Blackman) i przeciek widma',
          'Multi-time window (MTW) — stała rozdzielczość w oktawie',
          'RTA vs funkcja przejścia — co mierzy każde narzędzie',
          'Szum różowy (równa energia na oktawę), sweep, muzyka jako sygnał',
          'Średniowanie w czasie i jego wpływ na odczyt',
        ],
        quiz: [
          { q: 'FFT przy 48 kHz i 4096 próbkach ma rozdzielczość około:', a: ['1,2 Hz', '11,7 Hz', '48 Hz', '117 Hz'], c: 1, e: '48000 / 4096 ≈ 11,7 Hz; okno ≈ 85 ms.' },
          { q: 'Funkcja przejścia (TF) pokazuje:', a: ['Widmo sygnału wyjściowego', 'Różnicę między sygnałem wyjściowym a referencją', 'Tylko poziom SPL', 'Czas pogłosu'], c: 1, e: 'TF porównuje pomiar z referencją, więc jest niezależna od sygnału wejściowego.' },
          { q: 'Szum różowy ma:', a: ['Równą energię na herc', 'Równą energię na oktawę', 'Tylko LF', 'Stały poziom szczytowy'], c: 1, e: 'W widmie wąskopasmowym spada 3 dB/okt.' },
        ],
        tasks: [
          'Zmierz ten sam głośnik szumem różowym i muzyką w trybie TF. Porównaj koherencję i czas potrzebny do stabilnego odczytu.',
        ],
        res: ['w-fft', 'w-pink', 't-osm', 't-smaart'],
      },
      {
        id: 'tf', title: 'Pomiar dwukanałowy: faza i koherencja', level: 'średni',
        summary: 'Amplituda mówi „ile”, faza „kiedy”, koherencja „czy można temu wierzyć”. Bez czytania fazy nie ma wyrównania.',
        concepts: [
          'Sygnał referencyjny (loopback) i pomiarowy',
          'Delay finder na podstawie odpowiedzi impulsowej',
          'Koherencja — wiarygodność danych w każdym pasmie',
          'Nachylenie fazy = opóźnienie; odczyt fazy „zawiniętej”',
          'Średniowanie wektorowe (complex) vs RMS (power)',
          'Pozycja mikrofonu: statyw vs ground plane, wysokość',
        ],
        quiz: [
          { q: 'Niska koherencja w danym pasmie oznacza:', a: ['Duże wzmocnienie', 'Niewiarygodny pomiar: szum, pogłos, zbyt słaby sygnał lub niestabilność', 'Poprawne wyrównanie', 'Przesterowanie konwertera'], c: 1, e: 'Koherencja mierzy liniową zależność między wejściem a wyjściem.' },
          { q: 'Stałe nachylenie fazy na liniowej osi częstotliwości wskazuje na:', a: ['Filtr półkowy', 'Nieskompensowane opóźnienie', 'Odwróconą polaryzację', 'Kompresję'], c: 1, e: 'Czyste opóźnienie = faza liniowo zależna od częstotliwości.' },
          { q: 'Średniowanie wektorowe w porównaniu z RMS:', a: ['Wzmacnia szum', 'Odrzuca składniki niekorelowane, ale wymaga stabilnego opóźnienia', 'Działa tylko dla LF', 'Nie wymaga referencji'], c: 1, e: 'Uśrednianie zespolone wygasza szum i pogłos, jeśli czas jest stały.' },
        ],
        tasks: [
          'Zmierz jedną kolumnę z 3 m, 10 m i 25 m. Zapisz spadek koherencji w HF i LF i powiąż go z pogłosem sali.',
          'Celowo odwróć polaryzację jednej kolumny w parze i naucz się rozpoznawać to na wykresie fazy.',
        ],
        res: ['w-coherence', 't-smaart', 't-osm', 'b-mccarthy'],
      },
      {
        id: 'ir', title: 'Odpowiedź impulsowa i parametry akustyczne', level: 'średni',
        summary: 'IR zawiera wszystko: bezpośredni front, odbicia, pogłos. Z niej liczysz RT, C80, STI i dowiadujesz się, co w sali naprawdę się dzieje.',
        concepts: [
          'IR i ETC — czas przybycia i poziom odbić',
          'RT60, T20, T30, EDT — metody i różnice',
          'Wzór Sabine: RT60 = 0,161 · V / A',
          'Klarowność C50 (mowa) i C80 (muzyka)',
          'Bramkowanie (gating) i rozdzielczość LF',
          'STI z odpowiedzi impulsowej',
        ],
        quiz: [
          { q: 'Wzór Sabine to:', a: ['RT60 = 0,161·V/A', 'RT60 = 0,161·A/V', 'RT60 = V/c', 'RT60 = 20·log(V)'], c: 0, e: 'V — objętość [m³], A — chłonność [m² Sabine].' },
          { q: 'T30 wyznacza się z zakresu spadku:', a: ['0 do −30 dB', '−5 do −35 dB, ekstrapolując do 60 dB', '−10 do −70 dB', '−30 do −60 dB'], c: 1, e: 'T20: −5 do −25 dB; T30: −5 do −35 dB.' },
          { q: 'IR bramkowana na 5 ms daje wiarygodne dane mniej więcej od:', a: ['20 Hz', '~200 Hz w górę', '~2 kHz w górę', 'Całego pasma'], c: 1, e: '1 / 0,005 s = 200 Hz.' },
        ],
        tasks: [
          'Zmierz RT (T20/T30) w pustej sali, w której pracujesz, w pasmach 125 Hz – 4 kHz. Powtórz z publicznością, jeśli to możliwe.',
        ],
        res: ['w-ir', 'w-reverb', 't-rew', 'b-everest'],
      },
      {
        id: 'narzedzia', title: 'Narzędzia i kalibracja', level: 'podstawy',
        summary: 'Smaart, Open Sound Meter, REW, SysTune — różne narzędzia, ta sama fizyka. Kalibracja i powtarzalny setup to połowa sukcesu.',
        concepts: [
          'Smaart, Open Sound Meter, REW, SysTune — mocne strony każdego',
          'Mikrofony pomiarowe klasy 1/2 i ich kalibracja',
          'Kalibrator 94 dB SPL = 1 Pa; 114 dB = 10 Pa',
          'Loopback referencji — kompensacja latencji interfejsu',
          'Wiele mikrofonów, multipleksowanie i średnie przestrzenne',
          'Bezpieczeństwo słuchu podczas pomiarów',
        ],
        quiz: [
          { q: 'Kalibrator 94 dB SPL odpowiada ciśnieniu:', a: ['20 µPa', '1 Pa', '10 Pa', '94 Pa'], c: 1, e: '20·log(1/20µPa) ≈ 94 dB.' },
          { q: 'Pętla zwrotna (loopback) referencji służy do:', a: ['Zwiększenia SPL', 'Kompensacji latencji interfejsu i śledzenia faktycznie wysyłanego sygnału', 'Kalibracji mikrofonu', 'Redukcji szumu'], c: 1, e: 'Referencja przechodzi przez te same konwertery co pomiar.' },
          { q: 'Które narzędzie jest darmowym analizatorem dwukanałowym (TF)?', a: ['Soundvision', 'Open Sound Meter', 'ArrayCalc', 'Dante Controller'], c: 1, e: 'OSM to darmowy, open-source analizator funkcji przejścia.' },
        ],
        tasks: [
          'Przygotuj „rig pomiarowy” z listą sprzętu, zapisanym projektem/konfiguracją i procedurą kalibracji. Opisz go w Dzienniku.',
        ],
        res: ['t-smaart', 't-osm', 't-rew', 't-systune', 'c-rational'],
      },
      {
        id: 'techniki', title: 'Techniki pomiaru odpowiedzi: TDS, MLS i sweep', level: 'zaawansowany',
        summary: 'Zanim pojawiły się dwukanałowe analizatory FFT, akustycy wyciągali odpowiedź impulsową innymi metodami. Warto je znać — ich ślady widać w dzisiejszych narzędziach.',
        concepts: [
          'TDS (spektrometria opóźnienia czasowego): przestrajany sweep i filtr podążający za sygnałem — odrzuca odbicia spoza okna czasowego',
          'MLS: pseudolosowa sekwencja binarna o widmie zbliżonym do szumu; korelacja z sygnałem wejściowym daje odpowiedź impulsową',
          'MLS wymaga stabilności układu w czasie pomiaru — ruch, wiatr i zmiany temperatury psują wynik',
          'Sweep logarytmiczny (metoda dekonwolucji) oddziela zniekształcenia nieliniowe od odpowiedzi liniowej',
          'Z jednej odpowiedzi impulsowej wyciągasz: amplitudę, fazę, ETC, RT, C50/C80 i STI',
          'Współczesne programy (REW, Smaart, OSM, SysTune) łączą te podejścia — wybór metody zależy od hałasu tła i stabilności warunków',
        ],
        quiz: [
          { q: 'Główna zaleta metody TDS to:', a: ['Największa rozdzielczość w LF', 'Odrzucanie odbić i szumu spoza podążającego okna czasowego', 'Brak potrzeby mikrofonu', 'Pomiar bez sygnału testowego'], c: 1, e: 'Filtr podąża za przestrajanym sygnałem, więc energia przychodząca później jest odfiltrowana.' },
          { q: 'Sygnał MLS to:', a: ['Sweep sinusoidalny', 'Pseudolosowa sekwencja binarna o widmie zbliżonym do szumu', 'Szum różowy', 'Impuls Diraca'], c: 1, e: 'Odpowiedź impulsową odzyskuje się przez korelację sygnału wyjściowego z wejściowym.' },
          { q: 'Sweep logarytmiczny ma nad MLS tę przewagę, że:', a: ['Jest szybszy', 'Oddziela zniekształcenia nieliniowe od odpowiedzi liniowej', 'Nie wymaga kalibracji', 'Działa przy ruchu mikrofonu'], c: 1, e: 'Produkty nieliniowe lądują poza właściwą odpowiedzią w czasie.' },
        ],
        tasks: [
          'Zmierz to samo pomieszczenie sweepem (REW) i funkcją przejścia na szumie (Smaart/OSM). Porównaj wyniki i zanotuj, w jakich warunkach każda metoda jest wygodniejsza.',
        ],
        res: ['t-rew', 't-smaart', 't-osm', 'w-ir'],
      },
    ],
  },

  {
    id: 'ch6', short: 'Strojenie', title: 'Optymalizacja i strojenie', color: '#3be37a', icon: 'sliders',
    subtitle: 'Weryfikacja, wyrównanie czasowe, EQ i krzywe docelowe.',
    topics: [
      {
        id: 'strategia', title: 'Strategia i kolejność strojenia', level: 'podstawy',
        summary: 'Optymalizacja to procedura, nie improwizacja: najpierw weryfikacja, potem elementy, subsystemy i ich łączenie.',
        concepts: [
          'Weryfikacja przed strojeniem: czy system w ogóle jest zbudowany poprawnie',
          'Zasada 1: każdy subsystem ma swój rewir — tam ustawiasz poziom i barwę',
          'Zasada 2: czas ustawiasz na szwie, gdzie oba systemy grają równie głośno',
          'Zasada 3: od największego rewiru w dół — main i suby jako pierwsze',
          'Zasada 4: tablicę najpierw ujednolicasz, potem traktujesz jak jedno źródło',
          'Pozycja mikrofonu wynika z pytania; dane zbierasz, aż przestaną zmieniać decyzje',
        ],
        quiz: [
          { q: 'Pierwszy krok przed jakimkolwiek EQ:', a: ['Soundcheck', 'Weryfikacja: polaryzacja, sygnał, uszkodzenia, routing', 'Ustawienie limiterów', 'Pomiar RT60'], c: 1, e: 'EQ nie naprawi odwróconej polaryzacji ani uszkodzonego przetwornika.' },
          { q: 'ONAX to pozycja:', a: ['Na osi danego elementu/subsystemu', 'Na granicy pokrycia', 'W punkcie przejścia dwóch systemów', 'Na FOH'], c: 0, e: 'On-axis — tam oceniamy odpowiedź subsystemu.' },
          { q: 'Dlaczego w pozycji XOVER nie koryguje się EQ?', a: ['Bo tam jest za głośno', 'Bo wynik zależy od sumowania — tam wyrównuje się czas', 'Bo mikrofon tam nie działa', 'To dobra pozycja do EQ'], c: 1, e: 'EQ w strefie przejścia „naprawia” tylko jedno miejsce.' },
        ],
        tasks: [
          'Spisz swoją procedurę strojenia jako checklistę krok po kroku (z czasem na każdy etap) i przetestuj ją na najbliższym evencie.',
        ],
        res: ['b-mccarthy', 'a-mvv', 'c-rational'],
      },
      {
        id: 'mainsub', title: 'Wyrównanie main–sub', level: 'średni',
        summary: 'Wyrównanie subów to wyrównanie fazy w pasmie przejścia, a nie tylko pików IR. I zawsze tylko dla części publiczności.',
        concepts: [
          'Pasmo przejścia main–sub to najbardziej wrażliwy punkt systemu',
          'Najpierw znajdź miejsce, w którym oba systemy grają równie głośno',
          'Kryterium to zgodność fazy w pasmie przejścia, a nie pik odpowiedzi impulsowej',
          'Trzy narzędzia: opóźnienie, polaryzacja i filtr all-pass',
          'Suby na ziemi, tablica w górze — idealne wyrównanie tylko wzdłuż jednej linii',
          'Weryfikacja w kilku punktach; mikrofon przy podłodze tylko do czasu, nie do barwy',
        ],
        quiz: [
          { q: 'Wyrównanie sub–top powinno opierać się na:', a: ['Wyłącznie piku IR', 'Fazie w pasmie przejścia', 'Poziomie SPL na FOH', 'Wadze A'], c: 1, e: 'Pik IR jest zdominowany przez HF; w przejściu liczy się faza.' },
          { q: 'Suby na ziemi, tablica podwieszona — idealne wyrównanie jest możliwe:', a: ['Wszędzie', 'Tylko wzdłuż linii o stałej różnicy dróg', 'Tylko przy scenie', 'Nigdzie'], c: 1, e: 'Poza tą linią różnica czasów rośnie.' },
          { q: 'Różnica dróg 1,07 m przy 80 Hz odpowiada przesunięciu fazy około:', a: ['22,5°', '45°', '90°', '180°'], c: 2, e: 'λ(80 Hz) ≈ 4,29 m; 1,07/4,29 ≈ 1/4 → 90°.' },
        ],
        tasks: [
          'Zmierz main i sub osobno w pozycji przejścia. Znajdź opóźnienie dające zgodność fazy w pasmie przejścia, potem sprawdź wynik w 3 innych miejscach.',
        ],
        res: ['a-mvv', 'a-sdl', 't-smaart', 'b-mccarthy'],
      },
      {
        id: 'filldelay', title: 'Wyrównanie fills i delay', level: 'średni',
        summary: 'Każdy subsystem najpierw strojony jest samodzielnie (ONAX), a dopiero potem łączony z głównym w strefie przejścia.',
        concepts: [
          'Fill ustawiasz najpierw w jego własnym rewirze',
          'Szew z systemem głównym: miejsce, gdzie poziomy obu są równe',
          'Kilka milisekund zapasu, żeby obraz dźwiękowy został na scenie',
          'Barwa na przejściu: main z daleka ma mniej góry pasma niż fill z bliska',
          'Przy wieży delay szew jest szerokim pasem — sam wybierasz punkt decyzji',
        ],
        quiz: [
          { q: 'Poprawna kolejność dla subsystemu fill:', a: ['Delay w ONAX, potem EQ w XOVER', 'EQ/poziom w ONAX fillu, potem opóźnienie w XOVER', 'Tylko poziom na FOH', 'Tylko delay na FOH'], c: 1, e: 'Najpierw kształtujemy odpowiedź, potem ją łączymy.' },
          { q: 'Jeśli dźwięk z delay dociera przed main:', a: ['Nic się nie dzieje', 'Lokalizacja przeskakuje na delay', 'Rośnie LF', 'Spada STI do zera'], c: 1, e: 'Efekt pierwszeństwa działa na korzyść pierwszego frontu.' },
          { q: 'Main słyszany z 80 m ma mniej HF niż delay z 20 m, bo:', a: ['Delay jest głośniejszy', 'Absorpcja powietrza rośnie z odległością', 'Main ma inny preset', 'Faza'], c: 1, e: 'Dlatego tonalne dopasowanie w strefie przejścia wymaga uwagi.' },
        ],
        tasks: [
          'Na evencie z front fillem wykonaj pełną procedurę: ONAX fill → poziom → XOVER → delay. Zapisz wartości przed i po.',
        ],
        res: ['b-mccarthy', 't-smaart', 't-osm'],
      },
      {
        id: 'eq', title: 'EQ systemu i krzywe docelowe', level: 'zaawansowany',
        summary: 'EQ systemowy koryguje wspólne trendy dla strefy, nie pojedyncze punkty. Krzywa docelowa to decyzja estetyczna oparta na danych.',
        concepts: [
          'Korektor działa wszędzie tak samo — koryguj tylko wspólne trendy',
          'Decyzje tonalne z kilku pomiarów, uśrednionych i wygładzonych',
          'Krzywa docelowa to Twoja decyzja, nie prawo fizyki',
          'Cieniowanie góry pasma strefami tablicy i wygładzanie przejść',
          'Cieniowanie poziomem: działa na całe pasmo i kosztuje zapas w basie',
          'Granica skuteczności cieniowania dolnych skrzyń („rozmycie” z góry tablicy)',
        ],
        quiz: [
          { q: 'Dlaczego nie „wypełnia się” wąskiego wycięcia interferencyjnego podbiciem EQ?', a: ['Bo EQ nie działa w tym pasmie', 'Bo wycięcie zależy od pozycji — podbicie tylko podniesie poziom gdzie indziej', 'Bo to zwiększa latencję', 'Można i warto'], c: 1, e: 'Interferencja to problem czasowy/przestrzenny, nie amplitudowy.' },
          { q: 'Średnia przestrzenna z wielu mikrofonów służy do:', a: ['Zwiększenia SPL', 'Znalezienia wspólnego trendu w strefie', 'Pomiaru RT60', 'Wyrównania faz'], c: 1, e: 'Uśrednia lokalne interferencje i wydobywa wspólne cechy.' },
          { q: 'Typowa krzywa docelowa dużego systemu koncertowego:', a: ['Idealnie płaska', 'Podniesiony LF i łagodny spadek HF', 'Podbite HF', 'Wycięte LF'], c: 1, e: 'Odpowiada preferencjom słuchowym i realiom dużych odległości.' },
        ],
        tasks: [
          'Zapisz w Warsztacie/Notatkach swoją krzywą docelową (punkty co oktawę). Porównaj ją z 3 pomiarami ze swoich ostatnich eventów.',
        ],
        res: ['b-mccarthy', 'b-toole', 'a-sdl'],
      },
    ],
  },

  {
    id: 'ch7', short: 'Sieci', title: 'Systemy cyfrowe i sieci audio', color: '#46d0ff', icon: 'network',
    subtitle: 'IP, Dante, AES67, Milan, zegar i redundancja.',
    topics: [
      {
        id: 'ip', title: 'Podstawy sieci IP dla audio', level: 'podstawy',
        summary: 'Dzisiejszy system nagłośnieniowy to sieć. Bez podstaw IP, VLAN i QoS nie da się pewnie zaprojektować ani zdiagnozować systemu.',
        concepts: [
          'Adresacja IP, maska, DHCP vs statyczne, link-local 169.254.x.x',
          'Switche zarządzalne, VLAN, QoS (DSCP)',
          'Unicast vs multicast, IGMP snooping',
          'EEE (Energy Efficient Ethernet) — wyłączyć w sieciach audio',
          'Miedź: segment do 100 m; światłowód i moduły SFP',
          'Plan adresacji i dokumentacja sieci',
        ],
        quiz: [
          { q: 'Maksymalna długość segmentu miedzianego Ethernet (skrętka) to:', a: ['50 m', '100 m', '300 m', '1 km'], c: 1, e: 'Standard 100BASE-TX/1000BASE-T: 100 m.' },
          { q: 'Energy Efficient Ethernet w sieci Dante należy:', a: ['Włączyć', 'Wyłączyć', 'Ustawić na auto', 'Nie ma znaczenia'], c: 1, e: 'EEE może zakłócać synchronizację i powodować dropouty.' },
          { q: 'IGMP snooping:', a: ['Szyfruje ruch', 'Ogranicza multicast do portów, które go subskrybują', 'Nadaje adresy IP', 'Mierzy latencję'], c: 1, e: 'Chroni sieć przed zalewaniem ruchem multicast.' },
        ],
        tasks: [
          'Stwórz plan IP i VLAN dla swojego systemu (konsolety, procesory, wzmacniacze, laptopy pomiarowe) i zapisz go w Dzienniku.',
        ],
        res: ['c-dante', 'w-dante', 'w-ptp'],
      },
      {
        id: 'dante', title: 'Dante, AES67 i Milan', level: 'średni',
        summary: 'Różne protokoły, różne filozofie. System engineer musi wiedzieć, jak je połączyć i gdzie są granice interoperacyjności.',
        concepts: [
          'Dante: ustawienia latencji, redundancja primary/secondary',
          'AES67 jako warstwa interoperacyjności, PTPv2',
          'AVB/Milan: rezerwacja pasma, wymagane switche AVB',
          'SMPTE ST 2110-30 — audio w świecie broadcast',
          'Dante Domain Manager, bezpieczeństwo i podział sieci',
        ],
        quiz: [
          { q: 'Protokół synchronizacji w AES67 to:', a: ['NTP', 'PTPv2 (IEEE 1588-2008)', 'Word clock', 'MIDI clock'], c: 1, e: 'AES67 wymaga PTPv2.' },
          { q: 'Milan bazuje na:', a: ['Dante', 'AVB (IEEE 802.1) z certyfikacją Avnu', 'AES3', 'MADI'], c: 1, e: 'Milan to profil AVB zdefiniowany przez Avnu Alliance.' },
          { q: 'Redundancja Dante polega na:', a: ['Dwóch kablach w jednym switchu', 'Dwóch fizycznie oddzielnych sieciach primary i secondary', 'Kopii zapasowej pliku', 'Podwójnym zegarze'], c: 1, e: 'Sieci muszą być rozdzielone, by awaria jednej nie dotknęła drugiej.' },
        ],
        tasks: [
          'Przejdź Dante Certification Level 1 i 2 (online, bezpłatne) i zanotuj 5 rzeczy, które zmienią Twoje podejście do sieci.',
        ],
        res: ['c-dante', 'c-milan', 'w-aes67', 'w-avb'],
      },
      {
        id: 'zegar', title: 'Zegar, sample rate i AES3', level: 'średni',
        summary: 'Każdy system cyfrowy musi mieć jednego „dyrygenta”. Problemy z zegarem objawiają się klikami, które trudno namierzyć.',
        concepts: [
          'Master clock, word clock, PTP grandmaster',
          'AES3: zbalansowany, 110 Ω; AES/EBU',
          'Konwersja częstotliwości próbkowania (SRC)',
          'Jitter — niestabilność czasowa zegara',
          'Latencja całkowita i jej wpływ na wyrównanie (IEM, delay)',
        ],
        quiz: [
          { q: 'Impedancja łącza AES3 (zbalansowanego) to:', a: ['75 Ω', '110 Ω', '600 Ω', '50 Ω'], c: 1, e: 'AES3 na skrętce/XLR: 110 Ω; wersja koncentryczna AES-3id: 75 Ω.' },
          { q: 'Dwa urządzenia na różnych sample rate bez SRC dają:', a: ['Lepszą jakość', 'Kliki i dropouty lub brak sygnału', 'Niższą latencję', 'Nic'], c: 1, e: 'Strumienie muszą być synchroniczne lub konwertowane.' },
          { q: 'Jitter to:', a: ['Szum analogowy', 'Niestabilność czasowa zegara próbkowania', 'Opóźnienie sieci', 'Błąd kalibracji'], c: 1, e: 'Zbyt duży jitter degraduje konwersję i synchronizację.' },
        ],
        tasks: [
          'Narysuj hierarchię zegara swojego systemu (kto jest masterem w każdej domenie) i sprawdź, co się dzieje przy utracie mastera.',
        ],
        res: ['w-aes3', 'w-wordclock', 'w-ptp'],
      },
    ],
  },

  {
    id: 'ch8', short: 'Zasilanie', title: 'Zasilanie, uziemienie i bezpieczeństwo', color: '#ff5d73', icon: 'bolt',
    subtitle: 'Prąd, przydźwięki, hałas i regulacje.',
    topics: [
      {
        id: 'zasilanie', title: 'Rozdział zasilania', level: 'podstawy',
        summary: 'Stabilne zasilanie to warunek działania wzmacniaczy przy pełnej mocy. Nierówne fazy i złe agregaty to częsta przyczyna problemów.',
        concepts: [
          'Sieć 230/400 V, 3 fazy — napięcia fazowe i międzyfazowe',
          'Równoważenie obciążeń na fazach i prąd w przewodzie N',
          'Wyłączniki RCD 30 mA — ochrona osób',
          'Przekroje i długości kabli zasilających, spadki napięcia',
          'Agregaty: jakość napięcia, THD, wzmacniacze z PFC i prądy rozruchowe',
          'Separacja zasilania audio od oświetlenia',
        ],
        quiz: [
          { q: 'Napięcie międzyfazowe w sieci 230 V to:', a: ['230 V', '325 V', '400 V', '460 V'], c: 2, e: '230 · √3 ≈ 400 V.' },
          { q: 'Typowy prąd różnicowy RCD do ochrony osób:', a: ['10 mA', '30 mA', '100 mA', '300 mA'], c: 1, e: '30 mA to standard ochrony uzupełniającej.' },
          { q: 'Równe rozłożenie wzmacniaczy na fazy przede wszystkim:', a: ['Zmniejsza prąd w N i spadki napięcia', 'Zwiększa moc wzmacniaczy', 'Eliminuje przydźwięki', 'Nie ma znaczenia'], c: 0, e: 'Przy symetrycznym obciążeniu prądy w N się znoszą (z wyjątkiem harmonicznych).' },
        ],
        tasks: [
          'Rozpisz zapotrzebowanie mocy swojego systemu na fazy (wartości średnie i szczytowe wg danych producenta wzmacniaczy).',
        ],
        res: ['w-3phase', 'w-rcd'],
      },
      {
        id: 'uziemienie', title: 'Uziemienie i przydźwięk', level: 'podstawy',
        summary: 'Przydźwięk to najbardziej widoczny błąd systemu. Rozwiązuje się go izolacją sygnału — nigdy odłączeniem przewodu ochronnego.',
        concepts: [
          'Pętle masy i ich mechanizm',
          'Nigdy nie odłączać PE — bezpieczeństwo ponad wszystko',
          'Transformatory izolujące, DI, ground lift sygnałowy',
          'Problem „pin 1” w urządzeniach',
          'Zakłócenia od ściemniaczy i zasilaczy LED',
          'Kolejność włączania i wyłączania wzmacniaczy',
        ],
        quiz: [
          { q: 'Właściwa reakcja na przydźwięk z pętli masy:', a: ['Odłączyć PE w zasilaniu', 'Izolacja sygnału (transformator, DI, ground lift sygnałowy)', 'Podbić EQ', 'Wyłączyć RCD'], c: 1, e: 'Odłączenie PE grozi porażeniem.' },
          { q: 'Poprawna kolejność:', a: ['Wzmacniacze włączamy pierwsze', 'Wzmacniacze włączamy ostatnie i wyłączamy pierwsze', 'Kolejność nie ma znaczenia', 'Wszystko jednocześnie'], c: 1, e: 'Chroni głośniki przed stukami z urządzeń wcześniej w torze.' },
          { q: 'Problem „pin 1” to:', a: ['Odwrócona polaryzacja XLR', 'Ekran podłączony do masy sygnałowej wewnątrz urządzenia zamiast do obudowy', 'Uszkodzony pin w kablu', 'Brak phantomu'], c: 1, e: 'Prądy w ekranie wchodzą w masę sygnałową i generują zakłócenia.' },
        ],
        tasks: [
          'Przygotuj „zestaw antyprzydźwiękowy” (DI, izolatory, adaptery) i procedurę szukania źródła przydźwięku krok po kroku.',
        ],
        res: ['w-groundloop', 'w-balanced', 'b-self'],
      },
      {
        id: 'halas', title: 'Hałas: publiczność, ekipa, otoczenie', level: 'średni',
        summary: 'Kontrola SPL to dziś część pracy system engineera: ochrona słuchu publiczności i ekipy oraz relacje z sąsiadami i urzędami.',
        concepts: [
          'Hałas w pracy (PL): LEX,8h 85 dB(A), LCpeak 135 dB(C)',
          'Wytyczne WHO dla wydarzeń: 100 dB LAeq,15 min',
          'Monitoring SPL w czasie rzeczywistym i raportowanie',
          'Hałas środowiskowy: pomiary na granicy terenu, dominacja LF',
          'Suby kardioidalne i kierunkowe jako narzędzie ograniczania hałasu',
          'Ochronniki słuchu i strefy ciszy',
        ],
        quiz: [
          { q: 'Wytyczna WHO (Global standard for safe listening venues and events) dla publiczności to:', a: ['85 dB LAeq,8h', '100 dB LAeq,15 min', '110 dB LAeq,1 min', '140 dB LCpeak'], c: 1, e: 'WHO, 2022: średnio nie więcej niż 100 dB LAeq w 15 minut.' },
          { q: 'Dopuszczalny poziom ekspozycji na hałas w pracy w Polsce (LEX,8h) wynosi:', a: ['80 dB', '85 dB', '90 dB', '100 dB'], c: 1, e: 'NDN dla LEX,8h to 85 dB (przy 80 dB — obowiązki profilaktyczne).' },
          { q: 'Główny problem skarg sąsiadów na koncerty open-air to zwykle:', a: ['Wysokie częstotliwości', 'Niskie częstotliwości', 'Mowa konferansjera', 'Pogłos'], c: 1, e: 'LF słabo tłumione przez powietrze i przegrody, rozchodzą się daleko.' },
        ],
        tasks: [
          'Przygotuj szablon raportu SPL z eventu (LAeq,15min, LCeq, maksima, pozycja pomiaru) i wypełnij go na najbliższym koncercie.',
        ],
        res: ['n-who', 'n-ciop', 't-10eazy'],
      },
    ],
  },

  {
    id: 'ch9', short: 'Akustyka', title: 'Akustyka sal i propagacja w plenerze', color: '#9be15d', icon: 'room',
    subtitle: 'Pogłos, mody, odległość krytyczna, wiatr i temperatura.',
    topics: [
      {
        id: 'sala', title: 'Akustyka pomieszczeń w praktyce PA', level: 'średni',
        summary: 'Sali nie zmienisz w dniu koncertu, ale możesz mniej ją pobudzać. Kierunkowość systemu to najskuteczniejsze narzędzie akustyczne.',
        concepts: [
          'Czas pogłosu i jego zależność od częstotliwości',
          'Odbicia wczesne i późne; echa od tylnej ściany',
          'Mody osiowe: f = c / (2L)',
          'Odległość krytyczna i stosunek D/R',
          'Kontrola przez kierunkowość zamiast EQ',
          'Pusta vs pełna sala',
        ],
        quiz: [
          { q: 'Pierwszy mod osiowy dla wymiaru 17,15 m to:', a: ['5 Hz', '10 Hz', '20 Hz', '40 Hz'], c: 1, e: '343 / (2 · 17,15) = 10 Hz.' },
          { q: 'Odległość krytyczna rośnie, gdy:', a: ['Maleje Q źródła', 'Rośnie Q źródła i chłonność sali', 'Rośnie objętość pogłosu', 'Rośnie poziom'], c: 1, e: 'Dc ∝ √(Q·A).' },
          { q: 'Pełna publiczność w porównaniu z pustą salą:', a: ['Wydłuża RT', 'Skraca RT', 'Nie zmienia RT', 'Zmienia tylko LF'], c: 1, e: 'Ludzie to duża powierzchnia chłonna.' },
        ],
        tasks: [
          'Dla sali, w której często pracujesz, policz mody osiowe w Warsztacie i zweryfikuj pomiarem LF w kilku punktach.',
        ],
        res: ['w-reverb', 'w-critical', 'b-everest', 'b-long'],
      },
      {
        id: 'plener', title: 'Propagacja w plenerze i pogoda', level: 'zaawansowany',
        summary: 'Na open-air „sala” zmienia się co godzinę: temperatura, wiatr i wilgotność wpływają na zasięg, HF i wyrównanie.',
        concepts: [
          'Absorpcja powietrza zależna od częstotliwości i wilgotności (ISO 9613-1)',
          'Gradient temperatury: w dzień dźwięk zagina się w górę, przy inwersji w dół',
          'Wiatr: z wiatrem dźwięk zagina ku ziemi, pod wiatr w górę',
          'Zmiana temperatury → zmiana czasu wyrównania delay',
          'Odbicia od gruntu i przeszkód',
          'Modelowanie hałasu środowiskowego (ISO 9613-2)',
        ],
        quiz: [
          { q: 'W słoneczny dzień (temperatura maleje z wysokością) dźwięk zagina się:', a: ['W dół', 'W górę', 'Nie zagina się', 'Na boki'], c: 1, e: 'Fala zagina się w stronę wolniejszego (chłodniejszego) powietrza.' },
          { q: 'Absorpcja powietrza jest największa dla:', a: ['LF', 'Średnich częstotliwości', 'HF', 'Jest stała'], c: 2, e: 'Rośnie gwałtownie powyżej kilku kHz.' },
          { q: 'Wiatr wiejący od sceny do publiczności powoduje:', a: ['Zaginanie w górę i skrócenie zasięgu', 'Zaginanie w dół i zwykle poprawę zasięgu', 'Brak efektu', 'Tylko zmianę barwy LF'], c: 1, e: 'Prędkość wiatru rośnie z wysokością — z wiatrem front zagina się w dół.' },
        ],
        tasks: [
          'Na plenerze zanotuj co godzinę temperaturę, wilgotność i wiatr oraz pomiar na delay/FOH. Porównaj zmiany odpowiedzi HF i czasu.',
        ],
        res: ['n-iso9613', 'b-everest', 'a-mvv'],
      },
    ],
  },

  {
    id: 'ch10', short: 'Produkcja', title: 'Produkcja i warsztat system engineera', color: '#ffd166', icon: 'clipboard',
    subtitle: 'Advance, harmonogram dnia, dokumentacja i praca pod presją.',
    topics: [
      {
        id: 'advance', title: 'Advance, dokumentacja i komunikacja', level: 'podstawy',
        summary: 'Dobry system engineer wygrywa event zanim przyjedzie na miejsce: rysunki, plan, zasilanie, sieć i jasna komunikacja z produkcją.',
        concepts: [
          'Advance: rider, rysunki, punkty rigu, zasilanie, harmonogram, ograniczenia hałasu',
          'Dokumentacja: plot, patch, plan IP, wersje plików predykcji',
          'Komunikacja z FOH, monitorami, oświetleniem i riggerami',
          'Standardy nazewnictwa plików i archiwizacja',
          'Raport po evencie (show report)',
        ],
        quiz: [
          { q: 'Co jest kluczowe w advance nowej hali?', a: ['Kolor ścian', 'Nośności punktów rigu, rysunki, zasilanie i dostęp', 'Menu cateringu', 'Liczba mikrofonów wokalnych'], c: 1, e: 'Bez tych danych projekt może być niewykonalny.' },
          { q: 'Po co wersjonować pliki predykcji?', a: ['Dla porządku na dysku', 'By odtworzyć decyzje i mieć pewność, która wersja trafiła do riggerów', 'Wymaga tego licencja', 'Nie trzeba'], c: 1, e: 'Rozbieżność wersji to realne ryzyko błędów w rigu.' },
          { q: 'Plan IP przygotowany przed eventem:', a: ['Jest zbędny przy DHCP', 'Zapobiega konfliktom adresów i przyspiesza diagnozę', 'Spowalnia sieć', 'Zastępuje VLAN'], c: 1, e: 'Szybka diagnoza zaczyna się od wiedzy, co gdzie jest.' },
        ],
        tasks: [
          'Stwórz szablon „System Pack” dla eventu: rysunek, predykcja, patch, plan IP, zasilanie, kontakty. Użyj go przy najbliższej realizacji.',
        ],
        res: ['b-mccarthy', 'a-sdl'],
      },
      {
        id: 'dzien', title: 'Dzień eventu: harmonogram system teka', level: 'podstawy',
        summary: 'Load-in, rig, weryfikacja, strojenie, soundcheck, show. Czas na strojenie bywa krótki — procedura musi być gotowa.',
        concepts: [
          'Sekwencja: load-in → rig → kontrola kątów → line check → weryfikacja → strojenie → soundcheck',
          'Kontrola po podwieszeniu: inklinometr i dalmierz względem predykcji',
          'Line check vs weryfikacja — różnica',
          'Monitoring zmian temperatury i SPL w trakcie show',
          'Plan B: zapasowe elementy, snapshoty, alternatywna ścieżka sygnału',
        ],
        quiz: [
          { q: 'Po podwieszeniu tablicy przed strojeniem sprawdzasz:', a: ['Tylko EQ', 'Kąty i trim inklinometrem i dalmierzem względem predykcji', 'Kolor kabli', 'Nic — ufam riggerom'], c: 1, e: 'Rozbieżność kilku stopni zmienia pokrycie dalekich rzędów.' },
          { q: 'Temperatura spadła z 20°C do 10°C. Czas przelotu do wieży delay na 100 m wzrośnie o około:', a: ['0,5 ms', '5 ms', '15 ms', '30 ms'], c: 1, e: '100/337,4 − 100/343,4 ≈ 5,2 ms.' },
          { q: 'Weryfikacja w przeciwieństwie do line checku sprawdza:', a: ['Tylko czy jest sygnał', 'Poprawność parametrów: polaryzację, poziom, EQ i opóźnienie każdego elementu', 'Tylko wokale', 'Tylko sieć'], c: 1, e: 'Line check mówi „działa”, weryfikacja — „działa poprawnie”.' },
        ],
        tasks: [
          'Zapisz rzeczywisty harmonogram 3 ostatnich eventów (godziny etapów) i znajdź, gdzie tracisz najwięcej czasu.',
        ],
        res: ['b-mccarthy', 'c-rational'],
      },
      {
        id: 'awarie', title: 'Rozwiązywanie problemów pod presją', level: 'średni',
        summary: 'Awarie zdarzają się zawsze. Liczy się metoda, spokój i przygotowane ścieżki awaryjne.',
        concepts: [
          'Metoda half-split — dzielenie toru na pół',
          'Od źródła do głośnika: sygnał, kable, routing, zasilanie',
          'Checklisty awaryjne i redundancja',
          'Spokojna, krótka komunikacja z zespołem',
          'Post-mortem: co zadziałało, co zmienić',
        ],
        quiz: [
          { q: 'Metoda half-split polega na:', a: ['Wymianie połowy sprzętu', 'Dzieleniu toru sygnału na pół, by szybko zlokalizować usterkę', 'Wyłączaniu połowy systemu', 'Pracy w dwie osoby'], c: 1, e: 'Każdy test eliminuje połowę możliwych miejsc usterki.' },
          { q: 'Jeden element tablicy nie gra HF. Pierwszy krok:', a: ['Podbić HF na całej tablicy', 'Solo/mute i zamiana kanałów, by oddzielić przetwornik, kabel i wzmacniacz', 'Zdjąć tablicę', 'Zignorować'], c: 1, e: 'Szybka izolacja przyczyny pozwala na obejście problemu.' },
          { q: 'Po evencie z awarią warto:', a: ['Zapomnieć', 'Zrobić raport/post-mortem z wnioskami', 'Wymienić cały system', 'Obwinić kogoś'], c: 1, e: 'Wnioski zapobiegają powtórce.' },
        ],
        tasks: [
          'Spisz 5 najczęstszych awarii ze swojej praktyki i do każdej procedurę diagnozy. Dodaj jako wpis w Dzienniku.',
        ],
        res: ['a-sdl'],
      },
    ],
  },

  {
    id: 'ch11', short: 'Zaawansowane', title: 'Zaawansowane: immersja, sterowanie wiązką, automatyzacja', color: '#ff8a3d', icon: 'orbit',
    subtitle: 'Nowe zagadnienia, które rozszerzą Twój warsztat.',
    topics: [
      {
        id: 'immersja', title: 'Systemy immersyjne i obiektowe', level: 'zaawansowany',
        summary: 'L-ISA, d&b Soundscape, Spacemap Go, Holophonix — przestrzenny dźwięk na żywo zmienia zasady projektu pokrycia.',
        concepts: [
          'Idea systemów obiektowych: wiele źródeł nad sceną + otoczenie',
          'Każde źródło sceniczne musi pokrywać większość widowni',
          'Panoramowanie oparte na różnicach czasu i poziomu (delay-based)',
          'Wave Field Synthesis — rekonstrukcja frontu falowego (zasada Huygensa)',
          'Przegląd: L-ISA, d&b Soundscape, Meyer Spacemap Go, Holophonix',
          'Wymagania dla predykcji i strojenia wielu systemów',
        ],
        quiz: [
          { q: 'Kluczowe wymaganie projektowe systemu obiektowego:', a: ['Jeden centralny klaster', 'Każde źródło sceniczne pokrywa większość widowni', 'Tylko suby w centrum', 'Brak delay'], c: 1, e: 'Inaczej lokalizacja działa tylko w części widowni.' },
          { q: 'Wave Field Synthesis polega na:', a: ['Kompresji wielopasmowej', 'Odtworzeniu frontu falowego wieloma blisko rozmieszczonymi głośnikami', 'Użyciu pogłosu', 'Kardioidalnych subach'], c: 1, e: 'Opiera się na zasadzie Huygensa.' },
          { q: 'Panoramowanie w systemach obiektowych wykorzystuje przede wszystkim:', a: ['Tylko poziomy', 'Różnice czasu i poziomu oraz efekt pierwszeństwa', 'Tylko EQ', 'Tylko pogłos'], c: 1, e: 'Pozwala to utrzymać lokalizację w szerszym obszarze.' },
        ],
        tasks: [
          'Pobierz darmowe narzędzie projektowe jednego z systemów immersyjnych i zaprojektuj 5 źródeł nad sceną dla sali z Twojego ostatniego eventu.',
        ],
        res: ['t-lisa', 't-soundscape', 'w-wfs'],
      },
      {
        id: 'beam', title: 'Sterowanie wiązką i tablice optymalizowane', level: 'zaawansowany',
        summary: 'DSP na każdy przetwornik lub element pozwala kształtować pokrycie niezależnie od mechaniki. To przyszłość i teraźniejszość dużych systemów.',
        concepts: [
          'Filtry i opóźnienia per przetwornik/element',
          'Kolumny sterowane cyfrowo — montaż płasko, wiązka pod kątem',
          'Optymalizacja numeryczna rozkładu SPL (np. Martin Audio MLA, procesory array producentów)',
          'Ograniczenia: długość tablicy a kontrola LF, koszt w headroomie',
          'Strefy ciszy (np. scena, obszary poza publicznością)',
        ],
        quiz: [
          { q: 'Cyfrowe sterowanie kolumną polega na:', a: ['Mechanicznym pochylaniu', 'Indywidualnych filtrach i opóźnieniach dla przetworników', 'Zwiększeniu mocy', 'Zmianie impedancji'], c: 1, e: 'Zmiana relacji czasowych między źródłami kształtuje wiązkę.' },
          { q: 'Pionowa kontrola kierunkowości w LF jest ograniczona głównie przez:', a: ['Moc wzmacniacza', 'Długość fizyczną tablicy', 'Typ kabla', 'Sample rate'], c: 1, e: 'Kierunkowość wymaga wymiaru porównywalnego z λ.' },
          { q: 'Elektroniczne pochylenie wiązki pozwala:', a: ['Zamontować kolumnę płasko przy ścianie i skierować wiązkę w dół', 'Zmniejszyć masę', 'Wyeliminować pogłos', 'Zrezygnować z predykcji'], c: 0, e: 'Estetyka i akustyka bez kompromisów montażowych.' },
        ],
        tasks: [
          'Porównaj w predykcji tablicę z optymalizacją strefową producenta i bez niej. Zapisz różnice jednorodności i poziomu na scenie.',
        ],
        res: ['t-mla', 't-arraycalc', 'l-aes'],
      },
      {
        id: 'automatyzacja', title: 'Automatyzacja i własne narzędzia', level: 'zaawansowany',
        summary: 'Skrypty, arkusze i protokoły sterowania oszczędzają godziny i eliminują błędy. Umiejętność zbudowania własnego narzędzia to przewaga.',
        concepts: [
          'OSC i API w urządzeniach i oprogramowaniu audio',
          'Python do obliczeń (delay, straty, rozstaw) i dokumentacji',
          'Szablony arkuszy: patch, IP, zasilanie, rigging',
          'Wersjonowanie plików (git) i archiwum projektów',
          'Automatyczne raporty SPL i pomiarów',
        ],
        quiz: [
          { q: 'OSC to:', a: ['Format pliku audio', 'Protokół komunikacji do sterowania urządzeniami przez sieć (zwykle UDP)', 'Typ zegara', 'Rodzaj filtru'], c: 1, e: 'Open Sound Control.' },
          { q: 'Główna korzyść ze skryptu liczącego delay z tabeli odległości:', a: ['Wygląda profesjonalnie', 'Powtarzalność i mniej błędów', 'Szybszy sprzęt', 'Brak potrzeby pomiaru'], c: 1, e: 'Pomiar nadal weryfikuje wynik.' },
          { q: 'Git przydaje się system engineerowi do:', a: ['Strojenia', 'Wersjonowania projektów, show files i dokumentacji', 'Pomiaru RT', 'Zasilania'], c: 1, e: 'Historia zmian i łatwy powrót do działającej wersji.' },
        ],
        tasks: [
          'Napisz mały skrypt (lub arkusz), który z listy odległości i temperatury generuje tabelę opóźnień dla wszystkich subsystemów.',
        ],
        res: ['w-osc', 'a-sdl'],
      },
    ],
  },
  {
    id: 'ch12', short: 'Ustroje', title: 'Materiały i ustroje akustyczne', color: '#c9a227', icon: 'panel',
    subtitle: 'Pochłanianie porowate, ustroje rezonansowe, rezonatory Helmholtza i projekt adaptacji.',
    topics: [
      {
        id: 'porowate', title: 'Pochłanianie porowate', level: 'średni',
        summary: 'Wełna, pianka i tkanina tłumią dźwięk tarciem lepkim — ale tylko tam, gdzie prędkość cząsteczek jest duża. Grubość i pustka za materiałem decydują o tym, jak nisko materiał zadziała.',
        concepts: [
          'Współczynnik pochłaniania α: 0 = pełne odbicie, 1 = pełne pochłanianie; zawsze podawany w pasmach',
          'Mechanizm: tarcie lepkie w porach zamienia energię na ciepło — liczy się prędkość cząsteczek, nie ciśnienie',
          'Materiał działa skutecznie od grubości rzędu λ/4; dla 100 Hz to ok. 85 cm',
          'Pustka powietrzna za materiałem obniża zakres działania bez zwiększania grubości',
          'Gęstość i opór przepływu: za gęsty materiał odbija, za rzadki nie tłumi',
          'Sposób montażu (typ montażu, odstęp od ściany) zmienia wynik — dane bez opisu montażu są bezużyteczne',
        ],
        quiz: [
          { q: 'Dlaczego cienka pianka nie pochłania niskich częstotliwości?', a: ['Bo ma zbyt małą gęstość', 'Bo przy ścianie prędkość cząsteczek jest bliska zeru, a materiał jest cienki względem λ', 'Bo pianka odbija LF', 'Bo LF nie wnika w pory'], c: 1, e: 'Przy sztywnej ścianie ciśnienie jest maksymalne, a prędkość minimalna — materiał musi sięgać tam, gdzie prędkość jest duża (ok. λ/4).' },
          { q: 'Co daje odsunięcie materiału porowatego od ściany?', a: ['Nic, liczy się tylko grubość', 'Poprawę pochłaniania w niższych częstotliwościach', 'Poprawę tylko w HF', 'Wzrost odbicia'], c: 1, e: 'Pustka przesuwa materiał w obszar większej prędkości cząsteczek dla dłuższych fal.' },
          { q: 'Współczynnik pochłaniania α = 0,85 przy 500 Hz oznacza, że:', a: ['85% energii wraca do pomieszczenia', '85% energii nie wraca do pomieszczenia', 'materiał tłumi o 85 dB', 'RT spadnie o 85%'], c: 1, e: 'α to udział energii niewracającej do pomieszczenia w danym pasmie.' },
          { q: 'Karta materiału podaje α = 1,15. To znaczy, że:', a: ['Materiał pochłania więcej niż 100% energii', 'Wynik z komory pogłosowej zawyżony efektem krawędziowym próbki — przyjmij 1,0', 'Dane są sfałszowane', 'Pomiar wykonano w rurze impedancyjnej'], c: 1, e: 'Dyfrakcja na krawędziach próbki powiększa jej efektywną powierzchnię.' },
        ],
        tasks: [
          'Zmierz (REW/OSM) odpowiedź w pomieszczeniu odsłuchowym, potem ustaw ten sam panel wełny raz przy ścianie, raz z 10 cm pustki. Porównaj pasmo 80–250 Hz.',
          'Zbierz karty katalogowe 3 materiałów, których używasz, i wypisz α w pasmach 125–4000 Hz wraz z opisem montażu.',
        ],
        res: ['b-everest', 'w-reverb', 't-rew'],
      },
      {
        id: 'rezonansowe', title: 'Ustroje membranowe i perforowane', level: 'zaawansowany',
        summary: 'Gdy nie ma miejsca na metr wełny, zostają ustroje rezonansowe. Ich częstotliwość pracy liczy się z prostych wzorów, a wypełnienie pustki decyduje o szerokości pasma.',
        concepts: [
          'Ustrój membranowy: płyta o masie powierzchniowej m na pustce d działa jak masa na sprężynie',
          'Częstotliwość pracy: f₀ ≈ 60 / √(m · d), gdzie m [kg/m²], d [m]',
          'Przykład: sklejka 3,6 kg/m² na pustce 9,5 cm → ok. 100 Hz',
          'Płyta perforowana: f₀ ≈ 508 · √(p / (t · d)), p — udział perforacji [%], t — efektywna długość otworu [cm], d — pustka [cm]',
          'Efektywna długość otworu t = grubość płyty + 0,8 · średnica otworu',
          'Wełna w pustce obniża dobroć Q, poszerza pasmo i przesuwa maksimum względem wzoru',
        ],
        quiz: [
          { q: 'Ustrój membranowy: płyta 4 kg/m², pustka 0,1 m. Częstotliwość pracy to około:', a: ['35 Hz', '95 Hz', '200 Hz', '450 Hz'], c: 1, e: 'f₀ = 60/√(4·0,1) = 60/0,63 ≈ 95 Hz.' },
          { q: 'Chcesz obniżyć częstotliwość pracy ustroju membranowego. Co zrobisz?', a: ['Zmniejszysz masę płyty', 'Zwiększysz masę płyty lub głębokość pustki', 'Zmniejszysz pustkę', 'Usuniesz wełnę'], c: 1, e: 'f₀ jest odwrotnie proporcjonalna do pierwiastka z iloczynu masy i głębokości.' },
          { q: 'Po co wkłada się wełnę mineralną w pustkę ustroju rezonansowego?', a: ['Dla sztywności konstrukcji', 'Aby obniżyć Q — poszerzyć pasmo pracy kosztem szczytowej wartości α', 'Aby podnieść częstotliwość pracy', 'Dla izolacyjności ogniowej'], c: 1, e: 'Tłumienie zamienia wąski, ostry rezonans na szersze, łagodniejsze pochłanianie.' },
          { q: 'Płyta perforowana 5 mm z otworami 5 mm ma efektywną długość otworu:', a: ['5 mm', '9 mm', '13 mm', '1 mm'], c: 1, e: 't = 5 mm + 0,8 · 5 mm = 9 mm.' },
        ],
        tasks: [
          'Zaprojektuj ustrój membranowy na problematyczny mod w swojej reżyserce lub pomieszczeniu odsłuchowym: policz masę płyty i głębokość pustki dla zmierzonej częstotliwości.',
          'Policz f₀ dla płyty perforowanej, którą masz pod ręką (zmierz grubość, średnicę i rozstaw otworów), i porównaj z pomiarem po montażu.',
        ],
        res: ['b-everest', 'b-ballou', 'w-reverb'],
      },
      {
        id: 'helmholtz', title: 'Rezonatory Helmholtza i ustroje listwowe', level: 'zaawansowany',
        summary: 'Masa powietrza w szyjce i sprężystość objętości dają wąskopasmowe pochłanianie tam, gdzie porowate materiały są bezradne — w niskich częstotliwościach.',
        concepts: [
          'Zasada: masa powietrza w szyjce drga na sprężynie, jaką jest powietrze w objętości',
          'Zmiana objętości, długości lub średnicy szyjki przesuwa częstotliwość pracy',
          'Tłumienie w szyjce (gaza, wełna) obniża amplitudę drgań i poszerza pasmo',
          'Dobroć Q = f₀ / Δf (Δf dla spadku 3 dB); typowo Q = 1–2, rzadko do 5',
          'Q = 5 przy 100 Hz to „czas pogłosu” ustroju ok. 0,1 s — niesłyszalny; problem dopiero przy Q rzędu 100',
          'Energia niepochłonięta jest wypromieniowana półkoliście — rezonator działa też jako element rozpraszający',
          'Ustrój listwowy to szereg rezonatorów: szczeliny między listwami są szyjkami',
        ],
        quiz: [
          { q: 'Rezonator Helmholtza pochłania:', a: ['Szerokopasmowo, jak wełna', 'Wąskopasmowo, wokół swojej częstotliwości rezonansu', 'Tylko wysokie częstotliwości', 'Nic — tylko rozprasza'], c: 1, e: 'Dlatego stosuje się go do konkretnych, zmierzonych problemów w LF.' },
          { q: 'Ustrój ma f₀ = 80 Hz i Δf = 40 Hz. Jego dobroć wynosi:', a: ['0,5', '2', '40', '120'], c: 1, e: 'Q = f₀/Δf = 80/40 = 2 — typowa wartość dla ustrojów listwowych.' },
          { q: 'Obawa, że ustroje rezonansowe będą „dzwonić” w pomieszczeniu, jest:', a: ['Uzasadniona — zawsze dodają pogłos', 'Zwykle nieuzasadniona, bo przy Q rzędu 1–5 czas zaniku to setne części sekundy', 'Uzasadniona tylko dla wełny', 'Nieistotna, bo ustroje nie rezonują'], c: 1, e: 'Dopiero konstrukcje o bardzo wysokim Q (np. ceramiczne) mogłyby być słyszalne.' },
          { q: 'Gdzie umieścić basotrap, żeby pracował najskuteczniej?', a: ['Na środku ściany', 'W narożniku, gdzie ciśnienie modów jest największe', 'Na suficie w centrum', 'Za głośnikiem'], c: 1, e: 'W narożnikach zbiegają się maksima ciśnienia wszystkich modów osiowych.' },
        ],
        tasks: [
          'Zmierz mody swojego pomieszczenia i wybierz dwie częstotliwości, dla których zaprojektujesz ustroje. Zapisz obliczenia i wynik pomiaru po montażu.',
        ],
        res: ['b-everest', 'b-long', 't-rew'],
      },
      {
        id: 'adaptacja', title: 'Dane pochłaniania i projekt adaptacji', level: 'średni',
        summary: 'Adaptacja to bilans energii w pasmach, a nie „naklejenie pianki”. Liczy się, ile metrów kwadratowych czego i gdzie — oraz czym to zweryfikujesz.',
        concepts: [
          'Metody pomiaru α: komora pogłosowa (pole rozproszone) i rura impedancyjna Kundta (padanie prostopadłe)',
          'Chłonność A = Σ S·α w każdym paśmie; z niej liczysz RT ze wzoru Sabine’a',
          'Jednoliczbowe wskaźniki (NRC, αw) to skrót — projektuj na podstawie widma',
          'Ludzie, fotele i powietrze też pochłaniają; powietrze głównie powyżej 2 kHz',
          'Typowy błąd: nadmiar cienkiej pianki — martwe HF przy niezmienionym basie',
          'Adaptacja zaczyna się od pomiaru i celu (RT, echa, mody), nie od katalogu produktów',
        ],
        quiz: [
          { q: 'Pomieszczenie 300 m³ ma chłonność A = 40 m² Sabine przy 500 Hz. RT wynosi:', a: ['0,6 s', '1,2 s', '2,4 s', '4,8 s'], c: 1, e: 'RT = 0,161·300/40 ≈ 1,2 s.' },
          { q: 'Rura impedancyjna (Kundta) mierzy α dla:', a: ['Padania prostopadłego, na małej próbce', 'Pola rozproszonego, na dużej próbce', 'Całego pomieszczenia', 'Pochłaniania powietrza'], c: 0, e: 'Wyniki różnią się od komory pogłosowej — nie mieszaj obu źródeł danych w jednym bilansie.' },
          { q: 'Sala po wytłumieniu ma martwe wysokie i buczący bas. Najbardziej prawdopodobna przyczyna:', a: ['Za mało pianki', 'Zastosowano tylko cienkie materiały porowate, bez ustrojów niskotonowych', 'Za dużo basotrapów', 'Błąd EQ systemu'], c: 1, e: 'Cienkie materiały pochłaniają HF i prawie nie działają w LF — bilans staje się nierównomierny.' },
        ],
        tasks: [
          'Zrób bilans chłonności sali, w której często pracujesz (powierzchnie × α w pasmach) i porównaj policzony RT z pomiarem T30.',
          'Zaproponuj adaptację dla jednej problematycznej sali: co, ile m², gdzie i jakiego typu — z uzasadnieniem w pasmach.',
        ],
        res: ['b-everest', 'b-long', 'b-ballou', 't-rew'],
      },
    ],
  },
  {
    id: 'ch13', short: 'Pomieszczenie', title: 'Pomieszczenie: mody, odbicia i rozpraszanie', color: '#7ad1a5', icon: 'room',
    subtitle: 'Drgania własne, echogramy, dyfuzory Schroedera, dyfrakcja i refrakcja.',
    topics: [
      {
        id: 'mody', title: 'Drgania własne pomieszczenia', level: 'zaawansowany',
        summary: 'Poniżej pewnej częstotliwości pomieszczenie przestaje być „przestrzenią”, a staje się zbiorem rezonansów. Umiesz je policzyć — umiesz przewidzieć problemy z basem.',
        concepts: [
          'Wzór na drgania własne: f = (c/2)·√((p/L)² + (q/W)² + (r/H)²), gdzie p, q, r to liczby całkowite',
          'Rezonanse osiowe (jedna liczba ≠ 0) — najsilniejsze; styczne (dwie) — ok. połowa energii; skośne (trzy) — najsłabsze',
          'Najniższy mod osiowy wyznacza najdłuższy wymiar: poniżej niego pomieszczenie nie wzmacnia dźwięku',
          'Gęstość modów rośnie z częstotliwością — powyżej częstotliwości granicznej przechodzimy w akustykę statystyczną',
          'Koincydencje (kilka modów w tej samej częstotliwości) i duże odstępy między modami dają zakolorowania',
          'Kryterium Bonella: liczba modów w kolejnych pasmach 1/3 oktawy poniżej 200 Hz nie powinna maleć; koincydencje dopuszczalne dopiero przy ≥ 5 modach w paśmie',
          'Ustrój niskotonowy działa w strzałce ciśnienia (narożnik, środek ściany), a nie w węźle',
        ],
        quiz: [
          { q: 'Pomieszczenie 6,0 × 4,0 × 2,8 m. Najniższy mod osiowy to około:', a: ['14 Hz', '29 Hz', '43 Hz', '61 Hz'], c: 1, e: 'f = 343/(2·6,0) ≈ 28,6 Hz — wyznacza go najdłuższy wymiar.' },
          { q: 'Który typ rezonansu ma największy wpływ na akustykę pomieszczenia?', a: ['Skośny', 'Styczny', 'Osiowy', 'Wszystkie tak samo'], c: 2, e: 'Mody osiowe niosą najwięcej energii — biegną między dwiema równoległymi ścianami.' },
          { q: 'Kryterium Bonella ocenia:', a: ['Czas pogłosu w pasmach', 'Rozkład liczby modów w pasmach 1/3 oktawy poniżej 200 Hz', 'Izolacyjność ścian', 'Zrozumiałość mowy'], c: 1, e: 'Sprawdza, czy gęstość modów rośnie płynnie i czy nie ma kumulacji.' },
          { q: 'Gdzie umieścisz wąskopasmowy rezonator dostrojony do konkretnego modu?', a: ['W węźle ciśnienia', 'W strzałce ciśnienia — np. w narożniku lub na środku ściany', 'Na suficie w centrum', 'Przy głośniku'], c: 1, e: 'W węźle ciśnienie jest bliskie zeru, więc rezonator nie ma z czego pobierać energii.' },
        ],
        tasks: [
          'Policz mody osiowe swojego pomieszczenia odsłuchowego i porównaj je z pomiarem odpowiedzi w kilku pozycjach. Zaznacz te, które się pokrywają.',
          'Sprawdź proporcje pomieszczenia kryterium Bonella (arkusz lub skrypt) i oceń, które pasma 1/3 oktawy są problematyczne.',
        ],
        res: ['b-everest', 'b-long', 't-rew', 'w-reverb'],
      },
      {
        id: 'odbicia-pom', title: 'Odbicia, echogram i pierwsze odbicia', level: 'średni',
        summary: 'W małym pomieszczeniu w ciągu sekundy zdarza się ponad sto odbić. To, które z nich słychać jako problem, zależy od czasu, poziomu i kierunku.',
        concepts: [
          'Średnia droga swobodna: 4V/S — średni dystans między kolejnymi odbiciami',
          'Przykład: pomieszczenie ok. 7,6 × 6,1 × 3,0 m daje drogę ok. 3,2 m, czyli odbicie co ok. 9 ms (ponad 100 odbić na sekundę)',
          'Echogram (ETC) pokazuje kolejne odbicia w czasie — to podstawowe narzędzie diagnozy',
          'Pierwsze odbicia wzmacniają i poszerzają obraz, późne i silne stają się echem',
          'Punkty pierwszych odbić wyznacza się metodą lustra; typowe rozwiązania to pochłanianie, rozpraszanie lub odchylenie powierzchni',
          'Opóźnienie rzędu 0,5 ms daje zakolorowanie w paśmie krytycznym, przy kilkudziesięciu ms słyszymy już oddzielne zdarzenie',
        ],
        quiz: [
          { q: 'Średnia droga swobodna w pomieszczeniu o V = 300 m³ i S = 280 m² wynosi:', a: ['1,1 m', '4,3 m', '8,6 m', '12 m'], c: 1, e: '4V/S = 1200/280 ≈ 4,3 m — czyli odbicie mniej więcej co 12,5 ms.' },
          { q: 'Do czego służy metoda lustra?', a: ['Do pomiaru pogłosu', 'Do wyznaczenia punktów pierwszych odbić na ścianach', 'Do obliczenia modów', 'Do kalibracji mikrofonu'], c: 1, e: 'Odbicie geometryczne traktujemy jak źródło pozorne po drugiej stronie powierzchni.' },
          { q: 'Silne pojedyncze odbicie opóźnione o 60 ms względem dźwięku bezpośredniego będzie odbierane jako:', a: ['Wzmocnienie poziomu', 'Poszerzenie obrazu', 'Wyraźne echo', 'Zakolorowanie barwy'], c: 2, e: 'Powyżej strefy fuzji (kilkadziesiąt ms) słyszymy oddzielne zdarzenie.' },
        ],
        tasks: [
          'Zmierz ETC w swoim pomieszczeniu odsłuchowym i zidentyfikuj trzy najsilniejsze wczesne odbicia. Ustal geometrycznie, od których powierzchni pochodzą.',
        ],
        res: ['b-everest', 'w-ir', 't-rew', 'b-mccarthy'],
      },
      {
        id: 'dyfuzory', title: 'Rozpraszanie i dyfuzory Schroedera', level: 'zaawansowany',
        summary: 'Trzecie narzędzie obok pochłaniania i odbicia. Dyfuzor rozkłada energię w czasie i przestrzeni, zamiast ją usuwać — dlatego pomieszczenie zostaje żywe, ale bez zakolorowań.',
        concepts: [
          'Trzy narzędzia adaptacji: pochłanianie (usuwa energię), odbicie (kieruje ją), rozpraszanie (rozkłada w czasie i kierunkach)',
          'Dyfuzor Schroedera: studnie o głębokościach wynikających z ciągu residuum kwadratowego n² mod p (p — liczba pierwsza)',
          'Maksymalna głębokość studni wynika z najdłuższej fali, którą chcemy rozproszyć',
          'Szerokość studni to ok. połowa najkrótszej długości fali, którą chcemy rozproszyć — ona wyznacza górną granicę pasma',
          'Dyfuzory pozwalają zachować energię w pomieszczeniu (ważne dla muzyków) zamiast ją tłumić',
          'Nie każdy problem rozwiąże dyfuzor: modów i nadmiaru pogłosu nim nie usuniesz',
        ],
        quiz: [
          { q: 'Głębokości studni dyfuzora QRD wynikają z:', a: ['Ciągu Fibonacciego', 'Sekwencji residuum kwadratowego n² mod p', 'Rozkładu normalnego', 'Podziału złotego'], c: 1, e: 'Sekwencja zapewnia równomierny rozkład faz odbicia.' },
          { q: 'Co ogranicza górną częstotliwość pracy dyfuzora?', a: ['Głębokość studni', 'Szerokość studni', 'Liczba pierwsza p', 'Materiał wykonania'], c: 1, e: 'Szerokość studni odpowiada mniej więcej połowie najkrótszej rozpraszanej fali.' },
          { q: 'Główna przewaga rozpraszania nad pochłanianiem w studiu:', a: ['Jest tańsze', 'Rozkłada energię bez wytłumienia pomieszczenia', 'Redukuje mody', 'Zwiększa izolacyjność'], c: 1, e: 'Muzycy i realizatorzy potrzebują żywego, ale niezakolorowanego pomieszczenia.' },
        ],
        tasks: [
          'Zaprojektuj dyfuzor QRD dla pasma 500 Hz – 4 kHz: dobierz liczbę pierwszą, szerokość i głębokość studni. Sprawdź, czy mieści się w Twojej przestrzeni.',
        ],
        res: ['b-everest', 'l-aes', 'b-long'],
      },
      {
        id: 'dyfrakcja', title: 'Dyfrakcja i refrakcja w praktyce', level: 'średni',
        summary: 'Fala omija przeszkody i zakrzywia tor w niejednorodnym ośrodku. To wyjaśnia, dlaczego ekran akustyczny nie zatrzymuje basu, a wieczorem dźwięk niesie się dalej.',
        concepts: [
          'Dyfrakcja zależy od stosunku wymiaru przeszkody do długości fali — mała przeszkoda nie jest przeszkodą dla długiej fali',
          'Za ekranem powstaje strefa cienia skuteczna głównie dla wysokich częstotliwości',
          'Im węższa szczelina, tym szersze rozproszenie przechodzącej wiązki',
          'Dyfrakcja na krawędziach obudowy głośnika wpływa na charakterystykę i lokalizację',
          'Refrakcja: gradient temperatury i wiatru zakrzywia tor fali w atmosferze',
          'Powierzchnie wklęsłe skupiają energię (ogniska), wypukłe rozpraszają',
        ],
        quiz: [
          { q: 'Ekran akustyczny przy drodze najskuteczniej tłumi:', a: ['Niskie częstotliwości', 'Wysokie częstotliwości', 'Całe pasmo równomiernie', 'Tylko infradźwięki'], c: 1, e: 'Długie fale uginają się i wchodzą w strefę cienia.' },
          { q: 'Powierzchnia wklęsła w pomieszczeniu (np. łukowa ściana) powoduje:', a: ['Równomierne rozpraszanie', 'Skupianie energii w ognisku', 'Pochłanianie LF', 'Brak wpływu'], c: 1, e: 'To typowa przyczyna „gorących punktów” i echa w salach z łukami.' },
          { q: 'Zwężenie szczeliny, przez którą przechodzi dźwięk, powoduje:', a: ['Węższą wiązkę za szczeliną', 'Szersze rozproszenie wiązki', 'Brak zmian', 'Wzrost poziomu'], c: 1, e: 'Im mniejszy otwór względem λ, tym silniejsza dyfrakcja.' },
        ],
        tasks: [
          'Na plenerze zmierz poziom w pasmach za dużym ekranem (np. ścianą lub kontenerem) i porównaj tłumienie w 125 Hz i 4 kHz.',
        ],
        res: ['b-everest', 'n-iso9613', 'w-directivity'],
      },
    ],
  },
  {
    id: 'ch14', short: 'Izolacja', title: 'Izolacja akustyczna i tło', color: '#8fa6c9', icon: 'shield',
    subtitle: 'Przenoszenie dźwięku przez przegrody, klasy izolacyjności, wentylacja i krzywe tła.',
    topics: [
      {
        id: 'izolacja', title: 'Przegrody i drogi przenoszenia', level: 'średni',
        summary: 'Izolacyjność to nie „grubość ściany”, tylko masa, rozdzielenie i szczelność. Każdy mostek i każda szczelina niweczy pracę całej konstrukcji.',
        concepts: [
          'Cztery strategie: wybór cichej lokalizacji, redukcja energii w pomieszczeniu, wyciszenie źródła, przegroda między nimi',
          'Prawo masy: cięższa przegroda izoluje lepiej; podwojenie masy daje ok. 5–6 dB',
          'Rozdzielenie konstrukcji (słupki naprzemienne, ściana podwójna) daje więcej niż sama masa — nawet 10–15 dB',
          'Klasy jednoliczbowe (STC, Rw) upraszczają opis; realny problem często leży w LF, poza zakresem wskaźnika',
          'Drzwi, okna i przepusty są najsłabszym ogniwem: dobre okno podwójne osiąga poziom porównywalny ze ścianą tylko przy starannym montażu',
          'Szczelność: nieuszczelniona szczelina niweczy izolacyjność całej przegrody',
          'Przenoszenie boczne i konstrukcyjne (wibracje) omija przegrodę — potrzebne są wibroizolatory',
        ],
        quiz: [
          { q: 'Co daje więcej izolacyjności niż samo zwiększenie masy ściany?', a: ['Pomalowanie farbą akustyczną', 'Rozdzielenie konstrukcji na dwie niezależne warstwy', 'Naklejenie pianki', 'Zwiększenie pogłosu'], c: 1, e: 'Brak sztywnego połączenia przerywa drogę przenoszenia — zysk rzędu 10–15 dB.' },
          { q: 'Najsłabszym ogniwem izolacyjności zwykle jest:', a: ['Środek ściany', 'Drzwi, okna i nieuszczelnione przepusty', 'Sufit', 'Podłoga pływająca'], c: 1, e: 'Izolacyjność całej przegrody wyznacza jej najsłabszy element.' },
          { q: 'Wskaźnik jednoliczbowy (STC/Rw) bywa mylący, bo:', a: ['Jest zbyt surowy', 'Nie opisuje zachowania w niskich częstotliwościach, gdzie leży problem muzyki i basu', 'Dotyczy tylko drzwi', 'Zależy od pogłosu w pomieszczeniu odbiorczym'], c: 1, e: 'Dwie przegrody o tym samym STC mogą zachowywać się zupełnie inaczej przy 63 Hz.' },
        ],
        tasks: [
          'Zrób audyt jednej przegrody w miejscu, gdzie pracujesz: wypisz wszystkie drogi przenoszenia (drzwi, przepusty, wentylacja, konstrukcja) i oceń, która dominuje.',
        ],
        res: ['b-everest', 'b-ballou', 'n-ciop'],
      },
      {
        id: 'tlo', title: 'Tło akustyczne, wentylacja i krzywe NCB', level: 'średni',
        summary: 'Hałas tła wyznacza dolną granicę dynamiki pomieszczenia. W studiach i salach odsłuchowych opisuje się go krzywymi kryterialnymi, a jego głównym źródłem jest wentylacja.',
        concepts: [
          'Krzywe kryterialne (NCB, NC, RC) określają dopuszczalny poziom w każdym paśmie oktawowym',
          'Krzywe opadają w stronę niskich częstotliwości — odzwierciedlają czułość słuchu i charakter szumów instalacji',
          'Dla studiów przyjmuje się zwykle NCB-20 jako górną granicę; wyższe wymagania nie mają sensu, jeśli hałas z zewnątrz jest głośniejszy',
          'Instalacja wentylacyjna: hałas wentylatora, szum przepływu i prędkość powietrza w kratkach',
          'Tłumiki, wyciszone kanały i zmniejszenie prędkości przepływu to podstawowe narzędzia',
          'Pomiar tła wykonuje się miernikiem z filtrami oktawowymi i nanosi na wykres krzywych',
        ],
        quiz: [
          { q: 'Krzywe NCB opisują:', a: ['Czas pogłosu w pasmach', 'Dopuszczalny poziom hałasu tła w pasmach oktawowych', 'Izolacyjność przegród', 'Zrozumiałość mowy'], c: 1, e: 'To kryterium akceptowalnego tła, nanoszone na wyniki pomiaru oktawowego.' },
          { q: 'Dlaczego krzywe kryterialne dopuszczają wyższe poziomy w niskich częstotliwościach?', a: ['Bo LF jest nieszkodliwe', 'Bo ucho jest tam mniej czułe, a szum instalacji ma tam więcej energii', 'Bo mierniki nie działają poniżej 125 Hz', 'To błąd normy'], c: 1, e: 'Kształt krzywych łączy czułość słuchu z realnym widmem szumów.' },
          { q: 'Najczęstszym źródłem hałasu tła w studiu jest:', a: ['Oświetlenie', 'Wentylacja i klimatyzacja', 'Sprzęt audio', 'Ruch uliczny'], c: 1, e: 'Dlatego projekt instalacji trzeba uzgadniać na etapie planowania, nie po fakcie.' },
        ],
        tasks: [
          'Zmierz tło akustyczne w swojej reżyserce lub pomieszczeniu odsłuchowym w pasmach oktawowych i nanieś wynik na krzywe NCB. Zidentyfikuj pasmo, które przekracza cel.',
        ],
        res: ['b-everest', 'b-ballou', 'n-who'],
      },
    ],
  },

  {
    id: 'ch15', short: 'Obiekty', title: 'Duże obiekty: hale, areny i plenery', color: '#e0845f', icon: 'blueprint',
    subtitle: 'Kubatura i pogłos areny, echa od dachu i trybun, sprzężenie z gruntem, adaptacja obiektu na koncert.',
    topics: [
      {
        id: 'kubatura', title: 'Kubatura, pogłos i publiczność', level: 'zaawansowany',
        summary: 'W hali sportowej pogłos jest przeciwnikiem numer jeden. Zanim podwiesisz system, oszacuj, z czym walczysz — i o ile zmieni to pełna widownia.',
        concepts: [
          'Czas pogłosu obiektu szacujesz wzorem Sabine’a już na etapie advance',
          'Chłonność A jako suma iloczynów powierzchni i współczynników pochłaniania, liczona w pasmach',
          'Publiczność to największy ustrój pochłaniający w obiekcie — pusta hala na próbie brzmi zupełnie inaczej niż pełna na show',
          'Skutek praktyczny: po wpuszczeniu ludzi ubywa energii w średnich i wysokich pasmach, bas zostaje',
          'Odległość krytyczna: za nią dominuje pogłos — kierunkowość systemu decyduje, jak daleko ją przesuniesz',
          'Absorpcja powietrza staje się istotna powyżej 2 kHz przy dużych dystansach rzutu',
          'Cel systemowy w hali: maksimum energii na publiczność, minimum na puste powierzchnie i dach',
        ],
        quiz: [
          { q: 'Hala o V = 40 000 m³ i chłonności A = 1 600 m² Sabine ma RT około:', a: ['1 s', '2 s', '4 s', '8 s'], c: 2, e: 'RT = 0,161·40000/1600 ≈ 4 s — typowa hala widowiskowo-sportowa bez adaptacji.' },
          { q: 'Pełna widownia w porównaniu z pustą halą:', a: ['Wydłuża pogłos', 'Skraca pogłos, głównie w średnich i wysokich pasmach', 'Nie zmienia nic', 'Skraca pogłos wyłącznie w basie'], c: 1, e: 'Dlatego strojenie w pustej hali wymaga przewidzenia zmiany i weryfikacji po wpuszczeniu publiczności.' },
          { q: 'Najskuteczniejszy sposób poprawy stosunku dźwięku bezpośredniego do pogłosowego w hali to:', a: ['Podbicie poziomu systemu', 'Większa kierunkowość i precyzyjne kąty pokrycia', 'Korekcja EQ', 'Zwiększenie liczby subów'], c: 1, e: 'Poziom podnosi jednocześnie pole bezpośrednie i pogłosowe — geometria nie.' },
        ],
        tasks: [
          'Dla hali, w której pracowałeś ostatnio, oszacuj kubaturę i RT ze wzoru Sabine’a, a potem porównaj z pomiarem T30 z pustej hali.',
          'Zmierz RT (lub choć ETC) przed wpuszczeniem publiczności i po — w tym samym punkcie. Zanotuj różnicę w pasmach.',
        ],
        res: ['b-everest', 'b-long', 't-rew', 'b-mccarthy'],
      },
      {
        id: 'echa', title: 'Echa, dach i trybuny', level: 'zaawansowany',
        summary: 'Tylna ściana, szklana fasada i łukowy dach potrafią zniszczyć dobrze zaprojektowane pokrycie. Trzeba je znaleźć w predykcji, a nie podczas pierwszego numeru.',
        concepts: [
          'Echo powstaje, gdy silne pojedyncze odbicie dociera kilkadziesiąt ms po froncie — typowo od tylnej ściany lub dachu',
          'Powierzchnie wklęsłe (łukowe dachy, kopuły) skupiają energię w ogniskach; wypukłe rozpraszają',
          'Energia skierowana powyżej ostatniego rzędu to czysta strata, która wraca jako pogłos i echo',
          'Metoda lustra w predykcji: sprawdzaj, gdzie trafia energia z krawędzi pokrycia tablicy',
          'Ekrany LED, szkło i blacha to twarde reflektory — także za sceną i na bokach',
          'Narzędzia zaradcze: kąty i krzywizna tablicy, zmiana trim, kurtyny i banery, a w ostateczności delay dla stref cienia',
        ],
        quiz: [
          { q: 'Silne odbicie od tylnej ściany docierające 80 ms po froncie będzie odbierane jako:', a: ['Wzmocnienie basu', 'Wyraźne echo', 'Zakolorowanie barwy', 'Poszerzenie obrazu'], c: 1, e: 'Powyżej strefy fuzji mózg traktuje je jako osobne zdarzenie.' },
          { q: 'Łukowy dach hali jest problematyczny, bo:', a: ['Pochłania bas', 'Skupia energię w ogniskach', 'Rozprasza wysokie częstotliwości', 'Zmienia prędkość dźwięku'], c: 1, e: 'Powierzchnia wklęsła działa jak zwierciadło skupiające — stąd „gorące punkty” i echa.' },
          { q: 'Najtańszy sposób ograniczenia echa od tylnej ściany w hali to:', a: ['EQ na systemie', 'Korekta kątów i krzywizny tablicy, by nie oświetlać ściany powyżej publiczności', 'Zwiększenie poziomu', 'Dodanie subów'], c: 1, e: 'Energia, która tam nie trafi, nie wróci jako echo — EQ tego nie naprawi.' },
        ],
        tasks: [
          'W predykcji ostatniego projektu sprawdź, ile energii trafia powyżej ostatniego rzędu. Popraw kąty i porównaj mapy.',
          'Na obiekcie zmierz ETC w kilku punktach widowni i zidentyfikuj odbicie od tylnej ściany oraz dachu — policz różnicę dróg z czasu.',
        ],
        res: ['b-mccarthy', 'b-everest', 't-soundvision', 't-arraycalc'],
      },
      {
        id: 'sprzezenie', title: 'Sprzężenie z gruntem i powierzchniami', level: 'średni',
        summary: 'Ten sam sub na ziemi, na scenie i w podwieszeniu to trzy różne źródła. Sprzężenie z powierzchniami zmienia poziom i charakterystykę bardziej niż większość korekcji.',
        concepts: [
          'Źródło przy jednej dużej powierzchni promieniuje w pół przestrzeni: ok. +3 dB w LF; przy dwóch ok. +6 dB, w narożniku ok. +9 dB',
          'Gdy odległość od powierzchni jest porównywalna z λ, zamiast wzmocnienia pojawiają się wycięcia interferencyjne',
          'Suby na gruncie korzystają ze sprzężenia; suby podwieszone tracą je, ale zyskują jednorodność front-back',
          'Odbicie od gruntu tworzy filtr grzebieniowy zależny od wysokości źródła i słuchacza',
          'Scena, ściany boczne i konstrukcja dachu sceny to dodatkowe powierzchnie sprzęgające — także dla monitorów',
          'W halach bas dodatkowo pobudza mody obiektu: energia zostaje w przestrzeni znacznie dłużej niż średnica',
        ],
        quiz: [
          { q: 'Sub postawiony na gruncie względem tego samego suba wysoko w powietrzu daje w LF około:', a: ['−3 dB', 'bez zmian', '+3 dB', '+9 dB'], c: 2, e: 'Promieniowanie w pół przestrzeni zamiast pełnej sfery to ok. 3 dB zysku.' },
          { q: 'Filtr grzebieniowy od odbicia od gruntu zależy przede wszystkim od:', a: ['Mocy wzmacniacza', 'Wysokości źródła i odbiornika oraz odległości', 'Typu presetu', 'Wilgotności'], c: 1, e: 'To geometria wyznacza różnicę dróg, a więc częstotliwości wycięć.' },
          { q: 'Suby podwieszone w porównaniu z naziemnymi:', a: ['Zawsze grają głośniej', 'Tracą zysk od gruntu, ale dają lepszą jednorodność front-back', 'Nie wymagają wyrównania z tablicą', 'Mają większą kierunkowość w HF'], c: 1, e: 'To klasyczny kompromis przy projektowaniu dużych systemów.' },
        ],
        tasks: [
          'Zmierz ten sam sub na gruncie i podniesiony o 1 m (np. na wybiegu). Porównaj poziom i kształt charakterystyki w pasmie 40–120 Hz.',
          'Policz częstotliwości wycięć od odbicia od gruntu dla swojej typowej geometrii FOH i porównaj z pomiarem.',
        ],
        res: ['a-mvv', 'b-mccarthy', 't-arraycalc'],
      },
      {
        id: 'adaptacja-obiektu', title: 'Adaptacja obiektu na koncert', level: 'średni',
        summary: 'Nie zmienisz hali, ale możesz zmienić jej chłonność. Banery, kurtyny i zabudowa to realne narzędzia produkcji — o ile wiesz, ile metrów kwadratowych i gdzie.',
        concepts: [
          'Kurtyny i banery akustyczne działają głównie średnio- i wysokotonowo — bas zostaje',
          'Skuteczność kotary rośnie z masą powierzchniową, marszczeniem i odstępem od ściany',
          'Zasłonięcie pustych trybun i tylnej ściany ogranicza najsilniejsze echa',
          'Bilans: policz potrzebną chłonność A z docelowego RT, potem przelicz na metry kwadratowe materiału',
          'Publiczność stojąca vs siedząca oraz zabudowa sceny zmieniają bilans w trakcie eventu',
          'Adaptacja to zwykle negocjacja z produkcją: koszt, rigging, estetyka i czas montażu',
        ],
        quiz: [
          { q: 'Kurtyny rozwieszone w hali poprawiają przede wszystkim:', a: ['Kontrolę basu', 'Zrozumiałość i echa w średnich oraz wysokich pasmach', 'Izolacyjność od sąsiadów', 'Sprzężenie subów'], c: 1, e: 'Materiały tekstylne bez dużej masy i odstępu nie kontrolują niskich częstotliwości.' },
          { q: 'Hala ma V = 30 000 m³ i RT = 4 s. Aby zejść do 2 s, chłonność musi:', a: ['Wzrosnąć dwukrotnie', 'Zmaleć dwukrotnie', 'Wzrosnąć czterokrotnie', 'Pozostać bez zmian'], c: 0, e: 'RT jest odwrotnie proporcjonalny do chłonności — dwa razy krótszy pogłos to dwa razy większe A.' },
          { q: 'Największy zysk akustyczny w hali daje zwykle zasłonięcie:', a: ['Podłogi pod sceną', 'Pustych trybun i tylnej ściany za publicznością', 'Sufitu nad sceną', 'Wejść bocznych'], c: 1, e: 'To powierzchnie odpowiadające za najsilniejsze późne odbicia.' },
        ],
        tasks: [
          'Dla jednej znanej Ci hali policz, ile m² materiału o α ≈ 0,6 potrzeba, by skrócić RT o połowę. Oceń, czy to realne produkcyjnie.',
          'Przygotuj listę „adaptacja obiektu” do advance: co zasłonić, czym, ile m², kto montuje i ile to kosztuje czasu.',
        ],
        res: ['b-everest', 'b-long', 'b-mccarthy'],
      },
    ],
  },
];

export const LEVEL_LABEL = { podstawy: 'Podstawy', 'średni': 'Średni', zaawansowany: 'Zaawansowany' };
