import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://godschi10.github.io",
  base: "/portfolio-astro",
  // Speed: minify emitted HTML (~10-15% fewer bytes, zero visual change).
  compressHTML: true,
  // PageSpeed: kill the render-blocking CSS chain Astro-safe — every page's
  // styles ship in a head <style> (same cascade order, zero visual change,
  // no FOUC), so no external stylesheet ever blocks first paint.
  build: { inlineStylesheets: 'always' },
});
