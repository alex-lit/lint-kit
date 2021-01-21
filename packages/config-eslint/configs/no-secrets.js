/**
 * [Plugin documentation](https://github.com/nickdeis/eslint-plugin-no-secrets)
 */
module.exports = {
  plugins: ['no-secrets'],

  rules: {
    'no-secrets/no-secrets': [
      'error',
      {
        ignoreContent: ['<'],
      },
    ],
  },
};
