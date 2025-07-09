import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
// import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import pagefind from "astro-pagefind";

import sitemap from "@astrojs/sitemap";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  server: {
    host: '0.0.0.0', // Esto fuerza a Astro a escuchar en todas las interfaces
    port: 4321,      // Y asegura que sea en el puerto 4321
  },
  site: "https://ideal.fiuni.edu.py",
  build: {
    formats: ["file"],
    client: './dist/client',
    server: './dist/server',
  },
  integrations: [
    react(),
    markdoc(),
    // keystatic(),
    tailwind(),
    icon(),
    //pagefind(),
    sitemap(),
    auth(),
  ],
  output: "server",
  adapter: cloudflare(),
  vite: {
    ssr: {
      external: ['node:path']
    }
  }
});