import plugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

import { DTS_FILES, FILES, VUE_FILES } from '../base.js';

/** @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) */
export const unicorn = defineConfig([
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
      // Explicit: the default happens to be kebab case, but the intent is
      // worth pinning down. Applies to `.vue` components too, which is why
      // `vue/match-component-file-name` is kept in sync with it in `vue.js`.
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
      'unicorn/iteration-fallback-style': ['error', 'guard'],
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
      'unicorn/prefer-json-import': 'warn',
      'unicorn/prefer-module': 'warn',
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/prefer-temporal': 'off', // ES2026 only
      'unicorn/prefer-type-literal-last': 'off', // perfectionist/sort-intersection-types
      'unicorn/prefer-uint8array-hex': 'warn',
      'unicorn/relative-url-style': ['error', 'always'],
      'unicorn/single-line-block-comment-style': 'off',
    },
  },
  { files: ['**/.*'], rules: { 'unicorn/no-null': 'off' } },
  { files: DTS_FILES, rules: { 'unicorn/prefer-export-from': 'off' } },
  {
    // `null` is part of the type contract in Vue.js SFC:
    // `ref<Type | null>(null)` is the idiomatic way to declare an initially
    // empty reactive value. Everywhere else `null` remains an error.
    files: VUE_FILES,
    rules: { 'unicorn/no-null': 'off' },
  },
  {
    files: ['**/*.{api,endpoints,fixtures,schemas,service,spec,test}.{js,ts}'],
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
]);
