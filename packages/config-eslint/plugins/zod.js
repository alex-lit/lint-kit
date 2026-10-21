import plugin from 'eslint-plugin-zod';
import { defineConfig } from 'eslint/config';

import { createPlugin, FILES } from '../base.js';

/**
 * Правила для Zod-схем.
 *
 * @param {import('eslint').Linter.Config} [options] - Дополнительные flat-опции
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-zod](https://github.com/marcalexiei/eslint-zod/tree/main/plugins/eslint-plugin-zod)
 */
export const zod = createPlugin(() =>
  defineConfig([
    {
      ...plugin.configs.recommended,
      files: FILES,
      rules: {
        ...plugin.configs.recommended.rules,
        'zod/consistent-import': ['error', { syntax: 'named' }],
      },
    },
  ]),
);
