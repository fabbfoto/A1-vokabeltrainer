import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**'
      ]
    }
  },
  resolve: {
    alias: {
      '@core': resolve(__dirname, './src/core'),
      '@services': resolve(__dirname, './src/services'),
      '@ui': resolve(__dirname, './src/ui'),
      '@ui/views': resolve(__dirname, './src/ui/views'),
      '@ui/components': resolve(__dirname, './src/ui/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@infrastructure': resolve(__dirname, './src/infrastructure')
    }
  }
}); 