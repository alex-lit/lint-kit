/**
 * Проверяет цвета на выход за пределы цветового охвата (gamut).
 *
 * @param {Partial<import('stylelint').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-gamut](https://github.com/fpetrakov/stylelint-gamut)
 */
export const gamut = (options = {}) => ({
  plugins: ['stylelint-gamut'],

  ...options,

  rules: { 'gamut/color-no-out-gamut-range': true, ...options.rules },
});
