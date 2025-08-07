import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue, etc.

export default defineConfig({
  plugins: [react()],
 resolve: {
    preserveSymlinks: true, // Sometimes helps with monorepos
  } // This is important for deployment
})