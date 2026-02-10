import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Cambia esto por tu dominio real cuando lo tengas (ayuda a SEO: canonical, sitemap, etc.).
  site: "https://ejemplo.com",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});

