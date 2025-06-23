import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //plugin in vite is like a helper or extension that adds extra features or behavior to Vite
})
