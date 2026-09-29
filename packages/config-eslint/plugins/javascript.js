import plugin from '@eslint/js';
import { defineConfig } from 'eslint/config';

import { FILES, TEST_FILES } from '../base.js';
import { NO_RESTRICTED_SYNTAX } from '../rules/restricted-syntax.js';
import { STYLE_RULES } from '../rules/style.js';

/** @see [eslint](https://eslint.org) */
export const javascript = defineConfig([
  { files: FILES, ...plugin.configs.recommended },
  {
    files: FILES,
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      ...STYLE_RULES,
      'dot-notation': ['error'],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'no-alert': 'error',
      'no-console': 'error',
      'no-duplicate-imports': ['error', { includeExports: false }],
      'no-implicit-coercion': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: ['then'],
          restrictedNamedExportsPattern: '^_',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            // Алиасы
            { group: ['~/', '~~/'], message: 'Используйте "@" вместо "~".' },
            // Расширения
            {
              message: 'Не указывайте расширения .ts или .js в путях импорта.',
              regex: String.raw`\.[jt]sx?$`,
            },
            // Относительные импорты
            { group: ['..', '*/..'], message: 'Используйте абсолютный путь.' },
            {
              message: 'Не используйте индексный импорт.',
              regex: String.raw`^\.$`,
            },
            {
              group: ['**/index'],
              message: 'Не используйте индексный импорт.',
            },
            // Внешние локальные ресурсы
            {
              group: ['@/**/_*', '@@/**/_*', '~/**/_*', '~~/**/_*'],
              message: 'Этот локальный ресурс не преднаназначен для импорта.',
            },
            // Устаревший функционал
            {
              message: 'Этот функционал устарел.',
              regex: '(_deprecated|_legacy)',
            },
          ],
        },
      ],
      'no-restricted-syntax': ['error', ...NO_RESTRICTED_SYNTAX],
      'prefer-arrow-callback': [
        'error',
        { allowNamedFunctions: false, allowUnboundThis: false },
      ],
      'prefer-const': 'warn',
      'prefer-template': 'warn',
    },
  },

  {
    // Tests are allowed to log and to alert
    files: TEST_FILES,
    rules: { 'no-alert': 'off', 'no-console': 'off' },
  },
]);
