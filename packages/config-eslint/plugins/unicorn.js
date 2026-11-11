import plugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

import { DTS_FILES, FILES, VUE_FILES } from '../base.js';

/**
 * Правила unicorn.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
 */
export const unicorn = (config = []) =>
  defineConfig([
    { ...plugin.configs.recommended, files: FILES },
    {
      files: FILES,
      rules: {
        'unicorn/comment-content': ['warn'],
        'unicorn/consistent-function-scoping': [
          'error',
          { checkArrowFunctions: false },
        ],
        'unicorn/consistent-function-style': [
          'error',
          { default: 'arrow-function' },
        ],
        // Явно: значение по умолчанию оказалось kebab case, но намерение
        // стоит зафиксировать. Применяется и к `.vue`-компонентам, поэтому
        // `vue/match-component-file-name` синхронизирован с этим в `vue.js`.
        'unicorn/filename-case': ['error', { case: 'kebabCase' }],
        'unicorn/iteration-fallback-style': ['error', 'guard'],
        'unicorn/name-replacements': 'off',
        'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],
        'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
        'unicorn/no-empty-file': 'off',
        'unicorn/no-for-each': 'off',
        'unicorn/no-this-outside-of-class': 'off', // используется в сеттерах/геттерах
        'unicorn/no-top-level-side-effects': 'off', // специфика Vue.js
        'unicorn/no-unused-properties': 'off', // не учитывает локальные ключи
        'unicorn/prefer-dom-node-html-methods': 'off', // Safari не поддерживает setHTML()
        'unicorn/prefer-export-from': ['error', { checkUsedVariables: true }],
        'unicorn/prefer-https': 'off', // для SVG нужен HTTP
        'unicorn/prefer-import-meta-properties': 'warn',
        'unicorn/prefer-iterator-concat': 'off', // только ES2026
        'unicorn/prefer-json-import': 'warn',
        'unicorn/prefer-module': 'warn',
        'unicorn/prefer-node-protocol': 'warn',
        'unicorn/prefer-temporal': 'off', // только ES2026
        'unicorn/prefer-type-literal-last': 'off', // perfectionist/sort-intersection-types
        'unicorn/prefer-uint8array-hex': 'warn',
        'unicorn/relative-url-style': ['error', 'always'],
        'unicorn/single-line-block-comment-style': 'off',
      },
    },
    { files: ['**/.*'], rules: { 'unicorn/no-null': 'off' } },
    { files: DTS_FILES, rules: { 'unicorn/prefer-export-from': 'off' } },
    {
      // `null` - часть контракта типов в Vue.js SFC:
      // `ref<Type | null>(null)` - идиоматичный способ объявить изначально
      // пустое реактивное значение. Везде ещё `null` остаётся ошибкой.
      files: VUE_FILES,
      rules: {
        'unicorn/no-null': 'off',
        'unicorn/no-useless-undefined': 'off',
      },
    },
    {
      files: [
        '**/*.{api,endpoints,fixtures,schemas,service,spec,test}.{js,ts}',
      ],
      rules: {
        'unicorn/max-nested-calls': 'off',
        'unicorn/no-keyword-prefix': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/no-useless-undefined': 'off',
      },
    },
    {
      files: ['**/temp/**/*.vue'],
      rules: { 'unicorn/name-replacements': 'off' },
    },

    config,
  ]);
