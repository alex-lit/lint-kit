import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['@prettier/plugin-xml'],
  xmlWhitespaceSensitivity: 'ignore',
};

/**
 * Форматирует XML-файлы
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [plugin-xml](https://github.com/prettier/plugin-xml)
 */
export const xml = (options = {}) => mergeConfigs(DEFAULTS, options);
