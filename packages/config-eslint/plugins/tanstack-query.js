import plugin from '@tanstack/eslint-plugin-query';
import { defineConfig } from 'eslint/config';

import { DATA_FILES } from '../base.js';

/** @see [@tanstack/query](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query) */
export const tanstackQuery = defineConfig([
  // The shipped config has no `files` key, so it would also cover data files.
  ...plugin.configs['flat/recommended'].map((config) => ({
    ...config,
    ignores: [...(config.ignores ?? []), ...DATA_FILES],
  })),
  { rules: { '@tanstack/query/infinite-query-property-order': 'off' } },
]);
