/* eslint-disable unicorn/no-null */
import { defineConfig } from 'eslint/config';
import plugin from 'typescript-eslint';

import { FILES } from '../presets/base.js';

/** @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) */
export const typescript = defineConfig([
  ...plugin.configs.strict,
  ...plugin.configs.stylistic,

  {
    files: FILES,
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',

        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
          selector: 'function',
        },
        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'require',
          modifiers: ['private'],
          selector: 'memberLike',
        },
        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
          selector: 'parameter',
        },
        { format: ['StrictPascalCase'], selector: 'typeLike' },
        {
          format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          selector: 'variable',
        },
        { format: null, modifiers: ['destructured'], selector: 'variable' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowWithName: 'Props$' },
      ],
    },
  },
]);
