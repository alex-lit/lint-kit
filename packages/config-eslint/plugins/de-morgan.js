import plugin from 'eslint-plugin-de-morgan';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

/**
 * Упрощает логические выражения с помощью правила Де Моргана.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-de-morgan](https://github.com/azat-io/eslint-plugin-de-morgan)
 */
export const deMorgan = (config = []) =>
  defineConfig([{ files: FILES, ...plugin.configs.recommended }, config]);
