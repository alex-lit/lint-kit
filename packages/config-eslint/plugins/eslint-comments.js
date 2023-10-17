/** @see [eslint-plugin-eslint-comments](hhttps://github.com/mysticatea/eslint-plugin-eslint-comments) */
module.exports = {
  extends: ['plugin:eslint-comments/recommended'],

  plugins: ['eslint-comments'],

  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
};
