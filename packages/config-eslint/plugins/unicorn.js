import plugin from 'eslint-plugin-unicorn';

/** @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) */
export const unicorn = [
  plugin.configs['flat/all'],
  {
    rules: {
      'unicorn/better-regex': 'off',
      'unicorn/consistent-destructuring': 'warn',
      'unicorn/consistent-function-scoping': [
        'error',
        { checkArrowFunctions: false },
      ],
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],
      'unicorn/no-empty-file': 'off',
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/prevent-abbreviations': [
        'warn',
        {
          allowList: {
            Args: true,
            args: true,
            Attrs: true,
            attrs: true,
            Env: true,
            env: true,
            i18n: true,
            ImportMetaEnv: true,
            Params: true,
            params: true,
            ProcessEnv: true,
            Props: true,
            props: true,
            Ref: true,
            ref: true,
            Src: true,
            src: true,
          },
          checkFilenames: false,
          replacements: { index18n: { i18n: true } },
        },
      ],
    },
  },
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
];
