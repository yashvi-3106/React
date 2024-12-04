import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Ensure the root is set to your project root
  publicDir: 'public', // Optional, if you have a separate directory for static files
  build: {
    outDir: 'dist' // Directory where the build will be output
  }
})




