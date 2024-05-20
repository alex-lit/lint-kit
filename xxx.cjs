const { createConfig } = require('@alexlit/config-eslint');

module.exports = createConfig(
  { node: true, security: true, 'no-await-in-promise': false },
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
);
