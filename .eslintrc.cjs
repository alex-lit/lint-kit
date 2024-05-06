const { createConfig } = require('@alexlit/config-eslint');

module.exports = createConfig(
  { node: true, security: true },
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
