module.exports = {
  plugins: ['no-secrets'],

  rules: {
    'no-secrets/no-secrets': [
      'error',
      {
        ignoreContent: ['<', '://', '@example', 'META', 'I18N'],
      },
    ],
  },
};
