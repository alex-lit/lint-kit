import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  overrides: [{ files: ['*.md'], options: { parser: 'mdc' } }],
  plugins: ['prettier-plugin-mdc'],
};

/**
 * Форматирует MDC-документы (Nuxt Content)
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-mdc](https://github.com/so1ve/prettier-plugin-mdc)
 */
export const mdc = (options = {}) => mergeConfigs(DEFAULTS, options);
