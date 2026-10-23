import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-gamut'],
  rules: { 'gamut/color-no-out-gamut-range': true },
};

/**
 * Проверяет цвета на выход за пределы цветового охвата (gamut).
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-gamut](https://github.com/fpetrakov/stylelint-gamut)
 */
export const gamut = (options = {}) => mergeConfigs(DEFAULTS, options);
