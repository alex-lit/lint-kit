import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([
  // Бывшие плагины по умолчанию (v61)
  plugins.colorFormat(),
  plugins.declarationBlockNoIgnoredProperties(),
  plugins.highPerformanceAnimation(),
  plugins.noNestedMedia(),
  plugins.order(),
  plugins.scss(),
  plugins.selectorNoEmpty(),
  plugins.useNesting(),
  plugins.vue(),

  // Включённые опциональные плагины
  plugins.a11y(),
  plugins.bem(),
  plugins.gamut(),
  plugins.logicalCss(),
  plugins.mediaUseCustomMedia(),
  plugins.noUnresolvedModule(),
  plugins.noUnsupportedBrowserFeatures(),

  // Кодстайл
  plugins.prettier(),
]);
