import { config } from '@alexlit/config-eslint';

export default [
  ...config,

  {
    ignores: ['packages/config-eslint/_legacy'],
  },

  {
    files: ['packages/**'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
];
