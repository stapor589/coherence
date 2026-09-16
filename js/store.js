import { CHAPTERS } from '../data/curriculum.js';
import { LESSONS } from '../data/lessons.js';

const KEY = 'coherence.v1';
export const PASS = 0.8;

export const XP = {
  step: 10, quizPass: 50, quizPerfect: 25, task: 40, resource: 15,
  log: 30, review: 3, exam: 150, cert: 200, tool: 5,
};

export const RANKS = [
  [1, 'Stagehand'], [3, 'PA Tech'], [5, 'System Tech'], [8, 'System Engineer'],
  [12, 'Senior System Engineer'], [16, 'Lead System Designer'], [20, 'Master of Coherence'],
];

export const BADGES = [
  { id: 'first-step', icon: '👣', name: 'Pierwszy krok', desc: 'Przerób pierwsze zagadnienie' },
  { id: 'first-quiz', icon: '✅', name: 'Zaliczone', desc: 'Zdaj pierwszy quiz' },
  { id: 'perfect', icon: '🎯', name: 'Bez pudła', desc: 'Quiz na 100%' },
  { id: 'perfect5', icon: '🏹', name: 'Snajper', desc: '5 quizów na 100%' },
  { id: 'practice', icon: '🔧', name: 'Ręce w kablach', desc: 'Wykonaj zadanie praktyczne' },
  { id: 'practice10', icon: '🛠️', name: 'Praktyk', desc: '10 zadań praktycznych' },
  { id: 'module', icon: '📦', name: 'Moduł zamknięty', desc: 'Ukończ wszystkie lekcje modułu' },
  { id: 'cert1', icon: '🎓', name: 'Certyfikowany', desc: 'Zdobądź pierwszy certyfikat' },
  { id: 'cert5', icon: '🏅', name: 'Specjalista', desc: '5 certyfikatów' },
  { id: 'certAll', icon: '👑', name: 'Master of Coherence', desc: 'Wszystkie certyfikaty' },
  { id: 'tester', icon: '🚪', name: 'Na skróty', desc: 'Odblokuj moduł testem kwalifikacyjnym' },
  { id: 'streak3', icon: '🔥', name: 'Rozgrzewka', desc: 'Seria 3 dni' },
  { id: 'streak7', icon: '🔥', name: 'Tydzień w trasie', desc: 'Seria 7 dni' },
  { id: 'streak30', icon: '☄️', name: 'Trasa światowa', desc: 'Seria 30 dni' },
  { id: 'reader5', icon: '📚', name: 'Mól książkowy', desc: 'Przeczytaj 5 materiałów' },
  { id: 'reader20', icon: '🧠', name: 'Erudyta', desc: 'Przeczytaj 20 materiałów' },
  { id: 'librarian', icon: '🗂️', name: 'Bibliotekarz', desc: 'Dodaj własny materiał lub plik' },
  { id: 'log1', icon: '📓', name: 'Dziennik', desc: 'Pierwszy wpis z realizacji' },
  { id: 'log10', icon: '🎚️', name: 'Kronikarz', desc: '10 wpisów w dzienniku' },
  { id: 'review50', icon: '🔁', name: 'Pamięć absolutna', desc: '50 powtórek' },
  { id: 'tools5', icon: '🧮', name: 'Kalkulator w kieszeni', desc: 'Użyj 5 narzędzi z Warsztatu' },
  { id: 'level5', icon: '⭐', name: 'Poziom 5', desc: 'Osiągnij poziom 5' },
  { id: 'level10', icon: '🌟', name: 'Poziom 10', desc: 'Osiągnij poziom 10' },
];

export const today = (d = new Date()) => {
  const z = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
};
export const addDays = (iso, n) => { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n); return today(d); };

function fresh() {
  return {
    v: 1,
    profile: { name: '', dailyGoal: 60, freeMode: true, self: {}, onboarded: false, created: today() },
    xp: 0, xpLog: {}, awarded: {},
    topics: {}, exams: {}, unlocked: {}, certs: {},
    resources: {}, custom: [], attach: {},
    cards: {}, reviews: 0,
    log: [], badges: {}, tools: {},
  };
}

export const state = load();
const listeners = new Set();
export const on = (fn) => (listeners.add(fn), () => listeners.delete(fn));
const events = new Set();
export const onEvent = (fn) => (events.add(fn), () => events.delete(fn));
const emit = (e) => events.forEach((fn) => fn(e));

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (raw && raw.v === 1) return deepMerge(fresh(), raw);
  } catch { /* brak lub uszkodzony zapis */ }
  return fresh();
}
function deepMerge(base, over) {
  for (const k in over) {
    const v = over[k];
    base[k] = v && typeof v === 'object' && !Array.isArray(v) && base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])
      ? deepMerge(base[k], v) : v;
  }
  return base;
}

let saveTimer;
export function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* quota */ }
  }, 150);
  listeners.forEach((fn) => fn());
}

export function replaceState(next) {
  const merged = deepMerge(fresh(), next);
  Object.keys(state).forEach((k) => delete state[k]);
  Object.assign(state, merged);
  save();
}
export function resetAll() { replaceState(fresh()); }

// ---------- XP, poziomy, serie ----------
export const levelXP = (n) => Math.round(120 * Math.pow(n - 1, 1.5));
export function levelInfo(xp = state.xp) {
  let lvl = 1;
  while (xp >= levelXP(lvl + 1)) lvl++;
  const base = levelXP(lvl), next = levelXP(lvl + 1);
  const rank = [...RANKS].reverse().find(([l]) => lvl >= l)[1];
  return { lvl, rank, into: xp - base, span: next - base, pct: (xp - base) / (next - base), next };
}

export function award(key, amount, label) {
  if (key && state.awarded[key]) return false;
  if (key) state.awarded[key] = 1;
  const before = levelInfo().lvl;
  state.xp += amount;
  const d = today();
  state.xpLog[d] = (state.xpLog[d] || 0) + amount;
  emit({ type: 'xp', amount, label });
  const after = levelInfo().lvl;
  if (after > before) emit({ type: 'level', lvl: after, rank: levelInfo().rank });
  checkBadges();
  save();
  return true;
}

export function streak() {
  let d = today(), n = 0;
  if (!state.xpLog[d]) d = addDays(d, -1);
  while (state.xpLog[d]) { n++; d = addDays(d, -1); }
  return n;
}
export const xpToday = () => state.xpLog[today()] || 0;

// ---------- Tematy ----------
export const allTopics = () => CHAPTERS.flatMap((ch, ci) => ch.topics.map((t, ti) => ({ ...t, ch, ci, ti })));
export const findTopic = (id) => allTopics().find((t) => t.id === id);
export const findChapter = (id) => CHAPTERS.find((c) => c.id === id);

export function ts(id) {
  return (state.topics[id] ||= { read: {}, quizBest: -1, quizPerfect: 0, tasks: {}, taskNotes: '', stepNotes: {}, notes: '' });
}

export function stars(topic) {
  const s = state.topics[topic.id];
  if (!s) return 0;
  let n = 0;
  if (topic.concepts.every((_, i) => s.read[i])) n++;
  if (s.quizBest >= PASS) n++;
  if (topic.tasks.every((_, i) => s.tasks[i])) n++;
  return n;
}

export function topicPct(topic) {
  const s = state.topics[topic.id];
  if (!s) return 0;
  const read = topic.concepts.filter((_, i) => s.read[i]).length / topic.concepts.length;
  const quiz = s.quizBest >= PASS ? 1 : 0;
  const tasks = topic.tasks.filter((_, i) => s.tasks[i]).length / topic.tasks.length;
  return Math.round((read * 0.45 + quiz * 0.35 + tasks * 0.2) * 100);
}
export const topicDone = (t) => stars(t) >= 2;

export function chapterPct(ch) {
  return Math.round(ch.topics.reduce((a, t) => a + topicPct(t), 0) / ch.topics.length);
}
export const chapterDone = (ch) => ch.topics.every(topicDone);

export function chapterUnlocked(ch) {
  const i = CHAPTERS.indexOf(ch);
  if (i <= 0 || state.profile.freeMode || state.unlocked[ch.id]) return true;
  return CHAPTERS[i - 1].topics.every((t) => stars(t) >= 1);
}
export function topicUnlocked(topic) {
  const ch = topic.ch || CHAPTERS.find((c) => c.topics.some((t) => t.id === topic.id));
  if (!chapterUnlocked(ch)) return false;
  const i = ch.topics.findIndex((t) => t.id === topic.id);
  if (i === 0 || state.profile.freeMode || state.unlocked[ch.id]) return true;
  return stars(ch.topics[i - 1]) >= 1;
}

export function nextTopic() {
  return allTopics().find((t) => topicUnlocked(t) && !topicDone(t)) || null;
}

export function lessonSteps(topic) {
  const lesson = LESSONS[topic.id] || { steps: [] };
  return [
    { type: 'intro', label: 'Wprowadzenie' },
    ...topic.concepts.map((c, i) => {
      const raw = lesson.steps[i];
      const body = typeof raw === 'string' ? { t: raw } : (raw || { t: '' });
      return { type: 'concept', i, label: c, text: body.t || '', eq: body.eq, where: body.where, viz: body.viz };
    }),
    { type: 'materials', label: 'Materiały' },
    { type: 'quiz', label: 'Quiz' },
    { type: 'task', label: 'Zadanie praktyczne' },
    { type: 'summary', label: 'Podsumowanie' },
  ];
}

export function markRead(topic, i) {
  const s = ts(topic.id);
  if (s.read[i]) return;
  s.read[i] = true;
  award(`read:${topic.id}:${i}`, XP.step, 'Zagadnienie przerobione');
  afterProgress(topic);
}

export function recordQuiz(topic, score) {
  const s = ts(topic.id);
  s.quizBest = Math.max(s.quizBest, score);
  s.attempted = true;
  if (score >= PASS) award(`quiz:${topic.id}`, XP.quizPass, 'Quiz zaliczony');
  if (score === 1) {
    if (award(`perfect:${topic.id}`, XP.quizPerfect, 'Bezbłędnie!')) s.quizPerfect = 1;
  }
  seedCards(topic);
  afterProgress(topic);
}

export function toggleTask(topic, i, val) {
  const s = ts(topic.id);
  s.tasks[i] = val;
  if (val) award(`task:${topic.id}:${i}`, XP.task, 'Zadanie praktyczne');
  afterProgress(topic);
}

function afterProgress(topic) {
  checkCerts();
  checkBadges();
  save();
}

// ---------- Egzaminy i certyfikaty ----------
export function recordExam(ch, score) {
  const e = (state.exams[ch.id] ||= { best: -1, attempts: 0 });
  e.best = Math.max(e.best, score);
  e.attempts++;
  let unlockedNow = false;
  if (score >= PASS) {
    award(`exam:${ch.id}`, XP.exam, 'Egzamin modułu zdany');
    if (!chapterUnlocked(ch)) { state.unlocked[ch.id] = true; unlockedNow = true; }
  }
  checkCerts();
  checkBadges();
  save();
  return { unlockedNow };
}

export function certReady(ch) {
  return chapterDone(ch) && (state.exams[ch.id]?.best ?? -1) >= PASS;
}
function checkCerts() {
  for (const ch of CHAPTERS) {
    if (!state.certs[ch.id] && certReady(ch)) {
      state.certs[ch.id] = { date: today(), score: state.exams[ch.id].best };
      award(`cert:${ch.id}`, XP.cert, `Certyfikat: ${ch.short}`);
      emit({ type: 'cert', ch });
    }
  }
}

// ---------- Materiały ----------
export function toggleResource(id, field) {
  const r = (state.resources[id] ||= {});
  r[field] = !r[field];
  if (field === 'read' && r.read) award(`res:${id}`, XP.resource, 'Materiał przeczytany');
  checkBadges();
  save();
}

// ---------- Powtórki (system Leitnera) ----------
const INTERVALS = [0, 1, 3, 7, 14, 30, 60];
export function seedCards(topic) {
  topic.quiz.forEach((_, i) => {
    const id = `${topic.id}:${i}`;
    state.cards[id] ||= { box: 0, due: today() };
  });
}
export function dueCards() {
  const d = today();
  return Object.entries(state.cards).filter(([, c]) => c.due <= d).map(([id]) => id);
}
export function gradeCard(id, ok) {
  const c = state.cards[id];
  if (!c) return;
  c.box = ok ? Math.min(c.box + 1, INTERVALS.length - 1) : 1;
  c.due = addDays(today(), ok ? INTERVALS[c.box] : 1);
  state.reviews++;
  award(`review:${today()}:${id}`, XP.review, 'Powtórka');
  checkBadges();
  save();
}
export function cardData(id) {
  const [tid, qi] = id.split(':');
  const topic = findTopic(tid);
  return topic ? { topic, q: topic.quiz[+qi] } : null;
}

// ---------- Dziennik i narzędzia ----------
export function addLog(entry) {
  const id = 'log-' + Date.now().toString(36);
  state.log.unshift({ id, ...entry });
  award(`log:${id}`, XP.log, 'Wpis w dzienniku');
  checkBadges();
  save();
}
export function removeLog(id) {
  state.log = state.log.filter((e) => e.id !== id);
  save();
}
export function useTool(id) {
  if (state.tools[id]) return;
  state.tools[id] = today();
  award(`tool:${id}`, XP.tool, 'Nowe narzędzie');
}

// ---------- Odznaki ----------
function checkBadges() {
  const b = state.badges, d = today();
  const give = (id, cond) => { if (cond && !b[id]) { b[id] = d; emit({ type: 'badge', badge: BADGES.find((x) => x.id === id) }); } };
  const topics = Object.values(state.topics);
  give('first-step', topics.some((t) => Object.keys(t.read).length));
  give('first-quiz', topics.some((t) => t.quizBest >= PASS));
  give('perfect', topics.some((t) => t.quizBest === 1));
  give('perfect5', topics.filter((t) => t.quizBest === 1).length >= 5);
  const tasks = topics.reduce((a, t) => a + Object.values(t.tasks).filter(Boolean).length, 0);
  give('practice', tasks >= 1);
  give('practice10', tasks >= 10);
  give('module', CHAPTERS.some(chapterDone));
  const certs = Object.keys(state.certs).length;
  give('cert1', certs >= 1);
  give('cert5', certs >= 5);
  give('certAll', certs === CHAPTERS.length);
  const s = streak();
  give('streak3', s >= 3); give('streak7', s >= 7); give('streak30', s >= 30);
  const read = Object.values(state.resources).filter((r) => r.read).length;
  give('reader5', read >= 5); give('reader20', read >= 20);
  give('librarian', state.custom.length > 0 || Object.keys(state.attach).length > 0);
  give('log1', state.log.length >= 1); give('log10', state.log.length >= 10);
  give('review50', state.reviews >= 50);
  give('tools5', Object.keys(state.tools).length >= 5);
  const { lvl } = levelInfo();
  give('level5', lvl >= 5); give('level10', lvl >= 10);
  give('tester', Object.keys(state.unlocked).length > 0);
}
export { checkBadges };
