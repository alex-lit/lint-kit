import plugin from '@eslint/js';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/** @see [eslint](https://eslint.org) */
export const javascript = defineConfig([
  { files: FILES, ...plugin.configs.recommended },
  {
    files: FILES,
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'curly': 'error',
      'dot-notation': ['error'],
      'func-style': ['error', 'expression'],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'no-duplicate-imports': ['error', { includeExports: false }],
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
      'no-restricted-syntax': [
        'error',
        {
          message:
            "Не используйте префикс 'handle' для обработчиков событий. Переименуйте метод, заменив 'handle' на 'on' (например, 'onClick' вместо 'handleClick').",
          selector: 'Identifier[name=/^handle[A-Z]/]',
        },
      ],
      'prefer-arrow-callback': [
        'error',
        { allowNamedFunctions: false, allowUnboundThis: false },
      ],
      'prefer-const': 'warn',
      'prefer-template': 'warn',
    },
  },
]);
