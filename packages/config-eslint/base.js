import { defineConfig } from 'eslint/config';
import globals from 'globals';

/** Все исходные файлы, которые покрывает общий конфиг */
export const FILES = ['**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts,vue}'];

/** Исходные файлы TypeScript */
export const TS_FILES = ['**/*.{ts,tsx,mts,cts}'];

/** Однофайловые компоненты Vue.js */
export const VUE_FILES = ['**/*.vue'];

/** Файлы JSON */
export const JSON_FILES = ['**/*.{json,jsonc,json5}'];

/** Файлы YAML */
export const YAML_FILES = ['**/*.{yaml,yml}'];

/**
 * Файлы с данными, а не с кодом.
 *
 * Плагины, которые поставляют конфиги без ключа `files`, иначе применили бы
 * свои правила к этим файлам, поэтому такие блоки должны явно их исключать.
 */
export const DATA_FILES = [...JSON_FILES, ...YAML_FILES];

/** Тестовые файлы */
export const TEST_FILES = [
  '**/*.{test,spec}.{js,cjs,mjs,jsx,ts,tsx,mts,cts,vue}',
];

/** Файлы деклараций типов */
export const DTS_FILES = ['**/*.d.{ts,mts,cts}'];

/** Исключены из линтинга */
export const IGNORES = [
  '**/.*',
  '**/.*/**',
  '**/_deprecated/**',
  '**/_legacy/**',
  '**/build/**',
  '**/dist/**',
  '**/docs/**',
  '**/mockServiceWorker.js',
  '**/storybook-*/**',
  '**/sw.js',
];

/**
 * Базовый конфиг.
 *
 * Задаёт область файлов, общие шаблоны игнорирования и глобальные переменные.
 * Добавляется автоматически из `defineConfig`, поэтому вручную его
 * разворачивать не нужно.
 *
 * @example
 *   import { defineConfig, plugins } from '@alexlit/config-eslint';
 *
 *   export default defineConfig({
 *     plugins: [plugins.javascript(), plugins.unicorn()],
 *   });
 */
export const base = defineConfig([
  { files: FILES, languageOptions: { globals: globals.browser } },

  // Глобальные объекты Node.js для commonjs/esm-файлов
  { files: ['**/*.{cjs,mjs}'], languageOptions: { globals: globals.node } },

  { linterOptions: { reportUnusedDisableDirectives: 'error' } },

  { ignores: IGNORES },
]);
