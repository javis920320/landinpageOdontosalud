import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind(), // Integración de Tailwind CSS
    {
      name: 'google-maps', // Nombre de la integración de Google Maps
      async script({ loadInlineScript }) {
        await loadInlineScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCmKB-jfnl8o4jrpU_o3puNwZfcxLUXs0o`);
      },
    },
  ],
});