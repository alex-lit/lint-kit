import plugin from 'eslint-plugin-pinia';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

/**
 * Правила для Pinia-хранилищ.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-pinia](https://github.com/lisilinhart/eslint-plugin-pinia)
 */
export const pinia = (config = []) =>
  defineConfig([
    {
      ...plugin.configs['recommended-flat'],
      files: FILES,
      rules: {
        ...plugin.configs['recommended-flat'].rules,
        'pinia/prefer-single-store-per-file': 'error',
      },
    },

    config,
  ]);
