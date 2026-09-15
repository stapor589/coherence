import * as S from '../store.js';
import { icon, esc, fmt } from '../ui.js';

const c = (T) => 331.3 + 0.606 * T;
const log10 = Math.log10;

// Kalkulatory Warsztatu: pola wejściowe + funkcja licząca wyniki.
const TOOLS = [
  {
    id: 'delay', icon: 'clock', title: 'Czas przelotu i delay', mod: 'Fizyka · Strojenie',
    inputs: [['d', 'Odległość', 'm', 60], ['T', 'Temperatura', '°C', 20]],
    calc: ({ d, T }) => [
      ['Prędkość dźwięku', fmt(c(T), 1), 'm/s'],
      ['Opóźnienie', fmt((d / c(T)) * 1000, 2), 'ms'],
      ['Próbki @48 kHz', fmt((d / c(T)) * 48000, 0), ''],
      ['Zmiana przy −10°C', `+${fmt((d / c(T - 10) - d / c(T)) * 1000, 2)}`, 'ms'],
    ],
  },
  {
    id: 'wave', icon: 'wave', title: 'Długość fali i faza', mod: 'Fizyka',
    inputs: [['f', 'Częstotliwość', 'Hz', 100], ['dt', 'Opóźnienie', 'ms', 1], ['T', 'Temperatura', '°C', 20]],
    calc: ({ f, dt, T }) => {
      const l = c(T) / f;
      const ph = ((360 * f * dt) / 1000) % 360;
      return [['λ', fmt(l, 3), 'm'], ['λ/2 · λ/4', `${fmt(l / 2, 2)} · ${fmt(l / 4, 2)}`, 'm'], ['Okres', fmt(1000 / f, 2), 'ms'], ['Przesunięcie fazy', fmt(ph, 0), '°']];
    },
  },
  {
    id: 'spl', icon: 'speaker', title: 'Spadek SPL z odległością', mod: 'Kierunkowość',
    inputs: [['L', 'SPL w punkcie odniesienia', 'dB', 100], ['d1', 'Odległość odniesienia', 'm', 10], ['d2', 'Odległość docelowa', 'm', 40]],
    calc: ({ L, d1, d2 }) => [
      ['Źródło punktowe (−6 dB/2×)', fmt(L - 20 * log10(d2 / d1), 1), 'dB'],
      ['Źródło liniowe (−3 dB/2×)', fmt(L - 10 * log10(d2 / d1), 1), 'dB'],
      ['Różnica punktowe', fmt(-20 * log10(d2 / d1), 1), 'dB'],
    ],
  },
  {
    id: 'sum', icon: 'analyzer', title: 'Sumowanie dwóch źródeł', mod: 'Fizyka',
    inputs: [['a', 'Poziom A', 'dB', 94], ['b', 'Poziom B', 'dB', 90]],
    calc: ({ a, b }) => {
      const pa = 10 ** (a / 20), pb = 10 ** (b / 20);
      return [
        ['Niekoherentne (energia)', fmt(10 * log10(10 ** (a / 10) + 10 ** (b / 10)), 2), 'dB'],
        ['Koherentne w fazie', fmt(20 * log10(pa + pb), 2), 'dB'],
        ['Ripple: szczyt / dołek', `+${fmt(20 * log10((pa + pb) / Math.max(pa, pb)), 1)} / ${Math.abs(a - b) < 0.01 ? '−∞' : fmt(20 * log10(Math.abs(pa - pb) / Math.max(pa, pb)), 1)}`, 'dB'],
      ];
    },
  },
  {
    id: 'comb', icon: 'wave', title: 'Filtr grzebieniowy', mod: 'Fizyka · Pomiar',
    inputs: [['dd', 'Różnica dróg', 'm', 0.69], ['T', 'Temperatura', '°C', 20]],
    calc: ({ dd, T }) => {
      const dt = dd / c(T);
      const n = [0, 1, 2, 3, 4].map((k) => fmt((2 * k + 1) / (2 * dt), 0)).join(', ');
      return [['Δt', fmt(dt * 1000, 2), 'ms'], ['Pierwsze wycięcie', fmt(1 / (2 * dt), 0), 'Hz'], ['Odstęp wycięć', fmt(1 / dt, 0), 'Hz'], ['Wycięcia', n, 'Hz']];
    },
  },
  {
    id: 'sub', icon: 'speaker', title: 'Suby: end-fire i gradient', mod: 'Kierunkowość',
    inputs: [['f', 'Częstotliwość projektowa', 'Hz', 63], ['s', 'Rozstaw rzędów / głębokość', 'm', 1.36], ['T', 'Temperatura', '°C', 20]],
    calc: ({ f, s, T }) => [
      ['Rozstaw λ/4 dla f', fmt(c(T) / f / 4, 2), 'm'],
      ['End-fire: opóźnij przedni rząd', fmt((s / c(T)) * 1000, 2), 'ms'],
      ['Gradient: tylny element', `${fmt((s / c(T)) * 1000, 2)} ms + polaryzacja`, ''],
      ['Max rozstaw w linii (λ/2 @ f)', fmt(c(T) / f / 2, 2), 'm'],
    ],
  },
  {
    id: 'cable', icon: 'bolt', title: 'Straty w kablu głośnikowym', mod: 'Elektroakustyka',
    inputs: [['L', 'Długość (w jedną stronę)', 'm', 50], ['A', 'Przekrój', 'mm²', 4], ['Z', 'Impedancja obciążenia', 'Ω', 4]],
    calc: ({ L, A, Z }) => {
      const R = (0.0175 * 2 * L) / A;
      return [['Rezystancja pętli', fmt(R, 3), 'Ω'], ['Straty poziomu', fmt(20 * log10(Z / (Z + R)), 2), 'dB'], ['Strata mocy w kablu', fmt((R / (Z + R)) * 100, 1), '%'], ['Damping factor (z kablem)', fmt(Z / R, 1), '']];
    },
  },
  {
    id: 'modes', icon: 'room', title: 'Mody osiowe pomieszczenia', mod: 'Akustyka',
    inputs: [['Lx', 'Długość', 'm', 40], ['Ly', 'Szerokość', 'm', 25], ['Lz', 'Wysokość', 'm', 12]],
    calc: ({ Lx, Ly, Lz }) => {
      const m = (L) => [1, 2, 3].map((n) => fmt((n * 343) / (2 * L), 1)).join(' · ');
      return [['Długość', m(Lx), 'Hz'], ['Szerokość', m(Ly), 'Hz'], ['Wysokość', m(Lz), 'Hz'], ['Objętość', fmt(Lx * Ly * Lz, 0), 'm³']];
    },
  },
  {
    id: 'rt', icon: 'room', title: 'Pogłos (Sabine) i odl. krytyczna', mod: 'Akustyka',
    inputs: [['V', 'Objętość', 'm³', 12000], ['A', 'Chłonność A', 'm² Sab.', 2400], ['Q', 'Q źródła', '', 10]],
    calc: ({ V, A, Q }) => [
      ['RT60', fmt((0.161 * V) / A, 2), 's'],
      ['Odległość krytyczna', fmt(0.057 * Math.sqrt((Q * V) / ((0.161 * V) / A)), 1), 'm'],
      ['DI źródła', fmt(10 * log10(Q), 1), 'dB'],
    ],
  },
  {
    id: 'levels', icon: 'amp', title: 'Konwersja poziomów', mod: 'Elektroakustyka',
    inputs: [['v', 'Wartość', '', 4], ['u', 'Jednostka', ['dBu', 'dBV', 'V'], 'dBu'], ['fs', '0 dBFS =', 'dBu', 24]],
    calc: ({ v, u, fs }) => {
      const V = u === 'V' ? v : u === 'dBu' ? 0.7746 * 10 ** (v / 20) : 10 ** (v / 20);
      const dBu = 20 * log10(V / 0.7746);
      return [['Napięcie', fmt(V, 3), 'V'], ['dBu', fmt(dBu, 2), ''], ['dBV', fmt(20 * log10(V), 2), ''], ['dBFS', fmt(dBu - fs, 1), '']];
    },
  },
  {
    id: 'power', icon: 'amp', title: 'SPL z czułości i mocy', mod: 'Elektroakustyka',
    inputs: [['sens', 'Czułość (1 W / 1 m)', 'dB', 98], ['P', 'Moc', 'W', 1000], ['d', 'Odległość', 'm', 20]],
    calc: ({ sens, P, d }) => [
      ['SPL na 1 m (teoretycznie)', fmt(sens + 10 * log10(P), 1), 'dB'],
      [`SPL na ${fmt(d, 0)} m`, fmt(sens + 10 * log10(P) - 20 * log10(d), 1), 'dB'],
      ['Napięcie na 8 Ω', fmt(Math.sqrt(P * 8), 1), 'V'],
    ],
  },
];

export function tools(el) {
  const saved = (() => { try { return JSON.parse(localStorage.getItem('coherence.tools') || '{}'); } catch { return {}; } })();

  el.innerHTML = `
  <section class="page">
    <div class="page-head">
      <div><span class="eyebrow">Warsztat</span><h1>Kalkulatory system engineera</h1>
      <p class="muted">Szybkie obliczenia na evencie. Wyniki liczą się na bieżąco, wartości zostają zapamiętane na tym urządzeniu.</p></div>
    </div>
    <div class="tool-grid">
      ${TOOLS.map((t) => `
        <form class="tool card" data-tool="${t.id}" onsubmit="return false">
          <div class="tool-head"><span class="tool-ic">${icon(t.icon)}</span><div><h3>${esc(t.title)}</h3><span class="small muted">${esc(t.mod)}</span></div></div>
          <div class="tool-inputs">
            ${t.inputs.map(([k, label, unit, def]) => {
              const val = saved[t.id]?.[k] ?? def;
              return Array.isArray(unit)
                ? `<label><span>${esc(label)}</span><select name="${k}">${unit.map((o) => `<option ${o === val ? 'selected' : ''}>${o}</option>`).join('')}</select></label>`
                : `<label><span>${esc(label)}</span><span class="inp"><input name="${k}" type="number" step="any" inputmode="decimal" value="${val}"><em>${esc(unit)}</em></span></label>`;
            }).join('')}
          </div>
          <dl class="tool-out"></dl>
        </form>`).join('')}
    </div>
  </section>`;

  el.querySelectorAll('.tool').forEach((form) => {
    const t = TOOLS.find((x) => x.id === form.dataset.tool);
    const out = form.querySelector('.tool-out');
    const run = (user) => {
      const vals = {};
      t.inputs.forEach(([k, , unit]) => { const v = form.elements[k].value; vals[k] = Array.isArray(unit) ? v : parseFloat(String(v).replace(',', '.')); });
      const bad = Object.values(vals).some((v) => typeof v === 'number' && !Number.isFinite(v));
      out.innerHTML = bad ? '<dd class="muted">Uzupełnij wszystkie pola</dd>' : t.calc(vals).map(([l, v, u]) => `<div><dt>${esc(l)}</dt><dd class="num">${v} <small>${esc(u)}</small></dd></div>`).join('');
      if (user) {
        saved[t.id] = vals;
        try { localStorage.setItem('coherence.tools', JSON.stringify(saved)); } catch { /* ignore */ }
        S.useTool(t.id);
      }
    };
    form.addEventListener('input', () => run(true));
    run(false);
  });
}
