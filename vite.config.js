import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/guruwatersupply/', // Make sure it starts and ends with a slash
})