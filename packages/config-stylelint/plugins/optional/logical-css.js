/** @see [stylelint-plugin-logical-css](https://github.com/yuschick/stylelint-plugin-logical-css) */
module.exports = {
  plugins: ['stylelint-plugin-logical-css'],

  rules: {
    'plugin/use-logical-properties-and-values': [
      true,
      {
        ignore: ['overflow-y', 'overflow-x'],
        severity: 'warning',
      },
    ],

    'plugin/use-logical-units': [true, { severity: 'warning' }],
  },
};
