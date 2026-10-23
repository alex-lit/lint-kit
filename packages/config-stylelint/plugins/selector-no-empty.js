import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-selector-no-empty'],
  rules: { 'plugin/stylelint-selector-no-empty': true },
};

/**
 * Запрещает пустые селекторы.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-selector-no-empty](https://github.com/ssivanatarajan/stylelint-selector-no-empty)
 */
export const selectorNoEmpty = (options = {}) =>
  mergeConfigs(DEFAULTS, options);
