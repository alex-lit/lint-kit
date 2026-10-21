/**
 * Запрещает вложенные медиа-запросы.
 *
 * @param {Partial<import('stylelint').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-no-nested-media](https://github.com/dkrnl/stylelint-no-nested-media)
 */
export const noNestedMedia = (options = {}) => ({
  plugins: ['stylelint-no-nested-media'],

  ...options,

  rules: { 'pitcher/no-nested-media': true, ...options.rules },
});
