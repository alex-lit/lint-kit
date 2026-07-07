import plugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) */
export const unicorn = defineConfig([
  { ...plugin.configs.recommended, files: FILES },
  {
    files: FILES,
    rules: {
      'unicorn/comment-content': 'off', // optional
      'unicorn/consistent-function-scoping': [
        'error',
        { checkArrowFunctions: false },
      ],
      'unicorn/name-replacements': 'off',
      'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],
      'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
      'unicorn/no-empty-file': 'off',
      'unicorn/no-for-each': 'off',
      'unicorn/no-this-outside-of-class': 'off', // used in setters/getters
      'unicorn/no-top-level-side-effects': 'off', // Vue.js specific
      'unicorn/no-unused-properties': 'off', // don't respect local keys
      'unicorn/prefer-dom-node-html-methods': 'off', // Safari not supports setHTML()
      'unicorn/prefer-export-from': ['error', { checkUsedVariables: true }],
      'unicorn/prefer-https': 'off', // SVG need HTTP
      'unicorn/prefer-import-meta-properties': 'warn',
      'unicorn/prefer-iterator-concat': 'off', // ES2026 only
      'unicorn/prefer-module': 'warn',
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/prefer-temporal': 'off', // ES2026 only
      'unicorn/prefer-type-literal-last': 'off', // perfectionist/sort-intersection-types
      'unicorn/relative-url-style': ['error', 'always'],
    },
  },
  { files: ['.*'], rules: { 'unicorn/no-null': 'off' } },
  { files: ['*.d.ts'], rules: { 'unicorn/prefer-export-from': 'off' } },
  {
    files: ['**/*.{api,endpoints,fixtures,schemas,service,test,spec}.{js,ts}'],
    rules: {
      'unicorn/max-nested-calls': 'off',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-object-as-default-parameter': 'off',
      'unicorn/no-useless-undefined': 'off',
    },
  },
  {
    files: ['**/temp/**/*.vue'],
    rules: { 'unicorn/prevent-abbreviations': 'off' },
  },
]);
