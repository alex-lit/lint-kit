import { defineConfig } from 'eslint/config';
import globals from 'globals';

export const FILES = ['**/*.{js,mjs,cjs,jsx,ts,tsx,vue}'];

/** Base config */
export const base = defineConfig([
  { files: FILES, languageOptions: { globals: globals.browser } },
  {
    ignores: [
      '**/.*/',
      '**/_deprecated/',
      '**/mockServiceWorker.js',
      '.*/',
      'build',
      'dist',
      'docs',
      'storybook-*',
      'sw.js',
    ],
  },
]);
