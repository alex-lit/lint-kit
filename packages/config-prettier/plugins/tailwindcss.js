import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: [
    'classnames',
    'clsx',
    'cn',
    'ctl',
    'cva',
    'tv',
    'tw',
    'twMerge',
  ],
};

/**
 * Сортирует утилитарные классы Tailwind CSS по каноническому порядку
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
