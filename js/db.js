// Pliki (PDF, EPUB itp.) przechowywane lokalnie w IndexedDB — działają offline.
const DB = 'coherence-files', STORE = 'files';
let dbp;

function open() {
  return (dbp ||= new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: 'id' });
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  }));
}

const tx = async (mode, fn) => {
  const db = await open();
  return new Promise((res, rej) => {
    const t = db.transaction(STORE, mode);
    const out = fn(t.objectStore(STORE));
    t.oncomplete = () => res(out?.result ?? out);
    t.onerror = () => rej(t.error);
  });
};

export async function putFile(file) {
  const id = 'f-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  await tx('readwrite', (s) => s.put({ id, name: file.name, type: file.type, size: file.size, blob: file, added: Date.now() }));
  navigator.storage?.persist?.();
  return { id, name: file.name, size: file.size };
}

export const getFile = (id) => tx('readonly', (s) => s.get(id));
export const deleteFile = (id) => tx('readwrite', (s) => s.delete(id));

export async function openFile(id) {
  const rec = await getFile(id);
  if (!rec) throw new Error('Nie znaleziono pliku na tym urządzeniu');
  const url = URL.createObjectURL(rec.blob);
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  if (!/pdf|image|text|video|audio/.test(rec.type)) a.download = rec.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

export async function storageInfo() {
  if (!navigator.storage?.estimate) return null;
  const { usage, quota } = await navigator.storage.estimate();
  const persisted = await navigator.storage.persisted?.();
  return { usage, quota, persisted };
}
