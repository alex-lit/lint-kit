import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = { plugins: ['prettier-plugin-sql'] };

/**
 * Форматирует SQL-запросы
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-sql](https://github.com/un-ts/prettier/tree/master/packages/sql)
 */
export const sql = (options = {}) => mergeConfigs(DEFAULTS, options);
