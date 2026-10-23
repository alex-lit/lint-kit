import type { Config } from 'prettier';

/**
 * Options of
 * [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)
 */
export interface JsdocOptions {
  jsdocCommentLineStrategy?: 'fallback' | 'multiLine' | 'singleLine';
  jsdocSeparateReturnsFromParam?: boolean;
  jsdocSeparateTagGroups?: boolean;
}

/**
 * Plugin factories. Every plugin is connected explicitly: pass
 * `plugins.<name>()` to `defineConfig`.
 *
 * Collection options (`overrides`, `plugins`) are appended to the defaults:
 * `plugins` are deduplicated and later `overrides` win. Other options replace
 * default values.
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
  tailwindcss(options?: Config & TailwindcssOptions): Config;
  /** @see plugin-xml */
  xml(options?: Config & XmlOptions): Config;
}

/** Options of [plugin-pug](https://github.com/prettier/plugin-pug) */
export interface PugOptions {
  pugCommentPreserveSpaces?: string;
  pugSingleQuote?: boolean;
  pugSortAttributes?: 'asc' | 'desc' | 'natural' | false;
  pugWrapAttributesThreshold?: number;
}

/**
 * Options of
 * [prettier-plugin-sort-json](https://github.com/Gudahtt/prettier-plugin-sort-json)
 */
export interface SortJsonOptions {
  jsonRecursiveSort?: boolean;
}

/**
 * Options of
 * [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
 */
export interface TailwindcssOptions {
  tailwindFunctions?: string[];
}

/** Options of [plugin-xml](https://github.com/prettier/plugin-xml) */
export interface XmlOptions {
  xmlWhitespaceSensitivity?: 'ignore' | 'preserve' | 'strict';
}

export declare const plugins: Plugins;

/**
 * Create prettier config
 *
 * There are no default plugins - connect the required ones explicitly:
 *
 * ```js
 * defineConfig([plugins.php(), plugins.tailwindcss()], {
 *   printWidth: 100,
 * });
 * ```
 *
 * Base options are replaced by plugin options and `options`. Collection options
 * (`overrides`, `plugins`) are appended: `plugins` are deduplicated and later
 * `overrides` win.
 *
 * @param pluginConfigs Plugin configs, e.g. `[plugins.php()]`
 * @param options Base prettier options (highest precedence)
 */
export declare function defineConfig(
  pluginConfigs?: Config[],
  options?: Config,
): Config;
