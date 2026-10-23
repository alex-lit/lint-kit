import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-no-indistinguishable-colors'],
  rules: { 'plugin/stylelint-no-indistinguishable-colors': true },
};

/**
 * Запрещает неразличимые цвета.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-no-indistinguishable-colors](https://github.com/ierhyna/stylelint-no-indistinguishable-colors)
 */
export const noIndistinguishableColors = (options = {}) =>
  mergeConfigs(DEFAULTS, options);
