import { CHAPTERS } from '../../data/curriculum.js';
import * as S from '../store.js';
import { icon, esc, bar, starsHTML } from '../ui.js';

const W = 360, GAP = 122, TOP = 92, AMP = 84;

function layout(n, ci) {
  const pts = Array.from({ length: n }, (_, i) => ({ x: W / 2 + AMP * Math.sin(i * 1.15 + ci * 1.7), y: TOP + i * GAP }));
  const H = TOP + (n - 1) * GAP + 70;
  return { pts, H };
}

const seg = (a, b) => `M${a.x.toFixed(1)} ${a.y} C${a.x.toFixed(1)} ${a.y + GAP * 0.55} ${b.x.toFixed(1)} ${b.y - GAP * 0.55} ${b.x.toFixed(1)} ${b.y}`;

export function path(el) {
  const all = S.allTopics();
  const total = Math.round(all.reduce((a, t) => a + S.topicPct(t), 0) / all.length);
  const next = S.nextTopic();
  let animIndex = 0;

  el.innerHTML = `
  <section class="page path-page">
    <div class="page-head">
      <div><span class="eyebrow">Mapa postępu</span><h1>Ścieżka System Engineera</h1>
      <p class="muted">Od fizyki dźwięku do systemów immersyjnych. Każdy węzeł to lekcja — gwiazdki: teoria, quiz, praktyka.</p></div>
      <div class="path-total"><b class="num">${total}%</b>${bar(total)}<span class="small muted">całej ścieżki</span></div>
    </div>

    ${CHAPTERS.map((ch, ci) => {
      const open = S.chapterUnlocked(ch);
      const pct = S.chapterPct(ch);
      const { pts, H } = layout(ch.topics.length, ci);
      const cert = S.state.certs[ch.id];
      return `
      <div class="world ${open ? '' : 'locked'}" style="--c:${ch.color}">
        <div class="world-banner">
          <div class="wb-icon">${icon(open ? ch.icon : 'lock')}</div>
          <div class="wb-body">
            <span class="eyebrow">Moduł ${ci + 1}${cert ? ' · 🎓 certyfikat' : ''}</span>
            <h2>${esc(ch.title)}</h2>
            <div class="wb-bar">${bar(pct, ch.color)}<span class="small num">${pct}%</span></div>
          </div>
          ${open
            ? `<a class="btn ghost sm" href="#/course/${ch.id}">Kurs ${icon('right')}</a>`
            : `<a class="btn ghost sm" href="#/exam/${ch.id}" title="Zdaj test, aby odblokować moduł">Test ${icon('bolt')}</a>`}
        </div>
        <div class="trail" style="aspect-ratio:${W}/${H}">
          <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            ${pts.slice(1).map((p, i) => {
              const a = ch.topics[i], b = ch.topics[i + 1];
              const doneSeg = S.stars(a) >= 1 && S.topicUnlocked(b);
              const d = seg(pts[i], p);
              const delay = (animIndex++ * 0.07).toFixed(2);
              return `<path class="seg-bg" d="${d}"/>
                ${doneSeg ? `<path class="seg-on" pathLength="100" d="${d}" style="animation-delay:${delay}s"/><path class="seg-flow" pathLength="100" d="${d}"/>` : ''}`;
            }).join('')}
          </svg>
          ${ch.topics.map((t, i) => {
            const p = pts[i];
            const unlocked = S.topicUnlocked({ ...t, ch });
            const s = S.stars(t);
            const pctT = S.topicPct(t);
            const isNext = next && next.id === t.id;
            const stateCls = !unlocked ? 'locked' : s >= 3 ? 'gold' : S.topicDone(t) ? 'done' : pctT > 0 ? 'progress' : 'open';
            const side = p.x <= W / 2 ? 'right' : 'left';
            return `
            <div class="node-wrap ${side}" style="left:${(p.x / W) * 100}%;top:${(p.y / H) * 100}%;animation-delay:${(i * 0.06 + ci * 0.02).toFixed(2)}s">
              ${isNext ? `<span class="bubble">${pctT > 0 ? 'Dalej' : 'Start'}</span>` : ''}
              <a class="node ${stateCls} ${isNext ? 'current' : ''}" ${unlocked ? `href="#/lesson/${t.id}/0"` : 'aria-disabled="true"'} style="--p:${pctT}" aria-label="${esc(t.title)}">
                <span class="node-in">${!unlocked ? icon('lock') : S.topicDone(t) ? icon('check') : `<b>${i + 1}</b>`}</span>
              </a>
              <div class="node-label">
                <b>${esc(t.title)}</b>
                ${unlocked ? starsHTML(s) : '<span class="small muted">zablokowane</span>'}
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>`;
    }).join('')}
    <div class="finish card"><span class="medal big">👑</span><div><h3>Master of Coherence</h3><p class="muted">Zdobądź wszystkie ${CHAPTERS.length} certyfikatów modułów.</p></div></div>
  </section>`;

  el.querySelectorAll('.node[aria-disabled]').forEach((n) => n.addEventListener('click', (e) => {
    e.preventDefault();
    n.classList.remove('shake'); void n.offsetWidth; n.classList.add('shake');
  }));

  requestAnimationFrame(() => {
    const cur = el.querySelector('.node.current');
    if (cur && S.allTopics().some((t) => S.topicPct(t) > 0)) cur.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });
}
