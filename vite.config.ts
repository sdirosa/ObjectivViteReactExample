import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import objectivDeveloperTools from "./plugins/vite-plugin-objectiv-developer-tools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    objectivDeveloperTools()
  ]
})
