import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { api_google } from './env.d.ts';

export default defineConfig({
  integrations: [
    tailwind(), // Integración de Tailwind CSS
    {
      name: 'google-maps', // Nombre de la integración de Google Maps
      async script({ loadInlineScript }) {
        await loadInlineScript(api_google);
      },
    },
  ],
});