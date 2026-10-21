import plugin from 'eslint-plugin-de-morgan';
import { defineConfig } from 'eslint/config';

import { createPlugin, FILES } from '../base.js';

/**
 * Упрощает логические выражения с помощью правила Де Моргана.
 *
 * @param {import('eslint').Linter.Config} [options] - Дополнительные flat-опции
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-de-morgan](https://github.com/azat-io/eslint-plugin-de-morgan)
 */
export const deMorgan = createPlugin(() =>
  defineConfig([{ files: FILES, ...plugin.configs.recommended }]),
);
