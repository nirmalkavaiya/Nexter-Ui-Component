import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],

  server: {
    port: 5174,
    strictPort: true,
  },

  /* ── Vitest ─────────────────────────────────────────────── */
  test: {
    environment: 'jsdom',
    globals: true,
    /* vmThreads avoids ESM-in-CJS issues from transitive jsdom 27 deps */
    pool: 'vmThreads',
    setupFiles: ['./tests/setup.js'],
    include: ['tests/**/*.{test,spec}.{js,jsx}', 'src/**/*.{test,spec}.{js,jsx}'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/components/**/*.{js,jsx}'],
      exclude: ['src/demo/**', '**/*.stories.{js,jsx}'],
    },
  },

  /* ── Library build ───────────────────────────────────────── */
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'NexterUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'es' : 'cjs'}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name;
        },
      },
    },
  },
});
