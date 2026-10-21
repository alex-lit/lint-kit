import { defineConfig as defineFlatConfig } from 'eslint/config';

import { base } from './base.js';
import { deMorgan } from './plugins/de-morgan.js';
import { importX } from './plugins/import-x.js';
import { javascript } from './plugins/javascript.js';
import { jsdoc } from './plugins/jsdoc.js';
import { json } from './plugins/json.js';
import { perfectionist } from './plugins/perfectionist.js';
import { pinia } from './plugins/pinia.js';
import { prettier, prettierConfig } from './plugins/prettier.js';
import { regexp } from './plugins/regexp.js';
import { sonar } from './plugins/sonar.js';
import { stylistic } from './plugins/stylistic.js';
import { tailwindcss } from './plugins/tailwindcss.js';
import { tanstackQuery } from './plugins/tanstack-query.js';
import { typescriptTypeChecked } from './plugins/typescript-type-checked.js';
import { typescript } from './plugins/typescript.js';
import { unicorn } from './plugins/unicorn.js';
import { unocss } from './plugins/unocss.js';
import { vitest } from './plugins/vitest.js';
import { vueAccessibility } from './plugins/vue-accessibility.js';
import { vueI18n } from './plugins/vue-i18n.js';
import { vue } from './plugins/vue.js';
import { zod } from './plugins/zod.js';

/**
 * Фабрики плагинов. Каждый плагин подключается явно: передайте
 * `plugins.<name>()` в `defineConfig`
 */
export const plugins = {
  deMorgan,
  importX,
  javascript,
  jsdoc,
  json,
  perfectionist,
  pinia,
  prettier,
  prettierConfig,
  regexp,
  sonar,
  stylistic,
  tailwindcss,
  tanstackQuery,
  typescript,
  typescriptTypeChecked,
  unicorn,
  unocss,
  vitest,
  vue,
  vueAccessibility,
  vueI18n,
  zod,
};

/**
 * Создать конфигурацию ESLint
 *
 * Базовые настройки (`base`) добавляются автоматически и всегда идут первыми.
 * Дальше идут конфиги плагинов в том порядке, в котором вы их перечислили, а
 * последним - общие опции, которые перекрывают правила плагинов.
 *
 * @example
 *   import { defineConfig, plugins } from '@alexlit/config-eslint';
 *
 *   export default defineConfig(
 *     [plugins.javascript(), plugins.unicorn(), plugins.prettierConfig()],
 *     { rules: { 'no-console': 'off' } },
 *   );
 *
 * @param {import('eslint').Linter.Config[][]} [pluginConfigs] - Конфиги
 *   плагинов, напр. `[plugins.javascript()]`
 * @param {import('eslint').Linter.Config} [options] - Общие flat-опции,
 *   наивысший приоритет
 *
 * @returns {import('eslint').Linter.Config[]}
 */
export const defineConfig = (pluginConfigs = [], options = {}) =>
  defineFlatConfig([base, pluginConfigs, options]);

export {
  base,
  DATA_FILES,
  DTS_FILES,
  FILES,
  IGNORES,
  JSON_FILES,
  TEST_FILES,
  TS_FILES,
  VUE_FILES,
  YAML_FILES,
} from './base.js';
export { NO_RESTRICTED_SYNTAX } from './rules/restricted-syntax.js';
export { TS_RULES } from './rules/typescript.js';
