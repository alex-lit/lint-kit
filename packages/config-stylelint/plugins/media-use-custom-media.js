import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-media-use-custom-media'],
  rules: { 'csstools/media-use-custom-media': 'always' },
};

/**
 * Требует использования кастомных медиа-запросов.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-media-use-custom-media](https://github.com/csstools/stylelint-media-use-custom-media)
 */
export const mediaUseCustomMedia = (options = {}) =>
  mergeConfigs(DEFAULTS, options);
