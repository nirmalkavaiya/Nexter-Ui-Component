import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

/*
 * CSS strategy
 * ────────────
 * cssInjectedByJsPlugin has been removed intentionally.
 *
 * Previously it embedded all styles into dist/index.js as a runtime
 * document.createElement('style') call. This caused a duplicate <style>
 * tag when consumer projects also imported dist/index.css at build time.
 *
 * Now Vite emits dist/index.css naturally via:
 *   build.cssCodeSplit: false          → all CSS in one asset
 *   assetFileNames: 'index[extname]'   → asset named index.css
 *
 * dist/index.js contains ZERO CSS injection code.
 *
 * Consumer usage (add once in your project entry):
 *   import 'nexter-ui-component/index.css';
 */

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],

  server: {
    port: 5174,
  },

  /* ── Vitest ─────────────────────────────────────────────── */
  test: {
    environment: 'jsdom',
    globals: true,
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
    },

    /* All CSS into one asset — no per-module splitting */
    cssCodeSplit: false,

    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx', 'tailwind-merge', '@splidejs/react-splide'],

      output: [
        /* ── ESM — preserveModules: each component gets its own file ── */
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: 'index[extname]',   // CSS → dist/index.css
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'ReactJSXRuntime',
            clsx: 'clsx',
            'tailwind-merge': 'tailwindMerge',
            '@splidejs/react-splide': 'ReactSplide',
          },
        },

        /* ── CJS — single bundle for Node / CommonJS consumers ── */
        {
          format: 'cjs',
          entryFileNames: 'index.cjs.js',
          chunkFileNames: '[name].cjs.js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'ReactJSXRuntime',
            clsx: 'clsx',
            'tailwind-merge': 'tailwindMerge',
            '@splidejs/react-splide': 'ReactSplide',
          },
        },
      ],
    },
  },
});
