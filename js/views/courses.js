import { CHAPTERS, LEVEL_LABEL } from '../../data/curriculum.js';
import * as S from '../store.js';
import { icon, esc, bar, starsHTML, ring, mountQuiz, shuffle, confetti } from '../ui.js';

const minutes = (t) => t.concepts.length * 4 + t.quiz.length + 10;

function status(ch) {
  if (S.state.certs[ch.id]) return ['cert', '🎓 Certyfikat'];
  if (!S.chapterUnlocked(ch)) return ['locked', 'Zablokowany'];
  if (S.chapterDone(ch)) return ['done', 'Lekcje ukończone'];
  if (S.chapterPct(ch) > 0) return ['progress', 'W trakcie'];
  return ['new', 'Nowy'];
}

export function courses(el) {
  const filter = sessionStorage.getItem('courseFilter') || 'all';
  const list = CHAPTERS.map((ch, ci) => ({ ch, ci, st: status(ch)[0] }))
    .filter(({ st }) => filter === 'all' || (filter === 'progress' ? ['progress', 'done'].includes(st) : filter === 'cert' ? st === 'cert' : st === 'new' || st === 'locked'));

  el.innerHTML = `
  <section class="page">
    <div class="page-head">
      <div><span class="eyebrow">Katalog</span><h1>Kursy</h1>
      <p class="muted">${CHAPTERS.length} modułów · ${S.allTopics().length} lekcji · egzamin i certyfikat na końcu każdego modułu.</p></div>
    </div>
    <div class="chips" role="tablist">
      ${[['all', 'Wszystkie'], ['progress', 'W trakcie'], ['new', 'Do zrobienia'], ['cert', 'Z certyfikatem']].map(([k, l]) => `<button class="chip ${filter === k ? 'on' : ''}" data-filter="${k}">${l}</button>`).join('')}
    </div>
    <div class="course-grid">
      ${list.map(({ ch, ci }) => {
        const [cls, label] = status(ch);
        const pct = S.chapterPct(ch);
        const mins = ch.topics.reduce((a, t) => a + minutes(t), 0);
        const levels = [...new Set(ch.topics.map((t) => t.level))].map((l) => LEVEL_LABEL[l]).join(' · ');
        return `
        <a class="course card ${cls}" href="#/course/${ch.id}" style="--c:${ch.color}">
          <div class="course-cover">
            <span class="cover-ic">${icon(ch.icon)}</span>
            <span class="cover-num">${String(ci + 1).padStart(2, '0')}</span>
            <span class="tag ${cls}">${label}</span>
          </div>
          <div class="course-body">
            <h3>${esc(ch.title)}</h3>
            <p class="muted small">${esc(ch.subtitle)}</p>
            <div class="meta small muted">${icon('list')} ${ch.topics.length} lekcji <span>·</span> ${icon('clock')} ~${Math.round(mins / 60 * 10) / 10} h <span>·</span> ${levels}</div>
            <div class="course-bar">${bar(pct, ch.color)}<span class="small num">${pct}%</span></div>
          </div>
        </a>`;
      }).join('') || '<p class="muted">Brak kursów w tym filtrze.</p>'}
    </div>
  </section>`;

  el.querySelectorAll('[data-filter]').forEach((b) => b.addEventListener('click', () => {
    sessionStorage.setItem('courseFilter', b.dataset.filter);
    courses(el);
  }));
}

export function course(el, id) {
  const ch = S.findChapter(id);
  if (!ch) { el.innerHTML = '<section class="page"><p>Nie znaleziono kursu.</p></section>'; return; }
  const ci = CHAPTERS.indexOf(ch);
  const open = S.chapterUnlocked(ch);
  const pct = S.chapterPct(ch);
  const exam = S.state.exams[ch.id];
  const cert = S.state.certs[ch.id];
  const doneCount = ch.topics.filter(S.topicDone).length;

  el.innerHTML = `
  <section class="page">
    <a class="back" href="#/courses">${icon('left')} Kursy</a>
    <div class="course-hero card" style="--c:${ch.color}">
      <div class="ch-ic">${icon(ch.icon)}</div>
      <div class="ch-body">
        <span class="eyebrow">Moduł ${ci + 1}</span>
        <h1>${esc(ch.title)}</h1>
        <p class="muted">${esc(ch.subtitle)}</p>
        <div class="ch-stats small">
          <span>${icon('list')} ${doneCount}/${ch.topics.length} lekcji</span>
          <span>${icon('target')} egzamin: ${exam ? Math.round(exam.best * 100) + '%' : '—'}</span>
          <span>${icon('award')} ${cert ? 'certyfikat zdobyty' : 'certyfikat do zdobycia'}</span>
        </div>
      </div>
      <div class="ch-ring">${ring(pct / 100, { size: 108, stroke: 10, color: ch.color, label: pct + '%' })}</div>
    </div>

    ${open ? '' : `<div class="card notice" style="--c:${ch.color}">${icon('lock')}<div><b>Moduł zablokowany.</b> Ukończ teorię w poprzednim module albo — jeśli znasz temat — zdaj test kwalifikacyjny (min. 80%), żeby od razu odblokować wszystkie lekcje.</div><a class="btn primary" href="#/exam/${ch.id}">Test kwalifikacyjny</a></div>`}

    <h2 class="section-title">Program</h2>
    <ol class="syllabus">
      ${ch.topics.map((t, i) => {
        const un = S.topicUnlocked({ ...t, ch });
        const s = S.stars(t);
        const p = S.topicPct(t);
        return `
        <li class="lesson-row card ${un ? '' : 'locked'} ${S.topicDone(t) ? 'done' : ''}" style="--c:${ch.color}">
          <span class="lr-num">${S.topicDone(t) ? icon('check') : un ? i + 1 : icon('lock')}</span>
          <div class="lr-body">
            <b>${esc(t.title)}</b>
            <span class="small muted">${LEVEL_LABEL[t.level]} · ${t.concepts.length} zagadnień · quiz ${t.quiz.length} pyt. · ~${minutes(t)} min</span>
            ${bar(p, ch.color)}
          </div>
          <div class="lr-side">${starsHTML(s)}
            ${un ? `<a class="btn ${p > 0 ? 'ghost' : 'primary'} sm" href="#/lesson/${t.id}/0">${p >= 100 ? 'Powtórz' : p > 0 ? 'Kontynuuj' : 'Rozpocznij'}</a>` : ''}
          </div>
        </li>`;
      }).join('')}
    </ol>

    <div class="grid2">
      <div class="card exam-card" style="--c:${ch.color}">
        <div class="card-head"><h3>${icon('target')} Egzamin modułu</h3>${exam ? `<span class="tag ${exam.best >= S.PASS ? 'done' : ''}">${Math.round(exam.best * 100)}%</span>` : ''}</div>
        <p class="muted">10 losowych pytań ze wszystkich lekcji modułu. Próg zaliczenia: 80%. ${exam ? `Podejść: ${exam.attempts}.` : ''}</p>
        <a class="btn primary" href="#/exam/${ch.id}">${exam ? 'Podejdź ponownie' : 'Rozpocznij egzamin'}</a>
      </div>
      <div class="card cert-card ${cert ? 'earned' : ''}" style="--c:${ch.color}">
        <div class="card-head"><h3>${icon('award')} Certyfikat</h3></div>
        ${cert
          ? `<p class="muted">Zdobyty ${new Date(cert.date).toLocaleDateString('pl-PL')} z wynikiem ${Math.round(cert.score * 100)}%.</p><a class="btn primary" href="#/cert/${ch.id}">Zobacz certyfikat</a>`
          : `<ul class="req">
              <li class="${S.chapterDone(ch) ? 'ok' : ''}">${icon('check')} Wszystkie lekcje z min. 2 gwiazdkami (${doneCount}/${ch.topics.length})</li>
              <li class="${exam?.best >= S.PASS ? 'ok' : ''}">${icon('check')} Egzamin modułu ≥ 80%</li>
            </ul>`}
      </div>
    </div>
  </section>`;
}

export function exam(el, id) {
  const ch = S.findChapter(id);
  if (!ch) return;
  const wasOpen = S.chapterUnlocked(ch);
  const pool = ch.topics.flatMap((t) => t.quiz.map((q) => ({ ...q, topicTitle: t.title })));
  const qs = shuffle(pool).slice(0, 10);

  el.innerHTML = `
  <section class="page narrow">
    <a class="back" href="#/course/${ch.id}">${icon('left')} ${esc(ch.title)}</a>
    <div class="card exam-intro" style="--c:${ch.color}">
      <span class="eyebrow">${wasOpen ? 'Egzamin modułu' : 'Test kwalifikacyjny'}</span>
      <h1>${esc(ch.title)}</h1>
      <p class="muted">${wasOpen ? 'Zdaj na min. 80%. Egzamin + ukończone lekcje = certyfikat modułu.' : 'Zdaj na min. 80%, a moduł i wszystkie jego lekcje zostaną odblokowane.'}</p>
      <div id="quiz"></div>
    </div>
  </section>`;

  mountQuiz(el.querySelector('#quiz'), qs, {
    color: ch.color, title: wasOpen ? 'Egzamin' : 'Test',
    onFinish(score, correct, total) {
      const { unlockedNow } = S.recordExam(ch, score);
      const passed = score >= S.PASS;
      if (passed) confetti();
      el.querySelector('#quiz').innerHTML = `
        <div class="result ${passed ? 'pass' : 'fail'}">
          ${ring(score, { size: 140, stroke: 12, color: passed ? ch.color : 'var(--red)', label: Math.round(score * 100) + '%' })}
          <h2>${passed ? 'Zdane!' : 'Jeszcze nie tym razem'}</h2>
          <p class="muted">${correct} z ${total} poprawnych odpowiedzi.
            ${unlockedNow ? ' Moduł odblokowany — wszystkie lekcje są dostępne.' : ''}
            ${S.state.certs[ch.id] ? ' Certyfikat modułu jest Twój.' : passed && !S.chapterDone(ch) ? ' Ukończ wszystkie lekcje, aby otrzymać certyfikat.' : ''}
            ${passed ? '' : ' Przejrzyj lekcje z błędnymi odpowiedziami i spróbuj ponownie.'}</p>
          <div class="row">
            <a class="btn ghost" href="#/course/${ch.id}">Wróć do kursu</a>
            ${S.state.certs[ch.id] ? `<a class="btn primary" href="#/cert/${ch.id}">Certyfikat</a>` : `<button class="btn primary" data-retry>Spróbuj ponownie</button>`}
          </div>
        </div>`;
      el.querySelector('[data-retry]')?.addEventListener('click', () => exam(el, id));
    },
  });
}

export function cert(el, id) {
  const ch = S.findChapter(id);
  const c = ch && S.state.certs[ch.id];
  if (!c) { el.innerHTML = `<section class="page"><a class="back" href="#/courses">${icon('left')} Kursy</a><p>Certyfikat nie został jeszcze zdobyty.</p></section>`; return; }
  const ci = CHAPTERS.indexOf(ch);
  const serial = `COH-${String(ci + 1).padStart(2, '0')}-${c.date.replaceAll('-', '')}`;
  el.innerHTML = `
  <section class="page narrow">
    <div class="row no-print"><a class="back" href="#/course/${ch.id}">${icon('left')} ${esc(ch.title)}</a><button class="btn ghost sm" onclick="print()">${icon('print')} Drukuj / PDF</button></div>
    <div class="certificate" style="--c:${ch.color}">
      <div class="cert-border">
        <div class="cert-logo">${icon('wave')} COHERENCE</div>
        <span class="eyebrow">Certyfikat ukończenia modułu</span>
        <p class="cert-small">Niniejszym potwierdza się, że</p>
        <h1 class="cert-name">${esc(S.state.profile.name || 'System Engineer')}</h1>
        <p class="cert-small">ukończył(a) moduł ${ci + 1} ścieżki System Engineera</p>
        <h2 class="cert-title">${esc(ch.title)}</h2>
        <p class="cert-small">${ch.topics.length} lekcji · egzamin końcowy: ${Math.round(c.score * 100)}%</p>
        <div class="cert-foot">
          <div><b>${new Date(c.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}</b><small>data</small></div>
          <div class="seal">${icon('award')}</div>
          <div><b>${serial}</b><small>nr certyfikatu</small></div>
        </div>
      </div>
    </div>
    <p class="muted small center no-print">Certyfikat samodzielnej nauki — potwierdzenie osobistego postępu w aplikacji.</p>
  </section>`;
}
