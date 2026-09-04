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
      'no-restricted-syntax': [
        'error',
        {
          message:
            "Не используйте префикс 'handle' для обработчиков событий. Переименуйте метод, заменив 'handle' на 'on' (например, 'onClick' вместо 'handleClick').",
          selector: 'Identifier[name=/^handle[A-Z]/]',
        },
        {
          message:
            "Используйте методы массивов (.forEach, .map и т.д.) вместо цикла 'for'.",
          selector: 'ForStatement',
        },
        {
          message:
            "Используйте методы объектов (.keys, .values и т.д.) вместо цикла 'for...in'.",
          selector: 'ForInStatement',
        },
        {
          message:
            "Используйте методы массивов(.forEach, .map и т.д.) вместо цикла 'for...of'.",
          selector: 'ForOfStatement',
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
