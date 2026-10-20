/**
 * Интегрирует Prettier.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
 */
export const prettier = (options = {}) => ({
  plugins: ['stylelint-prettier'],

  ...options,

  rules: { 'prettier/prettier': true, ...options.rules },
});
