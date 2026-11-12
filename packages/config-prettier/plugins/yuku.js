import { mergeConfigs } from '../utils/merge-configs.js';

/**
 * Костыли вокруг официального `@prettier/plugin-yuku`:
 *
 * 1. Плагин регистрирует парсеры `yuku` и `yuku-ts`, но простое добавление в
 *    `plugins` не переключает на них форматирование. Нужны `overrides` с явным
 *    `parser`.
 * 2. `plugins` продублированы внутри каждого override, как в официальном README.
 *    Prettier применяет override через `Object.assign`, поэтому `plugins` из
 *    override заменяют верхнеуровневый список для подходящих файлов. Это
 *    отключает `prettier-plugin-jsdoc` и `prettier-plugin-tailwindcss` для
 *    JS/TS под Yuku, что сейчас желательно: они не умеют работать с
 *    `yuku`/`yuku-ts`.
 *
 * Когда Yuku станет стабильным и плагины научатся с ним дружить, эти
 * override-костыли можно будет упростить до обычного верхнеуровневого `plugins:
 * ['@prettier/plugin-yuku']` и/или удалить.
 */
const DEFAULTS = {
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,jsx}'],
      options: { parser: 'yuku', plugins: ['@prettier/plugin-yuku'] },
    },
    {
      files: ['**/*.{ts,mts,cts,tsx}'],
      options: { parser: 'yuku-ts', plugins: ['@prettier/plugin-yuku'] },
    },
  ],
};

/**
 * Форматирует JavaScript и TypeScript экспериментальным парсером Yuku
 *
 * Заменяет стандартные парсеры Babel/TypeScript, поэтому для JS/TS не
 * загружаются `prettier-plugin-jsdoc` и `prettier-plugin-tailwindcss`. Плагин
 * пока экспериментальный: требует Prettier >= 3.6 и нативные бинарники `yuku`.
 *
 * @param {Partial<import('prettier').Config>} [options] - Опции, накладываемые
 *   поверх значений по умолчанию. Коллекции (`overrides`, `plugins`)
 *   дополняются, `plugins` дедуплицируются, более поздние `overrides`
 *   выигрывают, остальные поля заменяются
 *
 * @returns {import('prettier').Config}
 *
 * @see [plugin-yuku](https://github.com/prettier/prettier/tree/main/packages/plugin-yuku)
 */
export const yuku = (options = {}) => mergeConfigs(DEFAULTS, options);
