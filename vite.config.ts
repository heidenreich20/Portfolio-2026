import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    Sitemap({
      hostname: 'https://heidenreich-dev.vercel.app/',
    })
  ],
})
