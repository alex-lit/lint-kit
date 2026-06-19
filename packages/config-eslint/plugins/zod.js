import plugin from 'eslint-plugin-zod';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-zod](https://github.com/marcalexiei/eslint-zod/tree/main/plugins/eslint-plugin-zod) */
export const zod = defineConfig([
  {
    files: FILES,
    ...plugin.configs.recommended,

    rules: {
      ...plugin.configs.recommended.rules,
      'zod/consistent-import': ['error', { syntax: 'named' }],
    },
  },
]);
