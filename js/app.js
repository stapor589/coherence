import * as S from './store.js';
import { icon, esc, toast, confetti, modal } from './ui.js';
import { dashboard } from './views/dashboard.js';
import { path } from './views/path.js';
import { courses, course, exam, cert } from './views/courses.js';
import { lesson } from './views/lesson.js';
import { library } from './views/library.js';
import { review } from './views/review.js';
import { tools } from './views/tools.js';
import { log } from './views/log.js';
import { profile, selfAssessment } from './views/profile.js';

const NAV = [
  ['', 'home', 'Pulpit'],
  ['path', 'route', 'Ścieżka'],
  ['courses', 'courses', 'Kursy'],
  ['library', 'library', 'Biblioteka'],
  ['review', 'review', 'Powtórki'],
  ['tools', 'tools', 'Warsztat'],
  ['log', 'log', 'Dziennik'],
  ['profile', 'profile', 'Profil'],
];
const MOBILE = ['', 'path', 'courses', 'library'];

const ROUTES = { '': dashboard, path, courses, course, lesson, exam, cert, library, review, tools, log, profile };
const SECTION = { course: 'courses', lesson: 'courses', exam: 'courses', cert: 'profile' };

const view = document.getElementById('view');
let lastRoute = null;

function shell() {
  const link = ([r, ic, label]) => `<a href="#/${r}" data-route="${r}">${icon(ic)}<span>${label}</span></a>`;
  document.getElementById('sidenav').innerHTML = NAV.map(link).join('');
  document.getElementById('tabbar').innerHTML =
    NAV.filter(([r]) => MOBILE.includes(r)).map(link).join('') +
    `<button data-more>${icon('more')}<span>Więcej</span></button>`;
  document.querySelector('[data-more]').addEventListener('click', () => {
    modal(`<div class="modal-head"><h2>Więcej</h2><button class="icon-btn" data-close>${icon('x')}</button></div>
      <div class="more-grid">${NAV.filter(([r]) => !MOBILE.includes(r)).map(([r, ic, l]) => `<a href="#/${r}" data-close>${icon(ic)}<span>${l}</span></a>`).join('')}</div>`);
  });
  updateHeader();
}

function updateHeader() {
  const L = S.levelInfo();
  const streak = S.streak();
  const due = S.dueCards().length;
  document.getElementById('hud').innerHTML = `
    <a class="hud-chip streak ${streak ? 'on' : ''}" href="#/" title="Seria dni">${icon('flame')}<b class="num">${streak}</b></a>
    <a class="hud-chip xp" href="#/profile" title="Punkty doświadczenia">${icon('bolt')}<b class="num">${S.state.xp}</b></a>
    <a class="hud-chip level" href="#/profile" title="${esc(L.rank)}"><span class="lvl-ring" style="--p:${Math.round(L.pct * 100)}"><b>${L.lvl}</b></span><span class="lvl-name">${esc(L.rank)}</span></a>`;
  const r = document.querySelector('#sidenav [data-route="review"]');
  if (r) r.dataset.badge = due || '';
  const side = document.getElementById('side-level');
  side.innerHTML = `<div class="small muted">Dziś ${S.xpToday()} / ${S.state.profile.dailyGoal} XP</div><div class="bar"><span style="width:${Math.min(100, (S.xpToday() / S.state.profile.dailyGoal) * 100)}%"></span></div>`;
}

function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  const name = ROUTES[parts[0]] ? parts[0] : '';
  const params = parts.slice(1);
  const section = SECTION[name] ?? name;
  document.querySelectorAll('[data-route]').forEach((a) => a.classList.toggle('active', a.dataset.route === section));
  document.body.dataset.view = name || 'home';

  const key = name + '/' + (params[0] || '');
  ROUTES[name](view, ...params);
  if (key !== lastRoute || name === 'lesson') window.scrollTo({ top: 0, behavior: 'instant' });
  if (key !== lastRoute) { view.classList.remove('enter'); void view.offsetWidth; view.classList.add('enter'); }
  lastRoute = key;
}

// Reakcje na zdarzenia gamifikacji
let xpBuffer = 0, xpTimer, xpLabel = '';
S.onEvent((e) => {
  if (e.type === 'xp') {
    xpBuffer += e.amount; xpLabel = e.label;
    clearTimeout(xpTimer);
    xpTimer = setTimeout(() => {
      toast(`<span class="toast-xp">+${xpBuffer} XP</span> ${esc(xpLabel)}`, 'xp');
      document.querySelector('.hud-chip.xp')?.classList.add('pop');
      xpBuffer = 0;
    }, 60);
  }
  if (e.type === 'level') {
    setTimeout(() => {
      confetti(140);
      modal(`<div class="levelup"><div class="lu-num">${e.lvl}</div><span class="eyebrow">Nowy poziom</span><h2>${esc(e.rank)}</h2><p class="muted">Tak trzymaj — kolejne moduły czekają.</p><button class="btn primary" data-close>Dalej</button></div>`);
    }, 400);
  }
  if (e.type === 'badge') setTimeout(() => toast(`<span class="toast-medal">${e.badge.icon}</span> Odznaka: <b>${esc(e.badge.name)}</b>`, 'toast-badge'), 700);
  if (e.type === 'cert') {
    setTimeout(() => {
      confetti(180);
      modal(`<div class="levelup"><div class="lu-num">🎓</div><span class="eyebrow">Certyfikat zdobyty</span><h2>${esc(e.ch.title)}</h2><p class="muted">Moduł ukończony w całości.</p><a class="btn primary" href="#/cert/${e.ch.id}" data-close>Zobacz certyfikat</a></div>`);
    }, 900);
  }
});
S.on(updateHeader);

function onboarding() {
  modal(`
    <div class="onboard">
      <div class="ob-logo">${icon('wave')}</div>
      <span class="eyebrow">Krok 1 z 2</span>
      <h2>Witaj w Coherence</h2>
      <p class="muted">Twoje centrum szkoleniowe inżynierii systemów nagłośnieniowych: 11 modułów, 38 lekcji, quizy, zadania praktyczne, certyfikaty, biblioteka i kalkulatory.</p>
      <form class="form" id="ob">
        <label>Jak masz na imię?<input name="name" required placeholder="Imię" autocomplete="given-name"></label>
        <label>Ile czasu dziennie?
          <select name="goal"><option value="30">30 XP — ok. 10 min</option><option value="60" selected>60 XP — ok. 20 min</option><option value="100">100 XP — ok. 35 min</option><option value="150">150 XP — godzina</option></select>
        </label>
        <label class="switch"><input type="checkbox" name="free"><span class="sw"></span><span><b>Mam doświadczenie — odblokuj wszystko</b><small class="muted">Tryb swobodny: ucz się w dowolnej kolejności. Możesz zmienić w Profilu.</small></span></label>
        <button class="btn primary big">Dalej ${icon('right')}</button>
      </form>
    </div>`, {
    dismiss: false,
    onMount(m, close) {
      m.querySelector('#ob').addEventListener('submit', (ev) => {
        ev.preventDefault();
        const fd = new FormData(ev.target);
        Object.assign(S.state.profile, { name: fd.get('name').trim(), dailyGoal: +fd.get('goal'), freeMode: !!fd.get('free') });
        S.save();
        close();
        setTimeout(() => selfAssessment(() => { route(); toast('Gotowe — zaczynamy!'); }, { first: true }), 220);
      });
    },
  });
}

shell();
window.addEventListener('hashchange', route);
route();
if (!S.state.profile.onboarded) onboarding();

// dzień się zmienił w otwartej aplikacji → odśwież liczniki
document.addEventListener('visibilitychange', () => { if (!document.hidden) updateHeader(); });

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
