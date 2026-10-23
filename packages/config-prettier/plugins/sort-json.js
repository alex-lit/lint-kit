import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  jsonRecursiveSort: true,
  plugins: ['prettier-plugin-sort-json'],
};

/**
 * Рекурсивно сортирует ключи JSON-объектов
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-sort-json](https://github.com/Gudahtt/prettier-plugin-sort-json)
 */
export const sortJson = (options = {}) => mergeConfigs(DEFAULTS, options);
