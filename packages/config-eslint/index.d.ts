import type { Linter } from 'eslint';

/** Flat-конфиг ESLint. */
export type Config = Linter.Config;

/**
 * Фабрики плагинов. Каждый вызов возвращает массив flat-конфигов, который нужно
 * развернуть через spread-оператор: `...plugins.<name>()`.
 */
export interface Plugins {
  /** @see eslint-plugin-de-morgan */
  deMorgan(): Config[];
  /** @see eslint-plugin-import-x */
  importX(): Config[];
  /** @see eslint */
  javascript(): Config[];
  /** @see eslint-plugin-jsdoc */
  jsdoc(): Config[];
  /** @see ESLint/JSON */
  json(): Config[];
  /** @see eslint-plugin-perfectionist */
  perfectionist(): Config[];
  /** @see eslint-plugin-pinia */
  pinia(): Config[];
  /** @see eslint-plugin-prettier */
  prettier(): Config[];
  /** @see eslint-config-prettier */
  prettierConfig(): Config[];
  /** @see eslint-plugin-regexp */
  regexp(): Config[];
  /** @see eslint-plugin-sonarjs */
  sonar(): Config[];
  /** @see @stylistic/eslint-plugin */
  stylistic(): Config[];
  /** @see eslint-plugin-tailwindcss */
  tailwindcss(settings?: TailwindcssSettings): Config[];
  /** @see @tanstack/query */
  tanstackQuery(): Config[];
  /** @see typescript-eslint */
  typescript(): Config[];
  /** @see typescript-eslint */
  typescriptTypeChecked(): Config[];
  /** @see eslint-plugin-unicorn */
  unicorn(): Config[];
  /** @see @unocss/eslint-config */
  unocss(): Config[];
  /** @see eslint-plugin-vitest */
  vitest(): Config[];
  /** @see eslint-plugin-vue */
  vue(): Config[];
  /** @see eslint-plugin-vuejs-accessibility */
  vueAccessibility(): Config[];
  /** @see eslint-plugin-vue-i18n */
  vueI18n(): Config[];
  /** @see eslint-plugin-zod */
  zod(): Config[];
}

/** Ограничение синтаксиса - сообщение об ошибке и селектор AST. */
export interface RestrictedSyntax {
  message: string;
  selector: string;
}

/** Настройки eslint-plugin-tailwindcss. */
export interface TailwindcssSettings {
  [key: string]: unknown;
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
 * Разворачивайте вызовы плагинов через spread-оператор, а переопределения
 * добавляйте прямо в массив.
 *
 * @example
 *   import { defineConfig, plugins } from '@alexlit/config-eslint';
 *
 *   export default defineConfig([
 *     ...plugins.javascript(),
 *     ...plugins.unicorn(),
 *     ...plugins.prettierConfig(),
 *     { rules: { 'no-console': 'off' } },
 *   ]);
 *
 * @param configs - Массив flat-конфигов
 */
export declare function defineConfig(configs?: Config[]): Config[];
