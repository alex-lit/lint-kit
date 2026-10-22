import { defineConfig } from 'eslint/config';
import globals from 'globals';

/** All source files covered by the shareable config */
export const FILES = ['**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts,vue}'];

/** TypeScript source files */
export const TS_FILES = ['**/*.{ts,tsx,mts,cts}'];

/** Vue.js single-file components */
export const VUE_FILES = ['**/*.vue'];

/** JSON files */
export const JSON_FILES = ['**/*.{json,jsonc,json5}'];

/** YAML files */
export const YAML_FILES = ['**/*.{yaml,yml}'];

/**
 * Files that hold data rather than code.
 *
 * Plugins that ship configs without a `files` key would otherwise apply their
 * rules to these files, so such blocks have to exclude them explicitly.
 */
export const DATA_FILES = [...JSON_FILES, ...YAML_FILES];

/** Test files */
export const TEST_FILES = [
  '**/*.{test,spec}.{js,cjs,mjs,jsx,ts,tsx,mts,cts,vue}',
];

/** Type declaration files */
export const DTS_FILES = ['**/*.d.{ts,mts,cts}'];

/** Never linted */
export const IGNORES = [
  '**/.*',
  '**/.*/**',
  '**/_deprecated/**',
  '**/_legacy/**',
  '**/build/**',
  '**/dist/**',
  '**/docs/**',
  '**/mockServiceWorker.js',
  '**/storybook-*/**',
  '**/sw.js',
];

/**
 * Base config.
 *
 * Provides the file scope, the shared ignore patterns and the global variables.
 * It is added automatically by `defineConfig`, so you never spread it
 * yourself.
 *
 * @example
 *   import { defineConfig, plugins } from '@alexlit/config-eslint';
 *
 *   export default defineConfig([plugins.javascript(), plugins.unicorn()]);
 */
export const base = defineConfig([
  { files: FILES, languageOptions: { globals: globals.browser } },

  // Node.js globals for commonjs/esm files
  { files: ['**/*.{cjs,mjs}'], languageOptions: { globals: globals.node } },

  { linterOptions: { reportUnusedDisableDirectives: 'error' } },

  { ignores: IGNORES },
]);
