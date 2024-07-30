import { config } from '@alexlit/config-eslint';

export default [
  ...config,
  {
    ignores: ['packages/config-eslint/_legacy'],
  },
];
