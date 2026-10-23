import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = { plugins: ['prettier-plugin-packagejson'] };

/**
 * Сортирует ключи в package.json
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)
 */
export const packageJson = (options = {}) => mergeConfigs(DEFAULTS, options);
