import * as S from '../store.js';
import { icon, esc, shuffle, confetti } from '../ui.js';

export function review(el) {
  const due = S.dueCards();
  const total = Object.keys(S.state.cards).length;
  const boxes = [0, 1, 2, 3, 4, 5, 6].map((b) => Object.values(S.state.cards).filter((c) => c.box === b).length);
  const labels = ['nowe', '1 dzień', '3 dni', '7 dni', '14 dni', '30 dni', '60 dni'];

  el.innerHTML = `
  <section class="page narrow">
    <div class="page-head">
      <div><span class="eyebrow">Powtórki</span><h1>Karty do powtórki</h1>
      <p class="muted">System Leitnera: każda poprawna odpowiedź wydłuża przerwę (1 → 3 → 7 → 14 → 30 → 60 dni), błędna wraca na jutro. Karty powstają z rozwiązanych quizów — kilka minut dziennie utrwala wiedzę na lata.</p></div>
    </div>
    <div class="card boxes">
      ${boxes.map((n, i) => `<div class="box"><div class="box-col"><span style="height:${total ? (n / Math.max(...boxes, 1)) * 100 : 0}%"></span></div><b class="num">${n}</b><small>${labels[i]}</small></div>`).join('')}
    </div>
    <div id="deck"></div>
  </section>`;

  const deck = el.querySelector('#deck');
  if (!total) {
    deck.innerHTML = `<div class="card empty">${icon('review')}<h3>Brak kart</h3><p class="muted">Rozwiąż quiz w dowolnej lekcji — jego pytania staną się kartami do powtórek.</p><a class="btn primary" href="#/path">Przejdź do ścieżki</a></div>`;
    return;
  }
  if (!due.length) {
    const nextDue = Object.values(S.state.cards).map((c) => c.due).sort()[0];
    deck.innerHTML = `<div class="card empty">${icon('check')}<h3>Na dziś wszystko powtórzone</h3><p class="muted">Kolejne karty: ${new Date(nextDue + 'T12:00').toLocaleDateString('pl-PL', { weekday: 'long', day: 'numeric', month: 'long' })}.</p></div>`;
    return;
  }

  const session = shuffle(due).slice(0, 20);
  let i = 0, ok = 0;

  const show = () => {
    if (i >= session.length) {
      confetti(50);
      deck.innerHTML = `<div class="card empty">${icon('award')}<h3>Sesja ukończona</h3><p class="muted">${ok} z ${session.length} zapamiętanych. ${due.length > session.length ? `Zostało jeszcze ${due.length - session.length} kart.` : ''}</p><button class="btn primary" data-again>Odśwież</button></div>`;
      deck.querySelector('[data-again]').addEventListener('click', () => review(el));
      return;
    }
    const data = S.cardData(session[i]);
    if (!data) { i++; show(); return; }
    const { topic, q } = data;
    deck.innerHTML = `
      <div class="deck-meta small muted"><span>Karta ${i + 1} z ${session.length}</span><span>${esc(topic.ch.short)} · ${esc(topic.title)}</span></div>
      <div class="flip" style="--c:${topic.ch.color}" tabindex="0" role="button" aria-label="Odwróć kartę">
        <div class="flip-in">
          <div class="face front"><span class="eyebrow">Pytanie</span><h2>${esc(q.q)}</h2><span class="small muted hint">Odpowiedz w myślach, potem stuknij, by odwrócić</span></div>
          <div class="face back"><span class="eyebrow">Odpowiedź</span><h2>${esc(q.a[q.c])}</h2><p class="muted">${esc(q.e || '')}</p></div>
        </div>
      </div>
      <div class="grade" hidden>
        <button class="btn bad" data-g="0">${icon('x')} Nie pamiętam</button>
        <button class="btn good" data-g="1">${icon('check')} Pamiętam</button>
      </div>`;
    const card = deck.querySelector('.flip');
    const flip = () => {
      if (card.classList.contains('flipped') || card.classList.contains('turning')) return;
      card.classList.add('turning');
      setTimeout(() => { card.classList.add('flipped'); card.classList.remove('turning'); deck.querySelector('.grade').hidden = false; }, 220);
    };
    card.addEventListener('click', flip);
    card.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
    deck.querySelectorAll('[data-g]').forEach((b) => b.addEventListener('click', () => {
      const good = b.dataset.g === '1';
      if (good) ok++;
      S.gradeCard(session[i], good);
      i++;
      show();
    }));
  };
  show();
}
