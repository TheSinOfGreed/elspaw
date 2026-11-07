# Elspaw – strona wizytówka

Angular 21 + SCSS, Angular CDK (modal), ngx-translate (i18n). Wszystkie biblioteki mają licencję MIT/OFL (użytek komercyjny dozwolony).

## Uruchomienie

```bash
npm install
npm start          # http://localhost:4200
npm run build      # wynik w dist/elspaw
```

## Jak dodać produkt lub realizację (bez programowania)

Treści są w plikach JSON w folderze `public/data/`. Zdjęcia wrzucamy do `public/images/`
i wpisujemy ich ścieżki w tablicy `images` (pierwsze zdjęcie jest miniaturą karty).

- `products.json` – karty z sekcji „Nasze produkty”
- `projects.json` – karty na podstronie „Realizacje”
- `contacts.json` – dane kontaktowe specjalistów i adres firmy

Teksty wielojęzyczne mają postać `{ "pl": "...", "en": "..." }`. Akapity w opisie rozdziela się `\n\n`.

### Realizacja

```json
{
  "id": "unikalny-identyfikator",
  "category": "private",
  "title": { "pl": "Tytuł", "en": "Title" },
  "location": { "pl": "Białystok", "en": "Białystok, Poland" },
  "summary": { "pl": "Krótki opis na karcie", "en": "Short card text" },
  "description": { "pl": "Pełny opis w oknie", "en": "Full text in the dialog" },
  "images": ["images/folder/zdjecie-1.png", "images/folder/zdjecie-2.png"]
}
```

Dozwolone wartości `category`:

| wartość   | filtr               |
| --------- | ------------------- |
| `public`  | Instytucje publiczne |
| `company` | Firmy               |
| `private` | Osoby prywatne      |
| `abroad`  | Zagranica           |

## Dodawanie języka

1. Skopiuj `public/i18n/pl.json` jako `public/i18n/<kod>.json` (np. `de.json`) i przetłumacz.
2. Dopisz język w `src/app/core/languages.ts`, np. `{ code: 'de', label: 'DE', name: 'Deutsch' }`.
3. W plikach `public/data/*.json` dodaj klucz `"de"` do tekstów. Gdy go brakuje, wyświetlany jest polski.

## Edycja treści przez GitHub (bez instalowania czegokolwiek)

1. Wejdź w repozytorium na github.com, otwórz np. `public/data/projects.json` i kliknij ikonę ołówka.
2. Zdjęcia dodasz przez `public/images/...` → **Add file → Upload files**.
3. Kliknij **Commit changes**. Strona sama się przebuduje i zaktualizuje w ciągu kilku minut (zakładka **Actions**).

## Wdrożenie na GitHub Pages

- Workflow `.github/workflows/deploy.yml` buduje stronę po każdym pushu do gałęzi `main`.
- W repozytorium: **Settings → Pages → Source: GitHub Actions**.
- Adres to `https://<konto>.github.io/<nazwa-repo>/`. Adres bazowy ustawia się sam z nazwy repo.
- Odświeżenie podstrony (`/realizacje`) działa dzięki kopii `index.html` zapisanej jako `404.html`.
- Przy własnej domenie zmień w workflow `--base-href` na `/`.
- GitHub Pages z prywatnego repozytorium wymaga płatnego planu GitHub (Pro, Team lub Enterprise).
