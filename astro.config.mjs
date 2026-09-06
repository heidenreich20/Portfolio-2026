import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: update to your real production domain before deploying.
const SITE_URL = 'https://heidenreich-dev.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',

  // Astro's built-in i18n routing generates real, crawlable URLs per
  // language instead of swapping text client-side. This is the main
  // SEO upgrade over the old react-i18next setup:
  //   /        -> English (default locale, no prefix)
  //   /es/     -> Spanish
  //   /it/     -> Italian
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          it: 'it-IT',
        },
      },
    }),
  ],
});
