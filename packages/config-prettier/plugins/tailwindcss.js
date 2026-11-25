import { parsers, options as pluginOptions } from 'prettier-plugin-tailwindcss';

import { mergeConfigs } from '../utils/merge-configs.js';

const cssPlugin = {
  options: pluginOptions,
  parsers: { css: parsers.css, less: parsers.less, scss: parsers.scss },
};

const DEFAULTS = { plugins: [cssPlugin] };

/**
 * Сортирует классы в `@apply` для CSS, SCSS и LESS
 *
 * Плагин регистрирует только CSS-парсеры, поэтому не трогает разметку Vue.js,
 * JSX и HTML. Классы в шаблонах форматирует
 * `eslint-plugin-better-tailwindcss`.
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
 */
export const tailwindcss = (options = {}) => mergeConfigs(DEFAULTS, options);
