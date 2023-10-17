/** @see [stylelint-use-nesting](https://github.com/csstools/stylelint-use-nesting) */
module.exports = {
  plugins: ['stylelint-use-nesting'],

  rules: {
    'csstools/use-nesting': ['always', { except: [], syntax: 'scss' }],
  },
};
