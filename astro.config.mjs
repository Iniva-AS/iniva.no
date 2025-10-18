// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://iniva.no',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://iniva.no/',
        'https://iniva.no/arbeid/',
        'https://iniva.no/blogg/',
        'https://iniva.no/kontakt/',
        'https://iniva.no/personvern/',
      ],
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://iniva.no/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        }
        // Blog and work pages get high priority
        else if (item.url.includes('/blogg/') || item.url.includes('/arbeid/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        }
        // Index pages get medium-high priority
        else if (item.url.endsWith('/arbeid/') || item.url.endsWith('/blogg/')) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        }
        // Contact and other pages get medium priority
        else {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
});