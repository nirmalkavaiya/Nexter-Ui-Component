import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // Inject all CSS into a single IIFE inside dist/index.js only.
    // styleId makes the injected <style> tag identifiable and prevents
    // duplicate injection if the bundle is accidentally loaded twice.
    // relativeCSSInjection: false ensures CSS is NOT split into per-component
    // files (which would be stripped by webpack's sideEffects optimisation).
    cssInjectedByJsPlugin({
      styleId: 'nexter-ui-component',
      relativeCSSInjection: false,
      topExecutionPriority: true,
    }),
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

    rollupOptions: {
      // clsx + tailwind-merge are peer-installed dependencies (in package.json
      // "dependencies"), so they must be external — Rollup will emit
      // `import { clsx } from 'clsx'` (package name), not a relative path into
      // dist/node_modules, which breaks webpack in consuming projects.
      external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx', 'tailwind-merge', '@splidejs/react-splide'],

      output: [
        /* ── ESM — preserveModules: each component gets its own file
              Enables true per-component tree-shaking in any bundler.
              Import path: nexter-ui-component → dist/index.js
              Per-component: nexter-ui-component/Button → dist/components/Button/index.js
        ── */
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'ReactJSXRuntime',
            'clsx': 'clsx',
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
            'clsx': 'clsx',
            'tailwind-merge': 'tailwindMerge',
            '@splidejs/react-splide': 'ReactSplide',
          },
        },
      ],
    },
  },
});
