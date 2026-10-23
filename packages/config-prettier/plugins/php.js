import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = { plugins: ['@prettier/plugin-php'] };

/**
 * Форматирует PHP-файлы
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [plugin-php](https://github.com/prettier/plugin-php)
 */
export const php = (options = {}) => mergeConfigs(DEFAULTS, options);
