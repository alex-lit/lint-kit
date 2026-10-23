import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  jsdocCommentLineStrategy: 'singleLine',
  jsdocSeparateReturnsFromParam: true,
  jsdocSeparateTagGroups: true,
  plugins: ['prettier-plugin-jsdoc'],
};

/**
 * Нормализует JSDoc-комментарии
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)
 */
export const jsdoc = (options = {}) => mergeConfigs(DEFAULTS, options);
