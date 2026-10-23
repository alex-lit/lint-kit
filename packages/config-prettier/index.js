import { jsdoc } from './plugins/jsdoc.js';
import { mdc } from './plugins/mdc.js';
import { packageJson } from './plugins/packagejson.js';
import { php } from './plugins/php.js';
import { pug } from './plugins/pug.js';
import { ruby } from './plugins/ruby.js';
import { sh } from './plugins/sh.js';
import { solidity } from './plugins/solidity.js';
import { sortJson } from './plugins/sort-json.js';
import { sql } from './plugins/sql.js';
import { tailwindcss } from './plugins/tailwindcss.js';
import { xml } from './plugins/xml.js';
import { mergeConfigs } from './utils/merge-configs.js';

const DEFAULTS = {
  bracketSameLine: false,
  endOfLine: 'lf',
  objectWrap: 'collapse',
  proseWrap: 'always',
  quoteProps: 'consistent',
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  vueIndentScriptAndStyle: true,
};

/**
 * Фабрики плагинов. Каждый плагин подключается явно: передайте
 * `plugins.<name>()` в `defineConfig`
 */
export const plugins = {
  jsdoc,
  mdc,
  packageJson,
  php,
  pug,
  ruby,
  sh,
  solidity,
  sortJson,
  sql,
  tailwindcss,
  xml,
};

/**
 * Создать конфигурацию Prettier
 *
 * Плагинов по умолчанию нет - подключайте нужные явно:
 *
 * ```js
 * defineConfig(
 *   [
 *     plugins.php(),
 *     plugins.tailwindcss({ tailwindFunctions: ['cn', 'tw'] }),
 *   ],
 *   { printWidth: 100 },
 * );
 * ```
 *
 * Базовые опции заменяются опциями плагинов и `options`. Коллекции `overrides`
 * и `plugins` дополняются, `plugins` дедуплицируются, более поздние `overrides`
 * выигрывают.
 *
 * @param {import('prettier').Config[]} pluginConfigs Конфиги плагинов, напр.
 *   `[plugins.php()]`
 * @param {import('prettier').Config} options Базовые опции Prettier (наивысший
 *   приоритет)
 *
 * @returns {import('prettier').Config} Конфигурация Prettier
 */
export const defineConfig = (pluginConfigs = [], options = {}) =>
  mergeConfigs(DEFAULTS, ...pluginConfigs, options);
