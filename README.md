# Opis:
Jest to przykład jak przy użyciu AI (Copilot) utworzyć swoje własne portfolio. Do Prompta Zalecam Dodąć

# Prompt:

Jestem: <kim jesteś>.
Twoje zadanie: Stwórz moją stronę portfolio.
Kontekst: Chcę stworzyć własną stronę internetową, która prezentowała by mój życiorys i była by reprezentacją dla przyszłych pracodawców.
Ważne informacje: <podaj styl (cyberpunk, formalny itd.), dodatkowe informacje adres przydatnych stro takich jak linkedin, facebook itd. >. 
Wynik oczekiwany: Strona gotowa do umieszczenia. Stwórz responsywne menu mobilne. Gotowa do pobrania. Możliwość odpalenia w przeglądarce po rozpakowaniu. 

# Uruchomienie

Otwórz `index.html` w przeglądarce.

Jeśli chcesz uruchomić przez serwer:

```bash
python -m http.server 8080
```

# Ostatnie zmiany

## 2026-03-04

- `about.html`
  - Dodano nowy blok `Hobby` (PL/EN).
  - Poprawiono sekcję `summary`: mniejszy odstęp między listą a opisem.
- `contact.html`
  - Przycisk `Kopiuj adres` przeniesiono obok e-maila i zamieniono na ikonę.
  - Dodano custom tooltip i usunięto tooltip systemowy.
  - Naprawiono obcinanie tooltipa poza kartą kontaktową.
  - Połączono e-mail + kopiowanie w stylu `buttons grouped`.
  - Dodano jednolite ikony metod kontaktu.
  - Ukryto numer telefonu.
  - Poprawiono responsywność grupy e-mail dla ekranów mobilnych (>=320px).
- `assets/css/styles.css`
  - Usunięto efekt przesuwania przycisków/linków po `hover`.
  - Poprawiono nagłówek: większe imię i nazwisko, mniejszy tytuł zawodowy.
  - Dodano poprawki mobile (`<=768px`, `<=480px`, `<=360px`) dla czytelności i układu.
  - Wymuszono jedną linię dla nazwy w topbarze (z `ellipsis`).
  - Zmniejszono odstęp treści strony głównej od menu.
  - Dostosowano sekcję profilu na `about.html` (mniejsze i wyśrodkowane zdjęcie, łamanie długich linków).
  - Dostosowano sekcję preferencji w menu mobilnym do jednej linii.
- `assets/js/app.js`
  - Naprawiono podwajanie tekstu w animacji terminala po zmianie języka (anulowanie poprzedniego renderu).
  - Dodano wybór koloru akcentu z zapisem w `localStorage`.
  - Rozszerzono obsługę i18n dla tooltipów/aria.
  - Ujednolicono obsługę wielu kontrolek `lang/theme/color` (desktop + mobile).
- Wszystkie strony (`index/about/projects/tools/contact`)
  - Dodano wybór koloru akcentu.
  - Połączono motyw + kolor w jednym chipie.
  - Na mobile przeniesiono opcje język/motyw/kolor do rozwijanego menu i scalono je w jedną sekcję `Preferencje`.
