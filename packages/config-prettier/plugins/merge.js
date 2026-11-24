import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = { plugins: ['prettier-plugin-merge'] };

/**
 * Применяет Prettier-плагины последовательно
 *
 * Нужен, когда несколько плагинов форматируют один и тот же язык: без него
 * Prettier использует только последний из них. Плагин должен идти последним,
 * `defineConfig` перемещает его в конец автоматически.
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-merge](https://github.com/ony3000/prettier-plugin-merge)
 */
export const merge = (options = {}) => mergeConfigs(DEFAULTS, options);
