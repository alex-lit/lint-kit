[![npm version](https://npmx.dev/api/registry/badge/version/@alexlit/config-prettier)](https://www.npmjs.com/package/@alexlit/config-prettier)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-prettier)](https://npmx.dev/package/@alexlit/config-prettier)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-prettier)](LICENSE)

# Prettier Configuration

Готовая конфигурация [Prettier](https://prettier.io/) с плагинами для
форматирования языков и форматов, которых Prettier не поддерживает из коробки
(PHP, SQL, шаблоны, shell-скрипты и т.д.), а также расширений для сортировки
JSON и утилит Tailwind CSS. Вместо того чтобы подключать и настраивать каждый
плагин вручную, соберите конфигурацию из готовых модулей.

Плагины модульные: по умолчанию ничего не включено - вы сами перечисляете нужные
в `defineConfig`.

## Установка

```sh
npm i @alexlit/config-prettier -D
```

## Быстрый старт

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([plugins.packageJson(), plugins.xml()]);
```

Каждый вызов `plugins.*()` - отдельный плагин. Добавьте только то, что нужно
проекту; полный список - в разделе [Плагины](#плагины).

Больше плагинов - просто допишите их в массив:

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([
  plugins.jsdoc(),
  plugins.mdc(),
  plugins.packageJson(),
  plugins.php(),
  plugins.pug(),
  plugins.ruby(),
  plugins.sh(),
  plugins.sortJson(),
  plugins.solidity(),
  plugins.sql(),
  plugins.tailwindcss(),
  plugins.xml(),
]);
```

## Настройка

### Настройки конкретного плагина

Чтобы переопределить настройки одного плагина, передайте объект в его вызов:

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([
  plugins.sortJson({ jsonRecursiveSort: false }),
  plugins.tailwindcss({ tailwindFunctions: ['cn', 'cva'] }),
]);
```

### Общие настройки Prettier

Второй аргумент `defineConfig` - общие опции Prettier. Он перебивает настройки
всех плагинов:

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([plugins.php()], {
  printWidth: 100,
  singleQuote: false,
});
```

## Плагины

| Плагин                  | Что делает                                      | Пакет                                             |
| ----------------------- | ----------------------------------------------- | ------------------------------------------------- |
| `plugins.jsdoc()`       | Нормализует JSDoc-комментарии                   | `prettier-plugin-jsdoc`                           |
| `plugins.mdc()`         | Форматирует MDC-документы (Nuxt Content)        | `prettier-plugin-mdc`                             |
| `plugins.packageJson()` | Сортирует ключи в package.json                  | `prettier-plugin-packagejson`                     |
| `plugins.php()`         | Форматирует PHP-файлы                           | `@prettier/plugin-php`                            |
| `plugins.pug()`         | Форматирует Pug-шаблоны с сортировкой атрибутов | `@prettier/plugin-pug`                            |
| `plugins.ruby()`        | Форматирует Ruby и ERB файлы                    | `@prettier/plugin-ruby` + `prettier-plugin-eruby` |
| `plugins.sh()`          | Форматирует shell-скрипты                       | `prettier-plugin-sh`                              |
| `plugins.sortJson()`    | Рекурсивно сортирует ключи JSON-объектов        | `prettier-plugin-sort-json`                       |
| `plugins.solidity()`    | Форматирует контракты Solidity                  | `prettier-plugin-solidity`                        |
| `plugins.sql()`         | Форматирует SQL-запросы                         | `prettier-plugin-sql`                             |
| `plugins.tailwindcss()` | Сортирует утилитарные классы Tailwind CSS       | `prettier-plugin-tailwindcss`                     |
| `plugins.xml()`         | Форматирует XML-файлы                           | `@prettier/plugin-xml`                            |

## Миграция с v23

v24 - breaking-релиз: плагинов по умолчанию больше нет, всё подключается явно.

| v23                            | v24                                           |
| ------------------------------ | --------------------------------------------- |
| `createConfig()`               | перечислите нужные плагины явно               |
| `createConfig({ php: true })`  | `defineConfig([plugins.php()])`               |
| `createConfig({ sql: false })` | просто не добавляйте `plugins.sql()` в список |
| `createConfig({}, options)`    | `defineConfig([...], options)`                |

Плагины, включённые по умолчанию в v23: `jsdoc`, `mdc`, `packagejson`, `pug`,
`sh`, `solidity`, `sort-json`, `xml`.

## Известные проблемы

- **tailwindcss** ранее конфликтовал с **jsdoc**
