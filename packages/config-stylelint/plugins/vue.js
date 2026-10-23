import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = { extends: 'stylelint-config-recommended-vue' };

/**
 * Подключает поддержку Vue.js SFC.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue)
 */
export const vue = (options = {}) => mergeConfigs(DEFAULTS, options);
