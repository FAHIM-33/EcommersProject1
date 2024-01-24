import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
export default defineConfig({
  server: { host: '0.0.0.0' },
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
