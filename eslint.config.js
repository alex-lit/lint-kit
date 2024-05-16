import { createFlatConfig } from '@alexlit/config-eslint';

export default [
  {
    overrides: [
      {
        files: ['./packages/config-eslint/**/*.js'],

        rules: {
          'no-undef': 'off',
        },
      },
    ],
  },

  ...createFlatConfig(),
];
