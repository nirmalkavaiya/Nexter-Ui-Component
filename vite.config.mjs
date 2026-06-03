import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

/* ── extractCssToFile ────────────────────────────────────────────────────────
 * After cssInjectedByJsPlugin embeds the CSS into dist/index.js as a
 * createTextNode() call, this plugin reads the built JS, extracts the CSS
 * string, and writes it to dist/index.css.
 *
 * Consumer projects can then choose either approach:
 *   Option A (runtime injection — default, no change needed):
 *       import 'nexter-ui-component'          → <style> injected at runtime
 *   Option B (build-time CSS file — for dashboards / bundlers):
 *       import 'nexter-ui-component/index.css' → CSS merged at build time
 * ────────────────────────────────────────────────────────────────────────── */
const extractCssToFile = () => ({
  name: 'nexter-extract-css-to-file',
  apply: 'build',
  enforce: 'post',
  closeBundle() {
    try {
      const jsPath = resolve(__dirname, 'dist/index.js');
      const js = readFileSync(jsPath, 'utf8');
      // cssInjectedByJsPlugin embeds CSS as:
      //   n.appendChild(document.createTextNode(`...CSS...`))
      // Extract everything between the first createTextNode( backtick and its closing backtick
      const start = js.indexOf('createTextNode(`');
      if (start === -1) {
        console.warn('⚠️  dist/index.css: could not locate CSS in built JS');
        return;
      }
      const cssStart = start + 'createTextNode(`'.length;
      const cssEnd   = js.indexOf('`)', cssStart);
      if (cssEnd === -1) {
        console.warn('⚠️  dist/index.css: could not find end of CSS string');
        return;
      }
      const css = js.slice(cssStart, cssEnd);
      const cssPath = resolve(__dirname, 'dist/index.css');
      writeFileSync(cssPath, css, 'utf8');
      console.log(`✅ dist/index.css  ${(css.length / 1024).toFixed(1)} kB`);
    } catch (e) {
      console.warn('⚠️  dist/index.css extraction failed:', e.message);
    }
  },
});

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),

    // ① Inject all CSS into a single IIFE inside dist/index.js.
    //    styleId prevents duplicate injection if the bundle loads twice.
    //    relativeCSSInjection: false keeps all CSS in index.js (not split
    //    per-component, which webpack's sideEffects optimisation would strip).
    cssInjectedByJsPlugin({
      styleId: 'nexter-ui-component',
      relativeCSSInjection: false,
      topExecutionPriority: true,
    }),

    // ② After cssInjectedByJsPlugin embeds CSS into index.js, extract it
    //    back out to dist/index.css for consumers who want build-time import.
    extractCssToFile(),
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
      external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx', 'tailwind-merge', '@splidejs/react-splide'],

      output: [
        /* ── ESM — preserveModules: each component gets its own file ── */
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
