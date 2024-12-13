import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/break-remainder/' // Ensure your server serves this subdirectory
})
