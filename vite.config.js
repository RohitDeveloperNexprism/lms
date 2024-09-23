import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  build: {
    chunkSizeWarningLimit: 50000,
    rollupOptions: {
      external: ['browser-sync/lib/server/utils'], // Mark the problematic module as external
    },
  },
  server: {
    host: true,
  },
});
