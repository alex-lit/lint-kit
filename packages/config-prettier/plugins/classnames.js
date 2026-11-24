import { mergeConfigs } from '../utils/merge-configs.js';
import { TAILWIND_ATTRIBUTES, TAILWIND_FUNCTIONS } from '../utils/tailwind.js';

const DEFAULTS = {
  customAttributes: TAILWIND_ATTRIBUTES,
  customFunctions: TAILWIND_FUNCTIONS,
  plugins: ['prettier-plugin-classnames'],
};

/**
 * Переносит длинные списки классов по `printWidth`
 *
 * Поддерживает `class`, `className`, `:class` и вызовы функций из
 * `customFunctions`. Для совместной работы с `prettier-plugin-tailwindcss`
 * добавьте `plugins.merge()` последним: без него Prettier использует только
 * один из плагинов, поддерживающих язык.
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-classnames](https://github.com/ony3000/prettier-plugin-classnames)
 */
export const classnames = (options = {}) => mergeConfigs(DEFAULTS, options);
