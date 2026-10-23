import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  overrides: [{ files: '*.html.erb', options: { parser: 'eruby-parse' } }],
  plugins: ['@prettier/plugin-ruby', 'prettier-plugin-eruby'],
};

/**
 * Форматирует Ruby и ERB файлы
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [plugin-ruby](https://github.com/prettier/plugin-ruby)
 * @see [prettier-plugin-eruby](https://github.com/ippachi/prettier-plugin-eruby)
 */
export const ruby = (options = {}) => mergeConfigs(DEFAULTS, options);
