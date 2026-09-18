import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://godschi10.github.io",
  base: "/portfolio-astro",
  // Speed: minify emitted HTML (~10-15% fewer bytes, zero visual change).
  compressHTML: true,
});
