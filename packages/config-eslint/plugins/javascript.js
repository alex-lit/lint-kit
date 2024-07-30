/* eslint-disable sonarjs/no-duplicate-string */
import plugin from '@eslint/js';

/** @see [eslint](https://eslint.org) */
export const javascript = [
  plugin.configs.recommended,

  {
    rules: {
      'class-methods-use-this': 'off',
      curly: 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],

      'lines-around-comment': [
        'warn',
        {
          afterBlockComment: false,
          afterLineComment: false,

          allowArrayEnd: true,
          allowArrayStart: true,

          allowBlockEnd: true,
          allowBlockStart: true,

          allowClassEnd: true,
          allowClassStart: true,

          allowObjectEnd: true,
          allowObjectStart: true,

          beforeBlockComment: true,
          beforeLineComment: false,
        },
      ],

      'no-console': 'warn',

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
            {
              group: ['@/', '@@/'],
              message: 'Use "~" instead of "@"',
            },
          ],
        },
      ],

      'no-return-await': 'off',
      'no-shadow': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'nonblock-statement-body-position': ['error', 'below'],
      'padding-line-between-statements': [
        'warn',
        // always
        { blankLine: 'always', next: '*', prev: 'block-like' },
        { blankLine: 'always', next: '*', prev: 'case' },
        { blankLine: 'always', next: '*', prev: 'cjs-export' },
        { blankLine: 'always', next: '*', prev: 'cjs-import' },
        { blankLine: 'always', next: '*', prev: 'class' },
        { blankLine: 'always', next: '*', prev: 'default' },
        { blankLine: 'always', next: '*', prev: 'directive' },
        { blankLine: 'always', next: '*', prev: 'expression' },
        { blankLine: 'always', next: '*', prev: 'iife' },
        { blankLine: 'always', next: '*', prev: 'multiline-block-like' },
        { blankLine: 'always', next: '*', prev: 'multiline-const' },
        { blankLine: 'always', next: '*', prev: 'multiline-expression' },
        { blankLine: 'always', next: '*', prev: 'multiline-let' },
        { blankLine: 'always', next: '*', prev: 'multiline-var' },
        { blankLine: 'always', next: '*', prev: 'singleline-const' },
        { blankLine: 'always', next: '*', prev: 'singleline-let' },
        { blankLine: 'always', next: '*', prev: 'singleline-var' },
        { blankLine: 'always', next: 'block-like', prev: '*' },
        { blankLine: 'always', next: 'cjs-export', prev: '*' },
        { blankLine: 'always', next: 'cjs-import', prev: '*' },
        { blankLine: 'always', next: 'class', prev: '*' },
        { blankLine: 'always', next: 'expression', prev: '*' },
        { blankLine: 'always', next: 'function', prev: '*' },
        { blankLine: 'always', next: 'iife', prev: '*' },
        { blankLine: 'always', next: 'multiline-block-like', prev: '*' },
        { blankLine: 'always', next: 'multiline-const', prev: '*' },
        { blankLine: 'always', next: 'multiline-expression', prev: '*' },
        { blankLine: 'always', next: 'multiline-let', prev: '*' },
        { blankLine: 'always', next: 'multiline-var', prev: '*' },
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: 'switch', prev: '*' },
        // any
        { blankLine: 'any', next: 'expression', prev: 'expression' },
        {
          blankLine: 'any',
          next: 'singleline-const',
          prev: 'singleline-const',
        },
        { blankLine: 'any', next: 'singleline-let', prev: 'singleline-let' },
        { blankLine: 'any', next: 'singleline-var', prev: 'singleline-var' },
        // never
        { blankLine: 'never', next: 'cjs-export', prev: 'cjs-export' },
        { blankLine: 'never', next: 'cjs-import', prev: 'cjs-import' },
        { blankLine: 'never', next: 'directive', prev: 'directive' },
      ],

      quotes: ['error', 'single'],
      'require-await': 'off',

      'sort-imports': [
        'warn',
        {
          allowSeparatedGroups: true,
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],

      'sort-keys': 'off',

      'sort-vars': 'warn',
    },
  },
];
