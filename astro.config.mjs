// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set `site` to your live URL. Use https://aiforgeworx.github.io until the
// custom domain is connected, then switch to https://aiforgeworx.com.
export default defineConfig({
  site: 'https://aiforgeworx.com',
  integrations: [sitemap()],
});
