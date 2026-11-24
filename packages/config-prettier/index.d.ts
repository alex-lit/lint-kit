import type { Config } from 'prettier';

/**
 * Options of
 * [prettier-plugin-classnames](https://github.com/ony3000/prettier-plugin-classnames)
 */
export interface ClassnamesOptions {
  classnamesPrintWidth?: number;
  customAttributes?: readonly string[];
  customFunctions?: readonly string[];
  endingPosition?: 'absolute' | 'relative';
  syntaxTransformation?: boolean;
}

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
  /** @see prettier-plugin-classnames */
  classnames(options?: ClassnamesOptions & Config): Config;
  /** @see prettier-plugin-jsdoc */
  jsdoc(options?: Config & JsdocOptions): Config;
  /** @see prettier-plugin-mdc */
  mdc(options?: Config): Config;
  /** @see prettier-plugin-merge */
  merge(options?: Config): Config;
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
  /** @see @prettier/plugin-yuku */
  yuku(options?: Config): Config;
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
  tailwindAttributes?: readonly string[];
  tailwindFunctions?: readonly string[];
}

/** Options of [plugin-xml](https://github.com/prettier/plugin-xml) */
export interface XmlOptions {
  xmlWhitespaceSensitivity?: 'ignore' | 'preserve' | 'strict';
}

/** Attributes that Tailwind CSS plugins handle in addition to the built-in ones */
export declare const TAILWIND_ATTRIBUTES: readonly string[];

/** Functions whose arguments Tailwind CSS and classnames treat as class lists */
export declare const TAILWIND_FUNCTIONS: readonly string[];

export declare const plugins: Plugins;

/**
 * Create prettier config
 *
 * There are no default plugins - connect the required ones explicitly:
 *
 * ```js
 * defineConfig({
 *   plugins: [plugins.php(), plugins.tailwindcss()],
 *   options: { printWidth: 100 },
 * });
 * ```
 *
 * Base options are replaced by plugin options and `options`. Collection options
 * (`overrides`, `plugins`) are appended: `plugins` are deduplicated and later
 * `overrides` win. `prettier-plugin-merge` is always moved to the end of the
 * plugin list.
 *
 * @param config - Configuration options
 * @param config.options - Base prettier options (highest precedence)
 * @param config.plugins - Plugin configs, e.g. `[plugins.php()]`
 */
export declare function defineConfig(config?: {
  options?: Config;
  plugins?: Config[];
}): Config;
