import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Do not include '@supabase/supabase-js' here
      external: [],  // Remove any unintended externalization
    },
  },
});
