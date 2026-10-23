import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-use-nesting'],
  rules: { 'csstools/use-nesting': ['always', { except: [], syntax: 'scss' }] },
};

/**
 * Требует использования CSS-вложенности.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-use-nesting](https://github.com/csstools/stylelint-use-nesting)
 */
export const useNesting = (options = {}) => mergeConfigs(DEFAULTS, options);
