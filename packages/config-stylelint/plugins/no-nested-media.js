import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-no-nested-media'],
  rules: { 'pitcher/no-nested-media': true },
};

/**
 * Запрещает вложенные медиа-запросы.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-no-nested-media](https://github.com/dkrnl/stylelint-no-nested-media)
 */
export const noNestedMedia = (options = {}) => mergeConfigs(DEFAULTS, options);
