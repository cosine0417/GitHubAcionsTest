// vitest.config.js   ⬅️ 完整覆蓋
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue(), vueJsx()],  // ❌ 不帶 vueDevTools
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    include: ['src/__tests__/**/*.spec.js'],
    exclude: ['e2e/**'],
  },
})
