## Goal

Produce a `dist/` folder of plain `.html` + assets that you can FTP-upload to Home.pl. No Node, no SSR, no Workers. Design, content, SEO, sitemap and robots stay identical.

## Approach: prerender every route to static HTML

A pure SPA build would give just one `index.html` and rely on JS to render `/uslugi/*`. That breaks SEO and breaks direct loads on shared hosting. Instead we prerender each route at build time so every URL becomes a real HTML file with full metadata + JSON-LD baked in.

## Changes

1. **`vite.config.ts`** — swap the Cloudflare/Worker target for a static Nitro preset and enable prerendering of every known route:
   - `nitro: { preset: "static", output: { dir: "dist", publicDir: "dist" } }`
   - `tanstackStart: { prerender: { enabled: true, crawlLinks: true }, pages: ["/", "/polityka-prywatnosci", "/uslugi/detailing-wnetrza", "/uslugi/korekta-lakieru", "/uslugi/powloki-ceramiczne", "/uslugi/pranie-tapicerki", "/uslugi/mycie-detailingowe"] }`
   - Drop the `server: { entry: "server" }` override (no Worker entry needed).

2. **Sitemap** — replace the dynamic server route `src/routes/sitemap[.]xml.ts` with a static `public/sitemap.xml` containing the same URLs (delete the old `.ts` file). The contents and `SITE_URL` stay the same.

3. **`public/robots.txt`** — unchanged (already static).

4. **`public/.htaccess`** — add Apache rewrites so direct hits to prerendered URLs serve the matching `index.html`, and unknown paths fall back to the home page:
   ```
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)/$ /$1/index.html [L]
   RewriteRule . /index.html [L]
   ```
   Plus gzip + long cache headers for `/assets/*`.

5. **Server-only files** — remove (or leave dormant) `src/server.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts`. They're harmless but unused in a static build; safest is to leave them and just stop referencing them in `vite.config.ts`.

6. **Verify** — run `bun run build`, confirm `dist/index.html`, `dist/polityka-prywatnosci/index.html`, `dist/uslugi/detailing-wnetrza/index.html`, etc., and `dist/sitemap.xml` + `dist/robots.txt` all exist.

## Deployment to Home.pl

Upload the entire `dist/` folder contents (not the folder itself) to your `public_html` (or domain root) via FTP/File Manager. That's it — no Node, no build step on the server.

## Notes / caveats (technical)

- `tel:` links, the Google Maps iframe, and all client interactions keep working — they're pure HTML/JS.
- After upload, set `SITE_URL` in `src/lib/site.ts` to your real Home.pl domain so canonical/OG/sitemap URLs match, then rebuild and re-upload.
- Inside Lovable's sandbox the Cloudflare preset is force-pinned, so the static output must be built locally (`bun install && bun run build`) on your machine before upload. I'll document this in a short `DEPLOY.md`.
