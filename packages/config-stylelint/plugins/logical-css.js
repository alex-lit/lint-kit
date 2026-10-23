import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  extends: ['stylelint-plugin-logical-css/configs/recommended'],
  plugins: ['stylelint-plugin-logical-css'],
};

/**
 * Проверяет использование логических CSS-свойств.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-plugin-logical-css](https://github.com/yuschick/stylelint-plugin-logical-css)
 */
export const logicalCss = (options = {}) => mergeConfigs(DEFAULTS, options);
