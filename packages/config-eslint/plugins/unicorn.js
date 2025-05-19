import plugin from 'eslint-plugin-unicorn';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) */
export const unicorn = [
  { files: FILES, ...plugin.configs['flat/all'] },
  {
    files: FILES,
    rules: {
      'unicorn/better-regex': 'off',
      'unicorn/consistent-function-scoping': [
        'error',
        { checkArrowFunctions: false },
      ],
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],
      'unicorn/no-empty-file': 'off',
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prefer-import-meta-properties': 'warn',
      'unicorn/prefer-module': 'warn',
      'unicorn/prefer-node-protocol': 'warn',
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
  { files: ['.*'], rules: { 'unicorn/no-null': 'off' } },
  { files: ['*.d.ts'], rules: { 'unicorn/prefer-export-from': 'off' } },
];
