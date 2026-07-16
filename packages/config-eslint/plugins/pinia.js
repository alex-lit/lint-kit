import plugin from 'eslint-plugin-pinia';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-pinia](https://github.com/lisilinhart/eslint-plugin-pinia) */
export const pinia = defineConfig([
  {
    ...plugin.configs['recommended-flat'],
    files: FILES,
    rules: {
      ...plugin.configs['recommended-flat'].rules,
      'pinia/prefer-single-store-per-file': 'error',
    },
  },
]);
