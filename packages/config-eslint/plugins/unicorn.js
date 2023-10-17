/** @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) */
module.exports = {
  extends: ['plugin:unicorn/recommended'],

  overrides: [
    {
      files: ['.*'],

      rules: {
        'unicorn/no-null': 'off',
      },
    },
    {
      files: ['*.d.ts'],

      rules: {
        'unicorn/prefer-export-from': 'off',
      },
    },
  ],

  plugins: ['unicorn'],

  rules: {
    'unicorn/better-regex': 'off',

    'unicorn/consistent-function-scoping': [
      'error',
      { checkArrowFunctions: false },
    ],

    'unicorn/no-array-for-each': 'off',

    'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],

    'unicorn/no-empty-file': 'off',

    'unicorn/prefer-module': 'off',

    'unicorn/prefer-node-protocol': 'off',

    'unicorn/prevent-abbreviations': [
      'warn',
      {
        allowList: {
          ProcessEnv: true,
          args: true,
          attrs: true,
          env: true,
          i18n: true,
          params: true,
          props: true,
          ref: true,
        },

        checkFilenames: false, // delegate to eslint-plugin-filenames

        replacements: {
          index18n: {
            i18n: true,
          },
        },
      },
    ],
  },
};
