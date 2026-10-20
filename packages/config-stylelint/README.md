# Stylelint Configuration

## Установка

```sh
npm i @alexlit/config-stylelint -D
```

## Подключение

Плагинов по умолчанию нет — подключайте нужные явно, вызывая соответствующие
фабрики:

```js
// stylelint.config.js
import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([
  plugins.colorFormat(),
  plugins.declarationBlockNoIgnoredProperties(),
  plugins.highPerformanceAnimation(),
  plugins.noNestedMedia(),
  plugins.order(),
  plugins.prettier(),
  plugins.scss(),
  plugins.selectorNoEmpty(),
  plugins.useNesting(),
  plugins.vue(),
]);
```

### Опции плагина

Каждая фабрика принимает опции — они накладываются поверх значений по умолчанию
(shallow merge):

```js
// stylelint.config.js
import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([
  plugins.noUnresolvedModule({
    rules: { 'plugin/no-unresolved-module': { alias: { '~': 'src' } } },
  }),
  plugins.useNesting({ rules: { 'csstools/use-nesting': 'never' } }),
]);
```

### Опции Stylelint

Второй аргумент задаёт базовые опции Stylelint — он имеет наивысший приоритет:

```js
// stylelint.config.js
import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([plugins.scss(), plugins.vue()], {
  ignoreFiles: ['fixtures/**'],
  rules: { 'max-nesting-depth': 3 },
});
```

### Доступные фабрики

| Фабрика                                         | Плагин                                              |
| ----------------------------------------------- | --------------------------------------------------- |
| `plugins.a11y()`                                | `@double-great/stylelint-a11y`                      |
| `plugins.bem()`                                 | `@morev/stylelint-plugin`                           |
| `plugins.colorFormat()`                         | встроенное правило `color-format/format`            |
| `plugins.declarationBlockNoIgnoredProperties()` | `stylelint-declaration-block-no-ignored-properties` |
| `plugins.gamut()`                               | `stylelint-gamut`                                   |
| `plugins.highPerformanceAnimation()`            | `stylelint-high-performance-animation`              |
| `plugins.logicalCss()`                          | `stylelint-plugin-logical-css`                      |
| `plugins.mediaUseCustomMedia()`                 | `stylelint-media-use-custom-media`                  |
| `plugins.noIndistinguishableColors()`           | `stylelint-no-indistinguishable-colors`             |
| `plugins.noNestedMedia()`                       | `stylelint-no-nested-media`                         |
| `plugins.noUnresolvedModule()`                  | `stylelint-no-unresolved-module`                    |
| `plugins.noUnsupportedBrowserFeatures()`        | `stylelint-no-unsupported-browser-features`         |
| `plugins.order()`                               | `stylelint-order`                                   |
| `plugins.prettier()`                            | `stylelint-prettier`                                |
| `plugins.scss()`                                | `stylelint-scss`                                    |
| `plugins.selectorNoEmpty()`                     | `stylelint-selector-no-empty`                       |
| `plugins.useNesting()`                          | `stylelint-use-nesting`                             |
| `plugins.vue()`                                 | `stylelint-config-recommended-vue`                  |

## Миграция с v61

v62 — breaking-релиз: плагинов по умолчанию больше нет, всё подключается явно.

| v61                             | v62                                            |
| ------------------------------- | ---------------------------------------------- |
| `createConfig()`                | перечислите нужные плагины явно                |
| `createConfig({ gamut: true })` | `createConfig([plugins.gamut()])`              |
| `createConfig({ scss: false })` | просто не добавляйте `plugins.scss()` в список |
| `createConfig({}, options)`     | `defineConfig([...], options)`                 |

Плагины, включённые по умолчанию в v61: `color-format`,
`declaration-block-no-ignored-properties`, `high-performance-animation`,
`no-nested-media`, `order`, `scss`, `selector-no-empty`, `use-nesting`, `vue`, а
также `prettier`.

## Разработка

- Проверка актуальности правил:

  ```sh
  npx stylelint-find-new-rules
  ```

## Полезные ссылки

- [Awesome StyleLint](https://github.com/stylelint/awesome-stylelint)
- [stylelint-scales](https://github.com/jeddy3/stylelint-scales)
- [stylelint-value-no-unknown-custom-properties](https://github.com/csstools/stylelint-value-no-unknown-custom-properties)
