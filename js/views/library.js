import { CHAPTERS } from '../../data/curriculum.js';
import { RESOURCES, RESOURCE_TYPES } from '../../data/resources.js';
import * as S from '../store.js';
import * as DB from '../db.js';
import { icon, esc, toast, modal, fmtBytes } from '../ui.js';

const allResources = () => [...S.state.custom.map((r) => ({ ...r, custom: true })), ...RESOURCES];

export async function openResource(id) {
  const r = allResources().find((x) => x.id === id);
  if (!r) return;
  const fileId = r.fileId || S.state.attach[id]?.fileId;
  try {
    if (fileId) await DB.openFile(fileId);
    else if (r.url) window.open(r.url, '_blank', 'noopener');
  } catch (e) {
    toast(`${icon('x')} ${esc(e.message)}`, 'bad');
  }
}

const ui = { q: '', type: 'all', mod: 'all', only: 'all' };

export function library(el) {
  const list = allResources().filter((r) => {
    const rs = S.state.resources[r.id] || {};
    const hay = `${r.title} ${r.author || ''} ${r.note || ''}`.toLowerCase();
    if (ui.q && !hay.includes(ui.q.toLowerCase())) return false;
    if (ui.type !== 'all' && r.type !== ui.type) return false;
    if (ui.mod !== 'all' && !(r.tags || []).includes(ui.mod)) return false;
    if (ui.only === 'fav' && !rs.fav) return false;
    if (ui.only === 'unread' && rs.read) return false;
    if (ui.only === 'files' && !(r.fileId || S.state.attach[r.id])) return false;
    return true;
  });
  const readCount = Object.values(S.state.resources).filter((r) => r.read).length;
  const types = Object.keys(RESOURCE_TYPES).filter((t) => allResources().some((r) => r.type === t));

  el.innerHTML = `
  <section class="page">
    <div class="page-head">
      <div><span class="eyebrow">Baza wiedzy</span><h1>Biblioteka</h1>
      <p class="muted">${allResources().length} materiałów · ${readCount} przeczytanych. Linki do artykułów i narzędzi, Twoje książki i pliki dostępne offline.</p></div>
      <button class="btn primary" data-add>${icon('plus')} Dodaj materiał</button>
    </div>

    <div class="lib-tools card">
      <label class="search">${icon('search')}<input type="search" placeholder="Szukaj tytułu, autora, opisu…" value="${esc(ui.q)}" id="q"></label>
      <select id="mod" aria-label="Moduł">
        <option value="all">Wszystkie moduły</option>
        ${CHAPTERS.map((c, i) => `<option value="${c.id}" ${ui.mod === c.id ? 'selected' : ''}>${i + 1}. ${esc(c.short)}</option>`).join('')}
      </select>
      <select id="only" aria-label="Filtr">
        ${[['all', 'Wszystkie'], ['unread', 'Nieprzeczytane'], ['fav', 'Zapisane'], ['files', 'Z plikiem']].map(([k, l]) => `<option value="${k}" ${ui.only === k ? 'selected' : ''}>${l}</option>`).join('')}
      </select>
    </div>
    <div class="chips">
      <button class="chip ${ui.type === 'all' ? 'on' : ''}" data-type="all">Wszystko</button>
      ${types.map((t) => `<button class="chip ${ui.type === t ? 'on' : ''}" data-type="${t}">${RESOURCE_TYPES[t]}</button>`).join('')}
    </div>

    <div class="lib-grid">
      ${list.map((r) => {
        const rs = S.state.resources[r.id] || {};
        const att = r.fileId ? { name: r.fileName, size: r.fileSize } : S.state.attach[r.id];
        const host = r.url ? (() => { try { return new URL(r.url).hostname.replace(/^www\./, ''); } catch { return ''; } })() : '';
        return `
        <article class="lib card ${rs.read ? 'read' : ''}">
          <div class="lib-top">
            <span class="res-type t-${r.type}">${esc(RESOURCE_TYPES[r.type] || r.type)}</span>
            <button class="icon-btn ${rs.fav ? 'on' : ''}" data-fav="${r.id}" aria-label="Zapisz">${icon('bookmark')}</button>
          </div>
          <h3>${esc(r.title)}</h3>
          ${r.author ? `<p class="small muted">${esc(r.author)}</p>` : ''}
          ${r.note ? `<p class="small">${esc(r.note)}</p>` : ''}
          <div class="lib-tags">${(r.tags || []).map((t) => { const c = CHAPTERS.find((x) => x.id === t); return c ? `<span class="mtag" style="--c:${c.color}">${esc(c.short)}</span>` : ''; }).join('')}</div>
          <div class="lib-src small muted">
            ${att ? `${icon('file')} ${esc(att.name)} · ${fmtBytes(att.size || 0)}` : host ? `${icon('link')} ${esc(host)}` : r.type === 'ksiazka' ? `${icon('file')} brak pliku — dołącz własny egzemplarz` : ''}
          </div>
          <div class="lib-actions">
            ${att || r.url ? `<button class="btn ghost sm" data-open="${r.id}">${icon(att ? 'file' : 'external')} Otwórz</button>` : ''}
            ${!r.custom ? `<button class="btn ghost sm" data-attach="${r.id}">${icon('upload')} ${att ? 'Zmień plik' : 'Dołącz plik'}</button>` : ''}
            <button class="btn sm ${rs.read ? 'on' : 'ghost'}" data-read="${r.id}">${icon('check')} ${rs.read ? 'Przeczytane' : 'Oznacz'}</button>
            ${r.custom ? `<button class="icon-btn" data-del="${r.id}" aria-label="Usuń">${icon('trash')}</button>` : ''}
          </div>
        </article>`;
      }).join('') || '<p class="muted">Nic nie pasuje do filtrów.</p>'}
    </div>
    <input type="file" id="attachInput" hidden accept=".pdf,.epub,.djvu,.mobi,.txt,.md,.doc,.docx,image/*">
  </section>`;

  const rerender = () => library(el);
  const q = el.querySelector('#q');
  q.addEventListener('input', () => { ui.q = q.value; const pos = q.selectionStart; rerender(); const nq = el.querySelector('#q'); nq.focus(); nq.setSelectionRange(pos, pos); });
  el.querySelector('#mod').addEventListener('change', (e) => { ui.mod = e.target.value; rerender(); });
  el.querySelector('#only').addEventListener('change', (e) => { ui.only = e.target.value; rerender(); });
  el.querySelectorAll('[data-type]').forEach((b) => b.addEventListener('click', () => { ui.type = b.dataset.type; rerender(); }));
  el.querySelectorAll('[data-fav]').forEach((b) => b.addEventListener('click', () => { S.toggleResource(b.dataset.fav, 'fav'); rerender(); }));
  el.querySelectorAll('[data-read]').forEach((b) => b.addEventListener('click', () => { S.toggleResource(b.dataset.read, 'read'); rerender(); }));
  el.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openResource(b.dataset.open)));

  const input = el.querySelector('#attachInput');
  let attachFor = null;
  el.querySelectorAll('[data-attach]').forEach((b) => b.addEventListener('click', () => { attachFor = b.dataset.attach; input.click(); }));
  input.addEventListener('change', async () => {
    const f = input.files[0];
    if (!f || !attachFor) return;
    const old = S.state.attach[attachFor];
    const saved = await DB.putFile(f);
    if (old) DB.deleteFile(old.fileId);
    S.state.attach[attachFor] = { fileId: saved.id, name: saved.name, size: saved.size };
    S.checkBadges();
    S.save();
    toast(`${icon('file')} Plik zapisany na tym urządzeniu`);
    rerender();
  });

  el.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', async () => {
    const r = S.state.custom.find((x) => x.id === b.dataset.del);
    if (!r || !confirm(`Usunąć „${r.title}” z biblioteki?`)) return;
    if (r.fileId) await DB.deleteFile(r.fileId);
    S.state.custom = S.state.custom.filter((x) => x.id !== r.id);
    S.save();
    rerender();
  }));

  el.querySelector('[data-add]').addEventListener('click', () => addDialog(rerender));
}

function addDialog(done) {
  modal(`
    <div class="modal-head"><h2>Dodaj materiał</h2><button class="icon-btn" data-close aria-label="Zamknij">${icon('x')}</button></div>
    <form class="form" id="addForm">
      <label>Tytuł<input name="title" required placeholder="np. Rigging Math Made Simple"></label>
      <div class="form-row">
        <label>Typ<select name="type">${Object.entries(RESOURCE_TYPES).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select></label>
        <label>Autor<input name="author" placeholder="opcjonalnie"></label>
      </div>
      <div class="seg" role="radiogroup">
        <label><input type="radio" name="src" value="url" checked><span>${icon('link')} Link</span></label>
        <label><input type="radio" name="src" value="file"><span>${icon('file')} Plik z urządzenia</span></label>
      </div>
      <label data-src="url">Adres URL<input name="url" type="url" placeholder="https://…"></label>
      <label data-src="file" hidden>Plik (PDF, EPUB…)<input name="file" type="file"></label>
      <label>Notatka<textarea name="note" rows="2" placeholder="Dlaczego warto, które rozdziały…"></textarea></label>
      <fieldset><legend class="small muted">Powiąż z modułami</legend>
        <div class="chips">${CHAPTERS.map((c) => `<label class="chip check"><input type="checkbox" name="tags" value="${c.id}"><span>${esc(c.short)}</span></label>`).join('')}</div>
      </fieldset>
      <div class="row end"><button type="button" class="btn ghost" data-close>Anuluj</button><button class="btn primary">Zapisz</button></div>
    </form>`, {
    onMount(m, close) {
      const form = m.querySelector('#addForm');
      form.querySelectorAll('[name=src]').forEach((r) => r.addEventListener('change', () => {
        const v = form.src.value;
        form.querySelectorAll('[data-src]').forEach((x) => { x.hidden = x.dataset.src !== v; });
        if (v === 'file') form.type.value = form.type.value === 'artykul' ? 'plik' : form.type.value;
      }));
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const entry = {
          id: 'u-' + Date.now().toString(36), title: fd.get('title').trim(), type: fd.get('type'),
          author: fd.get('author').trim(), note: fd.get('note').trim(), tags: fd.getAll('tags'),
        };
        if (form.src.value === 'file') {
          const f = form.file.files[0];
          if (!f) { toast('Wybierz plik', 'bad'); return; }
          const saved = await DB.putFile(f);
          Object.assign(entry, { fileId: saved.id, fileName: saved.name, fileSize: saved.size });
        } else {
          const url = fd.get('url').trim();
          if (!/^https?:\/\//i.test(url)) { toast('Podaj poprawny adres http(s)', 'bad'); return; }
          entry.url = url;
        }
        S.state.custom.unshift(entry);
        S.checkBadges();
        S.save();
        close();
        toast(`${icon('check')} Dodano do biblioteki`);
        done();
      });
    },
  });
}
