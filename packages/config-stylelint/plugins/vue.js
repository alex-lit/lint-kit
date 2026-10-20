/**
 * Фабрика конфига поддержки Vue.js SFC.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue)
 */
export const vue = (options = {}) => ({
  extends: 'stylelint-config-recommended-vue',

  ...options,
});
