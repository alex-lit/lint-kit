import plugin from 'eslint-plugin-regexp';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

/**
 * Правила для регулярных выражений.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)
 */
export const regexp = (config = []) =>
  defineConfig([
    {
      files: FILES,
      ...plugin.configs['flat/recommended'],
      settings: {
        regexp: { allowedCharacterRanges: ['alphanumeric', 'а-я', 'А-Я'] },
      },
    },

    config,
  ]);
