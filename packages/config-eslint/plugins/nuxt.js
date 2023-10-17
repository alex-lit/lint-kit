/** @see [eslint-plugin-nuxt](https://github.com/nuxt/eslint-plugin-nuxt) */
module.exports = {
  extends: ['plugin:nuxt/recommended'],

  plugins: ['nuxt'],

  rules: {
    'nuxt/require-func-head': 'error',
  },
};
