/**
 * Фабрика конфига плагина, запрещающего неразличимые цвета.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-no-indistinguishable-colors](https://github.com/ierhyna/stylelint-no-indistinguishable-colors)
 */
export const noIndistinguishableColors = (options = {}) => ({
  plugins: ['stylelint-no-indistinguishable-colors'],

  ...options,

  rules: {
    'plugin/stylelint-no-indistinguishable-colors': true,
    ...options.rules,
  },
});
