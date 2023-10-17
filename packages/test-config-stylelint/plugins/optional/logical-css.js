/** @see [stylelint-plugin-logical-css](https://github.com/yuschick/stylelint-plugin-logical-css) */
module.exports = {
  plugins: ['stylelint-plugin-logical-css'],

  rules: {
    'plugin/use-logical-properties-and-values': [true, { severity: 'warning' }],

    'plugin/use-logical-units': [true, { severity: 'warning' }],
  },
};
