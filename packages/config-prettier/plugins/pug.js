import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['@prettier/plugin-pug'],
  pugCommentPreserveSpaces: 'trim-all',
  pugSingleQuote: false,
  pugSortAttributes: 'asc',
  pugWrapAttributesThreshold: 3,
};

/**
 * Форматирует Pug-шаблоны с сортировкой атрибутов и одинарными кавычками
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [plugin-pug](https://github.com/prettier/plugin-pug)
 */
export const pug = (options = {}) => mergeConfigs(DEFAULTS, options);
