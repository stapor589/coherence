import { CHAPTERS } from '../../data/curriculum.js';
import * as S from '../store.js';
import * as DB from '../db.js';
import { icon, esc, bar, toast, modal, fmtBytes } from '../ui.js';

function radar() {
  const n = CHAPTERS.length, R = 110, cx = 160, cy = 150;
  const pt = (i, v) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + Math.cos(a) * R * v, cy + Math.sin(a) * R * v];
  };
  const poly = (vals) => vals.map((v, i) => pt(i, v).map((x) => x.toFixed(1)).join(',')).join(' ');
  const prog = CHAPTERS.map((ch) => Math.max(0.03, S.chapterPct(ch) / 100));
  const selfVals = CHAPTERS.map((ch) => (S.state.profile.self[ch.id] ?? 0) / 3);
  const hasSelf = Object.keys(S.state.profile.self).length > 0;
  return `
  <svg viewBox="0 0 320 300" class="radar" role="img" aria-label="Mapa kompetencji">
    ${[0.25, 0.5, 0.75, 1].map((r) => `<polygon points="${poly(Array(n).fill(r))}" class="grid"/>`).join('')}
    ${CHAPTERS.map((_, i) => { const [x, y] = pt(i, 1); return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="grid"/>`; }).join('')}
    ${hasSelf ? `<polygon points="${poly(selfVals)}" class="self"/>` : ''}
    <polygon points="${poly(prog)}" class="prog"/>
    ${CHAPTERS.map((ch, i) => { const [x, y] = pt(i, 1.2); return `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central">${esc(ch.short)}</text>`; }).join('')}
  </svg>`;
}

let installEvt = null;
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvt = e; });

export function profile(el) {
  const st = S.state, p = st.profile;
  const L = S.levelInfo();
  const earned = S.BADGES.filter((b) => st.badges[b.id]).length;
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;

  el.innerHTML = `
  <section class="page">
    <div class="profile-hero card">
      <div class="avatar">${esc((p.name || 'SE').slice(0, 2).toUpperCase())}</div>
      <div class="ph-body">
        <label class="name-edit"><input id="name" value="${esc(p.name)}" placeholder="Twoje imię" aria-label="Imię"></label>
        <div class="rank"><span class="lvl">Poziom ${L.lvl}</span><span class="rank-name">${esc(L.rank)}</span></div>
        <div class="xpline">${bar(L.pct * 100)}<span class="small muted num">${st.xp} XP · do następnego poziomu ${L.next - st.xp}</span></div>
      </div>
      <div class="ph-stats">
        <div><b class="num">${S.streak()}</b><small>dni serii</small></div>
        <div><b class="num">${Object.keys(st.certs).length}</b><small>certyfikaty</small></div>
        <div><b class="num">${earned}</b><small>odznaki</small></div>
      </div>
    </div>

    <div class="grid2">
      <div class="card">
        <div class="card-head"><h3>Mapa kompetencji</h3><span class="legend small"><i class="lg prog"></i>postęp <i class="lg self"></i>samoocena</span></div>
        ${radar()}
      </div>
      <div class="card">
        <div class="card-head"><h3>Certyfikaty</h3></div>
        <div class="cert-list">
          ${CHAPTERS.map((ch, i) => {
            const c = st.certs[ch.id];
            return `<a class="cert-mini ${c ? 'on' : ''}" ${c ? `href="#/cert/${ch.id}"` : `href="#/course/${ch.id}"`} style="--c:${ch.color}">
              <span class="cm-ic">${icon(c ? 'award' : ch.icon)}</span><span><b>${i + 1}. ${esc(ch.short)}</b><small>${c ? new Date(c.date).toLocaleDateString('pl-PL') : `${S.chapterPct(ch)}%`}</small></span></a>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h3>Odznaki</h3><span class="small muted">${earned}/${S.BADGES.length}</span></div>
      <div class="badge-grid">
        ${S.BADGES.map((b) => `<div class="badge ${st.badges[b.id] ? 'on' : ''}"><span class="medal">${b.icon}</span><b>${esc(b.name)}</b><small>${esc(b.desc)}</small></div>`).join('')}
      </div>
    </div>

    <div class="grid2">
      <div class="card form">
        <h3>Ustawienia nauki</h3>
        <label>Dzienny cel XP
          <select id="goal">${[30, 60, 100, 150, 250].map((g) => `<option ${p.dailyGoal === g ? 'selected' : ''} value="${g}">${g} XP — ${g <= 30 ? 'luźno' : g <= 60 ? 'regularnie' : g <= 100 ? 'intensywnie' : 'bootcamp'}</option>`).join('')}</select>
        </label>
        <label class="switch"><input type="checkbox" id="free" ${p.freeMode ? 'checked' : ''}><span class="sw"></span><span><b>Tryb swobodny</b><small class="muted">Wszystkie moduły i lekcje odblokowane — dla doświadczonych, którzy chcą uzupełniać luki w dowolnej kolejności.</small></span></label>
        <button class="btn ghost" data-self>${icon('target')} Zaktualizuj samoocenę</button>
      </div>
      <div class="card form">
        <h3>Aplikacja i dane</h3>
        ${standalone ? `<p class="small muted">${icon('check')} Działasz w zainstalowanej aplikacji.</p>` : `<button class="btn primary" data-install>${icon('download')} Zainstaluj aplikację</button>`}
        <p class="small muted" id="storage">Postęp zapisuje się lokalnie na tym urządzeniu.</p>
        <div class="row wrap">
          <button class="btn ghost" data-export>${icon('download')} Eksportuj postęp</button>
          <label class="btn ghost">${icon('upload')} Importuj<input type="file" accept="application/json,.json" id="import" hidden></label>
        </div>
        <p class="small muted">Eksport/import przenosi postęp między telefonem a komputerem (pliki książek zostają na urządzeniu).</p>
        <button class="btn danger sm" data-reset>${icon('trash')} Wyzeruj postęp</button>
      </div>
    </div>
  </section>`;

  const nameI = el.querySelector('#name');
  nameI.addEventListener('change', () => { p.name = nameI.value.trim(); S.save(); profile(el); });
  el.querySelector('#goal').addEventListener('change', (e) => { p.dailyGoal = +e.target.value; S.save(); });
  el.querySelector('#free').addEventListener('change', (e) => { p.freeMode = e.target.checked; S.save(); toast(p.freeMode ? 'Tryb swobodny włączony' : 'Tryb swobodny wyłączony'); });
  el.querySelector('[data-self]').addEventListener('click', () => selfAssessment(() => profile(el)));

  el.querySelector('[data-install]')?.addEventListener('click', async () => {
    if (installEvt) { installEvt.prompt(); await installEvt.userChoice; installEvt = null; return; }
    modal(`<div class="modal-head"><h2>Instalacja</h2><button class="icon-btn" data-close>${icon('x')}</button></div>
      <div class="prose"><p><b>iPhone / iPad (Safari):</b> przycisk Udostępnij → „Do ekranu początkowego”.</p>
      <p><b>Android (Chrome):</b> menu ⋮ → „Zainstaluj aplikację” lub „Dodaj do ekranu głównego”.</p>
      <p><b>Komputer (Chrome / Edge):</b> ikona instalacji na końcu paska adresu.</p>
      <p class="muted small">Aplikacja musi być otwarta przez https (np. GitHub Pages, Netlify) lub localhost.</p></div>`);
  });

  DB.storageInfo().then((info) => {
    if (!info) return;
    el.querySelector('#storage').textContent = `Zajęte miejsce: ${fmtBytes(info.usage)} z ${fmtBytes(info.quota)}${info.persisted ? ' · pamięć trwała włączona' : ''}.`;
  });

  el.querySelector('[data-export]').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({ app: 'coherence', exported: new Date().toISOString(), state: S.state }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `coherence-postep-${S.today()}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  });
  el.querySelector('#import').addEventListener('change', async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      const next = data.state || data;
      if (next.v !== 1) throw new Error('To nie jest plik eksportu Coherence');
      if (!confirm('Zastąpić obecny postęp danymi z pliku?')) return;
      S.replaceState(next);
      toast(`${icon('check')} Postęp zaimportowany`);
      profile(el);
    } catch (err) { toast(`${icon('x')} ${esc(err.message)}`, 'bad'); }
  });
  el.querySelector('[data-reset]').addEventListener('click', () => {
    if (confirm('Na pewno wyzerować cały postęp, dziennik i odznaki? Tej operacji nie można cofnąć (zrób wcześniej eksport).')) {
      S.resetAll();
      location.hash = '#/';
      location.reload();
    }
  });
}

export function selfAssessment(done, { first = false } = {}) {
  const p = S.state.profile;
  const labels = ['Nowy temat', 'Podstawy', 'Pracuję z tym', 'Znam dobrze'];
  modal(`
    <div class="modal-head">
      <div><span class="eyebrow">${first ? 'Krok 2 z 2' : 'Samoocena'}</span><h2>Jak oceniasz swoją wiedzę?</h2></div>
      ${first ? '' : `<button class="icon-btn" data-close>${icon('x')}</button>`}
    </div>
    <p class="muted">Na tej podstawie pulpit pokaże Twoje luki, a mapa kompetencji porówna samoocenę z realnym postępem. Moduły ocenione na 3 możesz odblokować testem kwalifikacyjnym.</p>
    <p class="small muted self-legend"><b>0</b> nowy temat · <b>1</b> podstawy · <b>2</b> pracuję z tym · <b>3</b> znam dobrze</p>
    <div class="self-list">
      ${CHAPTERS.map((ch, i) => `
        <div class="self-row" style="--c:${ch.color}">
          <span class="self-name">${icon(ch.icon)} <b>${i + 1}. ${esc(ch.title)}</b></span>
          <div class="seg4" role="radiogroup" aria-label="${esc(ch.title)}">
            ${labels.map((l, v) => `<label title="${l}"><input type="radio" name="${ch.id}" value="${v}" ${(p.self[ch.id] ?? (first ? 1 : -1)) === v ? 'checked' : ''}><span>${v}<small>${l}</small></span></label>`).join('')}
          </div>
        </div>`).join('')}
    </div>
    <div class="row end"><button class="btn primary" data-save>Zapisz</button></div>`, {
    wide: true, dismiss: !first,
    onMount(m, close) {
      m.querySelector('[data-save]').addEventListener('click', () => {
        CHAPTERS.forEach((ch) => {
          const v = m.querySelector(`input[name="${ch.id}"]:checked`);
          if (v) p.self[ch.id] = +v.value;
        });
        p.onboarded = true;
        S.save();
        close();
        done?.();
      });
    },
  });
}
