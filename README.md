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

- Dodatkowe zmiany (uzupełnienie, 2026-03-04)
  - `contact.html` / `assets/js/app.js`
    - Naprawiono kopiowanie e-maila z ikony: usunięto otwieranie klienta poczty jako fallback i dodano bezpieczny fallback kopiowania do schowka.
  - `about.html`
    - Uporządkowano strukturę sekcji, usunięto zagnieżdżenia `blok w bloku` i usunięto pusty blok.
    - Dalsze korekty odstępów w sekcji `summary`.
  - `index.html` / `assets/css/styles.css`
    - Poprawiono panel `Szybki skrót`: wskazówkę przeniesiono pod nagłówek i ostylowano jako hint w stylu konsolowym.
  - `tools.html`
    - Zmniejszono odstęp w sekcji `Moje narzędzia`, aby był bardziej jednolity względem innych podstron.

## 2026-03-05

- Wszystkie strony (`index/about/projects/tools/contact`)
  - Rozszerzono SEO on-page:
    - unikalne `title` i `meta description` dla każdej podstrony,
    - dodano `meta robots`, `author`, `theme-color`,
    - dodano `canonical`, Open Graph (`og:*`) i Twitter Cards (`twitter:*`),
    - dodano dane strukturalne `JSON-LD` (Schema.org) dopasowane do typu strony.
  - Ustawiono docelową domenę `https://salamonrafal.pl` w metadanych:
    - `canonical` i `og:url` jako URL absolutne,
    - `og:image` i `twitter:image` jako URL absolutne,
    - `url` (oraz `image`, gdzie dotyczy) w `JSON-LD` jako URL absolutne.
  - Dodano Google Tag Manager (`GTM-WWMDSD3Q`) na wszystkich podstronach:
    - skrypt GTM najwyżej w sekcji `<head>`,
    - fragment `noscript` GTM bezpośrednio po otwierającym tagu `<body>`.

