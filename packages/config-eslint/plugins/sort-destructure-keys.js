module.exports = {
  plugins: ['sort-destructure-keys'],

  rules: {
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: true },
    ],
  },
};
