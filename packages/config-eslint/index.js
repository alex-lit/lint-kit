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
 * Фабрики плагинов. Каждый вызов возвращает массив flat-конфигов, который нужно
 * развернуть через spread: `...plugins.<name>()`.
 *
 * Любая фабрика принимает необязательный конфиг, который добавляется после
 * предустановленных блоков и переопределяет их.
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
 * Разворачивайте вызовы плагинов через spread-оператор, а переопределения
 * добавляйте прямо в массив.
 *
 * @example
 *   import { defineConfig, plugins } from '@alexlit/config-eslint';
 *
 *   export default defineConfig([
 *     ...plugins.javascript(),
 *     ...plugins.unicorn({ rules: { 'unicorn/no-null': 'off' } }),
 *     { rules: { 'no-console': 'off' } },
 *     ...plugins.prettierConfig(), // последним
 *   ]);
 *
 * @param {import('eslint').Linter.Config[]} [configs] - Массив flat-конфигов
 *
 * @returns {import('eslint').Linter.Config[]}
 */
export const defineConfig = (configs = []) => defineFlatConfig([base, configs]);

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
