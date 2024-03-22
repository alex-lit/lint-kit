// eslint-disable-next-line unicorn/prevent-abbreviations
module.exports = {
  plugins: ['ext'],

  rules: {
    'ext/lines-between-object-properties': [
      'warn',
      'always',
      { exceptBetweenSingleLines: true },
    ],
  },
};
