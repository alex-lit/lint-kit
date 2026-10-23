import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = { plugins: ['prettier-plugin-solidity'] };

/**
 * Форматирует контракты Solidity
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity)
 */
export const solidity = (options = {}) => mergeConfigs(DEFAULTS, options);
