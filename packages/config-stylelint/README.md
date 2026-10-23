[![version](https://npmx.dev/api/registry/badge/version/@alexlit/config-stylelint)](https://www.npmjs.com/package/@alexlit/config-stylelint)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-stylelint)](https://npmx.dev/package/@alexlit/config-stylelint)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-stylelint)](LICENSE)

# Stylelint Configuration

Готовая конфигурация [Stylelint](https://stylelint.io/) для проверки CSS, SCSS и
Vue-файлов: настроенные правила из популярных stylelint-плагинов - порядок и
синтаксис свойств, доступность, БЭМ, поддержка SCSS и т.д. Вместо того чтобы
подключать и настраивать каждый плагин вручную, соберите конфигурацию из готовых
проверок.

Проверки модульные: по умолчанию ничего не включено - вы сами перечисляете
нужные в `defineConfig`.

## Установка

```bash
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

Каждый вызов `plugins.*()` - отдельная проверка. Добавьте только то, что нужно
проекту; полный список - в разделе [Проверки](#проверки).

Больше проверок - просто допишите их в массив:

```js
// stylelint.config.js
import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([
  plugins.a11y(),
  plugins.bem(),
  plugins.colorFormat(),
  plugins.declarationBlockNoIgnoredProperties(),
  plugins.gamut(),
  plugins.highPerformanceAnimation(),
  plugins.logicalCss(),
  plugins.mediaUseCustomMedia(),
  plugins.noNestedMedia(),
  plugins.noUnresolvedModule(),
  plugins.noUnsupportedBrowserFeatures(),
  plugins.order(),
  plugins.scss(),
  plugins.selectorNoEmpty(),
  plugins.useNesting(),
  plugins.vue(),

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

`rules` мержатся поверхностно: настройка одноимённого правила из опций заменяет
дефолтную целиком.

### Правила для отдельных файлов

Чтобы применить правила только к части файлов, используйте `overrides` в опциях
проверки. Пользовательские overrides добавляются после дефолтных, поэтому
выигрывают у них:

```js
// stylelint.config.js
import { defineConfig, plugins } from '@alexlit/config-stylelint';

export default defineConfig([
  plugins.useNesting({
    overrides: [
      { files: ['**/*.vue'], rules: { 'csstools/use-nesting': 'never' } },
    ],
  }),
]);
```

`files` обязателен: Stylelint падает с ошибкой, если в override его нет.

### Приоритет настроек

Внутри одной проверки: дефолты → `options.rules` → `options.overrides` (для
подходящих файлов). Между проверками и вторым аргументом `defineConfig`
действует тот же порядок: база → проверки по порядку → `options`.

Коллекции (`extends`, `ignoreFiles`, `overrides`, `plugins`) дополняются,
`plugins` дедуплицируются. Остальные поля, например `customSyntax`, заменяются
значениями из опций.

### Общие настройки Stylelint

Второй аргумент `defineConfig` - общие опции: собственные правила, файлы для
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

| Проверка                                        | Что делает                                           | Плагин                                                                                                                                                                                                  |
| ----------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `plugins.a11y()`                                | Проверяет типичные ошибки доступности                | <a href="https://github.com/double-great/stylelint-a11y" target="_blank" rel="noopener noreferrer"><code>@double-great/stylelint-a11y</code></a>                                                        |
| `plugins.bem()`                                 | Настраивает линтинг по методологии БЭМ               | <a href="https://morevm.github.io/stylelint-plugin/" target="_blank" rel="noopener noreferrer"><code>@morev/stylelint-plugin</code></a>                                                                 |
| `plugins.colorFormat()`                         | Нормализует формат цветов (hex → rgb/hsl)            | встроенное правило `color-format/format`                                                                                                                                                                |
| `plugins.declarationBlockNoIgnoredProperties()` | Запрещает бесполезные свойства в блоке объявлений    | <a href="https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties" target="_blank" rel="noopener noreferrer"><code>stylelint-declaration-block-no-ignored-properties</code></a> |
| `plugins.gamut()`                               | Проверяет цвета на выход за пределы цветового охвата | <a href="https://github.com/fpetrakov/stylelint-gamut" target="_blank" rel="noopener noreferrer"><code>stylelint-gamut</code></a>                                                                       |
| `plugins.highPerformanceAnimation()`            | Запрещает анимации, нагружающие рендеринг            | <a href="https://github.com/kristerkari/stylelint-high-performance-animation" target="_blank" rel="noopener noreferrer"><code>stylelint-high-performance-animation</code></a>                           |
| `plugins.logicalCss()`                          | Проверяет использование логических CSS-свойств       | <a href="https://github.com/yuschick/stylelint-plugin-logical-css" target="_blank" rel="noopener noreferrer"><code>stylelint-plugin-logical-css</code></a>                                              |
| `plugins.mediaUseCustomMedia()`                 | Требует использования кастомных медиа-запросов       | <a href="https://github.com/csstools/stylelint-media-use-custom-media" target="_blank" rel="noopener noreferrer"><code>stylelint-media-use-custom-media</code></a>                                      |
| `plugins.noIndistinguishableColors()`           | Запрещает неразличимые цвета                         | <a href="https://github.com/ierhyna/stylelint-no-indistinguishable-colors" target="_blank" rel="noopener noreferrer"><code>stylelint-no-indistinguishable-colors</code></a>                             |
| `plugins.noNestedMedia()`                       | Запрещает вложенные медиа-запросы                    | <a href="https://github.com/dkrnl/stylelint-no-nested-media" target="_blank" rel="noopener noreferrer"><code>stylelint-no-nested-media</code></a>                                                       |
| `plugins.noUnresolvedModule()`                  | Проверяет разрешение импортов                        | <a href="https://github.com/niksy/stylelint-no-unresolved-module" target="_blank" rel="noopener noreferrer"><code>stylelint-no-unresolved-module</code></a>                                             |
| `plugins.noUnsupportedBrowserFeatures()`        | Проверяет поддержку CSS-функций целевыми браузерами  | <a href="https://github.com/ismay/stylelint-no-unsupported-browser-features" target="_blank" rel="noopener noreferrer"><code>stylelint-no-unsupported-browser-features</code></a>                       |
| `plugins.order()`                               | Настраивает порядок свойств и селекторов             | <a href="https://github.com/hudochenkov/stylelint-order" target="_blank" rel="noopener noreferrer"><code>stylelint-order</code></a>                                                                     |
| `plugins.prettier()`                            | Интегрирует Prettier                                 | <a href="https://github.com/prettier/stylelint-prettier" target="_blank" rel="noopener noreferrer"><code>stylelint-prettier</code></a>                                                                  |
| `plugins.scss()`                                | Настраивает линтинг SCSS                             | <a href="https://github.com/kristerkari/stylelint-scss" target="_blank" rel="noopener noreferrer"><code>stylelint-scss</code></a>                                                                       |
| `plugins.selectorNoEmpty()`                     | Запрещает пустые селекторы                           | <a href="https://github.com/ssivanatarajan/stylelint-selector-no-empty" target="_blank" rel="noopener noreferrer"><code>stylelint-selector-no-empty</code></a>                                          |
| `plugins.useNesting()`                          | Требует использования CSS-вложенности                | <a href="https://github.com/csstools/stylelint-use-nesting" target="_blank" rel="noopener noreferrer"><code>stylelint-use-nesting</code></a>                                                            |
| `plugins.vue()`                                 | Подключает поддержку Vue.js SFC                      | <a href="https://github.com/ota-meshi/stylelint-config-recommended-vue" target="_blank" rel="noopener noreferrer"><code>stylelint-config-recommended-vue</code></a>                                     |

## Миграция с v63

v64 - major-релиз: коллекции в опциях проверок теперь дополняют дефолты, а не
заменяют их.

| Было                                                      | Стало                                                               |
| --------------------------------------------------------- | ------------------------------------------------------------------- |
| `plugins.scss({ extends: ['custom'] })` заменял дефолтный | `extends` дополняется, `custom` применяется после дефолтного        |
| `plugins.useNesting({ plugins: ['custom'] })` заменял     | `plugins` дополняется, дубли убираются                              |
| `plugins.bem({ overrides: [...] })` заменял дефолтные     | overrides дополняются, пользовательские применяются после дефолтных |

Отключить конкретное дефолтное правило можно через `rules: { 'rule': null }`.
Общие настройки, которые должны перебивать всё, передавайте вторым аргументом
`defineConfig`.

## Миграция с v61

v62 - breaking-релиз: проверок по умолчанию больше нет, всё подключается явно.

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

  ```bash
  npx stylelint-find-new-rules
  ```

## Полезные ссылки

- [awesome-stylelint](https://github.com/stylelint/awesome-stylelint)
- [stylelint-scales](https://github.com/jeddy3/stylelint-scales)
- [stylelint-value-no-unknown-custom-properties](https://github.com/csstools/stylelint-value-no-unknown-custom-properties)
