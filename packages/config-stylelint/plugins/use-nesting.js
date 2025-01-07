/** @see [stylelint-use-nesting](https://github.com/csstools/stylelint-use-nesting) */
export default {
  plugins: ['stylelint-use-nesting'],
  rules: {
    'csstools/use-nesting': ['always', { except: [], syntax: 'scss' }],
  },
};
