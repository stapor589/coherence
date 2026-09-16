// Treść lekcji: wyjaśnienia do zagadnień z curriculum.js (ta sama kolejność).
// Opcjonalne pole `goals` — cele lekcji wyświetlane na ekranie startowym.

export const LESSONS = {
  fale: {
    goals: ['Szybko liczyć λ, okres i fazę w głowie', 'Rozumieć, dlaczego temperatura zmienia wyrównanie'],
    steps: [
      'Prędkość dźwięku w powietrzu zależy głównie od temperatury, a praktycznie nie od ciśnienia. Wzór przybliżony c ≈ 331,3 + 0,606·T wystarcza do pracy: przy 0°C ≈ 331 m/s, przy 20°C ≈ 343 m/s, przy 35°C ≈ 352 m/s. Wilgotność ma wpływ marginalny na prędkość, ale istotny na tłumienie HF.',
      'Długość fali to odległość, na której faza sygnału powtarza się. W nagłośnieniu rozpiętość jest ogromna — trzy rzędy wielkości. To dlatego ten sam głośnik jest dookólny w LF i kierunkowy w HF, a te same rozstawy działają dla 1 kHz zupełnie inaczej niż dla 60 Hz.',
      'Faza to czas wyrażony w ułamkach okresu. Opóźnienie 1 ms to 360° dla 1 kHz, 90° dla 250 Hz i tylko 36° dla 100 Hz. Ten jeden wzór tłumaczy, dlaczego wyrównanie „na HF” nie gwarantuje zgodności w LF.',
      'Oktawa to podwojenie częstotliwości, tercja to 1/3 oktawy. Słuch działa logarytmicznie, dlatego analizatory i EQ używają skal oktawowych. Myśl o problemach w oktawach: 63 Hz i 125 Hz to „sąsiedzi”, a 5 kHz i 5,1 kHz to praktycznie to samo.',
      'Jeśli dwa sygnały różnią się o stały czas, różnica fazy rośnie liniowo z częstotliwością. Na analizatorze z liniową osią f widać to jako równe nachylenie fazy, na osi logarytmicznej — jako coraz gęstsze „zawijanie” w HF. Rozpoznawanie tego obrazu to podstawa pracy z delay finderem.',
      'Zmiana temperatury o 10°C zmienia prędkość o ok. 1,8%. Na 100 m to ok. 5 ms — dla 200 Hz już ponad 360°. Dlatego na plenerze wyrównanie delay wykonane w południe może wymagać korekty wieczorem, szczególnie gdy temperatura spada gwałtownie.',
    ],
  },
  db: {
    goals: ['Swobodnie przechodzić między dBu, dBV, dBFS i V', 'Wiedzieć, jaką wagą i czasem mierzyć'],
    steps: [
      'Decybel to logarytmiczny stosunek dwóch wielkości. Dla wielkości mocy używamy 10·log(P1/P2), dla wielkości „polowych” (napięcie, ciśnienie) 20·log(U1/U2), bo moc jest proporcjonalna do kwadratu napięcia/ciśnienia. W efekcie oba wzory dają ten sam wynik dla tego samego zjawiska.',
      'dB bez odniesienia to tylko różnica. Odniesienia: dB SPL do 20 µPa (próg słyszenia), dBu do 0,775 V (1 mW na 600 Ω), dBV do 1 V, dBFS do pełnej skali konwertera. 0 dBV = +2,2 dBu. Wartość dBFS w dBu zależy od konkretnego urządzenia — sprawdzaj dokumentację.',
      '+6 dB to podwojenie napięcia i ciśnienia, +3 dB to podwojenie mocy (np. dwa wzmacniacze albo dwa nieskorelowane źródła). Subiektywne „dwa razy głośniej” to około +10 dB, czyli 10× więcej mocy. Warto o tym pamiętać, gdy ktoś prosi o „trochę głośniej”.',
      'Waga A odwzorowuje czułość ucha przy niskich poziomach i silnie tłumi LF — stosowana w przepisach ochrony słuchu. Waga C jest prawie płaska w pasmie użytecznym i dobrze opisuje energię subów. Z to pomiar bez ważenia. Różnica LCeq − LAeq to szybki wskaźnik „ile basu” jest w miksie.',
      'Leq to równoważny poziom energetyczny uśredniony w określonym czasie — LAeq,15min to średnia z 15 minut z wagą A. LCpeak to maksymalna chwilowa wartość szczytowa z wagą C, istotna dla ryzyka uszkodzenia słuchu impulsami. Dla monitoringu publiczności liczy się Leq, dla ekipy także ekspozycja dzienna.',
      'Szczyt to maksymalna chwilowa wartość, RMS — wartość skuteczna odpowiadająca energii. Crest factor to różnica szczytu i RMS w dB: sinus ma 3 dB, szum różowy ok. 12 dB, muzyka zwykle 12–20 dB. Od crest factora zależy, ile headroomu potrzebują wzmacniacze i jak pracują limitery.',
    ],
  },
  sumowanie: {
    goals: ['Przewidywać wynik sumowania dwóch źródeł', 'Rozumieć strategię izolacji i nakładania'],
    steps: [
      'Sygnały skorelowane (ten sam sygnał z dwóch głośników) sumują się amplitudowo: przy równym poziomie i zgodnej fazie wynik jest +6 dB. Ale ten sam mechanizm przy przeciwnej fazie daje głębokie wycięcie — sumowanie koherentne to zawsze gra o fazę.',
      'Sygnały nieskorelowane (różne instrumenty, szum z różnych generatorów, pogłos) sumują się energetycznie: dwa równe dają +3 dB, niezależnie od fazy. Stąd różnica w zachowaniu subów grających ten sam sygnał a publiczności gadającej w tle.',
      'Gdy dwa skorelowane sygnały są przesunięte w czasie, dla części częstotliwości są w fazie, a dla części w przeciwfazie. Powstaje filtr grzebieniowy: wycięcia w f = (2n+1)/(2·Δt). Im większe Δt, tym gęstsze i węższe wycięcia — w HF zlewają się w „brzmienie przestrzeni”, w LF i MF są słyszalne jako barwienie.',
      'Głębokość wycięć zależy od różnicy poziomów. Przy 0 dB różnicy wycięcie jest teoretycznie nieskończone, przy 6 dB ripple to ok. +3,5/−6 dB, przy 10 dB ok. +2,4/−3,3 dB, przy 20 dB poniżej ±1 dB. Izolacja poziomów to podstawowe narzędzie ograniczania interferencji.',
      'McCarthy dzieli obszar pokrycia na strefy według relacji poziom/czas: strefa sumowania (mała różnica czasu, zysk poziomu), przejścia (duże wahania), izolacji (jedno źródło dominuje). Projekt polega na tym, by strefy przejścia były wąskie, a strefy sumowania wykorzystywały zysk bez utraty jednorodności.',
      'Duże nakładanie daje moc, ale też interferencje w szerokim obszarze. Duża izolacja daje jednorodność, ale wymaga więcej źródeł i precyzji. Line array to przykład kontrolowanego nakładania, a dobrze zaprojektowane front fille — izolacji z krótkimi strefami przejścia.',
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

  kierunkowosc: {
    goals: ['Czytać dane kierunkowości', 'Przewidywać zachowanie źródła w funkcji częstotliwości'],
    steps: [
      'Kąt pokrycia to kąt między punktami, w których poziom spada o 6 dB względem osi. Producenci podają go zwykle dla środka pasma — w LF rzeczywisty kąt jest znacznie szerszy, w skrajnym HF bywa węższy.',
      'Beamwidth w funkcji częstotliwości pokazuje prawdziwe zachowanie źródła. Idealne źródło o stałej kierunkowości ma płaski wykres beamwidth w szerokim zakresie; w praktyce każdy głośnik rozszerza się w LF poniżej częstotliwości, dla której jego wymiar jest porównywalny z λ.',
      'Q to stosunek natężenia na osi do natężenia źródła dookólnego o tej samej mocy. DI = 10·log Q w dB. Źródło dookólne ma Q = 1 (DI = 0 dB), półprzestrzeń Q = 2 (3 dB). Q jest potrzebne m.in. do odległości krytycznej i stosunku D/R.',
      'Tuba lub falowód kształtuje front fali i kontroluje kierunkowość w zakresie, w którym ich wymiary są wystarczające. Tuby CD (stałej kierunkowości) utrzymują zbliżony kąt w szerokim pasmie, kosztem pewnych kompromisów w odpowiedzi osiowej.',
      'Kontrola kierunkowości wymaga źródła porównywalnego z długością fali: przy 100 Hz λ ≈ 3,4 m, więc skrzynka 60 cm nie ma szans być kierunkowa. Dlatego kierunkowość subów uzyskuje się układami wielu źródeł (kardioidy, end-fire), a nie pojedynczą obudową.',
      'Dane balonowe (GLL w AFMG, CLF, dane w software producentów) zawierają amplitudę, a często i fazę, dla wielu kierunków i częstotliwości. Predykcja jest tak dobra jak te dane — do systemów pracujących w układach potrzebne są dane z fazą.',
    ],
  },
  pointsource: {
    goals: ['Dobierać kąty i rozstawy układów punktowych', 'Przewidywać spadek poziomu z odległością'],
    steps: [
      'Źródło punktowe w polu swobodnym traci 6 dB na każde podwojenie odległości, bo energia rozkłada się na powierzchni sfery rosnącej z kwadratem promienia. W salach, bliżej pola pogłosowego, spadek jest mniejszy — pogłos „podtrzymuje” poziom.',
      'Jeśli dwie kolumny o kącie pokrycia 60° rozwarte są o 60°, ich krawędzie −6 dB spotykają się na linii styku, gdzie suma daje ok. 0 dB względem osi każdej z nich. To tzw. unity splay — minimalne nakładanie z płynnym przejściem.',
      'Mniejszy kąt rozwarcia zwiększa nakładanie: więcej poziomu w centrum, ale szeroki obszar interferencji. Większy — dziura w pokryciu na linii styku. Wybór zależy od tego, czy priorytetem jest moc, czy jednorodność.',
      'Aspect ratio opisuje stosunek długości do szerokości obszaru pokrywanego przez jedno źródło. Źródło punktowe nie „wyrówna” poziomu między bliskim a dalekim rzędem, jeśli różnica odległości jest duża — wtedy potrzebne są dodatkowe źródła lub tablica o zmiennej krzywiźnie.',
      'L/R daje stereo tylko w wąskiej strefie, ale lepszą widoczność sceny i obrazu. Centralny klaster zapewnia spójny obraz dla wszystkich i mniej interferencji między stronami. LCR łączy zalety — kosztem złożoności i konieczności przemyślanego miksu.',
    ],
  },
  linearray: {
    goals: ['Rozumieć fizykę tablic liniowych', 'Świadomie dobierać długość i krzywiznę'],
    steps: [
      'Heil i Urban opisali warunki, przy których elementy tablicy sumują się w spójny front: odstęp środków akustycznych mniejszy niż ok. połowa długości fali (dla LF i MF) oraz dla HF — wypełnienie co najmniej ~80% wysokości tablicy płaskim, spójnym frontem (falowody). Poza tymi warunkami pojawiają się listki boczne.',
      'Blisko długiej tablicy energia rozchodzi się jak fala cylindryczna: −3 dB na podwojenie odległości. Daleko tablica zachowuje się jak źródło punktowe: −6 dB. W rzeczywistości granica jest płynna i zależy od częstotliwości.',
      'Granica pola bliskiego jest proporcjonalna do częstotliwości i kwadratu długości tablicy. Dla HF sięga daleko, dla LF — blisko. Konsekwencja: w dalekiej części publiczności HF spada wolniej niż LF, co zmienia bilans tonalny z odległością.',
      'Krzywizna J (małe kąty u góry, większe na dole) koncentruje energię na dalekie rzędy i rozprasza na bliskie, wyrównując poziom front-back. Stały kąt (arc) daje równomierne pokrycie kątowe, ale bez „rzutu”. Software producenta pomaga znaleźć kąty spełniające cel jednorodności.',
      'Kontrola pionowa w LF zależy od całkowitej długości tablicy. Krótka tablica jest w LF prawie dookólna w pionie — energia trafia na scenę i sufit. Wydłużenie tablicy poprawia kontrolę LF bardziej niż zmiana kątów.',
      'Site angle (kąt całej tablicy), wysokość zawieszenia i punkty podwieszenia wpływają na pokrycie tak samo jak kąty między elementami. Wszystko to jest ograniczone rigiem: nośnością, dostępnymi punktami, ramą i przesunięciem środka ciężkości.',
    ],
  },
  suby: {
    goals: ['Projektować i liczyć układy subów', 'Kontrolować energię LF na scenie i poza terenem'],
    steps: [
      'Gdy suby grają ten sam sygnał w rzędzie, sumują się w fazie tylko wtedy, gdy różnice dróg są małe względem λ. Rozstaw środków poniżej λ/2 najwyższej częstotliwości pracy (np. ~1,7 m dla 100 Hz) utrzymuje sumowanie bez głębokich listków bocznych.',
      'Suby L/R rozstawione o kilkanaście metrów tworzą wzór interferencyjny: na osi symetrii pełne sumowanie (power alley), obok — wycięcia i wzmocnienia zależne od częstotliwości. Rozwiązania: mono center, arc elektroniczny, rzędy L/R z odpowiednią strategią opóźnień.',
      'Stack gradientowy/kardioidalny: jeden element skierowany do tyłu (lub przesunięty w głąb) dostaje opóźnienie równe różnicy dróg i odwróconą polaryzację. Z przodu fale się sumują (z niewielką stratą), z tyłu znoszą, dając 15–20 dB tłumienia w dobrze ustawionym układzie.',
      'End-fire: rzędy subów ustawione jeden za drugim w kierunku publiczności. Przedni rząd jest opóźniony o czas przelotu od tylnego. Z przodu wszystkie sumują się w fazie, do tyłu wycinają się częściowo. Optymalny rozstaw to ok. λ/4 częstotliwości projektowej. Wymaga dużo miejsca w głąb.',
      'Arc fizyczny (suby na łuku) lub elektroniczny (prosty rząd z opóźnieniami rosnącymi ku środkowi) poszerza pokrycie i łagodzi power alley. Opóźnienia liczy się z geometrii wirtualnego łuku. Świetna technika dla szerokich rzędów pod sceną.',
      'Suby podwieszone dają lepszą jednorodność front-back i łatwiejsze wyrównanie z tablicą, ale mniej sprzężenia z podłogą. Naziemne mają zysk od gruntu i prostszą logistykę, ale mocno grają na pierwsze rzędy. Coraz częściej stosuje się połączenie obu z przemyślanym wyrównaniem.',
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

  strategia: {
    goals: ['Pracować według powtarzalnej procedury', 'Wiedzieć, gdzie stawiać mikrofony i po co'],
    steps: [
      'Weryfikacja to sprawdzenie, czy system jest poprawnie zbudowany: każdy element gra, ma właściwą polaryzację, routing, preset, poziom i nie ma uszkodzeń. Znaleziony tu błąd kosztuje minuty; ukryty pod EQ — cały koncert.',
      'Strojenie zaczyna się od najmniejszej jednostki: pojedynczy element lub tablica, potem subsystem (np. main L), potem łączenie z innymi (L+R, main+sub, main+fill). Każde połączenie zmienia wynik, więc najpierw poprawiamy części, dopiero potem całość.',
      'ONAX — na osi subsystemu, tu oceniamy jego odpowiedź i EQ. OFFAX — na krawędzi pokrycia, tu sprawdzamy jednorodność. XOVER — w strefie przejścia dwóch subsystemów, tu wyrównujemy czas. Te trzy typy pozycji to szkielet planu pomiarów.',
      'Typowa sekwencja: main (każda strona), wyrównanie L/R, sub i jego relacja z main, front fill i out fill, delay. Kolejność może się zmieniać, ale zasada jest ta sama: od systemu dominującego do uzupełniających.',
      'Strojenie jest skończone, gdy spełnione są cele: jednorodność, zgodność tonalna, poprawne przejścia. Dokumentuj wyniki (zrzuty ekranu, snapshoty, notatki), żeby móc wrócić do stanu i żeby kolejny event w tej sali był szybszy.',
      'Czas na strojenie jest często krótszy niż planowany. Przygotuj wersję „minimum” procedury (weryfikacja + kluczowe wyrównania) i „pełną”. Priorytetyzuj rzeczy, które słychać w największej części publiczności.',
    ],
  },
  mainsub: {
    goals: ['Wyrównać sub i tablicę poprawnie', 'Rozumieć kompromis geometryczny'],
    steps: [
      'Częstotliwość zwrotnicy między subami a tablicą zależy od możliwości obu i od geometrii. Nachylenia filtrów wpływają na szerokość strefy, w której oba systemy grają razem. Presety producenta zwykle mają zdefiniowane warianty.',
      'W pasmie przejścia oba systemy mają podobny poziom — tam liczy się zgodność fazy. Pik IR jest zdominowany przez HF tablicy, więc wyrównanie „pik do piku” zazwyczaj nie zapewnia zgodności fazy w LF. Porównuj wykresy fazy w pasmie przejścia.',
      'Odwrócenie polaryzacji to 180° na wszystkich częstotliwościach, opóźnienie to faza rosnąca z częstotliwością. Czasem połączenie obu daje lepsze dopasowanie nachylenia fazy w pasmie przejścia. Sprawdź, czy wynik trzyma się w kilku pozycjach.',
      'Gdy suby stoją na ziemi, a tablica wisi wysoko, różnica dróg zmienia się z odległością od sceny i wysokością słuchacza. Wyrównanie jest idealne na jednej linii, obok różnica rośnie. Wybierz punkt reprezentatywny dla największej części publiczności.',
      'All-pass zmienia fazę bez zmiany amplitudy — pozwala dopasować nachylenie fazy subów do tablicy, poszerzając obszar dobrej sumy. Stosuj świadomie i weryfikuj pomiarem.',
      'Po wyrównaniu zmierz sumę w kilku pozycjach: blisko, daleko, na bokach. Jeśli suma w pasmie przejścia jest wyraźnie gorsza niż składowe gdzieś w dużej części publiczności, rozważ inny punkt odniesienia lub częstotliwość zwrotnicy.',
    ],
  },
  filldelay: {
    goals: ['Łączyć subsystemy z głównym systemem', 'Kontrolować obraz i barwę w strefach przejścia'],
    steps: [
      'Mikrofon w ONAX fillu (na jego osi, w jego strefie). Fill gra solo — ustawiasz poziom i EQ tak, by jego odpowiedź była zgodna z celem tonalnym systemu w tej strefie.',
      'Mikrofon w XOVER (gdzie poziom fillu i main są podobne). Mierzysz oba osobno i ustawiasz opóźnienie fillu tak, by fazy zgadzały się w istotnym pasmie. Potem sprawdzasz sumę.',
      'W praktyce często dodaje się do delay kilka ms więcej niż wynika z wyrównania, żeby w całej strefie dźwięk z main docierał pierwszy. Kompromis: trochę słabsza suma w XOVER za lepszą lokalizację i brak „przeskakiwania” obrazu.',
      'Main z daleka ma mniej HF przez absorpcję powietrza, delay z bliska — pełne HF. W strefie przejścia może to dawać zmianę barwy. Czasem delay wymaga łagodnego obniżenia HF, żeby przejście było niesłyszalne.',
      'Każdy subsystem powinien pokrywać tylko swój obszar. Duże nakładanie fillów z main poszerza strefę interferencji. Kąty, pozycje i poziomy fillów ustala się tak, żeby przejścia były krótkie i łagodne.',
    ],
  },
  eq: {
    goals: ['Stosować EQ systemowe z sensem', 'Definiować krzywą docelową'],
    steps: [
      'EQ działa tak samo w każdym miejscu, więc koryguje tylko to, co jest wspólne dla całej strefy (np. trend tonalny, rezonans obudowy, efekt sprzężenia z podłogą). Zjawiska zależne od pozycji — interferencje, odbicia — naprawia się czasem, geometrią lub kierunkowością.',
      'Średnia z kilku pozycji mikrofonu w strefie (np. 4–8 punktów) wygasza lokalne wycięcia i podkreśla wspólne trendy. Dopiero taka średnia jest dobrą podstawą do decyzji EQ.',
      'Duże systemy koncertowe stroi się zwykle do krzywej z podniesionym LF i łagodnie opadającym HF. Konkretny kształt zależy od gatunku, sali, odległości i preferencji realizatora — dlatego warto mieć swoją, zapisaną i sprawdzoną krzywą odniesienia.',
      'Procesory systemów liniowych pozwalają korygować strefy tablicy (np. dół/góra) niezależnie. To narzędzie do wyrównania bilansu tonalnego front-back, zanim sięgniesz po EQ całości.',
      'Po strojeniu pomiarem posłuchaj znanej muzyki w kilku miejscach. Pomiar mówi, co jest; ucho mówi, czy to działa. Rozbieżności często wynikają z tego, że mikrofon nie słyszy jak człowiek (kierunkowość, czas integracji, odbicia).',
      'Publiczność absorbuje HF i zmienia odbicia od podłogi, a zmiana temperatury i wilgotności wpływa na HF daleko. W trakcie show obserwuj pomiar (np. na muzyce) i koryguj trendy, a nie chwilowe fluktuacje.',
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
  proporcje: {
    goals: ['Ocenić proporcje pomieszczenia liczbowo', 'Wiedzieć, czego nie da się już naprawić'],
    steps: [
      'W małym pomieszczeniu o brzmieniu decyduje rozkład drgań własnych, a ten wynika wprost z wymiarów. Dlatego pierwsza decyzja projektowa — kubatura i proporcje — waży więcej niż wszystkie późniejsze ustroje.',
      'Bardzo małe pomieszczenia są kłopotliwe z natury: mają niewiele modów, rozstawionych w dużych odstępach. Przyjmuje się, że poniżej mniej więcej czterdziestu kilku metrów sześciennych trudno uniknąć słyszalnych zakolorowań.',
      'Zestawy zalecanych proporcji, takie jak 1,00 : 1,28 : 1,54, powstały po to, by mody rozkładały się możliwie równomiernie. To dobry punkt wyjścia, ale nigdy nie zastępuje obliczenia dla konkretnych wymiarów.',
      'Weryfikacja jest prosta: policz mody osiowe dla wszystkich trzech wymiarów, ustaw je w kolejności rosnącej i przyjrzyj się odstępom. Szukasz dwóch rzeczy — częstotliwości, w których mody się pokrywają, oraz modów odizolowanych od sąsiadów o ponad ok. 25 Hz.',
      'Najgorsze wybory to sześcian i wymiary będące swoimi wielokrotnościami. Każdy mod osiowy pokrywa się wtedy z modami z pozostałych osi, dając kilka razy silniejsze wzmocnienie w wąskich pasmach.',
      'W istniejącym pomieszczeniu wymiarów nie zmienisz. Zostają: ustawienie źródeł i słuchacza, ustroje niskotonowe dostrojone do konkretnych modów oraz świadoma akceptacja ograniczeń — czasem najuczciwszą decyzją jest zmiana pomieszczenia.',
    ],
  },
  rezyserka: {
    goals: ['Zaprojektować strefę bez wczesnych odbić', 'Znaleźć rzeczywiste źródła odbić przy stanowisku'],
    steps: [
      'Badania sal koncertowych pokazały, że sale oceniane najwyżej mają wyraźny, powtarzalny odstęp między dźwiękiem bezpośrednim a pierwszym istotnym odbiciem — rzędu 20 milisekund. Ten parametr, nazywany ITDG, przeniesiono na projektowanie reżyserek.',
      'Idea strefy pozbawionej odbić jest prosta: na drodze od monitorów do uszu realizatora nie powinno być silnych wczesnych odbić. Dopiero po tym „oknie czasowym” pomieszczenie może wrócić z energią, najlepiej rozproszoną.',
      'Strefę uzyskuje się dwoma sposobami. Pierwszy to pochłanianie powierzchni odpowiedzialnych za wczesne odbicia. Drugi, elegantszy, to odchylenie tych powierzchni tak, żeby energia trafiała poza pozycję odsłuchową — bez wytłumiania pomieszczenia.',
      'Za strefą bez odbić stosuje się rozpraszanie. Dzięki temu reżyserka nie robi się martwa, a realizator dostaje naturalne wrażenie przestrzeni, którego nie da się uzyskać samym pochłanianiem.',
      'Symetria lewa–prawa jest warunkiem stabilnego obrazu stereofonicznego. Różnica w adaptacji obu stron przesuwa pozorne źródła i utrudnia ocenę panoramy — a tego nie naprawisz korekcją.',
      'W praktyce najsilniejsze wczesne odbicie często nie pochodzi ze ściany, tylko z blatu konsolety, ekranów monitorów i sprzętu na biurku. Pomiar ETC szybko to pokazuje: pik kilka–kilkanaście ms po dźwięku bezpośrednim, którego nie da się wytłumaczyć geometrią ścian.',
    ],
  },
  ustawienie: {
    goals: ['Wykorzystać ustawienie zamiast korekcji', 'Zrozumieć wpływ powierzchni i modów'],
    steps: [
      'Głośnik umieszczony blisko dużej, twardej powierzchni promieniuje w mniejszy kąt bryłowy. Przy jednej powierzchni daje to ok. +3 dB w niskich częstotliwościach, przy dwóch (krawędź) ok. +6 dB, a w narożniku trzech powierzchni ok. +9 dB.',
      'Ten zysk jest równomierny tylko wtedy, gdy głośnik jest naprawdę blisko powierzchni. Gdy odległość staje się porównywalna z długością fali, dźwięk bezpośredni i odbity interferują — zamiast wzmocnienia pojawiają się wycięcia w charakterystyce, zależne od tej odległości.',
      'Drugim czynnikiem jest sprzężenie z modami. Rozkład ciśnienia w modzie ma węzły i strzałki: pierwszy mod osiowy ma węzeł dokładnie w połowie długości pomieszczenia, a drugi w tym samym miejscu maksimum. Zarówno źródło, jak i słuchacz „widzą” inny bas w zależności od pozycji.',
      'Stąd praktyczna konsekwencja: pozycja odsłuchowa dokładnie w połowie długości pomieszczenia to najprostszy sposób na utratę części basu. Przesunięcie krzesła o kilkadziesiąt centymetrów potrafi zmienić charakterystykę bardziej niż kilka filtrów korekcyjnych.',
      'Programy optymalizujące ustawienie przeszukują pozycje źródeł i słuchacza, minimalizując nierównomierność w zakresie mniej więcej 20–300 Hz. Wyżej o wyniku decydują odbicia i kierunkowość, a nie mody, więc ten zakres wystarcza.',
      'Wynik numeryczny trzeba jednak skonfrontować z praktyką: algorytm chętnie wciska głośniki w powierzchnie, co bywa niewykonalne albo psuje obraz stereofoniczny. Najlepsze ustawienie to kompromis między basem, obrazem i ergonomią — zweryfikowany pomiarem i odsłuchem.',
    ],
  },
  zmienna: {
    goals: ['Dostosować pomieszczenie do materiału', 'Zachować powtarzalność konfiguracji'],
    steps: [
      'Jedno pomieszczenie rzadko obsługuje tylko jedno zadanie. Perkusja potrzebuje żywej przestrzeni, lektor martwej, a wokal czegoś pośredniego. Stąd idea akustyki zmiennej: kontrolowana zmiana warunków bez przebudowy.',
      'Najprostszym rozwiązaniem jest podział na strefy o różnym charakterze — część pomieszczenia wykończona odbijająco i rozpraszająco, część mocno wytłumiona. Mikrofon stawia się tam, gdzie warunki pasują do instrumentu.',
      'Elementy obrotowe i panele na zawiasach mają dwie różne strony: pochłaniającą i odbijającą lub rozpraszającą. Obrót kilku takich elementów zmienia bilans chłonności w pomieszczeniu w kilka minut.',
      'Przenośne moduły — pułapki narożne, parawany, ekrany — pozwalają zmieniać warunki punktowo, wokół konkretnego stanowiska. To najtańsza forma akustyki zmiennej i zwykle pierwszy krok w małym studiu.',
      'Zasłony i kotary działają jako regulowane pochłanianie, ale głównie w średnich i wysokich częstotliwościach. Bez dużej masy i odstępu od ściany nie kontrolują basu, więc nie zastąpią ustrojów niskotonowych.',
      'Kluczowa jest powtarzalność: zapisuj konfiguracje, które sprawdziły się przy konkretnych nagraniach — zdjęcie, opis ustawień paneli, pomiar RT. Bez dokumentacji akustyka zmienna staje się loterią.',
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
