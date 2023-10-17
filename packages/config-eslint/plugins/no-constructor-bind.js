/** @see [eslint-plugin-no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind) */
module.exports = {
  plugins: ['no-constructor-bind'],

  rules: {
    'no-constructor-bind/no-constructor-bind': 'error',
    'no-constructor-bind/no-constructor-state': 'error',
  },
};
