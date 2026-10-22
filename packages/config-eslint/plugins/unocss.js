import plugin from '@unocss/eslint-config/flat';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

/**
 * Правила для UnoCSS.
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [@unocss/eslint-config](https://unocss.dev/integrations/eslint)
 */
export const unocss = () =>
  defineConfig([
    { files: FILES, ...plugin },
    { files: FILES, rules: { 'unocss/order-attributify': 'off' } },
  ]);
