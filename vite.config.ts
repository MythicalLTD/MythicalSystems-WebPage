import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import vueDevTools from 'vite-plugin-vue-devtools'
import ViteYaml from '@modyfi/vite-plugin-yaml';


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), ViteYaml()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const packageName = id.toString().split('node_modules/')[1].split('/')[0];
            if (packageName && packageName !== 'vue' && packageName !== 'vue-demi') {
              return `pkg-${packageName}`; // Each dependency gets its own chunk
            }
          }
          if (id.includes('/src/')) {
            return 'app'; // Your app's components
          }
        }
      },
    },
    chunkSizeWarningLimit: 1000, // Suppress warnings for larger chunks
  },
})
