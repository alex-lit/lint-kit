import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-prettier'],
  rules: { 'prettier/prettier': true },
};

/**
 * Интегрирует Prettier.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
 */
export const prettier = (options = {}) => mergeConfigs(DEFAULTS, options);
