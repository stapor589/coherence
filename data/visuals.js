// Animowane grafiki do lekcji. Klasy v-* są animowane w css/app.css.
// Każda grafika: { title, svg, caption }

const W = 620, H = 240;
const wavePath = (amp, period, y = 120, width = 1240) => {
  let d = `M0 ${y}`;
  for (let x = 0; x < width; x += period) {
    d += ` q ${period / 4} ${-amp} ${period / 2} 0 q ${period / 4} ${amp} ${period / 2} 0`;
  }
  return d;
};

export const VISUALS = {
  'fala-w-powietrzu': {
    title: 'Fala biegnie, cząsteczki zostają w miejscu',
    caption: 'Każda kropka to cząsteczka powietrza. Membrana popycha te najbliższe, one napierają na sąsiednie i tak dalej — powstają pasma zagęszczenia i rozrzedzenia, które wędrują w stronę słuchacza. Przyjrzyj się czerwonej cząsteczce: ona tylko drga w tę i z powrotem wokół swojego miejsca, nigdzie nie wędruje. Wędruje wyłącznie wzór zagęszczeń, czyli informacja. Jeden pełny cykl membrany przesuwa ten wzór dokładnie o jedną długość fali.',
    svg: (() => {
      const cols = 44, rows = 9, x0 = 84, dx = 11.6, y0 = 52, dy = 17, perCycle = 8;
      const dots = [];
      for (let c = 0; c < cols; c++) {
        // Ujemne opóźnienie = faza wyprzedzona. Żeby fala biegła w prawo, kolejne kolumny
        // muszą być opóźnione względem poprzedniej, stąd odliczanie od końca cyklu.
        const delay = (-(((perCycle - (c % perCycle)) % perCycle) * (2 / perCycle))).toFixed(3);
        const inner = [];
        for (let r = 0; r < rows; r++) {
          const jitter = ((c * 7 + r * 13) % 5) - 2;
          const red = c === 21 && r === 4;
          inner.push(`<circle cx="${(x0 + c * dx).toFixed(1)}" cy="${y0 + r * dy + jitter}" r="${red ? 5 : 3.1}" class="${red ? 'v-fill-red' : 'v-fill-accent'}" opacity="${red ? 1 : 0.85}"/>`);
        }
        dots.push(`<g class="v-mol" style="animation-delay:${delay}s">${inner.join('')}</g>`);
      }
      return `<svg viewBox="0 0 620 250" class="v-svg" role="img" aria-label="Cząsteczki powietrza zagęszczające się i rozrzedzające w fali dźwiękowej">
        <rect x="18" y="62" width="46" height="120" rx="8" class="v-fill-dim"/>
        <rect x="58" y="78" width="14" height="88" rx="4" class="v-fill-accent v-membrane"/>
        <text x="42" y="204" class="v-label" text-anchor="middle">membrana</text>
        ${dots.join('')}
        <g class="v-wavefront">
          <rect x="136" y="40" width="40" height="150" rx="10" class="v-stroke-gold" fill="none" stroke-width="2" stroke-dasharray="6 5"/>
          <text x="156" y="32" class="v-label-gold" text-anchor="middle">zagęszczenie</text>
        </g>
        <text x="245" y="228" class="v-label-red">czerwona cząsteczka tylko drga w miejscu</text>
        <path d="M556 96c16 0 22 10 22 24s-6 24-22 24" class="v-stroke" fill="none" stroke-width="4"/>
        <text x="566" y="204" class="v-label" text-anchor="middle">ucho</text>
      </svg>`;
    })(),
  },

  'dlugosc-fali': {
    title: 'Długość fali: bas jest „długi”, sopran „krótki”',
    caption: 'Ta sama prędkość, inna częstotliwość. Fala 50 Hz ma blisko 7 metrów długości — jest dłuższa niż samochód. Fala 5 kHz ma 7 centymetrów — mieści się na dłoni. Dlatego bas omija przeszkody, a góra pasma daje się celować jak światło latarki.',
    svg: `<svg viewBox="0 0 ${W} ${H}" class="v-svg" role="img" aria-label="Porównanie długości fali niskiej i wysokiej częstotliwości">
      <text x="10" y="40" class="v-label">50 Hz — λ ≈ 6,9 m</text>
      <path d="${wavePath(26, 240, 72, 620)}" class="v-stroke-accent" fill="none" stroke-width="3"/>
      <line x1="10" y1="110" x2="250" y2="110" class="v-stroke-gold" stroke-width="2" stroke-dasharray="5 5"/>
      <text x="130" y="128" class="v-label-gold" text-anchor="middle">jedna fala</text>
      <text x="10" y="176" class="v-label">5 kHz — λ ≈ 6,9 cm</text>
      <path d="${wavePath(18, 24, 206, 620)}" class="v-stroke-accent" fill="none" stroke-width="2"/>
      <line x1="10" y1="230" x2="34" y2="230" class="v-stroke-gold" stroke-width="2" stroke-dasharray="5 5"/>
      <text x="60" y="234" class="v-label-gold">jedna fala</text>
    </svg>`,
  },

  'faza-opoznienie': {
    title: 'Opóźnienie i faza to ta sama rzecz w dwóch językach',
    caption: 'Dwie identyczne fale, druga spóźniona o kawałek. Dla niskiego tonu to „ledwie drgnienie”, dla wysokiego — pół świata różnicy. To samo opóźnienie w milisekundach oznacza inny kąt fazy dla każdej częstotliwości.',
    svg: `<svg viewBox="0 0 ${W} ${H}" class="v-svg" role="img" aria-label="Dwie fale przesunięte w czasie">
      <path d="${wavePath(30, 200, 80, 620)}" class="v-stroke-accent" fill="none" stroke-width="3"/>
      <path d="${wavePath(30, 200, 170, 620)}" class="v-stroke-gold v-shift" fill="none" stroke-width="3"/>
      <line x1="0" y1="80" x2="620" y2="80" class="v-stroke-dim" stroke-dasharray="4 6"/>
      <line x1="0" y1="170" x2="620" y2="170" class="v-stroke-dim" stroke-dasharray="4 6"/>
      <text x="8" y="36" class="v-label">sygnał 1</text>
      <text x="8" y="220" class="v-label-gold">sygnał 2 — spóźniony o Δt</text>
    </svg>`,
  },

  'sumowanie-fal': {
    title: 'Dwa głośniki: raz głośniej, raz ciszej',
    caption: 'Gdy dwie fale unoszą się i opadają razem, dodają się do podwójnej wysokości — to +6 dB. Gdy jedna rośnie, a druga maleje, znoszą się do zera i słychać ciszę. Wszystko zależy od tego, czy „maszerują w nogę”.',
    svg: `<svg viewBox="0 0 ${W} 300" class="v-svg" role="img" aria-label="Sumowanie dwóch fal w fazie i w przeciwfazie">
      <text x="14" y="22" class="v-label-white">w fazie → głośniej</text>
      <path d="${wavePath(16, 140, 70, 280)}" class="v-stroke-accent" fill="none" stroke-width="2.5" transform="translate(14,0)"/>
      <path d="${wavePath(16, 140, 118, 280)}" class="v-stroke-gold" fill="none" stroke-width="2.5" transform="translate(14,0)"/>
      <line x1="14" y1="152" x2="290" y2="152" class="v-stroke-dim" stroke-dasharray="4 6"/>
      <path d="${wavePath(32, 140, 210, 280)}" class="v-stroke-white v-pulse" fill="none" stroke-width="3" transform="translate(14,0)"/>
      <text x="154" y="262" class="v-label-white" text-anchor="middle">suma: dwa razy wyżej (+6 dB)</text>

      <line x1="308" y1="10" x2="308" y2="270" class="v-stroke-dim"/>

      <text x="330" y="22" class="v-label-white">w przeciwfazie → cisza</text>
      <path d="${wavePath(16, 140, 70, 280)}" class="v-stroke-accent" fill="none" stroke-width="2.5" transform="translate(330,0)"/>
      <path d="${wavePath(-16, 140, 118, 280)}" class="v-stroke-gold" fill="none" stroke-width="2.5" transform="translate(330,0)"/>
      <line x1="330" y1="152" x2="606" y2="152" class="v-stroke-dim" stroke-dasharray="4 6"/>
      <line x1="330" y1="210" x2="606" y2="210" class="v-stroke-white v-pulse" stroke-width="3"/>
      <text x="468" y="262" class="v-label-white" text-anchor="middle">suma: płasko, nic nie słychać</text>

      <text x="310" y="292" class="v-label" text-anchor="middle">o wyniku decyduje różnica drogi — czyli czas dotarcia obu fal</text>
    </svg>`,
  },

  'filtr-grzebieniowy': {
    title: 'Filtr grzebieniowy: grzebień dziur w paśmie',
    caption: 'Ten sam dźwięk dociera dwiema drogami: krótszą i dłuższą. Dla części częstotliwości obie wersje się dodają, dla innych znoszą. Na wykresie powstaje regularny „grzebień” — stąd nazwa. Im większa różnica drogi, tym gęstsze zęby.',
    svg: `<svg viewBox="0 0 ${W} ${H}" class="v-svg" role="img" aria-label="Charakterystyka filtru grzebieniowego">
      <line x1="40" y1="200" x2="600" y2="200" class="v-stroke-dim"/>
      <line x1="40" y1="30" x2="40" y2="200" class="v-stroke-dim"/>
      <path d="M40 120 ${Array.from({ length: 28 }, (_, i) => {
        const x = 40 + i * 20;
        return `Q ${x + 5} ${i % 2 ? 190 : 50} ${x + 20} 120`;
      }).join(' ')}" class="v-stroke-accent v-draw" fill="none" stroke-width="2.5"/>
      <text x="320" y="228" class="v-label" text-anchor="middle">częstotliwość →</text>
      <text x="14" y="40" class="v-label">poziom</text>
      <text x="470" y="60" class="v-label-gold">szczyty: fale się dodają</text>
      <text x="470" y="186" class="v-label-red">dziury: fale się znoszą</text>
    </svg>`,
  },

  'skala-db': {
    title: 'Decybele: skala jak schody, nie jak linijka',
    caption: 'Każde +10 dB to mniej więcej „dwa razy głośniej” w odbiorze, ale aż dziesięć razy więcej mocy. Dlatego z 1 kW nie zrobisz dwa razy głośniejszego koncertu niż ze 100 W — zrobisz go głośniejszym o jeden schodek.',
    svg: `<svg viewBox="0 0 ${W} ${H}" class="v-svg" role="img" aria-label="Skala poziomów dźwięku w decybelach">
      ${[['0 dB', 'próg słyszenia', 210], ['30 dB', 'szept', 176], ['60 dB', 'rozmowa', 142], ['90 dB', 'głośna sala', 108], ['105 dB', 'FOH na koncercie', 74], ['130 dB', 'próg bólu', 40]]
        .map(([v, l, y], i) => `<g><rect x="40" y="${y - 14}" width="${60 + i * 78}" height="22" rx="6" class="v-fill-accent v-grow" opacity="${0.25 + i * 0.13}" style="animation-delay:${i * 0.12}s"/><text x="48" y="${y + 2}" class="v-label-white">${v}</text><text x="${112 + i * 78}" y="${y + 2}" class="v-label">${l}</text></g>`).join('')}
    </svg>`,
  },

  'efekt-haasa': {
    title: 'Kto pierwszy, ten wskazuje kierunek',
    caption: 'Dźwięk ze sceny dociera pierwszy, dźwięk z wieży delay chwilę później. Mózg uznaje, że źródło jest tam, skąd przyszedł pierwszy sygnał — nawet jeśli ten drugi jest głośniejszy. Dlatego publiczność 80 metrów od sceny wciąż „widzi uszami” scenę.',
    svg: `<svg viewBox="0 0 ${W} ${H}" class="v-svg" role="img" aria-label="Efekt pierwszeństwa: scena i wieża delay">
      <rect x="20" y="70" width="46" height="100" rx="8" class="v-fill-dim"/>
      <text x="43" y="196" class="v-label" text-anchor="middle">scena</text>
      <rect x="300" y="86" width="34" height="70" rx="6" class="v-fill-dim"/>
      <text x="317" y="196" class="v-label" text-anchor="middle">delay</text>
      <circle cx="540" cy="120" r="16" class="v-stroke" fill="none" stroke-width="3"/>
      <text x="540" y="196" class="v-label" text-anchor="middle">słuchacz</text>
      <path d="M70 120H520" class="v-stroke-accent v-dash-flow" fill="none" stroke-width="3" stroke-dasharray="10 14"/>
      <path d="M340 140H520" class="v-stroke-gold v-dash-flow-slow" fill="none" stroke-width="3" stroke-dasharray="10 14"/>
      <text x="290" y="106" class="v-label-accent" text-anchor="middle">pierwszy — wyznacza kierunek</text>
      <text x="430" y="164" class="v-label-gold" text-anchor="middle">drugi — dodaje głośności</text>
    </svg>`,
  },

  'pochlanianie-predkosc': {
    title: 'Dlaczego wełna przy ścianie nie łapie basu',
    caption: 'Przy twardej ścianie powietrze prawie się nie porusza — napiera, ale nie płynie. Materiał pochłaniający działa tarciem, więc potrzebuje ruchu. Największy ruch jest w odległości ćwierci fali od ściany: dla basu to nawet kilkadziesiąt centymetrów, stąd grube panele i odstęp od ściany.',
    svg: `<svg viewBox="0 0 ${W} ${H}" class="v-svg" role="img" aria-label="Rozkład prędkości cząsteczek przy ścianie">
      <rect x="20" y="30" width="26" height="180" rx="4" class="v-fill-dim"/>
      <text x="33" y="226" class="v-label" text-anchor="middle">ściana</text>
      <path d="M46 120 Q 200 20 360 120 Q 460 190 560 120" class="v-stroke-accent" fill="none" stroke-width="3"/>
      <line x1="46" y1="120" x2="600" y2="120" class="v-stroke-dim" stroke-dasharray="4 6"/>
      <text x="200" y="46" class="v-label-accent">prędkość cząsteczek</text>
      <g class="v-pulse-soft">
        <rect x="150" y="58" width="90" height="124" rx="8" class="v-fill-gold" opacity=".18"/>
        <text x="195" y="200" class="v-label-gold" text-anchor="middle">tu pracuje wełna</text>
      </g>
      <text x="90" y="200" class="v-label-red" text-anchor="middle">tu nie działa</text>
      <text x="196" y="52" class="v-label-gold" text-anchor="middle">λ/4</text>
    </svg>`,
  },

  'mody-pomieszczenia': {
    title: 'Mody: pokój ma swoje ulubione dźwięki',
    caption: 'Między dwiema ścianami fala odbija się tam i z powrotem i sama w siebie trafia. Powstaje fala stojąca: w jednych miejscach bas jest dudniący, w innych znika. Przesunięcie krzesła o metr potrafi zmienić bas bardziej niż godzina korekcji.',
    svg: `<svg viewBox="0 0 ${W} ${H}" class="v-svg" role="img" aria-label="Fala stojąca między ścianami">
      <rect x="30" y="30" width="20" height="170" rx="4" class="v-fill-dim"/>
      <rect x="570" y="30" width="20" height="170" rx="4" class="v-fill-dim"/>
      <path d="M50 115 Q 310 10 570 115" class="v-stroke-accent v-breathe" fill="none" stroke-width="3"/>
      <path d="M50 115 Q 310 220 570 115" class="v-stroke-accent v-breathe" fill="none" stroke-width="3" opacity=".5"/>
      <line x1="50" y1="115" x2="570" y2="115" class="v-stroke-dim" stroke-dasharray="4 6"/>
      <circle cx="310" cy="115" r="7" class="v-fill-gold"/>
      <text x="310" y="150" class="v-label-gold" text-anchor="middle">maksimum ciśnienia</text>
      <text x="150" y="215" class="v-label" text-anchor="middle">tu basu jest dużo</text>
      <text x="470" y="215" class="v-label" text-anchor="middle">tu basu brakuje</text>
    </svg>`,
  },

  'kierunkowosc-pasma': {
    title: 'Jeden głośnik, trzy różne „latarki”',
    caption: 'Ta sama skrzynia świeci wąsko w górze pasma, szerzej w środku i prawie dookoła w basie. Dlatego stojąc za kolumną słyszysz bas, ale nie słyszysz blachy — i dlatego samo „wycelowanie” działa tylko dla wysokich częstotliwości.',
    svg: `<svg viewBox="0 0 620 260" class="v-svg" role="img" aria-label="Kąt pokrycia głośnika w trzech pasmach">
      <g transform="translate(120,130)">
        <path d="M0 0 L470 -150 A492 492 0 0 1 470 150 Z" class="v-fill-accent" opacity=".10"/>
        <path d="M0 0 L470 -80 A477 477 0 0 1 470 80 Z" class="v-fill-accent" opacity=".18"/>
        <path d="M0 0 L470 -26 A470 470 0 0 1 470 26 Z" class="v-fill-accent" opacity=".38"/>
        <rect x="-40" y="-30" width="40" height="60" rx="6" class="v-fill-dim"/>
      </g>
      <text x="600" y="34" class="v-label" text-anchor="end">100 Hz — prawie dookoła</text>
      <text x="600" y="132" class="v-label-accent" text-anchor="end">1 kHz — szeroko</text>
      <text x="600" y="240" class="v-label-white" text-anchor="end">8 kHz — wąska wiązka</text>
    </svg>`,
  },

  'zakres-odleglosci': {
    title: 'Zakres odległości: skąd bierze się różnica głośności',
    caption: 'Jeśli pierwszy rząd jest 5 m od systemu, a ostatni 50 m, to sam dystans robi 20 dB różnicy. Zadaniem projektu jest wyrównanie większości tej różnicy — przez kąty, krzywiznę i dodatkowe subsystemy, a nie przez podkręcanie poziomu.',
    svg: `<svg viewBox="0 0 620 220" class="v-svg" role="img" aria-label="Różnica poziomu między pierwszym a ostatnim rzędem">
      <rect x="20" y="60" width="40" height="90" rx="6" class="v-fill-dim"/>
      <text x="40" y="172" class="v-label" text-anchor="middle">system</text>
      <line x1="64" y1="105" x2="590" y2="105" class="v-stroke-dim"/>
      ${[[150, '5 m', '0 dB'], [300, '15 m', '−10 dB'], [450, '30 m', '−16 dB'], [575, '50 m', '−20 dB']]
        .map(([x, d, l]) => `<g><circle cx="${x}" cy="105" r="6" class="v-fill-accent"/><text x="${x}" y="88" class="v-label" text-anchor="middle">${d}</text><text x="${x}" y="134" class="v-label-white" text-anchor="middle">${l}</text></g>`).join('')}
      <text x="310" y="200" class="v-label" text-anchor="middle">każde podwojenie odległości to −6 dB</text>
    </svg>`,
  },

  'dlugosc-linii': {
    title: 'O kierunkowości w basie decyduje długość linii',
    caption: 'Dołożenie skrzyń w tym samym odcinku daje więcej decybeli, ale ten sam kąt. Rozciągnięcie tej samej liczby skrzyń na dłuższym odcinku zwęża wiązkę. W basie kierunkowość robi długość szeregu, a nie liczba pudeł.',
    svg: `<svg viewBox="0 0 620 240" class="v-svg" role="img" aria-label="Wpływ długości linii subwooferów na kąt pokrycia">
      ${[[60, 3, 34, 92, 'krótka linia'], [250, 6, 34, 92, 'więcej skrzyń, ta sama długość'], [440, 3, 60, 42, 'ta sama liczba, dłuższa linia']]
        .map(([x, n, gap, ang, label]) => `<g>
          ${Array.from({ length: n }, (_, i) => `<rect x="${x - 16}" y="${40 + i * (gap * 3 / n)}" width="32" height="${(gap * 3 / n) - 6}" rx="3" class="v-fill-accent" opacity=".85"/>`).join('')}
          <path d="M${x + 20} 100 L${x + 130} ${100 - ang} L${x + 130} ${100 + ang} Z" class="v-fill-accent" opacity=".16"/>
          <text x="${x + 20}" y="${212}" class="v-label" text-anchor="middle">${label}</text>
        </g>`).join('')}
      <text x="310" y="234" class="v-label-gold" text-anchor="middle">ten sam kąt ⟵ ta sama długość ⟶ węższy kąt przy dłuższej linii</text>
    </svg>`,
  },

  'kardioida-subow': {
    title: 'Kardioida: głośno do przodu, cicho na scenę',
    caption: 'Jedna skrzynia stoi bliżej publiczności, druga dalej (albo tyłem). Opóźnienie ustawia się tak, żeby z przodu fale się dodawały, a z tyłu spotykały w przeciwfazie i wygaszały. Efekt: perkusista i mikrofony na scenie dostają kilkanaście decybeli mniej basu.',
    svg: `<svg viewBox="0 0 620 250" class="v-svg" role="img" aria-label="Zasada działania kardioidalnego układu subwooferów">
      <text x="310" y="22" class="v-label" text-anchor="middle">widok z góry</text>
      <path d="M310 120 m-95 0 a95 95 0 1 0 190 0 a95 95 0 1 0 -190 0" class="v-fill-accent" opacity=".07"/>
      <path d="M310 120 C 430 30, 560 70, 560 120 C 560 170, 430 210, 310 120 Z" class="v-fill-accent" opacity=".3"/>
      <rect x="250" y="96" width="34" height="48" rx="5" class="v-fill-dim"/>
      <rect x="292" y="96" width="34" height="48" rx="5" class="v-fill-accent" opacity=".9"/>
      <text x="420" y="120" class="v-label-white" text-anchor="middle">publiczność: fale się dodają</text>
      <text x="170" y="120" class="v-label-red" text-anchor="middle">scena: wygaszenie</text>
      <text x="267" y="176" class="v-label" text-anchor="middle">skrzynia tylna</text>
      <text x="309" y="196" class="v-label-accent" text-anchor="middle">skrzynia przednia (opóźniona)</text>
      <text x="310" y="238" class="v-label-gold" text-anchor="middle">rozstaw ok. ćwierci długości fali częstotliwości projektowej</text>
    </svg>`,
  },

  'celowanie-tablicy': {
    title: 'Osie skrzyń trafiają w widownię w równych odstępach',
    caption: 'Kąty dobiera się tak, żeby punkty trafienia osi kolejnych skrzyń były równomiernie rozłożone od ostatniego do pierwszego rzędu. Górne skrzynie muszą „przestrzelić” ostatni rząd o mniej więcej dwie sztuki — inaczej najdalsze miejsca wypadają na skraju wiązki i tracą górę pasma.',
    svg: `<svg viewBox="0 0 620 250" class="v-svg" role="img" aria-label="Rozkład osi skrzyń tablicy na widowni">
      <line x1="60" y1="206" x2="600" y2="188" class="v-stroke-dim" stroke-width="2"/>
      <text x="330" y="232" class="v-label" text-anchor="middle">widownia: ostatni rząd po prawej</text>
      ${Array.from({ length: 8 }, (_, i) => {
        const y = 30 + i * 13;
        const targets = [640, 560, 470, 390, 320, 250, 185, 125];
        const tx = targets[i];
        const over = i < 2;
        return `<rect x="66" y="${y}" width="44" height="10" rx="2" class="${over ? 'v-fill-gold' : 'v-fill-accent'}" opacity=".9" transform="rotate(${1 + i * 2.4} 88 ${y + 5})"/>
          <path d="M112 ${y + 5} L ${tx} ${196 - (tx - 125) * 0.033}" class="${over ? 'v-stroke-gold' : 'v-stroke-accent'}" stroke-width="1.2" opacity=".55" fill="none"/>
          ${tx <= 600 ? `<circle cx="${tx}" cy="${196 - (tx - 125) * 0.033}" r="3.5" class="v-fill-accent"/>` : ''}`;
      }).join('')}
      <text x="120" y="24" class="v-label-gold">2 skrzynie „przestrzału” ponad ostatni rząd</text>
    </svg>`,
  },

  'fill-geometria': {
    title: 'Gdzie postawić fill, żeby czas się trzymał',
    caption: 'Fill na tylnej ścianie gra słuchaczom w plecy: idąc w głąb sali, oddalasz się od systemu głównego i jednocześnie zbliżasz do fillu, więc różnica czasu zmienia się błyskawicznie i wyrównanie działa tylko w jednym punkcie. Fill zawieszony z przodu, celujący w tył, zmienia tę różnicę powoli — wyrównanie trzyma się na całym obszarze.',
    svg: `<svg viewBox="0 0 620 250" class="v-svg" role="img" aria-label="Porównanie ustawienia fillu z tyłu i z przodu strefy">
      <text x="12" y="20" class="v-label-red">źle: fill za plecami</text>
      <rect x="14" y="44" width="20" height="40" rx="4" class="v-fill-dim"/>
      <line x1="34" y1="64" x2="250" y2="64" class="v-stroke-accent" stroke-width="2" stroke-dasharray="7 6"/>
      <rect x="256" y="44" width="16" height="40" rx="4" class="v-fill-red"/>
      <line x1="256" y1="84" x2="120" y2="96" class="v-stroke-red" stroke-width="2" stroke-dasharray="7 6"/>
      ${[110, 150, 190, 226].map((x) => `<circle cx="${x}" cy="100" r="7" class="v-stroke" fill="none" stroke-width="2"/>`).join('')}
      <text x="168" y="126" class="v-label-red" text-anchor="middle">różnica czasu zmienia się gwałtownie</text>

      <text x="332" y="20" class="v-label-accent">dobrze: fill z przodu strefy</text>
      <rect x="334" y="44" width="20" height="40" rx="4" class="v-fill-dim"/>
      <line x1="354" y1="64" x2="470" y2="64" class="v-stroke-accent" stroke-width="2" stroke-dasharray="7 6"/>
      <rect x="474" y="34" width="16" height="30" rx="4" class="v-fill-accent"/>
      <line x1="482" y1="64" x2="580" y2="94" class="v-stroke-accent" stroke-width="2" stroke-dasharray="7 6"/>
      ${[506, 538, 570].map((x) => `<circle cx="${x}" cy="100" r="7" class="v-stroke" fill="none" stroke-width="2"/>`).join('')}
      <text x="500" y="126" class="v-label-accent" text-anchor="middle">oba źródła oddalają się razem</text>

      <text x="310" y="176" class="v-label" text-anchor="middle">im wolniej zmienia się różnica czasu między źródłami,</text>
      <text x="310" y="196" class="v-label" text-anchor="middle">tym większy obszar obsłuży jedna decyzja o opóźnieniu</text>
    </svg>`,
  },

  'strefy-odpowiedzialnosci': {
    title: 'Każdy subsystem ma swój rewir',
    caption: 'Front fill obsługuje pierwsze rzędy, tablica główna środek widowni, wieża delay tyły. W swoim rewirze ustawiasz poziom i barwę. Na styku dwóch rewirów — tam, gdzie oba grają równie głośno — ustawiasz czas. Poza stykiem jeden system dominuje i sumowanie przestaje być groźne.',
    svg: `<svg viewBox="0 0 620 230" class="v-svg" role="img" aria-label="Strefy odpowiedzialności subsystemów i szwy między nimi">
      <line x1="20" y1="170" x2="600" y2="170" class="v-stroke-dim" stroke-width="2"/>
      <rect x="24" y="96" width="26" height="60" rx="5" class="v-fill-dim"/>
      <text x="37" y="190" class="v-label" text-anchor="middle">scena</text>
      <rect x="60" y="60" width="118" height="100" rx="8" class="v-fill-accent" opacity=".14"/>
      <rect x="186" y="60" width="222" height="100" rx="8" class="v-fill-accent" opacity=".26"/>
      <rect x="416" y="60" width="176" height="100" rx="8" class="v-fill-gold" opacity=".2"/>
      <text x="119" y="115" class="v-label-white" text-anchor="middle">front fill</text>
      <text x="297" y="115" class="v-label-white" text-anchor="middle">tablica główna</text>
      <text x="504" y="115" class="v-label-white" text-anchor="middle">wieża delay</text>
      <line x1="182" y1="46" x2="182" y2="176" class="v-stroke-gold" stroke-dasharray="5 5" stroke-width="2"/>
      <line x1="412" y1="46" x2="412" y2="176" class="v-stroke-gold" stroke-dasharray="5 5" stroke-width="2"/>
      <text x="182" y="38" class="v-label-gold" text-anchor="middle">szew</text>
      <text x="412" y="38" class="v-label-gold" text-anchor="middle">szew</text>
      <text x="310" y="212" class="v-label" text-anchor="middle">w rewirze: poziom i barwa · na szwie: czas</text>
    </svg>`,
  },

  'zonowanie-tablicy': {
    title: 'Zonowanie tablicy i cieniowanie góry pasma',
    caption: 'Skrzynie grupuje się według tego, w jaki fragment widowni celują. Górne rzucają najdalej, więc tracą najwięcej wysokich na absorpcji powietrza — dostają podbicie. Dolne grają blisko i są za jasne — dostają obniżenie. Skoki między strefami wygładza się, rozkładając korektę na sąsiednie skrzynie.',
    svg: `<svg viewBox="0 0 620 250" class="v-svg" role="img" aria-label="Podział tablicy na strefy z cieniowaniem wysokich częstotliwości">
      ${[['A', 4, '+3 dB', '#2de2c0'], ['B', 4, '+2 dB', '#5aa9ff'], ['C', 3, '−1 dB', '#ffc857'], ['D', 4, '−4 dB', '#ff8a3d']]
        .reduce((acc, [z, n, v, col]) => {
          const start = acc.i;
          for (let k = 0; k < n; k++) {
            const y = 20 + (start + k) * 14;
            acc.out += `<rect x="70" y="${y}" width="52" height="11" rx="2" fill="${col}" opacity=".85" transform="rotate(${2 + (start + k) * 1.6} 96 ${y + 5})"/>`;
          }
          const midY = 20 + (start + n / 2) * 14;
          acc.out += `<text x="180" y="${midY}" class="v-label-white">strefa ${z}</text><text x="250" y="${midY}" class="v-label">korekta HF ${v}</text>`;
          acc.out += `<path d="M150 ${midY - 4} L 380 ${midY - 4 + (start - 5) * 9}" stroke="${col}" stroke-width="1.4" opacity=".35" fill="none"/>`;
          acc.i = start + n;
          return acc;
        }, { out: '', i: 0 }).out}
      <line x1="392" y1="46" x2="600" y2="206" class="v-stroke-dim" stroke-width="2"/>
      <text x="520" y="130" class="v-label" text-anchor="middle">widownia</text>
      <text x="330" y="238" class="v-label-gold" text-anchor="middle">skoki między strefami wygładzamy, rozkładając korektę na sąsiednie skrzynie</text>
    </svg>`,
  },

  'pokrycie-tablicy': {
    title: 'Podwieszona tablica: góra rzuca daleko, dół blisko',
    caption: 'Elementy u góry stoją niemal płasko i wspólnie obsługują najdalsze rzędy — dlatego jest ich więcej i mają małe kąty między sobą. Im niżej, tym kąty większe, bo publiczność jest coraz bliżej i jedna skrzynia w zupełności wystarcza. Dzięki tej narastającej krzywiźnie poziom na ostatnim rzędzie jest zbliżony do tego w środku widowni.',
    svg: (() => {
      const bw = 62, bh = 13, n = 11;
      const splays = [0.8, 0.8, 1.2, 1.6, 2, 2.6, 3.2, 4, 4.8, 5.6];
      let x = 96, y = 44, ang = 3;
      const boxes = [];
      const rays = [];
      const floorY = 214, floorX0 = 150, floorX1 = 604;
      for (let i = 0; i < n; i++) {
        const rad = (ang * Math.PI) / 180;
        boxes.push(`<rect x="${(x - bw / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${bw}" height="${bh - 1.5}" rx="2.5"
          class="v-fill-accent" opacity="${(0.95 - i * 0.045).toFixed(2)}"
          transform="rotate(${ang.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`);
        const cx = x + (bw / 2) * Math.cos(rad), cy = y + (bw / 2) * Math.sin(rad);
        const t = Math.min(1, (floorY - cy) / Math.max(0.2, Math.sin(rad)) / 620);
        const len = 120 + (1 - i / n) * 420;
        rays.push(`<path d="M${cx.toFixed(1)} ${cy.toFixed(1)} L${(cx + len * Math.cos(rad)).toFixed(1)} ${(cy + len * Math.sin(rad)).toFixed(1)}"
          class="v-stroke-accent v-ray" fill="none" stroke-width="1.4" opacity="${(0.5 - i * 0.02).toFixed(2)}" style="animation-delay:${(i * 0.12).toFixed(2)}s"/>`);
        void t;
        const s = splays[i] || 8;
        x += bh * Math.sin(rad);
        y += bh * Math.cos(rad);
        ang += s;
      }
      return `<svg viewBox="0 0 620 250" class="v-svg" role="img" aria-label="Uproszczona tablica liniowa z narastającą krzywizną">
        <rect x="60" y="24" width="76" height="9" rx="3" class="v-fill-dim"/>
        <line x1="98" y1="10" x2="98" y2="24" class="v-stroke-dim" stroke-width="3"/>
        <text x="98" y="18" class="v-label" text-anchor="end">rama</text>
        ${rays.join('')}
        ${boxes.join('')}
        <line x1="${floorX0}" y1="${floorY}" x2="${floorX1}" y2="${floorY - 8}" class="v-stroke-dim" stroke-width="2"/>
        <text x="200" y="236" class="v-label">pierwsze rzędy</text>
        <text x="596" y="236" class="v-label" text-anchor="end">ostatni rząd</text>
        <text x="300" y="56" class="v-label-gold">małe kąty u góry — wspólny rzut na daleko</text>
        <text x="20" y="188" class="v-label-gold">duże kąty na dole</text>
        <text x="20" y="206" class="v-label" >— bliskie rzędy</text>
      </svg>`;
    })(),
  },
};
