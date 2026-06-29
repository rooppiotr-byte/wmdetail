# Deploy do Home.pl (lub innego standardowego hostingu)

Strona jest skonfigurowana jako w pełni statyczna — bez Node.js, bez SSR.

## 1. Zbuduj lokalnie

Wymagany: Node.js 20+ albo Bun.

```bash
bun install        # lub: npm install
bun run build      # lub: npm run build
```

Po zakończeniu pojawi się katalog `dist/` zawierający:

```
dist/
├── index.html
├── polityka-prywatnosci/index.html
├── uslugi/detailing-wnetrza/index.html
├── uslugi/korekta-lakieru/index.html
├── uslugi/powloki-ceramiczne/index.html
├── uslugi/pranie-tapicerki/index.html
├── uslugi/mycie-detailingowe/index.html
├── sitemap.xml
├── robots.txt
├── .htaccess
└── assets/...
```

Każda podstrona ma własny `index.html` z pełnym SEO i JSON-LD.

## 2. Wgraj na Home.pl

Wgraj **zawartość** katalogu `dist/` (nie sam katalog) do głównego folderu domeny — najczęściej `public_html/` lub `domeny/twojadomena.pl/public_html/`. Możesz użyć FTP (FileZilla) lub Menedżera Plików w panelu Home.pl.

**Ważne:** upewnij się, że plik `.htaccess` też się wgrał (czasami klienci FTP ukrywają pliki zaczynające się od kropki — włącz pokazywanie ukrytych plików).

## 3. Po zmianie domeny

W pliku `src/lib/site.ts` ustaw `SITE_URL` na adres docelowej domeny (np. `https://wmdetail.pl`), przebuduj (`bun run build`) i wgraj ponownie. Zaktualizuj też URL-e w `public/sitemap.xml`.

## Co działa, a co nie

- ✅ Wszystkie podstrony, SEO, Open Graph, JSON-LD, sitemap, robots.txt
- ✅ Klik-to-call (`tel:`), Google Maps, linki do social media
- ❌ Brak backendu — formularze kontaktowe wymagałyby zewnętrznej usługi (np. Formspree)
