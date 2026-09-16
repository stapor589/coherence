// Treść lekcji: wyjaśnienia do zagadnień z curriculum.js (ta sama kolejność).
// Opcjonalne pole `goals` — cele lekcji wyświetlane na ekranie startowym.

export const LESSONS = {
  fale: {
    goals: ['Wiedzieć, czym fizycznie jest dźwięk', 'Rozumieć, dlaczego temperatura zmienia wszystko'],
    steps: [
      {
        t: 'Wyobraź sobie długi sznur korali leżący na stole. Popychasz pierwszy koralik — uderza w drugi, ten w trzeci i tak dalej. Zaburzenie przebiega przez cały sznur, ale żaden koralik nie przewędrował na drugi koniec stołu; każdy tylko szturchnął sąsiada i wrócił na miejsce. Dokładnie tak działa dźwięk. Membrana głośnika popycha cząsteczki powietrza tuż przed sobą, te napierają na kolejne i zaburzenie ciśnienia biegnie dalej. Powietrze nie „leci” od sceny do publiczności — gdyby leciało, na koncercie wiałby huragan. Wędruje wyłącznie informacja: naprzemienne zagęszczenia i rozrzedzenia.',
        viz: 'fala-w-powietrzu',
      },
      {
        t: 'Skoro dźwięk polega na szturchaniu sąsiadów, to musi mieć kogo szturchać. W próżni nie ma cząsteczek, więc nie ma dźwięku — filmowe eksplozje w kosmosie są efektowne, ale fizycznie niemożliwe. Ta sama zasada tłumaczy, dlaczego dźwięk rozchodzi się szybciej w wodzie i jeszcze szybciej w stali: im ciaśniej upakowane i mocniej ze sobą związane cząsteczki, tym sprawniej przekazują sobie zaburzenie. W powietrzu to około 343 metry na sekundę, w wodzie około 1500, w stali ponad 5000.',
      },
      {
        t: 'Warto uzmysłowić sobie skalę zjawiska. Ciśnienie atmosferyczne to około 101 000 paskali. Najgłośniejszy koncert, przy którym stoisz na barierce, to około 63 paskale ciśnienia akustycznego — czyli mniej niż tysięczna część ciśnienia, które i tak na Ciebie napiera. A próg słyszenia to zaledwie 0,00002 paskala. Dźwięk jest więc drobniutkim marszczeniem na powierzchni ogromnego, stałego ciśnienia, a nasze ucho potrafi wykryć zmiany rzędu miliardowych części otaczającego nas ciśnienia.',
      },
      {
        t: 'Prędkość dźwięku w powietrzu zależy przede wszystkim od temperatury — nie od głośności, nie od ciśnienia atmosferycznego i nie od tego, jak mocno pracuje wzmacniacz. Cieplejsze powietrze to szybciej poruszające się cząsteczki, więc szturchnięcie przekazuje się sprawniej. Praktyczna reguła brzmi: przy 20°C to 343 m/s, a każdy stopień w górę dokłada około 0,6 m/s. Wilgotność ma znaczenie pomijalne dla prędkości, ale — jak zobaczysz w module o plenerze — bardzo duże dla tłumienia wysokich częstotliwości.',
        eq: '<math display="block"><mi>c</mi><mo>≈</mo><mn>331,3</mn><mo>+</mo><mn>0,606</mn><mo>&#8202;</mo><mi>T</mi></math>',
        where: 'c — prędkość dźwięku [m/s]; T — temperatura powietrza [°C]',
      },
      {
        t: 'Fala na wodzie porusza cząsteczki w górę i w dół, a sama biegnie w bok — to fala poprzeczna. Dźwięk w powietrzu zachowuje się inaczej: cząsteczki drgają wzdłuż tego samego kierunku, w którym biegnie fala, czyli do przodu i do tyłu. To fala podłużna. Konsekwencja jest praktyczna: w powietrzu nie istnieje coś takiego jak „polaryzacja” dźwięku, więc nie da się go filtrować czy odbijać tak, jak robi się to ze światłem przez okulary przeciwsłoneczne.',
      },
      {
        t: 'Gdy źródło promieniuje we wszystkie strony, energia rozkłada się na powierzchnię kuli, która rośnie z kwadratem odległości. To jak malowanie coraz większego balonu tą samą ilością farby — warstwa staje się coraz cieńsza, choć farby nie ubywa. Stąd bierze się spadek poziomu o 6 decybeli przy każdym podwojeniu odległości. Nic się nie „gubi po drodze”; energia po prostu rozkłada się szerzej. Dopiero na bardzo dużych dystansach dochodzi dodatkowo tłumienie w powietrzu, dotyczące głównie wysokich częstotliwości.',
      },
      {
        t: 'Co z tego wynika dla Twojej pracy? Po pierwsze: skoro wędruje wzór ciśnienia, a nie materia, to dwie fale mogą przejść przez siebie i się dodać albo odjąć — na tym opiera się cała inżynieria systemów. Po drugie: skoro prędkość zależy od temperatury, to Twoje wyrównania czasowe zmieniają się wraz z pogodą. Po trzecie: skoro energia rozkłada się geometrycznie, to różnicę poziomów między pierwszym a ostatnim rzędem pokonuje się rozkładem energii, a nie mocą. Każdy z tych trzech wniosków rozwiniemy w kolejnych lekcjach.',
      },
    ],
  },

  czestotliwosc: {
    goals: ['Przeliczać częstotliwość, okres i długość fali w pamięci', 'Widzieć system w kategoriach geometrii'],
    steps: [
      {
        t: 'Częstotliwość mówi, ile pełnych cykli drgania mieści się w jednej sekundzie. Jednostką jest herc, czyli po prostu „razy na sekundę”. Struna basu drgająca czterdzieści razy na sekundę daje 40 Hz, a talerz perkusyjny wysyła składowe drgające dziesięć tysięcy razy na sekundę. Zakres, który słyszy zdrowe, młode ucho, to mniej więcej od 20 do 20 000 razy na sekundę — i właśnie w tym przedziale pracujesz.',
      },
      {
        t: 'Okres to ta sama informacja odwrócona: ile czasu trwa jeden cykl. Jeśli coś powtarza się sto razy na sekundę, jeden cykl trwa setną część sekundy, czyli 10 milisekund. Warto mieć w głowie kilka takich par, bo wracają nieustannie: 1000 Hz to 1 ms, 500 Hz to 2 ms, 250 Hz to 4 ms, 100 Hz to 10 ms, 50 Hz to 20 ms. Kiedy ktoś mówi „przesunąłem sub o 5 milisekund”, od razu wiesz, że dla 100 Hz to pół cyklu, czyli całkowita zmiana relacji, a dla 1 kHz aż pięć pełnych cykli.',
        eq: '<math display="block"><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mi>f</mi></mfrac><mspace width="1.6em"/><mi>f</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac></math>',
        where: 'T — okres, czyli czas jednego cyklu [s]; f — częstotliwość [Hz]',
      },
      {
        t: 'Skoro fala biegnie ze stałą prędkością i jednocześnie faluje, to jeden pełny cykl zajmuje określony odcinek przestrzeni. Ten odcinek nazywamy długością fali. Analogia: jedziesz samochodem ze stałą prędkością i co sekundę mrugasz światłami — ślady zostaną co kilkadziesiąt metrów. Mrugaj dziesięć razy szybciej, a ślady będą dziesięć razy gęściej. Tak samo z dźwiękiem: im wyższa częstotliwość, tym krótsza fala.',
        eq: '<math display="block"><mi>&#955;</mi><mo>=</mo><mfrac><mi>c</mi><mi>f</mi></mfrac></math>',
        where: 'λ — długość fali [m]; c — prędkość dźwięku [m/s]; f — częstotliwość [Hz]',
        viz: 'dlugosc-fali',
      },
      {
        t: 'Rozpiętość jest ogromna i to ona odpowiada za większość Twoich problemów. Fala 20 Hz ma ponad siedemnaście metrów — jest dłuższa niż niejedna scena. Fala 20 kHz ma siedemnaście milimetrów — mieści się na paznokciu. Trzy rzędy wielkości różnicy w jednym systemie oznaczają, że każdy element zachowuje się inaczej w dole i w górze pasma. To dlatego nie istnieje jedno ustawienie, które „załatwia wszystko”.',
      },
      {
        t: 'Najważniejsza konsekwencja praktyczna: żeby cokolwiek skierować albo zasłonić falę, przeszkoda musi być duża w porównaniu z jej długością. Dłoń zatrzyma strumień wody z kranu, ale nie zatrzyma fali na jeziorze. Tuba o wylocie pół metra jest ogromna dla fali siedmiocentymetrowej i świetnie ją prowadzi — dla fali trzymetrowej jest praktycznie niewidzialna. Stąd bierze się cała asymetria Twojej pracy: górę pasma celujesz jak światłem latarki, a bas wymaga układów wielu źródeł.',
      },
      {
        t: 'Zbuduj sobie zestaw skrótów, które będziesz pamiętać bez liczenia. Dla 30 Hz to około 11 metrów, dla 60 Hz około 5,7 metra, dla 125 Hz około 2,7 metra, dla 250 Hz około 1,4 metra, dla 500 Hz około 70 centymetrów, a dla 1 kHz około 34 centymetrów. Warto też pamiętać połówki i ćwiartki tych wartości, bo to właśnie one decydują o rozstawie subwooferów i o tym, gdzie powstaną wycięcia.',
      },
      {
        t: 'Na koniec rzecz, o której łatwo zapomnieć: skoro długość fali zależy od prędkości dźwięku, a prędkość od temperatury, to długość fali też zmienia się z pogodą. Przy spadku temperatury o 15 stopni fala skraca się o mniej więcej dwa i pół procent. Dla pojedynczej skrzyni to nieistotne, ale dla układu subwooferów rozstawionych na kilkanaście metrów albo dla wieży delay oddalonej o sto metrów — jak najbardziej.',
      },
    ],
  },

  faza: {
    goals: ['Rozumieć fazę jako czas w stopniach', 'Czytać wykres fazy w analizatorze'],
    steps: [
      {
        t: 'Faza to odpowiedź na pytanie „w którym miejscu cyklu właśnie jesteśmy”. Wyobraź sobie wskazówkę na tarczy zegara: pełny obrót to 360 stopni, połowa obrotu to 180 stopni, ćwierć to 90. Dźwięk sinusoidalny robi dokładnie to samo — krąży w kółko, a faza mówi, gdzie w tym kółku się znajduje. Sama w sobie faza jednego sygnału nic nie znaczy; sens pojawia się dopiero wtedy, gdy porównujesz dwa sygnały.',
      },
      {
        t: 'I tu dochodzimy do sedna, które odróżnia rozumienie od wkuwania. Opóźnienie mierzymy w milisekundach, ale skutek tego opóźnienia zależy od częstotliwości. Wyobraź sobie dwie karuzele, dużą i małą, kręcące się z różną prędkością. Zatrzymujesz obie na dwie sekundy: mała zdąży wykonać kilka obrotów, duża ledwie drgnie. Tak samo działa dźwięk — to samo opóźnienie oznacza zupełnie inną fazę dla basu i dla góry pasma.',
        viz: 'faza-opoznienie',
      },
      {
        t: 'Policzmy to konkretnie. Opóźnienie jednej milisekundy przy 1000 Hz to pełny obrót, czyli 360 stopni. Przy 500 Hz to pół obrotu — 180 stopni, czyli dokładna przeciwfaza. Przy 250 Hz to ćwierć obrotu, a przy 50 Hz zaledwie osiemnaście stopni, czyli praktycznie nic. Jeden wzór opisuje to wszystko i warto go po prostu zapamiętać.',
        eq: '<math display="block"><mi>&#966;</mi><mo>=</mo><mn>360</mn><mo>&#8202;</mo><mi>f</mi><mo>&#8202;</mo><mi>&#916;</mi><mi>t</mi></math>',
        where: 'φ — przesunięcie fazy [°]; f — częstotliwość [Hz]; Δt — opóźnienie [s]',
      },
      {
        t: 'W praktyce częściej niż milisekundy masz przed sobą metry: jeden głośnik stoi bliżej, drugi dalej. Zamiana jest prosta — dzielisz różnicę drogi przez prędkość dźwięku i dostajesz opóźnienie. Jeszcze wygodniej myśleć od razu w długościach fali: różnica drogi równa połowie długości fali to zawsze przeciwfaza, a równa jednej długości fali to znów zgodność. Dlatego przy 100 Hz różnica 1,7 metra daje pełne wygaszenie, a przy 1 kHz wystarczy 17 centymetrów.',
      },
      {
        t: 'Bardzo ważne rozróżnienie, które bywa mylone nawet przez doświadczonych: odwrócenie polaryzacji to nie to samo co przesunięcie fazy. Odwrócenie polaryzacji zamienia górę na dół w całym paśmie jednocześnie — to zwykła zamiana znaku sygnału. Przesunięcie fazy wynika z opóźnienia i działa inaczej na każdą częstotliwość. Przycisk z symbolem Ø w konsolecie odwraca polaryzację, choć nazywany bywa „fazą” — stąd pół wieku nieporozumień.',
      },
      {
        t: 'Na wykresie fazy w analizatorze stałe opóźnienie objawia się jako nachylenie. Im wyższa częstotliwość, tym więcej stopni przypada na to samo opóźnienie, więc linia opada coraz szybciej. Kiedy widzisz taki równomiernie opadający wykres, wiesz, że między porównywanymi sygnałami jest po prostu różnica czasu — i że możesz ją skasować opóźnieniem. Płaska linia fazy oznacza, że oba sygnały są zgodne w całym pokazanym zakresie.',
      },
      {
        t: 'Wykres fazy mieści się w zakresie od minus do plus 180 stopni, więc przy większych przesunięciach „zawija się” — linia dobiega do góry wykresu i wyskakuje z dołu. To nie jest błąd pomiaru ani nagła zmiana zachowania systemu, tylko sposób rysowania. Im gęstsze zawijanie, tym większe opóźnienie. Z czasem nauczysz się czytać to tak naturalnie, jak czyta się godziny na zegarze.',
      },
      {
        t: 'Na koniec liczba, którą warto zapamiętać: dopóki różnica faz między dwoma źródłami mieści się mniej więcej w jednej trzeciej cyklu, ich suma jest korzystna — dostajesz wzmocnienie. Powyżej tej granicy zaczyna się odejmowanie, a przy połowie cyklu pełne wygaszenie. Ta jedna reguła stoi za projektowaniem kątów między skrzyniami, rozstawem subwooferów i wyrównywaniem systemów w strefach przejścia.',
      },
    ],
  },

  widmo: {
    goals: ['Rozumieć, dlaczego każdy dźwięk to suma sinusów', 'Czytać widmo i wybierać sygnał pomiarowy'],
    steps: [
      {
        t: 'Sinus to najprostszy możliwy dźwięk — jedna, czysta częstotliwość, bez żadnych dodatków. Brzmi jak sygnał testowy w telewizji albo jak gwizdek. W naturze prawie nie występuje: nawet flet, uważany za najbardziej „czysty” instrument, wysyła coś więcej. Sinus jest jednak klockiem, z którego da się zbudować dowolny inny dźwięk — i na tym opiera się cała analiza, którą będziesz robić w pomiarach.',
      },
      {
        t: 'Dlaczego gitara i fortepian grające to samo „a” brzmią zupełnie inaczej? Bo oprócz tonu podstawowego wysyłają całą rodzinę składowych o częstotliwościach będących jego wielokrotnościami: dwa razy, trzy razy, cztery razy wyższych. Nazywamy je harmonicznymi. To ich wzajemne proporcje tworzą barwę instrumentu. Ton podstawowy mówi, jaki to dźwięk; harmoniczne mówią, co go wydaje.',
        viz: 'harmoniczne',
      },
      {
        t: 'Skoro dźwięki złożone są sumą sinusów, to musi istnieć sposób, żeby tę sumę rozłożyć z powrotem na składniki. Właśnie to robi analizator widma: bierze fragment sygnału i pokazuje, ile energii przypada na każdą częstotliwość. To jak pryzmat rozszczepiający światło na kolory — nic nie dodaje ani nie ujmuje, tylko pokazuje skład. Wszystkie Twoje narzędzia pomiarowe opierają się na tej jednej operacji.',
      },
      {
        t: 'Do pomiarów potrzebujesz sygnału, który ma energię w całym pasmie. Szum biały ma jednakową energię na każdy herc, przez co brzmi bardzo jasno — w oktawie od 10 do 20 kHz mieści się dziesięć tysięcy herców, a w oktawie od 100 do 200 Hz tylko sto. Szum różowy koryguje tę nierównowagę: ma jednakową energię w każdej oktawie i dlatego brzmi bardziej jak szum wodospadu, a na analizatorze oktawowym rysuje płaską linię. W praktyce pomiarowej pracujesz najczęściej właśnie na różowym.',
      },
      {
        t: 'Skala oktawowa jest naturalna dla ucha, ale nieintuicyjna dla oka. Oktawa to podwojenie częstotliwości: od 100 do 200 Hz, od 200 do 400, od 400 do 800. Dla ucha każdy taki krok brzmi jak ta sama odległość muzyczna, choć w hercach jest coraz większy. Całe pasmo słyszalne to około dziesięciu takich podwojeń. Analizatory dzielą je dodatkowo na tercje, czyli trzy pasma na oktawę, bo to mniej więcej odpowiada rozdzielczości naszego słuchu.',
        viz: 'oktawy-pasma',
      },
      {
        t: 'Istnieje ciekawa zależność między czasem trwania dźwięku a jego widmem: im krótsze zdarzenie, tym szersze widmo. Trzask, klaśnięcie czy stuknięcie w mikrofon trwają ułamek milisekundy i zawierają energię w całym pasmie naraz. To dlatego przypadkowe przełączenie w torze potrafi wystrzelić pełnym pasmem w drivery wysokotonowe, a także dlatego krótki impuls nadaje się do badania odpowiedzi pomieszczenia.',
      },
      {
        t: 'Na koniec praktyczna uwaga o muzyce. Jej widmo zmienia się nieustannie, więc pomiar na materiale muzycznym wymaga dłuższego uśredniania, a w pasmach, w których akurat nic nie gra, nie da żadnej sensownej informacji. Dlatego do strojenia używa się sygnałów o znanym, stabilnym widmie, a muzykę traktuje jako kontrolę końcową — sprawdzenie, czy to, co wyszło z pomiarów, faktycznie brzmi dobrze.',
      },
    ],
  },

  db: {
    goals: ['Swobodnie posługiwać się skalą decybelową', 'Nie mylić punktów odniesienia'],
    steps: [
      {
        t: 'Decybel nie jest jednostką głośności w takim sensie, w jakim metr jest jednostką długości. Decybel to porównanie dwóch wielkości — zawsze czegoś do czegoś. To jak powiedzenie „dwa razy więcej”: bez informacji, więcej od czego, zdanie nie ma sensu. Dlatego sam zapis „30 dB” znaczy tyle co „trzydzieści decybeli różnicy”, a dopiero dopisek w rodzaju dB SPL, dBu czy dBFS mówi, względem czego mierzymy.',
      },
      {
        t: 'Dlaczego w ogóle skala logarytmiczna? Bo zakres, z jakim pracujemy, jest absurdalnie szeroki. Od progu słyszenia do progu bólu ciśnienie akustyczne zmienia się milion razy. Zapisywanie tego w paskalach oznaczałoby liczby od 0,00002 do 60 — nieporęczne i nieczytelne. Logarytm zamienia mnożenie na dodawanie: zamiast mówić „tysiąc razy więcej”, mówisz „o 60 decybeli więcej”. Cała skala mieści się wtedy w wygodnym zakresie od zera do stu kilkudziesięciu.',
        viz: 'skala-db',
      },
      {
        t: 'Są dwa wzory i ich mylenie to klasyczny błąd. Dla wielkości takich jak ciśnienie akustyczne czy napięcie stosujemy mnożnik dwadzieścia, a dla mocy mnożnik dziesięć. Nie ma w tym magii: moc jest proporcjonalna do kwadratu ciśnienia, a kwadrat pod logarytmem zamienia się w mnożnik dwa. Oba wzory opisują więc to samo zjawisko, tylko wyrażone w innych wielkościach fizycznych.',
        eq: '<math display="block"><mi>L</mi><mo>=</mo><mn>20</mn><mo>&#8202;</mo><mi>log</mi><mfrac><msub><mi>p</mi><mn>1</mn></msub><msub><mi>p</mi><mn>0</mn></msub></mfrac><mspace width="1.8em"/><mi>L</mi><mo>=</mo><mn>10</mn><mo>&#8202;</mo><mi>log</mi><mfrac><msub><mi>P</mi><mn>1</mn></msub><msub><mi>P</mi><mn>0</mn></msub></mfrac></math>',
        where: 'p — ciśnienie lub napięcie; P — moc; indeks 0 oznacza wartość odniesienia',
      },
      {
        t: 'Trzy liczby warto mieć w odruchu. Podwojenie ciśnienia albo napięcia to plus sześć decybeli. Podwojenie mocy to plus trzy. A subiektywne wrażenie „dwa razy głośniej” to mniej więcej plus dziesięć, czyli dziesięciokrotny wzrost mocy. Stąd bierze się rozczarowanie inwestorów: dołożenie drugiego takiego samego wzmacniacza daje trzy decybele, czyli ledwie zauważalną zmianę. Żeby publiczność usłyszała podwojenie głośności, trzeba dziesięć razy więcej mocy — albo, znacznie taniej, lepszej kierunkowości.',
      },
      {
        t: 'Teraz punkty odniesienia, bo tu rodzi się najwięcej pomyłek między działami. Skala dB SPL opisuje ciśnienie w powietrzu i odnosi się do progu słyszenia. Skale dBu i dBV opisują napięcie w kablu. Skala dBFS opisuje sygnał cyfrowy, gdzie zero jest na samej górze, a wszystko poniżej ma wartość ujemną. Te trzy światy łączą się w konkretnych urządzeniach, ale nie wolno ich mieszać w jednym zdaniu — „mamy sto decybeli na wyjściu konsolety” nie znaczy nic.',
      },
      {
        t: 'Decybeli nie wolno dodawać jak zwykłych liczb. Dwa źródła po 90 decybeli nie dają 180, tylko około 93 — sumują się energie, a nie odczyty. Gdy jedno źródło jest o dziesięć decybeli głośniejsze od drugiego, cichsze dokłada mniej niż pół decybela, czyli praktycznie nic. Ta prosta zasada oszczędza mnóstwo błędnych szacunków przy planowaniu mocy systemu.',
      },
      {
        t: 'Warto mieć w głowie mapę typowych poziomów. Cichy pokój to około 30 decybeli, normalna rozmowa 60, ruchliwa ulica 80. Stanowisko realizatora na koncercie rockowym to zwykle 100–105, a przy barierce bywa o kilka więcej. Próg bólu leży w okolicy 130. Warto pamiętać, że każde dziesięć decybeli w górę to dziesięciokrotny wzrost mocy i dwukrotny wzrost wrażenia głośności — a także dziesięciokrotnie krótszy bezpieczny czas ekspozycji.',
      },
      {
        t: 'Na koniec trzy zdania, które najczęściej wprowadzają zamęt w rozmowie z produkcją. „Podgłośnij o dziesięć procent” — decybele nie są procentami i nie da się tego sensownie przeliczyć. „Damy dwa razy więcej mocy, będzie dwa razy głośniej” — nie będzie, będzie o trzy decybele. „Mamy limit 100 decybeli” — bez podania wagi, czasu uśredniania i miejsca pomiaru to zdanie nie określa niczego. Warto umieć spokojnie wytłumaczyć każdą z tych trzech rzeczy.',
      },
    ],
  },

  'pomiar-poziomu': {
    goals: ['Wiedzieć, którą liczbę podajesz i dlaczego', 'Zrobić raport, który się obroni'],
    steps: [
      {
        t: 'Miernik poziomu dźwięku nie mierzy „głośności” — mierzy ciśnienie, a potem przelicza je zgodnie z wybranymi ustawieniami. Te ustawienia zmieniają wynik bardziej, niż większość ludzi przypuszcza. Ta sama sytuacja opisana dwoma sposobami potrafi dać wyniki różniące się o kilkanaście decybeli, przy czym obie liczby są poprawne. Dlatego zawsze podajesz nie samą wartość, ale też sposób jej uzyskania.',
      },
      {
        t: 'Pierwszym ustawieniem jest waga częstotliwościowa. Waga A silnie tłumi niskie częstotliwości, naśladując mniejszą czułość ucha przy cichych dźwiękach — i to ona występuje w przepisach o hałasie. Waga C jest niemal płaska, więc uczciwie pokazuje energię subwooferów. Waga Z to brak jakiegokolwiek filtrowania. Na koncercie różnica między wagą A a C sięga kilkunastu decybeli, bo to właśnie bas jest tym, co waga A wycina.',
      },
      {
        t: 'Stąd bierze się bardzo użyteczny trik warsztatowy: odejmij wartość z wagą A od wartości z wagą C. Jeśli różnica jest mała, materiał jest ubogi w bas. Jeśli sięga kilkunastu decybeli, w miksie jest bardzo dużo energii w dole pasma — nawet jeśli pomiar w wadze A wygląda niewinnie. Ta jedna liczba potrafi wyjaśnić, dlaczego sąsiedzi dzwonią ze skargą, choć formalnie limit nie jest przekroczony.',
      },
      {
        t: 'Drugim ustawieniem jest uśrednianie w czasie. Poziom równoważny to energia uśredniona przez określony czas, tak jakby cały ten okres brzmiał równo. Zapis z indeksem piętnastu minut oznacza więc średnią energetyczną z kwadransa. To nie jest średnia z odczytów na wyświetlaczu — głośne fragmenty ważą znacznie więcej niż ciche, bo liczy się energia, a ta rośnie logarytmicznie.',
      },
      {
        t: 'Trzecia sprawa to szczyty. Wartość skuteczna opisuje energię, a wartość szczytowa najwyższy chwilowy wierzchołek fali. Ich różnica w decybelach to współczynnik szczytu: dla czystego sinusa trzy decybele, dla szumu różowego około dwunastu, dla żywej muzyki nierzadko kilkanaście i więcej. Dlatego system, który „wyrabia” przy sinusie, potrafi zabraknąć przy perkusji — wzmacniacz musi mieć zapas napięcia na chwilowe szczyty.',
      },
      {
        t: 'Mierniki mają też ustawienia czasu reakcji: szybki, wolny i impulsowy. Szybki pokazuje więcej chwilowych zmian, wolny uśrednia je w czytelniejszą wartość, impulsowy reaguje na krótkie zdarzenia. W monitoringu koncertowym najczęściej pracujesz na poziomie równoważnym w oknie kilkunastominutowym, a ustawienia czasu reakcji dotyczą raczej szybkiego podglądu niż raportowania.',
      },
      {
        t: 'I rzecz najważniejsza, a najczęściej pomijana: miejsce pomiaru wpływa na wynik bardziej niż wszystkie ustawienia razem wzięte. Różnica między stanowiskiem realizatora a barierką to często pięć do dziesięciu decybeli. Dlatego w raporcie musi znaleźć się wszystko naraz: wartość, waga, czas uśredniania, dokładna pozycja mikrofonu i czas trwania pomiaru. Dopiero taki komplet jest dokumentem, a nie luźną liczbą.',
      },
    ],
  },

  sumowanie: {
    goals: ['Przewidzieć wynik spotkania dwóch źródeł', 'Rozumieć, dlaczego korektor tu nie pomoże'],
    steps: [
      {
        t: 'Wyobraź sobie dwie osoby popychające huśtawkę. Jeśli popychają równo w rytm, huśtawka rozbuja się dwa razy mocniej. Jeśli jedna popycha, gdy druga ciągnie, huśtawka stanie w miejscu — mimo że obie ciężko pracują. Dwa głośniki grające ten sam sygnał zachowują się identycznie. Gdy ich fale docierają do słuchacza zgodnie, ciśnienie się sumuje i robi się o sześć decybeli głośniej. Gdy docierają w przeciwfazie, znoszą się do ciszy.',
        viz: 'sumowanie-fal',
      },
      {
        t: 'Nie wszystkie sygnały zachowują się tak dramatycznie. Kluczowe jest, czy to ten sam sygnał. Dwa głośniki grające tę samą stopę mogą dodać się do plus sześciu decybeli albo wyciąć do zera. Ale gitara z jednej strony sceny i wokal z drugiej to sygnały niezależne — sumują się spokojnie, energetycznie, dając plus trzy decybele bez żadnych dziur. Tak samo zachowuje się pogłos hali i gwar publiczności.',
        eq: '<math display="block"><msub><mi>L</mi><mi>suma</mi></msub><mo>=</mo><mn>10</mn><mo>&#8202;</mo><mi>log</mi><mo>(</mo><msup><mn>10</mn><mfrac><msub><mi>L</mi><mn>1</mn></msub><mn>10</mn></mfrac></msup><mo>+</mo><msup><mn>10</mn><mfrac><msub><mi>L</mi><mn>2</mn></msub><mn>10</mn></mfrac></msup><mo>)</mo></math>',
        where: 'wzór dla sygnałów nieskorelowanych; dla skorelowanych i zgodnych w fazie sumują się ciśnienia, co daje +6 dB',
      },
      {
        t: 'O tym, który wariant zobaczysz, decyduje wyłącznie różnica drogi, jaką pokonały obie fale. A ta zmienia się z każdym krokiem po widowni: stojąc w osi symetrii, jesteś równo oddalony od obu źródeł, ale krok w bok sprawia, że jedno jest bliżej. Dlatego to samo ustawienie brzmi inaczej dwa metry dalej — i dlatego nie istnieje „dobre ustawienie dla wszystkich miejsc naraz”.',
      },
      {
        t: 'Skoro interferencji nie da się wyłączyć, trzeba ją osłabić — i tu przychodzi z pomocą różnica poziomów. Wróćmy do huśtawki: jeśli jedna osoba popycha z całej siły, a druga tylko muska palcem, to niezależnie od rytmu wynik będzie prawie taki sam. Podobnie z głośnikami: im większa różnica poziomów między nimi, tym mniejsze wahania sumy.',
      },
      {
        t: 'Warto zapamiętać tę tabelę, bo wraca w projektowaniu nieustannie. Przy równych poziomach wahania sięgają od plus sześciu decybeli do całkowitego wygaszenia. Przy trzech decybelach różnicy to około plus trzy i pół do minus sześciu. Przy sześciu decybelach około plus dwa i pół do minus czterech. Przy dziesięciu decybelach już tylko plus dwa i pół do minus trzech. A przy dwudziestu wahania spadają poniżej jednego decybela — cichsze źródło praktycznie przestaje się liczyć.',
      },
      {
        t: 'Z tego rodzi się prosty sposób patrzenia na widownię. Są miejsca, gdzie wyraźnie dominuje jedno źródło — tam jest spokojnie i przewidywalnie. Są miejsca, gdzie dwa źródła grają po równo i trwa przeciąganie liny — tam zobaczysz największe wahania w paśmie. I są miejsca, gdzie różnice czasu są znikome, więc sumowanie jest czystym zyskiem. Dobry projekt polega na tym, żeby strefy przeciągania liny były wąskie i wypadały tam, gdzie mniej przeszkadzają.',
      },
      {
        t: 'Nakładanie źródeł nie jest więc złem samym w sobie — to narzędzie. Tablica liniowa to świadomie kontrolowane nakładanie: elementy sumują się w ściśle policzony sposób, żeby dorzucić poziomu na daleko. Front fille to przykład przeciwny: każdy obsługuje swój wycinek pierwszego rzędu i prawie nie wchodzi sąsiadowi w drogę. Wybór między mocą a jednorodnością robisz przy każdym projekcie.',
      },
      {
        t: 'Na koniec wniosek, który oszczędzi Ci wielu straconych godzin: korektor nie naprawia problemów sumowania. Jeśli w konkretnym miejscu powstała dziura wynikająca z interferencji, podbicie tego pasma zadziała w całej strefie pokrycia — w miejscu dziury nadal będzie jej brakować, a wszędzie indziej pojawi się nadmiar. Problemy czasowo-przestrzenne rozwiązuje się geometrią, opóźnieniem i poziomem, nie filtrem.',
      },
    ],
  },

  grzebien: {
    goals: ['Rozpoznawać filtr grzebieniowy w pomiarze i uchem', 'Wiedzieć, co z nim zrobić, a czego nie'],
    steps: [
      {
        t: 'Skoro dla jednej częstotliwości dwie fale trafiają zgodnie, a dla innej w przeciwfazie, to w całym paśmie musi powstać regularny wzór wzmocnień i wycięć. Nazywamy go filtrem grzebieniowym, bo na wykresie wygląda jak grzebień. To nie jest usterka sprzętu ani wada konstrukcji — to nieuchronna konsekwencja tego, że ten sam dźwięk dociera do słuchacza dwiema drogami.',
        viz: 'filtr-grzebieniowy',
      },
      {
        t: 'Położenie zębów grzebienia da się policzyć. Pierwsze wycięcie pojawia się tam, gdzie różnica drogi odpowiada połowie cyklu, a kolejne w równych odstępach wyżej. Przy różnicy jednej milisekundy pierwsze wycięcie wypada przy 500 Hz, a kolejne co tysiąc herców. Wzmocnienia leżą dokładnie pomiędzy nimi.',
        eq: '<math display="block"><msub><mi>f</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo>&#8202;</mo><mi>&#916;</mi><mi>t</mi></mrow></mfrac><mspace width="1.6em"/><mi>odstęp</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>&#916;</mi><mi>t</mi></mrow></mfrac></math>',
        where: 'f₁ — pierwsze wycięcie [Hz]; Δt — różnica czasu dotarcia obu sygnałów [s]',
      },
      {
        t: 'Im większe opóźnienie, tym gęstszy grzebień. Przy pół milisekundy wycięcia są rzadkie i leżą wysoko — pierwsze przy kilobercu. Przy dziesięciu milisekundach mamy ich dziesiątki w całym paśmie, co daje charakterystyczne „metaliczne” zabarwienie. Przy bardzo dużych opóźnieniach zęby robią się tak gęste, że ucho przestaje je rozróżniać i zaczyna słyszeć oddzielne echo zamiast zmiany barwy.',
      },
      {
        t: 'W terenie źródła są zawsze te same i warto je znać na pamięć. Odbicie od podłogi przy pomiarze mikrofonem na statywie. Dwa front fille oświetlające ten sam fragment barierki. System główny i wieża delay w strefie przejścia. Odbicie od szklanej ściany albo ekranu LED. Suby lewe i prawe rozstawione po bokach sceny. Za każdym razem mechanizm jest identyczny: jeden dźwięk, dwie drogi.',
      },
      {
        t: 'Jak go rozpoznać? W analizatorze widać regularne, równo rozstawione wycięcia — regularność jest kluczowa, bo zwykłe problemy z głośnikiem czy pomieszczeniem nie układają się w tak równy wzór. Uchem słyszysz to jako charakterystyczne zabarwienie, jakby dźwięk przechodził przez rurę, oraz jako wyraźną zmianę barwy przy przemieszczaniu się. Jeśli barwa zmienia się dramatycznie po kroku w bok, masz do czynienia z interferencją, a nie z ustawieniem korektora.',
      },
      {
        t: 'Ciekawostka, która tłumaczy sporo nieporozumień: w górze pasma gęste wycięcia mieszczą się w jednym paśmie krytycznym ucha, więc nie słyszymy ich jako osobnych dziur, tylko jako zmianę barwy. Dlatego pomiar potrafi pokazać dramatyczny grzebień w okolicy kilku kiloherców, a wrażenie słuchowe jest znacznie łagodniejsze. To jeden z powodów, dla których nie należy gonić za idealnie gładkim wykresem w górze pasma.',
      },
      {
        t: 'Co można z tym zrobić? Zmienić geometrię, żeby różnica drogi zmalała — na przykład przesunąć fill albo zmienić jego kąt. Zwiększyć izolację poziomów, żeby jedno źródło wyraźnie dominowało. Wyrównać czas w miejscu, gdzie poziomy są równe, żeby wycięcie zamieniło się we wzmocnienie. A czego nie da się zrobić: wyciąć dziury korektorem ani udawać, że problemu nie ma. To zawsze problem przestrzenny, więc rozwiązanie też musi być przestrzenne.',
      },
    ],
  },

  sluch: {
    goals: ['Rozumieć, dlaczego pomiar i wrażenie czasem się rozjeżdżają', 'Chronić własne narzędzie pracy'],
    steps: [
      {
        t: 'Droga dźwięku do mózgu ma kilka etapów i każdy coś zmienia. Małżowina zbiera falę i nadaje jej zabarwienie zależne od kierunku. Przewód słuchowy prowadzi ją do błony bębenkowej. Trzy najmniejsze kości w ciele przekazują drgania do ślimaka, który działa jak analizator widma: różne miejsca reagują na różne częstotliwości. Dopiero stamtąd sygnał idzie nerwem do mózgu, który składa z tego wrażenie.',
      },
      {
        t: 'Przewód słuchowy ma około dwóch i pół centymetra i jest zamknięty z jednej strony — zachowuje się więc jak rura organowa. Powstaje w nim rezonans dający podbicie rzędu kilkunastu decybeli w okolicy trzech kiloherców. Mózg traktuje to jako stan normalny i „odejmuje” w tle, ale konsekwencja jest praktyczna: właśnie w tym paśmie jesteśmy najbardziej wrażliwi i najszybciej nas ono męczy.',
      },
      {
        t: 'Czułość ucha zależy od poziomu — i to bardzo. Krzywe jednakowej głośności pokazują, ile decybeli musi mieć dźwięk o danej częstotliwości, żeby brzmiał tak samo głośno jak wzorzec. Przy niskich poziomach bas musi być znacznie głośniejszy, żeby dorównać średnicy. Przy wysokich poziomach różnice się spłaszczają. To nie jest wada ucha, tylko jego konstrukcja.',
        viz: 'krzywe-glosnosci',
      },
      {
        t: 'Stąd zjawisko, które znasz z pracy: ten sam miks brzmi pełnie na koncercie i chudo przy cichym odsłuchu. Nie dlatego, że coś się zepsuło — po prostu przy niższym poziomie ucho gubi bas. To także powód, dla którego decyzje o barwie podjęte przy bardzo cichym odsłuchu nie przekładają się na poziom koncertowy i odwrotnie. Stroisz na tym poziomie, na którym system będzie pracował.',
      },
      {
        t: 'Ucho nie analizuje widma w sposób ciągły, tylko zestawem nakładających się filtrów zwanych pasmami krytycznymi. Ich szerokość rośnie z częstotliwością: przy jednym kiloherzu to około stu sześćdziesięciu herców. Wszystko, co dzieje się wewnątrz jednego takiego pasma, zlewa się w jedno wrażenie. To wyjaśnia, dlaczego gęste wycięcia słyszymy jako barwę, a nie jako osobne dziury, i dlaczego wąskie korekcje bywają niesłyszalne.',
      },
      {
        t: 'Głośny dźwięk potrafi całkowicie ukryć cichszy, jeśli leżą blisko siebie w paśmie — nazywamy to maskowaniem. Działa silniej w górę niż w dół częstotliwości, więc mocny bas maskuje średnicę bardziej niż odwrotnie. Maskowanie ma też wymiar czasowy: przez chwilę po głośnym zdarzeniu jesteśmy mniej wrażliwi. Na tym zjawisku opiera się kompresja stratna dźwięku, a w praktyce koncertowej tłumaczy ono, czemu przeładowany bas zabiera zrozumiałość wokalu.',
        viz: 'maskowanie',
      },
      {
        t: 'Przy wysokich poziomach ucho przestaje być liniowe i zaczyna generować własne składowe, których nie ma w sygnale — harmoniczne oraz tony różnicowe. To zjawisko fizjologiczne, niemierzalne mikrofonem. Częściowo tłumaczy, dlaczego bardzo głośny materiał bywa opisywany jako „agresywny” mimo poprawnego pomiaru, i dlaczego dwie osoby mogą inaczej odbierać ten sam poziom.',
      },
      {
        t: 'Na koniec sprawa najważniejsza dla Twojej kariery. Po godzinach w hałasie próg słyszenia tymczasowo się podnosi, zwłaszcza w okolicy trzech do sześciu kiloherców. Zmęczony słuch podpowiada, że brakuje góry pasma, więc naturalnym odruchem jest jej podbijanie — i tak powstają miksy, które nazajutrz brzmią ostro. Regularne przerwy, ochronniki filtrujące i coroczne badanie słuchu to nie przesada, tylko dbanie o narzędzie, którego nie da się wymienić.',
      },
    ],
  },

  lokalizacja: {
    goals: ['Rozumieć, skąd mózg wie, gdzie jest źródło', 'Wykorzystywać efekt pierwszeństwa w projekcie'],
    steps: [
      {
        t: 'Mamy dwoje uszu i na tym opiera się cała nasza zdolność określania kierunku. Mózg porównuje dwie rzeczy: kiedy dźwięk dotarł do każdego ucha i jak głośny był w każdym z nich. Źródło po prawej stronie dociera do prawego ucha wcześniej i głośniej — z tej pary różnic mózg odtwarza kierunek z dokładnością rzędu kilku stopni.',
        viz: 'lokalizacja-itd-ild',
      },
      {
        t: 'Obie wskazówki działają w różnych zakresach pasma i to ma konkretne konsekwencje. Niskie częstotliwości mają fale dłuższe niż głowa, więc opływają ją bez przeszkód i nie powstaje różnica poziomu — zostaje różnica czasu. Wysokie częstotliwości są krótsze niż głowa, więc powstaje wyraźny cień akustyczny i różnica poziomu staje się główną wskazówką. Dlatego basu nie da się zlokalizować tak precyzyjnie jak talerza.',
      },
      {
        t: 'Teraz zjawisko, które jest fundamentem projektowania systemów rozproszonych. Gdy ten sam dźwięk dociera do nas dwiema drogami z niewielkim opóźnieniem, nie słyszymy dwóch źródeł — mózg skleja je w jedno i przypisuje kierunek temu, które dotarło pierwsze. Nazywamy to efektem pierwszeństwa. Co więcej, drugie źródło może być nawet nieco głośniejsze, a kierunek i tak wyznaczy pierwsze.',
        viz: 'efekt-haasa',
      },
      {
        t: 'Efekt działa w określonym oknie czasowym. Przy bardzo małych opóźnieniach, rzędu ułamków milisekundy, mózg nie rozdziela źródeł w ogóle i dostajemy zmianę barwy. W zakresie od kilku do kilkudziesięciu milisekund działa efekt pierwszeństwa: jedno zdarzenie, kierunek od pierwszego frontu. Powyżej tego zakresu pojawia się echo — dwa oddzielne zdarzenia. Dokładna granica zależy od rodzaju materiału: perkusja zdradza echo wcześniej niż legato smyczków.',
      },
      {
        t: 'W praktyce wykorzystujesz to przy każdej wieży delay. Ustawiasz opóźnienie tak, żeby dźwięk z systemu głównego docierał pierwszy, a wieża dokładała poziom i świeżość ułamek chwili później. Publiczność sto metrów od sceny nadal „widzi uszami” scenę, mimo że większość energii dostaje z konstrukcji stojącej dziesięć metrów obok. To samo dotyczy front fillów: kilka milisekund zapasu trzyma wokal na scenie zamiast na barierce.',
      },
      {
        t: 'Jest granica, za którą ta sztuczka przestaje działać. Jeśli bliższe źródło jest znacznie głośniejsze od pierwszego, mózg w końcu uzna je za główne, mimo że dotarło później. Dlatego fille i delaye ustawia się z umiarem: mają uzupełniać, a nie przejmować. W praktyce trzymamy różnicę poziomów w rozsądnych granicach i sprawdzamy uchem, czy obraz nie przeskakuje.',
      },
      {
        t: 'Na koniec rzecz, o której warto pamiętać w dużych produkcjach: mózg porównuje to, co słyszy, z tym, co widzi. Gdy wokalista stoi na scenie, a głos wyraźnie dobiega z boku albo z góry, odbiorca odczuwa dyskomfort, nawet jeśli nie potrafi go nazwać. Dlatego dbałość o spójność obrazu dźwiękowego z wizualnym nie jest fanaberią, tylko elementem jakości realizacji — i jednym z powodów, dla których systemy immersyjne zyskują popularność.',
      },
    ],
  },

  ip: {
    goals: ['Zbudować sieć audio, która nie zawiedzie w show', 'Diagnozować problemy zamiast zgadywać'],
    steps: [
      {
        t: 'Sieć audio to ulica z adresami. Adres IP mówi, pod którym numerem mieszka urządzenie, a maska podsieci wyznacza granice osiedla — urządzenia z tego samego osiedla rozmawiają ze sobą bezpośrednio. Adresy można rozdawać automatycznie albo wpisywać ręcznie. Gdy urządzenie nie dostanie adresu z żadnego źródła, nadaje sobie awaryjny, zaczynający się od 169.254 — jeśli go widzisz, wiesz od razu, że rozdzielanie adresów nie zadziałało.',
      },
      {
        t: 'Switch to skrzyżowanie. Prosty, niezarządzalny switch przepuszcza wszystko wszędzie, a zarządzalny pozwala ustawić reguły ruchu: podzielić sieć na osobne części, nadać priorytet danym audio i sygnałom zegara, wyłączyć oszczędzanie energii, podejrzeć obciążenie portów. W systemie, od którego zależy koncert, ta kontrola jest różnicą między „działa” a „wiem, że działa”.',
      },
      {
        t: 'Rozróżnij dwa sposoby wysyłania danych. Transmisja pojedyncza to paczka adresowana do jednego odbiorcy — jak list. Transmisja grupowa to jedna paczka dla wielu odbiorców naraz — jak ogłoszenie na tablicy. Ogłoszenia są wydajne, ale nieprzefiltrowane zalewają wszystkie porty. Funkcja filtrowania w switchu sprawia, że ogłoszenie trafia tylko tam, gdzie ktoś je zaprenumerował.',
      },
      {
        t: 'Oszczędzanie energii w portach to cichy zabójca sieci audio. Mechanizm usypia port przy małym ruchu i budzi go, gdy ruch wraca — a takie przerwy kolidują z protokołami, które muszą działać punktualnie co do mikrosekundy. W switchu przeznaczonym do audio wyłącza się tę funkcję zawsze, bez dyskusji.',
      },
      {
        t: 'Miedziany odcinek ma limit stu metrów — dalej sygnał przestaje być wiarygodny. Na dużym plenerze, gdzie od sceny do stanowiska realizatora bywa dwieście metrów, prowadzi się światłowód i konwertuje go na miedź po obu stronach. Światłowód ma jeszcze jedną zaletę, którą docenisz przy scenie zasilanej z innego przyłącza: całkowicie oddziela elektrycznie oba końce.',
      },
      {
        t: 'Plan adresacji to najtańsze narzędzie diagnostyczne, jakie masz. Tabela z listą urządzeń, ich adresami, rolami i portami w switchu zamienia panikę w procedurę: zamiast skanować sieć w ciemno, sprawdzasz po kolei to, co powinno odpowiadać. Zrób ją przed eventem, wydrukuj i powieś przy rozdzielni sieciowej.',
      },
    ],
  },

  dante: {
    goals: ['Rozumieć różnice między protokołami', 'Projektować redundancję, która naprawdę działa'],
    steps: [
      {
        t: 'Dante jest dziś najpopularniejszym sposobem przesyłania audio po sieci i działa na zwykłym sprzęcie sieciowym. Odbiornik ma ustawianą wartość opóźnienia — od ułamka milisekundy do kilku milisekund. Krótsze opóźnienie oznacza mniejszy zapas na nierówności w sieci, więc wymaga porządnych switchy i krótkiej ścieżki. Gdy słyszysz trzaski przy bardzo niskim ustawieniu, to zwykle nie awaria, tylko za mały margines.',
      },
      {
        t: 'Redundancja polega na tym, że urządzenie wysyła te same dane dwiema zupełnie niezależnymi sieciami. Warunek jest jeden, ale bezwzględny: te sieci nie mogą mieć wspólnego punktu. Dwa kable wpięte do tego samego switcha to nie redundancja, tylko dwa kable — awaria tego switcha wyłącza obie drogi naraz.',
      },
      {
        t: 'Istnieje też standard, który pozwala połączyć urządzenia różnych producentów: określa format strumieni i sposób synchronizacji, ale wymaga ręcznego ustawienia kilku parametrów, które w zamkniętym ekosystemie dzieją się same. W praktyce używasz go jako mostu między światami — na przykład między systemem na scenie a wozem transmisyjnym.',
      },
      {
        t: 'Druga rodzina protokołów działa inaczej: rezerwuje pasmo w switchach, gwarantując dostarczenie danych na czas. Wymaga to jednak sprzętu, który tę rezerwację obsługuje — nie wystarczy dowolny switch. Certyfikowany profil tej rodziny zapewnia, że urządzenia różnych producentów faktycznie ze sobą zagrają, a nie tylko teoretycznie mogłyby.',
      },
      {
        t: 'Niezależnie od protokołu obowiązuje kilka zasad porządkowych. Sieć produkcyjna ma być oddzielona od sieci gościnnej i internetu. Nazwy urządzeń mają odpowiadać ich funkcji, a nie numerowi seryjnemu. Konfiguracja powinna być zapisana i możliwa do przywrócenia. To wszystko brzmi biurokratycznie do momentu, w którym o dwudziestej drugiej trzeba wymienić uszkodzony procesor na zapasowy.',
      },
    ],
  },

  zegar: {
    goals: ['Zaprojektować hierarchię zegara', 'Rozpoznawać objawy problemów z synchronizacją'],
    steps: [
      {
        t: 'W systemie cyfrowym wszystkie urządzenia muszą mierzyć czas tak samo, inaczej próbki zaczynają się gubić. Dlatego jedno urządzenie jest dyrygentem, a reszta gra według niego. W sieciach IP dyrygent wybierany jest automatycznie na podstawie priorytetów, ale warto wiedzieć, kto nim jest — i co się stanie, gdy zniknie z sieci.',
      },
      {
        t: 'Objawy problemów z zegarem są charakterystyczne: pojedyncze trzaski, krótkie przerwy, czasem cyklicznie powracające zakłócenie. Nie brzmią jak przester ani jak uszkodzony kabel. Jeśli słyszysz takie zjawiska w całym systemie naraz, zacznij od sprawdzenia synchronizacji, a nie od wymiany przewodów.',
      },
      {
        t: 'W połączeniach punkt-punkt między urządzeniami spotkasz starszy standard cyfrowy przesyłany kablem o impedancji 110 omów w wersji zbalansowanej. Zwykły kabel mikrofonowy zadziała na krótkim odcinku, ale nie ma właściwej impedancji, więc na dłuższych trasach zaczyna gubić dane. To klasyczna pułapka: działa na próbie, sypie się na koncercie.',
      },
      {
        t: 'Gdy trzeba połączyć urządzenia pracujące z różnymi zegarami albo częstotliwościami próbkowania, używa się konwersji. Kosztuje ona odrobinę opóźnienia i przetwarzania, ale jest jedynym poprawnym rozwiązaniem — próba „dogadania się” dwóch niezależnych zegarów bez konwersji zawsze kończy się zakłóceniami.',
      },
      {
        t: 'Na koniec rzecz istotna przy wyrównywaniu systemu: opóźnienie własne toru cyfrowego sumuje się z czasem przelotu dźwięku. Jeśli sub idzie przez inny procesor niż tablica albo delay jest podpięty przez dodatkowy konwerter, powstaje różnica, której nie widać w geometrii. Zmierz całkowitą latencję każdej gałęzi, zanim zaczniesz ustawiać opóźnienia akustyczne.',
      },
    ],
  },

  zasilanie: {
    goals: ['Zaplanować zasilanie systemu', 'Rozmawiać z elektrykiem obiektu konkretami'],
    steps: [
      {
        t: 'W Polsce z gniazdka dostajesz 230 woltów, a między dwiema fazami jest 400 woltów. Duże przyłącza mają pięć przewodów: trzy fazy, przewód neutralny i ochronny. Wzmacniacze podłącza się zwykle jednofazowo, więc Twoim zadaniem jest rozłożyć je równo na trzy fazy — jak pakowanie bagażnika, żeby samochód nie przechylał się na jedną stronę.',
      },
      {
        t: 'Po co ta równowaga? Przy równomiernym obciążeniu prądy z trzech faz wzajemnie się znoszą w przewodzie neutralnym. Gdy obciążenie jest nierówne, przez neutralny płynie prąd wyrównawczy, a napięcia na fazach zaczynają się rozjeżdżać — jedna grupa wzmacniaczy dostaje mniej, inna więcej. Zasilacze impulsowe dokładają do tego swoje harmoniczne, które sumują się w przewodzie neutralnym zamiast znosić.',
      },
      {
        t: 'Wyłącznik różnicowoprądowy porównuje prąd wpływający z wypływającym. Jeśli część prądu ucieka inną drogą — na przykład przez człowieka — wyłącza obwód w ułamku sekundy. Standardowa czułość ochronna to 30 miliamperów. Problem w tym, że każdy zasilacz ma niewielki prąd upływu, więc kilkanaście urządzeń na jednym wyłączniku potrafi go wyzwolić bez żadnej awarii. Rozwiązaniem jest podział na kilka obwodów, a nie wyjmowanie zabezpieczenia.',
      },
      {
        t: 'Długi kabel o małym przekroju zachowuje się jak wąska rurka: przy dużym poborze napięcie na końcu spada i wzmacniacze przestają oddawać pełną moc dokładnie w szczytach, gdy najbardziej jej potrzebują. Przekrój dobiera się więc do prądu i długości trasy, a nie do wartości bezpiecznika. Ta sama zasada co przy kablach głośnikowych, tylko konsekwencje są większe.',
      },
      {
        t: 'Agregat to osobny temat. Różni się od sieci jakością napięcia i reakcją na nagłe skoki obciążenia — a system nagłośnieniowy to jedno wielkie pasmo skoków. Wzmacniacze z układem korekcji współczynnika mocy pobierają prąd równomierniej, ale przy jednoczesnym włączeniu potrafią wygenerować taki impuls rozruchowy, że wyzwolą zabezpieczenie. Dlatego system włącza się sekwencyjnie, grupami.',
      },
      {
        t: 'Na koniec zasada porządkowa: audio i oświetlenie zasilaj z osobnych obwodów, najlepiej z osobnych rozdzielnic. Ściemniacze i zasilacze reflektorów generują zakłócenia i gwałtowne zmiany obciążenia. Rozdzielenie ogranicza przenoszenie tych zakłóceń do toru audio i sprawia, że awaria światła nie gasi dźwięku.',
      },
    ],
  },

  uziemienie: {
    goals: ['Usuwać przydźwięk bezpiecznie', 'Zapobiegać problemom już na etapie planu'],
    steps: [
      {
        t: 'Przydźwięk z pętli masy powstaje wtedy, gdy dwa połączone ze sobą urządzenia mają masę na trochę innym potencjale — bo są zasilane z różnych miejsc. Powstaje zamknięty obwód, przez który płynie prąd, i część tego prądu ląduje w ekranie kabla sygnałowego. Słychać to jako brum o częstotliwości sieci i jego wielokrotnościach.',
      },
      {
        t: 'Teraz rzecz absolutnie kluczowa: przewodu ochronnego nie odłącza się nigdy. To on sprawia, że w razie uszkodzenia izolacji prąd popłynie do ziemi i zadziała zabezpieczenie, zamiast czekać, aż ktoś dotknie obudowy. Adaptery „podnoszące masę” i obcinanie bolca to praktyki, które zabijają ludzi — dosłownie. Objaw znika, ryzyko zostaje.',
      },
      {
        t: 'Bezpieczne rozwiązania działają na sygnale, nie na zasilaniu. Transformator separujący przerywa połączenie galwaniczne i przepuszcza tylko sygnał. Skrzynka bezpośrednia z przełącznikiem odłączającym ekran robi to samo w wersji kieszonkowej. Najprostsza profilaktyka to zasilanie całego systemu audio z jednego punktu — wtedy nie ma różnicy potencjałów, z której miałaby powstać pętla.',
      },
      {
        t: 'Bywa też, że problem tkwi w samym urządzeniu: ekran kabla jest w nim podłączony do masy sygnałowej zamiast do obudowy, więc prądy z ekranu przechodzą przez obwody sygnałowe. Poznasz to po tym, że jedno konkretne urządzenie brumi w każdej konfiguracji, a reszta systemu jest czysta. Rozwiązaniem jest izolacja tego urządzenia albo jego wymiana.',
      },
      {
        t: 'Oświetlenie to najczęstsze źródło zakłóceń, które nie mają nic wspólnego z pętlą masy. Ściemniacze i zasilacze reflektorów szatkują prąd, a powstałe zakłócenia potrafią indukować się w kablach sygnałowych. Profilaktyka jest prosta i geometryczna: prowadź kable sygnałowe z dala od zasilania, a jeśli muszą się przeciąć, niech krzyżują się pod kątem prostym.',
      },
      {
        t: 'Kolejność włączania ma znaczenie: źródła i procesory najpierw, wzmacniacze na końcu. Przy wyłączaniu odwrotnie. Włączane urządzenie potrafi wygenerować impuls, który przez włączony wzmacniacz trafi prosto w przetwornik wysokotonowy. To kilka sekund dyscypliny, które oszczędzają kosztowną naprawę.',
      },
    ],
  },

  halas: {
    goals: ['Znać limity i wytyczne', 'Prowadzić monitoring, który obroni Cię przed zarzutami'],
    steps: [
      {
        t: 'Twoja praca odbywa się na granicy tego, co słuch wytrzymuje — dlatego istnieją przepisy. W Polsce ekspozycja zawodowa liczona dla ośmiu godzin nie może przekraczać 85 decybeli w wadze A, a szczytowy poziom 135 decybeli w wadze C. To nie są wartości koncertowe, tylko dopuszczalna dawka dla pracownika: liczy się energia zsumowana przez cały dzień pracy.',
      },
      {
        t: 'Dla publiczności punktem odniesienia są wytyczne Światowej Organizacji Zdrowia z 2022 roku: średni poziom nie wyższy niż 100 decybeli w wadze A, uśredniony w oknie piętnastu minut, mierzony tam, gdzie publiczność jest najbardziej narażona. Do tego dochodzą zalecenia dotyczące monitoringu, dostępu do ochronników i stref wyciszenia.',
      },
      {
        t: 'Monitoring musi być ciągły i zapisywany, a w raporcie powinna znaleźć się pozycja pomiaru. To nie formalność: jeśli mierzysz na stanowisku realizatora, a publiczność stoi bliżej sceny, różnica potrafi wynosić kilka decybeli. Bez opisanej pozycji Twój raport jest nie do obrony w rozmowie z organizatorem albo urzędnikiem.',
      },
      {
        t: 'Drugi front to hałas wychodzący poza teren. Mierzy się go zwykle przy najbliższej zabudowie i to właśnie tam decydują się skargi. Na odległość dociera głównie bas — powietrze i ściany tłumią go najsłabiej — więc sąsiad nie słyszy wokalu, tylko stopę. Ograniczanie poziomu całego systemu jest tu narzędziem najbardziej kosztownym i najmniej skutecznym.',
      },
      {
        t: 'Skuteczniejsze są rozwiązania kierunkowe. Układ kardioidalny subwooferów ogranicza energię wychodzącą do tyłu o kilkanaście decybeli, nie zmieniając nic dla publiczności. Podobnie działa przemyślana orientacja sceny i wykorzystanie zabudowy jako ekranu. To decyzje projektowe, które zapadają na długo przed dniem koncertu.',
      },
      {
        t: 'Na koniec to, co najłatwiej zaniedbać: własny słuch i słuch ekipy. Ochronniki filtrujące pozwalają pracować z zachowaniem barwy, a przerwy w ciszy realnie odbudowują wrażliwość. Zmęczony słuch podejmuje złe decyzje tonalne, więc dbanie o niego to nie tylko kwestia zdrowia, ale i jakości Twojej pracy przez kolejne dwadzieścia lat.',
      },
    ],
  },

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
