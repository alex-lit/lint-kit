# ESLint Configuration

[![version](https://npmx.dev/api/registry/badge/version/@alexlit/config-eslint)](https://www.npmjs.com/package/@alexlit/config-eslint)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-eslint)](https://npmx.dev/package/@alexlit/config-eslint)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-eslint)](LICENSE)

Готовая конфигурация [ESLint](https://eslint.org/) в формате flat config:
настроенные правила для JavaScript, TypeScript, Vue.js, JSON, YAML, импортов,
Prettier и не только - всё, что обычно приходится настраивать вручную. Вместо
того чтобы подключать и настраивать каждый плагин по отдельности, соберите
конфигурацию из готовых модулей.

Плагины модульные: по умолчанию ничего не включено - вы сами перечисляете нужные
в `defineConfig`.

## Содержание

- [Установка](#установка)
- [Быстрый старт](#быстрый-старт)
- [Пример скриптов для package.json](#пример-скриптов-для-packagejson)
- [Плагины](#плагины)
- [Свой конфиг](#свой-конфиг)
- [Настройки Tailwind CSS](#настройки-tailwind-css)
  - [Форматирование классов](#форматирование-классов)
  - [Миграция с `eslint-plugin-tailwindcss`](#миграция-с-eslint-plugin-tailwindcss)
- [Правила с анализом типов](#правила-с-анализом-типов)
- [Prettier](#prettier)
- [Разработка](#разработка)
- [Миграция с v164](#миграция-с-v164)
- [Полезные ссылки](#полезные-ссылки)

## Установка

```bash
npm i @alexlit/config-eslint -D
```

## Быстрый старт

```js
// eslint.config.js
import { defineConfig, plugins } from '@alexlit/config-eslint';

export default defineConfig({
  plugins: [
    plugins.javascript(),
    plugins.typescript(),
    plugins.unicorn(),
    plugins.prettier(),
  ],
});
```

## Пример скриптов для package.json

```json
{ "scripts": { "lint:es": "eslint . --fix" } }
```

> [!NOTE]
>
> `plugins.javascript()` включает строгие правила для импортов: запрещает
> относительные импорты вида `..`/`.` , индексные импорты, расширения
> `.ts`/`.js` в путях и алиасы `~` в пользу `@`.

Каждый плагин возвращает массив блоков конфигурации. Передавайте фабрики прямо в
массив `plugins` - spread не нужен, вложенные массивы разворачиваются
автоматически. Добавьте только то, что нужно проекту; полный список - в разделе
[Плагины](#плагины).

> [!NOTE]
>
> `plugins.prettier()` должен быть последним среди пресетов - он отключает
> правила, конфликтующие с Prettier. Ваши настройки из `options` применяются
> после него и перебивают всё, поэтому не включайте туда форматирующие правила.

Больше плагинов - просто допишите их в массив. Пример:

```js
// eslint.config.js
import { defineConfig, plugins } from '@alexlit/config-eslint';

export default defineConfig({
  plugins: [
    // базовые
    plugins.deMorgan(),
    plugins.importX(),
    plugins.javascript(),
    plugins.jsdoc(),
    plugins.json(),
    plugins.perfectionist(),
    plugins.regexp(),
    plugins.sonar(),
    plugins.stylistic(),
    plugins.typescript(),
    plugins.unicorn(),

    // проектные
    plugins.pinia(),
    plugins.tanstackQuery(),
    plugins.unocss(),
    plugins.vitest(),
    plugins.vue(),
    plugins.vueAccessibility(),
    plugins.vueI18n(),
    plugins.zod(),

    // стилистика
    plugins.prettier(),
  ],

  // дополнительные правила
  options: { ignores: ['fixtures/**'], rules: { 'no-console': 'off' } },
});
```

## Плагины

| Плагин                            | Что делает                                    | Пакет                                                                                                           |
| --------------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `plugins.deMorgan()`              | Упрощает логические выражения                 | [`eslint-plugin-de-morgan`](https://github.com/azat-io/eslint-plugin-de-morgan)                                 |
| `plugins.importX()`               | Проверяет импорты и модули                    | [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x)                                     |
| `plugins.javascript()`            | Базовые правила JavaScript                    | [`@eslint/js`](https://eslint.org/)                                                                             |
| `plugins.jsdoc()`                 | Проверяет JSDoc-комментарии                   | [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)                                           |
| `plugins.json()`                  | Проверяет JSON, JSONC, JSON5 и YAML           | [`@eslint/json`](https://github.com/eslint/json)                                                                |
| `plugins.perfectionist()`         | Сортирует импорты, объекты, интерфейсы и типы | [`eslint-plugin-perfectionist`](https://perfectionist.dev)                                                      |
| `plugins.pinia()`                 | Проверяет Pinia-хранилища                     | [`eslint-plugin-pinia`](https://github.com/lisilinhart/eslint-plugin-pinia)                                     |
| `plugins.prettier()`              | Отключает правила, конфликтующие с Prettier   | [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)                                  |
| `plugins.regexp()`                | Проверяет регулярные выражения                | [`eslint-plugin-regexp`](https://github.com/ota-meshi/eslint-plugin-regexp)                                     |
| `plugins.sonar()`                 | Проверяет код по правилам SonarJS             | [`eslint-plugin-sonarjs`](https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md) |
| `plugins.stylistic()`             | Проверяет форматирование и стиль кода         | [`@stylistic/eslint-plugin`](https://eslint.style/)                                                             |
| `plugins.tailwindcss()`           | Проверяет и форматирует классы Tailwind CSS   | [`eslint-plugin-better-tailwindcss`](https://github.com/schoero/eslint-plugin-better-tailwindcss)               |
| `plugins.tanstackQuery()`         | Проверяет TanStack Query                      | [`@tanstack/eslint-plugin-query`](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query)            |
| `plugins.typescript()`            | Проверяет TypeScript без анализа типов        | [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint)                                   |
| `plugins.typescriptTypeChecked()` | Проверяет TypeScript с анализом типов         | [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint)                                   |
| `plugins.unicorn()`               | Проверяет код по правилам unicorn             | [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)                                |
| `plugins.unocss()`                | Проверяет UnoCSS                              | [`@unocss/eslint-config`](https://unocss.dev/integrations/eslint)                                               |
| `plugins.vitest()`                | Проверяет тесты Vitest                        | [`@vitest/eslint-plugin`](https://github.com/veritem/eslint-plugin-vitest)                                      |
| `plugins.vue()`                   | Проверяет Vue.js-компоненты                   | [`eslint-plugin-vue`](https://eslint.vuejs.org/rules/)                                                          |
| `plugins.vueAccessibility()`      | Проверяет доступность Vue.js-компонентов      | [`eslint-plugin-vuejs-accessibility`](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/)            |
| `plugins.vueI18n()`               | Проверяет Vue.js I18n                         | [`@intlify/eslint-plugin-vue-i18n`](https://vue-i18n.intlify.dev/)                                              |
| `plugins.zod()`                   | Проверяет Zod-схемы                           | [`eslint-plugin-zod`](https://github.com/marcalexiei/eslint-zod/tree/main/plugins/eslint-plugin-zod)            |

## Свой конфиг

Любая фабрика принимает необязательный flat-конфиг, который добавляется после
предустановленного. Это позволяет точечно переопределять правила, `settings`,
`files` и другие опции, не отказываясь от пресета:

```js
// eslint.config.js
import { defineConfig, plugins } from '@alexlit/config-eslint';

export default defineConfig({
  plugins: [
    plugins.javascript(),
    plugins.unicorn({ rules: { 'unicorn/no-null': 'off' } }),
    plugins.vue([
      { files: ['**/*.vue'], rules: { 'vue/max-lines-per-block': 'off' } },
    ]),
  ],
});
```

Можно передать как один объект, так и массив блоков. Так как конфиг добавляется
последним, он имеет более высокий приоритет, чем настройки пресета.

## Настройки Tailwind CSS

По умолчанию `plugins.tailwindcss()` использует путь `./styles/tailwind.css`.
Чтобы указать другой CSS-файл с конфигурацией Tailwind CSS, передайте обычный
flat-конфиг с настройками плагина:

```js
// eslint.config.js
import path from 'node:path';

import { defineConfig, plugins } from '@alexlit/config-eslint';

export default defineConfig({
  plugins: [
    plugins.tailwindcss({
      settings: {
        'better-tailwindcss': {
          entryPoint: path.resolve(import.meta.dirname, 'src/main.css'),
        },
      },
    }),
  ],
});
```

### Форматирование классов

`plugins.tailwindcss()` сортирует классы и переносит их по вариантам. Для Vue
статический `class` преобразуется в `:class` с шаблонным литералом, чтобы
Prettier не схлопывал переносы обратно.

`plugins.tailwindcss()` из `@alexlit/config-prettier` сортирует только `@apply`
в CSS/SCSS/LESS и не конфликтует с ESLint-форматированием разметки.

Атрибуты `ui` и `:ui` из Nuxt UI добавлены в `selectors`, включая объектные
значения `:ui`.

`no-unknown-classes` по умолчанию выключен: Nuxt UI и кастомные классы дают
ложные срабатывания. Включить его можно через переданный конфиг:

```js
plugins.tailwindcss({
  rules: { 'better-tailwindcss/no-unknown-classes': 'warn' },
}),
```

Для Vue отключаются `vue/no-useless-v-bind`, `vue/prefer-separate-static-class`
и `vue/static-class-names-order`: они конфликтуют с преобразованием `class` в
`:class` и переносами классов.

### Миграция с `eslint-plugin-tailwindcss`

| Старое правило                                   | Новое правило                                              |
| ------------------------------------------------ | ---------------------------------------------------------- |
| `tailwindcss/classnames-order`                   | `better-tailwindcss/enforce-consistent-class-order`        |
| `tailwindcss/enforces-canonical-classname`       | `better-tailwindcss/enforce-canonical-classes`             |
| `tailwindcss/enforces-negative-arbitrary-values` | нет прямого аналога                                        |
| `tailwindcss/enforces-shorthand`                 | `better-tailwindcss/enforce-shorthand-classes`             |
| `tailwindcss/important-modifier-suffix`          | `better-tailwindcss/enforce-consistent-important-position` |
| `tailwindcss/no-arbitrary-value`                 | `better-tailwindcss/no-restricted-classes`                 |
| `tailwindcss/no-contradicting-classname`         | `better-tailwindcss/no-conflicting-classes`                |
| `tailwindcss/no-custom-classname`                | `better-tailwindcss/no-unknown-classes`                    |
| `tailwindcss/no-unnecessary-arbitrary-value`     | `better-tailwindcss/enforce-canonical-classes`             |

Настройка `settings.tailwindcss.cssConfigPath` заменена на
`settings['better-tailwindcss'].entryPoint`.

## Правила с анализом типов

Правила (`no-floating-promises`, `no-misused-promises`, `await-thenable`,
`no-unsafe-*`, `switch-exhaustiveness-check`, `no-unnecessary-condition`, …)
требуют информации о типах, из-за чего линтинг замедляется. По умолчанию они не
включены.

Чтобы их включить, замените `plugins.typescript()` на
`plugins.typescriptTypeChecked()`:

```js
// eslint.config.js
import { defineConfig, plugins } from '@alexlit/config-eslint';

export default defineConfig({
  plugins: [
    plugins.javascript(),
    plugins.typescriptTypeChecked(), // вместо plugins.typescript()
    plugins.prettier(),
  ],
});
```

> [!NOTE]
>
> `plugins.typescriptTypeChecked()` требует `tsconfig.json` в корне проекта
> (используется `projectService`, поэтому держите `tsconfig.json` и
> `tsconfig.node.json` в одном корне, если нужно). Используйте его вместо
> `plugins.typescript()`, а не вместе с ним.

## Prettier

`plugins.prettier()` отключает правила ESLint, конфликтующие с Prettier. Сам
Prettier он **не запускает**.

Prettier запускайте отдельным шагом: через редактор, `prettier --check`,
`prettier --write` или lint-staged. `eslint-plugin-prettier` в пакет не входит.

`plugins.prettier()` должен быть последним среди пресетов: он отключает правила,
которые уже покрывает Prettier. Ваши настройки из `options` применяются после
него и перебивают всё, поэтому не включайте туда форматирующие правила.

## Разработка

Просмотр итоговой конфигурации:

```bash
# Запуск локального инспектора (dev-сервер)
npm run inspect

# Сборка статичной версии инспектора
npm run inspect:build
```

## Миграция с v164

v165 - breaking-релиз: `defineConfig` принимает один объект вместо массива.

| v164                    | v165                                 |
| ----------------------- | ------------------------------------ |
| `defineConfig()`        | `defineConfig()`                     |
| `defineConfig(configs)` | `defineConfig({ plugins: configs })` |

Свои блоки конфигурации, которые раньше лежали в массиве, перенесите в
`options`. Spread (`...`) для фабрик больше не нужен.

## Полезные ссылки

- [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
- [ESLint - Documentation](https://eslint.org/docs/latest/)
- [ESLint - Configure Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)
