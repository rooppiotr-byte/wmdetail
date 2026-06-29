// Fully static build for shared hosting (Home.pl).
// All routes listed in `tanstackStart.pages` are prerendered to HTML at build time.
// Inside the Lovable sandbox the Cloudflare preset is force-pinned by the wrapper,
// so the static output below only takes effect when building locally on your machine.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Globally enable prerendering and crawl <Link>s for any extra pages.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    // Explicit list of indexable routes — guarantees each gets its own .html file.
    pages: [
      { path: "/", prerender: { enabled: true, crawlLinks: true } },
      { path: "/polityka-prywatnosci", prerender: { enabled: true } },
      { path: "/uslugi/detailing-wnetrza", prerender: { enabled: true } },
      { path: "/uslugi/korekta-lakieru", prerender: { enabled: true } },
      { path: "/uslugi/powloki-ceramiczne", prerender: { enabled: true } },
      { path: "/uslugi/pranie-tapicerki", prerender: { enabled: true } },
      { path: "/uslugi/mycie-detailingowe", prerender: { enabled: true } },
    ],
  },
  // Nitro static preset → outputs plain HTML + assets into ./dist, no server required.
  nitro: {
    preset: "static",
    output: { dir: "dist", publicDir: "dist" },
  },
});
