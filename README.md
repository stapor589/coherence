# Coherence — Akademia System Engineera

Portal e-learningowy (PWA) do nauki inżynierii systemów nagłośnieniowych: predykcja, montaż, pomiar i optymalizacja.
Działa na telefonie i komputerze, offline, bez kont i bez backendu.

## Co jest w środku

| Sekcja | Opis |
|---|---|
| **Pulpit** | Poziom i ranga, cel dzienny, seria dni, „kontynuuj naukę”, aktywność z 7 dni, Twoje luki (z samooceny). |
| **Ścieżka** | Animowana mapa 15 modułów / 53 lekcji. Węzły z pierścieniem postępu, gwiazdkami i „płynącym sygnałem” na przebytych odcinkach. |
| **Kursy** | Katalog modułów → program → odtwarzacz lekcji krok po kroku → egzamin modułu → certyfikat (do druku/PDF). |
| **Lekcja** | Wprowadzenie i cele → zagadnienia z wyjaśnieniem i notatką → materiały → quiz → zadanie praktyczne → podsumowanie. |
| **Biblioteka** | ~70 materiałów (książki, artykuły, narzędzia, szkolenia, normy), wyszukiwarka i filtry. Własne linki i pliki (PDF/EPUB) zapisywane lokalnie w IndexedDB — dostępne offline. |
| **Powtórki** | Pytania z rozwiązanych quizów jako karty w systemie Leitnera (1 → 3 → 7 → 14 → 30 → 60 dni). |
| **Warsztat** | 11 kalkulatorów: delay/temperatura, λ i faza, spadek SPL, sumowanie, filtr grzebieniowy, end-fire/gradient, straty w kablu, mody, Sabine + Dc, konwersja dBu/dBV/dBFS, SPL z czułości. |
| **Dziennik** | Wpisy z realizacji: system, rola, problemy, wnioski, powiązane moduły. |
| **Profil** | Radar kompetencji (postęp vs samoocena), certyfikaty, 23 odznaki, ustawienia, eksport/import postępu, instalacja. |

### Gamifikacja
- **XP**: zagadnienie 10, quiz 50 (+25 za 100%), zadanie 40, materiał 15, wpis w dzienniku 30, egzamin 150, certyfikat 200.
- **Gwiazdki lekcji**: ★ teoria, ★★ quiz ≥ 80%, ★★★ praktyka. Lekcja „ukończona” od 2 gwiazdek.
- **Odblokowywanie**: kolejna lekcja po ★ w poprzedniej; kolejny moduł po teorii całego poprzedniego — albo od razu **testem kwalifikacyjnym** (≥ 80%). **Tryb swobodny** odblokowuje wszystko.
- **Rangi**: Stagehand → PA Tech → System Tech → System Engineer → Senior System Engineer → Lead System Designer → Master of Coherence.

## Program (15 modułów, 53 lekcje, 169 pytań)
1. Fizyka dźwięku i sygnał · 2. Elektroakustyka i łańcuch sygnałowy · 3. Kierunkowość i konfiguracje źródeł ·
4. Predykcja i projekt systemu · 5. Pomiar i analiza · 6. Optymalizacja i strojenie · 7. Systemy cyfrowe i sieci audio ·
8. Zasilanie, uziemienie i bezpieczeństwo · 9. Akustyka sal i propagacja w plenerze · 10. Produkcja i warsztat system engineera ·
11. Zaawansowane: immersja, sterowanie wiązką, automatyzacja · 12. Materiały i ustroje akustyczne ·
13. Pomieszczenie: mody, odbicia i rozpraszanie · 14. Izolacja akustyczna i tło · 15. Projektowanie pomieszczeń odsłuchowych i studyjnych

Moduły 12–15 oraz rozszerzenia lekcji o psychoakustyce i technikach pomiarowych (TDS, MLS, sweep) powstały
na podstawie studium podręcznika akustyki F. A. Everesta — treść jest autorska, przeniesione zostały fakty,
wzory i procedury, nie tekst źródłowy.

## Uruchomienie lokalne
```bash
python -m http.server 8080 --directory coherence
```
Otwórz http://localhost:8080. (PWA wymaga http(s) — nie działa z `file://`.)

## Publikacja (żeby mieć apkę na telefonie)
Dowolny statyczny hosting z https — np. **GitHub Pages**, **Netlify** (przeciągnij folder `coherence`) lub **Cloudflare Pages**.
Następnie na telefonie: Safari → Udostępnij → „Do ekranu początkowego” / Chrome → „Zainstaluj aplikację”.

## Struktura
```
coherence/
  index.html, manifest.webmanifest, sw.js, icons/
  css/app.css
  data/curriculum.js   ← moduły, lekcje, zagadnienia, quizy, zadania
  data/lessons.js      ← treść wyjaśnień do zagadnień
  data/resources.js    ← baza materiałów
  js/store.js          ← stan, XP, odznaki, odblokowania, powtórki (localStorage)
  js/db.js             ← pliki w IndexedDB
  js/ui.js             ← ikony, quiz, toasty, konfetti, modale
  js/views/*.js        ← ekrany
```
Nową lekcję dodajesz, dopisując obiekt w `curriculum.js` i wyjaśnienia w `lessons.js` (ta sama kolejność co `concepts`).

## Pomysły na kolejne etapy
- **Synchronizacja** między urządzeniami (Supabase / Firebase) zamiast ręcznego eksportu.
- **Edytor treści w aplikacji** — własne lekcje, pytania i karty.
- **Moduł RF** (koordynacja częstotliwości, IEM) i **instalacje** (EN 54, systemy głosowe).
- **Studia przypadków**: pomiary przed/po z realnych eventów (zrzuty z Smaart/OSM) jako lekcje.
- **Przypomnienia push** o powtórkach i serii.
- **Interaktywne symulatory**: sumowanie dwóch źródeł na żywo, wizualizacja filtru grzebieniowego, układy subów.
