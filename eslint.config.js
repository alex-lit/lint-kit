import { createFlatConfig } from '@alexlit/config-eslint';

export default [
  ...createFlatConfig(),

  {
    files: ['./packages/config-eslint/**/*.js'],

    rules: {
      'no-undef': 'off',
    },
  },
];
