import type { Config } from 'prettier';

/**
 * Опции
 * [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)
 */
export interface JsdocOptions {
  jsdocCommentLineStrategy?: 'fallback' | 'multiLine' | 'singleLine';
  jsdocSeparateReturnsFromParam?: boolean;
  jsdocSeparateTagGroups?: boolean;
}

/**
 * Фабрики плагинов. Каждый плагин подключается явно: передайте
 * `plugins.<name>()` в `defineConfig`.
 *
 * Коллекции `overrides` и `plugins` дополняются: `plugins` дедуплицируются,
 * более поздние `overrides` выигрывают. Остальные поля заменяют значения по
 * умолчанию.
 */
export interface Plugins {
  /** @see prettier-plugin-jsdoc */
  jsdoc(options?: Config & JsdocOptions): Config;
  /** @see prettier-plugin-mdc */
  mdc(options?: Config): Config;
  /** @see prettier-plugin-packagejson */
  packageJson(options?: Config): Config;
  /** @see plugin-php */
  php(options?: Config): Config;
  /** @see plugin-pug */
  pug(options?: Config & PugOptions): Config;
  /** @see plugin-ruby */
  ruby(options?: Config): Config;
  /** @see prettier-plugin-sh */
  sh(options?: Config): Config;
  /** @see prettier-plugin-solidity */
  solidity(options?: Config): Config;
  /** @see prettier-plugin-sort-json */
  sortJson(options?: Config & SortJsonOptions): Config;
  /** @see prettier-plugin-sql */
  sql(options?: Config): Config;
  /** @see prettier-plugin-tailwindcss */
  tailwindcss(options?: Config): Config;
  /** @see plugin-xml */
  xml(options?: Config & XmlOptions): Config;
  /** @see @prettier/plugin-yuku */
  yuku(options?: Config): Config;
}

/** Опции [plugin-pug](https://github.com/prettier/plugin-pug) */
export interface PugOptions {
  pugCommentPreserveSpaces?: string;
  pugSingleQuote?: boolean;
  pugSortAttributes?: 'asc' | 'desc' | 'natural' | false;
  pugWrapAttributesThreshold?: number;
}

/**
 * Опции
 * [prettier-plugin-sort-json](https://github.com/Gudahtt/prettier-plugin-sort-json)
 */
export interface SortJsonOptions {
  jsonRecursiveSort?: boolean;
}

/** Опции [plugin-xml](https://github.com/prettier/plugin-xml) */
export interface XmlOptions {
  xmlWhitespaceSensitivity?: 'ignore' | 'preserve' | 'strict';
}

export declare const plugins: Plugins;

/**
 * Создать конфигурацию Prettier
 *
 * Плагинов по умолчанию нет - подключайте нужные явно:
 *
 * ```js
 * defineConfig({
 *   plugins: [plugins.php(), plugins.tailwindcss()],
 *   options: { printWidth: 100 },
 * });
 * ```
 *
 * Базовые опции заменяются опциями плагинов и `options`. Коллекции `overrides`
 * и `plugins` дополняются: `plugins` дедуплицируются, более поздние `overrides`
 * выигрывают.
 *
 * @param config - Настройки конфигурации
 * @param config.options - Базовые опции Prettier (наивысший приоритет)
 * @param config.plugins - Конфиги плагинов, например `[plugins.php()]`
 */
export declare function defineConfig(config?: {
  options?: Config;
  plugins?: Config[];
}): Config;
