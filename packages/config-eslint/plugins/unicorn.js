import plugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) */
export const unicorn = defineConfig([
  { files: FILES, ...plugin.configs.all },
  {
    files: FILES,
    rules: {
      'unicorn/consistent-function-scoping': [
        'error',
        { checkArrowFunctions: false },
      ],
      'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],
      'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
      'unicorn/no-empty-file': 'off',
      'unicorn/no-for-each': 'off',
      'unicorn/prefer-export-from': ['error', { checkUsedVariables: true }],
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
            Utils: true,
            utils: true,
          },
          checkFilenames: false,
          replacements: { index18n: { i18n: true } },
        },
      ],
      'unicorn/relative-url-style': ['error', 'always'],
    },
  },
  { files: ['.*'], rules: { 'unicorn/no-null': 'off' } },
  { files: ['*.d.ts'], rules: { 'unicorn/prefer-export-from': 'off' } },
  {
    files: ['**/*.{fixtures,test,spec}.{js,ts}'],
    rules: {
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-object-as-default-parameter': 'off',
      'unicorn/no-useless-undefined': 'off',
    },
  },
]);
