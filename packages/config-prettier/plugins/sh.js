import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = { plugins: ['prettier-plugin-sh'] };

/**
 * Форматирует shell-скрипты
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-sh](https://github.com/astorije/prettier-plugin-sh)
 */
export const sh = (options = {}) => mergeConfigs(DEFAULTS, options);
