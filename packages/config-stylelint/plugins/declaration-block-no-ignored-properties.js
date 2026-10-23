import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: { 'plugin/declaration-block-no-ignored-properties': true },
};

/**
 * Запрещает бесполезные свойства в блоке объявлений.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
 */
export const declarationBlockNoIgnoredProperties = (options = {}) =>
  mergeConfigs(DEFAULTS, options);
