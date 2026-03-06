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
  - Ustawiono docelową domenę `https://www.salamonrafal.pl` w metadanych:
    - `canonical` i `og:url` jako URL absolutne,
    - `og:image` i `twitter:image` jako URL absolutne,
    - `url` (oraz `image`, gdzie dotyczy) w `JSON-LD` jako URL absolutne.
  - Zastąpiono Google Tag Manager (`GTM-WWMDSD3Q`) przez Google Analytics 4 (`G-Z0D63QZ7HP`) na wszystkich podstronach:
    - dodano kod `gtag.js` bezpośrednio po otwierającym tagu `<head>`,
    - usunięto fragment `noscript` GTM, aby na każdej stronie był tylko jeden tag Google.
  - Naprawiono strukturę HTML po zmianach analityki:
    - przywrócono brakujący otwierający tag `<body>` we wszystkich podstronach.
  - Ujednolicono formatowanie:
    - dostosowano wcięcia sekcji Google tag do stylu pozostałej części kodu.
  - Uzupełniono atrybuty SEO w znaczniku `body`:
    - dodano `data-page-title` na wszystkich podstronach (`index/about/projects/tools/contact`) zgodnie z zawartością tagu `<title>`.
- Konfiguracja Apache (`.htaccess`)
  - Dodano plik `.htaccess` w katalogu głównym z regułą `RewriteEngine` wymuszającą przekierowanie `non-www` -> `www` (301).
- Wszystkie strony (`index/about/projects/tools/contact`)
  - Ujednolicono zakończenia plików `.html`: po końcowym tagu `</html>` pozostawiono dokładnie jedną nową linię.

- Dodatkowe zmiany (uzupełnienie, 2026-03-05)
  - `sitemap.xml`
    - Wygenerowano mapę strony dla: `/`, `/about.html`, `/projects.html`, `/tools.html`, `/contact.html`.
    - Zaktualizowano wszystkie adresy `loc` do domeny `https://www.salamonrafal.pl`.
    - Ujednolicono zakończenie pliku: po `</urlset>` pozostawiono dokładnie jedną nową linię.
  - `robots.txt`
    - Dodano plik `robots.txt` z regułami:
      - `User-agent: *`
      - `Allow: /`
      - `Sitemap: https://www.salamonrafal.pl/sitemap.xml`
  - Wszystkie strony (`index/about/projects/tools/contact`)
    - Ujednolicono domenę w metadanych SEO do `https://www.salamonrafal.pl`:
      - `canonical`, `og:url`, `og:image`, `twitter:image`, `JSON-LD` (`url` / `image`).

## 2026-03-06

- `404.html`
  - Dodano spersonalizowaną stronę błędu `404` w stylu konsoli.
  - Zastosowano ten sam górny topbar i menu mobilne co na pozostałych podstronach.
  - Dodano centralny, duży napis `404`, opis błędu (PL/EN) oraz przyciski nawigacyjne.
- `assets/css/styles.css`
  - Dodano sekcję stylów `404 page` (`.error-main`, `.error-card`, `.error-code`, `.error-actions` itd.) dla konsolowego wyglądu strony błędu.
  - Poprawiono zachowanie menu mobilnego przy aktywnym hamburgerze (`<=900px`):
    - ukrywane są boczne kontrolki w topbarze (`lang/theme/color`),
    - kontrolki pozostają dostępne w sekcji `Preferencje` wewnątrz menu mobilnego.
  - Usprawniono dostępność menu mobilnego na ekranach o małej wysokości (np. orientacja pozioma):
    - dodano przewijanie wewnętrzne `mobile-drawer`,
    - ustawiono ograniczenie wysokości przez `bottom: 16px`.
- `.htaccess`
  - Dodano obsługę dokumentu błędu: `ErrorDocument 404 /404.html`.

- Dodatkowe zmiany (uzupełnienie, 2026-03-06)
  - `contact.html` / `assets/css/styles.css`
    - Naprawiono górne zaokrąglenia bloku metod kontaktu:
      - dodano promienie rogów dla `.contact-card .card-header`,
      - pozostawiono `overflow: visible` dla poprawnego działania tooltipa.
  - `projects.html` / `assets/css/styles.css`
    - Scalono sekcje `Publiczne` i `Komercyjne` w jeden wspólny blok (`card`).
    - Obie części pozostawiono jako podsekcje wewnątrz bloku.
    - Zwiększono odstęp między podsekcjami do `20px`.
    - Wyróżniono nagłówki podsekcji (tło, obramowanie i akcent), aby wyraźnie oznaczyć start nowej części.
  - `assets/css/styles.css`
    - Ujednolicono pionowe odstępy między głównymi blokami na wszystkich stronach:
      - stały odstęp `20px` między sąsiednimi sekcjami w `main.container`,
      - usunięto niespójne pionowe paddings z `.hero` oraz `.section`.
    - Ujednolicono odstęp pierwszej sekcji od górnego menu:
      - `padding-top: 20px` dla `main.container` również na małych ekranach (`<=480px`).
  - `about.html`
    - Poprawiono odstęp pierwszego bloku od menu:
      - zmieniono inline margin pierwszej karty profilu z `12px 0` na `0`, aby zachowywała się spójnie jak na `tools.html`.
  - `assets/js/app.js` / `assets/css/styles.css`
    - Dodano globalny przycisk `Przenieś do Góry` dostępny na wszystkich podstronach.
    - Przycisk pojawia się dopiero po większym przewinięciu strony w dół.
    - Dodano szybkie przewijanie do góry po kliknięciu (z obsługą `prefers-reduced-motion`).
    - W wersji desktopowej pozycję przycisku dopasowano do prawej krawędzi głównego bloku treści (`--maxw`), zamiast do krawędzi okna.
    - Dodano ikonę w stylu konsolowym przy etykiecie przycisku.
    - Dostosowano efekt `hover` przycisku do stylu z top menu.
