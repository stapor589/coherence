import { LEVEL_LABEL } from '../../data/curriculum.js';
import { LESSONS } from '../../data/lessons.js';
import { RESOURCES, RESOURCE_TYPES } from '../../data/resources.js';
import { VISUALS } from '../../data/visuals.js';
import * as S from '../store.js';
import { icon, esc, bar, starsHTML, ring, mountQuiz, confetti } from '../ui.js';
import { openResource } from './library.js';

export function lesson(el, id, stepStr = '0') {
  const topic = S.findTopic(id);
  if (!topic) { el.innerHTML = '<section class="page"><p>Nie znaleziono lekcji.</p></section>'; return; }
  const { ch } = topic;
  if (!S.topicUnlocked(topic)) {
    el.innerHTML = `<section class="page narrow"><a class="back" href="#/course/${ch.id}">${icon('left')} ${esc(ch.title)}</a>
      <div class="card notice">${icon('lock')}<div><b>Ta lekcja jest jeszcze zablokowana.</b> Przerób teorię poprzedniej lekcji albo zdaj test kwalifikacyjny modułu.</div></div></section>`;
    return;
  }
  const steps = S.lessonSteps(topic);
  const idx = Math.max(0, Math.min(steps.length - 1, parseInt(stepStr, 10) || 0));
  const step = steps[idx];
  const s = S.ts(topic.id);
  const topicIdx = ch.topics.findIndex((t) => t.id === topic.id);

  const stepDone = (st) => {
    if (st.type === 'intro') return Object.keys(s.read).length > 0 || s.attempted;
    if (st.type === 'concept') return !!s.read[st.i];
    if (st.type === 'quiz') return s.quizBest >= S.PASS;
    if (st.type === 'task') return topic.tasks.every((_, i) => s.tasks[i]);
    if (st.type === 'materials') return topic.res.some((r) => S.state.resources[r]?.read);
    if (st.type === 'summary') return S.topicDone(topic);
    return false;
  };

  const doneCount = steps.filter(stepDone).length;

  el.innerHTML = `
  <section class="lesson" style="--c:${ch.color}">
    <aside class="outline">
      <a class="back" href="#/course/${ch.id}">${icon('left')} Moduł ${S.allTopics().find((t) => t.id === id).ci + 1}: ${esc(ch.short)}</a>
      <h3>${esc(topic.title)}</h3>
      <div class="outline-prog">${bar((doneCount / steps.length) * 100, ch.color)}<span class="small muted num">${doneCount}/${steps.length}</span></div>
      <details class="outline-toggle" ${matchMedia('(min-width: 960px)').matches ? 'open' : ''}>
        <summary>${icon('list')} Spis kroków <span class="small muted">— krok ${idx + 1} z ${steps.length}</span></summary>
        <ol class="steps">
          ${steps.map((st, i) => `
            <li><a href="#/lesson/${id}/${i}" class="${i === idx ? 'cur' : ''} ${stepDone(st) ? 'done' : ''}">
              <span class="dot">${stepDone(st) ? icon('check') : st.type === 'quiz' ? icon('target') : st.type === 'task' ? icon('tools') : st.type === 'materials' ? icon('library') : i}</span>
              <span class="lbl">${esc(st.type === 'concept' ? st.label : st.label)}</span>
            </a></li>`).join('')}
        </ol>
      </details>
    </aside>
    <article class="lesson-main">
      <div class="lesson-top">${bar(((idx + 1) / steps.length) * 100, ch.color)}</div>
      <div class="lesson-content" id="content"></div>
    </article>
  </section>`;

  const c = el.querySelector('#content');
  const go = (i) => { location.hash = `#/lesson/${id}/${i}`; };
  const nav = (nextLabel = 'Dalej', { primaryAction } = {}) => `
    <div class="lesson-nav">
      ${idx > 0 ? `<button class="btn ghost" data-prev>${icon('left')} Wstecz</button>` : '<span></span>'}
      ${idx < steps.length - 1 ? `<button class="btn primary" data-next ${primaryAction ? `data-action="${primaryAction}"` : ''}>${nextLabel} ${icon('right')}</button>` : ''}
    </div>`;
  const bindNav = (beforeNext) => {
    c.querySelector('[data-prev]')?.addEventListener('click', () => go(idx - 1));
    c.querySelector('[data-next]')?.addEventListener('click', () => { beforeNext?.(); go(idx + 1); });
  };

  if (step.type === 'intro') {
    const lesson = LESSONS[topic.id] || {};
    c.innerHTML = `
      <span class="eyebrow">Lekcja ${topicIdx + 1} · ${LEVEL_LABEL[topic.level]}</span>
      <h1>${esc(topic.title)}</h1>
      <p class="lead">${esc(topic.summary)}</p>
      ${lesson.goals ? `<div class="goals card"><h4>${icon('target')} Cele lekcji</h4><ul>${lesson.goals.map((g) => `<li>${esc(g)}</li>`).join('')}</ul></div>` : ''}
      <div class="intro-grid">
        <div class="card mini-stat"><b class="num">${topic.concepts.length}</b><span>zagadnień</span></div>
        <div class="card mini-stat"><b class="num">${topic.quiz.length}</b><span>pytań w quizie</span></div>
        <div class="card mini-stat"><b class="num">${topic.tasks.length}</b><span>zadań praktycznych</span></div>
        <div class="card mini-stat"><b class="num">${topic.concepts.length * S.XP.step + S.XP.quizPass + S.XP.quizPerfect + topic.tasks.length * S.XP.task}</b><span>XP do zdobycia</span></div>
      </div>
      <div class="card star-legend">
        <div>${starsHTML(1)}<span>Teoria — przerób wszystkie zagadnienia</span></div>
        <div>${starsHTML(2)}<span>Quiz — min. 80% poprawnych</span></div>
        <div>${starsHTML(3)}<span>Praktyka — wykonaj zadania na realnym systemie</span></div>
      </div>
      ${nav(Object.keys(s.read).length ? 'Kontynuuj' : 'Rozpocznij lekcję')}`;
    bindNav();
  }

  if (step.type === 'concept') {
    const n = topic.concepts.length;
    c.innerHTML = `
      <span class="eyebrow">Zagadnienie ${step.i + 1} z ${n}</span>
      <h1 class="concept-title">${esc(step.label)}</h1>
      ${step.text ? `<div class="prose"><p>${esc(step.text)}</p></div>` : '<p class="muted">Opracuj to zagadnienie na podstawie materiałów lekcji i zapisz własne wnioski poniżej.</p>'}
      ${(() => {
        const v = step.viz && VISUALS[step.viz];
        return v ? `<figure class="viz"><h4>${esc(v.title)}</h4>${v.svg}<figcaption>${esc(v.caption)}</figcaption></figure>` : '';
      })()}
      ${step.eq ? `<figure class="eq"><div class="eq-body">${step.eq}</div>${step.where ? `<figcaption><span>gdzie:</span> ${esc(step.where)}</figcaption>` : ''}</figure>` : ''}
      <div class="note card">
        <label for="stepnote" class="small muted">${icon('log')} Twoja notatka do zagadnienia</label>
        <textarea id="stepnote" rows="3" placeholder="Wzór, przykład z realizacji, pytanie do sprawdzenia…">${esc(s.stepNotes[step.i] || '')}</textarea>
      </div>
      ${nav(s.read[step.i] ? 'Dalej' : 'Rozumiem — dalej')}`;
    const ta = c.querySelector('#stepnote');
    ta.addEventListener('input', () => { s.stepNotes[step.i] = ta.value; S.save(); });
    bindNav(() => S.markRead(topic, step.i));
  }

  if (step.type === 'materials') {
    const items = topic.res.map((rid) => RESOURCES.find((r) => r.id === rid)).filter(Boolean);
    c.innerHTML = `
      <span class="eyebrow">Materiały</span>
      <h1>Pogłębienie tematu</h1>
      <p class="muted">Oznacz jako przeczytane, żeby zdobyć XP. Do książek możesz dołączyć własny plik PDF w Bibliotece.</p>
      <div class="res-list">
        ${items.map((r) => {
          const rs = S.state.resources[r.id] || {};
          const hasFile = S.state.attach[r.id];
          return `
          <div class="res card ${rs.read ? 'read' : ''}">
            <span class="res-type t-${r.type}">${esc(RESOURCE_TYPES[r.type])}</span>
            <div class="res-body"><b>${esc(r.title)}</b>${r.author ? `<span class="small muted">${esc(r.author)}</span>` : ''}${r.note ? `<span class="small muted">${esc(r.note)}</span>` : ''}</div>
            <div class="res-actions">
              ${r.url || hasFile ? `<button class="btn ghost sm" data-open="${r.id}">${icon(hasFile ? 'file' : 'external')} Otwórz</button>` : ''}
              <button class="btn sm ${rs.read ? 'on' : 'ghost'}" data-read="${r.id}">${icon('check')} ${rs.read ? 'Przeczytane' : 'Oznacz'}</button>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="note card">
        <label for="topicnote" class="small muted">${icon('log')} Notatki do lekcji</label>
        <textarea id="topicnote" rows="4" placeholder="Najważniejsze wnioski z lektury…">${esc(s.notes || '')}</textarea>
      </div>
      ${nav()}`;
    c.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openResource(b.dataset.open)));
    c.querySelectorAll('[data-read]').forEach((b) => b.addEventListener('click', () => { S.toggleResource(b.dataset.read, 'read'); lesson(el, id, idx); }));
    const ta = c.querySelector('#topicnote');
    ta.addEventListener('input', () => { s.notes = ta.value; S.save(); });
    bindNav();
  }

  if (step.type === 'quiz') {
    const best = s.quizBest;
    c.innerHTML = `
      <span class="eyebrow">Quiz</span>
      <h1>Sprawdź się</h1>
      <p class="muted">${topic.quiz.length} pytań, próg 80%. ${best >= 0 ? `Najlepszy wynik: <b>${Math.round(best * 100)}%</b>.` : ''} Pytania trafią potem do Powtórek.</p>
      <div id="quiz" class="card"></div>
      ${nav(best >= S.PASS ? 'Dalej' : 'Pomiń na razie')}`;
    bindNav();
    const run = () => mountQuiz(c.querySelector('#quiz'), topic.quiz, {
      color: ch.color,
      onFinish(score, correct, total) {
        const wasPassed = s.quizBest >= S.PASS;
        S.recordQuiz(topic, score);
        const passed = score >= S.PASS;
        if (passed && !wasPassed) confetti(score === 1 ? 140 : 80);
        c.querySelector('#quiz').innerHTML = `
          <div class="result ${passed ? 'pass' : 'fail'}">
            ${ring(score, { size: 120, stroke: 11, color: passed ? ch.color : 'var(--red)', label: Math.round(score * 100) + '%' })}
            <h2>${score === 1 ? 'Perfekcyjnie!' : passed ? 'Zaliczone!' : 'Prawie…'}</h2>
            <p class="muted">${correct} z ${total} poprawnych.${passed ? '' : ' Wróć do zagadnień i spróbuj jeszcze raz.'}</p>
            <div class="row"><button class="btn ghost" data-retry>Powtórz quiz</button>${passed ? `<button class="btn primary" data-go>Dalej ${icon('right')}</button>` : ''}</div>
          </div>`;
        c.querySelector('[data-retry]').addEventListener('click', run);
        c.querySelector('[data-go]')?.addEventListener('click', () => go(idx + 1));
      },
    });
    run();
  }

  if (step.type === 'task') {
    c.innerHTML = `
      <span class="eyebrow">Praktyka</span>
      <h1>Zadanie praktyczne</h1>
      <p class="muted">Wiedza zostaje, kiedy przełożysz ją na realny system. Wykonaj zadanie na evencie, w magazynie lub w software predykcji i zapisz wyniki.</p>
      <div class="tasks">
        ${topic.tasks.map((t, i) => `
          <label class="task card ${s.tasks[i] ? 'done' : ''}">
            <input type="checkbox" data-task="${i}" ${s.tasks[i] ? 'checked' : ''}>
            <span class="tick">${icon('check')}</span>
            <span>${esc(t)}</span>
          </label>`).join('')}
      </div>
      <div class="note card">
        <label for="tasknote" class="small muted">${icon('log')} Wyniki, pomiary, wnioski</label>
        <textarea id="tasknote" rows="5" placeholder="Gdzie, na jakim systemie, co wyszło…">${esc(s.taskNotes || '')}</textarea>
        <a class="small link" href="#/log">Chcesz zapisać całą realizację? Dodaj wpis w Dzienniku →</a>
      </div>
      ${nav()}`;
    c.querySelectorAll('[data-task]').forEach((cb) => cb.addEventListener('change', () => {
      S.toggleTask(topic, +cb.dataset.task, cb.checked);
      cb.closest('.task').classList.toggle('done', cb.checked);
    }));
    const ta = c.querySelector('#tasknote');
    ta.addEventListener('input', () => { s.taskNotes = ta.value; S.save(); });
    bindNav();
  }

  if (step.type === 'summary') {
    const st = S.stars(topic);
    const nextT = ch.topics[topicIdx + 1];
    const missing = [];
    if (!topic.concepts.every((_, i) => s.read[i])) missing.push(['Przerób wszystkie zagadnienia', steps.findIndex((x) => x.type === 'concept' && !s.read[x.i])]);
    if (s.quizBest < S.PASS) missing.push(['Zalicz quiz (min. 80%)', steps.findIndex((x) => x.type === 'quiz')]);
    if (!topic.tasks.every((_, i) => s.tasks[i])) missing.push(['Wykonaj zadania praktyczne', steps.findIndex((x) => x.type === 'task')]);
    if (st === 3) confetti(60);
    c.innerHTML = `
      <div class="summary">
        <div class="big-stars">${starsHTML(st)}</div>
        <h1>${st === 3 ? 'Lekcja opanowana w 100%' : st === 2 ? 'Lekcja ukończona' : 'Podsumowanie lekcji'}</h1>
        <p class="muted">${esc(topic.title)} · postęp ${S.topicPct(topic)}%</p>
        ${missing.length ? `<div class="card todo"><h4>Do pełnych 3 gwiazdek</h4>${missing.map(([l, i]) => `<a href="#/lesson/${id}/${i}" class="todo-item">${icon('right')} ${l}</a>`).join('')}</div>` : ''}
        <div class="row center">
          <a class="btn ghost" href="#/course/${ch.id}">Program modułu</a>
          ${nextT && S.topicUnlocked({ ...nextT, ch }) ? `<a class="btn primary" href="#/lesson/${nextT.id}/0">Następna lekcja ${icon('right')}</a>`
            : !nextT ? `<a class="btn primary" href="#/exam/${ch.id}">Egzamin modułu ${icon('target')}</a>` : ''}
        </div>
      </div>
      ${nav()}`;
    bindNav();
  }
}
