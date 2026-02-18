/**
 * @type {import('stylelint').Config}
 *
 * @see [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)
 */
export default {
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignore: ['css-nesting'],
        ignorePartialSupport: true,
        severity: 'warning',
      },
    ],
  },
};
