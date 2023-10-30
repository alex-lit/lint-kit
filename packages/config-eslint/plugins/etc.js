/** @see [eslint-plugin-etc](https://github.com/cartant/eslint-plugin-etc) */
module.exports = {
  extends: ['plugin:etc/recommended'],

  plugins: ['etc'],

  rules: {
    'etc/no-implicit-any-catch': 'off',
    'etc/no-misused-generics': 'off',
    'etc/no-t': 'error',
    'etc/prefer-less-than': 'off',
    'etc/underscore-internal': 'error',
  },
};
