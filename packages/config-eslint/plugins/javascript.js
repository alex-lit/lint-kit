import plugin from '@eslint/js';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/** @see [eslint](https://eslint.org) */
export const javascript = defineConfig([
  { files: FILES, ...plugin.configs.recommended },
  {
    files: FILES,
    rules: {
      'curly': 'error',
      'dot-notation': ['error'],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'no-implicit-coercion': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: [
            'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
          ],
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['.', '..', '*/..'],
              message: 'Use absolute path instead',
            },
            { group: ['@/', '@@/'], message: 'Use "~" instead of "@"' },
          ],
        },
      ],
      'prefer-const': 'warn',
      'prefer-template': 'warn',
    },
  },
]);
