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
    title: 'Fala biegnie, powietrze zostaje w miejscu',
    caption: 'Głośnik popycha powietrze. Zagęszczenia (ciemne paski) wędrują do słuchacza, ale pojedyncza cząsteczka powietrza — czerwona kropka — tylko drga w tę i z powrotem, jak korek na wodzie.',
    svg: `<svg viewBox="0 0 ${W} ${H}" class="v-svg" role="img" aria-label="Fala dźwiękowa biegnąca od głośnika do ucha">
      <rect x="18" y="80" width="54" height="80" rx="8" class="v-fill-dim"/>
      <circle cx="45" cy="120" r="18" class="v-fill-accent v-pump"/>
      <g class="v-move-right">
        ${Array.from({ length: 22 }, (_, i) => `<rect x="${90 + i * 56}" y="70" width="${10 + (i % 2) * 6}" height="100" rx="4" class="v-fill-accent" opacity="${i % 2 ? 0.55 : 0.28}"/>`).join('')}
      </g>
      <circle cx="330" cy="120" r="9" class="v-fill-red v-oscillate"/>
      <text x="330" y="196" class="v-label" text-anchor="middle">cząsteczka powietrza drga w miejscu</text>
      <path d="M560 96c14 0 20 10 20 24s-6 24-20 24" class="v-stroke" fill="none" stroke-width="5"/>
      <circle cx="556" cy="120" r="6" class="v-fill-dim"/>
      <text x="45" y="196" class="v-label" text-anchor="middle">głośnik</text>
      <text x="575" y="196" class="v-label" text-anchor="middle">ucho</text>
    </svg>`,
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

  'pokrycie-tablicy': {
    title: 'Line array to schody, nie reflektor',
    caption: 'Górne elementy tablicy są ustawione prawie płasko i celują w dalekie rzędy, dolne są mocno pochylone i obsługują bliskie. Każdy element dostaje swój kawałek widowni — dzięki temu ostatni rząd słyszy podobny poziom co dziesiąty.',
    svg: `<svg viewBox="0 0 ${W} ${H}" class="v-svg" role="img" aria-label="Rozkład kątów w tablicy line array">
      <line x1="40" y1="200" x2="600" y2="200" class="v-stroke-dim" stroke-width="2"/>
      ${Array.from({ length: 6 }, (_, i) => {
        const y = 40 + i * 18;
        const ang = 4 + i * 6;
        const len = 520 - i * 70;
        return `<rect x="60" y="${y}" width="46" height="14" rx="3" class="v-fill-accent" opacity="${0.9 - i * 0.1}" transform="rotate(${ang} 83 ${y + 7})"/>
        <path d="M106 ${y + 7} L ${106 + len} ${y + 7 + len * Math.tan((ang * Math.PI) / 180)}" class="v-stroke-accent v-ray" fill="none" stroke-width="1.5" opacity=".45" style="animation-delay:${i * 0.15}s"/>`;
      }).join('')}
      <text x="470" y="192" class="v-label" text-anchor="middle">daleko: mały kąt, dużo elementów</text>
      <text x="150" y="228" class="v-label" text-anchor="middle">blisko: duży kąt, jeden element</text>
    </svg>`,
  },
};
