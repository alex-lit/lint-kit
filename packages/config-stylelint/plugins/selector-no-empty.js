/**
 * Запрещает пустые селекторы.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-selector-no-empty](https://github.com/ssivanatarajan/stylelint-selector-no-empty)
 */
export const selectorNoEmpty = (options = {}) => ({
  plugins: ['stylelint-selector-no-empty'],

  ...options,

  rules: { 'plugin/stylelint-selector-no-empty': true, ...options.rules },
});
