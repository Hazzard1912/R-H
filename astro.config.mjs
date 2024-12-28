// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel";
import sitemap from '@astrojs/sitemap';

const customPages = [
  '/tags/long_hair/1',
  '/tags/highres/1',
  '/tags/underwear/1',
  '/image/1',
  '/image/3',
  '/image/4',
  '/image/5',
  '/image/6',
]

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://rinconhentai.com",
  adapter: vercel(),
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), sitemap({
    customPages: customPages.map(page => `https://rinconhentai.com${page}`)
  })]
});