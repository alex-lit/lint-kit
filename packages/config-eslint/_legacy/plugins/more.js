module.exports = {
  overrides: [
    {
      files: ['**/*.{test,spec}.{js,ts}'],

      rules: {
        'more/no-numeric-endings-for-variables': 'off',
      },
    },
  ],

  plugins: ['more'],

  rules: {
    'more/no-numeric-endings-for-variables': 'error',
  },
};
