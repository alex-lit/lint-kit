/**
 * Фабрика конфига плагина логических CSS-свойств.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-plugin-logical-css](https://github.com/yuschick/stylelint-plugin-logical-css)
 */
export const logicalCss = (options = {}) => ({
  extends: ['stylelint-plugin-logical-css/configs/recommended'],
  plugins: ['stylelint-plugin-logical-css'],

  ...options,
});
