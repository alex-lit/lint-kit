import { classnames } from './plugins/classnames.js';
import { jsdoc } from './plugins/jsdoc.js';
import { mdc } from './plugins/mdc.js';
import { merge } from './plugins/merge.js';
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
import { yuku } from './plugins/yuku.js';
import { mergeConfigs } from './utils/merge-configs.js';

export { TAILWIND_ATTRIBUTES, TAILWIND_FUNCTIONS } from './utils/tailwind.js';

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

const MERGE_PLUGIN = 'prettier-plugin-merge';

const moveMergePluginToEnd = (plugins) =>
  plugins.includes(MERGE_PLUGIN)
    ? [...plugins.filter((plugin) => plugin !== MERGE_PLUGIN), MERGE_PLUGIN]
    : plugins;

/**
 * Фабрики плагинов. Каждый плагин подключается явно: передайте
 * `plugins.<name>()` в `defineConfig`
 */
export const plugins = {
  classnames,
  jsdoc,
  mdc,
  merge,
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
  yuku,
};

/**
 * Создать конфигурацию Prettier
 *
 * Плагинов по умолчанию нет - подключайте нужные явно:
 *
 * ```js
 * defineConfig({
 *   plugins: [
 *     plugins.php(),
 *     plugins.tailwindcss({ tailwindFunctions: ['cn', 'tw'] }),
 *   ],
 *   options: { printWidth: 100 },
 * });
 * ```
 *
 * Базовые опции заменяются опциями плагинов и `options`. Коллекции `overrides`
 * и `plugins` в опциях дополняются, `plugins` дедуплицируются, более поздние
 * `overrides` выигрывают. `prettier-plugin-merge` всегда перемещается в конец
 * списка: он должен применяться после остальных плагинов.
 *
 * @param {object} [config] - Настройки конфигурации
 * @param {import('prettier').Config} [config.options] - Базовые опции Prettier
 *   (наивысший приоритет)
 * @param {import('prettier').Config[]} [config.plugins] - Конфиги плагинов,
 *   напр. `[plugins.php()]`
 *
 * @returns {import('prettier').Config} Конфигурация Prettier
 */
export const defineConfig = ({ options = {}, plugins = [] } = {}) => {
  const config = mergeConfigs(DEFAULTS, ...plugins, options);

  return { ...config, plugins: moveMergePluginToEnd(config.plugins) };
};
