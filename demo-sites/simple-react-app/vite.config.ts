import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { simpleReactApp } from '../constants'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: simpleReactApp.basePath,
  server: {
    port: simpleReactApp.proxyPort,
  },
});
