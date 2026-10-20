/**
 * Фабрика конфига плагина, запрещающего бесполезные свойства в блоке
 * объявлений.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
 */
export const declarationBlockNoIgnoredProperties = (options = {}) => ({
  plugins: ['stylelint-declaration-block-no-ignored-properties'],

  ...options,

  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    ...options.rules,
  },
});
