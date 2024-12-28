// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://rinconhentai.com",
  adapter: vercel(),
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), sitemap()]
});