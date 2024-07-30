module.exports = {
  extends: ['plugin:eslint-comments/recommended'],

  plugins: ['eslint-comments'],

  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
};
