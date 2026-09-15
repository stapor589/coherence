import { CHAPTERS } from '../../data/curriculum.js';
import * as S from '../store.js';
import { icon, esc, toast } from '../ui.js';

const ROLES = ['System engineer', 'System tech', 'FOH', 'Monitor', 'PA tech', 'Projektant', 'Obserwator / nauka'];

export function log(el) {
  const entries = S.state.log;
  el.innerHTML = `
  <section class="page">
    <div class="page-head">
      <div><span class="eyebrow">Dziennik praktyki</span><h1>Realizacje i wnioski</h1>
      <p class="muted">Każdy event to lekcja. Zapisuj system, problemy i wnioski — po roku masz własny podręcznik. +${S.XP.log} XP za wpis.</p></div>
    </div>
    <div class="log-layout">
      <form class="card form" id="logForm">
        <h3>${icon('plus')} Nowy wpis</h3>
        <div class="form-row">
          <label>Data<input type="date" name="date" value="${S.today()}" required></label>
          <label>Rola<select name="role">${ROLES.map((r) => `<option>${r}</option>`).join('')}</select></label>
        </div>
        <label>Event / obiekt<input name="event" required placeholder="np. Festiwal X, scena główna"></label>
        <label>System<input name="system" placeholder="np. 12× K2 / side, 16× KS28 end-fire, 6× Kara II FF"></label>
        <label>Co robiłem / robiłam<textarea name="did" rows="3" placeholder="predykcja, rig, strojenie, pomiary…"></textarea></label>
        <label>Problemy i jak je rozwiązano<textarea name="issues" rows="2"></textarea></label>
        <label>Wnioski na przyszłość<textarea name="lessons" rows="2" placeholder="Co zrobię inaczej następnym razem?"></textarea></label>
        <fieldset><legend class="small muted">Powiązane moduły</legend>
          <div class="chips">${CHAPTERS.map((c) => `<label class="chip check"><input type="checkbox" name="mods" value="${c.id}"><span>${esc(c.short)}</span></label>`).join('')}</div>
        </fieldset>
        <button class="btn primary">Zapisz wpis</button>
      </form>
      <div class="log-list">
        ${entries.length ? entries.map((e) => `
          <article class="card entry">
            <div class="entry-head">
              <div><span class="eyebrow">${new Date(e.date + 'T12:00').toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })} · ${esc(e.role)}</span><h3>${esc(e.event)}</h3></div>
              <button class="icon-btn" data-del="${e.id}" aria-label="Usuń wpis">${icon('trash')}</button>
            </div>
            ${e.system ? `<p class="sys">${icon('speaker')} ${esc(e.system)}</p>` : ''}
            ${e.did ? `<p><b>Zakres:</b> ${esc(e.did)}</p>` : ''}
            ${e.issues ? `<p><b>Problemy:</b> ${esc(e.issues)}</p>` : ''}
            ${e.lessons ? `<p class="lesson-learned"><b>Wnioski:</b> ${esc(e.lessons)}</p>` : ''}
            <div class="lib-tags">${(e.mods || []).map((m) => { const c = CHAPTERS.find((x) => x.id === m); return c ? `<a class="mtag" href="#/course/${c.id}" style="--c:${c.color}">${esc(c.short)}</a>` : ''; }).join('')}</div>
          </article>`).join('') : `<div class="card empty">${icon('log')}<h3>Dziennik jest pusty</h3><p class="muted">Dodaj ostatnią realizację — nawet krótki wpis pomaga zobaczyć postęp.</p></div>`}
      </div>
    </div>
  </section>`;

  el.querySelector('#logForm').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const fd = new FormData(ev.target);
    S.addLog({
      date: fd.get('date'), role: fd.get('role'), event: fd.get('event').trim(), system: fd.get('system').trim(),
      did: fd.get('did').trim(), issues: fd.get('issues').trim(), lessons: fd.get('lessons').trim(), mods: fd.getAll('mods'),
    });
    toast(`${icon('check')} Wpis zapisany`);
    log(el);
  });
  el.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', () => {
    if (confirm('Usunąć ten wpis?')) { S.removeLog(b.dataset.del); log(el); }
  }));
}
