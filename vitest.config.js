import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      include: ['src/__tests__/**/*.spec.js'],   // 只掃單元測試
      exclude: ['e2e/**'],
      globals: true,  // describe / it / expect 可全域使用
      css: true,      // 若專案沒有 CSS 可刪掉
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
