// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Yayına alırken gerçek alan adınızla değiştirin (canonical/OG URL'leri için).
  site: 'https://www.bitaksimardin.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
