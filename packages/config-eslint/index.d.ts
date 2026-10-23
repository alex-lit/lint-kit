import type { Linter } from 'eslint';

/** Flat-конфиг ESLint. */
export type Config = Linter.Config;

/**
 * Дополнительный flat-конфиг, который добавляется после предустановленного.
 * Можно передать как один блок, так и массив блоков.
 */
export type PluginConfig = Config | Config[];

/**
 * Фабрики плагинов. Каждый вызов возвращает массив flat-конфигов, который нужно
 * развернуть через spread-оператор: `...plugins.<name>()`.
 *
 * Любая фабрика принимает необязательный конфиг, который добавляется после
 * предустановленных блоков и переопределяет их.
 */
export interface Plugins {
  /** @see eslint-plugin-de-morgan */
  deMorgan(config?: PluginConfig): Config[];
  /** @see eslint-plugin-import-x */
  importX(config?: PluginConfig): Config[];
  /** @see eslint */
  javascript(config?: PluginConfig): Config[];
  /** @see eslint-plugin-jsdoc */
  jsdoc(config?: PluginConfig): Config[];
  /** @see ESLint/JSON */
  json(config?: PluginConfig): Config[];
  /** @see eslint-plugin-perfectionist */
  perfectionist(config?: PluginConfig): Config[];
  /** @see eslint-plugin-pinia */
  pinia(config?: PluginConfig): Config[];
  /** @see eslint-plugin-prettier */
  prettier(config?: PluginConfig): Config[];
  /** @see eslint-config-prettier */
  prettierConfig(config?: PluginConfig): Config[];
  /** @see eslint-plugin-regexp */
  regexp(config?: PluginConfig): Config[];
  /** @see eslint-plugin-sonarjs */
  sonar(config?: PluginConfig): Config[];
  /** @see @stylistic/eslint-plugin */
  stylistic(config?: PluginConfig): Config[];
  /** @see eslint-plugin-tailwindcss */
  tailwindcss(config?: PluginConfig): Config[];
  /** @see @tanstack/query */
  tanstackQuery(config?: PluginConfig): Config[];
  /** @see typescript-eslint */
  typescript(config?: PluginConfig): Config[];
  /** @see typescript-eslint */
  typescriptTypeChecked(config?: PluginConfig): Config[];
  /** @see eslint-plugin-unicorn */
  unicorn(config?: PluginConfig): Config[];
  /** @see @unocss/eslint-config */
  unocss(config?: PluginConfig): Config[];
  /** @see eslint-plugin-vitest */
  vitest(config?: PluginConfig): Config[];
  /** @see eslint-plugin-vue */
  vue(config?: PluginConfig): Config[];
  /** @see eslint-plugin-vuejs-accessibility */
  vueAccessibility(config?: PluginConfig): Config[];
  /** @see eslint-plugin-vue-i18n */
  vueI18n(config?: PluginConfig): Config[];
  /** @see eslint-plugin-zod */
  zod(config?: PluginConfig): Config[];
}

/** Ограничение синтаксиса - сообщение об ошибке и селектор AST. */
export interface RestrictedSyntax {
  message: string;
  selector: string;
}

/** Пространство имён фабрик плагинов. */
export declare const plugins: Plugins;

/**
 * Базовый конфиг: область файлов, игнорируемые пути и глобальные переменные.
 * Добавляется автоматически первым блоком в `defineConfig`.
 */
export declare const base: Config[];

export declare const DATA_FILES: string[];
export declare const DTS_FILES: string[];
export declare const FILES: string[];
export declare const IGNORES: string[];
export declare const JSON_FILES: string[];
export declare const NO_RESTRICTED_SYNTAX: RestrictedSyntax[];
export declare const TEST_FILES: string[];
export declare const TS_FILES: string[];
export declare const TS_RULES: Record<string, Linter.RuleEntry>;
export declare const VUE_FILES: string[];
export declare const YAML_FILES: string[];

/**
 * Создать конфигурацию ESLint.
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
 *     ...plugins.prettierConfig(), // последним
 *     { rules: { 'no-console': 'off' } },
 *   ]);
 *
 * @param configs - Массив flat-конфигов
 */
export declare function defineConfig(configs?: Config[]): Config[];
