import plugin from '@unocss/eslint-config/flat';
import { defineConfig } from 'eslint/config';

import { createPlugin, FILES } from '../base.js';

/**
 * Правила для UnoCSS.
 *
 * @param {import('eslint').Linter.Config} [options] - Дополнительные flat-опции
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [@unocss/eslint-config](https://unocss.dev/integrations/eslint)
 */
export const unocss = createPlugin(() =>
  defineConfig([
    { files: FILES, ...plugin },
    { files: FILES, rules: { 'unocss/order-attributify': 'off' } },
  ]),
);
