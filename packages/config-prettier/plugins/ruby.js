import { mergeConfigs } from '../utils/merge-configs.js';
import { htmlErb } from './html-erb.js';

const DEFAULTS = {
  overrides: [{ files: '*.html.erb', options: { parser: 'erb-template' } }],
  plugins: ['@prettier/plugin-ruby', htmlErb],
};

/**
 * Форматирует Ruby и ERB файлы
 *
 * `@4az/prettier-plugin-html-erb` подключается объектом через `html-erb.js`,
 * чтобы сбросить `PRETTIER_DEBUG`, который плагин выставляет на уровне модуля.
 * Для ERB требуются Ruby-гемы `prettier_print` и `syntax_tree`.
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [plugin-ruby](https://github.com/prettier/plugin-ruby)
 * @see [prettier-plugin-html-erb](https://github.com/Nilkee/prettier-plugin-html-erb)
 */
export const ruby = (options = {}) => mergeConfigs(DEFAULTS, options);
