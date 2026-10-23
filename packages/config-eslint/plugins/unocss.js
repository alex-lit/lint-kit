import plugin from '@unocss/eslint-config/flat';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

/**
 * Правила для UnoCSS.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [@unocss/eslint-config](https://unocss.dev/integrations/eslint)
 */
export const unocss = (config = []) =>
  defineConfig([
    { files: FILES, ...plugin },
    { files: FILES, rules: { 'unocss/order-attributify': 'off' } },

    config,
  ]);
