import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-high-performance-animation'],
  rules: {
    'plugin/no-low-performance-animation-properties': [
      true,
      { ignore: 'paint-properties', ignoreProperties: [] },
    ],
  },
};

/**
 * Запрещает анимации, нагружающие рендеринг.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation)
 */
export const highPerformanceAnimation = (options = {}) =>
  mergeConfigs(DEFAULTS, options);
