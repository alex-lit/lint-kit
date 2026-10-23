import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
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

/**
 * Проверяет поддержку CSS-функций целевыми браузерами.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)
 */
export const noUnsupportedBrowserFeatures = (options = {}) =>
  mergeConfigs(DEFAULTS, options);
