module.exports = {
  extends: ['plugin:promise/recommended'],

  plugins: ['promise'],

  rules: {
    'promise/catch-or-return': ['warn', { allowFinally: true }],
    'promise/no-promise-in-callback': 'off',
  },
};
