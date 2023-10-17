/** @see [eslint-plugin-ext](https://github.com/jiangfengming/eslint-plugin-ext) */
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
