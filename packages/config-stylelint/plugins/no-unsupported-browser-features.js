/**
 * Проверяет поддержку CSS-функций целевыми браузерами.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)
 */
export const noUnsupportedBrowserFeatures = (options = {}) => ({
  plugins: ['stylelint-no-unsupported-browser-features'],

  ...options,

  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignore: ['css-nesting'],
        ignorePartialSupport: true,
        severity: 'warning',
      },
    ],
    ...options.rules,
  },
});
