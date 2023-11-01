/* eslint-disable unicorn/no-null */

const ALLOW_BOOLEAN_PROPERTY_LIST = require('./allow-boolean-property-list.const');
const BOOLEAN_PREFIXES = require('./boolean-prefixes.const');
const ENGLISH_VERBS = require('./english-verbs.const');

/** @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) */
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],

  overrides: [
    {
      files: ['*.d.ts', '.*'],

      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
    {
      files: ['**/store/**/*', '**/vuex/**/*', '**/pinia/**/*'],

      rules: {
        '@typescript-eslint/no-shadow': 'off',
      },
    },
  ],

  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array' }],

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/indent': 'off',

    '@typescript-eslint/member-ordering': 'off', // delegate to sort-class-members plugin

    '@typescript-eslint/method-signature-style': ['error', 'method'],

    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase'],
        selector: 'default',
      },
      {
        format: ['camelCase'],
        selector: 'variable',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'require',
        modifiers: ['private'],
        selector: 'memberLike',
      },
      {
        format: ['PascalCase'],
        selector: ['typeLike'],
      },
      {
        format: ['UPPER_CASE'],
        selector: ['enumMember'],
      },
      {
        custom: {
          match: false,
          regex: '^I[A-Z]',
        },

        format: ['PascalCase'],
        selector: 'interface',
      },
      {
        format: null,
        leadingUnderscore: 'allow',
        selector: 'objectLiteralProperty',
      },
      {
        format: null,
        selector: 'objectLiteralMethod',
      },
      {
        format: null,
        modifiers: ['destructured'],
        selector: 'parameter',
      },
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        modifiers: ['const'],
        selector: 'variable',
      },
      {
        filter: {
          match: false,
          regex: `(${ALLOW_BOOLEAN_PROPERTY_LIST.join('|')})`,
        },

        format: ['PascalCase'],

        leadingUnderscore: 'allow',

        prefix: BOOLEAN_PREFIXES,

        selector: ['accessor', 'parameter', 'variable'],

        types: ['boolean'],
      },
      {
        format: ['PascalCase'],

        leadingUnderscore: 'allow',

        prefix: [...ENGLISH_VERBS, 'on'],

        selector: ['classMethod', 'function'],
      },
    ],

    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],

    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'off', // delegate to eslint-plugin-unused-imports
    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/sort-type-constituents': ['error'],
    '@typescript-eslint/unified-signatures': ['error'],
  },
};
