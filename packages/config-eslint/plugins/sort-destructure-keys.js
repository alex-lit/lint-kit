/** @see [eslint-plugin-sort-destructure-keys](https://github.com/mthadley/eslint-plugin-sort-destructure-keys) */
module.exports = {
  plugins: ['sort-destructure-keys'],

  rules: {
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: true },
    ],
  },
};
