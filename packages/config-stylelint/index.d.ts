import type { Config } from 'stylelint';

/**
 * Опции фабрики плагина - частичный конфиг Stylelint, накладываемый поверх
 * значений по умолчанию.
 */
type PluginOptions = Partial<Config>;

/**
 * Пространство имён фабрик конфигов плагинов. Дефолтных плагинов нет -
 * подключайте нужные явно.
 */
interface Plugins {
  a11y: (options?: PluginOptions) => Config;
  bem: (options?: PluginOptions) => Config;
  colorFormat: (options?: PluginOptions) => Config;
  declarationBlockNoIgnoredProperties: (options?: PluginOptions) => Config;
  gamut: (options?: PluginOptions) => Config;
  highPerformanceAnimation: (options?: PluginOptions) => Config;
  logicalCss: (options?: PluginOptions) => Config;
  mediaUseCustomMedia: (options?: PluginOptions) => Config;
  noIndistinguishableColors: (options?: PluginOptions) => Config;
  noNestedMedia: (options?: PluginOptions) => Config;
  noUnresolvedModule: (options?: PluginOptions) => Config;
  noUnsupportedBrowserFeatures: (options?: PluginOptions) => Config;
  order: (options?: PluginOptions) => Config;
  prettier: (options?: PluginOptions) => Config;
  scss: (options?: PluginOptions) => Config;
  selectorNoEmpty: (options?: PluginOptions) => Config;
  useNesting: (options?: PluginOptions) => Config;
  vue: (options?: PluginOptions) => Config;
}

/** Пространство имён фабрик конфигов плагинов. */
declare const plugins: Plugins;

/**
 * Создать конфиг Stylelint.
 *
 * Приоритет (от низкого к высокому): база → конфиги плагинов по порядку →
 * `options`. `extends`, `ignoreFiles`, `overrides` и `plugins` конкатенируются
 * (дубли `plugins` убираются), `rules` - shallow merge.
 *
 * @param pluginConfigs - Конфиги плагинов (например, `[plugins.scss()]`)
 * @param options - Базовые опции Stylelint, наивысший приоритет
 */
declare function defineConfig(
  pluginConfigs?: Config[],
  options?: Config,
): Config;

export { defineConfig, plugins };
