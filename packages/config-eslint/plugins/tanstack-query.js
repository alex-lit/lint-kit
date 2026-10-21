import plugin from '@tanstack/eslint-plugin-query';
import { defineConfig } from 'eslint/config';

import { createPlugin, DATA_FILES } from '../base.js';

/**
 * Правила для TanStack Query.
 *
 * @param {import('eslint').Linter.Config} [options] - Дополнительные flat-опции
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [@tanstack/query](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query)
 */
export const tanstackQuery = createPlugin(() =>
  defineConfig([
    // The shipped config has no `files` key, so it would also cover data files.
    ...plugin.configs['flat/recommended'].map((config) => ({
      ...config,
      ignores: [...(config.ignores ?? []), ...DATA_FILES],
    })),
    { rules: { '@tanstack/query/infinite-query-property-order': 'off' } },
  ]),
);
