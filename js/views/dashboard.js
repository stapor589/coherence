import { CHAPTERS } from '../../data/curriculum.js';
import * as S from '../store.js';
import { icon, esc, ring, bar, starsHTML } from '../ui.js';

export function dashboard(el) {
  const st = S.state;
  const L = S.levelInfo();
  const next = S.nextTopic();
  const topics = S.allTopics();
  const done = topics.filter(S.topicDone).length;
  const certs = Object.keys(st.certs).length;
  const due = S.dueCards().length;
  const goal = st.profile.dailyGoal;
  const todayXP = S.xpToday();
  const streak = S.streak();
  const name = st.profile.name || 'System Engineer';

  // 7 ostatnich dni aktywności
  const days = Array.from({ length: 7 }, (_, i) => S.addDays(S.today(), i - 6));
  const maxDay = Math.max(goal, ...days.map((d) => st.xpLog[d] || 0));
  const dayNames = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb'];

  // Luki: moduły z niską samooceną i niskim postępem
  const gaps = CHAPTERS
    .map((ch) => ({ ch, self: st.profile.self[ch.id] ?? null, pct: S.chapterPct(ch) }))
    .filter((g) => g.self !== null && g.self <= 1 && g.pct < 100)
    .slice(0, 4);

  const inProgress = CHAPTERS.filter((ch) => { const p = S.chapterPct(ch); return p > 0 && p < 100; }).slice(0, 3);
  const recentBadges = S.BADGES.filter((b) => st.badges[b.id]).sort((a, b) => (st.badges[b.id] > st.badges[a.id] ? 1 : -1)).slice(0, 6);

  let continueCard = '';
  if (next) {
    const steps = S.lessonSteps(next);
    const s = st.topics[next.id];
    const read = s ? Object.keys(s.read).length : 0;
    const firstUnread = next.concepts.findIndex((_, i) => !s?.read[i]);
    const stepIdx = firstUnread >= 0 ? (read ? firstUnread + 1 : 0) : steps.findIndex((x) => x.type === 'quiz');
    continueCard = `
      <a class="card continue" href="#/lesson/${next.id}/${stepIdx}" style="--c:${next.ch.color}">
        <div class="continue-icon">${icon(next.ch.icon)}</div>
        <div class="continue-body">
          <span class="eyebrow">${read ? 'Kontynuuj naukę' : 'Następna lekcja'} · Moduł ${next.ci + 1}: ${esc(next.ch.short)}</span>
          <h2>${esc(next.title)}</h2>
          <p class="muted">${esc(next.summary)}</p>
          <div class="continue-meta">${bar(S.topicPct(next), next.ch.color)}<span class="small muted">${S.topicPct(next)}%</span>${starsHTML(S.stars(next))}</div>
        </div>
        <span class="play">${icon('play')}</span>
      </a>`;
  } else {
    continueCard = `<div class="card continue"><div class="continue-body"><span class="eyebrow">Brawo</span><h2>Wszystkie dostępne lekcje ukończone</h2><p class="muted">Zrób egzaminy modułów, powtórki albo odblokuj kolejne moduły.</p></div></div>`;
  }

  el.innerHTML = `
  <section class="page">
    <div class="hero card">
      <div class="hero-main">
        <span class="eyebrow">Pulpit</span>
        <h1>Cześć, ${esc(name)}</h1>
        <div class="rank"><span class="lvl">Poziom ${L.lvl}</span><span class="rank-name">${esc(L.rank)}</span></div>
        <div class="xpline">${bar(L.pct * 100)}<span class="small muted num">${L.into} / ${L.span} XP do poziomu ${L.lvl + 1}</span></div>
      </div>
      <div class="hero-side">
        <div class="goal">${ring(todayXP / goal, { size: 96, stroke: 9, color: todayXP >= goal ? 'var(--gold)' : 'var(--accent)', label: `${todayXP}` })}
          <span class="small muted">cel dnia: ${goal} XP</span></div>
        <div class="streak-big ${streak ? 'on' : ''}">${icon('flame')}<b class="num">${streak}</b><span class="small muted">${streak === 1 ? 'dzień' : 'dni'} serii</span></div>
      </div>
    </div>

    ${continueCard}

    <div class="stats">
      <a class="stat card" href="#/courses"><b class="num">${done}<small>/${topics.length}</small></b><span>ukończonych lekcji</span></a>
      <a class="stat card" href="#/profile"><b class="num">${certs}<small>/${CHAPTERS.length}</small></b><span>certyfikatów</span></a>
      <a class="stat card ${due ? 'hot' : ''}" href="#/review"><b class="num">${due}</b><span>kart do powtórki</span></a>
      <a class="stat card" href="#/log"><b class="num">${st.log.length}</b><span>wpisów w dzienniku</span></a>
    </div>

    <div class="grid2">
      <div class="card">
        <div class="card-head"><h3>Aktywność — 7 dni</h3><span class="small muted num">${days.reduce((a, d) => a + (st.xpLog[d] || 0), 0)} XP</span></div>
        <div class="week">
          ${days.map((d) => {
            const v = st.xpLog[d] || 0;
            return `<div class="day ${d === S.today() ? 'today' : ''}"><div class="col"><span style="height:${(v / maxDay) * 100}%" class="${v >= goal ? 'met' : ''}"></span><i style="bottom:${(goal / maxDay) * 100}%"></i></div><small>${dayNames[new Date(d + 'T12:00').getDay()]}</small></div>`;
          }).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3>${gaps.length ? 'Twoje luki do nadrobienia' : 'Moduły w toku'}</h3><a class="small link" href="#/courses">Wszystkie kursy</a></div>
        <div class="mini-list">
          ${(gaps.length ? gaps.map((g) => g.ch) : inProgress.length ? inProgress : CHAPTERS.slice(0, 3)).map((ch) => `
            <a class="mini" href="#/course/${ch.id}" style="--c:${ch.color}">
              <span class="mini-ic">${icon(ch.icon)}</span>
              <span class="mini-body"><b>${esc(ch.title)}</b>${bar(S.chapterPct(ch), ch.color)}</span>
              <span class="small num muted">${S.chapterPct(ch)}%</span>
            </a>`).join('')}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h3>Ostatnie odznaki</h3><a class="small link" href="#/profile">Wszystkie</a></div>
      ${recentBadges.length
        ? `<div class="badge-row">${recentBadges.map((b) => `<div class="badge on" title="${esc(b.desc)}"><span class="medal">${b.icon}</span><small>${esc(b.name)}</small></div>`).join('')}</div>`
        : `<p class="muted">Jeszcze pusto. Przerób pierwsze zagadnienie, żeby zdobyć odznakę „Pierwszy krok”.</p>`}
    </div>
  </section>`;
}
