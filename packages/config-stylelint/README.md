[![npm version](https://npmx.dev/api/registry/badge/version/@alexlit/config-stylelint)](https://www.npmjs.com/package/@alexlit/config-stylelint)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-stylelint)](https://npmx.dev/package/@alexlit/config-stylelint)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-stylelint)](LICENSE)

# Stylelint Configuration

Готовая конфигурация [Stylelint](https://stylelint.io/) для проверки CSS, SCSS и
Vue-файлов: настроенные правила из популярных stylelint-плагинов — порядок и
синтаксис свойств, доступность, БЭМ, поддержка SCSS и т.д. Вместо того чтобы
подключать и настраивать каждый плагин вручную, соберите конфигурацию из готовых
проверок.

Проверки модульные: по умолчанию ничего не включено — вы сами перечисляете
нужные в `defineConfig`.

## Установка

```sh
npm i @alexlit/config-stylelint -D
```

## Быстрый старт

```js
// stylelint.config.js
import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([
  plugins.scss(),
  plugins.vue(),
  plugins.prettier(),
]);
```

Каждый вызов `plugins.*()` — отдельная проверка. Добавьте только то, что нужно
проекту; полный список — в разделе [Проверки](#проверки).

Больше проверок — просто допишите их в массив:

```js
// stylelint.config.js
import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([
  plugins.colorFormat(),
  plugins.declarationBlockNoIgnoredProperties(),
  plugins.highPerformanceAnimation(),
  plugins.noNestedMedia(),
  plugins.order(),
  plugins.scss(),
  plugins.selectorNoEmpty(),
  plugins.useNesting(),
  plugins.vue(),
  plugins.a11y(),
  plugins.bem(),
  plugins.gamut(),
  plugins.logicalCss(),
  plugins.mediaUseCustomMedia(),
  plugins.noUnresolvedModule(),
  plugins.noUnsupportedBrowserFeatures(),
  plugins.prettier(),
]);
```

## Настройка

### Правила конкретной проверки

Чтобы переопределить правила одной проверки, передайте объект в её вызов:

```js
// stylelint.config.js
import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([
  plugins.useNesting({ rules: { 'csstools/use-nesting': 'never' } }),
  plugins.noUnresolvedModule({
    rules: { 'plugin/no-unresolved-module': { alias: { '~': 'src' } } },
  }),
]);
```

### Общие настройки Stylelint

Второй аргумент `defineConfig` — общие опции: собственные правила, файлы для
игнора и т.д. Он перебивает настройки всех проверок:

```js
// stylelint.config.js
import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([plugins.scss(), plugins.vue()], {
  ignoreFiles: ['fixtures/**'],
  rules: { 'max-nesting-depth': 3 },
});
```

## Проверки

| Проверка                                        | Что делает                                           | Плагин                                              |
| ----------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------- |
| `plugins.a11y()`                                | Проверяет типичные ошибки доступности                | `@double-great/stylelint-a11y`                      |
| `plugins.bem()`                                 | Настраивает линтинг по методологии БЭМ               | `@morev/stylelint-plugin`                           |
| `plugins.colorFormat()`                         | Нормализует формат цветов (hex → rgb/hsl)            | встроенное правило `color-format/format`            |
| `plugins.declarationBlockNoIgnoredProperties()` | Запрещает бесполезные свойства в блоке объявлений    | `stylelint-declaration-block-no-ignored-properties` |
| `plugins.gamut()`                               | Проверяет цвета на выход за пределы цветового охвата | `stylelint-gamut`                                   |
| `plugins.highPerformanceAnimation()`            | Запрещает анимации, нагружающие рендеринг            | `stylelint-high-performance-animation`              |
| `plugins.logicalCss()`                          | Проверяет использование логических CSS-свойств       | `stylelint-plugin-logical-css`                      |
| `plugins.mediaUseCustomMedia()`                 | Требует использования кастомных медиа-запросов       | `stylelint-media-use-custom-media`                  |
| `plugins.noIndistinguishableColors()`           | Запрещает неразличимые цвета                         | `stylelint-no-indistinguishable-colors`             |
| `plugins.noNestedMedia()`                       | Запрещает вложенные медиа-запросы                    | `stylelint-no-nested-media`                         |
| `plugins.noUnresolvedModule()`                  | Проверяет разрешение импортов                        | `stylelint-no-unresolved-module`                    |
| `plugins.noUnsupportedBrowserFeatures()`        | Проверяет поддержку CSS-функций целевыми браузерами  | `stylelint-no-unsupported-browser-features`         |
| `plugins.order()`                               | Настраивает порядок свойств и селекторов             | `stylelint-order`                                   |
| `plugins.prettier()`                            | Интегрирует Prettier                                 | `stylelint-prettier`                                |
| `plugins.scss()`                                | Настраивает линтинг SCSS                             | `stylelint-scss`                                    |
| `plugins.selectorNoEmpty()`                     | Запрещает пустые селекторы                           | `stylelint-selector-no-empty`                       |
| `plugins.useNesting()`                          | Требует использования CSS-вложенности                | `stylelint-use-nesting`                             |
| `plugins.vue()`                                 | Подключает поддержку Vue.js SFC                      | `stylelint-config-recommended-vue`                  |

## Миграция с v61

v62 — breaking-релиз: проверок по умолчанию больше нет, всё подключается явно.

| v61                             | v62                                            |
| ------------------------------- | ---------------------------------------------- |
| `createConfig()`                | перечислите нужные проверки явно               |
| `createConfig({ gamut: true })` | `defineConfig([plugins.gamut()])`              |
| `createConfig({ scss: false })` | просто не добавляйте `plugins.scss()` в список |
| `createConfig({}, options)`     | `defineConfig([...], options)`                 |

Проверки, включённые по умолчанию в v61: `color-format`,
`declaration-block-no-ignored-properties`, `high-performance-animation`,
`no-nested-media`, `order`, `scss`, `selector-no-empty`, `use-nesting`, `vue`, а
также `prettier`.

## Разработка

- Проверка актуальности правил:

  ```sh
  npx stylelint-find-new-rules
  ```

## Полезные ссылки

- [awesome-stylelint](https://github.com/stylelint/awesome-stylelint)
- [stylelint-scales](https://github.com/jeddy3/stylelint-scales)
- [stylelint-value-no-unknown-custom-properties](https://github.com/csstools/stylelint-value-no-unknown-custom-properties)
