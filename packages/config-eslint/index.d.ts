import type { Linter } from 'eslint';

/** Flat-конфиг ESLint. */
export type Config = Linter.Config;

/**
 * Опции плагина или общие опции - произвольные flat-опции ESLint (`files`,
 * `ignores`, `rules`, `settings`, `languageOptions` и т.д.).
 */
export type Options = Linter.Config;

/**
 * Фабрики плагинов. Каждый плагин подключается явно: передайте
 * `plugins.<name>()` в `defineConfig`.
 */
export interface Plugins {
  /** @see eslint-plugin-de-morgan */
  deMorgan(options?: Options): Config[];
  /** @see eslint-plugin-import-x */
  importX(options?: Options): Config[];
  /** @see eslint */
  javascript(options?: Options): Config[];
  /** @see eslint-plugin-jsdoc */
  jsdoc(options?: Options): Config[];
  /** @see ESLint/JSON */
  json(options?: Options): Config[];
  /** @see eslint-plugin-perfectionist */
  perfectionist(options?: Options): Config[];
  /** @see eslint-plugin-pinia */
  pinia(options?: Options): Config[];
  /** @see eslint-plugin-prettier */
  prettier(options?: Options): Config[];
  /** @see eslint-config-prettier */
  prettierConfig(options?: Options): Config[];
  /** @see eslint-plugin-regexp */
  regexp(options?: Options): Config[];
  /** @see eslint-plugin-sonarjs */
  sonar(options?: Options): Config[];
  /** @see @stylistic/eslint-plugin */
  stylistic(options?: Options): Config[];
  /** @see eslint-plugin-tailwindcss */
  tailwindcss(options?: Options & TailwindcssOptions): Config[];
  /** @see @tanstack/query */
  tanstackQuery(options?: Options): Config[];
  /** @see typescript-eslint */
  typescript(options?: Options): Config[];
  /** @see typescript-eslint */
  typescriptTypeChecked(options?: Options): Config[];
  /** @see eslint-plugin-unicorn */
  unicorn(options?: Options): Config[];
  /** @see @unocss/eslint-config */
  unocss(options?: Options): Config[];
  /** @see eslint-plugin-vitest */
  vitest(options?: Options): Config[];
  /** @see eslint-plugin-vue */
  vue(options?: Options): Config[];
  /** @see eslint-plugin-vuejs-accessibility */
  vueAccessibility(options?: Options): Config[];
  /** @see eslint-plugin-vue-i18n */
  vueI18n(options?: Options): Config[];
  /** @see eslint-plugin-zod */
  zod(options?: Options): Config[];
}

/** Ограничение синтаксиса - сообщение об ошибке и селектор AST. */
export interface RestrictedSyntax {
  message: string;
  selector: string;
}

/** Опции Tailwind CSS. */
export interface TailwindcssOptions {
  /** Путь к CSS-файлу с Tailwind-конфигурацией */
  cssConfigPath?: string;
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
 * Дальше идут конфиги плагинов в том порядке, в котором вы их перечислили, а
 * последним - общие опции, которые перекрывают правила плагинов.
 *
 * @param pluginConfigs - Конфиги плагинов, напр. `[plugins.javascript()]`
 * @param options - Общие flat-опции, наивысший приоритет
 */
export declare function defineConfig(
  pluginConfigs?: Config[][],
  options?: Options,
): Config[];
