const P = {
  home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8a3.5 3.5 0 0 0 0-7H8a3.5 3.5 0 0 1 0-7h8"/>',
  courses: '<path d="M22 9L12 4 2 9l10 5 10-5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
  library: '<path d="M4 4h4v16H4zM10 4h4v16h-4z"/><path d="M16.2 4.6l3.4.9-3.9 14.9-3.4-.9z"/>',
  review: '<rect x="3" y="7" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
  tools: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/>',
  log: '<path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  profile: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
  more: '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-3 3-5 5.5-5 8 0 4 3 7 7 7z"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  play: '<path d="M8 5l11 7-11 7z"/>',
  right: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  left: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  file: '<path d="M6 2h8l5 5v15H6z"/><path d="M14 2v5h5"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-1.5 8 5-3 5 3-1.5-8"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  upload: '<path d="M12 21V9M7 14l5-5 5 5M4 3h16"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
  print: '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
  // ikony modułów
  wave: '<path d="M2 12c1.7-5 3.3-5 5 0s3.3 5 5 0 3.3-5 5 0 3.3 5 5 0"/>',
  amp: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h4M14 14h4"/>',
  speaker: '<rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="15" r="3.5"/><circle cx="12" cy="6.5" r="1.5"/>',
  blueprint: '<path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><path d="M9 3v16M15 5v16"/>',
  analyzer: '<path d="M3 20h18"/><path d="M4 16l4-6 4 3 4-8 4 5"/>',
  sliders: '<path d="M6 3v18M12 3v18M18 3v18"/><path d="M4 15h4M10 7h4M16 11h4"/>',
  network: '<rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-5h14v5"/>',
  room: '<path d="M3 21V8l9-5 9 5v13"/><path d="M7 21v-6h10v6"/>',
  clipboard: '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2M9 11h6M9 15h4"/>',
  panel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7.5 8v8M12 8v8M16.5 8v8"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12h6"/>',
  orbit: '<circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="4" ry="10"/>',
};

export const icon = (name, cls = '') =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;

export const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export const starsHTML = (n, max = 3) =>
  `<span class="stars">${Array.from({ length: max }, (_, i) => `<span class="st ${i < n ? 'on' : ''}">${icon('star')}</span>`).join('')}</span>`;

export const bar = (pct, color) =>
  `<div class="bar"><span style="width:${Math.max(0, Math.min(100, pct))}%;${color ? `--c:${color}` : ''}"></span></div>`;

export function ring(pct, { size = 64, stroke = 7, color = 'var(--accent)', label = '' } = {}) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r, off = c * (1 - Math.min(1, pct));
  return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="var(--track)" stroke-width="${stroke}" fill="none"/>
    <circle class="ring-val" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="${color}" stroke-width="${stroke}" fill="none"
      stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}" style="--from:${c}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
    ${label ? `<text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">${label}</text>` : ''}
  </svg>`;
}

export function toast(html, kind = '') {
  const host = document.getElementById('toasts');
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.innerHTML = html;
  host.appendChild(el);
  setTimeout(() => el.classList.add('out'), 2600);
  setTimeout(() => el.remove(), 3100);
}

export function confetti(n = 90) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const host = document.createElement('div');
  host.className = 'confetti';
  const colors = ['#2de2c0', '#ffc857', '#5aa9ff', '#ff5d73', '#b58cff', '#3be37a'];
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = colors[i % colors.length];
    p.style.setProperty('--dx', (Math.random() * 2 - 1) * 160 + 'px');
    p.style.setProperty('--rot', Math.random() * 1080 + 'deg');
    p.style.animationDelay = Math.random() * 0.4 + 's';
    p.style.animationDuration = 1.8 + Math.random() * 1.4 + 's';
    host.appendChild(p);
  }
  document.body.appendChild(host);
  setTimeout(() => host.remove(), 3800);
}

export function modal(html, { onMount, wide = false, dismiss = true } = {}) {
  const wrap = document.createElement('div');
  wrap.className = 'modal-wrap';
  wrap.innerHTML = `<div class="modal ${wide ? 'wide' : ''}" role="dialog" aria-modal="true">${html}</div>`;
  const close = () => { wrap.classList.add('out'); setTimeout(() => wrap.remove(), 200); };
  wrap.addEventListener('click', (e) => {
    if ((dismiss && e.target === wrap) || e.target.closest('[data-close]')) close();
  });
  document.body.appendChild(wrap);
  onMount?.(wrap.querySelector('.modal'), close);
  return close;
}

export const shuffle = (a) => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
};

// Silnik quizu: pytania jedno po drugim, natychmiastowa informacja zwrotna z wyjaśnieniem.
export function mountQuiz(el, questions, { color = 'var(--accent)', onFinish, title = 'Quiz' } = {}) {
  let idx = 0, correct = 0;
  const qs = questions.map((q) => {
    const order = shuffle(q.a.map((_, i) => i));
    return { ...q, order };
  });

  const renderQ = () => {
    const q = qs[idx];
    el.innerHTML = `
      <div class="quiz" style="--c:${color}">
        <div class="quiz-head">
          <span class="eyebrow">${esc(title)} · pytanie ${idx + 1} z ${qs.length}</span>
          <div class="quiz-dots">${qs.map((_, i) => `<i class="${i < idx ? 'done' : i === idx ? 'cur' : ''}"></i>`).join('')}</div>
        </div>
        <h3 class="quiz-q">${esc(q.q)}</h3>
        ${q.topicTitle ? `<p class="muted small">z lekcji: ${esc(q.topicTitle)}</p>` : ''}
        <div class="answers">
          ${q.order.map((ai, k) => `<button class="answer" data-ai="${ai}"><span class="key">${'ABCD'[k]}</span><span>${esc(q.a[ai])}</span></button>`).join('')}
        </div>
        <div class="quiz-feedback" hidden></div>
      </div>`;
    el.querySelectorAll('.answer').forEach((b) => b.addEventListener('click', () => pick(+b.dataset.ai)));
  };

  const pick = (ai) => {
    const q = qs[idx];
    const ok = ai === q.c;
    if (ok) correct++;
    el.querySelectorAll('.answer').forEach((b) => {
      const v = +b.dataset.ai;
      b.disabled = true;
      if (v === q.c) b.classList.add('correct');
      else if (v === ai) b.classList.add('wrong');
    });
    const fb = el.querySelector('.quiz-feedback');
    fb.hidden = false;
    fb.className = `quiz-feedback ${ok ? 'ok' : 'bad'}`;
    fb.innerHTML = `<div><strong>${ok ? 'Dobrze!' : 'Nie tym razem.'}</strong> ${esc(q.e || '')}</div>
      <button class="btn primary" data-next>${idx + 1 < qs.length ? 'Dalej' : 'Zobacz wynik'} ${icon('right')}</button>`;
    fb.querySelector('[data-next]').addEventListener('click', () => {
      idx++;
      if (idx < qs.length) renderQ(); else finish();
    });
    fb.querySelector('[data-next]').focus();
  };

  const finish = () => {
    const score = correct / qs.length;
    onFinish?.(score, correct, qs.length);
  };

  renderQ();
}

export const fmt = (n, d = 1) => (Number.isFinite(n) ? n.toLocaleString('pl-PL', { maximumFractionDigits: d, minimumFractionDigits: 0 }) : '—');
export const fmtBytes = (b) => (b < 1024 ? `${b} B` : b < 1048576 ? `${fmt(b / 1024, 0)} KB` : `${fmt(b / 1048576, 1)} MB`);
